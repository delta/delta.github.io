var webdev = [{name:"nm",num:25,age:26},{name:"mn",num:35,age:36},{name:"mn",num:35,age:36}];
	var appdev = [{name:"mn",num:25,age:26},{name:"mn",num:35,age:36}];
	var sysdev = [{name:"pq",num:25,age:26},{name:"mn",num:35,age:36}];
	var app = angular.module('myapp',[]);
	app.controller('FirstController',function()
	{
		this.products=webdev;
		this.products1=appdev;
		this.products2=sysdev;
	});