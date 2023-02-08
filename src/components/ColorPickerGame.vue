<template>
  <div class="h-screen w-full bg-black text-yellow-50">
    <div
      class="flex flex-col w-[80%] justify-center items-center pt-10 mx-auto uppercase"
    >
      <h1 class="text-4xl pb-12 font-bold text-rose-800 underline decoration-4">
        Colour Picker Game
      </h1>

      <div class="py-7 font-bold text-2xl">{{ message }}</div>

      <div>
        <button
          class="w-20 h-20 md:mx-8 mx-4 uppercase font-bold btn rounded-sm"
          id="Btn"
          v-for="color in colours"
          :key="color"
          @click="matchColour(color)"
        >
          {{ color }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import colourPicker from "../composable/colour-picker";

export default {
  name: "ColorPickerGame",

  setup() {
    const { colours, message, matchColour } = colourPicker();

    return { colours, message, matchColour };
  },
};
</script>

<style scoped>
.btn:nth-child(1) {
  background: green;
}
.btn:nth-child(2) {
  background: red;
}
.btn:nth-child(3) {
  background: blue;
}
.btn:nth-child(4) {
  background: purple;
}
</style>
