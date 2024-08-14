

function scrollAppear(){
  var photosWedding = document.querySelector('.Photos')
  var photosPosition = photosWedding.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if(photosPosition < screenPosition){
    photosWedding.classList.add('Photos-appear');
  }

  var noColor = document.querySelector('.exclude-text')
  var nocolorPosition = noColor.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if(nocolorPosition < screenPosition){
    noColor.classList.add('exclude-text-appear');
  }



  var photosVenue = document.querySelector('.venue-photos')
  var photoPosition = photosVenue.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.7;

  if(photoPosition < screenPosition){
    photosVenue.classList.add('venue-photos-appear');
  }


  var timeLine = document.querySelector('.timeline')
  var timelinePosition = timeLine.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.7;

  if(timelinePosition < screenPosition){
    timeLine.classList.add('timeline-appear');
  }


  var venueHed = document.querySelector('.venue-h2')
  var venueHedPosition = venueHed.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(venueHedPosition < screenPosition){
    venueHed.classList.add('venue-h2-appear');
  }

  var venuePone = document.querySelector('.venue-p1')
  var venuePonePosition = venuePone.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(venuePonePosition < screenPosition){
    venuePone.classList.add('venue-p1-appear');
  }

  var venuePtwo = document.querySelector('.venue-p2')
  var venuePtwoPosition = venuePtwo.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(venuePtwoPosition < screenPosition){
    venuePtwo.classList.add('venue-p2-appear');
  }


  var colorBoxes = document.querySelector('.color-boxes')
  var boxesPosition = colorBoxes.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(boxesPosition < screenPosition){
    colorBoxes.classList.add('color-boxes-appear');
  }


  var detailsHed = document.querySelector('.details-h2')
  var detailsPosition = detailsHed.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(detailsPosition < screenPosition){
    detailsHed.classList.add('details-h2-appear');
  }

  var whiteBox = document.querySelector('.white-box')
  var whiteboxPosition = whiteBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(whiteboxPosition < screenPosition){
    whiteBox.classList.add('white-box-appear');
  }

  var organIze = document.querySelector('.organization')
  var organizePosition = organIze.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(organizePosition < screenPosition){
    organIze.classList.add('organization-appear');
  }

  var organzaTion = document.querySelector('.organization-details')
  var organizationPosition = organzaTion.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(organizationPosition < screenPosition){
    organzaTion.classList.add('organization-details-appear');
  }

  var weddingPhotos = document.querySelector('.wedding-photos')
  var wedingPosition = weddingPhotos.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(wedingPosition < screenPosition){
    weddingPhotos.classList.add('wedding-photos-appear');
  }

  var photoButton = document.querySelector('.photo-button')
  var buttonPosition = photoButton.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(buttonPosition < screenPosition){
    photoButton.classList.add('photo-button-appear');
  }

  var attireDetails = document.querySelector('.attire-details')
  var attirePosition = attireDetails.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(attirePosition < screenPosition){
    attireDetails.classList.add('attire-details-appear');
  }

  var detailsHthree = document.querySelector('.details-h3')
  var detPosition = detailsHthree.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(detPosition < screenPosition){
    detailsHthree.classList.add('details-h3-appear');
  }


}

  window.addEventListener('scroll',scrollAppear)




function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}





// Countdown timer
var countDownDate = new Date("October 8, 2024 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The wedding has started!";
  }
}, 1000);

// Modal functionality
var infoModal = document.getElementById("info");
var detailsModal = document.getElementById("details");
var venueModal = document.getElementById("venue");
var photosModal = document.getElementById("photos");

var infoLink = document.getElementById("info-link");
var detailsLink = document.getElementById("details-link");
var venueLink = document.getElementById("venue-link");
var photosLink = document.getElementById("photos-link");

var span = document.getElementsByClassName("close");

infoLink.onclick = function() {
  infoModal.style.display = "block";
}

detailsLink.onclick = function() {
  detailsModal.style.display = "block";
}

venueLink.onclick = function() {
  venueModal.style.display = "block";
}

photosLink.onclick = function() {
  photosModal.style.display = "block";
}

for (var i = 0; i < span.length; i++) {
  span[i].onclick = function() {
    this.parentElement.parentElement.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == infoModal) {
    infoModal.style.display = "none";
  }
  if (event.target == detailsModal) {
    detailsModal.style.display = "none";
  }
  if (event.target == venueModal) {
    venueModal.style.display = "none";
  }
  if (event.target == photosModal) {
    photosModal.style.display = "none";
  }
}

// Language switcher
var languageSwitcher = document.getElementById("language-switcher");
languageSwitcher.addEventListener("change", function() {
    var selectedLanguage = this.value;
    var elements = document.querySelectorAll("[data-en]");

    elements.forEach(function(element) {
        element.textContent = element.getAttribute("data-" + selectedLanguage);
    });

    // Change image source based on selected language
    var timelineImage = document.querySelector(".timeline");
    if (selectedLanguage === "uk") {
        timelineImage.src = "timeline-ukr.png";
    } else {
        timelineImage.src = "Timeline copy.png";
    }
});

var languageSwitchers = document.getElementById("language-switcher2");
languageSwitchers.addEventListener("change", function() {
    var selectedLanguage = this.value;
    var elements = document.querySelectorAll("[data-en]");

    elements.forEach(function(element) {
        element.textContent = element.getAttribute("data-" + selectedLanguage);
    });

    // Change image source based on selected language
    var timelineImage = document.querySelector(".timeline");
    if (selectedLanguage === "uk") {
        timelineImage.src = "timeline-ukr.png";
    } else {
        timelineImage.src = "Timeline copy.png";
    }
});

// Scroll effect
$(window).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

