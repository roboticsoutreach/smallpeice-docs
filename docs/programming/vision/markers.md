# Markers

import styles from './styles.module.css';

![An Example Marker: 0](../../assets/img/api/vision/marker-0.png#right)

An example marker is given to the right; this one is ID number `0`.
The marker is the correct way up, as shown by the text in the bottom left corner.

There is also some text in the bottom-left corner of the marker, in its padding: `Tin Can Rally - Marker 0 (36h11)`.

- `Tin Can Rally` means that it is one of our markers
- `Marker 0` means that it is marker number 0
- `(36h11)` means that this marker belongs to the 36h11 family of markers. This is the only family of markers that we use.

Details of the types and size of markers used in the game can be found in the [rules](/rules).

You can download all the markers for this years game [as a PDF](../../assets/resources/tin-can-rally-markers.pdf).
The markers are repeated for the second half of the arena.

## Printing markers

The size of the printed markers is very important.
The vision system relies on the size of the marker to estimate its position.
If the marker is the wrong size the information returned by the API will be incorrect.

When printing the markers you must ensure that your PDF viewer is not resizing the document.
This can be checked by measuring the black of the marker and comparing this to the size defined in the rules.

Once printed the marker should be mounted on a rigid backing material to keep the marker flat.
Any distortion in the marker will cause inaccuracies in the numbers reported by the API.

If the markers become damaged (scuffs, tears, etc...) they will not function as well, if this happens, it is best to just print another one.

## Marker detection

![An Example Marker: 0](../../assets/img/api/vision/marker_with_size_labeled.png#right)

All of the content within the grey line is important:

- The white border is used to create contrast between the black of the marker and the background.
- The black border is used for [Pose Estimation](https://en.wikipedia.org/wiki/3D_pose_estimation) where the position of the four corners and the knowledge of the size of the marker is used to approximate its location in 3D space.
- The data bits in the centre are used to identify the ID of the marker and have enough polygons to not be confused with a real world object.

The marker can be cut out up to the grey line.