
var button=["red","green","blue","yellow"];

var pattern=[];
var userpat=[];


var started= false;

var level=0;

$(".btn").on("click",function(){
							var usercolor=this.id;
							userpat.push(usercolor);
							$("#"+usercolor).addClass("pressed");
							setTimeout(function()	{$("#"+usercolor).removeClass("pressed");		}, 100);
		playsound(usercolor);
		check(userpat.length-1);
			});
			



	$(".start").on("click",function(){
		if(!started){
										$("h1").text("level"+level);
										bty();
										started=true;}});		
			
			
			
		function bty(){
 userpat=[];
 
		level++;

$("h1").text("level"+level);
				var ran=Math.floor(Math.random()*4);
				
				var chosen=button[ran];
				pattern.push(chosen);
				
				$("#"+chosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
				playsound(chosen);
			}
			
			
			
			function playsound(name){
			var audio=new Audio(name+".mp3");
							audio.play();}

function check(taken){
				if(pattern[taken]===userpat[taken]){
								console.log("success");
								
								if(userpat.length===pattern.length){
												setTimeout(function(){
																bty();
												},1000);
								}
								}
								else{
												console.log("wrong");
												playsound("wrong");
												$("body").addClass("game-over");
												setTimeout(function(){
																$("body").removeClass("game-over");
												},200);
												
												$("h1").text("Game_over press satrt key to restart");
												startover();
								}
				}



function startover(){
				level=0;
				pattern=[];
				started=false;
}
