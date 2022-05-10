input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(9 * input.temperature() / 5 + 32)
})
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # # . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        . # . . .
        `)
}
basic.forever(function () {
	
})
