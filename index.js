let texts = [
  "DELL",
  "hp",
  "LENOVO",
  "DELL XPS 13",
  "MacBook Air",
  "ASUS VivoBook",
];

let images = [
  "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",

  "https://media.sketchfab.com/models/30224b94b1a041b487e957f08d5b1f4a/thumbnails/0d80a715267641dbba3955f643c4a6e1/45916413887e40fea476077850938cfc.jpeg",
  "https://images.unsplash.com/photo-1491472253230-a044054ca35f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",

  "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?semt=ais_hybrid&w=740&q=80",

  "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/laptops/geforce-rtx-50-series-laptops-learn-og-1200x630-new.jpg",

  "https://petapixel.com/assets/uploads/2023/01/M2-Max-MacBook-Pro-Review-1-800x534.jpeg",
];

let currentIndex = 0;

function next() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  changeBackground();
}

function prev() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  changeBackground();
}

function changeBackground() {
  document.getElementById("hero").style.backgroundImage =
    `url(${images[currentIndex]})`;

  document.getElementById("title").innerText = texts[currentIndex];
  title.classList.remove("animate__animated", "animate__fadeInUp");

  void title.offsetWidth;

  title.classList.add("animate__animated", "animate__fadeInUp");
}

window.onload = function () {
  changeBackground();
};
function selectImage(index) {
  currentIndex = index;
  changeBackground();
}
