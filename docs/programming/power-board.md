# Power Board API

The power board can be accessed using the `power` submodule in `sbot`:

```python
from sbot import power
```

## Power outputs

The power board's outputs (H0, H1, L0, L1, etc) are identified in the `PowerOutputPosition` enum (importable from `sbot`):

```python
from sbot import power, PowerOutputPosition


power.set_output(PowerOutputPosition.H0, True)
```

The power board's six outputs can be turned on and off using the
`set_output` function of the submodule, which takes a boolean on/off value.

:::tip
All outputs are set on when you set up your robot, so
this doesn't need to be called manually. The ports will come on
automatically as soon as your robot is ready, before the start button is
pressed.
:::

```python
power.set_output(PowerOutputPosition.H0, True)
power.set_output(PowerOutputPosition.L1, False)
```

You can also get information about and control each output in the group:

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

power.set_output(PowerOutputPosition.H0, True)
power.set_output(PowerOutputPosition.L3, False)

boolean_value = power.is_output_on(PowerOutputPosition.L2)

current_amps = power.get_output_current(PowerOutputPosition.H1)
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
battery_voltage, battery_current = power.get_battery_data()
```
