import "animate.css";

import { createPopper } from "@popperjs/core";
const popcorn = document.querySelector("#popcorn");
const tooltip = document.querySelector("#tooltip");
createPopper(popcorn, tooltip, {
  placement: "top",
});
console.log('version12');
