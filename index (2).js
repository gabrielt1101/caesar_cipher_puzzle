//the caesar cipher class to run the decoder
let cipher = (str) => {
//letters are shifted by 3
let shift = {a:'d', b:'e',c:'f',d:'g',e:'h', f:'i',g:'j',h:'k',i:'l', j:'m',k:'n',l:'o',m:'p', n:'q',o:'r',p:'s',q:'t', r:'u',s:'v',t:'w',u:'x', v:'y',w:'z',x:'a',y:'b',z:'c',}

//makes all of the letters lowercase for the inputted text
str = str.toLowerCase();
//used to collect the encrypted letters
 let encrypt = '';
 //a for loop runs through all of the letters from the text to encrypt the message 
  for(let i = 0 ; i < str.length; i++){
    encrypt += shift[str[i]];
  }
//returns the encrypted text
  return encrypt;

}
//input: "ILoveTTP" output:"loryhwws"
console.log(cipher('ILoveTTP'));

