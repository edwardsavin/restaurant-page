import { wrapTags, wrapText, anchorTagFactory } from "./wrappers";
import PizzaMargherita from "./imgs/pizza-margherita.png";
import ChocolateCake from "./imgs/chocolate-cake.png";
import CoffeeCup from "./imgs/coffee-cup.png";

const content = document.querySelector("#content");

const foodMenuContainer = document.createElement("div");
foodMenuContainer.setAttribute("id", "food-menu-container");

/**
 * Create multiple elements
 * Assign images and text to variables
 * Create individual DOM elements by calling the wrap functions for each variable
 * Append all elements to foodMenuContainer
 */
function addFoodMenuContent() {
  const footer = document.querySelector(".footer");
  footer.classList.add("footer-fixed");

  const foodMenuPageContent = document.createElement("div");
  foodMenuPageContent.setAttribute("class", "food-menu-page-content");

  const foodMenuCategories = document.createElement("div");
  foodMenuCategories.setAttribute("class", "food-menu-categories");

  const foodMenuContent = document.createElement("div");
  foodMenuContent.setAttribute("class", "food-menu-content");

  const mainContentImage = document.createElement("div");
  mainContentImage.setAttribute("class", "food-menu-content-image");

  const pizzaMargherita = new Image(100, 100);
  pizzaMargherita.src = PizzaMargherita;

  const chocolateCake = new Image(100, 100);
  chocolateCake.src = ChocolateCake;

  const coffeeCup = new Image(100, 100);
  coffeeCup.src = CoffeeCup;

  const txtMenuHeader = "Order Menu";

  const txtMainContent = "WE BELIEVE IN QUALITY";

  const txtItem1 = "Pizzas";

  const txtItem2 = "Deserts";

  const txtItem3 = "Coffee & Beverages";

  wrapTags(
    "food-menu-header",
    foodMenuContainer,
    wrapText(txtMenuHeader, "h", 3).newTag
  );

  foodMenuContainer.appendChild(foodMenuPageContent);
  foodMenuPageContent.appendChild(foodMenuCategories);

  // Menu item1
  const anchorItem1 = anchorTagFactory(
    "item-wrapper item1",
    "#",
    `${txtItem1}`
  );
  const wrapperItem1 = foodMenuCategories.appendChild(anchorItem1.newAnchor);
  wrapTags(
    "food-category",
    wrapperItem1,
    pizzaMargherita,
    wrapText(txtItem1, "h", 3).newTag
  );

  // Menu item2
  const anchorItem2 = anchorTagFactory(
    "item-wrapper item2",
    "#",
    `${txtItem2}`
  );
  const wrapperItem2 = foodMenuCategories.appendChild(anchorItem2.newAnchor);
  wrapTags(
    "food-category",
    wrapperItem2,
    chocolateCake,
    wrapText(txtItem2, "h", 3).newTag
  );

  // Menu item3
  const anchorItem3 = anchorTagFactory(
    "item-wrapper item3",
    "#",
    `${txtItem3}`
  );
  const wrapperItem3 = foodMenuCategories.appendChild(anchorItem3.newAnchor);
  wrapTags(
    "food-category",
    wrapperItem3,
    coffeeCup,
    wrapText(txtItem3, "h", 3).newTag
  );

  foodMenuPageContent.appendChild(foodMenuContent);
  foodMenuContent.appendChild(mainContentImage);

  wrapTags(
    "food-menu-content-text",
    mainContentImage,
    wrapText(txtMainContent, "h", 1).newTag
  );

  content.appendChild(foodMenuContainer);
}

export { addFoodMenuContent, foodMenuContainer };
