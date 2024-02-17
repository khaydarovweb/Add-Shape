const input = document.querySelector("input") as HTMLInputElement;
const select = document.querySelector("select") as HTMLSelectElement;
const addBtn = document.querySelector("button") as HTMLButtonElement;
const bottom = document.querySelector(".bottom") as HTMLDivElement;

class Shape {
    constructor(public shape: string, public size: number) {}

    randomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    createElm(shape: string, size: number) {
        if (shape === "square") {
            for (let i = 0; i < size; i++) {
                let square = document.createElement("div");
                square.classList.add("square");
                bottom.appendChild(square);
                square.style.backgroundColor =  this.randomColor();
            }
        }
        if (shape === "triangle") {
            for (let i = 0; i < size; i++) {
                let triangle = document.createElement("div");
                triangle.classList.add("triangle");
                bottom.appendChild(triangle);
                triangle.style.borderBottomColor = this.randomColor();
            }
        }
        if (shape === "round") {
            for (let i = 0; i < size; i++) {
                let round = document.createElement("div");
                round.classList.add("round");
                bottom.appendChild(round);
                round.style.backgroundColor = this.randomColor();
            }
        }
    }
}

addBtn.addEventListener("click", () => {
    const shape = new Shape(`${select.value}`, +input.value);
    shape.createElm(`${select.value}`, +input.value)
});