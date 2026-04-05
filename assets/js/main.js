window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-up").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });

  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {

        // 少し遅延つける（プロ感）
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 100);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));

});



// ===== ハンバーガーメニュー =====
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const links = document.querySelectorAll(".nav a");
const header = document.getElementById("header");

/* 開閉 */
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

/* リンククリックで閉じる */
links.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

// DOM読み込み後に実行
document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector("header");

  // 念のためチェック（超重要）
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

});


// ===== フェードイン（スクロール） =====
const fadeEls = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

fadeEls.forEach(el => fadeInObserver.observe(el));



const track = document.querySelector(".news-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function getVisibleCount() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function updateSlider() {
  const visible = getVisibleCount();
  const slideWidth = document.querySelector(".news-card").offsetWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  const total = document.querySelectorAll(".news-card").length;
  const visible = getVisibleCount();

  if (index < total - visible) {
    index++;
  } else {
    index = 0;
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  const total = document.querySelectorAll(".news-card").length;
  const visible = getVisibleCount();

  if (index > 0) {
    index--;
  } else {
    index = total - visible;
  }
  updateSlider();
});

setInterval(() => {
  nextBtn.click();
}, 5000);

/* リサイズ対応 */
window.addEventListener("resize", updateSlider);

/* 初期 */
updateSlider();



const container = document.querySelector(".member-grid");
const cards = document.querySelectorAll(".member-card");

function updateCenterCard() {
  let closest = null;
  let closestDistance = Infinity;

  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;

    const distance = Math.abs(containerCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closest = card;
    }
  });

  // 一旦全部外す
  cards.forEach(card => card.classList.remove("active"));

  // 一番中央だけ付与
  if (closest) {
    closest.classList.add("active");
  }
}

// 横スクロール時
container.addEventListener("scroll", () => {
  updateCenterCard();
});

// 初期表示
window.addEventListener("load", () => {
  updateCenterCard();
});

// リサイズ時も対応
window.addEventListener("resize", updateCenterCard);



const modal = document.getElementById("memberModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

const memberCards = document.querySelectorAll(".member-card");

// クリックで開く
memberCards.forEach(card => {
  card.addEventListener("click", () => {
    modal.classList.add("active");

    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.name;
    modalText.textContent = card.dataset.text;

    document.body.classList.add("no-scroll");
  });
});

// 閉じる
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

// 背景クリックで閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});


document.querySelectorAll(".media-item").forEach(item => {
  item.addEventListener("click", () => {
    const videoId = item.dataset.video;
    document.querySelector(".media-main iframe").src =
      `https://www.youtube.com/embed/${videoId}`;
  });
});