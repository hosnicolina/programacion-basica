const game = kaboom({
  background: [0, 191, 255],
})

loadSprite('emaster', '/sprite.png')
if (isGravity) {
  setGravity(1600)
}

const emaster = add([
  sprite('emaster'),
  pos(posSprite),
  scale(escaleSprite),
  anchor('center'),
  area(),
  body(),
])

emaster.onGround(() => {
  if (isJumpingSprite) {
    emaster.jump(force)
  }
})

emaster.onUpdate(() => {
  if (isRotateSprite) {
    emaster.angle = angleSprite * time()
  }
  if (emaster.vel.y > 7000) {
    game.add([text('Recarga la pagina por favor'), pos(center())])
  }
}) 

// Add a platform to hold the player
add([
  rect(width(), 48),
  outline(4),
  area(),
  pos(0, height() - 48),
  body({ isStatic: true }),
])

add([text(textTitle), pos(80, 80)])

add([text(`puede saltar ${isJumpingSprite}`), pos(80, 130)])
add([text(`esta rotando? ${isRotateSprite}`), pos(80, 180)])
add([text(`hay gravedad ${isGravity}`), pos(80, 230)])

const textMove = add([text(`se esta moviendo ${isMove}`), pos(80, 280)])

onKeyDown('left', () => {
  // .move() is provided by pos() component, move by pixels per second
  emaster.move(-SPEED, 0)
  isMove = true
  textMove.text = `se esta moviendo ${isMove}`
})


onKeyDown('right', () => {
  emaster.move(SPEED, 0)
  isMove = true
  textMove.text = `se esta moviendo ${isMove}`
})


onKeyDown("up", () => {
	emaster.move(0, -SPEED)
    isMove = true
    textMove.text = `se esta moviendo ${isMove}`
})

onKeyDown("down", () => {
	emaster.move(0, SPEED)
    isMove = true
    textMove.text = `se esta moviendo ${isMove}`
})

onKeyRelease(()=>{
    isMove = false
    textMove.text = `se esta moviendo ${isMove}`
})