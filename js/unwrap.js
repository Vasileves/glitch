function unwrapPlayer(e) {
  var x = document.getElementById("player");
  let vidLink = e.getAttribute('data-vidLink')
  if (x.style.display === "none") {
    x.style.display = "block";
    // x.innerHTML = ' <img src="images/close.svg" class= "player-close"/> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/540630877?h=a0bcb9d6f7&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>";'
    x.innerHTML = ` <img src="images/close.svg" class= "player-close"/> <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${vidLink}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>";`
  } else {
    x.style.display = "none";
    x.innerHTML= "";
    x.muted = true;
    x.pause();
  }
}