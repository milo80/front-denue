<template>
  <div class="map">
    <MglMap :accessToken="AccessToken"
            :mapStyle="MapStyle"
            :center="[-99.16, 19.4]"
            :zoom= 9
            />
  </div>
</template>

<script>



import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  name: "Mapa1",
  components: {
    MglMap
  },
  data() {
    return {
      AccessToken: "pk.eyJ1IjoibWlsbzgwMCIsImEiOiJjaXVyMXJyYmowMDVlMnlxeGNrcWplbTgxIn0.HLuNoJhMYaSb04Wl9oAFBQ",
      MapStyle: "mapbox://styles/mapbox/streets-v11"
    };
  },
  created() {
    this.mapbox = Mapbox;
  }
};
</script>

<style scoped>

  .map {
    margin: 1em auto;
    border: 3px solid black; 
    width: 800px;
    height: 600px; 
    min-height: 100%;
  }
</style>
