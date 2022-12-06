<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">ADMIN TRAVALIX</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="http://localhost:5173/">Home</a>
                    </li>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </a>
                        
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="http://localhost:5173/page/tourhot/tourhot.html">Thêm Tour Hot</a></li>
                            <li><a class="dropdown-item" href="http://localhost:5173/page/goiuudai/goiuudai.html">Thêm Gói Ưu Đãi</a></li>
                            <li><a class="dropdown-item" href="http://localhost:5173/page/hottrend/hottrend.html">Thêm Hot Trend</a></li>
                            <li><a class="dropdown-item" href="http://localhost:5173/page/delete/delete.html">Xóa</a></li>
                            <li><a class="dropdown-item" href="http://localhost:5173/page/users/index.html">Quản Lý Users</a></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>

</style>