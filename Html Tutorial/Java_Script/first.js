let mode_div = document.querySelector("div");
let body = document.querySelector("body");

let current_mode = "light";
mode_div.addEventListener("mouseover",() => {
    if (current_mode === "light"){
        current_mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        current_mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(current_mode);
})

























