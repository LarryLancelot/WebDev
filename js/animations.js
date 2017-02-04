function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

var load1;
var load2;
var load21;

function loadAM() {
     load1 = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("divMain").style.display = "block";
}

function loadForums() {
     load2 = setTimeout(showPage2, 750);
     load21 = setTimeout(showPage21, 1000);
}

function showPage2() {
  document.getElementById("divMain").style.display = "block";
}

function showPage21() {
  document.getElementById("divPort").style.display = "block";
}