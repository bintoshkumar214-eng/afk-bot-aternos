/* ========================================================
   EXCLUSIVE ADMIN PANEL - ULTRA UNIQUE NEON GLASS UI
   ======================================================== */

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

:root {
    --admin-primary: #00f2fe;
    --admin-secondary: #7f00ff;
    --admin-pink: #ff007f;
    --admin-green: #00ff88;
    --admin-bg-card: rgba(10, 15, 29, 0.82);
    --admin-bg-image: url('https://images.alphacoders.com/132/1328902.jpeg');
}

/* ðŸŽ¨ WORKING COLOR PRESETS ðŸŽ¨ */
html[data-admin-theme="cyber-neon"]    { --admin-primary: #00ff88 !important; --admin-secondary: #00f2fe !important; --admin-green: #00ff88 !important; }
html[data-admin-theme="cyan-blue"]     { --admin-primary: #00f2fe !important; --admin-secondary: #3b82f6 !important; --admin-green: #00f2fe !important; }
html[data-admin-theme="purple"]        { --admin-primary: #a855f7 !important; --admin-secondary: #6366f1 !important; --admin-green: #c084fc !important; }
html[data-admin-theme="crimson-red"]   { --admin-primary: #ff0055 !important; --admin-secondary: #990033 !important; --admin-green: #ff5050 !important; }
html[data-admin-theme="gold"]          { --admin-primary: #f59e0b !important; --admin-secondary: #b45309 !important; --admin-green: #fbbf24 !important; }
html[data-admin-theme="sakura-pink"]   { --admin-primary: #ff79c6 !important; --admin-secondary: #bd93f9 !important; --admin-green: #ff92d0 !important; }
html[data-admin-theme="nitro-yellow"]  { --admin-primary: #ffe600 !important; --admin-secondary: #ffaa00 !important; --admin-green: #ffff55 !important; }
html[data-admin-theme="matrix"]        { --admin-primary: #00ff41 !important; --admin-secondary: #008f11 !important; --admin-green: #00ff41 !important; }
html[data-admin-theme="sunset"]        { --admin-primary: #ff5e36 !important; --admin-secondary: #ff0055 !important; --admin-green: #ffa200 !important; }
html[data-admin-theme="dracula"]       { --admin-primary: #bd93f9 !important; --admin-secondary: #ff79c6 !important; --admin-green: #50fa7b !important; }

/* --------------------------------------------------------
   1. GLOBAL BACKGROUND (ONLY ADMIN SCOPE)
   -------------------------------------------------------- */
body.hold-transition, 
.wrapper, 
.wrapper .content-wrapper, 
.wrapper .right-side {
    background: 
        radial-gradient(circle at 10% 20%, rgba(127, 0, 255, 0.25) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(0, 242, 254, 0.2) 0%, transparent 40%),
        linear-gradient(180deg, rgba(6, 9, 18, 0.80) 0%, rgba(10, 14, 26, 0.90) 100%),
        var(--admin-bg-image) no-repeat center center fixed !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    color: #f8fafc !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
}

/* --------------------------------------------------------
   2. UNIQUE GLASS CARDS & TABLES
   -------------------------------------------------------- */
.content-wrapper .box, 
.content-wrapper .box-primary {
    background: var(--admin-bg-card) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid var(--admin-primary) !important;
    border-radius: 20px !important;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 15px var(--admin-primary) !important;
    overflow: hidden !important;
}

.content-wrapper .box-header {
    background: rgba(255, 255, 255, 0.03) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    padding: 18px 22px !important;
}

.content-wrapper .box-title {
    color: var(--admin-green) !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 800 !important;
    font-size: 1.25rem !important;
    letter-spacing: 0.5px !important;
    text-shadow: 0 0 12px var(--admin-green) !important;
}

/* Table Text & Borders */
.content-wrapper .table, 
.content-wrapper .table > tbody > tr > td {
    color: #ffffff !important;
    border-color: rgba(255, 255, 255, 0.08) !important;
    font-weight: 600 !important;
}

.content-wrapper .table > thead > tr > th {
    color: var(--admin-primary) !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 800 !important;
    border-bottom: 2px solid var(--admin-primary) !important;
    text-transform: uppercase !important;
}

/* --------------------------------------------------------
   3. SIDEBAR NAVIGATION & GLOW EFFECT
   -------------------------------------------------------- */
.main-sidebar, .left-side {
    background: rgba(7, 10, 20, 0.92) !important;
    backdrop-filter: blur(20px) !important;
    border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
}

.sidebar-menu > li.header {
    background: linear-gradient(90deg, var(--admin-green), var(--admin-primary)) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 900 !important;
    letter-spacing: 1.5px !important;
    padding: 16px 20px 8px !important;
}

.sidebar-menu > li > a {
    color: #cbd5e1 !important;
    border-radius: 12px !important;
    margin: 4px 12px !important;
    font-weight: 700 !important;
    transition: all 0.25s ease !important;
}

.sidebar-menu > li:hover > a, 
.sidebar-menu > li.active > a {
    color: #ffffff !important;
    background: linear-gradient(135deg, rgba(127, 0, 255, 0.4), rgba(0, 242, 254, 0.4)) !important;
    border: 1px solid var(--admin-primary) !important;
    box-shadow: 0 0 20px var(--admin-primary) !important;
    transform: translateX(4px) !important;
}

/* --------------------------------------------------------
   4. TOP HEADER & LOGO
   -------------------------------------------------------- */
.main-header, .main-header .navbar {
    background: rgba(6, 9, 18, 0.92) !important;
    backdrop-filter: blur(15px) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
}

.main-header .logo {
    background: transparent !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 900 !important;
    background: linear-gradient(90deg, var(--admin-green), var(--admin-primary)) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
}

/* --------------------------------------------------------
   5. UNIQUE MULTI-GRADIENT PILL BUTTONS
   -------------------------------------------------------- */
.content-wrapper .btn {
    border-radius: 30px !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 800 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.8px !important;
    border: none !important;
    padding: 9px 22px !important;
    color: #ffffff !important;
    box-shadow: 0 6px 20px rgba(0,0,0,0.4) !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.content-wrapper .btn:hover {
    transform: translateY(-3px) scale(1.03) !important;
    box-shadow: 0 10px 25px var(--admin-primary) !important;
}

.content-wrapper .btn-primary, .content-wrapper a.btn-primary { 
    background: linear-gradient(135deg, var(--admin-secondary) 0%, var(--admin-primary) 100%) !important; 
}
.content-wrapper .btn-success, .content-wrapper a.btn-success { 
    background: linear-gradient(135deg, var(--admin-green) 0%, var(--admin-primary) 100%) !important; 
    color: #000000 !important; 
}
.content-wrapper .btn-danger, .content-wrapper a.btn-danger { 
    background: linear-gradient(135deg, #ff007f 0%, #7f00ff 100%) !important; 
}
.content-wrapper .btn-warning, .content-wrapper a.btn-warning { 
    background: linear-gradient(135deg, #ffe600 0%, #ff007f 100%) !important; 
    color: #000000 !important; 
}

/* --------------------------------------------------------
   6. INPUTS & FOOTER
   -------------------------------------------------------- */
.content-wrapper input, 
.content-wrapper select, 
.content-wrapper textarea {
    background-color: rgba(3, 6, 14, 0.9) !important;
    border: 1px solid var(--admin-primary) !important;
    border-radius: 12px !important;
    color: #ffffff !important;
    padding: 8px 14px !important;
}

.main-footer {
    background: rgba(6, 9, 18, 0.95) !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    color: #94a3b8 !important;
                                       }
