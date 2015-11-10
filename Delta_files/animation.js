var w=$(window).width(), 
	h=$(window).height()+50;
	
var animation_three_finish=0, enter_click_event=0;
var clearInt1,clearInt2;
(function($){
	var animation=function(){
		var sc_r=w/22.5, // small circle radius 
			posX, // position of x
			posY, // position of y
			itr=0; // iteration variable (for div movement at the same time)
					// itr = something like multiple movement to exploit single threaded javascript proxcess


		var that={
				init:function(){
					that.start();
					//handler.execute();
				},
				// assigns the position of div(elem) to a position
				position:function(elem,top,left,width,height,opacity){
					$(elem).css({
						'top':top,
						'left':left,
						'width':width,
						'height':height,
						'opacity':opacity
					});
				},
				// moves the div to specific x,y 
				// if many divs must be moved at the same time it uses itr 
				move:function(elem,x,y,itr){
					if(itr>1){
						itr--;
						that.move(elem,x,y,itr);
					}
					$(elem).animate({"left":x,"top":y },500);
					if(itr===0){
						return false;
					}
				},
				start:function(){
					var handler={
						animation1:function(){	
							setTimeout(function(){
								that.position('#list_portals',h/2,w/2,w/15,w/15,1);
					 			that.move('#list_portals',w/2-sc_r,h/4-sc_r,1);
							},200);
						},
						animation2:function(){
							setTimeout(function(){
								that.position('#list_contact',h/4-sc_r,w/2-sc_r,w/15,w/15,1);
								that.move('#list_contact',4.9*w/8-sc_r,5*h/8-sc_r,1);

							},400);
						},
						animation3:function(){
							setTimeout(function(){
								that.position('#list_projects',5*h/8-sc_r/2,5*w/8-sc_r/2,w/15,w/15,1);
								that.move('#list_projects',3.2*w/8-sc_r,5*h/8-sc_r,1);
								that.position('#list_timeline',5*h/8-sc_r/2,5*w/8-sc_r/2,w/15,w/15,0);
								animation_three_finish=1;
							},600);
						},
						animation4:function(){
							setTimeout(function(){
								that.position('#mainlist',h/2,1.5*w/15,w/15,w/15,0);

					 			that.position('#list_induction',h/2,w/2,w/15,w/15,1);
								that.position('#list_wiki',h/4-sc_r,w/2-sc_r,w/15,w/15,1);
								that.position('#list_timeline',5*h/8-sc_r/2,5*w/8-sc_r/2,w/15,w/15,1);

								that.move('#list_contact',0.2*w/15,h/2+w/12-w/30,2);
								that.move('#list_portals',0.2*w/15,h/2-w/12-w/30,3);
								that.move('#list_projects',0.2*w/15,h/2-w/30,4);
								that.move('#list_induction',w-1.2*w/15,h/2-w/30,5);
								that.move('#list_wiki',w-1.2*w/15,h/2-w/12-w/30,6);
								that.move('#list_timeline',w-1.2*w/15,h/2+w/12-w/30,7);
								clearInterval(clearInt1);
								clearInterval(clearInt2);
							},4);
							setTimeout(function(){
								that.position('.background',h/5,w/3,2*h/3,w/3,0.5);
							},200);
						},
						click:function(){
						clearInt1 =  setInterval(function(){
						if(animation_three_finish == 1 && enter_click_event == 1 ){						
							handler.animation4();
							document.getElementById("flappy").style.display="";
							document.getElementById("header").style.display="";
							document.getElementById("scroll-down").style.display="";
							}
							},100);
						},

					}
					$('#mainlist').bind('click',function(){
						enter_click_event=1;
						handler.click();
					});
					handler.animation1();
					handler.animation2();
					handler.animation3();
					clearInt2 = setInterval(function(){
						if(page[sectionIndex]!="home" && animation_three_finish == 1)
						{
							handler.animation4();
							document.getElementById("flappy").style.display="";
							document.getElementById("header").style.display="";
							document.getElementById("mainlist").innerHTML="";
						}
					},100);
				},
				
				execute:function(){
				
				}
		}
		that.init();
	}	
		$('#mainlist').ready(function(){
			animation();
		});
})(this.jQuery);
