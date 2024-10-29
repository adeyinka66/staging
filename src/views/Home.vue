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
            <v-card variant="outlined" class="rounded-b cardBg1" rounded style="color: white;" width="500">
              <v-card-item>
                <v-card-title class="d-flex justify-space-between align-center" >
                  <v-btn color="#A0F111" rounded variant="outlined" class="color1" > step 1</v-btn>
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
                  <p>tip for success</p>
                  <div  class="d-flex justify-start align-center ga-3 ackWrapper" v-for="item in successTip" :key="item.id" >
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
  <div class="text-center text-white">TESTIMONIAL FROM OUR PLAYERS</div>
    <div class="d-flex justify-space-between align-center" >
      <div class="d-flex justify-space-between flex-wrap align-center " style="border: 1px solid blue; width: 50%" >
     <div class="d-flex w-100 flex-wrap justify-space-between align-center">
      <v-card   v-for="item in cards" :key="item.id" :width="item.width" variant="outlined" class="cardsBg" >
        <v-card-item>
          <v-card-title>
            <v-avatar size="40" :image="avatar1" ></v-avatar> <span style="color:#21FF00">Folashade</span>
          </v-card-title>
          <v-card-subtitle class="no-truncate">
            I’ve tried many betting sites, but this one stands out. The promotions are unbeatable, and I love the daily jackpots!
          </v-card-subtitle>
        </v-card-item>
      </v-card>
     </div>

      </div>
        <div class="" style="width: 50%; border: 1px solid orange">
          <div class="d-flex justify-space-around align-center">  </div>
          <div> <v-avatar size="45" :image="insta"></v-avatar>  </div>
          <div>
            <span>@Sekina commented</span>
            The app is fast and reliable. I’ve had some great wins, and the process has been smooth every time!</div>
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
import {ref} from "vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

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
  {id:6, width:175},
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
  height: 100vh;
  background-color: #1C0A30;
  padding: 40px;
  background-image: url("../assets/img/section2Bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .no-truncate {
    white-space: normal; /* Allows text to wrap instead of truncating */
    overflow: visible;   /* Removes the truncation effect */
    text-overflow: unset; /* Unsets the ellipsis */
  }
}

</style>