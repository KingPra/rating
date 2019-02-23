import tester from "./reviews.js";
import data from "./reviews.js";

function stars(num) {
  switch (num) {
    case 1:
      return `
        <div>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        </div>
        `;
      break;
    case 2:
      return `
        <div>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        </div>
        `;
      break;
    case 3:
      return `
        <div>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        </div>
        `;
      break;
    case 4:
      return `
        <div>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star"></i>
        </div>
        `;
      break;
    case 5:
      return `
        <div>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        <i class="fa fa-star" style="color:#ffe500"></i>
        </div>
        `;
      break;
    default:
      return `
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>`;
  }
}
console.log(stars());
const ratings = document.querySelector(".name");
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
