<script>
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const apiTourHot = 'http://localhost:3000/tourhot';
    const apiGoiUuDai = 'http://localhost:3000/goiUuDai';
    const apihottrend = 'http://localhost:3000/hottrend';

    function renderTrangChu(api, callBack, setBackground) {

        fetch(api)
            .then(res => res.json())
            .then((data) => {
                callBack(data);
                setBackground(data);
            })
            .catch((e) => {
                console.log(`Không thể kết nối API: ${e}`);
            })
    }

    function renderTourHot(data) {
        const html = data.map((item) => {
            return `
                <div class="col-xl-4">
                    <div class="tour-items${item.id}">
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
                                <button class="btn-content-item">XEM THÊM...</button>
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
            $(`.tour-items${element.id}`).classList.add('bgrImg');
        });
    }

    function renderGoiUuDai(data) {
        const html = data.map((item) => {
            return `
                <div class="container__items col-xl-6">
                    <div class="pakage-sale-itmes">
                        <div class="pakage-sale-${item.id}">
                            <div class="btn-sale">
                                <button class="btn-sale-pagke">ĐẶT NGAY</button>
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
                                    
                                </div>
                                <a class="mota" href="#"><h1 class="title-docthem">Đọc Thêm</h1></a>
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
                <div class="col-xl-3">
                    <div class="trend-item">
                        <div class="trend-item-left">
                            <img id="trend-item-left-img" src="${item.image}" alt="anh">
                        </div>
                        <div class="trend-item-right">
                            <a href="#" class="trend-item-right-header">
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

    function setBackgroundHotTrend(data) {
        
    }

    function main() {
        renderTrangChu(apiTourHot, renderTourHot, setBackgroundTourHot);
        renderTrangChu(apiGoiUuDai, renderGoiUuDai, setBackgroundGoiUuDai);
        renderTrangChu(apihottrend, renderHotTrend, setBackgroundHotTrend);
    }
    main();

</script>

<template>
    <div class="body">
        <div class="container">
            <h1 class="body-title">Các Tour "Hot" Hiện Nay</h1>
            <div class="tour-lists">
                <div class="row" id="tourhot">
                    
                </div>
            </div>
        </div>
        <div class="container">
            <h1 class="body-title">Gói ưu đãi</h1>
            <div class="row" id="goiUuDai">
                
            </div>
        </div>
        <div class="container">
            <h1 class="body-title">HOT TRTEND</h1>
            <div class="container">
                <div class="trend-content">
                    <div class="row" id="hottrend">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.tour-content {
    margin-bottom: 80px;
}

.tour-content-title {
    font-size: 32px;
    color: #000;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
}

.tour-content-decription {
    font-size: 24px;
    color: #919191;
    font-style: italic;
}
.tour-content-decription {
    text-align: center;
}

.tour {
    margin-top: 60px;
}

.bgrImg {
    margin-bottom: 24px;
    height: 475px;
    background-size: cover;
    background-repeat: no-repeat;
}

.tour-lists {
    margin-bottom: 80px;
}

.tour-item {
    height: 100%;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: rgba(49, 18, 75, .55);
}

.dob {
    line-height: 26px;
    width: 210px;
    height: 26px;
    background-color: orange;
    border-radius: 20px;
    text-align: center;
}

.tour-item-title {
    display: flex;
    justify-content: center;
    align-items: center;
}

.tour-item-content h1 {
    font-size: 59px;
    line-height: 59px;
    font-weight: 700;
}

.tour-item-content h3 {
    font-size: 16px;
    text-align: center;
}

.xephang {
    margin-top: 12px;
    display: flex;
    justify-content: center;
    font-size: 18px;
}

.xephang1 {
    color: #ffeb8d;
}

.xephang2 {
    color: #fed46b;
}

.xephang3 {
    color: #fbb53d;
}

.xephang4 {
    color: #fa9e1b;
}

.btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-content-item {
    color: white;
    outline: none;
    width: 140px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-image: linear-gradient(45deg, #f99d1d, #8e50fe);
} 

.btn-content-item:hover {
    background-image: linear-gradient(45deg, #8e50fe, #f99d1d);
    transition: ease 0.3s;
}

/* Gói uu đãi */
.pakage-sale {
    background-color: #f3f6f9;
    margin-bottom: 80px;
}

.container__items {
    margin-bottom: 30px;
}

.pakage-sale-itmes {
    display: flex;
    gap: 0 16px;
    height: 295px;
}

.pakage-item-left {
    width: 50%;
    height: 100%;
    /* background-image: url('/assets/img/offersbg1.webp'); */
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.btn-sale {
    height: 93%;
    display: flex;
    align-items: flex-end;
}

.pakage-sale h1 {
    font-size: 32px;
    color: #000;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
}

.btn-sale-pagke {
    outline: none;
    border: none;
    width: 170px;
    height: 38px;
    background-color: orange;
    font-size: 17px;
    font-weight: 700;
    color: white;
}

.btn-sale-pagke:hover {
    opacity: 0.9;
}

.pakage-header-title h1 {
    margin: 0;    
    font-size: 36px;
    color: orange;
}

.pakage-item-right {
    width: 50%;
    height: 100%;
}

.pakage-header-title {
    display: flex;
    gap: 0 5px;
    align-items: center;
}

.pakage-header-title p {
    margin-bottom: -13px;
    font-size: 14px;
    color: #919191;
    margin-left: 5px;
    font-weight: 600;
}

.page-item-right-ranks {
    justify-content: flex-start;
    margin-top: 5px;
    font-size: 24px;
}

.pakage-right-header-item {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.pakage-right-header-item .decription {
    color: #000;
}
.pakage-right-header-item-img {
    display: flex;
    align-items: center;
    gap: 0 24px;
}

.pakage-right-header-item h3 {
    color: #000;
    font-size: 18px;
    font-weight: 700;
}

.pakage-item-right-top .decription {
    margin-top: 12px;
}

a.mota {
    display: flex;
}

.mota .title-docthem {
    font-size: 24px;
    margin: 0;
}

.item-titile-list-heading {
    font-size: 32px;
    color: #000;
    font-weight: 700;
    text-align: center;
    margin-bottom: 85px;
}


.trend-item-right-price {
    color: orange;
    font-weight: 700;
    margin: 0;
}

.trend-item-right-decription {
    color: #ccc;
    margin: 0;
}

#trend-item-left-img {
    width: 82px;
    height: 76px;
}
</style>