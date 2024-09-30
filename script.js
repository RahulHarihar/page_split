gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", (e) => {
	console.log(e);
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
var timeLine = gsap.timeline({
	scrollTrigger: {
		trigger: ".main",
		// markers: true,
		start: "50% 50%",
		end: "150% 50%",
		scrub: 2,
		pin: true,
	},
});

timeLine.to(
	".top",
	{
		top: "-50%",
	},
	"a"
);

timeLine.to(
	".bottom",
	{
		bottom: "-50%",
	},
	"a"
);

timeLine.to(
	".top-text",
	{
		top: "80%",
	},
	"a"
);

timeLine.to(
	".bottom-text",
	{
		bottom: "-80%",
	},
	"a"
);

timeLine.to(
	".content, h2",
	{
		marginTop: "0%",
	},
	"a"
);
