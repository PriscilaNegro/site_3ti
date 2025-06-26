 function toggleHeaderScrolled() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('load', toggleHeaderScrolled);

window.addEventListener('scroll', toggleHeaderScrolled);

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll('.parallax-img');
  new simpleParallax(images, {
    scale: 1.3,
    delay: 0.6,
    transition: 'cubic-bezier(0,0,0,1)'
  });
});

function initMap() {
  const localEmpresa = { lat: -21.787874, lng: -48.175622 }; 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: localEmpresa,
  });

  const marker = new google.maps.Marker({
    position: localEmpresa,
    map: map,
    title: "3TI Softwares",
  });
}

document.getElementById("ano-atual").textContent = new Date().getFullYear();
