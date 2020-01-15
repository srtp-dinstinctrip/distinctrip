<template>
    <div class="searchbar">
            <div class="left">
                <form action="#" method="GET">
                    <div class="searchbar-left">    
                            <select name="select_info" id="">
                                <option value="0">搜路书</option>
                                <option value="1">定制游</option>
                                <option value="2">攻略</option>     
                            </select>
                    </div>
            
                    <div class="searchbar-mid">
                        <div class="searchbar-mid-left">
                            <img src="../../assets/image/搜索.png" alt="" height="70%">
                        </div>
            
                        <div class="searchbar-mid-right">
                            
                                <input type="text" name="search_info" value="魔都重庆"> 
                                <input type="submit" value="搜索" >
                        </div>
                    </div>
                </form>
            </div>
                <div class="searchbar-right">
                    <a href="http://vacations.ctrip.com/" target="_blank"><p>我要Dis</p></a>
                </div>
        </div>
</template>

<script>
export default {
    name: 'IndexSearchbar',
    props: {

    }
}
</script>

<style scoped>
   .searchbar{
    height: 40px;
    width: 1300px;
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
}
.left{
    height:100%;
    width: 88%;
}
.searchbar-left{
    height: 40px;
    /* height: 100%; */
    width: 15%;
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
    background: url(../../assets/image/下拉三角.png) ;
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
    height: 40px;
    width: 80%;
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
    position: relative;
}
input[type=text]{
    height: 95%;
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
    float: right;
    border-radius: 25px;
    background-color: rgb(0, 153, 153);
    color: rgb(255, 255, 255);
    font-size: 22px;
    font-weight: bold;
    border: none;
    cursor: pointer; 
    position: absolute;
    top: 0px;
    right: 0px;
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
    position: absolute;
    top: 0px;
    right: 4px;
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