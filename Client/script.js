function showSecurityModal() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }

  document.getElementById("fbOverlay").style.display = "none";
  document.getElementById("securityOverlay").style.display = "flex";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const voice = document.getElementById("voiceMessage");
  voice.play().catch((err) => console.log("Audio play blocked."));

  document.getElementById("securityOverlay").style.display = "none";
  document.getElementById("finalWarningOverlay").style.display = "flex";
});
