<template>
<div class="navContainer d-flex justify-space-between align-center ">
  <div><img :src="logomain" alt="App Logo" srcset=""></div>
  <div class=" d-flex justify-space-between align-center navLinkContainer">
    <div class="text-white"> Home </div>
    <div class="text-white"> About </div>
    <div class="text-white"> App </div>
  </div>
  <div>  <v-btn border   class="supportBtn" variant="flat" >support</v-btn>   </div>

  <div class="text-white dnone" @click="showDrawer" > <span  class="mdi mdi-menu"></span> </div>
</div>
  <div>
    <a-drawer
        title=""
        :placement="placement"
        :open="open"
        @close="onClose"
        class="elevation-10 "
        style="background: linear-gradient(180deg, #1b0b31 9.5%, rgb(69,8,141) 31%, rgb(47,14,87) 57%, #45088d 78%, #000 100%) !important;color: white !important; "
    >

      <template #extra>
        <div class="navLogo"><img :src="logoWhite" alt="app logo" width="100px" height="40px" srcset="" ></div>
      </template>


      <div class="d-flex justify-center align-start ga-8 flex-column navDrawer">
        <span><router-link to="" class="inria-sans-regular  text-white" style="font-weight: 700">Home</router-link></span>
        <span><router-link to="" class="inria-sans-regular text-white"  style="font-weight: 700">App</router-link></span>
        <span> <router-link to="" class="inria-sans-regular text-white"  style="font-weight: 700">About</router-link> </span>
      </div>
    </a-drawer>
  </div>


</template>

<script setup>
import { ref } from 'vue'
import logoWhite from "../assets/img/logowhite.png"
import logomain from "../assets/img/logomain.png"
const  open = ref(false)
const placement = ref("right")

const showDrawer = () => {
  open.value = true;
};



const onClose = () => {
  open.value = false;
};



</script>

<style scoped lang="scss">
.navContainer {
  width: 100%;
  color: #fff !important;
  border: 1px solid green;
  display: inline-flex;
  padding: 0 75px 0 32px;
  align-items: center;
  gap: 359px;
  .navLinkContainer {
    width: auto;
    border: 1px solid orange;
    gap: 27px !important;
    font-family: biennale-bold;
    div {
      padding: 0 5px;
      cursor: pointer;
    }
  }
  .supportBtn {
    display: flex;
    padding: 11px 27px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 17px;
    background: #330F59;
    color: #fff;
    font-family: biennale-bold;
    text-transform: capitalize;
  }
  .dnone {
    display: none;
  }
}

@media screen and (max-width: 640px) {
  .dnone {
    display: block !important;
  }
  .navLinkContainer {
    display: none !important;
  }
}
@media screen and (max-width: 568px) {
  .navContainer {
    padding: 10px !important;
  }
}
</style>