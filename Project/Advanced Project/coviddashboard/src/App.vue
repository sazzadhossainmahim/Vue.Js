<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="" class="">

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      arrPositive: [],
      arrHospitalized: [],
      arrInIcu: [],
      arrOnVentilators: [],
      arrRecovered: [] ,
      arrDeaths: []
    };
  },
  async created() {
    // const { data } = await axios.get("https://covidtracking.com/api/us/daily");
    const { data } = await axios.get("https://api.covid19api.com");
    data.forEach(d => {
      const data = moment(d.data, "YYYYMMDD").format("MM/DD");

      const {
        positive,
        hospitalizedCurrently,
        inIcuCurrently,
        onVentilatorCurrently,
        recovered,
        death
      } = d;

      this.arrPositive.push({ date, total: positive });
      this.arrHospitalized.push({ data, total: hospitalizedCurrently });
      this.arrInIcu.push({ data, total: inIcuCurrently });
      this.arrOnVentilators.push({ data, total: onVentilatorCurrently });
      this.arrRecovered.push({ data, total: recovered });
      this.arrDeaths.push({ data, total: death });

      console.log(this.arrPositive)
    })

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
