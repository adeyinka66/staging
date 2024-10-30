<template>
<div class="navContainer d-flex justify-space-between align-center ">
  <div> App Logo</div>
  <div class=" d-flex justify-space-between align-center navLinkContainer">
    <div> Home </div>
    <div> About </div>
    <div> App </div>
  </div>
  <div>  <v-btn border   style="background-color: #330E5B;color: white" variant="flat" >support</v-btn>   </div>

  <div class="text-white dnone" @click="showDrawer" > <span  class="mdi mdi-menu"></span> </div>
</div>
  <div>
    <a-drawer
        title=""
        :placement="placement"
        :open="open"
        @close="onClose"
        class="elevation-10 "
        style="background: linear-gradient(180deg, #1C0A30 9.5%, rgba(82, 183, 136, 0.75) 31%, #230B3E 57%, #1C0A30 78%, #000 100%) !important; "
    >

      <template #extra>
        <div class="navLogo"><img src="" alt="app logo" width="100px" height="40px" srcset="" ></div>
      </template>


      <div class="d-flex justify-center align-start ga-8 flex-column navDrawer">
        <span><router-link to="" class="inria-sans-regular  text-white">Home</router-link></span>
        <span><router-link to="" class="inria-sans-regular text-white" >App</router-link></span>
        <span> <router-link to="" class="inria-sans-regular text-white" >About</router-link> </span>
      </div>
    </a-drawer>
  </div>


</template>

<script setup>
import { ref } from 'vue'
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
  padding: 20px 40px;
  color: #fff !important;
  .navLinkContainer {
    width: 15%;
    //border: 1px solid orange;
    div {
      padding: 0 5px;
      cursor: pointer;
    }
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
</style>