let hexTime = document.getElementById("hexTime");

let body=document.body;


let updateTime= ()=>{
    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds= today.getSeconds()
    if (seconds.toString().length ==1){
        seconds = "0"+ seconds;
    }
    if (minutes.toString().length ==1){
        minutes = "0"+ minutes;
    }
    let time = "#"+hours + ""+ minutes + ""+ seconds
    let newTime = time.toString();
    body.style.backgroundColor = newTime;
    hexTime.innerHTML = time;

}
setInterval (updateTime,1000);



// let updateColor = ()=>{
// let today = new Date()
//     let hours = today.getHours()
//     let minutes = today.getMinutes()
//     let seconds= today.getSeconds()
//     if (seconds.toString().length ==1){
//         seconds = "0"+ seconds;
//     }
//     let time = "#"+hours + ""+ minutes + ""+ seconds
//     let newTime = time.toString();
//     body.style.backgroundColor = newTime;
// }
// setInterval (updateColor,1000);

// let updateColor = ()=>{
//     let today = new Date()
//         let hours = today.getHours()
//         let minutes = today.getMinutes()
//         let seconds= today.getSeconds()
//         if (seconds.toString().length ==1){
//             seconds = "0"+ seconds;
//         }
//         let time = "#"+hours + ""+ minutes + ""+ seconds
//         let newTime = time.toString();
//         body.style.backgroundColor = newTime;
//     }
//     setInterval (updateColor,1000);









