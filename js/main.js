console.log("JS file connected");

const icons = document.querySelectorAll("#icon-container > div");

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    console.log("You clicked" + icon.id);
  });
});