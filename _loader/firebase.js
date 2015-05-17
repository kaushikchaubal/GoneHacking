// https://github.com/node-inspector/node-inspector
// one off: sudo npm install -g node-inspector
// debug: node-debug -p 8881 firebase.js
// http://127.0.0.1:8881/debug?ws=127.0.0.1:8881&port=5858
	
var Firebase = require("firebase");
var fb1 = new Firebase("https://gonehacking-goinvest.firebaseio.com/"); 
//var fb1 = new Firebase("https://glaring-heat-9748.firebaseio.com/");

//fb1.set({
//	title: "Hello World!",
//	author: "Firebase",
//	location: {
//		city: "San Francisco",
//		state: "California",
//		zip: 94103
//	}
//})
//
//fb1.child("location/city").on("value", function(snapshot) {
//	  console.log(snapshot.val());  // Alerts "San Francisco"
//});

// http://real-chart.finance.yahoo.com/table.csv?s=YHOO&a=03&b=12&c=1996&d=04&e=16&f=2015&g=d&ignore=.csv
// http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22AAPL%22%20and%20startDate%20%3D%20%222012-09-11%22%20and%20endDate%20%3D%20%222014-02-11%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=

var http = require('http');
//var fs = require('fs');
//
//var file = fs.createWriteStream("file.jpg");
//var request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
//  response.pipe(file);
//});

// http://stackoverflow.com/questions/13458132/json-formatted-stock-quote-api-live-or-historical
//var callback = function(_return /* The json returned for yahooapis */) {
//    var totalReturned = _return.query.count;
//    //OR: var totalReturned = _return.query.results.quote.length;
//    for (var i = 0; i < totalReturned; ++i) {
//        var stock = _return.query.results.quote[i];
//        var symbol = stock.symbol;
//        var percent_change = stock.Change_PercentChange;
//        var changeRealTime = stock.ChangeRealtime;
//    }
//}

var yqlapi = 'http://query.yahooapis.com/v1/public/yql';
var startDate = '2015-01-01';
var endDate = '2015-05-16';
var data = encodeURIComponent('select * from yahoo.finance.historicaldata where symbol in (' + 
		'"YHOO","AAPL","GOOG","MSFT",' + 
		'"LGEN.L","BA.L","CNA.L","RM2.L"' +
		') and startDate = "' + startDate + '" and endDate = "' + endDate + '"');

//$.getJSON(url, 'q=' + data + "&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json", callback);

var callback = function (body) {
	var parsed = JSON.parse(body);
	console.log(parsed);
	// console.log(body);
	
	// firebase/historical_data/<symbol>/
	// 						name: <symbol>
	//						exchange: US
	// 								
	var data = parsed.query.results.quote;	
	var symbols = []; // .push, .indexOf('x') > -1
		
	// firebase/historical_data/AAPL/data/[yyyy-mm-dd, O,C,H,L,V...]
	var d;
	var symbols = {}; // .push, .indexOf('x') > -1
	
	data.forEach(function(item) {
		var s = item.Symbol.replace(".", "_");
		if (s in symbols) {
			d = symbols[s]["data"];
		} else {
			d = [];
			symbols[s] = {"data": d};
		}
		
		d.push(
			{
				"S": item.Symbol,
				"Date": item.Date,
				"O": parseFloat(item.Open), 
				"C": parseFloat(item.Close), 
				"H": parseFloat(item.High), 
				"L": parseFloat(item.Low), 
				"AC": parseFloat(item.Adj_Close),
				"V": parseInt(item.Volume)
		});
	})
	
	var results = {"historical_data": symbols};
	//fb1.ref("historical_data");
	fb1.update(results);
}

var url = yqlapi + '?q=' + data + "&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";
console.log(url)

var request = http.get(url, function(response) {
	 
	// Continuously update stream with data
    var body = '';
    response.on('data', function(d) {
  //  	var result = JSON.parse(d);
    	body += d;
  //  	callback(result); 
    });
    
    response.on('end', function() {
        // Data reception is done, do whatever with it!
        callback(body);
    });
	
	//console.log(response);
});

// loop 
var server = http.createServer(function (request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.end("Hello World\n");
});
server.listen(8801);
console.log("Server running at http://127.0.0.1:8801/");
