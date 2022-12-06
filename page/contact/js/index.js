const btnGui = document.getElementById('btn-contact-item');
btnGui.onclick = () => {
    const fullName = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const massages = document.querySelector('#message').value;

    const checkEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    if (fullName === '' && email === '' && title === '' && massages === '') {
        alert('Vui lòng điền đầy đủ thông tin!')
    } else if (fullName === '') {
        alert('Tên không được bỏ trống!')
    }
    else if (email === '') {
        alert('Email không được bỏ trống!')
    } else if (!checkEmail.test(email)) {
        alert('Email không đúng định dạng!')
    } else if (title === '') {
        alert('Bạn chưa nhập tiêu đề!')
    } else if (massages === '') {
        alert('Bạn chưa nhập nội dung massages!')
    } else {
        alert('Gửi thành công!')
    }
}