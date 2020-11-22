function thanks()
{
    alert('Thank you for your feedback, it will definitely help me improve this website!');
}

function dropdown(fcontinentimage,fthisvalue)
{
    document.getElementById(fcontinentimage).src=fthisvalue;
}

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var datetime = date+'  '+time;
function dtime()
{
    document.getElementById("timeid").innerHTML=datetime;
}

var quote=[
'Your limitation, it’s only your imagination.',
'Push yourself, because no one else is going to do it for you.',
'Sometimes later becomes never. Do it now.',
'Great things never come from comfort zones.',
'Dream it. Wish it. Do it.',
'Success doesn’t just find you. You have to go out and get it.',
'The harder you work for something, the greater you’ll feel when you achieve it.',
'Dream bigger. Do bigger.',
'Don’t stop when you’re tired. Stop when you’re done.',
'Wake up with determination. Go to bed with satisfaction.',
'Do something today that your future self will thank you for.',
'Little things make big days.',
'It’s going to be hard, but hard does not mean impossible.',
'Don’t wait for opportunity. Create it.',
'Sometimes we’re tested not to show our weaknesses, but to discover our strengths.',
'The key to success is to focus on goals, not obstacles.',
'Dream it. Believe it. Build it.'
]
function newquote()
{
    var randomnumber=Math.floor(Math.random()*(quote.length));
    document.getElementById('quotedisplay').innerHTML=quote[randomnumber];
}

function changecol(fcolour)
{
    document.body.style.background=fcolour;
}


