Validator({
    form: '#form-login',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#user'),
        Validator.lengthPassword('#password', 6, 12),
    ]
});

const api = 'http://localhost:3000/users';

const kiemTraDuLieu = (data, uname, pass) => {
    const kq = data.filter((item) => {
        return item.nickName === uname && item.password === pass
    })
    if (kq.length > 0) {
        const xuLyDuLieu = {
            isOk: true,
        }
        
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(xuLyDuLieu)
        }
        
        fetch('http://localhost:3000/xulydadangnhap', option)
        
        const option2 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kq[0])
        }
        fetch('http://localhost:3000/xulyformdattour', option2)
        window.location.href = 'http://localhost:5500';
        alert('Đăng nhập thành công!');
    } else {
        if (uname === '' && pass === '') {
            alert('Vui lòng điền đầy đủ thông tin!');
        } else {
            alert('Tài khoản hoặc mật khẩu không chính xác!');
        }
    }
}

const xuLyDuLieu = (uname, pass) => {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            kiemTraDuLieu(data, uname, pass);
        })
}

const kiemTraDangNhap = () => {
    const formSubmit = document.querySelector('.form-submit');

    formSubmit.onclick = () => {
        const userName = document.querySelector('input[name="user"').value
        const passWord = document.querySelector('input[name="password"]').value
        xuLyDuLieu(userName, passWord);

    }
}

function main() {
    kiemTraDangNhap();
}
main();