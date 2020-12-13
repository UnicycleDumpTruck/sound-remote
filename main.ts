function show_and_send (num: number) {
    radio.sendNumber(num + 10)
    basic.showString("" + (text_list[num]))
}
input.onButtonPressed(Button.A, function () {
    show_and_send(randint(0, text_list.length - 1))
})
input.onButtonPressed(Button.AB, function () {
    show_and_send(1)
})
input.onButtonPressed(Button.B, function () {
    show_and_send(7)
})
let text_list: string[] = []
radio.setGroup(1)
text_list = ["Sap", "Dump", "Cars", "Gift", "Tree", "Line", "Full", "Wet"]
basic.forever(function () {
	
})
