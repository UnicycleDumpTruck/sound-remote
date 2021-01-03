radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == current_sound) {
        need_ack = false
    }
})
function send_ack_show () {
    need_ack = true
    for (let index = 0; index < 3; index++) {
        radio.sendNumber(current_sound)
        basic.pause(200)
        if (!(need_ack)) {
            basic.showString("" + (text_list[current_sound - theme_tens + 1]))
            break;
        }
    }
    current_sound = -1
}
input.onButtonPressed(Button.A, function () {
    current_sound = randint(1, text_list.length - 1) + theme_tens
    send_ack_show()
})
input.onButtonPressed(Button.AB, function () {
    current_sound = 1 + theme_tens
    send_ack_show()
})
input.onButtonPressed(Button.B, function () {
    current_sound = 0 + theme_tens
    send_ack_show()
})
let theme_tens = 0
let text_list: string[] = []
let current_sound = 0
let need_ack = false
radio.setGroup(1)
need_ack = false
current_sound = -1
// 60 The Office
text_list = ["60", "BDay", "Pretzel"]
theme_tens = parseFloat(text_list[0])
basic.showNumber(theme_tens)
basic.forever(function () {
	
})
