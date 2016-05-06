var bestandsysteem = require ('fs')




function parseJSON (file, callback) {
	bestandsysteem.readFile (file, function (err, filecontents){
	if (err){
		console.log ("Noooo" + err)
	}
	var jsondata = JSON.parse(filecontents);
	callback(jsondata)
})

}

module.exports.parseJSON = parseJSON