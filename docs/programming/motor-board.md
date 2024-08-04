# Motor Board API

The kit can control multiple motors simultaneously. One Motor Board can
control up to two motors.

## Accessing the Motor Board

If there is exactly one motor board attached to your robot, it can be
accessed using the `motor_board` property of the `Robot` object.

```python
from sbot import *

robot = Robot()

my_motor_board = robot.motor_board
```

:::warning
When you have more than one motor board connected to your robot, you cannot use `robot.motor_board`. This is because the kit needs to know which motor board you want to access. You will need to use the `motor_boards` property instead.
:::

Motor boards attached to your robot can be accessed under the
`motor_boards` property of the `Robot`. The boards are indexed by their
serial number, which is written on the board and printed in the logs when
the robot is started.

You can then access the boards like so:

```python
from sbot import *

robot = Robot()

my_motor_board = robot.motor_boards["SRO-AAD-GBH"]
my_other_motor_board = robot.motor_boards["SR08U6"]
```

## Setting motor power

Control of your motors is achieved by setting a power output from one of the channels on your Motor Boards.
Valid values are between -1 and 1 inclusive.
Fractional values (such as 0.42) can be used to specify less than 100% power.
Negative values run the motor in the opposite direction.

The field to change the output power is `power`. As each Motor Board has two
outputs you will need to specify which output you want to control:

```python
# Set channel 0 to full power forward
robot.motor_board.motors[0].power = 1

# Set channel 0 to full power reverse
robot.motor_board.motors[0].power = -1

# Set channel 1 to half power forward
robot.motor_board.motors[1].power = 0.5
```

:::warning
Setting a value outside of the range `-1` to `1` will raise an exception and your code will crash.
:::

The Motor Board will continue to output the requested power until it is told
otherwise or until power to the board is removed (usually when your code ends and the robot turns
off).

Therefore to stop your motors you must explicitly set the power output to zero:

```python
# Set channel 1 at 25% power for 2.5 seconds:
robot.motor_board.motors[1].power = 0.25
robot.sleep(2.5)      # wait for 2.5 seconds
robot.motor_board.motors[1].power = 0
```

Since each output channel can be controlled separately, you can control several
motors at once.

```python
# Set one motor to full power in one direction and
# another to full power in the other:
robot.motor_board.motors[0].power = 1
robot.motor_board.motors[1].power = -1

# Wait a while for the robot to move
robot.sleep(3)

# Stop both motors
robot.motor_board.motors[0].power = 0
robot.motor_board.motors[1].power = 0
```

:::info
You will need to work out for your robot which values (positive or negative) result in it moving in each direction.
If you want to swap the direction of a motor you can swap the wires connecting the motor to the Motor Board.
:::

## Getting the previously set motor power

You can read the previously set power value for a motor using the same field:

```python
# Print the output power of the Motor Board channel 0
print(robot.motor_board.motors[0].power)
```

## Special Values

In addition to the numeric values, there are two special constants that can be used:
- `BRAKE`
- `COAST`

In order to use these, they must be
imported from the `sbot` module like so:

```python
from sbot import BRAKE, COAST
```

`BRAKE` will stop the motors from turning, and thus stop your robot as quick as possible.

:::info
`BRAKE` does the same thing as setting the power to `0`.
:::

```python
# Stop the motor as quick as possible
robot.motor_board.motors[0].power = BRAKE
```

`COAST` will stop applying power to the motors.
This will mean they continue moving under the momentum they had before and slowly come to a stop.

```python
# Slowly coast to a stop
robot.motor_board.motors[0].power = COAST
```

## Motor currents

The Motor Board can also measure the current being drawn by each of the ports on the board.
This value is measured in amps.

```python
# Print the current in amps of motor 0
print(robot.motor_board.motors[0].current)
```

:::warning
Sudden large changes in the motor speed setting (e.g. `-1` to `0`, `1` to `-1` etc.) may trigger the over-current protection of the power board and your robot will shut down with a distinct beeping noise and/or a red light next to the power board output that is powering the motor board.
:::
