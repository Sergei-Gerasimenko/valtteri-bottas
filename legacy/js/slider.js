class Slider {
    constructor(sliderId) {
        this.sliderElement = document.getElementById(sliderId);
        if (!this.sliderElement) {
            return;
        }
        this.sliderInner = this.sliderElement.querySelector('.slider__inner');
        this.slides = Array.from(this.sliderInner.children);
        this.currentSlide = 0;
        if (this.slides.length === 0) {
            return;
        }
        this.boundHandleControlClick = this.handleControlClick.bind(this);
        this.init();
    }
  
    init() {
        this.initControls();
        this.setActiveSlide(this.currentSlide);
    }
  
    initControls() {
        this.sliderElement.addEventListener('click', this.boundHandleControlClick);
    }
  
    handleControlClick(event) {
        const control = event.target.closest('[data-bs-slide]');
        if (!control) return;
        const direction = control.dataset.bsSlide;
        if (direction === "prev") {
            this.changeSlide(this.currentSlide - 1);
        } else if (direction === "next") {
            this.changeSlide(this.currentSlide + 1);
        }
    }
  
    changeSlide(newIndex) {
        if (newIndex === this.currentSlide || newIndex < 0 || newIndex >= this.slides.length) {
            return;
        }
        this.setActiveSlide(newIndex);
    }
  
    setActiveSlide(newIndex) {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = newIndex;
        this.slides[this.currentSlide].classList.add('active');
        this.updateSliderInnerPosition();
    }
  
    updateSliderInnerPosition() {  
        const newLeft = this.currentSlide * -100;
        this.sliderInner.style.transform = `translateX(${newLeft}%)`;
    }
  
    destroy() {
        this.sliderElement.removeEventListener('click', this.boundHandleControlClick);
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.sliderInner.removeAttribute('style');
        this.sliderElement = null;
        this.sliderInner = null;
        this.slides = null;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const sliderId = slider.getAttribute('id');
        if (sliderId) {
            new Slider(sliderId);
        }
    });
});
  