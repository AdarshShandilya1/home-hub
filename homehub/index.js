// var questionAns = document.querySelectorAll(".hh-qna")
// for(let i=0; i<questionAns.length; i++){
//   var openAns = questionAns[i].querySelector(".hh-question-plus")
//   openAns[i].addEventListener("click", () => {
    
//     var answer = questionAns[i].querySelector(".hh-answer")
//     questionAns[i].classList.toggle("hh-qna-open")
//     answer.classList.toggle("hh-answer-show")
//   })
// }

let pagination = document.querySelectorAll('.page');
let pagination2 = document.querySelectorAll('.page2');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
  document.querySelector('.navbarMenu').classList.toggle('navbarMenuActive');
})


var splide = new Splide("#reviews", {
  type: "slide",
  padding: { left: "0rem", right: "0rem" },
  perPage: 1,
  gap: "0rem",
  drag: "free",
  snap: true,
  speed: (number = 1000),
  arrows: false,
  pagination: false,
  classes: {
		pagination: 'splide__pagination splide__pagination--custom',
		page      : 'splide__pagination__page splide',
  },
  breakpoints: {
    800: {
      perPage: 1,
      padding: { left: "0.5rem", right: "0.5rem" },
    },
    640: {
      perPage: 1,
      padding: { left: "0.5rem", right: "0.5rem" },
    },
  },
})

splide.mount()

let btnNext = document.querySelector(".nav-rbtn")
let btnPrev = document.querySelector(".nav-lbtn")
btnNext.addEventListener("click", (e) => {
  splide.go("+1")
  let index = -1;
  for(let i=0; i<pagination.length; i++){
    if(pagination[i].classList.contains('active')){
      index = i;
    }
  }
  console.log(index);
  if(index+1 < pagination.length){
    pagination.forEach((p)=>{
      p.classList.remove('active');
    })
    pagination[index+1].classList.add('active')
  }
  
})

btnPrev.addEventListener("click", (e) => {
  splide.go("-1")
  let index = -1;
  for(let i=0; i<pagination.length; i++){
    if(pagination[i].classList.contains('active')){
      index = i;
    }
  }
  console.log(index);
  if(index-1 >=0){
    pagination.forEach((p)=>{
      p.classList.remove('active');
    })
    pagination[index-1].classList.add('active')
  }
  
})




var plide = new Splide("#blogs", {
  type: "slide",
  padding: { left: "0rem", right: "0rem" },
  perPage: 1,
  gap: "0rem",
  drag: "free",
  snap: true,
  speed: (number = 1000),
  arrows: false,
  pagination: false,
  breakpoints: {
    800: {
      perPage: 1,
      padding: { left: "0.5rem", right: "0.5rem" },
    },
    640: {
      perPage: 1,
      padding: { left: "0.5rem", right: "0.5rem" },
    },
  },
})

plide.mount()

let btnNex = document.querySelector(".nav-rightbtn")
let btnPre = document.querySelector(".nav-leftbtn")
btnNex.addEventListener("click", (e) => {
  plide.go("+1")
  let index = -1;
  for(let i=0; i<pagination2.length; i++){
    if(pagination2[i].classList.contains('active')){
      index = i;
    }
  }
  console.log(index);
  if(index+1 < pagination2.length){
    pagination2.forEach((p)=>{
      p.classList.remove('active');
    })
    pagination2[index+1].classList.add('active')
  }
})

btnPre.addEventListener("click", (e) => {
  plide.go("-1")
  let index = -1;
  for(let i=0; i<pagination2.length; i++){
    if(pagination2[i].classList.contains('active')){
      index = i;
    }
  }
  console.log(index);
  if(index-1 >=0){
    pagination2.forEach((p)=>{
      p.classList.remove('active');
    })
    pagination2[index-1].classList.add('active')
  }
})
