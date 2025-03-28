
class SlimeInit {
    constructor
        ({ 
            sliderClass = "",
            navigation = { nextSlideBtn: "", prevSlideBtn: "" },
            previewSlides = 1,
            speedSlider = 0.5,
            previewScrollSlide = 1,
            breakpoints = [],
            pagination = false,
        }) {

        this.sliderClass = sliderClass;
      


        this._ContainerSlide = document.querySelector(`${this.sliderClass}-slides`);  // контейнер слайдов
        this._Slide = document.querySelectorAll(`${this.sliderClass}-slide`); // сами слайды
        this._Slider = document.querySelector(`${this.sliderClass}-container`); // слайдер в общем

        this.previewSlides = previewSlides;
        this.navigation = navigation;
        this.speedSlider = speedSlider;
      
        this.previewScrollSlide = previewScrollSlide;
        this.breakpoints = breakpoints;
        this.pagination = pagination;
        
        this._ConfirmScrollSlide = this.previewScrollSlide;
        this._ConfirmPreviewSlide = this.previewSlides;


        this._TransformSlide = 0;   // расчетная переменная для перелистывания слайдера
        this._IndexSlide = 0;   // индекс слайдера
        this.NumberSlide = this._ContainerSlide.children.length;  // количество слайдов
    }

    InitSliderStylesContainer = () => { // настраивание ширины слайдов и их контейнера
        this._SlideWidth = this._Slider.clientWidth / this.previewSlides;
        this._Slide.forEach(item => {
            item.style.width = `${this._SlideWidth}px`;
        })

        this._ContainerSlide.style.width = `${ this.NumberSlide * this._SlideWidth }px`;
        this._ContainerSlide.style.display = "flex"; 
        this._ContainerSlide.style.transition = `transform ${ this.speedSlider }s ease-in-out`;
        

        this.ScrollingSlide()      
        this.BreakpointSlider();
    }

    ScrollingSlide = () => { // Прокрутка слайдера
        this._ContainerSlide.style.transform = `translateX(-${ this._TransformSlide }px)`;
    }

    NextScrolling = () => {
        const maxIndexSlide = this.NumberSlide - this.previewSlides;
        this._IndexSlide = (this._IndexSlide < maxIndexSlide) ?
            Math.min(this._IndexSlide + this.previewScrollSlide, maxIndexSlide) :
            0;
    
        this._TransformSlide = this._IndexSlide * this._SlideWidth;

        this.ScrollingSlide();
        this.UpdatePaginationSlider();
    }
    PrevScrolling = () => {
        const maxIndexSlide = this.NumberSlide - this.previewSlides;
        this._IndexSlide = (this._IndexSlide > 0) ?
            Math.max(this._IndexSlide - this.previewScrollSlide, 0) :
            (this.NumberSlide > this.previewSlides ? maxIndexSlide : 0);

        this._TransformSlide = this._IndexSlide * this._SlideWidth;
        this.ScrollingSlide();
        this.UpdatePaginationSlider();
    }


    InitEventBtnsSlider = () => {
        if(!this.navigation.nextSlideBtn || !this.navigation.prevSlideBtn) return;

        const _NextBtnSlide = document.querySelector(this.navigation.nextSlideBtn);
        const _PrevBtnSlide = document.querySelector(this.navigation.prevSlideBtn);

        _NextBtnSlide.addEventListener("click", () => this.NextScrolling());
        _PrevBtnSlide.addEventListener("click", () => this.PrevScrolling());
    }


    ThisWindowResizeSlide = () => {
        window.addEventListener("resize", (e) => {
            this.BreakpointSlider()
            this.InitSliderStylesContainer();
            this.PaginationSlider();
            this.UpdatePaginationSlider();
            this._TransformSlide = 0;
            this._IndexSlide = 0;
        })
    }

    PaginationSlider = () => {
        if(this.pagination === true) {
            const paginationContainer = document.querySelector(".reviews-pagination");
            let paginationNumbers = 0;

  
            if (this.NumberSlide > this.previewSlides) {
                paginationNumbers = Math.ceil((this.NumberSlide - this.previewSlides) / this.previewScrollSlide) + 1;
            }
        
            else {
                paginationNumbers = 1;
            }

            paginationContainer.innerHTML = "";

            for (let i = 0; i < paginationNumbers; i++) {
                const paginationItem = document.createElement("li");
                paginationItem.classList.add("reviews-pagination-item");
                paginationItem.addEventListener("click", () => this.getIndexSlider(i));
                paginationContainer.appendChild(paginationItem);
            }

            this.UpdatePaginationSlider();
        }
    }

    UpdatePaginationSlider = () => {
        const paginationContainer = document.querySelector(".reviews-pagination");
        const indicators = paginationContainer.querySelectorAll(".reviews-pagination-item");
        indicators.forEach(indicator => indicator.classList.remove("active"));
    
        const maxIndexSlide = this.NumberSlide - this.previewSlides;
        let activeIndex = Math.ceil(this._IndexSlide / this.previewScrollSlide);

    
        if (maxIndexSlide < 0) {
            activeIndex = 0;
        } else if (this._IndexSlide >= maxIndexSlide) {
            activeIndex = indicators.length > 0 ? indicators.length - 1 : 0;
        }
      
        activeIndex = Math.min(activeIndex, indicators.length - 1);
        activeIndex = Math.max(activeIndex, 0);

       
        if (activeIndex >= 0 && activeIndex < indicators.length) {
            indicators[activeIndex].classList.add("active");
        }
    
       
    }

    getIndexSlider = (index) => {
        const maxIndexSlide = this.NumberSlide - this.previewSlides;
        let newIndexSlide = index * this.previewScrollSlide;
    
        newIndexSlide = Math.min(newIndexSlide, maxIndexSlide);
    
        this._IndexSlide = newIndexSlide;
        this._TransformSlide = this._IndexSlide * this._SlideWidth;
      
        this.ScrollingSlide();
        this.UpdatePaginationSlider();
    }

    BreakpointSlider = () => {
        if(!this.breakpoints) return;

        const _WidthWindow = window.innerWidth;
        let breakpointConfirm = false;

       
        this.breakpoints.sort((a, b) => b.breakpoint - a.breakpoint);

        for (let i = 0; i < this.breakpoints.length; i++) {
            const item = this.breakpoints[i];

            if (_WidthWindow <= item.breakpointSize) {
                this.previewSlides = item.previewSlides;
                this.previewScrollSlide = item.previewScrollSlide;

                breakpointConfirm = true;
                // break; // если включить то брекпоинты не будут работать полностью
            } 
        }


        if (!breakpointConfirm) {
            this.previewSlides = this._ConfirmPreviewSlide;
            this.previewScrollSlide = this._ConfirmScrollSlide;
        }

    }

    InitSlider = () => {
        this.BreakpointSlider();
        this.InitSliderStylesContainer();
        this.ThisWindowResizeSlide();
        this.InitEventBtnsSlider();

        this.PaginationSlider();
        this.UpdatePaginationSlider();
    
    }
}




export default SlimeInit;