function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now = +new Date();
    birthday = +new Date(birthday);
    let diff = now - birthday;
    let age = diff / (365.25 * 24 * 60 * 60 * 1000);

    if (age >= 18) {
        console.log('Совершеннолетний');
        return age;
    } else {
        console.log('Несовершеннолетний');
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    let sound = animal.sound;
    if (animal === undefined) {
        null;
    } else {
        console.log(sound);
    }
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        marks[i] = Number(marks[i]);
        sum += marks[i];
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}