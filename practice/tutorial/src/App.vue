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
  <!-- <div>
    <button v-on:click="name = 'bruce'">ChangeEventName</button>
    <h2>{{ name }}</h2>
    <h2>{{ eventCountValue }}</h2>
    <button v-on:click="eventHandlingIncrement(4)">EventIncrement</button>
    <button v-on:click="eventHandlingDecrement(3)">EventDecrement</button>
    <button v-on:click="eventHandlingIncrement(2)">EventIncrement</button>
    <button @click="eventHandlingDecrement(1)">EventDecrement</button>
  </div> -->

  <!-- -------------Form Handling -->
  <!-- <div> -->
  <!-- <pre>
    {{ JSON.stringify(formHandlingValues, null, 2) }}
    </pre> -->
  <!-- </div> -->
  <!-- <div style="margin: 2px; padding: 2px"> -->
  <!-- <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model.trim.lazy="formHandlingValues.name" />
      </div>
      <div>
        <label for="profile">Profile Summery</label>
        <textarea
          name=""
          id="profile"
          cols="30"
          rows="10"
          v-model="formHandlingValues.profileSummery"
        ></textarea>
      </div>

      <div>
        <label for=""></label>
        <select name="" id="country" v-model="formHandlingValues.country">
          <option value="">select country</option>
          <option value="india">india</option>
          <option value="bd">bd</option>
          <option value="pak">pak</option>
        </select>
      </div>
      <div>
        <label for=""></label>
        <select
          name=""
          id="jobLocation"
          multiple
          v-model="formHandlingValues.jobLocation"
        >
          <option value="">select job</option>
          <option value="india">india</option>
          <option value="bd">bd</option>
          <option value="pak">pak</option>
        </select>
      </div>

      <div>
        <input
          type="checkbox"
          name=""
          id="remoteWork"
          v-model="formHandlingValues.remoteWork"
          true-value="yes"
          true-false="no"
        />

        <label for="remoteWork">Open to remote work</label>
      </div> -->

  <!-- Checkbox group -->
  <!-- <div>
        <label for="">Skill Set</label>
        <input
          type="checkbox"
          name=""
          id="html"
          value="javascript"
          v-model="formHandlingValues.skillSet"
        />
        <label for="remoteWork">CSS</label>
        <input
          type="checkbox"
          name=""
          id="css"
          value="css"
          v-model="formHandlingValues.skillSet"
        />
        <label for="remoteWork">javascript</label>
        <input
          type="checkbox"
          name=""
          id="javascript"
          value="javascript"
          v-model="formHandlingValues.skillSet"
        />
      </div> -->
  <!-- radio button -->
  <!-- <div>
        <label for="">0-2</label>
        <input
          type="radio"
          name=""
          id="0-2"
          value="0-2"
          v-model="formHandlingValues.yearsOfExperience"
        />
        <label for="remoteWork">3-5</label>
        <input
          type="radio"
          name=""
          id="3-5"
          value="3-5"
          v-model="formHandlingValues.yearsOfExperience"
        />
        <label for="remoteWork">10</label>
        <input
          type="radio"
          name=""
          id="6-10"
          value="6-10"
          v-model="formHandlingValues.yearsOfExperience"
        />
      </div> -->
  <!-- ---------------------------------------------Modifiers -->

  <!-- <div>
      <label for="">Age</label>
      <input @keyup.enter="submitForm" type="number" name="" id="age" v-model="formHandlingValues.modifierAge">
      </div> -->
  <!--  -->

  <!-- <div><button>Submit</button></div> -->
  <!-- </form> -->
  <!-- </div>  -->

  <!-- Bonus Directive -->
  <!-- <div>
    <h2 v-once>{{bonusDirectivesName}}</h2>
    <button @click="bonusDirectivesName ='i am sam'">Change Name</button>
    <h2 v-pre>{{bonusDirectivesName}}</h2>
  </div> -->

  <!-- Computed Property -->
  <div>FullName - {{ computedFirstName }}-{{ computedLastName }}</div>
  <h1>{{ fullName }}</h1>
  <button @click="computedPropertyItems.push({id:4,title:'keyboard',price:50})">Add Item </button>
  <h2>
    Total - {{total}}
  </h2>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      // greet: "hello",
      // name: "batman",
      // c: "code",
      // BindingHtml: "<b>code</b>",
      // BindAttribute: "Heading",
      // ButtonIsDisable: true,
      // DynamicBing: "danger",
      // inline style
      // InlineBindingStyleColor: "orange",
      // InlineBindingStyleHeader: 20,
      // ObjectStyleHeader: {
      //   color: "red",
      //   padding: "20px",
      // },
      // ObjectStyleObject: {
      //   color: "green",
      //   backgroundColor: "lightgreen",
      //   border: " 1px solid green",
      // },
      // Conditional Rendering
      // ConditionIfNum: -5,
      // vShow: true,
      // vShowElement: true,
      // v-for Directive
      // ListRenderings: ["hi", "man", "hey"],
      // Key Attribute
      // keyAttributes: ["bruce", "clark", "diana"],
      // conditional list rendering
      // conditionalListElements: ["Bruce", "clark"],
      // Event Handling
      // eventCountValue: 0,
      // eventCount: 0,
      // ------------Form Handling
      // formHandlingValues: {
      //   name: "",
      //   profileSummery: "",
      //   country: "",
      //   jobLocation: [],
      //   remoteWork: "no",
      //   skillSet: [],
      //   yearsOfExperience: "",
      //   modifierAge: null,
      //   modifierEnterKey:'',
      // },
      // -----------------Bonus Directives
      bonusDirectivesName: "i am sam ",
      computedFirstName: "sam",
      computedLastName: "Wayne",
      computedPropertyItems: [
        {
          id: 1,
          title: "TV",
          price: 100,
        },
        {
          id: 2,
          title: "Phone",
          price: 200,
        },
        {
          id:3,
          title:'Laptop',
          price: 300,
        },
      ],
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
    eventHandlingIncrement(eventIncrementNum) {
      this.eventCountValue += eventIncrementNum;
    },
    eventHandlingDecrement(eventIncrementNum) {
      this.eventCountValue -= eventIncrementNum;
    },

    // Submit From Handle
    submitForm() {
      // event.preventDefault();
      console.log("Form values", this.formHandlingValues);
    },
  },
  computedFirstName: {
    fullName() {
      return `${this.computedFirstName} ${this.computedLastName}`;
    },
  },
  computed:{
      // ComputedProperty
  total(){
    return this.computedPropertyItems.reduce((total,curr)=>(total=total+curr.price),0)
  }
}

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
