
//描画コンテキストの取得


function startSim(){
	canvas = document.getElementById('sim');
	ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.lineWidth = 1;
	ctx.moveTo(20, 20);
	ctx.lineTo(20, 100);
	ctx.lineTo(100, 100);
	ctx.lineTo(100, 20);
	ctx.closePath();
	ctx.stroke();
}