jQuery("#img-delete").click(function () {
  let display = document.head.appendChild(document.createElement("style"));
  document.getElementById("img-delete").style.display = "none";
  display.innerHTML = ".youtube-video:after {display: none;}";
  
  const template = document.getElementById("yt-iframe");
  const clone = template.content.cloneNode(true);
  const wrapper = document.querySelector(".youtube-video");
  wrapper.appendChild(clone);
});
