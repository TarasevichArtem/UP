    var photoPosts = [
        {
            id: '1',
            authorId: '1111',
            description: 'Lololo',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Вася',
            photoLink: 'Рисунок2.png',
            hashtags: ['#кек'],
            whoLiked: ['Паша']

        },

        {
            id: '2',
            authorId: '1234',
            description: 'Привет',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Паша',
            photoLink: 'Рисунок3.png',
            hashtags: ['#банан'],
            whoLiked: []

        },
        {
            id: '3',
            authorId: '1789',
            description: 'лол',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Настя',
            photoLink: 'Рисунок5.png',
            hashtags: ['#слежка'],
            whoLiked: ['Вася']

        },
        {
            id: '4',
            authorId: '1567',
            description: 'Мило',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Кирилл',
            photoLink: 'Рисунок6.png',
            hashtags: ['#праздник'],
            whoLiked: ['Артём']

        },
        {
            id: '5',
            authorId: '2222',
            description: 'Выпукло',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Артём',
            photoLink: 'Рисунок7.png',
            hashtags: ['#кек'],
            whoLiked: ['Настя']

        },
        {
            id: '6',
            authorId: '1234',
            description: 'окно',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Паша',
            photoLink: 'Рисунок8.png',
            hashtags: ['#лол'],
            whoLiked: ['Лёша']

        },
        {
            id: '7',
            authorId: '3333',
            description: 'Деньги',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Полина',
            photoLink: 'Рисунок9.png',
            hashtags: ['#Выпукло'],
            whoLiked: ['Кирилл']

        },
        {
            id: '8',
            authorId: '4444',
            description: 'Фото моего кота',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Лёша',
            photoLink: 'Рисунок11.png',
            hashtags: ['#кот'],
            whoLiked: ['Полина']

        },
        {
            id: '9',
            authorId: '4444',
            description: 'Мой кот',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Лёша',
            photoLink: 'Рисунок10.png',
            hashtags: ['#кот'],
            whoLiked: ['Вася']

        },

        {
            id: '10',
            authorId: '4444',
            description: 'Коты',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Антон',
            photoLink: 'Рисунок12.png',
            hashtags: ['#кот'],
            whoLiked: ['Паша']

        },
        {
            id: '11',
            authorId: '1234',
            description: 'Lololo',
            createdAt: new Date('2006-08-23T23:00:00'),
            authorName: 'Паша',
            photoLink: 'Рисунок13.png',
            hashtags: ['#хз'],
            whoLiked: ['Настя']

        }
    ];



    //Public functions
    window.func = (function() {
        return {
            sortByDate: function (photoPosts) {
                photoPosts.sort(function (a, b) {
                    return b.createdAt - a.createdAt;
                });
            },

            getPhotoPost: function (id) {
                if(id > 0) {
                    let i = photoPosts.findIndex(elem => elem.id === id);
                    return photoPosts[i];
                }
                return false;
            },

            validatePhotoPost: function (photoPost) {
                if (
                    photoPost.id != null &&
                    photoPost.descriprion != null &&
                    photoPost.createdAt != null &&
                    photoPost.author != null &&
                    photoPost.photoLink != null)
                    return true;
                return false;
            },

            addPhotoPost: function (photoPost) {
                return (func.validatePhotoPost(photoPost)) &&
                    photoPosts.push(photoPost);
            },
            editPhotoPost: function (id, photoPost) {
                if(this.validatePhotoPost(photoPost)){
                    let i = photoPosts.findIndex(elem => elem.id === id);
                    if(photoPost.description){
                        photoPosts[i].descriprion = photoPost.description;
                    }
                    if(photoPost.description){
                        photoPosts[i].photoLink = photoPost.photoLink;
                    }
                    if(photoPost.description){
                        photoPosts[i].hashTags = photoPost.hashTags;
                    }
                    return true;
                }
                return false;
            },

            removePhotoPost: function (id) {
                let i = photoPosts.findIndex(elem => elem.id === id)
                if (i < 0)
                    return false;
                photoPosts.splice(photoPosts[i], 1);
                return true;
            },

            getPhotoPosts: function (skip = 0, top = 10, filterConfig) {
                if (!filterConfig || filterConfig === undefined || arguments.length < 3 || filterConfig === {}) {
                    return photoPosts.slice(skip, skip + top);
                }
                else {
                    if (typeof filterConfig !== 'object') {
                        console.log('Error in getPhotoPosts');
                        return;
                    }
                    var res = photoPosts;
                    if (filterConfig.author) {
                        res = res.filter(post => post.author === filterConfig.author);
                    }
                    if (filterConfig.createdAt) {
                        res = res.filter(elem =>
                            post.createdAt.getFullYear() === filterConfig.createdAt.getFullYear() &&
                            post.createdAt.getMonth() === filterConfig.createdAt.getMonth() &&
                            post.createdAt.getDate() === filterConfig.createdAt.getDate()
                    );
                    }
                    if (filterConfig.hashtags) {
                        res = res.filter(post => {
                            return filterConfig.hashtags.every((tag) => {
                                return post.hashtags.includes(tag);
                    }) ;
                    });
                    }
                    return res.slice(skip, skip + top);
                }
                return sortByDate(photoPosts);
            }
        }

}());