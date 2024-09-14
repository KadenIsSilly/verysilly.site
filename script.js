// A nice message to the inspect elementers
console.log(
    "%c Hello person. Please don't make fun of my code",
    "font-size: 18px;" +
    getComputedStyle(document.body).getPropertyValue("--accent")
);
console.log(
    "%c 🧃🍟",
    "font-size: 13px; color: #eb0400;" +
    getComputedStyle(document.body).getPropertyValue("--accent")
);

//Smooth scrolling for different sections
document.querySelectorAll('.header-links .section-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default link behavior
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
        
            // Scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
        });
    });
});

//Time Updater
  function updateTime() {
    const now = new Date();
    const options = { timeZone: 'Europe/London', hour12: false };
    const timeString = now.toLocaleTimeString('en-GB', options);
    document.getElementById('time-count').textContent = timeString;
  }
  
    updateTime();
    setInterval(updateTime, 1000);
  
// Age Updater
  function calculateAge(birthDate) {
    var today = new Date();
    var dob = new Date(birthDate);
    var age = today.getFullYear() - dob.getFullYear();
  
    if (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate())) {
        age--;
      }
  
    return age;
  }
  
  function updateAge() {
    var ageCountElement = document.getElementById('age-count');
    var age = calculateAge("2007-04-16");
    ageCountElement.textContent = age;
  }
  
    updateAge();
    setInterval(updateAge, 24 * 60 * 60 * 1000);

        // List of people (URLs, Image paths, and alt text)
        const people = [
          { link: "https://twitch.tv/ameskie_", img: "/assets/people/ameskie-logo.png", alt: "Ameskie's Logo" },
          { link: "https://ausklive.carrd.co", img: "/assets/people/ausk-logo.png", alt: "Ausk's Logo" },
          { link: "https://twitch.tv/cranstoon", img: "/assets/people/cranstoon-logo.png", alt: "Cranstoon's Logo" },
          { link: "https://callxmexdino.com", img: "/assets/people/dino-logo.png", alt: "Dino's Logo" },
          { link: "https://www.falinere.com", img: "https://avatars.githubusercontent.com/u/52897412?v=4", alt: "Falinere's Logo" },
          { link: "https://www.fernmakesgames.com", img: "https://avatars.githubusercontent.com/u/12193650?v=4", alt: "Fern's Logo" },
          { link: "https://gruggy.carrd.co", img: "/assets/people/grugled-logo.png", alt: "Grug's Logo" },
          { link: "https://bandorax.com", img: "/assets/people/itsbando-logo.png", alt: "Bando's Logo" },
          { link: "https://twitch.tv/itsheax", img: "/assets/people/itsheax-logo.png", alt: "Heax's Logo" },
          { link: "https://jacobstreams.com", img: "/assets/people/jacob-logo.png", alt: "Jacob's Logo" },
          { link: "https://twitch.tv/kiran_leeuw", img: "/assets/people/kiran-logo.png", alt: "Kiran's Logo" },
          { link: "https://twitch.tv/Lukey", img: "/assets/people/lukey-logo.png", alt: "Lukey's Logo" },
          { link: "https://twitch.tv/MC31415926535897", img: "/assets/people/mc314-logo.png", alt: "Pi's Logo" },
          { link: "https://mdxcai.com", img: "/assets/people/mdxcai-logo.png", alt: "mdxcai's Logo" },
          { link: "https://www.twitch.tv/mostlymaxi", img: "https://avatars.githubusercontent.com/u/31300687?v=4", alt: "Maxi's Logo" },
          { link: "https://nyxsomnius.com", img: "/assets/people/nyx-logo.png", alt: "Nyx's Logo" },
          { link: "https://practicalmedia.io", img: "https://avatars.githubusercontent.com/u/73863114?v=4", alt: "NPC's Logo" },
          { link: "https://khcrysalis.dev", img: "https://avatars.githubusercontent.com/u/97859147?v=4", alt: "Samara's Logo" },
          { link: "https://setolyxcreative.com", img: "/assets/people/setolyx-logo.png", alt: "Setolyx's Logo" },
          { link: "https://www.shortestpersonever.xyz/", img: "/assets/people/tinycaity-logo.png", alt: "Caity's Logo" }
      ];
  
      // Shuffle array function
      function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
      }
  
      // Shuffle the people array
      shuffleArray(people);
  
      // Select the first 5 random people
      const randomPeople = people.slice(0, 5);
  
      // Get the container to insert the links
      const container = document.getElementById('random-links');
  
      // Generate the links dynamically
      randomPeople.forEach(person => {
          const a = document.createElement('a');
          a.href = person.link;
          a.target = '_blank';
  
          const img = document.createElement('img');
          img.src = person.img;
          img.alt = person.alt;
          img.draggable = false;
  
          a.appendChild(img);
          container.appendChild(a);
      });
