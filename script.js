//Gainsight PX Tag - start
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-EINSODADBSWN-2");
//Gainsight PX Tag - end

function getLastName(){
  const alphabet = 'ABCDEFGHIJKLMNOPRSTUVW';
  const randomIndex = Math.floor(Math.random()*alphabet.length);
  return alphabet[randomIndex];
}
function getAccount(){
  let accounts = ["IBM","INFOSYS","Gainsight","MBU","TCS","Deloitte"];
  const randomIndex = Math.floor(Math.random()*accounts.length);
  return accounts[randomIndex]; 
}
function navigate(form){
  var username = document.getElementById("username").value;
  var id = username.substring(0,4);
  var name = username.split("@")[0];
  var lname = getLastName();
  var act = getAccount();
  //passing user and account objects:
  aptrinsic("identify",
    {
    //User Fields
      "id": id, // Required for logged in app users
      "email": username,
      "firstName": name,
      "lastName": lname,
      "Aadharnumber":139792,
      "PANnumber":13793,
      "gender":"Female",
      "Age" : 18
    },
    {
    //Account Fields
      "id": act, //Required
      "name": act,
      "MSVID1" : ""
  });
      alert("logged in succesfully" );
    form.action = "home.html";
}
document.getElementById("apt-custom-close").onclick = function(){
  aptrinsic('track','apt-custom-close',{"clicked":"yes"});
}
function handleYes(){
  aptrinsic('track','track-yes',{"respose":"yes"});
}
function handleNo(){
  aptrinsic('track','track-no',{"respose":"no"});
}
function handleBoth(){
  aptrinsic('track','track-both',"true");
}
function handleButtonClick(){
  aptrinsic('track', 'gscr2', {"name":"second rule","value":2});
}
function deleteAllCookies(){
  aptrinsic("reset");
}

function SendData(){
  alert("form submitted,thank you!");
}


function trackData(){
  aptrinsic("track","GSCE2",{"name":"sree","country":document.getElementById("dropdown").value});
}
