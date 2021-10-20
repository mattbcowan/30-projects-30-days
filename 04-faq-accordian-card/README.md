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

Once that was done it was on to the accordion menu. I'm doing a version without any JavaScript since it was a challenge in the brief and I've never done one without JS before. I added in some css based on if the input button was checked and the label it was associated to matched. If that happened then the content view height would change from 0 to whatever it needed to be. This allowed for the content to show and the transitions made it feel a little smoother. I did use [Raul Barrera's](https://codepen.io/raubaca/pen/PZzpVe?editors=1100) codepen as a guideline for the accordion. Once I had the basic feel down I adjusted it to be closer to what I was looking for.

Now, right here is where things got interesting. Placing the images and shadows. This felt impossible and honestly I just gave up on the shadows. Scaling SVG's is such a ridiculous pain that I just gave up after an hour and a half of fighting. For the desktop portion I swapped the CSS Grid to be 2 column and I adjusted the images. I also added in the box floating whenever it's in desktop mode.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned that I should probably use CSS for its main purpose and let JS do the interaction portion of web. 😂 In all seriousness, I learned a lot about how finicky CSS is when you're trying to do something it's not specifically built to do. Also, SVG's are much trickier to work with than I first thought.

### Continued development

I need to learn more on SVG's and how to use them. Positioning was a huge pain and the backgrounds I just could not figure out. It's a path I need to study a lot more.

### Useful resources

- [Raul Barrera's Codepen](https://codepen.io/raubaca/pen/PZzpVe?editors=1100) - This is where I got the starting point for my CSS only accordion.
- [CSS Tricks - Using SVGs](https://css-tricks.com/using-svg/) - This is a resource I need to thoroughly read through. I do not know enough about using SVGs as of yet and I really need to dive deeper.

## Author

- Website - [Matt Cowan](https://www.mattbcowan.com)
- Frontend Mentor - [@mattbcowan](https://www.frontendmentor.io/profile/mattbcowan)
- Twitter - [@mattbcowan](https://www.twitter.com/mattbcowan)
