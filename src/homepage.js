import HandPizza from "./imgs/hand-holding-pizza.jpg";
import IceCream from "./imgs/ice-cream.jpg";
import RestaurantInside from "./imgs/restaurant-inside.jpg";
import RestaurantTeam from "./imgs/restaurant-team.jpg";

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
  const firstImage = new Image(800, 500);
  firstImage.src = HandPizza;

  const secondImage = new Image(800, 500);
  secondImage.src = IceCream;

  const thirdImage = new Image(800, 500);
  thirdImage.src = RestaurantInside;

  const fourthImage = new Image(800, 500);
  fourthImage.src = RestaurantTeam;

  const txt1H1 =
    "It's time for you to try the greatest and finest pizza... that is also properly cooked.";
  const txt1P1 =
    "You know it, Edward's has elite fresh, juicy toppings and ingredients that make our delicious tasting pizza.";

  const txt2H1 =
    "People Don't Just Say Ice Cream, they say \"Edward's Ice Cream\"";
  const txt2P1 =
    "Edward's Vegan Ice Cream are the new standard by which all other vegan ice creams are judged against. Many have tried and failed, but there's nothing like the verified, original Edward's Vegan Ice Cream. Now with a new, limited time only, flavour, the \" Vegan Coconut Macadamia \"";
  const txt2P2 =
    "Available at participating Edward's® for a limited time only.";

  const txt3H1 = "We're bringing the joy to your taste buds";
  const txt3P1 =
    "Do you like a properly cooked pizza with elite ingredients? That was rhetorical… of course you do! Edward's is NOW OPEN!";
  const txt3P2 =
    "Find us in Cluj-Napoca, Berlin, Napoli, London, Bucharest, Kyiv, Budapest, Zagreb, Sofia and Warsaw.";

  const txt4H1 = "Real Food. Real Careers.";
  const txt4P1 = "Come and work for Edward's!";
  const txt4P2 =
    "For 23 years we've been serving up our delicious pizzas and have remained devoted to treating our employees in that same spirit that we cook the food: with care and love. You know what you want, and we'll embrace that when you work here. Flexibility. Fun. The feeling that you can just be you.";
  const txt4P3 = "No zero-contracts. No nonsense. Jobs and careers done right.";

  wrapTags("image-container img1", firstImage);
  wrapTags(
    "text-container txt1",
    wrapText(txt1H1, "h", 1).newTag,
    wrapText(txt1P1, "p").newTag
  );

  wrapTags("image-container img2", secondImage);
  wrapTags(
    "text-container txt2",
    wrapText(txt2H1, "h", 1).newTag,
    wrapText(txt2P1, "p").newTag,
    wrapText(txt2P2, "p").newTag
  );

  wrapTags("image-container img3", thirdImage);
  wrapTags(
    "text-container txt3",
    wrapText(txt3H1, "h", 1).newTag,
    wrapText(txt3P1, "p").newTag,
    wrapText(txt3P2, "p").newTag
  );

  wrapTags("image-container img4", fourthImage);
  wrapTags(
    "text-container txt4",
    wrapText(txt4H1, "h", 1).newTag,
    wrapText(txt4P1, "p").newTag,
    wrapText(txt4P2, "p").newTag,
    wrapText(txt4P3, "p").newTag
  );

  content.appendChild(homeContainer);
}

export { addHomeContent };
