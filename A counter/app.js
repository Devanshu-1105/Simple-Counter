// Set the initial value to 0;

let count = 0;

// selecting the values : while selecting the values, instead of selecting all the buttons one by one select them all at once using "querySelectorAll" using a common calss that all the buttons has i.e is the btn

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//use the for each loop because the values are array like;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //console.log(e.currentTarget.classList);

    // saving the class lists of the buttons clicked in the variable

    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
