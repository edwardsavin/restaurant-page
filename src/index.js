import "./style.css";
import { navigationBarListener } from "./navbarlistener";
import { addHomeContent, homeContainer } from "./homepage";
import { addFoodMenuContent, foodMenuContainer } from "./foodmenu";

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
    // TODO: remove alert and add find jobs page content
    alert("Find jobs page not ready yet, redirecting to homepage...");
    addHomeContent();
  }
}

navigationBarListener(navigationHomeButton);
navigationBarListener(navigationFoodMenuButton);
navigationBarListener(navigationJobsButton);

addHomeContent();

export { wipeContent, populateContent };
