/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const caroContainer = document.querySelector('.carousel-container');
const test = Carousel();
caroContainer.appendChild(test);

function Carousel() {
  const carouselDiv = document.createElement('div');

  const leftBtn = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightBtn = document.createElement('div');

  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(img1);
  carouselDiv.appendChild(img2);
  carouselDiv.appendChild(img3);
  carouselDiv.appendChild(img4);
  carouselDiv.appendChild(rightBtn);

  carouselDiv.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  leftBtn.textContent = " < ";
  rightBtn.textContent = " > ";

  img1.src = "./assets/carousel/mountains.jpeg"
  img2.src = "./assets/carousel/computer.jpeg"
  img3.src = "./assets/carousel/trees.jpeg"
  img4.src = "./assets/carousel/turntable.jpeg"

  let curIndex = 0;
  let imgList = [img1, img2, img3, img4];
  imgList[0].style.display = "block";
  
  rightBtn.addEventListener('click', () => {
    imgList[curIndex].style.display = "none";
    curIndex += 1;
    if (curIndex >= imgList.length) {
      curIndex = 0;
    }
    imgList[curIndex].style.display = "block";
  })
  leftBtn.addEventListener('click', () => {
    imgList[curIndex].style.display = "none";
    curIndex -= 1;
    if (curIndex == -1) {
      curIndex = 3;
    }
    imgList[curIndex].style.display = "block";
  })

  return carouselDiv;
}