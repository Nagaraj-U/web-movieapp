var express=require("express");
var app=express();
var request=require("request");

app.set("view engine","ejs");
app.get("/",function(req,res){
	res.render("search");
})
app.get("/results",function(req,res){
	var query = req.query.moviesearch;
	request("http://www.omdbapi.com/?s="+query+"&apikey=thewdb",function(error,responce,body){
		if(!error && responce.statusCode==200){
			var results=JSON.parse(body);
			//res.send(result["Search"][0]["Title"]);
			res.render("result",{results: results});
		}
});
});
app.listen(3000,function(){
	console.log("server started");
});
