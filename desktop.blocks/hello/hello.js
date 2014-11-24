modules.define(
    'hello',
    ['i-bem__dom'],
    function(provide, BEMDOM) {
        provide(BEMDOM.decl('hello', {
            onSetMod: {
                'js': {
                    'inited': function() {
                        this._input = this.findBlockInside('input');
                        this._button = this.findBlockInside('button');

                        this._button.on('click', function() {
                            this.elem('greeting').text('Hello, ' + this._input.getVal() + '!');
                        }, this);
                    }
                }
            }
        }));
    });
