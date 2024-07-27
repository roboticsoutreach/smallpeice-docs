# Power Board API

The power board can be accessed using the `power_board` property of
the `Robot` object.

```python
from sbot import *

robot = Robot()

my_power_board = robot.power_board
```

## Power outputs

The seven outputs of the power board are grouped together as `power_board.outputs`.

Six of the power board's seven outputs can be turned on and off using the
`power_on` and `power_off` functions of the group respectively.
The L2 output is always on and cannot be turned off since it powers the Raspberry Pi.

:::tip
`power_on` is called when you set up your robot, so
this doesn't need to be called manually. The ports will come on
automatically as soon as your robot is ready, before the start button is
pressed.
:::

```python
robot.power_board.outputs.power_off()
robot.power_board.outputs.power_on()
```

You can also get information about and control each output in the group.
An output is indexed using the appropriate `PowerOutputPosition`.

The name of the value to access the output closely follows the name of the
output on the power board.

- H0: `PowerOutputPosition.H0`
- H1: `PowerOutputPosition.H1`
- L0: `PowerOutputPosition.L0`
- L1: `PowerOutputPosition.L1`
- L2: `PowerOutputPosition.L2` (always on)
- L3: `PowerOutputPosition.L3`
- 5V: `PowerOutputPosition.FIVE_VOLT`

```python
from sbot import PowerOutputPosition

# Enable H0 and disable L3
robot.power_board.outputs[PowerOutputPosition.H0].is_enabled = True
robot.power_board.outputs[PowerOutputPosition.L3].is_enabled = False

# Check if L2 is enabled
boolean_value = robot.power_board.outputs[PowerOutputPosition.L2].is_enabled

# Get the current in amps of H1
current_amps = robot.power_board.outputs[PowerOutputPosition.H1].current
```

:::warning
The motor and servo boards are powered through these
power outputs, whilst the power is off, you won't be able to control
your motors or servos. They will register as a missing board and your code will
break if you try to control them.
:::

## Battery Sensor

The power board has some sensors that can monitor the status of your battery.
This can be useful for checking the charge status of your battery.

```python
# Get the current battery voltage
battery_voltage = robot.power_board.battery_sensor.voltage

# Get the current battery current in amps
battery_current_amps = robot.power_board.battery_sensor.current
```

## Buzzing 🐝

The power board has a piezo sounder which can buzz.

The `buzz` function accepts two parameters.
The first argument is either the note you want to play, or the frequency of the buzzer (in Hertz).
The second argument is the duration of the beep, in seconds.

Theoretically, the piezo buzzer will buzz at any provided frequency,
however humans can only hear between [20Hz and
20000Hz](https://en.wikipedia.org/wiki/Hearing_range#Humans).

The `Note` enum provides notes in [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation) between
`C6` and `C8`. You can play other tones by providing a frequency.

:::tip
Calling `buzz` is non-blocking, which means it doesn't
actually wait for the piezo to stop buzzing before continuing with your
code. If you want to wait for the buzzing to stop, add a
`sleep` afterwards!
:::

```python
from sbot import Note

# Buzz in D6 for half a second
robot.power_board.piezo.buzz(Note.D6, 0.5)

# Buzz at 400Hz for 2 seconds
robot.power_board.piezo.buzz(400, 2)
```

## Start Button

You can manually wait for the start button to be pressed, not only at
the start.

```python
robot.wait_start()
```

This may be useful for debugging, but be sure to remove it in the
competition, as you won't be allowed to touch the start button after a match has begun!

