const input = document.getElementById("speed") as HTMLInputElement;

input.addEventListener("change", (event) => {
  if (event.target) {
    // @ts-ignore
      localStorage.setItem("speed", event.target.value);
  }
});
