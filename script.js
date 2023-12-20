let fe=document.querySelector('#va');

const inc=()=>{
     let val=parseInt(fe.innerText);
        val=val+1;
        fe.innerText=val;
};
const dec=()=>{
    let val=parseInt(fe.innerText);
       val=val-1;
       fe.innerText=val
};