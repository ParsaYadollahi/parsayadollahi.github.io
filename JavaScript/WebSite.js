$('a[href^=#]').on("click",function(){
  var t= $(this.hash);
  var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
  if(t.length){
      var tOffset=t.offset().top;
      $('html,body').animate({scrollTop:tOffset-20},'slow');
      return false;
  }
});

// Read more btn js
function myFunction() {
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (moreText.style.display === 'inline') {
    btnText.innerHTML = 'More... <i class="fa fa-angle-double-right"></i>';
    moreText.style.display = 'none';
  } else {
    btnText.innerHTML = '<i class="fa fa-angle-double-left"></i>Less';
    moreText.style.display = 'inline';
  }
}

// Sidebar js
function toggleNav() {
  var sidebar = document.getElementById('mySidebar');
  var main = document.getElementById('main');
  var overlay = document.getElementById('overlay');

  if (window.getComputedStyle(sidebar).getPropertyValue('width') == '0px') {
    sidebar.style.width = '180px';
    main.style.marginLeft = '180px';
    overlay.style.display = 'block';
  } else {
    sidebar.style.width = '0%';
    main.style.marginLeft = '0%';
    overlay.style.display = 'none';
  }
}