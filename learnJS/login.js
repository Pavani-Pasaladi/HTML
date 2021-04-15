console.log("Execution Starts");

var emailId = '' ;
var password ='' ;

function login() {
    alert('i am in login function');

    emailId = document.getElementById('email').value;
    password = document.getElementById('pswd').value;

    if ( emailId == 'abcd@gmail.com' && password == '12345') {

        console.log('Successfully logedin');

        document.getElementById('result').innerHTML = 'Successfully logedin';
        document.getElementById('result').style.color('green');

        
        
    }
    else{

        console.log('Invalid emailId/password');
        document.getElementById('result').innerHTML = 'Invalid emailId/password';
        document.getElementById('result').style.color('red');
        
    }
    

    return false;
}

console.log("Execution Stops");