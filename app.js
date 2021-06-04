const menu = [
  {
    id: 1,
    title: "item title 1",
    category: "trujillo",
    rate: 15,
    img: "omri-d-cohen-8X2SLD6mLjQ-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo voluptas possimus. Deserunt debitis consectetur architecto officia? Quo, incidunt inventore!`,
  },
  {
    id: 2,
    title: "item title 2",
    category: "trujillo",
    rate: 13,
    img: "omri-d-cohen-PC-L_ABWe4g-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam quo, quis voluptatem expedita asperiores placeat nostrum deleniti incidunt dolore?`,
  },
  {
    id: 3,
    title: "item title 3",
    category: "trujillo",
    rate: 6,
    img: "cristhian-hernandez-vKER-VVixP8-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptatem quis reprehenderit assumenda. Saepe eligendi explicabo non doloremque delectus deleniti!`,
  },
  {
    id: 4,
    title: "item title 4",
    category: "lima",
    rate: 20,
    img: "aarom-ore-Yrqyn1Gb80k-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor molestias nulla ut accusamus voluptatibus ab asperiores harum incidunt accusantium?`,
  },
  {
    id: 5,
    title: "item title 5",
    category: "lima",
    rate: 22,
    img: "anna-mircea-zfFnMTDCGrA-unsplash.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsum voluptate officiis ducimus blanditiis aperiam maiores iusto impedit, soluta consequatur!`,
  },
  {
    id: 6,
    title: "item title 6",
    category: "cajamarca",
    rate: 18,
    img: "miguel-marquina-YPGIIuxHdeA-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt culpa ipsum alias maiores doloremque dicta exercitationem laudantium aperiam officia.`,
  },
  {
    id: 7,
    title: "item title 7",
    category: "cajamarca",
    rate: 8,
    img: "miguel-marquina-aD-1D9EN9ik-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem obcaecati in expedita ipsum excepturi fugiat itaque ipsa modi neque.`,
  },
  {
    id: 8,
    title: "item title 8",
    category: "cajamarca",
    rate: 12,
    img: "miguel-marquina-lwD5dCZ_l6U-unsplash.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ea odit tempore sed tenetur minima recusandae repellat ducimus commodi tempora.`,
  },
  {
    id: 9,
    title: "item title 9",
    category: "cajamarca",
    rate: 16,
    img: "miguel-marquina-B7h1QKeJszE-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas consectetur doloribus ullam id fuga accusantium atque asperiores autem placeat?`,
  },
  {
    id: 10,
    title: "item title 10",
    category: "iquitos",
    rate: 22,
    img: "deb-dowd-VrU7t2zXcUM-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae magni, error id ullam tenetur voluptatibus! Similique ducimus consectetur cupiditate!`,
  },
  {
    id: 11,
    title: "item title 11",
    category: "iquitos",
    rate: 16,
    img: "deb-dowd-gpGbu1os-3c-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae magni, error id ullam tenetur voluptatibus! Similique ducimus consectetur cupiditate!`,
  },
  {
    id: 12,
    title: "item title 12",
    category: "iquitos",
    rate: 32,
    img: "deb-dowd-cwLlrqw9Eo4-unsplash.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae magni, error id ullam tenetur voluptatibus! Similique ducimus consectetur cupiditate!`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${"./img/"+item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="rate"><i class="fas fa-thumbs-up"></i>${item.rate}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
