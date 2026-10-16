import pic1   from "../images/Kokokaribidesigns.webp";
import pic2   from "../images/weather_forcast_app.webp";
import pic3   from "../images/todo_list_app.webp";
import pic4   from "../images/restaurant_webpage.webp";
import pic5   from "../images/868Krew.webp";
import pic6   from "../images/SimpleCv.webp";

export const projects = [
  {
    title: "Jewelry E-Commerce Site",
    image: pic1,
    description: "A e-commerce built with wordpress using woocommerce plugin for a local handcrafted jewelry store in Trinidad and Tobago",
    githubUrl: "https://kokokaribidesigns.com/",
    liveUrl: "https://kokokaribidesigns.com/"
  },

  {
    title: "Apparel E-commerce Site",
    image: pic5,
    description: "A frontend template built in React for a modern apparel store.",
    githubUrl: "https://github.com/Septerm/top-shopping-cart",
    liveUrl: "https://868krew.netlify.app/"
  },

  {
    title: "Weather Forcast App",
    image: pic2,
    description: "A simple Weather forcasting application that takes a location as and imput and calls a public weather API, it was built using html/css and javascript for DOM manipulation.",
    githubUrl: "https://github.com/Septerm/weather-app",
    liveUrl: "https://septerm.github.io/weather-app/"
  },

  {
    title: "Todo List App",
    image: pic3,
    description: "A simple todo list app that allows you to keep track of your current task and also split them up into different projects, the data is stored in the browser's local storage, it was built using html/css and javascript for for DOM manipulation. ",
    githubUrl: "https://github.com/Septerm/todo-list",
    liveUrl: "https://septerm.github.io/todo-list/"
  },

  {
    title: "Restaurant Page",
    image: pic4,
    description: "A simple restaurant webpage that uses tab browsing to switch between the home, menu and about page, it also uses javascript mainly to render the entire website and webpackage to build page.",
    githubUrl: "https://github.com/Septerm/restaurant-page",
    liveUrl: "https://septerm.github.io/restaurant-page/"
  },



  {
    title: "CV Generation App",
    image: pic6,
    description: "A CV generation application that collects data about the user and then also allows the user to both preview and then print the genrated CV based on the users specifications built using React.",
    githubUrl: "https://github.com/Septerm/top-cv-application",
    liveUrl: "https://septerm-top-cv-application.netlify.app/"
  },

  
];



export function projectRender(projects) {
  const main = document.querySelector(".container");
  
  const section = document.createElement("section");
  section.classList.add("my-work");

  const header = document.createElement("h2");
  header.textContent = "My Work";
  section.appendChild(header);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  projects.forEach(project => {
    // Card Wrapper
    const card = document.createElement("div");
    card.classList.add("card");

    // Image Section
    const imgCard = document.createElement("div");
    imgCard.classList.add("img-card");

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title || "Project Screenshot";
    imgCard.appendChild(img);

    // Text Section
    const textCard = document.createElement("div");
    textCard.classList.add("text-card");

    const textHeaderCard = document.createElement("div");
    textHeaderCard.classList.add("text-header-card");

    const h3 = document.createElement("h3");
    h3.textContent = project.title;

    const iconContainer = document.createElement("div");

    // GitHub Link
    const githubLink = document.createElement("a");
    githubLink.setAttribute('aria-label', 'Vist the project github page')
    githubLink.href = project.githubUrl || "#";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("devicon-github-original");
    githubIcon.setAttribute('aria-hidden', 'true')
    githubLink.appendChild(githubIcon);

    // Live Demo Link
    const demoLink = document.createElement("a");
    demoLink.href = project.liveUrl || "#";
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";

    const demoIcon = document.createElement("span");
    demoIcon.classList.add("material-symbols-outlined");
    demoIcon.textContent = "open_in_new";
    demoLink.appendChild(demoIcon);

    // Assemble Icons and Header
    iconContainer.appendChild(githubLink);
    iconContainer.appendChild(demoLink);
    textHeaderCard.appendChild(h3);
    textHeaderCard.appendChild(iconContainer);

    // Description
    const p = document.createElement("p");
    p.textContent = project.description;

    // Assemble Text Card
    textCard.appendChild(textHeaderCard);
    textCard.appendChild(p);

    // Assemble Full Card
    card.appendChild(imgCard);
    card.appendChild(textCard);

    cardContainer.appendChild(card);
  });

  section.appendChild(cardContainer);
  main.appendChild(section);
}