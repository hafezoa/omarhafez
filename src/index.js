let theater = theaterJS();

theater
    .on('type:start, erase:start', function() {
        theater.getCurrentActor().$element.classList.add('actor__content--typing')
    })
    .on('type:end, erase:end', function() {
        theater.getCurrentActor().$element.classList.remove('actor__content--typing')
    })
// .on('type:start, erase:start', function () {
//   if (theater.getCurrentActor().name === 'me') {
//     document.body.classList.add('dark')
//   } else {
//     document.body.classList.remove('dark')
//   }
// })

theater
    .addActor('me', {
        speed: 0.8,
        accuracy: 0.9
    })
    .addActor('visitor')
    .addActor('header')
    .addScene('header:Hi, I\'m Omar Hafez', 1600)
    .addScene('me:I always thought life was this big tough game where you level up, acquire skills, and build things that ultimately help others.', 2000)
    .addScene(' Elon Musk once said the best metric to strive for is to:', 1600)
    .addActor('me1')
    .addScene('me1: 1. Ask yourself if your work is changing the industry landscape and,', 1400)
    .addActor('me2')
    .addScene('me2: 2. How many people is it affecting and multiply the two.', 1400)
    .addActor('me3')
    .addScene('me3:That\'s a pretty sweet equation.', 1000)
    .addScene('So here I am on this quest to do that. I\'ve had so many amazing friends and mentors along the way and I love them so much. My hope is to follow their footsteps and become a great mentor too &mdash; but right now I\'m just an okay developer & designer.', 1600)
    .addScene(' I\'ve seen the best and worst of software and web products and all of a sudden I feel ready to change the world. Take a look around!', 1400)
    .addScene('If you want to contact me. First tell me your name: ', 1600)
    // .addScene('visitor:', 600)

    .addScene(theater.replay.bind(theater))
