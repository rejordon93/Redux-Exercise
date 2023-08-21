const facesElement = document.getElementById("faces");
const happyButton = document.getElementById("happy");
const sadButton = document.getElementById("sad");
const angryButton = document.getElementById("angry");
const confusedButton = document.getElementById("confused");

happyButton.addEventListener("click", function () {
  store.dispatch({ type: "HAPPY" });
  const state = store.getState();
  facesElement.textContent = state.faces;
});

// ... Similar event listeners for other buttons

sadButton.addEventListener("click", function () {
  store.dispatch({ type: "SAD" });
  const state = store.getState();
  facesElement.textContent = state.faces;
});

angryButton.addEventListener("click", function () {
  store.dispatch({ type: "ANGRY" });
  const state = store.getState();
  facesElement.textContent = state.faces;
});

confusedButton.addEventListener("click", function () {
  store.dispatch({ type: "CONFUSED" });
  const state = store.getState();
  facesElement.textContent = state.faces;
});
