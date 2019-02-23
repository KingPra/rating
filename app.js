import data from "./reviews.js";

//prints stars depending on rating
function stars(num) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    i < num
      ? stars.push('<i class="fa fa-star" style="color:#ffe500"></i>')
      : stars.push('<i class="fa fa-star-o"></i>');
  }
  return stars.join(" ");
}

// dynamically generates list of reviews returned from data
const container = document.querySelector(".container");
container.innerHTML = data
  .map(
    review => `
    <ul class="frame">
        <li class="name">${review.name}</li>
        <li class="rating">${stars(review.rating)}</li>
        <li class="comments">${review.review}</li>
    </ul>
    `
  )
  .join(" ");
