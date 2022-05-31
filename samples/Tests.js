function __exec__(data) {
	runTestWithInput('/AtomSpace.js', data.input());
	runTestWithInput('/ConceptNode.js', data.input());
	
	runScmWithInput('/ConceptNode.scm', data.input());
}

function runScmWithInput(scmFile, inputMap) {
	as().scheme2js(scmFile, scmFile + '.js');
	runTestWithInput(scmFile + '.js', inputMap);	
}

function runTestWithInput(testFile, inputMap) {
	log().info('===== ' + testFile + ' =====');
	var outputMap = mch().exec(testFile, 60000, inputMap);
	log().info('Result: ' + tool().toJson(outputMap));
}
