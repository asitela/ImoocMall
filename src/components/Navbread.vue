<template>
  <div>
    <div class="nav-breadcrumb-wrap">
      <div class="container">
        <nav class="nav-breadcrumb">
          <a href="/">Home</a>
          <slot name="bread"></slot>
          <!--<slot name="b"></slot>-->
          <!--<slot>这是个插槽</slot>-->
          <!--<span>Goods</span>-->
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navbread'
}
</script>
<style>
</style>
