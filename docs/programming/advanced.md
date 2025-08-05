# Advanced Functions

To enable advanced functionality in the initialisation of the robot, we provide an `override.env` file that you put alongside your `robot.py`.
Parameters are added to the file with the overridden value, one per line.

## Debug Logging


An example file is provided below:

```
ENABLE_DEBUG_LOGGING=1
```

`ENABLE_DEBUG_LOGGING` will run your robot in debug mode, printing more information about what it is doing.

:::info
Debug mode is very verbose. It will print a lot of information that you may not need.
:::

## Custom Initialisation

`SKIP_WAIT_START` will cause the robot to _not_ wait for the start button when importing `sbot`, and the function `wait_start()` (from the `utils` module) must be called for the robot to wait for the start button.

Since no initialisation has been performed, no boards can be accessed at this point.
To access the boards call `utils.load_boards()`.

An example of this is provided below:

```
SKIP_WAIT_START=1
```

```python
from sbot import *

# Initialisation and other code to be run immediately goes here

utils.load_boards()

# Access to boards is now possible

# Code waits for start button here
utils.wait_start()
```
