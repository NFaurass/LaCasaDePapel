$(function() {
  $("#SeasonSelector").change(function() {
    $(".SeasonX").hide(), $("#" + $(this).val()).show()
  })
}), $(document).keydown(function(e) {
  return 123 != e.keyCode && ((!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0)
});
function Watch(eps, ses) {
  window.location.href = "/p/s" + ses + "e" + eps + ".html";
  }
function Watchtp() {
  window.location.href = "/p/thephenomenon.html";
  }
$(document).ready(function() {
           var a = { 
              apiKey: "AIzaSyD9_zCFSp3kuXnqBxVX5bTX6vBDNnJV7BQ",
              authDomain: "lacasadepapel-tv.firebaseapp.com",
              databaseURL: "https://lacasadepapel-tv.firebaseio.com",
              projectId: "lacasadepapel-tv",
              storageBucket: "lacasadepapel-tv.appspot.com",
              messagingSenderId: "771207885630",
              appId: "1:771207885630:web:f524830516b379f10af26f"
            };
              firebase.initializeApp(a);
              var ref1 = firebase.database().ref('eps/S1');
              var ref2 = firebase.database().ref('eps/S2');
              var ref3 = firebase.database().ref('eps/S3');
              var ref4 = firebase.database().ref('eps/S4');
              var reftp = firebase.database().ref('eps/TP');
              var userDataRef = ref1.orderByKey();
                  userDataRef.once("value").then(function (snapshot) {
                      snapshot.forEach(function (childSnapshot) {
                          var key = childSnapshot.key;
                          var childData = childSnapshot.val();
                          var season_val = childSnapshot.val().season;
                          var episode_val = childSnapshot.val().episode;
                          var episoden_val = childSnapshot.val().episoden;
                          var Image_val = childSnapshot.val().Image;
                          var Link_val = childSnapshot.val().Link;
                          var Overview_val = childSnapshot.val().Overview;
                          $("#season").append(season_val);
                          $("#episode").append(episode_val);
                          $("#episoden").append(episoden_val);
                          $("#Image").append(Image_val);
                          $("#Link").append(Link_val);
                          $("#Overview").append(Overview_val);
$("#LCDP1").append("<button class='bcard' id='ButtonCard-S" + season_val + "E" + episode_val + "' onclick='Watch(" + episode_val + ", " + season_val + ")'><div class='card'><div class='episode closed'><div class='image'><a episode='" + episode_val + "' season='" + season_val + "' title='La Casa De Papel: Episode " + episode_val + " -  Season " + season_val + "'><img alt='" + episoden_val + "' class='backdrop' src='https://raw.githack.com/NFaurass/LaCasaDePapel/master/S" + season_val + "E" + episode_val + ".jpg'/></a></div><div class='info'><div><div class='title'><div class='wrapper'><span class='episode_number'>" + episode_val + " - </span><h3><a episode='" + episode_val + "' season='" + season_val + "' title='La Casa De Papel: Episode " + episode_val + " -  Season " + season_val + "'> " + episoden_val + "</a></h3></div></div><div class='overview'><p>" + Overview_val + "</p></div></div></div></div></div></button>");
                      });
                  });
                  var userDataRef = ref2.orderByKey();
                  userDataRef.once("value").then(function (snapshot) {
                      snapshot.forEach(function (childSnapshot) {
                          var key = childSnapshot.key;
                          var childData = childSnapshot.val();
                          var season_val = childSnapshot.val().season;
                          var episode_val = childSnapshot.val().episode;
                          var episoden_val = childSnapshot.val().episoden;
                          var Image_val = childSnapshot.val().Image;
                          var Link_val = childSnapshot.val().Link;
                          var Overview_val = childSnapshot.val().Overview;
                          $("#season").append(season_val);
                          $("#episode").append(episode_val);
                          $("#episoden").append(episoden_val);
                          $("#Image").append(Image_val);
                          $("#Link").append(Link_val);
                          $("#Overview").append(Overview_val);
$("#LCDP2").append("<button class='bcard' id='ButtonCard-S" + season_val + "E" + episode_val + "' onclick='Watch(" + episode_val + ", " + season_val + ")'><div class='card'><div class='episode closed'><div class='image'><a episode='" + episode_val + "' season='" + season_val + "' title='La Casa De Papel: Episode " + episode_val + " -  Season " + season_val + "'><img alt='" + episoden_val + "' class='backdrop' src='https://raw.githack.com/NFaurass/LaCasaDePapel/master/S" + season_val + "E" + episode_val + ".jpg'/></a></div><div class='info'><div><div class='title'><div class='wrapper'><span class='episode_number'>" + episode_val + " -  </span><h3><a episode='" + episode_val + "' season='" + season_val + "' title='La Casa De Papel: Episode " + episode_val + " -  Season " + season_val + "'> " + episoden_val + "</a></h3></div></div><div class='overview'><p>" + Overview_val + "</p></div></div></div></div></div></button>");
                      });
                  });
                  var userDataRef = ref3.orderByKey();
                  userDataRef.once("value").then(function (snapshot) {
                      snapshot.forEach(function (childSnapshot) {
                          var key = childSnapshot.key;
                          var childData = childSnapshot.val();
                          var season_val = childSnapshot.val().season;
                          var episode_val = childSnapshot.val().episode;
                          var episoden_val = childSnapshot.val().episoden;
                          var Image_val = childSnapshot.val().Image;
                          var Link_val = childSnapshot.val().Link;
                          var Overview_val = childSnapshot.val().Overview;
                          $("#season").append(season_val);
                          $("#episode").append(episode_val);
                          $("#episoden").append(episoden_val);
                          $("#Image").append(Image_val);
                          $("#Link").append(Link_val);
                          $("#Overview").append(Overview_val);
 $("#LCDP3").append("<button class='bcard' id='ButtonCard-S" + season_val + "E" + episode_val + "' onclick='Watch(" + episode_val + ", " + season_val + ")'><div class='card'><div class='episode closed'><div class='image'><a episode='" + episode_val + "' season='" + season_val + "' title='La Casa De Papel: Episode " + episode_val + " -  Season " + season_val + "'><img alt='" + episoden_val + "' class='backdrop' src='https://raw.githack.com/NFaurass/LaCasaDePapel/master/S" + season_val + "E" + episode_val + ".jpg'/></a></div><div class='info'><div><div class='title'><div class='wrapper'><span class='episode_number'>" + episode_val + " - </span><h3><a episode='" + episode_val + "' season='" + season_val + "' title='La Casa De Papel: Episode " + episode_val + " -  Season " + season_val + "'> " + episoden_val + "</a></h3></div></div><div class='overview'><p>" + Overview_val + "</p></div></div></div></div></div></button>");
                      });
                  });
var userDataRef = ref4.orderByKey();
                  userDataRef.once("value").then(function (snapshot) {
                      snapshot.forEach(function (childSnapshot) {
                          var key = childSnapshot.key;
                          var childData = childSnapshot.val();
                          var season_val = childSnapshot.val().season;
                          var episode_val = childSnapshot.val().episode;
                          var episoden_val = childSnapshot.val().episoden;
                          var Image_val = childSnapshot.val().Image;
                          var Link_val = childSnapshot.val().Link;
                          var Overview_val = childSnapshot.val().Overview;
                          $("#season").append(season_val);
                          $("#episode").append(episode_val);
                          $("#episoden").append(episoden_val);
                          $("#Image").append(Image_val);
                          $("#Link").append(Link_val);
                          $("#Overview").append(Overview_val);
$("#LCDP4").append("<button class='bcard' id='ButtonCard-S" + season_val + "E" + episode_val + "' onclick='Watch(" + episode_val + ", " + season_val + ")'><div class='card'><div class='episode closed'><div class='image'><a episode='" + episode_val + "' season='" + season_val + "' title='La Casa De Papel: Episode " + episode_val + " -  Season " + season_val + "'><img alt='" + episoden_val + "' class='backdrop' src='https://raw.githack.com/NFaurass/LaCasaDePapel/master/S" + season_val + "E" + episode_val + ".jpg'/></a></div><div class='info'><div><div class='title'><div class='wrapper'><span class='episode_number'>" + episode_val + " -  </span><h3><a episode='" + episode_val + "' season='" + season_val + "' title='La Casa De Papel: Episode " + episode_val + " -  Season " + season_val + "'> " + episoden_val + "</a></h3></div></div><div class='overview'><p>" + Overview_val + "</p></div></div></div></div></div></button>");
                      });
                  });
                  var userDataRef = reftp.orderByKey();
                  userDataRef.once("value").then(function (snapshot) {
                      snapshot.forEach(function (childSnapshot) {
                          var key = childSnapshot.key;
                          var childData = childSnapshot.val();
                          var episoden_val = childSnapshot.val().episoden;
                          var Image_val = childSnapshot.val().Image;
                          var Link_val = childSnapshot.val().Link;
                          var Overview_val = childSnapshot.val().Overview;
                          $("#episoden").append(episoden_val);
                          $("#Image").append(Image_val);
                          $("#Link").append(Link_val);
                          $("#Overview").append(Overview_val);
 $("#LCDPTP").append("<button class='bcard' id='ButtonCard-" + episoden_val + "' onclick='Watchtp();'><div class='card'><div class='episode closed'><div class='image'><a episode='" + episoden_val + "' title='La Casa De Papel: " + episoden_val + "'><img alt='" + episoden_val + "' class='backdrop' src='https://raw.githack.com/NFaurass/LaCasaDePapel/master/lcdptp.jpg'/></a></div><div class='info'><div><div class='title'><div class='wrapper'><h3><a episode='" + episoden_val + "' title='La Casa De Papel: " + episoden_val + "'> " + episoden_val + "</a></h3></div></div><div class='overview'><p>" + Overview_val + "</p></div></div></div></div></div></button>");
                      });
                  });
                });
