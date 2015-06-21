// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .





$(document).ready(function(){



  $('.tooltippy').on('mouseenter', function() {
    $(this).find(".tooltippy-content").show();
  }).on('mouseleave', function() {
    $(this).find(".tooltippy-content").hide();
  })


});



// //plain javascript code
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://goo.gl/fbsS", false);
// xhr.send();
// console.log(xhr.status);
// console.log(xhr.statusText);

// //plain ruby code

// function appendResults(text) {
//   var results = document.getElementById('results');
//   results.appendChild(document.createElement('P'));
//   results.appendChild(document.createTextNode(text));
// }

// function makeRequest() {
//   var request = gapi.client.urlshortener.url.get({
//     'shortUrl': 'http://goo.gl/fbsS'
//   });
//   request.then(function(response) {
//     appendResults(response.result.longUrl);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
// }

// function init() {
//   gapi.client.setApiKey('AIzaSyBSZL8JfeekQ3-1go0PQBgJqnNXSDYXUzg');
//   gapi.client.load('urlshortener', 'v1').then(makeRequest);
// }




    