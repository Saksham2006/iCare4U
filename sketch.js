var child, parent, database;
var appState , form,start,app;
var chat, settings, contacts, order, reminder;

function setup(){
    canvas = createCanvas(300,500);
    database = firebase.database();
    appState = "start";
    start= new Start();
    start.page();
}
function draw(){
    background(173,216,230);
}