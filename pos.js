/** メイン */
document.getElementById("btn").onclick = function(){
	var show = [];
	show[0] = Turn(0);
	
	document.getElementById("position").innerHTML = show[0];
}

/** ある数を含まない乱数 */
cRand = function(n, x){	
	var rt = Math.floor(Math.random() * n);
	if(rt == x){
		rt = cRand(n, x);
	}
	return rt;
}

/** 乱数 */
Rand = function(n){
	cRand(n, n + 2);
}

/** 回転記号 */
Turn = function(x){
	var chara = "";
	var xx = Rand(3);
	switch(x){
		case 0:
			chara = F(0);
			console.log(chara);
			break;
		case 1:
			chara = B(Rand(3));
			break;
		case 2:
			chara = L(Rand(3));
			break;
		case 3:
			chara = R(Rand(3));
			break;
		case 4:
			chara = U(Rand(3));
			break;
		case 5:
			chara = D(Rand(3));
			break;
		case 6:
			chara = M(Rand(3));
			break;
		case 7:
			chara = E(Rand(3));
			break;
		case 8:
			chara = S(Rand(3));
			break;
	}
	return chara;
}

var option = "",			//記号についてるオプション
    two = false;			//ふたつめが実行されたか

F = function(op, n){
	switch(n){
		case 0:
			return "F" + option;
		case 1:
			option = "'";
			one = true;
			if(two == false)
				F(cRand(3, 1));
			else
				F(0);
			break;
		case 2:
			two = true;
			option += "2";
			F(0);
	}
}