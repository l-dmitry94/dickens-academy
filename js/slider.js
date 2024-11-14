export const slider = () => {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true,
        dots: '.dots',
        scrollLock: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
};
