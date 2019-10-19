<template>
    <div class="searchbar">
        <div class="searchbar-left">
            <form action="#" method="GET">
                <select name="select_info" id="">
                    <option value="0">搜路书</option>
                    <option value="1">定制游</option>
                    <option value="2">攻略</option>     
                </select>
        </div>

        <div class="searchbar-mid">
            <div class="searchbar-mid-left">
                <img src="img/搜索.png" alt="" height="70%">
            </div>

            <div class="searchbar-mid-right">
                
                    <input type="text" name="search_info" value="魔都重庆"> 
                    <input type="submit" value="搜索" >
            </form>
            </div>
        </div>

        <div class="searchbar-right">
            <a href="http://vacations.ctrip.com/" target="_blank"><p>我要Dis</p></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search-bar',
    props: {

    },
    data() {
        return;
    },
    methods() {

    },
    mounted: {

    }
}
</script>

<style scoped>
    .searchbar{
        height: 40px;
        width: 1300px;
        position: absolute;
        left: 7.5%;
    }
    .searchbar-left{
        height: 100%;
        width: 13%;
        float: left;
        background-color: antiquewhite;
        border-radius: 25px;
        background-color:rgb(243, 242, 242) ;
        border: solid 1px rgb(0, 153, 153);
    }
    .searchbar-left select{
        height: 100%;
        width: 85%;
        background-color:rgb(243, 242, 242) ;
        border: none;
        margin-left: 12px;
        margin-top: 1px;
        font-size: 20px;
        color: rgb(91, 91, 91);
        cursor: pointer;  /*鼠标放上变成小手*/
        /*去掉默认的下拉三角*/ 
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        /*添加下拉三角*/
        background: url(img/下拉三角.png) ;
        background-position: right;
        background-repeat: no-repeat;
        background-size: 15%;
    }
    .searchbar-left option{
        background-color: rgb(243, 242, 242);
        cursor: pointer;
    }
    .searchbar-left option:hover{
        background: rgb(0, 153, 153);
    }

    .searchbar-mid{
        height: 100%;
        width: 70%;
        float: left;
        margin-left: 2%;
        margin-right: 2%;
        border-radius: 25px;
        background-color: rgb(243, 242, 242);
        border: solid 1px rgb(0, 153, 153);
    }
    .searchbar-mid-left{
        height: 100%;
        width: 5%;
        float: left;
        position: relative;
    }
    .searchbar-mid-left img{
        position: absolute;
        left: 13px;
        top: 7px;
    }
    .searchbar-mid-right{
        height: 100%;
        width: 95%;
        float: left;
    /* background-color: brown;*/
        background-color: rgb(243, 242, 242);
        border-radius: 25px;
    }
    input[type=text]{
        height: 100%;
        width: 88%;
        float: left;
        background-color: rgb(243, 242, 242);
        color: rgb(91, 91, 91);
        font-size: 19px;
        border: none;
    }
    input[type=submit]{
        height: 100%;
        width: 12%;
        float: left;
        border-radius: 25px;
        background-color: rgb(0, 153, 153);
        color: rgb(255, 255, 255);
        font-size: 22px;
        font-weight: bold;
        border: none;
        cursor: pointer; 
    }


    .searchbar-right{
        height: 100%;
        width: 12%;
        float: left;
        background-color:rgb(0, 153, 153);
        border-radius: 25px;
        text-align: center;
        border: solid 1px rgb(0, 153, 153);
        cursor: pointer; 
    }
    .searchbar-right p{
        color: rgb(255, 255, 255);
        font-weight: bold;
        font-size: 22px;
        margin-top: 5px;
        margin-bottom: 0px;
    }
    .searchbar-right a{
        text-decoration: none;
    }
</style>