const cursor = document.querySelector(".cursor");
const secondCursor = document.querySelector(".cursor2");
const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");

const cursors = [cursor, secondCursor];

window.addEventListener("mousemove", mouseMove);
function mouseMove(e) {
  cursors.forEach((mouse) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
  });
}

firstDiv.addEventListener("mouseover", () => {
  cursor.classList.add("show");
});

firstDiv.addEventListener("mouseleave", () => {
  cursor.classList.remove("show");
});

secondDiv.addEventListener("mouseover", () => {
  secondCursor.classList.add("show");
});

secondDiv.addEventListener("mouseleave", () => {
  secondCursor.classList.remove("show");
});
