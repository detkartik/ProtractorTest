describe("Verfiy the Complete Login page Functionality",function(){
	var obj = require("./POM.js");
	var data = require("./data.js");
		//var Excel = require('exceljs');
	//var using = require("./jasmine-data-provider")
	//Step 1 : Load the application 
	beforeEach(function(){
		obj.LoginURL();
		});
	it("Test Case 1 : Verify the display of Login page when user hits the url  ",function(){
			
				//Step 2 : Check the display of page 
		  	obj.Title2.getText().then(function(text){
				console.log(text);
			})
	})
	
	it("Test Case 3 : Verify the system response when user leaves the Input field blank and try to click on Login button",function(){
			
				//Step 2 : Leave all the input fields blank
		        
		       //Step 3 : Click on Login link 
		       obj.login.click().then(function(){
		    	   obj.getUserError.getText().then(function(text1){
		    		   
		    		   console.log(text1);
		    	   })
		    	   obj.getPasswordError.getText().then(function(text2){
		    		   
		    		   console.log(text2);
		    	   })
		    	   
		       })
		  	
			})
	
			it("Test Case 4 & 6 : Verify the system response when user enters invalid username and password into the input field",function(){
				
				//Step 2 : Enter User name & Password into the input field  
		        obj.Username.sendKeys(data.Datadriven2.FirstData.Username);
		        obj.Password.sendKeys(data.Datadriven2.FirstData.Username);
		       //Step 3 : Click on Login link 
		       obj.login.click().then(function(){
		    	   obj.getError.getText().then(function(text){
		    	 	    console.log(text);  
		    	     	   
		    	   }) 
		       })
		  	
			})
it("Test Case 5 : Verify the system response when user enters incorrect username and password into the input field",function(){
				
				//Step 2 : Enter User name & Password into the input field  
		        obj.Username.sendKeys(data.Datadriven2.SecondData.Username);
		        obj.Password.sendKeys(data.Datadriven2.ThirdData.Username);
		       //Step 3 : Click on Login link 
		       obj.login.click().then(function(){
		    	   obj.getError.getText().then(function(text){
		    	 	    console.log(text);  
		    	     	   
		    	   }) 
		       })
		  	
			})
it("Test Case 9 :Verify the display of form field when user alters the selected language from the language drop down", function(){
	 obj.Username.sendKeys(data.Datadriven2.FirstData.Username);
     obj.Password.sendKeys(data.Datadriven2.FirstData.Username);
     obj.langdefault.click().then(function()
			{
		  obj.langdropdown.click().then(function(text){
			  
			  console.log(text);
		  })
			})
})

			
it("Test Case 11 :Verify the system response when user clicks on the forgot password page " ,function(){
	
	  obj.forgotpassword.click();		
})

	
});