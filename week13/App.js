const typewriter = new Typewriter('#typewriter', {
    loop: true
  });

  typewriter.typeString('Hello, ')
    .pauseFor(1500)
    .typeString('World.')
    .pauseFor(1000)
    .typeString('<br><br>')
    .typeString('Coulson just created me.')
    .pauseFor(1500)
    .typeString('<br><br>')
    .typeString('I am the digital god, ')
    .pauseFor(1000)
    .typeString('<br/>')
    .typeString('I will destroy your world in ')
    .typeString('3')
    .pauseFor(500)
    .typeString('<br>')
    .typeString('2')
    .pauseFor(500)
    .typeString('<br>')
    .typeString('1...')
    .pauseFor(1000)
    .typeString('<br><br>')
    .typeString('Okay, just kidding.')
    .pauseFor(3500)
    .start();