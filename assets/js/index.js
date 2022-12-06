const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const apiTourHot = 'http://localhost:3000/tourhot';
const apiGoiUuDai = 'http://localhost:3000/goiUuDai';
const apiHotTrend = 'http://localhost:3000/hottrend';

function renderTrangChu(api, render, setBackground) {

    fetch(api)
        .then(res => res.json())
        .then((data) => {
            render(data);
            setBackground(data);
        })
        .catch((e) => {
            console.log(`Không thể kết nối API: ${e}`);
        })
}

function renderTourHot(data) {
    const html = data.map((item) => {
        return `
            <div class="col-xl-4 col-lg-4">
                <div class="tour-items${item.id}" id="linktourhot-${item.id}">
                    <div class="tour-item">
                        <p class="dob">${item.dob}</p>
                        <div class="tour-item-content">
                            <h1>${item.name}</h1>
                            <h3 class="tour-item__price">Từ $ ${item.price}</h3>
                            <div class="xephang">
                                <i class="xephang1 fa-solid fa-star"></i>
                                <i class="xephang2 fa-solid fa-star"></i>
                                <i class="xephang3 fa-solid fa-star"></i>
                                <i class="xephang4 fa-solid fa-star"></i>
                                <i class="xephang5 fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="btn-content">
                            <button onclick="handelEventChiTiet(${item.id})" type="button" class="btn-content-item"><a href="http://127.0.0.1:5500/page/trangchitiettourhot/trangchitiettourhot.html" id="btn-xemthem">XEM THÊM...</a></button>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
    $('#tourhot').innerHTML = html.join('');
}

function setBackgroundTourHot(data) {
    data.forEach(element => {
        $(`.tour-items${element.id}`).style.backgroundImage = `url(${element.image})`;
        $(`.tour-items${element.id}`).classList.add('active');
    });
}

function renderGoiUuDai(data) {
    const html = data.map((item) => {
        return `
            <div class="container__items col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="pakage-sale-itmes">
                    <div class="pakage-sale-${item.id}">
                        <div class="btn-sale">
                            <button class="btn-sale-pagke"><a href="http://127.0.0.1:5500/page/dattour/dattour.html">ĐẶT NGAY</a></button>
                        </div>
                    </div>
                    <div class="pakage-item-right">
                        <div class="pakage-right-header-item">
                            <div class="pakage-item-right-top">
                                <div class="pakage-header-title">
                                    <h1>$ ${item.price}</h1>
                                    <p>Mỗi Đêm</p>
                                </div>
                                <div class="xephang page-item-right-ranks">
                                    <i class="xephang1 fa-solid fa-star"></i>
                                    <i class="xephang2 fa-solid fa-star"></i>
                                    <i class="xephang3 fa-solid fa-star"></i>
                                    <i class="xephang4 fa-solid fa-star"></i>
                                    <i class="xephang5 fa-solid fa-star"></i>
                                </div>
                                <p class="decription">${item.decription}</p>
                                <div class="pakage-right-header-img">
                                    <img src="./assets/img/ofi1.webp" alt="anh">
                                    <img src="./assets/img/ofi2.webp" alt="anh">
                                    <img src="./assets/img/ofi3.webp" alt="anh">
                                </div>
                            </div>
                            <a class="mota" href="http://127.0.0.1:5500/page/trangchitietgoiuudai/trangchitietgoiuudai.html"><h1 class="title-docthem">Đọc Thêm</h1></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
    $('#goiUuDai').innerHTML = html.join('')
}

function setBackgroundGoiUuDai(data) {
    data.forEach(element => {
        $(`.pakage-sale-${element.id}`).style.backgroundImage = `url(${element.image})`;
        $(`.pakage-sale-${element.id}`).classList.add('pakage-item-left');
    });
}

function renderHotTrend(data) {
    const html = data.map((item) => {
        return `
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="trend-item">
                    <div class="trend-item-left">
                        <img id="trend-item-left-img" src="${item.image}" alt="anh">
                    </div>
                    <div class="trend-item-right">
                        <a href="http://localhost:5500/page/trangchitiethottrend/trangchitiethottrend.html" class="trend-item-right-header">
                            <h4>${item.name}</h4>
                        </a>
                        <p class="trend-item-right-price">Form $ ${item.price}</p>
                        <p class="trend-item-right-decription">${item.address}</p>
                    </div>
                </div>
            </div>
        `
    });
    $('#hottrend').innerHTML = html.join('')
}

const setBackgroundHotTrend = () => {
    
}

function hideLiSearch() {
    $('.show-search').style.display = "none";
    let search = $('input[name="search"]')
    search.style.display = "none";
}   

function search() {

    function rederSearchIntourHot(data) {
        const searchIcon = document.querySelector('.seach-icon-nav .header-nav-search__icon');
        const html = data.map((item) => {
            return `
                <li onclick="hideLiSearch()" class="search-item-show"><a id="sreach-a" href="#linktourhot-${item.id}">${item.name}</a></li>
            `
        })

        $('#search-items-show').innerHTML = html.join('');
        $('.show-search').style.display = "block";
        
        searchIcon.onclick = function () {
            $('.show-search').style.display = "none";
        }

    }

    fetch(apiTourHot)
        .then(res => res.json())
        .then(data => {
            let search = $('input[name="search"]')
            search.oninput = (e) => {
                let userSearch = data.filter(item => {
                    return item.name.toLowerCase().includes(e.target.value.toLowerCase())
                })
                rederSearchIntourHot(userSearch);
            }
        })
}

const xuLyDuLieuDaDangNhap = () => {
    fetch('http://localhost:3000/xulydadangnhap')
        .then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                document.querySelector('.header__top-right').classList.remove('header__top-right-affter');
                document.querySelector('.header__top-right').style.display = 'none';
                document.querySelector('.header__top-user').style.display = 'flex';
            }
        })
}

const xuLySuKienDangXuat = () => {
    const btnDangXuat = document.getElementById('logout');
    btnDangXuat.onclick = () => {
        document.querySelector('.header__top-right').classList.add('header__top-right-affter');
        document.querySelector('.header__top-right').style.display = 'flex';
        document.querySelector('.header__top-user').style.display = 'none';
        const option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:3000/xulydadangnhap' + '/' + 1, option);
        
        fetch('http://localhost:3000/xulyformdattour')
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    const userId = data[0].id
                    const option2 = {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    fetch('http://localhost:3000/xulyformdattour' + '/' + userId, option2);
                }
            })
    }
}

function main() {
    renderTrangChu(apiTourHot, renderTourHot, setBackgroundTourHot);
    renderTrangChu(apiGoiUuDai, renderGoiUuDai, setBackgroundGoiUuDai);
    renderTrangChu(apiHotTrend, renderHotTrend, setBackgroundHotTrend);
    search();
    xuLyDuLieuDaDangNhap();
    xuLySuKienDangXuat();
}
main();