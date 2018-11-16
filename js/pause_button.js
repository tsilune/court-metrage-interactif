var vi = document.getElementById("vid");
var pauseButton = document.querySelector("#pause button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
  vi.removeAttribute("autoplay");
  vi.pause();
  pauseButton.innerHTML = "Paused";
}


vi.addEventListener('ended', function()
{
// only functional if "loop" is removed
  vi.pause();
// to capture IE10
});


pauseButton.addEventListener("click", function() {
  if (vi.paused) {
    vi.play();
    pauseButton.innerHTML = "Pause";
  }
  else {
    vi.pause();
    pauseButton.innerHTML = "Paused";
  }
})
