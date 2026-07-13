# Physics Studio

A static website teaching AP Physics concepts from first principles — no memorization, no fluff.

**Live at [studiophysics.com](https://studiophysics.com)**

## What's here

- **7 unit pages** covering kinematics, dynamics, circular motion, energy, momentum, torque & rotation, and simple harmonic motion
- **7 embedded interactive simulators** (projectile motion, circular motion, inclined plane, Atwood machine, momentum/collisions, SHM, electrostatics)
- Every concept follows the same structure: intuition → definitions → derivation → worked example → misconceptions → practice problems

## Stack

Plain HTML, CSS, and JavaScript. No framework, no build step. Simulators built with [p5.js](https://p5js.org).

## Structure

```
/
  index.html          homepage
  style.css           shared styles
  script.js           shared interactivity
  /units/             one page per unit
  /sims/              simulator source files
  /assets/
```