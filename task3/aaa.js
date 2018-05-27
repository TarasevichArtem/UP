let post11 = {
    id: '12',
    authorId: '1111',
    description: 'Lololo',
    createdAt: new Date('2006-08-23T23:00:00'),
    authorName: 'Вася',
    photoLink: 'Рисунок14.png',
    hashtags: ['#кек'],
    whoLiked: ['Артём']

};

let content = document.getElementsByClassName("content")[0];
window.domModule = (function(){
    return {
        createPhotoPost: function(post){
            photoPosts.push(post);
            let div = document.createElement('div');
            div.id = post.id;
            div.className = "photopost";
            let upper =
                '<output class="info">'+post.authorName+ ' at ' + post.createdAt.toLocaleString()+'</output>';
            let lower =
                '<output class="description">' + post.description + '</output>' +
                '<output class="hashtеags">' + post.hashtags + '</output>' +
                '<output class="whoLiked">' + post.whoLiked + " like this" + '</output>' +
                '<output class="buttons">' +
                '<button class="like">' +
                '<button class="edit">' +
                '<button class="delete">' +
                '</output>';
            div.innerHTML= '<img class="photo"src = "'+post.photoLink+'"alt="photo">';
            div.innerHTML = upper + div.innerHTML + lower;
            return div;
        },

        getPhotoPost: function(id) {
            let post = func.getPhotoPost(id);
            content.appendChild(this.createPhotoPost(post));
            return post;
        },

        getPhotoPosts: function (skip = 0, top = 10, filterConfig) {
            let posts = func.getPhotoPosts(skip, top, filterConfig);
            posts.forEach((elem) => {
                content.appendChild(this.createPhotoPost(elem));
        });
        },

        editPhotoPost: function(id, photoPost){
            const post = func.getPhotoPost(id);
            if(!post){
                return false;
            }
            if(func.validatePhotoPost(post)){
                if(photoPost.photoLink){
                    post.photoLink = photoPost.photoLink;
                }
                if(photoPost.description){
                    post.description = photoPost.description;
                }
                if(photoPost.hashTags){
                    post.hashtags = photoPost.hashTags;
                }
                let i = photoPosts.findIndex(elem => elem.id == id);
                photoPosts[i] = post;
                return true;
            }
            return false;
        },

        removePhotoPost: function (id) {
            const post = func.getPhotoPost(id);
            if(!post){
                return false;
            }
            photoPosts.splice(photoPosts.indexOf(post), 1);
            //func.sortByDate(photoPosts);
            return true;
        }

    }
})
();

window.domModule.createPhotoPost(post11);
window.domModule.getPhotoPosts(0, 12, {author: 'Вася'});
window.domModule.getPhotoPosts(0, 12);
window.domModule.editPhotoPost('12', post12);
window.domModule.removePhotoPost(('6'));
window.domModule.getPhotoPosts(0, 12);