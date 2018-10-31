//Functions: they're kind of like the paragraph of JS
//They're also a datatype in their own right. they combine statements
//If a function is inside an object, it's called a method.
//Arguments go inside the (); example: function(argument)

/*DOM - Document Object Model
Your way of outlining a page visually and programatically
Has a lot of built-in methods, the most common is: document.getElementByID (this is the fastest of the three - check two below). When we refer to DOM, we refer to the objects and elements built-in
You also have the following methods: document.QuerySelector & document.QuerySelectorAll (these are more flexible than getElement)
Properties for page elements it knows about: value, checked (property of checkboxes and select boxes), classname (properties of any element that will refer to whatever classes are set on taht element and whatever the ID is)
*/

function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
