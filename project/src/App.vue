<template>
  <div class="container-fluid">
    <menyu></menyu>
    
    
<router-view></router-view>
<altbilgi></altbilgi>





 </div>
</template>


<script>

import menyu from './components/navbar.vue'
import altbilgi from './components/footer'



export default {

components: {
menyu,
altbilgi
  }
}

</script>

<style scoped>

*{
  margin: 0;
  box-sizing: border-box;
}

img{
  width: 10300px;
   height: 600px;
  object-fit: cover;
  }

   body{
    background-image: url("./assets/site9.png");
    background-attachment:fixed;
    background-size: cover;
  }
</style>