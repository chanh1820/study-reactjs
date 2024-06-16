const data = {
    intro:{
        path:'.../../video/intro.mp4',
        buttonNext:"/part1"
    },
    part1:{
        path:'/sound/game.mp3'
    },
    game1:{
        buttonPrevius:'/part1',
        link:'<iframe src="https://scratch.mit.edu/projects/1036936172/embed" allowtransparency="true" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>',
        buttonNext:"/game2"
    },
    game2:{
        buttonPrevius:'/game1',
        link:'<iframe src="https://scratch.mit.edu/projects/1037254737/embed" allowtransparency="true" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>',
        buttonNext:"/game3"
    },
    game3:{
        buttonPrevius:'/game2',
        link:'<iframe src="https://scratch.mit.edu/projects/1037793502/embed" allowtransparency="true" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>',
        buttonNext:"/game4"
    },
    game4:{
        buttonPrevius:'/game3',
        link:'<iframe src="https://scratch.mit.edu/projects/1038094672/embed" allowtransparency="true" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>',
        buttonNext:"/game5"
    },
    game5:{
        buttonPrevius:'/game4',
        link:'<iframe src="https://scratch.mit.edu/projects/1038123469/embed" allowtransparency="true" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>',
        buttonNext:"/part1"
    }
}

export default data;