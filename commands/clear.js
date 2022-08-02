const output = document.querySelector(".cmd-output");

const clear = {
  name: "clear",
  execute: () => {
    output.textContent = "  ";
    return null;
  },
};

export { clear };
