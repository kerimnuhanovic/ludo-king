const drawField = (ctx, mjeraW, mjeraH, radius, sec, igrac) => {
    for(let i = 0; i < 15; i++) {
        for(let j = 0; j < 15; j++) {
            ctx.beginPath();
            ctx.rect(i*mjeraW, j*mjeraH, mjeraW, mjeraH);
            ctx.strokeStyle = 'black';
            ctx.fillStyle = 'white'
            ctx.fill()
            ctx.stroke();

        }
    }
    let vel = 25

    ctx.beginPath();
    ctx.rect(0, 0, mjeraW * 6, mjeraH * 6);

    if(igrac === 1 && sec < 3) ctx.fillStyle = '#f20a15';
    else if(igrac === 1 && sec < 6) ctx.fillStyle = '#e00913';
    else if(igrac === 1 && sec < 9) ctx.fillStyle = '#cf0811';
    else if(igrac === 1 && sec < 12) ctx.fillStyle = '#bf0a12';
    else if(igrac === 1 && sec < 15) ctx.fillStyle = '#a8080f';
    else if(igrac === 1 && sec < 18) ctx.fillStyle = '#bf0a12';
    else if(igrac === 1 && sec < 21) ctx.fillStyle = '#cf0811';
    else if(igrac === 1 && sec < 24) ctx.fillStyle = '#e00913';
    else ctx.fillStyle = '#f20a15';



    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(mjeraW, mjeraH, mjeraW*4, mjeraH*4);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(mjeraW*3-radius-10, mjeraH+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#f20a15';
    ctx.fill();
    ctx.stroke();




    ctx.beginPath();
    ctx.arc(mjeraW*3+radius+10, mjeraH+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#f20a15';
    ctx.fill();
    ctx.stroke();



    ctx.beginPath();
    ctx.arc(mjeraW*3-radius-10, mjeraH*3+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#f20a15';
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(mjeraW*3+radius+10, mjeraH*3+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#f20a15';
    ctx.fill();
    ctx.stroke();




    ctx.beginPath();
    ctx.rect(mjeraW, mjeraH*6, mjeraW, mjeraH);
    ctx.fillStyle = '#f20a15';
    ctx.fill();
    ctx.stroke();

    for(let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.rect(mjeraW*i, mjeraH*7, mjeraW, mjeraH);
        ctx.fillStyle = '#f20a15';
        ctx.fill();
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(mjeraW*6, mjeraH*6);
    ctx.lineTo(mjeraW*7+mjeraW/2, mjeraH*7+mjeraH/2+0.5);
    ctx.lineTo(mjeraW*6, mjeraH*9);

    ctx.lineTo(mjeraW*6, mjeraH*6);
    ctx.fill();
    ctx.stroke();







    ctx.beginPath();
    ctx.rect(mjeraW*9, 0, mjeraW*6, mjeraH*6);


    if(igrac === 2 && sec < 3) ctx.fillStyle = '#0af234';
    else if(igrac === 2 && sec < 6) ctx.fillStyle = '#09de2f';
    else if(igrac === 2 && sec < 9) ctx.fillStyle = '#08cf2c';
    else if(igrac === 2 && sec < 12) ctx.fillStyle = '#09bd2a';
    else if(igrac === 2 && sec < 15) ctx.fillStyle = '#07a624';
    else if(igrac === 2 && sec < 18) ctx.fillStyle = '#09bd2a';
    else if(igrac === 2 && sec < 21) ctx.fillStyle = '#08cf2c';
    else if(igrac === 2 && sec < 24) ctx.fillStyle = '#09de2f';
    else ctx.fillStyle = '#0af234';


    ctx.fill();
    ctx.stroke();




    ctx.beginPath();
    ctx.rect(mjeraW*10, mjeraH, mjeraW*4, mjeraH*4);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(mjeraW*12-radius-10, mjeraH+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#0af234';
    ctx.fill();
    ctx.stroke();




    ctx.beginPath();
    ctx.arc(mjeraW*12+radius+10, mjeraH+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#0af234';
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(mjeraW*12-radius-10, mjeraH*3+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#0af234';
    ctx.fill();
    ctx.stroke();



    ctx.beginPath();
    ctx.arc(mjeraW*12+radius+10, mjeraH*3+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#0af234';
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.rect(mjeraW*8, mjeraH, mjeraW, mjeraH);
    ctx.fillStyle = '#0af234';
    ctx.fill();
    ctx.stroke();
    for(let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.rect(mjeraW*7, mjeraH*i, mjeraW, mjeraH);
        ctx.fill();
        ctx.stroke();
    }


    ctx.beginPath();
    ctx.moveTo(mjeraW*6, mjeraH*6);
    ctx.lineTo(mjeraW*7+mjeraW/2, mjeraH*7+mjeraH/2+0.5);
    ctx.lineTo(mjeraW*9, mjeraH*6);

    ctx.lineTo(mjeraW*6, mjeraH*6);
    ctx.fill();
    ctx.stroke();





    ctx.beginPath();
    ctx.rect(0, mjeraH*9, mjeraW*6, mjeraH*6);

    if(igrac === 4 && sec < 3) ctx.fillStyle = '#141eb3';
    else if(igrac === 4 && sec < 6) ctx.fillStyle = '#121ba3';
    else if(igrac === 4 && sec < 9) ctx.fillStyle = '#101891';
    else if(igrac === 4 && sec < 12) ctx.fillStyle = '#0c137d';
    else if(igrac === 4 && sec < 15) ctx.fillStyle = '#0a106b';
    else if(igrac === 4 && sec < 18) ctx.fillStyle = '#0c137d';
    else if(igrac === 4 && sec < 21) ctx.fillStyle = '#101891';
    else if(igrac === 4 && sec < 24) ctx.fillStyle = '#121ba3';
    else ctx.fillStyle = '#141eb3';
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.rect(mjeraW, mjeraH*10, mjeraW*4, mjeraH*4);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(mjeraW*3-radius-10, mjeraH*10+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#141eb3';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(mjeraW*3+radius+10, mjeraH*10+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#141eb3';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(mjeraW*3-radius-10, mjeraH*12+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#141eb3';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(mjeraW*3+radius+10, mjeraH*12+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#141eb3';
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.rect(mjeraW*6, mjeraH*13, mjeraW, mjeraH);
    ctx.fillStyle = '#141eb3';
    ctx.fill();
    ctx.stroke();


    for(let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.rect(mjeraW*7, mjeraH*(14-i), mjeraW, mjeraH);
        ctx.fill();
        ctx.stroke();
    }


    ctx.beginPath();
    ctx.moveTo(mjeraW*6, mjeraH*9);

    ctx.lineTo(mjeraW*7+mjeraW/2, mjeraH*7+mjeraH/2+0.5);

    ctx.lineTo(mjeraW*9, mjeraH*9);

    ctx.lineTo(mjeraW*6, mjeraH*9);
    ctx.fill();
    ctx.stroke();






    ctx.beginPath();
    ctx.rect(mjeraW * 9, mjeraH * 9, mjeraW * 6, mjeraH * 6);

    if(igrac === 3 && sec < 3) ctx.fillStyle = '#eefa0a';
    else if(igrac === 3 && sec < 6) ctx.fillStyle = '#dde807';
    else if(igrac === 3 && sec < 9) ctx.fillStyle = '#ccd604';
    else if(igrac === 3 && sec < 12) ctx.fillStyle = '#bbc406';
    else if(igrac === 3 && sec < 15) ctx.fillStyle = '#a8b005';
    else if(igrac === 3 && sec < 18) ctx.fillStyle = '#bbc406';
    else if(igrac === 3 && sec < 21) ctx.fillStyle = '#ccd604';
    else if(igrac === 3 && sec < 24) ctx.fillStyle = '#dde807';
    else ctx.fillStyle = '#eefa0a';


    ctx.fill();
    ctx.stroke();



    ctx.beginPath();
    ctx.rect(mjeraW*10, mjeraH*10, mjeraW*4, mjeraH*4);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(mjeraW*12-radius-10, mjeraH*10+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#eefa0a';
    ctx.fill();
    ctx.stroke();



    ctx.beginPath();
    ctx.arc(mjeraW*12+radius+10, mjeraH*10+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#eefa0a';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(mjeraW*12-radius-10, mjeraH*12+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#eefa0a';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(mjeraW*12+radius+10, mjeraH*12+radius+20, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#eefa0a';
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.rect(mjeraW*13, mjeraH*8, mjeraW, mjeraH);
    ctx.fillStyle = '#eefa0a';
    ctx.fill();
    ctx.stroke();

    for(let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.rect(mjeraW*(14-i), mjeraH*7, mjeraW, mjeraH);
        ctx.fill();
        ctx.stroke();
    }




    ctx.beginPath();


    ctx.moveTo(mjeraW*9, mjeraH*9);

    ctx.lineTo(mjeraW*7+mjeraW/2, mjeraH*7+mjeraH/2+0.5);

    ctx.lineTo(mjeraW*9, mjeraH*6);

    ctx.lineTo(mjeraW*9, mjeraH*9);ctx.fill();
    ctx.stroke();

}

export default drawField