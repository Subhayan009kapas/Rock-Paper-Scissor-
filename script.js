// dark-light mode in the page

let darklight=document.querySelector(".dark-light");
darklight.style.position="relative";
darklight.style.right="0px";
let  mode="light";
let you=document.querySelector(".you");
darklight.addEventListener("click" ,()=>{
          if(mode=="light"){

                    document.body.style.background="black";
                    document.body.style.color="#00072D";
                    darklight.style.background="white";
                   
                    darklight.style.color="black";
                    mode="dark";
          }
          else{
                    document.body.style.background="white";
                    document.body.style.color="black";
                    darklight.style.background="black";
                    darklight.style.color="white";
                    darklight.style.border="3px solid white";
                    darklight.style.borderRadius="5px";
                    mode="light";
          }
})
// dark-light mode in the page
let a=document.querySelector(".head1");
a.prepend(darklight);


let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let comp_value=document.querySelector(".comp_value");
let user_value=document.querySelector(".user_value");
let result=document.querySelector(".result");
let user_count=0;
let comp_count=0;
const list=["rock" ,"paper" ,"scissor"];

// for rock
rock.addEventListener("click",()=>{
          const list_index= Math.floor(Math.random()*list.length);
          let cmp_choice=list[list_index];
          console.log("computer choice  "+cmp_choice);   
          window.alert("Computer Choice  "+cmp_choice);
          if(cmp_choice==="rock"){
                    
                    result.innerText="Match Draw ✌️";
                    result.style.background="darkblue";

          }
          else if(cmp_choice==="scissor"){
                    user_count++;
                    user_value.innerText=user_count;
                    result.innerText="Congratulation ! 🤩You Win👍";
                    result.style.background="green";
                    result.style.border="5px solid red";
          }
          else{
                    comp_count++;
                    comp_value.innerText=comp_count;
                    result.innerText=" Computer Win🥲";
                    result.style.background="red";
          }
})

// for paper
paper.addEventListener("click",()=>{
          const list_index= Math.floor(Math.random()*list.length);
          let cmp_choice=list[list_index];
          window.alert("Computer Choice  "+cmp_choice);
          console.log("computer choice  "+cmp_choice);   
          
          if(cmp_choice==="paper"){
                    
                    result.innerText="Match Draw ✌️";
                    result.style.background="darkblue";
          }
          else if(cmp_choice==="rock"){
                    user_count++;
                    user_value.innerText=user_count;
                    result.innerText="Congratulation ! 🤩You Win👍";
                    result.style.background="green";
                    result.style.border="5px solid red";
          }
          else{
                    comp_count++;
                    comp_value.innerText=comp_count;
                    result.innerText=" Computer Win🥲";
                    result.style.background="red";

          }
          
})

// for scissor

scissor.addEventListener("click",()=>{
          const list_index= Math.floor(Math.random()*list.length);
          let cmp_choice=list[list_index];
          window.alert("Computer Choice  "+cmp_choice);
          console.log("computer choice  "+cmp_choice);   
          
          if(cmp_choice==="scissor"){
                    
                    result.innerText="Match Draw ✌️";
                    result.style.background="darkblue";
          }
          else if(cmp_choice==="paper"){
                    user_count++;
                    user_value.innerText=user_count;
                    result.innerText="Congratulation ! 🤩You Win👍";
                    result.style.background="green";
                    result.style.border="5px solid red";
          }
          else{
                    comp_count++;
                    comp_value.innerText=comp_count;
                    result.innerText=" Computer Win🥲";
                    result.style.background="red";

          }
          
})

let exit=document.querySelector(".exit");
exit.addEventListener("click",()=>{
          if(confirm("Do you  want to close the window ?")){
                    window.close();
          }
       

})









