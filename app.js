let ourProducts = [{
        Name: "Blue Necklace",
        image: "J1.jpg",
        product: "jewelries",
        Amount: "RS2000",
    },
    {
        Name: "Simple Blue Necklace",
        image: "J2.jpg",
        product: "jewelries",
        Amount: "RS2500",
    },
    {
        Name: "Simple Black Necklace",
        image: "J3.jpg",
        product: "jewelries",
        Amount: "RS1000",
    },
    {
        Name: "Ring",
        image: "J4.jpg",
        product: "jewelries",
        Amount: "RS3000",
    }, {
        Name: "Ear Ring",
        image: "J5.jpg",
        product: "jewelries",
        Amount: "RS1000",
    }, {
        Name: "Ovel shapped Glasses",
        image: "G1.jfif",
        product: "glasses",
        Amount: "RS1500",
    },
    {
        Name: "Brown Framed Glasses",
        image: "G2.jfif",
        product: "glasses",
        Amount: "RS500",
    },
    {
        Name: "Thin Framed Glasses",
        image: "G3.jfif",
        product: "glasses",
        Amount: "RS2500",
    },
    {
        Name: "Thick Framed Glasses",
        image: "G5.jfif",
        product: "glasses",
        Amount: "RS1500",
    },
    {
        Name: "Round Glasses",
        image: "G6.jfif",
        product: "glasses",
        Amount: "RS1200",
    },
];


function productsTemplate(ourProducts) {
    return `
    
    <div class="coloumn">
      <div class="card_content">
        <img  src="${ourProducts.image}" /> 
        <h3 class="title">${ourProducts.Amount}</h3>
        <h2 class="title">${ourProducts.Name}</h2>
       
        
        
        <button class="add">Add</button>
        </div>
    </div>
   `
}

document.getElementById("child-container").innerHTML = `
${ourProducts.map(productsTemplate).join('')}  
`

function avaiableProducts(pass) {
    let selectedItemsArray = ourProducts.filter(myProduct);

    function myProduct(products) {
        if (products.product == pass) {
            console.log(products)
            return document.getElementById("child-container").innerHTML = `
      ${ourProducts.map(productsTemplate).join('')}
      `;
        }
    }
    document.getElementById("child-container").innerHTML = `
${selectedItemsArray.map(productsTemplate).join('')}  
`
}


// <span class="price">${product.price}</span>//