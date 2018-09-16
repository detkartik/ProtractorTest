
// Page Object Model to Store the Xpath or Css path  
function Register()
{   this.Title =     element(by.cssContainingText("b[class='ng-binding']","User Registration"));
	this.firstname =  element(by.name("firstName"));
	 this.lastname =  element(by.name("lastName"));
	 this.gender =  element(by.cssContainingText("select[class*='form-control'] option","Male"))
	 this.client = element(by.name("client"));
	 this.phone = element(by.name("phone"));	
	 this.email = element(by.name("workEmail"));
	 this.register = element(by.buttonText("REGISTER"));
	 this.registerUrl= function()
	 	{
	 		browser.get("https://test.wwstay.com/accounts/#/registration/user");
	 		
	 	};
	 	
	 	this.emailvalidator = element(by.cssContainingText("ng-message[class*='ng-binding']","Invalid Email ID"));	
	 this.getError = element(by.css("div[class*='danger']"));
     this.langdefault = element(by.cssContainingText("a[class*='ng-binding']","English")); 	 
	 this.langdropdown = element(by.cssContainingText("a[class*='ng-binding']","German"));
     // need to get all xpaths for error messages 
	 
	 
	 this.Loginlink = element(by.cssContainingText("b[class='ng-binding']","Anmeldung"));	 	
};

function Login()
{
 this.Title2 = 	element(by.cssContainingText("b[class='ng-binding']","Welcome to WWStay"));
 this.login =  element(by.buttonText("SIGN IN"))
 this.Username = element(by.name("username"));
 this.Password = element(by.name("password"));
 this.getUserError = element(by.cssContainingText("ng-message[class*='ng-binding ng-scope']","Username is required"));   
 this.getPasswordError = element(by.cssContainingText("ng-message[class*='ng-binding ng-scope']","Password is required")); 
 this.getError = element(by.cssContainingText("div[class*='text-danger']","Unable to login. Please try after sometime."));
 this.LoginURL= function()
 {
	browser.get("https://test.wwstay.com/accounts/#/login");
  };
this.forgotpassword = element(by.cssContainingText("a[class*='link-default']","Forgot Password"));
this.langdefault = element(by.cssContainingText("a[class*='ng-binding']","English")); 	 
this.langdropdown = element(by.cssContainingText("a[class*='ng-binding']","German"));

}

module.exports = new Login();
//module.exports = new Register();