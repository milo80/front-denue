<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center"> Encabezado</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-center">lib: vue-mapbox/mapbox-gl</p>
      </div>   
      <div class="col">
       <Mapa1 />
      </div>
      <div class="col">
        <h3 class="text-center">Stats</h3>
      </div>  
    </div>
     <div class="row">
      <div class="col">
        <p class="text-center">lib: mapbox-gl-vue</p>
      </div>   
      <div class="col">
        <Mapa2 />
      </div>
      <div class="col">
        <h3 class="text-center">Stats</h3>
      </div>  
    </div>
  </div>
</template>

<script>
// 
import Mapa2 from '../components/Mapa2'
import Mapa1 from '../components/Mapa1'

export default {
  name: "home",
  components: {
    Mapa2,
    Mapa1
  }
};
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    min-height: 900px;
  }

  .fill {
    min-height: 100%;
    height: 100%;
    width: 100%;
    max-width: 100%;
  }

</style>