#### Arkanoid in 3D. My university computer graphics project

### Content

There is a playfield with rainbow rows of blocks, a paddle and a glowing ball.
The camera follows the ball. The ball bounces off the paddle depending on which
part of the paddle it hits, and every destroyed block makes it a bit faster.

Asteroids fly in from outside the walls and destroy blocks on contact. Broken
blocks explode into glowing particles with positional sound: bounce, glass break
and explosion.

We move the paddle with the mouse. The buttons and keys do the rest: pause
[p]/[SPC], reset [r], and row count from 1 to 18 with `-`/`+`. The HUD shows the
score and the ball speed. Clearing all blocks wins the level with more rows,
losing the ball ends the game.

### History

I made it in January 2025 in about 10 days. I started with the playfield, the
paddle bounce and the Vite setup, then split the code into files. Then I added
the explosion effect with the block color, the skybox, asteroids with their
collisions and the sounds with async loading. I finished with the wall texture,
the ball-following camera and the collision fix.
