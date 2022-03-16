// for Dark/Light
// const checkbox = document.getElementById('checkbox');
// checkbox.addEventListener('change', () => {
//     // change the theam of website
//     document.body.classList.toggle('dark')
// })

//for coupon Popup
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});