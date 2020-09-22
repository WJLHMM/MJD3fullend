



	/*get gridui imgsrc&title*/
	function getimgsrc(dom,attr) {
		let carouselimgsrc = [];
		let nodelists = document.querySelectorAll(dom);

		for(let i=0;i<=nodelists.length;i++) {
			let imgsrc = ''
		    if(nodelists[i]&&nodelists[i].getAttribute(attr)){
				imgsrc = 'https:' + nodelists[i].getAttribute(attr)
			    carouselimgsrc.push(imgsrc)
			}
		};
		return carouselimgsrc
	}

	/*productionlist*/
	
	let m = getimgsrc('.photo','src')	

	function getinnerHTML(dom) {
		let innerHTMLstr = [];
		let nodelists = document.querySelectorAll(dom);
		for(let i=0;i<=nodelists.length;i++){
			if(nodelists[i]&&nodelists[i].innerText){
				innerHTMLstr.push(nodelists[i].innerText)
			}
		}
		return innerHTMLstr
	}
	/*productionlist*/
	let m1 = getinnerHTML('.search_prolist_title')
	let m2 = getinnerHTML('.search_prolist_comment>span')
	let m3 = getinnerHTML('.search_prolist_rate>span')
	let m4 = getinnerHTML('.word')
	let m5 = getinnerHTML('.int')
	let m6 = getinnerHTML('.shop_name')
	

	

	