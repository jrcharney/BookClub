var questions = {
	"1" : {
		id: 1,
		title: 'The Lord of the Rings',
		text: 'What role does friendship play in the story, and how does it affect the characters and their motivations?',
		votes: 1,
		responses: [
			{
				name: 'snlfan2001',
				comment: 'dang, i didnt read the book so idk lol'
			},
			{
				name: 'yoyo232',
				comment: 'Friendship plays a significant role in "The Lord of the Rings." The characters relationships with each other drive much of the plot and provide motivation for their actions. The bonds of friendship between Frodo, Sam, Merry, and Pippin, as well as Aragorn, Legolas, and Gimli, are central to the story and provide a sense of camaraderie and support in the face of danger. These friendships also serve as a symbol of hope and determination in the face of overwhelming odds.'
			}
		],
		resolved: false,
		favorite:false
	},
	"2" : {
		id: 2,
		title: 'Rich Dad, Poor Dad',
		text: 'What is the main message or lesson that the author Robert Kiyosaki tries to convey through the book?',
		votes: 3,
		responses: [
			{
				name: 'Michael23',
				comment: 'The main message or lesson that Robert Kiyosaki tries to convey in "Rich Dad Poor Dad" is that traditional education and financial advice often do not prepare people for real-world financial success. Kiyosaki advocates for developing financial literacy and entrepreneurship skills in order to create wealth and achieve financial independence. He stresses the importance of thinking differently about money and taking control of ones future.'
			},
			{
				name: 'Scottie32',
				comment: 'Tha main message is that rich dad and poor dad have the same issues. One has a higher quality issue than the other.'
			}
		],
		resolved: false,
		favorite:true
	},
	"3" : {
		id: 3,
		title: 'The Girl with the Dragon Tattoo',
		text: 'How does the author, Stieg Larsson, explore themes such as power, corruption, and justice in the book?',
		votes: 2,
		responses: [
			{
				name: 'xxOvErWaTcH_Kingxx',
				comment: 'In "The Girl with the Dragon Tattoo", Larsson explores power, corruption, and justice through the experiences of the characters. He highlights the struggle for justice and the fight against those who abuse their power, as seen through Lisbeth.'
			},
			{
				name: 'codmaster19828',
				comment: 'wow, you were right on point overwatch, this books themes were strong and affected me heavilty frl tho'
			}
		],
		resolved: false,
		favorite:false
	}
};

var rightContainer = document.getElementById("right");
var description = document.getElementById("description");
var welcome = document.getElementById("welcome");
var questionItems = document.querySelectorAll(".que-item");
var totalQuestions = 3;

var queTitle = document.getElementById("que-title");
var queText = document.getElementById("que-text");
var responseView = document.getElementById("responses");
var questionView = document.getElementById("questions");
var showWelcomeBtn = document.getElementById("show-welcome");
var addQuestionBtn = document.getElementById("add-que");
var addResponseBtn = document.getElementById("add-res");
var resolveBtn = document.getElementById("resolve");
var search = document.getElementById("search");
var upvote = document.getElementById("upvote");
var downvote = document.getElementById("downvote");
var favorite = document.getElementById("favorite");
var showFavBtn = document.getElementById("show-favorites");

var activeQuestion;

function setupQuestions(){
	questionItems = document.querySelectorAll(".que-item");
	for(let i = 0; i < questionItems.length; i++){
		questionItems[i].addEventListener("click", function(e){
			activeQuestion = questions[this.id];
			console.log(activeQuestion);
			showDescription();
		});
	}
}

function loadQuestions(){

	let data = [];
	questionView.innerText = "";
	for(let queNo in questions){
		let question = questions[queNo];
		data.push(question);
		// questionView.innerHTML += `<div class="que-item" id="${queNo}"><h2 class="que-title">${question.title}</h2><p class="que-text">${question.text}</p></div>`;
	}
	data.sort((a, b)=>{
		return b.votes-a.votes;
	});
	data.forEach((que)=>{
		questionView.innerHTML += `<div class="que-item" id="${que.id}"><h2 class="que-title">${que.title}</h2><p class="que-text">${que.text}</p>${(que.favorite)?"<i class='fa fa-heart active fav'></i>":"<i></i>"}</div>`;
	})
	console.log(data);
	setupQuestions();
}

function addQuestion(event){
	event.preventDefault();
	let form = document.getElementById("formAdd");
	let title = form.subject.value;
	let que = form.question.value;
	if(title.length < 1 || que.length < 1) return false;
	totalQuestions++;
	let id = totalQuestions;
	let newQue = {
		id: id,
		title: title,
		text: que,
		votes: 0,
		responses: [],
		resolved: false
	};
	questions[id] = newQue;
	questionView.innerHTML += `<div class="que-item" id="${newQue.id}"><h2 class="que-title">${newQue.title}</h2><p class="que-text">${newQue.text}</p>${(que.favorite)?"<i class='fa fa-heart active fav'></i>":"<i></i>"}</div>`;
	setupQuestions();
}

function loadActiveQuestion(){
	queTitle.innerText = activeQuestion.title;
	queText.innerText = activeQuestion.text;
	document.getElementById("votes").innerText = activeQuestion.votes;
	loadResponses();
	let form = document.getElementById("resForm");
	form.subject.value = "";
	form.question.value = "";
}

function loadResponses(){
	responseView.innerText = "";
	let responses = activeQuestion.responses;
	responses.forEach((res) => {
		responseView.innerHTML += `<div class="response"><h3 class="res-name">${res.name}</h3><p class="res-text">${res.comment}</p></div>`;
	});
}

function addResponse(event){
	event.preventDefault();
	let form = document.getElementById("resForm");
	let name = form.subject.value;
	let comment = form.question.value;
	if(name.length < 1 || comment.length < 1) return false;
	let newRes = {
		name: name,
		comment: comment
	};
	activeQuestion.responses.push(newRes);
	form.subject.value="";
	form.question.value="";
	loadResponses();
	console.log(questions);
}

function resolveQuestion(){
	delete questions[activeQuestion.id];
	activeQuestion = {};
	loadQuestions();
	showWelcome();
}

function searchQuery(){
	let query = search.value.toLowerCase();
	console.log(query);
	let data = [];
	for(let queNo in questions){
		let question = questions[queNo];
		if(((question['title'].toLowerCase()).indexOf(query) != -1) || ((question['text'].toLowerCase()).indexOf(query) != -1)){
			data.push(question);
		}
	}
	console.log("Data = ", data);

	if(data.length == 0){
		questionView.innerText = "";
		questionView.innerHTML = `<div class="que-item"><h2>No match found!</h2></div>`;
	}else{
		// loading questions 
		questionView.innerText = "";
		data.forEach((que) => {
			let title = que.title;
			let text = que.text;
			title = title.replace(new RegExp(query, 'gi'), '<span class="yellow">' + query + '</span>');
			text = text.replace(new RegExp(query, 'gi'), '<span class="yellow">' + query + '</span>');
			questionView.innerHTML += `<div class="que-item" id="${que.id}"><h2 class="que-title">${title}</h2><p class="que-text">${text}</p>${(que.favorite)?"<i class='fa fa-heart active fav'></i>":"<i></i>"}</div>`;
		});
		setupQuestions();	
	}
}

function showDescription(){
	welcome.style.display="none";
	description.style.display="block";
	loadActiveQuestion();
	setFavorite();
}

function showWelcome(){
	description.style.display="none";
	welcome.style.display="block";
	let form = document.getElementById("formAdd");
	form.subject.value = "";
	form.question.value = "";
}

function upVote(){
	activeQuestion.votes = activeQuestion.votes+1;
	document.getElementById("votes").innerText = activeQuestion.votes;
}

function downVote(){
	activeQuestion.votes = activeQuestion.votes-1;
	document.getElementById("votes").innerText = activeQuestion.votes;
}

function setFavorite(){
	if(activeQuestion.favorite)
		favorite.classList.add("active");
	else
		favorite.classList.remove("active");
}

function addFavorite(){
	activeQuestion.favorite = !activeQuestion.favorite;
	if(activeQuestion.favorite)
		favorite.classList.add("active");
	else
		favorite.classList.remove("active");
	loadQuestions();
}

function showFavorite(){
	if(this.innerText == "View All"){
		loadQuestions();
		this.innerText = "Favorites";
		return;
	}
	//else
	this.innerText = "View All";
	let data = [];
	questionView.innerText = "";
	for(let queNo in questions){
		let question = questions[queNo];
		if(question.favorite)
			data.push(question);
		// questionView.innerHTML += `<div class="que-item" id="${queNo}"><h2 class="que-title">${question.title}</h2><p class="que-text">${question.text}</p></div>`;
	}
	data.sort((a, b)=>{
		return b.votes-a.votes;
	});
	data.forEach((que)=>{
		questionView.innerHTML += `<div class="que-item" id="${que.id}"><h2 class="que-title">${que.title}</h2><p class="que-text">${que.text}</p>${(que.favorite)?"<i class='fa fa-heart active fav'></i>":"<i></i>"}</div>`;		
	})
	console.log(data);
	setupQuestions();
}

function init(){
	loadQuestions();
	showWelcomeBtn.addEventListener("click", showWelcome);
	addQuestionBtn.addEventListener("click", addQuestion);
	addResponseBtn.addEventListener("click", addResponse);
	resolveBtn.addEventListener("click", resolveQuestion);
	search.addEventListener("keyup", searchQuery);
	upvote.addEventListener("click", upVote);
	downvote.addEventListener("click", downVote);
	favorite.addEventListener("click", addFavorite);
	showFavBtn.addEventListener("click", showFavorite);
}

init();

// Check if local storage is supported
if (typeof(Storage) !== "undefined") {
  
    // Get comments from local storage if they exist
    let comments = localStorage.getItem("comments");
    if (comments) {
      comments = JSON.parse(comments);
      for (let comment of comments) {
        addCommentToPage(comment);
      }
    } else {
      comments = [];
    }
    
    // Add a new comment to the page and save to local storage
    function addComment(comment) {
      comments.push(comment);
      localStorage.setItem("comments", JSON.stringify(comments));
      addCommentToPage(comment);
    }
    
    // Add a comment to the page
    function addCommentToPage(comment) {
      let commentContainer = document.createElement("div");
      commentContainer.innerHTML = comment;
      document.getElementById("comments").appendChild(commentContainer);
    }
    
  } else {
    console.log("Sorry, local storage is not supported in your browser.");
  }
  