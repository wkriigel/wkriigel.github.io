(function () {
  "use strict";

  function stylizeWord(word) {
    var output = "";

    for (var i = 0; i < word.length; i += 1) {
      var ch = word.charAt(i);

      if (ch >= "a" && ch <= "z") {
        output += '<span class="sc">' + ch.toUpperCase() + "</span>";
      } else {
        output += ch.toUpperCase();
      }
    }

    return output;
  }

  function stylizeTagLabel(label) {
    return label.replace(/[A-Za-z]+/g, function (word) {
      return stylizeWord(word);
    });
  }

  function applyTagSmallCaps() {
    var tags = document.querySelectorAll(".tags ul li");

    tags.forEach(function (tag) {
      if (tag.dataset.scApplied === "true") {
        return;
      }

      var source = tag.textContent.replace(/\s+/g, " ").trim();
      if (!source) {
        return;
      }

      tag.innerHTML = stylizeTagLabel(source);
      tag.dataset.scApplied = "true";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyTagSmallCaps);
  } else {
    applyTagSmallCaps();
  }
})();
