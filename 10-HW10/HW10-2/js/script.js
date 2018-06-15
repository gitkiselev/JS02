class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize;
		this.textAlign = textAlign;
	}
	createElement(text){
		let node = document.createElement('div');
		node.textContent = text;
		node.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; text-align: ${this.textAlign}`
		document.body.appendChild(node);
	}

}
let div = new options('100px', '100px', 'red', '14px', 'center');//задаем настройки стилей
let currentDiv = div.createElement('I am a div created by ES6');//выводим на страницу
