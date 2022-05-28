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