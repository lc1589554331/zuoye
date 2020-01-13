const readline = require('readline');
async function input(msg) {
    return await new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(msg, (answer) => {
            resolve(answer)
            rl.close();
        });
    })
}
(async () => {
    while(1){
    var gameover = await input("输入88结束打印,按回车键继续");
      if(gameover==88){
        break;
    }else{
    var x = await input("请输入您需要的图形:")
    var sx = await input("请输入您需要的类型1:实心 2:空心 3花心;");
    var cd = await input("请输入您所要图形的长度(建议大于5,否则出来的效果回不近人意)")
    //console.log(x);
var i,j;
var gameover;
var cd;
var i=0;
var j=0
var x ,y;
var sum='';
var x;
var n;
n=x;
if(n==""){
    console.log('请输入必填项!!!!!!!!');
}else{
    switch(n){
        case '1':
            z();
            break;
        case '2':
            s();
            break;
        case '3':
            t();
            break;
        case '4':
            h();
            break;
        case '5':
            l();
            break;
        defalut:
            break;
    }
}
function z(){
    for(let i=0;i<=cd-1;i++){
        for(let j=0;j<=cd-1;j++){
            if(sx==1){
            sum+=" +";}
            else{
                if(i==0||i==(cd-1)||j==0||j==(cd-1)){
                    sum+=" +";
                }else{
                    sum+="  "
                }
            }
        }sum+="\n";
    }console.log(sum);
}

function s(){
    console.log(cd);
    for(i=cd-1;i>=0;i--){
        for(j=0;j<=cd-1;j++){
            if(sx==1){
                if(i+j<=cd-1){
                    sum+=" +";
                }else{
                    sum+="  "
                }
            }else{
                //if(i==0||j==0||i==-j-cd){
                    if(i+j==cd-1||i==0||j==0){
                    sum+=" +";
                }else{
                    sum+="  "
                }
            }
        }sum+="\n"
    }console.log(sum);
}


 function t(){

    for(i=cd-1;i>=0;i--){
        for(j=0;j<=2*cd+4;j++){
            if(sx==1){
                if(i<j&&i<2*cd+4-j){
                    sum+=' +';
                }else{
                    sum+='  ';}
            }else{
                    if(i==0||i==j||i==2*cd+4-j||i==(cd-1)&&i<=j&&i<=2*cd+4-j){
                        sum+=' +';
                    }else{sum+='  ';}
                }
        }sum+='\n';
    }console.log(sum)
}

function h(){
    for(i=cd;i>=0;i--){
        for(j=0;j<=cd;j++){
            if(i==cd||i==0||(i==3||i==cd-3)&&j>=3&&j<=cd-3||j==cd||j==0||(j==3||j==cd-3)&&i>=3&&i<=cd-3){
                sum+=" +";
            }else{
                sum+="  "
            }
        }sum+="\n"
    }console.log("回形没有空心实心之分的哟!!!");
    console.log(sum);
}
function l(){
    for(i=cd;i>=0;i--){
        for(j=0;j<=cd;j++){
            if(sx==1){
                if(i>=Math.abs(-j+cd/2)&&i<=j+cd/2&&i<=-j+cd*3/2){
                    sum+=" +"
                }else{
                    sum+="  ";
                }
            }else{
                if(i==Math.abs(-j+cd/2)||i==j+cd/2||i==-j+cd*3/2){
                    sum+=" +"
                }else{
                    sum+="  ";
                }
            }
        }sum+="\n"
    }console.log(sum);
}
    }
}

})()
