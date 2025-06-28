// ...existing code...

// Hide preloader when page fully loaded (10 seconds)
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => (preloader.style.display = "none"), 500); // opacity transition
    }, 3000); // 3 seconds
  }
});

// ...existing code...
// Infinity typing effect for multiple phrases
const phrases = [
  "I'm a Frontend developer",
  "I'm a Microshoft Office Expert",
  "I'm a Web Designer",
  "I'm a Data Entry Specialist",
  "I'm a Mobile App Developer",
  "I'm a Software Engineer",
];
const typingTarget = document.getElementById("typing-effect");
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeInfinity() {
  const currentPhrase = phrases[phraseIdx];
  if (!isDeleting) {
    typingTarget.innerHTML = currentPhrase.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === currentPhrase.length) {
      setTimeout(() => {
        isDeleting = true;
        typeInfinity();
      }, 1200);
      return;
    }
  } else {
    typingTarget.innerHTML = currentPhrase.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeInfinity, isDeleting ? 50 : 100);
}
window.addEventListener("DOMContentLoaded", typeInfinity);

// Copy link functionality
document.querySelector(".copy-link").onclick = function () {
  navigator.clipboard.writeText(window.location.href);
  this.innerHTML = '<i class="fas fa-check"></i>';
  setTimeout(() => {
    this.innerHTML = '<i class="fas fa-link"></i>';
  }, 1200);
};

//remove share button affter 5 seconds
const fabMain = document.getElementById("fabMain");
const fabActions = document.getElementById("fabActions");
let fabTimeout;

fabMain.addEventListener("click", () => {
  fabActions.style.opacity = "1";
  fabActions.style.pointerEvents = "auto";
  fabActions.style.transform = "translateY(0) scale(1)";
  clearTimeout(fabTimeout);
  fabTimeout = setTimeout(() => {
    fabActions.style.opacity = "0";
    fabActions.style.pointerEvents = "none";
    fabActions.style.transform = "translateX(70px) scale(1)";
  }, 5000); // 5 seconds
});
//===========skill card animation============
document.querySelectorAll(".skill-card").forEach((card, i) => {
  setTimeout(() => {
    card.style.opacity = 1;
  }, i * 100);
});

document.querySelectorAll(".progress-inner").forEach((bar, i) => {
  const width = bar.style.width;
  bar.style.width = "0";
  setTimeout(() => {
    bar.style.width = width;
  }, i * 200);
});

/*mail*/
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbwOHE0jsxTCNYwsRdHy97EWeyjbKLPCE9UMkXY9qzgojFzCr1c75naRQQfU1615f_mlbw/exec",
    {
      //web app URL for form submission
      method: "POST",
      body: formData,
    }
  )
    .then((response) => {
      if (response.ok) {
        alert("✅ Thank you for your message! Successfully sent.");
        form.reset();
      } else {
        alert("🚫 There was a problem with your submission. Please Try again");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("🚫 Something is wrong with your submission. Pleace Try again");
    });
});

//scroll animation
const boxes = document.querySelectorAll(".box");

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.85;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("visible");
    } else {
      box.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", checkBoxes);
window.addEventListener("load", checkBoxes);

//whatsApp Massage
const contact_headings = document.querySelectorAll(".heading");
const QRs = document.querySelectorAll(".qrcode");
const whatsApp = document.getElementById("whatsApp");

whatsApp.addEventListener("click", () => {
  contact_headings.forEach((h) => {
    h.style.opacity = "0";
  });
  QRs.forEach((q) => {
    q.style.display = "block";
    setTimeout(() => {
      q.classList.add("visible");
    }, 10);
  });

  // 10 second later, reset everything
  setTimeout(() => {
    contact_headings.forEach((h) => {
      h.style.opacity = "1";
    });
    QRs.forEach((q) => {
      q.classList.remove("visible");
      setTimeout(() => {
        q.style.display = "none";
      }, 500); // wait for fade-out transition
    });
  }, 10000); // 10 seconds
});

// Close nav-menu on link click (for mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle && navToggle.checked) navToggle.checked = false;
  });
});