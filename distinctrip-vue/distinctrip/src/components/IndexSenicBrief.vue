<template>
  <div class="senic_brief">
        <h1 class="my_title">{{mytitle}}</h1>
        <h1 class="my_content">{{mycontent}}</h1>
    </div>
</template>

<script>
export default {
    name: 'IndexScenicBrief',
    props: {
        mytitle:String,
        mycontent:String
    }
}

</script>

<style scoped>
    .senic_brief{
        width: 1300px;
        border-radius: 8px;
        left: 7.5%;
        text-align: left;
        padding:0px 20px 20px 20px; 
        background-color: rgb(217, 240, 240);
    }
    .my_title{
        font-size:30px; 
    }
    .my_content{
        font-size: 20px;
        font-family:'Times New Roman', Times, serif;
    }

</style>