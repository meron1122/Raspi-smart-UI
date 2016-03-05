function convertS(s) {
    var d, h, m, s;
    s = Math.floor(s);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {d: d, h: h, m: m, s: s};
};