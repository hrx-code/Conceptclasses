  const navSlide=()=>{
  const burger=document.querySelector('.burger');
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');



  //console.log(navLinks);
//  console.log(bodyy);


  // toggle nave
/* on clicking burger nav class list will run a function for nav links */
    burger.addEventListener('click',()=>{
      console.log(nav);
      nav.classList.toggle('nav-active');

      //  console.log(nav);
// animate links
      navLinks.forEach((link,index)=>{
          if(link.style.animation){
            link.style.animation='';
          }
          else{
            link.style.animation=`navlinkfade 0.5s ease forwards ${index/7}s`;
          }
        console.log(index / 7);
        console.log("-----------");
      });
   // burger animation

   burger.classList.toggle('toggle');
  /* bodyy.addEventListener('click',()=>{
     nav.classList.toggle('nav-active');
   }); */

    });



}
navSlide();
// ---------------------------------------------------------------

const func=()=>{

  const mainpage=document.querySelector('main');
  const burger1=document.querySelector('.burger');
  const navLinks1=document.querySelectorAll('.nav-links li');
  const nav1=document.querySelector('.nav-links');

  mainpage.addEventListener('click',()=>{
    nav1.classList.remove('nav-active');
    burger1.classList.remove('toggle');
    //----------------------
      navLinks1.forEach((link,index)=>{
        if(link.style.animation){
          link.style.animation='';
        }
    /*  else{
          link.style.animation=`navlinkfade 0.5s ease forwards ${index/7}s`;
        } */
      console.log(index / 7);
      console.log("-----------");
    });

    //----------------------
  });
}

func();


/*const mainpage=document.getElementsByTagName("main");

  const navbar=document.querySelector('.nav-links');
  console.log(navbar); */


/*  function togglenav_active(){
          if()
  } */
