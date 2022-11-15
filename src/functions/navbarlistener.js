import { wipeContent, populateContent } from "../index";

function navigationBarListener(buttonName) {
  buttonName.addEventListener("click", () => {
    wipeContent();
    populateContent(buttonName.id);
  });
}

export { navigationBarListener };
