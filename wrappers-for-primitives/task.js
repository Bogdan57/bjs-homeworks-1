function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    function checkDataType(item) {
        if ( typeof item === 'number' ) {
            item = item;
        } else if ( typeof item === 'string' ) {
            item = Number(item);
            if ( typeof item === 'string' || isNaN( Number(item) ) ) {
            	console.log(`Параметр содержит неправильное значение ${item}`);
            }
        } else {
            console.log(`Параметр содержит неправильное значение ${item}`);
        }

        return item;
    }
    
    checkDataType(percent);
    checkDataType(contribution);
    checkDataType(amount);
    checkDataType(date); 

    let now = +new Date();
    let dueDate = +new Date(date);
    let months = ( dueDate - now ) / ( 1000 * 60 * 60 * 24 * 30 );
    let payment = amount - contribution;
    let monthlyPc = percent / 100 / 12;
    let payMonthly =  payment * ( monthlyPc + monthlyPc / ( ( (1+monthlyPc)**12) - 1 ) );
    let totalAmount = ( payMonthly * months ).toFixed(2);
    return totalAmount;
}


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
    let greeting;

    if ( typeof name === 'undefined' || name === null || name === "" ) {
        greeting = 'Привет, мир! Меня зовут Аноним.';
    } else {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    }

    return greeting;
}
console.log(getGreeting());