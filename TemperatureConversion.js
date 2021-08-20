((root, fn) => {
    root["TC"] = new fn();
})(window, function() {
    this.type = {
        C:'celcius',
        F:'fahrenheit',
        K:'kelvin'
    };

    this.celciusToFahrenheit = (C) => (C * 9/5) + 32;
    this.celciusToKelvin = (C) => C + 273.15;
    this.fahrenheitToCelcius = (F) => (F - 32) * 5/9;
    this.fahrenheitToKelvin = (F) => (F - 32) * 5/9 + 273.15;
    this.kelvinToCelcius = (K) => K - 273.15;
    this.kelvinToFahrenheit = (K) => (K - 273,15) * 9/5 + 32;
});