(function () {
  "use strict";

  AOS.init({
    startEvent: "load",
    offset: 20,
    once: true,
  });

  //Swiper & Lightbox
  var camera = new Swiper("#camera .swiper", {
    speed: 600,
    spaceBetween: 30,
    navigation: {
      enabled: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Filmi izleyin lightbox
  var glightbox = GLightbox({
    selector: ".glightbox",
  });

  //photos lightbox
  var photos = GLightbox({
    selector: "#photos .photo",
  });

  var comment = new Swiper("#comments .swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  });

  //Header Style
  var header = document.getElementById("header");
  var headerScrolled = function () {
    if (window.scrollY > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };
  window.addEventListener("load", headerScrolled);
  document.addEventListener("scroll", headerScrolled);

  //Scrollto
  var links = document.getElementsByClassName("scrollto");
  var focusSectionLink = function (event) {
    for (const link of links) {
      var id = link.hash.slice(1); // slice #'i temizlemek için.
      var section = document.getElementById(id);
      var position = window.scrollY + window.innerHeight / 2; //positon = kaydırma miktarı + görünür alanın yarısı
      //Bölümün BAŞLANGIÇ NOKTASI ile BİTİŞ NOKTASI arasında mı?
      // Kaydırma Miktarı >= Bölüm Başlangıcı VE Kaydırma Miktarı <= (Bölüm Başlangıcı + Bölüm Yüksekliği)
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        link.ariaCurrent = "page";
        link.classList.add("active");
      } else {
        link.ariaCurrent = null;
        link.classList.remove("active");
      }
    }
  };

  var focusSection = function (event) {
    event.preventDefault();
    var id = event.target.hash.slice(1); // slice #'i temizlemek için.
    var section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // yeni kaydırma konumu = bölümün konumu - başlığın yüksekliği
        behavior: "smooth",
      });
    }
  };

  window.addEventListener("scroll", focusSectionLink);
  for (const link of links) {
    link.addEventListener("click", focusSection);
  }
})();
