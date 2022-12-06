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
    }

    const formElement = document.querySelector(options.form);
    if (formElement) {
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

// Định nghĩa rules
Validator.isRequired = function(selector) {
    return {
        selector,
        test(value) {
            return value.trim() === '' ? 'Vui lòng nhập trường này' : undefined;
        }
    };
}

Validator.isEmail = function(selector) {
    return {
        selector,
        test(value) {
            const isOK = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value === '') {
                return 'Vui lòng nhập trường này';
            } else {
                return isOK.test(value) ? undefined : 'Email không hợp lệ!' ;
            }
        }
    };
}

Validator.lengthPassword = function(selector, min, max) {
    return {
        selector,
        test(value) {
            if (value === '') {
                return 'Vui lòng nhập trường này';
            } else if (value.length < min || value.length > max) {
                return `Mật khẩu phải có ít nhất ${min} ký tự và tối đa là ${max} ký tự!` ;
            }
        }
    };
}

Validator.isConfirmation = function(selector, getValue) {
    return {
        selector,
        test(value) {
            if (value === '') {
                return 'Vui lòng nhập trường này!';
            } else {
                return value === getValue() ? undefined : 'Mật khẩu bạn vừa nhập không khớp!';
            }
        }
    };
}