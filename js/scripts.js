function drawTree(size) {
  for (var i = 0; i < size; i++) {
    var line = '';
    for (var j = 0; j <= i; j++) {
      line += '*';
    }

    console.log(line);
  }
}

drawTree(5)