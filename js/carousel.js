

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }
    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

   static Next() {



let carouselDiv = document.getElementById("carousel");
let titleDiv = document.getElementById("carousel-title");







let currentItem = Carousel._arr[Carousel._sequence];




if (currentItem) {
    let img = carouselDiv.querySelector("img");

    if (!img) {
        img = document.createElement("img");
        carouselDiv.appendChild(img);
    }

    img.src = currentItem.image;
    img.alt = currentItem.title;
    titleDiv.innerHTML = `<a href="${currentItem.url}">${currentItem.title}</a>`;
}





Carousel._sequence = (Carousel._sequence + 1) % Carousel._size; 
};
}