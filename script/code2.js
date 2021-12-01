let button=document.getElementById("nappi")
let laskuri=0
function add(){
    document.getElementById("laskuri").innerHTML=laskuri
    laskuri=laskuri+1
}
button.addEventListener("click", add)





let people=[]

function addperson(){
    let fname=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let person={
        firstname:fname,
        personage:age
    }
    people.push(person);
}

document.getElementById("add").addEventListener("click", addperson)

document.getElementById("show").addEventListener("click", show)

function show(){
    people.forEach(person=>{
        let li=document.createElement("li")
        li.textContent="Henkilön nimi: "+person.firstname+", joka on "+person.personage+" vuotta vanha"
        document.getElementById("printHere").appendChild(li)
    })
}
