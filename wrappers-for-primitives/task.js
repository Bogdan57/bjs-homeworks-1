function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    //return totalAmount;
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