import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'
import { getDatabase , ref, child, get, set,push, update} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js'

const firebaseConfig = {
  apiKey: "AIzaSyAEkEU70SmfAWdcAUgQ66YiL5bkR30GEGw",
  authDomain: "parkinga-244a9.firebaseapp.com",
  databaseURL: "https://parkinga-244a9-default-rtdb.firebaseio.com",
  projectId: "parkinga-244a9",
  storageBucket: "parkinga-244a9.appspot.com",
  messagingSenderId: "533369420066",
  appId: "1:533369420066:web:7f9d45d775713ea2d64d7b"
};

  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
  let plot1 = 0;
  let plot2 = 0;
  let plot3 = 0;
  let plot4 = 0;
  document.getElementById('parkAreaChose').addEventListener("change", function() {
  if (this.value == "1") {
              // plot1 = 0;
              const dbRef = ref(getDatabase());
                      get(child(dbRef, 'plot1/')).then((snapshot) => {
                        if (snapshot.exists()) {
                          plot1 = snapshot.val();
                        } else {
                          console.log("No data available");
                        }
                      }).catch((error) => {
                        console.error(error);
                      });

                      get(child(dbRef, 'plot2/')).then((snapshot) => {
                        if (snapshot.exists()) {
                          plot2 = snapshot.val();
                            document.getElementById("slotFree").innerHTML = (plot1+plot2).toString();
                        } else {
                          console.log("No data available");
                        }
                      }).catch((error) => {
                        console.error(error);
                      });

  }else if(this.value == "2"){
    const dbRef = ref(getDatabase());
            get(child(dbRef, 'plot3/')).then((snapshot) => {
              if (snapshot.exists()) {
                plot3 = snapshot.val();

              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            });

            get(child(dbRef, 'plot4/')).then((snapshot) => {
              if (snapshot.exists()) {
                plot4 = snapshot.val();
                document.getElementById("slotFree").innerHTML = (plot3+plot4).toString();
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            });

  }else{
     document.getElementById("slotFree").innerHTML = '0';
  }
});
const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    if(decodedText=="Parking A"){
                const dbRef = ref(getDatabase());
                        get(child(dbRef, 'plot1/')).then((snapshot) => {
                          if (snapshot.exists()) {
                            plot1 = snapshot.val();
                          } else {
                            console.log("No data available");
                          }
                        }).catch((error) => {
                          console.error(error);
                        });
                if(plot1==1) {
                     myFunction1();
                }else{
                        get(child(dbRef, 'plot2/')).then((snapshot) => {
                          if (snapshot.exists()) {
                            plot2 = snapshot.val();
                              // document.getElementById("slotFree").innerHTML = (plot1+plot2).toString();
                          } else {
                            console.log("No data available");
                          }
                        }).catch((error) => {
                          console.error(error);
                        });
                        if(plot2==1){
                          myFunction2();
                        }else{
                          myFunctionNo();
                        }
                      }
    }
    if(decodedText=="Parking B"){
      const dbRef = ref(getDatabase());
              get(child(dbRef, 'plot3/')).then((snapshot) => {
                if (snapshot.exists()) {
                  plot3 = snapshot.val();
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
      if(plot3==1) {
           myFunction1();
      }else{
              get(child(dbRef, 'plot4/')).then((snapshot) => {
                if (snapshot.exists()) {
                  plot4 = snapshot.val();
                    // document.getElementById("slotFree").innerHTML = (plot1+plot2).toString();
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
              if(plot4==1){
                myFunction2();
              }else{
                myFunctionNo();
              }
            }
    }
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// If you want to prefer back camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

// Select back camera or fail with `OverconstrainedError`.
html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);

function myFunction1() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar1");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
}
function myFunction2() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar2");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
}
function myFunction3() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar3");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
}
function myFunction4() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar4");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
}
function myFunctionNo() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar5");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
}

document.getElementById('bookBT').addEventListener('click',sendEmail());
function sendEmail() {
Email.send({
    Host : "smtp.mailtrap.io",
    Username : "2c12f875aec83b",
    Password : "4223c16385e7a1",
    To : 'bharatdeep.work@gmail.com',
    From : "bharatdeep.race@gmail.com",
    Subject : "Booking Confirmed",
    Body : "Booking is confirmed, Thank you for choosing Park-o-pedia"
}).then(
  message => alert(message)
);
}
