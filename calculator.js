let p = document.getElementById('p')
let q = document.getElementById('q')
let r = document.getElementById('r')

let input = document.getElementById('input')

function addnum(para){
    if (q.innerHTML == ''){
    
    p.innerHTML += para
    input.value += para
    }
 
    else if (q.innerHTML == '+'||'-'||'*'||'/'||'%'||'-'){
        r.innerHTML += para
        input.value += para
    }
}










    function addSym(val){
    q.innerHTML = val
    input.value = ''

    }

    function equal(){
        if(q.innerHTML == '+'){
            let ans = Number(p.innerHTML) + Number(r.innerHTML)
            input.value = ans
            
        }
        else if(q.innerHTML == '-'){
            let ans = Number(p.innerHTML) - Number(r.innerHTML)
            input.value = ans
            
        }
        else if(q.innerHTML == '*'){
            let ans = Number(p.innerHTML) * Number(r.innerHTML)
            input.value = ans
            
        }
        else if(q.innerHTML == '/'){
            let ans = Number(p.innerHTML) / Number(r.innerHTML)
            input.value = ans
            
        }
        else if(q.innerHTML == '%'){
            let ans = Number(p.innerHTML) % Number(r.innerHTML)
            input.value = ans
            
        }
   }

   function sqrRoot(){
      let ans = Math.sqrt(
        Number (p.innerHTML)
      )
      input.value = ans
      p.innerHTML = ans
   }

   function sqr(){
      let ans = Number(p.innerHTML**2)
      
      input.value = ans
      p.innerHTML = ans
   }
   
   function inverse(){
      let ans = Number(1 / p.innerHTML)
      
      input.value = ans
      p.innerHTML = ans
   }









function removeChar(){
    let p1Content = q.textContent.trim();
    let p2Content = r.textContent.trim();
    let pContent = p.textContent.trim();
    if (p1Content !== '' && p2Content !== '') {
    r.innerHTML = p2Content.slice(0, -1);
    input.value =  p2Content.slice(0, -1);
}

else if (p1Content === '' && p2Content === '' && pContent !== '') {
    p.innerHTML = pContent.slice(0, -1);
    input.value = pContent.slice(0, -1);
}
}

function resetAll(){
    // let C = q.textContent.trim();
  p.innerHTML = p.innerHTML.slice(0, 0)
  q.innerHTML = ('')
  r.innerHTML = r.innerHTML.slice(0, 0)
  input.value = input.value.slice(0, 0)


}
    