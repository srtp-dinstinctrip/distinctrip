<template>
  <div class="senic_detail">
        <table border="1" cellspacing="0">
            <tr>
                <td class="detailpic"><img src="../assets/image/detail-time.png" class="mypic"></td>
                <td class="detailinfo">{{time}}</td>
            </tr>
            <tr>
                <td class="detailpic"><img src="../assets/image/detail-tele.png" class="mypic"></td>
                <td class="detailinfo">{{tele}}</td>
            </tr>
            <tr>
                <td class="detailpic"><img src="../assets/image/detail-cost.png" class="mypic"></td>
                <td class="detailinfo">{{cost}}</td>
            </tr>
            <tr>
                <td class="detailpic"><img src="../assets/image/detail-address.png" class="mypic"></td>
                <td class="detailinfo">{{address}}</td>
            </tr>
            <tr>
                <td class="detailpic"><img src="../assets/image/detail-way.png" class="mypic"></td>
                <td class="detailinfo">{{way}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'IndexScenicDetail',
    props: {
        time: String,
        tele: String,
        cost: String,
        address: String,
        way: String
    }
}

</script>

<style scoped>
    .senic_detail{   /*表格div格式*/
        height: 300px;
        width: 400px;
        position: absolute;
        left: 7.5%;
        background-color: rgb(255, 255, 255);
    }

    .senic_detail td{
        border:1px solid white; 
        border-bottom:1px solid gray;
        background:#ffffff; 
        font-size:20px; 
        padding:5px 5px 2px 5px; 
        color:#303030; 
        word-break:break-all; 
        word-wrap:break-word; 
        white-space:normal; 
    }

    .mypic {
        height: 30px;
        width: 30px;
    }

    .detailpic{
        height:30px;
        width: 50px;
    }

    .detailinfo{
        height:50px;
        width: 300px;
        text-align: left;
    }

</style>