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

const countersData = [
  { id: "c1", title: "سبحان الله وبحمده" },
  { id: "c2", title: "أستغفر الله العظيم" },
  { id: "c3", title: "اللهم صلِّ على محمد" },
  { id: "c4", title: "لا إله إلا الله" },
  { id: "c5", title: "لا حول ولا قوة إلا بالله" },
  { id: "c6", title: "سبحان الله العظيم" },
  { id: "c7", title: "حسبي الله ونعم الوكيل" },
  { id: "c8", title: "سبحان الله والحمد لله" },
  { id: "c9", title: "يا حي يا قيوم برحمتك أستغيث" },
  { id: "c10", title: "لا إله إلا أنت سبحانك إني كنت من الظالمين" },
  { id: "c11", title: "اللهم إنك عفو كريم تحب العفو فاعف عنا" },
  { id: "c12", title: "اللهم اغفر لعمار" },
];

const ammarPrayers = [
  "اللهم اغفر لعمار وارحمه، وعافه واعف عنه، وأكرم نزله، ووسع مدخله.",
  "اللهم اجعل قبره روضة من رياض الجنة، ولا تجعله حفرة من حفر النار.",
  "اللهم يمّن كتابه، ويسّر حسابه، وثقّل بالحسنات ميزانه، وثبّت على الصراط أقدامه.",
  "اللهم ابنِ له بيتاً في الجنة، واجعل ملتقانا به في الفردوس الأعلى.",
  "اللهم ارزقه بكل حرفٍ من القرآن حلاوة، وبكل كلمةٍ كرامة، وبكل سورةٍ سلامة.",
  "اللهم ارحم من كسر قلوبنا رحيله، واجمعنا به في جنات النعيم.",
  "اللهم اغسله بالماء والثلج والبرد، ونقه من الخطايا كما ينقى الثوب الأبيض من الدنس.",
  "اللهم انقله من ضيق اللحود ومراتع الدود إلى جناتك جنات الخلود.",
  "اللهم بشره بقولك (كلوا واشربوا هنيئاً بما أسلفتم في الأيام الخالية).",
  "اللهم ارزقه لذة النظر إلى وجهك الكريم والشوق إلى لقائك.",
  "اللهم اجعل ذريته وأهله صبراً واحتساباً، واجمعهم به في مستقر رحمتك.",
  "اللهم ارحم غربته، وارحم شيبته (أو شبابه)، واجعله ممن يقال لهم ادخلوها بسلام آمنين.",
];

function showToast(msg) {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: document.documentElement.classList.contains("dark")
      ? "#16181d"
      : "#ffffff",
    color: document.documentElement.classList.contains("dark")
      ? "#ffffff"
      : "#000000",
  });

  Toast.fire({
    icon: "success",
    title: msg,
  });
}

function increment(id, title) {
  let count = (parseInt(localStorage.getItem(id)) || 0) + 1;
  localStorage.setItem(id, count);
  document.getElementById(id).innerText = count;
  if (count % 33 === 0)
    showToast(`تقبل الله.. أتممت ${count} مرة من "${title}"`);
}

function resetCounter(id) {
  localStorage.setItem(id, 0);
  document.getElementById(id).innerText = 0;
}

function resetAllCounters() {
  Swal.fire({
    title: "هل أنت متأكد؟",
    text: "سيتم تصفير جميع عدادات الأذكار!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#c5a059",
    cancelButtonColor: "#d33",
    confirmButtonText: "نعم، صفر الكل",
    cancelButtonText: "إلغاء",
    background: document.documentElement.classList.contains("dark")
      ? "#16181d"
      : "#ffffff",
    color: document.documentElement.classList.contains("dark")
      ? "#ffffff"
      : "#000000",
  }).then((result) => {
    if (result.isConfirmed) {
      countersData.forEach((c) => resetCounter(c.id));
      Swal.fire({
        title: "تم!",
        text: "تم تصفير جميع العدادات بنجاح.",
        icon: "success",
        confirmButtonColor: "#c5a059",
      });
    }
  });
}

function renderAudioLibrary() {
  const reciter = document.getElementById("reciter-select").value;
  const grid = document.getElementById("audio-library-grid");
  grid.innerHTML = surahNames
    .map((name, i) => {
      const num = String(i + 1).padStart(3, "0");
      return `<div class="animate-card bg-slate-50 dark:bg-black/20 p-5 rounded-3xl border border-transparent hover:border-gold/30 transition-all group">
                <div class="flex justify-between items-center"><span class="text-[10px] font-bold text-slate-400 bg-white dark:bg-darkCard w-7 h-7 flex items-center justify-center rounded-full shadow-sm">${i + 1}</span>
                <h3 class="font-bold text-sm text-slate-700 dark:text-slate-300 group-hover:text-gold">${name}</h3></div>
                <audio controls preload="none"><source src="${reciter}${num}.mp3" type="audio/mpeg"></audio></div>`;
    })
    .join("");
}

function toggleSurah(index) {
  let read = JSON.parse(localStorage.getItem("ammar_read_surahs") || "[]");
  const btn = document.getElementById(`surah-btn-${index}`);
  if (read.includes(index)) {
    read = read.filter((i) => i !== index);
    if (btn) btn.classList.remove("surah-btn-done");
  } else {
    read.push(index);
    if (btn) btn.classList.add("surah-btn-done");
  }
  localStorage.setItem("ammar_read_surahs", JSON.stringify(read));
  updateSelectedSurahsUI();
}

function updateSelectedSurahsUI() {
  const read = JSON.parse(localStorage.getItem("ammar_read_surahs") || "[]");
  const container = document.getElementById("selected-surahs-names");
  if (read.length === 0) {
    container.innerHTML = `<p class="text-slate-500 text-xs italic">لم تسجل أي سورة بعد..</p>`;
    return;
  }
  read.sort((a, b) => a - b);
  container.innerHTML = read
    .map(
      (i) => `
        <span class="bg-gold/20 text-gold border border-gold/30 px-3 py-1 rounded-full font-bold text-[10px] flex items-center gap-2 animate-card">
          ${surahNames[i]}
          <button onclick="toggleSurah(${i})" class="hover:text-red-400 transition-colors bg-gold/40 rounded-full w-4 h-4 flex items-center justify-center text-[12px] leading-none">×</button>
        </span>`,
    )
    .join("");
}

function clearAllSurahs() {
  Swal.fire({
    title: "مسح سجل الختمة؟",
    text: "لا يمكنك التراجع عن هذا الإجراء!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#c5a059",
    cancelButtonColor: "#d33",
    confirmButtonText: "نعم، امسح السجل",
    cancelButtonText: "إلغاء",
    background: document.documentElement.classList.contains("dark")
      ? "#16181d"
      : "#ffffff",
    color: document.documentElement.classList.contains("dark")
      ? "#ffffff"
      : "#000000",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("ammar_read_surahs", "[]");
      location.reload();
    }
  });
}

window.onload = () => {
  if (localStorage.getItem("ammar_theme") === "dark")
    document.documentElement.classList.add("dark");

  const cGrid = document.getElementById("counters-grid");
  countersData.forEach((c) => {
    cGrid.innerHTML += `<div class="bg-white dark:bg-darkCard p-6 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm relative">
              <button onclick="resetCounter('${c.id}'); showToast('تم تصفير العداد');" class="absolute top-3 left-3 text-slate-300 hover:text-red-400">↺</button>
              <div class="text-4xl font-black mb-1" id="${c.id}">${localStorage.getItem(c.id) || 0}</div>
              <p class="text-gold text-[10px] font-bold uppercase mb-5">${c.title}</p>
              <button onclick="increment('${c.id}', '${c.title}')" class="w-full py-3 rounded-xl bg-slate-900 dark:bg-gold text-white dark:text-darkMain font-bold text-xs active:scale-95 transition-all">ذكر</button></div>`;
  });

  const pList = document.getElementById("ammar-prayers-list");
  ammarPrayers.forEach(
    (p) =>
      (pList.innerHTML += `<div class="p-6 bg-white/5 rounded-2xl prayer-card"><p class="text-sm text-white/90 italic font-medium leading-relaxed text-right">"${p}"</p></div>`),
  );

  const sGrid = document.getElementById("surahs-buttons-grid");
  const read = JSON.parse(localStorage.getItem("ammar_read_surahs") || "[]");
  surahNames.forEach(
    (n, i) =>
      (sGrid.innerHTML += `<button onclick="toggleSurah(${i})" id="surah-btn-${i}" class="py-2.5 rounded-xl border border-white/10 font-bold text-[10px] transition-all ${read.includes(i) ? "surah-btn-done" : "bg-white/5"}">${n}</button>`),
  );

  updateSelectedSurahsUI();
  renderAudioLibrary();
};

document.getElementById("theme-toggle").onclick = () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "ammar_theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
};
