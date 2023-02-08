<template>
  <div id="app">
    <ColorPickerGame />
  </div>
</template>

<script>
import "./assets/global.css";
import ColorPickerGame from "./components/ColorPickerGame.vue";
export default {
  name: "App",
  components: {
    ColorPickerGame,
  },
};
</script>
