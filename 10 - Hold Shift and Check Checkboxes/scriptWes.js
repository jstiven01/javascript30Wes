const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");

let lastChecked;
function selectedCheckbox(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log(checkbox);
        console.log({ inBetween });
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox =>
  checkbox.addEventListener("click", selectedCheckbox)
);
