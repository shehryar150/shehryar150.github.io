function rangeValue(value) {
    const root = document.documentElement;

    root.style.setProperty('--opacityImg2', (100 - value) / 100);
    root.style.setProperty('--opacityImg1', value / 100);
}