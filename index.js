const info = [
	{
		src:"https://images.unsplash.com/photo-1495991602988-b15030d76a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFlc3RoZXRpYyUyMGZsb3dlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		alt:"Flowers",
		mes:"Wow flower Happy birthday"
	},
	{
		src:"https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
		alt:"Wine",
		mes:"Mmmmmm wine Happy birthday"
	},
	{
		src:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		alt:"Europe",
		mes:"Wow europe Happy birthday"
	},
	{
		src:"https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		alt:"Europe?",
		mes:"Ooooo Europe nasad Happy birthday"
	},
	{
		src:"https://images.unsplash.com/photo-1534131707746-25d604851a1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		alt:"Photography",
		mes:"Picture sa o kay birthday"
	},
	{
		src:"https://images.unsplash.com/photo-1546377791-2e01b4449bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80",
		alt:"Pet",
		mes:"Owa owa (Happy birthday daw)"
	},
	{
		src:"https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		alt:"Books",
		mes:"Happy birthday from your books"
	},
	{
		src:"https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
		alt:"Coffee",
		mes:"Happy birthday from your coffee?"
	},
	{
		src:"https://images.unsplash.com/photo-1542383578-000e248cde3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		alt:"Travel",
		mes:"Ambot bitaw unsa ni basta Happy birthday denise HAHAHAH"
	}
];

let cont = document.querySelector('.cont');

info.forEach((elem)=>{
	let newNode = document.createElement('img');
	let nodeCont = document.createElement('div');

	nodeCont.className = "ml-2 w-auto h-cus mw head br-15 over-hide fadeInLeft img-cont";
	newNode.src = elem.src;
	newNode.alt = elem.alt;
	newNode.className = "fit hide cur";
	nodeCont.appendChild(newNode);
	cont.appendChild(nodeCont);
})

let cur = 0;

const display = (row)=>{
	while(cur<row*3){
		cont.children[cur].children[0].classList.remove('hide');
		cont.children[cur].children[0].style.animation = 'fade-1 ${.5+(cur/10)}s ease-in-out';
		cur++;
	}
	if(cur === 9){
		document.querySelector('#ins').classList.remove('hide');
		for (var i = 0; i <cont.children.length; i++) {
			let element = cont.children[i].children[0];
			element.addEventListener('click',()=>{
				let modal = document.querySelector('.bg-mod');
				modal.classList.remove('hide');
				modal.addEventListener('click',()=>modal.classList.add('hide'))

				let img = document.querySelector('#modal-img')
				let txt = document.querySelector('.modal-txt')

				img.src = element.src;
				let text = info.filter((elem)=>elem.alt === element.alt)
				txt.innerHTML = text[0].mes;
			})
		}
	}
}

let btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
	let targets = document.querySelectorAll('.ques');

	targets.forEach((elem,ndx)=>{
		elem.style.visibility = 'visible';
		elem.onclick = ()=>{
			display(ndx+1);
		}
	})

	btn.style.visibility = "hidden";
})