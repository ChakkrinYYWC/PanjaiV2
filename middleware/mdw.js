const   user = require('../model/user');

module.exports = {
    async isToken(req, res, next){
        const webToken = req.body.PanjaiToken;
        var DBToken;
        //console.log(webToken)
        await user.find({username: req.body.username}, function(err, found){
            if(err){
                console.log(err);
            }
            DBToken = found[0].accessToken;
            console.log(found[0])
        })
        //user.find(user=> user.username == req.body.username )

        if(webToken !== DBToken){
            res.send('reLogin')
        } else {
            return next()
        }
        console.log('webToken: '+webToken);
        console.log('DBToken: '+DBToken);
    }
    // isLoggedin(req, res, next){
    //     if(req.isAuthenticated()){
    //         return next()
    //     }
    //     req.flash('error', 'You need to login first');
    //     res.redirect('/login')
    // },
    // isAdmin(req, res, next){
    //     if(req.isAuthenticated()){
    //         user.findById(res.locals.currentUser._id, function(err, founduser){
    //             if(err){
    //                 //res.redirect("back");
    //                 console.log(err)
    //                 res.redirect('back');
                    
    //             }
    //             if(founduser.permission.toString() == "admin") {

    //                 next();
    //             } else {
    //                 req.flash('error', 'Sorry, only admin can do this!');
    //                 res.redirect('back');
    //             }
    //         });
    //     } else {
    //         req.flash('error', 'You need to login first');
    //         res.redirect('back');
    //     }
    // },
    // checkPostOwnership(req, res, next){
    //     if(req.isAuthenticated()){
    //         post.findById(req.params.id, function(err, foundpost){
    //             if(err){
    //                 //res.redirect("back");
    //                 console.log(err)
    //                 res.redirect('back');
    //             }
    //             if(foundpost.owner_id.toString() == res.locals.currentUser._id) {
    //                 next();
    //             } else {
    //                 req.flash('error', 'You must be owner or admin');
    //                 res.redirect('back');
    //             }
    //         });
    //     } else {
    //         req.flash('error', 'You need to login first');
    //         res.redirect('back');
    //     }
    // },
    // havepermission(req, res, next){
    //     if(req.isAuthenticated()){
    //         user.findById(res.locals.currentUser._id, function(err, founduser){
    //             post.findById(req.params.id, function(err, foundpost){
    //                 if(err){
    //                 //res.redirect("back");
    //                 console.log(err)
    //                 res.redirect('back');
                        
    //                 }
    //                 if(founduser.permission.toString() == "admin") {
    //                     next();
    //                 } else {
    //                     if(foundpost.owner_id.toString() == res.locals.currentUser._id) {
    //                         next();
    //                     } else {
    //                     req.flash('error', 'You must be owner or admin');
    //                     res.redirect('back');
    //                     }
    //                 }
    //             });     
    //         });
    //     } else {
    //         req.flash('error', 'You need to login first');
    //         res.redirect('back');
    //     }
    // },
    
    // checkCommentOwnership(req, res, next){
    //     if(req.isAuthenticated()){
    //         comment.findById(req.params.id, function(err, foundComment){
    //             if(err){
    //                 res.redirect("back");
    //             } else {
    //                 if(foundComment.author.id.equals(req.user._id)) {
    //                     next();
    //                 } else {
    //                     res.redirect('back');
    //                 }
    //             }
    //         });
    //     } else {
    //         res.redirect('back');
    //     }
    // }
}