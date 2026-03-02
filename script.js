// --- 1. भाषा (Language) बदलने का कोड ---
function changeLanguage() {
    let selectedLang = document.getElementById('lang-switch').value;
    let textElements = document.querySelectorAll('.lang');
    
    textElements.forEach(element => {
        element.innerText = element.getAttribute(`data-${selectedLang}`);
    });
}
// ऑटोमैटिक बैनर स्लाइडर
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(showNextSlide, 3500); // 3.5 सेकंड में बैनर बदलेगा

// लाइव क्रिप्टो रेट्स (Seamless Loop के लिए)
async function fetchCryptoPrices() {
    const track = document.getElementById('crypto-track');
    // कुछ पॉपुलर और नए कॉइन्स
    const ids = 'bitcoin,ethereum,solana,binancecoin,the-open-network,ripple,cardano';
    
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`);
        const data = await response.json();
        
        let cardsHTML = '';
        data.forEach(coin => {
            cardsHTML += `
                <div class="card">
                    <img src="${coin.image}" alt="logo">
                    <div class="card-info">
                        <h3>${coin.symbol.toUpperCase()}</h3>
                        <p class="price">$${coin.current_price.toLocaleString()}</p>
                    </div>
                </div>
            `;
        });
        
        // मैजिक ट्रिक: हम कार्ड्स की लिस्ट को 4 बार कॉपी कर रहे हैं ताकि यह कभी खत्म ही न हो!
        track.innerHTML = cardsHTML + cardsHTML + cardsHTML + cardsHTML; 
        
    } catch (error) {
        track.innerHTML = '<p style="color:red;">Error loading market data.</p>';
    }
}

fetchCryptoPrices();
setInterval(fetchCryptoPrices, 30000);