document.getElementById('login-submit').addEventListener
('click',function(){
 //get user email
 const emailField=document.getElementById('user-email');
 const userEmail=emailField.value;
 //get user password
 const passwordField=document.getElementById('user-password');
 const userPassword=passwordField.value;
 console.log(userPassword)

 if(userEmail=='sontan@baap.com'&&userPassword=='secret')
 //redirect to another page
 window.location.href='banking.html'
})