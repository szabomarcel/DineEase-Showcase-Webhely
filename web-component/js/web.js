document.addEventListener("DOMContentLoaded", function() {
  fetch('data/top-rated-restauransts.json')
      .then(response => response.json())
      .then(data => {
          displayRestaurants(data);
      })
      .catch(error => {
          console.error('Error fetching restaurants:', error);
      });
});

function displayRestaurants(restaurants) {
  var restaurantsListDiv = document.getElementById('restaurants-list');
  restaurants.forEach(restaurant => {
      const restaurantDiv = document.createElement('div');
      restaurantDiv.innerHTML = `
      <img src="data\\${restaurant.image}" style="width: 390px; height: 200px;">
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
          <a href="#">View restaurant</a>
    `;
      restaurantsListDiv.appendChild(restaurantDiv);    
  });
}

const app = new Vue({
    el: '#app',
    data: {
      events: [
        { id: 1, title: 'Event 1', description: 'Description for Event 1', date: 'Date 1' },
        { id: 2, title: 'Event 2', description: 'Description for Event 2', date: 'Date 2' },
        // Add more events as needed
      ]
    }
  });