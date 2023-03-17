
	const text = gsap.utils.toArray('.texts');
	text.forEach((text, i) => {
		ScrollTrigger.create({
                trigger: text,
                toggleClass: 'active',
                start: "top 90%",
                end: "top 20%",
				
			})
        })
