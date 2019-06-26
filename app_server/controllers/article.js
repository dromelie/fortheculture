/** GET article page*/

module.exports.article = function(req, res){
    res.render('article', {
        sourceTitle: 'Complex News',
        
        article: {
            title: 'Hov\'s record label, Roc Nation, signs Lil Uzi Vert',
            publishDate: 'January 1, 2019',
            author: 'Dalen Romelien',
            photoCredit: 'Dat Way Pictures',
            paragraphs: [
                {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at. Justo nec ultrices dui sapien eget mi proin. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Nisi scelerisque eu ultrices vitae. Adipiscing vitae proin sagittis nisl rhoncus mattis. Tincidunt lobortis feugiat vivamus at augue eget arcu. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Vitae nunc sed velit dignissim. Mattis pellentesque id nibh tortor id aliquet lectus proin.'},
                {text: 'Neque ornare aenean euismod elementum nisi quis eleifend. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Consequat interdum varius sit amet mattis vulputate. Turpis massa tincidunt dui ut ornare lectus sit amet. Morbi tristique senectus et netus et. Quam pellentesque nec nam aliquam sem et tortor. Vitae et leo duis ut diam quam nulla porttitor massa. Bibendum neque egestas congue quisque. Non pulvinar neque laoreet suspendisse interdum. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Ut sem nulla pharetra diam sit amet. Urna condimentum mattis pellentesque id. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Tincidunt nunc pulvinar sapien et ligula. Est placerat in egestas erat imperdiet sed. Est ante in nibh mauris cursus mattis molestie. Sit amet mauris commodo quis. Ut etiam sit amet nisl purus in mollis nunc sed.'},
                {text: 'Lacus vestibulum sed arcu non odio euismod lacinia at quis. Consequat interdum varius sit amet mattis vulputate. Nisi porta lorem mollis aliquam ut porttitor leo. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. In massa tempor nec feugiat nisl pretium fusce. Molestie a iaculis at erat pellentesque adipiscing commodo. Cum sociis natoque penatibus et magnis dis. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. At tellus at urna condimentum mattis pellentesque id. Auctor neque vitae tempus quam. Nullam vehicula ipsum a arcu. Eu augue ut lectus arcu bibendum at varius vel. A arcu cursus vitae congue mauris rhoncus aenean vel. Lacus vel facilisis volutpat est velit egestas dui id ornare. Ullamcorper malesuada proin libero nunc consequat interdum varius. Diam maecenas sed enim ut sem viverra aliquet. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.'},
                {text: 'Mollis nunc sed id semper risus. Nulla facilisi morbi tempus iaculis urna. Tempus iaculis urna id volutpat lacus laoreet. Sed faucibus turpis in eu mi bibendum neque. Ullamcorper sit amet risus nullam eget felis eget. A erat nam at lectus urna. Suspendisse ultrices gravida dictum fusce. Arcu dui vivamus arcu felis. Netus et malesuada fames ac turpis. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Vulputate odio ut enim blandit volutpat. Eget magna fermentum iaculis eu non diam phasellus. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl nunc mi ipsum faucibus vitae aliquet nec. Morbi non arcu risus quis varius.'},
                {text: 'Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Arcu bibendum at varius vel pharetra vel turpis nunc. Faucibus nisl tincidunt eget nullam non. Vel fringilla est ullamcorper eget. Et leo duis ut diam quam nulla. Adipiscing elit duis tristique sollicitudin nibh sit. Aliquet nec ullamcorper sit amet risus nullam. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sit amet est placerat in egestas erat imperdiet sed.'}
            ]
        },

        comments:[
            {
            profilePic: '../images/liluzivert.jpg',
            userName: 'realTrapper98',
            comment: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
            replies: []
            },

            {
            profilePic: '../images/21savage.jpg',
            userName: 'daSavage21',
            comment: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
            replies: []
            }
        ]

    });
};