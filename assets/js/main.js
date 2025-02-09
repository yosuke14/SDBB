$(document).ready(function () {
  $('.activity-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // スマホの幅
        settings: {
          slidesToShow: 1, // 1枚だけ表示
          slidesToScroll: 1,
          centerMode: true, // 中央寄せ
          centerPadding: '20px', // 両端の余白
          arrows: false // モバイルでは矢印を非表示
        }
      }
    ]
  });
});


/* ハンバーガーメニュー */
document.getElementById('menu-toggle').addEventListener('click', function () {
  const menuOverlay = document.getElementById('menu-overlay');
  const maintext = document.getElementById('mainText');
  this.classList.toggle('is-active'); // 追加
  menuOverlay.classList.toggle('visible');
  maintext.classList.toggle('feedin-top');
});

document.getElementById('menu-overlay').addEventListener('click', function () {
  const menuOverlay = document.getElementById('menu-overlay');
  const maintext = document.getElementById('mainText');
  document.getElementById('menu-toggle').classList.remove('is-active'); // 追加
  menuOverlay.classList.remove('visible');
  maintext.classList.remove('feedin-top');
});

document.getElementById('menu-overlay').addEventListener('click', function (event) {
  if (event.target.tagName === 'NAV' || event.target.id === 'menu-overlay') {
    this.classList.remove('visible');
  }
});




$(function () {
  // スムーズスクロール
  $('#top_scrool a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      { scrollTop: $($(this).attr('href')).offset().top },
      500,
      'linear'
    );
  });

  // スクロール量が30pxを超えたらフェードアウト
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 30) {
      $('#top_scrool').fadeOut();
    } else {
      $('#top_scrool').fadeIn();
    }
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".feedin-top, .feedin-left, .feedin-right, .sec_line, .feedin-top-sp");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-active");
          observer.unobserve(entry.target); // 一度発火したら監視を外す
        }
      });
    },
    { root: null, threshold: 0.3 } // 30% 画面に入ったら発火
  );

  boxes.forEach((box) => observer.observe(box));
});




