let imagesContainer = document.getElementById('images-container');

let autoSlideInterval;

function findPrevActiveElement(el) {
    // to prevent from null error of el.nextSibling...
    if(el.nextElementSibling && el.style.marginLeft === '-100%') {
        return findPrevActiveElement(el.nextElementSibling);
    } else {
        return el;
    }
}

function findPrevActiveElementR(el) {
    // to prevent from null error of el.nextSibling...
    if(el.nextElementSibling && el.style.marginLeft === '-100%') {
        return findPrevActiveElementR(el.nextElementSibling);
    } else {
        return el.previousElementSibling;
    }
}

function slideLeft() {
    if(imagesContainer.childElementCount == 0) return;

    let prevActiveElement = findPrevActiveElement(imagesContainer.firstElementChild);
    // slide previously active element to left
    prevActiveElement.style.marginLeft = '-100%';
    
    // remove and append previously active element...
    // when completely removed from container with transition.
    setTimeout(() => {
        if(prevActiveElement.style.marginLeft !== '0px') {
            prevActiveElement.remove();
            prevActiveElement.style.marginLeft = '0px';
            imagesContainer.append(prevActiveElement);
        }
    }, 900)
}

function slideRight() {
    if(imagesContainer.childElementCount == 0) return;
    
    let lastEl = imagesContainer.lastElementChild;
    // if element is sliding to left 
    if(imagesContainer.firstElementChild.style.marginLeft === '-100%') {
        lastEl = findPrevActiveElementR(imagesContainer.firstElementChild);
    }
    lastEl.remove();
    lastEl.style.marginLeft = '-100%';
    imagesContainer.prepend(lastEl);
    setTimeout(() => {
        imagesContainer.firstElementChild.style.marginLeft = '0px';
    })
}

function autoSlide(direction = 'left') {
    if (!autoSlideInterval && imagesContainer.childElementCount != 0) {
        autoSlideInterval =  setInterval(() => {
            if (direction === 'left') {
                slideLeft();
            } else {
                slideRight();
            }
        }, 3000)
    }
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = undefined;
}

function fullScreen() {
    document.getElementById("slideShow-container").requestFullscreen()
}