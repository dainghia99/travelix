const loadUsers = document.querySelector('#tbody');
const api = 'http://localhost:3000/users';

const xuLySuKienXoa = (id) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(api + '/' + id, option);
    alert('Xóa thành công!')
}

const renderUser = (api) => {

    const  render = (data) => {
        const html = data.map((item) => {
            return `
                <div class="loadUsers">
                    <tr class="user-item">
                        <td class="user-items">${item.id}</td>
                        <td class="user-items">${item.nickName}</td>
                        <td class="user-items">${item.password}</td>
                        <td class="user-items">${item.name}</td>
                        <td class="user-items">${item.email}</td>
                        <td class="user-items">${item.phoneNumber}</td>
                        <td class="user-items">
                            <button onclick="xuLySuKienXoa(${item.id})" id="btn">Xóa</button>
                        </td>
                    </tr>
                    <tr>  </tr>
                    <tr>  </tr>
                    <tr>  </tr>
                    <tr>  </tr>
                    <tr>  </tr>
                </div>
            `
        })
        loadUsers.innerHTML = html.join('')
    }

    fetch(api)
        .then(res => res.json())
        .then(data => {
            render(data);
        })
}

function main() {
    renderUser(api);
}
main();