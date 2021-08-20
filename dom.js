document.addEventListener("DOMContentLoaded", () => {
    const isStorageAvailable = typeof Storage === 'function' ? true : false, 
        elChangeBgColor = document.getElementById('bg-color-picker'),
        elTemperatureConverterForm = document.getElementById('temperature-converter-form'),
        elSource = elTemperatureConverterForm.querySelector('[name=source]'),
        elSourceType = elTemperatureConverterForm.querySelector('[name=source-type]'),
        elResult = elTemperatureConverterForm.querySelector('[name=result]'),
        elResultType = elTemperatureConverterForm.querySelector('[name=result-type]');

    elTemperatureConverterForm.querySelectorAll("input[type=number]").forEach(input => {
        input.addEventListener("click", function() {
            this.select();
        });
    });

    console.log(Intl.DateTimeFormat('id-ID', { dateStyle: "full" }).format(new Date()));

    function convertTemperature(i, o, v) {
        // C => Celcius
        // F => Fahrenheit
        // K => Kelvin
        switch (i) {
            case "C":
                if (o == "F")
                    return (v * 9/5) + 32;
                else if (o == "K")
                    return v + 273.15;
                break;
            case "F":
                if (o == "C")
                    return (v - 32) * 5/9;
                else if (o == "K")
                    return (v - 32) * 5/9 + 273.15;
                break;
            case "K":
                if (o == "C")
                    return v - 273.15;
                else if (o == "F")
                    return (v - 273.15) * 9/5 + 32;
                break;
        };
    };

    function convertTemperatureInputEventListener() {
        const currentInput = this == elSource ? 'source' : 'result',
            targetResult = this == elSource ? elResult : elSource,
            sourceType = currentInput == 'source' ? elSourceType.value : elResultType.value,
            resultType = currentInput == 'result' ? elSourceType.value : elResultType.value;
        if (!isNaN(parseFloat(this.value))) {
            if (sourceType == resultType) targetResult.value = this.value;
            else targetResult.value = convertTemperature(sourceType, resultType, parseFloat(this.value)); 
        };
    };

    function convertTemperatureSelectEventListener() {
        const currentInput = this.previousElementSibling == elSource ? 'source' : 'result',
            targetResult = this.previousElementSibling == elSource ? elResult : elSource,
            sourceType = currentInput == 'source' ? elSourceType.value : elResultType.value,
            resultType = currentInput == 'result' ? elSourceType.value : elResultType.value;
        if (!isNaN(parseFloat(this.previousElementSibling.value))) {
            console.log(sourceType, resultType, targetResult);
            if (sourceType == resultType) targetResult.value = this.previousElementSibling.value;
            else targetResult.value = convertTemperature(sourceType, resultType, parseFloat(this.previousElementSibling.value)); 
        };
    };

    elSourceType.addEventListener("change", convertTemperatureSelectEventListener);
    elResultType.addEventListener("change", convertTemperatureSelectEventListener);

    elSource.addEventListener("input", convertTemperatureInputEventListener);
    elResult.addEventListener("input", convertTemperatureInputEventListener);
    
    // Change background color
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

    elChangeBgColor.addEventListener("input", function() {
        document.body.style.backgroundColor = this.value;
        if (isColorLight(this.value)) document.body.style.color = 'black';
        else document.body.style.color = 'white';
    });
});