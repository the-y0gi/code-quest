import React from 'react';

// Avatar component
function Avatar({
    children,       // Content inside the Avatar
    backgroundColor, // Background color of the Avatar
    px,             // Padding along the x-axis (left and right)
    py,             // Padding along the y-axis (top and bottom)
    color,          // Text color of the Avatar
    borderRadius,   // Border radius of the Avatar
    fontSize,       // Font size of the text inside the Avatar
    cursor          // Cursor style (e.g., pointer)
}) {
    // Style object for the Avatar
    const style = {
        backgroundColor,            // Set the background color
        padding: `${py} ${px}`,     // Set the padding using py and px
        color: color || "black",    // Set the text color, default to black
        borderRadius,               // Set the border radius
        fontSize,                   // Set the font size
        textAlign: "center",        // Center align the text
        cursor: cursor || null,     // Set the cursor style, default to null
        textDecoration: "none"      // Remove text decoration (underline, etc.)
    };

    return (
        // Render a div with the computed styles and children inside
        <div style={style}>{children}</div>
    );
}

export default Avatar;
