
let animIt = document.querySelectorAll('.anim_items');

if ( animIt.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let i = 0; i < animIt.length; i++) {
            const animItem = animIt[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffest = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint - window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffest - animItemPoint) && pageXOffset < (animItemOffest + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove("_active");
            }
        }
            
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop,left: rect.left + scrollLeft}
    }

    setTimeout(10000);
    animOnScroll();
}

