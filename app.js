var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var firstAndPike = {
    locationName: '1st and Pike',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHours: function(){
        for(var i = 0; i < hours.length; i++){
            this.customersEachHour.push(Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour + 1) + this.minCustomersPerHour));
        }
        return;
    },
    calcCookiesEachHour: function(){
        for(var i = 0; i < this.customersEachHour.length; i++){
            this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
        }
        return;
    },
    calcTotalDailyCookies: function(){
        for(var i = 0; i < this.cookiesEachHour.length; i++){
            this.totalDailyCookies += this.cookiesEachHour[i];
        }
        return;
    },
    render: function(){
        this.calcCustomersEachHours();
        this.calcCookiesEachHour();
        this.calcTotalDailyCookies();
        var header = document.createElement('h2');
        header.textContent = this.locationName;
        document.body.appendChild(header);

        var ul = document.createElement('ul');
        for(var i = 0; i < hours.length; i++){
            var li = document.createElement('li');
            li.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
            ul.appendChild(li);
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.totalDailyCookies;
        ul.appendChild(total);
        document.body.appendChild(ul)
    }
}

var seaTacAirport = {
    locationName: 'SeaTac Airport',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiesPerSale: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHours: function(){
        for(var i = 0; i < hours.length; i++){
            this.customersEachHour.push(Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour + 1) + this.minCustomersPerHour));
        }
        return;
    },
    calcCookiesEachHour: function(){
        for(var i = 0; i < this.customersEachHour.length; i++){
            this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
        }
        return;
    },
    calcTotalDailyCookies: function(){
        for(var i = 0; i < this.cookiesEachHour.length; i++){
            this.totalDailyCookies += this.cookiesEachHour[i];
        }
        return;
    },
    render: function(){
        this.calcCustomersEachHours();
        this.calcCookiesEachHour();
        this.calcTotalDailyCookies();
        var header = document.createElement('h2');
        header.textContent = this.locationName;
        document.body.appendChild(header);

        var ul = document.createElement('ul');
        for(var i = 0; i < hours.length; i++){
            var li = document.createElement('li');
            li.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
            ul.appendChild(li);
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.totalDailyCookies;
        ul.appendChild(total);
        document.body.appendChild(ul)
    }
}

var seattleCenter = {
    locationName: 'Seattle Center',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHours: function(){
        for(var i = 0; i < hours.length; i++){
            this.customersEachHour.push(Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour + 1) + this.minCustomersPerHour));
        }
        return;
    },
    calcCookiesEachHour: function(){
        for(var i = 0; i < this.customersEachHour.length; i++){
            this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
        }
        return;
    },
    calcTotalDailyCookies: function(){
        for(var i = 0; i < this.cookiesEachHour.length; i++){
            this.totalDailyCookies += this.cookiesEachHour[i];
        }
        return;
    },
    render: function(){
        this.calcCustomersEachHours();
        this.calcCookiesEachHour();
        this.calcTotalDailyCookies();
        var header = document.createElement('h2');
        header.textContent = this.locationName;
        document.body.appendChild(header);

        var ul = document.createElement('ul');
        for(var i = 0; i < hours.length; i++){
            var li = document.createElement('li');
            li.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
            ul.appendChild(li);
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.totalDailyCookies;
        ul.appendChild(total);
        document.body.appendChild(ul)
    }
}

var capitolHill = {
    locationName: 'Capitol Hill',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHours: function(){
        for(var i = 0; i < hours.length; i++){
            this.customersEachHour.push(Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour + 1) + this.minCustomersPerHour));
        }
        return;
    },
    calcCookiesEachHour: function(){
        for(var i = 0; i < this.customersEachHour.length; i++){
            this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
        }
        return;
    },
    calcTotalDailyCookies: function(){
        for(var i = 0; i < this.cookiesEachHour.length; i++){
            this.totalDailyCookies += this.cookiesEachHour[i];
        }
        return;
    },
    render: function(){
        this.calcCustomersEachHours();
        this.calcCookiesEachHour();
        this.calcTotalDailyCookies();
        var header = document.createElement('h2');
        header.textContent = this.locationName;
        document.body.appendChild(header);

        var ul = document.createElement('ul');
        for(var i = 0; i < hours.length; i++){
            var li = document.createElement('li');
            li.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
            ul.appendChild(li);
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.totalDailyCookies;
        ul.appendChild(total);
        document.body.appendChild(ul)
    }
}

var alki = {
    locationName: 'Alki',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiesPerSale: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHours: function(){
        for(var i = 0; i < hours.length; i++){
            this.customersEachHour.push(Math.floor(Math.random()*(this.maxCustomersPerHour-this.minCustomersPerHour + 1) + this.minCustomersPerHour));
        }
        return;
    },
    calcCookiesEachHour: function(){
        for(var i = 0; i < this.customersEachHour.length; i++){
            this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
        }
        return;
    },
    calcTotalDailyCookies: function(){
        for(var i = 0; i < this.cookiesEachHour.length; i++){
            this.totalDailyCookies += this.cookiesEachHour[i];
        }
        return;
    },
    render: function(){
        this.calcCustomersEachHours();
        this.calcCookiesEachHour();
        this.calcTotalDailyCookies();
        var header = document.createElement('h2');
        header.textContent = this.locationName;
        document.body.appendChild(header);

        var ul = document.createElement('ul');
        for(var i = 0; i < hours.length; i++){
            var li = document.createElement('li');
            li.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
            ul.appendChild(li);
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.totalDailyCookies;
        ul.appendChild(total);
        document.body.appendChild(ul)
    }
}


firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();