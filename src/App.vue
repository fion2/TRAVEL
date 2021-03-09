<template>
  <div>
    <div class="header">
      <div><router-link to="/login">login</router-link></div> 
      <div><router-link to="/signup">signup</router-link></div>
      <div><router-link to="/chat">chat</router-link></div>
      <div><router-link to="/search">search</router-link></div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="footer">
      footer
    </div>
    
  </div>
</template>
<style scoped>
.header {
  display: flex;
  background: red;
}


.footer {
  background: yellow;
  width: 100%;
}
</style>