<template>
<div class="navContainer d-flex justify-space-between align-center ">
  <div> App Logo</div>
  <div class=" d-flex justify-space-between align-center navLinkContainer">
    <div> Home </div>
    <div> About</div>
    <div> App</div>
  </div>
  <div>  <v-btn color="indigo" variant="outlined" >support</v-btn>   </div>
</div>
</template>

<script setup>

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
}
</style>