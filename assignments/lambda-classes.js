/*
* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

```js
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
```

#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/
const PASSING_GRADE = 70 / 100;

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }

  gradeStudent(student) {
    const diff = Math.floor((Math.random() * 100) - 50);
    student.grade = Math.min(Math.max((student.grade + diff), 0), 100);
    console.log(`${this.name} has changed ${student.name}'s grade by ${diff}.`);
    student.getGrade();
    Math.min
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = Math.min(Math.max(attributes.grade, 0), 100);
  }

  listSubjects() {
    console.log(this.favSubjects.join());
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }

  getGrade() {
    console.log(`${this.name}'s grade is ${this.grade}`);
  }

  readyToGraduate() {
    return ((this.grade / 100) > PASSING_GRADE);
  }

  graduate() {
    if (this.readyToGraduate()) {
      console.log(`Congrats ${this.name}! With a grade of ${this.grade} you are ready to graduate!`);
    } else {
      console.log(`Get back to work ${this.name}.`)
    }
  }
}

class ProjectManagers extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(slackChannel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }
  
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

const danlevy = new Instructor({
  name: 'Dan',
  age: 40,
  location: 'Denver',
  gender: 'M',
  specialty: 'webdev',
  favLanguage: 'Javascript',
  catchPhrase: 'I like my cat'
})

const goofus = new Student({
  name: 'Gerald',
  age: 23,
  location: 'Seattle',
  gender: 'M',
  previousBackground: 'NEET',
  className: 'DS4',
  grade: 50,
  favSubjects: [
    'web development',
    'graphic design',
    'games'
  ]
})

const gallant = new ProjectManagers({
  name: 'Katie',
  age: 27,
  location: 'Chicage',
  gender: 'F',
  specialty: 'API and data',
  favLanguage: 'Ruby',
  catchPhrase: 'RTFM',
  gradClassName: 'WEB17',
  favInstructor: danlevy
})

goofus.speak();
gallant.speak();
goofus.getGrade();
while (!goofus.readyToGraduate()) {
  danlevy.gradeStudent(goofus);
  goofus.graduate();
}