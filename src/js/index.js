let mode = false;
const button = document.getElementById("bu");
button.addEventListener("click", ()=>{
    if(mode==false){
        document.body.style.backgroundColor = "#393A38";
        button.style.backgroundColor = " #f5d2a5";
        button.style.color= "black"
        mode = true;
    }
    else{
        document.body.style.backgroundColor = "white";
        button.style.backgroundColor = " #9e8787";
        button.style.color= "#35060f"
        mode = false;

        
    }
})