let run_timer;

function timer() {
    // stops if any previous Timer is running so that User can start a New timer 
    clearInterval(run_timer)
    document.getElementById('info').innerHTML = ''
    document.body.style.backgroundColor = 'rgb(98, 154, 82)'

    // starting a new timer 
    let user_input = document.getElementById('timeCount').value;
    if (isNaN(user_input)) {
        document.getElementById('current-time').innerHTML = 0
        document.getElementById('info').innerHTML = ' [ Invalid Input ] '
    }
    else {
        Go(user_input)
    }
}


function Go(user_input){
    user_input = parseInt(user_input)
    run_timer = setInterval(() => {
        if (user_input >= 0) {
            document.getElementById('current-time').innerHTML = user_input--
            // console.log(user_input);
        }
        else {
            document.getElementById('info').innerHTML = 'Timer Completed'
            clearInterval(run_timer)
            document.body.style.backgroundColor = 'violet'
        }
    }, 1000)
}


// if Enter is pressed in keyBoard Then only The ==> timer Function will excute
function myfunc(e){
    if(e.key === 'Enter'){
        timer()
    }
}