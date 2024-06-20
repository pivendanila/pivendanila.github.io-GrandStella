const handleChange1 = (offset)=>{
	const activeSlide = document.querySelector(".room1 [data-active]")
	const slides = [...document.querySelectorAll(".room1 .slide")]
	const currentIndex = slides.indexOf(activeSlide)
	let newIndex = currentIndex + offset;
	if(newIndex < 0) newIndex = slides.length - 1
	if(newIndex >= slides.length) newIndex = 0

	slides.forEach((slide, index) => {
        if (index === newIndex) {
            slide.dataset.active = true;
        } else {
            delete slide.dataset.active;
        }
    });
}

const Next1 = ()=> handleChange1(1)
const Prev1 = ()=> handleChange1(-1)

const handleChange2 = (offset)=>{
	const activeSlide = document.querySelector(".room2 [data-active]")
	const slides = [...document.querySelectorAll(".room2 .slide")]
	const currentIndex = slides.indexOf(activeSlide)
	let newIndex = currentIndex + offset;
	if(newIndex < 0) newIndex = slides.length - 1
	if(newIndex >= slides.length) newIndex = 0

	slides.forEach((slide, index) => {
        if (index === newIndex) {
            slide.dataset.active = true;
        } else {
            delete slide.dataset.active;
        }
    });
}

const Next2 = ()=> handleChange2(1)
const Prev2 = ()=> handleChange2(-1)

const handleChange3 = (offset)=>{
	const activeSlide = document.querySelector(".room3 [data-active]")
	const slides = [...document.querySelectorAll(".room3 .slide")]
	const currentIndex = slides.indexOf(activeSlide)
	let newIndex = currentIndex + offset;
	if(newIndex < 0) newIndex = slides.length - 1
	if(newIndex >= slides.length) newIndex = 0

	slides.forEach((slide, index) => {
        if (index === newIndex) {
            slide.dataset.active = true;
        } else {
            delete slide.dataset.active;
        }
    });
}

const Next3 = ()=> handleChange3(1)
const Prev3 = ()=> handleChange3(-1)

const handleChange4 = (offset)=>{
	const activeSlide = document.querySelector(".events [data-active]")
	const slides = [...document.querySelectorAll(".events .slide")]
	const currentIndex = slides.indexOf(activeSlide)
	let newIndex = currentIndex + offset;
	if(newIndex < 0) newIndex = slides.length - 1
	if(newIndex >= slides.length) newIndex = 0

	slides.forEach((slide, index) => {
        if (index === newIndex) {
            slide.dataset.active = true;
        } else {
            delete slide.dataset.active;
        }
    });
}

const Next4 = ()=> handleChange4(1)
const Prev4 = ()=> handleChange4(-1)
