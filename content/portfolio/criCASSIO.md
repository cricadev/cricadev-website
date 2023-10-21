---
title: "CriCASSIO"
metaTitle: "CriCASSIO: Revolutionizing Calculators with Vue.js and Unique Design"
description: "Discover CriCASSIO, a modern calculator app blending intuitive functionality with a honeycomb-inspired design. Dive into its development challenges and learn how Vue.js was harnessed to craft this masterpiece."
img: "/Calculator_-_Light_kbarin.png"
ogImg: "https://res.cloudinary.com/ddc0cce3m/image/upload/v1697849987/CricaDev/Calculator_-_Light_kbarin.png"
madeWith: ["Vue", "Nuxt", "Tailwind"]
tags: ["Portfolios"]
code: "https://github.com/cricadev/criCASSIO"
project: "https://cricassio.cricadev.com"
author: "Cricadev"

---

# CriCASSIO: The Modern Calculator with a Twist
:HeaderSlugPortfolio{:madeWith="madeWith" :src="img" :alt="title" :githubLink="code" :projectLink="project"}

## Overview:
Introducing CriCASSIO - an inventive fusion of my name, Cristian, and the renowned calculator brand, Casio. With a playful nod to its moniker, CriCASSIO is more than just a calculator app; it's a delightful blend of functionality and artistry.

### Design Inspiration:
Crafted meticulously by TEF_DSGN, a prodigious UX/UI designer and my cherished business and life partner, the app boasts a distinctive honeycomb design. Not only does it evoke the organized structure of a beehive, but it also features an animated bee that seamlessly flits across the interface, adding a touch of whimsy to an otherwise utilitarian tool.

### Features:
- **Intuitive Input**: Users have the flexibility of either on-screen clicking or traditional keyboard typing. Every key depicted on the calculator can be seamlessly used, ensuring a comprehensive user-friendly experience.
  
- **Responsive Design**: Designed for adaptability, the app transitions fluidly across devices, ensuring a cohesive user experience irrespective of screen size.


### Upcoming Enhancements:
- **Conversion Utility**: An integrated conversion page is in the works to facilitate unit transformations effortlessly.
  
- **Interactive Feedback**: Immersive effects and sounds will be introduced soon, enhancing user engagement and elevating the experience.
  
- **Innovative Features**: Stay tuned for groundbreaking features that promise to reshape the realm of calculator apps.

## Challenges:

### Mastering SVGs:
 One of the main challenges was working with SVG elements and properties to craft the distinctive honeycomb design. Understanding and manipulating these SVGs was crucial to achieving the intended look.

```html
   <svg id="svg" @click="clearAndResetCalculator" class="number--ac" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 109 99" fill="none">
        <path class="svg-path-numArith"
          d="M6.2141 51.8749C4.07051 48.1621 4.07051 43.5877 6.2141 39.8749L25.2234 6.94981C27.367 3.237 31.3285 0.949814 35.6157 0.949814H73.6343C77.9215 0.949814 81.883 3.237 84.0266 6.94981L103.036 39.8749C105.179 43.5877 105.179 48.1621 103.036 51.8749L84.0266 84.7999C81.883 88.5128 77.9215 90.7999 73.6343 90.7999H35.6157C31.3285 90.7999 27.367 88.5128 25.2234 84.7999L6.2141 51.8749Z" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" class="svg-text-numArith">AC</text>
    </svg>
    <style>
      #svg {
        width: clamp(5rem, 25vw + 1rem, 10rem);
        filter: drop-shadow(-5px 2px 5px #e18c0b);
        @media (min-width: 1921px) {
          width: clamp(5rem, 25vw + 1rem, 12rem);
        }
      }
      
      .dark #svg {
        filter: drop-shadow(-5px 2px 5px #363123);
      }
      .svg-path-number {
        @apply fill-number  dark:fill-numberDark;
      }
      .svg-text-number {
        @apply fill-numberContent dark:fill-number;
      }
      .svg-path-numArith {
        @apply fill-numArith dark:fill-numArithDark;
      }
    </style>
```

### Complex Algorithm Development:
 Creating a calculator is more than just basic math. Ensuring that arithmetic buttons aren't clicked consecutively, handling decimal inputs, and incorporating multiple tweaks made the underlying algorithm intricate.

A little example about it:
```js
  const handleArithmeticButton = (arith) => {
  let value = arith;
  if (display.value === "") {
    return;
  }
  else if (arithmeticSymbols.includes(display.value.slice(-1))) {
    lastArithmeticSymbol.value = value;
    display.value = display.value.slice(0, -1);
    display.value += value;
  }
  else if (!isNaN(Number(display.value.slice(-1)))) {
    lastArithmeticSymbol.value = null;
    display.value += value;
  }
  else {
    display.value += value
  }
};
```
### Animation Handling:
 The bee's movement required a deep dive into JavaScript's `requestAnimationFrame` alongside advanced mathematical calculations for smooth, random, and free movement. DOM manipulation skills were vital to ensure the bee's flight was both fluid and aesthetically pleasing.
```js
const moveBee = (time) => {
  // we assing the first time when we call the function since we are calling it as a callback function of requestAnimationFrame a webAPI
  if (lastTime === null) {
    lastTime = time;
  }
  // The elapsed variable represents the time elapsed between the current frame and the previous frame, in milliseconds. 
  const elapsed = time - lastTime;
  // we calculate the distance the Bee has moved multiplying the speed by the elapsed time and we divided by 1000 so we convert the elapsed time from miliseconds to seconds. the elapsed variable is in milliseconds, while the speed variable is in pixels per second, so we need to convert the elapsed time to seconds to get the correct distance that the Bee should move
  const distance = speed.value * elapsed / 1000;
  // we sum the distance and multiply by the direction we want to go, right now it only goes left and right but we want to make it go diagonals too
  x.value += distance * directionX;
  y.value += distance * directionY;
  // we can only apply styles if Bee exists right?
  if (bee.value) {
    // with this statement we prevent the Bee X coordinate going farther than the left side of the screen 
    if (x.value < 0) {
      x.value = 0;
      directionX = 1;
    }
    else if (y.value < 0) {
      y.value = 0;
      directionY = 1;
    }
    else if (y.value > screenHeight.value - bee.value.height) {
      y.value = screenHeight.value - bee.value.height;
      directionY = -1;
    }
    // here is the same thing but for the right side 
    else if (x.value > screenWidth.value - bee.value.width) {
      x.value = screenWidth.value - bee.value.width;
      directionX = -1;
    }
    // we apply the style left that will works for both left and right since x can be negative value also when direction is negative, maths son!
    bee.value.style.left = `${x.value}px`;
    bee.value.style.top = `${y.value}px`;
    // if direction is equals -1 then we scaleX -1 so it flips, this is a common trick in game Dev
    if (directionX === -1) {
      bee.value.style.transform = 'scaleX(1)';
    } else {
      bee.value.style.transform = 'scaleX(-1)';
    }
    // some time have elapsed between the things that happened above so we update the lastTime
    lastTime = time;
    // we calculate the time that has passed so we can change the direction randomly
    timeSinceDirectionChange += elapsed;
    if (timeSinceDirectionChange > 10000) {
      directionX = Math.random() < 0.5 ? -1 : 1;
      directionY = Math.random() < 0.5 ? -1 : 1;
      timeSinceDirectionChange = 0;
    }
  }
  requestAnimationFrame(moveBee);
};
```


### Responsive Challenges: 
Given the unique honeycomb design, ensuring responsiveness was a notable challenge. Adapting the app to various screen sizes without compromising the design or functionality demanded a keen eye for detail and thorough testing.

I give you a little tip, use **clamp()** more often.


## Final Thoughts:
CriCASSIO serves as more than just a project; it symbolizes innovation, passion, and a relentless pursuit of perfection. As I embark on my quest to become a Vue.js Middle developer, this app showcases my dedication and expertise.


