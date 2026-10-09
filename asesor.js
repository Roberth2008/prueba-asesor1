/* Catálogos FEA (idénticos al sistema del administrador) */
        const CATALOGOS = {
            circuitos: [
                { id: "01", nombre: "Circuito 01 (Cañas)" },
                { id: "02", nombre: "Circuito 02 (Abangares)" },
                { id: "03", nombre: "Circuito 03 (Tilarán)" },
                { id: "04", nombre: "Circuito 04 (Colorado)" },
                { id: "05", nombre: "Circuito 05 (Altura)" }
            ],
            instituciones: {
                "01": [
  "Escuela Agua Caliente",
  "Escuela Cedros",
  "Escuela Paso Lajas",
  "Escuela El Vergel",
  "Escuela Higuerón",
  "Escuela San Isidro",
  "Escuela San Juan",
  "Escuela Sandial",
  "Escuela Buenos Aires",
  "Escuela Río Corobicí",
  "Escuela IDA San Luis",
  "Escuela Corobicí Palmira",
  "Escuela Jerónimo Fernández",
  "Escuela Bello Horizonte",
  "Escuela Hacienda Taboga",
  "Escuela San Luis",
  "Escuela San Antonio",
  "Escuela Nueva Guatemala",
  "Escuela Lajas",
  "Jardín de Niños Monseñor Luis Leipold",
  "Escuela Las Palmas",
  "Escuela Antonio Obando",
  "Escuela Bebedero",
  "Escuela Monseñor Luis Leipold",
  "Escuela INVU Las Cañas",
  "Escuela San Cristobal",
  "Escuela San Miguel",
  "Liceo Miguel Araya Venegas",
  "Liceo Nocturno Juan Santamaría",
  "IPEC",
  "Liceo Bebedero",
  "Liceo Rural Nueva Guatemala",
  "C.T.P Cañas",
  "CINDEA Bebedero",
  "CECELO",
  "Saint Timothy School",
  "CENIT"
],
                "02": [
  "Arizona",
  "Santa Lucía",
  "Concepción",
  "Los Ángeles",
  "Tres Amigos",
  "Lourdes",
  "Pozo Azul",
  "San Juan Grande",
  "San Juan Chiquito",
  "San Francisco",
  "Matapalo",
  "Limonal",
  "Delia Oviedo de Acuña",
  "CTP de Abangares",
  "CINDEA de Abangares"
],
                "03": [
  "Esc. Viejo Arenal",
  "Esc. Asentamiento IDA Nuevo Arenal",
  "Esc. La Palma",
  "Esc. Paraíso",
  "Esc. El Aguacate",
  "Cerro San José",
  "Esc. El Silencio",
  "Esc. La Unión",
  "Esc. Ranchitos",
  "Esc. Mata de Caña",
  "Esc. Río Chiquito",
  "Esc. Sabalito",
  "Esc. Las Parcelas",
  "Esc. Solania",
  "Esc. La Maravilla",
  "Esc. El Roble",
  "Esc. Asentamiento Monseñor Morera Vega",
  "Esc. San Luis",
  "Esc. Rosita Chaves",
  "Esc. Los Ángeles",
  "Esc. Quebrada Grande",
  "Esc. Río Piedras",
  "Esc. Linda Vista",
  "Esc. Jaime Gutiérrez Braun",
  "Esc. Arenal",
  "Esc. Tronadora",
  "Esc. Líder el Carmen",
  "Esc. José María Calderón Mayorga",
  "Liceo Experimental Bilingüe Arenal",
  "Colegio Noct. Maurilio Alvarado Vargas",
  "CINDEA (Tilarán- Arenal)",
  "Liceo Maurilio Alvarado Vargas",
  "CTP Tronadora",
  "Jardín de Niños Tilarán",
  "Querubín"
],
                "04": [
  "El Níspero",
  "Concepción",
  "Barrio Jesús",
  "Raizal",
  "María Raffols",
  "Barbudal",
  "Higuerillas",
  "Tiquiruzas",
  "Peñas Blancas",
  "San Joaquín",
  "Las Brisas",
  "Piedra Verde",
  "Porozal",
  "Pueblo Nuevo",
  "Santa Lucía",
  "Joaquín Arroyo",
  "Colorado",
  "San Buenaventura",
  "Liceo de Colorado",
  "CINDEA La Palma"
],
                "05": [
  "Escuela Altos de Cebadilla",
  "Escuela Los Tornos",
  "Escuela Pueblo Nuevo",
  "Escuela Campos de Oro",
  "Escuela El Dos de Abangares",
  "Escuela Monte Los Olivos",
  "Escuela La Cruz",
  "Escuela Las Nubes",
  "Escuela Los Patios",
  "Escuela La Esperanza",
  "Escuela Candelaria",
  "Escuela Turín",
  "Escuela Tres Hermanos",
  "Escuela La Plaza",
  "Escuela Las Brisas",
  "Escuela El Dos de Tilarán",
  "Escuela San Miguel",
  "Escuela San Rafael",
  "Escuela Cañitas",
  "Escuela Cabeceras de Cañas",
  "Colegio San Rafael",
  "Liceo Rural Cabeceras"
]
            },
            disciplinas: {
                "Escénicas": ["Coreografía de baile", "Coreografía conceptual", "Coreografía de proyección folclórica costarricense", "Coreografía de proyección folclórica internacional", "Danza cultural indígena costarricense", "Danza cultural indígena internacional", "Cuentacuentos", "Narración o relato oral indígena original", "Narración o relato oral indígena de tradición ancestral", "Poesía coral", "Retahílas", "Teatro - extracto de obra teatral", "Teatro de muñecos o títeres", "Teatro indígena - extracto de obra teatral", "Teatro de niños y niñas - extracto de obra teatral", "Teatro de niños y niñas indígena - extracto de obra teatral"],
                "Literarias": ["Canto poético indígena", "Cuento", "Cuento ilustrado", "Fotonovela", "Microrrelato", "Novela gráfica", "Poesía", "Poesía indígena", "Relato escrito indígena original", "Relato escrito indígena tradicional o ancestral"],
                "Musicales": ["Banda de garaje", "Canción original", "Canción original de niños y niñas", "Canción popular", "Canción popular de niños y niñas", "Canción típica original costarricense", "Canción típica popular costarricense", "Cantautor/a", "Canto indígena original", "Canto indígena tradicional o ancestral", "Canto indígena original de niños y niñas", "Canto indígena de niños y niñas: tradicional o ancestral", "Cimarrona", "Coro", "Ensamble de flautas dulces", "Ensamble instrumental con materiales reciclables o reutilizables", "Estudiantina", "Grupo instrumental experimental", "Grupo instrumental", "Grupo musical cultural instrumental indígena", "Grupo musical cultural indígena", "Marimba", "Percusión corporal", "Rap"],
                "Visuales": ["Collage", "Dibujo", "Dibujo indígena", "Diseño de objeto", "Escultura", "Escultura indígena", "Esculturas vivientes", "Fotografía", "Grabado", "Instalación artística", "Máscara indígena", "Máscara o careta", "Mascarada tradicional costarricense (payasos, mantudos, gigantes, cabezudos, aparatos)", "Mural", "Mural indígena", "Objeto cultural indígena", "Pintura", "Pintura indígena", "Pintura corporal", "Producción audiovisual", "Teñido textil"]
            }
        };


/* ==========================================================================
   MÓDULO DE ASESORES · FEA 2027 · DRE Cañas
   Reglas de permisos:
   - Todo asesor debe iniciar sesión (Firebase Authentication).
   - Puede INGRESAR inscripciones y estudiantes nuevos.
   - Puede EDITAR únicamente lo que él mismo ingresó (creadoPorUid === su uid).
   - NO puede ELIMINAR nada. (Las reglas de Firestore también lo impiden.)
   ========================================================================== */

// ==================== FIREBASE ====================
const firebaseConfig = {
    apiKey: "AIzaSyC0uI5zvisuBT5GmvP6rgpYtE5fLU-DSoc",
    authDomain: "base-de-datos-fea-2026.firebaseapp.com",
    projectId: "base-de-datos-fea-2026",
    storageBucket: "base-de-datos-fea-2026.firebasestorage.app",
    messagingSenderId: "231707148771",
    appId: "1:231707148771:web:37a5eb6f1c38da03a620d6",
    measurementId: "G-G4XXLBTKWF"
};

let firebaseDB = null;
let firebaseAuth = null;

// ==================== ESTADO ====================
let currentUser = null;            // { uid, email, nombre }
let activeTab = "dashboard";
let currentStep = 1;
let pendingStudentChips = [];
let guardando = false;

let dbEstudiantes = {};            // { cedula: {...} }
let dbInscripciones = [];          // [ {id, ...} ]

const modoManual = { Institucion: false, Disciplina: false };

// Estado del modal de inscripción
let editInsId = null;
let editModo = "edit";             // "edit" | "view"
let editNuevosChips = [];          // integrantes nuevos que se agregan en la edición

const IDENTITY_CONFIG = {
    cedula: { label: "Número de cédula", placeholder: "Ej: 1-2345-6789", hint: "9 dígitos · Ejemplo: 1-2345-6789" },
    dimex:  { label: "Número DIMEX", placeholder: "Ej: 1558-2026-0001", hint: "11 o 12 dígitos · Ejemplo: 1558-2026-0001" },
    yisro:  { label: "Identificador YIS RÓ", placeholder: "Ej: YRO-2026-0017", hint: "Alfanumérico · Ejemplo: YRO-2026-0017" }
};

// ==================== UTILIDADES ====================
const $ = id => document.getElementById(id);

// Escapa texto antes de insertarlo en innerHTML (los datos los escriben varios usuarios)
function esc(v) {
    return String(v ?? "").replace(/[&<>"']/g, ch => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
}

function normalizeText(text) {
    if (!text) return "";
    return text.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function normalizeIdentidad(tipo, val) {
    if (!val) return "";
    const raw = val.toString().trim();
    if (tipo === "yisro") return raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
    return raw.replace(/\D/g, "");
}

function validarIdentidad(tipo, valor) {
    const clean = normalizeIdentidad(tipo, valor);
    if (tipo === "cedula") return { clean, valido: /^\d{9}$/.test(clean), mensaje: "La cédula costarricense debe tener exactamente 9 dígitos." };
    if (tipo === "dimex")  return { clean, valido: /^(?:\d{11}|\d{12})$/.test(clean), mensaje: "El DIMEX debe tener 11 o 12 dígitos." };
    return { clean, valido: /^[A-Z0-9]+$/.test(clean) && clean.length >= 3, mensaje: "El identificador YIS RÓ debe contener letras y/o números." };
}

// Identidad visible: completa si el estudiante lo ingresó este asesor; enmascarada en los demás casos
function fmtId(cedula) {
    if (!cedula) return "";
    const st = dbEstudiantes[cedula];
    if (st && esMioEstudiante(st)) return cedula;
    if (cedula.length >= 7) return cedula.substring(0, 3) + "-****-" + cedula.substring(cedula.length - 2);
    return cedula.substring(0, 2) + "***";
}

function showToast(msg, type = "info") {
    const container = $("toastContainer");
    const toast = document.createElement("div");
    const bg = type === "success" ? "bg-emerald-600" : type === "warning" ? "bg-amber-600" : type === "danger" ? "bg-mep-red" : "bg-mep-blue";
    toast.className = `${bg} text-white px-4 py-3 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2 pointer-events-auto transition-all duration-300 transform translate-y-2 opacity-0`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove("translate-y-2", "opacity-0"), 10);
    setTimeout(() => {
        toast.classList.add("opacity-0");
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function closeModal(id) { $(id).classList.add("hidden"); }
function openModal(id) { $(id).classList.remove("hidden"); lucide.createIcons(); }

// ==================== PERMISOS ====================
const esMiaInscripcion = ins => !!currentUser && ins.creadoPorUid === currentUser.uid;
const esMioEstudiante = st => !!currentUser && st.creadoPorUid === currentUser.uid;

// ==================== ARRANQUE Y SESIÓN ====================
window.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    try {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        firebaseDB = firebase.firestore();
        firebaseAuth = firebase.auth();
    } catch (e) {
        console.error(e);
        mostrarErrorLogin("No se pudo iniciar Firebase. Revise su conexión a internet.");
        return;
    }

    firebaseAuth.onAuthStateChanged(async user => {
        if (!user) {
            currentUser = null;
            dbEstudiantes = {};
            dbInscripciones = [];
            $("appShell").classList.add("hidden");
            $("loginScreen").classList.remove("hidden");
            return;
        }
        currentUser = {
            uid: user.uid,
            email: user.email || "",
            nombre: user.displayName || (user.email || "asesor")
        };
        $("loginScreen").classList.add("hidden");
        $("appShell").classList.remove("hidden");
        $("userName").textContent = currentUser.nombre;
        $("firebaseStatus").textContent = "Cargando datos...";
        await cargarDatos();
        resetFormularioRegistro();
        switchTab("dashboard");
    });

    $("loginPassword").addEventListener("keydown", e => { if (e.key === "Enter") iniciarSesion(); });
    $("loginEmail").addEventListener("keydown", e => { if (e.key === "Enter") iniciarSesion(); });
});

function mostrarErrorLogin(msg) {
    const box = $("loginError");
    box.textContent = msg;
    box.classList.remove("hidden");
}

async function iniciarSesion() {
    const email = $("loginEmail").value.trim();
    const pass = $("loginPassword").value;
    $("loginError").classList.add("hidden");

    if (!email || !pass) { mostrarErrorLogin("Ingrese su correo y contraseña."); return; }

    const btn = $("btnLogin");
    btn.disabled = true;
    btn.textContent = "Ingresando...";
    try {
        await firebaseAuth.signInWithEmailAndPassword(email, pass);
        $("loginPassword").value = "";
    } catch (e) {
        const msgs = {
            "auth/invalid-email": "El correo no tiene un formato válido.",
            "auth/user-disabled": "Esta cuenta fue desactivada. Contacte al administrador.",
            "auth/user-not-found": "Correo o contraseña incorrectos.",
            "auth/wrong-password": "Correo o contraseña incorrectos.",
            "auth/invalid-credential": "Correo o contraseña incorrectos.",
            "auth/too-many-requests": "Demasiados intentos. Espere unos minutos e intente de nuevo.",
            "auth/network-request-failed": "Sin conexión. Revise su internet."
        };
        mostrarErrorLogin(msgs[e.code] || "No se pudo iniciar sesión.");
    } finally {
        btn.disabled = false;
        btn.textContent = "Ingresar";
    }
}

async function recuperarContrasena() {
    const email = $("loginEmail").value.trim();
    if (!email) { mostrarErrorLogin("Escriba su correo arriba y vuelva a presionar \"¿Olvidó su contraseña?\"."); return; }
    try {
        await firebaseAuth.sendPasswordResetEmail(email);
        showToast("Si el correo existe, recibirá un enlace para restablecer la contraseña.", "success");
        $("loginError").classList.add("hidden");
    } catch (e) {
        mostrarErrorLogin("No se pudo enviar el correo de recuperación.");
    }
}

function cerrarSesion() {
    if (pendingStudentChips.length > 0 && !confirm("Tiene una inscripción sin guardar. ¿Cerrar sesión de todos modos?")) return;
    firebaseAuth.signOut();
}

// ==================== CARGA DE DATOS ====================
async function cargarDatos() {
    try {
        const [estSnap, insSnap] = await Promise.all([
            firebaseDB.collection("estudiantes").get(),
            firebaseDB.collection("inscripciones").get()
        ]);

        dbEstudiantes = {};
        estSnap.forEach(doc => { dbEstudiantes[doc.id] = doc.data(); });

        dbInscripciones = [];
        insSnap.forEach(doc => dbInscripciones.push({ id: doc.id, ...doc.data() }));
        dbInscripciones.sort((a, b) => String(b.fechaCreacion || b.fecha || "").localeCompare(String(a.fechaCreacion || a.fecha || "")));

        const st = $("firebaseStatus");
        st.textContent = "Firebase: conectado";
        st.className = "bg-emerald-900/60 text-emerald-200 text-[10px] px-2 py-0.5 rounded border border-emerald-700";
        refrescarTodo();
    } catch (e) {
        console.error("Error cargando datos:", e);
        const st = $("firebaseStatus");
        st.textContent = "Firebase: sin acceso";
        st.className = "bg-red-900/60 text-red-200 text-[10px] px-2 py-0.5 rounded border border-red-700";
        showToast("No se pudieron cargar los datos. Revise su conexión o los permisos de su cuenta.", "danger");
    }
}

async function actualizarDatos() {
    showToast("Actualizando datos...", "info");
    await cargarDatos();
    showToast("Datos actualizados.", "success");
}

function refrescarTodo() {
    renderDashboard();
    renderMisInscripciones();
    renderEstudiantesTabla();
    lucide.createIcons();
}

// ==================== NAVEGACIÓN ====================
function switchTab(tabId) {
    activeTab = tabId;
    ["dashboard", "registro", "inscripciones", "estudiantes"].forEach(v => {
        const el = $(`view-${v}`);
        const btn = $(`tab-${v}`);
        const activo = v === tabId;
        el.classList.toggle("hidden", !activo);
        btn.classList.toggle("border-amber-400", activo);
        btn.classList.toggle("text-amber-400", activo);
        btn.classList.toggle("font-bold", activo);
        btn.classList.toggle("border-transparent", !activo);
        btn.classList.toggle("text-slate-300", !activo);
    });
    lucide.createIcons();
}

// ==================== PANEL ====================
function inscripcionesMias() { return dbInscripciones.filter(esMiaInscripcion); }

function estudiantesDeMisInscripciones() {
    const set = new Set();
    inscripcionesMias().forEach(i => (i.studentIds || []).forEach(c => set.add(c)));
    return [...set].map(c => dbEstudiantes[c]).filter(Boolean);
}

function renderDashboard() {
    const mias = inscripcionesMias();
    const estMios = estudiantesDeMisInscripciones();
    const poli = estMios.filter(e => e.cantidadAreas > 1);

    $("statMisInscripciones").textContent = mias.length;
    $("statMisEstudiantes").textContent = estMios.length;
    $("statMisPoli").textContent = poli.length;
    $("statGlobal").textContent = `${dbInscripciones.length} inscripciones · ${Object.keys(dbEstudiantes).length} estudiantes únicos en todo el festival`;
    $("tabBadgeMias").textContent = mias.length;

    // Barras por área (solo mis inscripciones)
    const counts = { "Escénicas": 0, "Literarias": 0, "Musicales": 0, "Visuales": 0 };
    mias.forEach(i => { if (counts[i.area] !== undefined) counts[i.area]++; });
    const total = mias.length || 1;
    const colores = { "Escénicas": "bg-blue-600", "Literarias": "bg-amber-500", "Musicales": "bg-emerald-600", "Visuales": "bg-purple-600" };
    $("chartAreasContainer").innerHTML = Object.keys(counts).map(a => {
        const pct = Math.round((counts[a] / total) * 100);
        return `
        <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>${a}</span><span>${counts[a]} obras (${pct}%)</span>
            </div>
            <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full ${colores[a]} transition-all duration-500" style="width:${pct}%"></div>
            </div>
        </div>`;
    }).join("");

    // Por circuito
    const circ = { "01": 0, "02": 0, "03": 0, "04": 0, "05": 0 };
    mias.forEach(i => { if (circ[i.circuito] !== undefined) circ[i.circuito]++; });
    $("circuitoStatsContainer").innerHTML = Object.keys(circ).map(c => `
        <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
            <span class="text-[10px] font-bold text-slate-400 block">C-${c}</span>
            <span class="text-sm font-extrabold text-mep-navy">${circ[c]}</span>
        </div>`).join("");

    // Polifacéticos entre mis estudiantes
    const cont = $("listPolifaceticosContainer");
    if (poli.length === 0) {
        cont.innerHTML = `<p class="text-xs text-slate-400 italic p-4 text-center">Ninguno de sus estudiantes participa en más de un área por ahora.</p>`;
    } else {
        cont.innerHTML = poli.map(p => {
            const inscs = dbInscripciones.filter(i => (i.studentIds || []).includes(p.cedula));
            return `
            <div class="bg-red-50/60 border border-red-200 rounded-xl p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="font-extrabold text-sm text-mep-navy">${esc(p.nombreCompleto)}</span>
                        <span class="bg-mep-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded">1 Refrigerio Único</span>
                    </div>
                    <p class="text-xs text-slate-500">${esc(p.institucion)} • ${esc(fmtId(p.cedula))}</p>
                    <div class="flex flex-wrap gap-1 mt-1">
                        ${inscs.map(i => `<span class="bg-white border border-red-200 text-mep-red text-[11px] font-semibold px-2 py-0.5 rounded-full">${esc(i.area)}: ${esc(i.disciplina)}</span>`).join("")}
                    </div>
                </div>
                <button onclick="verDetalleEstudiante('${esc(p.cedula)}')" class="text-xs font-bold text-mep-blue hover:underline whitespace-nowrap">Ver Detalle &rarr;</button>
            </div>`;
        }).join("");
    }
}

// ==================== CATÁLOGOS (selects) ====================
function onCircuitoChange(circuitoId) {
    const sel = $("regInstitucion");
    sel.innerHTML = '<option value="">-- Seleccione Institución --</option>';
    if (circuitoId && CATALOGOS.instituciones[circuitoId]) {
        sel.disabled = false;
        CATALOGOS.instituciones[circuitoId].forEach(inst => {
            const o = document.createElement("option");
            o.value = inst; o.textContent = inst;
            sel.appendChild(o);
        });
    } else {
        sel.disabled = true;
    }
}

function onAreaChange(area) {
    const sel = $("regDisciplina");
    sel.innerHTML = '<option value="">-- Seleccione Disciplina --</option>';
    if (area && CATALOGOS.disciplinas[area]) {
        sel.disabled = false;
        CATALOGOS.disciplinas[area].forEach(d => {
            const o = document.createElement("option");
            o.value = d; o.textContent = d;
            sel.appendChild(o);
        });
    } else {
        sel.disabled = true;
    }
}

function toggleInputManual(campo) {
    const manual = !modoManual[campo];
    modoManual[campo] = manual;
    const selectEl = $(`reg${campo}`);
    const inputEl = $(`reg${campo}Manual`);
    const btn = $(`btnToggle${campo === "Institucion" ? "Inst" : "Disc"}`);
    selectEl.classList.toggle("hidden", manual);
    inputEl.classList.toggle("hidden", !manual);
    btn.textContent = manual ? "← Seleccionar de la lista" : "+ Agregar manualmente";
    if (manual) inputEl.focus();
}

function getValorCampoFEA(campo) {
    return modoManual[campo] ? $(`reg${campo}Manual`).value.trim() : $(`reg${campo}`).value;
}

// ==================== ASISTENTE DE REGISTRO ====================
function goToStep(n) {
    if (n > 1 && currentStep === 1) {
        if (!$("regCircuito").value || !getValorCampoFEA("Institucion") || !$("regArea").value || !getValorCampoFEA("Disciplina")) {
            showToast("Por favor complete Circuito, Institución, Área y Disciplina.", "warning");
            return;
        }
    }
    if (n > 2 && currentStep === 2) {
        if (!$("regObra").value.trim()) {
            showToast("Ingrese el nombre de la obra o presentación.", "warning");
            return;
        }
    }
    if (n > 3 && currentStep === 3) {
        if (pendingStudentChips.length === 0) {
            showToast("Debe agregar al menos 1 estudiante para esta inscripción.", "warning");
            return;
        }
        prepareStep4Summary();
    }

    currentStep = n;
    for (let s = 1; s <= 4; s++) {
        const stepEl = $(`formStep-${s}`);
        const dot = $(`stepDot-${s}`);
        if (s === n) {
            stepEl.classList.remove("hidden");
            dot.className = "w-10 h-10 rounded-full bg-mep-blue text-white font-bold flex items-center justify-center shadow-md transition-all";
        } else {
            stepEl.classList.add("hidden");
            dot.className = "w-10 h-10 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center transition-all";
        }
    }
    $("stepperLine").style.width = `${((n - 1) / 3) * 100}%`;
    lucide.createIcons();
}

function getTipoIdentidadActual() { return $("inputTipoIdentidad")?.value || "cedula"; }

function onTipoIdentidadChange(tipo) {
    const cfg = IDENTITY_CONFIG[tipo] || IDENTITY_CONFIG.cedula;
    $("inputIdentidadLabel").textContent = `${cfg.label} *`;
    $("inputCedula").placeholder = cfg.placeholder;
    $("inputCedula").value = "";
    $("inputCedula").inputMode = tipo === "yisro" ? "text" : "numeric";
    $("inputIdentidadHint").textContent = cfg.hint;
    $("studentLiveAlert").classList.add("hidden");
}

function liveCheckCedula(raw) {
    const v = validarIdentidad(getTipoIdentidadActual(), raw);
    const box = $("studentLiveAlert");
    if (!v.clean || !v.valido) { box.classList.add("hidden"); return; }

    const existing = dbEstudiantes[v.clean];
    if (!existing) { box.classList.add("hidden"); return; }

    $("inputNombre").value = existing.nombreCompleto;
    $("studentLiveAlertMsg").innerHTML = `
        <span class="font-extrabold uppercase">¡Estudiante ya registrado!</span><br>
        <strong>${esc(existing.nombreCompleto)}</strong> ya existe en el sistema.
        ${existing.areas?.length ? `<span class="block mt-1">Participa en: <strong>${esc(existing.areas.join(" y "))}</strong>.</span>` : ""}
        <span class="block mt-1 font-bold">✓ Se unificará su registro. Recibirá SOLO 1 bolsita de refrigerio.</span>`;
    box.classList.remove("hidden");
}

function agregarEstudianteChip() {
    const tipo = getTipoIdentidadActual();
    const rawCedula = $("inputCedula").value.trim();
    const rawNombre = $("inputNombre").value.trim();

    if (!rawNombre) { showToast("Ingrese el nombre completo del estudiante.", "warning"); return; }
    if (!rawCedula) { showToast("Ingrese el número o identificador de identidad.", "warning"); return; }

    const v = validarIdentidad(tipo, rawCedula);
    if (!v.valido) { showToast(v.mensaje, "warning"); return; }

    if (pendingStudentChips.some(c => c.cedula === v.clean)) {
        showToast("Este estudiante ya fue añadido a la lista actual.", "warning");
        return;
    }

    const existente = dbEstudiantes[v.clean];
    pendingStudentChips.push({
        cedula: v.clean,
        // Si ya existe, se conserva su nombre oficial: un asesor no puede renombrar estudiantes ajenos
        nombre: existente ? existente.nombreCompleto : rawNombre,
        tipoIdentidad: existente?.tipoIdentidad || tipo
    });
    renderChipsUI();
    $("inputCedula").value = "";
    $("inputNombre").value = "";
    $("studentLiveAlert").classList.add("hidden");
}

function removeChip(cedula) {
    // Quitar un chip solo afecta la inscripción que aún NO se ha guardado
    pendingStudentChips = pendingStudentChips.filter(c => c.cedula !== cedula);
    renderChipsUI();
}

function renderChipsUI() {
    $("chipCount").textContent = pendingStudentChips.length;
    const cont = $("chipsContainer");
    if (pendingStudentChips.length === 0) {
        cont.innerHTML = `<p class="text-xs text-slate-400 font-medium italic">Aún no ha agregado estudiantes. Ingrese la identidad y el nombre arriba y presione "Agregar".</p>`;
        return;
    }
    cont.innerHTML = pendingStudentChips.map(c => {
        const ex = dbEstudiantes[c.cedula];
        const poli = ex && ex.cantidadAreas > 0;
        return `
        <div class="bg-white border ${poli ? "border-red-300 bg-red-50/50" : "border-slate-200"} shadow-sm rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs">
            <div>
                <span class="font-bold text-slate-800">${esc(c.nombre)}</span>
                <span class="text-[10px] text-slate-400 ml-1">(${esc(ex ? fmtId(c.cedula) : c.cedula)})</span>
                ${poli ? '<span class="text-[10px] font-bold text-mep-red bg-red-100 px-1 rounded ml-1">YA REGISTRADO</span>' : '<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 rounded ml-1">NUEVO</span>'}
            </div>
            <button type="button" onclick="removeChip('${esc(c.cedula)}')" class="text-slate-400 hover:text-mep-red p-0.5 rounded"><i data-lucide="x" class="w-3.5 h-3.5"></i></button>
        </div>`;
    }).join("");
    lucide.createIcons();
}

function prepareStep4Summary() {
    const circ = CATALOGOS.circuitos.find(c => c.id === $("regCircuito").value);
    $("summaryCircuito").textContent = circ ? circ.nombre : $("regCircuito").value;
    $("summaryInstitucion").textContent = getValorCampoFEA("Institucion");
    $("summaryAreaDisc").textContent = `${$("regArea").value} - ${getValorCampoFEA("Disciplina")}`;
    $("summaryNivel").textContent = document.querySelector('input[name="regNivel"]:checked').value;
    $("summaryObra").textContent = $("regObra").value;
    $("summaryStudentCount").textContent = pendingStudentChips.length;
    $("summaryStudentsList").innerHTML = pendingStudentChips.map(c => `
        <span class="bg-blue-100 text-mep-navy px-2.5 py-1 rounded-lg text-xs font-semibold">${esc(c.nombre)} (${esc(dbEstudiantes[c.cedula] ? fmtId(c.cedula) : c.cedula)})</span>`).join("");
}

function resetFormularioRegistro() {
    $("formInscripcion").reset();
    if (modoManual.Institucion) toggleInputManual("Institucion");
    if (modoManual.Disciplina) toggleInputManual("Disciplina");
    $("regInstitucion").innerHTML = '<option value="">-- Seleccione primero un Circuito --</option>';
    $("regInstitucion").disabled = true;
    $("regDisciplina").innerHTML = '<option value="">-- Seleccione primero un Área --</option>';
    $("regDisciplina").disabled = true;
    onTipoIdentidadChange("cedula");
    pendingStudentChips = [];
    renderChipsUI();
    goToStep(1);
}

function generarIdInscripcion() {
    return "INS-" + Math.floor(10000 + Math.random() * 90000);
}

// Guarda la inscripción y actualiza a todos sus estudiantes en UNA transacción.
// Solo escribe documentos concretos: nunca sincroniza ni borra el resto de la base.
async function guardarInscripcionFinal() {
    if (guardando) return;

    const circuito = $("regCircuito").value;
    const institucion = getValorCampoFEA("Institucion");
    const area = $("regArea").value;
    const disciplina = getValorCampoFEA("Disciplina");
    const nivel = document.querySelector('input[name="regNivel"]:checked').value;
    const obra = $("regObra").value.trim();
    const duracion = parseInt($("regDuracion").value) || 10;

    if (!circuito || !institucion || !area || !disciplina || !obra || pendingStudentChips.length === 0) {
        showToast("Faltan datos obligatorios. Revise los pasos anteriores.", "warning");
        return;
    }

    guardando = true;
    const btn = $("btnGuardarInscripcion");
    btn.disabled = true;
    btn.classList.add("opacity-60");

    const chips = pendingStudentChips.map(c => ({ ...c }));
    const ahora = new Date().toISOString();

    try {
        const resultado = await firebaseDB.runTransaction(async tx => {
            // 1) LECTURAS: id libre + estado actual de cada estudiante
            let id = null, insRef = null;
            for (let intento = 0; intento < 8; intento++) {
                const candidato = generarIdInscripcion();
                const ref = firebaseDB.collection("inscripciones").doc(candidato);
                const snap = await tx.get(ref);
                if (!snap.exists) { id = candidato; insRef = ref; break; }
            }
            if (!id) throw new Error("No se pudo generar un ID de inscripción libre. Intente de nuevo.");

            const stRefs = chips.map(c => firebaseDB.collection("estudiantes").doc(c.cedula));
            const stSnaps = await Promise.all(stRefs.map(r => tx.get(r)));

            // 2) ESCRITURAS
            const inscripcion = {
                area, disciplina, nivel, circuito, institucion, obra, duracion,
                studentIds: chips.map(c => c.cedula),
                boletaInscripcion: $("boletaInscripcion").checked ? "SI" : "NO",
                boletaResultados: $("boletaResultados").checked ? "SI" : "NO",
                boletaObservaciones: $("boletaObservaciones").checked ? "SI" : "NO",
                creadoPor: currentUser.email,
                creadoPorUid: currentUser.uid,
                creadoPorNombre: currentUser.nombre,
                fecha: ahora.split("T")[0],
                fechaCreacion: ahora
            };
            tx.set(insRef, inscripcion);

            const estudiantesEscritos = {};
            chips.forEach((c, idx) => {
                const snap = stSnaps[idx];
                if (!snap.exists) {
                    const nuevo = {
                        cedula: c.cedula,
                        tipoIdentidad: c.tipoIdentidad || "cedula",
                        nombreCompleto: c.nombre,
                        nombreNormalizado: normalizeText(c.nombre),
                        institucion, circuito,
                        areas: [area],
                        inscripcionesIds: [id],
                        cantidadAreas: 1,
                        creadoPorUid: currentUser.uid,
                        creadoPorNombre: currentUser.nombre,
                        fechaCreacion: ahora
                    };
                    tx.set(stRefs[idx], nuevo);
                    estudiantesEscritos[c.cedula] = nuevo;
                } else {
                    // Estudiante existente (de cualquier usuario): solo se tocan los campos de conteo
                    const actual = snap.data();
                    const areas = Array.from(new Set([...(actual.areas || []), area]));
                    const ids = Array.from(new Set([...(actual.inscripcionesIds || []), id]));
                    const cambios = { areas, inscripcionesIds: ids, cantidadAreas: areas.length };
                    tx.update(stRefs[idx], cambios);
                    estudiantesEscritos[c.cedula] = { ...actual, ...cambios };
                }
            });

            return { id, inscripcion, estudiantesEscritos };
        });

        // Reflejar en memoria
        dbInscripciones.unshift({ id: resultado.id, ...resultado.inscripcion });
        Object.assign(dbEstudiantes, resultado.estudiantesEscritos);

        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
        showToast(`¡Inscripción ${resultado.id} guardada exitosamente!`, "success");
        resetFormularioRegistro();
        refrescarTodo();
        switchTab("inscripciones");
    } catch (e) {
        console.error("Error guardando inscripción:", e);
        const permisos = e.code === "permission-denied";
        showToast(permisos ? "Sin permiso para guardar. Contacte al administrador." : "No se pudo guardar la inscripción. Sus datos siguen en pantalla; intente de nuevo.", "danger");
    } finally {
        guardando = false;
        btn.disabled = false;
        btn.classList.remove("opacity-60");
    }
}

// ==================== MIS INSCRIPCIONES ====================
function renderMisInscripciones() {
    const tbody = $("tableInscripcionesBody");
    const q = normalizeText($("searchInscripciones").value);
    const alcance = $("filterAlcance").value;      // MIAS | TODAS
    const area = $("filterAreaIns").value;

    let lista = dbInscripciones.filter(i => {
        if (alcance === "MIAS" && !esMiaInscripcion(i)) return false;
        if (area !== "TODAS" && i.area !== area) return false;
        if (!q) return true;
        return [i.obra, i.institucion, i.disciplina, i.id, i.creadoPorNombre]
            .some(t => normalizeText(t).includes(q));
    });

    $("countInscripcionesFiltradas").textContent = lista.length;

    if (lista.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-400 text-xs italic">${alcance === "MIAS" ? "Aún no ha ingresado inscripciones. Use \"Nueva Inscripción\" para comenzar." : "No se encontraron inscripciones."}</td></tr>`;
        return;
    }

    tbody.innerHTML = lista.map(i => {
        const mia = esMiaInscripcion(i);
        const n = (i.studentIds || []).length;
        return `
        <tr class="hover:bg-slate-50/80 transition">
            <td class="p-3.5"><span class="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-600">${esc(i.id)}</span></td>
            <td class="p-3.5">
                <span class="font-bold text-mep-navy block">${esc(i.obra)}</span>
                <span class="text-[11px] text-mep-blue font-semibold">${esc(i.area)} · ${esc(i.disciplina)}</span>
            </td>
            <td class="p-3.5 text-slate-600">${esc(i.institucion)}<span class="block text-[10px] text-slate-400">Circuito ${esc(i.circuito)}</span></td>
            <td class="p-3.5 text-center font-bold">${n}</td>
            <td class="p-3.5 text-[11px] text-slate-500">${esc(mia ? "Usted" : (i.creadoPorNombre || (i.creadoPor === "funcionario_mep" ? "Administración" : i.creadoPor) || "—"))}<span class="block text-slate-400">${esc(i.fecha || "")}</span></td>
            <td class="p-3.5 text-center">
                ${mia
                    ? '<span class="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full text-[10px]"><i data-lucide="pencil" class="w-3 h-3"></i> Suya</span>'
                    : '<span class="inline-flex items-center gap-1 bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded-full text-[10px]"><i data-lucide="lock" class="w-3 h-3"></i> Solo lectura</span>'}
            </td>
            <td class="p-3.5 text-right">
                <div class="flex justify-end gap-1.5">
                    ${mia
                        ? `<button onclick="abrirInscripcion('${esc(i.id)}','edit')" class="bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1"><i data-lucide="pencil" class="w-3.5 h-3.5"></i> Editar</button>`
                        : `<button onclick="abrirInscripcion('${esc(i.id)}','view')" class="btn-mep-primary text-[11px] font-bold px-2.5 py-1.5 rounded-lg">Ver</button>`}
                </div>
            </td>
        </tr>`;
    }).join("");
    lucide.createIcons();
}

// ----- Modal de inscripción (edición o solo lectura) -----
function llenarDatalistInstituciones(circuitoId) {
    const dl = $("dlInstituciones");
    dl.innerHTML = (CATALOGOS.instituciones[circuitoId] || []).map(i => `<option value="${esc(i)}"></option>`).join("");
}
function llenarDatalistDisciplinas(area) {
    const dl = $("dlDisciplinas");
    dl.innerHTML = (CATALOGOS.disciplinas[area] || []).map(d => `<option value="${esc(d)}"></option>`).join("");
}

function abrirInscripcion(id, modo) {
    const ins = dbInscripciones.find(i => i.id === id);
    if (!ins) return;

    // Guarda de seguridad en el cliente (las reglas de Firestore también lo exigen)
    if (modo === "edit" && !esMiaInscripcion(ins)) {
        showToast("Solo puede editar las inscripciones que usted ingresó.", "warning");
        modo = "view";
    }

    editInsId = id;
    editModo = modo;
    editNuevosChips = [];

    $("insModalTitulo").textContent = modo === "edit" ? "Editar inscripción" : "Detalle de inscripción (solo lectura)";
    $("insModalId").textContent = id;
    $("insModalBadge").innerHTML = modo === "edit"
        ? '<span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Usted ingresó esta inscripción</span>'
        : `<span class="text-[10px] font-bold uppercase tracking-wider text-slate-500">Ingresada por ${esc(ins.creadoPorNombre || (ins.creadoPor === "funcionario_mep" ? "Administración" : ins.creadoPor) || "otro usuario")} · no editable</span>`;

    $("editCircuito").innerHTML = CATALOGOS.circuitos.map(c => `<option value="${c.id}" ${c.id === ins.circuito ? "selected" : ""}>${esc(c.nombre)}</option>`).join("");
    $("editArea").innerHTML = Object.keys(CATALOGOS.disciplinas).map(a => `<option value="${esc(a)}" ${a === ins.area ? "selected" : ""}>${esc(a)}</option>`).join("");
    llenarDatalistInstituciones(ins.circuito);
    llenarDatalistDisciplinas(ins.area);

    $("editInstitucion").value = ins.institucion || "";
    $("editDisciplina").value = ins.disciplina || "";
    $("editObra").value = ins.obra || "";
    $("editDuracion").value = ins.duracion || 10;
    document.querySelectorAll('input[name="editNivel"]').forEach(r => { r.checked = r.value === ins.nivel; });
    $("editBoletaInscripcion").checked = ins.boletaInscripcion === "SI";
    $("editBoletaResultados").checked = ins.boletaResultados === "SI";
    $("editBoletaObservaciones").checked = ins.boletaObservaciones === "SI";

    $("editFieldset").disabled = modo !== "edit";
    $("editAgregarBox").classList.toggle("hidden", modo !== "edit");
    $("btnGuardarEdicionIns").classList.toggle("hidden", modo !== "edit");

    renderIntegrantesEdicion();
    $("editInputCedula").value = "";
    $("editInputNombre").value = "";
    openModal("modalInscripcion");
}

function onEditCircuitoChange(c) { llenarDatalistInstituciones(c); $("editInstitucion").value = ""; }
function onEditAreaChange(a) { llenarDatalistDisciplinas(a); $("editDisciplina").value = ""; }

function renderIntegrantesEdicion() {
    const ins = dbInscripciones.find(i => i.id === editInsId);
    if (!ins) return;
    const actuales = (ins.studentIds || []).map(c => {
        const st = dbEstudiantes[c];
        return `<span class="bg-blue-100 text-mep-navy px-2.5 py-1 rounded-lg text-xs font-semibold">${esc(st ? st.nombreCompleto : "(sin nombre)")} <span class="text-[10px] text-slate-500">(${esc(fmtId(c))})</span></span>`;
    });
    const nuevos = editNuevosChips.map(c => `
        <span class="bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-lg text-xs font-semibold inline-flex items-center gap-1">
            + ${esc(c.nombre)} <span class="text-[10px] text-emerald-700">(nuevo)</span>
            <button type="button" onclick="quitarChipEdicion('${esc(c.cedula)}')" class="text-emerald-700 hover:text-mep-red"><i data-lucide="x" class="w-3 h-3"></i></button>
        </span>`);
    $("editIntegrantesCount").textContent = actuales.length + editNuevosChips.length;
    $("editIntegrantesList").innerHTML = actuales.concat(nuevos).join("");
    lucide.createIcons();
}

function quitarChipEdicion(cedula) {
    // Solo se pueden quitar integrantes que aún no se han guardado
    editNuevosChips = editNuevosChips.filter(c => c.cedula !== cedula);
    renderIntegrantesEdicion();
}

function liveCheckEdicion(raw) {
    const v = validarIdentidad("cedula", raw);
    const alt = ["dimex", "yisro"].map(t => validarIdentidad(t, raw)).find(x => x.valido && dbEstudiantes[x.clean]);
    const clean = v.valido ? v.clean : (alt ? alt.clean : null);
    if (clean && dbEstudiantes[clean]) $("editInputNombre").value = dbEstudiantes[clean].nombreCompleto;
}

function agregarIntegranteEdicion() {
    const ins = dbInscripciones.find(i => i.id === editInsId);
    if (!ins || editModo !== "edit") return;

    const tipo = $("editInputTipo").value;
    const raw = $("editInputCedula").value.trim();
    const nombre = $("editInputNombre").value.trim();
    if (!raw || !nombre) { showToast("Ingrese la identidad y el nombre del estudiante.", "warning"); return; }

    const v = validarIdentidad(tipo, raw);
    if (!v.valido) { showToast(v.mensaje, "warning"); return; }
    if ((ins.studentIds || []).includes(v.clean) || editNuevosChips.some(c => c.cedula === v.clean)) {
        showToast("Ese estudiante ya forma parte de esta inscripción.", "warning");
        return;
    }
    const ex = dbEstudiantes[v.clean];
    editNuevosChips.push({ cedula: v.clean, nombre: ex ? ex.nombreCompleto : nombre, tipoIdentidad: ex?.tipoIdentidad || tipo });
    $("editInputCedula").value = "";
    $("editInputNombre").value = "";
    renderIntegrantesEdicion();
}

async function guardarEdicionInscripcion() {
    if (guardando) return;
    const ins = dbInscripciones.find(i => i.id === editInsId);
    if (!ins || !esMiaInscripcion(ins)) { showToast("No tiene permiso para editar esta inscripción.", "danger"); return; }

    const circuito = $("editCircuito").value;
    const area = $("editArea").value;
    const institucion = $("editInstitucion").value.trim();
    const disciplina = $("editDisciplina").value.trim();
    const obra = $("editObra").value.trim();
    const duracion = parseInt($("editDuracion").value) || 10;
    const nivel = document.querySelector('input[name="editNivel"]:checked')?.value || ins.nivel;

    if (!circuito || !area || !institucion || !disciplina || !obra) {
        showToast("Circuito, institución, área, disciplina y obra son obligatorios.", "warning");
        return;
    }

    const nuevos = editNuevosChips.map(c => ({ ...c }));
    const studentIds = [...(ins.studentIds || []), ...nuevos.map(c => c.cedula)];
    const ahora = new Date().toISOString();

    const cambios = {
        circuito, area, institucion, disciplina, obra, duracion, nivel, studentIds,
        boletaInscripcion: $("editBoletaInscripcion").checked ? "SI" : "NO",
        boletaResultados: $("editBoletaResultados").checked ? "SI" : "NO",
        boletaObservaciones: $("editBoletaObservaciones").checked ? "SI" : "NO",
        modificadoPorUid: currentUser.uid,
        modificadoEn: ahora
    };

    guardando = true;
    const btn = $("btnGuardarEdicionIns");
    btn.disabled = true;

    try {
        // Estado hipotético de todas las inscripciones tras el cambio (para recalcular áreas de cada estudiante)
        const despues = dbInscripciones.map(i => i.id === ins.id ? { ...i, ...cambios } : i);
        const afectados = Array.from(new Set(studentIds));

        const estudiantesEscritos = await firebaseDB.runTransaction(async tx => {
            const insRef = firebaseDB.collection("inscripciones").doc(ins.id);
            const insSnap = await tx.get(insRef);
            if (!insSnap.exists) throw new Error("La inscripción ya no existe.");
            if (insSnap.data().creadoPorUid !== currentUser.uid) {
                const err = new Error("No es suya"); err.code = "permission-denied"; throw err;
            }

            const refs = afectados.map(c => firebaseDB.collection("estudiantes").doc(c));
            const snaps = await Promise.all(refs.map(r => tx.get(r)));

            tx.update(insRef, cambios);

            const escritos = {};
            afectados.forEach((ced, idx) => {
                const propias = despues.filter(i => (i.studentIds || []).includes(ced));
                const areas = Array.from(new Set(propias.map(i => i.area)));
                const ids = propias.map(i => i.id);

                if (!snaps[idx].exists) {
                    const chip = nuevos.find(c => c.cedula === ced);
                    if (!chip) return;   // referencia huérfana (estudiante eliminado por el administrador): no se recrea
                    const nuevo = {
                        cedula: ced,
                        tipoIdentidad: chip.tipoIdentidad || "cedula",
                        nombreCompleto: chip.nombre,
                        nombreNormalizado: normalizeText(chip.nombre),
                        institucion, circuito,
                        areas, inscripcionesIds: ids, cantidadAreas: areas.length,
                        creadoPorUid: currentUser.uid,
                        creadoPorNombre: currentUser.nombre,
                        fechaCreacion: ahora
                    };
                    tx.set(refs[idx], nuevo);
                    escritos[ced] = nuevo;
                } else {
                    const actual = snaps[idx].data();
                    const mismo = JSON.stringify(actual.areas || []) === JSON.stringify(areas)
                        && JSON.stringify(actual.inscripcionesIds || []) === JSON.stringify(ids);
                    if (!mismo) {
                        const c = { areas, inscripcionesIds: ids, cantidadAreas: areas.length };
                        tx.update(refs[idx], c);
                        escritos[ced] = { ...actual, ...c };
                    }
                }
            });
            return escritos;
        });

        Object.assign(ins, cambios);
        Object.assign(dbEstudiantes, estudiantesEscritos);

        closeModal("modalInscripcion");
        refrescarTodo();
        showToast("Inscripción actualizada correctamente.", "success");
    } catch (e) {
        console.error("Error editando inscripción:", e);
        showToast(e.code === "permission-denied" ? "No tiene permiso para modificar esta inscripción." : "No se pudieron guardar los cambios. Intente de nuevo.", "danger");
    } finally {
        guardando = false;
        btn.disabled = false;
    }
}

// ==================== ESTUDIANTES ====================
function renderEstudiantesTabla() {
    const tbody = $("tableEstudiantesBody");
    const q = normalizeText($("searchEstudiantes").value);
    const circ = $("filterCircuito").value;
    const alcance = $("filterAlcanceEst").value;   // MIOS | TODOS

    const lista = Object.values(dbEstudiantes).filter(e => {
        if (alcance === "MIOS" && !esMioEstudiante(e)) return false;
        if (circ !== "TODOS" && e.circuito !== circ) return false;
        if (!q) return true;
        // La búsqueda por identidad exige al menos 7 dígitos (evita ir descubriendo cédulas ajenas dígito a dígito)
        const qDigitos = q.replace(/\D/g, "");
        const porId = qDigitos.length >= 7 && String(e.cedula).includes(qDigitos);
        return normalizeText(e.nombreCompleto).includes(q) || porId;
    });

    $("countEstudiantesFiltrados").textContent = lista.length;

    if (lista.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400 text-xs italic">No se encontraron estudiantes con los filtros seleccionados.</td></tr>`;
        return;
    }

    const visibles = lista.slice(0, 300);
    tbody.innerHTML = visibles.map(e => {
        const mio = esMioEstudiante(e);
        return `
        <tr class="hover:bg-slate-50/80 transition">
            <td class="p-3.5 font-mono text-slate-600 font-bold">${esc(fmtId(e.cedula))}</td>
            <td class="p-3.5 font-bold text-mep-navy">${esc(e.nombreCompleto)}</td>
            <td class="p-3.5 text-slate-600">${esc(e.institucion)}<span class="block text-[10px] text-slate-400">Circuito ${esc(e.circuito)}</span></td>
            <td class="p-3.5 text-center">
                <span class="${e.cantidadAreas > 1 ? "badge-poly font-extrabold px-2 py-0.5 rounded-full" : "bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full"} text-xs">
                    ${e.cantidadAreas} ${e.cantidadAreas > 1 ? "Disciplinas (Polifacético)" : "Disciplina"}
                </span>
            </td>
            <td class="p-3.5 text-center">
                ${mio
                    ? '<span class="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full text-[10px]"><i data-lucide="pencil" class="w-3 h-3"></i> Suyo</span>'
                    : '<span class="inline-flex items-center gap-1 bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded-full text-[10px]"><i data-lucide="lock" class="w-3 h-3"></i> Solo lectura</span>'}
            </td>
            <td class="p-3.5 text-right">
                <div class="flex justify-end gap-1.5">
                    ${mio ? `<button onclick="editarEstudianteModal('${esc(e.cedula)}')" class="bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1"><i data-lucide="pencil" class="w-3.5 h-3.5"></i> Editar</button>` : ""}
                    <button onclick="verDetalleEstudiante('${esc(e.cedula)}')" class="btn-mep-primary text-[11px] font-bold px-2.5 py-1.5 rounded-lg">Detalle</button>
                </div>
            </td>
        </tr>`;
    }).join("") + (lista.length > visibles.length
        ? `<tr><td colspan="6" class="p-3 text-center text-[11px] text-slate-400 italic">Mostrando los primeros ${visibles.length}. Use la búsqueda para acotar.</td></tr>` : "");
    lucide.createIcons();
}

function verDetalleEstudiante(cedula) {
    const st = dbEstudiantes[cedula];
    if (!st) return;
    $("modalEstCedula").textContent = fmtId(st.cedula);
    $("modalEstNombre").textContent = st.nombreCompleto;
    $("modalEstInst").textContent = `${st.institucion} (Circuito ${st.circuito})`;

    const inscs = dbInscripciones.filter(i => (i.studentIds || []).includes(cedula));
    $("modalEstCount").textContent = inscs.length;
    $("modalEstInscripcionesList").innerHTML = inscs.map(i => `
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs flex justify-between items-center gap-2">
            <div>
                <span class="font-bold text-mep-blue block">${esc(i.area)} - ${esc(i.disciplina)}</span>
                <span class="text-slate-600">Obra: <strong>${esc(i.obra)}</strong></span>
            </div>
            <span class="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-mono">${esc(i.id)}</span>
        </div>`).join("");
    openModal("modalDetalleEstudiante");
}

function editarEstudianteModal(cedula) {
    const st = dbEstudiantes[cedula];
    if (!st) return;
    if (!esMioEstudiante(st)) { showToast("Solo puede editar los estudiantes que usted ingresó.", "warning"); return; }

    $("editEstudianteOriginalCedula").value = cedula;
    $("editEstudianteCedulaTxt").textContent = st.cedula;
    $("editEstudianteNombre").value = st.nombreCompleto;
    $("editEstudianteCircuito").innerHTML = CATALOGOS.circuitos.map(c => `<option value="${c.id}" ${c.id === st.circuito ? "selected" : ""}>${esc(c.nombre)}</option>`).join("");
    cargarInstitucionesEdicion(st.circuito, st.institucion);
    openModal("modalEditarEstudiante");
}

function cargarInstitucionesEdicion(circuitoId, selected = "") {
    const lista = (CATALOGOS.instituciones[circuitoId] || []).slice();
    if (selected && !lista.includes(selected)) lista.unshift(selected);   // institución escrita a mano
    $("editEstudianteInstitucion").innerHTML = lista.map(i => `<option value="${esc(i)}" ${i === selected ? "selected" : ""}>${esc(i)}</option>`).join("");
}

async function guardarEdicionEstudiante() {
    const cedula = $("editEstudianteOriginalCedula").value;
    const st = dbEstudiantes[cedula];
    if (!st || !esMioEstudiante(st)) { showToast("No tiene permiso para editar este estudiante.", "danger"); return; }

    const nombre = $("editEstudianteNombre").value.trim();
    const circuito = $("editEstudianteCircuito").value;
    const institucion = $("editEstudianteInstitucion").value;
    if (!nombre) { showToast("El nombre completo es requerido.", "warning"); return; }

    const cambios = { nombreCompleto: nombre, nombreNormalizado: normalizeText(nombre), circuito, institucion };
    const btn = $("btnGuardarEdicionEst");
    btn.disabled = true;
    try {
        // La identidad (cédula) no se puede cambiar: es la llave del registro. Si hay un error en ella, lo corrige el administrador.
        await firebaseDB.collection("estudiantes").doc(cedula).update(cambios);
        Object.assign(st, cambios);
        closeModal("modalEditarEstudiante");
        refrescarTodo();
        showToast("Datos del estudiante actualizados.", "success");
    } catch (e) {
        console.error(e);
        showToast(e.code === "permission-denied" ? "No tiene permiso para modificar este estudiante." : "No se pudieron guardar los cambios.", "danger");
    } finally {
        btn.disabled = false;
    }
}
