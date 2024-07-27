# Pi LEDs

The Pi Power Hat has 18 indicator LEDs that can be grouped into 3 categories:
- Power status
- Software status
- User LEDs

The user LEDs can be controlled by your code, these are the 3 LEDs on the right side of the board.

You can control the user LEDs using the `led` object.

```python
from sbot import *

robot = Robot()

my_leds = robot.leds
```

The three user LEDs are labelled A, B and C on the board and support RGB colours.

The LEDs default to off, however once set they will hold their value even if your code exits.
This is potentially useful to understand the current state of your code as it runs or the final state of the code afterwards.

Each of the LEDs can be set to one of 8 colours:

```python
# Set LED A to red
robot.leds["A"].colour = Colour.RED

# Set LED B to cyan
robot.leds["B"].colour = Colour.CYAN

# Turn LED C off
robot.leds["C"].colour = Colour.OFF
```

The available colours are:

```python
Colour.OFF
Colour.RED
Colour.YELLOW
Colour.GREEN
Colour.CYAN
Colour.BLUE
Colour.MAGENTA
Colour.WHITE
```
