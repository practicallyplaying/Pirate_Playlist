pubcoder.projectID = pubcoder.projectID || "174B25598C6F4BBFBEE716B4FBA1BE0D";
pubcoder.project.id = pubcoder.project.id || "174B25598C6F4BBFBEE716B4FBA1BE0D";
pubcoder.project.title = pubcoder.project.title || "Practically Playing\'s Project";
pubcoder.page.id = pubcoder.page.id || 5732;
pubcoder.page.title = pubcoder.page.title || "1";
pubcoder.page.number = pubcoder.page.number || 1;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj6039_onTap_activeActionGroupIndex = -1;
var obj6039_onTap_runningActionsCount = 0;
var obj6039_onTap_loopCount = 0;
var obj6052_onTap_activeActionGroupIndex = -1;
var obj6052_onTap_runningActionsCount = 0;
var obj6052_onTap_loopCount = 0;
var obj6065_onTap_activeActionGroupIndex = -1;
var obj6065_onTap_runningActionsCount = 0;
var obj6065_onTap_loopCount = 0;
var obj6091_onTap_activeActionGroupIndex = -1;
var obj6091_onTap_runningActionsCount = 0;
var obj6091_onTap_loopCount = 0;
var obj6104_onTap_activeActionGroupIndex = -1;
var obj6104_onTap_runningActionsCount = 0;
var obj6104_onTap_loopCount = 0;
var obj6078_onTap_activeActionGroupIndex = -1;
var obj6078_onTap_runningActionsCount = 0;
var obj6078_onTap_loopCount = 0;
var obj6316_onTap_activeActionGroupIndex = -1;
var obj6316_onTap_runningActionsCount = 0;
var obj6316_onTap_loopCount = 0;
var obj6495_onTap_activeActionGroupIndex = -1;
var obj6495_onTap_runningActionsCount = 0;
var obj6495_onTap_loopCount = 0;
var obj6480_onTap_activeActionGroupIndex = -1;
var obj6480_onTap_runningActionsCount = 0;
var obj6480_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj6039_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6039_onTap_activeActionGroupIndex = -1;
		$("#obj6039").trigger("obj6039_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6039) {
				console.warn("de-queueing event obj6039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6039_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj6033 
scale_6041();
function scale_6041() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6033";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6033';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6041_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6041_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6041_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6041_completed() {
	setTimeout(function() {
		window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj5835 
scale_6042();
function scale_6042() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5835";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5835';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6042_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6042_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6042_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6042_completed() {
	setTimeout(function() {
		window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj6229 
playAudio_6048();
function playAudio_6048() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6229")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
	}
}

//	action: stopMovie 
//	target: obj6534 
stopAudio_6532();
function stopAudio_6532() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6534")[0];
	myAudio.pause();
	window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6228 
stopAudio_6236();
function stopAudio_6236() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6228")[0];
	myAudio.pause();
	window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6227 
stopAudio_6237();
function stopAudio_6237() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6227")[0];
	myAudio.pause();
	window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6517 
stopAudio_6522();
function stopAudio_6522() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6517")[0];
	myAudio.pause();
	window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6226 
stopAudio_6238();
function stopAudio_6238() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6226")[0];
	myAudio.pause();
	window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6225 
stopAudio_6239();
function stopAudio_6239() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6225")[0];
	myAudio.pause();
	window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6224 
stopAudio_6240();
function stopAudio_6240() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6224")[0];
	myAudio.pause();
	window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup1();
}
}








};
obj6039_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6039_onTap_activeActionGroupIndex = -1;
		$("#obj6039").trigger("obj6039_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6039) {
				console.warn("de-queueing event obj6039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6039_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj5835 
scale_6049();
function scale_6049() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5835";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5835';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6049_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6049_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6049_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6049_completed() {
	setTimeout(function() {
		window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj6033 
scale_6050();
function scale_6050() {
	window.obj6039_onTap_runningActionsCount = obj6039_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6033";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6033';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6050_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6050_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6050_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6050_completed() {
	setTimeout(function() {
		window.obj6039_onTap_runningActionsCount = window.obj6039_onTap_runningActionsCount - 1;
if (window.obj6039_onTap_runningActionsCount < 0) {
	window.obj6039_onTap_runningActionsCount = 0;
} else if (window.obj6039_onTap_runningActionsCount == 0) {
	obj6039_onTap_actionGroup2();
}
	}, 1);
}












};
obj6039_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6039_onTap_activeActionGroupIndex = -1;
		$("#obj6039").trigger("obj6039_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6039) {
				console.warn("de-queueing event obj6039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6039_onTap_activeActionGroupIndex = 2;
	





















};
obj6052_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6052_onTap_activeActionGroupIndex = -1;
		$("#obj6052").trigger("obj6052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6052) {
				console.warn("de-queueing event obj6052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6052_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj6029 
scale_6154();
function scale_6154() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6029";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6029';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6154_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6154_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6154_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6154_completed() {
	setTimeout(function() {
		window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj5827 
scale_6155();
function scale_6155() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5827";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5827';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6155_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6155_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6155_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6155_completed() {
	setTimeout(function() {
		window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj6225 
playAudio_6163();
function playAudio_6163() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6225")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
	}
}

//	action: stopMovie 
//	target: obj6517 
stopAudio_6521();
function stopAudio_6521() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6517")[0];
	myAudio.pause();
	window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6534 
stopAudio_6533();
function stopAudio_6533() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6534")[0];
	myAudio.pause();
	window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6229 
stopAudio_6199();
function stopAudio_6199() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6229")[0];
	myAudio.pause();
	window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6228 
stopAudio_6200();
function stopAudio_6200() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6228")[0];
	myAudio.pause();
	window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6227 
stopAudio_6201();
function stopAudio_6201() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6227")[0];
	myAudio.pause();
	window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6226 
stopAudio_6202();
function stopAudio_6202() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6226")[0];
	myAudio.pause();
	window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6224 
stopAudio_6204();
function stopAudio_6204() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6224")[0];
	myAudio.pause();
	window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup1();
}
}








};
obj6052_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6052_onTap_activeActionGroupIndex = -1;
		$("#obj6052").trigger("obj6052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6052) {
				console.warn("de-queueing event obj6052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6052_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj6029 
scale_6156();
function scale_6156() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6029";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6029';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6156_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6156_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6156_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6156_completed() {
	setTimeout(function() {
		window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj5827 
scale_6157();
function scale_6157() {
	window.obj6052_onTap_runningActionsCount = obj6052_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5827";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5827';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6157_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6157_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6157_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6157_completed() {
	setTimeout(function() {
		window.obj6052_onTap_runningActionsCount = window.obj6052_onTap_runningActionsCount - 1;
if (window.obj6052_onTap_runningActionsCount < 0) {
	window.obj6052_onTap_runningActionsCount = 0;
} else if (window.obj6052_onTap_runningActionsCount == 0) {
	obj6052_onTap_actionGroup2();
}
	}, 1);
}












};
obj6052_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6052_onTap_activeActionGroupIndex = -1;
		$("#obj6052").trigger("obj6052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6052) {
				console.warn("de-queueing event obj6052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6052_onTap_activeActionGroupIndex = 2;
	





















};
obj6065_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6065_onTap_activeActionGroupIndex = -1;
		$("#obj6065").trigger("obj6065_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6065) {
				console.warn("de-queueing event obj6065." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6065").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6065_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj6030 
scale_6164();
function scale_6164() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6030";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6030';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6164_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6164_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6164_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6164_completed() {
	setTimeout(function() {
		window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj5837 
scale_6165();
function scale_6165() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5837";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5837';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6165_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6165_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6165_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6165_completed() {
	setTimeout(function() {
		window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj6227 
playAudio_6171();
function playAudio_6171() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6227")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
	}
}

//	action: stopMovie 
//	target: obj6229 
stopAudio_6247();
function stopAudio_6247() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6229")[0];
	myAudio.pause();
	window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6517 
stopAudio_6524();
function stopAudio_6524() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6517")[0];
	myAudio.pause();
	window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6534 
stopAudio_6530();
function stopAudio_6530() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6534")[0];
	myAudio.pause();
	window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6228 
stopAudio_6248();
function stopAudio_6248() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6228")[0];
	myAudio.pause();
	window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6226 
stopAudio_6250();
function stopAudio_6250() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6226")[0];
	myAudio.pause();
	window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6225 
stopAudio_6251();
function stopAudio_6251() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6225")[0];
	myAudio.pause();
	window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6224 
stopAudio_6252();
function stopAudio_6252() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6224")[0];
	myAudio.pause();
	window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup1();
}
}








};
obj6065_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6065_onTap_activeActionGroupIndex = -1;
		$("#obj6065").trigger("obj6065_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6065) {
				console.warn("de-queueing event obj6065." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6065").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6065_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj6030 
scale_6172();
function scale_6172() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6030";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6030';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6172_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6172_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6172_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6172_completed() {
	setTimeout(function() {
		window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj5837 
scale_6173();
function scale_6173() {
	window.obj6065_onTap_runningActionsCount = obj6065_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5837";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5837';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6173_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6173_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6173_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6173_completed() {
	setTimeout(function() {
		window.obj6065_onTap_runningActionsCount = window.obj6065_onTap_runningActionsCount - 1;
if (window.obj6065_onTap_runningActionsCount < 0) {
	window.obj6065_onTap_runningActionsCount = 0;
} else if (window.obj6065_onTap_runningActionsCount == 0) {
	obj6065_onTap_actionGroup2();
}
	}, 1);
}












};
obj6065_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6065_onTap_activeActionGroupIndex = -1;
		$("#obj6065").trigger("obj6065_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6065) {
				console.warn("de-queueing event obj6065." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6065").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6065_onTap_activeActionGroupIndex = 2;
	





















};
obj6091_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6091_onTap_activeActionGroupIndex = -1;
		$("#obj6091").trigger("obj6091_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6091) {
				console.warn("de-queueing event obj6091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6091_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj6031 
scale_6093();
function scale_6093() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6031";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6031';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6093_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6093_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6093_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6093_completed() {
	setTimeout(function() {
		window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj5957 
scale_6094();
function scale_6094() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5957";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5957';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6094_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6094_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6094_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6094_completed() {
	setTimeout(function() {
		window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj6224 
playAudio_6100();
function playAudio_6100() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6224")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
	}
}

//	action: stopMovie 
//	target: obj6229 
stopAudio_6259();
function stopAudio_6259() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6229")[0];
	myAudio.pause();
	window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6228 
stopAudio_6260();
function stopAudio_6260() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6228")[0];
	myAudio.pause();
	window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6227 
stopAudio_6261();
function stopAudio_6261() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6227")[0];
	myAudio.pause();
	window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6517 
stopAudio_6525();
function stopAudio_6525() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6517")[0];
	myAudio.pause();
	window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6534 
stopAudio_6528();
function stopAudio_6528() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6534")[0];
	myAudio.pause();
	window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6226 
stopAudio_6262();
function stopAudio_6262() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6226")[0];
	myAudio.pause();
	window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6225 
stopAudio_6263();
function stopAudio_6263() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6225")[0];
	myAudio.pause();
	window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup1();
}
}








};
obj6091_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6091_onTap_activeActionGroupIndex = -1;
		$("#obj6091").trigger("obj6091_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6091) {
				console.warn("de-queueing event obj6091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6091_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj6031 
scale_6101();
function scale_6101() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6031";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6031';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6101_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6101_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6101_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6101_completed() {
	setTimeout(function() {
		window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj5957 
scale_6102();
function scale_6102() {
	window.obj6091_onTap_runningActionsCount = obj6091_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5957";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5957';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6102_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6102_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6102_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6102_completed() {
	setTimeout(function() {
		window.obj6091_onTap_runningActionsCount = window.obj6091_onTap_runningActionsCount - 1;
if (window.obj6091_onTap_runningActionsCount < 0) {
	window.obj6091_onTap_runningActionsCount = 0;
} else if (window.obj6091_onTap_runningActionsCount == 0) {
	obj6091_onTap_actionGroup2();
}
	}, 1);
}












};
obj6091_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6091_onTap_activeActionGroupIndex = -1;
		$("#obj6091").trigger("obj6091_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6091) {
				console.warn("de-queueing event obj6091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6091_onTap_activeActionGroupIndex = 2;
	





















};
obj6104_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6104_onTap_activeActionGroupIndex = -1;
		$("#obj6104").trigger("obj6104_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6104) {
				console.warn("de-queueing event obj6104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6104_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj6218 
scale_6106();
function scale_6106() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6218";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6218';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6106_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6106_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6106_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6106_completed() {
	setTimeout(function() {
		window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj5954 
scale_6107();
function scale_6107() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5954";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5954';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6107_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6107_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6107_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6107_completed() {
	setTimeout(function() {
		window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj6415 
playAudio_6113();
function playAudio_6113() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6415")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
	}
}

//	action: stopMovie 
//	target: obj6229 
stopAudio_6253();
function stopAudio_6253() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6229")[0];
	myAudio.pause();
	window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6227 
stopAudio_6255();
function stopAudio_6255() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6227")[0];
	myAudio.pause();
	window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6226 
stopAudio_6256();
function stopAudio_6256() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6226")[0];
	myAudio.pause();
	window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6225 
stopAudio_6257();
function stopAudio_6257() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6225")[0];
	myAudio.pause();
	window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6534 
stopAudio_6529();
function stopAudio_6529() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6534")[0];
	myAudio.pause();
	window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6224 
stopAudio_6258();
function stopAudio_6258() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6224")[0];
	myAudio.pause();
	window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6517 
stopAudio_6519();
function stopAudio_6519() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6517")[0];
	myAudio.pause();
	window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup1();
}
}








};
obj6104_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6104_onTap_activeActionGroupIndex = -1;
		$("#obj6104").trigger("obj6104_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6104) {
				console.warn("de-queueing event obj6104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6104_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj6218 
scale_6114();
function scale_6114() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6218";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6218';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6114_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6114_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6114_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6114_completed() {
	setTimeout(function() {
		window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj5954 
scale_6115();
function scale_6115() {
	window.obj6104_onTap_runningActionsCount = obj6104_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5954";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5954';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6115_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6115_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6115_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6115_completed() {
	setTimeout(function() {
		window.obj6104_onTap_runningActionsCount = window.obj6104_onTap_runningActionsCount - 1;
if (window.obj6104_onTap_runningActionsCount < 0) {
	window.obj6104_onTap_runningActionsCount = 0;
} else if (window.obj6104_onTap_runningActionsCount == 0) {
	obj6104_onTap_actionGroup2();
}
	}, 1);
}












};
obj6104_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6104_onTap_activeActionGroupIndex = -1;
		$("#obj6104").trigger("obj6104_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6104) {
				console.warn("de-queueing event obj6104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6104_onTap_activeActionGroupIndex = 2;
	





















};
obj6078_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6078_onTap_activeActionGroupIndex = -1;
		$("#obj6078").trigger("obj6078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6078) {
				console.warn("de-queueing event obj6078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6078_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj5831 
scale_6080();
function scale_6080() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5831";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5831';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6080_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6080_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6080_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6080_completed() {
	setTimeout(function() {
		window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj6032 
scale_6081();
function scale_6081() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6032";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6032';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6081_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6081_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6081_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6081_completed() {
	setTimeout(function() {
		window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj6226 
playAudio_6087();
function playAudio_6087() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6226")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
	}
}

//	action: stopMovie 
//	target: obj6229 
stopAudio_6241();
function stopAudio_6241() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6229")[0];
	myAudio.pause();
	window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6534 
stopAudio_6531();
function stopAudio_6531() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6534")[0];
	myAudio.pause();
	window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6228 
stopAudio_6242();
function stopAudio_6242() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6228")[0];
	myAudio.pause();
	window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6227 
stopAudio_6243();
function stopAudio_6243() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6227")[0];
	myAudio.pause();
	window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6225 
stopAudio_6245();
function stopAudio_6245() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6225")[0];
	myAudio.pause();
	window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6517 
stopAudio_6523();
function stopAudio_6523() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6517")[0];
	myAudio.pause();
	window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6224 
stopAudio_6246();
function stopAudio_6246() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6224")[0];
	myAudio.pause();
	window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup1();
}
}








};
obj6078_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6078_onTap_activeActionGroupIndex = -1;
		$("#obj6078").trigger("obj6078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6078) {
				console.warn("de-queueing event obj6078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6078_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj6032 
scale_6088();
function scale_6088() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6032";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6032';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6088_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6088_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6088_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6088_completed() {
	setTimeout(function() {
		window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj5831 
scale_6089();
function scale_6089() {
	window.obj6078_onTap_runningActionsCount = obj6078_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj5831";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5831';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6089_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6089_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6089_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6089_completed() {
	setTimeout(function() {
		window.obj6078_onTap_runningActionsCount = window.obj6078_onTap_runningActionsCount - 1;
if (window.obj6078_onTap_runningActionsCount < 0) {
	window.obj6078_onTap_runningActionsCount = 0;
} else if (window.obj6078_onTap_runningActionsCount == 0) {
	obj6078_onTap_actionGroup2();
}
	}, 1);
}












};
obj6078_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6078_onTap_activeActionGroupIndex = -1;
		$("#obj6078").trigger("obj6078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6078) {
				console.warn("de-queueing event obj6078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6078_onTap_activeActionGroupIndex = 2;
	





















};
obj6316_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6316_onTap_activeActionGroupIndex = -1;
		$("#obj6316").trigger("obj6316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6316) {
				console.warn("de-queueing event obj6316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6316_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj6229 
stopAudio_6337();
function stopAudio_6337() {
	window.obj6316_onTap_runningActionsCount = obj6316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6229")[0];
	myAudio.pause();
	window.obj6316_onTap_runningActionsCount = window.obj6316_onTap_runningActionsCount - 1;
if (window.obj6316_onTap_runningActionsCount < 0) {
	window.obj6316_onTap_runningActionsCount = 0;
} else if (window.obj6316_onTap_runningActionsCount == 0) {
	obj6316_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6228 
stopAudio_6339();
function stopAudio_6339() {
	window.obj6316_onTap_runningActionsCount = obj6316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6228")[0];
	myAudio.pause();
	window.obj6316_onTap_runningActionsCount = window.obj6316_onTap_runningActionsCount - 1;
if (window.obj6316_onTap_runningActionsCount < 0) {
	window.obj6316_onTap_runningActionsCount = 0;
} else if (window.obj6316_onTap_runningActionsCount == 0) {
	obj6316_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6227 
stopAudio_6340();
function stopAudio_6340() {
	window.obj6316_onTap_runningActionsCount = obj6316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6227")[0];
	myAudio.pause();
	window.obj6316_onTap_runningActionsCount = window.obj6316_onTap_runningActionsCount - 1;
if (window.obj6316_onTap_runningActionsCount < 0) {
	window.obj6316_onTap_runningActionsCount = 0;
} else if (window.obj6316_onTap_runningActionsCount == 0) {
	obj6316_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6225 
stopAudio_6342();
function stopAudio_6342() {
	window.obj6316_onTap_runningActionsCount = obj6316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6225")[0];
	myAudio.pause();
	window.obj6316_onTap_runningActionsCount = window.obj6316_onTap_runningActionsCount - 1;
if (window.obj6316_onTap_runningActionsCount < 0) {
	window.obj6316_onTap_runningActionsCount = 0;
} else if (window.obj6316_onTap_runningActionsCount == 0) {
	obj6316_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6224 
stopAudio_6343();
function stopAudio_6343() {
	window.obj6316_onTap_runningActionsCount = obj6316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6224")[0];
	myAudio.pause();
	window.obj6316_onTap_runningActionsCount = window.obj6316_onTap_runningActionsCount - 1;
if (window.obj6316_onTap_runningActionsCount < 0) {
	window.obj6316_onTap_runningActionsCount = 0;
} else if (window.obj6316_onTap_runningActionsCount == 0) {
	obj6316_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6517 
stopAudio_6543();
function stopAudio_6543() {
	window.obj6316_onTap_runningActionsCount = obj6316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6517")[0];
	myAudio.pause();
	window.obj6316_onTap_runningActionsCount = window.obj6316_onTap_runningActionsCount - 1;
if (window.obj6316_onTap_runningActionsCount < 0) {
	window.obj6316_onTap_runningActionsCount = 0;
} else if (window.obj6316_onTap_runningActionsCount == 0) {
	obj6316_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6514 
stopAudio_6544();
function stopAudio_6544() {
	window.obj6316_onTap_runningActionsCount = obj6316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6514")[0];
	myAudio.pause();
	window.obj6316_onTap_runningActionsCount = window.obj6316_onTap_runningActionsCount - 1;
if (window.obj6316_onTap_runningActionsCount < 0) {
	window.obj6316_onTap_runningActionsCount = 0;
} else if (window.obj6316_onTap_runningActionsCount == 0) {
	obj6316_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6415 
stopAudio_6545();
function stopAudio_6545() {
	window.obj6316_onTap_runningActionsCount = obj6316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6415")[0];
	myAudio.pause();
	window.obj6316_onTap_runningActionsCount = window.obj6316_onTap_runningActionsCount - 1;
if (window.obj6316_onTap_runningActionsCount < 0) {
	window.obj6316_onTap_runningActionsCount = 0;
} else if (window.obj6316_onTap_runningActionsCount == 0) {
	obj6316_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6226 
stopAudio_6341();
function stopAudio_6341() {
	window.obj6316_onTap_runningActionsCount = obj6316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6226")[0];
	myAudio.pause();
	window.obj6316_onTap_runningActionsCount = window.obj6316_onTap_runningActionsCount - 1;
if (window.obj6316_onTap_runningActionsCount < 0) {
	window.obj6316_onTap_runningActionsCount = 0;
} else if (window.obj6316_onTap_runningActionsCount == 0) {
	obj6316_onTap_actionGroup1();
}
}








};
obj6316_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6316_onTap_activeActionGroupIndex = -1;
		$("#obj6316").trigger("obj6316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6316) {
				console.warn("de-queueing event obj6316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6316_onTap_activeActionGroupIndex = 1;
	





















};
obj6495_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6495_onTap_activeActionGroupIndex = -1;
		$("#obj6495").trigger("obj6495_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6495) {
				console.warn("de-queueing event obj6495." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6495").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6495_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj6508 
scale_6497();
function scale_6497() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6508";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6508';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6497_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6497_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6497_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6497_completed() {
	setTimeout(function() {
		window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj6510 
scale_6498();
function scale_6498() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6510";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6510';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6498_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6498_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6498_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6498_completed() {
	setTimeout(function() {
		window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj6514 
playAudio_6504();
function playAudio_6504() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6514")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
	}
}

//	action: stopMovie 
//	target: obj6229 
stopAudio_6499();
function stopAudio_6499() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6229")[0];
	myAudio.pause();
	window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6517 
stopAudio_6526();
function stopAudio_6526() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6517")[0];
	myAudio.pause();
	window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6228 
stopAudio_6500();
function stopAudio_6500() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6228")[0];
	myAudio.pause();
	window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6227 
stopAudio_6501();
function stopAudio_6501() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6227")[0];
	myAudio.pause();
	window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6226 
stopAudio_6502();
function stopAudio_6502() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6226")[0];
	myAudio.pause();
	window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6225 
stopAudio_6503();
function stopAudio_6503() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6225")[0];
	myAudio.pause();
	window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup1();
}
}








};
obj6495_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6495_onTap_activeActionGroupIndex = -1;
		$("#obj6495").trigger("obj6495_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6495) {
				console.warn("de-queueing event obj6495." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6495").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6495_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj6508 
scale_6505();
function scale_6505() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6508";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6508';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6505_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6505_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6505_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6505_completed() {
	setTimeout(function() {
		window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj6510 
scale_6506();
function scale_6506() {
	window.obj6495_onTap_runningActionsCount = obj6495_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6510";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6510';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6506_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6506_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6506_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6506_completed() {
	setTimeout(function() {
		window.obj6495_onTap_runningActionsCount = window.obj6495_onTap_runningActionsCount - 1;
if (window.obj6495_onTap_runningActionsCount < 0) {
	window.obj6495_onTap_runningActionsCount = 0;
} else if (window.obj6495_onTap_runningActionsCount == 0) {
	obj6495_onTap_actionGroup2();
}
	}, 1);
}












};
obj6495_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6495_onTap_activeActionGroupIndex = -1;
		$("#obj6495").trigger("obj6495_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6495) {
				console.warn("de-queueing event obj6495." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6495").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6495_onTap_activeActionGroupIndex = 2;
	





















};
obj6480_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6480_onTap_activeActionGroupIndex = -1;
		$("#obj6480").trigger("obj6480_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6480) {
				console.warn("de-queueing event obj6480." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6480").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6480_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj6493 
scale_6482();
function scale_6482() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6493";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6493';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6482_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6482_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6482_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6482_completed() {
	setTimeout(function() {
		window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj6512 
scale_6483();
function scale_6483() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6512";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6512';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6483_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6483_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6483_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6483_completed() {
	setTimeout(function() {
		window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj6517 
playAudio_6489();
function playAudio_6489() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6517")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
	}
}

//	action: stopMovie 
//	target: obj6229 
stopAudio_6484();
function stopAudio_6484() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6229")[0];
	myAudio.pause();
	window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6227 
stopAudio_6485();
function stopAudio_6485() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6227")[0];
	myAudio.pause();
	window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6226 
stopAudio_6486();
function stopAudio_6486() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6226")[0];
	myAudio.pause();
	window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6225 
stopAudio_6487();
function stopAudio_6487() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6225")[0];
	myAudio.pause();
	window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6534 
stopAudio_6527();
function stopAudio_6527() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6534")[0];
	myAudio.pause();
	window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
}
//	action: stopMovie 
//	target: obj6224 
stopAudio_6488();
function stopAudio_6488() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6224")[0];
	myAudio.pause();
	window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup1();
}
}








};
obj6480_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6480_onTap_activeActionGroupIndex = -1;
		$("#obj6480").trigger("obj6480_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6480) {
				console.warn("de-queueing event obj6480." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6480").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6480_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj6493 
scale_6490();
function scale_6490() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6493";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6493';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6490_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6490_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6490_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6490_completed() {
	setTimeout(function() {
		window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj6512 
scale_6491();
function scale_6491() {
	window.obj6480_onTap_runningActionsCount = obj6480_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj6512";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj6512';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_6491_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6491_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_6491_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_6491_completed() {
	setTimeout(function() {
		window.obj6480_onTap_runningActionsCount = window.obj6480_onTap_runningActionsCount - 1;
if (window.obj6480_onTap_runningActionsCount < 0) {
	window.obj6480_onTap_runningActionsCount = 0;
} else if (window.obj6480_onTap_runningActionsCount == 0) {
	obj6480_onTap_actionGroup2();
}
	}, 1);
}












};
obj6480_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6480_onTap_activeActionGroupIndex = -1;
		$("#obj6480").trigger("obj6480_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6480) {
				console.warn("de-queueing event obj6480." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6480").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6480_onTap_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





































































































































/*
 *
 *   obj6039: Event Touch Down
 *
 */
$("#obj6039").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6039_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6039_onTap is still running");
	return;
}
var obj6039_onTap_runningActionsCount = 0;
var obj6039_onTap_loopCount = 0;
obj6039_onTap_actionGroup0();
});










/*
 *
 *   obj6052: Event Touch Down
 *
 */
$("#obj6052").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6052_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6052_onTap is still running");
	return;
}
var obj6052_onTap_runningActionsCount = 0;
var obj6052_onTap_loopCount = 0;
obj6052_onTap_actionGroup0();
});










/*
 *
 *   obj6065: Event Touch Down
 *
 */
$("#obj6065").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6065_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6065_onTap is still running");
	return;
}
var obj6065_onTap_runningActionsCount = 0;
var obj6065_onTap_loopCount = 0;
obj6065_onTap_actionGroup0();
});










/*
 *
 *   obj6091: Event Touch Down
 *
 */
$("#obj6091").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6091_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6091_onTap is still running");
	return;
}
var obj6091_onTap_runningActionsCount = 0;
var obj6091_onTap_loopCount = 0;
obj6091_onTap_actionGroup0();
});




















/*
 *
 *   obj6104: Event Touch Down
 *
 */
$("#obj6104").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6104_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6104_onTap is still running");
	return;
}
var obj6104_onTap_runningActionsCount = 0;
var obj6104_onTap_loopCount = 0;
obj6104_onTap_actionGroup0();
});






































































/*
 *
 *   obj6078: Event Touch Down
 *
 */
$("#obj6078").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6078_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6078_onTap is still running");
	return;
}
var obj6078_onTap_runningActionsCount = 0;
var obj6078_onTap_loopCount = 0;
obj6078_onTap_actionGroup0();
});










/*
 *
 *   obj6316: Event Touch Down
 *
 */
$("#obj6316").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6316_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6316_onTap is still running");
	return;
}
var obj6316_onTap_runningActionsCount = 0;
var obj6316_onTap_loopCount = 0;
obj6316_onTap_actionGroup0();
});




























































/*
 *
 *   obj6495: Event Touch Down
 *
 */
$("#obj6495").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6495_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6495_onTap is still running");
	return;
}
var obj6495_onTap_runningActionsCount = 0;
var obj6495_onTap_loopCount = 0;
obj6495_onTap_actionGroup0();
});




















/*
 *
 *   obj6480: Event Touch Down
 *
 */
$("#obj6480").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6480_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6480_onTap is still running");
	return;
}
var obj6480_onTap_runningActionsCount = 0;
var obj6480_onTap_loopCount = 0;
obj6480_onTap_actionGroup0();
});















































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj5814").trigger('SCEventShow');
$("#obj5947").trigger('SCEventShow');
$("#obj5827").trigger('SCEventShow');
$("#obj5831").trigger('SCEventShow');
$("#obj5835").trigger('SCEventShow');
$("#obj5837").trigger('SCEventShow');
$("#obj5954").trigger('SCEventShow');
$("#obj5957").trigger('SCEventShow');
$("#obj6029").trigger('SCEventShow');
$("#obj6030").trigger('SCEventShow');
$("#obj6031").trigger('SCEventShow');
$("#obj6032").trigger('SCEventShow');
$("#obj6033").trigger('SCEventShow');
$("#obj6039").trigger('SCEventShow');
$("#obj6052").trigger('SCEventShow');
$("#obj6065").trigger('SCEventShow');
$("#obj6091").trigger('SCEventShow');
$("#obj6218").trigger('SCEventShow');
$("#obj6104").trigger('SCEventShow');
$("#obj6224").trigger('SCEventShow');
$("#obj6225").trigger('SCEventShow');
$("#obj6226").trigger('SCEventShow');
$("#obj6227").trigger('SCEventShow');
$("#obj6228").trigger('SCEventShow');
$("#obj6229").trigger('SCEventShow');
$("#obj6078").trigger('SCEventShow');
$("#obj6316").trigger('SCEventShow');
$("#obj6415").trigger('SCEventShow');
$("#obj6477").trigger('SCEventShow');
$("#obj6512").trigger('SCEventShow');
$("#obj6510").trigger('SCEventShow');
$("#obj6508").trigger('SCEventShow');
$("#obj6495").trigger('SCEventShow');
$("#obj6493").trigger('SCEventShow');
$("#obj6480").trigger('SCEventShow');
$("#obj6514").trigger('SCEventShow');
$("#obj6516").trigger('SCEventShow');
$("#obj6517").trigger('SCEventShow');
$("#obj6534").trigger('SCEventShow');
	
});