function addEventBtnSearch() {
    const searchIcon = document.querySelector('.seach-icon-nav');
    const inputSearch = document.querySelector('.header-nav-search__input');
    let isOK = true;

    searchIcon.onclick = function() {
        if (isOK) {
            inputSearch.style.display = 'block';
            isOK = false;
        }
        else {
            inputSearch.style.display = 'none';
            isOK = true;
        }

    }
}

function addEventIconList() {
    const iconList = document.querySelector('.icon-list-header');
    const listMenu = document.querySelector('.header__menu-rp');
    const dauX = document.querySelector('.header__menu-icon-hover');

    iconList.onclick = () => {
        listMenu.style.display = 'block'
    }

    // Huy menu
    listMenu.onclick = function(){
        this.style.display = 'none';
    }
    // Huy menu
    dauX.onclick = () => {
        listMenu.style.display = 'none';
    }

}

function addEventScrool() {
    document.onscroll = function() {
        let toaDo = window.scrollY || document.documentElement.scrollTop;
        const manHinhNgang = window.innerWidth;
        if (toaDo < 0) {
            toaDo = 0;
        }
        
        if (toaDo === 0 && manHinhNgang > 768) {
            document.querySelector('.header-nav').style.top = '36px';
            document.querySelector('.header-nav').style.zIndex = '0';
        }
        else {
            document.querySelector('.header-nav').style.top = '0'
            document.querySelector('.header-nav').style.zIndex = '2'
        }
    }
}


function main() {
    addEventBtnSearch();
    addEventIconList();
    addEventScrool();
}
main();