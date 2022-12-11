const getValueInputForm = (user) => {
    const name = document.querySelector('input[name=fullname]');
    const email = document.querySelector('input[name=email]');
    const phoneNumber = document.querySelector('input[name=phone-number]');
    if (user) {
        name.value = user.name
        email.value = user.email
        phoneNumber.value = user.phoneNumber
    }
}

const xuLyFormDaDangNhap = async () => {
    const res = await fetch('http://localhost:3000/xulyformdattour')
    const data = await res.json()

    if(data.length > 0) {
        const kq = data[0];
        getValueInputForm(kq);
    }
}

Validator({
    form: '#form-dattour',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#fullname'),
        Validator.isEmail('#email'),
        Validator.isRequired('#tour'),
        Validator.isPhoneNumber('#phone-number'),
    ],
    onSubmit(data, isOk) {
        console.log(data);
        if (isOk) {
            alert('Đặt Tour Thành Công!')
        } else {
            alert('Vui lòng điền đầy đủ thông tin các mục ở trên');
        }

    }
});

xuLyFormDaDangNhap();