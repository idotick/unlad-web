const main = document.getElementsByTagName('div')[0];

main.addEventListener('mouseover', () => {
	document.body.style.animation = 'spotlight 500ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms 1 alternate forwards';
	main.style.animation = 'expand 500ms cubic-bezier(0.55, 0.06, 0.68, 0.19) 0ms 1 alternate forwards';

	// Style h1
	main.children[0].style.textDecoration = "underline";
	main.children[0].style.animation = "onHover 500ms linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%) 0ms 1 alternate forwards";
})