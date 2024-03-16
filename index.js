// if, else if, else
const func=()=>{
    let output = document.querySelector(".show");
    let m = document.getElementById("m");
    let f = document.getElementById("f");
    if (m.checked) {
        output.innerHTML = m.value;
    }else if (f.checked){
        output.innerHTML = f.value;
    }else{
        alert("Please Select Any!");
    }
}