'use strict';

var FilesizeWatcher = require('./FilesizeWatcher');
var exec = require('child_process').exec;

describe('FilesizeWatcher', function(){
	var watcher;

	afterEach(function(){
		watcher.stop();
	});

	it('should fire "grew" event when the file grew in size',function(done){
		var path = '/var/tmp/filesizewatcher.test';
		exec('rm -f' + path + ' ; touch ' + path, function(){
			watcher = new FilesizeWatcher(path);

			watcher.on('grew',function(gain){
				expect(gain).toBe(5);
				done();
			});

			exec('echo "test" > ' + path,function() {});

		});
	});

	it('should fire "shrank" event when the file shrank in size',function(done){
		var path = '/var/tmp/filesizewatcher.test';
		exec('rm -f' + path + ' ; echo "test" > ' + path, function(){
			watcher = new FilesizeWatcher(path);

			watcher.on('shrank',function(loss){
				expect(loss).toBe(3);
				done();
			});

			exec('echo "a" > ' + path,function() {});

		});
	});

	it('should fire "error" if path does not start with slash',function(done){
		var path = '/var/tmp/filesizewatcher.test';
		exec('rm -f' + path + ' ; echo "test" > ' + path, function(){
			watcher = new FilesizeWatcher(path);

			watcher.on('error',function(loss){
				expect(err).toBe('Path does not start with a slash');
				done();
			});

		});
	});

});