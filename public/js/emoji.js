var emoji = [],
    index = null,
    i = null,
    table,
    my_emoji;

//storing all the emojis in an array here
emoji = [
    128512,
    128513,
    128514,
    128515,
    128516,
    128517,
    128518,
    128519,
    128520,
    128521,
    128522,
    128523,
    128524,
    128525,
    128526,
    128527,
    128528,
    128529,
    128530,
    128531,
    128532,
    128533,
    128534,
    128535,
    128536,
    128537,
    128538,
    128539,
    128540,
    128541,
    128542,
    128543,
    128544,
    128545,
    128546,
    128547,
    128548,
    128549,
    128550,
    128551,
    128552,
    128553,
    128554,
    128557,
    128560,
    128564,
    128070,
    128071,
    128072,
    128073,
    128074,
    128075,
    128076,
    128077,
    128078,
    128079,
    128080,
    128125,
    128126,
    128128,
    128131,
    128133,
    128147,
    128148,
    128150,
    128151,
    128169,
    128176,

]

//get the div 
table = document.querySelector("table");


for(index = 0 ; index <= emoji.length -1; index++){
    //get code of every emoji
    table.innerHTML += "<span class ='my_emoji'>" + "&#" + emoji[index] + "</span>";


}

my_emoji = document.querySelectorAll(".my_emoji");
for(i = 0; i <= my_emoji.length; i++ ){
    // console.log(i);
    my_emoji[i].addEventListener('click', (event)=>{
        let emoji_clicked = event.target.textContent;
        textarea.value = emoji_clicked;

    })

}

// function emoji_msg() {
//     document.getElementById("textarea").value = emoji_clicked;
//   }

// function bindingFunction(){
//     document.getElementById("emoji_id").onclick = function() {
//         document.getElementById("textarea").value = emoji_clicked;
//     }
// }