// 1- function to display what the user press
// on the keyboard from characters included in the calc
const realTimeTyping = (e) => {
    if (e.key == '0' || e.key == '1'
    || e.key == '2' || e.key == '3'
    || e.key == '4' || e.key == '5'
    || e.key == '6' || e.key == '7'
    || e.key == '8' || e.key == '9'
    || e.key == '+' || e.key == '-'
    || e.key == '*' || e.key == '/'
    ){
        const result = document.getElementById('result')
        result.value += e.key
    }
}

// 2- function to display what is inside 
// a button when the user press it
const printVal = (val) => {
    const result = document.getElementById('result')
    result.value += val
}

// 3- function that will evaluate any of
// our four operations
const solve = () => {
    try {
        const inputVal = document.getElementById('result').value
        const answer = math.evaluate(inputVal)
        const result = document.getElementById('result')
        result.value = answer
    } catch {
        // if the user entered any letters inside the arithimatic operation
        alert('Please enter a meaningful mathematical operation')
    }
}

// 4- function that will display the result on the screen
// if the user press Enter or '='
const displayResult = (e) => {
    if(e.key == 'Enter' || e.key == '=') {
        // prevent the default behavior
        // which is displaying the value inside the button on the screen
        e.preventDefault()
        solve()
    }
}

// 5- function that will clear the input field
const clr = () => {
    document.getElementById('result').value = ''
}

// 6- clear if the user press 'c' on the keyboard
document.addEventListener('keypress',(e) => {
    if(e.key == 'c' || e.key == 'C'){
        clr()
    }
})

