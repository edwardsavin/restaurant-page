import "./style.css";
import { navigationBarListener } from "./functions/navbarlistener";
import { addHomeContent, homeContainer } from "./pages/homepage";
import { addFoodMenuContent, foodMenuContainer } from "./pages/foodmenu";
import { addFindJobsContent, findJobsContainer } from "./pages/findjobs";

const content = document.querySelector("#content");

const navigationHomeButton = document.querySelector("#navigation-home");
const navigationFoodMenuButton = document.querySelector(
  "#navigation-food-menu"
);
const navigationJobsButton = document.querySelector("#navigation-jobs");

function wipeContent() {
  while (homeContainer.firstChild) {
    homeContainer.removeChild(homeContainer.firstChild);
  }

  while (foodMenuContainer.firstChild) {
    foodMenuContainer.removeChild(foodMenuContainer.firstChild);
  }

  while (findJobsContainer.firstChild) {
    findJobsContainer.removeChild(findJobsContainer.firstChild);
  }

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function populateContent(buttonId) {
  if (buttonId === navigationHomeButton.id) {
    addHomeContent();
  } else if (buttonId === navigationFoodMenuButton.id) {
    addFoodMenuContent();
  } else if (buttonId === navigationJobsButton.id) {
    addFindJobsContent();
  }
}

navigationBarListener(navigationHomeButton);
navigationBarListener(navigationFoodMenuButton);
navigationBarListener(navigationJobsButton);

addHomeContent();

export { wipeContent, populateContent };
