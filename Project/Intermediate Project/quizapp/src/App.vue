<template>
  <div id="app" class="m-1 p-1 box-border font-mono bg-violet-400 text-black">
    <h1>The Quiz</h1>
    <section>
      <div>
        <span></span>
        <span>Score </span>
      </div>

      <div class="" id="options">
        <label>
          <input type="radio" />
          <span></span>
        </label>
      </div>

      <button>}}</button>
    </section>

    <section>
      <h2>You have finished the quiz!</h2>
      <p>Your score is</p>
    </section>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "App",
  components: {},
  // setup() {
  //   const quizCompleted = ref(false)
  //   const currentQuestion = ref(0)

  //   const score = computed(() => {
  //     let value = 0;
  //     questions.value.map((q) => {
  //       if(q.selected != null && q.answer ==q.selected){
  //         console.log('correct');
  //         value++
  //       }
  //     });
  //   });

  //   const questions = ref([
  //     {
  //       question: "what is Vue JS?",
  //       answer: 0,
  //       Options: ["A front end framework", "A Library", "An ice cream maker"],
  //       selected: null,
  //     },
  //     {
  //       question: "what is VueX JS?",
  //       answer: 0,
  //       Options: ["A front end framework", "A Library", "An ice cream maker"],
  //       selected: null,
  //     },
  //   ]);

  //   const getCurrentQuestion = computed(() => {
  //     let question = questions.value[currentQuestion.value];
  //     question.index = currentQuestion.value;
  //     return question;
  //   });

  //   const SetAnswer = (evt) => {
  //     questions.value[currentQuestion.value].selected = evt.target.value;
  //     evt.target.value = null;
  //   };
  //   const NextQuestion = () => {
  //     if (currentQuestion.value < questions.value) {
  //       currentQuestion.value++;
  //     } else {
  //       quizCompleted.value = true;
  //     }
  //   };
  // },
  data() {
    return {
      question: [
        {
          question: "What is Vue?",
          answer: 0,
          options: ["A framework", "A library", "A type of hat"],
          selected: null,
        },
        {
          question: "What is Vue Router?",
          answer: 1,
          options: [
            "An ice cream maker",
            "A routing library for Vue",
            "Burger sauce",
          ],
          selected: null,
        },
      ],
    };
  },
  methods: {
    quizCompleted() {
      ref(false);
    },
    currentQuestion() {},
  },
  computed: {
    score() {
      let value = 0;
      questions.value.map((q) => {
        if (q.selected != null && q.answer == q.selected) {
          console.log("correct");
          value++;
        }
      });
      return value;
    },
    getCurrentQuestion() {
      let question = questions.value[currentQuestion.value];
      question.index = currentQuestion.value;
      return question;
    },
    SetAnswer(){
      
    }
  },
};
</script>

<style>
</style>
