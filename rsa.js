let array=[]
let p1;
let p2;
let n;
let f;
let a;
let e;
let d;
let cipher=[]
let original=[]

function mySubmit(){
let message=document.getElementById("message").value;
let num=document.getElementById("max").value

if (message!=parseInt(message) || message>10000){
  alert("Το μήνυμα δεν έχει σωστή μορφή (ακέραιος αριθμός έως 10000)")
  return;
}

if(num!=parseInt(num)||num>10000){
alert("Το όριο που θέσατε δεν έχει τη σωστή μορφή (ακέραιος αριθμός έως 10000)")
return;
}

let check=document.getElementById("check").checked
Clean(check)

//message=message.split("")


if(check==false){ 
let array=FindPrime(num)
findP1P2(array,message)
n=p1*p2
f=(p1-1)*(p2-1)
let numED=f+1
a=(factors(numED))
a.pop()
a.shift()
let count=0
while (a.length<=1 && count<10){
a=[]
let arrayED=(CalcED(10))
let indexED=Math.floor(Math.random()* arrayED.length)
numED=arrayED[indexED]
a=(factors(numED))
a.shift()
a.pop()
count++
}

e=a[0]
d=numED/e
}
console.log("p1= "+p1)
console.log("p2= "+p2)
console.log("n= "+n)
console.log("f= "+f)
console.log("e= "+e)
console.log("d= "+d)

cipher=encrypt(message,e,n)
console.log("my cipher")
console.log(cipher.join(""))
original=decrypt (cipher,d,n)
console.log("my original")
console.log(original.join(""))

document.getElementById("p").innerText= p1
document.getElementById("q").innerText= p2
document.getElementById("n").innerText= n
document.getElementById("f").innerText= f
document.getElementById("e").innerText= e
document.getElementById("d").innerText= d
document.getElementById("encrypt").innerText= cipher.join("")
document.getElementById("decrypt").innerText= original.join("")
}

function FindPrime(limit){
    let primearray=[2];
    for (i=3;i<limit;i+=2){
        let myResult=true;
        for (j=0;j<primearray.length;j++){
            let a=primearray[j];
             if (a>i){
                 break;
             }
            let y=i%a;
            
           if (y==0){
            myResult=false;
                }

            }        
       
            if (myResult==true){
                primearray.push(i)
            }    
        
        } 
    primearray.shift()
    primearray.shift()
    primearray.shift()
    primearray.shift()
    return primearray;
    }


function findP1P2(array,message){
let indexp1=Math.floor(Math.random()* array.length)
let indexp2=Math.floor(Math.random()* array.length)
p1=array[indexp1]
p2=array[indexp2]
let tern=false
if (indexp1>indexp2){
  tern=true
}
let count=0
while (indexp1==indexp2 || p1*p2<message){
  if (tern){
  indexp2++
  }else{
    indexp1++
  }
p2=array[indexp2]
count++
if (count>10){
  break
}
}
}

function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  
     return num_factors;
    }

function CalcED (num){
let arrayED=[]
for (i=1;i<num;i++){
    arrayED.push(i*f+1)
}
return arrayED
}


function expmod( base, exp, mod ){
console.log("expmod start")
    if (exp == 0) return 1;
    if (exp % 2 == 0){
      return Math.pow( expmod( base, (exp /2), mod), 2) % mod;
    }
    else {
      return (base * expmod( base, (exp - 1), mod)) % mod;
    }
  }



function encrypt(message,e,n){
  console.log("encrypt start")
 for (i=0;i<1;i++){
     let num=message
     console.log("this is num")
     console.log(num)
     let encr=expmod(num,e,n)
     console.log("this is encr")
     console.log(encr)
     cipher.push(encr)
 }
 
 return cipher

}



function decrypt(cipher,d,n){
console.log("decrypt start")
for (i=0;i<cipher.length;i++){
let origin=expmod(cipher[i], d, n)
original.push(origin)
}

return original
 }

 
 function Clean(check){
   console.log("start clean")
  document.getElementById("max").innerHTML=""
  document.getElementById("message").innerHTML=""
  document.getElementById("p").innerHTML=""
  document.getElementById("q").innerHTML=""
  document.getElementById("n").innerHTML=""
  document.getElementById("f").innerHTML=""
  document.getElementById("e").innerHTML=""
  document.getElementById("d").innerHTML=""
  document.getElementById("encrypt").innerHTML=""  
  document.getElementById("decrypt").innerHTML=""
if(check==false){
p1=0;
p2=0;
n=0;
f=0;
a=0;
e=0;
d=0;
}
cipher=[]
original=[]  
}