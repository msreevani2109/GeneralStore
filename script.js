//Gainsight PX Tag - start
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-EINSODADBSWN-2");
//Gainsight PX Tag - end

function navigate(form){
  var username = document.getElementById("username").value;
  var id = username.substring(0,4);
  //passing user and account objects:
  aptrinsic("identify",
    {
    //User Fields
      "id": id, // Required for logged in app users
      "email": username,
      "firstName": "Nihira",
      "lastName": "Malipeddi",
      "Aadharnumber":139792,
      "PANnumber":13793,
      "gender":"Female"
    },
    {
    //Account Fields
      "id":"SVNE", //Required
      "name":"MBU",
      "MSVID1" : ""
  });
      alert("logged in succesfully" );
    form.action = "home.html";
}

function deleteAllCookies(){
  aptrinsic("reset");
}