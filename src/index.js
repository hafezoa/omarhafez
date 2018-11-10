let theater = theaterJS();

theater
    .on('type:start, erase:start', function() {
        theater.getCurrentActor().$element.classList.add('actor__content--typing')
    })
    .on('type:end, erase:end', function() {
        theater.getCurrentActor().$element.classList.remove('actor__content--typing')
    })

theater
    .addActor('me', {
        speed: 1.3,
        accuracy: 0.95
    })
    .addActor('visitor')
    .addActor('header')
    .addScene('header:Journal entry no. 2322', 2000)
    .addScene('me:Life suddenly feels like a video game simulation. Albeit, the desire to level up and acquire new skills has started to fade. There is little left to do but to create things that help and inspire others.', 1600)
    .addActor('me2')
    .addScene('me2: Big things have small beginnings.')

    .addScene(theater.replay.bind(theater))
