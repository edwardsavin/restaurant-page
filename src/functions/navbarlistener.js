import { wipeContent, populateContent } from "../index";
import { populateFoodMenuContent } from "../pages/foodmenu";

function navigationBarListener(buttonName) {
  buttonName.addEventListener("click", () => {
    wipeContent();
    populateContent(buttonName.id);
  });
}

function foodMenuContentListener(buttonName) {
  buttonName.addEventListener("click", () => {
    populateFoodMenuContent(buttonName.className);
  });
}

export { navigationBarListener, foodMenuContentListener };
