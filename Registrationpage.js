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
	 browser.get('https://test.wwstay.com/accounts/#/registration/user');
		element(by.cssContainingText("b[class='ng-binding']","User Registration")).getText().then(function(text){
			console.log(text);
		})
    
	 element(by.name("firstName")).sendKeys("Kartik");
	 element(by.name("lastName")).sendKeys("Gautam");
	 //name="client"
	 element(by.cssContainingText("select[class*='form-control'] option","Male")).click();
	 element(by.name("client")).sendKeys("1234567890");
	 //name="phone"
	 element(by.name("phone")).sendKeys("9876543210");	
	 element(by.name("workEmail")).sendKeys("kartikgautam14@gmail.com");
	 element(by.buttonText("REGISTER")).click().then(function()
			 {
		 
		 //class="alert alert-success alert-dismissible"
		 element(by.css("div[class*='danger']")).getText().then(function(text){
			 
			 console.log(text);
		 });
			 });
});
it('Validating the negative usecase 2',function()
{
	 browser.get('https://test.wwstay.com/accounts/#/registration/user');
		element(by.cssContainingText("b[class='ng-binding']","User Registration")).getText().then(function(text){
			console.log(text);
		})
    
	 element(by.name("firstName")).clear();
	 element(by.name("lastName")).sendKeys("Gautam");
	 //name="client"
	 element(by.cssContainingText("select[class*='form-control'] option","Male")).click();
	 element(by.name("client")).sendKeys("1234567890");
	 //name="phone"
	 element(by.name("phone")).sendKeys("9876543210");	
	 element(by.name("workEmail")).sendKeys("kartikgautam14");
	 element(by.buttonText("REGISTER")).click().then(function()
			 {
		
		 //class="alert alert-success alert-dismissible"
	 element(by.css("ng-message[when='pattern']")).getText().then(function(text){
			 
			 console.log(text);
			 })			 
   })	
		
})
			 
			 it('Navigation to the login page',function()
					 {
					 	 browser.get('https://test.wwstay.com/accounts/#/registration/user');
					 		element(by.cssContainingText("b[class='ng-binding']","User Registration")).getText().then(function(text)
					 				{
					 			console.log(text);
	         })
	            
	            element(by.css("a[href='#/login']")).getText().then(function(text){
	            	
	            	console.log(text);
	            	})
	            	element(by.cssContainingText("b[class='ng-binding']","Login")).click();
					 });				
})
	 






