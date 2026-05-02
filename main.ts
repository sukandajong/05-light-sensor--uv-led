let light_level = 0
OLED.init(128, 64)
basic.forever(function on_forever() {
    
    light_level = smarthome.ReadLightIntensity(AnalogPin.P4)
    OLED.clear()
    if (light_level < 90) {
        basic.showIcon(IconNames.Sad)
        OLED.writeStringNewLine("Low light!")
        OLED.writeStringNewLine("Light switch: ON")
        smarthome.Relay(DigitalPin.P16, smarthome.RelayStateList.On)
    } else {
        basic.showIcon(IconNames.Happy)
        OLED.writeStringNewLine("Light level:")
        OLED.writeNumNewLine(light_level)
        OLED.writeStringNewLine("Light switch: OFF")
        smarthome.Relay(DigitalPin.P16, smarthome.RelayStateList.Off)
    }
    
    basic.pause(500)
})
