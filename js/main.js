'use strict';

var navbar = document.querySelector('.main-nav');
var toggleNavbar = document.querySelector('.navbar-toggle');
var modal = document.getElementById('modalContent');

navbar.classList.remove('main-nav--nojs');
toggleNavbar.classList.remove('navbar-toggle--nojs');

toggleNavbar.addEventListener('click', function(evt) {
  if (navbar.classList.contains('main-nav--closed')) {
    evt.preventDefault();
    navbar.classList.remove('main-nav--closed');
    navbar.classList.add('main-nav--open');
    toggleNavbar.classList.add('navbar-toggle--open');
  } else {
    evt.preventDefault();
    navbar.classList.add('main-nav--closed');
    navbar.classList.remove('main-nav--open');
    toggleNavbar.classList.remove('navbar-toggle--open');
  }
});

window.addEventListener('click', function(evt) {
  if(evt.target === modal) {
    modal.style.display = 'none';
  }
});

window.addEventListener('keydown', function(evt) {
  if(evt.keyCode == 27) {
    if(modal.style.display = 'block') {
      modal.style.display = 'none';
    }
  }
});

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.938830, 30.323130)
  };
  var map = new google.maps.Map(document.getElementById('contactsMap'),
    mapOptions);
  var image = '../../img/icon-map-pin.svg';
  var myLatLng = new google.maps.LatLng(59.93858,30.3228);

  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);


