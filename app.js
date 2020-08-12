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

/*
// Tabs menu

var tabbedContent = function () {
    //get all tab link elements
    var tab = document.getElementsByClassName("tab-link");
    //get all tab content elements
    var tabContent = document.getElementsByClassName("tab-content");
    //loop through each tab
    for (var i = 0; i < tab.length; i++) {
        //add click event listener to all tab links
        tab[i].addEventListener('click', function () {
            //each time tab clicked remove all current classes
            //remove 'current' class from all tabs
            for (var i = 0; i < tab.length; i++) {
                tab[i].classList.remove('current');
            };
            //remove 'current' class from all tab content
            for (var i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove('current');
            };
            //add current class back to the clicked tab
            this.className += ' current';
            //get data-tab attribute of what has been clicked
            var matchingTab = this.getAttribute('data-tab');
            //add current class to the tabContent element thats id matches the data-tab of the clicked tab
            document.getElementById(matchingTab).className += ' current';
        }, false);
    }
}

tabbedContent();

*/