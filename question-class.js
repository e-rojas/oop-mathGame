class Question {
  constructor() {
    this.number1 = Math.floor(Math.random() * 11);
    this.number2 = Math.floor(Math.random() * 14);
    this.answer = this.number1 + this.number2;
  }
  askQuestion(name) {
    return `${name} what is ${this.number1} + ${this.number2}  `;
    // console.log(`${name} what is ${this.number1} + ${this.number1=2}`);
  }
  correctAnswer(answer) {
    return this.answer == answer;
  }
}
module.exports = Question;
