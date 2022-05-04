// Building an Image Carousel

let images = [    // length = 7; index is = 6
    "/sources/IMG_9742.JPG",
    "/imageCarousel/sources/IMG_9743.JPG",
    "/imageCarousel/sources/IMG_9744.JPG",
    "/imageCarousel/sources/IMG_9672.JPG",
    "/imageCarousel/sources/IMG_9673.JPG",
    "/imageCarousel/sources/IMG_9680.JPG",
    "/imageCarousel/sources/IMG_9692.JPG"
  ];
  
  let currentIndex = 0; 
  let img = document.querySelector('img');
  let next = document.getElementById('next-button');
  let prev = document.getElementById('prev-button');

  /*  function to update the index position, and goes back to the beginning of the array
      if the index reaches the end of the array.
  */
  let incrementIndex = function() {
    currentIndex += 1;

    if(currentIndex > images.length - 1) {
      currentIndex = 0;
    }
    return currentIndex;
  }

  let decrementIndex = function() {
    currentIndex -= 1;
    if(currentIndex < 0) {
      currentIndex = images.length - 1
    }
    return currentIndex;
  }

  // create an event listener for a #next-button click
      // increment the index
      // set the img src to the next URL in the images array
  next.onclick = function() {
    img.setAttribute('src', images[incrementIndex(currentIndex)]);
  }

  // create an event listener for a #prev-button click
      // decrement the index
      // set the img src to the previous URL in the images array
  prev.onclick = function() {
    img.setAttribute('src',images[decrementIndex(currentIndex)]);
  }