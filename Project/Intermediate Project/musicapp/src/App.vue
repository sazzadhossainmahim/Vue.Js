<template >
  <div id="app" class="box-border font-sans">
    <div
      id="header"
      class="flex justify-center items-center p-6 bg-black text-white"
    >
      <h1>My Music</h1>
    </div>
    <main class="w-full max-w-full m-auto p-6">
      <section id="player">
        <h2
          id="songTitle"
          class="bg-green-500 text-2xl font-bold uppercase text-center italic"
        >
          {{ current.title }} - <span class="">{{ songs.artist }}</span>
        </h2>
        <!-- {{ songs[0].src }} -->
        <div id="contr" class="flex gap-5 justify-center px-4 py-6">
          <button
            class="
              font-medium
              px-5
              mx-0
              my-2
              text-white
              bg-red-800
              rounded
              hover:bg-orange-400
            "
            @click="previous"
          >
            Prev
          </button>
          <button
            class="font-bold text-xl bg-red-500 rounded px-2 hover:bg-green-400"
            v-if="!isPlaying"
            @click="play"
          >
            Play
          </button>
          <button class="" v-else @click="pause">Pause</button>
          <button
            class="
              font-medium
              px-5
              mx-0
              my-2
              text-white
              bg-red-800
              rounded
              hover:bg-sky-400
            "
            @click="next"
          >
            Next
          </button>
        </div>
      </section>
      <section id="playlist" class="px-0 py-5">
        <h3 class="text-blue-700 font-bold text-2xl text-center font-serif m-3 tracking-wide">
          The Playlist
        </h3>
        <button
          class="
            cursor-pointer
            block
            w-full
            p-2
            text-xl
            font-mono
            uppercase
            bg-blue-200
            hover:bg-lime-600 rounded m-1
          "
          v-for="song in songs"
          :key="song.src"
          @click="play(song)"
          :class="song.src == current.src ? 'song playing' : 'song'"
        >
          {{ song.title }} - {{ song.artist }}
        </button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: "Domini",
          artist: "Anno",
          src: require("./assets/Contrast - Anno Domini Beats.mp3"),
        },
        {
          title: "Glass",
          artist: "Illusions",
          src: require("./assets/Illusions - Anno Domini Beats.mp3"),
        },
      ],
      player: new Audio(),
    };
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    // this.player.play();
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = this.songs[this.index];
        this.player.src = this.current.src;
      }
      this.player.play();
      // this.player
      //   .addEventListener("ended", function () {
      //     this.index++;
      //     if (this.index > this.songs.length - 1) {
      //       this.index = 0;
      //     }
      //     this.current = this.songs[this.index];
      //     this.play(this.current);
      //   })
      //   .bind(this);
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    previous() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.player.src = this.current.src;
    },
  },
};
</script>

<style>
.play {
}
</style>
