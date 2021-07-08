//Button.css  
#btn
{
width:96;
height:48;
text-size:24px;
}

//Button.js
document.addEventListener('DOMContentLoaded', () => {
     const button = document.getElementById('btn');
 button.addEventListener('click', (e) => {
           const count = Number(e.currentTarget.innerText) + 1;
       e.currentTarget.innerText = count;  }); });

//index.html
<!DOCTYPE html> 
<html>     
  <head>         
     <meta charset="utf-8">
     <title>Button</title>
     <style rel="stylesheet" href="css/buttn.css" type="text/css">
  </head>       
   <body>
     <button id="btn" type="button">0</button>
     <script src="js/button.js" type="text/javascript"></script> 
   </body> 
</html>
