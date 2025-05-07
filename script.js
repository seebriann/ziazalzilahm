const images = [
    "images/zia1.jpg",
    "images/zia5.jpg",
    "images/zia2.jpg",
    "images/zia6.jpg",
    "images/zia3.jpg",
    "images/zia7.jpg",
    "images/zia4.jpg",
    "images/zia8.jpg"
  ];
  
  let current = 0;
  const imgElement = document.getElementById("slideshow");
  let slideshowInterval = null; // untuk kontrol slideshow
  
  function changeImage() {
    current = (current + 1) % images.length;
    imgElement.src = images[current];
  
    // Restart animasi
    imgElement.classList.remove("animate");
    void imgElement.offsetWidth;
    imgElement.classList.add("animate");
  }
  
  // Sakura falling effect
  function createSakura() {
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");
    sakura.style.left = Math.random() * 100 + "vw";
    sakura.textContent = "🌸";
    document.body.appendChild(sakura);
    setTimeout(() => {
      sakura.remove();
    }, 5000);
  }
  
  // Musik kontrol
  function toggleMusic() {
    const music = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");
  
    if (music.paused) {
      music.play();
      btn.textContent = "Pause Music";
  
      // Mulai slideshow
      if (!slideshowInterval) {
        slideshowInterval = setInterval(changeImage, 1000); // ganti gambar tiap 2 detik
      }
    } else {
      music.pause();
      btn.textContent = "Play Music";
  
      // Hentikan slideshow
      clearInterval(slideshowInterval);
      slideshowInterval = null;
    }
  }
  
  // Efek sakura tetap aktif
  setInterval(createSakura, 800);
  