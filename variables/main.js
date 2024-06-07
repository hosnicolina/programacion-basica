kaboom();


loadSprite('emaster', '/variables/sprite.png')

let scale = .3
let color = rgb(20, 250, 250)
let text = "Press space to get funky"

function changeColor() {
    return {
        update(){
            this.color = color;
            // this.scale = scale;
        }
    }
}

const emaster = add([
    sprite('emaster'),
    pos(center()),
    anchor("center"),
    changeColor()
])


