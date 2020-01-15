<template>
  <div class="senic_attention">
        <div class="attention">
            <h1 class="my_title"><img src="../assets/image/attention.png" class="mypic"> 注意事项</h1>
        </div>
        <h1 class="my_content">{{mycontent}}</h1>
    </div>
</template>

<script>
export default {
    name: 'ScenicAttention',
    props: {
        mycontent:String
    }
}

</script>

<style scoped>
    .senic_attention{
        width: 1300px;
        border-radius: 8px;
        left: 7.5%;
        text-align: left;
        vertical-align: text-top;
        padding:0px 0px 0px 0px; 
        background-color: rgb(255, 255, 255);
        vertical-align:middle;
    }
    .mypic{
        width: 35px;
        height: 35px; 
        vertical-align:bottom;
    }
    .my_title{
        font-size:30px; 
        vertical-align:bottom;
    }
    .my_content{
        font-size: 20px;
        font-family:'Times New Roman', Times, serif;
    }
</style>