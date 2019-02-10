// Read more btn js
function myFunction() {
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (moreText.style.display === 'inline') {
    btnText.innerHTML = 'More...&nbsp;<i class="fa fa-angle-double-right"></i>';
    moreText.style.display = 'none';
  } else {
    btnText.innerHTML = '<i class="fa fa-angle-double-left"></i>&nbsp;&nbsp;Less&nbsp;';
    moreText.style.display = 'inline';
  }
}

// Sidebar js
function toggleNav() {
  var sidebar = document.getElementById('mySidebar');
  var main = document.getElementById('main');
  var overlay = document.getElementById('overlay');

  if (window.getComputedStyle(sidebar).getPropertyValue('width') == '0px') {
    sidebar.style.width = '155px';
    main.style.marginLeft = '155px';
    overlay.style.display = 'block';
  } else {
    sidebar.style.width = '0%';
    main.style.marginLeft = '0%';
    overlay.style.display = 'none';
  }
}

function dateAndTime() {
  var today = new Date();
  document.getElementById('timer').innerHTML = today.toLocaleTimeString();
  document.getElementById('date').innerHTML = today.toLocaleDateString();
  setTimeout(dateAndTime, 1000);
}
dateAndTime();