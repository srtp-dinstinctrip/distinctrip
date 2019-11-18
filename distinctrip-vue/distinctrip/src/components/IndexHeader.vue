<template>
     <div class="header">
            <img src="../assets/image/distinctrip-h-blue.png" alt="" height="50%" class="header-logo">
            <div class="header-dis">
                <a href="http://vacations.ctrip.com/" target="_blank"><p>我要Dis</p></a>
            </div>
            <img src="../assets/image/头像.png" alt="" height="70%" class="header-pic">
            <p class="header-uname">Angelo</p>
    </div>
</template>


<script>
export default {
    name: 'IndexHeader',
    props: {
        
    }
}
</script>

<style  scoped>
.header{
    height: 50px;
    width: 1300px;
    position: absolute;
    left: 7.5%; 
    position: relative;
}
.header-logo{  /*顶部logo垂直居中*/
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
}
.header-dis{
    width: 8%;
    position: absolute;
    top: 9px;
    right: 135px;
    background-color: rgb(51, 173, 173);
    border-radius: 20px;
    text-align: center;
    cursor: pointer; 
}
.header-dis a{
    text-decoration: none;
}
.header-dis p{
    margin-top: 5px;
    margin-bottom: 6px;
    margin-left: 10px;
    margin-right: 10px;
    color: rgb(255, 255, 255);
    font-weight: bold;
}
.header-pic{
    position: absolute;
    right: 75px;
    top: 6px;
}
.header-uname{
    position: absolute;
    right: 5px;
    color: rgb(104, 104, 104);
    font-weight: bold;
    bottom: 0px;
}
</style>