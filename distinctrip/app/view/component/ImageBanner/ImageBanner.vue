<template>
    <div class="box" id="box">
        <div class="inner">
            <ul>
                <li><a href="#"><img src="img/1.jpg" alt=""></a></li>
                <li><a href="#"><img src="img/2.jpg" alt=""></a></li>
                <li><a href="#"><img src="img/3.jpg" alt=""></a></li>
                <li><a href="#"><img src="img/4.jpg" alt=""></a></li>
                <li><a href="#"><img src="img/6.jpg" alt=""></a></li>
            </ul>
            <ol class="bar">

            </ol>
            <div id="arr">
                <span id="left"> < </span>
                <span id="right">></span>
            </div>
            </div>
    </div>
</template>

<script>
export default {
    name='image-banner',
    props: {

    },
    data() {
        return;
    },
    methods() {

    },
    mounted: {
        /*传入标签id  返回标签对象方便获取元素*/
        function my$(id){
            return document.getElementById(id);
        }

        /*获取各元素  方便操作 */
        var box=my$("box");
        var inner=box.children[0];
        var ulObj=inner.children[0];
        var list=ulObj.children;  //li的个数
        var olObj=inner.children[1];
        var arr=my$("arr");
        var imgWidth=inner.offsetWidth;
        var right=my$("right");
        var pic=0;

        /*根据li的个数  创建小按钮 */
        for (var i=0;i<list.length;i++){
            var liObj=document.createElement("li");  //创建一个按钮

            olObj.appendChild(liObj);  //ol下添加子标签
            //liObj.innerText=(i+1);   //设置li标签的内容
            liObj.setAttribute("index",i);

            /*为按钮注册mouseover事件 */
            liObj.onmouseover=function(){
                //先清除所有按钮样式
                for (var j=0;j<olObj.children.length;j++){
                    olObj.children[j].removeAttribute("class");
                }
                this.className="current";
                pic=this.getAttribute("index");
                animate(ulObj,-pic*imgWidth);
            };
        }

        //设置ol中第一个li有背景颜色
        olObj.children[0].className="current";
            //克隆一个ul中第一个li,加入到ul中的最后=====克隆
        ulObj.appendChild(ulObj.children[0].cloneNode(true));

        var timeId=setInterval(onmouseclickHandle,2000);
        //左右焦点实现点击切换图片功能
        box.onmouseover=function(){
            arr.style.display="block";
            clearInterval(timeId);
        };
        box.onmouseout=function(){
            arr.style.display="none";
            timeId=setInterval(onmouseclickHandle,2000);
        };

        right.onclick=onmouseclickHandle;
        function onmouseclickHandle() {
            //如果pic的值是5，恰巧是ul中li的个数-1的值，此时页面显示第6张图片，用户会认为这是第一张图
            //所以 如果用户再次点击按钮，用户应该看到第二张图片
            if (pic==list.length-1){
                //如何从第6张图，跳转到第一张图
                pic=0; //先设置pic
                ulObj.style.left=0 + "px";  //把ul的位置还原成开始的默认位置
            }
            pic++;  //立即设置pic +1，此时用户会看到第2张图片
            animate(ulObj,-pic*imgWidth);  //pic的值从0加1后，pic=1，然后ul移动出去一个图片
            //如果pic==5，此时显示第6个图（内容是第一张图），第一个小按钮有颜色
            if (pic==list.length-1){
                //第5个按钮颜色干掉
                olObj.children[olObj.children.length-1].className="";
                //第1个按钮的颜色设置上
                olObj.children[0].className="current";
            }
            else{
                //干掉所有小按钮的背景颜色
                for (var i=0;i<olObj.children.length;i++){
                    olObj.children[i].removeAttribute("class");
                }
                olObj.children[pic].className="current";
            }
        }

        left.onclick=function(){
            if (pic==0){
                pic=list.length-1;
                ulObj.style.left=-pic*imgWidth+"px";
            }
            pic--;
            animate(ulObj,-pic*imgWidth);
            for (var i=0;i<olObj.children.length;i++){
                olObj.children[i].removeAttribute("class");
            }
            //当前pic索引对应的按钮设置颜色
            olObj.children[pic].className="current";
        };

        //设置任意的一个元素  移动到指定的位置
        function animate(element,target) {
            clearInterval(element.timeId);
            //定时器的id值存放在对象的一个属性中
            element.timeId=setInterval(function(){
                //获取元素的当前位置  数字类型
                var current =element.offsetLeft;
                //每次移动的距离
                var step=10;
                step= current<target?step:-step;
                //当前移动到位置
                current+=step;
                if (Math.abs(current-target)>Math.abs(step)){
                    element.style.left=current+"px";
                }else{
                    //清理定时器
                    clearInterval(element.timeId);
                    //直接到达目标
                    element.style.left=target+"px";
                }
            },5);


            function stop(){
                clearInterval(timeId);
            }
            function start(){
                clearInterval(timeId);
                timeId=setInterval(divInterval,2000);
            }
            //页面失去焦点停止
            onblur = function(){
                stop();
            };
            //页面获取焦点时开始
            onfocus = function(){
                start();
            };
        }
    }
}
</script>

<style>
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
        left: 35%;
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
        margin-left: 27px;
    }
    .bottom-right p{
        font-size: 10px;
        margin-left: 60px;
    }
</style>