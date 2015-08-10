var Myparrot = require ('./parrot')
var Contact = require('./Contact')

var Command = require('./command')

//var Message = Myparrot.speakEnglish()
var name = Contact.parseName ("John Smith,604-123-9090")
var number = Contact.parseNumber("John Smith, 604-123-9090")

var contact = Contact.createContact ("John Smith, 604-123-9090")

console.log(number)
console.log(name)
console.log(contact)

Contact.loadContacts(function(err, data) {
	console.log (data)
})

var contacts = [ { name: "John Smith", number: " 604-153-9090" }]
Contact.saveContacts(contacts, function(err) {
	console.log('success')

})

var contact = {name: "John Smith", number: "604-123-9090"}

Contact.saveContact(contact, function(err) {
console.log ('success')
})


var name = "John Smith"
Contact.findContacts (name, function (err) {
	console.log('success')
})
//console.log(Message)
//console.log(Myparrot.speakSpanish())


console.log(Command.getOperation())
console.log(Command.getOperationData())
