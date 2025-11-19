// =======================================================
// script.js - EN GÜNCEL VE HATA GİDERİLMİŞ KOD
// (Tüm Özellikler Dahil: Kalp, Konfeti, Tam Ekran Kaçış)
// =======================================================

// 1. HTML Elemanlarını Seçme
const soruMetni = document.getElementById('soruMetni');
const evetDugmesi = document.getElementById('evetDugmesi');
const hayirDugmesi = document.getElementById('hayirDugmesi');
const asciiHeart = document.getElementById('asciiHeart'); 


// 2. Konfeti Fonksiyonu
function fireConfetti() {
    // Kütüphane yüklenmemişse hata vermemek için kontrol
    if (typeof confetti === 'undefined') {
        console.error("Konfeti kütüphanesi yüklenemedi. Lütfen index.html dosyasını kontrol edin.");
        return;
    }
    
    const defaults = {
        spread: 360, 
        ticks: 100, 
        gravity: 0.5, 
        scalar: 1.2, 
        zIndex: 9999,
    };

    confetti({
        ...defaults,
        particleCount: 100,
        origin: { x: 0.5, y: 1.0 }
    });
    
    confetti({
        ...defaults,
        particleCount: 75,
        origin: { x: 0.5, y: 1.0 },
        angle: 270,
        spread: 100
    });
}


// 3. EVET Düğmesi İşlevi
evetDugmesi.addEventListener('click', () => {
    // Metni ve stili güncelle
    soruMetni.textContent = "Ben de seni seviyorum! ❤️"; 
    hayirDugmesi.style.display = 'none';
    evetDugmesi.style.backgroundColor = '#ff69b4';
    evetDugmesi.textContent = "Teşekkürler!";
    evetDugmesi.style.cursor = 'default';
    
    // Konfeti Efektini Patlat
    fireConfetti();
});


// 4. HAYIR Düğmesi İşlevi (EKRAN SINIRI ÇÖZÜMLÜ TAM EKRAN KAÇMA)
hayirDugmesi.addEventListener('mousemove', () => { 
    
    const safetyMargin = 5; 
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const buttonWidth = hayirDugmesi.clientWidth;
    const buttonHeight = hayirDugmesi.clientHeight;

    const maxX = viewportWidth - buttonWidth - (safetyMargin * 2); 
    const maxY = viewportHeight - buttonHeight - (safetyMargin * 2); 

    const randomX = safetyMargin + Math.floor(Math.random() * maxX);
    const randomY = safetyMargin + Math.floor(Math.random() * maxY);

    hayirDugmesi.style.left = `${randomX}px`;
    hayirDugmesi.style.top = `${randomY}px`;
});


// 5. Kalp Animasyonu Başlatma
// Sayfa yüklendikten sonra (50ms gecikme ile) animasyonu başlatır
setTimeout(() => {
    // Sadece kalp elementi varsa devam et
    if (asciiHeart) {
        asciiHeart.classList.add('kalp-goster');
    }
}, 50);

console.log("Proje başarıyla yüklendi.");