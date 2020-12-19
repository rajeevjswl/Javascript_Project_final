
import {multiply,divide} from './file2'
export var mul=multiply
export var div=divide
exports.add=function(o1,o2){
	return Number(o1)+Number(o2);
}
exports.sub=function(o1,o2){
	return Number(o1)-Number(o2);
};
