namespace SpriteKind {
    export const Player_Cos = SpriteKind.create()
    export const Image_Scene = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Jump_CNT == 0) {
        PlayerChar.vy = -300
        Jump_CNT += 1
    }
})
function JumpInhibit () {
    if (Jump_CNT >= 1) {
        if (Jump_CNT == 1) {
            pause(500)
            Jump_CNT = 0
        } else {
            PlayerChar.setVelocity(0, 0)
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerChar.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        e e e e e e e e e e e e e e . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        a a a a e e e e e e e e e e 2 . 
        a a a a a a a a a a a a a e . 2 
        a a a a a a a a a a a a a e 2 2 
        a a a a a a a a a a a a a a 2 2 
        a a a a a a a a a a a a a c 2 . 
        a a a a a a a a a a a a c c 2 . 
        a a a a a a a a a a a c c a . . 
        a a a a a a a a a a a c a c . . 
        a a c c a a a a a a a c a c . . 
        c c a a c c c c a a c a c a . . 
        c c c c c c c c c c c c c c . . 
        c c c c c c c c c c c c c c . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerChar.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e e e e e e e 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 e e e e e e e e e e a a a a 
        2 . e a a a a a a a a a a a a a 
        2 2 e a a a a a a a a a a a a a 
        2 2 a a a a a a a a a a a a a a 
        . 2 c a a a a a a a a a a a a a 
        . 2 c c a a a a a a a a a a a a 
        . . a c c a a a a a a a a a a a 
        . . c a c a a a a a a a a a a a 
        . . c a c a a a a a a a c c a a 
        . . a c a c a a c c c c a a c c 
        . . c c c c c c c c c c c c c c 
        . . c c c c c c c c c c c c c c 
        `)
})
function FollowController () {
	
}
let Jump_CNT = 0
let PlayerChar: Sprite = null
tiles.setCurrentTilemap(tilemap`BeginnerLvl`)
PlayerChar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . e e e e e e e e e e e e e e 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 e e e e e e e e e e a a a a 
    2 . e a a a a a a a a a a a a a 
    2 2 e a a a a a a a a a a a a a 
    2 2 a a a a a a a a a a a a a a 
    . 2 c a a a a a a a a a a a a a 
    . 2 c c a a a a a a a a a a a a 
    . . a c c a a a a a a a a a a a 
    . . c a c a a a a a a a a a a a 
    . . c a c a a a a a a a c c a a 
    . . a c a c a a c c c c a a c c 
    . . c c c c c c c c c c c c c c 
    . . c c c c c c c c c c c c c c 
    `, SpriteKind.Player)
PlayerChar.setPosition(4, 200)
Jump_CNT = 0
controller.moveSprite(PlayerChar, 60, 0)
pause(1000)
scene.cameraFollowSprite(PlayerChar)
forever(function () {
    JumpInhibit()
    FollowController()
    PlayerChar.ay = 1000
})
forever(function () {
    info.setScore(PlayerChar.y)
})
forever(function () {
    if (PlayerChar.vx > 25) {
        PlayerChar.ax = 0
    } else if (PlayerChar.vx < -25) {
        PlayerChar.ax = 0
    }
})
