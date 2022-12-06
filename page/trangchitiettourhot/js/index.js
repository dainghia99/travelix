const api = 'http://localhost:3000/tourhot';

const renderUi = (data) => {
    const html = data.map(item => {
        return `
            <div class="col-xl-1 d-xl-block d-lg-none d-md-none d-sm-none d-none"></div>
            <div class="col-xl-4 col-lg-5 col-md-12 mb-xl-5 mb-lg-5 mb-md-4 mb-sm-5 mb-5">
                <div class="body-content-items">
                    <img src="${item.image}" alt="Anh" width="100%" height="450px">
                </div>
            </div>
            <div class="col-xl-1 d-xl-block d-lg-none d-md-none d-sm-none d-none"></div>
            <div class="col-xl-6 col-lg-7">
                <h3 class="body-content-title">Địa Điểm: ${item.name}</h3>
                <div class="body-content-header-title">
                    <h1 class="title-hottrend">$ ${item.price}</h1>
                </div>
                <p class="body-content-text">Hành trình: Hà Nội - ${item.name} - Hà Nội</p>
                <p class="body-content-text">Lịch trình: 1 Tuần</p>
                <p class="body-content-text">Ngày khởi hành: 21,28/02; 14,21/03/2023</p>
                <p class="body-content-text">Vận chuyển: Xe du lịch đời mới & Máy Bay</p>
                
                <p class="body-content-text">Điểm nổi bật: <br>
                    <ul class="decription">
                        <li>TẶNG vé tham quan vườn hoa lớn nhất thế giới Miracle Garden</li>
                        <li>Bay hãng hàng không top đầu thế giới Emirates & lưu trú khách sạn 5*</li>
                    </ul>
                </p>
                <div class="btn-dat mb-md-5 mt-xl-4 mt-lg-4 mt-md-5 mt-sm-5 mb-sm-5 mb-5 mt-5">
                    <button class="btn" type="button"><a class="body-a-title" href="http://127.0.0.1:5500/page/dattour/dattour.html"> ĐẶT NGAY</a></button>
                </div>
            </div>
        `
    })
    document.getElementById('body-items').innerHTML = html.join('');

}

const getAndRenderUI = api => {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            renderUi(data);
        })
}

function main() {
    getAndRenderUI(api);
}
main();