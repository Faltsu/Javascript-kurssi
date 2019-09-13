<script>
function repeatingText() {
for (var i=0; i<50; i++){document.write("repeatingText<br>")};
}
</script>

<script>
function browser() {
if (navigator.appCodeName="Mozilla"){
location.href="http://mozilla.org"
}
else{
location.href="http://www.microsoft.com";
}
}
</script>

<script>
function student(){
var i=confirm("Oletko opiskelija");
if (i==false){
  document.write('Sorry, this page is for students only.')
}
else{
  document.write('Welcome student!')
  }
}
</script>

<script>
var images =[
"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
"http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
];
var number = Math.round(Math.random())*2;
document.write(img src=images[number])
</script>
