describe("Test the Registration page",function(){
var obj = require("./POM.js");
var data = require("./data.js");
	//var Excel = require('exceljs');
//var using = require("./jasmine-data-provider")
//Step 1 : Load the application 
beforeEach(function(){
	obj.registerURL();
	});
it("Test Case 5 : Verify if User is able to create an account",function(){
		
		
		//Step 2 : Check the display of page 
	  	obj.Title.getText().then(function(text){
			console.log(text);
		})
    // Step 3 : Enter valid inputs in form fields
		obj.firstname.sendKeys(data.Datadriven.FirstData.firstname1);
	    obj.lastname.sendKeys(data.Datadriven.FirstData.lastname1);
	    obj.gender.click();
	    obj.client.sendKeys(data.Datadriven.FirstData.clientid1); // This id is not correct 
	    obj.phone.sendKeys(data.Datadriven.FirstData.phone1);	
	    obj.email.sendKeys(data.Datadriven.FirstData.email1);
	    obj.register.click().then(function()
	    		{
	    	obj.getError.getText().then(function(text)
	    	{
	    		console.log(text);
	    	}	
	    	)
	    		})
	    	
	
it("Test Case 3:  Verify the system response when user clicks on register button without filling any data in input fields",function(){
	    	// Step 2 : Clear all the input fields 
	    	obj.firstname.clear();
	    	obj.lastname.clear();
	    	obj.gender.clear();
	    	obj.client.clear();
	    	obj.phone.clear();
	    	obj.email.clear();
	    	//Step 3 : Click on register button 
	    	obj.register.click().then(function()
		    		{
		    	obj.getError.getText().then(function(text)
		    	{
		    		console.log(text);
		    	})
		    })
	    })
	})       

it("Test Case 4 : Verify the system response when user enters special character or infinite number of characters in First name & Last name input field and provide remaining information correctly ",function(){
    	// Step 2 : Clear all the input fields 
	obj.firstname.sendKeys(data.Datadriven.SecondData.firstname2);
    obj.lastname.sendKeys(data.Datadriven.SecondData.lastname2);
    obj.gender.click();
    obj.client.sendKeys(data.Datadriven.SecondData.clinetid2); // This id is not correct 
    obj.phone.sendKeys(data.Datadriven.SecondData.phone2);	
    obj.email.sendKeys(data.Datadriven.SecondData.email2);

    //Step 3 : Click on register button 
    	obj.register.click().then(function()
	    		{
	    	obj.getError.getText().then(function(text)
	    	{
	    		console.log(text);
	    	})
	    })
})

 it("Test Case 6 :Verify the system response when user provides correct information but enters email id with invalid formate into the Email input field  ",function(){
    	// Step 2 : Enter all the data in input fields 
	obj.firstname.sendKeys(data.Datadriven.ThirdData.firstname3);
    obj.lastname.sendKeys(data.Datadrive.ThirdData.lastname3);
    obj.gender.click();
    obj.client.sendKeys(data.Datadrive.ThirdData.clientid3); // This id is not correct 
    obj.phone.sendKeys(data.Datadrive.ThirdData.phone3);	
    //Step 3 : Enter the Email id field with partial filled data  
    obj.email.sendKeys(data.Datadrive.ThirdData.email3);
    
    /*.then(function()
    		{
    	obj.emailvalidator.getText().then(function(text)
    	{
    		console.log(text);
    	})
    		}) */ 
    //Step 4 : Click on register button 
    	obj.register.click().then(function()
	    		{
	    	obj.getError.getText().then(function(text)
	    	{
	    		console.log(text);
	    	})
	    }) 
}) 	    
	    
it("Test Case 8 :Verify the system response when user enters more or less than 10 digits ( or required) into the phone number field",function(){
	// Step 2 : Enter all the data in input fields 
obj.firstname.sendKeys(data.Datadriven.FourthData.firstname4);
obj.lastname.sendKeys(data.Datadriven.FourthData.lastname4);
obj.gender.click();
obj.client.sendKeys(data.Datadriven.FourthData.clientid4); // This id is not correct 
obj.phone.sendKeys(data.Datadriven.FourthData.phone4);	
//Step 3 : Enter the Email id field with partial filled data  
obj.email.sendKeys(data.Datadriven.FourthData.email4)	
//Step 4 : Click on register button 
	obj.register.click().then(function()
    		{
    	obj.getError.getText().then(function(text)
    	{
    		console.log(text);
    	})
    })
}) 

it("Test Case 9 :Verify the system response when user tries to enter characters or alphanumeric values in phone number field",function(){
	// Step 2 : Enter all the data in input fields 
obj.firstname.sendKeys(data.Datadriven.FifthData.firstname5);
obj.lastname.sendKeys(data.Datadriven.FifthData.lastname5);
obj.gender.click();
obj.client.sendKeys(data.Datadriven.FifthData.clientid5); // This id is not correct 
obj.phone.sendKeys(data.Datadriven.FifthData.phone5);
 obj.email.sendKeys(data.Datadriven.FifthData.email5);
//Step 3 : Click on register button 
	obj.register.click().then(function()
    		{
    	obj.getError.getText().then(function(text)
    	{
    		console.log(text);
    	})
     })
  })

 it("Test Case 10 :Verify the display of entered data into the input field when user changes the language by selecting different language from the drop down ",function(){
	// Step 2 : Enter all the data in input fields 

obj.firstname.sendKeys(data.Datadriven.SixthData.firstname6);
obj.lastname.sendKeys(data.Datadriven.SixthData.lastname6);
obj.gender.click();
obj.client.sendKeys(data.Datadriven.SixthData.clientid6); // This id is not correct 
obj.phone.sendKeys(data.Datadriven.SixthData.phone6);	
obj.email.sendKeys(data.Datadriven.SixthData.email6);
//Step 4 : Click on change Language 

obj.langdefault.click().then(function()
		{
	  obj.langdropdown.click().then(function(text){
		  
		  console.log(text);
	  })
		})
}) 
 
it("Test Case 13 :Verify the system response when user clicks on the Login link displayed in registration page",function(){
	 
// Step 2 : Click on the Login link displayed in the Registration page
	obj.Loginlink.click();

		})




})


	    
				 				

	
		
		
	






	
	
	 