# Programming

Programming your robot is done in [Python](https://www.python.org/),
specifically version `3.11`. You can learn more about Python from their
[docs](https://docs.python.org/3/).

Each board has an API (Application Programming Interface) which allows its various functionality to be controlled.

## Setup

The kit is automatically initialised when importing the `sbot` module. The code snipped below will initialise the kit and import all submodules.

```python
from sbot import *
```

You should only run this once at the start of your file: python will throw an error if `sbot` is imported multiple times.

:::tip
Importing `sbot` will pause execution of the code until the start button is pressed.
:::

Once this is done, the submodules can be used to access and control the robot's hardware. The other pages in these docs cover each module in detail.

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

:::warning
The latest log is always called log.txt. If the code is re-run the previous log will be renamed with an increasing number suffix.
:::

## `override.env`

It is possible to change startup parameters by creating a file called `override.env` (in the same directory as `robot.py`).
Parameters are added to the file with the overridden value, one per line.
An example file is provided below:

```
ENABLE_DEBUG_LOGGING=1
SKIP_WAIT_START=1
```

`ENABLE_DEBUG_LOGGING` will run your robot in debug mode, printing more information about what it is doing.

:::info
Debug mode is very verbose. It will print a lot of information that you may not need.
:::

`SKIP_WAIT_START` will cause the robot to _not_ wait for the start button when importing `sbot`, and the function `wait_start()` (from the `utils` module) must be called for the robot to wait for the start button.
An example of this is provided below:

```python
from sbot import *

# Initialisation and other code to be run immediately goes here

# Code waits for start button here
utils.wait_start()
```

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
