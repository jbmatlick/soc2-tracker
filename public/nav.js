(function() {
  const NAV_HEIGHT = 48;
  const nav = document.createElement('div');
  nav.id = 'chatb2b-nav';
  nav.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;max-width:1200px;margin:0 auto;padding:0 24px;height:100%;">
      <a href="/" style="color:#fff;text-decoration:none;font-weight:700;font-size:15px;letter-spacing:-0.3px;">ChatB2B</a>
      <div style="display:flex;gap:24px;position:relative;" id="nav-links">
        <div class="nav-dd">
          <button class="nav-dd-btn">Compliance ▾</button>
          <div class="nav-dd-menu"><a href="/soc2/">SOC 2 Tracker</a></div>
        </div>
        <div class="nav-dd">
          <button class="nav-dd-btn">GTM ▾</button>
          <div class="nav-dd-menu"><a href="/icp/">Account Universe</a><a href="/dream20/">Dream 20</a></div>
        </div>
      </div>
    </div>
  `;
  Object.assign(nav.style, {
    position: 'fixed', top: '0', left: '0', right: '0', height: NAV_HEIGHT + 'px',
    background: '#1a1a1a', zIndex: '1000', fontFamily: "'Inter', sans-serif", fontSize: '13px'
  });

  const style = document.createElement('style');
  style.textContent = `
    .nav-dd { position: relative; }
    .nav-dd-btn {
      background: none; border: none; color: #ccc; font: inherit; font-size: 13px;
      cursor: pointer; padding: 4px 0; font-weight: 500;
    }
    .nav-dd-btn:hover { color: #01696f; }
    .nav-dd-menu {
      display: none; position: absolute; top: 100%; right: 0;
      background: #2a2a2a; border: 1px solid #333; min-width: 160px;
      padding: 4px 0; margin-top: 8px;
    }
    .nav-dd:hover .nav-dd-menu { display: block; }
    .nav-dd-menu a {
      display: block; padding: 8px 16px; color: #ccc; text-decoration: none; font-size: 13px;
    }
    .nav-dd-menu a:hover { background: #333; color: #01696f; }
  `;

  document.head.appendChild(style);
  document.body.prepend(nav);
})();
