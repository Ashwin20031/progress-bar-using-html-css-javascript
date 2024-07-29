
let count=0
function setcolor(){
     const one=document.querySelector(".one")
     const two=document.querySelector(".two")
     const three=document.querySelector(".three")
     const four=document.querySelector(".four")
     const five=document.querySelector(".five")
     const line=document.querySelector("section")

     total=[one,two,three,four,five]
     
     
     if(count===5){
         count=0
         for(let i = 0 ; i <=5;i++){
             total[i].style.backgroundColor="rgb(220, 220, 220)"
             line.style.width=0
            }
        }
        if(count==4)line.style.backgroundColor="green"
        
        for(let i = 0 ; i <=count;i++){

            total[i].style.backgroundColor="green"
            line.style.width=10*count+"rem"
        }


        count+=1
    
    }
    
    function removecolor(){
        
        const one=document.querySelector(".one")
        const two=document.querySelector(".two")
        const three=document.querySelector(".three")
        const four=document.querySelector(".four")
        const five=document.querySelector(".five")
        
        total=[one,two,three,four,five]

    
        total[count-1].style.backgroundColor="rgb(220, 220, 220)"
        line.style.width=5*count+"rem"

        
        count-=1
        if(count===-1){
            count=0
        }
  
    

}