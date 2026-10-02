document.addEventListener("DOMContentLoaded", () => {

    // قائمة التهاني والأدعية مع ألوان ذهبية وفضية تناسب الخلفية الداكنة
    const wishes = [
        { text: "«ألف مبروك الزفاف السعيد.. أحر التهاني وأجمل الأمنيّات بحياة مليئة بالحب والدفء»", colorClass: "color-gold" },
        { text: "«ربنا يتم لك على خير، وتكون بداية لفصل جديد ومشرق يملؤه الفرح والسكينة»", colorClass: "color-silver" },
        { text: "«اللهم بارك لهما وبارك عليهما واجمع بينهما في خير وعافية»", colorClass: "color-warm" },
        { text: "«من القلب.. مبارك عقد القران والزفاف، دامت دياركم عامرة بالسرور والمودة»", colorClass: "color-rose" },
        { text: "«أسأل الله أن يكتب لكم التوفيق والسعادة الدائمة في كل خطوة قادمة»", colorClass: "color-gold" },
        { text: "«جعله الله زواجاً مباركاً وميموناً، وجعل بينكما من المودة والرحمة أضعاف ما تتمنيان»", colorClass: "color-silver" }
    ];

    let currentIndex = 0;
    const giftOverlay = document.getElementById("gift-overlay");
    const cardContainer = document.getElementById("card-container");
    const wishElement = document.getElementById("dynamic-wish");

    // 1. فتح الهدية الفضية والذهبية تلقائياً بأسلوب راقي
    setTimeout(() => {
        giftOverlay.classList.add("open"); // فتح الغطاء الفضي
        
        setTimeout(() => {
            giftOverlay.classList.add("fade-out"); // اختفاء الهدية
            cardContainer.classList.add("visible"); // ظهور البطاقة المركزية

            // البدء في عرض التهنئة الأولى مباشرة
            startWishesSequence();
        }, 1100);
    }, 800);

    // 2. التتابع المباشر للتهاني
    function updateWish(index) {
        wishElement.classList.add("fade-out");

        setTimeout(() => {
            wishElement.innerText = wishes[index].text;
            wishElement.className = "wish-text " + wishes[index].colorClass;
            wishElement.classList.remove("fade-out");
        }, 800);
    }

    function startWishesSequence() {
        wishElement.innerText = wishes[0].text;
        wishElement.className = "wish-text " + wishes[0].colorClass;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % wishes.length;
            updateWish(currentIndex);
        }, 5000);
    }

    // 3. جزيئات ذهبية وفضية في الخلفية
    const ambientContainer = document.getElementById("ambient-container");
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        
        // التنوع بين الذهبي والفضي
        if (Math.random() > 0.5) {
            particle.classList.add("particle-gold");
        } else {
            particle.classList.add("particle-silver");
        }

        const size = Math.random() * 5 + 3 + "px";
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = Math.random() * 6 + 8 + "s";

        ambientContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 14000);
    }

    setInterval(createParticle, 1000);
});
