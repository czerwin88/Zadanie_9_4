function drawTree(size) {
<<<<<<< HEAD
  for (var i = 0; i < size; i++) {
    var line = '';
    for (var j = 0; j <= i; j++) {
      line += '*';
    }

    console.log(line);
  }
}

drawTree(1)
=======
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
>>>>>>> e40c7f474fa5055dbd1bf61da9a172ab002cb97b
