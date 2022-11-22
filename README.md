# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)
![Desktop screenshot](/screenshots/desktop-screen.png)
![Mobile screenshot](/screenshots/mobile-screen.png)

### Links

- Solution URL: [GitHub](https://github.com/Franche020/interactive-rating-component-main)
- Live Site URL: [GitHub Pages](https://franche020.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- Gulp
- SCSS

### What I learned

I learn how to center the card because in my previous project the card was horizontally but not vertically centered. Also now I have more practice with Gulp, SCSS, and JavaScript.

Also I learn how to disappear HTML elements using CSS:
```css
.invisible {
    display: none;
}
```

```js
function submit() {
    const normalState = document.querySelector('.normal-state');
    const thanksState = document.querySelector('.thanks-state');

    buttonSubmit.addEventListener('click', function () {
        normalState.classList.add('invisible');
        thanksState.classList.remove('invisible')
    })
}
```



### Useful resources

- [Udemy Course (in spanish)](https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/) - Im studying this Udemy course and I learn really a lot

## Author

- Website (now on GitHub) - [Francisco J Casado](https://github.com/Franche020)
- Frontend Mentor - [@Franche020](https://www.frontendmentor.io/profile/Franche020)

