import Collisions from '../Collisions.js';

export default class Circle {
	constructor(x = 0, y = 0, radius = 0) {
		this.x      = x;
		this.y      = y;
		this.radius = radius;
	}

	collides(target, out) {
		return Collisions.collides(this, target, out);
	}
}