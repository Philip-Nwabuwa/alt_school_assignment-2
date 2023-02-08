import { ref, reactive } from "@vue/reactivity";

const colourPicker = () => {
  const colours = reactive(["green", "red", "blue", "purple"]);
  let message = ref("Pick a colour to get started");

  const matchColour = (value) => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (colours[randomNumber] === value) {
      message.value = `You WIN!!! [Answer: ${colours[randomNumber]}]`;
      return;
    }

    message.value = `You LOSE!!! [Answer: ${colours[randomNumber]}]`;
  };
  return { colours, message, matchColour };
};

export default colourPicker;
