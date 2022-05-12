namespace SpriteKind {
    export const Player_Cos = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Jump_CNT == 0) {
        PlayerChar.setVelocity(0, -250)
        Jump_CNT += 1
    }
})
function JumpInhibit () {
    if (Jump_CNT >= 1) {
        pause(500)
        Jump_CNT = 0
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
    HeadBand_COS.setImage(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . 2 2 2 2 . 
        . . 2 . . . . . 
        2 2 2 2 2 2 2 . 
        2 2 2 . . . . 2 
        . . . . . . . . 
        . . . . . . . . 
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
    HeadBand_COS.setImage(img`
        . . . . . . . . 
        . . . . . . . . 
        . 2 2 2 2 . . . 
        . . . . . 2 . . 
        . 2 2 2 2 2 2 2 
        2 . . . . 2 2 2 
        . . . . . . . . 
        . . . . . . . . 
        `)
})
function FollowController () {
    HeadBand_COS.setPosition(PlayerChar.x - 9, PlayerChar.y - 5)
}
let Jump_CNT = 0
let HeadBand_COS: Sprite = null
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
HeadBand_COS = sprites.create(img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . 2 2 2 2 . . . 
    . . . . . . . 2 . . 
    . . . 2 2 2 2 2 2 2 
    . . 2 . . . . 2 2 2 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, SpriteKind.Player_Cos)
scene.cameraFollowSprite(PlayerChar)
controller.moveSprite(PlayerChar, 100, 0)
Jump_CNT = 0
forever(function () {
    JumpInhibit()
    FollowController()
    PlayerChar.ay = 1150
})
