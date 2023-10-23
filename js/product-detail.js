window.onload = function () {
	
	function formatCurrency(number) {
		return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
	}
	const mockData = {
		id: "product_name_id",
		product_name: "Apple iPhone 14 Pro Max asdfasd",
		variants: [
			{
				sku: "sliver",
				variant_name: "Bạc",
				price: 10000000000,
				current_price: 150000000,
				stock: 1000,
				variant_image: "https://salt.tikicdn.com/cache/100x100/ts/product/ff/56/67/959c1f0452a2fe7e4f3453a9d77bb809.png.webp",
				images: [
					{
						id: '8fbbccd2-153f-4a84-88cc-eeb6ca89989d',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/0f/08/21/d46f8159e0ad5dff0192b9316e7d415f.png.webp'
					},
					{
						id: '74a25941-614d-4963-a62a-76ea830ba740',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/e4/08/d7/1aadbc6b25cd5688c1640b78bc504361.jpg.webp'
					},
					{
						id: '34f8b5c7-6427-4e53-9384-4e70e1d8e255',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/fc/12/78/74f6b93c99df7051adcc932b2f48e92a.jpg.webp'
					},
					{
						id: '7f7fbc13-1a5d-4f8d-aab0-2b2a7397f4a3',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/9e/f1/81/0c4346469531d019026114d779f5ad34.jpg.webp'
					},
					{
						id: 'c4df96d3-3e01-493e-a7a4-cdcf1e4a193c',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/b7/11/3f/081308de1206063bfca038dd1c2399c7.jpg.webp'
					},
					{
						id: '032fbf50-8f8a-4a49-b8cb-e68eeed44c15',
						src: 'https://salt.tikicdn.com/cache/750x750/ts/product/24/df/c4/38a13f551fe78eddb0720604ae4f460c.jpg.webp'
					},
					{
						id: '3432c8a4-7f88-4d2d-9b29-424b816ba4c2',
						src: 'https://salt.tikicdn.com/cache/750x750/ts/product/e9/58/9e/d149ae8e4cb281dd455573b6322912ba.jpg.webp'
					},
				],
			},
			{
				sku: "purple",
				variant_name: "Tím",
				price: 10000000002,
				current_price: 150000002,
				stock: 1002,
				variant_image: "https://salt.tikicdn.com/cache/100x100/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp",
				images: [
					{
						id: '8fbbccd2-153f-4a84-88cc-eeb6ca89989d',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/0f/08/21/d46f8159e0ad5dff0192b9316e7d415f.png.webp'
					},
					{
						id: '74a25941-614d-4963-a62a-76ea830ba740',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/e4/08/d7/1aadbc6b25cd5688c1640b78bc504361.jpg.webp'
					},
					{
						id: '34f8b5c7-6427-4e53-9384-4e70e1d8e255',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/fc/12/78/74f6b93c99df7051adcc932b2f48e92a.jpg.webp'
					},
					{
						id: '7f7fbc13-1a5d-4f8d-aab0-2b2a7397f4a3',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/9e/f1/81/0c4346469531d019026114d779f5ad34.jpg.webp'
					},
					{
						id: 'c4df96d3-3e01-493e-a7a4-cdcf1e4a193c',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/b7/11/3f/081308de1206063bfca038dd1c2399c7.jpg.webp'
					},
					{
						id: '032fbf50-8f8a-4a49-b8cb-e68eeed44c15',
						src: 'https://salt.tikicdn.com/cache/750x750/ts/product/24/df/c4/38a13f551fe78eddb0720604ae4f460c.jpg.webp'
					},
					{
						id: '3432c8a4-7f88-4d2d-9b29-424b816ba4c2',
						src: 'https://salt.tikicdn.com/cache/750x750/ts/product/e9/58/9e/d149ae8e4cb281dd455573b6322912ba.jpg.webp'
					},
				],
			},
			{
				sku: "yellow",
				variant_name: "Vàng",
				price: 10000000001,
				current_price: 150000001,
				stock: 1001,
				variant_image: "https://salt.tikicdn.com/cache/100x100/ts/product/0c/dd/e7/e6431984901119a1f8166cc4e579da93.png.webp",
				images: [
					{
						id: '8fbbccd2-153f-4a84-88cc-eeb6ca89989d',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/0f/08/21/d46f8159e0ad5dff0192b9316e7d415f.png.webp'
					},
					{
						id: '74a25941-614d-4963-a62a-76ea830ba740',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/e4/08/d7/1aadbc6b25cd5688c1640b78bc504361.jpg.webp'
					},
					{
						id: '34f8b5c7-6427-4e53-9384-4e70e1d8e255',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/fc/12/78/74f6b93c99df7051adcc932b2f48e92a.jpg.webp'
					},
					{
						id: '7f7fbc13-1a5d-4f8d-aab0-2b2a7397f4a3',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/9e/f1/81/0c4346469531d019026114d779f5ad34.jpg.webp'
					},
					{
						id: 'c4df96d3-3e01-493e-a7a4-cdcf1e4a193c',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/b7/11/3f/081308de1206063bfca038dd1c2399c7.jpg.webp'
					},
					{
						id: '032fbf50-8f8a-4a49-b8cb-e68eeed44c15',
						src: 'https://salt.tikicdn.com/cache/750x750/ts/product/24/df/c4/38a13f551fe78eddb0720604ae4f460c.jpg.webp'
					},
					{
						id: '3432c8a4-7f88-4d2d-9b29-424b816ba4c2',
						src: 'https://salt.tikicdn.com/cache/750x750/ts/product/e9/58/9e/d149ae8e4cb281dd455573b6322912ba.jpg.webp'
					},
				],
			},
			{
				sku: "Black",
				variant_name: "Đen",
				price: 10000000003,
				current_price: 150000003,
				stock: 1003,
				variant_image: "https://salt.tikicdn.com/cache/100x100/ts/product/0f/08/21/d46f8159e0ad5dff0192b9316e7d415f.png.webp",
				images: [
					{
						id: '8fbbccd2-153f-4a84-88cc-eeb6ca89989d',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/0f/08/21/d46f8159e0ad5dff0192b9316e7d415f.png.webp'
					},
					{
						id: '74a25941-614d-4963-a62a-76ea830ba740',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/e4/08/d7/1aadbc6b25cd5688c1640b78bc504361.jpg.webp'
					},
					{
						id: '34f8b5c7-6427-4e53-9384-4e70e1d8e255',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/fc/12/78/74f6b93c99df7051adcc932b2f48e92a.jpg.webp'
					},
					{
						id: '7f7fbc13-1a5d-4f8d-aab0-2b2a7397f4a3',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/9e/f1/81/0c4346469531d019026114d779f5ad34.jpg.webp'
					},
					{
						id: 'c4df96d3-3e01-493e-a7a4-cdcf1e4a193c',
						src: 'https://salt.tikicdn.com/cache/100x100/ts/product/b7/11/3f/081308de1206063bfca038dd1c2399c7.jpg.webp'
					},
					{
						id: '032fbf50-8f8a-4a49-b8cb-e68eeed44c15',
						src: 'https://salt.tikicdn.com/cache/750x750/ts/product/24/df/c4/38a13f551fe78eddb0720604ae4f460c.jpg.webp'
					},
					{
						id: '3432c8a4-7f88-4d2d-9b29-424b816ba4c2',
						src: 'https://salt.tikicdn.com/cache/750x750/ts/product/e9/58/9e/d149ae8e4cb281dd455573b6322912ba.jpg.webp'
					},
				],
			},
		]
	}
	
	const SELECTOR = {
		PRODUCT_NAME: ".product-detail__title",
		STOCK: "#stock",
		CURRENT_PRICE: "#current_price",
		ORIGIN_PRICE: "#origin_price",
		VARIANT_CONTAINER :".package-list",
		SLIDE_CONTAINER:".swiper-wrapper"
	}
	const _handleRenderValueHTML = (selector, value) => {
		const ele = document.querySelector(selector);
		if (!ele) {
			return
		}
		ele.innerText = value
	}
	
	
	const _handleLoadVariants = (sku,src, title ,isActive ) => {
		const ele = document.querySelector(SELECTOR.VARIANT_CONTAINER);
		
		if(!ele) {
			return
		}
		
		const package = `
		 <div
		          data-key="${sku}"
                  data-view-id="pdp_main_select_configuration_item"
                  data-view-index="0"
                  class="styles__FigureOptionWrapper-sc-8h5g7n-0 jvxsod ${isActive && "active"}"
                  title="${sku}"
                >
                  <div class="option-figure" style="">
                    <picture class="webpimg-container w-100 h-100"
                      ><source
                        type="image/webp"
                        src="
                          ${src} 1x " />
                      <img
                        alt="thumbnail"
                        src="${src}"
                        class="WebpImg__StyledImg-sc-h3ozu8-0 w-100 h-100 object-fit-cover fWjUGo"
                    /></picture>
                  </div>
                  <span class="option-label">${title}</span>
	                  ${isActive ? `<img
                    class="selected-indicator"
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                    alt="Selected"
                  />` : ``}
                </div>
	`
		ele.innerHTML += package
		
	}
	const _handleLoadSlide = images => {
		const SlideWrapper = document.querySelector(SELECTOR.SLIDE_CONTAINER)
		const bigSlide = document.querySelector(".big-image")
		bigSlide.innerHTML += ` <img
		src="https://salt.tikicdn.com/cache/750x750/ts/product/0f/08/21/d46f8159e0ad5dff0192b9316e7d415f.png.webp"
		className="w-100 h-100 object-fit-cover"
		alt=""
	/>`
		images.forEach((img) =>  {
			SlideWrapper.innerHTML += ` <div class="swiper-slide">
                  <img
                    src="${img.src}"
                    class="w-100 h-100 object-fit-cover small-img"
                    alt="list image small product"
                  />
                </div>`
		})
		document.querySelectorAll(".small-img").forEach((ele) => {
			ele.addEventListener("click",(e) => {
				const srcImage = ele.getAttribute("src")
				document.querySelector("#big-image").src=srcImage
			})
		})
	}
	
	
	const loadData = (data) => {
		console.log(data)
		if (!data) {
			return
		}
		const {product_name, variants} = data
		_handleRenderValueHTML(SELECTOR.PRODUCT_NAME, product_name)
		variants.forEach((variant, idx) => {
			const {
				variant_name,
				current_price,
				price,
				variant_image,
				stock,
				sku,
				images
			} = variant
			const isActive = idx === 0 // default active first variant
			if (isActive) {
				if (current_price) {
					_handleRenderValueHTML(SELECTOR.CURRENT_PRICE, formatCurrency(current_price))
					_handleRenderValueHTML(SELECTOR.ORIGIN_PRICE, formatCurrency(price))
				} else {
					_handleRenderValueHTML(SELECTOR.CURRENT_PRICE, formatCurrency(price))
				}
				_handleLoadSlide(images)
			}
			_handleRenderValueHTML(SELECTOR.STOCK,stock)
			_handleLoadVariants(sku,variant_image,variant_name,isActive,)
		})
	}
	
	loadData(mockData)
	
	document.querySelectorAll('.jvxsod').forEach(ele => {
		ele.addEventListener('click', function (e) {
			// remove active current
			const currentActive = document.querySelector('.jvxsod.active')
			
			if (currentActive) {
				currentActive.classList.remove('active')
				const symbolActive = currentActive.querySelector('img.selected-indicator');
				if(symbolActive) {
					symbolActive.remove()
				}
			}
			
			// active this element
			const symbolActive = `<img
                    class="selected-indicator"
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                    alt="Selected"
                  />`
			this.classList.add('active')
			this.innerHTML += symbolActive
			
			//apply new information of active variant
			const sku = this.getAttribute('data-key')
			const activeVariant = mockData.variants.find(variant => variant.sku === sku)
			if(activeVariant) {
				const {
					current_price,
					price,
					stock,
				} = activeVariant
				if (current_price) {
					_handleRenderValueHTML(SELECTOR.CURRENT_PRICE, formatCurrency(current_price))
					_handleRenderValueHTML(SELECTOR.ORIGIN_PRICE, formatCurrency(price))
				} else {
					_handleRenderValueHTML(SELECTOR.CURRENT_PRICE, formatCurrency(price))
				}
				_handleRenderValueHTML(SELECTOR.STOCK,stock)
				_handleLoadSlide(activeVariant.images)
				
			}
		})
	})
	const swiper = new Swiper(".swiper", {
		// Optional parameters
		direction: "horizontal",
		loop: true,
		slidesPerView: 5,
		spaceBetween: 20,
		
		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	
	const listPackageSize = document.querySelectorAll(".iuHuWV")
	if (listPackageSize.length > 0 ) {
		listPackageSize.forEach(package => {
			const attr = package.getAttribute("data-package-name")
			package.addEventListener("click", function () {
				const className =`div.iuHuWV.active[data-package-name="${attr}"]`
				document.querySelector(className).classList.remove("active")
				package.classList.add("active")
			})
		})
	}
	
	
	
	
}