	$(document).ready(function (){

	

	

	 $(window).scroll(function () {

		if (this.scrollY>30) {

			$('.navbar').addClass("sticky");

			

		}else {

			$('.navbar').removeClass("sticky");

			

		} 

		if(this.scrollY>500){

			$('.scroll-up-btn').addClass("show");

		}else{

			$('.scroll-up-btn').removeClass("show");

		} 

	 })



	 //slide-up script

	 $('.scroll-up-btn').click(function(){

		 $('html').animate({scrollTop:0});

	 });





	// toggle menu/navbar script

	$('.menu-btn').click(function(){

		$('.navbar .menu').toggleClass("active");

		$('.menu-btn i').toggleClass("active");

		

	});





//owl carousel script

$('.carousel').owlCarousel({

	margin:20,

	loop:true,

	auotplayTimeOut:2000,

	autoplayHoverPause:true,

	responsive:{

		0:{

			items:1,

			nav:false

		},

		600:{

			items:2,

			nav:false

		},

		1000:{

			items:3,

			nav:false

		}

		

	}

	});





//typing animation scropt ENACTUS

var typed= new Typed(".typing",{

	strings:["Enactus","Student","Helpful","Volunteer","Human"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Xanim0 

var typed= new Typed(".typing-0",{

	strings:["President","Biologist","Wonder-Women","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Ferid1

var typed= new Typed(".typing-1",{

	strings:["Developer","Designer","X-MEN","Student","Programer","Freelancer"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Ayisha2 

var typed= new Typed(".typing-2",{

	strings:["Marketing Manager","Biologist","Bat-Girl","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Durdane3

var typed= new Typed(".typing-3",{

	strings:["Inteligent","Biologist","Wisteria","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Gunduz 4

var typed= new Typed(".typing-4",{

	strings:["Project Manager","Biologist","Super-Man","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Vefa 5 

var typed= new Typed(".typing-5",{

	strings:["Graphic designer","Biologist","Lady-Wifi","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Ferid 6 

var typed= new Typed(".typing-6",{

	strings:["Marketing manager","Biologist","Bat-Man","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Nuray 7 

var typed= new Typed(".typing-7",{

	strings:["SMM manager","Biologist","Rinaruj","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Selminaz 8 

var typed= new Typed(".typing-8",{

	strings:["SMM manager","Biologist","Captan Marvel","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Mahir 9

var typed= new Typed(".typing-9",{

	strings:["Graphic designer","Biologist","Iron-Man","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Nezrin 10 

var typed= new Typed(".typing-10",{

	strings:["Ecologist","Biologist","Rabbit-X","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt ILkin 11

var typed= new Typed(".typing-11",{

	strings:["IT devveloper","Biologist","Ben-10","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Asmar 12 

var typed= new Typed(".typing-12",{

	strings:["Assistant","Biologist","Super-Girl","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Cavid 13 

var typed= new Typed(".typing-13",{

	strings:["Researcher","Biologist","Robin","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Kamala 14 

var typed= new Typed(".typing-14",{

	strings:["HR Manager","Biologist","Storm","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Atabey 15

var typed= new Typed(".typing-15",{

	strings:["Marketing manager","Biologist","Joker","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt NezrinA 16

var typed= new Typed(".typing-16",{

	strings:["SMM Director","Biologist","Black Widow","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});



//typing animation scropt Punhan 17

var typed= new Typed(".typing-17",{

	strings:["IR manager","Biologist","HULK","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});

//typing animation scropt Punhan 18

var typed= new Typed(".typing-18",{

	strings:["Project Group","Biologist","Spider-Man","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});

//typing animation scropt Inci 19

var typed= new Typed(".typing-19",{

	strings:["Project Group","Biologist","Cat-Woman","Helpfull","Student"],

	typeSpeed:100,

	backSpeed:60,

	loop:true

});







	});







function sendMail(){

var _yourMessage = "name: " +document.getElementById("names").value + " mail: "+document.getElementById("yourmail").value +" deyir ki: -"+document.getElementById("yourmessages").value;

var _subject = document.getElementById("yoursubject").value;

var all='mailto:bduenactusteam2@gmail.com'+'?subject='+encodeURIComponent(_subject)+'&body='+encodeURIComponent(_yourMessage);

window.open(all);

 

}

	

	

		