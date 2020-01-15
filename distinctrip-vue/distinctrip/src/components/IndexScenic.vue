<template>
     <div class="index-scenic">
            <img class="scenic-img" :src="scenicImg" alt="">
            <div class="scenic-mask">
                <a :href="scenicUrl" target="_blank"><h1 class="scenic-name">{{scenicName}}</h1></a>
                <p class="scenic-intro">{{scenicIntro}}</p>
            </div>
    </div>
</template>


<script>
export default {
    name: 'IndexScenic',
    props: {
        scenicImg: String,
        scenicUrl: String,
        scenicName: String,
        scenicIntro: String
    },
    method: {

    }
}
</script>

<style  scoped>
.index-scenic {
    height: 400px;
    width: 1300px;
    border-radius: 10px;
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
}
.scenic-mask {
    height: 400px;
    width: 500px;
    background-color: rgba(0,0,0,0.3);    
    border-radius: 10px;
    left: 0;
}
.scenic-name {
    width: 400px;
    margin-left: 50px;
    padding-top: 80px;
    padding-bottom: 20px;
    text-align: center;
    color: #fff;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}
.scenic-intro {
    width: 400px;
    height: 200px;
    line-height: 20px;
    margin-left: 50px;
    color: #fff;
    text-align: left;
    word-wrap: break-word;
    overflow:hidden;
    text-overflow:ellipsis;
}
</style>