var days = [
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var allPosts = [];
async function getCityWeather(term) {
  var req = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=5c8bee64697448aaa6c221703230808&q=${term}&days=3`
  );
  if (req.status == 200) {
    var getResponse = await req.json();
    console.log(getResponse);
    // displayCurrent(getResponse.location, getResponse.current),
    displayWeather(getResponse.forecast.forecastday, getResponse.location);
  }
}

function displayWeather(x, y) {
  var cartona = "";

  for (var i = 0; i < x.length; i++) {
    var dateData = new Date(x[i].date);
    cartona += ` <div class="col-md-8 col-lg-6 col-xl-4">
    <div class="card" style="color: #4b515d; border-radius: 35px">
      <div class="card-body p-4">
        <div class="d-flex justify-content-between">
        
          <h6>${days[dateData.getDay()]}</h6>
          <h6>${dateData.getDay() + months[dateData.getMonth()]}</h6>
        </div>
  
        <div class="d-flex flex-column text-center mt-5 mb-4">
        <h4 >${y.name}</h4>
          <h6
            class="display-4 mb-0 font-weight-bold"
            style="color: #1c2331"
          >
            ${x[i].day.maxtemp_c}°C
          </h6>
          <p>${x[i].day.mintemp_c}°C</p>
          <span class="small" style="color: #868b94">${
            x[i].day.condition.text
          }</span>

        </div>
  
        <div class="d-flex align-items-center">
          <div class="flex-grow-1" style="font-size: 1rem">
            <div>
              <i class="fas fa-wind fa-fw" style="color: #868b94"></i>
              <span class="ms-1"> ${x[i].day.maxwind_kph} km/h </span>
            </div>
            <div>
              <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
              <span class="ms-1"> ${x[i].day.avghumidity}% </span>
            </div>
            <div>
              <i class="fas fa-sun fa-fw" style="color: #868b94"></i>
              <span class="ms-1"> 0.2h </span>
            </div>
          </div>
          <div>
            <img
              src="${x[i].day.condition.icon}"
              width="100px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
  document.querySelector(".weather .row").innerHTML = cartona;
}

getCityWeather("cai");
