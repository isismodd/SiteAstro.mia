var myQuestions = [
	{
		question: "Quem foi o primeiro homem a pisar na lua?",
		answers: {
			a: ' Buzz Aldrin ',
			b: ' Michael Collins ',
			c: ' Neil Armstrong '
		},
		correctAnswer: 'c'
	},
	{
		question: "Em que ano o primeiro homem pisou na lua?",
		answers: {
			a: ' 2000 ',
			b: ' 1899 ',
			c: ' 1989 ',
			d: ' 1969 '
		},
		correctAnswer: 'd'
	},
	{
		question: "Qual foi a primeira mulher negra a ir ao espaço?",
		answers: {
			a: ' Mae Jemison ',
			b: ' Mary Jackson ',
			c: ' Marie Curie ',
			d: ' Dorothy Vaughan '
		},
		correctAnswer: 'a'
	},
	{
		question: "Quem foi o segundo homem a pisar na lua?",
		answers: {
			a: ' Buzz Aldrin ',
			b: ' Michael Collins ',
			c: ' Neil Armstrong ',
			d: ' Alan Shepard '
		},
		correctAnswer: 'a'
	},
	{
		question: "Quem foi doroty Vaughan? ",
		answers: {
			a: ' Uma astronauta ',
			b: ' Uma cientista ',
			c: ' Uma chefe de departamento na nasa '
		},
		correctAnswer: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'green';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
