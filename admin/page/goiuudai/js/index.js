
const api = 'http://localhost:3000/goiUuDai';

function guiDuLieuLenApi() {
    const gui = document.getElementById('gui');
    gui.onclick = () => {
        let id = document.querySelector('input[name="id"').value;
        let name = document.querySelector('input[name="name"').value;
        let image = document.querySelector('input[name="image"').value;
        let price = document.querySelector('input[name="price"').value;
        let decription = document.querySelector('input[name="decription"').value;

        const data = {
            id,
            name,
            image,
            price,
            decription
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
        document.querySelector('input[name="image"').value = ''
        document.querySelector('input[name="price"').value = ''
        document.querySelector('input[name="decription"').value = ''
        alert('Thêm thành công!')
    }
}

function main() {
    guiDuLieuLenApi();
}
main();