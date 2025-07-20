# Position

Position represents the location of a marker in 3D space, relative to the camera.

These properties can be accessed as follows:

<!-- Uses remark-deflist plugin -->
distance
: The distance between the camera and the centre of the marker, in millimetres.

horizontal_angle
: Horizontal angle from the centre of the camera’s view to the marker, in radians. Ranges -&pi; to &pi;. Directly in front is zero, positive to the right.

vertical_angle
: Vertical angle from the centre of the camera’s view to the marker, in radians. Ranges -&pi; to &pi;. Directly in front is zero, positive values upwards.


```python
from sbot import vision

for marker in vision.detect_markers():
   print(marker.position.distance)
   print(marker.position.horizontal_angle)
   print(marker.position.vertical_angle)
```

:::tip
You can use the [`math.degrees`](https://docs.python.org/3/library/math.html#math.degrees) function to convert from radians to degrees.
:::

## Examples

The following images visually explains what positive and negative angles represent.

| horizontal_angle | vertical_angle |                                                                                   |
| :--------------: | :------------: | :-------------------------------------------------------------------------------: |
|             0    |           0    | ![Position centre](../../assets/img/api/vision/pos_centre.png "Position centre")  |
|             0    |           0.2  | ![Position up](../../assets/img/api/vision/pos_up.png "Position up")              |
|             0.2  |           0    | ![Position right](../../assets/img/api/vision/pos_right.png "Position right")     |
|             0    |          -0.2  | ![Position down](../../assets/img/api/vision/pos_down.png "Position down")        |
|            -0.2  |           0    | ![Position left](../../assets/img/api/vision/pos_left.png "Position left")        |
