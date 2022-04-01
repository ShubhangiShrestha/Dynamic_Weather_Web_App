const http=require("http");
const fs=require("fs");
const request=require("requests");
const weather=fs.readFileSync("Weather.html","utf-8");

const replaceVal=(tempVal,orgVal)=>{
	let temperature=tempVal.replace("{%tempVal%}",orgVal.main.temp);
	let temperature=tempVal.replace("{%tempVal%}",orgVal.main.temp);
	let temperature=tempVal.replace("{%tempVal%}",orgVal.main.temp);
	let temperature=tempVal.replace("{%tempVal%}",orgVal.main.temp);
}
const server=http.createServer((req,res)=>{
	if(req.url=="/"){
		request("https://api.openweathermap.org/data/2.5/weather?q=Ramgarh&appid=ca8ab7a326390185f9049f19dc22e4fc")
		.on('data',(chunk)=> {
			const objdata=JSON.parse(chunk);//converting json to object
			const arrdata = [objdata];//converting object to array
			const realTimeData=arrData.map((val)=>{
				replaceVal(weather,val);
			})
		   	console.log(arrdata);
		})
		.on('end', (err)=> {
  		if (err) 
  			return console.log('connection closed due to errors', err);
 		console.log('end');
		});
	}
});
server.listen(8000,"127.0.0.1");