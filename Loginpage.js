describe('Protractor Element Demo', function()
{
	//var obj = require("./jsobjectdemo.js");
	//var d = require("./data.js");
	//var using = require('jasmin-data-provider');
	//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
	//var Excel = require('exceljs');
	/*beforeEach(function(){
		obj.getURL();
	});
	//data stores actual data 
	//description stores sub object name
	//For eavery iteration one data set is picked 
	using(d.Datadriven, function(data,description){
		
*/	
it('Validating the Happy Path',function()
{
	 browser.get('https://test.wwstay.com/accounts/#/login');
		element(by.cssContainingText("b[class='ng-binding']","Welcome to WWStay")).getText().then(function(text){
			console.log(text);
		})
    
	 element(by.name("username")).sendKeys("kgautam@gmail.com");
	 element(by.name("password")).sendKeys("India@@@123");
     element(by.buttonText("SIGN IN")).click();
});
    	 
    	 
		 //class="alert alert-success alert-dismissible"
		
});

it('Validating the negative usecase 1',function()
{
	element(by.name("username")).clear();
	 element(by.name("password")).sendKeys("India@@@123");
	 element(by.cssContainingText("ng-message[class*='ng-binding']","Username is required")).getText().then(function(text){
	    	console.log(text);
	      }); 
   	
})
			 
it('Validating the negative usecase 2',function()
{
	element(by.name("username")).sendKeys("kgautam@gmail.com");
	 element(by.name("password")).clear();
    element(by.cssContainingText("ng-message[class*='ng-binding']","Password is required")).getText().then(function(text){
    	console.log(text);
    });    
    
it('Navigation to the Forgot password page',function()
			 {
			 	 browser.get('https://test.wwstay.com/accounts/#/registration/user');
			 		element(by.cssContainingText("b[class='ng-binding']","User Registration")).getText().then(function(text)
			 				{
			 			console.log(text);
    })
       
       element(by.css("a[href='#/forgotpassword']")).getText().then(function(text){
       	
       	console.log(text);
       	})
       	element(by.cssContainingText("a[class*='ng-binding']","Forgot Password?")).click();
			 });		
    
    
}) 
   	







