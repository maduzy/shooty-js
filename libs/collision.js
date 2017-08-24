


// requires: two variables that contain currentX, currentY and size.
// goal: check if the two rectangles colide
// return: true if collide, false if the rectangles do not colide

function isCollision(b1, b2) {
	
	if ((b1.currentX > b2.currentX + b2.size - 1) || // is b1 on the right side of b2?
		(b1.currentY > b2.currentY + b2.size - 1) || // is b1 under b2?
		(b2.currentX > b1.currentX + b1.size - 1) || // is b2 on the right side of b1?
		(b2.currentY > b1.currentY + b1.size - 1))   // is b2 under b1?
	{
		// no collision
		return false;
	}

	// collision
	return true;	
}
