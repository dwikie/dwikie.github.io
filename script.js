document.addEventListener("DOMContentLoaded", () => {
    const elChangeBgColor = document.getElementById("bg-color-picker");

    function isColorLight(color) {
        if (!color.startsWith('#')) throw new Error("Input color harus berupa hex");
        const hex = color.replace('#', ''),
            c_r = parseInt(hex.substr(0, 2), 16),
            c_g = parseInt(hex.substr(2, 2), 16),
            c_b = parseInt(hex.substr(4, 2), 16),
            brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
        if (brightness < 155) return false;
        return true;
    }

    // Change background color
    elChangeBgColor.addEventListener("input", function() {
        document.body.style.backgroundColor = this.value;
        if (isColorLight(this.value)) document.body.style.color = 'black';
        else document.body.style.color = 'white';
    });
});