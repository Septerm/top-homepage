import pic1   from "../images/Professional_Profile_Picture.png";

export const projects = [
  {
    title: "Battleship Game",
    image: pic1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente tempora nihil quisquam et. Earum aliquam sunt, ullam omnis hic harum, repudiandae laborum impedit iste molestias beatae veritatis! Aperiam, dignissimos?",
    githubUrl: "https://github.com/yourusername/battleship",
    liveUrl: "https://yourusername.github.io/battleship"
  },

  {
    title: "Battleship Game",
    image: pic1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente tempora nihil quisquam et. Earum aliquam sunt, ullam omnis hic harum, repudiandae laborum impedit iste molestias beatae veritatis! Aperiam, dignissimos?",
    githubUrl: "https://github.com/yourusername/battleship",
    liveUrl: "https://yourusername.github.io/battleship"
  },

  {
    title: "Battleship Game",
    image: pic1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente tempora nihil quisquam et. Earum aliquam sunt, ullam omnis hic harum, repudiandae laborum impedit iste molestias beatae veritatis! Aperiam, dignissimos?",
    githubUrl: "https://github.com/yourusername/battleship",
    liveUrl: "https://yourusername.github.io/battleship"
  },

  {
    title: "Battleship Game",
    image: pic1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente tempora nihil quisquam et. Earum aliquam sunt, ullam omnis hic harum, repudiandae laborum impedit iste molestias beatae veritatis! Aperiam, dignissimos?",
    githubUrl: "https://github.com/yourusername/battleship",
    liveUrl: "https://yourusername.github.io/battleship"
  },

  {
    title: "Battleship Game",
    image: pic1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente tempora nihil quisquam et. Earum aliquam sunt, ullam omnis hic harum, repudiandae laborum impedit iste molestias beatae veritatis! Aperiam, dignissimos?",
    githubUrl: "https://github.com/yourusername/battleship",
    liveUrl: "https://yourusername.github.io/battleship"
  },

  {
    title: "Battleship Game",
    image: pic1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente tempora nihil quisquam et. Earum aliquam sunt, ullam omnis hic harum, repudiandae laborum impedit iste molestias beatae veritatis! Aperiam, dignissimos?",
    githubUrl: "https://github.com/yourusername/battleship",
    liveUrl: "https://yourusername.github.io/battleship"
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
    githubLink.href = project.githubUrl || "#";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("devicon-github-original");
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