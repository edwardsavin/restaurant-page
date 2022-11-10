import HandPizza from "./imgs/hand-holding-pizza.jpg";
import PizzaBites from "./imgs/pizza-bites.jpg";
import IceCream from "./imgs/ice-cream.jpg";
import RestaurantInside from "./imgs/restaurant-inside.jpg";

const content = document.querySelector("#content");

const homeContainer = document.createElement("div");
homeContainer.setAttribute("id", "home-container");

/**
 * Wrap image into a new "image-container"
 * Append the new container to homeContainer
 */
function wrapImage(image) {
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "image-container");

  imageContainer.appendChild(image);
  homeContainer.appendChild(imageContainer);
}

/**
 * Wrap text into a new "text-container"
 * Create a new "p" or "h" tag and append the text-container to it
 * Append the new tag to homeContainer
 */
function wrapText(text, tag, hNumber = 1) {
  const textContainer = document.createElement("div");
  textContainer.setAttribute("class", "text-container");
  let newTag;

  if (tag === "p") {
    const paragraph = document.createElement("p");
    newTag = paragraph;
  } else if (tag === "h") {
    const heading = document.createElement(`h${hNumber}`);
    newTag = heading;
  }

  textContainer.textContent = text;

  newTag.appendChild(textContainer);
  homeContainer.appendChild(newTag);
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

  wrapImage(firstImage);
  wrapText(firstHeading, "h", 1);
  wrapText(firstParagraph, "p");

  wrapImage(secondImage);
  wrapText(secondHeading, "h", 1);
  wrapText(secondParagraph, "p");

  wrapImage(thirdImage);
  wrapText(thirdHeading, "h", 1);
  wrapText(thirdParagraph, "p");

  wrapImage(fourthImage);
  wrapText(fourthHeading, "h", 1);
  wrapText(fourthParagraph, "p");

  content.appendChild(homeContainer);
}

export { addHomeContent };
