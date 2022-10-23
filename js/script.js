const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const wrapperHtml = document.getElementById('wrapper');

imageTemplate();
slider();

function imageTemplate(){
    const imageThumbBox = document.createElement('div');
    imageThumbBox.classList = 'd-flex position-relative';

    for(let key in images){
        let imagesUrl = images[key].url;
        let imageTitle = images[key].title;
        let imageDescription = images[key].description;
        const imageSliderBox = document.createElement('div');
        imageSliderBox.classList = 'img-full d-none';
        const imageSlide = document.createElement('img');
        imageSlide.setAttribute('src', imagesUrl);
        imageSlide.setAttribute('alt', imageTitle);
        imageSlide.setAttribute('style', 'width:800px; height:400px;')

        wrapperHtml.append(imageSliderBox);
        imageSliderBox.append(imageSlide);

        const imageThumb = document.createElement('div');
        imageThumb.classList = 'img-thumb img-fluid bg-primary position-relative';
        imageThumb.style.backgroundImage = 'url('+images[key].url+')';
        imageThumb.style.backgroundSize = 'cover';
        const overlayHtml = document.createElement('span');
        overlayHtml.classList = 'overlay bg-black opacity-50 position-absolute text-center';

        wrapperHtml.append(imageThumbBox);
        imageThumbBox.append(imageThumb);
        imageThumb.append(overlayHtml);
    }

    const btnNavPrev = document.createElement('span');
    btnNavPrev.setAttribute('id', 'prev-btn');
    btnNavPrev.classList = 'prev-slide bg-info shadow rounded-circle position-absolute fa-solid fa-chevron-left';
    const btnNavNext = document.createElement('span');
    btnNavNext.setAttribute('id', 'next-btn');
    btnNavNext.classList = 'next-slide bg-info shadow rounded-circle position-absolute fa-solid fa-chevron-right';

    imageThumbBox.append(btnNavPrev);
    imageThumbBox.append(btnNavNext);
}

function slider(){
    let activeSlide = 0;
    const imageHtml = document.querySelectorAll('.img-full');
    const overlayHtml = document.querySelectorAll('.overlay');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    imageHtml[activeSlide].classList.toggle('d-none');
    overlayHtml[activeSlide].classList.toggle('overlay');

    nextBtn.addEventListener('click', function(){
        imageHtml[activeSlide].classList.toggle('d-none');
        overlayHtml[activeSlide].classList.toggle('overlay');
        activeSlide++;
        if(activeSlide <= (images.length - 1)){
            imageHtml[activeSlide].classList.toggle('d-none');
            overlayHtml[activeSlide].classList.toggle('overlay');
        } else {
            activeSlide = 0;
            imageHtml[activeSlide].classList.toggle('d-none');
            overlayHtml[activeSlide].classList.toggle('overlay');
        }
    })

    prevBtn.addEventListener('click', function(){
        imageHtml[activeSlide].classList.toggle('d-none');
        overlayHtml[activeSlide].classList.toggle('overlay');
        activeSlide--;
        if(activeSlide >= 0){
            imageHtml[activeSlide].classList.toggle('d-none');
            overlayHtml[activeSlide].classList.toggle('overlay');
        } else {
            activeSlide = (images.length - 1);
            imageHtml[activeSlide].classList.toggle('d-none');
            overlayHtml[activeSlide].classList.toggle('overlay');
        }
    })

    for(let i = 0; i < overlayHtml.length; i++){
        overlayHtml[i].setAttribute('data-index', i);
        overlayHtml[i].addEventListener('click', function(){
            let overlayClicked = overlayHtml[i].getAttribute('data-index');
            console.log(overlayClicked)
        });
    }
}