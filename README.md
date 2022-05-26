# React and Sass Solution (snap)

---

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)


## Overview
### Screenshot

![](./src/images/screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/react-and-sassbased-solution-snap-Mfy1VyugUu](https://www.frontendmentor.io/solutions/react-and-sassbased-solution-snap-Mfy1VyugUu)
- Live Site URL: [https://souperstition.github.io/snap/](https://souperstition.github.io/snap/)
---
## My process
This provided quite a challenge for me, considering my nature as an extreme perfectionist. The main lesson I learned here is that when developing a website that has a different mobile design, go with mobile first! I did not do this here and wished I had once I started developing for mobile sizes.

I finally decided on three breakpoints: 
- 1100px
- 900px
- 750px (at which we would switch to the mobile design)

For things that could simply be resized, CSS media queries were adequate. However, to display things conditionally in my React components, I decided to use a dependency which would allow me to load objects based on screen sizes (see below).

Style/Design choices I made outside the scope of the guidelines: 
- Animation on the mobile menu to allow it to slide in and out
- Hover effects on SVG files to change the color
- Animated hover effects to make them look smoother

### Built with

- React
  - [react-media for conditional rendering based on screen size](https://www.npmjs.com/package/react-media)
- Sass

## Author

- Website - [Danielle Lyle](https://itsdani.me)
- Frontend Mentor - [@souperstition](https://www.frontendmentor.io/profile/souperstition)
