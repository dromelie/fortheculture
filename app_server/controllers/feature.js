/** GET news page */

module.exports.feature = function(req, res){
    res.render('index', {
        carousel: {
            slide1: {
                image: '../images/meekmill.jpg',
                imageTitle: 'Meek Mill on Prison Reform',
                imageBio: 'Meek Mill has embarked on a mission to change this country\'s criminal justice system'
                },
            slide2: {
                image: '../images/jayz.jpg',
                imageTitle: 'Roc-A-Fella records signs Lil-Uzi' ,
                imageBio: 'Jay-z\'s Roc-A-Fella records signs Lil-Uzi Vert and frees him from his label situation.'
                },
            slide3: {
                image: '../images/21savage.jpg',
                imageTitle: '21 Savage \"Bank Account\" program',
                imageBio: '21 Savage has started a program to teach financial literacy to youth in underserved communities'
                },
        },

        placements: {
            placement1: {
                link: '/intoTheLyrics',
                image: '../images/liluzi.jpg',
                imageText: 'Jay-z\'s Roc Nation signs Lil Uzi Vert and frees him from his label situation.'
            },

            placement2: {
                link: '/intoTheLyrics',
                image: '../images/everydaystruggle.jpg',
                imageText: 'Into The Lyrics: we ask the same questions as the cast of Everyday Struggle on Complex'
            },

            placement3: {
                link: '/intoTheLyrics',
                image: '../images/microphone.jpg',
                imageText: 'Check out what the people are talking about in Real Talk.'
            }
        },

        articles: {
            article1:{
                articleLink: '#',
                articleImage: '../images/hunchoday.jpeg',
                articleHeader: 'Quavo hosts Huncho Day 2019 to kick off his birthday and give back to his community',
                articleText: 'Quavo puts together a celebrity football game every year called \"Huncho Day\", where he invites celebrities to play a game of football for an audience of students and faculty from Berkmar High School'
            },
            article2:{
                articleLink: '#',
                articleImage: '../images/mysonne.jpg',
                articleHeader: 'Mysonne plans march in lieu of Nipsey Hussle\'s passing',
                articleText: 'Mysonne has put together a March in the Bronx on Fordham Rd and Grand Concourse. Mysonne is trying to start a movement with the phrase \"Kings stop killing Kings\". Mysonne has been a local advocate in the NY area and continues to do so through this march.'
            },
            article3:{
                articleLink: '#',
                articleImage: '../images/unitedmasters.jpg',
                articleHeader: 'United Masters, the new platform for independent artists',
                articleText: 'Steve Stoute, long time business partner of Jay-Z has launched a distribution platform to get independent music artist\'s music out to various platforms including a connection with the NBA.'
            },
            article4:{
                articleLink: '#',
                articleImage: '../images/nipseyhussle.jpg',
                articleHeader: 'Nipsey Hussle\'s funeral will be held at the Staples Center',
                articleText: 'It has been announced that Nipsey Hussle\'s funeral will be held at Staples Center. Many artists have tributed performances to Nipsey and send their condolences to his family'
            }
        },

        oldSchool:{
            image: '../images/rakim.jpg',
            name: 'Rakim',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            discography: '/history/artist/:artist'
        }
    });
};