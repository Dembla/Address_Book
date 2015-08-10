var Contact = {}

Contact.parseName = function (str) {

	var parts = str.split(",")
	return parts[0].trim()
}
Contact.parseNumber = function (str) {
	var numb = str.split(",")[1].trim();
	return numb
}

Contact.createContact = function (str) {

	var obj = {
		name : this.parseName(str),
		number : this.parseNumber(str)
	}
	return obj
}

Contact.loadContacts = function(done) {
	
	var jsonfile = require('jsonfile')
	jsonfile.readFile ('data.json', function(err, data) {
		done(err, data)
})
}

Contact.saveContacts = function(contacts, done) {
	var jsonfile = require('jsonfile')
	jsonfile.writeFile ('data.json',contacts, function(err) {
		done(err)
})
}

Contact.saveContact = function (contact, done) {
	var _this = this
	
	this.loadContacts (function (err, contacts) {
		if (err) {return done (err) }
		contacts.push(contact)
		_this.saveContacts(contacts, done)
})
}

/*Contact.findContacts = function (name, done) {
//var express = require('express')	
//var _ = require('lodash')

	this.loadContacts (function (err, contacts) {
		if (err) { return done (err) }
		//var foundContacts = _.filter(contacts, _.matches({name: name}));
		for (var i = 0; i < contacts.length; i++) 
		{
		if(contacts[i].name === name)
		{ done (err, contacts[i])}	
		}
})
}*/

Contact.findContacts = function (name, done) {
	this.loadContacts (function (err, contacts){
		if (err) { return done(err) }
		var foundContacts = contacts.filter(function (value){
			return  value.name == name
		});
		done(err, foundContacts)
	})
}


module.exports = Contact
