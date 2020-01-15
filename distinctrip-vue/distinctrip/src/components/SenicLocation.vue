<template>
  <div>
        <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
            <!--缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!--定位-->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <!--点-->
            <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
                <!--提示信息-->
                <!--<bm-info-window :show="map.show">西南交通大学犀浦校区</bm-info-window>-->
            </bm-marker>
        </baidu-map>
    </div>
</template>

<script>
    export default {
        name: "ScenicLocation",
        data: () => ({
            map:{
                center: {lng: 103.989854, lat:30.770199},
                zoom: 15,
                show: false,
                dragging: false
            },
        }),
        methods: {
            handler ({BMap, map}) {
                //let me = this;
                window.console.log(BMap, map)
                // 鼠标缩放
                map.enableScrollWheelZoom(true);
                // 点击事件获取经纬度
                map.addEventListener('click', function (e) {
                    window.console.log(e.point.lng, e.point.lat)
                })
            }
        }
    }
</script>

<style scoped>
    .map {
        width: 400px;
        height: 300px;
    }
</style>