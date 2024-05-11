function teleport() {
   let QNST = document.getElementById('QNS');
   let QNS = QNST.innerHTML;
   let QN = Number(QNS);
   let QNN = QN + 1;
   let QNNS = String(QNN);
   let NQ = `quiz-${QNNS}.html`;
   window.location.href = NQ;
 }
 //wrong teleport
 function wrongTeleport(){
  alert("Wrong Answer!");
  window.location.href = "wrong.html";
 }
 //score 
let score = 0;
 
 function teleportMain() {
   window.location.href = "quiz-1.html";
 }
 function submit() {

   //right answer 
   let RA = document.getElementById('right');
   let RAV = RA.value;
 
   //screen answer 
   let SA = document.getElementById('answerF');
   let SAV = SA.value;
   if (RAV === SAV) {
     alert(`Correct Answer!`);
     teleport();
   } else if (SAV == "") {
     alert("Select Answer,Please");
 
   } else {
     wrongTeleport();
   }
 }
 function winTeleport(){
 window.location.href ="congrats.html";
 }

 function submitEnd() {
  
   //right answer 
   let RA = document.getElementById('right');
   let RAV = RA.value;
 
   //screen answer 
   let SA = document.getElementById('answerF');
   let SAV = SA.value;
  if (RAV === SAV) {
    alert(`Correct Answer!`);
    winTeleport();
  } else if (SAV == "") {
    alert("Select Answer,Please");

  } else {
    wrongTeleport();
  }
}
