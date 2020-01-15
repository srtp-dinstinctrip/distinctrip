<template>
  <div class="swiper-container">
    <div class="swiper-wrapper"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
    // import { Swiper } from "https://unpkg.com/swiper/js/swiper.min.js";
    // import {} from "https://unpkg.com/swiper/css/swiper.min.css";
    // var appendNumber = 600;
    // var prependNumber = 1;
    new Swiper(".swiper-container", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    virtual: {
        slides: (function() {
        var slides = [];
        for (var i = 0; i < 600; i += 1) {
            slides.push("Slide " + (i + 1));
        }
        return slides;
        })()
    }
    });

    export default {
    name: "IndexTurn",
    data: function() {
        return {
        img: [
            "../../assets/image/img00.jpg",
            "../../assets/image/img01.jpg",
            "../../assets/image/img02.jpg",
            "../../assets/image/img03.jpg",
            "../../assets/image/img04.jpg",
            "../../assets/image/img05.jpg",
            "../../assets/image/img06.jpg"
        ],
        b: 0
        };
    },
    props: {}
    };
</script>

<style scoped>
    body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    }
    .swiper-container {
    width: 100%;
    height: 300px;
    margin: 20px auto;
    }
    .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    }
    .append-buttons {
    text-align: center;
    margin-top: 20px;
    }
    .append-buttons a {
    display: inline-block;
    border: 1px solid #007aff;
    color: #007aff;
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 4px;
    margin: 0 10px;
    font-size: 13px;
    }
</style>