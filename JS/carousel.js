const handleChange1 = (offset)=>{
	const activeSlide = document.querySelector(".room_1 [data-active]")
	const slides = [...document.querySelectorAll(".room_1 .slide")]
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
	const activeSlide = document.querySelector(".room_2 [data-active]")
	const slides = [...document.querySelectorAll(".room_2 .slide")]
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
	const activeSlide = document.querySelector(".room_3 [data-active]")
	const slides = [...document.querySelectorAll(".room_3 .slide")]
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
	const activeSlide = document.querySelector(".room_4 [data-active]")
	const slides = [...document.querySelectorAll(".room_4 .slide")]
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

const handleChange5 = (offset)=>{
	const activeSlide = document.querySelector(".room_5 [data-active]")
	const slides = [...document.querySelectorAll(".room_5 .slide")]
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
const Next5 = ()=> handleChange5(1)
const Prev5 = ()=> handleChange5(-1)

const handleChange6 = (offset)=>{
	const activeSlide = document.querySelector(".room_6 [data-active]")
	const slides = [...document.querySelectorAll(".room_6 .slide")]
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
const Next6 = ()=> handleChange6(1)
const Prev6 = ()=> handleChange6(-1)

const handleChange7 = (offset)=>{
	const activeSlide = document.querySelector(".room_7 [data-active]")
	const slides = [...document.querySelectorAll(".room_7 .slide")]
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
const Next7 = ()=> handleChange7(1)
const Prev7 = ()=> handleChange7(-1)
