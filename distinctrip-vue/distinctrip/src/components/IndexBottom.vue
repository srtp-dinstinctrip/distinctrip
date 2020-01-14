<template>
  <div class="bottom">
        <div class="bottom-left">
                <img src="../assets/image/distinctrip-v-white.png" alt="" height="70%" class="bottom-logo">
        </div>

        <div class="bottom-mid">
            <div class="bottom-mid-left">
                <p>关于我们</p>
                <ul class="bottom-mid-left-info">
                    <li>Distinctrip</li>
                    <li>SRTP</li>
                </ul>
            </div>

            <div class="bottom-mid-right">
                <p>项目合作</p>
                <ul class="bottom-mid-right-info">
                    <li><a href="http://jwc.swjtu.edu.cn/index.html" target="_blank">西南交通大学</a></li>
                    <li><a href="http://sist.swjtu.edu.cn/index.do?action=index" target="_blank">信息科学与技术学院</a></li>
                </ul>
            </div>
        </div>

        <div class="bottom-right">
            <a href="http://im.qq.com/pcqq/"><i class="mini qq icon"></i></a>
            <a href="http://github.com/" target="_blank"><img src="../assets/image/github.png" alt="" height="30%"></a> 
            <a href="http://im.qq.com/pcqq/" target="_blank"><img src="../assets/image/qq.png" alt="" height="30%"></a>
            <a href="http://wx.qq.com/" target="_blank"><img src="../assets/image/微信.png" alt="" height="30%"></a>
            <a href="http://weibo.com/" target="_blank"><img src="../assets/image/微博.png" alt="" height="30%"></a>
            <br>
            <hr>
            <p>© 2019-2020 Distinctrip (SRTP of SWJTU)</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexBottom',
    props: {
        msg: String
    }
}
</script>

<style scoped>
    .bottom{   /*底部最大div格式*/
    height: 120px;
    width: 1300px;
    position: absolute;
    left: 7.5%;
    /*border: solid 1px;*/
    border-radius: 8px;
    background-color: rgb(102,102,102);
    }

    .bottom-left{  /*logo图片div*/
        height: 100%;
        width: 27%;
        float: left;
    }
    .bottom-logo{  /* logo图片样式*/
        position: relative;
        left: 17%;
        top: 15%;
    }

    .bottom-mid{ /*中部div样式*/
        height: 100%;
        width: 43%;
        float: left;
    }
    .bottom-mid-left{  /*中部左端div样式*/
        float: left;
        width: 50%;
        height: 100%;
    }
    .bottom-mid-left-info{
        margin-left: 5px;
    }
    .bottom-mid-left-info li{
        list-style-type: none;
        font-size: 14px;
        color: rgb(255, 255, 255);
        cursor: pointer; 
    }
    p{
        font-size: 20px;
        font-weight: bold;
        color: rgb(204, 204, 204);
        margin-left: 45px;  
        margin-bottom: 0px;
    }

    .bottom-mid-right{  /*中部右端div样式*/
        float: left;
        width: 50%;
        height: 100%;
    }
    .bottom-mid-right-info{
        margin-left: 5px;
    }
    .bottom-mid-right-info li{
        list-style-type: none;
        font-size: 14px;
        color: rgb(255, 255, 255);
    }
    .bottom-mid-right-info a{
        color: rgb(255, 255, 255);
        text-decoration:none;
        font-size: 14px;
    }

    .bottom-mid-right-info a:hover{
        color:rgb(204, 204, 204);
    }

    .bottom-right{ /*右部div样式*/
        height: 100%;
        width: 30%;
        float: left;
    }
    .bottom-right img{
        margin-left: 35px;
        margin-top: 30px;
        cursor: pointer; 
    }
    .bottom-right img:hover{
        transform: scale(1.5);
        transition: 0.5s;
    }
    hr{
        color: rgb(255, 255, 255);
        width: 280px;
        margin-left: 67px;
    }
    .bottom-right p{
        font-size: 10px;
        margin-left: 60px;
    }
</style>