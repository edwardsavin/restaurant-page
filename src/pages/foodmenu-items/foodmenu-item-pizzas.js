import { addFoodMenuContent } from "../foodmenu";
import { wrapTags, wrapText, anchorTagFactory } from "../../functions/wrappers";
import PizzaMargherita from "../../imgs/pizza-margherita.png";
import PizzaPepperoni from "../../imgs/pizza-pepperoni.png";
import PizzaCapricciosa from "../../imgs/pizza-capricciosa.png";
import PizzaProsciuttoEFunghi from "../../imgs/pizza-prosciutto-e-funghi.png";
import PizzaCalzone from "../../imgs/pizza-calzone.png";

function addFoodMenuItemPizzas() {
  addFoodMenuContent();

  const foodMenuHeader = document.querySelector(".food-menu-header");
  const foodMenuHeaderText = foodMenuHeader.firstChild;
  foodMenuHeaderText.textContent = "Pizzas";

  const foodMenuContent = document.querySelector(".food-menu-content");
  foodMenuContent.removeChild(foodMenuContent.firstChild);

  const foodMenuContentItems = document.createElement("div");
  foodMenuContentItems.setAttribute("class", "food-menu-content-items");

  const pizzaMargherita = new Image(273, 200);
  pizzaMargherita.src = PizzaMargherita;

  const pizzaPepperoni = new Image(273, 200);
  pizzaPepperoni.src = PizzaPepperoni;

  const pizzaCapricciosa = new Image(273, 200);
  pizzaCapricciosa.src = PizzaCapricciosa;

  const pizzaProsciuttoEFunghi = new Image(273, 200);
  pizzaProsciuttoEFunghi.src = PizzaProsciuttoEFunghi;

  const pizzaCalzone = new Image(273, 200);
  pizzaCalzone.src = PizzaCalzone;

  const txtPizzasItem1 = "Pizza Margherita";

  const txtPizzasItem2 = "Pizza Pepperoni";

  const txtPizzasItem3 = "Pizza Capricciosa";

  const txtPizzasItem4 = "Pizza Prosciutto e Funghi";

  const txtPizzasItem5 = "Pizza Calzone";

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
    pizzaMargherita,
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
    pizzaPepperoni,
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
    pizzaCapricciosa,
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
    pizzaProsciuttoEFunghi,
    wrapText(txtPizzasItem4, "h", 3).newTag
  );

  // Menu item5
  const pizzasAnchorItem5 = anchorTagFactory(
    "item-wrapper pizzas-item5",
    "#",
    `${txtPizzasItem5}`
  );
  const pizzasWrapperItem5 = foodMenuContentItems.appendChild(
    pizzasAnchorItem5.newAnchor
  );
  wrapTags(
    "food-content-items",
    pizzasWrapperItem5,
    pizzaCalzone,
    wrapText(txtPizzasItem5, "h", 3).newTag
  );
}

export { addFoodMenuItemPizzas };
