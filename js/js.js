

const navSlide=()=>{
	
	const burger=document.querySelector('.burger');
	const nav=document.querySelector('.nav-links');
	const navlinks=document.querySelectorAll('.nav-links li');
	console.log(navlinks);
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
		//animate links
		navlinks.forEach((link,index)=> {
			if(link.style.animation){
				link.style.animation='';
			}
			else{
				link.style.animation=`navlinkfade 0.5s ease forwards ${index / 7}s`
			}
	});
		
		burger.classList.toggle('toggle');
		
	});
	
	
	
	
}

navSlide();