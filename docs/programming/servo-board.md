# Servo Board API

The kit can control multiple servos simultaneously. One Servo Board can
control up to eight servos.

## Accessing the Servo Board

The servo board can be accessed using the `servo_board` property of
the `Robot` object.

```python
from sbot import *

robot = Robot()

my_servo_board = robot.servo_board
```

This board object has an array containing the servos connected to it,
which can be accessed as `servos[0]`, `servos[1]`, `servos[2]`, etc.
The servo board is labelled so you know which servo is which.

:::tip
Remember that lists start counting at 0.
:::

## Setting servo positions

The position of servos can range from `-1` to `1` inclusive:

```python
# set servo 1's position to 0.2
robot.servo_board.servos[1].position = 0.2

# Set servo 2's position to -0.55
robot.servo_board.servos[2].position = -0.55
```

You can read the last value a servo was set to using similar code:

```python
last_position = robot.servo_board.servos[6].position
```

:::warning
While it is possible to retrieve the last position a servo was set to, this does not guarantee that the servo is currently in that position.
:::

## How the set position relates to the servo angle

The angle of an RC servo is controlled by the width of a pulse supplied
to it periodically. There is no standard for the width of this pulse and
there are differences between manufacturers as to what angle the servo
will turn to for a given pulse width. To be able to handle the widest
range of all servos our hardware outputs a very wide range of pulse
widths which in some cases will force the servo to try and turn past its
internal end-stops. You should experiment and find what the actual limit
of your servos are (it almost certainly won't be -1 and 1) and not
drive them past that.

