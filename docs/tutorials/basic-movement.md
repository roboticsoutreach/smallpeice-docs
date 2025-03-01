---
sidebar_position: 1.3
---

# Basic Motor Control

In this tutorial, we will introduce basic motor control, such as spinning motors in either direction and at different power settings. To start off, we'll just make a motor move forwards, then backwards, and then repeat.

## Forwards & backwards

Doing this is actually very easy; the only thing you need to realise is that a positive number is forwards and a negative number is backwards.

:::info
The actual direction of travel of a motor, when mounted on a robot, will depend on its orientation and which way round the wires are connected to the motor board. If the motor's going the wrong way, just swap the motor's positive and negative wires over.
:::

Here's the code:

```python
import time
from sbot import motors

while True:
    motors.set_power(0, 0.5)
    motors.set_power(1, 0.5)
    time.sleep(3)

    motors.set_power(0, 0)
    motors.set_power(1, 0)
    time.sleep(1.4)

    motors.set_power(0, -0.5)
    motors.set_power(1, -0.5)
    time.sleep(1)

    motors.set_power(0, 0)
    motors.set_power(1, 0)
    time.sleep(4)
```

You're familiar with the first few lines; in fact, the only lines you may not be familiar with are the `motors.set_power...` lines. For a comprehensive reference to the `motor` object, see the [`motor` API](../programming/motor-board.md) page.

But, to summarise:

`motors.set_power(0, 0.5)` sets the target power of the motor connected to output 0 on the [motor board](../kit/motor-board.md) to half speed forwards (i.e. a duty-cycle of 50% forwards). As you would expect, then, `-0.5` will put this motor into reverse at half power.
`motors.set_power(0, 0)` will brake the motor and stop it.

So, if you put the above code on your robot, you should be able to see a motor spin forwards, stop, spin backwards, stop, and then repeat...

:::tip
If you find that the motor doesn't turn when you run the above code, check that you've got all the cables connected to the right places. Note that the motor board has _two_ outputs.
:::

## Changing the speed

Now we're going to modify the program to vary the speed of the motor. Our aim is to do the forwards and backwards bit (as above), but, before we loop round again, ramp the power up to 70%, then down to -70%, and then back to 0 (all in steps of 10%). Here's the code:

```python
import time
from sbot import motors

while True:
    # power up to 0.7 (from 0.1)
    for pwr in range(10, 80, 10):
        motors.set_power(0, pwr / 100)
        motors.set_power(1, pwr / 100)
        time.sleep(0.1)

    # power down from 0.7 (to 0.1)
    for pwr in range(70, 0, -10):
        motors.set_power(0, pwr / 100)
        motors.set_power(1, pwr / 100)
        time.sleep(0.1)

    # set power to 0 for a second
    motors.set_power(0, 0)
    motors.set_power(1, 0)
    time.sleep(1)

    # power up to -0.7 (from -0.1)
    for pwr in range(-10, -80, -10):
        motors.set_power(0, pwr / 100)
        motors.set_power(1, pwr / 100)
        time.sleep(0.1)

    # power down to -0.1 (from -0.7)
    for pwr in range(-70, 0, 10):
        motors.set_power(0, pwr / 100)
        motors.set_power(1, pwr / 100)
        time.sleep(0.1)

    # set power to 0 for a second
    motors.set_power(0, 0)
    motors.set_power(1, 0)
    time.sleep(1)
```

## Next steps

From here, you should be able to make your robot move about in a controlled manner. See if you can make your robot drive forwards to a given point, stop, turn around and then return to its starting point.

