# 🏋️ IronPulse Fitness Website

## CST 2309 Final Project | Spring 2026

**IronPulse Fitness** is a fictional three-page gym website created for the CST 2309 Spring 2026 Final Project. The project was built using **HTML**, **CSS**, and **JavaScript** to demonstrate web structure, styling, interactivity, responsive design, and client-side form validation.

The website is designed to look clean, modern, and professional while still keeping the code simple, readable, and easy to understand. It includes a gym introduction page, a membership registration page with JavaScript validation, and a classes and schedule page with interactive JavaScript features.

---

## 🌐 Project Pages

This website includes three main pages:

### 1. About Us Page
The About Us page introduces the gym and explains the purpose of IronPulse Fitness. It includes a hero video section, mission and values, programs, trainer information, and a clean footer.

### 2. Membership Registration Page
The Membership page includes a registration form where visitors can enter their information and choose a membership plan. JavaScript validation checks the form before submission.

### 3. Classes and Schedule Page
The Classes and Schedule page works as the creativity page. It includes class cards, a weekly schedule, a workout generator, and an image slideshow.

---

## ✨ Main Features

- Three complete HTML pages
- Shared header and footer on all pages
- Countdown promotion clock at the top of every page
- Navigation bar linking all pages
- Active navigation link for the current page
- Switch theme button for light and dark mode
- Mobile hamburger menu using JavaScript
- Membership registration form
- JavaScript form validation
- Workout of the Day generator
- Class image slideshow
- Hero video on the About page
- Sound button for hero video
- Fully responsive layout
- External CSS file
- External JavaScript file
- Organized image folder
- Clean code comments for readability

---

## 🧱 Website Structure

```text
ironpulse-fitness/
│
├── index.html
├── membership.html
├── classes.html
├── favicon.png
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── logo.png
│   ├── hero-about.jpg
│   ├── program-strength.jpg
│   ├── program-cardio.jpg
│   ├── program-functional.jpg
│   ├── program-yoga.jpg
│   ├── trainer-1.jpg
│   ├── trainer-2.jpg
│   ├── trainer-3.jpg
│   ├── membership-gym.jpg
│   ├── class-hiit.jpg
│   ├── class-yoga.jpg
│   ├── class-strength.jpg
│   ├── class-boxing.jpg
│   ├── class-cycling.jpg
│   ├── class-zumba.jpg
│   ├── slideshow-1.jpg
│   ├── slideshow-2.jpg
│   ├── slideshow-3.jpg
│   └── slideshow-4.jpg
│
├── videos/
│   ├──hero-video.mp4
│
└── README.md
```

---

## 🛠️ Technologies Used

### HTML
HTML was used to create the structure of the website. The project uses semantic elements such as:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `form`
- `label`
- `input`
- `textarea`
- `select`
- `button`
- `table`
- `video`

### CSS
CSS was used to design the layout, colors, spacing, typography, cards, buttons, footer, responsive breakpoints, and mobile navigation.

### JavaScript
JavaScript was used to add interactivity across the website. It controls the countdown clock, theme switch, mobile menu, form validation, workout generator, image slideshow, and hero video sound button.

---

## 🎨 Design Theme

The website uses a strong gym-inspired visual style.

### Color Style
The design uses dark colors with bright accent colors to create an energetic fitness look.

Main design colors include:

- Black
- Dark gray
- White
- Red accent color
- Orange/red highlight tones

### Typography
The typography is clean and readable. The text is designed to be simple for users to scan while still looking professional.

### Layout Style
The layout uses modern sections, cards, spacing, and responsive grids. Each page is organized clearly so the user can understand the content without confusion.

---

## 📄 Page 1: About Us

The About Us page is the main landing page of the website. It introduces IronPulse Fitness and gives visitors an overview of the gym.

### Content Included

- Countdown promotion clock
- Navigation bar
- Gym logo
- Switch theme button
- Hero video section
- Gym introduction
- Mission and values section
- Program cards
- Trainer cards
- Footer with quick links

### Purpose
The purpose of this page is to make the gym look professional and welcoming. It gives visitors a clear first impression of the gym brand.

### Hero Video
The hero section uses a video instead of a regular image. The video starts muted because many browsers block autoplay with sound. A custom sound button allows the user to turn on the sound, and JavaScript gradually raises the volume to 50%.

---

## 📝 Page 2: Membership Registration

The Membership Registration page includes a complete form for visitors who want to join the gym.

### Form Fields

The registration form includes:

- Full Name
- Email Address
- Phone Number
- Age
- Membership Type
- Fitness Goals
- Preferred Workout Time
- Emergency Contact Number

### JavaScript Validation

The form is checked with JavaScript before it can be submitted.

Validation includes:

- All required fields must be filled out
- Email must be in a valid format
- Phone number must follow a proper pattern
- Age must be a number
- Age must be within a reasonable range
- Membership type must be selected
- Preferred workout time must be selected
- Error messages are displayed on the page
- Success message appears when the form is valid

### Purpose
This page demonstrates client-side data validation. It also shows how JavaScript can interact with form fields and give feedback to the user.

---

## 📅 Page 3: Classes and Schedule

The Classes and Schedule page is the creativity page for the project. It shows gym classes and includes interactive JavaScript features.

### Content Included

- Countdown promotion clock
- Navigation bar
- Class introduction section
- Class cards
- Weekly class schedule table
- Workout of the Day generator
- Image slideshow
- Footer with quick links

### Class Examples

The page includes different types of fitness classes such as:

- HIIT Training
- Yoga and Stretching
- Strength Bootcamp
- Boxing Fitness
- Cycling Class
- Zumba Dance Fitness

### Interactive Features

This page includes JavaScript-powered features to meet the creativity requirement.

#### Workout of the Day Generator
A button generates a random workout from an array of workout options. This demonstrates arrays, functions, randomization, DOM manipulation, and event handling.

#### Image Slideshow
The slideshow changes the class image using JavaScript. This demonstrates arrays, counters, functions, DOM access, and button events.

---

## ⏳ Countdown Promotion Clock

A countdown promotion clock appears at the top of every page. It displays a fitness deal message and the remaining time for the promotion.

Example message:

```text
50% Off Your First Month | Spring Fitness Deal Ends In: 49 Days
```

The countdown clock is placed above the navigation menu so it is visible immediately when the user enters the website.

---

## 🌙 Light and Dark Theme Switch

The website includes a theme switch button near the navigation menu. This allows users to switch between light and dark mode.

This feature demonstrates:

- DOM access
- Event handling
- CSS class switching
- User interface interactivity

---

## 📱 Responsive Design

The website is fully responsive and designed to work on different screen sizes.

### Breakpoints Included

The CSS includes responsive design for:

- Desktop screens
- Laptop screens
- Tablet screens
- Mobile screens

### Mobile Navigation

On smaller screens, the navigation menu changes into a hamburger menu. The user can click the three-line icon to open or close the menu.

This makes the website easier to use on phones.

---

## ✅ JavaScript Concepts Demonstrated

The project demonstrates the required JavaScript concepts across the website.

### Variables
Variables are used to store elements, countdown values, form inputs, messages, workout lists, slideshow images, and theme button status.

### Arrays
Arrays are used for:

- Error messages
- Membership-related checks
- Workout of the Day options
- Slideshow image paths

### Functions
Functions are used for:

- Updating the countdown clock
- Validating the membership form
- Displaying form messages
- Generating workouts
- Changing slideshow images
- Toggling the mobile menu
- Switching the theme
- Controlling video sound

### Selection Statements
`if`, `else if`, and `else` statements are used to check form input values, validate conditions, control slideshow logic, and handle user actions.

### Loops
Loops are used to go through error messages and display validation feedback.

### DOM Manipulation
JavaScript changes page content by updating text, adding classes, removing classes, changing images, and displaying messages.

### Event Handling
Event listeners are used for:

- Form submission
- Theme switch button
- Hamburger menu button
- Workout generator button
- Slideshow buttons
- Hero video sound button

---

## 🧪 Form Validation Details

The membership form validation is one of the most important parts of the project.

### Validation Rules

- Full name cannot be empty
- Email must include a correct email format
- Phone number must match the required number format
- Age must be a valid number
- Age must be between a reasonable range
- Membership type must be selected
- Fitness goals cannot be empty
- Preferred workout time must be selected
- Emergency contact number must be valid

### User Feedback

If the form has errors, the website displays a list of error messages. If the form is completed correctly, the website displays a success message.

This makes the form more user-friendly and shows clear JavaScript validation.

---

## 🧩 External Files

The project uses external CSS and JavaScript files.

### CSS File

```text
css/style.css
```

This file controls the entire website design.

### JavaScript File

```text
js/script.js
```

This file controls all interactive features.

Using external files keeps the project organized and makes the code easier to maintain.

---

## 🚀 GitHub Pages Publishing Steps

To publish this project using GitHub Pages:

1. Create a new GitHub repository.
2. Upload all project files and folders.
3. Make sure `index.html` is in the root folder.
4. Go to repository settings.
5. Open the Pages section.
6. Select the main branch.
7. Save the GitHub Pages settings.
8. Wait for GitHub to publish the website.
9. Copy the GitHub Pages URL.
10. Submit both the repository URL and the live website URL.

---

## 📌 Files to Upload to GitHub

The following files should be uploaded:

```text
index.html
membership.html
classes.html
favicon.png
css/style.css
js/script.js
images/logo.png
images/hero-video.mp4
images/hero-about.jpg
images/program-strength.jpg
images/program-cardio.jpg
images/program-functional.jpg
images/program-yoga.jpg
images/trainer-1.jpg
images/trainer-2.jpg
images/trainer-3.jpg
images/membership-gym.jpg
images/class-hiit.jpg
images/class-yoga.jpg
images/class-strength.jpg
images/class-boxing.jpg
images/class-cycling.jpg
images/class-zumba.jpg
images/slideshow-1.jpg
images/slideshow-2.jpg
images/slideshow-3.jpg
images/slideshow-4.jpg
README.md
```

---

## 🏆 Project Goals Completed

- Three pages completed
- Navigation works on all pages
- CSS file linked and applied
- JavaScript file linked and working
- Registration form fully validated
- Creativity page includes interactive features
- Countdown clock included on all pages
- Theme switch included
- Mobile hamburger menu included
- Website is responsive
- Images and video included
- Code is organized and commented
- Project is ready for GitHub Pages

---

## 💡 Challenges and Solutions

### Challenge 1: Making the Website Responsive
One challenge was making the layout look good on desktop, laptop, tablet, and mobile screens.

### Solution
CSS media queries were used to adjust layouts, font sizes, spacing, grids, and the navigation menu for different screen sizes.

### Challenge 2: Mobile Navigation
The regular navigation menu was too wide for small phone screens.

### Solution
A hamburger menu was added for mobile users. JavaScript is used to open and close the menu when the icon is clicked.

### Challenge 3: Form Validation
The membership form needed multiple validation rules.

### Solution
JavaScript functions were created to check required fields, email format, phone number format, and age range. Error messages are displayed directly on the page.

### Challenge 4: Hero Video Autoplay
Browsers often block autoplay videos with sound.

### Solution
The hero video starts muted. A sound button allows the user to turn on the sound, and JavaScript gradually increases the volume to 50%.

---

## 📚 What I Learned

While creating this project, I learned how to plan and build a complete website using HTML, CSS, and JavaScript. I practiced organizing content into multiple pages, styling a consistent layout, validating form data, and creating interactive features.

I also learned how important responsive design is because a website should work well on desktops, laptops, tablets, and phones. The project helped me understand how HTML gives the page structure, CSS controls the design, and JavaScript adds behavior and interactivity.

---

## 🙌 What I Am Proud Of

I am proud of the overall design and organization of this website. The website looks like a real gym website and includes useful features such as a countdown promotion clock, membership registration form, theme switch, workout generator, slideshow, and mobile menu.

I am also proud that the project uses external CSS and JavaScript files because it keeps the code clean and easier to understand.

---

## 🔮 Future Improvements

If I had more time, I would improve the website by adding more advanced features such as:

- Real membership pricing calculator
- Online class booking system
- Trainer profile pages
- Contact form with map
- More animation effects
- User login page
- Backend database connection

These features would make the website more realistic and closer to a professional gym business website.

---

## 👨‍💻 Author

**Student Name:** Mahmudul Hasan  
**Course:** CST 2309  
**Semester:** Spring 2026  
**Project:** Final Project Gym Website

---

## 📎 Final Submission Notes

Before submitting, make sure to include:

- GitHub Pages URL
- GitHub Repository URL
- Final project files
- Summary report
- PowerPoint slides
- Class presentation

Also make sure all links, images, video, CSS, and JavaScript work correctly on the live GitHub Pages website.

---

## ✅ Final Checklist

- [x] About Us page completed
- [x] Membership Registration page completed
- [x] Classes and Schedule page completed
- [x] Countdown promotion clock added
- [x] Navigation bar added to all pages
- [x] Active page links added
- [x] External CSS file created
- [x] External JavaScript file created
- [x] Membership form validation added
- [x] Workout generator added
- [x] Image slideshow added
- [x] Light and dark theme switch added
- [x] Mobile hamburger menu added
- [x] Hero video added
- [x] Sound button added
- [x] Responsive layout added
- [x] Images organized inside image folder
- [x] Code comments added
- [x] Ready for GitHub Pages

---

# IronPulse Fitness

**Train hard. Stay strong. Build discipline.**

