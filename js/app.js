'use strict';

let hours=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let locations= [];
let totalPerHour = [];
let totals = 0;

function tableHeaderRender (){

    let elementId = document.getElementById('sales');
    let tableElement = document.createElement('table');
    tableElement.setAttribute('id','table');
    let tableHeaderRaw = document.createElement('tr');
    tableHeaderRaw.setAttribute('class','tableHead');

    elementId.appendChild(tableElement);
    tableElement.appendChild(tableHeaderRaw);

    let tableHeadtItem = document.createElement('th');
    //tableHeadtItem.setAttribute('class','location');
    tableHeaderRaw .appendChild(tableHeadtItem);
    tableHeadtItem.textContent = 'Location';

    for (let i = 0; i < hours.length; i++) {

        tableHeadtItem = document.createElement('th');
        tableHeaderRaw .appendChild(tableHeadtItem);
        tableHeadtItem.textContent = hours[i];
    }

    tableHeadtItem = document.createElement('th');
    tableHeaderRaw .appendChild(tableHeadtItem);
    tableHeadtItem.textContent = 'Daily Location Total';

}

function Sales(location,min,max,avg){

    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.totalCookies = 0;
    this.cutomerPerHour = [];
    this.avgCookiesPerHour = [];

    locations.push(this);

}

Sales.prototype.randomCustomerNumber = function(){
    
    for (let i = 0; i < hours.length; i++) {
        this.cutomerPerHour.push(Math.floor(Math.random()* (this.max - this.min) ) + this.min);
    }
};

Sales.prototype.avgCookies = function(){
    let sum = 0;

    for (let i = 0; i < hours.length; i++) {
        
        this.avgCookiesPerHour.push(Math.floor(this.cutomerPerHour[i]*this.avg));

        sum =sum + this.avgCookiesPerHour[i];
    }
    this.totalCookies =sum ;
};

Sales.prototype.render = function(){
    let tableElement = document.getElementById('table');
    let tableRaw = document.createElement('tr');

    tableElement.appendChild(tableRaw);


    let tableRawItem = document.createElement('td');
    tableRawItem.setAttribute('class','location');
    tableRaw .appendChild(tableRawItem);
    tableRawItem.textContent = this.location;

    for (let i = 0; i < hours.length; i++) {

      tableRawItem = document.createElement('td');
      tableRaw .appendChild(tableRawItem);
      tableRawItem.textContent = this.avgCookiesPerHour[i];
    }
    tableRawItem = document.createElement('td');
    tableRawItem.setAttribute('class','bold');
    tableRaw .appendChild(tableRawItem);
    tableRawItem.textContent = this.totalCookies;

};

function tableFooterRender (){

    let tableElement = document.getElementById('table');
    let tableRaw = document.createElement('tr');

    tableElement.appendChild(tableRaw);


    let tableRawItem = document.createElement('td');
    tableRawItem.setAttribute('class','total');
    tableRaw .appendChild(tableRawItem);
    tableRawItem.textContent = 'Totals';
    
   for (let i = 0; i < hours.length; i++) {
        let sum = 0 ;
       for (let b = 0; b < locations.length; b++) {
           sum = sum + locations[b].avgCookiesPerHour[i]; 
           console.log(locations[b].avgCookiesPerHour[i]);  
       }
       totalPerHour.push(sum);
       console.log(totalPerHour);
    } 

    for (let i = 0; i < hours.length; i++) {

      tableRawItem = document.createElement('td');
      tableRawItem.setAttribute('class','bold');
      tableRaw .appendChild(tableRawItem);
      tableRawItem.textContent = totalPerHour[i];
    }

    for (let b = 0; b < locations.length; b++) {

        totals = totals + locations[b].totalCookies; 
        console.log(totals);  
    }

    tableRawItem = document.createElement('td');
    tableRawItem.setAttribute('class','bold');
    tableRaw .appendChild(tableRawItem);
    tableRawItem.textContent = totals;

}


tableHeaderRender();

let seattle = new Sales('Seattle',23,65,6.3);
let tokyo = new Sales('Tokyo',3,24,1.2);
let dubai = new Sales('Dubai',11,38,3.7);
let paris = new Sales('Paris',20,38,2.3);
let lima = new Sales('Lima',2,16,4.6);

for (let i = 0; i < locations.length; i++) {
       locations[i].randomCustomerNumber();
       locations[i].avgCookies();
       locations[i].render();

}

tableFooterRender();


let form = document.getElementById('form');
 form.addEventListener('submit', submission);

 function submission(event){
 event.preventDefault();
 let location = event.target.location.value;
 let min = Number(event.target.minCus.value);
 let max = Number(event.target.maxCus.value);
 let avg = Number(event.target.avgCookies.value);

 let elementId = document.getElementById('sales');;
 elementId.textContent = ' ';
 
 
 tableHeaderRender(); 

 let newShop = new Sales(location,min,max,avg);

 for (let i = 0; i < locations.length; i++) {
    locations[i].randomCustomerNumber();
    locations[i].avgCookies();
    locations[i].render();
}
tableFooterRender();
 
console.log( location, min, max, avg, newShop, seattle)

 }