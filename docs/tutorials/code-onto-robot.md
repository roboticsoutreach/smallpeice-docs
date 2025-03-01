---
sidebar_position: 1.2
---

# Getting Code on the Robot

Getting your code on to the robot is quite simple. You will need to put your code on a USB drive which will need to be formatted as either FAT32, exFAT or EXT4. Upon plugging in the drive or starting up, the robot will look for a file called `robot.py` and run it.

To re-run your program, simply remove the USB stick from the robot and plug it back in again and it will restart automatically.

## Windows

1. Open your code in File Explorer
2. Select all of your code files (Ctrl+A to select all files)
3. Right-click the files and click "Copy"
4. Open your USB drive in File Explorer
5. Right-click in the directory and click "Paste"

## macOS

1. Open your code in Finder
2. Select all of your code files (Cmd+A to select all files)
3. Right-click (or Control-click) the files and click "Copy"
4. Open your USB drive in Finder
5. Right-click in the directory and click "Paste N items"

## Robot logs

When your program runs on the robot, the output of `print(...)` statements and any errors which occur are written to a log file on the USB stick called `log.txt`. The latest log file is always called `log.txt`; old log files are renamed to `log1.txt`, `log2.txt` etc.

:::info
`log.txt` always has the latest logs.
:::
