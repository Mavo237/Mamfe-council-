
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mamfe Council | Manyu Division, Southwest Region</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Plus Jakarta Sans',sans-serif}
body{background:#f7f8f3;color:#1a2b1a;line-height:1.6}
.topbar{background:#0b2e16;color:#fff;padding:8px 0;font-size:13px;text-align:center}
.topbar b{color:#f9c74f}
header{background:#fff;position:sticky;top:0;z-index:100;box-shadow:0 2px 20px rgba(0,0,0,.08);display:flex;justify-content:space-between;align-items:center;padding:14px 6%}
.logo{display:flex;align-items:center;gap:12px}
.logo-icon{width:48px;height:48px;background:#0f6b2e;color:white;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800}
.logo h1{font-size:20px;line-height:1;color:#0b2e16}
.logo span{font-size:11px;letter-spacing:2px;color:#0f6b2e;font-weight:700}
nav{display:flex;gap:24px}
nav a{text-decoration:none;color:#333;font-weight:600;font-size:14px}
.btn{background:#0f6b2e;color:white;padding:11px 20px;border-radius:100px;text-decoration:none;font-weight:700;font-size:14px;display:inline-block}
.btn-gold{background:#f9c74f;color:#0b2e16}
.hero{background:linear-gradient(135deg,#0b2e16 0%,#0f6b2e 55%,#14a244 100%);color:white;padding:60px 6% 70px;display:flex;gap:30px;align-items:center;flex-wrap:wrap}
.hero-text{flex:1;min-width:300px}
.badge{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);padding:6px 12px;border-radius:100px;font-size:12px;font-weight:700;letter-spacing:1px;display:inline-block}
.hero h2{font-family:'Playfair Display',serif;font-size:52px;line-height:1.05;margin:18px 0 14px}
.hero h2 span{color:#f9c74f}
.hero p{opacity:.9;font-size:17px;max-width:520px;margin-bottom:24px}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap}
.hero-card{background:white;color:#111;border-radius:20px;padding:22px;width:340px;box-shadow:0 20px 40px rgba(0,0,0,.25)}
.hero-card h3{font-size:18px;margin-bottom:12px}
.hero-card p{font-size:14px;color:#555;margin:6px 0;display:flex;justify-content:space-between}
.hero-card p b{color:#0f6b2e}
.hero-card hr{border:none;border-top:1px dashed #ddd;margin:12px 0}
.stats{background:white;margin:-30px 6% 0;position:relative;z-index:2;border-radius:18px;box-shadow:0 10px 30px rgba(0,0,0,.08);display:flex;flex-wrap:wrap;padding:20px}
.stat{flex:1;min-width:140px;text-align:center;padding:10px;border-right:1px solid #eee}
.stat:last-child{border:none}
.stat h3{font-size:28px;color:#0f6b2e}
.stat p{font-size:13px;color:#666;font-weight:600}
.section{padding:50px 6%}
.section h2{font-size:32px;color:#0b2e16;text-align:center}
.section p.sub{text-align:center;color:#666;max-width:600px;margin:10px auto 30px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}
.card{background:white;border-radius:18px;padding:24px;border:1px solid #eee;box-shadow:0 4px 16px rgba(0,0,0,.04)}
.card .icon{width:54px;height:54px;border-radius:14px;background:#e8f5ec;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:14px}
.card h3{font-size:18px;margin-bottom:8px}
.card p{font-size:14px;color:#666;margin-bottom:14px}
.card a{color:#0f6b2e;font-weight:700;text-decoration:none;font-size:14px}
.about{display:flex;gap:30px;flex-wrap:wrap;align-items:center;background:#0b2e16;color:white;border-radius:24px;padding:36px}
.about-text{flex:1;min-width:280px}
.about-text h2{color:white;text-align:left;font-size:32px}
.about-text p{opacity:.9;margin:14px 0}
.check{list-style:none;margin:14px 0}
.check li{margin:8px 0;font-size:15px}
.check li:before{content:"✅ ";}
.about-box{background:#f9c
