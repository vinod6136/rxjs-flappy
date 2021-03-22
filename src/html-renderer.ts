const createElem = (col: number) => {
	const elem:any = document.createElement("div");
	elem.classList.add("board");
	elem.style.display = "inline-block";
	elem.style.marginLeft = "10px";
	elem.style.height = "6px";
	elem.style.width = "6px";
	elem.style["background-color"] =
		col === 0
			? "white"
			: col === 1
			? "cornflowerblue"
			: col === 2
			? "gray"
			: "silver";
	elem.style["border-radius"] = "90%";
	return elem;
};

export const paint = (game: number[][], lives: any, score: any) => {
	document.querySelector(
		"#game"
	).innerHTML = `Lives: ${lives}, Score: ${score}`;

	game.forEach((row) => {
		const rowContainer = document.createElement("div");
		row.forEach((col) => rowContainer.appendChild(createElem(col)));
		document.querySelector("#game").appendChild(rowContainer);
	});
};