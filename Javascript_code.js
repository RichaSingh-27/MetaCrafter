
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