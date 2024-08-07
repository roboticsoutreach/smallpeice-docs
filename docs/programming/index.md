# Programming

Programming your robot is done in [Python](https://www.python.org/),
specifically version 3.11.2. You can learn more about Python from their
[docs](https://docs.python.org/3/), and our [whirlwind tour](../tutorials/python-tour).

Each board has an API (Application Programming Interface) which allows its various functionality to be controlled.

## Setup

The following two lines are required to complete initialisation of the
kit:

```python
from sbot import Robot

robot = Robot()
```

Once this has been done, this `Robot` object can be used to control the
robot's functions.

The remainder of the tutorials pages will assume your `Robot` object is
defined as `robot`.

:::tip
In Python, variables are case-sensitive. `robot` is an instance of `Robot`.
:::

## Running your code

Your code needs to be put on a USB drive in a file called `robot.py`. When connected to the robot, this file will be executed. The file is directly executed off your USB drive, with your drive as the working directory.

:::tip
If this file is missing or incorrectly named, your robot won't do anything. No log file will be created.
:::

To stop your code running, we recommend using the stop button on [the web interface](../kit/web-interface).
This will also stop the motors and any other peripherals connected to the kit.

In a pinch, you can also just remove the USB drive but you will likely lose the end of your log file as it won't be able to write to the USB drive.
You can then reinsert the USB drive into the robot, and it will run your `robot.py` again (from the start).

## Logs

A log file is saved to your USB so you can see what your robot did,
what it didn't do, and any errors it raised. The file is saved to log.txt in the top-level directory of the USB drive.

:::info
The latest log is always called log.txt, if the code is rerun the previous log will be renamed with an increasing number suffix
:::

## Running code before pressing the start button

If you want to do things before the start button press, such as setting up servos or motors, you can pass `wait_for_start` to the `Robot` constructor. You will then need to wait for the start button manually using `robot.wait_start()`.

```python
robot = Robot(wait_for_start=False)

# Do your setup here

robot.wait_start()
```

## Debug mode

It is possible to run your robot in "Debug Mode".

In "Debug Mode", your robot will print more information about what it is doing.

```python
from sbot import Robot

robot = Robot(debug=True)
```

:::info
Debug mode is very verbose. It will print a lot of information that you may not need.
:::

## Included Libraries

Python comes with plenty of [built-in
libraries](https://docs.python.org/3.11/py-modindex.html) to use. We
install some extra ones which may be of use:

-   [numpy 1.25.0](https://pypi.org/project/numpy/1.25.0/)
-   [matplotlib 3.7.1](https://pypi.org/project/matplotlib/3.7.1/)
-   [pandas 2.0.3](https://pypi.org/project/pandas/2.0.3/)
-   [scipy 1.11.1](https://pypi.org/project/scipy/1.11.1/)

:::tip
If you would like an extra library installed, go and ask a volunteer to see if we can help.
:::

