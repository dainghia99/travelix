
const api = 'http://localhost:3000/hottrend';

function guiDuLieuLenApi() {
    const gui = document.getElementById('gui');
    gui.onclick = () => {
        let id = document.querySelector('input[name="id"').value;
        let name = document.querySelector('input[name="name"').value;
        let image = document.querySelector('input[name="image"').value;
        let price = document.querySelector('input[name="price"').value;
        let address = document.querySelector('input[name="address"').value;

        const data = {
            id,
            name,
            image,
            price,
            address
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
        document.querySelector('input[name="address"').value = ''
        alert('Thêm thành công!')
    }
}

function main() {
    guiDuLieuLenApi();
}
main();