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
            block : 'header',
            content : [
                {
                    block : 'header',
                    elem : 'top',
                    content : {
                        block : 'container',
                        content : [
                            {
                                block : 'header',
                                elem : 'phone',
                                tag : 'p',
                                content : '+7 978 902 52 82'
                            },
                            {
                                block : 'link',
                                mix : { block : 'header', elem : 'email' },
                                url : 'mailto:i@tadatuta.com',
                                content : 'i@tadatuta.com'
                            },
                            {
                                block : 'socials',
                                content : [
                                    { url : 'http://vk.com/tadatuta', type : 'vk' },
                                    { url : 'https://www.facebook.com/tadatuta', type : 'fb' },
                                    { url : 'https://twitter.com/tadatuta', type : 'tw' }
                                ].map(function(share) {
                                    return {
                                        block : 'link',
                                        url : share.url,
                                        mix : { 
                                            block : 'socials', 
                                            elem : 'item',
                                            mods : (function(o, type){
                                                return (o[type]=true) && o;
                                            }({}, share.type))
                                        }
                                    };
                                })
                            }
                        ]
                    }
                },
                {
                    block : 'header',
                    elem : 'bottom',
                    content : {
                        block : 'container',
                        content : [
                            {
                                block : 'logo',
                                content : 'Tadatuta'
                            },
                            {
                                block : 'nav',
                                tag : 'ul',
                                content : [
                                    { url : '/portfolio/', value : 'Что сделали' },
                                    { url : '/uslugi/', value : 'Что умеем' },
                                    { url : '/vakansii/', value : 'Кто нужен' },
                                    { url : '/kontakt/', value : 'Как найти' }
                                ].map(function(nav) {
                                    return {
                                        elem : 'item',
                                        tag : 'li',
                                        content : {
                                            block : 'link',
                                            mix : { block : 'nav', elem : 'link'},
                                            url : nav.url,
                                            content : nav.value
                                        }
                                    };
                                })
                            }
                        ]
                    }
                } 
            ]
        },
        {
            block : 'content',
            content : {
                block : 'container',
                content : [
                    {
                        block : 'content',
                        elem : 'about',
                        mods : { size : 'big '},
                        content : [
                            {
                                elem : 'title',
                                tag : 'h2',
                                content : 'О нас',
                                mods : { color : 'red' }

                            },
                            {
                                elem : 'text',
                                tag : 'ul',
                                content : [
                                    "Тадатута — мы делаем сайты.",
                                    "Кроме того, мы любим верстку, регистрируем домены, предоставляем хостинг, пишем статьи, переводим на разные языки и пишем сложные веб-приложения.",
                                    "Наша миссия: помогать достигать цели.",
                                    "Мы — лучшая студия на Южном берегу Крыма. Наша цель стать лучшей студией в Крыму.",
                                    "Мы внимательно следим за жизнью разработанных сайтов, осуществляя поддержку и продвижение.",
                                    "Результаты нашей работы настолько нравятся клиентам, что они советуют нас своим друзьям.",
                                    "Профессиональный веб-дизайн, удобная навигация и качественный контент — это те инструменты, которые помогают достигать цели.",
                                    "Мы в силах оправдать ваши самые смелые ожидания!"
                                ].map(function(text, i) {
                                    return {
                                        elem : 'item',
                                        tag : 'li',
                                        content : text,
                                        mods : { marginBottom : 'big'}
                                    };
                                })
                            }
                        ]
                    },
                    {
                        block : 'content',
                        elem : 'about',
                        mods : { size : 'small '},
                        content : [
                            {
                                elem : 'title',
                                tag : 'h2',
                                content : 'Почему мы',
                                mods : { color : 'orange' }

                            },
                            {
                                elem : 'text',
                                tag : 'ol',
                                content : [
                                    'Более 5 лет опыта.',
                                    'Нам нравится то, что мы делаем.',
                                    'У нас огромное портфолио, которое говорит само за себя.',
                                    'Мы не зазнались и не задираем цены.',
                                    'Есть еще как минимум 100 причин выбрать именно нас.'
                                ].map(function(text, i) {
                                    return {
                                        elem : 'item',
                                        tag : 'li',
                                        content : text,
                                        mods : { marginBottom : 'small'}
                                    };
                                })
                            }
                        ]
                    },
                    {
                        block : 'content',
                        elem : 'about',
                        mods : { size : 'small '},
                        content : [
                            {
                                elem : 'title',
                                tag : 'h2',
                                content : 'Мы используем',
                                mods : { color : 'yellow' }

                            },
                            {
                                elem : 'text',
                                tag : 'ol',
                                content : [ 
                                    'HTML5',
                                    'полный стек БЭМ (i-bem.js, bemhtml и даже на бекенде у нас полный БЭМ), студия активно принимает участие в разработке БЭМ-технологий',
                                    'node.js',
                                    'XSLT',
                                    'git',
                                    'MySQL',
                                    'mongoDB'
                                ].map(function(text, i) {
                                    return {
                                        elem : 'item',
                                        tag : 'li',
                                        content : text,
                                        mods : { marginBottom : 'small'}
                                    };
                                })
                            }
                        ]
                    }
                ]
            }
        },
        {
            block : 'partners',
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
                                    mix : { block : value.cls},
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
                                };
                            })
                        }
                    ]
                }
        },
        {
            block : 'market',
            content : {
                block : 'container',
                content :
                    {
                        block : 'market',
                        elem : 'inner',
                        content : [
                            {
                                block : 'link',
                                
                                mix : { block : 'market', elem : 'checkOut' },
                                url : '/contact/',
                                content : 'Оформить заказ'
                            },
                            {
                                block : 'share',
                                content : [
                                    {type : 'vk', title : 'ВКонтакте' },
                                    {type : 'fb', title : 'ВКонтакте' },
                                    {type : 'tw', title : 'ВКонтакте' },
                                    {type : 'odn', title : 'ВКонтакте' },
                                    {type : 'mail', title : 'ВКонтакте' },
                                    {type : 'gplus', title : 'ВКонтакте' }
                                ].map(function(share) {
                                    return {
                                        block : 'link',
                                        mix : { 
                                            block : 'share', 
                                            elem : 'item',
                                            mods : (function(o, type){
                                                return (o[type]=true) && o;
                                            }({}, share.type))
                                        }, 
                                    };
                                })
                            }
                        ]
                    }
                
            }
        },
        {
            block : 'footer',
            content : {
                block : 'container',
                content : [
                    {
                        block : 'footer',
                        elem : 'phone',
                        tag : 'p',
                        content : '+7 978 902 52 82',
                    },
                    {
                        block : 'link',
                        mix : { block : 'footer', elem : 'email' },
                        url : 'mailto:i@tadatuta.com',
                        content : 'i@tadatuta.com'
                    },
                    {
                        block : 'footer',
                        elem : 'copy',
                        tag : 'p',
                        content : '© 2006—2014 tadatuta.com',
                    },
                ]
            }
        }

    ]
});
