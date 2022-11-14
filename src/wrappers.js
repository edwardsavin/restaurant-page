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
function wrapTags(className = undefined, mainContainer, ...elements) {
  const newContainer = document.createElement("div");

  if (className !== undefined) {
    newContainer.setAttribute("class", className);
  }

  const elementArray = elements;

  elementArray.forEach((element) => {
    newContainer.appendChild(element);
  });

  mainContainer.appendChild(newContainer);
}

// Create new anchor tag with multiple attributes
function anchorTagFactory(className, href, title) {
  const newAnchor = document.createElement("a");
  newAnchor.setAttribute("class", className);
  newAnchor.setAttribute("href", href);
  newAnchor.setAttribute("title", title);

  return { newAnchor };
}

export { wrapText, wrapTags, anchorTagFactory };
