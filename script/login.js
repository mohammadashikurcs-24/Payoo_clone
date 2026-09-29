const btnLogin = document.getElementById('btn-login');
const inputNumber = document.getElementById('input-number');
const inputPin = document.getElementById('input-pin');



btnLogin.addEventListener('click', function(){
   //get the mobile number
   const contactNumber = inputNumber.value;
   console.log('user mobile number',contactNumber)

   //get the pin
   const pinNumber = inputPin.value;
   console.log( 'user pin',pinNumber)

   //match the number and pin 
   if(contactNumber.length == 11 && pinNumber.length == 4 ) {
    console.log('number and pin matched')

    //if number & pin === true then alert successfull
    // alert('Log in Successfull');
    window.location.assign('/homepage.html');

   }
   else{
    console.log('wrong input')
    alert('Wrong Mobile number or Pin number');
    inputPin.value = '';
    return;

   }
       inputNumber.value = '';
       inputPin.value = '';

   
})