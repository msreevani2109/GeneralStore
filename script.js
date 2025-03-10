//To identify anonymous users who just visited signup page
// function CallVisitorIdentify(){
//     aptrinsic("identify",
//             {
//                 //User Fields
//                 "id": "visitor", // Required for logged in app users
//             },
//             {
//                 //Account Fields
//                 "id": "Visitors"
//             });
//  }
//Gainsight PX Tag - start
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-EINSODADBSWN-2",{
     //"engagementChecksumFileUrl":"newchecksum.json"
  });
//Gainsight PX Tag - end

function getLastName(){
  const alphabet = 'ABCDEFGHIJKLMNOPRSTUVW';
  const randomIndex = Math.floor(Math.random()*alphabet.length);
  return alphabet[randomIndex];
}
function getAccount(accountid){
  const aid = accountid.toLowerCase();
  return aid;
}
var act;
function navigate(form){
  var username = document.getElementById("username").value;
  var accountid = document.getElementById("aid").value;
  var id = username.substring(0,4);
  var name = username.split("@")[0];
  var lname = getLastName();
  act = getAccount(accountid);
  localStorage.setItem("accountName",act);
  localStorage.setItem("id",id);
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
function handleCustomEvent(role){
    if(role=="admin"){
        aptrinsic('track','admince',{"admin":"yes"});
    }
    else{
        aptrinsic('track','admince',{"admin":"no"});
    }
  
}
function deleteAllCookies(){
  aptrinsic("reset");
  localStorage.setItem("accountName","");
  localStorage.setItem("id","");
}

function SendData(){
  alert("form submitted,thank you!");
}

function storeValues(){
    aptrinsic('track','amount',{"amountentered":document.getElementById('amount').value});
    aptrinsic('track','interest',{"interestentered":document.getElementById('interest').value});
}
function trackData(){
  aptrinsic("track","GSCE2",{"name":"sree","country":document.getElementById("dropdown").value});
}
function setGlobalContext(context){
    aptrinsic('set', 'globalContext', {"role":context});
}

function handleQuery(){
    aptrinsic('track',"Connect Project selected");
}

// aptrinsic('addListener', 'engagementCompleted', function(eventData)
// {
//   console.log(JSON.stringify(eventData));
//   if(eventData.engagementId=="f0f45d57-bb2f-4b2e-8357-f807cabaaccb" && eventData.engagementName== "New demo Guide Engagement" && eventData.interaction=="Completed"){
//     aptrinsic('track','demoguide',{"completed":"yes"});
//   }
// });

// aptrinsic('addListener', 'engagementView', function(eventData)
// {
//   console.log(JSON.stringify(eventData));
//   if(eventData.engagementId=="c9d8e660-e1ad-452e-82b2-d4c1172166f0" && eventData.engagementName== "New  demo Dialog Engagement" && eventData.interaction=="Completed"){
//     aptrinsic('track','demoguide',{"completed":"No"});
//   }
// });

function handleChange(){
  var selectedCompany = document.getElementById("companies").value;
  console.log("Selected company: " + selectedCompany);
  console.log(localStorage.getItem("accountName"));
  var act = localStorage.getItem("accountName");
  var id = localStorage.getItem("id");
  if(selectedCompany!==act){
       //passing user and account objects:
       aptrinsic("reset"); 
      localStorage.setItem("accountName",selectedCompany);
      var sc= localStorage.getItem("accountName");
      setTimeout(()=>{
        aptrinsic("identify",
          {
          //User Fieldsq
          
            "id": id, // Required for logged in app users
          },
          {
          //Account Fields
            "id": sc,
            "name": sc,
         });

      },2000)
 
  }
}