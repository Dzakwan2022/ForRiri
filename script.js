// Fungsi untuk menampilkan teks dengan efek mengetik
function typeWriterEffect(element, text, delay = 100) {
    let i = 0;
    element.innerHTML = "";
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

// Fungsi untuk membuat hati jatuh di latar belakang
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Jalankan efek hati jatuh setiap 500ms
setInterval(createFallingHeart, 500);

// Fungsi untuk menambahkan efek hati mengapung
function addFloatingHearts() {
    const heartDiv = document.createElement("div");
    heartDiv.classList.add("heart");
    heartDiv.innerHTML = "❤️";
    heartDiv.style.animationDuration = `${Math.random() * 5 + 3}s`;
    heartDiv.style.left = `${Math.random() * 100}vw`;
    document.getElementById('floatingHearts').appendChild(heartDiv);

    setTimeout(() => {
        heartDiv.remove();
    }, 5000);
}

// Fungsi untuk menangani gerakan mouse di zona hati
document.getElementById("heartZone").addEventListener("mousemove", function(event) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    document.getElementById("heartZone").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// Memutar musik romantis
const valentineMusic = document.getElementById("valentineMusic");

// Navigasi Halaman 1 -> 2
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
    valentineMusic.play();
    typeWriterEffect(document.getElementById('valentineText'), "Selamat Hari Valentine Sayangkuu! 💌", 120);
    setInterval(addFloatingHearts, 2000); // Menambahkan efek hati mengapung
});

// Navigasi Halaman 2 -> 3 dengan tombol
document.getElementById('continueButton').addEventListener('click', function() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
    typeWriterEffect(document.getElementById('loveText'), "Aku cinta kamu riri!", 100);
});

// Fungsi Kembali ke Awal
document.getElementById('replayButton').addEventListener('click', function() {
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
    valentineMusic.pause();
    valentineMusic.currentTime = 0;
});
