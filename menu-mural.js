// ===== Injetar Link de Fontes =====
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// ===== Injetar CSS (otimizado com tons terrosos, efeitos, borda glass, responsividade) =====
const style = document.createElement('style');
style.textContent = `
body{margin:0;font-family:'Montserrat',sans-serif;background:linear-gradient(to bottom,#f8f8f8,#e0d0c0);height:200vh;overflow-x:hidden}
#navMenu{position:fixed;top:-100px;left:50%;transform:translateX(-50%);width:98%;max-width:1280px;background:linear-gradient(135deg,rgba(32,32,32,0.9),rgba(50,50,50,0.9));backdrop-filter:blur(12px);border-radius:0 0 25px 25px;padding:14px 28px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 8px 32px rgba(0,0,0,0.4);transition:all .5s cubic-bezier(0.25,0.46,0.45,0.94);z-index:9999;border:1px solid rgba(255,255,255,0.1)}
#navMenu.active{top:0}
.logo-img{width:100px;height:auto;margin-right:auto}
.icon-wrapper{display:flex;align-items:center;gap:22px;margin-left:auto}
#navMenu svg,#navMenu img:not(.logo-img){width:28px;height:28px;cursor:pointer;transition:all .3s cubic-bezier(0.25,0.46,0.45,0.94);vertical-align:middle}
#navMenu svg:hover,#navMenu img:not(.logo-img):hover{transform:scale(1.08) rotate(5deg);filter:drop-shadow(0 2px 4px rgba(171,134,91,0.3))}
.close-menu{position:absolute;top:10px;right:10px;width:24px;height:24px;cursor:pointer;z-index:10000;display:none;align-items:center;justify-content:center;border-radius:50%;background:rgba(255,255,255,0.1);transition:all .3s}
.close-menu.active{display:flex}
.close-menu:hover{background:rgba(255,255,255,0.2)}
.notif-dot{position:absolute;top:-6px;right:-6px;background:linear-gradient(135deg,#AB865B,#D3AD83);color:#fff;font-size:11px;width:18px;height:18px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-weight:600;box-shadow:0 2px 8px rgba(171,134,91,0.4);animation:pulse 2s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(171,134,91,0.7)}70%{box-shadow:0 0 0 10px rgba(171,134,91,0)}100%{box-shadow:0 0 0 0 rgba(171,134,91,0)}}
@keyframes shake{0%,100%{transform:rotate(0)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}}
.shake{animation:shake .7s ease-in-out}
.overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:10000}
.popup{background:linear-gradient(135deg,rgba(32,32,32,0.98),rgba(50,50,50,0.98));color:#fff;width:90%;max-width:450px;min-width:320px;border-radius:24px;padding:24px;box-shadow:0 12px 48px rgba(0,0,0,0.5);display:flex;flex-direction:column;gap:16px;transform:translateY(50px);opacity:0;transition:all .4s cubic-bezier(0.25,0.46,0.45,0.94);border:1px solid rgba(255,255,255,0.1);position:relative;overflow:hidden}
.popup::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)}
.popup.active{transform:translateY(0);opacity:1}
.close-popup{position:absolute;top:16px;right:16px;width:24px;height:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(255,255,255,0.1);transition:all .3s;font-size:18px;font-weight:600;color:#fff}
.close-popup:hover{background:rgba(255,255,255,0.2);transform:rotate(90deg)}
.popup h2{margin:0 0 12px;font-weight:600;font-size:20px;text-align:center;letter-spacing:0.5px}
.notif-item{display:flex;flex-direction:column;gap:12px;padding:16px;background:rgba(255,255,255,0.05);border-radius:16px;border:1px solid rgba(255,255,255,0.1);transition:all .3s}
.notif-item:hover{background:rgba(255,255,255,0.08)}
.notif-item p{font-size:14px;font-weight:500;color:#ddd;line-height:1.5;margin:0}
.notif-item button{background:linear-gradient(135deg,#AB865B,#D3AD83);border:none;border-radius:20px;padding:12px 24px;color:#fff;font-size:14px;cursor:pointer;font-weight:600;transition:all .3s;width:100%;box-shadow:0 4px 12px rgba(171,134,91,0.3);height:48px}
.notif-item button:hover{opacity:0.9;transform:translateY(-1px);box-shadow:0 6px 16px rgba(171,134,91,0.4)}
.notif-item button:active{transform:scale(0.98);box-shadow:0 2px 8px rgba(171,134,91,0.2)}
.teaser-popup img{width:100%;max-height:300px;object-fit:cover;border-radius:24px;border:1px solid rgba(255,255,255,0.2);box-shadow:0 0 15px rgba(255,255,255,0.1);background:linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05));transition:all .3s}
.teaser-popup img:hover{box-shadow:0 0 20px rgba(255,255,255,0.15)}
.teaser-popup button{background:linear-gradient(135deg,#AB865B,#D3AD83);border:none;border-radius:20px;padding:12px 24px;color:#fff;font-size:14px;cursor:pointer;font-weight:600;transition:all .3s;width:100%;box-shadow:0 4px 12px rgba(171,134,91,0.3);height:48px}
.teaser-popup button:hover{opacity:0.9;transform:translateY(-1px);box-shadow:0 6px 16px rgba(171,134,91,0.4)}
.teaser-popup button:active{transform:scale(0.98);box-shadow:0 2px 8px rgba(171,134,91,0.2)}
.popup-footer{font-size:12px;color:#aaa;text-align:center;margin-top:8px;letter-spacing:0.3px}
.toast{position:fixed;top:20px;right:20px;background:linear-gradient(135deg,#AB865B,#D3AD83);color:#fff;padding:12px 20px;border-radius:20px;box-shadow:0 8px 24px rgba(171,134,91,0.4);transform:translateX(400px);opacity:0;transition:all .4s cubic-bezier(0.25,0.46,0.45,0.94);z-index:10001;font-size:14px;font-weight:500;min-width:200px;text-align:center}
.toast.active{transform:translateX(0);opacity:1}
.toast.exit{transform:translateX(400px);opacity:0}
.scroll-top{position:fixed;bottom:30px;right:30px;width:50px;height:50px;background:linear-gradient(135deg,#AB865B,#D3AD83);border-radius:50%;display:none;align-items:center;justify-content:center;cursor:pointer;transition:all .3s cubic-bezier(0.25,0.46,0.45,0.94);box-shadow:0 8px 24px rgba(171,134,91,0.4);z-index:9998}
.scroll-top.active{display:flex}
.scroll-top:hover{transform:scale(1.1);box-shadow:0 12px 32px rgba(171,134,91,0.5)}
.scroll-top svg{width:20px;height:20px;fill:#fff;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.3))}
.loading-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:10001}
.loading-spinner{width:40px;height:40px;border:4px solid rgba(171,134,91,0.3);border-top-color:#AB865B;border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
@media (max-width:768px){
  .popup{width:95%;padding:20px;min-width:auto}
  .notif-item{padding:12px}
  .navMenu{padding:10px 20px;width:98%}
  .icon-wrapper{gap:16px}
  .scroll-top{bottom:20px;right:20px;width:45px;height:45px}
  .scroll-top svg{width:18px;height:18px}
  .logo-img{width:80px}
  .teaser-popup img{max-height:200px}
  .teaser-popup button,.notif-item button{height:42px;padding:10px 20px;font-size:13px}
}
.filled{fill:#AB865B}
@keyframes glow{0%{filter:drop-shadow(0 0 0 rgba(171,134,91,0.7))}50%{filter:drop-shadow(0 0 10px rgba(171,134,91,0.7))}100%{filter:drop-shadow(0 0 0 rgba(171,134,91,0.7))}}
#navMenu svg:hover,#navMenu img:not(.logo-img):hover{animation:glow 1s infinite}
`;
document.head.appendChild(style);

// ===== Injetar HTML (sem busca, com mural popup, imagem atualizada, botões terrosos) =====
const navHTML = `
<div id="navMenu" role="navigation" aria-label="Menu principal">
  <div class="close-menu" id="closeMenu" aria-label="Fechar menu">&times;</div>
  <img class="logo-img" src="https://framerusercontent.com/images/JaIvmSW2LTbs0XCR7tnpcmU8xA.png" alt="Logo Frame" aria-label="Logo Frame">
  <div class="icon-wrapper">
    <svg id="categoriesIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Mural" title="Explorar mural de modelos">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
    <div style="position:relative">
      <img id="notifIcon" src="https://framerusercontent.com/images/Yr7purGR3rArCX8H8FMYR7b40.png" alt="Ícone de notificações" title="Ver notificações">
      <div class="notif-dot" aria-hidden="true">2</div>
    </div>
    <svg id="favIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Favoritar" title="Adicionar aos favoritos">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    <a href="/chat" style="display:inline-block;" aria-label="Abrir chat">
      <svg id="chatIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="cursor:pointer;">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </a>  
    <a href="/login" style="display:inline-block;" aria-label="Fazer login">
      <svg id="loginIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="cursor: pointer;">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </a>
  </div>
</div>
<div class="overlay" id="notifOverlay" role="dialog" aria-modal="true" aria-labelledby="notifTitle">
  <div class="popup" id="notifPopup">
    <button class="close-popup" id="closePopup" aria-label="Fechar notificações">&times;</button>
    <h2 id="notifTitle">Notificações</h2>
    <div class="notif-item">
      <p>Desbloqueie todas as funcionalidades agora no Frame Premium.</p>
      <button class="premium-btn" data-href="/premium">Quero ser Premium</button>
    </div>
    <div class="notif-item">
      <p>Temos vídeos quentinhos para você! 🔥</p>
      <button onclick="window.location.href='/models'">Ver catálogo de modelos</button>
    </div>
    <div class="popup-footer" id="notifTime">Frame News | Hoje</div>
  </div>
</div>
<div class="overlay" id="muralOverlay" role="dialog" aria-modal="true" aria-labelledby="muralTitle">
  <div class="popup" id="muralPopup">
    <button class="close-popup" id="closeMural" aria-label="Fechar mural">&times;</button>
    <h2 id="muralTitle">Você está no Mural!</h2>
    <div class="notif-item">
      <p>Explore os destaques do FrameMural. Quer ver o catálogo completo?</p>
      <button onclick="window.location.href='/models'">Ver Catálogo Completo</button>
    </div>
    <div class="popup-footer" id="muralTime">FrameMural | Hoje</div>
  </div>
</div>
<div class="overlay" id="teaserOverlay" role="dialog" aria-modal="true" aria-labelledby="teaserTitle">
  <div class="popup teaser-popup" id="teaserPopup">
    <button class="close-popup" id="closeTeaser" aria-label="Fechar teaser">&times;</button>
    <h2 id="teaserTitle">Destaque do Dia 🔥</h2>
    <img src="https://framerusercontent.com/images/xbUxJlrRf78udHw2wdobRatKoU.png" alt="Modelo teaser">
    <p>Assine Premium para ver sem censura e acessar vídeos exclusivos!</p>
    <button class="premium-btn" data-href="/premium">Assinar agora - 20% off</button>
    <div class="popup-footer">Oferta limitada! ⏰</div>
  </div>
</div>
<div class="loading-overlay" id="loadingOverlay">
  <div class="loading-spinner"></div>
</div>
<div class="toast" id="toast" role="alert" aria-live="polite"></div>
<div class="scroll-top" id="scrollTop" title="Ir para o topo" aria-label="Ir para o topo">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 5l7 7 -1.41 1.41L12 7.83l-5.59 5.58L5 12z"/>
  </svg>
</div>
`;
document.body.insertAdjacentHTML('beforeend', navHTML);

// ===== Lógica Principal =====
// Elements
const navMenu = document.getElementById("navMenu");
const notifIcon = document.getElementById("notifIcon");
const notifOverlay = document.getElementById("notifOverlay");
const notifPopup = document.getElementById("notifPopup");
const closePopup = document.getElementById("closePopup");
const timeEl = document.getElementById("notifTime");
const toastEl = document.getElementById("toast");
const scrollTop = document.getElementById("scrollTop");
const favIcon = document.getElementById("favIcon");
const categoriesIcon = document.getElementById("categoriesIcon");
const muralOverlay = document.getElementById("muralOverlay");
const muralPopup = document.getElementById("muralPopup");
const closeMural = document.getElementById("closeMural");
const muralTime = document.getElementById("muralTime");
const teaserOverlay = document.getElementById("teaserOverlay");
const teaserPopup = document.getElementById("teaserPopup");
const closeTeaser = document.getElementById("closeTeaser");
const loadingOverlay = document.getElementById("loadingOverlay");
const premiumButtons = document.querySelectorAll(".premium-btn");

// State
let filled = false;
let toastTimeout = null;
let rafId = null;
let teaserShown = false;
let notifInterval = null;

// Helpers
function getTime() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function showToast(msg, duration = 2500) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.remove('exit');
  toastEl.classList.add('active');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.add('exit');
    setTimeout(() => {
      toastEl.classList.remove('active', 'exit');
    }, 450);
  }, duration);
}

function showLoadingThenRedirect(url) {
  if (!loadingOverlay) return;
  loadingOverlay.style.display = 'flex';
  setTimeout(() => {
    loadingOverlay.style.display = 'none';
    window.location.href = url;
  }, 1500);
}

// Notificações: abrir / fechar
notifIcon?.addEventListener('click', () => {
  if (!notifOverlay || !notifPopup) return;
  notifOverlay.style.display = 'flex';
  setTimeout(() => notifPopup.classList.add('active'), 10);
  timeEl && (timeEl.textContent = `Frame News | Hoje — ${getTime()}`);
});

function closeNotif() {
  if (!notifOverlay || !notifPopup) return;
  notifPopup.classList.remove('active');
  setTimeout(() => notifOverlay.style.display = 'none', 250);
}

closePopup?.addEventListener('click', closeNotif);
notifOverlay?.addEventListener('click', (e) => {
  if (e.target === notifOverlay) closeNotif();
});

// Mural: abrir / fechar
categoriesIcon?.addEventListener('click', () => {
  if (!muralOverlay || !muralPopup) return;
  muralOverlay.style.display = 'flex';
  setTimeout(() => muralPopup.classList.add('active'), 10);
  muralTime && (muralTime.textContent = `FrameMural | Hoje — ${getTime()}`);
});

function closeMural() {
  if (!muralOverlay || !muralPopup) return;
  muralPopup.classList.remove('active');
  setTimeout(() => muralOverlay.style.display = 'none', 250);
}

closeMural?.addEventListener('click', closeMural);
muralOverlay?.addEventListener('click', (e) => {
  if (e.target === muralOverlay) closeMural();
});

// Teaser: abrir / fechar
function closeTeaser() {
  if (!teaserOverlay || !teaserPopup) return;
  teaserPopup.classList.remove('active');
  setTimeout(() => teaserOverlay.style.display = 'none', 250);
}

closeTeaser?.addEventListener('click', closeTeaser);
teaserOverlay?.addEventListener('click', (e) => {
  if (e.target === teaserOverlay) closeTeaser();
});

// Premium buttons
premiumButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    showLoadingThenRedirect(button.dataset.href);
  });
});

// Fav icon toggle
favIcon?.addEventListener('click', () => {
  filled = !filled;
  favIcon.classList.toggle('filled', filled);
  if (!filled && Math.random() > 0.7) {
    showToast('Assine Premium para favoritos ilimitados!');
  } else {
    showToast(filled ? 'FrameMural favoritado! Exibiremos mais resultados como este' : 'FrameMural removido dos favoritos. Que tal explorar outros?');
  }
});

// Scroll behaviour: throttled
function onScroll() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    const y = window.scrollY || window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    navMenu?.classList.toggle('active', y > 20);
    scrollTop?.classList.toggle('active', y > 300);

    if (!teaserShown && (y / totalHeight) > 0.3 && Math.random() > 0.5) {
      teaserShown = true;
      teaserOverlay.style.display = 'flex';
      setTimeout(() => teaserPopup.classList.add('active'), 10);
    }
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll-to-top
scrollTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ESC para fechar tudo
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeNotif();
    closeMural();
    closeTeaser();
  }
});

// Update time interval
const startTimeUpdate = () => {
  if (notifInterval) clearInterval(notifInterval);
  notifInterval = setInterval(() => {
    if (notifOverlay?.style.display === 'flex') {
      timeEl && (timeEl.textContent = `Frame News | Hoje — ${getTime()}`);
    }
    if (muralOverlay?.style.display === 'flex') {
      muralTime && (muralTime.textContent = `FrameMural | Hoje — ${getTime()}`);
    }
  }, 60000);
};
notifOverlay?.addEventListener('transitionstart', startTimeUpdate);
muralOverlay?.addEventListener('transitionstart', startTimeUpdate);
notifOverlay?.addEventListener('transitionend', () => {
  if (notifOverlay?.style.display !== 'flex' && notifInterval) {
    clearInterval(notifInterval);
    notifInterval = null;
  }
});
muralOverlay?.addEventListener('transitionend', () => {
  if (muralOverlay?.style.display !== 'flex' && notifInterval) {
    clearInterval(notifInterval);
    notifInterval = null;
  }
});

// Animação extra: Shake no notif-dot a cada 10s
setInterval(() => {
  document.querySelector('.notif-dot')?.classList.add('shake');
  setTimeout(() => document.querySelector('.notif-dot')?.classList.remove('shake'), 700);
}, 10000);

// Init
timeEl && (timeEl.textContent = `Frame News | Hoje — ${getTime()}`);
muralTime && (muralTime.textContent = `FrameMural | Hoje — ${getTime()}`);
onScroll();