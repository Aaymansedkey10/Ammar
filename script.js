const surahs = [
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
const counters = [
  { id: "z1", text: "سبحان الله" },
  { id: "z2", text: "الحمد لله" },
  { id: "z3", text: "لا إله إلا الله" },
  { id: "z4", text: "الله أكبر" },
  { id: "z5", text: "أستغفر الله" },
  { id: "z6", text: "لاحول ولا قوة إلا بالله" },
  { id: "z7", text: "اللهم صلِّ على محمد" },
  { id: "z8", text: "سبحان الله وبحمده" },
  { id: "z9", text: "سبحان الله العظيم" },
  { id: "z10", text: "حسبي الله ونعم الوكيل" },
  { id: "z11", text: "يا حي يا قيوم" },
  { id: "z12", text: "اللهم اغفر لعمار" },
  { id: "z13", text: "رضيت بالله رباً" },
  { id: "z14", text: "استغفر الله وأتوب إليه" },
  { id: "z15", text: "اللهم إنك عفو كريم" },
];
const rewards = [
  "تقبل الله منك",
  "نور الله قلبك",
  "اللهم ارحم عمار",
  "كتب الله لك الأجر",
  "أجزل الله لك الثواب",
];
const prayers = [
  "اللهم اغفر لعمار وارحمه واعف عنه وأكرم نزله.",
  "اللهم اجعل قبره روضة من رياض الجنة.",
  "اللهم يمّن كتابه ويسّر حسابه وثقّل بالحسنات ميزانه.",
  "اللهم ارحم من كسر قلوبنا رحيله واجمعنا به في الفردوس الأعلى.",
  "اللهم اجعل عمله هذا أنيساً له في وحشته.",
  "اللهم ارزقه لذة النظر إلى وجهك الكريم.",
  "اللهم بيّض وجهه يوم تبيّض وجوه.",
  "اللهم اسقه من حوض نبيك محمد شربة لا يظمأ بعدها.",
  "اللهم ارفع درجاته في المهديين.",
  "اللهم انظر إليه نظرة رضا.",
  "اللهم قهِ فتنة القبر وعذاب النار.",
  "اللهم ارزق عمار الجنة بغير حساب.",
];

let currentOpenSurahIndex = 0;
let reciters = [];

async function init() {
  try {
    const res = await fetch("https://mp3quran.net/api/v3/reciters?language=ar");
    const data = await res.json();
    reciters = data.reciters
      .map((r) => ({
        name: r.name,
        srv: r.moshaf[0].server,
        list: r.moshaf[0].surah_list.split(","),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
    renderR(reciters);
    setReciter(
      reciters.find((r) => r.name.includes("ماهر المعيقلي")) || reciters[0],
    );
  } catch (e) {}
}

function copyPhone() {
  const phone = document.getElementById("phone-number").innerText;
  navigator.clipboard.writeText(phone).then(() => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      icon: "success",
      title: "تم نسخ الرقم",
      background: "#16181d",
      color: "#c5a059",
    });
  });
}

function renderR(list) {
  document.getElementById("r-list").innerHTML = list
    .map(
      (r) => `
        <div onclick='setReciter(${JSON.stringify(r).replace(/'/g, "&apos;")})' class="p-4 hover:bg-gold/10 cursor-pointer border-b dark:border-white/5 text-sm">${r.name}</div>
      `,
    )
    .join("");
}

function setReciter(r) {
  document.getElementById("active-reciter").innerText = r.name;
  document.getElementById("audio-grid").innerHTML = r.list
    .map((s) => {
      const i = parseInt(s) - 1;
      return `
          <div class="audio-card bg-white dark:bg-darkCard p-5 rounded-3xl shadow-sm border dark:border-slate-800">
              <div class="flex justify-between items-center mb-4">
                  <h4 class="font-bold text-sm">${surahs[i]}</h4>
                  <button onclick="openRead(${i})" class="text-[10px] text-gold border border-gold/20 px-3 py-1 rounded-full hover:bg-gold hover:text-white transition-all">قراءة 📖</button>
              </div>
              <audio controls preload="none"><source src="${r.srv}${String(s).padStart(3, "0")}.mp3"></audio>
          </div>`;
    })
    .join("");
  document.getElementById("drop-menu").classList.add("hidden");
}

function addCount(id) {
  let n = (parseInt(localStorage.getItem(id)) || 0) + 1;
  localStorage.setItem(id, n);
  document.getElementById("num-" + id).innerText = n;
  if (n % 33 === 0) {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2500,
      icon: "success",
      title: rewards[Math.floor(Math.random() * rewards.length)],
      background: document.documentElement.classList.contains("dark")
        ? "#16181d"
        : "#fdf5e6",
      color: "#c5a059",
    });
  }
}

async function openRead(i) {
  currentOpenSurahIndex = i;
  document.getElementById("read-modal").style.display = "flex";
  document.body.style.overflow = "hidden";
  document.getElementById("m-title").innerText = `سورة ${surahs[i]}`;
  const cont = document.getElementById("m-content");
  cont.innerHTML = `<div class="py-20 animate-pulse text-gold">جاري التحميل...</div>`;
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${i + 1}`);
    const d = await res.json();
    let ayahs = d.data.ayahs
      .map((a) => {
        let cleanText = a.text;
        if (
          a.numberInSurah === 1 &&
          cleanText.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
        ) {
          cleanText = cleanText
            .replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
            .trim();
        }
        return cleanText !== ""
          ? `${cleanText} <span class="ayah-num">${a.numberInSurah}</span>`
          : `<span class="ayah-num">${a.numberInSurah}</span>`;
      })
      .join(" ");
    cont.innerHTML = `<div>${i !== 8 ? '<div class="mb-12 font-bold opacity-80 text-3xl font-amiri">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>' : ""}${ayahs}</div>`;
  } catch (e) {
    cont.innerHTML = "خطأ في الاتصال";
  }
}

function navSurah(step) {
  let newIndex = currentOpenSurahIndex + step;
  if (newIndex >= 0 && newIndex <= 113) openRead(newIndex);
}

function markS(i) {
  let k = JSON.parse(localStorage.getItem("khatma_ammar") || "[]");
  k.includes(i) ? (k = k.filter((x) => x !== i)) : k.push(i);
  localStorage.setItem("khatma_ammar", JSON.stringify(k));
  drawK();
}

function drawK() {
  const k = JSON.parse(localStorage.getItem("khatma_ammar") || "[]");
  document.getElementById("khatma-btns").innerHTML = surahs
    .map(
      (s, i) => `
        <button onclick="markS(${i})" class="surah-btn py-2 rounded-lg text-[9px] ${k.includes(i) ? "surah-btn-done" : ""}">${s}</button>
      `,
    )
    .join("");
  document.getElementById("khatma-names").innerHTML =
    k
      .sort((a, b) => a - b)
      .map(
        (i) => `
        <span onclick="markS(${i})" class="bg-gold text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm cursor-pointer">${surahs[i]} ✕</span>
      `,
      )
      .join("") ||
    '<p class="text-slate-400 text-xs italic">اختر السور التي أتممت قراءتها..</p>';
}

window.onload = () => {
  init();
  drawK();
  if (localStorage.getItem("mode") === "dark")
    document.documentElement.classList.add("dark");
  document.getElementById("theme-toggle").innerText =
    document.documentElement.classList.contains("dark") ? "☀️" : "🌙";

  document.getElementById("counters-container").innerHTML = counters
    .map(
      (c) => `
        <div class="bg-white dark:bg-darkCard p-4 rounded-3xl border dark:border-slate-800 text-center shadow-sm">
          <div class="text-2xl font-black text-gold mb-1" id="num-${c.id}">${localStorage.getItem(c.id) || 0}</div>
          <p class="text-[9px] font-bold text-slate-400 uppercase mb-3">${c.text}</p>
          <button onclick="addCount('${c.id}')" class="w-full py-2 bg-slate-900 dark:bg-gold text-white dark:text-darkMain rounded-xl text-xs font-bold active:scale-90 transition-all">ذكر</button>
        </div>
      `,
    )
    .join("");

  document.getElementById("prayers-grid").innerHTML = prayers
    .map(
      (p) => `
        <div class="p-6 bg-white dark:bg-darkCard rounded-3xl border-r-4 border-gold shadow-sm"><p class="font-amiri text-lg leading-relaxed">"${p}"</p></div>
      `,
    )
    .join("");
};

function toggleDrop() {
  document.getElementById("drop-menu").classList.toggle("hidden");
}
function searchR() {
  const q = document.getElementById("q-search").value.toLowerCase();
  renderR(reciters.filter((r) => r.name.includes(q)));
}
function closeRead() {
  document.getElementById("read-modal").style.display = "none";
  document.body.style.overflow = "auto";
}
function resetKhatma() {
  localStorage.setItem("khatma_ammar", "[]");
  drawK();
}

document.getElementById("theme-toggle").onclick = () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "mode",
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
  document.getElementById("theme-toggle").innerText =
    document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
};
