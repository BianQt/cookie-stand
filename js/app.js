'use strict'

let hours=['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];

// Declaring Objects
let seattle = {
    name:'Seattle',
    min:23,
    max:65,
    avg:6.3,
    totalCookies:0 ,
    cutomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer:function(){
    
        for (let i = 0; i < hours.length; i++) {
            this.cutomerPerHour.push(Math.floor(Math.random()* (this.max - this.min) ) + this.min);
        }
    },

    avgCookies:function(){
        let sum = 0;

        for (let i = 0; i < hours.length; i++) {
            
            this.avgCookiesPerHour.push(Math.floor(this.cutomerPerHour[i]*this.avg));

            sum =sum + this.avgCookiesPerHour[i];
        }
        this.totalCookies =sum ;
    },

    render:function(){

        let elementId = document.getElementById(this.name.toLowerCase());
        let elementHeading = document.createElement('h2');
        let elementList = document.createElement('ul');

        elementId.appendChild(elementHeading);
        elementId.appendChild(elementList);


        elementHeading.textContent = this.name ;

        for (let i = 0; i < hours.length; i++) {

            let elementListItem = document.createElement('li');
            elementList.appendChild(elementListItem);
            elementListItem.textContent = hours[i] + this.avgCookiesPerHour[i] + ' Cookies';
        }
       let elementListItem = document.createElement('li');
       elementList.appendChild(elementListItem);
       elementListItem.textContent = 'total: ' + this.totalCookies + ' Cookies';
    }
}

let tokyo = {
    name:'Tokyo',
    min:3,
    max:24,
    avg:1.2,
    totalCookies:0 ,
    cutomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer:function(){
    
        for (let i = 0; i < hours.length; i++) {
            this.cutomerPerHour.push(Math.floor(Math.random()* (this.max - this.min) ) + this.min);
        }
    },
    avgCookies:function(){
        let sum = 0;

        for (let i = 0; i < hours.length; i++) {
            
            this.avgCookiesPerHour.push(Math.floor(this.cutomerPerHour[i]*this.avg));

            sum =sum + this.avgCookiesPerHour[i];
        }
        this.totalCookies =sum ;
        
    },

    render:function(){

        let elementId = document.getElementById(this.name.toLowerCase());
        let elementHeading = document.createElement('h2');
        let elementList = document.createElement('ul');

        elementId.appendChild(elementHeading);
        elementId.appendChild(elementList);


        elementHeading.textContent = this.name ;

        for (let i = 0; i < hours.length; i++) {

            let elementListItem = document.createElement('li');
            elementList.appendChild(elementListItem);
            elementListItem.textContent = hours[i] + this.avgCookiesPerHour[i] + ' Cookies';
        }
       let elementListItem = document.createElement('li');
       elementList.appendChild(elementListItem);
       elementListItem.textContent = 'total: ' + this.totalCookies + ' Cookies';
    }
}

let dubai= {
    name:'Dubai',
    min:11,
    max:38,
    avg:3.7,
    totalCookies:0 ,
    cutomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer:function(){
    
        for (let i = 0; i < hours.length; i++) {
            this.cutomerPerHour.push(Math.floor(Math.random()* (this.max - this.min) ) + this.min);
        }
    },
    avgCookies:function(){
        let sum = 0;

        for (let i = 0; i < hours.length; i++) {
            
            this.avgCookiesPerHour.push(Math.floor(this.cutomerPerHour[i]*this.avg));

            sum =sum + this.avgCookiesPerHour[i];
        }
        this.totalCookies =sum ;
        
    },

    render:function(){

        let elementId = document.getElementById(this.name.toLowerCase());
        let elementHeading = document.createElement('h2');
        let elementList = document.createElement('ul');

        elementId.appendChild(elementHeading);
        elementId.appendChild(elementList);


        elementHeading.textContent = this.name ;

        for (let i = 0; i < hours.length; i++) {

            let elementListItem = document.createElement('li');
            elementList.appendChild(elementListItem);
            elementListItem.textContent = hours[i] + this.avgCookiesPerHour[i] + ' Cookies';
        }
       let elementListItem = document.createElement('li');
       elementList.appendChild(elementListItem);
       elementListItem.textContent = 'total: ' + this.totalCookies + ' Cookies';
    }
}

let paris = {
    name:'Paris',
    min:20,
    max:38,
    avg:2.3,
    totalCookies:0 ,
    cutomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer:function(){
    
        for (let i = 0; i < hours.length; i++) {
            this.cutomerPerHour.push(Math.floor(Math.random()* (this.max - this.min) ) + this.min);
        }
    },
    avgCookies:function(){
        let sum = 0;

        for (let i = 0; i < hours.length; i++) {
            
            this.avgCookiesPerHour.push(Math.floor(this.cutomerPerHour[i]*this.avg));

            sum =sum + this.avgCookiesPerHour[i];
        }
        this.totalCookies =sum ;
        
    },

    render:function(){

        let elementId = document.getElementById(this.name.toLowerCase());
        let elementHeading = document.createElement('h2');
        let elementList = document.createElement('ul');

        elementId.appendChild(elementHeading);
        elementId.appendChild(elementList);


        elementHeading.textContent = this.name ;

        for (let i = 0; i < hours.length; i++) {

            let elementListItem = document.createElement('li');
            elementList.appendChild(elementListItem);
            elementListItem.textContent = hours[i] + this.avgCookiesPerHour[i] + ' Cookies';
        }
       let elementListItem = document.createElement('li');
       elementList.appendChild(elementListItem);
       elementListItem.textContent = 'total: ' + this.totalCookies + ' Cookies';
    }
}

let lima = {
    name:'Lima',
    min:2,
    max:16,
    avg:4.6,
    totalCookies:0 ,
    cutomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer:function(){
    
        for (let i = 0; i < hours.length; i++) {
            this.cutomerPerHour.push(Math.floor(Math.random()* (this.max - this.min) ) + this.min);
        }
    },
    avgCookies:function(){
        let sum = 0;

        for (let i = 0; i < hours.length; i++) {
            
            this.avgCookiesPerHour.push(Math.floor(this.cutomerPerHour[i]*this.avg));

            sum =sum + this.avgCookiesPerHour[i];
        }
        this.totalCookies =sum ;
        
    },

    render:function(){

        let elementId = document.getElementById(this.name.toLowerCase());
        let elementHeading = document.createElement('h2');
        let elementList = document.createElement('ul');

        elementId.appendChild(elementHeading);
        elementId.appendChild(elementList);


        elementHeading.textContent = this.name ;

        for (let i = 0; i < hours.length; i++) {

            let elementListItem = document.createElement('li');
            elementList.appendChild(elementListItem);
            elementListItem.textContent = hours[i] + this.avgCookiesPerHour[i] + ' Cookies';
        }
       let elementListItem = document.createElement('li');
       elementList.appendChild(elementListItem);
       elementListItem.textContent = 'total: ' + this.totalCookies + ' Cookies';
    }
}

// Calling Functions

seattle.randomCustomer();
seattle.avgCookies();
seattle.render();

tokyo.randomCustomer();
tokyo.avgCookies();
tokyo.render();

dubai.randomCustomer();
dubai.avgCookies();
dubai.render();

paris.randomCustomer();
paris.avgCookies();
paris.render();

lima.randomCustomer();
lima.avgCookies();
lima.render();

