function Validator(options) {

    function validate(inputElement, item) {
        const errorMessage = item.test(inputElement.value);
        const parentInput = inputElement.parentElement;
        const spanMesage = parentInput.querySelector(options.errorSelector);
        
        if (errorMessage) {
            spanMesage.innerText = errorMessage;
            parentInput.classList.add('invalid');
        } else {
            spanMesage.innerText = '';
            parentInput.classList.remove('invalid');
        }

        return !errorMessage;
    }

    const formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = (e) => {
            e.preventDefault();
            let isOK = true;

            options.rules.forEach((rule) => {
                const inputElement = document.querySelector(rule.selector);
                const isValid = validate(inputElement, rule);

                if (!isValid) {
                    isOK = false;
                }

            })

            if (isOK) {
                let isSuggets = true;
                if (typeof options.onSubmit === 'function') {
                    const enableInput = formElement.querySelectorAll('[name]:not([disabled])');
                    const formValues = Array.from(enableInput).reduce((acc, formValue ) => {
                        return (acc[formValue.name] = formValue.value) && acc;
                    }, {});
                    options.onSubmit(formValues, isSuggets);
                }
            } else {
                isSuggets = false;
                options.onSubmit(undefined, isSuggets);
            }

        }

        options.rules.forEach((item) => {
            const inputElement = document.querySelector(item.selector);
            if (inputElement) {
                inputElement.onblur = () => {
                    validate(inputElement, item);
                }

                inputElement.oninput = function() {
                    const parentInput = inputElement.parentElement;
                    const spanMesage = parentInput.querySelector('.form-message')
                    spanMesage.innerText = '';
                    parentInput.classList.remove('invalid');
                };

            }
        })
    }

}

// ?????nh ngh??a rules
Validator.isRequired = function(selector) {
    return {
        selector,
        test(value) {
            return value.trim() === '' ? 'Vui l??ng nh???p tr?????ng n??y' : undefined;
        }
    };
}

Validator.isEmail = function(selector) {
    return {
        selector,
        test(value) {
            const isOK = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value === '') {
                return 'Vui l??ng nh???p tr?????ng n??y';
            } else {
                return isOK.test(value) ? undefined : 'Email kh??ng h???p l???!' ;
            }
        }
    };
}

Validator.lengthPassword = function(selector, min, max) {
    return {
        selector,
        test(value) {
            if (value === '') {
                return 'Vui l??ng nh???p tr?????ng n??y';
            } else if (value.length < min || value.length > max) {
                return `M???t kh???u ph???i c?? ??t nh???t ${min} k?? t??? v?? t???i ??a l?? ${max} k?? t???!` ;
            }
        }
    };
}

Validator.isConfirmation = function(selector, getValue) {
    return {
        selector,
        test(value) {
            if (value === '') {
                return 'Vui l??ng nh???p tr?????ng n??y!';
            } else {
                return value === getValue() ? undefined : 'M???t kh???u b???n v???a nh???p kh??ng kh???p!';
            }
        }
    };
}

Validator.isPhoneNumber = function(selector) {
    return {
        selector,
        test(value) {
            const isOK = /((09|03|07|08|05)+([0-9]{8})\b)/g
            if (value === '') {
                return 'Vui l??ng nh???p tr?????ng n??y!'
            } else {
                if (isOK.test(value)) {
                    return undefined
                } else {
                    return 'S??? ??i???n tho???i c???a b???n kh??ng ????ng ?????nh d???ng!'
                }
            }
        }
    };
}