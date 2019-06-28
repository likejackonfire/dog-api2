'use strict';

const store = {
    number: 0,
    dogArray:[],
}

function watchForm(){
    $('form').on('submit', function(event){
        event.preventDefault();
        if($('.number-value').val()>50){
            return alert('Please choose a valid number');
        }
        store.number= $('.number-value').val();
        //console.log(store.number);
        getDogImages(store.number);
    })
}

function getDogImages(num){
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => makeDogArray(responseJson)).then(displayResults)
            .catch(error => alert('Something went wrong. Try again later.'));
}

function makeDogArray(responseJson){
    store.dogArray = responseJson.message;
    //console.log(store.dogArray);
}

function makeHtml(){
    let newArr=[];
    for(let i = 0; i < store.dogArray.length; i++){
        newArr.push(`<img src="${store.dogArray[i]}" class="results">`)
}
   return newArr;
}    

function displayResults(){
    $('.results').replaceWith(makeHtml())}


$(function() {
    console.log('App loaded! good job!');
    watchForm();
    
  });