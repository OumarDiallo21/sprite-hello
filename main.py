msg = "Hello People"
mySprite = sprites.create(img("""
        . . . . 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 f f 2 2 2 2 2 2 2 f f 2 . . 
            2 2 f f 2 2 2 2 2 2 2 f f 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 f 2 2 2 2 2 2 2 2 2 2 2 f 2 . 
            2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 . 
            . 2 2 f f f f f f f f f 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
scene.set_background_color(10)
mySprite.say(msg)