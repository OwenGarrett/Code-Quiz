const questions = [
    {
        question: "What color is the sky?", 
        answer: ["Blue", "Red", "Green"] ,
        correctAnswer: "Blue" ,

    
    },
    
    {
        question: "What color is the grass?", 
        answer: ["Blue", "Red", "Green"] ,
        correctAnswer: "Green" ,

    },
     
    {
        question: "Who is the coolest in DBZ?", 
        answer: ["Piccolo", "Goku", "Charmander"] ,
        correctAnswer: "Piccolo" ,

    }
]
console.log(questions[1].correctAnswer)


var startButton= document.querySelector(".startButton")
    startButton.addEventListener('click', function(){
       console.log("Hello World"); 
       startButton.style.display = "none";
       
    })