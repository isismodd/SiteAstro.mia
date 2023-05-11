var myQuestions = [
	{
		question: "Qual o maior planeta do sistema solar?",
		answers: {
			a: ' Saturno ',
			b: ' Jupiter ',
			c: ' Terra '
		},
		correctAnswer: 'b'
	},
	{
		question: "Qual dos planetas é gasoso?",
		answers: {
			a: ' Jupiter ',
			b: ' Terra ',
			c: ' Marte ',
			d: ' Mercurio '
		},
		correctAnswer: 'a'
	},
	{
		question: "Qual o nome do movimento que a terra faz em torno de si mesma?",
		answers: {
			a: ' Transação ',
			b: ' Excursão ',
			c: ' Translação ',
			d: ' Rotação '
		},
		correctAnswer: 'd'
	},
	{
		question: "Quanto tempo leva o movimento de translação?",
		answers: {
			a: ' 80 dias ',
			b: ' 3 anos ',
			c: ' 1 ano ',
			d: ' 24 horas '
		},
		correctAnswer: 'c'
	},
	{
		question: "Qual planeta fica mais próximo do sol?",
		answers: {
			a: ' Mercúrio ',
			b: ' Terra ',
			c: ' Vênus ',
			d: ' Saturno '
		},
		correctAnswer: 'a'
	},
	{
		question: "Quantos planetas existem no sistema solar?",
		answers: {
			a: ' 9 ',
			b: ' 8 ',
			c: ' 4 ',
			d: ' 5 '
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
