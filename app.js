// Carousel section

const carrouselSlide = document.querySelector('.carrousel-slide');
const carrouselImages = document.querySelectorAll('.carrousel-slide img');

// button controls

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter 
let counter = 1;
const size = carrouselImages[0].clientWidth;

carrouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px )';


// event listeners

nextBtn.addEventListener('click', () => {
    if (counter >= carrouselImages.length - 1) return;
    carrouselSlide.style.transition = "transform 1s ease-in-out"
    counter++;
    carrouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px )';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carrouselSlide.style.transition = "transform 1s ease-in-out"
    counter--;
    carrouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px )';
});


carrouselSlide.addEventListener('transitionend', () => {
    if (carrouselImages[counter].id === 'last-clone') {
        carrouselSlide.style.transition = "none";
        counter = carrouselImages.length - 2;
        carrouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

carrouselSlide.addEventListener('transitionend', () => {
    if (carrouselImages[counter].id === 'first-clone') {
        carrouselSlide.style.transition = "none";
        counter = carrouselImages.length - counter;
        carrouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


// Attendee counter

const counters = document.querySelectorAll('.counter');

const speed = 1000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;


        const inc = target / speed;

        // console.log(inc);
        // console.log(count);


        if (count < target) {

            counter.innerText = count + inc;

            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});