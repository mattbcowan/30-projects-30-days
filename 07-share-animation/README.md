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

- Create a share animation

### Links

[Live Site](https://mattbcowan.github.io/30-projects-30-days/07-share-animation/)

## My process

I saw a neat little animation on Codepen that I wanted to remake using CSS Animations. It will be linked in the resources. I started off using similar HTML to the original project. When I started the project I wanted to try and refactor the JQuery to be pure vanilla Javascript but I figured CSS animations worked better for this instance.

I made my basic CSS styles. This got the cover piece to hide all of the extra buttons which is a good start. Once that was completed I started working on the animation portion of it. Keyframes are totally new to me in CSS so I went to MDN and did a little research. Turns out, they are pretty dang simple. So onto the fun part.

I figured out how to animate it but it was sloppy and kept bouncing back on me. That's when I found out about `animation-fill-mode: forwards;`. This keeps your animation from resetting and I was done! Well... Not quite. Now it won't go back to covering when clicked. Time to move on to figuring that out.

I went through a ton of iterations that just didn't work. Everything from using JS to reset the height (which kind of worked but it looked ugly) to trying to set animation fill mode to backwards which... didn't work at all. Finally I settled on adding and removing a class in order to switch the animation. This worked! I don't know if it's bad practice but it solved the problem. Now I'm done!

### Built with

- CSS Animations
- CSS custom properties
- Flexbox
- Javascript

### What I learned

I learned a ton about CSS animations and keyframes even though this was a very simple animation. I really like the fluidity it can add to your components without a ton of work.

### Continued development

I will look into making CSS animations a lot more. It's a very nice way to add a little flair to the components without being too expensive.

### Useful resources

- [JFarrow Codepen](https://codepen.io/JFarrow/pen/mgFcj?editors=1100) - This was my inspiration. It's pretty neat but it used JQuery instead of CSS Animations and I wanted to remake it with animations

## Author

- Website - [Matt Cowan](https://www.mattbcowan.com)
- Frontend Mentor - [@mattbcowan](https://www.frontendmentor.io/profile/mattbcowan)
- Twitter - [@mattbcowan](https://www.twitter.com/mattbcowan)
