const btc =["0","0","0","0","btc"];
const eth =["0","0","0","0","eth"];
const usdt =["0","0","0","0","usdt"];
const bnb =["0","0","0","0","bnb"];
const ada =["0","0","0","0","ada"];
const xrp =["0","0","0","0","xrp"];
const sol =["0","0","0","0","sol"];
const matic =["0","0","0","0","matic"];
const doge =["0","0","0","0","doge"];
const dot =["0","0","0","0","dot"];
const trx =["0","0","0","0","trx"];
const shib =["0","0","0","0","shib"];
const avax =["0","0","100000","0","avax"];
const ltc =["0","0","0","0","ltc"];
const uni =["0","0","0","1000000","uni"];
const xlm =["0","0","0","0","xlm"];
const near =["0","0","0","10000","near"];
let symbol='₹'
window.addEventListener('load', () => {   
    refreshData()
    startTimer()
    sleep(2500).then(() => {
        document.getElementById('preloader').classList.add('remove');
    })
}); 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
function startTimer() {
    timer = setInterval(function() {
        refreshData();
    }, 5000);
}
function refreshData(){
    wazirx()
    coindcx()
    bitbns()
    zebpay() 
}
function wazirx(){
    url="https://boxing-lumberjack-12791.herokuapp.com/https://api.wazirx.com/api/v2/tickers"
    fetch(url, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
    .then(response =>{
        return (response.json());
    })
    .then(data =>{
        btc[0]=parseFloat(data['btcinr']['last']);
        eth[0]=parseFloat(data['ethinr']['last']);
        usdt[0]=parseFloat(data['usdtinr']['last']);
        bnb[0]=parseFloat(data['bnbinr']['last']);
        ada[0]=parseFloat(data['adainr']['last']);
        xrp[0]=parseFloat(data['xrpinr']['last']);
        sol[0]=parseFloat(data['solinr']['last']);
        matic[0]=parseFloat(data['maticinr']['last']);
        doge[0]=parseFloat(data['dogeinr']['last']);
        dot[0]=parseFloat(data['dotinr']['last']);
        trx[0]=parseFloat(data['trxinr']['last']);
        shib[0]=parseFloat(data['shibinr']['last']);
        avax[0]=parseFloat(data['avaxinr']['last']);
        ltc[0]=parseFloat(data['ltcinr']['last']);
        uni[0]=parseFloat(data['uniinr']['last']);
        xlm[0]=parseFloat(data['xlminr']['last']);
        near[0]=parseFloat(data['nearinr']['last']);
        document.getElementById("btc").children[1].textContent=symbol+btc[0];
        document.getElementById("eth").children[1].textContent=symbol+eth[0]
        document.getElementById("usdt").children[1].textContent=symbol+usdt[0];
        document.getElementById("bnb").children[1].textContent=symbol+bnb[0];
        document.getElementById("ada").children[1].textContent=symbol+ada[0];
        document.getElementById("xrp").children[1].textContent=symbol+xrp[0];
        document.getElementById("sol").children[1].textContent=symbol+sol[0];
        document.getElementById("matic").children[1].textContent=symbol+matic[0];
        document.getElementById("doge").children[1].textContent=symbol+doge[0];
        document.getElementById("dot").children[1].textContent=symbol+dot[0];
        document.getElementById("trx").children[1].textContent=symbol+trx[0];
        document.getElementById("shib").children[1].textContent=symbol+shib[0];
        document.getElementById("avax").children[1].textContent=symbol+avax[0];
        document.getElementById("ltc").children[1].textContent=symbol+ltc[0];
        document.getElementById("uni").children[1].textContent=symbol+uni[0];
        document.getElementById("xlm").children[1].textContent=symbol+xlm[0];
        document.getElementById("near").children[1].textContent=symbol+near[0];
        searchCoin()
    });
}
function coindcx(){
    url="https://api.coindcx.com/exchange/ticker"
    fetch(url)
    .then(response =>{
        return (response.json());
    })
    .then(data =>{
        for (let i = 0; i < data.length; i++) {
            let item =data[i];
            if(item['market']=="BTCINR"){
                btc[1]=parseFloat(item['last_price']);
                document.getElementById("btc").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="ETHINR"){
                eth[1]=parseFloat(item['last_price']);
                document.getElementById("eth").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="USDTINR"){
                usdt[1]=parseFloat(item['last_price']);
                document.getElementById("usdt").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="BNBINR"){
                bnb[1]=parseFloat(item['last_price']);
                document.getElementById("bnb").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="ADAINR"){
                ada[1]=parseFloat(item['last_price']);
                document.getElementById("ada").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="XRPINR"){
                xrp[1]=parseFloat(item['last_price']);
                document.getElementById("xrp").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="SOLINR"){
                sol[1]=parseFloat(item['last_price']);
                document.getElementById("sol").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="MATICINR"){
                matic[1]=parseFloat(item['last_price']);
                document.getElementById("matic").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="DOGEINR"){
                doge[1]=parseFloat(item['last_price']);
                document.getElementById("doge").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="DOTINR"){
                dot[1]=parseFloat(item['last_price']);
                document.getElementById("dot").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="TRXINR"){
                trx[1]=parseFloat(item['last_price']);
                document.getElementById("trx").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="SHIBINR"){
                shib[1]=parseFloat(item['last_price']);
                document.getElementById("shib").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="AVAXINR"){
                avax[1]=parseFloat(item['last_price']);
                document.getElementById("avax").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="LTCINR"){
                ltc[1]=parseFloat(item['last_price']);
                document.getElementById("ltc").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="UNIINR"){
                uni[1]=parseFloat(item['last_price']);
                document.getElementById("uni").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="XLMINR"){
                xlm[1]=parseFloat(item['last_price']);
                document.getElementById("xlm").children[2].textContent=symbol+item['last_price'];   
            }else if(item['market']=="NEARINR"){
                near[1]=parseFloat(item['last_price']);
                document.getElementById("near").children[2].textContent=symbol+item['last_price'];   
            }
        }
 
    });
}

function bitbns(){
    url="https://boxing-lumberjack-12791.herokuapp.com/https://api.bitbns.com/api/trade/v1/tickers"
    fetch(url,{headers:{
        'X-BITBNS-APIKEY':''
    }})
    .then(response =>{
        return (response.json());
    })
    .then(data =>{
        btc[2]=(data['BTC']['last_traded_price']);
        eth[2]=(data['ETH']['last_traded_price']);
        usdt[2]=(data['USDT']['last_traded_price']);
        bnb[2]=(data['BNB']['last_traded_price']);
        ada[2]=(data['ADA']['last_traded_price']);
        xrp[2]=(data['XRP']['last_traded_price']);
        sol[2]=(data['SOL']['last_traded_price']);
        matic[2]=(data['MATIC']['last_traded_price']);
        doge[2]=(data['DOGE']['last_traded_price']);
        dot[2]=(data['DOT']['last_traded_price']);
        trx[2]=(data['TRX']['last_traded_price']);
        shib[2]=(data['SHIB']['last_traded_price']);
        ltc[2]=(data['LTC']['last_traded_price']);
        uni[2]=(data['UNI']['last_traded_price']);
        xlm[2]=(data['XLM']['last_traded_price']);
        near[2]=(data['NEAR']['last_traded_price']);
        document.getElementById("btc").children[3].textContent=symbol+data['BTC']['last_traded_price'];
        document.getElementById("eth").children[3].textContent=symbol+data['ETH']['last_traded_price'];
        document.getElementById("usdt").children[3].textContent=symbol+data['USDT']['last_traded_price'];
        document.getElementById("bnb").children[3].textContent=symbol+data['BNB']['last_traded_price'];
        document.getElementById("ada").children[3].textContent=symbol+data['ADA']['last_traded_price'];
        document.getElementById("xrp").children[3].textContent=symbol+data['XRP']['last_traded_price'];
        document.getElementById("sol").children[3].textContent=symbol+data['SOL']['last_traded_price'];
        document.getElementById("matic").children[3].textContent=symbol+data['MATIC']['last_traded_price'];
        document.getElementById("doge").children[3].textContent=symbol+data['DOGE']['last_traded_price'];
        document.getElementById("dot").children[3].textContent=symbol+data['DOT']['last_traded_price'];
        document.getElementById("trx").children[3].textContent=symbol+data['TRX']['last_traded_price'];
        document.getElementById("shib").children[3].textContent=symbol+data['SHIB']['last_traded_price'];
        document.getElementById("ltc").children[3].textContent=symbol+data['LTC']['last_traded_price'];
        document.getElementById("uni").children[3].textContent=symbol+data['UNI']['last_traded_price'];
        document.getElementById("xlm").children[3].textContent=symbol+data['XLM']['last_traded_price'];
        document.getElementById("near").children[3].textContent=symbol+data['NEAR']['last_traded_price'];
    });
}
function zebpay(){
    url="https://www.zebapi.com/pro/v1/market/"
    fetch(url)
    .then(response =>{
        return (response.json());
    })
    .then(data =>{
        
        for (let i = 0; i < data.length; i++) {
            let item =data[i];
         
            if(item['pair']=="BTC-INR"){
                btc[3]=parseFloat(item['buy']);
                document.getElementById("btc").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="ETH-INR"){
                eth[3]=parseFloat(item['buy']);
                document.getElementById("eth").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="USDT-INR"){
                usdt[3]=parseFloat(item['buy']);
                document.getElementById("usdt").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="BNB-INR"){
                bnb[3]=parseFloat(item['buy']);
                document.getElementById("bnb").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="ADA-INR"){
                ada[3]=parseFloat(item['buy']);
                document.getElementById("ada").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="XRP-INR"){
                xrp[3]=parseFloat(item['buy']);
                document.getElementById("xrp").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="SOL-INR"){
                sol[3]=parseFloat(item['buy']);
                document.getElementById("sol").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="MATIC-INR"){
                matic[3]=parseFloat(item['buy']);
                document.getElementById("matic").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="DOGE-INR"){
                doge[3]=parseFloat(item['buy']);
                document.getElementById("doge").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="DOT-INR"){
                dot[3]=parseFloat(item['buy']);
                document.getElementById("dot").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="TRX-INR"){
                trx[3]=parseFloat(item['buy']);
                document.getElementById("trx").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="SHIB-INR"){
                shib[3]=parseFloat(item['buy']);
                document.getElementById("shib").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="AVAX-INR"){
                avax[3]=parseFloat(item['buy']);
                document.getElementById("avax").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="LTC-INR"){
                ltc[3]=parseFloat(item['buy']);
                document.getElementById("ltc").children[4].textContent=symbol+item['buy'];   
            }else if(item['pair']=="XLM-INR"){
                xlm[3]=parseFloat(item['buy']);
                document.getElementById("xlm").children[4].textContent=symbol+item['buy'];   
            }
        }
    });
}
const exchanges=["wazirx","coindcx","bitbns","zebpay"];
const arrayOfCoin=[btc,eth,usdt,bnb,ada,xrp,sol,matic,doge,dot,trx,shib,avax,ltc,uni,xlm,near]
function searchCoin(){
    for(i=0;i<arrayOfCoin.length;i++){
        wbtc=(arrayOfCoin[i][0]);
        dbtc=(arrayOfCoin[i][1]);
        bbtc=(arrayOfCoin[i][2]);
        zbtc=(arrayOfCoin[i][3]);
        minimum=Math.min(wbtc,dbtc,bbtc,zbtc);
        let ele=(arrayOfCoin[i]).indexOf(minimum);
        let crypto= arrayOfCoin[i][4];
        let parent=document.getElementById(crypto);
        let children=parent.querySelectorAll(".child");
        if(ele==0){
            children[0].classList.add('green1');
            children[1].classList.remove('green1');
            children[2].classList.remove('green1');
            children[3].classList.remove('green1');
        }else if(ele==1){
            children[1].classList.add('green1');
            children[0].classList.remove('green1');
            children[2].classList.remove('green1');
            children[3].classList.remove('green1');
        }else if(ele==2){
            children[2].classList.add('green1');
            children[1].classList.remove('green1');
            children[0].classList.remove('green1');
            children[3].classList.remove('green1');
        }else if(ele==3){
            children[3].classList.add('green1');
            children[0].classList.remove('green1');
            children[2].classList.remove('green1');
            children[1].classList.remove('green1');
        }

    }
}
