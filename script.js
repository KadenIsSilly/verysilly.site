//Smooth scrolling
document.querySelectorAll('header .section-jump[data-target]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
});

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

// Technology Passion Updater
function calculateTechPassion(startDate) {
    var today = new Date();
    var techStart = new Date(startDate);
    var years = today.getFullYear() - techStart.getFullYear();
    if (today < new Date(today.getFullYear(), techStart.getMonth(), techStart.getDate())) {
        years--;
    }
    return years;
}

function updateTechPassion() {
    var techPassionElement = document.getElementById('passion-last');
    var passionYears = calculateTechPassion("2012-12-25");
    techPassionElement.textContent = passionYears;
}

updateTechPassion();
setInterval(updateTechPassion, 24 * 60 * 60 * 1000);

// Email Copy to Clipboard
  const button = document.getElementById("email-copy");

  button.addEventListener("click", () => {
    const text = button.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
      const original = button.textContent;
      button.textContent = "copied!";
      setTimeout(() => {
        button.textContent = original;
      }, 1500);
    });
  });