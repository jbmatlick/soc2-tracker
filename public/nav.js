(function() {
  const NAV_HEIGHT = 48;
  const nav = document.createElement('div');
  nav.id = 'chatb2b-nav';
  nav.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;max-width:1200px;margin:0 auto;padding:0 24px;height:100%;">
      <a href="/" style="color:#1a1a1a;text-decoration:none;font-weight:700;font-size:15px;letter-spacing:-0.3px;">ChatB2B</a>
      <div style="display:flex;gap:24px;position:relative;" id="nav-links">
        <div class="nav-dd">
          <button class="nav-dd-btn">GTM ▾</button>
          <div class="nav-dd-menu">
            <a href="/icp/">ICP & Account Universe</a>
            <a href="/dream20/">Dream 20</a>
            <a href="/surveys/">Survey Results</a>
          </div>
        </div>
        <div class="nav-dd">
          <button class="nav-dd-btn">Research ▾</button>
          <div class="nav-dd-menu">
            <a href="/rpe/">RPE Report</a>
            <a href="/pricing/">Pricing Strategy</a>
          </div>
        </div>
      </div>
    </div>
  `;
  Object.assign(nav.style, {
    position: 'fixed', top: '0', left: '0', right: '0', height: NAV_HEIGHT + 'px',
    background: '#ffffff', borderBottom: '1px solid #e5e5e5', zIndex: '1000', fontFamily: "'Inter', sans-serif", fontSize: '13px'
  });

  const style = document.createElement('style');
  style.textContent = `
    .nav-dd { position: relative; }
    .nav-dd-btn {
      background: none; border: none; color: #666; font: inherit; font-size: 13px;
      cursor: pointer; padding: 4px 0; font-weight: 500;
    }
    .nav-dd-btn:hover { color: #01696f; }
    .nav-dd-menu {
      display: none; position: absolute; top: 100%; right: 0;
      background: #ffffff; border: 1px solid #e5e5e5; min-width: 180px;
      padding: 4px 0; margin-top: 8px; border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
    .nav-dd:hover .nav-dd-menu { display: block; }
    .nav-dd-menu a {
      display: block; padding: 10px 16px; color: #666; text-decoration: none; font-size: 13px;
      transition: all 0.15s;
    }
    .nav-dd-menu a:hover { background: #fafafa; color: #01696f; }
  `;

  document.head.appendChild(style);
  document.body.prepend(nav);
})();
