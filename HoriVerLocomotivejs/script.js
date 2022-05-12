// import LocomotiveScroll from '../../../src/HoriVerLocomotivejs';

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    },
      smoothMobile: 1,
    multiplier: 1.0,
  });
  
  // Wait 2 seconds then calculate the new page height
  setTimeout(() => {  
      locoScroll.update();
  }, 2000);