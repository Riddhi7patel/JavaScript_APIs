console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const searchInput = document.getElementById("searchWord");
const feedbackEle = document.querySelector("p");
const searchBtn = document.getElementById("submitSearch");
const img = document.querySelector("img");

searchBtn.addEventListener("click", () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=oFV08QkCTABmY4ClUrQgwswjjx0YROhM&s=" +
      searchInput.value,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((res) => {
      feedbackEle.textContent = "";
      img.src = res.data.images.original.url;
      searchInput.value = "";
    })
    .catch((err) => {
      console.error(err);
      feedbackEle.textContent = err.message;
    });
});

