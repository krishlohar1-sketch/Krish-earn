let balance=128.50;
const $=id=>document.getElementById(id);
function showToast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove('show'),2200)}
function go(page){
 document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
 if(page==='home'){window.scrollTo({top:0,behavior:'smooth'});return}
 const data={
 earn:['Earn rewards','Choose genuine eligible activities. Reward amounts and limits are controlled by the app.',['🎁 Daily bonus','▶️ Rewarded ad','📝 Surveys & tasks','🛒 Shopping rewards']],
 refer:['Refer & earn','Share your unique code. Referral rewards are credited only after eligible verification.',['Your code: KRISH128','Verified referral: ₹10','Pending referrals: 2']],
 wallet:['Wallet','Your balance and transaction history.',['Available: ₹'+balance.toFixed(2),'Pending: ₹25.00','Minimum withdrawal: ₹100']],
 profile:['Profile','Manage your account and verification.',['Mobile: Verified','KYC: Pending','Support: Available']]
 };
 if(data[page]) openModal(data[page][0],data[page][1],data[page][2]);
}
function openModal(title,text,items=[]){
 $('modalContent').innerHTML=`<h2>${title}</h2><p>${text}</p>`+items.map(x=>`<div class="activity glass" style="margin:8px 0;padding:13px">${x}</div>`).join('')+
 (title==='Wallet'?'<button class="primary" style="width:100%;margin-top:10px" onclick="withdraw()">Request withdrawal</button>':'');
 $('modal').classList.add('show');
}
function closeModal(){$('modal').classList.remove('show')}
function withdraw(){if(balance<100){showToast('Minimum withdrawal is ₹100');return}showToast('Withdrawal request submitted');closeModal()}
function earnDemo(amount,label){balance+=amount;$('balance').textContent='₹'+balance.toFixed(2);showToast(label+' reward added: ₹'+amount)}
window.addEventListener('click',e=>{if(e.target===$('modal'))closeModal()});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))}
