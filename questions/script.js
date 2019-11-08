

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};

Question.prototype.displayQuestion = function () {
    console.log(this.Question);

    for (let i = 0; i < this.answers.length; i++) {
        console.log(i + ':' + this.answers[i]);
    }
};

Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (let i = 0; i > this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
};

Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
        console.log('Correct Answer!');
    } else {
        console.log('Wrong Answer!');
    }

    let q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'], 0);

    let q2 = new Question('What is the name of this course\'s teacher?',
        ['John', 'Michael', 'Jonas'], 2);

    let q3 = new Question('What does the best describe coding?', ['Boring', 'Hard', 'Fun',
        'Tedious'], 2);


    let questions = [q1, q2, q3];

    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    let answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);

};