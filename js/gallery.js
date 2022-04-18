function upDate(previewPic){
        var source = previewPic.getAttribute( "src" );
        var text = previewPic.getAttribute( "alt" );
        document.getElementById('image').style.backgroundImage = "url('" + source + "')";
        document.getElementById('image').innerHTML = text;
     
       }
   
function  unDo()  {
    document.getElementById('image').innerHTML = "Hoveer over an image below to dissplay heree."   
    /* return back value */
    document.getElementById('image').style.background = '#8e68ff';
}

