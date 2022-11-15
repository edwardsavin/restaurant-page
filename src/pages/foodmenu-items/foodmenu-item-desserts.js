import { addFoodMenuContent } from "../foodmenu";
import { wrapTags, wrapText, anchorTagFactory } from "../../functions/wrappers";
import DessertMacadamiaIceCream from "../../imgs/desserts-macadamia.png";
import DessertBananaSplit from "../../imgs/desserts-banana-split.png";
import DessertCheeseCake from "../../imgs/desserts-cheesecake.png";
import DessertTiramisu from "../../imgs/desserts-tiramisu.png";

function addFoodMenuItemDeserts(withFoodMenuContent = true) {
  if (withFoodMenuContent === true) {
    addFoodMenuContent();
  }

  const foodMenuHeader = document.querySelector(".food-menu-header");
  const foodMenuHeaderText = foodMenuHeader.firstChild;
  foodMenuHeaderText.textContent = "Deserts";

  const foodMenuContent = document.querySelector(".food-menu-content");
  foodMenuContent.removeChild(foodMenuContent.firstChild);

  const foodMenuContentItems = document.createElement("div");
  foodMenuContentItems.setAttribute("class", "food-menu-content-items");

  const dessertMacadamiaIceCream = new Image(273, 200);
  dessertMacadamiaIceCream.src = DessertMacadamiaIceCream;

  const dessertBananaSplit = new Image(273, 200);
  dessertBananaSplit.src = DessertBananaSplit;

  const dessertCheeseCake = new Image(273, 200);
  dessertCheeseCake.src = DessertCheeseCake;

  const dessertTiramisu = new Image(273, 200);
  dessertTiramisu.src = DessertTiramisu;

  const txtPizzasItem1 = "Vegan Macadamia Ice Cream";

  const txtPizzasItem2 = "Banana Split";

  const txtPizzasItem3 = "Cheesecake";

  const txtPizzasItem4 = "Tiramisu";

  foodMenuContent.appendChild(foodMenuContentItems);

  // Menu item1
  const pizzasAnchorItem1 = anchorTagFactory(
    "item-wrapper pizzas-item1",
    "#",
    `${txtPizzasItem1}`
  );
  const pizzasWrapperItem1 = foodMenuContentItems.appendChild(
    pizzasAnchorItem1.newAnchor
  );
  wrapTags(
    "food-content-items",
    pizzasWrapperItem1,
    dessertMacadamiaIceCream,
    wrapText(txtPizzasItem1, "h", 3).newTag
  );

  // Menu item2
  const pizzasAnchorItem2 = anchorTagFactory(
    "item-wrapper pizzas-item2",
    "#",
    `${txtPizzasItem2}`
  );
  const pizzasWrapperItem2 = foodMenuContentItems.appendChild(
    pizzasAnchorItem2.newAnchor
  );
  wrapTags(
    "food-content-items",
    pizzasWrapperItem2,
    dessertBananaSplit,
    wrapText(txtPizzasItem2, "h", 3).newTag
  );

  // Menu item3
  const pizzasAnchorItem3 = anchorTagFactory(
    "item-wrapper pizzas-item3",
    "#",
    `${txtPizzasItem3}`
  );
  const pizzasWrapperItem3 = foodMenuContentItems.appendChild(
    pizzasAnchorItem3.newAnchor
  );
  wrapTags(
    "food-content-items",
    pizzasWrapperItem3,
    dessertCheeseCake,
    wrapText(txtPizzasItem3, "h", 3).newTag
  );

  // Menu item4
  const pizzasAnchorItem4 = anchorTagFactory(
    "item-wrapper pizzas-item4",
    "#",
    `${txtPizzasItem4}`
  );
  const pizzasWrapperItem4 = foodMenuContentItems.appendChild(
    pizzasAnchorItem4.newAnchor
  );
  wrapTags(
    "food-content-items",
    pizzasWrapperItem4,
    dessertTiramisu,
    wrapText(txtPizzasItem4, "h", 3).newTag
  );
}

export { addFoodMenuItemDeserts };
