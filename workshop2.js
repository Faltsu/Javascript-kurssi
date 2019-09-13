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
