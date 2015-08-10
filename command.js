var Command = {}

Command.getOperation = function() {
	return process.argv[2]
}
Command.getOperationData = function () {
	return process.argv[3]
}

Command.add = function (done) {
	var cont = require('./contact')
	var str = this.getOperationData
	var info = cont.createContact (str)

	cont.saveContact (info, done) 
	}


/*Command.add = function(done) {
  var Contact = require('./contact')
    , data = this.getOperationData()
    , contact = Contact.createContact(data)

  Contact.saveContact(contact, done)
}*/
module.exports = Command