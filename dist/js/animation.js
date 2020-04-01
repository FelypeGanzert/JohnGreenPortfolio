document.addEventListener('DOMContentLoaded', addBoxTimeLine);
document.addEventListener('scroll', addBoxTimeLine);

function addBoxTimeLine() {
    const UIevents = document.querySelectorAll('#time-line div');
    UIevents.forEach(el => {
        if (isVisible(el)) {
            el.classList.add('box-enter');
        } else{
            el.classList.remove('box-enter');
        }
    });
}

function isVisible(element) {
    let elPositionYstart = element.getBoundingClientRect().top + window.scrollY;
    let elPositionYend = element.getBoundingClientRect().top + element.offsetHeight + window.scrollY;
    let pageYstart = window.pageYOffset;
    let pageYend = pageYstart + window.innerHeight;

    if ((elPositionYstart >= pageYstart && elPositionYstart <= pageYend) ||
        (elPositionYend >= pageYstart && elPositionYend <= pageYend)) {
        return true;
    } else {
        return false;
    }
}