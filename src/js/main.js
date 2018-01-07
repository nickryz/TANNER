
window.addEventListener('DOMContentLoaded', init);

// import $ from 'jquery';

function init () {
    

// BURGER MENU

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

        document.body.style.overflowY = document.body.style.overflowY == '' ? 'hidden' : '' ;
        
    }



// SCROLL MENU 


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
               
                if (scrollHeight >= sectionPosition + window.innerHeight) {
                    scrollTo(0, currentPosition + 50);
                    if (currentPosition >= sectionPosition) {
                        clearInterval(scroll);
                    }
                } else {
                    scrollTo(0, currentPosition + 50)
                    if (currentPosition >= scrollHeight - window.innerHeight) {
                        clearInterval(scroll);
                    }
                }
            }, 17);
        }
        
    })(); 
    
}









    // var t;
    // function animateScroll() {
    //     var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    //     if (top > 0) {
    //         window.scrollBy(0, +50);
    //         t = setTimeout('animateScroll()', 20);
    //     } else clearTimeout(t);
    //     return false;
    // }



