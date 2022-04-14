  function unwrapPlayer(e) {
  var x = document.getElementById("player");
  let vidLink = e.getAttribute('data-vidLink')
  if (x.style.display === "none") {
    x.style.display = "block";

    //vimeo embed version

    x.innerHTML = ` <img src="images/close.svg" class= "player-close"/> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${vidLink}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>";`

    //native <video> version (new )
    //x.innerHTML = ` <img src="images/close.svg" class= "player-close"/> <video width='100%' height='100%' controls autoplay>   <source src="${vidLink}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></video> ";`

  } else {
    x.style.display = "none";
    x.innerHTML= "";
    x.muted = true;
    x.pause();
  }
}
