import { wrapTags, wrapText } from "../functions/wrappers";

const content = document.querySelector("#content");

const findJobsContainer = document.createElement("div");
findJobsContainer.setAttribute("id", "find-jobs-container");

/**
 * Assign images and text to variables
 * Create individual DOM elements by calling the wrap functions for each variable
 * Append all elements to home container
 */
function addFindJobsContent() {
  const footer = document.querySelector(".footer");
  footer.classList.remove("footer-fixed");

  const findJobsMainElement = document.createElement("main");
  findJobsMainElement.setAttribute("class", "find-jobs-main");
  findJobsContainer.appendChild(findJobsMainElement);

  const txt1H1 = "REAL FOOD.";
  const txt1H2 = "REAL PEOPLE.";
  const txt1P1 =
    "Here at Edward's, we understand that everyone has their unique cravings. For that just-right pizza. For that great new job. You know what you want, and we'll embrace that when you work here. Flexibility. Fun. The feeling that you can just be you.";

  const txt2H1 = "READY TO MAKE THE JUMP?";
  const txt2P1 = "You can find much more by contacting us via:";
  const txt2P2 = "📞 Phone number: +40 123 456 789";
  const txt2P3 = "📧 Email: contact@edwardcs.com";

  // Section 1
  const findJobsSection1 = document.createElement("section");
  findJobsSection1.setAttribute("class", "find-jobs-section-intro");
  findJobsMainElement.appendChild(findJobsSection1);

  const findJobsSection1Wrapper = document.createElement("div");
  findJobsSection1Wrapper.setAttribute(
    "class",
    "find-jobs-section-intro-wrapper"
  );
  findJobsSection1.appendChild(findJobsSection1Wrapper);

  const staffMember = document.createElement("div");
  staffMember.setAttribute("class", "staff-member");
  findJobsSection1Wrapper.appendChild(staffMember);

  wrapTags(
    "text-container staff-text",
    findJobsSection1Wrapper,
    wrapText(txt1H1, "h", 1).newTag,
    wrapText(txt1H2, "h", 1).newTag,
    wrapText(txt1P1, "p").newTag
  );

  // Section 2
  const findJobsSection2 = document.createElement("section");
  findJobsSection2.setAttribute("class", "find-jobs-section-contact");
  findJobsMainElement.appendChild(findJobsSection2);

  wrapTags(
    "text-container contact-text",
    findJobsSection2,
    wrapText(txt2H1, "h", 1).newTag,
    wrapText(txt2P1, "p").newTag,
    wrapText(txt2P2, "p").newTag,
    wrapText(txt2P3, "p").newTag
  );

  content.appendChild(findJobsContainer);
}

export { addFindJobsContent, findJobsContainer };
