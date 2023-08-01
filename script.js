var countDownDate = new Date("Nov 5, 2030 15:37:25").getTime();

  var x = setInterval(function() {              
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "THE DAY";
      }
  }, 1000);

  function copyContent() {
    const element = document.querySelector('#rek');
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
   element.appendChild(storage);

    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);

    alert("Copied the text to clipboard");
}

function copyContent2() {
    const element = document.querySelector('#rek2');
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);

    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);

    alert("Copied the text to clipboard");
}


function music()
{ 
    $(".navbar").css("display","block");
    $(".button-menu").css("display","block");
    $("#mute").css("display","block");
    $("body").css("overflow","auto");
    $("body").css("height","auto");
    var myAudio = $("#audio")[0];
    if (myAudio.duration > 0 && !myAudio.paused) {
    }
    else myAudio.play();
}

function mute()
{
music();

var myAudio = document.getElementById("audio");
var mute = document.getElementById("mute");

if(myAudio.muted == true) {
    myAudio.muted = false;
    mute.innerHTML = '<i class="fal fa-volume-up"></i>';
}
    else if(myAudio.muted == false) {
    myAudio.muted = true;
    mute.innerHTML = '<i class="fal fa-volume-slash"></i>';
    }
}