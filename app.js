var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var stores = [
  new Cookies ('First and Pike', 23, 65, 6.3),
  new Cookies ('SeaTac Airport', 3, 24, 1.2),
  new Cookies ('Seattle Center', 11, 38, 3.7),
  new Cookies ('Capitol Hill', 20, 38, 2.3),
  new Cookies ('Alki', 2, 16, 4.6),
];

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
  var table = document.getElementsByTagName('tbody')[0];
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
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  var tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);
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
  tbody.appendChild(tableRow);
  var grandTotal = document.createElement('th');
  grandTotal.textContent = 'Total';
  tableRow.appendChild(grandTotal);
}
function footerTotal(){
  var tableOne = document.getElementsByTagName('tfoot')[0];
  console.log(tableOne);
  var footerRow = document.createElement('tr');
  var footerTitle = document.createElement('td');
  footerTitle.textContent = 'Total';
  footerRow.appendChild(footerTitle);
  var hourTotal = 0;
  var totalTotal = 0;
  for(var i = 0; i < hours.length; i++){
    var hourlyTotal = document.createElement('td');
    hourTotal = 0;
    stores.forEach(function(store){
      hourTotal += store.cookiesEachHour[i];
    });
    console.log(hourTotal);
    hourlyTotal.textContent = hourTotal;
    footerRow.appendChild(hourlyTotal);
    totalTotal += hourTotal;
  }  
  var totalTd = document.createElement('td');
  totalTd.textContent = totalTotal;
  footerRow.appendChild(totalTd);
  tableOne.appendChild(footerRow);
}
createTable();

for(var i = 0; i < stores.length; i++){
  stores[i].render();
}
footerTotal();
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
  stores.push(newStore);
  document.getElementsByTagName('tfoot')[0].innerHTML='';
  footerTotal();
}

addNewLocation.addEventListener('submit', handleForm);