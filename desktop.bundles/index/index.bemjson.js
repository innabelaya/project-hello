({
    block: 'page',
    title: 'hello',
    head: [
        { elem: 'css', url: '_hello.css' }
    ],
    scripts: [{ elem: 'js', url: '_hello.js' }],
    content: [
       {
           block: 'content',
           content: [
               {
                   block: 'hello',
                   name: 'BEMHTML',
                   content: [
                       {
                           elem: 'greeting',
                           content: 'Привет, %пользователь%!'
                       },
                       {
                           block: 'input',
                           mods: {theme: 'islands', size: 'm'},
                           placeholder: 'Ты кто ваще?'
                       },
                       {
                           block : 'button',
                           text : 'Пыщь',
                           mods : { theme : 'islands', size : 'm' }
                       }
                 ]
               }
           ]
       }
    ]
})
