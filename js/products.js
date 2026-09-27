const products = [
  {
    "name": "Irish coffee",
    "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    "price": "7.00",
    "category": "coffee",
    'img': './assets/irish_coffee.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Kahlua coffee",
    "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    "price": "7.00",
    "category": "coffee",
    'img': './assets/kahlua_coffe.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey raf",
    "description": "Espresso with frothed milk, cream and aromatic honey",
    "price": "5.50",
    "category": "coffee",
    'img': './assets/honey_raf.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ice cappuccino",
    "description": "Cappuccino with soft thick foam in summer version with ice",
    "price": "5.00",
    "category": "coffee",
    'img': './assets/ice_cappuccino.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Espresso",
    "description": "Classic black coffee",
    "price": "4.50",
    "category": "coffee",
    'img': './assets/espresso.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte",
    "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
    "price": "5.50",
    "category": "coffee",
    'img': './assets/latte.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte macchiato",
    "description": "Espresso with frothed milk and chocolate",
    "price": "5.50",
    "category": "coffee",
    'img': './assets/latte_macchiato.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Coffee with cognac",
    "description": "Fragrant black coffee with cognac and whipped cream",
    "price": "6.50",
    "category": "coffee",
    'img': './assets/coffee_with_cognac.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Moroccan",
    "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    "price": "4.50",
    "category": "tea",
    'img': './assets/moroccan.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ginger",
    "description": "Original black tea with fresh ginger, lemon and honey",
    "price": "5.00",
    "category": "tea",
    'img': './assets/ginger.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cranberry",
    "description": "Invigorating black tea with cranberry and honey",
    "price": "5.00",
    "category": "tea",
    'img': './assets/cranberry.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Sea buckthorn",
    "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    "price": "5.50",
    "category": "tea",
    'img': './assets/sea_buckthorn.png',
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Marble cheesecake",
    "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    "price": "3.50",
    "category": "dessert",
    'img': './assets/marble_cheesecake.png',
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Red velvet",
    "description": "Layer cake with cream cheese frosting",
    "price": "4.00",
    "category": "dessert",
    'img': './assets/red_velvet.png',
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cheesecakes",
    "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    "price": "4.50",
    "category": "dessert",
    'img': './assets/cheesecakes.png',
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Creme brulee",
    "description": "Delicate creamy dessert in a caramel basket with wild berries",
    "price": "4.00",
    "category": "dessert",
    'img': './assets/creme_brulee.png',
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Pancakes",
    "description": "Tender pancakes with strawberry jam and fresh strawberries",
    "price": "4.50",
    "category": "dessert",
    'img': './assets/pancakes.png',
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey cake",
    "description": "Classic honey cake with delicate custard",
    "price": "4.50",
    "category": "dessert",
    'img': './assets/honey_cake.png',
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Chocolate cake",
    "description": "Cake with hot chocolate filling and nuts with dried apricots",
    "price": "5.50",
    "category": "dessert",
    'img': './assets/chocolate_cake.png',
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Black forest",
    "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    "price": "6.50",
    "category": "dessert",
    'img': './assets/black_forest.png',
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  }
]



function createCard(title, description, cardPrice, image) {
    const article = document.createElement('article');
    article.classList.add('coffee-card');

    const coffeeCardImage = document.createElement('div');
    coffeeCardImage.classList.add('coffee-card__image');

    const img = document.createElement('img');
    img.src = image;
    img.alt = title;

    const coffeeCardContent = document.createElement('div');
    coffeeCardContent.classList.add('coffee-card__content');

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    const price = document.createElement('span');
    price.classList.add('coffee-card__price');
    price.textContent = cardPrice;

    coffeeCardImage.append(img);

    coffeeCardContent.append(
        h2,
        p,
        price
    );

    article.append(
        coffeeCardImage,
        coffeeCardContent
    );

    return article;
}

function setCategory() {
    const coffeeButton = document.querySelector('.coffee');
    const teaButton = document.querySelector('.tea');
    const dessertButton = document.querySelector('.dessert');
    const categories = document.querySelectorAll('.category');
    coffeeButton.addEventListener('click', () => {
        categories.forEach(category => {
    category.classList.remove('category--active');
            });
        coffeeButton.classList.add('category--active');     
        createCardsByCategory('coffee');
    })
    teaButton.addEventListener('click', () => {
    categories.forEach(category => {
    category.classList.remove('category--active');
            });   
        teaButton.classList.add('category--active');
        createCardsByCategory('tea');
    })
    dessertButton.addEventListener('click', () => {
        categories.forEach(category => {
    category.classList.remove('category--active');
            });   
        dessertButton.classList.add('category--active');
        createCardsByCategory('dessert');
    })

}

function createCardsByCategory(category = 'coffee') {
    const coffeeGrid =  document.querySelector('.coffee-grid');
    coffeeGrid.replaceChildren();
    products.forEach(product => {
        if (product.category === category) {
           const card = createCard(product.name, product.description, product.price, product.img);
            coffeeGrid.append(card);
        }
    })
}
createCardsByCategory();
setCategory()
