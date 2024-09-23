# NFTs creation

This JavaScript program is a simple Nfts creation program that demonstrates the basic syntax and functionality of the JavaScript programming language. The purpose of this program is to serve as a starting point for those who are new to JavaScript programming language and want to get a feel for how it works.

## Description

This program is a simple NFTs creation program written in JavaScript, a scripting language used to develop web pages. The program has a single variable named NFTs which is of an array type and can store multiple values. We have given four parameter to the NFTs variable which are Name,Course,Branch and Year.Now we have created three function:- mintNFT,listNFT and getTotalSupply.The first function is to store the values in NFT variable and it has four parameters in it(Name,Course,Branch and Year) and the second function is list the stored values of NFT and the third one is to count the total number of NFTs present.

## Getting Started

### Executing program

To run this program, you can use any online or offline JavaScript interpreter,GDB an online JAvaScript IDE which I have used. To get started, go to the Remix website at "https://www.onlinegdb.com".

Once you are on the GDB website,select the language as javascript. Copy and paste the following code into the file:

```javascript

const NFTs=[]

function mintNFT (name,course,branch,year ) {
    const NFT ={
        "name":name,
        "course":course,
        "branch": branch,
        "year":year
        
    }
    NFTs.push(NFT);
    console.log("Pushed:"+name);
}
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("\n NAME: "+NFTs[i].name);
        console.log("\n Course: "+NFTs[i].course);
        console.log("\n branch: "+NFTs[i].branch);
        console.log("\n Year: "+NFTs[i].year);
    }

}
function getTotalSupply() {
    console.log(NFTs.length);
}
mintNFT("RUCHI","CSE","B.E","3RD");
listNFTs();
getTotalSupply();

```

To compile the code, click on the "Run" tab in the left-hand sidebar. 

Once the code is compiled, you can see the output on the output terminal
   
