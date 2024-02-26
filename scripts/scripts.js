const expression = document.querySelector(".expression");
const expressionDisplay = document.querySelector(".expressionDisplay");
const buttons = document.querySelectorAll(".gridButtons button");
const buttonHistory = document.querySelector(".buttonHistory");
const modalHistory = document.querySelector(".modalHistory");
const buttonCloseModal = document.querySelector(".buttonCloseModal");

buttonHistory.addEventListener("click", () => {
  modalHistory.showModal();
});

buttonCloseModal.addEventListener("click", () => {
  modalHistory.close();
});

function clreanScreen() {
  expression.innerHTML = "";
  expressionDisplay.innerHTML = "";
}

const totalNumbers = 13;
let isError = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isError) {
      clreanScreen();
      isError = false;
    }

    switch (button.innerHTML) {
      case "C":
        clreanScreen();
        break;
      case "DEL":
        expression.innerHTML = expression.innerHTML.slice(0, -1);
        break;
      case "=":
        try {
          if (expression.innerHTML.length > 0) {
            expressionDisplay.innerHTML = expression.innerHTML;
            expression.innerHTML = String(
              (expression.innerHTML = eval(
                expression.innerHTML.replace("x", "*").replace("%", "/100")
              ))
            ).slice(0, 13);
          }
        } catch (error) {
          console.error(error);
          expression.innerHTML = "Error";
        }
        break;
      default:
        if (expression.innerHTML.length >= 13) return;
        expression.innerHTML += button.innerHTML;
        break;
    }
  });
});
