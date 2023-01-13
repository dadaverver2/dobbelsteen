let ooo = 0
input.onGesture(Gesture.Shake, function () {
    ooo += randint(0, 6)
    basic.pause(2000)
    ooo = 0
})
basic.forever(function () {
    basic.showString("" + (ooo))
})
