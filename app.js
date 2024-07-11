
let date = new Date()
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`

let mainParent = document.querySelector(".mainParent")
let sideBar = document.querySelector("#sideBar")
let main = document.querySelector(".main")

function showForm(){
    mainParent.style.display = "block"
}
function closeButton(){
    mainParent.style.display = "none"
}


let isOpen = false
function toggleButton(){
    isOpen = !isOpen
    if(isOpen){
        sideBar.style.display = "block"
    }
    else{
        sideBar.style.display = "none"
    }
}