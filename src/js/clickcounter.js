document.querySelector('.myBtn2').style.display= 'none';
        document.querySelector('.myBtn22').style.display= 'none';
        document.querySelector('.myBtn33').style.display= 'none';
        document.querySelector('.myBtn333').style.display= 'none';
        document.querySelector('.mygamedone').style.display= 'none';
         document.querySelector('.mygamedone2').style.display= 'none';
        document.querySelector('.finsh').style.display= 'none';
        var clicks = 0; 
        var sum=0;
        var count1=0;
        var count2=0;
        var flag =0;
        var flag2 =0;
        var total=0;
        
        function refreshPage(){
    window.location.reload();
} 
        
        
        
      var gameover=setInterval( function() {myGameOver()} , 1000);
        var i=30;
        function myGameOver()
        {
           if(i == -1)
               
               {
                    clearInterval(gameover);
                   // document.querySelector('.game').style.display= 'block';
                    document.getElementById("re").innerHTML = 0;
                  
     document.querySelector('.gameOver').style.left= '220%';
     document.querySelector('.gameOver').style.top= '-230%';
     document.querySelector('.gameOver').style.fontSize= '70px';
     document.getElementById("re").innerHTML = "Game Over";
                   
                   document.querySelector('.mygamedone').style.display= 'block';
                   document.querySelector('.mygamedone2').style.display= 'block';
                   document.querySelector('.finsh').style.display= 'block';
                   clearTimeout(myvar);
               }
              
            else{
               document.getElementById("re").innerHTML = i;
            
             i--; 
            }
             
            
            
        }  
        
        
        
        
        
document.getElementById("myBtn").addEventListener('click',function () {
    
    if(flag2 == 1.2)
    clicks += 1.2;
    else if(flag2 >= 1.4 )
    clicks += 1.4 * 1.4 ;
    else clicks +=1;
    
    if(clicks <= 10)
        {
            Math.floor(clicks);
       count1= document.getElementById("msg").innerHTML=clicks;
        }

    else
        {
            sum +=1;
             Math.floor(clicks);
            count1= document.getElementById("msg").innerHTML=clicks;
           count2= document.getElementById("msg2").innerHTML=sum;
            
            if(flag == 0)
            document.querySelector('.myBtn2').style.display= 'block';
            if(clicks >= 25 )
                {
                    
                     document.querySelector('.myBtn33').style.display= 'block';
                   
                }
         else    if(clicks >= 50)
                {
                    
                     document.querySelector('.myBtn33').style.display= 'block';
                   
                }
            if(clicks >= 1000){
                document.querySelector('.myBtn22').style.display= 'block';
            }
            
        }
    
});
        
       
        
            
        
   var btn2 =document.getElementById("btn2") ;
        
        btn2.onclick=function() {
       //     alert('button is clicked');
        clicks -= 10;   
          total +=10;
           document.getElementById("score-0").innerHTML=total;
           flag=1;
             Math.floor(clicks);
            document.getElementById("msg").innerHTML= clicks;
         //  document.querySelector('.myBtn2').style.display= 'none';
               document.querySelector('.myBtn2').style.left= '230%';
            document.querySelector('.myBtn2').style.top= '10%';
            
            
          // window.myBtn2.style.left =window.event.clientX-110;
            
            
            
                      flag2 = 1.4
                      document.querySelector('.myBtn33').style.display= 'block';
             if(clicks >= 1000){
                document.querySelector('.myBtn22').style.display= 'block';
            }
           
        }
        
       
        
        
         btn22 =document.getElementById("btn22") ;
        
        btn22.onclick=function() {
       //     alert('button is clicked');
        clicks -= 1000;   
           total +=1000;
             document.getElementById("score-0").innerHTML=total;
           flag=2;
             Math.floor(clicks);
            document.getElementById("msg").innerHTML= clicks;
            if(clicks >= 1000){
                document.querySelector('.myBtn22').style.display= 'block';
                
                
            }
            else{
               document.querySelector('.myBtn22').style.display= 'block';
                document.querySelector('.myBtn22').style.left= '230%';
            document.querySelector('.myBtn22').style.top= '10%';
            }
             
           // document.querySelector('.myBtn2').style.display= 'none';
            document.querySelector('.myBtn2').style.left= '230%';
            document.querySelector('.myBtn2').style.top= '10%';
            
            if(clicks >= 25 && clicks >= 50)  
                  {
                      flag2 = 1.2
                      document.querySelector('.myBtn33').style.display= 'block';
                  }
            else if (clicks >= 50 ) 
                {
                      flag2 = 1.4
                      document.querySelector('.myBtn33').style.display= 'block';
                  }
            
        }
        
        
        
        
        var btn33 =document.getElementById("btn33") ;
        
        btn33.onclick=function() {
     if(flag2 == 0 && clicks >=25)
         {
              clicks -= 25;  
              total +=25;
              document.getElementById("score-0").innerHTML=total;
           clicks += 1.2;
           flag2=1.2;
              Math.floor(clicks);
            document.getElementById("msg").innerHTML= clicks;
             document.querySelector('.myBtn33').style.display= 'block';
         // document.write('<button class="myBtn33 mybutton mybutton2">Compounder</button>');
         // window.write('<button class="myBtn33 mybutton mybutton2">Compounder</button>');
            
             
       //      var btn = document.createElement("BUTTON");   
        //         btn.innerHTML = 'Compounder';                   
        //          document.body.appendChild(btn); 
     //   btn.className = "mybutton";
             
       //      document.querySelector('.mybutton').style.left= '230%';
      //    document.querySelector('.mybutton').style.top= '70%';
            
             
              document.querySelector('.myBtn333').style.display= 'block';
             document.querySelector('.myBtn333').style.left= '230%';
          document.querySelector('.myBtn333').style.top= '130%';
             
         }
           
        else if(( flag2 == 1.2 || flag2 ==1.4) && clicks >=50)
                {
                    clicks -= 50; 
                     total +=50;
                     document.getElementById("score-0").innerHTML=total;
                     clicks += 1.4;
                     flag2=1.4;
                     Math.floor(clicks);
            document.getElementById("msg").innerHTML= clicks;
             document.querySelector('.myBtn33').style.display= 'block';
                    
                    document.querySelector('.myBtn333').style.display= 'block';
             document.querySelector('.myBtn333').style.left= '230%';
          document.querySelector('.myBtn333').style.top= '130%';
                }
            
            else
                alert('you do not have enough ');
                       
        }
        
        
        
        
            
        
        var sbtn=0
      var myvar = setInterval(function() {myTimer()}, 1000);
 var x=0;
function myTimer()
  {
      document.getElementById("msg3").innerHTML=x;
      
      
      if(flag == 1)
          {
           //x+=100;   
              clicks +=100;
               Math.floor(clicks);
               document.getElementById("msg").innerHTML= clicks ;
              
             if(clicks >= 1000) 
                  document.querySelector('.myBtn22').style.display= 'block';
          }
      
      if(flag == 2)
          {
           //x+=100;   
              clicks +=200;
               Math.floor(clicks);
               document.getElementById("msg").innerHTML= clicks ;
              
             if(clicks >= 1000) 
                 {
                     document.querySelector('.myBtn22').style.display= 'block';
               document.querySelector('.myBtn22').style.left= '230%';
            document.querySelector('.myBtn22').style.top= '70%';
                 }
               
          }
     
  }            
   
        
 