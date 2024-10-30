<template>
  <div  class="landingContainer">
    <nav-component></nav-component>

    <div class="d-flex justify-space-between align-center landingContentWrapper " >
        <div  class="landingContent1">
       <p class="unleash">Unleash Big Win <span class="color1">!</span></p>
          <div class="betPlay">
            Bet, Play, and <span class="dominate" >Dominate Now,</span> anytime, anywhere
          </div>
          <p class="pickYourStar">Pick your  <span class="color2">lucky star</span> and win big every 30 minutes bet smart score fast cash out instantly, chase jackpot and <span class="color2">win daily</span>    </p>
          <div>
            <v-btn variant="flat" class="btnBackground" >
             sign up to play
          </v-btn></div>
        </div>
      <div class="landingContent2">
        <img :src="phone1" alt="" srcset="">
      </div>
    </div>
  </div>
  <div class="section1">
    <div class="text-center text-capitalize howTo" > how to <span class="color1" >play</span>  </div>
    <div class="d-flex justify-center ga-2 align-center">
      <div style="width: 2%;padding: 5px;background-color: #30FF11"   class="rounded" ></div>
      <div style="width: 2%;padding:  5px;background-color: #45088d" class="rounded" ></div>
    </div>

    <div>
      <div class="carouselContainer">
        <carousel :items-to-show="1.5">
          <slide >
            <v-card variant="outlined" class="rounded-b cardBg1" rounded style="color: white;" >
              <v-card-item>
                <v-card-title class="d-flex justify-space-between align-center" >
                  <v-btn color="#A0F111" rounded variant="outlined" class="color1" > step 1</v-btn>
                  <v-icon icon="mdi mdi-star-outline" class="color1" >   </v-icon>
                </v-card-title>
                <v-card-title class="text-capitalize text-left font-bold mt-3 mb-2" style="font-size: 25px" >Make your prediction</v-card-title>
                <v-card-subtitle class="text-capitalize  text-left font-weight-light">
                  <p class="text-white text-left">Choose a star between  <span class="color2" >1</span>  and <span class="color2" >5</span> for every 30</p>
                  <p class="text-white text-left">minutes between 9am to 9 pm.</p>
                </v-card-subtitle>
              </v-card-item>
              <v-card-text  class="d-flex justify-space-between align-center">
                <div>
                  <p class="text-left">tip for success</p>
                  <div  class="d-flex justify-start align-center ga-3 ackWrapper mt-3"  style="border: 1px solid brown" v-for="item in successTip" :key="item.id" >
                    <div  class="rounded-circle"  style="padding: 5px; background-color: white"> </div>
                    <div class="w-75">
                      <p class="color2 text-left " >{{ item.title }}</p>
                      <p class="text-left" >{{ item.subtitle }}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img :src="phone2" alt="" srcset="">
                </div>

              </v-card-text>


            </v-card>
          </slide>
          <slide >
            <v-card variant="outlined" class="rounded-b cardBg2" rounded style="color: white;" width="500">
              <v-card-item>
                <v-card-title class="d-flex justify-space-between align-center" >
                  <v-btn color="#1C0A30" rounded variant="outlined"  > step 2</v-btn>
                  <v-icon icon="mdi mdi-star-outline" color="#1C0A30"  >   </v-icon>
                </v-card-title>
                <v-card-title class="text-capitalize font-bold text-left colBlack" >Earn when you win</v-card-title>
                <v-card-subtitle class="text-capitalize text-left font-weight-light colBlack">
                  <p>Receive a compounding cash amount for each </p>
                  <p>correct prediction you make.</p>
                </v-card-subtitle>
              </v-card-item>
              <v-card-text  class="d-flex justify-space-between align-start">
                <div>
                  <div class="text-center maTop" style="border: 1px solid #1C0A30;background-color: #A1FF00;color: black">
                    Each correct prediction doubles your winning amount.
                  </div>
                  <div class=" text-center maTop" style="border: 1px solid #1C0A30">
                    Make multiple predictions on a bet for a chance to win more.
                    <div style="border: 1px solid #fff;background-color: #A1FF00;color: black" class="text-center">
                       <p>2 prediction = 4x the bet</p>
                      <p>3 prediction = 8x the bet</p>
                    </div>
                  </div>
                  <div class=" text-center maTop" style="border: 1px solid #1C0A30">
                    You never completely lose your bet even with wrong predictions
                    <div style="border: 1px solid #fff;background-color: #A1FF00;color: black">If you are one star away from the correct prediction, you get 80% of your bet back.</div>
                    <div style="border: 1px solid #fff;background-color: #A1FF00;color: black">If you Are two stars away from the correct prediction, you get 50% of your bet back.</div>
                  </div>
                </div>
                <div>
                  <img :src="phone2" alt="" srcset="">
                </div>

              </v-card-text>


            </v-card>
          </slide>
          <slide >
            <v-card variant="outlined" class="rounded-b" rounded style="color: white;" width="500">
              <v-card-item>
                <v-card-title class="d-flex justify-space-between align-center" >
                  <v-btn color="#1C0A30" rounded variant="outlined" class="" style="background-color: red;" > step 3</v-btn>
                  <v-icon icon="mdi mdi-star-outline" class="color1" >   </v-icon>
                </v-card-title>
                <v-card-title class="text-capitalize font-bold" >Make your prediction</v-card-title>
                <v-card-subtitle class="text-capitalize font-weight-light">
                  <p>Choose a star between 1 and 5 for every 30</p>
                  <p>minutes between 9am to 9 pm.</p>
                </v-card-subtitle>
              </v-card-item>
              <v-card-text  class="d-flex justify-space-between align-start">
                <div>
                  <div  class="d-flex justify-start align-center ga-3 " style="border: 1px solid #000" v-for="item in successTip" :key="item.id" >
                    <div  class="rounded-circle"  style="padding: 5px; background-color: white"> </div>
                    <div class="w-75">
                      <p class="color2" >{{ item.title }}</p>
                      <p>{{ item.subtitle }}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img :src="phone2" alt="" srcset="">
                </div>

              </v-card-text>


            </v-card>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>


      </div>
    </div>
  </div>

  <div class="section2" >
    <img :src="secton2bg" class="section2bg" alt="" srcset="">
  <div class="text-center text-white mt-6 mb-6 font-weight-bold testimonial">TESTIMONIAL FROM OUR PLAYERS</div>
    <div class="d-flex justify-space-between align-start  mt-2 mb-16 section2sides" >
      <div class="d-flex justify-space-around flex-wrap align-center section2content1 " style="border: 1px solid blue; width: 60%" >
     <div class="d-flex w-100 flex-wrap justify-space-between align-center">
      <v-card   v-for="item in cards" :key="item.id" :width="item.width"  variant="outlined" class="cardsBg border" >
        <v-card-item>
          <v-card-title>
            <v-avatar size="40" :image="avatar1" ></v-avatar> <span style="color:#21FF00" class="">Folashade</span>
          </v-card-title>
          <v-card-subtitle class="no-truncate text-white mt-3">
            I’ve tried many betting sites, but this one stands out. The promotions are unbeatable, and I love the daily jackpots!
          </v-card-subtitle>
        </v-card-item>
      </v-card>
     </div>

      </div>
        <div class="section2content2" style="width: 37%; border: 1px solid orange">
          <div class="d-flex justify-space-around align-center maTop" v-for="item in socialReview" style="border: 1px solid red" :key="item.id" >
            <div> <v-avatar size="40" :image="insta"></v-avatar>  </div>
            <div class="" style="border: 1px solid orange;width:80%">
              <p class="text-white">{{ item.title }}</p>
               <p class="text-white">{{ item.subtitle }}</p>
            </div>
          </div>

        </div>
    </div>
  </div>
  <div class="section3" >
    <div class="section3Bg d-flex justify-space-between ">

      <div style="width: 50%;border: 1px solid green">
        <img :src="logoblack" alt="" srcset="">
        <div class="mt-16" style="font-weight: bolder;font-size:48px">Download Now </div>
        <div style="font-size: 20px;" class="mb-10">Get the app, place your bets, and win big with every game. Fast, easy, and fun!</div>
        <div><v-btn variant="flat" class="text-white text-capitalize" style="background-color: black">download now</v-btn></div>
        <div class="d-flex justify-start ga-5 mt-13 align-center" >
          <img :src="appStore" alt="" sizes="" srcset="">
          <img :src="playstore" alt="" sizes="" srcset="">
        </div>
      </div>


      <div  style="width: 50%;border: 1px solid yellow" class="d-flex text-right justify-end">
        <img :src="manPhone" alt="" sizes="" width="350px" height="380px" srcset="" class="align-self-end">
      </div>
    </div>

  </div>
  <div class="section4" >
    <div class="text-center text-white font-bold" style="font-size: 48px" >customer <span class="color2" >support</span></div>
    <div class="d-flex justify-space-between align-start" >
        <div style="width: 50%;border: 1px solid pink">
          <h3 style="font-size: 48px" class="text-white">Are You Facing Any <span class="color2">Problem .?</span> </h3>
          <div class="mt-7 text-white" style="font-size: 24px">
            For any assistance, you can open a support ticket, and our team will help you as soon as possible. If you need instant support, reach out via WhatsApp for a quicker response.
          </div>
        </div>
      <div style="width: 50%; border: 1px solid yellow">
        <img :src="support" alt="" srcset="">
      </div>
    </div>
    <div class="w-100 d-flex ga-5 align-center mt-9" style="border: 1px solid red" >
      <v-btn append-icon="mdi mdi-whatsapp" style="background-color: #28EF0D;color: #000" variant="flat" >message now </v-btn>
      <v-btn append-icon="mdi mdi-ticket" variant="outlined" color="white"> open a ticket</v-btn>
    </div>
  </div>
  <div class="section5" >
    <div class="text-center text-white" style="font-size: 48px"> Connect <span class="color2">With</span>  US </div>
    <div class="d-flex justify-space-between align-start mt-16" >
      <div style="width: 50%; border: 1px solid darkseagreen" >
        <div>

          <v-text-field style="color: white" label="Enter your email" ></v-text-field>
        </div>

        <div>
          <v-textarea style="color: white" label="input message"></v-textarea>
        </div>

        <div>
          <v-btn color="#123456">send</v-btn>
        </div>

        <div class="d-flex justify-space-between align-center">
          <div style="width: 50%; border: 1px solid aquamarine">
            <div class="d-flex justify-start align-center" >
              <v-icon  icon="mdi mdi-instagram"></v-icon>
              <v-icon icon="mdi mdi-twitter"></v-icon>
              <v-icon icon="mdi mdi-facebook"></v-icon>
            </div>
            <div>
              <h3>starHunt</h3>
              <p>@starHunt</p>
            </div>
<div> custumer@starHunt.com  </div>
          </div>
          <img :src="whatsapp" alt="" srcset="">
        </div>

      </div>

      <div style="width: 50%; border: 1px solid darkseagreen">
        <img :src="map" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script setup>

import NavComponent from "@/components/navComponent.vue";
import  phone1 from "../assets/img/phoneimg1.png";
import phone2 from "../assets/img/phoneimg2.png";
import phone3 from "../assets/img/phoneimg2copy.png"
import  avatar1 from "../assets/img/portriate.png"
import insta from "../assets/img/Instagram.png"
import logoblack from "../assets/img/logoblack.png"
import {ref} from "vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import secton2bg from "../assets/img/section2Bg.png"
import appStore from "../assets/img/appstore.png"
import playstore from "../assets/img/playstore.png"
import manPhone from "../assets/img/manPhone.png"
import support from "../assets/img/support.png"
import  whatsapp from "../assets/img/whatsappBarcode.png"
import map from "../assets/img/map.png"

const  successTip = ref([
  {id:1 ,title: 'Analyze Trends', subtitle: 'Review past outcomes to help you make informed predictions.'},
  {id:2 ,title: 'Control Your Bets', subtitle: 'Bet carefully while trying to win big.'},
  {id:3 ,title: 'Keep Track', subtitle: 'Monitor your progress and adjust your strategy if needed'},
])
const cards = ref([
  {id:1 , width:297},
  {id:2, width:297},
  {id:3, width:175},
  {id:4, width:175},
  {id:5, width:175},
])
const  socialReview = ref([
  {id: 1, title: '@Sekina commented', subtitle: 'The app is fast and reliable. I’ve had some great wins, and the process has been smooth every time!'  },
  {id: 1, title: '@Olivia S. commented', subtitle: 'The daily bonuses are a game-changer. This platform makes betting so exciting and rewarding!'  },
  {id: 1, title: '@Emma T commented', subtitle: 'The app is fast and reliable. I’ve had some great wins, and the process has been smooth every time!'  },
])



</script>

<style lang="scss" scoped>
.landingContainer {
  height: auto;
  background-color: #1C0A30;
  font-family: "Anybody", sans-serif;
  .landingContentWrapper {
    padding: 4% 0;
    //border: 1px solid green;
    padding: 40px 40px;
    .landingContent1 {
      width: 50%;
      //border: 1px solid blue;
     .unleash {
       color: #fff;
       font-size: 24px;
     }
      .betPlay {
        color: #fff;
        font-size: 64px;
        width: 90%;
        //border: 1px solid darkcyan;
        font-family: "Manrope", sans-serif;
        line-height: 60px;
        font-weight: bold;
        .dominate {
          background: linear-gradient(45deg,#fff, #1EE500, #fff, #30FF11);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      }
      .pickYourStar {
        margin: 2% 0;
        color: #fff;
        width: 95%;
        font-family: "Manrope", sans-serif;
        font-size: 16px;
        font-weight: 100;
      }
    }
    .landingContent2 {
      width:  50%;
      //border:  1px solid pink;
    }
  }
}
.section1 {
  height: auto;
  background-color: #1C0A30;
  padding: 20px 0;
  .howTo {
    font-size: 40px;
    font-weight: bolder;
    color: #fff;
  }
  .carouselContainer {
    padding: 40px 40px;
    border:1px solid purple;
    .cardBg1 {
      background: #1C0A30;
      width: 500px;
    }
    .cardBg2 {
      background-color: #21FF00;
    }
    .ackWrapper {
      background-color: #230B3E;
      padding: 10px;
      margin: 2% 0;
    }
  }
}
.section2 {
  height: auto;
  background-color: #1C0A30;
  padding: 40px ;
  position: relative;
  //background-image: url("../assets/img/section2Bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .section2bg {
    position: absolute;
    top: 25%;
    z-index: 0;
    .testimonial {
      font-size: 24px ;
      font-weight: bold;
      font-family: "Manrope", sans-serif;
    }
  }
  .no-truncate {
    white-space: normal; /* Allows text to wrap instead of truncating */
    overflow: visible;   /* Removes the truncation effect */
    text-overflow: unset; /* Unsets the ellipsis */
  }
  .cardsBg {
    margin: 2% 0;
  }
}
.section3 {
  height: 100vh;
  background-color: #330E5B;
  padding: 40px 40px;
  .section3Bg {
    background-color: #21FF00;
    background-image: url("../assets/img/background.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    width: 80%;
    margin: 0 auto;
    border-radius: 40px;
    padding: 20px;
  }
}
.section4 {
  height: 100vh;
  padding: 40px;
  background-color: #330E5B;
}
.section5 {
  background-color:  #1C0A30;
   padding: 40px;
  height: auto;
}

@media screen and (max-width: 968px) {
.section2sides {
  display: flex;
  flex-wrap: wrap;
  .section2content1 {
    width: 100% !important;
  }
  .section2content2 {
    width: 100% !important;
  }

}
  .section3 {
    .section3Bg {
      width: 100% !important;
    }
  }
}

@media screen and (max-width: 768px) {
.landingContainer {
  .landingContentWrapper {
    display: flex !important;
    flex-wrap: wrap;
    .landingContent1 {
      width: 100% !important;
      border: 1px solid red;
    }
    .landingContent2 {
      width: 100% !important;
      border: 1px solid green;
    }
  }
}
}

</style>