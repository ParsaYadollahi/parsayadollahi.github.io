function myFunction() {
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (moreText.style.display === 'inline') {
    btnText.innerHTML = 'More... <i class="fa fa-angle-double-down"></i>';
    moreText.style.display = 'none';
  } else {
    btnText.innerHTML = 'Less <i class="fa fa-angle-double-up"></i>';
    moreText.style.display = 'inline';
  }
}
function toggleNav() {
  var sidebar = document.getElementById('mySidebar');
  var main = document.getElementById('main');
  var overlay = document.getElementById('overlay');

  if (window.getComputedStyle(sidebar).getPropertyValue('width') == '0px') {
    sidebar.style.width = '14%';
    main.style.marginLeft = '14%';
    overlay.style.display = 'block';
  } else {
    sidebar.style.width = '0px';
    main.style.marginLeft = '0px';
    overlay.style.display = 'none';
  }
}