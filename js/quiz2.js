var myQuestions = [
	{
		question: "Qual o tipo de estrela é o sol?",
		answers: {
			a: ' Estrela azul ',
			b: ' Estrela anã amarela ',
			c: ' Estrela anã vermelha '
		},
		correctAnswer: 'b'
	},
	{
		question: "Quando plutão foi classificado como planeta anão?",
		answers: {
			a: ' 2006 ',
			b: ' 1999 ',
			c: ' 2004 ',
			d: ' 2000 '
		},
		correctAnswer: 'a'
	},
	{
		question: "Do que principalmente depende o tempo de vida das estrelas?",
		answers: {
			a: ' Seu brilho ',
			b: ' Sua temperatura ',
			c: ' Sua luminosidade ',
			d: ' Sua massa '
		},
		correctAnswer: 'd'
	},
	{
		question: "Qual tipo mais comum de estrelas?",
		answers: {
			a: ' Anã vermelha ',
			b: ' Gigante vermelha ',
			c: ' Anã amarela ',
			d: ' Anã branca '
		},
		correctAnswer: 'a'
	},
	{
		question: "Qual tipo de estrela é considerada muito 'nova' ",
		answers: {
			a: ' Anã branca ',
			b: ' Anã vermelha ',
			c: ' Estrelas azuis ',
			d: ' Anã amarela '
		},
		correctAnswer: 'c'
	},
	{
		question: "De restos de que são formados os buracos negros",
		answers: {
			a: ' Estrelas anãs ',
			b: ' Estrelas massivas ',
			c: ' Planetas ',
			d: ' Galáxias '
		},
		correctAnswer: 'b'
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
