const api = 'http://localhost:3000/tourhot';

function guiDuLieuLenApi() {
    const gui = document.getElementById('gui');
    gui.onclick = () => {
        let id = document.querySelector('input[name="id"').value;
        let name = document.querySelector('input[name="name"').value;
        let dob = document.querySelector('input[name="dob"').value;
        let image = document.querySelector('input[name="image"').value;
        let price = document.querySelector('input[name="price"').value;

        const data = {
            id,
            name,
            dob,
            image,
            price
        }

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(api, option)
        document.querySelector('input[name="id"').value = ''
        document.querySelector('input[name="name"').value = ''
        document.querySelector('input[name="dob"').value = ''
        document.querySelector('input[name="image"').value = ''
        document.querySelector('input[name="price"').value = ''
        alert('Thêm thành công!')
    }
}

function main() {
    guiDuLieuLenApi();
}
main();