function interactor(wrap, button, textArea) {
    button.onClick(doWrap) 
    
    function doWrap(text, columns) {
        var result = wrap(text, columns);
        textArea.show(result); // mutation testing 
    }   

    return {
        doWrap: doWrap
    }
}

function __button(id) {
    var onClickHandler
    return {
        click: function () {
            if (onClickHandler) { onClickHandler() }
        },
        show: function () {

        }, 
        onClick: function (callback) {
            onClickHandler = callback                       
        }
    };
}

function button(id) {
    var events = new eventSubscriber()
    return {
        click: function () {
            events.trigger('click')
        },
        show: function () {

        }, 
        onClick: function (callback) {
            events.subscribe('click', callback)                       
        }
    };
}

function textArea(id) {
    return {
        show: function (text) {
            // draw text in the DOM
        }
    }
}

function eventSubscriber () {
    var subscribers = {}
    return {
        subscribe: function (event, callback) {
            if (!subscribers[event]) subscribers[event] = []
            subscribers[event].push(callback)
        },
        trigger: function (event) {
            if (!subscribers[event]) return
            subscribers[event].forEach(callback => callback())
        }
    }
}

function wrap(text, columns) {
    if (text.length <= columns) return text;

    var wrappedText = text.substr(0, columns) + '\n';
    var rest = text.substr(columns);
    return wrappedText + wrap(rest, columns);
}

module.exports = {
    wrap,
    button,
    textArea,
    interactor
}

