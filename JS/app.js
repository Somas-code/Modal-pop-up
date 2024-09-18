let nam = document.querySelector("#afa");
let mess = document.querySelector(".msg");
let sub= document.querySelector(".sbt");
let close= document.querySelector(".cls")
sub.addEventListener("click", ()=>{
     // Check if the input is empty
    if (nam.value==="") {
        alert("Please Input Name")
        return; //Exits the function if no name is provided
    } 
    document.querySelector(".all-up").style.display = "none";
    document.querySelector(".pop-up").style.display = "flex";
    // mess.append(nam.value);
    mess.textContent = nam.value; //the above commented code works too
    nam.value="";
})
close.addEventListener("click", ()=>{
    document.querySelector(".pop-up").style.display = "none";
    document.querySelector(".all-up").style.display = "flex";
    
})