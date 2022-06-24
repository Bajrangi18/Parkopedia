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

  document.getElementById('parkAreaChose').addEventListener("change", function() {
  if (this.value == "1") {
              const dbRef = ref(getDatabase());
                      get(child(dbRef, 'plot1/')).then((snapshot) => {
                        if (snapshot.exists()) {
                          var plot1 = snapshot.val();
                        } else {
                          console.log("No data available");
                        }
                      }).catch((error) => {
                        console.error(error);
                      });

                      get(child(dbRef, 'plot2/')).then((snapshot) => {
                        if (snapshot.exists()) {
                          var plot2 = snapshot.val();
                        } else {
                          console.log("No data available");
                        }
                      }).catch((error) => {
                        console.error(error);
                      });
              document.getElementById("slotFree").innerHTML = plot1+plot2;
  }else if(this.value == "2"){
    const dbRef = ref(getDatabase());
            get(child(dbRef, 'plot3/')).then((snapshot) => {
              if (snapshot.exists()) {
                var plot3 = snapshot.val();
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            });

            get(child(dbRef, 'plot4/')).then((snapshot) => {
              if (snapshot.exists()) {
                var plot4 = snapshot.val();
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            });
            document.getElementById("slotFree").innerHTML = plot3+plot4;
  }else{
     console.log('No Selected');
  }
});
