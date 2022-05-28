[![cogroid.com](https://github.com/cogroid/resources/raw/main/images/banner/cogroid-48.png)](https://cogroid.com)

# Binaries of Atomize - JavaScript Sandbox for AtomSpace

### Release

[Atomize 0.1](https://github.com/cogroid/d-atomize-bin/releases/download/atomize-0.1/atomize.jar)

[dAtomSpace Tester with Atomize](https://github.com/cogroid/d-atomize-bin/releases/download/atomize-0.1/datomspace-tester.apk)

### Install & Run dAtomSpace Tester with Atomize

1. Download [datomspace-tester.apk](https://github.com/cogroid/d-atomize-bin/releases/download/atomize-0.1/datomspace-tester.apk)

2. Install datomspace-tester.apk (Do not run!)

3. Go to Settings -> Apps -> dAtomSpace Tester. Set Storage permission.

4. Run dAtomSpace Tester

5. View results in datomspace-test.txt file in Download folder

### Maven

```
        <dependency>
            <groupId>com.cogroid.atomize</groupId>
            <artifactId>atomize</artifactId>
            <version>0.1</version>
            <scope>system</scope>
            <systemPath>${project.basedir}/lib/atomize.jar</systemPath>
        </dependency>
```

### How to use

Copy [samples](https://github.com/cogroid/d-atomize-bin/tree/main/samples) folder to /storage/emulated/Download/jsb

```
String tmpFolder = "/storage/emulated/0/Download";

com.cogroid.atomspace.Loader.me().loadWithLog(tmpFolder);

int timeout = 60000;
String jsFile = "/storage/emulated/0/Download/jsb/Tests.js";
String inputFile = "/storage/emulated/0/Download/jsb/input.json";
String outputFile = "/storage/emulated/0/Download/jsb/output.json";

com.cogroid.atomize.ASBRun asbRun = new com.cogroid.atomize.ASBRun();
asbRun.exec(jsFile, timeout, inputFile, outputFile);

```

### Tests.js

```
function __exec__(data) {
	runTestWithInput('/AtomSpace.js', data.input());
	runTestWithInput('/ConceptNode.js', data.input());
}

function runTestWithInput(testFile, inputMap) {
	log().info('===== ' + testFile + ' =====');
	var outputMap = mch().exec(testFile, 60000, inputMap);
	log().info('Result: ' + tool().toJson(outputMap));
}
```

### fs/AtomSpace.js

```
function __exec__(data) {
	var pv = as().newAtomSpace();
	var l = "isAtom: " + pv.isAtom();
	writeLog(l);
	l = "isNode: " + pv.isNode();
	writeLog(l);
	l = "isLink: " + pv.isLink();
	writeLog(l);
	l = "isType: " + pv.isType(1);
	writeLog(l);
	l = "getHash: " + pv.getHash();
	writeLog(l);
	l = "toString(indent): " + pv.toString("indent");
	writeLog(l);
	l = "toShortString(indent): " + pv.toShortString("indent");
	writeLog(l);
	pv.getOutgoingSet();
	pv.dispose();
	l = "disposed: " + pv.disposed();
	writeLog(l);	
}

function writeLog(l) {
	log().info(l);
}
```

### fs/ConceptNode.js

```
function __exec__(data) {
	var vas = as().newAtomSpace();
	var pv = as().newConceptNode(vas, "dream");
	var pv_b = as().newConceptNode(vas, "dream");
	var l = "isAtom: " + pv.isAtom();
	writeLog(l);
	l = "isNode: " + pv.isNode();
	writeLog(l);
	l = "isLink: " + pv.isLink();
	writeLog(l);
	l = "getName: " + pv.getName();
	writeLog(l);
	l = "getArity: " + pv.getArity();
	writeLog(l);
	l = "toString: " + pv.toString();
	writeLog(l);
	l = "toShortString: " + pv.toShortString();
	writeLog(l);
	l = "equals(true, dream): " + pv.equals(pv);
	writeLog(l);
	l = "equals(false, dream): " + pv.equals(pv_b);
	writeLog(l);
	l = "equals(false, atomspace): " + pv.equals(as);
	writeLog(l);
	pv.dispose();
	l = "disposed: " + pv.disposed();
	writeLog(l);
}

function writeLog(l) {
	log().info(l);
}
```

---
[Head icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/head)
