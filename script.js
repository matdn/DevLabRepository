window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;
    console.log(scrollY);
    console.log(scrollX);
    });
gsap.to(".a", {
    y: -1000,
    duration: 3
});