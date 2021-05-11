import View from "./View";
import { userData } from "./page1.js";

export default class Page2 extends View {
  constructor() {
    super();
  }
  render2(data) {
    this.data = data.Poland;
    const markup = this.generateMarkup();
    const mainContainer = document.querySelector(".container");

    mainContainer.innerHTML = "";
    mainContainer.insertAdjacentHTML("afterbegin", markup);
  }
  insertData() {
    const inputCountry = document.querySelectorAll(".search__field");
    const inputDateFrom = document.getElementById("from2");
    const inputDateTo = document.getElementById("to2");
    const inputPeople = document.getElementById('people2')
    inputCountry[1].value = `${userData.country}`;
    inputDateFrom.value = `${userData.dateFrom}`;
    inputDateTo.value = `${userData.dateTo}`;
    inputPeople.value = `${userData.noOfPeople}`;
  }
  showHotels(data) {
    this.data = data.Poland;
    const hotelContainer = document.querySelector('.hotels')
    const markup = this.data.map(this.generateMarkupHotel).join('');
    hotelContainer.insertAdjacentHTML("afterbegin", markup);
    
  }
  generateMarkupHotel(hotel) {
    return `<div class="city">
    <img src="./images/cochem_germany.jpg" />
    <div class="hotel">
      <p class="hotel_name">${hotel.name} </p>
      <img src="./images/stars_1.svg" alt="one star" class="stars"/>
      <ul>
        <li>${hotel.facilities[0].name}</li>
        <li>Free WiFi internet</li>
        <li>Free parking</li>
        <li>Fitness center</li>
        <li>Coffee Kit</li>
        <li>Bathrobes and slippers</li>
      </ul>
    </div>
    <div class="booking">
        <div class="price">${hotel.price} ${hotel.currency} /night</div>
        <button class="btn">Book</button>
    </div>
  </div>`;
  }
}