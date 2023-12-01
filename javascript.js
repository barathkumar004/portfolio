alert('welcome')
        var sidemeu =document.getElementById("sidemenu");

        function openmenu(){
            sidemeu.style.right = "0";
        }
        function closemenu(){
            sidemeu.style.right = "-200px";
        }

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos>100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#ff004f ${scrollValue}%, #262626 ${scrollValue}%)`;   
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
//changing jobs
var typed = new Typed(".typing", {
    strings: ["Front End Developer", "Freelancer", "Python Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Front End Developer", "Freelancer", "Python Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});