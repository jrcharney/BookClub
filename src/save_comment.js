const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", function() {
  const discussionName = document.querySelector("#discussionName").value;
  const comment = document.querySelector("#comment").value;
  addDiscussion(discussionName, comment);
});

function addDiscussion(discussionName, comment) {
  const discussionsContainer = document.querySelector(".discussions-container");
  const discussionBox = document.createElement("div");
  discussionBox.classList.add("discussion-box");

  discussionBox.innerHTML = `
    <div class="discussion-name">${discussionName}</div>
    <div class="discussion-comment">${comment}</div>
  `;

  discussionsContainer.appendChild(discussionBox);
}