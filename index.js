// if, else if, else
const gender=()=>{
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

//s = elements by name
//for loop
const size=()=>{
    let s = document.getElementsByName("s1");
    let output = document.querySelector(".size");
    for(i=0;i<s.length;i++){
        if (s[i].checked) {
            output.innerHTML = s[i].value;
        }
    }
}

const number=()=>{
    let n = document.getElementsByName("n1");
    let output = document.querySelector(".number");
    n.forEach(element => {
           if (element.checked) {
            output.innerHTML= element.id;
           }
    });
}