function titleCase(str) {
    var w = str.toLowerCase().split(' ');

    for(var i = 0; i < w.length; i++) {
        var l = w[i].split('');
        l[0] = l[0].toUpperCase();
        w[i] = l.join('');
    }
    return w.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
