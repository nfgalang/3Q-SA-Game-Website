let psx =  Math.floor(Math.random() * 1350);
let qc = null;
let psxB =  Math.floor(Math.random() * 1350);
let qcB = null;
let psxC =  Math.floor(Math.random() * 1350);
let qcC = null;
let psxD =  Math.floor(Math.random() * 1350);
let qcD = null;
let psx2 =  Math.floor(Math.random() * 1350);
let qc2 = null;
let psx2B =  Math.floor(Math.random() * 1350);
let qc2B = null;
let psx2C =  Math.floor(Math.random() * 1350);
let qc2C = null;
let psx3 =  Math.floor(Math.random() * 1350);
let qc3 = null;
let psx3B =  Math.floor(Math.random() * 1350);
let qc3B = null;
let psx3C =  Math.floor(Math.random() * 1350);
let qc3C = null;
let scr = 0;
let tmrcntr = 61;
let tmrs = null;
let tmrsB = null;
let tmrsC = null;
let tmrsD = null;
let tmrs2 = null;
let tmrs2B = null;
let tmrs2C = null;
let tmrs3 = null;
let tmrs3B = null;
let tmrs3C = null;

function ply(){
scr=0;
tmrcntr=61;
document.getElementById('scr').innerHTML = 0;
document.getElementById('tmr').innerHTML = 61;
enmyMvmntJs();
enmyMvmntJsB();
enmyMvmntJsC();
enmyMvmntJsD();
enmyMvmntJs2();
enmyMvmntJs2B();
enmyMvmntJs2C();
enmyMvmntJs3();
enmyMvmntJs3B();
enmyMvmntJs3C();
tmr();
document.getElementById('scrbrd').style.display = "flex";
document.getElementById('enmymvmnt').style.display = "block";
document.getElementById('enmymvmnt2').style.display = "block";
document.getElementById('enmymvmnt3').style.display = "block";
document.getElementById('enmymvmntB').style.display = "block";
document.getElementById('enmymvmntC').style.display = "block";
document.getElementById('enmymvmntD').style.display = "block";
document.getElementById('enmymvmnt2B').style.display = "block";
document.getElementById('enmymvmnt2C').style.display = "block";
document.getElementById('enmymvmnt3B').style.display = "block";
document.getElementById('enmymvmnt3C').style.display = "block";
document.getElementById('usrmvmnt').style.display = "block";
document.getElementById('tmr').style.display = "block";
document.getElementById('tmrtxt').style.display = "block";
document.getElementById('lg').style.display = "none";
document.getElementById('scrbrd').style.left = "0px";
document.getElementById('rtrn2').style.display = "none";
}
function atd(){
document.getElementById('atdp').style.display = "block";
document.getElementById('lg').style.display = "none";
document.getElementById('rtrn').style.display = "block";
}
function rtrn(){
document.getElementById('atdp').style.display = "none";
document.getElementById('lg').style.display = "flex";
document.getElementById('tmsp').style.display = "none";
document.getElementById('scrbrd').style.display = "none";
document.getElementById('rtrn').style.display = "none";
}
function enmyMvmntJs() {
  let randx = Math.floor(Math.random() * 1350);
  let enmybx = document.getElementById("enmymvmnt"); 
  clearInterval(qc);
  qc = setInterval(rgn,  Math.floor(Math.random() * 5)+1);
  function rgn() {
    if (psx == randx) {
      clearInterval(qc);
      enmyMvmntJs();
    } else {
    if (psx &lt; randx){
      psx++; 
    } else {
      psx--;
    }
      enmybx.style.left = psx + 'px'; 
    }
  }
}
function enmyMvmntJsB() {
  let randxB = Math.floor(Math.random() * 1350);
  let enmybxB = document.getElementById("enmymvmntB"); 
  clearInterval(qcB);
  qcB = setInterval(rgnB,  Math.floor(Math.random() * 5)+1);
  function rgnB() {
    if (psxB == randxB) {
      clearInterval(qcB);
      enmyMvmntJsB();
    } else {
    if (psxB &lt; randxB){
      psxB++; 
    } else {
      psxB--;
    }
      enmybxB.style.left = psxB + 'px'; 
    }
  }
}
function enmyMvmntJsC() {
  let randxC = Math.floor(Math.random() * 1350);
  let enmybxC = document.getElementById("enmymvmntC"); 
  clearInterval(qcC);
  qcC = setInterval(rgnC,  Math.floor(Math.random() * 5)+1);
  function rgnC() {
    if (psxC == randxC) {
      clearInterval(qcC);
      enmyMvmntJsC();
    } else {
    if (psxC &lt; randxC){
      psxC++; 
    } else {
      psxC--;
    }
      enmybxC.style.left = psxC + 'px'; 
    }
  }
}
function enmyMvmntJsD() {
  let randxD = Math.floor(Math.random() * 1350);
  let enmybxD = document.getElementById("enmymvmntD"); 
  clearInterval(qcD);
  qcD = setInterval(rgnD,  Math.floor(Math.random() * 5)+1);
  function rgnD() {
    if (psxD == randxD) {
      clearInterval(qcD);
      enmyMvmntJsD();
    } else {
    if (psxD &lt; randxD){
      psxD++; 
    } else {
      psxD--;
    }
      enmybxD.style.left = psxD + 'px'; 
    }
  }
}
function enmyMvmntJs2() {
  let randx2 = Math.floor(Math.random() * 1350);
  let enmybx2 = document.getElementById("enmymvmnt2"); 
  clearInterval(qc2);
  qc2 = setInterval(rgn2,  Math.floor(Math.random() * 3)+1);
  function rgn2() {
    if (psx2 == randx2) {
      clearInterval(qc2);
      enmyMvmntJs2();
    } else {
    if (psx2 &lt; randx2){
      psx2++; 
    } else {
      psx2--;
    }
      enmybx2.style.left = psx2 + 'px'; 
    }
  }
}
function enmyMvmntJs2B() {
  let randx2B = Math.floor(Math.random() * 1350);
  let enmybx2B = document.getElementById("enmymvmnt2B"); 
  clearInterval(qc2B);
  qc2B = setInterval(rgn2B,  Math.floor(Math.random() * 3)+1);
  function rgn2B() {
    if (psx2B == randx2B) {
      clearInterval(qc2B);
      enmyMvmntJs2B();
    } else {
    if (psx2B &lt; randx2B){
      psx2B++; 
    } else {
      psx2B--;
    }
      enmybx2B.style.left = psx2B + 'px'; 
    }
  }
}
function enmyMvmntJs2C() {
  let randx2C = Math.floor(Math.random() * 1350);
  let enmybx2C = document.getElementById("enmymvmnt2C"); 
  clearInterval(qc2C);
  qc2C = setInterval(rgn2C,  Math.floor(Math.random() * 3)+1);
  function rgn2C() {
    if (psx2C == randx2C) {
      clearInterval(qc2C);
      enmyMvmntJs2C();
    } else {
    if (psx2C &lt; randx2C){
      psx2C++; 
    } else {
      psx2C--;
    }
      enmybx2C.style.left = psx2C + 'px'; 
    }
  }
}
function enmyMvmntJs3() {
  let randx3 = Math.floor(Math.random() * 1350);
  let enmybx3 = document.getElementById("enmymvmnt3"); 
  clearInterval(qc3);
  qc3 = setInterval(rgn3, Math.floor(Math.random() * 2)+1);
  function rgn3() {
    if (psx3 == randx3) {
      clearInterval(qc3);
      enmyMvmntJs3();
    } else {
    if (psx3 &lt; randx3){
      psx3++; 
    } else {
      psx3--;
    }
      enmybx3.style.left = psx3 + 'px'; 
    }
  }
}
function enmyMvmntJs3B() {
  let randx3B = Math.floor(Math.random() * 1350);
  let enmybx3B = document.getElementById("enmymvmnt3B"); 
  clearInterval(qc3B);
  qc3B = setInterval(rgn3B, Math.floor(Math.random() * 2)+1);
  function rgn3B() {
    if (psx3B == randx3B) {
      clearInterval(qc3B);
      enmyMvmntJs3B();
    } else {
    if (psx3B &lt; randx3B){
      psx3B++; 
    } else {
      psx3B--;
    }
      enmybx3B.style.left = psx3B + 'px'; 
    }
  }
}
function enmyMvmntJs3C() {
  let randx3C = Math.floor(Math.random() * 1350);
  let enmybx3C = document.getElementById("enmymvmnt3C"); 
  clearInterval(qc3C);
  qc3C = setInterval(rgn3C, Math.floor(Math.random() * 2)+1);
  function rgn3C() {
    if (psx3C == randx3C) {
      clearInterval(qc3C);
      enmyMvmntJs3C();
    } else {
    if (psx3C &lt; randx3C){
      psx3C++; 
    } else {
      psx3C--;
    }
      enmybx3C.style.left = psx3C + 'px'; 
    }
  }
}
function tmr() {
      tmrcntr--;
      document.getElementById('tmr').innerHTML = tmrcntr;
      let tm = setTimeout(tmr, 1000);
      if (tmrcntr==0){
      clearInterval(qc);
      clearInterval(qcB);
      clearInterval(qcC);
      clearInterval(qcD);
      clearInterval(qc2);
      clearInterval(qc2B);
      clearInterval(qc2C);
      clearInterval(qc3);
      clearInterval(qc3B);
      clearInterval(qc3C);      
      document.getElementById('enmymvmnt').style.display = "none";
      document.getElementById('enmymvmntB').style.display = "none";
      document.getElementById('enmymvmntC').style.display = "none";
      document.getElementById('enmymvmntD').style.display = "none";
      document.getElementById('enmymvmnt2').style.display = "none";
      document.getElementById('enmymvmnt2B').style.display = "none";
      document.getElementById('enmymvmnt2C').style.display = "none";
      document.getElementById('enmymvmnt3').style.display = "none";
      document.getElementById('enmymvmnt3B').style.display = "none";
      document.getElementById('enmymvmnt3C').style.display = "none";
      document.getElementById('usrmvmnt').style.display = "none"; 
      document.getElementById('tmsp').style.display = "block";
      document.getElementById('tmr').style.display = "none";
      document.getElementById('tmrtxt').style.display = "none";
      document.getElementById('scrbrd').style.left = "200px";
      document.getElementById('rtrn2').style.display = "block";
      clearTimeout(tm);
      clearTimeout(tmrs);
      clearTimeout(tmrsB);
      clearTimeout(tmrsC);
      clearTimeout(tmrsD);
      clearTimeout(tmrs2);
      clearTimeout(tmrs2B);
      clearTimeout(tmrs2C);
      clearTimeout(tmrs3);
      clearTimeout(tmrs3B);
      clearTimeout(tmrs3C);
      }
}
function mv(event){
let x = event.pageX;
document.getElementById('usrmvmnt').style.left = x-800 + 'px';
}
function bm(){
document.getElementById('enmymvmnt').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrs = setTimeout(rspwn, 3000);
}
function bmB(){
document.getElementById('enmymvmntB').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrsB = setTimeout(rspwnB, 3000);
}
function bmC(){
document.getElementById('enmymvmntC').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrsC = setTimeout(rspwnC, 3000);
}
function bmD(){
document.getElementById('enmymvmntD').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrsD = setTimeout(rspwnD, 3000);
}
function bm2(){
document.getElementById('enmymvmnt2').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrs2 = setTimeout(rspwn2, 3000);
}
function bm2B(){
document.getElementById('enmymvmnt2B').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrs2B = setTimeout(rspwn2B, 3000);
}
function bm2C(){
document.getElementById('enmymvmnt2C').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrs2C = setTimeout(rspwn2C, 3000);
}
function bm3(){
document.getElementById('enmymvmnt3').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrs3 = setTimeout(rspwn3, 3000);
}
function bm3B(){
document.getElementById('enmymvmnt3B').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrs3B = setTimeout(rspwn3B, 3000);
}
function bm3C(){
document.getElementById('enmymvmnt3C').style.display = "none";
scr += 1;
document.getElementById('scr').innerHTML = scr;
tmrs3C = setTimeout(rspwn3C, 3000);
}
function rspwn(){
document.getElementById('enmymvmnt').style.display = "block";
}
function rspwnB(){
document.getElementById('enmymvmntB').style.display = "block";
}
function rspwnC(){
document.getElementById('enmymvmntC').style.display = "block";
}
function rspwnD(){
document.getElementById('enmymvmntD').style.display = "block";
}
function rspwn2(){
document.getElementById('enmymvmnt2').style.display = "block";
}
function rspwn2B(){
document.getElementById('enmymvmnt2B').style.display = "block";
}
function rspwn2C(){
document.getElementById('enmymvmnt2C').style.display = "block";
}
function rspwn3(){
document.getElementById('enmymvmnt3').style.display = "block";
}
function rspwn3B(){
document.getElementById('enmymvmnt3B').style.display = "block";
}
function rspwn3C(){
document.getElementById('enmymvmnt3C').style.display = "block";
}
let qcb = null;
function tch(bllttch,enmytch){
  const eps1 = bllttch.getBoundingClientRect();
  const eps2 = enmytch.getBoundingClientRect();
  return !(eps1.right &lt; eps2.left || eps1.left > eps2.right || eps1.bottom &lt; eps2.top || eps1.top > eps2.bottom);
}
function sht(event) {
  let bllt = document.getElementById("mysht"); 
  document.getElementById("usrmvmnt").onclick=null;
  let psys = 590;
  let x = event.pageX;
  bllt.style.left = x-1.5 + 'px';
  clearInterval(qcb);
  qcb = setInterval(shtmvmnt, 1);
  function shtmvmnt() {
  const htbx1 = document.getElementById("mysht");
  bllt.style.display = "block";
    if (psys == 0) {
      clearInterval(qcb);
      bllt.style.display = "none"; 
      document.getElementById("usrmvmnt").onclick=sht;
    } else {
      psys=psys-5; 
      bllt.style.top = psys + 'px'; 
      bllt.style.display = "block"; 
      if(tch(htbx1, document.getElementById("enmymvmnt"))) {bm(); 
  clearInterval(qcb);                                                       
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                           return;};
      if(tch(htbx1, document.getElementById("enmymvmnt2"))) {bm2()
  clearInterval(qcb);     
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                            return;};
      if(tch(htbx1, document.getElementById("enmymvmnt3"))) {bm3()
  clearInterval(qcb);                                                       
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                            return;};
      if(tch(htbx1, document.getElementById("enmymvmntB"))) {bmB()
  clearInterval(qcb);                                                       
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                            return;};
      if(tch(htbx1, document.getElementById("enmymvmnt2B"))) {bm2B()
  clearInterval(qcb);                                                       
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                             return;};
      if(tch(htbx1, document.getElementById("enmymvmnt3B"))) {bm3B()
  clearInterval(qcb);                                                       
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                             return;};
      if(tch(htbx1, document.getElementById("enmymvmntC"))) {bmC()
  clearInterval(qcb);                                                       
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                            return;};
      if(tch(htbx1, document.getElementById("enmymvmnt2C"))) {bm2C()
  clearInterval(qcb);                                                       
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                             return;};
      if(tch(htbx1, document.getElementById("enmymvmnt3C"))) {bm3C()
   clearInterval(qcb);                                                       
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                             return;};
      if(tch(htbx1, document.getElementById("enmymvmntD"))) {bmD()
  clearInterval(qcb);                                                       
  bllt.style.display = "none";
  document.getElementById("usrmvmnt").onclick=sht;
                                                            return;};
      
    }
  }
}