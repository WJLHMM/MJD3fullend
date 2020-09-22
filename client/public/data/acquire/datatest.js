{
/*get carousel img src*/
	// let fs = require('fs')
	let carouselimgsrc = [];
	let nodelists = document.querySelectorAll('.slide-li>a>img');

	for(let i=0;i<=nodelists.length;i++) {
		let imgsrc = ''
	    if(nodelists[i]&&nodelists[i].getAttribute("src")){
			imgsrc = 'https:' + nodelists[i].getAttribute("src")
		    carouselimgsrc.push(imgsrc)
		}
	};
	// fs.writeFile('../public/data.txt', carouselimgsrc, { 'flag': 'a' }, function(err) {
	//     if (err) {
	//         throw err;
	//     }
	 
	//     console.log('Hello.');

	// });


}


{
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

	let m = getimgsrc('.box>img','src')

	function getinnerHTML(dom,attr) {
		let innerHTMLstr = [];
		let nodelists = document.querySelectorAll(dom);

		for(let i=0;i<=nodelists.length;i++) {
		    if(nodelists[i]&&nodelists[i].attr){
				innerhtmlitem = nodelists[i].attr
			    innerHTMLstr.push(innerhtmlitem)
			}
		};
		return innerHTMLstr
	}
	let m = getimgsrc('.J_ping>img','src')
	

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
	let m = getimgsrc('.pic_list>li>img','src')
	
	let n = getinnerHTML('.detail_serve_item')
	
	let n1 = getinnerHTML('.cmt_tag>span')

	function getinnerHTML(dom,a) {
		let innerHTMLstr = [];
		let nodelists = document.querySelectorAll(dom);
		for(let i=0;i<=nodelists.length;i++){
			if(nodelists[i]&&nodelists[i].a){
				innerHTMLstr.push(nodelists[i].a)
			}
		}
		return innerHTMLstr
	}

	let n = getinnerHTML('.box>span','innerText')

	// function getinnerHTML(dom,attr) {
	// 	let nodelists = document.querySelectorAll('.box>span');
	// 	for(let i=0;i<=nodelists.length;i++) {
	// 	    if(nodelists[i]&&nodelists[i].innerText){
	// 			innerHTMLstr.push(nodelists[i].innerText)
	// 		}
	// 	}
	// }

	let n = getinnerHTML('.box>span','innerText')
}

{
  /*get sksection img src*/
   function sksectiondata() {
		let sksectionimgsrc = [];
		let sksectioncurrent = [];
		let sksectionoldprice = [];
		let sksectionimgsrclists = document.querySelectorAll('.seckill-photo');
		let sksectioncurrentlists = document.querySelectorAll('.seckill-new-price>span');
		let sksectionoldlists = document.querySelectorAll('.seckill-original-price>span');

		for(let i=0;i<sksectionimgsrclists.length;i++) {
			
		    if(sksectionimgsrclists[i]&&sksectionimgsrclists[i].getAttribute('src')){
				 sksectionimgsrc.push(sksectionimgsrclists[i].getAttribute('src'))
			   
			}

			if(sksectioncurrentlists[i]&&sksectioncurrentlists[i].innerText){
				sksectioncurrent.push(sksectioncurrentlists[i].innerText)
			    
			} 

			if(sksectionoldlists[i]&&sksectionoldlists[i].innerText){
				 sksectionoldprice.push(sksectionoldlists[i].innerText)
			}
		}
		return {
			sksectionimgsrc,
			sksectioncurrent,
			sksectionoldprice
		}
	}

}

{	/*get djxy dailshop data*/
	function djxyadvdata() {
		let djxyadvimgsrc = [];
		let djxyadvcurrent = [];
		let djxyadvoldprice = [];
		let djxyadvimgsrclists = document.querySelectorAll('.opa1');
		let djxyadvcurrentlists = document.querySelectorAll('.graphic-tit');
		let djxyadvoldlists = document.querySelectorAll('.graphic-wz');

		for(let i=0;i<djxyadvimgsrclists.length;i++) {
			
		    if(djxyadvimgsrclists[i]&&djxyadvimgsrclists[i].getAttribute('src')){
				 djxyadvimgsrc.push(djxyadvimgsrclists[i].getAttribute('src'))
			   
			}

			if(djxyadvcurrentlists[i]&&djxyadvcurrentlists[i].innerText){
				djxyadvcurrent.push(djxyadvcurrentlists[i].innerText)
			    
			} 

			if(djxyadvoldlists[i]&&djxyadvoldlists[i].innerText){
				 djxyadvoldprice.push(djxyadvoldlists[i].innerText)
			}
		}
		return {
			djxyadvimgsrc,
			djxyadvcurrent,
			djxyadvoldprice
		}
	}
	djxyadvdata()
}

{	/*get recommend data*/
	function djxyadvdata() {
		let djxyadvimgsrc = [];
		let djxyadvcurrent = [];
		let djxyadvoldprice = [];
		let djxyadvimgsrclists = document.querySelectorAll('.j_rec_goods_pic');
		let djxyadvcurrentlists = document.querySelectorAll('.similar-product-text');
		let djxyadvoldlists = document.querySelectorAll('.big-price');

		for(let i=0;i<djxyadvimgsrclists.length;i++) {
			
		    if(djxyadvimgsrclists[i]&&djxyadvimgsrclists[i].getAttribute('src')){
				 djxyadvimgsrc.push(djxyadvimgsrclists[i].getAttribute('src'))
			   
			}

			if(djxyadvcurrentlists[i]&&djxyadvcurrentlists[i].innerText){
				djxyadvcurrent.push(djxyadvcurrentlists[i].innerText)
			    
			} 

			if(djxyadvoldlists[i]&&djxyadvoldlists[i].innerText){
				 djxyadvoldprice.push(djxyadvoldlists[i].innerText)
			}
		}
		return {
			djxyadvimgsrc,
			djxyadvcurrent,
			djxyadvoldprice
		}
	}
	djxyadvdata()
}