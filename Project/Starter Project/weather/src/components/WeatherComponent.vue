<template>
  <div class="m-1 p-1 box-border font-mono" id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warn':''">
    <div class="bg-cover bg-bottom" id="main">
      <div class="min-h-screen p-6 bg-gradient-to-b from-cyan-50 to-blue-10" id="main">
        <div class="w-full mb-8" id="searchBox">
          <input type="text"
            name=""
            id="searchBar"
            placeholder="Search..."
            class=" w-full p-3 text-cyan-800 rounded-2xl bg-white"
            v-model="query"
            @keypress="fetchWeather"
          />
        </div> 

        <div id="weatherWrap" class="" v-if="typeof weather.main != 'undefined'">
          <div
            id="locationBox"
            class="text-black text-4xl font-medium text-center"
          >
            <div id="location" class="">{{ weather.name }},{{ weather.sys.country}}</div>
            <div id="date" class="text-black">{{ dateBuilder() }}</div>
          </div>
        </div>

        <div
          id="weatherBox" class="text-center inline-block p-2 text-fuchsia-500 text-5xl font-semibold">
          <div id="temp" class="">{{Math.round(weather.main.temp)}}°c</div>
          <div id="weather" class="text-fuchsia-500 text-5xl font-semibold" >{{list.weather.main}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherComponent",
  data() {
    return {

      api_key: '6dd8e004d84138fdc29c25297a097329',
      url_base: 'api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
    }
  },

  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then((res) => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dataBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style>
#app {
  background-image: url("../assets/cold-bg.jpg");
}
</style>