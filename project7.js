//items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//select all
const sectionCenter = document.querySelector(".section-center");

//select container of buttons
const containerBtn = document.querySelector(".btn-container");

//load items

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
  displayMenuBtns();
});

function displayMenuItem(dish) {
  let displayItem = dish.map(function (item) {
    return `<div class="card border-dark">
    <img
      class="card-img-top img-tumbnail"
      src="${item.img}"
      alt="${item.title}"
    />
    <div class="card-body">
      <h5 class="card-title bg-info item-title">${item.title}</h5>
      <p class="card-text item-category">
      ${item.category}
      </p>
      <p class="card-text item-info">
      ${item.desc}
      </p>
      <p class="card-text text-right">
        <small class="text-muted price item-price"
          >Price :- ${item.price}$</small
        >
      </p>
    </div>
  </div>`;
  });
  displayItem = displayItem.join("");
  sectionCenter.innerHTML = displayItem;
}

function displayMenuBtns() {
  const category = menu.reduce(
    function (accumulator, item) {
      if (!accumulator.includes(item.category)) {
        accumulator.push(item.category);
      }
      return accumulator;
    },
    ["all"]
  );
  // console.log(category);
  const categoryBtns = category
    .map(function (categoryBtn) {
      return ` <button type="button" class="btn-info btn filter-btn" data-id=${categoryBtn}> ${categoryBtn} </button> `;
    })
    .join("");
  containerBtn.innerHTML = categoryBtns;

  //select all btns
  const filterBtns = document.querySelectorAll(".filter-btn");

  //filter btns

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.target.dataset.id;

      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category == category) {
          return menuItem;
        }
      });

      if (category == "all") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCategory);
      }
    });
  });
}
