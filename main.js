// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let prices = [];
    data.forEach(function(item){
      prices.push(item.price);
  });
    let sum = prices.reduce(function(a,b){
      return a + b;
    },0);
        let total = sum / data.length;
        console.log(total.toFixed(2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let cost = [];
    for(i = 0; i < data.length; i++){
      let value = data[i].price;
    if(value >= 14 && value <=18)
      cost.push(value)
    }
      console.log(cost)
}




// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let goods = [];
    for (i = 0; i < data.length; i ++){
      let name = data[i].title
      let value = data[i].price
      let currency = data[i].currency_code
    if (currency === "GBP") {
      goods.push(name)
      goods.push(value)
    }
  }
      console.log(goods)
}


// 4: Display a list of all items who are made of wood.
function question4 () {
   let woodwork = []
   for (i = 0; i < data.length; i++){
     if (data[i].materials){
      let find = data[i].materials
      for (j = 0; j < find.length; j++){
        if(find[j] === 'wood'){
          woodwork.push(data[i].title)
        }
      }
    }
  }
      console.log(woodwork)
}


// 5: Which items are made of eight or more materials?
//    Display the name, nmber of items and the items it is made of.
function question5 () {
  data.forEach(function(item){
    if (item.materials.length > 8){
      console.log(item.title, item.quantity, item.materials.forEach(function(material){
      console.log(material)
      }))
    }
  })
}

// 6: How many items were made by their sellers?

function question6 () {
  let sellerMade = 0
    data.forEach(function(seller){
      if(seller.who_made === 'i_did'){
        sellerMade++
    }
  })
      console.log(sellerMade + " was made by seller")
}
