//스크롤 이벤트
// stack__inner 스크롤 이벤트     
let elementsArray = document.querySelectorAll(".stack__inner li,.work__inner li");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
        elem.classList.add("inView");
    } else {
        elem.classList.remove("inView");
    }
}
}
fadeIn();


// top 버튼
const $btnTop = document.querySelector('.topMove');
$btnTop.addEventListener('click', function(){
    scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});
