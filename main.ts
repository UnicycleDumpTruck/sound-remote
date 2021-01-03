radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == current_sound && need_ack) {
        need_ack = false
    }
})
function send_ack_show () {
    need_ack = true
    for (let index = 0; index < 4; index++) {
        radio.sendNumber(current_sound + 60)
        basic.pause(200)
        if (!(need_ack)) {
            basic.showString("" + (text_list[0]))
            break;
        }
    }
    current_sound = -1
}
input.onButtonPressed(Button.A, function () {
    current_sound = randint(0, text_list.length - 1)
    send_ack_show()
})
input.onButtonPressed(Button.AB, function () {
    current_sound = 1
    send_ack_show()
})
input.onButtonPressed(Button.B, function () {
    current_sound = 0
    send_ack_show()
})
let text_list: string[] = []
let current_sound = 0
let need_ack = false
radio.setGroup(1)
need_ack = false
current_sound = -1
// The Office
text_list = ["BDay", "Pretzel"]
basic.forever(function () {
	
})
