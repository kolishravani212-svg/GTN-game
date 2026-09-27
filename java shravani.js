let sky=document.querySelector("button");
let box=document.querySelector("input");
let msg=document.querySelector("p");
let replay=document.querySelector("#replay");
let num = Math.floor(Math.random() * 10) + 1;
console.log(num);
sky.onclick=function(){
    if(box.value==num){
        msg.innerText="correct 🎉🎉";
    }
    else if(box.value<=num){
        msg.innerText="too low 😔😔";
    }
    else if(box.value>=num){
        msg.innerText="to high 😲😯";
    }
}


box.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sky.click();
    }
});



replay.onclick = function(){

   num = Math.floor(Math.random() * 100) + 1;

    box.value = "";
    msg.innerText = "enter the number";

}

