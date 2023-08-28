const requestStatus = document.querySelector(".status");
const button = document.querySelector(".button");

let flag = true;

button.addEventListener("click", () => {
  if (flag) {
    requestStatus.innerHTML = "Friends";
    requestStatus.style.color = "green";
    button.innerHTML = "Remove friend";
    flag = false;
  } else if (!flag) {
    const confirmation = confirm(
      "do you really want to remove this person from friend"
    );
    if (confirmation) {
      requestStatus.innerHTML = "Stranger";
      requestStatus.style.color = "red";
      button.innerHTML = "Add friend";
      flag = true;
    } else return;
  } else return;
});
