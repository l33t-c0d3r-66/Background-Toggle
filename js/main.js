const toggleDark = document.getElementById('toggleDark');
const body = document.querySelector("body");

toggleDark.addEventListener("click", function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        toggleDark.style.color = 'orangered';
        toggleDark.title = "Switch to Dark Mode";
        body.style.transition = '2s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        toggleDark.style.color = 'orange';
        toggleDark.title = "Switch to Light Mode";
        body.style.transition = '2s';
    }
});