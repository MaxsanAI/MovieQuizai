/// <reference path="../../../types/env.d.ts" />

import { getResultById, parseResultRow } from '../../src/lib/database';
import { getQuizById } from '../../src/lib/quizEngine';
import { isValidResultId, SITE_CONFIG } from '../../src/config';

interface OnRequestContext {
  request: Request;
  env: CloudflareEnv;
  params: { id: string };
}

export const onRequestGet: PagesFunction<CloudflareEnv> = async (ctx: OnRequestContext) => {
  const { request, env, params } = ctx;
  const id = params.id;

  if (!id || !isValidResultId(id)) {
    return new Response('Not found', { status: 404 });
  }

  let resultTitle = 'My Movie Result';
  let description = 'Discover your cinematic alter ego on MovieQuiz';
  let shareCaption = 'Find your movie character on MovieQuiz';
  let imageUrl = '';
  let quizSlug = '';
  let hasResult = false;

  if (env.DB) {
    const row = await getResultById(env.DB, id);
    if (row) {
      const parsed = parseResultRow(row);
      resultTitle = `${parsed.resultTitle} — ${parsed.scorePercentage}% Match`;
      description = parsed.shareCaption || parsed.description;
      shareCaption = parsed.shareCaption;
      imageUrl = parsed.shareImageUrl || `${SITE_CONFIG.url}/api/image/${id}`;
      const quiz = getQuizById(parsed.quizId);
      if (quiz) quizSlug = quiz.slug;
      hasResult = true;
    }
  }

  const baseUrl = SITE_CONFIG.url;
  const resultUrl = `${baseUrl}/result/${id}`;
  const ogImage = imageUrl || `${baseUrl}/og-default.svg`;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<title>${escapeHtml(resultTitle)} — MovieQuiz</title>
<meta name="description" content="${escapeAttr(description)}" />
<link rel="canonical" href="${resultUrl}" />
<meta name="theme-color" content="#0a0a0f" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<link rel="manifest" href="/manifest.json" />

<meta property="og:type" content="website" />
<meta property="og:title" content="${escapeAttr(resultTitle)}" />
<meta property="og:description" content="${escapeAttr(shareCaption)}" />
<meta property="og:url" content="${resultUrl}" />
<meta property="og:image" content="${escapeAttr(ogImage)}" />
<meta property="og:site_name" content="MovieQuiz" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeAttr(resultTitle)}" />
<meta name="twitter:description" content="${escapeAttr(shareCaption)}" />
<meta name="twitter:image" content="${escapeAttr(ogImage)}" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() { navigator.serviceWorker.register('/sw.js').catch(function(){}); });
}
</script>
<style>
:root{--color-bg:#0a0a0f;--color-bg-secondary:#12121a;--color-surface:#1a1a24;--color-surface-hover:#22222e;--color-border:rgba(255,255,255,0.08);--color-border-strong:rgba(255,255,255,0.15);--color-text:#f0f0f5;--color-text-secondary:#a0a0b0;--color-text-muted:#606070;--color-primary:#e50914;--color-accent:#ff9800;--color-error:#ff1744;--font-body:'Inter',-apple-system,sans-serif;--font-display:'Oswald','Inter',sans-serif;--radius-sm:8px;--radius-md:12px;--radius-lg:16px;--radius-xl:24px;--transition:0.3s cubic-bezier(0.4,0,0.2,1)}
*{box-sizing:border-box;margin:0;padding:0}
html{background:var(--color-bg);color:var(--color-text);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
body{min-height:100vh;overflow-x:hidden}
body::before{content:'';position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(ellipse at 20% 0%,rgba(229,9,20,0.08) 0%,transparent 50%),radial-gradient(ellipse at 80% 100%,rgba(255,152,0,0.06) 0%,transparent 50%);z-index:-1;pointer-events:none}
a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
h1,h2,h3,h4{font-family:var(--font-display);font-weight:700;line-height:1.2}
.site-header{position:sticky;top:0;z-index:100;background:rgba(10,10,15,0.85);backdrop-filter:blur(20px);border-bottom:1px solid var(--color-border)}
.site-header .inner{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;max-width:960px;margin:0 auto}
.logo{display:flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:700;font-size:1.25rem}
.logo-icon{font-size:1.4rem}
.logo-text{background:linear-gradient(135deg,#e50914,#ff9800);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nav{display:flex;gap:24px}
.nav a{color:var(--color-text-secondary);font-size:0.875rem;font-weight:500;transition:color var(--transition)}
.nav a:hover{color:var(--color-text)}
.result-page{padding:80px 0 40px;min-height:calc(100vh - 60px)}
.container{max-width:480px;margin:0 auto;padding:0 16px}
@media(min-width:768px){.container{max-width:720px;padding:0 24px}}
@media(min-width:1024px){.container{max-width:960px}}
.result-loading{text-align:center;padding:80px 0}
.loading-spinner{width:56px;height:56px;margin:0 auto 20px;border:3px solid rgba(255,255,255,0.1);border-top-color:var(--color-primary);border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.result-loading p{color:var(--color-text-secondary)}
.hidden{display:none!important}
.result-reveal{text-align:center;margin-bottom:40px;animation:fadeIn 0.6s ease}
@keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.result-eyebrow{font-family:var(--font-display);font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--color-text-muted);margin-bottom:20px}
.result-image-wrapper{max-width:400px;margin:0 auto 24px;border-radius:var(--radius-lg);overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.5);border:1px solid var(--color-border)}
.result-image{width:100%;height:auto;display:block}
.result-label{font-size:0.875rem;color:var(--color-text-secondary);margin-bottom:8px}
.result-name{font-size:2rem;margin-bottom:8px;background:linear-gradient(135deg,#e50914,#ff9800);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.result-match{font-family:var(--font-display);font-size:1.5rem;font-weight:700;margin-bottom:16px}
.result-statement{font-size:1rem;color:var(--color-text-secondary);font-style:italic;max-width:400px;margin:0 auto 32px;line-height:1.5}
.result-sections{max-width:600px;margin:0 auto 40px;display:flex;flex-direction:column;gap:28px}
.result-section{padding:24px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg)}
.section-label{font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--color-text-muted);margin-bottom:12px;font-family:var(--font-display)}
.section-text{font-size:1rem;line-height:1.6;color:var(--color-text)}
.traits-list{display:flex;flex-wrap:wrap;gap:8px}
.trait-tag{padding:8px 16px;background:rgba(229,9,20,0.1);border:1px solid rgba(229,9,20,0.2);border-radius:100px;font-size:0.875rem;font-weight:500;color:#ff6b6b}
.share-wrapper{max-width:600px;margin:0 auto 32px}
.share-section{text-align:center}
.share-title{font-size:1.125rem;margin-bottom:16px}
.share-buttons{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
@media(min-width:480px){.share-buttons{grid-template-columns:repeat(6,1fr)}}
.share-btn{display:flex;align-items:center;justify-content:center;padding:12px 8px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md);color:var(--color-text-secondary);font-size:0.75rem;font-weight:500;transition:all 0.25s ease;cursor:pointer;text-decoration:none}
.share-btn:hover{background:var(--color-surface-hover);border-color:var(--color-border-strong);color:var(--color-text);transform:translateY(-2px)}
.result-actions{text-align:center;margin-bottom:48px}
.btn-secondary{display:inline-block;padding:14px 32px;background:var(--color-surface);border:1px solid var(--color-border-strong);color:var(--color-text);font-size:0.9375rem;font-weight:600;border-radius:var(--radius-md);transition:all var(--transition)}
.btn-secondary:hover{background:var(--color-surface-hover)}
.btn-primary{display:inline-block;padding:16px 40px;background:linear-gradient(135deg,#e50914,#b8060f);color:white;font-size:1rem;font-weight:600;border-radius:var(--radius-md);transition:transform var(--transition),box-shadow var(--transition);box-shadow:0 4px 20px rgba(229,9,20,0.3)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 6px 30px rgba(229,9,20,0.5)}
.viral-loop{text-align:center;padding:40px 24px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-xl);max-width:500px;margin:0 auto}
.viral-eyebrow{font-size:0.8125rem;color:var(--color-text-secondary);margin-bottom:12px}
.viral-title{font-size:1.5rem;margin-bottom:24px}
.error-title{font-family:var(--font-display);font-size:1.5rem;margin-bottom:12px;color:var(--color-error);text-align:center}
.error-desc{color:var(--color-text-secondary);text-align:center;margin-bottom:24px}
.result-error{text-align:center;padding:80px 0}
.site-footer{margin-top:auto;padding:48px 16px 32px;border-top:1px solid var(--color-border);background:var(--color-bg-secondary)}
.footer-inner{max-width:720px;margin:0 auto;text-align:center}
.footer-brand{font-family:var(--font-display);font-size:1.25rem;font-weight:700;margin-bottom:12px;background:linear-gradient(135deg,#e50914,#ff9800);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.footer-text{color:var(--color-text-secondary);font-size:0.875rem;line-height:1.5;max-width:400px;margin:0 auto 24px}
.footer-links{display:flex;justify-content:center;gap:24px;margin-bottom:24px;flex-wrap:wrap}
.footer-links a{color:var(--color-text-secondary);font-size:0.875rem;transition:color var(--transition)}
.footer-links a:hover{color:var(--color-text)}
.footer-copy{color:var(--color-text-muted);font-size:0.75rem}
</style>
</head>
<body>
<header class="site-header"><div class="inner"><a href="/" class="logo"><span class="logo-icon">🎬</span><span class="logo-text">MovieQuiz</span></a><nav class="nav"><a href="/">Quizzes</a><a href="/privacy">Privacy</a></nav></div></header>
<main class="result-page"><div class="container">
<div class="result-loading" id="result-loading"><div class="loading-spinner"></div><p>Loading your result...</p></div>
<div class="result-content hidden" id="result-content"></div>
<div class="result-error hidden" id="result-error"><p class="error-title">Result Not Found</p><p class="error-desc">This result may have been removed or the link is incorrect.</p><a href="/" class="btn-primary">Browse Quizzes</a></div>
</div></main>
<footer class="site-footer"><div class="footer-inner"><p class="footer-brand">🎬 MovieQuiz</p><p class="footer-text">Discover your cinematic alter ego. Take a quiz, get a unique AI-generated movie poster, and share your result.</p><div class="footer-links"><a href="/">Quizzes</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></div><p class="footer-copy">© 2026 MovieQuiz. All rights reserved.</p></div></footer>
<script>
(function(){
  var resultId='${id}';
  var loadingEl=document.getElementById('result-loading');
  var contentEl=document.getElementById('result-content');
  var errorEl=document.getElementById('result-error');

  function renderResult(data){
    loadingEl.classList.add('hidden');
    document.title=data.resultTitle+' — MovieQuiz';
    var quiz=data.quiz;
    var traitsHtml=(data.traits||[]).map(function(t){return '<span class="trait-tag">'+t+'</span>';}).join('');
    contentEl.innerHTML=
      '<div class="result-reveal">'+
        '<p class="result-eyebrow">Your Movie Alter Ego</p>'+
        '<div class="result-image-wrapper"><img src="/api/image/'+data.id+'" alt="'+data.resultTitle+'" class="result-image" loading="eager" /></div>'+
        '<p class="result-label">You Are</p>'+
        '<h1 class="result-name">'+data.resultTitle+'</h1>'+
        '<p class="result-match">'+data.scorePercentage+'% Match</p>'+
        '<p class="result-statement">'+data.humorousObservation+'</p>'+
      '</div>'+
      '<div class="result-sections">'+
        '<div class="result-section"><h2 class="section-label">Your Personality</h2><p class="section-text">'+data.description+'</p></div>'+
        '<div class="result-section"><h2 class="section-label">Your Traits</h2><div class="traits-list">'+traitsHtml+'</div></div>'+
        '<div class="result-section"><h2 class="section-label">Your Biggest Strength</h2><p class="section-text">'+data.strength+'</p></div>'+
        '<div class="result-section"><h2 class="section-label">Your Weakness</h2><p class="section-text">'+data.weakness+'</p></div>'+
        '<div class="result-section"><h2 class="section-label">Your Movie Energy</h2><p class="section-text">'+data.movieEnergy+'</p></div>'+
      '</div>'+
      '<div class="share-wrapper" id="share-wrapper"></div>'+
      '<div class="result-actions"><a href="/quiz/'+(quiz?quiz.slug:'')+'" class="btn-secondary">Take The Quiz Again</a></div>'+
      '<div class="viral-loop"><p class="viral-eyebrow">Someone just discovered their movie alter ego.</p><h2 class="viral-title">Think you can beat them?</h2><a href="/quiz/'+(quiz?quiz.slug:'')+'" class="btn-primary">Take The Quiz</a></div>';
    contentEl.classList.remove('hidden');
    initShare(data.id,data.shareCaption);
  }

  function initShare(resultId,shareCaption){
    var sw=document.getElementById('share-wrapper');
    if(!sw)return;
    var shareUrl=window.location.origin+'/result/'+resultId;
    var eu=encodeURIComponent(shareUrl);
    var et=encodeURIComponent(shareCaption);
    var shareUrls={x:'https://twitter.com/intent/tweet?text='+et+'&url='+eu,facebook:'https://www.facebook.com/sharer/sharer.php?u='+eu,whatsapp:'https://wa.me/?text='+et+'%20'+eu,telegram:'https://t.me/share/url?url='+eu+'&text='+et};
    sw.innerHTML='<div class="share-section"><h3 class="share-title">Share Your Result</h3><div class="share-buttons">'+
      '<button class="share-btn" data-p="x"><span>X</span></button>'+
      '<button class="share-btn" data-p="facebook"><span>Facebook</span></button>'+
      '<button class="share-btn" data-p="whatsapp"><span>WhatsApp</span></button>'+
      '<button class="share-btn" data-p="telegram"><span>Telegram</span></button>'+
      '<button class="share-btn" data-p="copy"><span>Copy Link</span></button>'+
      '<a class="share-btn" data-p="download" href="/api/image/'+resultId+'" download="moviequiz-'+resultId+'.jpg"><span>Download</span></a>'+
    '</div></div>';
    sw.querySelectorAll('.share-btn').forEach(function(btn){
      btn.addEventListener('click',function(e){
        e.preventDefault();
        var p=this.dataset.p;
        if(p==='copy'){navigator.clipboard.writeText(shareUrl).then(function(){var s=btn.querySelector('span');var o=s.textContent;s.textContent='Copied!';setTimeout(function(){s.textContent=o;},2000);});}
        else if(p==='download'){window.location.href=btn.getAttribute('href');}
        else if(shareUrls[p]){window.open(shareUrls[p],'_blank','width=600,height=400');}
      });
    });
    if(navigator.share){
      var nb=document.createElement('button');
      nb.className='share-btn';
      nb.style.gridColumn='1/-1';
      nb.innerHTML='<span>Share via device</span>';
      nb.addEventListener('click',function(){navigator.share({title:'MovieQuiz Result',text:shareCaption,url:shareUrl}).catch(function(){});});
      sw.querySelector('.share-buttons').appendChild(nb);
    }
  }

  function loadResult(){
    fetch('/api/result/'+resultId).then(function(res){
      if(!res.ok)throw new Error('Not found');
      return res.json();
    }).then(function(data){renderResult(data);}).catch(function(){
      loadingEl.classList.add('hidden');
      errorEl.classList.remove('hidden');
    });
  }
  loadResult();
})();
</script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
