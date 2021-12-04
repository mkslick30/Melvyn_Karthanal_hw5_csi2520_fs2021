function correct {
    counter += 1;
}
function enterScore {
    counter = 0
    let q1 = document.querySelector('#q1').value;
    if (q1 === "b"){
        counter.correct();
    }

    let q2 = document.querySelector('#q2').value;
    if (q2 === "c"){
        counter.correct();
    }

    let q3 = document.querySelector('#q3').value;
    if (q3 === "d"){
        counter.correct();
    }

    let q4 = document.querySelector('#q4').value;
    if (q4 === "d"){
        counter.correct();
    }

    let q5 = document.querySelector('#q5').value;
    if (q5 === "a"){
        counter.correct();
    }

    document.querySelector('#score').innerHTML = counter

}
var counter = 0;

let submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', enterScore);
