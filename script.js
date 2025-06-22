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
