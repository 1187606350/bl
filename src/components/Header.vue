<template>
    <header>
        <div class="kg-header">
            <div class="kg-header-left">
                <div class="logo">
                    <img src="https://staticssl.kugou.com/public/root/images/logo.png" alt="">
                </div>
                <div class="search">
                    <input type="text" name="search">

                    <div class="search-btn">
                        <i class="el-icon-search"></i>
                    </div>
                    
                </div>
            </div>
            <div class="c-right">
                <div class="kg-header-nav">
                    <ul>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>


<style lang="less" scoped>
    header {
        width: 100%;
        height: 78px;

        .kg-header {
            width: 1000px;
            height: 78px;
            margin: 0 auto;
            position: relative;

            .kg-header-left {
                float: left;

                .logo {
                    float: left;
                    height: 78px;

                    img {
                        padding-top: 20px;
                    }
                }

                .search {
                    float: left;
                    margin-top: 20px;
                    margin-left: 40px;
                    z-index: 9999;
                    position: relative;
                    width: 298px;
                    height: 34px;
                    border: 1px solid #ccc;
                    line-height: 34px;

                    input {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 249px;
                        height: 24px;
                        line-height: 24px;
                        border: none;
                        margin-left: 14px;
                        padding: 5px 0;
                        color: #666;
                        outline: none;
                    }

                    .search-btn {
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 34px;
                        height: 34px;
                        margin: 0;
                        border: none;
                        padding: 0;
                        background: 0 0;
                        outline: none;
                        cursor: pointer;

                        i {
                            display: block;
                            margin: 9px 0 0 9px;
                            width: 16px;
                            height: 16px;
                            cursor: pointer;
                        }
                    }


                }
            }


            .kg-header-right {
                float: right;
            }
        }
    }
</style>