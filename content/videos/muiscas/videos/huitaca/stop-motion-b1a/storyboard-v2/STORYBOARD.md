# Huitaca · b1a · storyboard v2

Status: storyboard proposed for review. No images generated for this version.

## Narrative and shot

Original script: «Después del paso del maestro llegó una mujer que caminaba de noche».

One-second excerpt: **Huitaca transfers her weight to the leading foot, brings the trailing foot past it, and places that foot ahead. One deliberate step.** This is part of her arrival, not a full walk cycle or the complete spoken sentence.

Use the existing `b1a.crop-9x16.jpg` as frame 01 without regenerating it. Keep the original wide vertical composition: the lone figure, moon, path, mountains, stone walls and fences. This test does not cut to `b1b` or redesign the figure as clay or Lego. The material and costume come from the actual source image.

Delivery remains 12 distinct exposures at 12 fps: original + 11 sequential edits. Frame 01 starts at 0.000 s; frame 12 starts at 0.9167 s and remains until 1.000 s. No audio, interpolation or artificial repeated frames are needed for this motion test. The walk advances, so replaying it is not a seamless loop.

## What the first test showed

The original frame already contains a walking pose. In v1 the first generated edit changed figure scale and rendering, and later frames changed the path, walls, sky texture and garment details. The planned opposite-foot contact was not realized consistently. Continuing from these frames carried those errors forward.

The correction is both editorial and procedural: define an observable pose for every exposure, make one coherent action, inspect each candidate, and use only an accepted candidate as the next input. Prompted foot positions and percentage changes are intentions, not measured execution guarantees.

## Visual contract

- **Foot A:** the foot already leading in the original, on screen-left. Keep this identity through the sequence; do not rename the feet when their depth order changes.
- **Foot B:** the original trailing foot, on screen-right. This is the foot that moves forward during this shot.
- These are screen-based labels from the anchor, not an assertion that a small, partly covered limb can be anatomically identified with certainty.
- Frame 01 is the exact original pose. It must not be replaced by a newly generated standing pose.
- Face, gaze direction, hair length, shoulder coverage, mantle cut, diagonal brown border and body proportions remain those of the anchor.
- The camera, lens, crop, depth of field, moon, horizon, stone walls, fences, agaves, light and palette stay fixed.
- Primary action: one step by B, with physically necessary changes in knee, pelvis and weight.
- Secondary action: a restrained natural counterbalance of the arms; the hem follows the advancing knee with a small lag. No separate hair, wind, vegetation or light animation in this test.
- A planted foot stays on its road contact point while the pelvis moves over it. Ground contacts are checked against nearby stones, not only the image edges.
- Judge both the wide shot and a fixed crop of the person. Do not enlarge the figure in the final composition to make the test easier.

## Storyboard beats

| Beat | Exposure | Visible evidence |
| --- | --- | --- |
| Entry | 01 | Existing pose: A leads, B trails; the original image establishes all visual details. |
| Release | 04 | B is visibly off the ground; A remains at its original contact point. |
| Pass | 07 | B has passed A in depth; the ankles no longer read as the opening pose. |
| New contact | 10 | B is now flat ahead; A remains behind. The leading foot has demonstrably changed. |
| Settle | 12 | Weight rests on B; A's heel is beginning to release. A single step is complete. |

These are storyboard landmarks. Actual image generation still runs 01 → 02 → 03 … → 12. It does not skip directly between the landmark frames.

## Exposure sheet

Times describe the start of each exposure; each image lasts exactly 1/12 second.

| Frame | Start | Dominant pose change | Ground contact and evidence |
| --- | ---: | --- | --- |
| 01 | 0.0000 s | Original b1a, unchanged. | A ahead, B trailing. Record the two original contact points. |
| 02 | 0.0833 s | Transfer weight onto A; B's heel rises slightly. | A remains planted. B's toe still touches the road. |
| 03 | 0.1667 s | B's toe releases from the road. | A supports the body; a visible gap appears under B. |
| 04 | 0.2500 s | B's knee bends and begins the forward swing. | A stays planted. B is unmistakably airborne. |
| 05 | 0.3333 s | B moves forward toward the supporting leg. | A remains fixed; B has not yet passed A. |
| 06 | 0.4167 s | B reaches the passing position under the pelvis. | B remains raised. Two legs remain distinguishable, with no fusion. |
| 07 | 0.5000 s | B moves beyond A toward the camera. | B is visibly the forward-moving foot. A still supports. |
| 08 | 0.5833 s | B's lower leg extends, heel approaching the path. | B has not landed yet. No skating of A. |
| 09 | 0.6667 s | B's heel makes the new contact ahead of A. | Brief double support; heel contact is visible. |
| 10 | 0.7500 s | B's sole lowers to the road. | B is flat and ahead; A trails. |
| 11 | 0.8333 s | Weight moves onto B; A's heel begins to lift. | B's new contact stays fixed. A's toes still touch. |
| 12 | 0.9167 s | Settle over B with a slight knee bend. | B is the stable leading foot; A trails. Continue walking after the shot, without starting a second swing here. |

The pose diagram is a schematic side-view study of these contacts. It is not generated footage, a photorealistic pose reference, a camera change, or an exact tracking reconstruction of the original frame.

## Sequential edit contract

1. Input 1: the latest accepted frame, the only actual edit target.
2. From frame 03, input 2: the original frame 01 for identity, material and fixed composition. It must not reset the limbs to their opening pose.
3. Send the short common constraints and one exposure-specific action. Do not send all twelve future actions in every request.
4. Inspect the returned image against both the preceding accepted frame and the original. Inspect feet at a fixed crop, and the complete image for scale and background changes.
5. Accept only if the intended pose is legible and the important invariants survive. “File exists” and “API succeeded” are not acceptance.
6. If it fails, archive that candidate and retry the same exposure from the last accepted frame. Never continue from a rejected image. If repeated attempts fail, revise the action or local-edit method instead of making the prompt longer and continuing.
7. Complete all twelve accepted frames before encoding a new animation. Technical verification still checks count, rate and exact duration.

For the first comparison, keep `gpt-image-2.5-sunburst`, medium quality, PNG, and the same source. This isolates the revised plan and review process. A higher quality setting is a separate experiment if identity or texture still fails; it is not assumed to solve motion planning.

## Protecting the background

The supplied prompting guide explicitly warns that repeated edits can change preserved details and recommends compositing for regions that must remain pixel-identical. Text constraints and a second reference do not constitute a locked background layer.

First test whether the accepted local edit meets continuity requirements. If strict stability is required and full-frame edits still redraw the set, define one fixed edit envelope covering the original and planned character silhouettes, cloth movement and contact shadow. Composite the accepted local edit into the original outside that envelope. Inside it, check restoration of newly uncovered road, removal of the prior silhouette, edge seams and shadow continuity. This compositing method must be recorded separately from an unmodified full-frame model test; it is proposed here, not already performed.

A mask or crop also does not guarantee correct feet. Pose acceptance remains mandatory.

## Candidate review, before the next request

- Did exactly the planned step phase happen? At 07 B must actually have passed A; at 10 B must actually lead. Reject a beautiful image that repeats the opening pose.
- Is the supporting foot fixed relative to the same stones? Reject foot sliding, floating, merged legs or duplicated feet.
- Do face, head size, body proportions, mantle border and hair still match frame 01? Reject figure enlargement, costume drift or a material change.
- Does the background visibly change when toggling against frame 01? Reject camera shifts and material redraws that become visible flicker. Pixel differences can support this check, but are not a calibrated visual score.
- Is the movement small enough to connect to the previous frame and large enough to read? The answer requires visual inspection, not a prompt saying “3 pixels.”

## Sources

This plan draws on the four user-supplied text files and the actual v1 outputs. External examples and performance claims in those texts have not been independently verified or treated as guarantees for this shot. `sources.json` records their paths and hashes; `storyboard.json` records the original keyframe, script, frame timings and prepared prompts.
