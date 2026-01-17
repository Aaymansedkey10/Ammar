const surahNames = [
  "الفاتحة",
  "البقرة",
  "آل عمران",
  "النساء",
  "المائدة",
  "الأنعام",
  "الأعراف",
  "الأنفال",
  "التوبة",
  "يونس",
  "هود",
  "يوسف",
  "الرعد",
  "إبراهيم",
  "الحجر",
  "النحل",
  "الإسراء",
  "الكهف",
  "مريم",
  "طه",
  "الأنبياء",
  "الحج",
  "المؤمنون",
  "النور",
  "الفرقان",
  "الشعراء",
  "النمل",
  "القصص",
  "العنكبوت",
  "الروم",
  "لقمان",
  "السجدة",
  "الأحزاب",
  "سبأ",
  "فاطر",
  "يس",
  "الصافات",
  "ص",
  "الزمر",
  "غافر",
  "فصلت",
  "الشورى",
  "الزخرف",
  "الدخان",
  "الجاثية",
  "الأحقاف",
  "محمد",
  "الفتح",
  "الحجرات",
  "ق",
  "الذاريات",
  "الطور",
  "النجم",
  "القمر",
  "الرحمن",
  "الواقعة",
  "الحديد",
  "المجادلة",
  "الحشر",
  "الممتحنة",
  "الصف",
  "الجمعة",
  "المنافقون",
  "التغابن",
  "الطلاق",
  "التحريم",
  "الملك",
  "القلم",
  "الحاقة",
  "المعارج",
  "نوح",
  "الجن",
  "المزمل",
  "المدثر",
  "القيامة",
  "الإنسان",
  "المرسلات",
  "النبأ",
  "النازعات",
  "عبس",
  "التكوير",
  "الانفطار",
  "المطففين",
  "الانشقاق",
  "البروج",
  "الطارق",
  "الأعلى",
  "الغاشية",
  "الفجر",
  "البلد",
  "الشمس",
  "الليل",
  "الضحى",
  "الشرح",
  "التين",
  "العلق",
  "القدر",
  "البينة",
  "الزلزلة",
  "العاديات",
  "القارعة",
  "التكاثر",
  "العصر",
  "الهمزة",
  "الفيل",
  "قريش",
  "الماعون",
  "الكوثر",
  "الكافرون",
  "النصر",
  "المسد",
  "الإخلاص",
  "الفلق",
  "الناس",
];
const reciters = [
  {
    id: "Alafasy",
    name: "مشاري العفاسي",
    server: "https://server8.mp3quran.net/afs/",
  },
  {
    id: "Maher",
    name: "ماهر المعيقلي",
    server: "https://server12.mp3quran.net/maher/",
  },
  {
    id: "AbdulBaset",
    name: "عبد الباسط (مرتل)",
    server: "https://server7.mp3quran.net/basit/",
  },
  {
    id: "Minshawi",
    name: "محمد صديق المنشاوي",
    server: "https://server10.mp3quran.net/minsh/",
  },
  {
    id: "Shuraim",
    name: "سعود الشريم",
    server: "https://server7.mp3quran.net/shri/",
  },
];
const countersData = [
  { id: "t1", title: "سبحان الله وبحمده" },
  { id: "t2", title: "أستغفر الله العظيم" },
  { id: "t3", title: "اللهم صلِّ على محمد" },
  { id: "t4", title: "لا إله إلا الله" },
  { id: "t5", title: "لا حول ولا قوة إلا بالله" },
  { id: "t6", title: "سبحان الله العظيم" },
  { id: "t7", title: "حسبي الله ونعم الوكيل" },
  { id: "t8", title: "يا حي يا قيوم" },
];

function renderAudioList() {
  const list = document.getElementById("audio-list");
  const selectedId = document.getElementById("reciter-select").value;
  const reciter = reciters.find((r) => r.id === selectedId);
  list.innerHTML = surahNames
    .map((name, index) => {
      const surahId = (index + 1).toString().padStart(3, "0");
      return `
            <div class="bg-white dark:bg-darkCard p-6 rounded-3xl border border-slate-100 dark:border-slate-800 surah-card flex flex-col gap-4 transition-all">
                <div class="flex justify-between items-center">
                    <span class="text-gold font-black italic text-xs">#${index + 1}</span>
                    <h3 class="font-bold text-lg">${name}</h3>
                </div>
                <audio controls preload="none" class="w-full h-9">
                    <source src="${reciter.server}${surahId}.mp3" type="audio/mpeg">
                </audio>
            </div>`;
    })
    .join("");
}

window.increment = function (id) {
  let count = (parseInt(localStorage.getItem(id)) || 0) + 1;
  localStorage.setItem(id, count);
  document.getElementById(id).innerText = count;
  if (count % 33 === 0) {
    confetti({
      particleCount: 40,
      colors: ["#c5a059", "#ffffff"],
      origin: { y: 0.9 },
    });
    showToast("تقبل الله طاعتك");
  }
};

window.togglePart = function (num) {
  let parts = JSON.parse(localStorage.getItem("ammar_parts") || "[]");
  const btn = document.getElementById(`part-${num}`);
  if (parts.includes(num)) {
    parts = parts.filter((p) => p !== num);
    btn.classList.remove("part-btn-done");
  } else {
    parts.push(num);
    btn.classList.add("part-btn-done");
    confetti({ particleCount: 15, colors: ["#000"] });
  }
  localStorage.setItem("ammar_parts", JSON.stringify(parts));
  document.getElementById("parts-count").innerText = parts.length;
};

function showToast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.classList.remove("hidden");
  setTimeout(() => t.classList.add("hidden"), 3000);
}

document.getElementById("theme-toggle").onclick = () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "ammar_theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
  document.getElementById("theme-icon").innerText =
    document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
};

window.onload = () => {
  if (localStorage.getItem("ammar_theme") === "dark") {
    document.documentElement.classList.add("dark");
    document.getElementById("theme-icon").innerText = "☀️";
  }
  const cGrid = document.getElementById("counters-grid");
  countersData.forEach((c) => {
    cGrid.innerHTML += `
            <div class="bg-white dark:bg-darkCard p-6 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                <div class="text-4xl font-black mb-1" id="${c.id}">${localStorage.getItem(c.id) || 0}</div>
                <p class="text-gold text-[10px] font-bold uppercase mb-5 opacity-60">${c.title}</p>
                <button onclick="increment('${c.id}')" class="w-full py-3 rounded-xl bg-slate-900 dark:bg-gold text-white dark:text-darkMain font-bold text-xs">ذكر</button>
            </div>`;
  });
  const qGrid = document.getElementById("quran-grid");
  const savedParts = JSON.parse(localStorage.getItem("ammar_parts") || "[]");
  for (let i = 1; i <= 30; i++) {
    qGrid.innerHTML += `<button onclick="togglePart(${i})" id="part-${i}" class="h-10 rounded-lg border border-darkMain/20 font-bold text-xs transition-all ${savedParts.includes(i) ? "part-btn-done" : "bg-white/10"}">${i}</button>`;
  }
  document.getElementById("parts-count").innerText = savedParts.length;
  const select = document.getElementById("reciter-select");
  select.innerHTML = reciters
    .map((r) => `<option value="${r.id}">${r.name}</option>`)
    .join("");
  renderAudioList();
};
