//alert("hello its working");

//responsive top navigacija


//;console.log(barResNav);

let pos = 0;
const togleMobileNav = () => {
	let togleBtn = document.querySelector('#bar-to-shop-mobile-navigation');
	let mobileNav = document.querySelector("#navbar-mobile-nav");
	if(pos === 0){
		mobileNav.style.display = 'block';
		pos = 1;
	}else{
		mobileNav.style.display = 'none';
		pos = 0;
	}
	
};
