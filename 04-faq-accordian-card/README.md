# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

For this project I started by creating a styles.css file and cleaning up the HTML to better separate the content. It will change as we move through the project but for right now all I did was add headers, paragraphs and some buttons in order to make this a little more easy to read.

After the initial setup I went ahead and imported the pictures, added the styles from the style guide into the CSS and started the process of making the card. For the card styles it was fairly straight forward. radius corners, z-indexing the header photo, adding in margins, etc. No functionality was added at first, it was just to get the general idea of the build.

Once that was done it was on to the difficult part, the accordion menu. I'm doing a version without any JavaScript since it was a challenge in the brief and I've never done one without JS before. I added in some css based on if the input button was checked and the label it was associated to matched. If that happened then the content view height would change from 0 to whatever it needed to be. This allowed for the content to show and the transitions made it feel a little smoother. I did use [Raul Barrera's](https://codepen.io/raubaca/pen/PZzpVe?editors=1100) codepen as a guideline for the accordion. Once I had the basic feel down I adjusted it to be closer to what I was looking for.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

### Continued development

### Useful resources

- [Raul Barrera's Codepen](https://codepen.io/raubaca/pen/PZzpVe?editors=1100)
- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

- Website - [Matt Cowan](https://www.mattbcowan.com)
- Frontend Mentor - [@mattbcowan](https://www.frontendmentor.io/profile/mattbcowan)
- Twitter - [@mattbcowan](https://www.twitter.com/mattbcowan)
