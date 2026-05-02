light_level = 0
OLED.init(128, 64)

def on_forever():
    global light_level
    light_level = smarthome.read_light_intensity(AnalogPin.P4)
    OLED.clear()
    if light_level < 90:
        basic.show_icon(IconNames.SAD)
        OLED.write_string_new_line("Low light!")
        OLED.write_string_new_line("Light switch: ON")
        smarthome.relay(DigitalPin.P16, smarthome.RelayStateList.ON)
    else:
        basic.show_icon(IconNames.HAPPY)
        OLED.write_string_new_line("Light level:")
        OLED.write_num_new_line(light_level)
        OLED.write_string_new_line("Light switch: OFF")
        smarthome.relay(DigitalPin.P16, smarthome.RelayStateList.OFF)
    basic.pause(500)
basic.forever(on_forever)
