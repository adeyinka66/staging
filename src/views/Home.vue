<template>
  <div  class="landingContainer">
    <div class="maTop80">
      <nav-component></nav-component>
    </div>


    <div class="d-flex justify-space-between align-center landingContentWrapper " >
        <div  class="landingContent1 ">
       <p class="unleash mt-13">Unleash Big Win <span class="color1" style="font-family: 'Bodoni MT Condensed' ">!</span></p>
          <div class="betPlay">
            Bet, Play, <br> and <span class="dominate" >Dominate Now,</span> anytime, anywhere
          </div>
          <p class="pickYourStar">Pick your  <span class="color2">lucky star</span> and win big every 30 minutes bet smart score fast cash out instantly, chase jackpot and <span class="color2">win daily</span>    </p>
          <div>
            <v-btn variant="flat" class="btnBackground btnStyle" >
             sign up to play
          </v-btn></div>
        </div>
      <div class="landingContent2">
        <img :src="phone1" alt="" srcset="">
      </div>
    </div>
  </div>
  <div class="section1">
    <div class="text-center text-uppercase howTo" > how to <span class="color1" >play</span>  </div>
    <div class="d-flex justify-center ga-2 align-center maTop43">
      <div style="width: 2%;padding: 5px;background-color: #21FF00"   class="rounded" ></div>
      <div style="width: 2%;padding:  5px;background-color: #21FF00; opacity: 0.3" class="rounded" ></div>
      <div style="width: 2%;padding:  5px;background-color: #1C0A30" class="rounded" ></div>
    </div>

    <div>
      <div class="carouselContainer">
        <carousel  v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="2000">
          <slide >
            <v-card variant="outlined" class="cardBg1 slideSize"  style="color: white;" >
              <v-card-item>
                <v-card-title class="d-flex justify-space-between align-center" >
                  <v-btn color="#21FF00" rounded variant="outlined" class="" > step 1</v-btn>
                  <div class="star d-flex justify-center align-center rounded-circle" style="width: 60px;height: 60px">
                    <img :src="star" alt="star" srcset="" width="45px" height="55px"  >
                  </div>
                </v-card-title>
              </v-card-item>
                <div class="d-flex justify-space-between align-center" >
                  <div style="width: 65%;border: 1px solid red" class="cardBg1Content1">
                    <v-card-title class="text-capitalize text-left makeYour no-truncate" style="font-size: 25px" >Make your prediction</v-card-title>
                    <v-card-subtitle class="text-capitalize  text-left font-weight-light chooseStar">
                      <p class="text-white text-left no-truncate">Choose a star between  <span class="color3" >1</span>  and <span class="color3" >5</span> for every 30</p>
                      <p class="text-white text-left">minutes between 9am to 9 pm.</p>
                    </v-card-subtitle>
                    <v-card-text  class="d-flex justify-space-between align-center">
                      <div>
                        <p class="text-left successTip">tip for success</p>
                        <div  class="d-flex justify-start align-center ga-3 ackWrapper "   v-for="item in successTip" :key="item.id" >
                          <div  class="rounded-circle"  style="width: 12px;height: 12px; background-color: white"> </div>
                          <div class="w-75">
                            <p class="color2 text-left title " >{{ item.title }}</p>
                            <p class="text-left subtitle" >{{ item.subtitle }}</p>
                          </div>
                        </div>
                      </div>

                    </v-card-text>
                  </div>
                  <div style="width: 35%;border: 1px solid green" class="noContent">
                    <img :src="phone2" alt="" srcset=""  style="width: 100%;">
                  </div>
                </div>

            </v-card>
          </slide>
          <slide >
            <v-card variant="outlined" class=" cardBg2 slideSize" rounded style="color: white;" >
              <img :src="transparentIcon" alt="" class="transimg" srcset="" width="400px" height="400px">
              <v-card-item>
                <v-card-title class="d-flex justify-space-between align-center" >
                  <v-btn color="#1C0A30" rounded variant="outlined"  > step 2</v-btn>
                  <img :src="gcash" alt="gcash" srcset="" width="60px" height="60px">
                </v-card-title>
                <v-card-title class="text-capitalize  text-left earn no-truncate"  >Earn when you win</v-card-title>
                <v-card-subtitle class="text-capitalize text-left receive no-truncate">
                  <p>Receive a compounding cash amount for each </p>
                  <p>correct prediction you make.</p>
                </v-card-subtitle>
              </v-card-item>
              <v-card-text  class="d-flex justify-space-between align-center" >
                <div class="cardBg2Content1" style="width: 75%; border: 1px solid orangered;">
                  <div class="text-left eachPrediction" >
                    Each correct prediction doubles your winning amount.
                  </div>
                  <div class=" text-left multiplePrediction " >
                    Make multiple predictions on a <br> bet for a chance to win more.
                    <div  class="text-left betPrediction">
                       <p >2 prediction = <b>4x</b>  the bet</p>
                      <p >3 prediction = <b>8x</b>  the bet</p>
                    </div>
                  </div>
                  <div class=" text-left neverLoose" >
                    You never completely lose your bet <br> even with wrong predictions
                    <div class="oneStar">If you are one star away from the correct prediction, you get 80% of your bet back.</div>
                    <div class="twoStar">If you Are two stars away from the correct prediction, you get 50% of your bet back.</div>
                  </div>
                </div>
                <div style=" width: 25%; border: 1px solid darkblue" class="noContent">
                  <img :src="phone3" alt="" srcset="">
                </div>

              </v-card-text>


            </v-card>
          </slide>
          <slide >
            <v-card variant="outlined" rounded class="cardBg3 slideSize"  >
              <v-card-item>
                <v-card-title class="d-flex justify-space-between align-center" >
                  <v-btn color="#21FF00" rounded  variant="outlined" class=""  > step 3</v-btn>
                  <div style="width: 60px;height: 60px;background-color: #106B00" class="rounded-circle d-flex justify-center align-center">
                    <img :src="bankimg" alt="bankImg" srcset="">
                  </div>
                </v-card-title>
                <v-card-title class="text-capitalize text-left  winnings no-truncate"   >Withdraw your winnings</v-card-title>
                <v-card-subtitle class="text-capitalize text-left font-weight-light no-truncate">
                  <p class="text-left receiveWinning">Receive your winnings as cash when you </p>
                  <p class="text-left receiveWinning">withdraw it into your bank account</p>
                </v-card-subtitle>
              </v-card-item>
              <v-card-text  class="">
               <div  class="step3Background  ">
                 <img :src="transparentIcon" alt="" class="transimg2" srcset="" width="220px" height="200px">
                 <div class="laptopMan noContent">
                   <img :src="laptopman" alt="" srcset="">
                 </div>
                 <div class=" logo"><img :src="logoblack" alt="" srcset="" ></div>

                 <div class="widthdrawlWrapper">
                   <div class="text-left">
                     <h3  class="successful"> <b>Withdrawal Successful</b> </h3>
                     <p class="fnw">Fast and instant</p>
                     <p  class="fnw">withdrawal</p>
                   </div>

                 </div>

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
<!--    <img :src="secton2bg" class="section2bg" alt="" srcset="">-->
  <div class="text-center  testimonial">TESTIMONIAL FROM OUR PLAYERS</div>
    <div class="d-flex justify-space-between align-start  section2sides" >
      <div class="d-flex justify-space-between flex-wrap align-center section2content1 " style=" width: 60%" >
     <div class="d-flex w-100 flex-wrap ga-2 justify-space-between align-center">
      <v-card   v-for="item in cards"  :key="item.id" :width="item.width"  variant="outlined" class="cardsBg " >
        <v-card-item>
          <v-card-title>
            <v-avatar size="40" :image="avatar1" ></v-avatar> <span  class="avatarTitle">Folashade</span>
          </v-card-title>
          <v-card-subtitle class="no-truncate text-white mt-3 avatarSubtitle">
            I’ve tried many betting sites, but this one stands out. The promotions are unbeatable, and I love the daily jackpots!
          </v-card-subtitle>
        </v-card-item>
      </v-card>
     </div>

      </div>
        <div class="section2content2" style="width: 37%; ">
          <div class="d-flex ga-5 align-center  socialComments" v-for="item in socialReview"  :key="item.id" >
            <div> <v-avatar size="50" :image="insta"></v-avatar>  </div>
            <div class="" style="width:80%">
              <p class="text-white titles">{{ item.title }}</p>
               <p class="text-white subtitles">{{ item.subtitle }}</p>
            </div>
          </div>

        </div>
    </div>
  </div>
  <div class="section3"  >
    <div class="section3Bg  ">
      <img :src="transparentIcon" alt="" srcset="" class="section3TransBg">
      <img :src="manPhone" alt="" sizes="" width="350px" height="380px" srcset=""  class="align-self-end section3man none">
      <div  class="section3Bg1">
        <img :src="logoblack" alt="" srcset="" class="section3Logo">
        <div class="downloadNow" >Download Now </div>
        <div class="app">Get the app, place your bets, and win big with every game. Fast, easy, and fun!</div>
        <div class="section3Btn"><v-btn variant="flat" class="text-white text-capitalize" style="background-color: #1C0A2F">download now</v-btn></div>
        <div class="d-flex justify-start ga-7  align-center storeWrapper">
          <img :src="appStore" alt="" sizes="" srcset="">
          <img :src="playstore" alt="" sizes="" srcset="">
        </div>
      </div>





    </div>

  </div>
  <div class="section4" >
    <div class="text-center section4headerText"  >customer <span class="color3" >support</span></div>
    <div class="d-flex justify-space-between align-start section4ContentWrapper" >
        <div style="width: 50%;" class="section4content1">
          <h3  class="text-white problem">Are You Facing Any <span class="color3">Problem .?</span> </h3>
          <div class="assistance" >
            For any assistance, you can open a support ticket, and our team will help you as soon as possible. If you need instant support, reach out via WhatsApp for a quicker response.
          </div>

          <div class="w-100 d-flex ga-5 align-center mTicket" >
            <v-btn prepend-icon="mdi mdi-whatsapp"  style="background-color: #28EF0D;color: #000" variant="flat" >message now </v-btn>
            <v-btn prepend-icon="mdi mdi-ticket"  variant="outlined" color="white"> open a ticket</v-btn>
          </div>

        </div>
      <div style="width: 50%; " class="text-right section4content2">
        <img :src="support" alt="" srcset="">
      </div>
    </div>

  </div>
  <div class="section5" >
    <div class="text-center section5HeaderText" style="font-size: 48px"> Connect <span class="color2">With</span>  US </div>
    <div class="d-flex justify-space-between align-start mt-16 section5ContentWrapper" >
      <div style="  " class="section5content1" >
        <div>
          <label class="mailLabel">Enter Your Mail</label>
          <div>
            <input type="email" name="" placeholder="Example@gmail.com" id="">
          </div>
        </div>

        <div class="messageLableWrapper">
          <label class="messageLabel">Input Message</label>
          <textarea name="" id="" cols="30" rows="10" placeholder="write your message"></textarea>
        </div>

        <div class="sendWrapper">
          <v-btn color="#21FF00" style="border-radius: 20px" class="mb-5 color3 send">send</v-btn>
        </div>

        <div class="d-flex justify-space-between align-center section5FooterContent" >
          <div style="width: 65%; ">
            <div class="d-flex justify-start align-center ga-2 text-white" >
              <v-icon  size="20" icon="mdi mdi-instagram"> </v-icon>
              <v-icon size="20" icon="mdi mdi-twitter"></v-icon>
              <v-icon size="20" icon="mdi mdi-facebook"></v-icon>

            </div>
            <div class="">
              <img :src="logotrans" alt="logo white" srcset="" class="logotrans" >
              <p class="opacity-70 sh">@starHunt</p>
            </div>
<div class="customerStar"> custumer@starHunt.com  </div>
          </div>
          <img :src="whatsapp" alt="" srcset="" class="barcode"  >
        </div>

      </div>

      <div style="width: 50%; border: 1px solid red " class="text-right section5content2">
        <img :src="map" alt="" srcset=""  class="map" >
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
import laptopman from "../assets/img/laptopman.png"
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
import logowhite from "../assets/img/logowhite.png"
import transparentIcon from "../assets/img/transparentIcon.png"
import star from "../assets/img/Star.png"
import gcash from "../assets/img/gcash.png"
import bankimg from "../assets/img/bankimg.png"
import logotrans from "../assets/img/logotrans.png"

const  successTip = ref([
  {id:1 ,title: 'Analyze Trends', subtitle: 'Review past outcomes to help you make informed predictions.'},
  {id:2 ,title: 'Control Your Bets', subtitle: 'Bet carefully while trying to win big.'},
  {id:3 ,title: 'Keep Track', subtitle: 'Monitor your progress and adjust your strategy if needed'},
])
const cards = ref([
  {id:1 , width:285},
  {id:2, width:285},
  {id:3, width:175},
  {id:4, width:175},
  {id:5, width:175},
])

const  settings = ref(  {
  itemsToShow: 1,
  snapAlign: 'end',
})
const breakpoints = ref(  {
  650: {
    itemsToShow: 1.2,
    snapAlign: 'center',
  },
  // 700px and up
  700: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  900: {
    itemsToShow: 1.7,
    snapAlign: 'center',
  },
  1500: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },

})


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
  background-image: url("../assets/img/page1bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid red;
  .landingContentWrapper {
    //padding: 4% 0;
    border: 1px solid mediumvioletred;
    //padding: 40px 40px;
    margin: 0 34px 0 75px;
    .landingContent1 {
      width: 50%;
      //border: 1px solid blue;
     .unleash {
       color: #FFF;
       font-family: "biennale-black";
       font-size: 24px;
       font-style: normal;
       font-weight: 900;
       line-height: 50px; /* 208.333% */
     }
      .betPlay {
        color: #FFF;
        font-family: "biennale-black";
        font-size: 62px;
        font-style: normal;
        font-weight: 900;
        line-height: 55px; /* 85.938% */
        border: 1px solid orange;
        height: auto;
        width:90%;
        .dominate {
          background: linear-gradient(to right, #1EE500,#30FF11,#1EE500, #fff,#30FF11);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      }
      .pickYourStar {
        margin: 1% 0;
        color: #fff;
        font-family: "biennale-regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
        text-transform: capitalize;
        width: 90%;
        opacity: 0.8;
        border: 1px solid pink;
      }
      .btnStyle {
        margin-top: 12px;
        color: #1C0A30;
        text-align: center;
        font-family: "biennale-black";
        font-size: 16px;
        font-style: normal;
        font-weight: 900;
        //line-height: 50px; /* 312.5% */
      }
    }
    .landingContent2 {
      width:  50%;
      border:  1px solid pink;
    }
  }
}
.section1 {
  height: auto;
  background-color: #1C0A2F;;
  padding: 20px 0;
  border: 1px solid mediumaquamarine;
  .howTo {
    color: #fff;
    margin: 58px 0 0 0;
    font-family: "biennale-black";
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 20px; /* 41.667% */
    text-transform: uppercase;
  }
  .carouselContainer {
    //padding: 40px 40px;
    margin: 74px 0 0 0;
    border:1px solid gold;
    .cardBg1 {
      background: #1C0A30;
      padding: 38px 10px;
      border-radius: 24px;
      border: 1px solid #FFF;
      box-shadow: 341px 174px 107px 0px rgba(107, 90, 124, 0.00), 218px 111px 98px 0px rgba(107, 90, 124, 0.01), 123px 62px 83px 0px rgba(107, 90, 124, 0.05), 55px 28px 61px 0px rgba(107, 90, 124, 0.09), 14px 7px 34px 0px rgba(107, 90, 124, 0.10);
      .star {
        width: 72px;
        height: 72px;
        background-color: #106B00;
      }
      .makeYour {
        color: #FFF;
        font-family: "biennale-black";
        font-size: 25px;
        font-style: normal;
        font-weight: 900;
        line-height: 20px; /* 50% */
        text-transform: capitalize;
        margin: 20px 0 3px  0 ;
      }
      .chooseStar {
        color: #FFF;
        font-family: "biennale-regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px; /* 100% */
        text-transform: capitalize;
        opacity: 0.6;
      }
      .successTip {
        color: #B29BC9;
        font-family: "biennale-regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 100% */
        text-transform: capitalize;
        margin: 20px 0 2px 0;
      }
      .ackWrapper {
        background-color: #230B3E;
        padding: 10px;
        margin: 13px 0  0 0;
        border: 1px dotted blue;
        .title {
          color: #0FD600;
          font-family: "biennale-black";
          font-size: 16px;
          font-style: normal;
          font-weight: 900;
          line-height: 20px; /* 100% */
          text-transform: capitalize;
        }
        .subtitle {
          color: #B29BC9;
          font-family: "biennale-thin";
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 15px; /* 115.385% */
          text-transform: capitalize;
        }
      }
    }
    .cardBg2 {
      height: auto !important;
      position: relative;
      padding: 38px 10px;
      border-radius: 24px;
      background: #21FF00;
      box-shadow: 341px 174px 107px 0px rgba(107, 90, 124, 0.00), 218px 111px 98px 0px rgba(107, 90, 124, 0.01), 123px 62px 83px 0px rgba(107, 90, 124, 0.05), 55px 28px 61px 0px rgba(107, 90, 124, 0.09), 14px 7px 34px 0px rgba(107, 90, 124, 0.10);
      .transimg {
        position: absolute !important;
        bottom: 0;
        right: 0;
      }
      .earn {
        color: #1C0A30;
        font-family: "biennale-black";
        font-size: 25px;
        font-style: normal;
        font-weight: 900;
        line-height: 20px; /* 50% */
        text-transform: capitalize;
        margin: 20px 2px  0;
      }
      .receive {
        color: #29183C;
        font-family: "biennale-regular";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 100% */
        text-transform: capitalize;
      }
      .eachPrediction {
        display: flex;
        padding: 18px 19px;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 7px;
        border: 1px solid #1C0A30;
        background: rgba(161, 255, 0, 0.60);
        color: #1C0A30;
        font-family: "biennale-regular";
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px; /* 115.385% */
        text-transform: capitalize;
        margin-top: -5px;
      }
      .multiplePrediction {
        display: flex;
        width: 100%;
        padding: 12px 18px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        border-radius: 7px;
        border: 1px solid black;
        color: #1C0A30;
        font-family: "biennale-regular";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px; /* 107.143% */
        text-transform: capitalize;
        margin: 23px 0 13px 0;
        .betPrediction {
          display: flex;
          width: 80%;
          padding: 6px 18px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          border-radius: 7px;
          border: 1px solid #A1FF00;
          background: rgba(161, 255, 0, 0.60);
          color: #1C0A30;
          font-family: "biennale-regular";
          font-size: 11px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 181.818% */
          text-transform: capitalize;
          margin: 5px 0 0 0;
        }
      }
      .neverLoose {
        display: flex;
        //width: 374px;
        width: 100%;
        padding: 12px 18px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        border-radius: 7px;
        border: 1px solid #1C0A30;
        color: #1C0A30;
        font-family: "biennale-regular";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px; /* 107.143% */
        text-transform: capitalize;
        .oneStar {
          display: flex;
          padding: 9px 0px 9px 18px;
          align-items: center;
          gap: 10px;
          border-radius: 7px;
          border: 1px solid #FFF;
          background: rgba(161, 255, 0, 0.60);
          color: #1C0A30;
          font-family: "biennale-regular";
          font-size: 11px;
          font-style: normal;
          font-weight: 400;
          line-height: 15px; /* 136.364% */
          text-transform: capitalize;
        }
        .twoStar {
          display: flex;
          padding: 9px 18px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 7px;
          border: 1px solid #FFF;
          background: rgba(161, 255, 0, 0.60);
          color: #1C0A30;
          font-family: "biennale-regular";
          font-size: 11px;
          font-style: normal;
          font-weight: 400;
          line-height: 15px; /* 136.364% */
          text-transform: capitalize;
        }
      }
    }
    .cardBg3 {
      background: #1C0A30;
      padding: 38px 10px;
      border-radius: 24px;
      border: 1px solid #FFF;
      .winnings {
        color: #FFF;
        font-family: "biennale-black";
        font-size: 25px;
        font-style: normal;
        font-weight: 900;
        line-height: 20px; /* 50% */
        text-transform: capitalize;
        margin: 30px 0 4px 0;
      }
      .receiveWinning {
        color: #FFF;
        font-family: "biennale-regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 100% */
        text-transform: capitalize;
      }
      .step3Background {
        position: relative;
        width: 100%;
        height: 272px;
        border-radius: 19px;
        background: #21FF00;
        margin: 55px auto 0 auto;
        .logo {
           padding: 12px 0 0 21px;
          text-align: left;
        }
        .widthdrawlWrapper {
          margin: 60px 0 0 0;
          padding: 0 0 0 21px;
          .successful {
            color: #1C0A30;
            font-family: "biennale-black";
            font-size: 24px;
            font-style: normal;
            font-weight: 900;
            line-height: 40px; /* 166.667% */
            text-transform: capitalize;
          }
          .fnw {
            color: #1C0A30;
            font-family: "biennale-regular";
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px; /* 125% */
            text-transform: capitalize;
          }
        }
        .transimg2 {
          position: absolute;
          bottom: 12px !important;
          right: 45px !important;
        }
        .laptopMan {
          position: absolute;
          bottom: 0;
          right: 30px;
        }
      }
    }
  }
}
.section2 {
  height: auto;
  background-color: #1C0A30;
  padding: 40px 0;
  position: relative;
  background-image: url("../assets/img/section2Bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden !important;
  border: 1px solid yellow;
  //.section2bg {
  //  position: absolute;
  //  top: 25%;
  //  z-index: 0;
  //}
  .testimonial {
    color: #FFF;
    font-family: "biennale-black";
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 12px; /* 50% */
    text-transform: capitalize;
    margin: 0 0 50px 0;
  }
  .section2sides {
    border: 1px solid gold;
    padding: 0 60px;
    .section2content1 {
      border: 1px solid burlywood;
      padding: 0;
      margin: 0;
    }
    .section2content2 {
      .socialComments {
        display: flex;
        width: 447px;
        height: 84px;
        padding: 6px 4px;
        align-items: center;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.50);
        background: rgba(62, 21, 107, 0.34);
        box-shadow: 139px 166px 61px 0px rgba(0, 0, 0, 0.00), 89px 106px 55px 0px rgba(0, 0, 0, 0.01), 50px 60px 47px 0px rgba(0, 0, 0, 0.05), 22px 27px 35px 0px rgba(0, 0, 0, 0.09), 6px 7px 19px 0px rgba(0, 0, 0, 0.10);
        margin: 0 0 30px 0;
        .titles {
          color: #FFF;
          font-family: "biennale-bold";
          font-size: 10px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-transform: capitalize;
        }
        .subtitles {
          color: #FFF;
          font-family: "biennale-regular";
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 12px; /* 100% */
          text-transform: capitalize;
        }
      }
    }
  }
  .no-truncate {
    white-space: normal; /* Allows text to wrap instead of truncating */
    overflow: visible;   /* Removes the truncation effect */
    text-overflow: unset; /* Unsets the ellipsis */
  }
  .cardsBg {
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.50);
    background: rgba(62, 21, 107, 0.34);
    box-shadow: 100px 59px 33px 0px rgba(0, 0, 0, 0.00), 64px 37px 30px 0px rgba(0, 0, 0, 0.01), 36px 21px 25px 0px rgba(0, 0, 0, 0.05), 16px 9px 19px 0px rgba(0, 0, 0, 0.09), 4px 2px 10px 0px rgba(0, 0, 0, 0.10);
    margin: 0 0 30px 0;
    .avatarTitle {
      color: #21FF00;
      font-family: "biennale-bold";
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
    }
    .avatarSubtitle {
      color: #FFF;
      font-family: "biennale-regular";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 12px; /* 100% */
      text-transform: capitalize;
    }
  }
}
.section3 {
  height: auto;
  background: var(--linear-P, linear-gradient(105deg, #1C0A30 3.71%, #330E5B 76.94%));
  padding: 106px 133px 62px 101px;
  .section3Bg {
    position: relative;
    background-color: #21FF00;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    width: 90%;
    margin: 0 auto !important;
    border-radius: 40px;
    .section3Bg1 {
      width: 100%;
      border: 1px solid red;
      .section3Logo {
        margin: 45px 0 0 54px;
      }
      .downloadNow {
        color: #1C0A2F;
        font-family: "biennale-black";
        font-size: 48px;
        font-style: normal;
        font-weight: 900;
        line-height: 40px; /* 83.333% */
        text-transform: capitalize;
        margin: 70px 0 0 54px;
      }
      .app {
        color: #1C0A2F;
        font-family: "biennale-regular";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px; /* 125% */
        text-transform: capitalize;
        width: 400px;
        border: 1px solid darkgoldenrod;
        margin: 2px 0 0 54px;
      }
      .section3Btn {
        margin: 24px 0 0 54px;
      }
      .storeWrapper {
        margin: 45px 0 0 54px;
      }
    }
    .section3man {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .section3TransBg {
      position: absolute;
      top: 30px;
      right: 180px;
      width: 450px;
      height: 420px;
    }
  }
}
.section4 {
  height: auto;
  background-color: #330E5B;
  background-image: url("../assets/img/section4bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .section4headerText {
    color: #FFF;
    text-align: center;
    font-family: "biennale-black";
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 12px; /* 25% */
    text-transform: capitalize;
    padding: 57px 0 0 0;
  }
  .section4ContentWrapper {
    margin: 100px 0 0 0 ;
    border: 1px solid orange;
    padding: 0 90px 70px 62px;
    .section4content1 {
      .problem {
        color: #FFF;
        font-family: "biennale-black";
        font-size: 48px;
        font-style: normal;
        font-weight: 900;
        line-height: 55px; /* 114.583% */
        text-transform: capitalize;
      }
      .assistance {
        color: #FFF;
        font-family: "biennale-regular";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 125% */
        text-transform: capitalize;
        margin: 16px 0 0 0 ;
        opacity: 0.8;
      }
      .mTicket {
        margin: 100px 0 0 0 ;
      }
    }
  }
}
.section5 {
  background-color: #1C0A30;
  //background-color: #050207;
   padding: 40px;
  height: auto;
  background-image: url("../assets/img/section6bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .section5HeaderText {
    color: #FFF;
    text-align: center;
    font-family: "biennale-black";
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 12px; /* 25% */
    text-transform: capitalize;
    margin: 70px 0 0 0 ;
  }
  .section5ContentWrapper {
    border: 1px solid blue;
    margin: 48px 0 0 0 ;
    .section5content1 {
      width: 563px;
      border: 1px solid green;
      .mailLabel {
        color: #FFF;
        font-family: "biennale-black";
        font-size: 24px;
        font-style: normal;
        font-weight: 900;
        line-height: 12px; /* 50% */
        text-transform: capitalize;
      }
      .messageLableWrapper {
        margin: 36px 0 0 0;
        .messageLabel {
          color: #FFF;
          font-family: "biennale-regular";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 12px; /* 50% */
          text-transform: capitalize;
        }
      }
      .sendWrapper {
        margin: 36px 0 0 0;
        .send {
          color: var(--Gray-1, #333);
          font-family: "biennale-black";
          font-size: 20px;
          font-style: normal;
          font-weight: 900;
          line-height: 12px; /* 50% */
          text-transform: capitalize;
        }
      }

      input {
        display: flex;
        height: 38px;
        padding: 4px 9px;
        align-items: center;
        border: 1px solid #FFF;
      }
      textarea {
        display: flex;
        height: 117px;
        padding: 15px 9px;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
        background: #FFF;
        color: #1C0A30;
      }
      .section5FooterContent {
        height: 229px;
        padding: 15px 34px;
        border-radius: 21px;
        border: 1px solid #FFF;
        background: rgba(217, 217, 217, 0.19);
        backdrop-filter: blur(10px);
        .logotrans{
          width: 150px !important;
          height: 55px !important;
        }
        .sh {
          color: #FFF;
          font-family: "biennale-regular";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .customerStar {
          width: 254px;
          //display: flex;
          padding: 5px 5px;
          //justify-content: center;
          //align-items: center;
          border-radius: 2px;
          background: #FFF;
          color: #000;
          font-family: "biennale-semibold";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }
    .section5content2 {

    }
  }
}

@media screen and (min-width: 1250px) {
  .landingContainer {
    .landingContentWrapper {
      .landingContent2 {
        text-align: center !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
      }
    }
  }
  .section1 {
    .carouselContainer {
      border: 2px solid darkorange;
      padding: 100px 0;
    }
  }
  .section2 {
    padding: 200px 0;
    .section2sides{
      .section2content2{
        display: flex !important;
        flex-wrap: wrap;
        justify-content: center !important;
        align-items: center !important;
      }
    }
  }
  .section3 {
    padding: 206px 101px 202px 101px !important;
    .section3Bg {
      margin: 0 auto !important;
    }
  }
  .section4 {
padding: 100px 0;
  }
  .section5 {
    padding: 100px 40px;
  }
}

@media screen and (max-width: 1200px) {
  .section1 {
    .cardBg1 {
      .cardBg1Content1 {
        width: 100% !important;
      }
    }
    .cardBg2 {
      .cardBg2Content1 {
        width: 100% !important;
      }
    }
    .cardBg3 {
      .cardBg3Content1 {
        width: 100% !important;
      }
    }
   .noContent {
     display: none !important;
   }
  }
  .section2 {
  .section2sides {
    padding: 0 !important;
    .section2content2 {
      .socialComments {
        width: 100%;
      }
    }
  }
  }
}
@media screen and (max-width: 1056px) {
  .section3 {
    .none {
      display: none !important;
    }
    .section3TransBg {
      position: absolute;
      top: 30px;
      right: 100px !important;
      width: 400px !important;
      height: 380px !important;
    }
  }
}
@media screen and (max-width: 968px) {
.section2sides {
  display: flex;
  flex-wrap: wrap;
  .section2content1 {
    width: 100% !important;
    margin: 2% 0 5% 0 ;
    .cardsBg {
      width: 285px !important;
    }
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
  .section5 {
    .section5ContentWrapper {
      .section5content2 {
        img {
          width: 200px !important;
          height: 300px !important;
        }
      }
    }
  }
}

@media screen and (max-width: 868px) {
.section2 {
  .section2sides{
    padding: 0 30px !important;
    .section2content1 {
      .cardsBg {
        width: 45% !important;
      }
    }
  }

}
  .section4 {
    .section4ContentWrapper {
      margin: 100px 0 0 0 ;
      border: 1px solid orange;
      padding: 0 10px 70px 10px !important;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
    }
  }
  .section5 {
    .section5content1 {
      .section5FooterContent {
        margin: 20px 0 0 0 !important;
        .customerStar {
          font-size: 16px !important;
         //justify-content: start !important;
          width: 80% !important;
        }
      }
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
      //border: 1px solid red;
      .unleash {
        margin: 3% 0;
      }
      .pickYourStar {
        margin: 1% 0 16px 0;
      }
    }
    .landingContent2 {
      width: 100% !important;
      //border: 1px solid green;
    }
  }
}
  .section3 {
    .section3Bg {
      .section3Bg1 {
        position: relative;
        width: 100% !important;
        border: 1px solid green;
        .section3Logo {
          margin: 45px 0 0 54px;
        }
        .section3man {
          position: absolute;
        }
      }
      .section3Bg2 {
        display: none !important;
      }
    }
  }
  .section4 {
    height: auto !important;
    padding: 100px 0;
    .section4ContentWrapper {
      display: flex !important;
      flex-wrap: wrap !important;
      .section4content1 {
        width: 100% !important;
        margin: 3% 0;
        .mTicket {
          justify-content: center !important;
        }
      }
      .section4content2 {
        width: 100% !important;
        text-align: center !important;
        border: 1px solid purple;
        margin: 40px 0 0 0 ;
      }
    }
  }
  .section5 {
    .section5ContentWrapper {
      .section5content1 {
        .section5FooterContent {
          padding: 0 15px !important;
          .customerStar {
            font-size: 14px !important;
            width: auto !important;
          }
          .barcode {
            width: 120px !important;
            height: 150px !important;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 698px) {
  .landingContainer {
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    .landingContentWrapper {
      display: flex !important;
      flex-wrap: wrap;
      .landingContent1 {
        width: 100% !important;
        //border: 1px solid red;
        .unleash {
          margin: 3% 0;
        }
        .pickYourStar {
          margin: 1% 0 16px 0;
        }
      }
      .landingContent2 {
        width: 100% !important;
        //border: 1px solid green;
      }
    }
  }
  .section3 {
    padding: 106px 20px 122px 20px !important;
    .section3Bg {
      margin: 0 auto !important;
      .section3Bg1 {
        position: relative;
        width: 100% !important;
        border: 1px solid green;
        .section3Logo {
          margin: 45px 0 0 54px;
        }
        .section3man {
          position: absolute;
        }
      }
      .section3Bg2 {
        display: none !important;
      }
    }
  }
  .section4 {
    height: auto !important;
    padding: 100px 0;
    .section4ContentWrapper {
      display: flex !important;
      flex-wrap: wrap !important;
      .section4content1 {
        width: 100% !important;
        margin: 3% 0;
        .problem {
          color: #FFF;
         text-align: center !important;
        }
        .mTicket {
          justify-content: center !important;
        }
      }
      .section4content2 {
        width: 100% !important;
        text-align: center !important;
        border: 1px solid purple;
        margin: 40px 0 0 0 ;
      }
    }
  }
  .section5 {
    .section5ContentWrapper {
      flex-wrap: wrap !important;
      .section5content1 {

        .section5FooterContent {
          padding: 0 15px !important;
          .customerStar {
            font-size: 14px !important;
            width: auto !important;
            margin: 15px 0 0 0 !important;
          }
          .barcode {
            width: 120px !important;
            height: 150px !important;
          }
          .logotrans {
            height: 50px !important;
            width: 120px !important;
          }
        }
      }
      .section5content2 {
        margin: 20px 0 0 0 !important;
        width: 100% !important;
        border: 1px solid gold !important;
        text-align: left !important;

        .map {
          width: auto !important;
          margin: 0 auto !important;
          text-align: left !important;
        }
      }
    }
  }
}

@media screen and (max-width: 568px) {
  .landingContainer {
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    .landingContentWrapper {
      display: flex !important;
      flex-wrap: wrap;
      margin: 0 20px 0 20px !important;
      .landingContent1 {
        width: 100% !important;
        border: 1px solid red !important;
        .unleash {
          margin: 3% 0;
        }
        .pickYourStar {
          margin: 1% 0 16px 0;
        }
      }
      .landingContent2 {
        width: 100% !important;
        //border: 1px solid green;
      }
    }
  }
  .section2 {
    padding: 10px !important;
    .cardsBg {
      width: 175px !important;
    }
  }
  .section3 {
    padding: 106px 20px 122px 20px !important;
    .section3Bg {
      margin: 0 auto !important;
      .section3Bg1 {
        position: relative;
        width: 100% !important;
        border: 1px solid green;
        .section3Logo {
          margin: 45px 0 0 54px;
        }
        .section3man {
          position: absolute;
        }
      }
      .section3Bg2 {
        display: none !important;
      }
    }
  }
  .section4 {
    height: auto !important;
    padding: 100px 0;
    .section4ContentWrapper {
      display: flex !important;
      flex-wrap: wrap !important;
      .section4content1 {
        width: 100% !important;
        margin: 3% 0;
        .problem {
          color: #FFF;
          text-align: center !important;
        }
        .assistance {
          text-align: center !important;
        }
        .mTicket {
          justify-content: center !important;
        }
      }
      .section4content2 {
        width: 100% !important;
        text-align: center !important;
        border: 1px solid purple;
        margin: 40px 0 0 0 ;
      }
    }
  }
  .section5 {
    padding: 20px !important;
    .section5ContentWrapper {
      flex-wrap: wrap !important;
      .section5content1 {

        .section5FooterContent {
          padding: 0 15px !important;
          .customerStar {
            font-size: 14px !important;
            width: auto !important;
            margin: 15px 0 0 0 !important;
          }
          .barcode {
            width: 120px !important;
            height: 150px !important;
          }
          .logotrans {
            height: 50px !important;
            width: 120px !important;
          }
        }
      }
      .section5content2 {
        margin: 20px 0 0 0 !important;
        width: 100% !important;
        border: 1px solid gold !important;
        text-align: left !important;

        .map {
          width: auto !important;
          margin: 0 auto !important;
          text-align: left !important;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .landingContainer {
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    .landingContentWrapper {
      display: flex !important;
      flex-wrap: wrap;
      margin: 0 20px 0 20px !important;
      .landingContent1 {
        width: 100% !important;
        border: 1px solid red !important;
        .unleash {
          margin: 3% 0;
        }
        .betPlay {
          width: 100% !important;
        }
        .pickYourStar {
          margin: 1% 0 16px 0;
          width: 100% !important;
        }
      }
      .landingContent2 {
        width: 100% !important;
        //border: 1px solid green;
      }
    }
  }
  .section2 {
    padding: 10px !important;
    .cardsBg {
      width: 175px !important;
    }
  }
  .section3 {
    padding: 106px 10px 122px 10px !important;
    .section3Bg {
      .section3Bg1 {
        .app {
          width: 80% !important;
        }
      }
    }
    .section3Bg {
      margin: 0 auto !important;
      .section3Bg1 {
        position: relative;
        width: 100% !important;
        border: 1px solid green;
        .section3Logo {
          margin: 45px 0 0 54px;
        }
        .section3man {
          position: absolute;
        }
      }
      .section3Bg2 {
        display: none !important;
      }
    }
  }
  .section4 {
    height: auto !important;
    padding: 100px 0;
    .section4ContentWrapper {
      display: flex !important;
      flex-wrap: wrap !important;
      .section4content1 {
        width: 100% !important;
        margin: 3% 0;
        .problem {
          color: #FFF;
          text-align: center !important;
        }
        .assistance {
          text-align: center !important;
        }
        .mTicket {
          justify-content: center !important;
        }
      }
      .section4content2 {
        width: 100% !important;
        text-align: center !important;
        border: 1px solid purple;
        margin: 40px 0 0 0 ;
      }
    }
  }
  .section5 {
    padding: 20px !important;
    .section5ContentWrapper {
      flex-wrap: wrap !important;
      .section5content1 {
        .section5FooterContent {
          padding: 0 15px !important;
          .customerStar {
            font-size: 14px !important;
            width: auto !important;
            margin: 15px 0 0 0 !important;
          }
          .barcode {
            width: 100px !important;
            height: 120px !important;
          }
          .logotrans {
            height: 40px !important;
            width: 100px !important;
          }
        }
      }
      .section5content2 {
        margin: 20px 0 0 0 !important;
        width: 100% !important;
        border: 1px solid gold !important;
        text-align: left !important;

        .map {
          width: auto !important;
          margin: 0 auto !important;
          text-align: left !important;
        }
      }
    }
  }
}

</style>