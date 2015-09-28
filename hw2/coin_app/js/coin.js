	
	var argv = require('minimist')(process.argv.slice(2));
	var readline = require('readline');
	var fs = require('fs');
	var rl = readline.createInterface({
		input: process.stdin, // ввод из стандартного потока
		output: process.stdout // вывод в стандартный поток
	});

	var path_to_file,
		max = 1,
		min = 0;
	
	//рандомный выбор 1 или 2
	getRandomNumb = function(numb){
		//задаем интервал рандома
		
			return Math.floor(Math.random(numb) * 1) + 1;
	}

	writeToFile = function(GameResult,path_to_file){
		fs.writeFile(path_to_file, GameResult, function (err) {
			  if (err) throw err;
			  console.log('It\'s saved!');
		});
	}

	
	getPath = function(){
		// запросить путь у юзера
		rl.on('line' ,function(path_to_file){
			
			return path_to_file;
		});
		return path_to_file;
	}

	//читаем файл
	// readFile = function(path_to_file) {
	// 	fs.readFile( path_to_file, function (err, data) {
	// 	 	if (err) throw err;
	// 		console.log(data.toString());
	// 	});
	// }

	console.log('Start game - Please type 0 or 1');		

	rl.on('line',function(numb){

		var rand = getRandomNumb(numb);

		if(numb == min || numb == max){
			if(numb == rand){
				var GameResult = 'win';
				var path_to_file = getPath();

				//пишем в файл результат
				writeToFile(GameResult,path_to_file);
				console.log('You win! '+ numb +' is a right answer');
				rl.close();
			}
			else{
				var GameResult = 'win';
				//запрашиваем путь у юзера НЕ РАБОТАЕТ 
				var path_to_file = getPath();

				//пишем в файл результат НЕ РАБОТАЕТ 
				writeToFile(GameResult,path_to_file);
				console.log('You lose! ' + numb + ' it\'s a wrond answer');
				rl.close();
			}
		}
		else{
			console.log('Please type 0 or 1')
		}
	});

