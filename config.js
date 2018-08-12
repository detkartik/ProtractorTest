exports.config = {
		
		seleniumAddress: 'http://localhost:4444/wd/hub',
		
  specs:['Registrationpage.js'],
 
  /*onPrepare : function onPrepare()
 {
	  //retry.onPrepare();
	browser.driver.manage().window().maximize(); 
	 jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      ); 
	}, */
  suite : 
	  {
	  
	    smoke : ['Loginpage.js','Registrationpage.js'],
	    Regression : 'Registrationpage.js'
	  },
};