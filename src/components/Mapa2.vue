<template>
  <div class="row map">
    <mapbox
      access-token="pk.eyJ1IjoibWlsbzgwMCIsImEiOiJjaXVyMXJyYmowMDVlMnlxeGNrcWplbTgxIn0.HLuNoJhMYaSb04Wl9oAFBQ"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 7,
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
      :scale-control="{
        show: true,
        position: 'top-left',
      }"
      :fullscreen-control="{
        show: true,
        position: 'top-left',
      }"
      @map-load="loaded"
      @map-zoomend="zoomend"
      @map-click:points="clicked"
      @geolocate-error="geolocateError"
      @geolocate-geolocate="geolocate"
    />
  </div>
</template>

<script lang="js">
import Mapbox from 'mapbox-gl-vue';

export default {
name: 'Mapa2',
components: {
  Mapbox
},
data : function () {
  return {
    map: null
  }
},
methods: {
    loaded(map) {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-77.03238901390978, 38.913188059745586],
                },
                properties: {
                  title: 'Mapbox DC',
                  icon: 'monument',
                },
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-122.414, 37.776],
                },
                properties: {
                  title: 'Mapbox SF',
                  icon: 'harbor',
                },
              },
            ],
          },
        },
        layout: {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top',
        },
      })
      // map.resize()
    },
    zoomend(map, e) {
      console.log('Map zoomed')
    },
    clicked(map, e) {
      const title = e.features[0].properties.title
      console.log(title)
    },
    geolocateError(control, positionError) {
      console.log(positionError)
    },
    geolocate(control, position) {
      console.log(
        `User position: ${position.coords.latitude}, ${position.coords.longitude}`
      )
    }
  }

}
</script>

<style scoped>
  .map {
    margin: 1em auto;
    border: 2px dashed black;
    width: 100%;
    width: 800px;
    height: 600px;
    min-height: 100%;
    display: inline-block;
  }
 /* .map {
      margin: 1em auto;
      height:70%;
      border: 2px dashed black;
  }    */  
</style>
