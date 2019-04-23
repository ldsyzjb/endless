
Object.defineProperty(window, 'lol', new (function(){

    function Storage(){};
    var prototype = {};
    Storage.prototype = prototype;
    var local = new Storage();
    var List = [];

    // init localStorage from cookie;a
    var _datas = document.cookie ? document.cookie.split(';') : [],
        _item;
    for(var i=0; i<_datas.length; i++){
        _item = _datas[i].split('=').map(v => v.trim());

        local[_item[0]] = _item[1];
        List[i] = _item[0];
    }
    local.length = i

    Object.defineProperty(prototype, 'getItem', {
        value: function getItem(){
            if(arguments.length < 1) throw new TypeError('getItem')
            var key = arguments[0].toString();
            return local[key] ? local[key] : null;
        },
        writable: false,
        enumerable: false,
        configurable: false,
    })
    Object.defineProperty(prototype, 'setItem', {
        value: function setItem(){
            if(arguments.length < 2) throw new TypeError('setItem')
            var key = arguments[0].toString();
            var value = arguments[1].toString();
            local[key] = value;
            local.length += 1;
            List.push(key)
            document.cookie = escape(key) + '=' + escape(value) +'; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/'
        },
        writable: false,
        enumerable: false,
        configurable: false,
    })
    Object.defineProperty(prototype, 'removeItem', {
        value: function removeItem(){
            if(arguments.length < 1) throw new TypeError('removeItem')
            var key = arguments[0].toString();
            delete local[key];
            local.length -= 1;
            List.splice(List.indexOf(key));
            document.cookie = escape(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        },
        writable: false,
        enumerable: false,
        configurable: false,
    })
    Object.defineProperty(prototype, 'clear', {
        value: function clear(){
            for(var i=0; i<List.length; i++){
                local.removeItem(List[i]);
            }
        }
    })
    Object.defineProperty(prototype, 'key', {
        value: function key(){
            var index = arguments[0]
            if(arguments.length < 1) throw new TypeError('key')
            return List[index]
        }
    })
    Object.defineProperty(prototype, 'length', {
        get: function(){
            return List.length;
        },
        configurable: false,
        enumerable: false,
    })
    this.get = function(){
        return local;
    }
}));



