const questions = [

{
question:"Nida receives an email asking her to verify her university account. Which sign is the strongest indicator of phishing?",
questionTR:"Nida üniversite hesabını doğrulamasını isteyen bir e-posta alıyor. Phishing olduğunu gösteren en güçlü işaret hangisidir?",

options:[
{
en:"The email contains the university logo.",
tr:"E-postada üniversite logosu bulunuyor."
},
{
en:"The sender domain differs from the official university domain.",
tr:"Gönderen alan adı üniversitenin resmi alan adından farklı."
},
{
en:"The email arrived in the afternoon.",
tr:"E-posta öğleden sonra geldi."
}
],

correct:1
},

{
question:"Nida finds a USB drive labeled 'Internship Salaries 2026'. What should she do?",
questionTR:"Nida 'Internship Salaries 2026' yazılı bir USB buluyor. Ne yapmalıdır?",

options:[
{
en:"Give it to IT or security staff.",
tr:"BT veya güvenlik ekibine teslim et."
},
{
en:"Open it on her laptop first.",
tr:"Önce kendi bilgisayarında aç."
},
{
en:"Copy the files and scan later.",
tr:"Dosyaları kopyala ve sonra tara."
}
],

correct:0
},

{
question:"A caller claims to be from Nida's bank and asks for a verification code. What is safest?",
questionTR:"Bir kişi Nida'nın bankasından aradığını söyleyerek doğrulama kodunu istiyor. En güvenli davranış nedir?",

options:[
{
en:"Give only part of the code.",
tr:"Kodun sadece bir kısmını ver."
},
{
en:"Provide the code if the caller sounds professional.",
tr:"Arayan kişi profesyonel görünüyorsa kodu paylaş."
},
{
en:"End the call and contact the bank directly.",
tr:"Görüşmeyi sonlandır ve bankayla doğrudan iletişime geç."
}
],

correct:2
},

{
question:"Which password is strongest?",
questionTR:"Hangi şifre daha güvenlidir?",

options:[
{
en:"nida123",
tr:"nida123"
},
{
en:"Password2026",
tr:"Password2026"
},
{
en:"N!da#Cyber2026",
tr:"N!da#Cyber2026"
}
],

correct:2
},

{
question:"Nida downloads CybersecurityPresentation.pdf.exe. Why is this suspicious?",
questionTR:"Nida CybersecurityPresentation.pdf.exe dosyasını indiriyor. Bu neden şüphelidir?",

options:[
{
en:"It is too large.",
tr:"Dosya çok büyük."
},
{
en:"It looks like a PDF but is actually executable.",
tr:"PDF gibi görünse de çalıştırılabilir dosyadır."
},
{
en:"It was downloaded during daytime.",
tr:"Gündüz indirildi."
}
],

correct:1
},

{
question:"Nida receives an SMS saying her package could not be delivered. What should she do first?",
questionTR:"Nida'ya paketinin teslim edilemediğini söyleyen bir SMS geliyor. İlk olarak ne yapmalıdır?",

options:[
{
en:"Check whether she was expecting a package.",
tr:"Bir paket bekleyip beklemediğini kontrol et."
},
{
en:"Click the tracking link immediately.",
tr:"Takip bağlantısına hemen tıkla."
},
{
en:"Forward the message to friends.",
tr:"Mesajı arkadaşlarına gönder."
}
],

correct:0
},

{
question:"A website asks Nida to disable antivirus before downloading a file. What should she do?",
questionTR:"Bir web sitesi dosya indirmeden önce antivirüsü kapatmasını istiyor. Ne yapmalıdır?",

options:[
{
en:"Disable it temporarily.",
tr:"Geçici olarak kapat."
},
{
en:"Leave the website and avoid downloading.",
tr:"Siteden çık ve dosyayı indirme."
},
{
en:"Disable it only during installation.",
tr:"Sadece kurulum sırasında kapat."
}
],

correct:1
},

{
question:"One day before her presentation, all of Nida's files become encrypted. What attack is this?",
questionTR:"Sunumundan bir gün önce Nida'nın tüm dosyaları şifreleniyor. Bu hangi saldırıdır?",

options:[
{
en:"Password Attack",
tr:"Şifre Saldırısı"
},
{
en:"Social Engineering",
tr:"Sosyal Mühendislik"
},
{
en:"Ransomware",
tr:"Fidye Yazılımı"
}
],

correct:2
}

];

let currentQuestion = 0;
let score = 0;
let playerName = "";

function startGame(){

playerName =
document.getElementById("playerName").value;

if(playerName.trim()===""){
alert("Please enter your name.");
return;
}

document.getElementById("startScreen").style.display="none";
document.getElementById("quizScreen").style.display="block";

loadQuestion();
}

function loadQuestion(){

const q = questions[currentQuestion];

document.getElementById("question").innerText =
`Question ${currentQuestion+1}: ${q.question}`;

document.getElementById("questionTR").innerText =
q.questionTR;

document.getElementById("feedback").innerHTML="";

const answersDiv =
document.getElementById("answers");

answersDiv.innerHTML="";

q.options.forEach((option,index)=>{

const btn =
document.createElement("button");

btn.className="option";

btn.innerHTML =
`
<b>${String.fromCharCode(65+index)})</b><br>
${option.en}
<br>
<small>${option.tr}</small>
`;

btn.onclick =
()=>checkAnswer(index);

answersDiv.appendChild(btn);

});

document.getElementById("nextBtn").style.display="none";
}

function checkAnswer(selected){

const q = questions[currentQuestion];

const buttons =
document.querySelectorAll(".option");

buttons.forEach(btn=>{
btn.disabled=true;
});

const feedback =
document.getElementById("feedback");

if(selected===q.correct){

score++;

feedback.innerHTML =
"✅ Correct! / Doğru!";

buttons[selected].style.background =
"#2d8f4e";

}else{

feedback.innerHTML =
"❌ Incorrect / Yanlış";

buttons[selected].style.background =
"#a83232";

buttons[q.correct].style.background =
"#2d8f4e";

}

document.getElementById("nextBtn").style.display =
"block";
}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

showResults();

}
}

function showResults(){

document.getElementById("quizScreen").style.display =
"none";

document.getElementById("result").style.display =
"block";

document.getElementById("scoreText").innerText =
`${playerName} - ${score}/${questions.length}`;

let rank = "";

if(score >= 7){

rank = "🏆 Cyber Defender";

}else if(score >= 5){

rank = "🛡 Security Aware";

}else if(score >= 3){

rank = "⚠ Needs Improvement";

}else{

rank = "🚨 High Risk User";

}

document.getElementById("rankText").innerText =
rank;
}