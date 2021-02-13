<template>

   <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" >Vue </a>
    </div>
    <ul class="nav navbar-nav">
      <li><router-link :to="{name:'products'}">Products</router-link></li>
      <li><router-link :to="{name:'orders'}">Orders</router-link></li>
    </ul>
  </div>
</nav>


</template>
<script>
export default {
    name:'navbar'
}
</script>