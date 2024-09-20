
var typed = new Typed(".text", {
    strings: ["Programming" , "Web Developing" , "C/C++","Java"],
    typeSpeed:30,
    backSpeed:30,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})




function typer(txt,speed,elementid){
    var i = 0;
    function type(){
        if(i<txt.length){
            document.getElementById(elementid).innerHTML += txt.charAt(i);
            i++;
            setTimeout(type,speed);
        }
    }
    type();
}



function copy(){
    navigator.clipboard.writeText("+91 9691520339");
    elementid = "phoneNumber";
    document.getElementById(elementid).innerHTML = '';
    document.getElementById(elementid).innerHTML = '<i class="bx bxs-phone-call">';
    typer("Phone Number Copied.",30,"phoneNumber");
};
