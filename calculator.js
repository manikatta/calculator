function add(){
    let a1= Number(document.getElementById("a1").value)
    let a2 = Number(document.getElementById("a2").value)
    let h = document.getElementById("h")

    h.innerHTML= "value="+(a1+a2);

}

function sub(){
    let a1= Number(document.getElementById("a1").value)
    let a2 = Number(document.getElementById("a2").value)
    let h = document.getElementById("h")

    h.innerHTML= "value="+(a1-a2);

}

function mul(){
    let a1= Number(document.getElementById("a1").value)
    let a2 = Number(document.getElementById("a2").value)
    let h = document.getElementById("h")

    h.innerHTML= "value="+(a1*a2);

}

function div(){
    let a1= Number(document.getElementById("a1").value)
    let a2 = Number(document.getElementById("a2").value)
    let h = document.getElementById("h")

    h.innerHTML= "value="+(a1/a2);

}