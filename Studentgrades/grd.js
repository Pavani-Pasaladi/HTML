console.log('.............');

var percent;

function myfunction(){

    percent = parseInt(document.getElementById('cent').value);

    if (percent > 100) {
        console.log('Please enter correct percentage....Percentage wont be greater than 100');
        document.getElementById('grade').innerHTML='Please enter correct percentage....Percentage wont be greater than 100';
        document.getElementById('grade').style.color = 'white';
    }
    else if (percent >= 80 && percent <= 100) {
        console.log('Excellent Performance');
        document.getElementById('grade').innerHTML='Excellent Performance';
        document.getElementById('grade').style.color = 'green';
    }
    else if(percent < 80 && percent >=60){
        console.log('Average Performance');
        document.getElementById('grade').innerHTML='Average Performance';
        document.getElementById('grade').style.color = 'blue';
    }
    else if (percent <60 && percent >= 40) {
        console.log('Below Average Performance');
        document.getElementById('grade').innerHTML='Below Average Performance';
        document.getElementById('grade').style.color = 'darkblue';
    }
    else{
        console.log('Failed');
        document.getElementById('grade').innerHTML='Failed';
        document.getElementById('grade').style.color = 'red';
    }
    return false;
}
