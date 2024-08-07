---
sidebar_position: 1.3
---

# Connecting Your Kit

## Essential hardware

-   [Raspberry Pi](../kit/pi.md)
-   Power Board
-   Motor Board
-   Servo Board
-   Arduino
-   a Battery (will be provided later)
-   USB Hub

## Connectors and cables

-   2 x 3.81mm CamCon (for the Raspberry Pi)
-   4 x 5mm CamCon (for the Motors)
-   1 x 5mm CamCon with wire loop (attached to the power board)
-   4 x 7.5mm CamCon (for the Motor and Servo Boards)
-   3 x USB-A to micro-USB cables
-   USB-A to USB-B cable (for the Arduino)
-   Black wire
-   Any other colour of wire

:::tip
[CamCons](../kit/camcons.md) are the green connectors used for power wiring within our kit.
:::

## Peripherals

-   Servo motor
-   2 x Motors
-   Ultrasound distance sensors
-   USB memory stick

## Tools you’ll need

-   Pliers
-   Wire Cutters
-   Wire Strippers
-   Screwdriver (2mm flat-head)

You will need to fetch any other needed tools/supplies yourself.

## Important notes before you start

:::warning
Make sure to read all these **before** you start assembly.
:::

-   Do not disassemble/reassemble your kit without first switching it off by
    pressing the red button.

-   Always be careful handling your battery, only ever plug it into the power
    board (the board with a fan).

-   Check your kit thoroughly before switching it on again. If something is
    connected up incorrectly when the kit is powered up, it may break the kit!

-   When making your own wires, especially those with CamCons on the end,
    always double-check that the correct connections are made at either
    end (positive to positive, ground to ground, etc.) before plugging in
    the cable or plugging in the battery and switching things on.
    Don’t be afraid to ask someone to check your connections.

-   Colour coding is key; please use _red_ for wires connected to
    power (say 12V or 5V), _black_ for wires connected to ground
    (0V) and _any other colour_ for motors.

## How it all fits together

![An assembled kit](../assets/img/assembly/kit-assembly.svg)

The first step of your robot is assembly! Here we'll guide you step-by-step on
how to connect things up. You'll be cutting your own wires here!

1.  Connect the Raspberry Pi to the Power Board using two 7.5mm (large)
    CamCons. Please make sure that you check the polarity of the connector on
    the tab.
2.  Connect the USB hub to the Pi by plugging it into any one of its
    four USB sockets.
3.  Connect the Power Board to the Pi via one of the black micro-USB
    cables; the standard USB end goes into any USB socket on the Pi or
    connected USB hub, the micro-USB end into the Power Board.
4.  Connect the Motor Board to the Power Board by screwing the two 7.5mm (large)
    CamCons provided onto the opposite ends of a pair of wires,
    ensuring that positive connects to positive and ground to ground,
    and then plugging one end into the appropriate socket of the Motor
    Board and the other into a high power socket (marked `H0` or `H1`)
    on the side of the Power Board.
5.  Connect the Motor Board to the Pi by way of another micro-USB cable; the big
    end goes into any USB socket on the Pi or connected USB hub, the micro-USB
    end goes into the Motor Board.
6.  Connect the Arduino to the Pi by way of the USB-A (rectangle) to USB-B
    (square-like) cable.
7.  Connect the Servo Board to the Power Board by screwing the two 7.5mm (large)
    CamCons onto the opposite ends of a pair of wires, ensuring that positive
    connects to positive and ground to ground, and then plugging one end into
    a low power socket on the side of the Power Board and the other into the 12V
    socket on the servo board.
8.  Connect the Servo Board to the Pi by way of another micro-USB cable; the
    USB A (rectangle) end goes into any USB socket on the Pi or connected via
    the USB hub, the micro-USB end goes into the Servo Board.
9.  To connect the motors, first screw two 5mm (medium) CamCons provided
    onto the opposite ends of a pair of wires. You can then use this cable
    to connect a motor to the `M0` or `M1` port on the motor board.
10. To connect a servo, push the three pin connector vertically into the
    pins on the side of the servo board. The black or brown wire (negative)
    should be at the bottom.
11. At this point, check that everything is connected up correctly (it
    may be helpful to ask a facilitator to check that all cables
    are connected properly).
12. Connect the Power Board to one of the blue LiPo batteries by
    plugging the yellow connector on the cable connected to the Power
    Board into its counterpart on the battery.
13. If there is not one plugged in already, a loop of wire should be
    connected to the socket beneath the On|Off switch. Check that the
    Power Board works by pressing the On|Off switch and checking that
    the bright LED on the Raspberry Pi comes on green.

:::warning
The Brain Board **must** be plugged in to the `L2` port on the Power Board in order for the kit to start up.

The `L2` port is the only port on the Power Board which is powered before the Brain Board has started, so is the only one which can be used to power the Brain Board.
:::
