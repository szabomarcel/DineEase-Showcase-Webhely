document.addEventListener("DOMContentLoaded", function() {
  fetch('data/top-rated-restauransts.json')
      .then(response => response.json())
      .then(data => {
          displayRestaurants(data, 'restaurants-list');
      })
      .catch(error => {
          console.error('Error fetching restaurants:', error);
      });
  fetch('data/top-rated-restauransts.json')
      .then(response => response.json())
      .then(data => {
        displayRestaurants(data,'mydiv')
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
      });
});

function displayRestaurants(restaurants, divId) {
  var restaurantsListDiv = document.getElementById(divId);
  restaurants.forEach(restaurant => {
      const restaurantDiv = document.createElement('div');
      restaurantDiv.innerHTML = `
      <img src="data\\${restaurant.image}" id="kep">
      <h4 class="card-title d-flex justify-content-between"><span
          class="m-4"><b>${restaurant.name}</b></span><span
          class="m-4"><img src="picture/images/star.png"
              alt
              srcset><img src="picture/images/star.png"
              alt
              srcset><img src="picture/images/star.png"
              alt
              srcset><img src="picture/images/star.png"
              alt
              srcset><img src="picture/images/star.png"
              alt
              srcset></span>
          </h4>
          <p><strong></strong> ${restaurant.description}</p>
          <a href="#" id="nyil">View restaurant</a>
    `;
      restaurantsListDiv.appendChild(restaurantDiv);    
  });
}
