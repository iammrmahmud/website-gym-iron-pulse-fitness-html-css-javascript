/*
  IronPulse Fitness Final Project
  Author: Mahmudul Hasan
  Date: May 16, 2026
  CST 2309 | Gym Website
  External JavaScript file
  --------------------------------  
  This file includes:
      1. Mobile hamburger menu
      2. Switch theme button
      3. Countdown promotion clock 
      4. Membership form validation
      5. Workout of the Day generator
      6. Class image slideshow
      7. Hero video volume 30% on page load
      
*/

"use strict";

/* -----------------------------
   1. Mobile hamburger menu
------------------------------ */
const menuButton = document.getElementById("menuToggle");  
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");

    // This updates screen reader information when the menu opens or closes.
    const menuIsOpen = navLinks.classList.contains("show-menu");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
  });
}

/* -----------------------------
   2. Light and dark theme switch
   This keeps the selected theme same on all pages.
------------------------------ */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("selectedTheme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}


if (themeToggle) {
  if (document.body.classList.contains("light-theme")) {
    themeToggle.textContent = "Dark Theme";
  } else {
    themeToggle.textContent = "Light Theme";
  }

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      localStorage.setItem("selectedTheme", "light");
      themeToggle.textContent = "Dark Theme";
    } else {
      localStorage.setItem("selectedTheme", "dark");
      themeToggle.textContent = "Light Theme";
    }
  });
}
/* -----------------------------
   3. Countdown promotion clock
------------------------------ */
const countdownText = document.getElementById("countdownText");

function updateCountdown() {
  if (!countdownText) {
    return;
  }

  // This promotion date is fictional till June 1, 2026.
  const dealEndDate = new Date("June 01, 2026 23:59:59").getTime();
  const now = new Date().getTime();
  const distance = dealEndDate - now;

  if (distance <= 0) {
    countdownText.textContent = "Spring Fitness Deal has ended.";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownText.textContent =
    " | Spring Fitness Deal Ends In: " +
    days + " Days : " +
    hours + " Hours : " +
    minutes + " Minutes : " +
    seconds + " Seconds";
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* -----------------------------
   4. Membership form validation
------------------------------ */
const memberForm = document.getElementById("memberForm");
const formMessage = document.getElementById("formMessage");

function showFormMessages(messages, type) {
  if (!formMessage) {
    return;
  }

  formMessage.className = "form-message " + type;

  // Loop used to print every validation error on the page.
  let output = "";
  for (let i = 0; i < messages.length; i++) {
    output += "<p>• " + messages[i] + "</p>";
  }

  formMessage.innerHTML = output;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhone(phone) {
  // Accepts 123-456-7890 or 1234567890.
  const phonePattern = /^(\d{3}-\d{3}-\d{4}|\d{10})$/;
  return phonePattern.test(phone);
}

function validateMembershipForm(event) {
  event.preventDefault();

  // Variables store form values.
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = document.getElementById("age").value.trim();
  const membershipType = document.getElementById("membershipType").value;
  const workoutTime = document.getElementById("workoutTime").value;
  const fitnessGoals = document.getElementById("fitnessGoals").value.trim();
  const emergencyPhone = document.getElementById("emergencyPhone").value.trim();

  // Array stores all error messages before showing them to the user.
  const errors = [];

  // Array stores fields that must not be empty. The loop checks each one.
  const requiredFields = [
    { value: fullName, name: "Full Name" },
    { value: email, name: "Email Address" },
    { value: phone, name: "Phone Number" },
    { value: age, name: "Age" },
    { value: membershipType, name: "Membership Type" },
    { value: workoutTime, name: "Preferred Workout Time" },
    { value: fitnessGoals, name: "Fitness Goals" },
    { value: emergencyPhone, name: "Emergency Contact Number" }
  ];

  for (let i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].value === "") {
      errors.push(requiredFields[i].name + " is required.");
    }
  }

  // More selection statements for specific validation checks.
  if (email !== "" && !isValidEmail(email)) {
    errors.push("Email must be in a valid format like name@example.com.");
  }

  if (phone !== "" && !isValidPhone(phone)) {
    errors.push("Phone number must be 10 digits or formatted like 123-456-7890.");
  }

  if (emergencyPhone !== "" && !isValidPhone(emergencyPhone)) {
    errors.push("Emergency contact number must be 10 digits or formatted like 123-456-7890.");
  }

  const ageNumber = Number(age);
  if (age !== "" && (isNaN(ageNumber) || ageNumber < 13 || ageNumber > 80)) {
    errors.push("Age must be a number between 13 and 80.");
  }

  // Switch statement demonstrates another selection statement.
  switch (membershipType) {
    case "Basic":
    case "Standard":
    case "Premium":
    case "Student Plan":
    case "":
      break;
    default:
      errors.push("Please select a valid membership type.");
  }

  if (errors.length > 0) {
    showFormMessages(errors, "error");
  } else {
    showFormMessages(["Thank you, " + fullName + ". Your membership registration was submitted successfully."], "success");
    memberForm.reset();
  }
}

if (memberForm) {
  memberForm.addEventListener("submit", validateMembershipForm);
}

/* -----------------------------
   5. Workout of the Day generator
------------------------------ */
const workoutButton = document.getElementById("workoutButton");
const workoutResult = document.getElementById("workoutResult");

const workouts = [
  "20 push-ups, 25 squats, 30-second plank, and 10 burpees.",
  "15 minutes treadmill walk, 3 sets of lunges, and 3 sets of shoulder presses.",
  "10 dumbbell rows each side, 20 mountain climbers, and 12 jump squats.",
  "5-minute warm-up, 4 rounds of boxing punches, and 10 minutes cycling.",
  "30 minutes yoga flow with deep stretching and controlled breathing.",
  "3 sets of deadlifts, 3 sets of chest press, and 15 minutes cardio cooldown."
];

if (workoutButton && workoutResult) {
  workoutButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * workouts.length);
    workoutResult.textContent = "Today's Workout: " + workouts[randomIndex];
  });
}

/* -----------------------------
   6. Class image slideshow
------------------------------ */
const slideImage = document.getElementById("slideImage");
const slideCaption = document.getElementById("slideCaption");
const nextSlide = document.getElementById("nextSlide");
const prevSlide = document.getElementById("prevSlide");
const slideDots = document.getElementById("slideDots");

const slides = [
  { src: "images/slideshow-1.jpg", caption: "Strength Training Focus" },
  { src: "images/slideshow-2.jpg", caption: "Dumbbell Conditioning" },
  { src: "images/slideshow-3.jpg", caption: "Group Strength Class" },
  { src: "images/slideshow-4.jpg", caption: "IronPulse Equipment Area" }
];

let currentSlide = 0;

function createDots() {
  if (!slideDots) {
    return;
  }

  slideDots.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    if (i === currentSlide) {
      dot.classList.add("active-dot");
    }
    slideDots.appendChild(dot);
  }
}

function showSlide(index) {
  if (!slideImage || !slideCaption) {
    return;
  }

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slideImage.src = slides[currentSlide].src;
  slideCaption.textContent = slides[currentSlide].caption;
  createDots();
}

if (nextSlide && prevSlide && slideImage) {
  nextSlide.addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });

  prevSlide.addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });

  createDots();

  // Automatic slideshow. This also shows event-driven and timed interactivity.
  setInterval(function () {
    showSlide(currentSlide + 1);
  }, 5000);
}

/* ---------------------------------------
   7. Hero video volume 30% on page load
---------------------------------------- */
var heroVideo = document.getElementById("heroVideo");

if (heroVideo) {
  heroVideo.volume = 0.3;
}
