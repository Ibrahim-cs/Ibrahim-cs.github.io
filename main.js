document.addEventListener('click', handleValues)
document.addEventListener('click', handleCarousel)



//handler for values section
function handleValues(event) {
    if (event.target.id === 'value-1' || event.target.id === 'value-2' || event.target.id === 'value-3' || event.target.id === 'value-4') {
        const content = document.getElementById(`${event.target.id}-content`);
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

}

function handleCarousel(event) {

    if (event.target.id === 'next') {
        const carousel = document.getElementById('carousel');
        const style = window.getComputedStyle(carousel);
        const matrix = new WebKitCSSMatrix(style.webkitTransform);
        const width = carousel.clientWidth;
        const multiplier = Math.abs(matrix.m41 / width);
        if (multiplier === 0) {
            carousel.style.transform = `translateX(-${width}px)`;
        } else {
            if (Math.floor(((multiplier * width) + width) / carousel.scrollWidth) === 1) {
                carousel.style.transform = `translateX(0px)`;
            } else {
                carousel.style.transform = `translateX(-${(multiplier * width) + width}px)`;
            }

        }
    } else if (event.target.id === 'prev') {
        const carousel = document.getElementById('carousel');
        const style = window.getComputedStyle(carousel);
        const matrix = new WebKitCSSMatrix(style.webkitTransform);
        const width = carousel.clientWidth;
        const multiplier = Math.abs(Math.round(matrix.m41 / width));
        if (multiplier === 0) {
            carousel.style.transform = `translateX(-${carousel.scrollWidth - width}px)`;
        } else {
            if (Math.ceil((Math.abs(matrix.m41) + width) / carousel.scrollWidth) === 1) {
                carousel.style.transform = `translateX(-${(multiplier * width) - width}px)`;
            } else {
                console.log(`-${Math.abs(matrix.m41) - width}px`)
                carousel.style.transform = `translateX(-${(multiplier * width) - width}px)`;
            }

        }
    }
}