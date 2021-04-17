console.log('Execution starts..........');   
var num;


function odd(){
   num = parseInt(document.getElementById('abc').value);
   if ( num%2 == 0) {
     // alert('i am in if block');
      
      console.log('given number is even');
      document.getElementById('output').innerHTML = 'Even Number';
  }
  else{
     //alert('I am in else block');
     console.log('given number is odd');
     document.getElementById('output').innerHTML = 'Odd Number';
  }
  return false;
}


console.log('Execution ends..........');
    