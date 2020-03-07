var answers = ["It is certain.","It is decidedly so.","Without a doubt.","Yes - definitely.","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again.","Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."];




function shakeEightBall(){
  document.getElementById("what-answer").innerHTML = " ";

  var question = document.getElementById("yourquestion").value;
  var questionLngth = question.length;

  if(questionLngth != 0) {
   document.getElementById("writtenquestion").innerHTML = "Your Question: " + question;

  var shakeNumber = answers[Math.floor(Math.random()*answers.length)];
  console.log(shakeEightBall);

  document.getElementById("what-answer").innerHTML = shakeNumber;
  }
  else {
    document.getElementById("writtenquestion").innerHTML = "Please enter your question!";
  }
};
//shakeEightBall()
