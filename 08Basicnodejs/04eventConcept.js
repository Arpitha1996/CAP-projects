//simple event
var events = require('events');

var ev = new events.EventEmitter();

ev.on('speak', () => {
    console.log("how you doing");

});
ev.emit('speak');
// we can inherit this events to the other util object 
var utils = require('util');

var person = new function(name){
        this.name = name;

};

utils.inherits(person, events.EventEmitter);

var arpitha = new person("Arpitha");
var kiran = new person("Kiran");
var people = [arpitha, kiran];

people.forEach( Element => {
    Element.on('talk',(msg) => {
        console.log(Element.name + "says" + msg)

    })
})
arpitha.emit("Hey dude");
kiran.emit("Hi All");