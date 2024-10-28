function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
}

function draw() {
    // Draw the head
    fill(255, 224, 189); // Skin color
    ellipse(200, 200, 150, 200); // Head

    // Draw the hair
    fill(255, 223, 0); // Blond hair color
    rect(125, 100, 150, 50); // Top hair
    rect(125, 100, 20, 100); // Left side hair
    rect(255, 100, 20, 100); // Right side hair

    // Draw the eyes
    fill(255); // White color
    ellipse(170, 180, 30, 20); // Left eye
    ellipse(230, 180, 30, 20); // Right eye
    fill(0); // Black color
    ellipse(170, 180, 10, 10); // Left pupil
    ellipse(230, 180, 10, 10); // Right pupil

    // Draw the nose
    fill(255, 224, 189); // Skin color
    ellipse(200, 220, 20, 30); // Nose

    // Draw the mouth
    fill(255, 0, 0); // Red color
    ellipse(200, 260, 50, 20); // Mouth
}
