---
title: Game State
---

During a competition match, an additional USB drive will be used to
provide your robot with information about the match.
You will need to have a spare USB port easily available on your robot for this.

With this USB drive, your robot will have a few differences of behaviour
and information available to it.

## Mode

The main difference is that your robot will stop when the match is over,
but you may also want to make your own changes to your robot's
behaviour.

Your robot can be in 1 of 2 modes: `DEVELOPMENT` and `COMPETITION`. By
default, your robot will be in `DEVELOPMENT` mode:

``` python
>>> robot.is_competition
False
```

During competition mode, your robot will stop executing code at the end
of the match.

## Zone

Your robot will start in a corner of the arena, known as its starting
zone. The number of zones depends on the game. Each zone is given a
number, which you can access with the `zone` property:

``` python
>>> robot.zone
1
```

By default during development, this is `0`.
