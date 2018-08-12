describe('Protractor baby steps', function()
{
	
it('NonAngular website alerts',function()
{
  //Write your code to open the browser  
	browser.waitForAngularEnabled(false);
	 browser.get('https://qaclickacademy.github.io/protocommerce/');
	
 element(by.name("name")).sendKeys("Kartik");
 element(by.name("email")).sendKeys("kartikgautam14@gmail.com");
 element(by.css("input[type='password']")).sendKeys("ABCD1234");
 element(by.css("input[class='form-check-input']")).click();
 element(by.cssContainingText("select[class='form-control'] option","Female")).click();
 element.all(by.name("inlineRadioOptions")).get(0);
 element(by.buttonText("Submit")).click().then(function()
		 {
	 
	 //class="alert alert-success alert-dismissible"
	 element(by.css("div[class*='success']")).getText().then(function(text){
		 
		 console.log(text);
		 
	 })  
	 browser.sleep(1000);
	    });
 element(by.name("name")).clear();
 element(by.name("name")).sendKeys("M").then(function(){
	 element(by.css("div[class*='danger']")).getText().then(function(text){
		 
		 console.log(text);
	})
	 
 });
  //class="alert alert-danger"
 element(by.name("name")).clear();
 element(by.name("name")).sendKeys(" ").then(function(){
	 element(by.css("div[class*='danger']")).getText().then(function(text){
		 
		 console.log(text);
	})
	 
 });	
	
})


})		
