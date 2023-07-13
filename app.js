//document.getElementById("count-el").innerText=45

// let firstBatch=5
// let secondBatch=12

// let count= firstBatch+secondBatch
let count=0
let saveEl= document.getElementById("save-el")

let countEl=document.getElementById("count-el")

function increment(){
     count=count+1
     countEl.textContent=count
}

function save(){
    let countStr=count +" - "
    saveEl.textContent+= countStr
    count.textContent=0
    count=0

}

// let errorMessage=document.getElementById("error")
// function error(){
//     let errorMsg="Something went wrong, please try again"
//     errorMessage.textContent=errorMsg
//}

