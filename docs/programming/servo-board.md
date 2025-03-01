# Servo Board API

The kit can control multiple servos simultaneously. One Servo Board can
control up to eight servos.

## Accessing the Servo Board

The servo board can be accessed using the `servos` submodule in `sbot`:

```python
from sbot import servos
```

Servos are accessed by their index: the servo connected to position 0 on the board should be accessed as id `0`, and so on.
The servo board is labelled so you know which servo is which.

:::tip
Remember that lists start counting at 0.
:::

## Setting servo positions

The position of servos can range from `-1` to `1` inclusive:

```python
# set servo 1's position to 0.2
servos.set_position(1, 0.2)

# Set servo 2's position to -0.55
servos.set_position(2, -0.55)
```

You can read the last value a servo was set to using similar code:

```python
last_position = servos.get_position(11)
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
