angular.module('delta')
.controller('HomeController', ['$scope', HomeController]);
function HomeController($scope) {

	var data = JSON.parse($.ajax({
		url: 'data/projects.json',
		async: false,
		dataType: 'json'
	}).responseText);

	var count=0;
	
	$scope.projects=[];
	
	for(var i=0;i<data.length;i++)
	{
		if(count<=3&&data[i]['add_to_home'])
		{
			$scope.projects[count]=data[i];	
			count++;
		}	
	}
count =0 ;
	scrollApp.controller("scrollController",function($scope){
			   
			   $scope.myExp='1';//stores page number
			   $scope.myClass='my-slide-animation';//initial stores class
			   $scope.noPage=4;//no of pages
			   
			   // arrow event
			   $scope.keydown=function ($event){
				   //alert("keydown:"+$event.keyCode);
				   if(($event.keyCode===38||$event.keyCode===37||$event.keyCode===13)&&$scope.myExp!='1')
				   {
				   	$scope.myClass='my-slide-animation2';  
				   $scope.myExp=(parseInt($scope.myExp)-1).toString();			        
			          }
			       else if($event.keyCode===38&&$scope.myExp=='1')
			       alert("Go opposite direction");   
				   
				   if(($event.keyCode===40||$event.keyCode===39)&&$scope.myExp!='4')
				    {  
					   $scope.myClass='my-slide-animation';	 
					   $scope.myExp=(parseInt($scope.myExp)+1).toString();
					   }
				   else if($event.keyCode===40&&$scope.myExp=='4')
				   alert("Reached End, Go back");    				   
				   }
			
				//css change on click   
			   $scope.cssSet=function(n){
				   if(parseInt($scope.myExp)<n)
				   $scope.myClass='my-slide-animation'; 
				   else if(parseInt($scope.myExp)>n)
				   $scope.myClass='my-slide-animation2';	
				   }
				   
			   //button disabling
			   $scope.disable=function(n){
				   if(parseInt($scope.myExp)==n)
				   return true;
				   else 
				   return false;
				   }
				   
   
				//on wheel scroll
		// sol on http://www.jeffryhouser.com/index.cfm/2014/6/2/How-do-I-run-code-when-a-variable-changes-with-AngularJS				
			  var scroll=document.getElementById("key-action");
			  var count=0;
			  var setTime;
			  if (scroll.addEventListener) {
	         // IE9, Chrome, Safari, Opera
	         scroll.addEventListener("mousewheel",MouseWheelHandler, false);
	         // Firefox
	         scroll.addEventListener("DOMMouseScroll",MouseWheelHandler, false);
             }
             // IE 6/7/8
             else scroll.attachEvent("onmousewheel",MouseWheelHandler);	
         
             function MouseWheelHandler(e){
				 
				 	// cross-browser wheel delta
	                var e = window.event || e; // old IE support
	                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	                
	                
	                if(count==0)
					setTimeout(function(){count=0;},1000);
	                
	                if(delta==-1)
	                {	 
                       count=count-1;                       
						}
					else count++;	
					
					
					if(count==-1||count==1){
					 if(count<0&&$scope.myExp!='4')
				   {   
					   console.log(count);
					 $scope.$apply(function(){					 
					 $scope.myClass='my-slide-animation';	 
					 $scope.myExp=(parseInt($scope.myExp)+1).toString();
				      });
					 }
				 else if(count>0&&$scope.myExp!='1'){
					   $scope.$apply(function(){					 
					 $scope.myClass='my-slide-animation2';	 
					 $scope.myExp=(parseInt($scope.myExp)-1).toString();
				      });
					    
					 }					  	  							
						}																				 
				 }
}