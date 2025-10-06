// data/names.js
// =====================================
// Zoznam povolených mien pre generovanie kódov
// =====================================

const ALLOWED_NAMES = [
  "Wayne Hudson",
  "Roman Tvrdy",
  "Imrich Divny",
  "Jozef Kral",
  "Martin Novak"
];

// export pre použitie v index.html
if (typeof window !== "undefined") {
  window.ALLOWED_NAMES = ALLOWED_NAMES;
}
