input.onPinPressed(TouchPin.P0, function () {
    x = 4
    y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        basic.pause(100)
        x += -1
        y += 1
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    counter = 5
    while (counter >= 0) {
        basic.showNumber(counter)
        counter += -1
    }
    music.playMelody("B F A D G E F C5 ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(147, music.beat(BeatFraction.Double))
        while (input.lightLevel() >= 128) {
            basic.showIcon(IconNames.Happy)
            music.playTone(294, music.beat(BeatFraction.Double))
        }
    }
})
let counter = 0
let y = 0
let x = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (true) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Left, 90)
        basic.pause(100)
    }
})
