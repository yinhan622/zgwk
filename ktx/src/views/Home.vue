<template>
  <div class="home">
   <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
  </div>
   
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
   Header,
    Footer
  }
}
</script>
<style >
  html, body {
    height: 100%;
    font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", "\\5FAE软雅黑", STHeiti, "\\534E文细黑", sans-serif;
    margin: 0px;
    padding: 0px;
    background: rgb(18, 18, 18);
   
}
</style>
