let btnText = document.querySelector('btnText');
let btnHTML = document.querySelector('btnHTML1');
let content = document.querySelector('.content');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let startbtn = document.querySelector('#startbtn');



let RM='<p>sd</p><img src ="YOGA.PNG">';
let KS='<p>dasd</p><img src ="KS.PNG">';
let RPS='<p>dasd</p><img src ="rps.PNG">';
let KA='<p>dasd</p><img src ="KA.PNG">';
let MG='<p>sd</p><img src ="MG.PNG">';
let NN='<p>dasd</p><img src ="NN.PNG">';
let NP='<p>dasd</p><img src ="NP.PNG">';
let RK='<p>dasd</p><img src ="RK.PNG">';
let SK='<p>dasd</p><img src ="SK.PNG">';
let MN='<p>dasd</p><img src ="MN.PNG">';
let TT='<p>dasd</p><img src ="TT.PNG">';
 let points=0;

 function start()
{
   
   var img = document.getElementById('image');
  img.src='NP.png'
    const randomMove=Math.random();
    alert('LETS START');
    if(randomMove>.7)
        {
            computerMove= 'King';
            img.src='MN.png';
            btn1.innerHTML="2300"+RM;
            btn2.innerHTML="1000"+KS;
            btn3.innerHTML="100"+RPS;
        }
    
        
        else if(randomMove<.8 && randomMove >.3)
        {
           
           img.src='YOGA.png';
           btn1.innerHTML= "1000"+KA;
            btn2.innerHTML= "200"+MN;
            btn3.innerHTML= "100"+NN;
        }
        else
        {
            img.src='RPS.png'
            computerMove='thief'
            btn1.innerHTML= "1000"+NP;
            btn2.innerHTML= "500"+RK;
            btn3.innerHTML="300"+SK;
        }
}

function King()
{
    
    let computerMove='';
   
    const randomMove=Math.random();
    alert(playerMove='King');
    
    if(randomMove>=.9)
    {
        computerMove= 9;
        
        points=points+100;
        content.innerHTML =  points;
    }

    
    else if(randomMove<.9 && randomMove >.8)
    {
       computerMove=8;
        
        points=points+10;
        content.innerHTML =  points;
    }
    else if(randomMove<.8 && randomMove >.7)
        {
           computerMove=7;
           
            points=points+35;
            content.innerHTML =  points;
        }
        else if(randomMove<.7 && randomMove >.6)
            {
               computerMove=6;
                
                points=points+44;
                content.innerHTML =  points;
            }
            else if(randomMove<.6 && randomMove >.5)
                {
                   computerMove=5;
                   
                    points=points+15;
                    content.innerHTML =  points;
                }
            else if(randomMove<.5 && randomMove >.4)
                {
                   computerMove=4;
                  
                    points=points+100;
                    content.innerHTML =  points;
                }
                else if(randomMove<.4 && randomMove >.3)
                    {
                       computerMove=3;
                       
                        points=points+100;
                        content.innerHTML =  points;
                    }
                else if(randomMove<.3 && randomMove >.2)
                    {
                       computerMove=2;
                        
                        points=points+100;
                        content.innerHTML =  points;
                    }
    else if(randomMove <.2)
    {
        startbtn.innerHTML = "GAME OUT";
        if (points>500) {{

            content.innerHTML = btn1.innerHTML+btn2.innerHTML;
            if(randomMove<.2 && randomMove >.1)
                {
                     
                    alert("claimbonus")
                }
                else if(points<500 && points<200){
                    
                    
                    content.innerHTML = btn2.innerHTML; 
                    // if(randomMove<.2 && randomMove >.1)
                    //     {
                             
                    //         alert("NOBONUS")
                    //     } 
                    //     else if(points<200){
                            
                       
                    // content.innerHTML = btn1.innerHTML; 

                    //     }
                        
                        
                    
                
                  }}
                // else if(points>500 && points<200) {{
                //     content.innerHTML = btn1.innerHTML+btn2.innerHTML;
                //     if(randomMove<.2 && randomMove >.1)
                //         {
                //             img.src='MN.png';  
                //             alert("claimbonus")
                //         }
                //         else{
                //             alert("nobonus")
                //             img.src='NN.png';  
                            
                //         } 
                // }}
                // else(points>200) 
                //  {
                //     content.innerHTML = btn1.innerHTML ;
                // }
        points=0;}
    }
}
        
        
    
//     playerMove='King';

//     if(computerMove=playerMove)
//     {
//         content.innerHTML="game out";
// }

//  else 
//  {
//     points=points + 100;
//  }
 alert(points);
function Queen()
{
    
    let computerMove='';
    let points=0;
    const randomMove=Math.random();
    
    if(randomMove>=.8)
    {
        
        var img = document.getElementById('image');
        img.src='YOGA.png';

    }
    else if(randomMove<.8 && randomMove >.5)
    {
       
        var img = document.getElementById('image');
        img.src='RPS.png';
    }
    else
    {
        var img = document.getElementById('image');
    img.src='TT.png';
    }
    
// playerMove='queen';

//     if(computerMove='queen')
//     {
//         content.innerHTML="game out";
// }

//  else 
//  {
//     points=points + 100;
//  }
 alert(points);
}
function Cop(){
    alert("quit and take what you got");
    var img = document.getElementById('image');
    img.src='NP.png';

    content.innerHTML=btn3.innerHTML;
    
    
}
// btnHTML.addEventListener('click',()=> {
//     content.innerHTML = myString;
// });