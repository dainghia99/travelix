const apiTourHot = 'http://localhost:3000/tourhot';
const apiGoiUuDai = 'http://localhost:3000/goiUuDai';
const apihottrend = 'http://localhost:3000/hottrend';

const deleteTourHot = (id) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(apiTourHot + '/' + id, option);
    alert('Xóa thành công!')
}

const renderTourHot = (api) => {

    const renderUi = (data) => {
        const html = data.map(item => {
            return `
                <div class="content-item">
                    <img src="${item.image}" alt="anh">
                    <h1>${item.name}</h1>
                    <button onclick="deleteTourHot(${item.id})" class="btn-delete">Xóa</button>
                </div>
            `
        })
        document.getElementById('content-items-tourhot').innerHTML = html.join('');
    }

    fetch(api)
        .then(res => res.json())
        .then(data => {
            renderUi(data)
        })
        .catch(error => console.error(error));
}

const deleteGoiUuDai = (id) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(apiGoiUuDai + '/' + id, option);
    alert('Xóa thành công!')
}

const renderGoiUuDai = (api) => {

    const renderUi = (data) => {
        const html = data.map(item => {
            return `
                <div class="content-item">
                    <img src="${item.image}" alt="anh">
                    <h1>${item.name}</h1>
                    <button onclick="deleteGoiUuDai(${item.id})" class="btn-delete">Xóa</button>
                </div>
            `
        })
        document.getElementById('content-items-goiuudai').innerHTML = html.join('');
    }

    fetch(api)
        .then(res => res.json())
        .then(data => {
            renderUi(data)
        })
        .catch(error => console.error(error));
}

const deleteHotTrend = (id) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(apihottrend + '/' + id, option);
    alert('Xóa thành công!')
}

const renderHotTrend = (api) => {

    const renderUi = (data) => {
        const html = data.map(item => {
            return `
                <div class="content-item">
                    <img src="${item.image}" alt="anh">
                    <h1>${item.address}</h1>
                    <button onclick="deleteHotTrend(${item.id})" class="btn-delete">Xóa</button>
                </div>
            `
        })
        document.getElementById('content-items-hottrend').innerHTML = html.join('');
    }

    fetch(api)
        .then(res => res.json())
        .then(data => {
            renderUi(data)
        })
        .catch(error => console.error(error));
}

function main() {
    renderTourHot(apiTourHot);
    renderGoiUuDai(apiGoiUuDai);
    renderHotTrend(apihottrend);
}
main();