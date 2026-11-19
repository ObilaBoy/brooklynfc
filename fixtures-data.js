// AUTO FIXTURES - Add new games here, site updates by itself!
const ALL_FIXTURES = [
  {home:"Real Madrid", away:"Celta Vigo", date:"2026-11-21T20:00:00Z", display:"Sat, 21 Nov 2026 - 9:00 PM WAT", stadium:"Bernabeu", comp:"La Liga"},
  {home:"Real Madrid", away:"PSV Eindhoven", date:"2026-11-24T20:00:00Z", display:"Tue, 24 Nov 2026 - 9:00 PM WAT", stadium:"Bernabeu", comp:"Champions League"},
  {home:"Real Madrid", away:"Alaves", date:"2026-11-28T20:00:00Z", display:"Sat, 28 Nov 2026 - 9:00 PM WAT", stadium:"Bernabeu", comp:"La Liga"},
  {home:"Real Sociedad", away:"Real Madrid", date:"2026-12-02T18:00:00Z", display:"Wed, 2 Dec 2026 - 7:00 PM WAT", stadium:"Reale Arena", comp:"La Liga"},
  {home:"Athletic Bilbao", away:"Real Madrid", date:"2026-12-06T15:15:00Z", display:"Sun, 6 Dec 2026 - 4:15 PM WAT", stadium:"San Mames", comp:"La Liga"},
  {home:"Arsenal", away:"Real Madrid", date:"2026-12-09T20:00:00Z", display:"Wed, 9 Dec 2026 - 9:00 PM WAT", stadium:"Emirates", comp:"Champions League"},
  {home:"Real Madrid", away:"Osasuna", date:"2026-12-13T19:00:00Z", display:"Sun, 13 Dec 2026 - 8:00 PM WAT", stadium:"Bernabeu", comp:"La Liga"},
  {home:"Deportivo", away:"Real Madrid", date:"2026-12-20T19:00:00Z", display:"Sun, 20 Dec 2026 - 8:00 PM WAT", stadium:"Riazor", comp:"La Liga"},
  {home:"Real Madrid", away:"Getafe", date:"2027-01-03T19:00:00Z", display:"Sat, 3 Jan 2027 - TBD", stadium:"Bernabeu", comp:"La Liga"},
  {home:"Real Madrid", away:"Atletico Madrid", date:"2027-04-04T19:00:00Z", display:"Sat, 4 Apr 2027 - TBD", stadium:"Bernabeu", comp:"La Liga - DERBY!"},
  {home:"Real Madrid", away:"Barcelona", date:"2027-05-09T19:00:00Z", display:"Sat, 9 May 2027 - TBD", stadium:"Bernabeu", comp:"La Liga - EL CLASICO!"},
];
function getNextMatch(){
  let now = new Date().getTime();
  for(let g of ALL_FIXTURES){
    if(new Date(g.date).getTime() > now) return g;
  }
  return ALL_FIXTURES[ALL_FIXTURES.length-1];
}
function getUpcoming(){
  let now = new Date().getTime();
  return ALL_FIXTURES.filter(g => new Date(g.date).getTime() > now);
}
