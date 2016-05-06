var countryname =  process.argv[2]
var filereader = require ('./json-file-reader.js')



filereader.parseJSON ('./countries.json', function (jsondata){ 
jsondata.forEach (function (country){
	if (country.name == countryname){
		console.log ("Country:" + country.name)
		console.log ("Top Level Domain: " + country.topLevelDomain)
	}
	 	
})
})


