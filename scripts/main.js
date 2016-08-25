'use-strict';


var API_KEY =97ccbd1ad0fcc23f4043c1cfbb172979

function getWeather(zipCode) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`,
      type: 'GET'
    }).done((data) => {
      resolve(data);
    }).fail((error) => {
      reject(error);
    });
  });
};

