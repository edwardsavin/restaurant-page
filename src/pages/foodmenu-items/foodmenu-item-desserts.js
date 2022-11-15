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

  const txtdessertsItem1 = "Vegan Macadamia Ice Cream";

  const txtdessertsItem2 = "Banana Split";

  const txtdessertsItem3 = "Cheesecake";

  const txtdessertsItem4 = "Tiramisu";

  foodMenuContent.appendChild(foodMenuContentItems);

  // Menu item1
  const dessertsAnchorItem1 = anchorTagFactory(
    "item-wrapper desserts-item1",
    "#",
    `${txtdessertsItem1}`
  );
  const dessertsWrapperItem1 = foodMenuContentItems.appendChild(
    dessertsAnchorItem1.newAnchor
  );
  wrapTags(
    "food-content-items",
    dessertsWrapperItem1,
    dessertMacadamiaIceCream,
    wrapText(txtdessertsItem1, "h", 3).newTag
  );

  // Menu item2
  const dessertsAnchorItem2 = anchorTagFactory(
    "item-wrapper desserts-item2",
    "#",
    `${txtdessertsItem2}`
  );
  const dessertsWrapperItem2 = foodMenuContentItems.appendChild(
    dessertsAnchorItem2.newAnchor
  );
  wrapTags(
    "food-content-items",
    dessertsWrapperItem2,
    dessertBananaSplit,
    wrapText(txtdessertsItem2, "h", 3).newTag
  );

  // Menu item3
  const dessertsAnchorItem3 = anchorTagFactory(
    "item-wrapper desserts-item3",
    "#",
    `${txtdessertsItem3}`
  );
  const dessertsWrapperItem3 = foodMenuContentItems.appendChild(
    dessertsAnchorItem3.newAnchor
  );
  wrapTags(
    "food-content-items",
    dessertsWrapperItem3,
    dessertCheeseCake,
    wrapText(txtdessertsItem3, "h", 3).newTag
  );

  // Menu item4
  const dessertsAnchorItem4 = anchorTagFactory(
    "item-wrapper desserts-item4",
    "#",
    `${txtdessertsItem4}`
  );
  const dessertsWrapperItem4 = foodMenuContentItems.appendChild(
    dessertsAnchorItem4.newAnchor
  );
  wrapTags(
    "food-content-items",
    dessertsWrapperItem4,
    dessertTiramisu,
    wrapText(txtdessertsItem4, "h", 3).newTag
  );
}

export { addFoodMenuItemDeserts };
