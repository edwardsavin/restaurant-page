import { addFoodMenuContent } from "../foodmenu";
import { wrapTags, wrapText, anchorTagFactory } from "../../functions/wrappers";
import DrinkCappuccino from "../../imgs/drinks-cappuccino.png";
import DrinkEspresso from "../../imgs/drinks-espresso.png";
import DrinkFrappe from "../../imgs/drinks-frappe.png";
import DrinkLatteMacchiato from "../../imgs/drinks-latte-macchiato.png";
import DrinkStillWater from "../../imgs/drinks-still-water.png";
import DrinkMineralWater from "../../imgs/drinks-mineral-water.png";
import DrinkPepsi from "../../imgs/drinks-pepsi.png";
import DrinkPepsiTwist from "../../imgs/drinks-pepsi-twist.png";
import DrinkFantaOrange from "../../imgs/drinks-fanta-orange.png";
import DrinkLiptonLemon from "../../imgs/drinks-lipton-lemon.png";

function addFoodMenuItemDrinks(withFoodMenuContent = true) {
  if (withFoodMenuContent === true) {
    addFoodMenuContent();
  }

  const foodMenuHeader = document.querySelector(".food-menu-header");
  const foodMenuHeaderText = foodMenuHeader.firstChild;
  foodMenuHeaderText.textContent = "Coffee & Beverages";

  const foodMenuContent = document.querySelector(".food-menu-content");
  foodMenuContent.removeChild(foodMenuContent.firstChild);

  const foodMenuContentItems = document.createElement("div");
  foodMenuContentItems.setAttribute("class", "food-menu-content-items");

  const drinkCappuccino = new Image(273, 200);
  drinkCappuccino.src = DrinkCappuccino;

  const drinkEspresso = new Image(273, 200);
  drinkEspresso.src = DrinkEspresso;

  const drinkFrappe = new Image(273, 200);
  drinkFrappe.src = DrinkFrappe;

  const drinkLatteMacchiato = new Image(273, 200);
  drinkLatteMacchiato.src = DrinkLatteMacchiato;

  const drinkStillWater = new Image(273, 200);
  drinkStillWater.src = DrinkStillWater;

  const drinkMineralWater = new Image(273, 200);
  drinkMineralWater.src = DrinkMineralWater;

  const drinkPepsi = new Image(273, 200);
  drinkPepsi.src = DrinkPepsi;

  const drinkPepsiTwist = new Image(273, 200);
  drinkPepsiTwist.src = DrinkPepsiTwist;

  const drinkFantaOrange = new Image(273, 200);
  drinkFantaOrange.src = DrinkFantaOrange;

  const drinkLiptonLemon = new Image(273, 200);
  drinkLiptonLemon.src = DrinkLiptonLemon;

  const txtdrinksItem1 = "Cappuccino";

  const txtdrinksItem2 = "Espresso";

  const txtdrinksItem3 = "Frappe";

  const txtdrinksItem4 = "Latte Macchiato";

  const txtdrinksItem5 = "Still Water";

  const txtdrinksItem6 = "Mineral Water";

  const txtdrinksItem7 = "Pepsi";

  const txtdrinksItem8 = "Pepsi Twist";

  const txtdrinksItem9 = "Fanta Orange";

  const txtdrinksItem10 = "Lipton Lemon";

  foodMenuContent.appendChild(foodMenuContentItems);

  // Menu item1
  const drinksAnchorItem1 = anchorTagFactory(
    "item-wrapper drinks-item1",
    "#",
    `${txtdrinksItem1}`
  );
  const drinksWrapperItem1 = foodMenuContentItems.appendChild(
    drinksAnchorItem1.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem1,
    drinkCappuccino,
    wrapText(txtdrinksItem1, "h", 3).newTag
  );

  // Menu item2
  const drinksAnchorItem2 = anchorTagFactory(
    "item-wrapper drinks-item2",
    "#",
    `${txtdrinksItem2}`
  );
  const drinksWrapperItem2 = foodMenuContentItems.appendChild(
    drinksAnchorItem2.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem2,
    drinkEspresso,
    wrapText(txtdrinksItem2, "h", 3).newTag
  );

  // Menu item3
  const drinksAnchorItem3 = anchorTagFactory(
    "item-wrapper drinks-item3",
    "#",
    `${txtdrinksItem3}`
  );
  const drinksWrapperItem3 = foodMenuContentItems.appendChild(
    drinksAnchorItem3.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem3,
    drinkFrappe,
    wrapText(txtdrinksItem3, "h", 3).newTag
  );

  // Menu item4
  const drinksAnchorItem4 = anchorTagFactory(
    "item-wrapper drinks-item4",
    "#",
    `${txtdrinksItem4}`
  );
  const drinksWrapperItem4 = foodMenuContentItems.appendChild(
    drinksAnchorItem4.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem4,
    drinkLatteMacchiato,
    wrapText(txtdrinksItem4, "h", 3).newTag
  );

  // Menu item5
  const drinksAnchorItem5 = anchorTagFactory(
    "item-wrapper drinks-item5",
    "#",
    `${txtdrinksItem5}`
  );
  const drinksWrapperItem5 = foodMenuContentItems.appendChild(
    drinksAnchorItem5.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem5,
    drinkStillWater,
    wrapText(txtdrinksItem5, "h", 3).newTag
  );

  // Menu item6
  const drinksAnchorItem6 = anchorTagFactory(
    "item-wrapper drinks-item6",
    "#",
    `${txtdrinksItem6}`
  );
  const drinksWrapperItem6 = foodMenuContentItems.appendChild(
    drinksAnchorItem6.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem6,
    drinkMineralWater,
    wrapText(txtdrinksItem6, "h", 3).newTag
  );

  // Menu item7
  const drinksAnchorItem7 = anchorTagFactory(
    "item-wrapper drinks-item7",
    "#",
    `${txtdrinksItem7}`
  );
  const drinksWrapperItem7 = foodMenuContentItems.appendChild(
    drinksAnchorItem7.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem7,
    drinkPepsi,
    wrapText(txtdrinksItem7, "h", 3).newTag
  );

  // Menu item8
  const drinksAnchorItem8 = anchorTagFactory(
    "item-wrapper drinks-item8",
    "#",
    `${txtdrinksItem8}`
  );
  const drinksWrapperItem8 = foodMenuContentItems.appendChild(
    drinksAnchorItem8.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem8,
    drinkPepsiTwist,
    wrapText(txtdrinksItem8, "h", 3).newTag
  );

  // Menu item9
  const drinksAnchorItem9 = anchorTagFactory(
    "item-wrapper drinks-item9",
    "#",
    `${txtdrinksItem9}`
  );
  const drinksWrapperItem9 = foodMenuContentItems.appendChild(
    drinksAnchorItem9.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem9,
    drinkFantaOrange,
    wrapText(txtdrinksItem9, "h", 3).newTag
  );

  // Menu item10
  const drinksAnchorItem10 = anchorTagFactory(
    "item-wrapper drinks-item10",
    "#",
    `${txtdrinksItem10}`
  );
  const drinksWrapperItem10 = foodMenuContentItems.appendChild(
    drinksAnchorItem10.newAnchor
  );
  wrapTags(
    "food-content-items",
    drinksWrapperItem10,
    drinkLiptonLemon,
    wrapText(txtdrinksItem10, "h", 3).newTag
  );
}

export { addFoodMenuItemDrinks };
