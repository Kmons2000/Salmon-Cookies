var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Cookies(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName,
  this.minCustomersPerHour = minCustomersPerHour,
  this.maxCustomersPerHour = maxCustomersPerHour,
  this.avgCookiesPerSale = avgCookiesPerSale,
  this.customersEachHour = [],
  this.cookiesEachHour = [],
  this.totalDailyCookies = 0;
}
Cookies.prototype.calcCustomersEachHours = function() {
  for(var i = 0; i < hours.length; i++){
    this.customersEachHour.push(Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour + 1) + this.minCustomersPerHour));
  }
};
Cookies.prototype.calcCookiesEachHour = function() {
  for(var i = 0; i < this.customersEachHour.length; i++){
    this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
  }
};
Cookies.prototype.calcTotalDailyCookies = function() {
  for(var i = 0; i < this.cookiesEachHour.length; i++){
    this.totalDailyCookies += this.cookiesEachHour[i];
  }
};
Cookies.prototype.render = function() {
  this.calcCustomersEachHours();
  this.calcCookiesEachHour();
  this.calcTotalDailyCookies();
  var table = document.getElementsByTagName('table')[0];
  var row = document.createElement('tr');
  table.appendChild(row);
  var location = document.createElement('td');
  location.textContent = this.locationName;
  row.appendChild(location);
  for(var i = 0; i < hours.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesEachHour[i];
    row.appendChild(tableData);
  }
  var total = document.createElement('td');
  total.textContent = this.totalDailyCookies;
  row.appendChild(total);
};
function createTable() {
  var table = document.createElement('table');
  document.body.appendChild(table);
  var tableRow = document.createElement('tr');
  var header = document.createElement('th');
  header.textContent = 'Location';
  tableRow.appendChild(header);
  for(var i =0; i < hours.length; i++){
    header = document.createElement('th');
    header.textContent = hours[i];
    tableRow.appendChild(header);
  }
  table.appendChild(tableRow);
  var grandTotal = document.createElement('th');
  grandTotal.textContent = 'Total';
  tableRow.appendChild(grandTotal);
}
createTable();
var firstAndPike = new Cookies('First and Pike', 23, 65, 6.3);
firstAndPike.render();
var seatac = new Cookies('SeaTac Airport', 3, 24, 1.2);
seatac.render();
var seattle = new Cookies('Seattle Center', 11, 38, 3.7);
seattle.render();
var capitol = new Cookies('Capitol Hill', 20, 38, 2.3);
capitol.render();
var alki = new Cookies('Alki', 2, 16, 4.6);
alki.render();

var addNewLocation = document.getElementById('add-location');


function handleForm(e){
  e.preventDefault();
  var location = e.target.loc.value;
  var minimum = parseInt(e.target.min.value);
  var maximum = parseInt(e.target.max.value);
  var average = parseInt(e.target.avg.value);
  document.getElementById('add-location').reset();
  var newStore = new Cookies(location, minimum, maximum, average);
  newStore.render();
}

addNewLocation.addEventListener('submit', handleForm);