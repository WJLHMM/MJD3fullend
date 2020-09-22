	/*get gridui imgsrc&title*/
	
let fs = require('fs')

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


/*productioninfo*/
let m = getimgsrc('.pic_list>li>img','src')
let m1 = getimgsrc('.shopLogo','src')


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

/*productioninfo*/
let sku = '1000'+Math.floor(Math.random()*1000000000)
let n = getinnerHTML('.fn_text_wrap')
let n1 = getinnerHTML('#itemDesc')
let n2 = getinnerHTML('#skuChoose1')
let n3 = getinnerHTML('.text')
let n4 = getinnerHTML('#evalRate')
let n5 = getinnerHTML('#evalNo2')
let n6 = getinnerHTML('.cmt_tag>span')
let n7 = getinnerHTML('._n')
let n8 = getinnerHTML('.jd')
let n9 = getinnerHTML('.num')
let n10 = getinnerHTML('.de_tag>em')
let n11 = getinnerHTML('.de_span>span')
let n12 = getinnerHTML('.detail_serve_item')
let n13 = getinnerHTML('.price>em')

