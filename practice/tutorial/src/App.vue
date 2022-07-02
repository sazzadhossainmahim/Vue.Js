<template>
  <!-- <div> -->
  <!-- <div>{{ greet }} {{ name }}</div>
  <div v-text="c"></div>
  <div>{{ BindingHtml }}</div>
  <div v-bind:id="BindAttribute">Heading</div>
  <button v-bind:disable="ButtonIsDisable">Bind</button> -->
  <!-- class attribute -->
  <!-- <h2 class="underline">Underline text</h2> -->
  <!-- dynamic class -->
  <!-- <h2 class="underline" v-bind:class="DynamicClass">DynamicBind</h2> -->

  <!-- Inline Style -->
  <!-- Object Syntax -->
  <!-- <h2
    :style="{
      color: InlineBindingStyleColor,
      'font-size': InlineBindingStyleHeader + 'px',
      padding: '20px',
    }"
  >
    Inline Binding Style
  </h2> -->
  <!-- ObjectStyleHeader -->
  <!-- <h3 :style="ObjectStyleHeader">ObjectStyleHeader</h3> -->
  <!-- array Syntax -->
  <!-- <div :style="[ObjectStyleObject, ObjectStyleHeader]">
    ObjectStyleArrayObject
  </div> -->
  <!-- --------------------Conditional Rendering -->
  <!-- <h2 v-if="ConditionIfNum === 0">Conditional Rendering > if</h2>
  <h2 v-else-if="ConditionIfNum < 0">Conditional Rendering > else-if ..</h2>
  <h2 v-else-if="ConditionIfNum > 0">Conditional Rendering > else-if</h2>

  <h2 v-else>Conditional Rendering > else</h2> -->
  <!-- v-show -->
  <!-- <template v-if="vShow">
    <h2>apple</h2>
    <h2>ball</h2>
    <h2>cat</h2>
  </template>
  <h2 v-show="vShowElement">Using v-show</h2> -->

  <!-- List Rendering -->
  <!-- v-for Directive -->

  <!-- <h2 v-for="(ListRendering,index) in ListRenderings" :key="ListRendering">{{index}}{ListRendering}}</h2> -->

  <!-- </div> -->
  <!-- list rendering -->
  <!-- <template v-for="keyAttribute in keyAttributes" :key="keyAttribute">
      <h2>{{ keyAttribute }}</h2>
      <input placeholder="Last name" />
      <hr />
</template> -->

  <!-- Conditional List Rendering -->
  <!-- <template v-for="conditionalListElement in conditionalListElements" :key="conditionalListElement">
<h2 v-if="conditionalListElement === 'clark'">{{conditionalListElement}}</h2>
</template>  -->
  <!-- <button @click="">keyAttributeShuffle</button> -->

  <!-- -----------------------------Methods -->

  <!-- <div>
    <h2>MethodAdd is : {{methodsAdd(1,2,3)}}</h2>
    <h2>MethodAdd is : {{methodsAdd(1,44,3)}}</h2>
  </div> -->

  <!-- Event Handling -->
  <div>
  <button v-on:click="name = 'bruce'">ChangeEventName</button>
    <h2>{{ name }}</h2>
    <h2>{{ eventCountValue }}</h2>
    <button v-on:click="eventHandlingIncrement(4)">EventIncrement</button>
    <button v-on:click="eventHandlingDecrement(3)">EventDecrement</button>
    <button v-on:click="eventHandlingIncrement(2)">EventIncrement</button>
    <button @click="eventHandlingDecrement(1)">EventDecrement</button>
    
  </div>
</template>





<script>
export default {
  name: "App",

  data() {
    return {
      greet: "hello",
      name: "batman",
      c: "code",
      BindingHtml: "<b>code</b>",
      BindAttribute: "Heading",
      ButtonIsDisable: true,
      DynamicBing: "danger",
      // inline style
      InlineBindingStyleColor: "orange",
      InlineBindingStyleHeader: 20,
      ObjectStyleHeader: {
        color: "red",
        padding: "20px",
      },
      ObjectStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: " 1px solid green",
      },
      // Conditional Rendering
      ConditionIfNum: -5,
      vShow: true,
      vShowElement: true,

      // v-for Directive
      ListRenderings: ["hi", "man", "hey"],
      // Key Attribute
      keyAttributes: ["bruce", "clark", "diana"],
      // conditional list rendering
      conditionalListElements: ["Bruce", "clark"],

      // Event Handling
      eventCountValue: 0,
      eventCount: 0,
    };
  },

  methods: {
    // keyAttributeShuffle() {
    //   console.log(this.keyAttributes);
    //   this.keyAttributes = keyAttributeShuffle(this.keyAttributes);
    // },
    methodsAdd(a, b, c) {
      return a + b + c;
    },
    // Event Handling
    eventHandlingIncrement(eventIncrementNum){
        this.eventCountValue +=eventIncrementNum
      },
    eventHandlingDecrement(eventIncrementNum){
        this.eventCountValue -=eventIncrementNum
      }
  },
};
</script>
j
<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
</style>
