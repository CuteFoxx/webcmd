const goto = {
  name: "goto",
  execute: (atr) => {
    if (!atr) {
      return "To use this command insert link after goto";
    }
    if (atr.includes("http://") || atr.includes("https://")) {
      location.href = atr;
      return "Redirecting...";
    }
    location.href = "http://" + atr;

    return "Redirecting...";
  },
};

export { goto };
