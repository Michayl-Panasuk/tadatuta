({
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'partners',
            mix : {
                block : 'test'
            },
            content : 
                {
                    block : 'container',
                    content : [
                        {
                            block : 'partners',
                            elem : 'title',
                            tag : 'h2',
                            content : 'Наши партнеры'
                        },
                        {
                            block : 'partners',
                            elem : 'list',
                            tag : 'ul',
                            content : [
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/siteg-gray.png', url : 'http//', cls : 'listEl-0'},
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/yandex-grey.png', url : 'http//', cls : 'listEl-1'},
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/hawle-grey.png', url : 'http//', cls : 'listEl-2'},
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/kia-grey.png', url : 'http//', cls : 'listEl-3'},
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/artpress-grey.png', url : 'http//', cls : 'listEl-4'},
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/ladjane-grey.png', url : 'http//', cls : 'listEl-5'},
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/globaltek-grey.png', url : 'http//', cls : 'listEl-6'},
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/ea-grey.png', url : 'http//', cls : 'listEl-7'},
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/milokumov-grey.png', url : 'http//', cls : 'listEl-8'},
                                {src : 'http://new.tadatuta.ru/wp-content/uploads/2012/01/gerb-grey.png', url : 'http//', cls : 'listEl-9'}
                            ].map(function(value) {
                                return {
                                    block : 'partners',
                                    elem : 'listEl',
                                    tag : 'li',
                                    cls : value.cls,
                                    content : {
                                        block : 'link',
                                        url : value.url,
                                        content : {
                                            block : 'partners',
                                            elem : 'logo',
                                            tag : 'img',
                                            attrs : { src : value.src }
                                    }
                                }
                            }
                        })
                        }
                    ]
                }
        }
    ]
})
