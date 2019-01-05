function myFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "inline") {
    btnText.innerHTML = "More... <i class=\"fa fa-angle-double-right\"></i>";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Less <i class=\"fa fa-angle-double-up\"></i>";
    moreText.style.display = "inline";
  }
}
function openNav() {
  document.getElementById("mySidebar").style.width = "180px";
  document.getElementById("main").style.marginLeft = "180px";
  document.getElementById("overlay").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("overlay").style.display = "none";
}