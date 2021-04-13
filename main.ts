let red = sprites.create(img`
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
    `, SpriteKind.Player)
let pink = sprites.create(img`
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 f f 3 3 3 3 3 3 3 f f 3 . . 
    3 3 f f 3 3 3 3 3 3 3 f f 3 3 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 3 3 3 3 f 3 3 3 3 3 3 3 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 f 3 3 3 3 3 3 3 3 3 3 3 f 3 . 
    3 3 f 3 3 3 3 3 3 3 3 3 f 3 3 . 
    . 3 3 f f f f f f f f f 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let msg = "what did the cow say to the pig"
let msg2 = "Mooovve"
red.setPosition(130, 39)
red.say(msg, 2000)
console.log("hello console")
scene.setBackgroundColor(1)
red.say(msg, 5000)
pause(5000)
pink.say(msg2, 5000)
