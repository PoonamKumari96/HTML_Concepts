let mode_btn = document.querySelector(".mode");
let body = document.querySelector("body");

let current_mode = "light";

mode_btn.addEventListener("click", () =>{
    if(current_mode ==="light"){
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



























