const startbtn= document.querySelector('.startbtn');
const popupinfo= document.querySelector('.popupinfo');
const exitbtn= document.querySelector('.exitbtn');
const main= document.querySelector('.main');
const continuebtn= document.querySelector('.contbtn');
const quizsect= document.querySelector('.quizsect');
const quizbox= document.querySelector('.quizbox');
const resultbox= document.querySelector('.resultbox');
const tryagain= document.querySelector('.trybtn');
const homebtn= document.querySelector('.homebtn');


startbtn.onclick =() =>{
 popupinfo.classList.add('active');
 main.classList.add('active');
}
exitbtn.onclick =() =>{
 popupinfo.classList.remove('active');
 main.classList.remove('active');
}

tryagain.onclick =() =>{
 quizbox.classList.add('active');
 nextbtn.classList.remove('active');
 resultbox.classList.remove('active');
 
 questioncount = 0;
 questionnum = 1;
 userscore= 0;

 showQuestions(questioncount);
 questioncounter(questionnum);
 headerscore();
}
homebtn.onclick =() =>{
 quizsect.classList.remove('active');
 nextbtn.classList.remove('active');
 resultbox.classList.remove('active');
 
 questioncount = 0;
 questionnum = 1;
 userscore= 0;

 showQuestions(questioncount);
 questioncounter(questionnum);
}


continuebtn.onclick =() =>{
 quizsect.classList.add('active');
 popupinfo.classList.remove('active');
 main.classList.remove('active');
 quizbox.classList.add('active');
 showQuestions(0);
 questioncounter(1);
 headerscore();
}
let questioncount = 0;
let questionnum = 1;
let userscore= 0;
const nextbtn = document.querySelector('.nxtbtn');

nextbtn.onclick =() =>{
 if(questioncount < questions.length -1 ){
 questioncount++;
 showQuestions(questioncount);

 questionnum++;
 questioncounter(questionnum);
 nextbtn.classList.remove('active');
 }
 else{
 showResult();
 } 
}

const optionlist = document.querySelector('.optionlist');


function showQuestions(index){
 const questionsText =document.querySelector('.question_text');
 questionsText.textContent= `${questions[index].num}.${questions[index].question}`;

 let optiontag= `<div class="option"><span>${questions[index].option[0]}</span></div>
 <div class="option"><span>${questions[index].option[1]}</span></div>
 <div class="option"><span>${questions[index].option[2]}</span></div>
 <div class="option"><span>${questions[index].option[3]}</span></div>`;
 optionlist.innerHTML = optiontag;

 const option = document.querySelectorAll('.option');
 for( let i=0; i< option.length; i++){
 option[i].setAttribute('onclick','optionSelected(this)');
 }
}
function optionSelected(answer){
 let userAnswer = answer.textContent;
 let correctans= questions[questioncount].answers;
 let allopt= optionlist.children.length;

 if(userAnswer== correctans){
 answer.classList.add('correct');
 userscore+= 1;
 headerscore();
 }
 else{
 answer.classList.add('incorrect');

 for(let i=0; i<allopt; i++){
 if(optionlist.children[i].textContent==correctans){
 optionlist.children[i].setAttribute('class','option correct');
 }
 }
 }


 for(let i=0; i<allopt; i++){
 optionlist.children[i].classList.add('disable');
 }

 nextbtn.classList.add('active');

}

function questioncounter(index){
 const questiontotal = document.querySelector('.questiontotal');
 questiontotal.textContent= `${index} of ${questions.length} Questions`;
}

function headerscore(){
 const headerscore= document.querySelector('.header_score');
 headerscore.textContent= `Score: ${userscore}/ ${questions.length}`;
}
function showResult(){
 quizbox.classList.remove('active');
 resultbox.classList.add('active');

 const scoretext= document.querySelector('.scoretext');
 scoretext.textContent = `Your score ${userscore} out of ${questions.length}`;

 const circularprog = document.querySelector('.circularprog');

 const progressvalue = document.querySelector('.progvalue');
 let progresstartvalue = -1;
 let progresendvalue = (userscore / questions.length)* 100;
 let speed = 20;

 let progress = setInterval(() =>{
 progresstartvalue++;

 progressvalue.textContent = `${progresstartvalue} %`;

 // circularprog.style.background= `background: conic-gradient(#48423d ${progresstartvalue * 3.6}deg, rgba(255,255,255,0.1) 0deg);`;
 circularprog.style.background = `conic-gradient(#48423d ${progresstartvalue * 3.6}deg, rgba(255,255,255,0.1) 0deg)`;

 if(progresstartvalue== progresendvalue){
 clearInterval(progress);
 }
 }, speed);


}