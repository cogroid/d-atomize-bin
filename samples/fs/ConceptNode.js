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