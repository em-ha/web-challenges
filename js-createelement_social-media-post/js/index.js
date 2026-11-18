console.clear();

const body = document.querySelector("body");


const newPost = document.createElement("article");
newPost.classList.add("post");
const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
newPost.append(newParagraph, postFooter);
const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.texContent = "@username";







body.append(newPost);





function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
