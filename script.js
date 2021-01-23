window.onload = function (e) {
console.log("Hello");
    var offset = document.getElementsByClassName("navbar")[0].offsetTop;
    var menu = document.getElementsByClassName("navbar")[0];

    document.addEventListener('scroll',function (){
        if(document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position = 'fixed';
        } else {
            menu.style.position = 'initial'
        }
    });
}