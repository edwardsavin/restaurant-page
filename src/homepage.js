import HandPizza from "./imgs/hand-holding-pizza.jpg";
import PizzaBites from "./imgs/pizza-bites.jpg";
import IceCream from "./imgs/ice-cream.jpg";
import RestaurantInside from "./imgs/restaurant-inside.jpg";

const content = document.querySelector("#content");

const homeContainer = document.createElement("div");
homeContainer.setAttribute("id", "home-container");

/**
 * Create a new "p" or "h" tag and append the text-container to it
 * Return the newTag
 */
function wrapText(text, tag, hNumber = 1) {
  let newTag;

  if (tag === "p") {
    const paragraph = document.createElement("p");
    newTag = paragraph;
  } else if (tag === "h") {
    const heading = document.createElement(`h${hNumber}`);
    newTag = heading;
  }

  newTag.textContent = text;
  return { newTag };
}

// Wrap existing tags into a new container
function wrapTags(className = undefined, ...elements) {
  const newContainer = document.createElement("div");

  if (className !== undefined) {
    newContainer.setAttribute("class", className);
  }

  const elementArray = elements;

  elementArray.forEach((element) => {
    newContainer.appendChild(element);
  });

  homeContainer.appendChild(newContainer);
}

/**
 * Assign images and text to variables
 * Create individual DOM elements by calling the wrap functions for each variable
 * Append all elements to home container
 */
function addHomeContent() {
  const firstImage = new Image(800, 600);
  firstImage.src = HandPizza;

  const secondImage = new Image(800, 600);
  secondImage.src = IceCream;

  const thirdImage = new Image(800, 600);
  thirdImage.src = PizzaBites;

  const fourthImage = new Image(800, 600);
  fourthImage.src = RestaurantInside;

  const firstHeading = "Heading test1";
  const firstParagraph = "paragraph test1";

  const secondHeading = "Heading test2";
  const secondParagraph = "paragraph test2";

  const thirdHeading = "Heading test 3";
  const thirdParagraph = "paragraph test3";

  const fourthHeading = "Heading test 4";
  const fourthParagraph = "paragraph test4";

  wrapTags("image-container", firstImage);
  wrapTags(
    "text-container",
    wrapText(firstHeading, "h", 1).newTag,
    wrapText(firstParagraph, "p").newTag
  );

  wrapTags("image-container", secondImage);
  wrapTags(
    "text-container",
    wrapText(secondHeading, "h", 1).newTag,
    wrapText(secondParagraph, "p").newTag
  );

  wrapTags("image-container", thirdImage);
  wrapTags(
    "text-container",
    wrapText(thirdHeading, "h", 1).newTag,
    wrapText(thirdParagraph, "p").newTag
  );

  wrapTags("image-container", fourthImage);
  wrapTags(
    "text-container",
    wrapText(fourthHeading, "h", 1).newTag,
    wrapText(fourthParagraph, "p").newTag
  );

  content.appendChild(homeContainer);
}

export { addHomeContent };
