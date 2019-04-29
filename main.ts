let signal = 0;
radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (signal < -90) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (signal < -80) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
radio.setGroup(1)