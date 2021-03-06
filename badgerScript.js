
var badge={};
var border={};
var band={};
var division={};
var symbol={};
var pattern=false;

// var mid=250;
var shape='square';
var element='badge';
var currentDialog='shapeDialog';


var sw=screen.width;
var sh=screen.height;
// var sw=window.innerWidth; // screen.width;
// var sh=window.innerHeight; // screen.height;

badge.col='white';
border.col='black';

console.log("screen size "+sw+"x"+sh);
if(sw>sh) { // horizontal layout
	var dialogs = document.getElementsByClassName("dialog");
  	for (var i = 0; i < dialogs.length; i++) {
    		dialogs[i].style.width='300px';
	}
	id('graphic').style.left='300px';
	badge.size=sw-300;
	if(badge.size>sh) badge.size=sh;
	report("horizontal layout");
}
else { // vertical layout
	// place graphics above dialogs
	// badge.size=sh-300;
	// if(sw<badge.size) 
	badge.size=sw;
	// var t=badge.size;
	report("badge size: "+badge.size);
	id("header").style.top=badge.size+"px";
	var dialogs = document.getElementsByClassName("dialog");
  	for (var i = 0; i < dialogs.length; i++) {
    		dialogs[i].style.top=(badge.size+25)+'px';
	}
	// id('graphic').style.top='300px';
	report("vertical layout");
}
report("size graphic area to "+badge.size);
id('graphic').style.width=badge.size+'px';
id('graphic').style.height=badge.size+'px';
// mid=badge.size/2;
id('badgeSVG').style.width=badge.size+'px';
id('badgeSVG').style.height=badge.size+'px';
// badge.size-=20;
// report("size: "+badge.size+"; mid: "+mid);
// id('badgeSVG').style.top='5px';

// offset graphics origin to centre
document.getElementById('badgeSVG').setAttribute('viewBox',(-badge.size/2)+' '+(-badge.size/2)+' '+badge.size+' '+badge.size);

badge.size-=20;
report("size: "+badge.size);
id('badgeSVG').style.top='5px';

id('squareButton').addEventListener('click', function() {
	badge.shape='square';
	var el="<rect id='badge' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='"+badge.col+"'/>";
	id('badgeSVG').innerHTML+=el;
	el="<clipPath id='badgeClip'><rect id='badgeClipSquare' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"'/></clipPath>";
	id('badgeSVG').innerHTML+=el;
	show('colour');
});

id('lozengeButton').addEventListener('click', function() {
	badge.shape='lozenge';
	var el="<rect id='badge' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' rx='"+(badge.size/5)+"' ry='"+(badge.size/5)+"' width='"+badge.size+"' height='"+badge.size+"' fill='"+badge.col+"'/>";
	id('badgeSVG').innerHTML+=el;
	el="<clipPath id='badgeClip'><rect id='badgeClipLozenge' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' rx='"+(badge.size/5)+"' ry='"+(badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"'/></clipPath>";
	id('badgeSVG').innerHTML+=el;
	show('colour');
});

id('circleButton').addEventListener('click', function() {
	badge.shape='circle';
	var el="<circle id='badge' cx='0' cy='0' r='"+badge.size/2+"' fill='"+badge.col+"'/>";
	id('badgeSVG').innerHTML+=el;
	el="<clipPath id='badgeClip'><circle id='badgeClipCircle' cx='0' cy='0' r='"+badge.size/2+"'/></clipPath>";
	id('badgeSVG').innerHTML+=el;
	show('colour');
});

id('diamondButton').addEventListener('click', function() {
	badge.shape='diamond';
	var el="<path id='badge' d='M"+(-badge.size/2)+" 0 L0"+(-badge.size/2)+" L"+(badge.size/2)+" 0 L0 "+(badge.size/2)+" Z' transform='scale(1)' fill='"+badge.col+"'/>";
	id('badgeSVG').innerHTML+=el;
	el="<clipPath id='badgeClip'><path id='badgeClipDiamond' d='M"+(-badge.size/2)+" 0 L0 "+(-badge.size/2)+" L"+(badge.size/2)+" 0 L0 "+(badge.size/2)+" Z' transform='scale(1)'/></clipPath>";
	id('badgeSVG').innerHTML+=el;
	show('colour');
});

id('shieldButton').addEventListener('click', function() {
	badge.shape='shield';
	var el="<path id='badge' d='M"+(-badge.size/2)+" 0 L"+(-badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" 0 A"+(badge.size/2)+" "+(badge.size/2)+" 0 1 1 "+(-badge.size/2)+" 0' fill='"+badge.col+"' transform='scale(1)' />";
	id('badgeSVG').innerHTML+=el;
	el="<clipPath id='badgeClip'><path id='badgeClipShield' d='M"+(-badge.size/2)+" 0 L"+(-badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" 0 A"+(badge.size/2)+" "+(badge.size/2)+" 0 1 1 "+(-badge.size/2)+" 0' transform='scale(1)'></clipPath>";
	id('badgeSVG').innerHTML+=el;
	show('colour');
});

// add other shapes

id('redButton').addEventListener('click', function() {
	setColour('red');
});

id('orangeButton').addEventListener('click', function() {
	setColour('orange');
});

id('yellowButton').addEventListener('click', function() {
	setColour('yellow');
});

id('limeButton').addEventListener('click', function() {
	setColour('lime');
});

id('greenButton').addEventListener('click', function() {
	setColour('green');
});

id('blueButton').addEventListener('click', function() {
	setColour('blue');
});

id('purpleButton').addEventListener('click', function() {
	setColour('purple');
});

id('whiteButton').addEventListener('click', function() {
	setColour('white');
});

id('grayButton').addEventListener('click', function() {
	setColour('gray');
});

id('blackButton').addEventListener('click', function() {
	setColour('black');
});

id('noPatternButton').addEventListener('click', function() {
	report("plain - no pattern");
	setPattern(null);
});

id('dotsButton').addEventListener('click', function() {
	report("dots");
	setPattern('dots');
});

id('checksButton').addEventListener('click', function() {
	report("checks");
	setPattern('checks');
});

id('HstripesButton').addEventListener('click', function() {
	report("horizontal stripes");
	setPattern('stripesH');
});

id('VstripesButton').addEventListener('click', function() {
	setPattern('stripesV');
});

id('diamondsButton').addEventListener('click', function() {
	report("diamonds");
	setPattern('diamonds');
});

id('RdiagonalsButton').addEventListener('click', function() {
	report("diagonalsR");
	setPattern('diagonalsR');
});

id('LdiagonalsButton').addEventListener('click', function() {
	report("diagonalsL");
	setPattern('diagonalsL');
});

id('crossesButton').addEventListener('click', function() {
	report("crosses");
	setPattern('crosses');
});

id('starsButton').addEventListener('click', function() {
	report("stars");
	setPattern('stars');
});

id('chevronsButton').addEventListener('click', function() {
	report("chevrons");
	setPattern('chevrons');
});

id('noBorderButton').addEventListener('click', function() {
	report("plain - no border");
	show('division');
});

id('outlineButton').addEventListener('click', function() {
	console.log('OUTLINE');
	var el="";
	border.size=0.95;	
	switch(badge.shape) {		
		case 'square':
			report("square outline");
			el="<rect id='outline' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='none' stroke='"+border.col+"' stroke-width='3'/>";
			badge.size*=border.size;
			id('badge').setAttribute('x',-badge.size/2);
			id('badge').setAttribute('y',-badge.size/2);
			id('badge').setAttribute('width',badge.size);
			id('badge').setAttribute('height',badge.size);
			id('badgeClipSquare').setAttribute('x',-badge.size/2);
			id('badgeClipSquare').setAttribute('y',-badge.size/2);
			id('badgeClipSquare').setAttribute('width',badge.size);
			id('badgeClipSquare').setAttribute('height',badge.size);
			break;
		case 'lozenge':
			report("lozenge outline");
			el="<rect id='outline' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' rx='"+(badge.size/5)+"' ry='"+(badge.size/5)+"' width='"+badge.size+"' height='"+badge.size+"' fill='none' stroke='"+border.col+"' stroke-width='3'/>";
			badge.size*=border.size;
			id('badge').setAttribute('x',-badge.size/2);
			id('badge').setAttribute('y',-badge.size/2);
			id('badge').setAttribute('rx',badge.size/5);
			id('badge').setAttribute('ry',badge.size/5);
			id('badge').setAttribute('width',badge.size);
			id('badge').setAttribute('height',badge.size);
			id('badgeClipLozenge').setAttribute('x',-badge.size/2);
			id('badgeClipLozenge').setAttribute('y',-badge.size/2);
			id('badgeClipLozenge').setAttribute('rx',badge.size/5);
			id('badgeClipLozenge').setAttribute('ry',badge.size/5);
			id('badgeClipLozenge').setAttribute('width',badge.size);
			id('badgeClipLozenge').setAttribute('height',badge.size);
			break;
		case 'circle':
			report("circle outline");
			el="<circle id='outline' cx='0' cy='0' r='"+badge.size/2+"' fill='none' stroke='"+border.col+"' stroke-width='5'/>";
			badge.size*=border.size;
			id('badge').setAttribute('r',badge.size/2);
			id('badgeClipCircle').setAttribute('r',badge.size/2);
			break;
		case 'diamond':
			report("diamond outline");
			el="<path id='outline' d='M"+(-badge.size/2)+" 0 L0"+(-badge.size/2)+" L"+(badge.size/2)+" 0 L0 "+(badge.size/2)+" Z' transform='scale(1)' fill='none' stroke='"+border.col+"' stroke-width='3'/>";
			badge.size*=border.size;
			id('badge').setAttribute('transform','scale('+border.size+')');
			id('badgeClipDiamond').setAttribute('transform','scale('+border.size+')');
			break;
		case 'shield':
			report("shield outline");
			el="<path id='outline' d='M"+(-badge.size/2)+" 0 L"+(-badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" 0 A"+(badge.size/2)+" "+(badge.size/2)+" 0 1 1 "+(-badge.size/2)+" 0' fill='none' stroke='"+border.col+"' stroke-width='3' transform='scale(1)' />";
			badge.size*=border.size;
			id('badge').setAttribute('transform','scale('+border.size+')');
			id('badgeClipShield').setAttribute('transform', 'scale('+border.size+')');
			break;
	}
	id('badgeSVG').innerHTML+=el;
	element='outline';
	show('colour');
});

id('borderButton').addEventListener('click', function() {
	report("broad border");
	border.size=0.714; // 1/7th
	var el="";
	switch(badge.shape) {
		case 'square':
			report("square border");
			el="<mask id='borderMask'>";
			el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='white'/>";
			el+="<rect x='"+(-border.size*badge.size/2)+"' y='"+(-border.size*badge.size/2)+"' width='"+(border.size*badge.size)+"' height='"+(border.size*badge.size)+"' fill='black'/>";
			el+="</mask>";
			el+="<rect id='border' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' mask='url(#borderMask)' fill='"+border.col+"'/>";
			id('badgeSVG').innerHTML+=el;
			badge.size*=border.size;
			id('badge').setAttribute('x',-badge.size/2);
			id('badge').setAttribute('y',-badge.size/2);
			id('badge').setAttribute('width',badge.size);
			id('badge').setAttribute('height',badge.size);
			id('badgeClipSquare').setAttribute('x',-badge.size/2);
			id('badgeClipSquare').setAttribute('y',-badge.size/2);
			id('badgeClipSquare').setAttribute('width',badge.size);
			id('badgeClipSquare').setAttribute('height',badge.size);
			break;
		case 'lozenge':
			report("lozenge border");
			el="<mask id='borderMask'>";
			el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' rx='"+(badge.size/5)+"' ry='"+(badge.size/5)+"' width='"+badge.size+"' height='"+badge.size+"' fill='white'/>";
			el+="<rect x='"+(-border.size*badge.size/2)+"' y='"+(-border.size*badge.size/2)+"' rx='"+(border.size*badge.size/10)+"' ry='"+(border.size*badge.size/10)+"' width='"+(border.size*badge.size)+"' height='"+(border.size*badge.size)+"' fill='black'/>";
			el+="</mask>";
			el+="<rect id='border' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' rx='"+(badge.size/10)+"' ry='"+(badge.size/10)+"' width='"+badge.size+"' height='"+badge.size+"' mask='url(#borderMask)' fill='"+border.col+"'/>";
			id('badgeSVG').innerHTML+=el;
			badge.size*=border.size;
			id('badge').setAttribute('x',-badge.size/2);
			id('badge').setAttribute('y',-badge.size/2);
			id('badge').setAttribute('rx',badge.size/10);
			id('badge').setAttribute('ry',badge.size/10);
			id('badge').setAttribute('width',badge.size);
			id('badge').setAttribute('height',badge.size);
			id('badgeClipLozenge').setAttribute('x',-badge.size/2);
			id('badgeClipLozenge').setAttribute('y',-badge.size/2);
			id('badgeClipLozenge').setAttribute('rx',badge.size/10);
			id('badgeClipLozenge').setAttribute('ry',badge.size/10);
			id('badgeClipLozenge').setAttribute('width',badge.size);
			id('badgeClipLozenge').setAttribute('height',badge.size);
			break;
		case 'circle':
			report("circle border");
			el="<mask id='borderMask'>";
			el+="<circle cx='0' cy='0' r='"+badge.size/2+"' fill='white'/>";
			el+="<circle cx='0' cy='0' r='"+(badge.size*border.size/2)+"' fill='black'/>";
			el+="</mask>";
			el+="<circle id='border' cx='0' cy='0' r='"+badge.size/2+"' mask='url(#borderMask)'/>";
			id('badgeSVG').innerHTML+=el;
			badge.size*=border.size;
			id('badge').setAttribute('r',badge.size/2);
			id('badgeClipCircle').setAttribute('r',badge.size/2);
			break;
		case 'diamond':
			report("diamond border");
			el="<mask id='borderMask'>";
			var b=badge.size;
			el+="<path d='M"+(-b/2)+" 0 L0 "+(-b/2)+" L"+(b/2)+" 0 L0 "+(b/2)+" Z' fill='white'/>";
			b*=border.size;
			el+="<path d='M"+(-b/2)+" 0 L0 "+(-b/2)+" L"+(b/2)+" 0 L0 "+(b/2)+" Z' fill='black'/>";
			el+="</mask>";
			el+="<rect id='border' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"'  mask='url(#borderMask)' fill='"+border.col+"'/>";
			id('badgeSVG').innerHTML+=el;
			b=badge.size-b;
			badge.size*=border.size;
			id('badge').setAttribute('transform','scale('+border.size+')');
			id('badgeClipDiamond').setAttribute('transform','scale('+border.size+')');
			break;
		case 'shield':
			report("shield border");
			el="<mask id='borderMask'>";
			var b=badge.size;
			el+="<path d='M"+(-b/2)+" 0 L"+(-b/2)+" "+(-b/2)+" L"+(b/2)+" "+(-b/2)+" L"+(b/2)+" 0 A"+(b/2)+" "+(b/2)+" 0 1 1 "+(-b/2)+" 0' fill='white'/>";
			b*=border.size;
			el+="<path d='M"+(-b/2)+" 0 L"+(-b/2)+" "+(-b/2)+" L"+(b/2)+" "+(-b/2)+" L"+(b/2)+" 0 A"+(b/2)+" "+(b/2)+" 0 1 1 "+(-b/2)+" 0' fill='black'/>";
			el+="</mask>";
			el+="<rect id='border' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"'  mask='url(#borderMask)' fill='"+border.col+"'/>";
			id('badgeSVG').innerHTML+=el;
			b=badge.size-b;
			badge.size*=border.size;
			id('badge').setAttribute('transform','scale('+border.size+')');
			id('badgeClipShield').setAttribute('transform','scale('+border.size+')');
			break;
	}
	element='border';
	show('colour');
});

id('noDivisionButton').addEventListener('click', function() {
	report("full - no division");
	show('band');
});

id('VdivButton').addEventListener('click', function() {
	report("vertical division");
	var el="<mask id='divisionMask'>";
	el+="<rect x='0' y='"+(-badge.size/2)+"' width='"+(badge.size/2)+"' height='"+badge.size+"' fill='white'/>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+(badge.size/2)+"' height='"+badge.size+"' fill='black'/>";
	el+="</mask>";	
	el+="<rect id='division' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#divisionMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	division.type='vertical';
	division.col='black';
	element='division';
	show('colour');
});

id('HdivButton').addEventListener('click', function() {
	report("horizontal division");
	var el="<mask id='divisionMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='0' width='"+badge.size+"' height='"+badge.size+"' fill='white'/>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+(badge.size/2)+"' fill='black'/>";
	el+="</mask>";
	el+="<rect id='division' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#divisionMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	division.type='horizontal';
	division.col='black';
	element='division';
	show('colour');
});

id('SEdivButton').addEventListener('click', function() {
	report("SE diagonal division");
	var el="<mask id='divisionMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<path d='M"+(-badge.size/2)+" "+(badge.size/2)+" L"+(badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(badge.size/2)+" Z' fill='white'/>";
	el+="</mask>";
	el+="<rect id='division' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#divisionMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	division.type='diagonalSE';
	division.col='black';
	element='division';
	show('colour');
});

id('SWdivButton').addEventListener('click', function() {
	report("SW diagonal division");
	var el="<mask id='divisionMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<path d='M"+(-badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(badge.size/2)+" L"+(-badge.size/2)+" "+(badge.size/2)+" Z' fill='white'/>";
	el+="</mask>";
	el+="<rect id='division' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#divisionMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	division.type='diagonalSE';
	division.col='black';
	element='division';
	show('colour');
});

id('quartersButton').addEventListener('click', function() {
	report("quarters division");
	var el="<mask id='divisionMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+(badge.size/2)+"' height='"+(badge.size/2)+"' fill='white'/>";
	el+="<rect x='0' y='0' width='"+(badge.size/2)+"' height='"+(badge.size/2)+"' fill='white'/>";
	el+="</mask>";
	el+="<rect id='division' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#divisionMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	division.type='quarters';
	division.col='black';
	element='division';
	show('colour');
});

id('diagonalQuartersButton').addEventListener('click', function() {
	report("diagonal quarters division");
	var el="<mask id='divisionMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<path d='M0 0 L"+(badge.size/2)+" "+(badge.size/2)+" L"+(-badge.size/2)+" "+(badge.size/2)+"L0 0 L"+(-badge.size/2)+" "+(-badge.size/2)+" L "+(badge.size/2)+" "+(-badge.size/2)+" Z' fill='white'/>";
	el+="</mask>";
	el+="<rect id='division' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#divisionMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	division.type='diagonalQuarters';
	division.col='black';
	element='division';
	show('colour');
});

id('cantonButton').addEventListener('click', function() {
	report("cannton division");
	var el="<mask id='divisionMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+(badge.size/2)+"' height='"+(badge.size/2)+"' fill='white'/>";
	el+="</mask>";
	el+="<rect id='division' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#divisionMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	division.type='canton';
	division.col='black';
	element='division';
	show('colour');
});

id('noBandButton').addEventListener('click', function() {
	report("plain - no band");
	show('symbol');
});

id('chiefButton').addEventListener('click', function() {
	report("chief");
	var el="<mask id='bandMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+(badge.size/5)+"' fill='white'/>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-0.3*badge.size)+"' width='"+badge.size/2+"' height='"+(0.8*badge.size)+"' fill='black'/>";
	el+="</mask>";
	el+="<rect id='band' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#bandMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	band.type='chief';
	band.col='black';
	element='band';
	show('colour');
});

id('paleButton').addEventListener('click', function() {
	report("pale");
	var el="<mask id='bandMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<rect x='"+(-badge.size/10)+"' y='"+(-badge.size/2)+"' width='"+(badge.size/5)+"' height='"+(badge.size)+"' fill='white'/>";
	el+="</mask>";
	el+="<rect id='band' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#bandMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	band.type='pale';
	band.col='black';
	element='band';
	show('colour');
});

id('fessButton').addEventListener('click', function() {
	report("fell");
	var el="<mask id='bandMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/10)+"' width='"+badge.size+"' height='"+(badge.size/5)+"' fill='white'/>";
	el+="</mask>";
	el+="<rect id='band' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#bandMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	band.type='fell';
	band.col='black';
	element='band';
	show('colour');
});

id('RbendButton').addEventListener('click', function() {
	report("right bend");
	var el="<mask id='bandMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<path d='M"+(-badge.size/2)+" "+(0.37*badge.size)+" L"+(0.37*badge.size)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(-0.37*badge.size)+" L"+(-0.37*badge.size)+" "+(badge.size/2)+" L"+(-badge.size/2)+" "+(badge.size/2)+" Z' fill='white'/>";
	el+="</mask>";
	el+="<rect id='band' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#bandMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	band.type='bendR';
	band.col='black';
	element='band';
	show('colour');
});

id('LbendButton').addEventListener('click', function() {
	report("left bend");
	var el="<mask id='bandMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<path d='M"+(-badge.size/2)+" "+(-badge.size/2)+" L"+(-0.37*badge.size)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(0.37*badge.size)+" L"+(badge.size/2)+" "+(badge.size/2)+  " L"+(0.37*badge.size)+" "+(badge.size/2)+" L"+(-badge.size/2)+" "+(-0.37*badge.size)+" Z' fill='white'/>";
	el+="</mask>";
	el+="<rect id='band' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#bandMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	band.type='bendL';
	band.col='black';
	element='band';
	show('colour');
});

id('crossedButton').addEventListener('click', function() {
	report("crossed bands");
	var el="<mask id='bandMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/10)+"' width='"+badge.size+"' height='"+(badge.size/5)+"' fill='white'/>";
	el+="<rect x='"+(-badge.size/10)+"' y='"+(-badge.size/2)+"' width='"+(badge.size/5)+"' height='"+badge.size+"' fill='white'/>";
	el+="</mask>";
	el+="<rect id='band' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#bandMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	band.type='crossed';
	band.col='black';
	element='band';
	show('colour');
});

id('saltireButton').addEventListener('click', function() {
	report("saltire");
	var el="<mask id='bandMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<path d='M"+(-badge.size/2)+" "+(-badge.size/2)+" L"+(-0.37*badge.size)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(0.37*badge.size)+" L"+(badge.size/2)+" "+(badge.size/2)+  " L"+(0.37*badge.size)+" "+(badge.size/2)+" L"+(-badge.size/2)+" "+(-0.37*badge.size)+" Z' fill='white'/>";
	el+="<path d='M"+(-badge.size/2)+" "+(0.37*badge.size)+" L"+(0.37*badge.size)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(-badge.size/2)+" L"+(badge.size/2)+" "+(-0.37*badge.size)+" L"+(-0.37*badge.size)+" "+(badge.size/2)+" L"+(-badge.size/2)+" "+(badge.size/2)+" Z' fill='white'/>";
	el+="</mask>";
	el+="<rect id='band' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#bandMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	band.type='bendL';
	band.col='black';
	element='band';
	show('colour');
});

id('chevronUpButton').addEventListener('click', function() {
	report("chevron up");
	var el="<mask id='bandMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<path d='M"+(-badge.size/2)+" "+(0.11*badge.size)+" L0 "+(-0.39*badge.size)+" L"+(badge.size/2)+" "+(0.11*badge.size)+" L"+(badge.size/2)+" "+(0.39*badge.size)+" L0 "+(-0.11*badge.size)+" L"+(-badge.size/2)+" "+(0.39*badge.size)+" Z' fill='white'/>";
	el+="</mask>";
	el+="<rect id='band' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#bandMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	band.type='chevronUp';
	band.col='black';
	element='band';
	show('colour');
});

id('chevronDownButton').addEventListener('click', function() {
	report("chevron down");
	var el="<mask id='bandMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<path d='M"+(-badge.size/2)+" "+(-0.11*badge.size)+" L0 "+(0.39*badge.size)+" L"+(badge.size/2)+" "+(-0.11*badge.size)+" L"+(badge.size/2)+" "+(-0.39*badge.size)+  " L0 "+(0.11*badge.size)+" L"+(-badge.size/2)+" "+(-0.39*badge.size)+" Z' fill='white'/>";
	el+="</mask>";
	el+="<rect id='band' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#bandMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	band.type='chevronUp';
	band.col='black';
	element='band';
	show('colour');
});

id('noSymbolButton').addEventListener('click', function() {
	report("no symbol");
	element='badge';
	show('save');
});

id('ballButton').addEventListener('click', function() {
	report("ball");
	var el="<circle id='symbol' cx='0' cy='0' r='"+(badge.size*0.2)+"' fill='black'/>";
	id('badgeSVG').innerHTML+=el;
	element="symbol";
	show("colour");
});

id('ringButton').addEventListener('click', function() {
	report("ring");
	var el="<mask id='symbolMask'>";
	el+="<rect x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black'/>";
	el+="<circle cx='0' cy='0' r='"+(badge.size*0.2)+"' fill='white'/>";
	el+="<circle cx='0' cy='0' r='"+(badge.size*0.1)+"' fill='black'/>";
	el+="</mask>";
	el+="<rect id='symbol' x='"+(-badge.size/2)+"' y='"+(-badge.size/2)+"' width='"+badge.size+"' height='"+badge.size+"' fill='black' mask='url(#symbolMask)' clip-path='url(#badgeClip)'/>";
	id('badgeSVG').innerHTML+=el;
	element="symbol";
	show("colour");
});

id('boxButton').addEventListener('click', function() {
	report("box");
	var el="<rect id='symbol' x='"+(-badge.size/5)+"' y='"+(-badge.size/5)+"' width='"+(badge.size*0.4)+"' height='"+(badge.size*0.4)+"' fill='black'/>";
	id('badgeSVG').innerHTML+=el;
	element="symbol";
	show("colour");
});

id('dmndButton').addEventListener('click', function() {
	report("diamond");
	var el="<path id='symbol' d='M "+(-badge.size/5)+" 0 L0 "+(-badge.size/5)+" L"+(badge.size/5)+" 0 L0 "+(badge.size/5)+" Z' fill='black'/>";
	id('badgeSVG').innerHTML+=el;
	element="symbol";
	show("colour");
});

id('crossButton').addEventListener('click', function() {
	report("cross");
	var d=badge.size/5;
	var el="<path id='symbol' d='M"+(d/2)+" "+(d/2)+" l"+d+" 0 l 0 "+(-d)+" l"+(-d)+" 0 l0"+(-d)+" l"+(-d)+" 0 l 0 "+d+" l "+(-d)+" 0 l0 "+d+" l"+d+" 0 l0 "+d+" l"+d+" 0 Z' fill='black'/>";
	id('badgeSVG').innerHTML+=el;
	element="symbol";
	show("colour");
});

id('starButton').addEventListener('click', function() {
	report("star");
	var r=badge.size/3;
	var el="<path id='symbol' d='M0 "+(-r)+" L"+(0.588*r)+" "+(0.809*r)+" L"+(-0.951*r)+" "+(-0.309*r)+" L"+(0.951*r)+" "+(-0.309*r)+" L"+(-0.558*r)+" "+(0.809*r)+" Z' fill='black'/>";
	id('badgeSVG').innerHTML+=el;
	element="symbol";
	show("colour");
});

// add other symbols

id('saveButton').addEventListener('click',saveSVG);

function setColour(col) {
	report("set  colour of "+element+" to "+col+" - pattern is "+pattern);
	switch(element) {
		case 'badge':
			if(pattern) {
				id('badgeFront').setAttribute('fill', col);
				pattern=false;
				show('border');
			}
			else {
				badge.col=col;
				id('badge').setAttribute('fill',col);
				show('pattern');
			}
			break;
		case 'outline':
			border.col=col;
			id('outline').setAttribute('stroke', border.col);
			show('division'); 
			break;
		case 'border':
			border.col=col;
			id('border').setAttribute('fill',col);
			element='badge';
			show('division');
			break;
		case 'band':
			if(pattern) {
				id('bandFront').setAttribute('fill', col);
				pattern=false;
				show('symbol');
			}
			else {
				band.col=col;
				id('band').setAttribute('fill', col);
				show('pattern');
			}
			break;
		case 'division':
			if(pattern) {
				id('divisionFront').setAttribute('fill', col);
				pattern=false;
				show('band');
			}
			else {
				division.col=col;
				id('division').setAttribute('fill', col);
				show('pattern');
			}
			break;
		case 'symbol':
			id('symbol').setAttribute('fill',col);
			element='badge';
			show('save');
			break;
	}
};

function setPattern(type) {
	console.log("set pattern "+type+" for "+element+" badge size "+badge.size);
	if(type==null) {
		switch(element) {
			case 'badge':
				show('border');
				break;
			case 'division':
				show('band');
				break;
			case 'band':
				show('symbol');
				break;
		}
		return;
	}
	var backCol='white';
	switch(element) {
		case 'badge':
			backCol=badge.col;
			break;
		case 'border':
			backCol=border.col;
			break;
		case 'band':
			backCol=band.col;
			break;
		case 'division':
			backCol=division.col;
	}
	switch(type) {
		case 'dots':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.1' height='0.1'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='10' height='10' fill='"+backCol+"'/>";
			el+="<circle id='"+element+"Front' cx='5' cy='5' r='3' fill='black'></circle>";
			el+="</pattern>";
			break;
		case 'checks':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.2' height='0.2'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='10' height='10' fill='"+backCol+"'/>"	;
			el+="<path id='"+element+"Front' d='M0 0 L5 0 L5 5 L0 5 L0 0 M5 5 L10 5 L10 10 L5 10 L5 5' fill='black'/>";
			el+="</pattern>";
			break;
		case 'stripesH':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.1' height='0.1'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='10' height='5' fill='"+backCol+"'/>";
			el+="<rect id='"+element+"Front' x='0' y='5' width='10' height='5' fill='black'/>";
			el+="</pattern>";
			break;
		case 'stripesV':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.1' height='0.1'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='5' height='10' fill='"+backCol+"'/>";
			el+="<rect id='"+element+"Front' x='5' y='0' width='5' height='10' fill='black'/>";
			el+="</pattern>";
			break;
		case 'diamonds':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.1' height='0.1'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='10' height='10' fill='"+backCol+"'/>";
			el+="<path id='"+element+"Front' d='M5 0 L10 5 L5 10 L0 5 Z' fill='black'/>";
			el+="</pattern>";
			break;
		case 'diagonalsR':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.1' height='0.1'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='10' height='10' fill='"+backCol+"'/>";
			el+="<path id='"+element+"Front' d='M0 0 L5 0 L0 5 L0 0 M0 10 L10 0 L10 5 L5 10 L0 10' fill='black'/>";
			el+="</pattern>";
			break;
		case 'diagonalsL':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.1' height='0.1'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='10' height='10' fill='"+backCol+"'/>";
			el+="<path id='"+element+"Front' d='M0 0 L10 10 L5 10 L0 5 L0 0 M5 0 L10 0 L10 5 L5 0' fill='black'/>";
			el+="</pattern>";
			break;
		case 'crosses':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.1' height='0.1'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='10' height='10' fill='"+backCol+"'/>";
			el+="<path id='"+element+"Front' d='M4 2 L6 2 L6 4 L8 4 L8 6 L6 6 L6 8 L4 8 L4 6 L2 6 L2 4 L4 4 Z' fill='black'/>";
			el+="</pattern>";
			break;
		case 'stars':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.1' height='0.1'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='10' height='10' fill='"+backCol+"'/>";
			el+="<path id='"+element+"Front' d='M5 2 L6.76 7.43 L2.15 4.07 L7.85 4.07 L3.24 7.43 Z' fill='black'/>";
			el+="</pattern>";
			break;
		case 'chevrons':
			var el="<pattern id='"+element+"Pattern' viewBox='0,0,10,10' width='0.1' height='0.1'>";
			el+="<rect id='"+element+"Back' x='0' y='0' width='10' height='10' fill='"+backCol+"'/>";
			el+="<path id='"+element+"Front' d='M0 5 L5 0 L10 5 L10 10 L5 5 L0 10 Z' fill='black'/>";
			el+="</pattern>";
			break;
		}
	id('badgeSVG').innerHTML+=el;
	var url="url(#"+element+"Pattern)";
	id(element).setAttribute('fill',url);
	pattern=true;
	show('colour');
}

function saveSVG() {
	var svg=id('graphic').innerHTML;
	console.log("SVG: "+svg);
	var fileName="badge.svg";
	var saveName=id('saveName').value;
	if(saveName) fileName=saveName+".svg";
	console.log("save as "+fileName);
	// var json=JSON.stringify(data);
	var blob=new Blob([svg], {type:"data:image/svg+xml"});
	var a =document.createElement('a');
	a.style.display='none';
	var url = window.URL.createObjectURL(blob);
	a.href= url;
	a.download=fileName;
	document.body.appendChild(a);
	a.click();
	alert(fileName+" saved to downloads folder");
}

function show(name) {
	report("switch to "+name+"Dialog from "+currentDialog);
	id(currentDialog).style.display='none';
	id('element').innerHTML=element;
	id('dialog').innerHTML=name;
	currentDialog=name+'Dialog';
	id(currentDialog).style.display='block';
}

function id(el) {
	return document.getElementById(el);
}

function report(text) {
	console.log(text);
}

// implement service worker if browser is PWA friendly
if (navigator.serviceWorker.controller) {
	console.log('Active service worker found, no need to register')
} else { //Register the ServiceWorker
	navigator.serviceWorker.register('sw.js').then(function(reg) {
		console.log('Service worker has been registered for scope:'+ reg.scope);
	});
}