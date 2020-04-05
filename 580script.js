$(document).ready(() => {
  var synth = window.speechSynthesis;

  document.getElementById("cell1").onclick = function () { clicked1() };
  document.getElementById("cell2").onclick = function () { clicked2() };
  document.getElementById("cell3").onclick = function () { clicked3() };
  document.getElementById("cell4").onclick = function () { clicked4() };


  function clicked1() {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("The first cell is Light Blue"))
  }

  function clicked2() {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("the second cell is Orange"))
  }

  function clicked3() {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("the third cell is dark blue"))
  }

  function clicked4() {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("the fourth cell is yellow"))
  }

})
