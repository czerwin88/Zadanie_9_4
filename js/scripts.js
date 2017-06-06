function drawTree(size) {
  for (var i = 0; i <= size; i++) {
    var line = '';
    for (var j = 0; j < i; j++) {
      line += '*';
    }
    for (var k = 0; k <= 5; k--) {
      line -= '*';
    }
    console.log(star);
  }
}
