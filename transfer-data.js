// AUTO TRANSFER DATA - Add a new rumour here, site updates by itself!
// status: "hot" = red, "rumour" = yellow, "done" = green, "rejected" = grey
// expiry: after this date, rumour auto-hides if not DONE
const ALL_TRANSFERS = [
  {id:"haaland", name:"Erling Haaland", flag:"🇳🇴", club:"Man City", desc:"Haaland wants to play in white! Madrid ready to pay €200M! Haaland + Mbappe + Vini = UNSTOPPABLE!", tag:"🔥 HOT - 85% Chance!", status:"hot", date:"2026-11-19", expiry:"2027-06-30", brooklyn:"YES! Haaland + Mbappe + Vini = UNSTOPPABLE!"},
  {id:"wirtz", name:"Florian Wirtz", flag:"🇩🇪", club:"Leverkusen", desc:"Leverkusen star Wirtz is the next Modric! Madrid scouts watching him every week. Creative midfielder we NEED!", tag:"🟡 RUMOUR", status:"rumour", date:"2026-11-19", expiry:"2027-06-30", brooklyn:""},
  {id:"saka", name:"Bukayo Saka", flag:"🏴󐁧󐁢󐁥󐁮󐁧󐁿", club:"Arsenal", desc:"Arsenal winger Saka says he loves Madrid! Would he replace Rodrygo? Or play together?", tag:"🟡 RUMOUR", status:"rumour", date:"2026-11-19", expiry:"2027-06-30", brooklyn:""},
  {id:"osimhen", name:"Victor Osimhen", flag:"🇳🇬", club:"Galatasaray", desc:"Nigerian striker Osimhen! Our own Super Eagles star! Would he be perfect for Madrid? 🇳🇬🔥", tag:"🟡 RUMOUR - NIGERIA!", status:"hot", date:"2026-11-19", expiry:"2027-06-30", brooklyn:"YES! Naija to Madrid! 🇳🇬"},
  {id:"mbappe", name:"Kylian Mbappe", flag:"🇫🇷", club:"Real Madrid", desc:"Mbappe is ALREADY here! 2024 signing! Best signing ever! 30+ goals already! 👑", tag:"✅ DONE DEAL!", status:"done", date:"2024-06-01", expiry:"2030-01-01", brooklyn:""},
  {id:"neymar", name:"Neymar", flag:"🇧🇷", club:"Santos", desc:"Neymar wants to return to Europe... Should Madrid bring him back? Or is he too old now?", tag:"❌ REJECTED", status:"rejected", date:"2026-11-19", expiry:"2027-06-30", brooklyn:""},
];
function getActiveTransfers(){
  let now = new Date();
  return ALL_TRANSFERS.filter(t => new Date(t.expiry) > now).sort((a,b)=>{
    // hot first, then rumour, then done/rejected
    let order = {hot:0, rumour:1, done:2, rejected:3};
    return order[a.status]-order[b.status];
  });
}
