import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-QdNJ9mo-n4FjE8Il54rmzxkjh1A93lg",
    authDomain: "timetable-8c595.firebaseapp.com",
    databaseURL: "https://timetable-8c595-default-rtdb.firebaseio.com",
    projectId: "timetable-8c595",
    storageBucket: "timetable-8c595.appspot.com",
    messagingSenderId: "306090504967",
    appId: "1:306090504967:web:c625a7bca5ead73f6b0ba2",
    measurementId: "G-HPRBW3RHL8"
};
var year = sessionStorage.getItem("year");
var sec = sessionStorage.getItem("sec") == "general" ? "genral" : sessionStorage.getItem("sec");
var num = sessionStorage.getItem("num");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const x = document.getElementById("sat")
const db = getDatabase()
const dbref = ref(db);
const sepc=sessionStorage.getItem("spec");
var location ;
if(sepc!="")
{
location= `/tables/${sec}/${year}/${sepc}/section${num}`;
}
else{
    location= `/tables/${sec}/${year}/section${num}`;
}

console.log(location)
get(child(dbref, location)).
    then((data) => {
        if (data.exists()) {
            console.log(data.val())

            let sat = data.val().saturday;
            let sun = data.val().sunday;
            let mon = data.val().monday;
            let tus = data.val().tuseday;
            let wen = data.val().wednesday;
            let thr = data.val().thursday;
            //********************************************************************** */
            // sorry about this hardcoded shit but i was in hurry :)
            //********************************************************************** */

            //sat 

            document.getElementById("sat-11pm").
                innerText = (sat["11pm"].name === "" ? "- - -" : sat["11pm"].name) + "\r\n" +
                (sat["11pm"].teacher === "" ? "- - -" : sat["11pm"].teacher) + "\r\n" +
                (sat["11pm"].place === "" ? "- - -" : sat["11pm"].place);
            document.getElementById("sat-9pm").
                innerText = (sat["9pm"].name === "" ? "- - -" : sat["9pm"].name) + "\r\n" +
                (sat["9pm"].teacher === "" ? "- - -" : sat["9pm"].teacher) + "\r\n" +
                (sat["9pm"].place === "" ? "- - -" : sat["9pm"].place);
            document.getElementById("sat-1pm").
                innerText = (sat["1pm"].name === "" ? "- - -" : sat["1pm"].name) + "\r\n" +
                (sat["1pm"].teacher === "" ? "- - -" : sat["1pm"].teacher) + "\r\n" +
                (sat["1pm"].place === "" ? "- - -" : sat["1pm"].place);
            document.getElementById("sat-3pm").
                innerText = (sat["3pm"].name === "" ? "- - -" : sat["3pm"].name) + "\r\n" +
                (sat["3pm"].teacher === "" ? "- - -" : sat["3pm"].teacher) + "\r\n" +
                (sat["3pm"].place === "" ? "- - -" : sat["3pm"].place);
            //sun
            document.getElementById("sun-11pm").
                innerText = (sun["11pm"].name === "" ? "- - -" : sun["11pm"].name) + "\r\n" +
                (sun["11pm"].teacher === "" ? "- - -" : sun["11pm"].teacher) + "\r\n" +
                (sun["11pm"].place === "" ? "- - -" : sun["11pm"].place);
            document.getElementById("sun-9pm").
                innerText = (sun["9pm"].name === "" ? "- - -" : sun["9pm"].name) + "\r\n" +
                (sun["9pm"].teacher === "" ? "- - -" : sun["9pm"].teacher) + "\r\n" +
                (sun["9pm"].place === "" ? "- - -" : sun["9pm"].place);
            document.getElementById("sun-1pm").
                innerText = (sun["1pm"].name === "" ? "- - -" : sun["1pm"].name) + "\r\n" +
                (sun["1pm"].teacher === "" ? "- - -" : sun["1pm"].teacher) + "\r\n" +
                (sun["1pm"].place === "" ? "- - -" : sun["1pm"].place);
            document.getElementById("sun-3pm").
                innerText = (sun["3pm"].name === "" ? "- - -" : sun["3pm"].name) + "\r\n" +
                (sun["3pm"].teacher === "" ? "- - -" : sun["3pm"].teacher) + "\r\n" +
                (sun["3pm"].place === "" ? "- - -" : sun["3pm"].place);
            //mon
            document.getElementById("mon-11pm").
                innerText = (mon["11pm"].name === "" ? "- - -" : mon["11pm"].name) + "\r\n" +
                (mon["11pm"].teacher === "" ? "- - -" : mon["11pm"].teacher) + "\r\n" +
                (mon["11pm"].place === "" ? "- - -" : mon["11pm"].place);
            document.getElementById("mon-9pm").
                innerText = (mon["9pm"].name === "" ? "- - -" : mon["9pm"].name) + "\r\n" +
                (mon["9pm"].teacher === "" ? "- - -" : mon["9pm"].teacher) + "\r\n" +
                (mon["9pm"].place === "" ? "- - -" : mon["9pm"].place);
            document.getElementById("mon-1pm").
                innerText = (mon["1pm"].name === "" ? "- - -" : mon["1pm"].name) + "\r\n" +
                (mon["1pm"].teacher === "" ? "- - -" : mon["1pm"].teacher) + "\r\n" +
                (mon["1pm"].place === "" ? "- - -" : mon["1pm"].place);
            document.getElementById("mon-3pm").
                innerText = (mon["3pm"].name === "" ? "- - -" : mon["3pm"].name) + "\r\n" +
                (mon["3pm"].teacher === "" ? "- - -" : mon["3pm"].teacher) + "\r\n" +
                (mon["3pm"].place === "" ? "- - -" : mon["3pm"].place);
            //tus
            document.getElementById("tus-11pm").
                innerText = (tus["11pm"].name === "" ? "- - -" : tus["11pm"].name) + "\r\n" +
                (tus["11pm"].teacher === "" ? "- - -" : tus["11pm"].teacher) + "\r\n" +
                (tus["11pm"].place === "" ? "- - -" : tus["11pm"].place);
            document.getElementById("tus-9pm").
                innerText = (tus["9pm"].name === "" ? "- - -" : tus["9pm"].name) + "\r\n" +
                (tus["9pm"].teacher === "" ? "- - -" : tus["9pm"].teacher) + "\r\n" +
                (tus["9pm"].place === "" ? "- - -" : tus["9pm"].place);
            document.getElementById("tus-1pm").
                innerText = (tus["1pm"].name === "" ? "- - -" : tus["1pm"].name) + "\r\n" +
                (tus["1pm"].teacher === "" ? "- - -" : tus["1pm"].teacher) + "\r\n" +
                (tus["1pm"].place === "" ? "- - -" : tus["1pm"].place);
            document.getElementById("tus-3pm").
                innerText = (tus["3pm"].name === "" ? "- - -" : tus["3pm"].name) + "\r\n" +
                (tus["3pm"].teacher === "" ? "- - -" : tus["3pm"].teacher) + "\r\n" +
                (tus["3pm"].place === "" ? "- - -" : tus["3pm"].place);
            // wen
            document.getElementById("wen-11pm").
                innerText = (wen["11pm"].name === "" ? "- - -" : wen["11pm"].name) + "\r\n" +
                (wen["11pm"].teacher === "" ? "- - -" : wen["11pm"].teacher) + "\r\n" +
                (wen["11pm"].place === "" ? "- - -" : wen["11pm"].place);
            document.getElementById("wen-9pm").
                innerText = (wen["9pm"].name === "" ? "- - -" : wen["9pm"].name) + "\r\n" +
                (wen["9pm"].teacher === "" ? "- - -" : wen["9pm"].teacher) + "\r\n" +
                (wen["9pm"].place === "" ? "- - -" : wen["9pm"].place);
            document.getElementById("wen-1pm").
                innerText = (wen["1pm"].name === "" ? "- - -" : wen["1pm"].name) + "\r\n" +
                (wen["1pm"].teacher === "" ? "- - -" : wen["1pm"].teacher) + "\r\n" +
                (wen["1pm"].place === "" ? "- - -" : wen["1pm"].place);
            document.getElementById("wen-3pm").
                innerText = (wen["3pm"].name === "" ? "- - -" : wen["3pm"].name) + "\r\n" +
                (wen["3pm"].teacher === "" ? "- - -" : wen["3pm"].teacher) + "\r\n" +
                (wen["3pm"].place === "" ? "- - -" : wen["3pm"].place);
            //thr
            document.getElementById("thr-11pm").
                innerText = (thr["11pm"].name === "" ? "- - -" : thr["11pm"].name) + "\r\n" +
                (thr["11pm"].teacher === "" ? "- - -" : thr["11pm"].teacher) + "\r\n" +
                (thr["11pm"].place === "" ? "- - -" : thr["11pm"].place);
            document.getElementById("thr-9pm").
                innerText = (thr["9pm"].name === "" ? "- - -" : thr["9pm"].name) + "\r\n" +
                (thr["9pm"].teacher === "" ? "- - -" : thr["9pm"].teacher) + "\r\n" +
                (thr["9pm"].place === "" ? "- - -" : thr["9pm"].place);
            document.getElementById("thr-1pm").
                innerText = (thr["1pm"].name === "" ? "- - -" : thr["1pm"].name) + "\r\n" +
                (thr["1pm"].teacher === "" ? "- - -" : thr["1pm"].teacher) + "\r\n" +
                (thr["1pm"].place === "" ? "- - -" : thr["1pm"].place);
            document.getElementById("thr-3pm").
                innerText = (thr["3pm"].name === "" ? "- - -" : thr["3pm"].name) + "\r\n" +
                (thr["3pm"].teacher === "" ? "- - -" : thr["3pm"].teacher) + "\r\n" +
                (thr["3pm"].place === "" ? "- - -" : thr["3pm"].place);

            const exclude = ['سكشن', 'محاضرة', 'مجموعة', 'عملي', 'نظري'];
            var subjct;
            var indexName;
            get(child(dbref, "matrial")).then(
                d => {
                    if (d.exists())
                        subjct = d.val();
                    var flag = true;
                    indexName = Object.keys(subjct);
                    console.log(indexName)
                    document.querySelectorAll('.link').forEach(e => {
                        
                        for(const n of indexName){
                            if (e.innerHTML.includes(n)) {
                                flag = false;
                                e.href = subjct[n]!=""?subjct[n]:"../pagenotefound.html";
                            break;
                                

                            }else {
                              
                                e.href = "../pagenotefound.html"
                            }
                        }
                       
                        

                    })
                })

                .catch(error => { console.log(error) })





        }
        else {
            window.location.href = "../pagenotefound.html"
        }
    }).catch((error) => {
        console.log(error)
    })  
sessionStorage.removeItem('spec')