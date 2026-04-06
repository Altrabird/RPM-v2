// ═══════════════════════════════════════════════════════
// DATA DEFINITIONS
// ═══════════════════════════════════════════════════════

const SCIENCE_CLASSES = ['INOVATIF','INTELEK','KREATIF','KRITIS','PATRIOTIK'];

const SCIENCE_TOPICS = [
  {id:'t1', title:'1.0 Kemahiran Saintifik', short:'T1', standards:['1.1.1','1.1.2','1.1.3','1.1.4','1.2.1','1.2.2','1.2.3','1.2.4','1.2.5']},
  {id:'t2', title:'2.0 Peraturan Bilik Sains', short:'T2', standards:['2.1.1']},
  {id:'t3', title:'3.0 Manusia', short:'T3', standards:['3.1.1','3.1.2','3.1.3','3.1.4','3.1.5','3.1.6']},
  {id:'t4', title:'4.0 Haiwan', short:'T4', standards:['4.1.1','4.1.2','4.1.3','4.1.4','4.1.5','4.1.6','4.1.7']},
  {id:'t5', title:'5.0 Tumbuhan', short:'T5', standards:['5.1.1','5.1.2','5.1.3','5.1.4','5.1.5','5.1.6']},
  {id:'t6', title:'6.0 Terang dan Gelap', short:'T6', standards:['6.1.1','6.1.2','6.1.3','6.1.4','6.1.5','6.1.6']},
  {id:'t7', title:'7.0 Elektrik', short:'T7', standards:['7.1.1','7.1.2','7.1.3','7.1.4','7.1.5','7.1.6','7.1.7']},
  {id:'t8', title:'8.0 Campuran', short:'T8', standards:['8.1.1','8.1.2','8.1.3','8.1.4','8.1.5']},
  {id:'t9', title:'9.0 Bumi', short:'T9', standards:['9.1.1','9.1.2','9.1.3','9.1.4','9.1.5','9.2.1','9.2.2','9.2.3','9.2.4','9.2.5','9.2.6']},
  {id:'t10', title:'10.0 Teknologi', short:'T10', standards:['10.1.1','10.1.2','10.1.3','10.1.4','10.1.5','10.1.6']}
];

const ENGLISH_SKILLS = [
  {id:'ls', title:'Listening', short:'L', standards:['1.1.1','1.2.1','1.2.2','1.2.3','1.2.4','1.2.5','1.3.1']},
  {id:'sp', title:'Speaking', short:'S', standards:['2.1.1','2.1.2','2.1.3','2.1.4','2.1.5','2.2.1','2.2.2','2.3.1']},
  {id:'rd', title:'Reading', short:'R', standards:['3.2.1','3.2.2','3.2.3','3.2.4','3.3.1']},
  {id:'wr', title:'Writing', short:'W', standards:['4.1.2','4.2.1','4.2.2','4.2.3','4.2.4','4.2.5','4.3.1','4.3.2','4.3.3']},
  {id:'la', title:'Language Arts', short:'LA', standards:['5.1.1','5.1.2','5.2.1','5.3.1']}
];

const INITIAL_STUDENTS = {
  science: {
    INOVATIF: ['ABDUL RAHMAN BIN ABDUL ROHIM','IZZAT KHAIR BIN PAWE','KHALIF DANIEL BIN KAMARLIZAN','MOHAMAD QHUZAIRIE ZHAFRAN BIN ABDULLAH','MOHAMMAD ADAM BIN MUKTAR','MUHAMMAD AKID AARIZ BIN MUHAMMAD AZHARUL ASRAF','MUHAMMAD HANIFF AQIL BIN MOHD.SHUKERY','MUHAMMAD HARRAZ DANIELL BIN ABDULLAH','MUHAMMAD IRSYAD ASHRAF BIN ASRAN','MUHAMMAD IZZUDDIN BIN MOHD. KHAIRUDDIN','MUHAMMAD RAYYAN EVAN BIN ABDULLAH','MUHAMMAD SYARIF MALIK HAMSA BIN AZIS','MUHAMMAD WAFIY AFEEF BIN MOHD HAFIZI','MUHAMMAT YUSUF BIN MOHARMANS','NUR IZZUL HAKIM BIN NURMANSYAH','RAIQAL DANIEL BIN RAZALI','WAHHAAJ WAFIQ BIN ABDULLAH','AIN ATHIRAH BINTI MOHAMMAD IDZWAN SHAH','AISYAH AZZAHRA BINTI MOHD SHAHRIR','ANGGUN RAMANIA BINTI SULAIMAN','MIKHAYLA AR RAUDHAH BINTI BUSTAN','NUR ADRYANA BINTI MOHD JAIS','NUR ALESHA ZAHRA BINTI AL ALIY','NUR HAFEEZAH BINTI MOHD FAISAL','NUR MAYA ALISYAH BINTI ADY','NUR ZULAIKHA UMAIRAH BINTI DISKUL','NURUL ZINNIRAH ZAHRAA BINTI SAMSUDDIN','NURWANA AINA BINTI SALAHUDDIN','QISYA NUR HANA BINTI MOHD HUZAIMI','SITI NUR ADAWIYAH BINTI ABDULLAH'],
    INTELEK: ['AARAIZZANI SAZZLAN SUELO','AIN NABILAH BINTI ABD OSMAN','ALEX DANIEL JAMES','AURIEL RIZKY BIN MARKUN','BHAN HUSSEIN BIN MASLI','DIEANA QUEENA AUFA BINTI SAMSIR','MARDHIA ADAWIYAH BINTI GUNI','MIRA MAHIRAH BINTI UMAR','MUHAMAD ANIF ARIFFIN BIN MUHAMAD RIDWAN','MUHAMMAD ADAM FIRDAUS BIN IBNU WAHID','MUHAMMAD AQIL IMAN BIN ABDUL SAID','MUHAMMAD ASYAMI ASHRAF BIN ABDULLAH','MUHAMMAD AZRIANSHAH BIN RAMLEE','MUHAMMAD HAZIQ BIN LATATI','MUHAMMAD RIFQI BIN SURIYADI','MUHAMMAD SAFFIE BIN SAFRIE','MUHAMMAD SAFFIQ BIN SAFRIE','MUHAMMAD UMAR BIN LA DANI','NUR AFEEYA ERYNA BINTI ABDUL HAMID','NUR AINA ZAHRAH BINTI SUTACHI','NUR ATHIRA ELIKA BINTI ABDULLAH','NUR FARAH IZZATUNNISA QALESYA BINTI DEDY','NUR TAMIMAH BINTI MUHAMMAD AFIQ','NUR ZAFIRAH BINTI ANWAR','NURUL INSYIRAH QISTINA BINTI AZLIN','RASYAD SUFYAN BIN RUSLING','SAIDATUL SHIEFA BINTI SAFRIE','SHARIFAH AISYAH SOFEA BINTI SYED ABDULLAH','HANA ZULAIKHA BINTI HARIS'],
    KREATIF: ['ADRIANS AZRAF BIN MOHD FUAD','AHMAD DANIEL BIN ABDULLAH','AISYAH AQILAH BINTI AGUS','AYRA AD DHUHA BINTI MOHD NOOR AFSAR','DZIHAN BIN ZAMRI','HANIS BATRISYA BINTI ABDULLAH','MARIAH FAIHA BINTI MAARUF','MOHAMAD AFIQ DAIYAN BIN ABDULLAH','MOHAMAD AZLAN BIN ROSLAN','MOHAMMAD ADAM RAYHAN BIN ABDULLAH','MOHAMMAD MILZA BIN ABDULLAH','MOHAMMAD RAFIE BIN REJAR','MUHAMMAD ADY IQUAN SHAH BIN RIDZUAN','MUHAMMAD FAZRUL GULTOM BIN OLOAN FAISAL','MUHAMMAD KHAIRI SYUFIAN BIN ABDULLAH','MUHAMMAD MUNAWWIR BIN MUHAMMAD YAKUB','MUHAMMAD YUSUF BIN MOHD USMAN','NUR AAIRA ALEESYA BINTI GUL NAWAB','NUR AFIQAH BINTI ASDAR','NUR FARISAH BINTI MOHAMMAD SAFIR','NUR JIHA BINTI ABDULLAH','NURASYIKIN BINTI MUHD SAINI','PUTRI NUR ATHIRAH ADAWIYAH BINTI ERIC NYALDA','PUTRI ZAARA SOFEA BINTI S BUDI','RABIATUL ADAWIYAH BINTI JUMADI','RIDWAN BIN ABDULLAH','ROSNAIDA BINTI MAHADI','SITI NURHANAZZALEA BINTI KADER','SUSILAWATI BINTI ROSLI'],
    KRITIS: ['ALIF MUKHZANI BIN HAMIDUN','EIDLAN HAQIMI BIN ADIE','MOHAMAD IQBAL BIN MOHD SAKIR','MOHAMMAD HAFIZUL BIN DATU IDRIL','MUHAMMAD AFIQ ZAYYAN BIN JARMAN','MUHAMMAD AISH MIKHAIL BIN ABDULLAH','MUHAMMAD AL QODRI BIN ANCHI','MUHAMMAD ASYARI BIN ABDULLAH','MUHAMMAD HARRAZ HAZRAFF BIN MOHAMMAD HAFIZ','MUHAMMAD KHUSYAIRI BIN SULAIMAN','MUHAMMAD RAYQAL BIN AHMAD AL HADI','MUHAMMAD RAYYAN RIZQI BIN MOHD.RIZAN','MUHAMMAD RIAZ ARYAN BIN IRWAN','MUHAMMAD SYAHIRUL BIN ISAK','MUHAMMAD SYAMSUL RIZAL BIN UMAR','MUHAMMAD UMAR QAIS BIN FASLAM','MUHAMMAD ZIYAD QHUZAIRY BIN MOHD FIRDAUS','AZZIEDA IFRA MIKAYLA BINTI ABDEL AZIZ','DAMIAA HAFIYAH BINTI ABDULLAH','HASYA HANA BINTI HASRIE','MAYRA MARNYSA BINTI MURANSAH','NOR IZARAH SYAFIYAH BINTI SUBRY','NUR IZZATI ZAQIYAH BINTI KING FAISAL','NUR RIANI BINTI RAMLI','NUR SYIFAA HAURA BINTI SERMAN','NUR ZHAFIRAH BINTI MAZLY ADZILAN','NURUL SAFIYYAH NABILA BINTI MOHAMAD HAFIEZ','PUTRI NUR IZZAH SYAZWANI BINTI MUHAMAD AZLAN','SHIRIN ELEENA BINTI ABDULLAH','SYARIFAH AAFIYAH BINTI ALNIEZHAR A.SAILABBI'],
    PATRIOTIK: ['EZUL IMAN BIN ZUL MOHD HADIRILAH','HIPSY MUHAMMAD HUZAIFAH BIN HIPSY PAYSAL','KHABIB MUZAKKIR BIN MOHAMAD ILHAM','MOHAMMAD FAIZIN BIN MOHD FAIZAL','MOHAMMAD RIDWAN BIN ABDULLAH','MUHAMAD AIDIL AQIL BIN MADEALI','MUHAMMAD ADAM HAMIZAN BIN MOHAMMAD KHAIROOL ASYRAF','MUHAMMAD AQIL FAHMI BIN ZULBADA','MUHAMMAD FARIS FAZRI BIN FAIZUL','MUHAMMAD HAIRUL HADI BIN RAHMAN','MUHAMMAD LUTHFI ASYRAF BIN MOHAMMAD KHAIRIL','MUHAMMAD SYAHNIZAM BIN ABD SYAHID','RIZQIANSYAH MIKAEL BIN LAMULYADI','TUAH YUSUF BIN KARTAMIN','AYRA AREESYA BINTI ISMAWIE','DAYANG NORMASIRAH BINTI MATUSIN','MASTIKA BINTI MASLI','NOOR AFINA BINTI MUHAMMAD ALIF','NUR ANEESA MAISARAH BINTI ABDULLAH','NUR AQISHA SOFIA BINTI NAZARIE','NUR ERINA KHAYRISYA BINTI RASIDI','NUR FATIHAH RAISSA BINTI ABDUL SAMAD','NUR HADINAH HIDAYAH BINTI MARDIN','NUR NAADHIRA AAFIYA BINTI ASMIRAN','NUR NAIRRA MIKAYLA BINTI ABDULLAH','NUR SAFFIYA MIKHAYLA BINTI ARIFUDDIN','NURSHUHADA BINTI NASRUL','NURUL SYAFIYAH BINTI MOHD SAFIKH','SITI NUR AAFIYAH MOHD HAFIZ BINTI ABDULLAH']
  },
  english: ['ADAM FIRDAUS BIN ABDULLAH','EDRY QUSYAIRI BIN MOHD FAIZAL','MOHAMAD NAJIB BIN SAMADE','MOHAMAD RAMADHAN BIN MOHAMAD SALLEH','MUHAMMAD AMIIN ALHADI BIN MOHD HISWADI','MUHAMMAD FAHIM DARWISY BIN MUHAMMAD FAIZ','MUHAMMAD HAIZUL BIN ABDUL HAFID','MUHAMMAD IKHWAN RAUHILLAH LIM ABDULLAH','MUHAMMAD IRSYAD BIN ABDULLAH','MUHAMMAD NAZMI FAIZ BIN NISWAN','MUHAMMAD SHARHAN HARITH BIN RAHMAN','MUHAMMAD SYEIK ZULKARNAIN BIN HAERIL','MUHAMMAD ZHAFIF ASYRAF BIN MOHAMMAD KHAIRIL','MUHAMMED YUSOF ALEXANDER BIN RUDIH','NORHISYAM BIN ABDULLAH','RAYYAN DANISH BIN ABDULLAH','AFIQAH BINTI ABDUL UAHAB @ ABDUL WAHAB','HASLIANA BINTI ABDULLAH','NUR AMANINA MARDHIYAH BINTI SHAIN','NUR ANNYZAH BINTI RASAK','NUR AYRA MIKAYLA BINTI ABDULLAH','NUR SHARILA BALQIS BINTI ALI RAHMAN','NURIFFA AMANY BINTI ABDULLAH','NURSIKIN NAZIRAH BINTI RUDY','NURUL AISYAH BALQIS BINTI LAAZMI','NURUL MAIZARAH AMIRAH BINTI SOFIAN','PUTRI SYAZANANI FIRZANAH BINTI SAMSUDIN','QHAIRA ATHIRAH BINTI GUSMAN']
};

// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════

let state = {
  settings: {
    school: 'SK Bandar Tawau',
    address: 'P/S 214, 91007 Tawau, Sabah',
    code: 'XBA3051',
    teacher: 'Harsidi bin Junick',
    year: new Date().getFullYear().toString(),
    scriptURL: 'https://script.google.com/macros/s/AKfycbxqfbHglxhz0VXMNnJFj-55rARTMR_J9shFqyUysvbz0Jou__OXtrQ3BBoxSC2xHEjvHw/exec'
  },
  students: JSON.parse(JSON.stringify(INITIAL_STUDENTS)),
  scores:     { science: {}, english: {} },
  points:     {},
  bookChecks: {}
};

let ui = {
  entrySubject:   'science',
  entryView:      'grid',
  entryClass:     'INOVATIF',
  entryTopic:     't1',
  entryEngSkill:  'ls',
  compareSubject: 'science',
  manageSubject:  'science',
  manageClass:    'INOVATIF',
  distSubject:    'science',
  booksSubject:   'science',
  booksClass:     'INOVATIF',
  pointsSubject:  'science',
  pointsClass:    'INOVATIF'
};

let charts = {};
let syncTimer;

// ═══════════════════════════════════════════════════════
// LOCAL STORAGE
// ═══════════════════════════════════════════════════════

function saveLocal() {
  try {
    localStorage.setItem('rpm_state', JSON.stringify(state));
  } catch(e) {}
}

function loadLocal() {
  try {
    const saved = localStorage.getItem('rpm_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = Object.assign({}, state, parsed);
      state.settings   = Object.assign({}, state.settings, parsed.settings || {});
      if (!state.settings.scriptURL) {
        state.settings.scriptURL = 'https://script.google.com/macros/s/AKfycbxqfbHglxhz0VXMNnJFj-55rARTMR_J9shFqyUysvbz0Jou__OXtrQ3BBoxSC2xHEjvHw/exec';
      }
      if (!state.students) state.students = JSON.parse(JSON.stringify(INITIAL_STUDENTS));
      if (!state.students.science) state.students.science = JSON.parse(JSON.stringify(INITIAL_STUDENTS.science));
      if (!state.students.english || !Array.isArray(state.students.english)) state.students.english = [...INITIAL_STUDENTS.english];
      if (!state.scores)     state.scores     = { science: {}, english: {} };
      if (!state.points)     state.points     = {};
      if (!state.bookChecks) state.bookChecks = {};
    }
  } catch(e) {}
}

// ═══════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════

function getScore(subject, cls, studentName, topicId, sp) {
  const key = subject === 'science' ? `${cls}__${studentName}` : studentName;
  return state.scores[subject]?.[key]?.[topicId]?.[sp] || null;
}

function setScore(subject, cls, studentName, topicId, sp, val, dateVal) {
  const key = subject === 'science' ? `${cls}__${studentName}` : studentName;
  if (!state.scores[subject]) state.scores[subject] = {};
  if (!state.scores[subject][key]) state.scores[subject][key] = {};
  if (!state.scores[subject][key][topicId]) state.scores[subject][key][topicId] = {};

  const existing = state.scores[subject][key][topicId][sp] || {};
  const oldTP    = existing.tp || 0;

  if (val) {
    const newTP = parseInt(val);
    state.scores[subject][key][topicId][sp] = {
      tp:   newTP,
      date: dateVal || existing.date || new Date().toISOString().split('T')[0]
    };
    if (newTP > 0) {
      const pts    = newTP;
      const bonus  = newTP > oldTP ? 1 : 0;
      const reason = `${subject === 'science' ? 'Sains' : 'BI'} SP ${sp} — TP ${newTP}${bonus ? ' (+1 peningkatan)' : ''}`;
      awardPoints(studentName, cls, subject, pts + bonus, reason, 'tp');
    }
  } else {
    delete state.scores[subject][key][topicId][sp];
  }
  saveLocal();
  updatePendingBadge();
  scheduleSyncAutoSave();
}

function getStudentTopicAvg(subject, cls, studentName, topicId) {
  const key = subject === 'science' ? `${cls}__${studentName}` : studentName;
  const topicScores = state.scores[subject]?.[key]?.[topicId];
  if (!topicScores) return 0;
  const vals = Object.values(topicScores).map(s => s.tp).filter(v => v > 0);
  return vals.length ? vals.reduce((a,b) => a+b, 0) / vals.length : 0;
}

function getStudentOverallAvg(subject, cls, studentName) {
  const topics = subject === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  const avgs = topics.map(t => getStudentTopicAvg(subject, cls, studentName, t.id)).filter(v => v > 0);
  return avgs.length ? avgs.reduce((a,b) => a+b, 0) / avgs.length : 0;
}

function getClassTopicAvg(subject, cls, topicId) {
  const students = subject === 'science' ? state.students.science[cls] : state.students.english;
  if (!students) return 0;
  const avgs = students.map(n => getStudentTopicAvg(subject, cls, n, topicId)).filter(v => v > 0);
  return avgs.length ? avgs.reduce((a,b) => a+b, 0) / avgs.length : 0;
}

function getTotalDataCount() {
  let count = 0;
  ['science','english'].forEach(subj => {
    Object.values(state.scores[subj] || {}).forEach(keys => {
      Object.values(keys).forEach(topic => {
        count += Object.keys(topic).length;
      });
    });
  });
  return count;
}

function getAllStudentCount() {
  let n = 0;
  SCIENCE_CLASSES.forEach(c => { n += (state.students.science[c] || []).length; });
  n += (state.students.english || []).length;
  return n;
}

function getOverallDistribution(subject) {
  const dist = {1:0,2:0,3:0,4:0,5:0,6:0};
  Object.values(state.scores[subject] || {}).forEach(stud => {
    Object.values(stud).forEach(topic => {
      Object.values(topic).forEach(entry => {
        if (entry.tp >= 1 && entry.tp <= 6) dist[entry.tp]++;
      });
    });
  });
  return dist;
}

function getClassStudents(subject, cls) {
  return subject === 'science'
    ? (state.students.science[cls] || [])
    : (state.students.english || []);
}

function getStudentKey(subject, cls, name) {
  return subject === 'science' ? cls + '__' + name : name;
}

function getTpColor(tp) {
  const colors = { 1:'#dc2626',2:'#ea580c',3:'#ca8a04',4:'#16a34a',5:'#2563eb',6:'#7c3aed' };
  return colors[tp] || '#b0b3bf';
}

function tpBadge(avg) {
  if (!avg) return '<span class="tp tp-0">\u2014</span>';
  const r = Math.round(avg);
  return `<span class="tp tp-${r}">TP ${avg.toFixed(1)}</span>`;
}

function scheduleSyncAutoSave() {
  clearTimeout(syncTimer);
  if (!state.settings.scriptURL || state.settings.scriptURL.includes('script.google.com') === false) return;
  syncTimer = setTimeout(syncToSheets, 4000);
}

// ═══════════════════════════════════════════════════════
// POINTS ENGINE
// ═══════════════════════════════════════════════════════

const POINTS_BOOK = 2;

function studentPointKey(name, cls, subject) {
  return subject === 'science' ? `${cls}__${name}` : name;
}

function getPoints(name, cls, subject) {
  const key = studentPointKey(name, cls, subject);
  return state.points[key] || { total: 0, log: [] };
}

function awardPoints(name, cls, subject, pts, reason, type) {
  if (!pts) return;
  const key = studentPointKey(name, cls, subject);
  if (!state.points[key]) state.points[key] = { total: 0, log: [] };
  state.points[key].total = (state.points[key].total || 0) + pts;
  state.points[key].log.unshift({
    date:   new Date().toISOString().split('T')[0],
    reason, pts, type
  });
  if (state.points[key].log.length > 200) state.points[key].log.length = 200;
}

function deductPoints(name, cls, subject, pts, reason) {
  const key = studentPointKey(name, cls, subject);
  if (!state.points[key]) state.points[key] = { total: 0, log: [] };
  const actual = Math.min(pts, state.points[key].total);
  state.points[key].total = Math.max(0, state.points[key].total - pts);
  state.points[key].log.unshift({
    date:   new Date().toISOString().split('T')[0],
    reason, pts: -actual, type: 'deduct'
  });
}

function recordBookCheck(name, cls, subject, note, dateVal) {
  const key = studentPointKey(name, cls, subject);
  if (!state.bookChecks[key]) state.bookChecks[key] = { records: [] };
  const date = dateVal || new Date().toISOString().split('T')[0];
  state.bookChecks[key].records.unshift({ date, subject, cls, note: note || '', pts: POINTS_BOOK });
  awardPoints(name, cls, subject, POINTS_BOOK, `Semakan buku \u2014 ${note || ''}`, 'book');
  saveLocal();
  scheduleSyncAutoSave();
}

function getBookChecks(name, cls, subject) {
  const key = studentPointKey(name, cls, subject);
  return state.bookChecks[key]?.records || [];
}

function ptsBadge(pts) {
  if (pts === undefined || pts === null) pts = 0;
  const color = pts >= 50 ? '#7c3aed' : pts >= 20 ? '#2563eb' : pts >= 10 ? '#16a34a' : pts > 0 ? '#ca8a04' : '#b0b3bf';
  const bg    = pts >= 50 ? '#f5f3ff' : pts >= 20 ? '#eff6ff' : pts >= 10 ? '#f0fdf4' : pts > 0 ? '#fefce8' : '#f7f8fa';
  return `<span style="background:${bg};color:${color};font-weight:700;font-size:12px;padding:3px 10px;border-radius:20px;display:inline-block">${pts} \u2b50</span>`;
}

// ═══════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════

const PAGE_TITLES = {
  dashboard: 'Dashboard',
  entry:     'Kemasukan Data',
  books:     'Semakan Buku',
  points:    'Mata Terkumpul',
  reports:   'Laporan Individu',
  compare:   'Bandingkan Kelas',
  print:     'Cetak Laporan',
  manage:    'Pengurusan Murid',
  settings:  'Tetapan & Sync'
};

document.querySelectorAll('.nav-item[data-page]').forEach(item => {
  item.addEventListener('click', () => {
    const page = item.dataset.page;
    navigateTo(page);
    if (window.innerWidth <= 768) closeSidebar();
  });
});

function navigateTo(page) {
  closeSidebar();
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`)?.classList.add('active');
  document.getElementById('pageTitle').textContent = PAGE_TITLES[page] || page;

  // Update mobile bottom nav active state
  document.querySelectorAll('.mobile-nav-btn[data-page]').forEach(b => b.classList.toggle('active', b.dataset.page === page));

  if (page === 'dashboard') renderDashboard();
  if (page === 'entry')     renderEntryPage();
  if (page === 'books')     renderBooksPage();
  if (page === 'points')    renderPointsPage();
  if (page === 'reports')   renderReportsPage();
  if (page === 'compare')   renderComparePage();
  if (page === 'print')     renderPrintPage();
  if (page === 'manage')    renderManagePage();
  if (page === 'settings')  loadSettingsPage();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay-bg').classList.toggle('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay-bg').classList.remove('show');
}

// ═══════════════════════════════════════════════════════
// PENDING BADGE
// ═══════════════════════════════════════════════════════

function updatePendingBadge() {
  let pending = 0;
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      const avg = getStudentOverallAvg('science', cls, name);
      if (avg === 0) pending++;
    });
  });
  (state.students.english || []).forEach(name => {
    if (getStudentOverallAvg('english', null, name) === 0) pending++;
  });
  const badge = document.getElementById('nb-pending');
  if (badge) {
    badge.textContent = pending;
    badge.className = 'nav-badge' + (pending === 0 ? ' ok' : '');
  }
}

// ═══════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════

function renderDashboard() {
  const totalStudents = getAllStudentCount();
  const totalData = getTotalDataCount();

  // Compute overall averages
  let scienceAvgs = [], engAvgs = [];
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(n => {
      const a = getStudentOverallAvg('science', cls, n);
      if (a > 0) scienceAvgs.push(a);
    });
  });
  (state.students.english || []).forEach(n => {
    const a = getStudentOverallAvg('english', null, n);
    if (a > 0) engAvgs.push(a);
  });

  const scienceAvg = scienceAvgs.length ? scienceAvgs.reduce((a, b) => a + b, 0) / scienceAvgs.length : 0;
  const engAvg = engAvgs.length ? engAvgs.reduce((a, b) => a + b, 0) / engAvgs.length : 0;

  document.getElementById('dashMetrics').innerHTML = `
    <div class="metric">
      <div class="metric-icon mi-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
      <div class="metric-val">${totalStudents}</div>
      <div class="metric-label">Jumlah Murid</div>
    </div>
    <div class="metric">
      <div class="metric-icon mi-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></div>
      <div class="metric-val">${totalData}</div>
      <div class="metric-label">Jumlah Data SP</div>
    </div>
    <div class="metric">
      <div class="metric-icon mi-purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
      <div class="metric-val">${scienceAvg > 0 ? scienceAvg.toFixed(1) : '\u2014'}</div>
      <div class="metric-label">Purata Sains</div>
    </div>
    <div class="metric">
      <div class="metric-icon mi-teal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0 1 6.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg></div>
      <div class="metric-val">${engAvg > 0 ? engAvg.toFixed(1) : '\u2014'}</div>
      <div class="metric-label">Purata BI</div>
    </div>
    <div class="metric">
      <div class="metric-icon mi-red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></div>
      <div class="metric-val" id="pendingMetric">\u2014</div>
      <div class="metric-label">Belum Dinilai</div>
    </div>
  `;

  // Count pending
  let pending = 0;
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      if (getStudentOverallAvg('science', cls, name) === 0) pending++;
    });
  });
  (state.students.english || []).forEach(name => {
    if (getStudentOverallAvg('english', null, name) === 0) pending++;
  });
  document.getElementById('pendingMetric').textContent = pending;

  renderDistributionChart(ui.distSubject);
  renderTopicChart();
  renderClassCompareChart();
  renderNotifications();
}

function switchDistChart(subj) {
  ui.distSubject = subj;
  document.querySelectorAll('#distSubjTabs .mini-tab').forEach((t, i) => {
    t.classList.toggle('active', ['science', 'english', 'all'][i] === subj);
  });
  renderDistributionChart(subj);
}

function renderDistributionChart(subj) {
  const ctx = document.getElementById('distChart');
  if (!ctx) return;
  if (typeof Chart === 'undefined') return;
  if (charts.dist) charts.dist.destroy();

  let dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  if (subj === 'all') {
    const d1 = getOverallDistribution('science');
    const d2 = getOverallDistribution('english');
    [1, 2, 3, 4, 5, 6].forEach(k => dist[k] = d1[k] + d2[k]);
  } else {
    dist = getOverallDistribution(subj);
  }

  charts.dist = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['TP 1', 'TP 2', 'TP 3', 'TP 4', 'TP 5', 'TP 6'],
      datasets: [{
        label: 'Bilangan',
        data: [dist[1], dist[2], dist[3], dist[4], dist[5], dist[6]],
        backgroundColor: ['#fca5a5', '#fdba74', '#fde68a', '#6ee7b7', '#93c5fd', '#c4b5fd'],
        borderColor: ['#dc2626', '#ea580c', '#ca8a04', '#16a34a', '#2563eb', '#7c3aed'],
        borderWidth: 1.5,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: '#f1f2f5' } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderTopicChart() {
  const ctx = document.getElementById('topicChart');
  if (!ctx) return;
  if (typeof Chart === 'undefined') return;
  if (charts.topic) charts.topic.destroy();

  const labels = SCIENCE_TOPICS.map(t => t.short);
  const datasets = SCIENCE_CLASSES.map((cls, i) => {
    const colors = ['#7c3aed', '#2563eb', '#16a34a', '#d97706', '#dc2626'];
    const avgs = SCIENCE_TOPICS.map(t => getClassTopicAvg('science', cls, t.id));
    return {
      label: cls,
      data: avgs,
      borderColor: colors[i],
      backgroundColor: colors[i] + '18',
      tension: 0.4,
      pointRadius: 3,
      borderWidth: 2
    };
  });

  charts.topic = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } } },
      scales: {
        y: { beginAtZero: true, max: 6, ticks: { stepSize: 1 }, grid: { color: '#f1f2f5' } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderClassCompareChart() {
  const ctx = document.getElementById('classCompareChart');
  if (!ctx) return;
  if (typeof Chart === 'undefined') return;
  if (charts.classComp) charts.classComp.destroy();

  const labels = SCIENCE_CLASSES;
  const avgs = SCIENCE_CLASSES.map(cls => {
    const vals = (state.students.science[cls] || []).map(n => getStudentOverallAvg('science', cls, n)).filter(v => v > 0);
    return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2) : 0;
  });

  charts.classComp = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Purata TP',
        data: avgs,
        backgroundColor: ['#ede9fe', '#dbeafe', '#dcfce7', '#fef3c7', '#fee2e2'],
        borderColor: ['#7c3aed', '#2563eb', '#16a34a', '#d97706', '#dc2626'],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, max: 6, ticks: { stepSize: 1 }, grid: { color: '#f1f2f5' } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderNotifications() {
  const items = [];
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      SCIENCE_TOPICS.forEach(topic => {
        const avg = getStudentTopicAvg('science', cls, name, topic.id);
        if (avg === 0) {
          items.push({ cls, name, topic: topic.short, subject: 'Sains', color: 'var(--science)' });
        }
      });
    });
  });
  (state.students.english || []).forEach(name => {
    ENGLISH_SKILLS.forEach(skill => {
      if (getStudentTopicAvg('english', null, name, skill.id) === 0) {
        items.push({ cls: 'Tahun 3', name, topic: skill.short, subject: 'BI', color: 'var(--english)' });
      }
    });
  });

  document.getElementById('notifCount').textContent = `${items.length} item belum dinilai`;

  if (items.length === 0) {
    document.getElementById('notifList').innerHTML = `<div class="empty-state"><p>Semua murid telah dinilai!</p></div>`;
    return;
  }

  const show = items.slice(0, 10);
  document.getElementById('notifList').innerHTML = show.map(item => `
    <div class="notif-item">
      <div class="notif-dot" style="background:${item.color}"></div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600;color:var(--ink)">${item.name}</div>
        <div style="font-size:11.5px;color:var(--ink3)">${item.subject} \u00b7 ${item.cls} \u00b7 ${item.topic} belum dinilai</div>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="navigateTo('entry')">Nilai</button>
    </div>
  `).join('') + (items.length > 10 ? `<div style="padding:12px;font-size:12px;color:var(--ink3);text-align:center">...dan ${items.length - 10} lagi</div>` : '');
}

// ═══════════════════════════════════════════════════════
// ENTRY PAGE
// ═══════════════════════════════════════════════════════

function renderEntryPage() {
  document.getElementById('scienceClassTabs').innerHTML = SCIENCE_CLASSES.map(cls =>
    `<div class="class-tab ${cls === ui.entryClass ? 'active' : ''}" onclick="switchEntryClass('${cls}')">${cls}</div>`
  ).join('');

  document.getElementById('scienceTopicTabs').innerHTML = SCIENCE_TOPICS.map(t =>
    `<div class="topic-chip ${t.id === ui.entryTopic ? 'active' : ''}" onclick="switchEntryTopic('${t.id}')">${t.short}: ${t.title.replace(/^\d+\.\d+ /, '').substring(0, 18)}</div>`
  ).join('');

  document.getElementById('englishSkillTabs').innerHTML = ENGLISH_SKILLS.map(s =>
    `<div class="topic-chip ${s.id === ui.entryEngSkill ? 'active' : ''}" onclick="switchEntryEngSkill('${s.id}')">${s.title}</div>`
  ).join('');

  const vGrid = document.getElementById('viewBtnGrid');
  const vCard = document.getElementById('viewBtnCard');
  if (vGrid) vGrid.classList.toggle('active', ui.entryView === 'grid');
  if (vCard) vCard.classList.toggle('active', ui.entryView === 'card');

  if (ui.entrySubject === 'science') {
    renderScienceStudentList();
  } else {
    renderEnglishStudentList();
  }
}

function switchEntrySubject(subj) {
  ui.entrySubject = subj;
  document.querySelectorAll('#entrySubjTabs .subj-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.subj === subj);
  });
  document.getElementById('entry-science').style.display = subj === 'science' ? '' : 'none';
  document.getElementById('entry-english').style.display = subj === 'english' ? '' : 'none';
  renderEntryPage();
}

function switchEntryClass(cls) {
  ui.entryClass = cls;
  document.querySelectorAll('#scienceClassTabs .class-tab').forEach(t => {
    t.classList.toggle('active', t.textContent === cls);
  });
  renderScienceStudentList();
}

function switchEntryTopic(id) {
  ui.entryTopic = id;
  document.querySelectorAll('#scienceTopicTabs .topic-chip').forEach(t => {
    t.classList.toggle('active', t.getAttribute('onclick').includes(`'${id}'`));
  });
  renderScienceStudentList();
}

function switchEntryEngSkill(id) {
  ui.entryEngSkill = id;
  document.querySelectorAll('#englishSkillTabs .topic-chip').forEach(t => {
    t.classList.toggle('active', t.getAttribute('onclick').includes(`'${id}'`));
  });
  renderEnglishStudentList();
}

function switchEntryView(mode) {
  ui.entryView = mode;
  document.getElementById('viewBtnCard').classList.toggle('active', mode === 'card');
  document.getElementById('viewBtnGrid').classList.toggle('active', mode === 'grid');
  renderEntryPage();
}

// ═══════════════════════════════════════════════════════
// SCIENCE STUDENT LIST
// ═══════════════════════════════════════════════════════

function renderScienceStudentList() {
  const cls = ui.entryClass;
  const topicId = ui.entryTopic;
  const topic = SCIENCE_TOPICS.find(t => t.id === topicId);
  const students = state.students.science[cls] || [];
  const container = document.getElementById('scienceStudentList');

  if (!students.length) {
    container.innerHTML = `<div class="alert alert-warn" style="margin-top:8px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Tiada murid. Tambah di Pengurusan Murid.</div>`;
    return;
  }

  if (ui.entryView === 'card') {
    renderScienceCards(container, cls, topicId, topic, students);
  } else {
    renderScienceGrid(container, cls, topicId, topic, students);
  }
}

function renderScienceCards(container, cls, topicId, topic, students) {
  container.innerHTML = students.map((name, idx) => {
    const avg = getStudentTopicAvg('science', cls, name, topicId);
    const filled = topic.standards.filter(sp => getScore('science', cls, name, topicId, sp)).length;
    const pct = Math.round(filled / topic.standards.length * 100);
    return `
      <div class="student-card">
        <div class="student-card-header" onclick="toggleStudentCard(this)">
          <div class="student-number">${idx + 1}</div>
          <div class="student-name">
            ${name}
            <div class="cov-bar"><div class="cov-fill" style="width:${pct}%;background:${pct === 100 ? 'var(--accent2)' : pct > 50 ? 'var(--warn)' : 'var(--danger)'}"></div></div>
          </div>
          <div class="student-avg">
            ${tpBadge(avg)}
            <svg style="width:14px;height:14px;color:var(--ink4);transition:transform .2s" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
        <div class="student-card-body">
          <div class="sp-grid">
            ${topic.standards.map(sp => {
              const sc = getScore('science', cls, name, topicId, sp);
              return `
                <div class="sp-group">
                  <label>SP ${sp}</label>
                  <select class="cell-select ${sc ? 'tp-' + sc.tp : ''}" onchange="onScoreChange('science','${cls}','${esc(name)}','${topicId}','${sp}',this)">
                    <option value="">\u2014</option>
                    ${[1, 2, 3, 4, 5, 6].map(tp => `<option value="${tp}" ${sc && sc.tp === tp ? 'selected' : ''}>TP ${tp}</option>`).join('')}
                  </select>
                </div>`;
            }).join('')}
          </div>
        </div>
      </div>`;
  }).join('');
}

function renderScienceGrid(container, cls, topicId, topic, students) {
  const sps = topic.standards;
  const today = new Date().toISOString().split('T')[0];

  const thSPs = sps.map(sp => `<th class="col-sp">SP ${sp}</th>`).join('');

  const autoTP = sps.map(sp => `
    <td class="col-sp auto-sub-cell">
      <select class="auto-select" id="auto_${topicId}_${sp}"
        onchange="autoSetColumn('science','${cls}','${topicId}','${sp}',this.value)">
        <option value="">\u2014</option>
        ${[1, 2, 3, 4, 5, 6].map(tp => `<option value="${tp}">TP ${tp}</option>`).join('')}
      </select>
    </td>`).join('');

  const autoDates = sps.map(sp => `
    <td class="col-sp auto-sub-cell auto-date-cell">
      <input type="date" class="auto-date-input" id="autodate_sci_${topicId}_${sp}"
        value="${today}" title="Tarikh pukal SP ${sp}">
      <button class="auto-date-set-btn" onclick="bulkSetDateBySP('science','${cls}','${topicId}','${sp}',document.getElementById('autodate_sci_${topicId}_${sp}').value)"
        title="Tetap tarikh SP ${sp} untuk semua murid">\u2713</button>
    </td>`).join('');

  const autoReset = sps.map(sp => `
    <td class="col-sp auto-sub-cell auto-reset-cell">
      <button class="auto-reset-btn" onclick="bulkResetSP('science','${cls}','${topicId}','${sp}')"
        title="Reset TP &amp; tarikh SP ${sp} untuk semua murid">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        Reset
      </button>
    </td>`).join('');

  const rows = students.map((name, idx) => {
    const avg = getStudentTopicAvg('science', cls, name, topicId);
    const filled = sps.filter(sp => getScore('science', cls, name, topicId, sp)).length;
    const pct = Math.round(filled / sps.length * 100);
    const covColor = pct === 100 ? 'var(--accent2)' : pct > 50 ? 'var(--warn)' : 'var(--border2)';

    const cells = sps.map(sp => {
      const sc = getScore('science', cls, name, topicId, sp);
      const dateVal = sc?.date || '';
      const dateFmt = fmtDate(dateVal);
      return `<td class="col-sp">
        <select class="cell-select ${sc ? 'tp-' + sc.tp : ''}" data-name="${esc(name)}" data-sp="${sp}"
          onchange="onScoreChange('science','${cls}','${esc(name)}','${topicId}','${sp}',this)">
          <option value="">\u2014</option>
          ${[1, 2, 3, 4, 5, 6].map(tp => `<option value="${tp}" ${sc && sc.tp === tp ? 'selected' : ''}>TP ${tp}</option>`).join('')}
        </select>
        <input type="date" class="sp-date cell-date${dateVal ? ' has-date' : ''}" value="${dateVal}"
          title="Tarikh taksiran SP ${sp}"
          onchange="onDateChange('science','${cls}','${esc(name)}','${topicId}','${sp}',this)">
        <div class="sp-date-cell${dateFmt ? ' has-date' : ''}">${dateFmt}</div>
      </td>`;
    }).join('');

    return `
      <tr class="student-row">
        <td class="col-bil">${idx + 1}</td>
        <td class="col-name">
          <div>${name}</div>
          <div class="cov-bar"><div class="cov-fill" style="width:${pct}%;background:${covColor}"></div></div>
        </td>
        <td class="col-avg">${tpBadge(avg)}</td>
        ${cells}
      </tr>`;
  }).join('');

  container.innerHTML = `
    <div class="entry-table-wrap">
      <table class="entry-table">
        <thead>
          <tr>
            <th class="col-bil">#</th>
            <th class="col-name" style="text-align:left">Nama Murid</th>
            <th class="col-avg" style="border-right:2px solid var(--border2)">Purata</th>
            ${thSPs}
          </tr>
        </thead>
        <tbody>
          <tr class="auto-row">
            <td class="col-bil" style="background:var(--ink)"></td>
            <td class="col-name" style="background:var(--ink);padding-left:12px">
              <div class="auto-row-label">
                <svg style="width:11px;height:11px;opacity:.6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <strong>Tetap TP</strong>
              </div>
            </td>
            <td style="background:var(--ink);border-right:2px solid rgba(255,255,255,.1)">
              <select class="auto-select" id="auto_all_${topicId}"
                onchange="autoSetAllSP('science','${cls}','${topicId}',this.value)">
                <option value="">Semua SP</option>
                ${[1, 2, 3, 4, 5, 6].map(tp => `<option value="${tp}">TP ${tp}</option>`).join('')}
              </select>
            </td>
            ${autoTP}
          </tr>
          <tr class="auto-row auto-row-date">
            <td class="col-bil" style="background:#1e3a5f"></td>
            <td class="col-name" style="background:#1e3a5f;padding-left:12px">
              <div class="auto-row-label">
                <svg style="width:11px;height:11px;opacity:.6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                <strong>Tetap Tarikh</strong>
              </div>
            </td>
            <td style="background:#1e3a5f;border-right:2px solid rgba(255,255,255,.1)">
              <button class="auto-select" style="cursor:pointer;font-size:10px;font-weight:700;padding:4px 4px;white-space:normal;line-height:1.3"
                onclick="bulkSetAllDates('science','${cls}','${topicId}')">
                Semua SP<br>\u2193 Sama
              </button>
            </td>
            ${autoDates}
          </tr>
          <tr class="auto-row auto-row-reset">
            <td class="col-bil" style="background:#3b1a1a"></td>
            <td class="col-name" style="background:#3b1a1a;padding-left:12px">
              <div class="auto-row-label">
                <svg style="width:11px;height:11px;opacity:.6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                <strong>Reset TP</strong>
              </div>
            </td>
            <td style="background:#3b1a1a;border-right:2px solid rgba(255,255,255,.1)">
              <button class="auto-reset-btn auto-reset-all-btn"
                onclick="bulkResetAllSP('science','${cls}','${topicId}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                Semua
              </button>
            </td>
            ${autoReset}
          </tr>
          ${rows}
        </tbody>
      </table>
    </div>`;
}

// ═══════════════════════════════════════════════════════
// ENGLISH STUDENT LIST
// ═══════════════════════════════════════════════════════

function renderEnglishStudentList() {
  const skillId = ui.entryEngSkill;
  const skill = ENGLISH_SKILLS.find(s => s.id === skillId);
  const students = state.students.english || [];
  const container = document.getElementById('englishStudentList');

  if (!students.length) {
    container.innerHTML = `<div class="alert alert-warn" style="margin-top:8px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Tiada murid BI. Tambah di Pengurusan Murid.</div>`;
    return;
  }

  if (ui.entryView === 'card') {
    renderEnglishCards(container, skillId, skill, students);
  } else {
    renderEnglishGrid(container, skillId, skill, students);
  }
}

function renderEnglishCards(container, skillId, skill, students) {
  container.innerHTML = students.map((name, idx) => {
    const avg = getStudentTopicAvg('english', null, name, skillId);
    const filled = skill.standards.filter(sp => getScore('english', null, name, skillId, sp)).length;
    const pct = Math.round(filled / skill.standards.length * 100);
    return `
      <div class="student-card">
        <div class="student-card-header" onclick="toggleStudentCard(this)">
          <div class="student-number">${idx + 1}</div>
          <div class="student-name">
            ${name}
            <div class="cov-bar"><div class="cov-fill" style="width:${pct}%;background:${pct === 100 ? 'var(--accent2)' : pct > 50 ? 'var(--warn)' : 'var(--danger)'}"></div></div>
          </div>
          <div class="student-avg">
            ${tpBadge(avg)}
            <svg style="width:14px;height:14px;color:var(--ink4);transition:transform .2s" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
        <div class="student-card-body">
          <div class="sp-grid">
            ${skill.standards.map(sp => {
              const sc = getScore('english', null, name, skillId, sp);
              return `
                <div class="sp-group">
                  <label>LS ${sp}</label>
                  <select class="cell-select ${sc ? 'tp-' + sc.tp : ''}" onchange="onScoreChange('english',null,'${esc(name)}','${skillId}','${sp}',this)">
                    <option value="">\u2014</option>
                    ${[1, 2, 3, 4, 5, 6].map(tp => `<option value="${tp}" ${sc && sc.tp === tp ? 'selected' : ''}>PL ${tp}</option>`).join('')}
                  </select>
                  <input type="date" class="sp-date${sc?.date ? ' has-date' : ''}" value="${sc?.date || ''}"
                    onchange="onDateChange('english',null,'${esc(name)}','${skillId}','${sp}',this)">
                </div>`;
            }).join('')}
          </div>
        </div>
      </div>`;
  }).join('');
}

function renderEnglishGrid(container, skillId, skill, students) {
  const sps = skill.standards;
  const today = new Date().toISOString().split('T')[0];

  const thSPs = sps.map(sp => `<th class="col-sp">LS ${sp}</th>`).join('');

  const autoTP = sps.map(sp => `
    <td class="col-sp auto-sub-cell">
      <select class="auto-select"
        onchange="autoSetColumn('english',null,'${skillId}','${sp}',this.value)">
        <option value="">\u2014</option>
        ${[1, 2, 3, 4, 5, 6].map(tp => `<option value="${tp}">PL ${tp}</option>`).join('')}
      </select>
    </td>`).join('');

  const autoDates = sps.map(sp => `
    <td class="col-sp auto-sub-cell auto-date-cell">
      <input type="date" class="auto-date-input" id="autodate_eng_${skillId}_${sp}"
        value="${today}" title="Tarikh pukal LS ${sp}">
      <button class="auto-date-set-btn" onclick="bulkSetDateBySP('english',null,'${skillId}','${sp}',document.getElementById('autodate_eng_${skillId}_${sp}').value)"
        title="Tetap tarikh LS ${sp} untuk semua murid">\u2713</button>
    </td>`).join('');

  const autoReset = sps.map(sp => `
    <td class="col-sp auto-sub-cell auto-reset-cell">
      <button class="auto-reset-btn" onclick="bulkResetSP('english',null,'${skillId}','${sp}')"
        title="Reset PL &amp; tarikh LS ${sp} untuk semua murid">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        Reset
      </button>
    </td>`).join('');

  const rows = students.map((name, idx) => {
    const avg = getStudentTopicAvg('english', null, name, skillId);
    const filled = sps.filter(sp => getScore('english', null, name, skillId, sp)).length;
    const pct = Math.round(filled / sps.length * 100);
    const covColor = pct === 100 ? 'var(--accent2)' : pct > 50 ? 'var(--warn)' : 'var(--border2)';

    const cells = sps.map(sp => {
      const sc = getScore('english', null, name, skillId, sp);
      const dateVal = sc?.date || '';
      const dateFmt = fmtDate(dateVal);
      return `<td class="col-sp">
        <select class="cell-select ${sc ? 'tp-' + sc.tp : ''}" data-name="${esc(name)}" data-sp="${sp}"
          onchange="onScoreChange('english',null,'${esc(name)}','${skillId}','${sp}',this)">
          <option value="">\u2014</option>
          ${[1, 2, 3, 4, 5, 6].map(tp => `<option value="${tp}" ${sc && sc.tp === tp ? 'selected' : ''}>PL ${tp}</option>`).join('')}
        </select>
        <input type="date" class="sp-date cell-date${dateVal ? ' has-date' : ''}" value="${dateVal}"
          title="Tarikh taksiran LS ${sp}"
          onchange="onDateChange('english',null,'${esc(name)}','${skillId}','${sp}',this)">
        <div class="sp-date-cell${dateFmt ? ' has-date' : ''}">${dateFmt}</div>
      </td>`;
    }).join('');

    return `
      <tr class="student-row">
        <td class="col-bil">${idx + 1}</td>
        <td class="col-name">
          <div>${name}</div>
          <div class="cov-bar"><div class="cov-fill" style="width:${pct}%;background:${covColor}"></div></div>
        </td>
        <td class="col-avg">${tpBadge(avg)}</td>
        ${cells}
      </tr>`;
  }).join('');

  container.innerHTML = `
    <div class="entry-table-wrap">
      <table class="entry-table">
        <thead>
          <tr>
            <th class="col-bil">#</th>
            <th class="col-name" style="text-align:left">Nama Murid</th>
            <th class="col-avg" style="border-right:2px solid var(--border2)">Purata</th>
            ${thSPs}
          </tr>
        </thead>
        <tbody>
          <tr class="auto-row">
            <td class="col-bil" style="background:var(--ink)"></td>
            <td class="col-name" style="background:var(--ink);padding-left:12px">
              <div class="auto-row-label">
                <svg style="width:11px;height:11px;opacity:.6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <strong>Tetap PL</strong>
              </div>
            </td>
            <td style="background:var(--ink);border-right:2px solid rgba(255,255,255,.1)">
              <select class="auto-select"
                onchange="autoSetAllSP('english',null,'${skillId}',this.value)">
                <option value="">Semua LS</option>
                ${[1, 2, 3, 4, 5, 6].map(tp => `<option value="${tp}">PL ${tp}</option>`).join('')}
              </select>
            </td>
            ${autoTP}
          </tr>
          <tr class="auto-row auto-row-date">
            <td class="col-bil" style="background:#1e3a5f"></td>
            <td class="col-name" style="background:#1e3a5f;padding-left:12px">
              <div class="auto-row-label">
                <svg style="width:11px;height:11px;opacity:.6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                <strong>Tetap Tarikh</strong>
              </div>
            </td>
            <td style="background:#1e3a5f;border-right:2px solid rgba(255,255,255,.1)">
              <button class="auto-select" style="cursor:pointer;font-size:10px;font-weight:700;padding:4px 4px;white-space:normal;line-height:1.3"
                onclick="bulkSetAllDates('english',null,'${skillId}')">
                Semua LS<br>\u2193 Sama
              </button>
            </td>
            ${autoDates}
          </tr>
          <tr class="auto-row auto-row-reset">
            <td class="col-bil" style="background:#3b1a1a"></td>
            <td class="col-name" style="background:#3b1a1a;padding-left:12px">
              <div class="auto-row-label">
                <svg style="width:11px;height:11px;opacity:.6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                <strong>Reset PL</strong>
              </div>
            </td>
            <td style="background:#3b1a1a;border-right:2px solid rgba(255,255,255,.1)">
              <button class="auto-reset-btn auto-reset-all-btn"
                onclick="bulkResetAllSP('english',null,'${skillId}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                Semua
              </button>
            </td>
            ${autoReset}
          </tr>
          ${rows}
        </tbody>
      </table>
    </div>`;
}

// ═══════════════════════════════════════════════════════
// AUTO SET / BULK OPERATIONS
// ═══════════════════════════════════════════════════════

function autoSetAllSP(subject, cls, topicId, tpVal) {
  if (!tpVal) return;
  const topics = subject === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  const topic = topics.find(t => t.id === topicId);
  const students = subject === 'science' ? (state.students.science[cls] || []) : (state.students.english || []);
  const today = new Date().toISOString().split('T')[0];

  students.forEach(name => {
    topic.standards.forEach(sp => setScore(subject, cls, name, topicId, sp, tpVal, today));
  });

  if (subject === 'science') renderScienceStudentList();
  else renderEnglishStudentList();
  showToast(`TP ${tpVal} ditetapkan untuk semua murid & semua SP. Tarikh: ${fmtDate(today)}`, 'success');
  scheduleSyncAutoSave();
}

function autoSetColumn(subject, cls, topicId, sp, tpVal) {
  if (!tpVal) return;
  const students = subject === 'science' ? (state.students.science[cls] || []) : (state.students.english || []);
  const today = new Date().toISOString().split('T')[0];

  students.forEach(name => setScore(subject, cls, name, topicId, sp, tpVal, today));

  const container = document.getElementById(subject === 'science' ? 'scienceStudentList' : 'englishStudentList');
  container.querySelectorAll(`[data-sp="${sp}"]`).forEach(sel => {
    sel.value = tpVal;
    sel.className = `cell-select tp-${tpVal}`;
    const td = sel.closest('td');
    if (td) {
      const inp = td.querySelector('.cell-date');
      const span = td.querySelector('.sp-date-cell');
      if (inp) { inp.value = today; inp.classList.add('has-date'); }
      if (span) { span.textContent = fmtDate(today); span.classList.add('has-date'); }
    }
  });

  refreshAvgColumn(subject, cls, topicId, students);
  showToast(`SP ${sp} \u2192 TP ${tpVal} untuk semua murid. Tarikh: ${fmtDate(today)}`, 'success');
  scheduleSyncAutoSave();
}

function bulkSetDateBySP(subject, cls, topicId, sp, dateVal) {
  if (!dateVal) { showToast('Sila pilih tarikh dahulu.', 'warning'); return; }

  const students = subject === 'science' ? (state.students.science[cls] || []) : (state.students.english || []);
  let count = 0;
  students.forEach(name => {
    const existing = getScore(subject, cls, name, topicId, sp);
    if (existing && existing.tp) {
      setScore(subject, cls, name, topicId, sp, existing.tp, dateVal);
      count++;
    }
  });

  const container = document.getElementById(subject === 'science' ? 'scienceStudentList' : 'englishStudentList');
  container?.querySelectorAll(`[data-sp="${sp}"]`).forEach(sel => {
    const td = sel.closest('td');
    const inp = td?.querySelector('.cell-date');
    const span = td?.querySelector('.sp-date-cell');
    if (sel.value && inp) {
      inp.value = dateVal;
      inp.classList.add('has-date');
    }
    if (sel.value && span) {
      span.textContent = fmtDate(dateVal);
      span.classList.add('has-date');
    }
  });

  saveLocal();
  scheduleSyncAutoSave();
  const label = subject === 'science' ? `SP ${sp}` : `LS ${sp}`;
  showToast(`Tarikh ${fmtDate(dateVal)} ditetapkan untuk ${label} (${count} murid).`, 'success');
}

function bulkSetAllDates(subject, cls, topicId) {
  const topics = subject === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return;

  const firstSP = topic.standards[0];
  const pfx = subject === 'science' ? 'sci' : 'eng';
  const firstInput = document.getElementById(`autodate_${pfx}_${topicId}_${firstSP}`);
  const dateVal = firstInput?.value;
  if (!dateVal) { showToast('Sila pilih tarikh pada SP pertama dahulu.', 'warning'); return; }

  const students = subject === 'science' ? (state.students.science[cls] || []) : (state.students.english || []);
  let total = 0;

  topic.standards.forEach(sp => {
    const inp = document.getElementById(`autodate_${pfx}_${topicId}_${sp}`);
    if (inp) inp.value = dateVal;

    students.forEach(name => {
      const existing = getScore(subject, cls, name, topicId, sp);
      if (existing && existing.tp) {
        setScore(subject, cls, name, topicId, sp, existing.tp, dateVal);
        total++;
      }
    });
  });

  const container = document.getElementById(subject === 'science' ? 'scienceStudentList' : 'englishStudentList');
  container?.querySelectorAll('.cell-date').forEach(inp => {
    const td = inp.closest('td');
    const sel = td?.querySelector('.cell-select');
    if (sel?.value) {
      inp.value = dateVal;
      inp.classList.add('has-date');
      const span = td.querySelector('.sp-date-cell');
      if (span) { span.textContent = fmtDate(dateVal); span.classList.add('has-date'); }
    }
  });

  saveLocal();
  scheduleSyncAutoSave();
  showToast(`Tarikh ${fmtDate(dateVal)} ditetapkan untuk semua SP (${total} rekod).`, 'success');
}

function bulkResetSP(subject, cls, topicId, sp) {
  const label = subject === 'science' ? `SP ${sp}` : `LS ${sp}`;
  const students = subject === 'science' ? (state.students.science[cls] || []) : (state.students.english || []);

  students.forEach(name => {
    setScore(subject, cls, name, topicId, sp, '', '');
  });

  const container = document.getElementById(subject === 'science' ? 'scienceStudentList' : 'englishStudentList');
  container?.querySelectorAll(`[data-sp="${sp}"]`).forEach(sel => {
    sel.value = '';
    sel.className = 'cell-select';
    const td = sel.closest('td');
    const inp = td?.querySelector('.cell-date');
    const span = td?.querySelector('.sp-date-cell');
    if (inp) { inp.value = ''; inp.classList.remove('has-date'); }
    if (span) { span.textContent = ''; span.classList.remove('has-date'); }
  });

  refreshAvgColumn(subject, cls, topicId, students);
  saveLocal();
  scheduleSyncAutoSave();
  showToast(`${label} direset untuk semua murid.`, 'success');
}

function bulkResetAllSP(subject, cls, topicId) {
  const topics = subject === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  const topic = topics.find(t => t.id === topicId);
  const students = subject === 'science' ? (state.students.science[cls] || []) : (state.students.english || []);

  if (!topic) return;
  if (!confirm(`Reset SEMUA ${topic.standards.length} SP untuk SEMUA ${students.length} murid? Tindakan ini tidak boleh dibatalkan.`)) return;

  topic.standards.forEach(sp => {
    students.forEach(name => setScore(subject, cls, name, topicId, sp, '', ''));
  });

  if (subject === 'science') renderScienceStudentList();
  else renderEnglishStudentList();

  saveLocal();
  scheduleSyncAutoSave();
  showToast(`Semua SP direset untuk semua murid dalam topik ini.`, 'success');
}

function bulkSetDate(subject, mode) {
  showToast('Sila guna butang tarikh per-SP dalam jadual.', 'info');
}

function refreshAvgColumn(subject, cls, topicId, students) {
  const container = document.getElementById(subject === 'science' ? 'scienceStudentList' : 'englishStudentList');
  const rows = container.querySelectorAll('tr.student-row');
  rows.forEach((row, idx) => {
    const name = students[idx];
    if (!name) return;
    const avgCell = row.querySelector('.col-avg');
    if (avgCell) avgCell.innerHTML = tpBadge(getStudentTopicAvg(subject, cls, name, topicId));
    const topics = subject === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
    const topic = topics.find(t => t.id === topicId);
    const filled = (topic?.standards || []).filter(sp => getScore(subject, cls, name, topicId, sp)).length;
    const pct = topic ? Math.round(filled / topic.standards.length * 100) : 0;
    const fill = row.querySelector('.cov-fill');
    if (fill) {
      fill.style.width = pct + '%';
      fill.style.background = pct === 100 ? 'var(--accent2)' : pct > 50 ? 'var(--warn)' : 'var(--border2)';
    }
  });
  updatePendingBadge();
}

// ═══════════════════════════════════════════════════════
// SCORE / DATE CHANGE HANDLERS
// ═══════════════════════════════════════════════════════

function onScoreChange(subject, cls, name, topicId, sp, sel) {
  const val = sel.value;
  const dateInput = sel.closest('td, .sp-group')?.querySelector('.sp-date, .cell-date');
  const dateVal = dateInput ? dateInput.value : new Date().toISOString().split('T')[0];

  setScore(subject, cls, name, topicId, sp, val, dateVal);
  sel.className = `cell-select${val ? ' tp-' + val : ''}`;

  if (val && dateInput && !dateInput.value) {
    dateInput.value = new Date().toISOString().split('T')[0];
    dateInput.classList.add('has-date');
  }

  const row = sel.closest('tr.student-row');
  if (row) {
    const avgCell = row.querySelector('.col-avg');
    if (avgCell) {
      const avg = getStudentTopicAvg(subject, cls, name, topicId);
      avgCell.innerHTML = tpBadge(avg);
    }
    const topics = subject === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
    const topic = topics.find(t => t.id === topicId);
    const filled = (topic?.standards || []).filter(sp2 => getScore(subject, cls, name, topicId, sp2)).length;
    const pct = topic ? Math.round(filled / topic.standards.length * 100) : 0;
    const fill = row.querySelector('.cov-fill');
    if (fill) {
      fill.style.width = pct + '%';
      fill.style.background = pct === 100 ? 'var(--accent2)' : pct > 50 ? 'var(--warn)' : 'var(--border2)';
    }
    const dateSpan = sel.closest('td')?.querySelector('.sp-date-cell');
    if (dateSpan && dateVal) {
      dateSpan.textContent = fmtDate(dateVal);
      dateSpan.classList.toggle('has-date', !!val);
    }
  }

  const card = sel.closest('.student-card');
  if (card) {
    const avg = getStudentTopicAvg(subject, cls, name, topicId);
    const badge = card.querySelector('.student-avg');
    if (badge) badge.innerHTML = `${tpBadge(avg)}<svg style="width:14px;height:14px;color:var(--ink4)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
  }
}

function onDateChange(subject, cls, name, topicId, sp, dateInput) {
  const sc = getScore(subject, cls, name, topicId, sp);
  if (sc) {
    setScore(subject, cls, name, topicId, sp, sc.tp, dateInput.value);
    dateInput.classList.toggle('has-date', !!dateInput.value);
    const td = dateInput.closest('td');
    if (td) {
      const dateSpan = td.querySelector('.sp-date-cell');
      if (dateSpan) {
        dateSpan.textContent = fmtDate(dateInput.value);
        dateSpan.classList.toggle('has-date', !!dateInput.value);
      }
    }
  }
}

function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('ms-MY', { day:'2-digit', month:'short', year:'2-digit' });
}

function toggleStudentCard(header) {
  const body = header.nextElementSibling;
  const chevron = header.querySelector('svg:last-child');
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : '';
  if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
}

// ═══════════════════════════════════════════════════════
// FIXED esc() FUNCTION — proper HTML entity escaping
// ═══════════════════════════════════════════════════════

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ═══════════════════════════════════════════════════════
// REPORTS PAGE
// ═══════════════════════════════════════════════════════

function renderReportsPage() {
  const classSel = document.getElementById('rptClassSel');
  classSel.innerHTML = SCIENCE_CLASSES.map(c => `<option value="${c}">${c}</option>`).join('');
  updateReportStudentList();
}

function updateReportStudentList() {
  const subj = document.getElementById('rptSubjSel').value;
  const cls = document.getElementById('rptClassSel').value;
  const wrap = document.getElementById('rptClassWrap');
  wrap.style.display = subj === 'science' ? '' : 'none';
  const students = subj === 'science' ? (state.students.science[cls] || []) : (state.students.english || []);
  const sel = document.getElementById('rptStudentSel');
  sel.innerHTML = '<option value="">-- Pilih murid --</option>' + students.map(n => `<option value="${n}">${n}</option>`).join('');
  document.getElementById('reportOutput').innerHTML = '';
}

function renderStudentReport() {
  const subj = document.getElementById('rptSubjSel').value;
  const cls = document.getElementById('rptClassSel').value;
  const name = document.getElementById('rptStudentSel').value;
  if (!name) { document.getElementById('reportOutput').innerHTML = ''; return; }

  const topics = subj === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  const overall = getStudentOverallAvg(subj, cls, name);

  const topicRows = topics.map(t => {
    const avg = getStudentTopicAvg(subj, cls, name, t.id);
    const pct = (avg / 6 * 100).toFixed(0);
    return `
      <tr>
        <td style="font-weight:600">${t.title}</td>
        <td style="text-align:center">${tpBadge(avg)}</td>
        <td style="min-width:120px">
          <div class="prog-wrap"><div class="prog-bar" style="width:${pct}%;background:${avg >= 4 ? '#16a34a' : avg >= 2 ? '#ca8a04' : '#dc2626'}"></div></div>
        </td>
        <td style="text-align:right;font-size:12px;color:var(--ink3)">${avg > 0 ? avg.toFixed(1)+'/6' : '\u2014'}</td>
      </tr>`;
  }).join('');

  document.getElementById('reportOutput').innerHTML = `
    <div class="card" id="printableReport">
      <div class="print-header">
        <strong>${state.settings.school || 'SK Bandar Tawau'}</strong><br>
        Borang Perkembangan Murid \u2014 ${subj === 'science' ? 'Sains Tahun 2' : 'BI Tahun 3'}<br>
        Tahun ${state.settings.year || new Date().getFullYear()} | Kelas: ${subj === 'science' ? cls : 'Tahun 3'}
      </div>
      <div class="report-header">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap">
          <div>
            <div style="font-size:11px;opacity:.5;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${subj === 'science' ? 'Sains Tahun 2 \u00b7 Kelas '+cls : 'BI Tahun 3'}</div>
            <div class="report-name">${name}</div>
            <div class="report-meta">Guru: ${state.settings.teacher || '\u2014'} \u00b7 ${state.settings.school || '\u2014'}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:11px;opacity:.5;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Purata Keseluruhan</div>
            <div style="font-family:'Fraunces',serif;font-size:40px;font-weight:700;line-height:1">${overall > 0 ? overall.toFixed(1) : '\u2014'}</div>
            <div style="font-size:12px;opacity:.5">/ 6.0</div>
          </div>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width:40%">Topik / Kemahiran</th>
              <th style="text-align:center">TP Purata</th>
              <th>Prestasi</th>
              <th style="text-align:right">Skor</th>
            </tr>
          </thead>
          <tbody>${topicRows}</tbody>
        </table>
      </div>
      <div style="padding:16px 24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--ink3)">
        <span>Dijana: ${new Date().toLocaleDateString('ms-MY')}</span>
        <button class="btn btn-primary btn-sm no-print" onclick="printReport()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
          Cetak Laporan
        </button>
      </div>
    </div>`;
}

function printReport() { window.print(); }

// ═══════════════════════════════════════════════════════
// COMPARE PAGE
// ═══════════════════════════════════════════════════════

function renderComparePage() {
  renderCompareCharts();
  renderCompareTable();
}

function switchCompare(subj) {
  ui.compareSubject = subj;
  document.querySelectorAll('#page-compare .subj-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.subj === subj);
  });
  renderComparePage();
}

function renderCompareCharts() {
  const subj = ui.compareSubject;
  const topics = subj === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  const ctx = document.getElementById('compareRadarChart');
  if (typeof Chart === 'undefined') return;
  if (charts.compareRadar) charts.compareRadar.destroy();

  if (subj === 'science') {
    const colors = ['#7c3aed','#2563eb','#16a34a','#d97706','#dc2626'];
    const datasets = SCIENCE_CLASSES.map((cls, i) => ({
      label: cls,
      data: topics.map(t => getClassTopicAvg('science', cls, t.id)),
      borderColor: colors[i],
      backgroundColor: colors[i] + '18',
      borderWidth: 2,
      pointRadius: 3
    }));
    charts.compareRadar = new Chart(ctx, {
      type: 'radar',
      data: { labels: topics.map(t => t.short), datasets },
      options: {
        responsive: true,
        scales: { r: { beginAtZero: true, max: 6, ticks: { stepSize: 1, font: { size: 10 } } } },
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } } }
      }
    });
  } else {
    charts.compareRadar = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ENGLISH_SKILLS.map(s => s.title),
        datasets: [{
          label: 'Purata BI Tahun 3',
          data: ENGLISH_SKILLS.map(s => {
            const students = state.students.english || [];
            const vals = students.map(n => getStudentTopicAvg('english', null, n, s.id)).filter(v => v > 0);
            return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0;
          }),
          backgroundColor: '#bae6fd',
          borderColor: '#0891b2',
          borderWidth: 2,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true, max: 6, ticks: { stepSize: 1 }, grid: { color: '#f1f2f5' } }, x: { grid: { display: false } } },
        plugins: { legend: { display: false } }
      }
    });
  }
}

function renderCompareTable() {
  const subj = ui.compareSubject;
  const topics = subj === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;

  if (subj === 'science') {
    const headerCols = SCIENCE_CLASSES.map(c => `<th style="text-align:center">${c}</th>`).join('');
    const rows = topics.map(t => {
      const avgs = SCIENCE_CLASSES.map(cls => {
        const a = getClassTopicAvg('science', cls, t.id);
        return `<td class="compare-cell">${a > 0 ? tpBadge(a) : '<span style="color:var(--ink4)">\u2014</span>'}</td>`;
      }).join('');
      return `<tr><td style="font-weight:600;font-size:12px">${t.title}</td>${avgs}</tr>`;
    }).join('');
    document.getElementById('compareTable').innerHTML = `
      <table>
        <thead><tr><th>Topik</th>${headerCols}</tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  } else {
    const students = state.students.english || [];
    const rows = ENGLISH_SKILLS.map(s => {
      const vals = students.map(n => getStudentTopicAvg('english', null, n, s.id)).filter(v => v > 0);
      const avg = vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0;
      return `<tr><td style="font-weight:600">${s.title}</td><td class="compare-cell">${tpBadge(avg)}</td><td style="font-size:12px;color:var(--ink3)">${vals.length} murid dinilai</td></tr>`;
    }).join('');
    document.getElementById('compareTable').innerHTML = `
      <table>
        <thead><tr><th>Kemahiran</th><th style="text-align:center">Purata PL</th><th>Status</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  }
}

// ═══════════════════════════════════════════════════════
// SEMAKAN BUKU PAGE
// ═══════════════════════════════════════════════════════

let booksSelected = new Set();

function renderBooksPage() {
  const subj = ui.booksSubject;

  const clsSel = document.getElementById('booksCls');
  const clsWrap = document.getElementById('books-class-wrap');
  if (subj === 'science') {
    clsWrap.style.display = '';
    clsSel.innerHTML = SCIENCE_CLASSES.map(c =>
      `<option value="${c}" ${c === ui.booksClass ? 'selected' : ''}>${c}</option>`).join('');
    ui.booksClass = clsSel.value;
  } else {
    clsWrap.style.display = 'none';
  }

  const dateInp = document.getElementById('booksDate');
  if (!dateInp.value) dateInp.value = new Date().toISOString().split('T')[0];

  const students = getClassStudents(subj, subj === 'science' ? ui.booksClass : undefined);
  booksSelected = new Set();
  renderBooksStudentGrid(students);
  renderBooksHistory(subj, ui.booksClass, students);
}

function renderBooksStudentGrid(students) {
  const grid = document.getElementById('booksStudentGrid');
  grid.innerHTML = students.map(name => `
    <button class="book-student-chip" id="bchip_${esc(name)}"
      onclick="toggleBookStudent('${esc(name)}')">${name}</button>
  `).join('');
  updateBooksCount();
}

function toggleBookStudent(name) {
  if (booksSelected.has(name)) {
    booksSelected.delete(name);
  } else {
    booksSelected.add(name);
  }
  const chip = document.getElementById(`bchip_${name}`);
  if (chip) chip.classList.toggle('selected', booksSelected.has(name));
  updateBooksCount();
}

function selectAllBooks() {
  const subj = ui.booksSubject;
  const students = getClassStudents(subj, subj === 'science' ? ui.booksClass : undefined);
  students.forEach(n => {
    booksSelected.add(n);
    const chip = document.getElementById(`bchip_${n}`);
    if (chip) chip.classList.add('selected');
  });
  updateBooksCount();
}

function clearAllBooks() {
  booksSelected.clear();
  document.querySelectorAll('.book-student-chip').forEach(c => c.classList.remove('selected'));
  updateBooksCount();
}

function updateBooksCount() {
  const el = document.getElementById('booksSelectedCount');
  if (el) el.textContent = `${booksSelected.size} murid dipilih`;
}

function saveBookChecks() {
  if (!booksSelected.size) { showToast('Pilih sekurang-kurangnya seorang murid.', 'warning'); return; }

  const count = booksSelected.size;
  const ok = confirm(
    `Simpan semakan buku untuk ${count} murid?\n` +
    `Setiap murid akan menerima +${POINTS_BOOK} mata.\n\n` +
    `Tindakan ini tidak boleh dibatalkan dengan mudah.`
  );
  if (!ok) return;

  const subj = ui.booksSubject;
  const cls = ui.booksClass;
  const note = document.getElementById('booksNote').value.trim();
  const date = document.getElementById('booksDate').value || new Date().toISOString().split('T')[0];

  booksSelected.forEach(name => {
    recordBookCheck(name, cls, subj, note, date);
  });

  showToast(`Semakan disimpan untuk ${count} murid (+${POINTS_BOOK} mata setiap satu).`, 'success');
  clearAllBooks();

  const students = getClassStudents(subj, subj === 'science' ? cls : undefined);
  renderBooksHistory(subj, cls, students);
}

function renderBooksHistory(subj, cls, students) {
  const wrap = document.getElementById('booksHistoryWrap');

  const allRecs = [];
  students.forEach(name => {
    const recs = getBookChecks(name, cls, subj);
    recs.forEach(r => allRecs.push({ ...r, name }));
  });

  allRecs.sort((a,b) => b.date.localeCompare(a.date));

  document.getElementById('booksTotalChecks').textContent =
    `${allRecs.length} rekod jumlah`;

  if (!allRecs.length) {
    wrap.innerHTML = '<div class="empty-state"><p>Tiada rekod semakan lagi.</p></div>';
    return;
  }

  const byDate = {};
  allRecs.forEach(r => {
    if (!byDate[r.date]) byDate[r.date] = [];
    byDate[r.date].push(r);
  });

  wrap.innerHTML = Object.entries(byDate).map(([date, recs]) => `
    <div style="padding:10px 16px;border-bottom:1px solid var(--border)">
      <div style="font-size:11px;font-weight:700;color:var(--ink3);text-transform:uppercase;
        letter-spacing:.4px;margin-bottom:8px">${fmtDate(date)}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${recs.map(r => `
          <div style="display:flex;align-items:center;gap:6px;background:var(--accent2-soft);
            border:1px solid #6ee7b7;border-radius:8px;padding:5px 10px;font-size:12.5px">
            <span style="font-weight:600">${r.name}</span>
            <span style="color:var(--accent2);font-weight:700">+${r.pts}\u2b50</span>
            ${r.note ? `<span style="color:var(--ink3);font-size:11px">\u00b7 ${r.note}</span>` : ''}
          </div>`).join('')}
      </div>
    </div>`).join('');
}

function switchBooksSubj(subj) {
  ui.booksSubject = subj;
  document.querySelectorAll('#page-books .subj-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('onclick').includes(`'${subj}'`));
  });
  renderBooksPage();
}

// ═══════════════════════════════════════════════════════
// MATA TERKUMPUL PAGE
// ═══════════════════════════════════════════════════════

let ptsView = 'rank';

function renderPointsPage() {
  const subj = ui.pointsSubject;

  const clsSel = document.getElementById('ptsCls');
  const clsWrap = document.getElementById('pts-class-wrap');
  if (subj === 'science') {
    clsWrap.style.display = '';
    clsSel.innerHTML = SCIENCE_CLASSES.map(c =>
      `<option value="${c}" ${c === ui.pointsClass ? 'selected' : ''}>${c}</option>`).join('');
    ui.pointsClass = clsSel.value;
  } else {
    clsWrap.style.display = 'none';
  }

  const stuSel = document.getElementById('ptsStudent');
  const students = getClassStudents(subj, subj === 'science' ? ui.pointsClass : undefined);
  stuSel.innerHTML =
    '<option value="__ALL__">\u2014 Semua Murid \u2014</option>' +
    students.map(n => `<option value="${n}">${n}</option>`).join('');

  renderPointsBoard();
}

function switchPointsSubj(subj) {
  ui.pointsSubject = subj;
  document.querySelectorAll('#page-points .subj-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('onclick').includes(`'${subj}'`));
  });
  renderPointsPage();
}

function switchPtsView(view) {
  ptsView = view;
  document.querySelectorAll('#ptsViewTabs .mini-tab').forEach((t,i) => {
    t.classList.toggle('active', (i === 0 ? 'rank' : 'log') === view);
  });
  renderPointsBoard();
}

function addManualPoints() {
  const subj = ui.pointsSubject;
  const cls = ui.pointsClass;
  const student = document.getElementById('ptsStudent').value;
  const amt = parseInt(document.getElementById('ptsAmount').value) || 0;
  const type = document.getElementById('ptsType').value;
  const reason = document.getElementById('ptsReason').value.trim() || 'Tambahan manual';

  if (amt <= 0) { showToast('Sila masukkan jumlah mata yang sah.', 'warning'); return; }

  const students = student === '__ALL__'
    ? getClassStudents(subj, subj === 'science' ? cls : undefined)
    : [student];

  students.forEach(name => {
    if (type === 'deduct') {
      deductPoints(name, cls, subj, amt, reason);
    } else {
      awardPoints(name, cls, subj, amt, reason, 'manual');
    }
  });

  saveLocal();
  scheduleSyncAutoSave();

  const word = type === 'deduct' ? 'ditolak' : 'ditambah';
  showToast(`${amt} mata ${word} untuk ${students.length} murid \u2014 ${reason}.`, 'success');
  renderPointsBoard();
  renderPointsPage();
}

function renderPointsBoard() {
  const subj = ui.pointsSubject;
  const cls = ui.pointsClass;
  const students = getClassStudents(subj, subj === 'science' ? cls : undefined);
  const wrap = document.getElementById('pointsBoardWrap');

  if (!students.length) {
    wrap.innerHTML = '<div class="empty-state"><p>Tiada murid.</p></div>';
    return;
  }

  if (ptsView === 'rank') {
    const ranked = students.map(name => {
      const p = getPoints(name, cls, subj);
      return { name, total: p.total || 0 };
    }).sort((a,b) => b.total - a.total);

    const maxPts = Math.max(1, ranked[0]?.total || 1);

    wrap.innerHTML = `<div style="padding:16px">` +
      ranked.map((s, i) => {
        const medal = i === 0 ? '\ud83e\udd47' : i === 1 ? '\ud83e\udd48' : i === 2 ? '\ud83e\udd49' : `${i+1}.`;
        const pct = Math.round(s.total / maxPts * 100);
        const color = i === 0 ? '#f59e0b' : i === 1 ? '#94a3b8' : i === 2 ? '#b45309' :
                      s.total >= 30 ? '#7c3aed' : s.total >= 15 ? '#2563eb' : 'var(--ink4)';
        return `
          <div style="display:flex;align-items:center;gap:12px;padding:8px 0;
            border-bottom:1px solid var(--border)">
            <div style="width:32px;text-align:center;font-size:16px;font-weight:700;
              color:${color};flex-shrink:0">${medal}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13.5px;font-weight:600;margin-bottom:4px;
                overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.name}</div>
              <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden">
                <div style="height:100%;width:${pct}%;background:${color};border-radius:3px;
                  transition:width .4s"></div>
              </div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              ${ptsBadge(s.total)}
            </div>
            <button class="btn btn-secondary btn-sm" style="padding:4px 8px;font-size:11px;flex-shrink:0"
              onclick="showStudentLog('${esc(s.name)}','${cls}','${subj}')">Log</button>
          </div>`;
      }).join('') + `</div>`;

  } else {
    const allLogs = [];
    students.forEach(name => {
      const p = getPoints(name, cls, subj);
      (p.log || []).forEach(entry => allLogs.push({ ...entry, name }));
    });
    allLogs.sort((a,b) => b.date.localeCompare(a.date));

    if (!allLogs.length) {
      wrap.innerHTML = '<div class="empty-state"><p>Tiada log mata lagi.</p></div>';
      return;
    }

    const typeIcon = { tp:'\ud83d\udcdd', book:'\ud83d\udcda', manual:'\u2b50', deduct:'\u2796' };
    const typeColor = { tp:'var(--accent)', book:'var(--accent2)', manual:'#f59e0b', deduct:'var(--danger)' };

    wrap.innerHTML = `
      <table>
        <thead>
          <tr>
            <th style="text-align:left">Tarikh</th>
            <th style="text-align:left">Murid</th>
            <th style="text-align:left">Sebab</th>
            <th>Jenis</th>
            <th>Mata</th>
          </tr>
        </thead>
        <tbody>
          ${allLogs.slice(0, 100).map(e => `
            <tr>
              <td style="white-space:nowrap;font-size:12px">${fmtDate(e.date)}</td>
              <td style="font-weight:600;font-size:13px">${e.name}</td>
              <td style="font-size:12px;color:var(--ink3)">${e.reason || '\u2014'}</td>
              <td style="text-align:center">${typeIcon[e.type] || '\u2b50'}</td>
              <td style="text-align:center;font-weight:700;color:${e.pts < 0 ? 'var(--danger)' : typeColor[e.type] || 'var(--ink2)'}">
                ${e.pts > 0 ? '+' : ''}${e.pts}
              </td>
            </tr>`).join('')}
        </tbody>
      </table>`;
  }
}

function showStudentLog(name, cls, subj) {
  const p = getPoints(name, cls, subj);
  const log = p.log || [];
  const typeIcon = { tp:'\ud83d\udcdd', book:'\ud83d\udcda', manual:'\u2b50', deduct:'\u2796' };
  const typeColor = { tp:'var(--accent)', book:'var(--accent2)', manual:'#f59e0b', deduct:'var(--danger)' };

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-header">
      <div class="modal-title">${name}</div>
      <button class="modal-close" onclick="closeModal({target:document.getElementById('modalOverlay')})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div style="text-align:center;margin-bottom:20px">
      ${ptsBadge(p.total || 0)}
      <div style="font-size:12px;color:var(--ink3);margin-top:6px">Jumlah Mata Terkumpul</div>
    </div>
    ${log.length ? `
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead>
        <tr style="background:var(--surface)">
          <th style="padding:8px 10px;text-align:left;font-size:11px;color:var(--ink3);text-transform:uppercase">Tarikh</th>
          <th style="padding:8px 10px;text-align:left;font-size:11px;color:var(--ink3);text-transform:uppercase">Aktiviti</th>
          <th style="padding:8px 10px;text-align:center;font-size:11px;color:var(--ink3);text-transform:uppercase">Mata</th>
        </tr>
      </thead>
      <tbody>
        ${log.map(e => `
          <tr style="border-bottom:1px solid var(--border)">
            <td style="padding:7px 10px;white-space:nowrap;color:var(--ink3)">${fmtDate(e.date)}</td>
            <td style="padding:7px 10px">${typeIcon[e.type]||'\u2b50'} ${e.reason || '\u2014'}</td>
            <td style="padding:7px 10px;text-align:center;font-weight:700;
              color:${e.pts < 0 ? 'var(--danger)' : typeColor[e.type] || 'var(--ink2)'}">
              ${e.pts > 0 ? '+' : ''}${e.pts}
            </td>
          </tr>`).join('')}
      </tbody>
    </table>` : '<div class="empty-state"><p>Tiada log mata.</p></div>'}
  `;
  document.getElementById('modalOverlay').classList.add('open');
}

// ═══════════════════════════════════════════════════════
// MANAGE PAGE
// ═══════════════════════════════════════════════════════

function renderManagePage() {
  document.getElementById('manageClassTabs').innerHTML = SCIENCE_CLASSES.map(cls =>
    `<div class="class-tab ${cls === ui.manageClass ? 'active' : ''}" onclick="switchManageClass('${cls}')">${cls}</div>`
  ).join('');
  const names = (state.students.science[ui.manageClass] || []).join('\n');
  document.getElementById('manageNamesTA').value = names;
  document.getElementById('engNamesTA').value = (state.students.english || []).join('\n');
}

function switchManageSubj(subj) {
  ui.manageSubject = subj;
  document.querySelectorAll('#page-manage .subj-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('onclick').includes(`'${subj}'`));
  });
  document.getElementById('manage-science').style.display = subj === 'science' ? '' : 'none';
  document.getElementById('manage-english').style.display = subj === 'english' ? '' : 'none';
}

function switchManageClass(cls) {
  ui.manageClass = cls;
  document.querySelectorAll('#manageClassTabs .class-tab').forEach(t => {
    t.classList.toggle('active', t.textContent === cls);
  });
  const names = (state.students.science[ui.manageClass] || []).join('\n');
  document.getElementById('manageNamesTA').value = names;
}

function saveManageNames() {
  const names = document.getElementById('manageNamesTA').value.split('\n').map(n=>n.trim()).filter(n=>n);
  state.students.science[ui.manageClass] = names;
  saveLocal();
  scheduleSyncAutoSave();
  updatePendingBadge();
  showToast(`${names.length} nama disimpan untuk kelas ${ui.manageClass}.`, 'success');
}

function saveEnglishNames() {
  const names = document.getElementById('engNamesTA').value.split('\n').map(n=>n.trim()).filter(n=>n);
  state.students.english = names;
  saveLocal();
  scheduleSyncAutoSave();
  updatePendingBadge();
  showToast(`${names.length} nama murid BI disimpan.`, 'success');
}

// ═══════════════════════════════════════════════════════
// SETTINGS PAGE
// ═══════════════════════════════════════════════════════

function loadSettingsPage() {
  document.getElementById('setSchool').value = state.settings.school || '';
  document.getElementById('setAddress').value = state.settings.address || '';
  document.getElementById('setCode').value = state.settings.code || '';
  document.getElementById('setTeacher').value = state.settings.teacher || '';
  document.getElementById('setYear').value = state.settings.year || '';
  document.getElementById('setScriptURL').value = state.settings.scriptURL || '';
}

function saveSettings() {
  state.settings.school = document.getElementById('setSchool').value;
  state.settings.address = document.getElementById('setAddress').value;
  state.settings.code = document.getElementById('setCode').value;
  state.settings.teacher = document.getElementById('setTeacher').value;
  state.settings.year = document.getElementById('setYear').value;
  saveLocal();
  scheduleSyncAutoSave();
  document.getElementById('sb-school').textContent = state.settings.school || 'Nama Sekolah';
  document.getElementById('sb-teacher').textContent = 'Guru: ' + (state.settings.teacher || '\u2014');
  showToast('Tetapan disimpan!', 'success');
}

async function saveAndTestSync() {
  state.settings.scriptURL = document.getElementById('setScriptURL').value.trim();
  saveLocal();
  await syncToSheets();
}

// ═══════════════════════════════════════════════════════
// GOOGLE SHEETS SYNC
// ═══════════════════════════════════════════════════════

function setSyncStatus(status, text) {
  const dot = document.getElementById('syncDot');
  const txt = document.getElementById('syncText');
  if (dot) dot.className = 'sync-dot ' + status;
  if (txt) txt.textContent = text;
}

async function gasRequest(url, payload) {
  const form = new URLSearchParams();
  form.append('data', JSON.stringify(payload));

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString(),
      redirect: 'follow'
    });

    const text = await res.text();
    if (text.trim().startsWith('<')) {
      throw new Error('Apps Script mengembalikan HTML bukan JSON. Semak deployment (Execute as: Me, Access: Anyone) dan pastikan anda authorize akses.');
    }
    return JSON.parse(text);
  } catch(e) {
    if (e.message.includes('Failed to fetch') || e.message.includes('NetworkError') || e.message.includes('CORS')) {
      if (location.protocol === 'file:') {
        throw new Error('CORS disekat kerana file:// \u2014 Sila buka app melalui web server atau GitHub Pages.');
      }
    }
    throw e;
  }
}

async function gasGet(url, params) {
  const qs = new URLSearchParams(params).toString();
  try {
    const res = await fetch(`${url}?${qs}`, { redirect: 'follow' });
    const text = await res.text();
    if (text.trim().startsWith('<')) {
      throw new Error('Apps Script mengembalikan HTML. Semak deployment dan authorization.');
    }
    return JSON.parse(text);
  } catch(e) {
    if (e.message.includes('Failed to fetch') || e.message.includes('NetworkError') || e.message.includes('CORS')) {
      if (location.protocol === 'file:') {
        throw new Error('CORS disekat kerana file:// \u2014 Sila buka app melalui web server atau GitHub Pages.');
      }
    }
    throw e;
  }
}

async function syncToSheets() {
  const url = state.settings.scriptURL;
  if (!url || !url.includes('script.google.com')) {
    setSyncStatus('offline', 'URL belum dikonfigurasi');
    return;
  }
  // Jangan overwrite Sheets jika local data kosong
  const hasData = Object.keys(state.students || {}).length > 0
               || Object.keys(state.scores || {}).length > 0;
  if (!hasData) {
    showToast('Tiada data untuk sync. Data akan dimuat dari Sheets.', 'warning');
    loadFromSheets();
    return;
  }
  setSyncStatus('syncing', 'Menyimpan...');
  try {
    const payload = {
      action:     'saveAll',
      students:   state.students,
      scores:     state.scores,
      settings:   state.settings,
      points:     state.points     || {},
      bookChecks: state.bookChecks || {}
    };
    const data = await gasRequest(url, payload);
    if (data.error) throw new Error(data.error);
    setSyncStatus('online', 'Synced \u2714');
    showToast('Data disimpan ke Sheets.', 'success');
  } catch(e) {
    setSyncStatus('error', 'Sync gagal');
    showToast('Sync gagal: ' + e.message, 'error');
  }
}

async function loadFromSheets() {
  const url = state.settings.scriptURL;
  if (!url || !url.includes('script.google.com')) {
    showToast('Sila konfigurasi URL Apps Script dahulu.', 'warning');
    return;
  }
  setSyncStatus('syncing', 'Memuatkan...');
  try {
    const data = await gasGet(url, { action: 'loadAll' });
    if (data.error) throw new Error(data.error);
    if (data.students)   state.students   = data.students;
    if (data.scores)     state.scores     = data.scores;
    if (data.settings)   state.settings   = Object.assign({}, state.settings, data.settings);
    if (data.points)     state.points     = data.points;
    if (data.bookChecks) state.bookChecks = data.bookChecks;
    saveLocal();
    setSyncStatus('online', 'Dimuat dari Sheets');
    updatePendingBadge();
    renderDashboard();
    showToast('Data berjaya dimuat dari Google Sheets!', 'success');
  } catch(e) {
    setSyncStatus('error', 'Gagal muat');
    showToast('Gagal load: ' + e.message, 'error');
  }
}

// ═══════════════════════════════════════════════════════
// EXPORT / IMPORT
// ═══════════════════════════════════════════════════════

function exportData() {
  const page = document.querySelector('.nav-item.active')?.dataset?.page;
  if (page === 'reports' && document.getElementById('rptStudentSel')?.value) { printReport(); return; }
  exportExcel();
}

async function exportExcel() {
  if (typeof XLSX === 'undefined') {
    showToast('Memuatkan SheetJS...', 'info');
    try { await loadXLSX(); } catch(e) {
      showToast('SheetJS gagal dimuatkan. Periksa sambungan internet.', 'error');
      return;
    }
  }

  const wb = XLSX.utils.book_new();
  const date = new Date().toISOString().split('T')[0];

  // Sheet 1-5: Sains setiap kelas
  SCIENCE_CLASSES.forEach(cls => {
    const students = state.students.science[cls] || [];
    const header = ['Bil', 'Nama Murid'];
    const subRow = ['', ''];

    SCIENCE_TOPICS.forEach(t => {
      header.push(t.title);
      for (let i = 1; i < t.standards.length; i++) header.push('');
      t.standards.forEach(sp => subRow.push(sp));
    });
    header.push('Purata TP'); subRow.push('');

    const rows = students.map((name, i) => {
      const row = [i + 1, name];
      let sum = 0, cnt = 0;
      SCIENCE_TOPICS.forEach(t => {
        t.standards.forEach(sp => {
          const sc = getScore('science', cls, name, t.id, sp);
          const tp = sc ? sc.tp : '';
          row.push(tp);
          if (tp) { sum += tp; cnt++; }
        });
      });
      row.push(cnt ? parseFloat((sum / cnt).toFixed(2)) : '');
      return row;
    });

    const ws = XLSX.utils.aoa_to_sheet([header, subRow, ...rows]);
    _styleExcelHeader(ws, header.length, 2);
    XLSX.utils.book_append_sheet(wb, ws, `SAINS_${cls}`);
  });

  // Sheet 6: BI
  const engStudents = state.students.english || [];
  const engHeader = ['Bil', 'Nama Murid'];
  const engSubRow = ['', ''];
  ENGLISH_SKILLS.forEach(s => {
    engHeader.push(s.title);
    for (let i = 1; i < s.standards.length; i++) engHeader.push('');
    s.standards.forEach(sp => engSubRow.push(sp));
  });
  engHeader.push('Purata PL'); engSubRow.push('');

  const engRows = engStudents.map((name, i) => {
    const row = [i + 1, name];
    let sum = 0, cnt = 0;
    ENGLISH_SKILLS.forEach(s => {
      s.standards.forEach(sp => {
        const sc = getScore('english', null, name, s.id, sp);
        const tp = sc ? sc.tp : '';
        row.push(tp);
        if (tp) { sum += tp; cnt++; }
      });
    });
    row.push(cnt ? parseFloat((sum / cnt).toFixed(2)) : '');
    return row;
  });

  const wsEng = XLSX.utils.aoa_to_sheet([engHeader, engSubRow, ...engRows]);
  _styleExcelHeader(wsEng, engHeader.length, 2);
  XLSX.utils.book_append_sheet(wb, wsEng, 'BI_TAHUN3');

  // Sheet 7: Tarikh Taksiran
  const dateRows = [['Subjek', 'Kelas', 'Nama Murid', 'Topik', 'SP', 'TP', 'Tarikh Taksiran']];
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      SCIENCE_TOPICS.forEach(t => {
        t.standards.forEach(sp => {
          const sc = getScore('science', cls, name, t.id, sp);
          if (sc) dateRows.push(['Sains', cls, name, t.title, sp, sc.tp, sc.date || '']);
        });
      });
    });
  });
  (state.students.english || []).forEach(name => {
    ENGLISH_SKILLS.forEach(s => {
      s.standards.forEach(sp => {
        const sc = getScore('english', null, name, s.id, sp);
        if (sc) dateRows.push(['BI', 'Tahun 3', name, s.title, sp, sc.tp, sc.date || '']);
      });
    });
  });
  const wsDate = XLSX.utils.aoa_to_sheet(dateRows);
  _styleExcelHeader(wsDate, 7, 1);
  XLSX.utils.book_append_sheet(wb, wsDate, 'TARIKH_TAKSIRAN');

  // Sheet 8: Mata Terkumpul
  const ptsRows = [['Bil', 'Nama Murid', 'Kelas/Subjek', 'Jumlah Mata', 'Mata TP', 'Mata Buku', 'Mata Manual']];
  const allStudPts = [];
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      const key = getStudentKey('science', cls, name);
      const p = state.points[key] || { total: 0, log: [] };
      const tpP = (p.log||[]).filter(l=>l.type==='tp').reduce((a,l)=>a+(l.pts||0),0);
      const bkP = (p.log||[]).filter(l=>l.type==='book').reduce((a,l)=>a+(l.pts||0),0);
      const mnP = (p.log||[]).filter(l=>l.type==='manual').reduce((a,l)=>a+(l.pts||0),0);
      allStudPts.push([0, name, 'Sains - '+cls, p.total||0, tpP, bkP, mnP]);
    });
  });
  (state.students.english || []).forEach(name => {
    const p = state.points[name] || { total: 0, log: [] };
    const tpP = (p.log||[]).filter(l=>l.type==='tp').reduce((a,l)=>a+(l.pts||0),0);
    const bkP = (p.log||[]).filter(l=>l.type==='book').reduce((a,l)=>a+(l.pts||0),0);
    const mnP = (p.log||[]).filter(l=>l.type==='manual').reduce((a,l)=>a+(l.pts||0),0);
    allStudPts.push([0, name, 'BI Tahun 3', p.total||0, tpP, bkP, mnP]);
  });
  allStudPts.sort((a,b) => b[3] - a[3]);
  allStudPts.forEach((r,i) => { r[0] = i+1; ptsRows.push(r); });
  const wsPts = XLSX.utils.aoa_to_sheet(ptsRows);
  _styleExcelHeader(wsPts, 7, 1);
  XLSX.utils.book_append_sheet(wb, wsPts, 'MATA_TERKUMPUL');

  // Sheet 9: Log Mata
  const logRows = [['Bil', 'Nama Murid', 'Kelas/Subjek', 'Tarikh', 'Sebab', 'Jenis', 'Mata']];
  const allLogs = [];
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      const p = state.points[getStudentKey('science', cls, name)] || {};
      (p.log||[]).forEach(e => allLogs.push([0, name, 'Sains - '+cls, e.date||'', e.reason||'', e.type||'', e.pts||0]));
    });
  });
  (state.students.english || []).forEach(name => {
    const p = state.points[name] || {};
    (p.log||[]).forEach(e => allLogs.push([0, name, 'BI Tahun 3', e.date||'', e.reason||'', e.type||'', e.pts||0]));
  });
  allLogs.sort((a,b) => String(b[3]).localeCompare(String(a[3])));
  allLogs.forEach((r,i) => { r[0] = i+1; logRows.push(r); });
  const wsLog = XLSX.utils.aoa_to_sheet(logRows);
  _styleExcelHeader(wsLog, 7, 1);
  XLSX.utils.book_append_sheet(wb, wsLog, 'LOG_MATA');

  // Sheet 10: Semakan Buku
  const bukuRows = [['Bil', 'Tarikh', 'Nama Murid', 'Kelas/Subjek', 'Nota', 'Mata']];
  const allBuku = [];
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      const key = getStudentKey('science', cls, name);
      const recs = state.bookChecks[key]?.records || [];
      recs.forEach(r => allBuku.push([0, r.date||'', name, 'Sains - '+cls, r.note||'', r.pts||2]));
    });
  });
  (state.students.english || []).forEach(name => {
    const recs = state.bookChecks[name]?.records || [];
    recs.forEach(r => allBuku.push([0, r.date||'', name, 'BI Tahun 3', r.note||'', r.pts||2]));
  });
  allBuku.sort((a,b) => String(b[1]).localeCompare(String(a[1])));
  allBuku.forEach((r,i) => { r[0] = i+1; bukuRows.push(r); });
  const wsBuku = XLSX.utils.aoa_to_sheet(bukuRows);
  _styleExcelHeader(wsBuku, 6, 1);
  XLSX.utils.book_append_sheet(wb, wsBuku, 'SEMAKAN_BUKU');

  // Download
  XLSX.writeFile(wb, `RPM_${state.settings.school||'SKBT'}_${date}.xlsx`);
  showToast(`Fail Excel dimuat turun \u2014 ${XLSX.utils.book_get_sheet_names(wb).length} tab.`, 'success');
}

function _styleExcelHeader(ws, numCols, numHeaderRows) {
  ws['!cols'] = Array(numCols).fill(null).map((_, i) => ({
    wch: i === 0 ? 6 : i === 1 ? 35 : 18
  }));
  if (numHeaderRows > 1) {
    ws['!merges'] = ws['!merges'] || [];
  }
}

// ═══════════════════════════════════════════════════════
// CSV EXPORTS
// ═══════════════════════════════════════════════════════

function csvRow(arr) {
  return arr.map(v => {
    const s = String(v === null || v === undefined ? '' : v);
    return s.includes(',') || s.includes('"') || s.includes('\n')
      ? `"${s.replace(/"/g, '""')}"`
      : s;
  }).join(',') + '\n';
}

function exportCSVSains() {
  let csv = csvRow(['Kelas', 'Nama Murid', 'Topik', 'SP', 'TP', 'Tarikh Taksiran']);
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      SCIENCE_TOPICS.forEach(t => {
        t.standards.forEach(sp => {
          const sc = getScore('science', cls, name, t.id, sp);
          if (sc) csv += csvRow([cls, name, t.title, sp, sc.tp, sc.date || '']);
        });
      });
    });
  });
  downloadBlob(new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8'}),
    `RPM_Sains_${new Date().toISOString().split('T')[0]}.csv`);
  showToast('CSV Sains dimuat turun.', 'success');
}

function exportCSVBI() {
  let csv = csvRow(['Nama Murid', 'Kemahiran', 'LS', 'PL', 'Tarikh Taksiran']);
  (state.students.english || []).forEach(name => {
    ENGLISH_SKILLS.forEach(s => {
      s.standards.forEach(sp => {
        const sc = getScore('english', null, name, s.id, sp);
        if (sc) csv += csvRow([name, s.title, sp, sc.tp, sc.date || '']);
      });
    });
  });
  downloadBlob(new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8'}),
    `RPM_BI_${new Date().toISOString().split('T')[0]}.csv`);
  showToast('CSV BI dimuat turun.', 'success');
}

function exportCSVMata() {
  let csv = csvRow(['Bil','Nama Murid','Kelas/Subjek','Jumlah Mata','Tarikh','Sebab','Jenis','Mata']);
  const allLogs = [];
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      const p = state.points[getStudentKey('science', cls, name)] || {};
      (p.log||[]).forEach(e => allLogs.push([name, 'Sains - '+cls, (p.total||0), e.date||'', e.reason||'', e.type||'', e.pts||0]));
    });
  });
  (state.students.english || []).forEach(name => {
    const p = state.points[name] || {};
    (p.log||[]).forEach(e => allLogs.push([name, 'BI Tahun 3', (p.total||0), e.date||'', e.reason||'', e.type||'', e.pts||0]));
  });
  allLogs.sort((a,b) => String(b[3]).localeCompare(String(a[3])));
  allLogs.forEach((r,i) => { csv += csvRow([i+1, ...r]); });
  downloadBlob(new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8'}),
    `RPM_Mata_${new Date().toISOString().split('T')[0]}.csv`);
  showToast('CSV Mata dimuat turun.', 'success');
}

function exportCSVBuku() {
  let csv = csvRow(['Bil','Tarikh','Nama Murid','Kelas/Subjek','Nota','Mata']);
  const allBuku = [];
  SCIENCE_CLASSES.forEach(cls => {
    (state.students.science[cls] || []).forEach(name => {
      const recs = state.bookChecks[getStudentKey('science', cls, name)]?.records || [];
      recs.forEach(r => allBuku.push([r.date||'', name, 'Sains - '+cls, r.note||'', r.pts||2]));
    });
  });
  (state.students.english || []).forEach(name => {
    const recs = state.bookChecks[name]?.records || [];
    recs.forEach(r => allBuku.push([r.date||'', name, 'BI Tahun 3', r.note||'', r.pts||2]));
  });
  allBuku.sort((a,b) => String(b[0]).localeCompare(String(a[0])));
  allBuku.forEach((r,i) => { csv += csvRow([i+1, ...r]); });
  downloadBlob(new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8'}),
    `RPM_SemakanBuku_${new Date().toISOString().split('T')[0]}.csv`);
  showToast('CSV Semakan Buku dimuat turun.', 'success');
}

function exportCSVAll() { exportCSVSains(); }
function exportJSON()   { exportExcel(); }

// ═══════════════════════════════════════════════════════
// IMPORT
// ═══════════════════════════════════════════════════════

function importFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const ext = file.name.split('.').pop().toLowerCase();

  if (!confirm('Import akan menimpa data sedia ada. Teruskan?')) {
    event.target.value = '';
    return;
  }

  if (ext === 'xlsx' || ext === 'xls') {
    importExcel(file);
  } else if (ext === 'csv') {
    importCSV(file);
  } else {
    showToast('Format tidak disokong. Guna .xlsx atau .csv.', 'error');
  }
  event.target.value = '';
}

async function importExcel(file) {
  if (typeof XLSX === 'undefined') {
    showToast('Memuatkan SheetJS...', 'info');
    try { await loadXLSX(); } catch(e) {
      showToast('SheetJS gagal dimuatkan.', 'error'); return;
    }
  }
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const wb = XLSX.read(e.target.result, { type: 'binary' });

      if (wb.SheetNames.includes('TARIKH_TAKSIRAN')) {
        const ws = wb.Sheets['TARIKH_TAKSIRAN'];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
        let imported = 0;
        rows.slice(1).forEach(row => {
          const [subj, cls, name, , sp, tp, date] = row;
          if (!name || !sp || !tp) return;
          const subject = String(subj).toLowerCase().includes('sains') ? 'science' : 'english';
          const clsVal = subject === 'science' ? String(cls) : null;
          const topicId = _spToTopicId(String(sp));
          if (!topicId) return;
          setScore(subject, clsVal, String(name), topicId, String(sp), parseInt(tp), String(date||''));
          imported++;
        });
        if (imported) {
          saveLocal(); updatePendingBadge(); renderDashboard();
          showToast(`${imported} rekod TP diimport dari Excel.`, 'success');
          return;
        }
      }

      let total = 0;
      wb.SheetNames.forEach(sheetName => {
        if (!sheetName.startsWith('SAINS_') && sheetName !== 'BI_TAHUN3') return;
        const isSains = sheetName.startsWith('SAINS_');
        const cls = isSains ? sheetName.replace('SAINS_','') : null;
        const ws = wb.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
        if (rows.length < 3) return;

        const spRow = rows[1];
        const dataRows = rows.slice(2);
        const topics = isSains ? SCIENCE_TOPICS : ENGLISH_SKILLS;
        const subject = isSains ? 'science' : 'english';

        const colMap = {};
        let col = 2;
        topics.forEach(t => {
          t.standards.forEach(sp => {
            colMap[col] = { topicId: t.id, sp };
            col++;
          });
        });

        dataRows.forEach(row => {
          const name = row[1];
          if (!name) return;
          Object.entries(colMap).forEach(([ci, { topicId, sp }]) => {
            const val = row[ci];
            if (val !== '' && val !== undefined && val !== null) {
              setScore(subject, cls, String(name), topicId, sp, parseInt(val), '');
              total++;
            }
          });
        });
      });

      if (total) {
        saveLocal(); updatePendingBadge(); renderDashboard();
        showToast(`${total} rekod diimport dari Excel.`, 'success');
      } else {
        showToast('Fail Excel dibaca tetapi tiada data TP ditemui.', 'warning');
      }
    } catch(err) {
      showToast('Gagal import Excel: ' + err.message, 'error');
      console.error(err);
    }
  };
  reader.readAsBinaryString(file);
}

function importCSV(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const lines = e.target.result.split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length < 2) { showToast('Fail CSV kosong.', 'warning'); return; }

      const header = lines[0].toLowerCase();
      let imported = 0;

      if (header.includes('kelas') && header.includes('sp') && header.includes('tp')) {
        lines.slice(1).forEach(line => {
          const cols = _parseCSVLine(line);
          const [cls, name, , sp, tp, date] = cols;
          if (!cls||!name||!sp||!tp) return;
          const topicId = _spToTopicId(sp);
          if (!topicId) return;
          setScore('science', cls, name, topicId, sp, parseInt(tp), date||'');
          imported++;
        });
      } else if (header.includes('kemahiran') && header.includes('ls')) {
        lines.slice(1).forEach(line => {
          const cols = _parseCSVLine(line);
          const [name, , sp, tp, date] = cols;
          if (!name||!sp||!tp) return;
          const topicId = _spToTopicId(sp);
          if (!topicId) return;
          setScore('english', null, name, topicId, sp, parseInt(tp), date||'');
          imported++;
        });
      }

      if (imported) {
        saveLocal(); updatePendingBadge(); renderDashboard();
        showToast(`${imported} rekod diimport dari CSV.`, 'success');
      } else {
        showToast('Format CSV tidak dikenali. Guna CSV yang dieksport dari app ini.', 'warning');
      }
    } catch(err) {
      showToast('Gagal import CSV: ' + err.message, 'error');
    }
  };
  reader.readAsText(file, 'UTF-8');
}

function _spToTopicId(sp) {
  const prefix = sp.split('.')[0];
  const map = {
    '1':'t1','2':'t2','3':'t3','4':'t4','5':'t5',
    '6':'t6','7':'t7','8':'t8','9':'t9','10':'t10'
  };
  if (map[prefix]) return map[prefix];
  const engMap = {'1':'ls','2':'sp','3':'rd','4':'wr','5':'la'};
  return engMap[prefix] || null;
}

function _parseCSVLine(line) {
  const result = [];
  let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { inQ = !inQ; }
    else if (c === ',' && !inQ) { result.push(cur.trim()); cur = ''; }
    else cur += c;
  }
  result.push(cur.trim());
  return result;
}

function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  URL.revokeObjectURL(url);
}

// ═══════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════

let toastId = 0;

function showToast(msg, type = 'info') {
  const icons = {
    success: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    error: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
    warning: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
  };
  const DURATION = 3500;
  const id = ++toastId;
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.id = `toast-${id}`;
  el.innerHTML =
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[type] || icons.info}</svg>` +
    `<span class="toast-msg">${msg}</span>` +
    `<div class="toast-progress"><div class="toast-progress-bar" style="animation-duration:${DURATION}ms"></div></div>`;
  document.getElementById('toastContainer').appendChild(el);
  requestAnimationFrame(() => { requestAnimationFrame(() => el.classList.add('show')); });
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 300);
  }, DURATION);
}

// ═══════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) {
    document.getElementById('modalOverlay').classList.remove('open');
  }
}

// ═══════════════════════════════════════════════════════
// PRINT PAGE
// ═══════════════════════════════════════════════════════

let printMode = 'student';

function renderPrintPage() {
  const sciClasses = SCIENCE_CLASSES.map(c => `<option value="${c}">${c}</option>`).join('');

  document.getElementById('ps-class').innerHTML = sciClasses;
  updatePrintStudentOptions();

  document.getElementById('pt-class').innerHTML =
    '<option value="__ALL__">Semua Kelas</option>' + sciClasses;
  updatePrintTopicOptions();

  document.getElementById('psu-class').innerHTML =
    '<option value="__ALL__">Semua Kelas</option>' + sciClasses;
}

function switchPrintMode(mode) {
  printMode = mode;
  document.querySelectorAll('.print-mode-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.mode === mode));
  ['student','topic','subject'].forEach(m =>
    document.getElementById(`print-panel-${m}`).style.display = m === mode ? '' : 'none');
}

function updatePrintStudentOptions() {
  const subj = document.getElementById('ps-subj').value;
  const cls = document.getElementById('ps-class').value;
  const wrap = document.getElementById('ps-class-wrap');
  wrap.style.display = subj === 'science' ? '' : 'none';

  const students = getClassStudents(subj, cls);

  document.getElementById('ps-student').innerHTML =
    '<option value="__ALL__">\u2014 Semua Murid (satu halaman setiap murid) \u2014</option>' +
    students.map(n => `<option value="${n}">${n}</option>`).join('');

  document.getElementById('ps-preview').innerHTML = '';
}

function previewStudentReport() {
  const subj = document.getElementById('ps-subj').value;
  const cls = document.getElementById('ps-class').value;
  const student = document.getElementById('ps-student').value;
  const students = student === '__ALL__'
    ? getClassStudents(subj, cls)
    : [student];

  document.getElementById('ps-preview').innerHTML =
    `<div class="rpm-doc">${buildStudentReportHTML(subj, cls, students)}</div>`;
}

function updatePrintTopicOptions() {
  const subj = document.getElementById('pt-subj').value;
  const wrap = document.getElementById('pt-class-wrap');
  wrap.style.display = subj === 'science' ? '' : 'none';

  const topics = subj === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  document.getElementById('pt-topic').innerHTML =
    topics.map(t => `<option value="${t.id}">${t.title}</option>`).join('');

  document.getElementById('pt-preview').innerHTML = '';
}

function previewTopicReport() {
  const subj = document.getElementById('pt-subj').value;
  const cls = document.getElementById('pt-class').value;
  const topicId = document.getElementById('pt-topic').value;

  const classes = subj === 'science'
    ? (cls === '__ALL__' ? SCIENCE_CLASSES : [cls])
    : ['BI Tahun 3'];

  document.getElementById('pt-preview').innerHTML =
    `<div class="rpm-doc">${buildTopicReportHTML(subj, classes, topicId)}</div>`;
}

function updatePrintSubjectOptions() {
  const subj = document.getElementById('psu-subj').value;
  const wrap = document.getElementById('psu-class-wrap');
  wrap.style.display = subj === 'science' ? '' : 'none';
  document.getElementById('psu-preview').innerHTML = '';
}

function previewSubjectReport() {
  const subj = document.getElementById('psu-subj').value;
  const cls = document.getElementById('psu-class').value;

  const classes = subj === 'science'
    ? (cls === '__ALL__' ? SCIENCE_CLASSES : [cls])
    : ['BI Tahun 3'];

  document.getElementById('psu-preview').innerHTML =
    `<div class="rpm-doc">${buildSubjectReportHTML(subj, classes)}</div>`;
}

function doPrint(mode) {
  let html = '';

  if (mode === 'student') {
    const subj = document.getElementById('ps-subj').value;
    const cls = document.getElementById('ps-class').value;
    const student = document.getElementById('ps-student').value;
    const students = student === '__ALL__'
      ? getClassStudents(subj, cls)
      : [student];
    html = buildStudentReportHTML(subj, cls, students);

  } else if (mode === 'topic') {
    const subj = document.getElementById('pt-subj').value;
    const cls = document.getElementById('pt-class').value;
    const topicId = document.getElementById('pt-topic').value;
    const classes = subj === 'science'
      ? (cls === '__ALL__' ? SCIENCE_CLASSES : [cls])
      : ['BI Tahun 3'];
    html = buildTopicReportHTML(subj, classes, topicId);

  } else {
    const subj = document.getElementById('psu-subj').value;
    const cls = document.getElementById('psu-class').value;
    const classes = subj === 'science'
      ? (cls === '__ALL__' ? SCIENCE_CLASSES : [cls])
      : ['BI Tahun 3'];
    html = buildSubjectReportHTML(subj, classes);
  }

  openPrintWindow(html);
}

function openPrintWindow(bodyHTML) {
  const school = state.settings.school || 'SK Bandar Tawau';
  const year = state.settings.year || new Date().getFullYear();

  const win = window.open('', '_blank',
    'width=900,height=700,scrollbars=yes,resizable=yes');
  if (!win) { showToast('Popup disekat. Sila benarkan popup untuk laman ini.', 'error'); return; }

  win.document.write(`<!DOCTYPE html><html lang="ms"><head>
<meta charset="UTF-8">
<title>RPM \u2014 ${school} \u2014 ${year}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Plus Jakarta Sans',Arial,sans-serif;font-size:11px;color:#0e0f11;background:white;padding:20px}
.rpm-doc-header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:12px;border-bottom:2px solid #0e0f11;margin-bottom:14px}
.rpm-doc-school{font-size:13px;font-weight:800}
.rpm-doc-meta{font-size:10px;color:#7a7d8a;margin-top:2px}
h2{font-size:16px;font-weight:800;margin-bottom:2px}
h3{font-size:11px;font-weight:700;margin:12px 0 6px;padding:5px 10px;background:#f7f8fa;border-left:3px solid #0e0f11}
table{width:100%;border-collapse:collapse;margin-bottom:10px;font-size:10.5px}
th{background:#0e0f11;color:white;padding:5px 7px;text-align:center;font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.3px}
th.left{text-align:left}
td{padding:4px 7px;border-bottom:1px solid #e8eaef;text-align:center;vertical-align:middle}
td.left{text-align:left;font-weight:600}
tr:nth-child(even) td{background:#f7f8fa}
tr:last-child td{border-bottom:none}
.rtp-1{background:#fef2f2;color:#dc2626;font-weight:700;border-radius:4px;padding:1px 5px}
.rtp-2{background:#fff7ed;color:#ea580c;font-weight:700;border-radius:4px;padding:1px 5px}
.rtp-3{background:#fefce8;color:#ca8a04;font-weight:700;border-radius:4px;padding:1px 5px}
.rtp-4{background:#f0fdf4;color:#16a34a;font-weight:700;border-radius:4px;padding:1px 5px}
.rtp-5{background:#eff6ff;color:#2563eb;font-weight:700;border-radius:4px;padding:1px 5px}
.rtp-6{background:#faf5ff;color:#7c3aed;font-weight:700;border-radius:4px;padding:1px 5px}
.rtp-0{color:#b0b3bf}
.summary-row td{background:#f0fdf4 !important;font-weight:700;color:#059669}
.page-break{page-break-after:always;break-after:always;margin:0;padding:0;height:0}
.rpm-prog{height:5px;background:#e8eaef;border-radius:3px;overflow:hidden;min-width:60px}
.rpm-prog-fill{height:100%;border-radius:3px}
.rpm-doc-footer{margin-top:14px;padding-top:8px;border-top:1px solid #e8eaef;font-size:9.5px;color:#7a7d8a;display:flex;justify-content:space-between}
.rpm-sig-row{display:flex;gap:24px;margin-top:18px}
.rpm-sig-box{flex:1;border-top:1.5px solid #0e0f11;padding-top:5px;font-size:10px;color:#7a7d8a;text-align:center}
@media print{body{padding:8px}.page-break{height:0}}
</style>
</head><body>
${bodyHTML}
<script>window.onload=function(){window.print();}<\/script>
</body></html>`);
  win.document.close();
}

// ═══════════════════════════════════════════════════════
// REPORT HTML BUILDERS
// ═══════════════════════════════════════════════════════

function docHeader(title, subtitle, badge, badgeClass) {
  const school = state.settings.school || 'SK Bandar Tawau';
  const teacher = state.settings.teacher || '\u2014';
  const code = state.settings.code || '';
  const year = state.settings.year || new Date().getFullYear();
  return `
  <div class="rpm-doc-header">
    <div>
      <div class="rpm-doc-school">${school}</div>
      <div class="rpm-doc-meta">${code ? code+' \u00b7 ' : ''}Guru: ${teacher} \u00b7 Tahun ${year}</div>
    </div>
    <div style="text-align:right">
      <span class="rpm-doc-badge ${badgeClass}" style="margin-bottom:4px;display:inline-block">${badge}</span>
      <div class="rpm-doc-school">${title}</div>
      <div class="rpm-doc-meta">${subtitle}</div>
    </div>
  </div>`;
}

function docFooter() {
  return `
  <div class="rpm-doc-footer">
    <span>Dijana: ${new Date().toLocaleDateString('ms-MY', {day:'2-digit',month:'long',year:'numeric'})}</span>
    <span>Sistem RPM \u2014 ${state.settings.school || 'SK Bandar Tawau'}</span>
  </div>`;
}

function rtpSpan(val) {
  if (!val || val === 0) return '<span class="rtp-0">\u2014</span>';
  const v = typeof val === 'number' ? Math.round(val) : parseInt(val);
  if (v < 1 || v > 6) return '<span class="rtp-0">\u2014</span>';
  return `<span class="rtp-${v}">TP ${typeof val === 'number' && val % 1 !== 0 ? val.toFixed(1) : val}</span>`;
}

function progBar(val, max=6) {
  if (!val) return '';
  const pct = Math.min(100, Math.round(val / max * 100));
  const col = val >= 4 ? '#16a34a' : val >= 2 ? '#ca8a04' : '#dc2626';
  return `<div class="rpm-prog"><div class="rpm-prog-fill" style="width:${pct}%;background:${col}"></div></div>`;
}

// 1. Student report (one page per student)
function buildStudentReportHTML(subj, cls, students) {
  const topics = subj === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  const subjLabel = subj === 'science' ? 'Sains Tahun 2' : 'BI Tahun 3';
  const clsLabel = subj === 'science' ? `Kelas ${cls}` : 'Tahun 3';
  const badgeBg = subj === 'science' ? 'background:#f5f3ff;color:#7c3aed' : 'background:#ecfeff;color:#0891b2';

  return students.map((name, si) => {
    const overall = getStudentOverallAvg(subj, cls, name);

    const topicRows = topics.map(t => {
      const avg = getStudentTopicAvg(subj, cls, name, t.id);
      const spCells = t.standards.map(sp => {
        const sc = getScore(subj, cls, name, t.id, sp);
        return `<td>${sc ? rtpSpan(sc.tp) : '<span class="rtp-0">\u2014</span>'}</td>`;
      }).join('');

      return `<tr>
        <td class="left">${t.title}</td>
        <td>${avg > 0 ? rtpSpan(avg) : '<span class="rtp-0">\u2014</span>'}</td>
        <td style="min-width:80px">${progBar(avg)}</td>
        ${spCells}
      </tr>`;
    }).join('');

    const spHeaders = topics.flatMap(t => t.standards).map(sp =>
      `<th style="font-size:8px;padding:4px 2px">${sp}</th>`
    ).join('');

    const pageBreak = si < students.length - 1
      ? '<div class="page-break"></div>' : '';

    return `
    ${docHeader(name, subjLabel + ' \u00b7 ' + clsLabel, subjLabel, 'rpm-doc-badge')}
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px">
      <div>
        <h2>${name}</h2>
        <div style="font-size:10px;color:#7a7d8a">${clsLabel}</div>
      </div>
      <div style="margin-left:auto;text-align:center;background:#f7f8fa;padding:10px 18px;border-radius:10px;border:1.5px solid #e8eaef">
        <div style="font-size:28px;font-weight:800;line-height:1;color:${overall >= 4 ? '#16a34a' : overall >= 2 ? '#ca8a04' : overall > 0 ? '#dc2626' : '#b0b3bf'}">${overall > 0 ? overall.toFixed(1) : '\u2014'}</div>
        <div style="font-size:9px;color:#7a7d8a;margin-top:2px">Purata / 6.0</div>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th class="left" style="width:28%">Topik / Kemahiran</th>
          <th>Purata TP</th>
          <th>Prestasi</th>
          ${spHeaders}
        </tr>
      </thead>
      <tbody>
        ${topicRows}
        <tr class="summary-row">
          <td class="left">PURATA KESELURUHAN</td>
          <td colspan="2">${overall > 0 ? rtpSpan(overall) : '\u2014'}</td>
          <td colspan="${topics.flatMap(t=>t.standards).length}"></td>
        </tr>
      </tbody>
    </table>

    <div class="rpm-sig-row">
      <div class="rpm-sig-box">Tandatangan Guru<br><br><br></div>
      <div class="rpm-sig-box">Tandatangan Ibu Bapa / Penjaga<br><br><br></div>
      <div class="rpm-sig-box">Tarikh Diterima<br><br><br></div>
    </div>

    ${docFooter()}
    ${pageBreak}`;
  }).join('');
}

// 2. Topic report (all students for one topic)
function buildTopicReportHTML(subj, classes, topicId) {
  const topics = subj === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return '<p>Topik tidak dijumpai.</p>';
  const subjLabel = subj === 'science' ? 'Sains Tahun 2' : 'BI Tahun 3';
  const spPrefix = subj === 'science' ? 'SP' : 'LS';

  return classes.map((cls, ci) => {
    const students = getClassStudents(subj, cls);
    const clsLabel = subj === 'science' ? `Kelas ${cls}` : 'Tahun 3';

    const studentRows = students.map((name, i) => {
      const spCells = topic.standards.map(sp => {
        const sc = getScore(subj, cls, name, topicId, sp);
        return `<td>${sc ? rtpSpan(sc.tp) : '<span class="rtp-0">\u2014</span>'}</td>`;
      }).join('');
      const avg = getStudentTopicAvg(subj, cls, name, topicId);
      return `<tr>
        <td style="text-align:center;font-size:10px;color:#7a7d8a">${i+1}</td>
        <td class="left">${name}</td>
        ${spCells}
        <td>${avg > 0 ? rtpSpan(avg) : '<span class="rtp-0">\u2014</span>'}</td>
        <td style="min-width:60px">${progBar(avg)}</td>
      </tr>`;
    }).join('');

    const spAvgs = topic.standards.map(sp => {
      const vals = students.map(n => {
        const sc = getScore(subj, cls, n, topicId, sp);
        return sc ? sc.tp : 0;
      }).filter(v => v > 0);
      const avg = vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0;
      return `<td>${avg > 0 ? rtpSpan(avg) : '<span class="rtp-0">\u2014</span>'}</td>`;
    }).join('');
    const clsAvg = getClassTopicAvg(subj, cls, topicId);

    const spHeaders = topic.standards.map(sp =>
      `<th>${spPrefix} ${sp}</th>`).join('');

    const pageBreak = ci < classes.length - 1
      ? '<div class="page-break"></div>' : '';

    return `
    ${docHeader(topic.title, `${subjLabel} \u00b7 ${clsLabel}`, clsLabel, 'rpm-doc-badge')}
    <h3 style="border-left-color:#7c3aed">${topic.title} \u2014 ${clsLabel}</h3>
    <table>
      <thead>
        <tr>
          <th style="width:28px">#</th>
          <th class="left">Nama Murid</th>
          ${spHeaders}
          <th>Purata</th>
          <th>Prestasi</th>
        </tr>
      </thead>
      <tbody>
        ${studentRows}
        <tr class="summary-row">
          <td colspan="2" class="left">PURATA KELAS</td>
          ${spAvgs}
          <td>${clsAvg > 0 ? rtpSpan(clsAvg) : '\u2014'}</td>
          <td>${progBar(clsAvg)}</td>
        </tr>
      </tbody>
    </table>
    ${docFooter()}
    ${pageBreak}`;
  }).join('');
}

// 3. Full subject report (all topics, all students) — FIXED: uses topic.id not topicId
function buildSubjectReportHTML(subj, classes) {
  const topics = subj === 'science' ? SCIENCE_TOPICS : ENGLISH_SKILLS;
  const subjLabel = subj === 'science' ? 'Sains Tahun 2' : 'BI Tahun 3';
  const spPrefix = subj === 'science' ? 'SP' : 'LS';
  const parts = [];

  classes.forEach((cls, ci) => {
    const students = getClassStudents(subj, cls);
    const clsLabel = subj === 'science' ? `Kelas ${cls}` : 'Tahun 3';

    // Summary table
    const topicHeaders = topics.map(t =>
      `<th style="font-size:8.5px">${t.short || t.title.split(' ')[0]}</th>`
    ).join('');

    const summaryRows = students.map((name, i) => {
      const tpCells = topics.map(t => {
        const avg = getStudentTopicAvg(subj, cls, name, t.id);
        return `<td>${avg > 0 ? rtpSpan(avg) : '<span class="rtp-0">\u2014</span>'}</td>`;
      }).join('');
      const overall = getStudentOverallAvg(subj, cls, name);
      return `<tr>
        <td style="text-align:center;font-size:10px;color:#7a7d8a">${i+1}</td>
        <td class="left">${name}</td>
        ${tpCells}
        <td>${overall > 0 ? rtpSpan(overall) : '<span class="rtp-0">\u2014</span>'}</td>
      </tr>`;
    }).join('');

    const clsAvgCells = topics.map(t => {
      const avg = getClassTopicAvg(subj, cls, t.id);
      return `<td>${avg > 0 ? rtpSpan(avg) : '<span class="rtp-0">\u2014</span>'}</td>`;
    }).join('');
    const allStudentsAvg = students.map(n => getStudentOverallAvg(subj, cls, n)).filter(v => v > 0);
    const clsOverall = allStudentsAvg.length
      ? allStudentsAvg.reduce((a,b) => a+b, 0) / allStudentsAvg.length : 0;

    let html = `
    ${docHeader(subjLabel + ' \u2014 Laporan Keseluruhan', clsLabel, clsLabel, 'rpm-doc-badge')}
    <h3>Ringkasan Prestasi \u2014 ${clsLabel}</h3>
    <table>
      <thead>
        <tr>
          <th style="width:28px">#</th>
          <th class="left">Nama Murid</th>
          ${topicHeaders}
          <th>Overall</th>
        </tr>
      </thead>
      <tbody>
        ${summaryRows}
        <tr class="summary-row">
          <td colspan="2" class="left">PURATA KELAS</td>
          ${clsAvgCells}
          <td>${clsOverall > 0 ? rtpSpan(clsOverall) : '\u2014'}</td>
        </tr>
      </tbody>
    </table>`;

    // Per-topic detail tables — FIXED: uses topic.id (not undefined topicId)
    topics.forEach(topic => {
      const spHeaders = topic.standards.map(sp =>
        `<th style="font-size:8px;padding:4px 2px">${spPrefix} ${sp}</th>`
      ).join('');

      const rows = students.map((name, i) => {
        const spCells = topic.standards.map(sp => {
          const sc = getScore(subj, cls, name, topic.id, sp);
          return `<td>${sc ? rtpSpan(sc.tp) : '<span class="rtp-0">\u2014</span>'}</td>`;
        }).join('');
        const avg = getStudentTopicAvg(subj, cls, name, topic.id);
        return `<tr>
          <td style="text-align:center;font-size:10px;color:#7a7d8a">${i+1}</td>
          <td class="left">${name}</td>
          ${spCells}
          <td>${avg > 0 ? rtpSpan(avg) : '<span class="rtp-0">\u2014</span>'}</td>
        </tr>`;
      }).join('');

      html += `
      <h3>${topic.title}</h3>
      <table>
        <thead>
          <tr>
            <th style="width:28px">#</th>
            <th class="left">Nama Murid</th>
            ${spHeaders}
            <th>Purata</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;
    });

    html += docFooter();
    if (ci < classes.length - 1) html += '<div class="page-break"></div>';
    parts.push(html);
  });

  return parts.join('');
}

// ═══════════════════════════════════════════════════════
// DARK MODE TOGGLE
// ═══════════════════════════════════════════════════════

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  try { localStorage.setItem('rpm_theme', next); } catch (e) {}
}

// Restore saved theme on load
(function () {
  try {
    const saved = localStorage.getItem('rpm_theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  } catch (e) {}
})();

// ═══════════════════════════════════════════════════════
// DOMContentLoaded
// ═══════════════════════════════════════════════════════

window.addEventListener('DOMContentLoaded', () => {
  loadLocal();

  // Apply settings to sidebar
  document.getElementById('sb-school').textContent = state.settings.school || 'SK Bandar Tawau';
  document.getElementById('sb-teacher').textContent = 'Guru: ' + (state.settings.teacher || 'Harsidi bin Junick');

  updatePendingBadge();
  renderDashboard();

  // Auto-load data dari Google Sheets bila app dibuka
  if (state.settings.scriptURL && state.settings.scriptURL.includes('script.google.com')) {
    loadFromSheets();
  } else {
    setSyncStatus('offline', 'Tetapkan URL Sync');
  }

  // Keyboard shortcut: Ctrl+S to sync
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      syncToSheets();
    }
  });
});
