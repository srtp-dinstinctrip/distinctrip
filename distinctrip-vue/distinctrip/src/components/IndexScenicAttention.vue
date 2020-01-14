<template>
  <div class="senic_attention">
        <h1 class="my_title"><img src="../assets/image/attention.png" class="mypic">注意事项</h1>
        <h1 class="my_content">{{mycontent}}</h1>
    </div>
</template>

<script>
export default {
    name: 'IndexScenicAttention',
    props: {
        mycontent:String
    }
}

</script>

<style scoped>
    .senic_attention{
        width: 1300px;
        border-radius: 8px;
        left: 50%;
        text-align: left;
        vertical-align: text-top;
        padding:0px 0px 0px 0px; 
        background-color: rgb(255, 255, 255);
        vertical-align:middle;
    }
    .mtpic{
        width: 10px;
        height: 30px; 
        vertical-align:middle;
    }
    .my_title{
        font-size:30px; 
        vertical-align:middle;
    }
    .my_content{
        font-size: 20px;
        font-family:'Times New Roman', Times, serif;
    }

</style>