Validator({
    form: '#form-dangky',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#user'),
        Validator.isRequired('#fullname'),
        Validator.isEmail('#email'),
        Validator.isPhoneNumber('#phone_number'),
        Validator.lengthPassword('#password', 6, 12),
        Validator.isConfirmation('#password_confirmation', function() {
            return document.querySelector('#password').value;
        })
    ]
});

const api = 'http://localhost:3000/users';

const pushApiToUser = (api, data) => {
    
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(api, option)
}

const xuLyHanhDongSubmitForm = (data) => {
    const fullName = document.querySelector('input[name="fullname"]').value
    const user = document.querySelector('input[name="user"]').value
    const email = document.querySelector('input[name="email"]').value
    const phoneNumber = document.querySelector('input[name="phone_number"]').value
    const password = document.querySelector('input[name="password"]').value
    const passwordConfirmation = document.querySelector('input[name="password_confirmation"]').value

    if (fullName === '' || user === '' || email === '' || phoneNumber === '' || password === '' || passwordConfirmation === '') {
        alert('Vui lòng điền đầy đủ thông tin!');
    } else {
        if (password === passwordConfirmation) {
            fetch(api)
                .then(res => res.json())
                .then((dataApi) => {
                    const kq = dataApi.filter((item) => data.nickName === item.nickName)
                    return kq;
                })
                .then((kq) => {
                    if (kq.length > 0) {
                        alert('Tên tài khoản đã tồn tại vui lòng sử dụng tên tài khoản khác!')
                    } else {
                        pushApiToUser(api, data);
                        window.location.href = 'http://localhost:5500'
                        alert('Đăng ký thành công!');
                    }
                })
        }
    }
}

const pushApiUsers = () => {
    const btnDangKy = document.querySelector('.form-submit');
    btnDangKy.onclick = () => {
        const fullName = document.querySelector('input[name="fullname"]').value
        const user = document.querySelector('input[name="user"]').value
        const email = document.querySelector('input[name="email"]').value
        const phoneNumber = document.querySelector('input[name="phone_number"]').value
        const password = document.querySelector('input[name="password"]').value
        
        const data = {
            nickName: user,
            name: fullName,
            email,
            phoneNumber,
            password
        }

        xuLyHanhDongSubmitForm(data);
    }
}

function main() {
    pushApiUsers();
}
main();