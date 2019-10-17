<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/categorias">Categorias</router-link> |
      <router-link to="/echarts">Echarts</router-link>
    </div>
    <body>
      <router-view />
    </body>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
/*   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center; 
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(31, 31, 214);
}

html, body { 
  height:100%
}

</style>
