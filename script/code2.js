let button=document.getElementById("nappi")
let laskuri=0
function lisää(){
    document.getElementById("laskuri").innerHTML=laskuri
    laskuri=laskuri+1
}
button.addEventListener("click", lisää)



let secondButton=document.getElementById("toinenNappi")
let thirdButton=document.getElementById("tyhjennysNappi")
let tulostus=document.getElementById("tulostus")
function tulosta(){
    let vuosi=document.getElementById("vuosi").value
    let etunimi=document.getElementById("etunimi").value
    let sukunimi=document.getElementById("sukunimi").value

    let today = new Date();
    let year = today.getFullYear();
    
    let ikä=year-vuosi

    if(vuosi==""||etunimi==""||sukunimi==""){
        alert("Täytä kaikki kentät")
    }
    else{
        tulostus.innerText= "Hei "+etunimi+" "+sukunimi+", olet "+ikä+" vuotta vanha"
    }
}
function tyhjennä(){
    tulostus.innerHTML=""
    
}
secondButton.addEventListener("click", tulosta)
thirdButton.addEventListener("click", tyhjennä)
