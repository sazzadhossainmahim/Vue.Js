

<template>
  <div id="app">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
        <h1 class="title">
          {{currentPage}}
        </h1>
        <h2 class="subtitle">
        {{currentPage}}Page
        </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- --------------------------------------------- -->


<script>
// -----------------------------
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components:{
    Navbar,
  },
  created(){
  },
  computed:{
    currentPage(){
      return this.$route.name.toLowerCase()
                        .split(' ')
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ');
    },
    navigationLink(){
      return this.$router.options.routes.map(i => {
          return {
              title:i.name,
              url:i.path,
              child:i.child? i.child : []
            }
        });
    }
  }
}
</script>
<!-- 
<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style> -->
