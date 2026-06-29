(function () {
  function initSlider(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll(".slide"));
    if (slides.length < 2) return;
    var index = 0;
    var prev = root.querySelector("[data-prev]");
    var next = root.querySelector("[data-next]");

    function show(nextIndex) {
      slides[index].classList.remove("active");
      index = (nextIndex + slides.length) % slides.length;
      slides[index].classList.add("active");
    }

    if (prev) prev.addEventListener("click", function () { show(index - 1); });
    if (next) next.addEventListener("click", function () { show(index + 1); });
    window.setInterval(function () { show(index + 1); }, 7000);
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-slider]"), initSlider);
}());
