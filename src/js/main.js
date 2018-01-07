
window.addEventListener('DOMContentLoaded', init);

// import $ from 'jquery';

function init () {
    

/* 
*
*
BURGER MENU 
*
*
*/

;(function(){
    "use strict";

    var burgerBtnClass = 'burger';
    var navlistClass = 'header__nav-list';
    var burgerBgClass = 'burger-bg';
    var burgerBtn = document.querySelector('.' + burgerBtnClass);
    var navlist = document.querySelector('.' + navlistClass);
    var burgerBg = document.querySelector('.' + burgerBgClass);
    var action = '--active';
    var atribute = 'data-burger';

    
    burgerBtn.addEventListener('click', toggleclass);
    burgerBg.addEventListener('click', toggleclass);


    function toggleclass() {
        var arrElem = document.querySelectorAll('[' + atribute + ']');
        console.log(burgerBg)
        arrElem.forEach(function (item) {
            var dataValue = item.getAttribute(atribute);
            var currentClass = item.classList[0];
            item.classList.toggle(currentClass + action)
        })
        if (document.documentElement.clientWidth < 993) {
            document.body.style.overflowY = document.body.style.overflowY == '' ? 'hidden' : '' ;
        }
    }




/*
*
*
SCROLL MENU
*
*
*/


    var mainNavMenu = document.querySelector('.header__nav-list');

    mainNavMenu.addEventListener('click', scrollToSection);

        function scrollToSection(e) {
            e.preventDefault();
            var target = e.target;
            
            if (!target.getAttribute('href')) { return }
            var href = target.getAttribute('href');
            var targetSection = document.getElementById(href);
            var sectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            var scrollHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            
            animateScroll(sectionPosition, scrollHeight);
            toggleclass();
        }

        
        function animateScroll(sectionPosition, scrollHeight) {
            var scroll = setInterval(function () {
                var currentPosition = window.pageYOffset;
               
                if (scrollHeight >= sectionPosition + window.innerHeight && sectionPosition > window.innerHeight) {
                    scrollTo(0, currentPosition + 50);
                    if (currentPosition >= sectionPosition) {
                        clearInterval(scroll);
                    }
                } else if (sectionPosition <= window.innerHeight) {
                    clearInterval(scroll);
                    return;
                } else {
                    scrollTo(0, currentPosition + 50)
                    if (currentPosition >= scrollHeight - window.innerHeight) {
                        clearInterval(scroll);
                    }
                }
            }, 17);
        }


/* 
*
*
TOP GALLERY
*
*
*/


        var btnUp = document.querySelector('#topgalleryBtn_up');
        var btnDown = document.querySelector('#topgalleryBtn_down');
        var btnLeft = document.querySelector('#topgalleryBtn_left');      // when small display
        var btnRight = document.querySelector('#topgalleryBtn_right');    // when small display   
        var swicher = document.querySelector('.swicher');
        var swichStep = swicher.offsetHeight/2;
        var swichPosition = 1;
        var currentSlide = document.querySelector('[data-topgallery="' + swichPosition + '"' + ']');
        var slideWidth = currentSlide.offsetWidth;  
        var slideList = currentSlide.parentElement;
        var activeNumber = document.querySelector('[href^="#' + swichPosition + '"' + ']').parentElement;
        var numberLegth = activeNumber.closest('ul').children.length;
        
        
        if (document.documentElement.clientWidth > 992) {
            btnDown.addEventListener('click', mooveToPrevSlide);
            btnUp.addEventListener('click', mooveToNextSlide);
        } else {
            btnLeft.addEventListener('click', mooveToNextSlide);
            btnRight.addEventListener('click', mooveToPrevSlide);
        }

        // PREV

        function mooveToPrevSlide() {
            activeNumber = document.querySelector('[href="#' + swichPosition + '"' + ']').parentElement;
            
            moveDownSwich();
            mooveSlide(); 
        

        // MOOVE SWICH DOWN

            function moveDownSwich() { 

                if (swichPosition < numberLegth && swichPosition !== numberLegth) {
                    activeNumber.classList.remove('swich__number--active');
                    
                    activeNumber.nextElementSibling.classList.add('swich__number--active');
                    swicher.style.transform = 'translate(0,' + swichStep * swichPosition + 'px' + ')';
                    swicher.firstElementChild.innerHTML = '0' + ++swichPosition;
                    
                } else {
                    swichPosition = 1;
                    activeNumber.parentElement.firstElementChild.classList.add('swich__number--active');
                    swicher.style.transform = 'translate(0,' + swichPosition + 'px' + ')';
                    swicher.firstElementChild.innerHTML = '0' + swichPosition;
                } 
            }
        }



        function mooveToNextSlide() {
        
        
            // MOOVE SWICH UP
            
            moveUpSwich();
            mooveSlide();

            function moveUpSwich() {
            activeNumber = document.querySelector('[href^="#' + swichPosition + '"' + ']').parentElement;
            if (swichPosition > 1) {
                    --swichPosition;
                    console.log(swichPosition);
                    
                    activeNumber.classList.remove('swich__number--active');
                    activeNumber.previousElementSibling.classList.add('swich__number--active');
                    swicher.style.transform = 'translate(0,' + swichStep * (swichPosition - 1) + 'px' + ')';
                    swicher.firstElementChild.innerHTML = '0' + swichPosition;

                } else {
                    swichPosition = 5;
                    activeNumber.classList.remove('swich__number--active');
                    activeNumber.parentElement.lastElementChild.classList.add('swich__number--active');
                    swicher.style.transform = 'translate(0,' + swichStep * (swichPosition -1) + 'px' + ')';
                    swicher.firstElementChild.innerHTML = '0' + swichPosition;
                } 
            }
        }


        // MOOVE SLIDE

        function mooveSlide() {
            currentSlide = document.querySelector('[data-topgallery="' + swichPosition + '"' + ']');
            slideList.style.transform = 'translate(' + -currentSlide.offsetWidth * (swichPosition - 1) + 'px' + ',0)';
        }


    })(); 
}










