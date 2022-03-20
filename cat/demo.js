
var fs = require('fs')
var path=require('path');
 
var filePath=path.resolve(__dirname);  
//readdir方法读取文件名
//readFile方法读取文件内容
//writeFile改写文件内容
fs.readdir(filePath, 'utf8', function (err,data) {
    // console.log(data)
	data.forEach(function(item, index) {
		
        if(item.indexOf('html')<0||item.indexOf('index')>=0){
            return 
        }
        console.log(item,item.includes('index')>=0);
		fs.readFile(`./${item}`,'utf8',function(err,files){
			// console.log(files)
			var result = files.replace(/<\/html>/g, ` <style>             .bannerTable{
                height: auto;
                            }
                          
                        </style></html>`);
   
 
			fs.writeFile('./'+item, result, 'utf8', function (err) {
			     if (err) return console.log(err);
			});
 
		})
	});
 
});