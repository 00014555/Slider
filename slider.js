const nextBtn = document.querySelector('#next'),
      prevBtn = document.querySelector('#prev');

 let slideList = document.querySelector('.slides');
 let slides = document.querySelectorAll('.slide');
 
 let slideWidth = slides[0].getBoundingClientRect().width;

 slides.forEach((slide, idx) => {
     slide.style.left = `${slideWidth * idx}px`;
 })

 nextBtn.addEventListener('click', function() {
     let current = document.querySelector('.current');
     let next = current.nextElementSibling;

     slideList.style.transform = `translateX(-${next.style.left})`;
     current.classList.remove('current');
     next.classList.add('current');
 });

 prevBtn.addEventListener('click', function() {
    let current = document.querySelector('.current');
    let next = current.prevElementSibling;

    slideList.style.transform = `translateX(-${next.style.left})`;
    current.classList.remove('current');
    next.classList.add('current');
 });