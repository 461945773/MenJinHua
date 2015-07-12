	var drawTree = function(ctx,startX,startY,length,angle,depth,branchWidth){
		var rand = Math.random,
			newlength,newAngle,newDepth,maxBranch =3,
			endX,endY,maxAngle = 2 * Math.PI/4;
			ctx.beginPath();
			ctx.moveTo(startX, startY);
			endX = startX + length*Math.cos(angle);
			endY = startY + length*Math.sin(angle);
			ctx.lineCap = "round";
			ctx.lineWidth = branchWidth;
			ctx.lineTo(endX, endY);
			if (depth<2) {
				ctx.strokeStyle = "rgb(0,"+(((rand()*64)+128)>>0)+",0)";
			}else{
				ctx.strokeStyle = "rgb("+(((rand()*64)+64)>>0)+",50,25)";
			}
			ctx.stroke();
			newDepth = depth - 1;
			if (!newDepth) {
				return ;
			};
			subBranches = rand()*(maxBranch-1)+1;
			branchWidth *= 0.7;
			for (var i = 0; i < subBranches; i++) {
				newAngle = angle + rand()*maxAngle - maxAngle*0.5;
				newlength = length*(0.7+rand()*0.3);
				setTimeout(function(){
					drawTree(ctx,endX,endY,newlength,newAngle,newDepth,branchWidth);
					},50);
			};
	};
	var DrawTree = function(ctx,Size,offsetX,offsetY){
		var startX = 32 * Size+offsetX;
		var startY = 47* Size+offsetY;
		var length = 6 * Size;
		var branchWidth = 1.2*Size;
		var angle = -Math.PI/2;
		var depth = 12;
		drawTree(ctx,startX,startY,length,angle,depth,branchWidth);
	}