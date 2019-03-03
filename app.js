import data from "./reviews.js";

//html selectors
const container = document.querySelector(".js-review__container");
const button = document.querySelector(".review__button");

button.addEventListener("click", onClick);

// Toggle Google Reviews on/off
function onClick() {
  const show = "Show Reviews";
  const hide = "Hide Reviews";
  if (button.innerHTML === show) {
    button.innerHTML = hide;
    container.classList.remove("hide");
    container.classList.add("js-review__container--show");
  } else {
    button.innerHTML = show;
    container.classList.add("hide");
    container.classList.remove("js-review__container--show");
  }
  getData();
}

//display stars depending on rating returned from data
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
function getData() {
  container.innerHTML = data
    .map(
      review => `
        <ul class="review__card">
            <div class="name-container">
                <div class="icon-container">
                    <li class="icon">${review.name[0]}</li>
                </div>
                <li class="name">${
                  review.name
                }<span class="review-source">-Google Reviews</span></li>
            </div>
            <li class="rating">${stars(review.rating)}</li>
            <li class="comments">${review.review}</li>
        </ul>
        `
    )
    .join(" ");
}
