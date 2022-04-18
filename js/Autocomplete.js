function   billingFunction  () {
    
    if(document.getElementById("same").checked==true){
         var name1_fromuser1, code1_fromuser1
         code1_fromuser1 = document.querySelector("#shippingZip").value;
         name1_fromuser1 = document.querySelector("#shippingName").value;
         document.getElementById('billingName').value = name1_fromuser1;
         console.log(code1_fromuser1, name1_fromuser1)
         document.getElementById('billingZip').value = code1_fromuser1; 
    }      
    if(document.getElementById("same").checked!=true){
        x = '';
        y = ''
        document.querySelector("#shippingName").value =x;
        document.querySelector("#shippingZip").value =y;
    }    
  }