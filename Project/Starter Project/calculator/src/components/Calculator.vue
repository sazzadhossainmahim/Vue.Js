<template>
  <div
    class="
      grid grid-cols-4
    bg-slate-200
      border border-black
      m-1 p-1 rounded
      w-52
    dark:bg-slate-300
    "
  >
    <div id="" class="col-span-4 bg-red-100 text-4xl border border-black rounded">
      {{ current || "0" }}
    </div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1  border-black" @click="clear">C</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="sign">+/-</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="percent">%</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black bg-orange-400">/</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="append('7')">7</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="append('8')">8</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="append('9')">9</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black bg-orange-400" @click="times">x</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="append('4')">4</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="append('5')">5</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="append('6')">6</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black bg-orange-400" @click="minus">-</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="append('1')">1</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="append('2')">2</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="append('3')">3</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black bg-orange-400" @click="add">+</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black col-span-2" @click="append('0')">0</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black" @click="dot">.</div>
    <div class="border hover:bg-sky-500 rounded m-1 p-1 border-black bg-orange-400" @click="equal"> =</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // msg: String
  },
  data() {
    return {
      current: "",
      previous: null,
      operatorClicked: false,
      operator: null,
    };
  },
  methods: {
    clear() {
      this.current = "";
    },
    sign() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },

    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    },
  },
};
</script>


<style scoped>
</style>
