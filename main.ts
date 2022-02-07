input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    soundExpression.giggle.playUntilDone()
    basic.pause(1000)
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
    basic.pause(1000)
    basic.showIcon(IconNames.StickFigure)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Surprised)
    soundExpression.mysterious.play()
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.pause(1000)
    basic.showIcon(IconNames.StickFigure)
})
basic.showString("Ivan")
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
	
})
