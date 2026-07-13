// ============================================
// AP PHYSICS GUIDE — SHARED SCRIPT
// ============================================

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Reveal-answer buttons for practice problems
  var revealButtons = document.querySelectorAll(".reveal-btn");
  revealButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("data-target");
      var answerEl = document.getElementById(targetId);
      if (!answerEl) return;

      var isShown = answerEl.classList.contains("shown");
      answerEl.classList.toggle("shown");
      btn.textContent = isShown ? "Show Answer" : "Hide Answer";
    });
  });
});
