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
        
    }
}

// Calling Functions

seattle.randomCustomer();
seattle.avgCookies();

tokyo.randomCustomer();
tokyo.avgCookies();

dubai.randomCustomer();
dubai.avgCookies();

paris.randomCustomer();
paris.avgCookies();

lima.randomCustomer();
lima.avgCookies();


// Seattle DOM

let SeattleId = document.getElementById('seattle');
let seattleHeading = document.createElement('h2');
let seattleList = document.createElement('ul');

SeattleId.appendChild(seattleHeading);
SeattleId.appendChild(seattleList);


seattleHeading.textContent = seattle.name ;

for (let i = 0; i < hours.length; i++) {

    let seattleListItem = document.createElement('li');
    seattleList.appendChild(seattleListItem);
    seattleListItem.textContent = hours[i] + seattle.avgCookiesPerHour[i] + ' Cookies';
}

let seattleListItem = document.createElement('li');
seattleList.appendChild(seattleListItem);
seattleListItem.textContent = 'total: ' + seattle.totalCookies + ' Cookies';


// Tokyo DOM

let tokyoId = document.getElementById('tokyo');
let tokyoHeading = document.createElement('h2');
let tokyoList = document.createElement('ul');

tokyoId.appendChild(tokyoHeading);
tokyoId.appendChild(tokyoList);


tokyoHeading.textContent = tokyo.name ;

for (let i = 0; i < hours.length; i++) {

    let tokyoListItem = document.createElement('li');
    tokyoList.appendChild(tokyoListItem);
    tokyoListItem.textContent = hours[i] + tokyo.avgCookiesPerHour[i] + ' Cookies';
}
let tokyoListItem = document.createElement('li');
tokyoList.appendChild(tokyoListItem);
tokyoListItem.textContent = 'total: ' + tokyo.totalCookies + ' Cookies';


// Dubai DOM

let dubaiId = document.getElementById('dubai');
let dubaiHeading = document.createElement('h2');
let dubaiList = document.createElement('ul');

dubaiId.appendChild(dubaiHeading);
dubaiId.appendChild(dubaiList);


dubaiHeading.textContent = dubai.name ;

for (let i = 0; i < hours.length; i++) {

    let dubaiListItem = document.createElement('li');
    dubaiList.appendChild(dubaiListItem);
    dubaiListItem.textContent = hours[i] + dubai.avgCookiesPerHour[i] + ' Cookies';
}
let dubaiListItem = document.createElement('li');
dubaiList.appendChild(dubaiListItem);
dubaiListItem.textContent = 'total: ' + dubai.totalCookies + ' Cookies';


// Paris DOM

let parisId = document.getElementById('paris');
let parisHeading = document.createElement('h2');
let parisList = document.createElement('ul');

parisId.appendChild(parisHeading);
parisId.appendChild(parisList);


parisHeading.textContent = paris.name ;

for (let i = 0; i < hours.length; i++) {

    let parisListItem = document.createElement('li');
    parisList.appendChild(parisListItem);
    parisListItem.textContent = hours[i] + paris.avgCookiesPerHour[i] + ' Cookies';
}
let parisListItem = document.createElement('li');
parisList.appendChild(parisListItem);
parisListItem.textContent = 'total: ' + paris.totalCookies + ' Cookies';


// Lima DOM

let limaId = document.getElementById('lima');
let limaHeading = document.createElement('h2');
let limaList = document.createElement('ul');

limaId.appendChild(limaHeading);
limaId.appendChild(limaList);


limaHeading.textContent = lima.name ;

for (let i = 0; i < hours.length; i++) {

    let limaListItem = document.createElement('li');
    limaList.appendChild(limaListItem);
    limaListItem.textContent = hours[i] + lima.avgCookiesPerHour[i] + ' Cookies';
}
let limaListItem = document.createElement('li');
limaList.appendChild(limaListItem);
limaListItem.textContent = 'total: ' + lima.totalCookies + ' Cookies';