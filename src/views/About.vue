<template>
  <div style="border: 2px solid red; width: 60%;margin: 4% auto" class="d-flex justify-space-between  align-center flex-wrap">
    <div v-for="item in paginatedGallery" :key="item.id" class="">
      <div style="width: 200px; height: 200px; border: 1px solid deeppink; color: red" class="rounded-circle text-center d-flex justify-space-between  align-center" >
        {{item.name}} and  fool {{item.subtitle}}
      </div>
    </div>
    <v-pagination
        v-model="currentPage"
        :length="totalPages"
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
    >

    </v-pagination>
   </div>
</template>

<script setup>
import {ref, computed} from "vue";


const currentPage = ref(1)
const  listGallery = ref([
  {id:1, name:"name id 1", subtitle: 'beaf'},
  {id:2, name:'name id 2', subtitle: 'meat'},
  {id:3, name:'name id 3', subtitle: 'turky'},
  {id:4, name:'name id 4', subtitle: 'eran'},
  {id:5, name:'name id 5', subtitle: 'chicken'},
  {id:6, name:'name id 6', subtitle: 'meatball'},
  {id:7, name:'name id 7', subtitle: 'chick'},
  {id:8, name:'name id 4', subtitle: 'eran'},
  {id:9, name:'name id 5', subtitle: 'chicken'},
  {id:10, name:'name id 6', subtitle: 'meatball'},
  {id:11, name:'name id 7', subtitle: 'chick'},
])
const itemsPerPage = ref(4)

const totalPages = computed(() =>
    Math.ceil(listGallery.value.length / itemsPerPage.value)
);

const paginatedGallery = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return listGallery.value.slice(start, end);
});


</script>

<style lang="scss" scoped>

</style>