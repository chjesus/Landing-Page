import './scss/style.scss';

import Swiper from 'swiper';

import SmoothScroll from 'smooth-scroll';
import Icon from './img/person.jpg';
/**
 *  if you want to use bootstrap styles
 *  copy @import '~bootstrap/scss/bootstrap'; in style.scss
 */

/**
 * import multiple js files
 *
 * import { nameFunction } from "./name.js"
 */

/**
 * if you want to use bootstrap
 *
 * import 'bootstrap';
 */

/**
  * if you want to use jquery
  *
  * import $ from 'jquery';
  */

const chartHorizontal = document.getElementById('bar-chart-horizontal');
const itemServices = document.querySelectorAll('.item');
const $menuItems = document.querySelectorAll('.nav--a');
const $btnCheck = document.querySelector('.navigation--check');

const chart = new Chart(chartHorizontal, {
  type: 'horizontalBar',
  data: {
    labels: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'ReactJs', 'Boostrap 4'],
    datasets: [
      {
        label: 'Porcentage %',
        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#86c3b9'],
        data: [78, 52, 73, 84, 33, 95],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: '',
    },
  },
});

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
  speedAsDuration: true,
  easing: 'easeInOutQuad',
});

$menuItems.forEach(($element) => {
  $element.addEventListener('click', () => {
    $btnCheck.checked = 0;
  });
});

window.addEventListener('scroll', () => {
  itemServices.forEach((element) => {
    const skillALt = window.scrollY + window.innerHeight - element.clientHeight;
    const isScroll = skillALt > element.offsetTop;
    if (isScroll) {
      element.classList.add('animate__zoomIn');
      element.style.opacity = 1;
      // element.style.width = `${element.dataset.width}%`;
      // const child = element.querySelector('.info');
      // child.textContent = `${element.dataset.width}%`;
    } else {
      element.classList.remove('animate__zoomIn');
      element.classList.add('animate__fadeOut');
      element.style.opacity = 0;
      // element.style.width = '20%';
    }
  });
});
