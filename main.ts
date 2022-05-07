let Temp = 0
input.onGesture(Gesture.Shake, function () {
    Temp = input.temperature()
    basic.showNumber(Temp)
})
basic.forever(function () {
	
})
