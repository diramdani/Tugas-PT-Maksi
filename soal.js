console.log ('Hello world!!!');

for(let i=1; i<11; i++){
    console.log(i);
}
function isprime(n) 
{
    if (n < 2)
    return `${n} is not a prime number`

    for (let i=2; i < n; i++)
    {
        if (n%i === 0){
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}
console.log(isprime(23));

function isnumber(n)
{
    if (n>0)
    {
        return `${n} The number is positive`
    }
    else if(n === 0){
        return `${n} The number is zero`
    }
    else 
    {
        return `${n} The number is negative`
    }
}
console.log(isnumber(5));

let text = "hello world";
let upperCaseText = text.toLocaleUpperCase()
console.log(upperCaseText)

let word = "hello world";
let word1 = kata.charAt(9);
console.log(word1);

let word3 = ["H","E","L","L","O"];
for(const word4 of word3)
{
console.log(word4);
}

const nilai =[5, 9, 13, 43, 2, 7];
const nilai_paling_rendah = Math.min(...nilai);
console.log(nilai_paling_rendah);

let nomor = [5, 9, 13, 43, 2, 7];
let total = 0;
for(i=0; i<nomor.length; i++)
{
    total += nomor[i]
}
console.log(total);

let angka =[5, 9, 13, 43, 2, 7];
let angka1 = angka.sort(function(a,b)
{
    return a-b;
})
console.log(angka1);