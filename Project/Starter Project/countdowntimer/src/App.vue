<template>
  <div class="text-red-500 h-fit text-center content-center">
    <CounterTime class="text-center p-2 m-1 font-bold uppercase" />
    <section class="flex space-y-3"></section>
    <section
      class="
        flex
        text-6xl
        justify-center
        content-center
        font-mono
        border-2
        rounded-2xl
        m-3
        p-2
      "
    >
      <div class="">
        {{ displayDays }}
        <div class="label text-sm">days</div>
      </div>

      <span class="">:</span>
      <div class="mx-2">
        {{ displayHours }}
        <div class="label text-sm">Minute</div>
      </div>
      <span class="">:</span>

      <div class="mx-2">
        {{ displayMinutes }}
        <div class="label text-sm">Hours</div>
      </div>
      <span class="">:</span>

      <div class="mx-2">
        {{ displaySeconds }}
        <div class="text-sm">Seconds</div>
      </div>
    </section>
  </div>
</template>

<script>
import CounterTime from "./components/CounterTime.vue";
export default {
  name: "App",
  components: {
    CounterTime,
  },
  //
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
    };
  },
  //
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end(){
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      );
    }
   
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2021,4,10,10,10,10,10);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return console.log('Something is working error');
          // return ;
        }

        const days = Math.floor(distance / this._days);

        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      }, 1000);
    },
  },
  props: ['year', 'month','date','hour','minute','second','millisecond'],
  
};
</script>

<style>
</style>
