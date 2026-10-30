// Contenido de Ruta Informada. Edite aquí los datos; las páginas se generan solas.
// Cada bloque cita sus fuentes con claves de SRC (campo `s`).

export const HOY = "23 sep 2026";
export const STATE = "En revisión";

export interface Source { inst: string; t: string; url: string }
export interface Contact { n: string; tel?: string; e164?: string; red?: boolean; addr?: string; mail?: string; web?: string; href?: string; txt?: string; wide?: boolean }
export interface Block {
  id: string; icon: string; h: string; pending?: boolean;
  key?: string; figs?: [string, string][]; p?: string[]; li?: string[]; p2?: string;
  c?: Contact[]; cities?: string[]; warn?: string; s?: string[];
}
export interface Section { id: string; t: string; d: string; icon: string; img: string; intro: string; blocks: Block[] }
export interface Persona { id: string; icon: string; t: string; picks: string[] }
export interface ImageCredit { f: string; t: string; a: string; l?: string; u?: string }

/* ======================= FUENTES ======================= */
export const SRC: Record<string, Source> = {
 "igm": {"inst": "Instituto Guatemalteco de Migración (IGM)", "t": "Requisitos para trámite de pasaporte y tarifario", "url": "https://igm.gob.gt/requisitos-para-tramite-de-pasaporte-guatemalteco/"},
 "igmXela": {"inst": "Instituto Guatemalteco de Migración (IGM)", "t": "Ubicación de centros de emisión de pasaportes y horario", "url": "https://igm.gob.gt/ubicacion-de-centros-de-emision-de-pasaportes-y-horario/"},
 "igmRet": {"inst": "Instituto Guatemalteco de Migración (IGM)", "t": "Centro de Recepción de Retornados, Fuerza Aérea Guatemalteca", "url": "https://igm.gob.gt/autoridades-recorren-el-centro-de-recepcion-de-retornados-de-la-fuerza-aerea-guatemalteca/"},
 "agnRet": {"inst": "Agencia Guatemalteca de Noticias (AGN)", "t": "Servicios que se brindan en el Centro de Recepción de Retornados", "url": "https://agn.gt/conozca-los-servicios-que-se-brindan-en-el-centro-de-recepcion-de-retornados/"},
 "dcaRet": {"inst": "Diario de Centro América (dato del IGM)", "t": "Guatemala cierra 2025 con 55,181 retornados", "url": "https://dca.gob.gt/noticias-guatemala-diario-centro-america/guatemala-cierra-2025-con-55181-retornados-desde-ee-uu/"},
 "euRet": {"inst": "Emisoras Unidas (dato del IGM)", "t": "Cifra de guatemaltecos retornados desde EE. UU. cae un 22% en 2025", "url": "https://emisorasunidas.com/nacional/2025/12/31/migrantes-guatemaltecos-retornados-estados-unidos-2025"},
 "renap": {"inst": "Registro Nacional de las Personas (RENAP)", "t": "Reposición del DPI por pérdida o robo", "url": "https://www.renap.gob.gt/noticias/reposicion-del-dpi-por-perdida-o-robo"},
 "renapE": {"inst": "Registro Nacional de las Personas (RENAP)", "t": "Solicitud de reposición de DPI vía electrónica", "url": "https://www.renap.gob.gt/solicitud-de-reposicion-de-dpi-electronica"},
 "minexCall": {"inst": "Gobierno de Guatemala (MINEX)", "t": "El MINEX facilitará la gestión de citas consulares en EE. UU. por vía telefónica", "url": "https://guatemala.gob.gt/el-minex-facilitara-la-gestion-de-citas-consulares-en-ee-uu-por-la-via-telefonica/"},
 "minexAtl": {"inst": "Secretaría de Comunicación Social (MINEX)", "t": "Consulado en Atlanta combate estafadores que cobran por agendar citas", "url": "https://prensa.gob.gt/comunicado/consulado-de-guatemala-en-atlanta-ee-uu-combate-estafadores-que-cobran-por-agendar-citas"},
 "minexTap": {"inst": "Ministerio de Relaciones Exteriores (MINEX)", "t": "Consulado General de Guatemala en Tapachula, Chiapas (ficha oficial)", "url": "https://www.minex.gob.gt/Uploads/MexicoTapachula.pdf"},
 "minexDir": {"inst": "Ministerio de Relaciones Exteriores (MINEX)", "t": "Directorio de consulados de Guatemala", "url": "https://www.minex.gob.gt/gt_exterior/B2"},
 "embaUS": {"inst": "Embajada de Guatemala en EE. UU.", "t": "Consulados de Guatemala en Estados Unidos", "url": "https://www.embaguateusa.gob.gt/consulados"},
 "plCons": {"inst": "Prensa Libre", "t": "Consulados de Guatemala en Estados Unidos: ubicaciones y teléfonos", "url": "https://www.prensalibre.com/internacional/como-encontrar-consulados-de-guatemala-en-estados-unidos-lista-de-ubicaciones-y-telefonos/"},
 "hidalgo": {"inst": "Directorio no oficial (EmbassyPages)", "t": "Consulado de Guatemala en Ciudad Hidalgo, Chiapas", "url": "https://www.embassypages.com/guatemala-consulate-hidalgo-mexico"},
 "agnSOS": {"inst": "Agencia Guatemalteca de Noticias (AGN)", "t": "Números de emergencia para denunciar o solicitar asistencia", "url": "https://agn.gt/conozca-los-numeros-de-emergencia-para-denunciar-o-solicitar-asistencia/"},
 "pnc": {"inst": "Policía Nacional Civil (PNC)", "t": "Cuenta oficial: ante una emergencia llame al 110 y al 1561", "url": "https://x.com/PNCdeGuatemala/status/2017585740541030408"},
 "alba": {"inst": "Agencia Guatemalteca de Noticias (AGN) y PGN", "t": "Cómo activar una alerta Alba-Keneth", "url": "https://agn.gt/como-activar-una-alerta-alba-keneth/"},
 "albaPGN": {"inst": "Procuraduría General de la Nación (PGN)", "t": "Sistema de Alerta Alba-Keneth", "url": "https://pgn.gob.gt/alba-keneth/"},
 "rcf": {"inst": "Cruz Roja Guatemalteca", "t": "Restablecimiento del Contacto entre Familiares (RCF)", "url": "https://www.cruzroja.gt/noticias/restablecimiento-del-contacto-entre-familiares-rcf/"},
 "mp": {"inst": "Ministerio Público (MP)", "t": "Denuncia electrónica", "url": "https://consultasmp.mp.gob.gt/denunciasWeb/index.html"},
 "viena": {"inst": "Organización de los Estados Americanos (OEA)", "t": "Convención de Viena sobre Relaciones Consulares (1963), artículo 36", "url": "https://www.oas.org/legal/spanish/documentos/convvienaconsulares.htm"},
 "cmw": {"inst": "Naciones Unidas (texto oficial publicado por Infoleg)", "t": "Convención internacional sobre la protección de los derechos de todos los trabajadores migratorios y de sus familiares (1990)", "url": "https://servicios.infoleg.gob.ar/infolegInternet/anexos/120000-124999/124232/norma.htm"},
 "cmwOH": {"inst": "Oficina del Alto Comisionado de la ONU (OHCHR)", "t": "Antecedentes de la Convención sobre trabajadores migratorios", "url": "https://www.ohchr.org/es/treaty-bodies/cmw/background-convention"},
 "aclu": {"inst": "American Civil Liberties Union (ACLU)", "t": "Derechos de los inmigrantes", "url": "https://www.aclu.org/know-your-rights/derechos-de-los-inmigrantes"},
 "acnurMx": {"inst": "ACNUR México", "t": "Derechos y obligaciones de las personas solicitantes de la condición de refugiado", "url": "https://help.unhcr.org/mexico/en/derechos-y-obligaciones-de-las-personas-solicitantes-2/"},
 "beta": {"inst": "Instituto Nacional de Migración de México (INM)", "t": "Grupos Beta de Protección a Migrantes", "url": "https://www.gob.mx/inm/acciones-y-programas/grupos-beta-de-proteccion-a-migrantes"},
 "h2": {"inst": "Embajada de EE. UU. en Guatemala", "t": "Programa de visas H-2", "url": "https://gt.usembassy.gov/h-2-visa-program/"},
 "plH2": {"inst": "Prensa Libre", "t": "Cuidado con las estafas por las visas de trabajo temporal en EE. UU.", "url": "https://www.prensalibre.com/guatemala/migrantes/cuidado-con-las-estafas-por-las-visas-de-trabajo-temporal-en-ee-uu/"},
 "oimTrata": {"inst": "OIM, citada por Infobae (30 jul 2026)", "t": "Falsas ofertas, encierro y fraude: la nueva cara de la trata de personas", "url": "https://www.infobae.com/el-salvador/2026/07/30/falsas-ofertas-encierro-y-fraude-la-oim-expone-la-nueva-cara-de-la-trata-de-personas/"},
 "svet": {"inst": "SVET, citada por Infobae (30 jul 2026)", "t": "Guatemala identificó 1,276 posibles víctimas de trata entre 2025 y abril de 2026", "url": "https://www.infobae.com/guatemala/2026/07/30/guatemala-identifico-1276-posibles-victimas-de-trata-entre-2025-y-abril-de-2026/"},
 "oimMM": {"inst": "Organización Internacional para las Migraciones (OIM)", "t": "Más de 400 migrantes murieron en las Américas en 2025", "url": "https://lac.iom.int/es/news/mas-de-400-migrantes-murieron-en-las-americas-en-2025-segun-la-oim"},
 "oimReint": {"inst": "Organización Internacional para las Migraciones (OIM)", "t": "OIM fortalece los procesos de reintegración en Guatemala", "url": "https://nortedecentroamerica.iom.int/es/news/oim-fortalece-los-procesos-de-reintegracion-en-guatemala"},
 "oimCorea": {"inst": "Organización Internacional para las Migraciones (OIM)", "t": "Proyecto para mejorar los servicios de reintegración, con apoyo de Corea", "url": "https://guatemala.iom.int/es/news/oim-guatemala-presenta-proyecto-para-mejorar-los-servicios-de-reintegracion-para-retornados-guatemaltecos-con-el-apoyo-de-la-republica-de-corea"},
 "pmh": {"inst": "OIM, portal Migrant Info", "t": "Pastoral de Movilidad Humana, Conferencia Episcopal de Guatemala", "url": "https://migrantinfo.iom.int/en/node/992"},
 "sbs": {"inst": "Secretaría de Bienestar Social (SBS)", "t": "Casa Nuestras Raíces brinda atención a niñez migrante no acompañada", "url": "https://sbs.gob.gt/casa-nuestras-raices-brinda-atencion-a-ninez-migrante-no-acompanada"},
 "agnSBS": {"inst": "Agencia Guatemalteca de Noticias (AGN)", "t": "SBS brinda atención y protección a jóvenes migrantes no acompañados en Quetzaltenango (12 sep 2025)", "url": "https://agn.gt/sbs-brinda-atencion-y-proteccion-a-jovenes-migrantes-no-acompanados-en-quetzaltenango/"},
 "intecapEU": {"inst": "Emisoras Unidas", "t": "INTECAP impulsa becas para ayudar a guatemaltecos retornados (9 may 2025)", "url": "https://emisorasunidas.com/empresas/2025/05/09/intecap-impulsa-becas-innovadoras-para-ayudar-a-guatemaltecos-retornados-al-pais/"},
 "agnRetorno": {"inst": "Agencia Guatemalteca de Noticias (AGN)", "t": "Plan Retorno al Hogar trabaja en la certificación de capacidades con INTECAP y la aplicación OportuGuate (19 mar 2025)", "url": "https://agn.gt/plan-retorno-al-hogar-trabaja-en-la-certificacion-de-capacidades-con-intecap-y-la-aplicacion-oportu-guate/"},
 "lahoraEmp": {"inst": "La Hora", "t": "Trece adultos de 12 mil retornados en 2025 han conseguido trabajo (7 may 2025)", "url": "https://lahora.gt/nacionales/dleon/2025/05/07/trece-adultos-de-12-mil-retornados-en-2025-han-conseguido-trabajo/"},
 "infobaeRet": {"inst": "OIM, citada por Infobae (19 jun 2026)", "t": "Hombres, lenguas indígenas y años en el exterior: la nueva combinación que redefine el regreso de migrantes a Guatemala", "url": "https://www.infobae.com/guatemala/2026/06/19/hombres-lenguas-indigenas-y-anos-en-el-exterior-la-nueva-combinacion-que-redefine-el-regreso-de-migrantes-a-guatemala/"},
 "remesas": {"inst": "Agencia Guatemalteca de Noticias (dato del Banguat)", "t": "Récord histórico de remesas familiares en 2025", "url": "https://agn.gt/guatemala-alcanza-record-historico-de-25-mil-millones-de-dolares-en-remesas-familiares-durante-2025/"}
};

/** Grupos de la página de fuentes. */
export const SRC_GROUPS: [string, string][] = [["gt", "Instituciones de Guatemala"], ["intl", "Organismos internacionales y otros países"], ["medios", "Medios de comunicación y directorios"]];
export const srcKind = (k: string): string => {
  const x = SRC[k], i = x.inst + " " + x.url;
  if (/Prensa Libre|Emisoras|Infobae|Diario de Centro|La Hora|no oficial/.test(i)) return "medios";
  if (/\.gob\.gt|guatemala\.gob|prensa\.gob|Banguat|AGN|minex|igm|renap|pgn|mp\.gob|PNC|cruzroja|embaguate/i.test(i)) return "gt";
  return "intl";
};

/* ======================= SECCIONES ======================= */
export const COLORS: Record<string, [string, string]> = {"S1": ["var(--magenta)", "var(--magenta-t)"], "S2": ["var(--cobalt)", "var(--cobalt-t)"], "S3": ["#B86A00", "var(--maize-t)"], "S4": ["var(--turq)", "var(--turq-t)"], "S5": ["var(--alarm)", "var(--alarm-t)"], "S6": ["var(--ink)", "#E6E7F0"], "S7": ["var(--green)", "var(--green-t)"], "S8": ["var(--ink-2)", "#ECEDF3"]};

export const SECTIONS: Section[] = [
 {
  ...{"id": "S1", "t": "Documentos para viajar", "d": "DPI, pasaporte, costos oficiales y dónde tramitarlos en Quetzaltenango.", "icon": "identification-card", "img": "familia-viaje", "intro": "Antes de cualquier viaje necesita un DPI vigente y un pasaporte. Aquí están los pasos y los costos oficiales."},
  blocks: [
   {"id": "pasaporte", "icon": "money", "h": "Pasaporte: cuánto cuesta", "figs": [["USD 50", "Pasaporte de 5 años"], ["USD 85", "Pasaporte de 10 años, solo mayores de edad"]], "key": "El pago se hace únicamente en agencias de Banrural.", "p": ["Si alguien le pide más dinero por el pasaporte, desconfíe. Ese no es el costo oficial."], "warn": "El monto puede cambiar. Confirme con el IGM antes de pagar.", "s": ["igm"]},
   {"id": "pasaporte-req", "icon": "check", "h": "Pasaporte: qué llevar a la cita", "p": ["Para personas mayores de edad:"], "li": ["Formulario de solicitud de pasaporte, impreso y firmado.", "DPI original y una copia de ambos lados en la misma hoja.", "Cita programada en el sistema en línea del IGM.", "Comprobante de pago original, o la boleta de banca virtual."], "c": [{"n": "Instituto Guatemalteco de Migración", "tel": "2411-2411", "e164": "+50224112411"}], "s": ["igm"]},
   {"id": "xela-igm", "icon": "map-pin", "h": "Dónde sacar el pasaporte en Quetzaltenango", "p": ["El IGM tiene un centro de emisión de pasaportes en Quetzaltenango. Allí se saca el pasaporte por primera vez, se renueva o se extiende su vigencia."], "c": [{"n": "Dirección", "addr": "Avenida Las Américas, zona 3, Supercom Delco, segundo nivel, oficina No. 2, Quetzaltenango", "wide": true}, {"n": "Horario", "txt": "Lunes a viernes, de 7:00 a 15:00"}, {"n": "Teléfono", "tel": "2411-2411", "e164": "+50224112411"}], "key": "Haga su cita en línea, imprima y firme la constancia de cita, y llévela con sus requisitos.", "warn": "Los horarios cambian. Confirme antes de ir.", "s": ["igmXela"]},
   {"id": "pasaporte-menores", "icon": "baby", "h": "Pasaporte para niñas, niños y adolescentes", "p": ["Además de los requisitos generales, el IGM puede pedir:"], "li": ["Certificado de nacimiento reciente.", "DPI de ambos padres o de quien los represente."], "s": ["igm"]},
   {"id": "dpi", "icon": "identification-card", "h": "DPI: si lo perdió o se lo robaron", "p": ["El DPI es su documento de identidad. Lo necesita para sacar el pasaporte. Puede reponerlo en cualquier oficina del RENAP. Debe ir en persona, porque le toman una fotografía nueva."], "figs": [["Q100", "En oficina del RENAP (Q85 del documento y Q15 del certificado)"], ["Q119", "Por internet, con tarjeta"], ["Q0", "Personas de 60 años o más"]], "warn": "Las tarifas pueden cambiar. Confirme en el RENAP.", "s": ["renap", "renapE"]},
   {"pending": true, "id": "visas", "icon": "globe", "h": "Visas de turista y de estudio", "p": ["Estamos verificando esta información con las embajadas. La visa de trabajo H-2 está en la sección de estafas."]}
  ]
 },
 {
  ...{"id": "S2", "t": "Derechos de la persona migrante", "d": "Derechos que tiene sin importar su situación migratoria.", "icon": "scales", "img": "familia-hero", "intro": "Toda persona tiene derechos, esté donde esté y tenga o no documentos. Conocerlos le ayuda a protegerse."},
  blocks: [
   {"id": "cmw", "icon": "scales", "h": "Lo que dice la Convención de la ONU sobre trabajadores migratorios", "p": ["Guatemala ratificó esta convención el 13 de marzo de 2003. Protege a las personas migrantes y a sus familias. Entre otras cosas, dice:"], "li": ["Sus derechos valen sin discriminación por sexo, idioma, religión, origen étnico, nacionalidad, edad o situación económica (artículo 7).", "Tiene derecho a la libertad y a la seguridad. Nadie puede detenerle de forma arbitraria (artículo 16).", "Solo una autoridad puede retener sus documentos, y debe darle un recibo. Nadie puede destruir su pasaporte (artículo 21).", "No se permiten las expulsiones colectivas (artículo 22).", "Debe recibir atención médica urgente aunque su situación migratoria sea irregular (artículo 28).", "Sus hijas e hijos tienen derecho a la educación, sin importar la situación de sus padres (artículo 30).", "Los Estados deben proteger la unidad de la familia (artículo 44)."], "s": ["cmw", "cmwOH"]},
   {"id": "consular", "icon": "handshake", "h": "Derecho a pedir ayuda a su consulado", "key": "Si le detienen en otro país, pida que avisen al consulado de Guatemala.", "p": ["Las autoridades deben informarle, sin demora, que puede comunicarse con su consulado. Si usted lo pide, deben avisar al consulado. Los mensajes que envíe al consulado deben entregarse sin retraso."], "s": ["viena"]},
   {"id": "us-derechos", "icon": "shield-warning", "h": "En Estados Unidos: derechos básicos", "p": ["Según la ACLU, estos derechos aplican sin importar su situación migratoria:"], "li": ["Puede guardar silencio. Diga que desea guardar silencio y pida un abogado.", "No tiene que responder dónde nació ni cómo entró al país.", "Puede negarse a firmar documentos.", "Puede hablar con un abogado. El gobierno no está obligado a darle uno gratis.", "Puede pedir que se avise a su consulado."], "s": ["aclu"]},
   {"id": "refugio-mx", "icon": "house-line", "h": "Si teme por su vida: pedir refugio en México", "p": ["En México, la solicitud de la condición de refugiado se presenta ante la COMAR. Según ACNUR, quien la solicita tiene derecho a no ser devuelto a un país donde su vida, seguridad o libertad estén en peligro."], "key": "Pedir refugio es gratuito. Nadie debe cobrarle por hacerlo.", "warn": "Los requisitos y plazos cambian. Consulte a ACNUR México o a la COMAR antes de iniciar.", "s": ["acnurMx"]}
  ]
 },
 {
  ...{"id": "S3", "t": "Cómo identificar estafas", "d": "Qué es gratis, qué tiene costo oficial y dónde denunciar.", "icon": "warning-octagon", "img": "familia-considera", "intro": "Muchas estafas cobran por algo que es gratis. Si le piden dinero para “ayudarle” con un trámite, deténgase y revise esta sección."},
  blocks: [
   {"id": "citas-gratis", "icon": "clock", "h": "La cita en el consulado es gratis", "key": "La cita consular es gratuita, personal e intransferible. Nadie debe cobrarle por ella.", "li": ["Hubo páginas falsas en redes sociales que cobraban hasta USD 200 por agendar citas.", "No comparta sus documentos personales con intermediarios.", "En Estados Unidos, desde agosto de 2025 las citas se agendan solo por teléfono."], "c": [{"n": "Centro de llamadas consular (EE. UU.)", "tel": "844-805-1011", "e164": "+18448051011"}], "s": ["minexCall", "minexAtl"]},
   {"id": "h2", "icon": "handshake", "h": "Visas de trabajo temporal H-2: nadie debe cobrarle", "p": ["La Embajada de Estados Unidos advierte que siguen los cobros ilegales de supuestos reclutadores. En un caso le pidieron Q75,000 a una persona, y si no pagaba, le pedían las escrituras de su casa como garantía."], "key": "Nadie debe pagar nada a reclutadores ni a empresas para obtener un trabajo con visa H-2.", "li": ["Si tiene dudas sobre una oferta, puede consultarla con la Embajada por correo.", "Su empleador debe darle por escrito, en un idioma que usted entienda, las condiciones del trabajo, el pago y los descuentos.", "Si le cobran, denuncie ante la Embajada y ante el Ministerio Público."], "c": [{"n": "Verificar una oferta H-2", "mail": "GuatemalaH2@state.gov"}], "s": ["h2", "plH2"]},
   {"id": "empleo-falso", "icon": "warning-octagon", "h": "Ofertas de trabajo en el extranjero: señales de alerta", "p": ["La OIM advierte que las ofertas falsas de empleo en redes sociales son una forma frecuente de captar víctimas de trata. Desconfíe si:"], "li": ["La empresa no tiene una dirección que pueda comprobar, ni correo institucional.", "Le piden viajar con visa de turista para ir a trabajar.", "Le cobran por tramitar una visa y el empleo nunca se concreta.", "Al llegar le quitan sus documentos o no la dejan salir."], "p2": "Tener dirección y correo no garantiza que la oferta sea real. Consulte antes de pagar.", "s": ["oimTrata"]},
   {"id": "pago-oficial", "icon": "money", "h": "¿Dónde se paga lo oficial?", "figs": [["Banrural", "Único lugar de pago del pasaporte"], ["RENAP", "Reposición del DPI"], ["Q0", "Cita consular"]], "p": ["Si le piden pagar a una persona, en efectivo o por transferencia a una cuenta particular, no es el canal oficial."], "s": ["igm", "renap", "minexCall"]},
   {"id": "denunciar", "icon": "siren", "h": "Dónde denunciar una estafa", "p": ["Puede denunciar en el Ministerio Público. La denuncia electrónica funciona las 24 horas, también desde la aplicación “Reportes MP”."], "c": [{"n": "Denuncia electrónica del MP", "web": "consultasmp.mp.gob.gt", "href": "https://consultasmp.mp.gob.gt/denunciasWeb/index.html"}, {"n": "Policía Nacional Civil", "tel": "110", "e164": "110", "red": true}], "s": ["mp", "agnSOS"]}
  ]
 },
 {
  ...{"id": "S4", "t": "Riesgos en la ruta", "d": "Datos sobre trata y muertes en la ruta, y dónde pedir ayuda.", "icon": "path", "img": "familia-transito", "intro": "Esta sección informa sobre riesgos documentados para que usted decida con información. No es una guía de viaje."},
  blocks: [
   {"id": "trata-datos", "icon": "shield-warning", "h": "La trata de personas afecta sobre todo a adolescentes", "figs": [["1,276", "Posibles víctimas de trata en Guatemala, de 2025 a abril de 2026"], ["13 a 17", "Edad de la mayoría de las víctimas"]], "p": ["Las formas más frecuentes fueron la explotación sexual y la explotación laboral."], "s": ["svet"]},
   {"id": "muertes", "icon": "chart-bar", "h": "Muertes y desapariciones en la ruta", "figs": [["414", "Personas migrantes muertas o desaparecidas en las Américas en 2025"], ["131", "En la frontera entre México y Estados Unidos"]], "p": ["Es la cifra más baja desde 2014, cuando la OIM empezó a registrarlas. La OIM aclara que sus datos muestran solo una parte de la realidad, porque es difícil recoger información en las rutas."], "s": ["oimMM"]},
   {"id": "grupos-beta", "icon": "first-aid", "h": "En México: Grupos Beta", "p": ["Son grupos del Instituto Nacional de Migración de México. Protegen a personas migrantes sin importar su nacionalidad o situación migratoria. Están en Chiapas, Tabasco, Oaxaca, Veracruz y en estados de la frontera norte."], "li": ["Rescate y primeros auxilios.", "Ayuda humanitaria y alimentos.", "Orientación sobre sus derechos y asesoría legal."], "s": ["beta"]},
   {"id": "trata-ayuda", "icon": "siren", "h": "Si usted o alguien que conoce está en peligro", "p": ["Llame a la Policía Nacional Civil. Las llamadas son gratuitas."], "c": [{"n": "Emergencias PNC", "tel": "110", "e164": "110", "red": true}, {"n": "PNC, línea de denuncia", "tel": "1561", "e164": "1561", "red": true}], "s": ["pnc", "agnSOS"]},
   {"pending": true, "id": "riesgos-ruta", "icon": "path", "h": "Extorsión, secuestro y riesgos para mujeres", "p": ["Estamos revisando informes de OIM y ACNUR. Este bloque se publicará solo con datos verificados y sin instrucciones de viaje."]}
  ]
 },
 {
  ...{"id": "S5", "t": "Consulados y emergencias", "d": "Números para marcar con un toque y direcciones para copiar.", "icon": "phone", "img": "familia-familia", "intro": "Toque un número para llamar. Use “Copiar” para guardar una dirección o un teléfono."},
  blocks: [
   {"id": "sos-gt", "icon": "siren", "h": "Emergencias en Guatemala", "p": ["Las llamadas a estas líneas son gratuitas."], "c": [{"n": "Policía Nacional Civil", "tel": "110", "e164": "110", "red": true}, {"n": "Policía Nacional Civil", "tel": "120", "e164": "120", "red": true}, {"n": "PNC, denuncias", "tel": "1561", "e164": "1561", "red": true}, {"n": "Bomberos Voluntarios", "tel": "122", "e164": "122", "red": true}, {"n": "Bomberos Municipales", "tel": "123", "e164": "123", "red": true}, {"n": "Cruz Roja Guatemalteca", "tel": "125", "e164": "125", "red": true}, {"n": "CONRED, desastres", "tel": "119", "e164": "119", "red": true}], "s": ["agnSOS", "pnc"]},
   {"id": "alba", "icon": "baby", "h": "Si desaparece una niña, niño o adolescente", "key": "No espere 24 horas. Llame de inmediato al 1546 para activar la Alerta Alba-Keneth.", "p": ["La línea funciona las 24 horas. También puede reportar en el Ministerio Público, en la PGN, en un juzgado de paz o en la Procuraduría de los Derechos Humanos."], "c": [{"n": "Alerta Alba-Keneth", "tel": "1546", "e164": "1546", "red": true}, {"n": "PGN", "tel": "2294-6900", "e164": "+50222946900"}, {"n": "WhatsApp Alba-Keneth", "tel": "3762-1405"}], "s": ["alba", "albaPGN"]},
   {"id": "rcf", "icon": "binoculars", "h": "Si busca a un familiar que migró", "p": ["La Cruz Roja Guatemalteca, con el Comité Internacional de la Cruz Roja, ayuda a localizar a personas separadas por la migración y a restablecer el contacto con su familia."], "li": ["Debe ser familiar de la persona y llevar un documento que lo pruebe (DPI, pasaporte, certificado de nacimiento o de matrimonio).", "Lleve datos reales: último lugar donde se comunicó, última dirección, fecha aproximada y nombres de quienes la vieron.", "Piden datos de al menos tres testigos.", "No se hacen búsquedas por deudas ni herencias."], "c": [{"n": "Dirección", "addr": "3a. Calle 8-40, zona 1, Ciudad de Guatemala, tercer nivel", "wide": true}, {"n": "Teléfono", "tel": "2381-6555", "e164": "+50223816555"}, {"n": "Correo", "mail": "rcf@cruzroja.org.gt"}, {"n": "Horario", "txt": "De 7:00 a 16:00"}], "s": ["rcf"]},
   {"id": "usa-call", "icon": "phone", "h": "Consulados de Guatemala en Estados Unidos", "p": ["Guatemala tiene 26 consulados en Estados Unidos. Para cualquiera de ellos, la vía principal es el centro de llamadas nacional."], "c": [{"n": "Centro de llamadas consular", "tel": "844-805-1011", "e164": "+18448051011"}, {"n": "Embajada en Washington D. C.", "tel": "(202) 745-4953", "e164": "+12027454953"}], "cities": ["Atlanta", "Chicago", "Columbus", "Dallas", "Del Rio", "Denver", "Houston", "Lake Worth", "Las Vegas", "Los Ángeles", "Maryland", "McAllen", "Miami", "Nashville", "Nueva York", "Oklahoma City", "Omaha", "Philadelphia", "Phoenix", "Providence", "Raleigh", "Riverhead", "San Bernardino", "San Francisco", "Seattle", "Tucson"], "s": ["embaUS", "minexCall"]},
   {"id": "la", "icon": "map-pin", "h": "Consulado General en Los Ángeles, California", "c": [{"n": "Dirección", "addr": "1975-1989 Riverside Drive, Los Ángeles, CA", "wide": true}, {"n": "Teléfono", "tel": "(213) 900-1098", "e164": "+12139001098"}, {"n": "Horario", "txt": "Lunes a viernes, de 8:00 a 15:00"}], "warn": "Los horarios cambian. Confirme antes de ir.", "s": ["plCons", "embaUS"]},
   {"id": "houston", "icon": "map-pin", "h": "Consulado General en Houston, Texas", "c": [{"n": "Dirección", "addr": "6300 Richmond Avenue, Suite 103, Houston, TX", "wide": true}, {"n": "Teléfono", "tel": "(713) 953-9531", "e164": "+17139539531"}, {"n": "Horario", "txt": "Lunes a viernes, con cita"}], "warn": "Los horarios cambian. Confirme antes de ir.", "s": ["plCons", "embaUS"]},
   {"id": "tapachula", "icon": "map-pin", "h": "Consulado General en Tapachula, Chiapas (México)", "c": [{"n": "Dirección", "addr": "Central Poniente S/N, esquina con 14 Avenida Sur, Edificio Consular, primer nivel, C.P. 30700, Tapachula, Chiapas", "wide": true}, {"n": "Teléfono", "tel": "+52 962 626 1252", "e164": "+529626261252"}, {"n": "WhatsApp", "tel": "961 122 2000"}, {"n": "Protección", "mail": "proteccion.tapachula@minex.gob.gt"}], "s": ["minexTap"]},
   {"id": "hidalgo", "icon": "map-pin", "h": "Consulado en Ciudad Hidalgo, Chiapas (México)", "c": [{"n": "Dirección", "addr": "Calle Oriente No. 11, Barrio San José, C.P. 30840, Ciudad Hidalgo, Chiapas", "wide": true}, {"n": "Teléfono general", "tel": "(962) 698-0184", "e164": "+529626980184"}, {"n": "Emergencias", "tel": "(962) 699-7275", "e164": "+529626997275", "red": true}], "warn": "Dato tomado de un directorio no oficial. Lo estamos confirmando con el MINEX.", "s": ["hidalgo", "minexDir"]}
  ]
 },
 {
  ...{"id": "S6", "t": "Detención, deportación y retorno", "d": "Qué hacer si le detienen y qué pasa al volver.", "icon": "airplane-landing", "img": "familia-retorno", "intro": "Si le detienen, mantenga la calma. Usted tiene derechos en ese momento."},
  blocks: [
   {"id": "detenido", "icon": "shield-warning", "h": "Si le detienen en Estados Unidos", "key": "No firme nada sin hablar antes con un abogado.", "li": ["Diga que desea guardar silencio y pida un abogado.", "No firme documentos de “salida voluntaria” ni órdenes de deportación sin asesoría.", "Pida que se avise al consulado de Guatemala.", "Pida hacer una llamada."], "c": [{"n": "Centro de llamadas consular (EE. UU.)", "tel": "844-805-1011", "e164": "+18448051011"}], "s": ["aclu", "viena", "minexCall"]},
   {"id": "llegada", "icon": "airplane-landing", "h": "Al llegar a Guatemala", "p": ["Las personas retornadas por avión llegan al Centro de Recepción de Retornados, en la Fuerza Aérea Guatemalteca, zona 13 de la Ciudad de Guatemala. Por tierra hay un centro en Tecún Umán, Ayutla, San Marcos. Allí el IGM ofrece:"], "li": ["Registro.", "Alimentación, ropa y kit de higiene.", "Llamadas telefónicas.", "En algunos casos, apoyo psicosocial."], "p2": "La OIM tiene personal permanente en el centro de la zona 13.", "c": [{"n": "Instituto Guatemalteco de Migración", "tel": "2411-2411", "e164": "+50224112411"}], "s": ["igmRet", "agnRet"]},
   {"id": "nna-retorno", "icon": "baby", "h": "Adolescentes que regresan sin su familia", "p": ["La Secretaría de Bienestar Social atiende en Casa Nuestras Raíces, en Quetzaltenango, a adolescentes mayores de 12 años que regresan solos por tierra desde Tapachula. Los traslados llegan los lunes y los jueves."], "figs": [["72 h", "Plazo máximo para reunirles con su familia"], ["389", "Adolescentes atendidos en 2025"]], "p2": "Reciben albergue, alimentación, atención psicológica y apoyo de un equipo de varias profesiones.", "s": ["agnSBS", "sbs"]},
   {"id": "retornos", "icon": "chart-bar", "h": "Cuántas personas regresaron en 2025", "figs": [["55,181", "Personas retornadas en 2025"], ["48,405", "Desde Estados Unidos"], ["6,776", "Desde México"]], "p": ["De ese total, 642 eran niñas, niños y adolescentes no acompañados, y 1,262 venían acompañados por una persona adulta."], "s": ["dcaRet", "euRet"]}
  ]
 },
 {
  ...{"id": "S7", "t": "Apoyo para personas retornadas", "d": "Becas, empleo, reintegración y apoyo psicosocial.", "icon": "hand-heart", "img": "familia-hero", "intro": "Volver también es un proceso. Estas instituciones ofrecen acompañamiento."},
  blocks: [
   {"id": "oim-altiplano", "icon": "map-pin", "h": "OIM en el occidente del país", "p": ["La OIM tiene oficinas en Huehuetenango, San Marcos, Quetzaltenango y Santa Cruz del Quiché. Con su Estrategia Municipal de Reintegración ofrece atención psicosocial y referencia a programas de reintegración en estos municipios:"], "li": ["Huehuetenango: Cuilco y Colotenango.", "San Marcos: Comitancillo, Concepción Tutuapa y Tajumulco.", "Quetzaltenango: San Juan Ostuncalco, San Carlos Sija y la cabecera departamental.", "Quiché: Nebaj y Joyabaj."], "s": ["oimReint"]},
   {"id": "oim-2025", "icon": "handshake", "h": "Servicios después del retorno en Quetzaltenango y Retalhuleu", "p": ["Desde enero de 2025, un proyecto de la OIM con apoyo de Corea fortalece la asistencia después del retorno y la reintegración en la Ciudad de Guatemala, Quetzaltenango y Retalhuleu."], "s": ["oimCorea"]},
   {"id": "pmh", "icon": "hand-heart", "h": "Pastoral de Movilidad Humana", "p": ["Organización de la Conferencia Episcopal de Guatemala que acompaña a personas migrantes, deportadas y retornadas."], "c": [{"n": "Dirección", "addr": "Km. 15 Calzada Roosevelt 4-54, zona 3 de Mixco, Guatemala", "wide": true}, {"n": "Teléfono", "tel": "2434-5654", "e164": "+50224345654"}], "warn": "Dato tomado del portal de la OIM. Confirme por teléfono antes de ir.", "s": ["pmh"]},
   {"id": "intecap", "icon": "books", "h": "Becas del INTECAP: aprenda un oficio o certifique lo que ya sabe", "key": "La formación no tiene costo para quien recibe la beca. No necesita haber terminado la escuela.", "p": ["El INTECAP tiene un programa de becas para personas guatemaltecas retornadas. Sirve para certificar lo que usted aprendió a hacer en otro país, o para aprender un oficio nuevo. Hay cursos presenciales y a distancia en las sedes del INTECAP de todo el país."], "li": ["Oficios: construcción, cocina, agricultura, jardinería, pintura, mecánica, carpintería, electricidad, soldadura, operación de maquinaria, mesería, mantenimiento, comercio, pilotaje, bodegaje y ventas.", "Requisitos: ser guatemalteco retornado, tener más de 16 años y presentar su DPI.", "El IGM confirma que usted es una persona retornada.", "Le hacen una entrevista con un técnico, o puede presentar una declaración jurada sobre su experiencia."], "warn": "El programa se presentó en mayo de 2025. Pregunte en la sede del INTECAP más cercana si sigue abierto.", "s": ["intecapEU", "agnRetorno"]},
   {"id": "empleo-retorno", "icon": "handshake", "h": "Buscar empleo al regresar", "p": ["El Ministerio de Trabajo (Mintrab) registra a las personas retornadas y las pone en contacto con empresas que ofrecen empleo. También existe la plataforma OportuGuate para registrarse y buscar trabajo."], "figs": [["3,523", "Personas registradas, a mayo de 2025"], ["87", "Empresas inscritas en OportuGuate"]], "p2": "Hasta el 7 de mayo de 2025, el Mintrab informó de 13 personas que consiguieron trabajo por esta vía, todas en centros de llamadas. Vale la pena registrarse, pero no dependa solo de esta opción.", "c": [{"n": "Plataforma de empleo", "web": "oportuguate.gt", "href": "https://oportuguate.gt"}], "warn": "Las cifras son de mayo de 2025 y vienen de un medio de comunicación. Confirme en el Mintrab.", "s": ["lahoraEmp", "agnRetorno"]},
   {"pending": true, "id": "empleo-educacion", "icon": "books", "h": "Educación, salud mental y CONAMIGUA", "p": ["Estamos verificando programas de educación, apoyo psicosocial y de CONAMIGUA, con dirección y contacto."]}
  ]
 }
];

/** Dirección de cada sección. */
export const SLUGS: Record<string, string> = {
  S1: "documentos", S2: "derechos", S3: "estafas", S4: "riesgos",
  S5: "emergencias", S6: "retorno", S7: "apoyo", S8: "fuentes",
};

/** La página de fuentes como si fuera una sección más (para listas de temas). */
export const S8 = { id: "S8", t: "Fuentes consultadas", d: "De dónde sale cada dato y cuándo se revisó.", icon: "books" };

/* ======================= SITUACIONES ======================= */
export const PERSONAS: Persona[] = [
 {"id": "considera", "icon": "path", "t": "Estoy pensando en migrar", "picks": ["pasaporte", "h2", "empleo-falso", "citas-gratis", "trata-datos", "muertes"]},
 {"id": "viaje", "icon": "identification-card", "t": "Voy a viajar pronto", "picks": ["pasaporte-req", "xela-igm", "cmw", "consular", "usa-call", "sos-gt"]},
 {"id": "transito", "icon": "map-pin", "t": "Estoy en camino", "picks": ["consular", "grupos-beta", "refugio-mx", "tapachula", "hidalgo", "trata-ayuda"]},
 {"id": "retorno", "icon": "house-line", "t": "Regresé a Guatemala", "picks": ["llegada", "intecap", "empleo-retorno", "oim-altiplano", "oim-2025", "pmh", "dpi", "nna-retorno"]},
 {"id": "familia", "icon": "hand-heart", "t": "Soy familiar", "picks": ["rcf", "alba", "usa-call", "detenido", "nna-retorno", "la"]}
];

/** Lo que más necesita cada situación: título y sus 3 respuestas principales [bloque, texto corto]. */
export const NEEDS: Record<string, { t: string; links: [string, string][] }> = {
 "considera": {"t": "Estoy pensando en migrar", "links": [["pasaporte", "Cuánto cuesta el pasaporte"], ["h2", "Trabajo con visa H-2, sin pagar a nadie"], ["empleo-falso", "Cómo reconocer una oferta falsa"]]},
 "viaje": {"t": "Voy a viajar pronto", "links": [["pasaporte-req", "Qué llevar a la cita del pasaporte"], ["xela-igm", "Pasaporte en Quetzaltenango"], ["consular", "Su derecho a pedir ayuda al consulado"]]},
 "transito": {"t": "Ya voy en camino", "links": [["grupos-beta", "Ayuda en México: Grupos Beta"], ["refugio-mx", "Pedir refugio en México, gratis"], ["tapachula", "Consulado de Guatemala en Tapachula"]]},
 "retorno": {"t": "Regresé a Guatemala", "links": [["llegada", "Qué le dan al llegar"], ["intecap", "Becas y certificación del INTECAP"], ["empleo-retorno", "Buscar empleo al regresar"]]},
 "familia": {"t": "Tengo un familiar afuera", "links": [["detenido", "Si lo detienen en Estados Unidos"], ["rcf", "Buscar a un familiar que migró"], ["alba", "Si desaparece una niña o un niño"]]}
};

/* ======================= INICIO ======================= */
export const QUICK = [
 {"n": "Emergencias", "d": "Policía Nacional Civil", "tel": "110", "e164": "110"},
 {"n": "Niñez desaparecida", "d": "Alerta Alba-Keneth, 24 horas", "tel": "1546", "e164": "1546"},
 {"n": "Consulados en EE. UU.", "d": "Citas y ayuda, gratis", "tel": "844-805-1011", "e164": "+18448051011"},
 {"n": "Migración (IGM)", "d": "Pasaportes y retorno", "tel": "2411-2411", "e164": "+50224112411"},
 {"n": "Denuncias", "d": "Línea de la PNC", "tel": "1561", "e164": "1561"},
 {"n": "Bomberos", "d": "Bomberos Voluntarios", "tel": "122", "e164": "122"},
 {"n": "Cruz Roja", "d": "Ambulancia y primeros auxilios", "tel": "125", "e164": "125"},
 {"n": "Buscar a un familiar", "d": "Cruz Roja, restablecer contacto", "tel": "2381-6555", "e164": "+50223816555"}
];

/** “Esto es gratis”: [bloque, título, explicación]. */
export const FREE: [string, string, string][] = [
 ["citas-gratis", "La cita en el consulado", "Personal e intransferible. En EE. UU. se agenda solo por teléfono."],
 ["h2", "Un trabajo con visa H-2", "Ni reclutadores ni empresas pueden cobrarle."],
 ["refugio-mx", "Pedir refugio en México", "Nadie debe cobrarle por presentar la solicitud."],
 ["alba", "Activar la Alerta Alba-Keneth", "Llame al 1546 de inmediato. No espere 24 horas."]
];

/* ======================= IMÁGENES ======================= */
/** Las familias fueron generadas con IA. Si cambia a fotos reales, ponga false y la página deja de decirlo. */
export const IMAGENES_IA = true;

/** Qué imagen va en cada espacio (nombre del archivo en src/assets/img, sin .webp) y su encuadre. */
export const FOTOS: Record<string, string> = {
 "hero": "familia-hero",
 "heroPos": "50% 60%",
 "para-considera": "familia-considera",
 "pos-considera": "50% 50%",
 "para-viaje": "familia-viaje",
 "pos-viaje": "50% 50%",
 "para-transito": "familia-transito",
 "pos-transito": "62% 50%",
 "para-retorno": "familia-retorno",
 "pos-retorno": "60% 50%",
 "para-familia": "familia-familia",
 "pos-familia": "55% 50%",
 "S1": "familia-viaje",
 "S2": "familia-hero",
 "S3": "familia-considera",
 "S4": "familia-transito",
 "S5": "familia-familia",
 "S6": "familia-retorno",
 "S7": "familia-hero"
};

export const HERO_ALT = "Una familia guatemalteca de tres generaciones conversa sentada frente a su casa, con un volcán al fondo. Imagen generada con inteligencia artificial.";

export const IMAGES: ImageCredit[] = [
 {"f": "familia-hero", "t": "Familia de tres generaciones frente a su casa", "a": "Generada con IA"},
 {"f": "familia-considera", "t": "Madre e hijo revisan un papel en la cocina", "a": "Generada con IA"},
 {"f": "familia-viaje", "t": "Preparando la maleta en casa", "a": "Generada con IA"},
 {"f": "familia-transito", "t": "Un hombre espera en la terminal de buses", "a": "Generada con IA"},
 {"f": "familia-retorno", "t": "Un hombre vuelve a casa y abraza a su madre", "a": "Generada con IA"},
 {"f": "familia-familia", "t": "Abuela y nieta en videollamada", "a": "Generada con IA"}
];

/* ======================= AYUDA ======================= */
export const GLOSS: [string, string][] = [
 ["DPI", "Documento Personal de Identificación. Es la “cédula” de Guatemala. Lo entrega el RENAP."],
 ["RENAP", "Registro Nacional de las Personas. Es la oficina que entrega y repone el DPI."],
 ["IGM", "Instituto Guatemalteco de Migración. Es la oficina que entrega el pasaporte y recibe a las personas retornadas."],
 ["MINEX", "Ministerio de Relaciones Exteriores de Guatemala. De él dependen los consulados."],
 ["Consulado", "Oficina de Guatemala en otro país. Ayuda a las personas guatemaltecas que están allí, por ejemplo si las detienen."],
 ["Cita consular", "Turno para ser atendido en un consulado. Es gratis."],
 ["Visa H-2", "Permiso para trabajar por un tiempo en Estados Unidos con un empleador. Nadie debe cobrarle por conseguirla."],
 ["Persona retornada", "Persona que regresa a Guatemala, por su cuenta o porque la deportaron."],
 ["Deportación", "Cuando las autoridades de otro país obligan a una persona a regresar a su país."],
 ["Refugio", "Protección que da un país a una persona que corre peligro si regresa al suyo. Pedirlo es gratis."],
 ["Trata de personas", "Cuando alguien engaña o fuerza a otra persona para explotarla, por ejemplo con un trabajo falso."],
 ["Alerta Alba-Keneth", "Aviso que se activa de inmediato cuando desaparece una niña, niño o adolescente. Se activa llamando al 1546."],
 ["Situación migratoria irregular", "Estar en un país sin los papeles que ese país pide. No convierte a nadie en “ilegal”."],
 ["PNC", "Policía Nacional Civil de Guatemala. Emergencias: 110."]
];

/* ======================= BUSCADOR ======================= */
/** Palabras como las dice la gente, y lo que buscan en el contenido. */
export const SYN: Record<string, string[]> = {
 "papeles": ["documento", "pasaporte", "dpi"],
 "papel": ["documento", "pasaporte", "dpi"],
 "documentos": ["documento", "pasaporte", "dpi"],
 "cedula": ["dpi"],
 "identificacion": ["dpi"],
 "migra": ["detiene", "detenido", "ice"],
 "ice": ["detiene", "detenido"],
 "agarraron": ["detiene", "detenido"],
 "preso": ["detiene", "detenido"],
 "presa": ["detiene", "detenido"],
 "carcel": ["detiene", "detenido"],
 "arresto": ["detiene", "detenido"],
 "deportado": ["retorn", "deporta"],
 "deportada": ["retorn", "deporta"],
 "deportaron": ["retorn", "deporta"],
 "regreso": ["retorn", "llegar"],
 "volver": ["retorn", "llegar"],
 "coyote": ["trata", "estafa", "riesgo"],
 "pollero": ["trata", "estafa", "riesgo"],
 "enganche": ["h-2", "reclutador", "trabajo"],
 "trabajo": ["trabajo", "empleo", "h-2"],
 "chamba": ["trabajo", "empleo", "h-2"],
 "visa": ["visa", "h-2"],
 "pisto": ["costo", "pago", "cobr"],
 "plata": ["costo", "pago", "cobr"],
 "dinero": ["costo", "pago", "cobr"],
 "precio": ["costo", "cuesta"],
 "cobran": ["cobr", "gratis", "estafa"],
 "abogado": ["abogado", "derecho"],
 "asilo": ["refugio"],
 "refugiado": ["refugio"],
 "consul": ["consulado"],
 "perdido": ["desaparec", "busca", "localizar"],
 "desaparecido": ["desaparec", "alba", "localizar"],
 "hijo": ["nina", "nino", "adolescente", "alba"],
 "hija": ["nina", "nino", "adolescente", "alba"],
 "policia": ["pnc", "110"],
 "denuncia": ["denunci"],
 "robo": ["robo", "denunci"],
 "telefono": ["telefono", "llam"],
 "numero": ["telefono", "llam"]
};
/** Palabras que se reemplazan del todo (porque aparecen dentro de otras, como “migra” en “migración”). */
export const SYN_ONLY: string[] = ["migra", "papel", "papeles", "regreso", "volver", "numero", "telefono"];
export const STOP: string[] = ["la", "el", "los", "las", "de", "del", "un", "una", "que", "en", "mi", "me", "por", "para", "con", "y", "a", "al", "se", "lo", "le", "como", "es", "su", "sus", "o", "quiero", "saber", "necesito", "hago", "hacer", "donde", "cuanto", "cuando"];

/* ======================= AYUDANTES ======================= */
export const secOf = (id: string) => SECTIONS.find((s) => s.id === id);
export const BLOCKS: Record<string, { b: Block; s: Section }> = {};
SECTIONS.forEach((s) => s.blocks.forEach((b) => (BLOCKS[b.id] = { b, s })));
export const cvars = (id: string) => `--c:${COLORS[id][0]};--bg:${COLORS[id][1]}`;
export const live = (s: Section) => s.blocks.filter((b) => !b.pending).length;
export const TOTAL = SECTIONS.reduce((a, s) => a + live(s), 0);
