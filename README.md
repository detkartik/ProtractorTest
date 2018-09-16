# ProtractorTest
repostoiry : https://github.com/detkartik/ProtractorTest.git
branch : branch 2 

User Guide -
1.Import the project to Eclipse
2.Install node js
3.Install protractor using below command -
  npm install -g protractor 
4.Install/update webdriver-manager - 
webdriver-manager update 
5.To start webdriver -  
webdriver-manager start 

6. Open Run configurations..
7. Create a Testrunner inside Node.js Application Eg. ProtractorTestRunner 
8. Set the Projectname inside Main eg: WWstay-Assignment
9. Navigate to C:\Users\Administrator\AppData\Roaming\npm\node_modules\protractor 
10. Copy Protractor folder and paste in your project 
11. Set the Main file path as ${workspace_loc:/WWStay-Assignment/protractor/built/cli.js} and click on apply 
12. Go to confiugration.js and set the following property -
    SeleniumAddress : 'http://localhost:4444/wd/hub'
   // specs : ['Loginpage.js'] //to run Login page script 
   // specs : ['Registrationpage.js'] //to run Registration page script  

14. There are following folders/files -
    1. Loginpage.js - Contains the test script for Login page related test cases 
    2. Registrationpage.js - Contains the test script for Registration page related test cases
    3. POM.js - page object model contains all the x-paths/css-paths stored in it 
    4. data.js - data provider contains all the test data, you can change it accordingly  
