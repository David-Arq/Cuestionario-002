/**
 * @file script.js
 * @description Funcionalidad principal para un cuestionario interactivo.
 * @version 2.1- Corrección final flujo inicio/fin, nombres en español, comentarios detallados.
 * @author David
 * @date 25/07/2025
 */

// ========================================================================
// ==                      CONSTANTES GLOBALES                         ==
// ========================================================================
// Variables que definen la configuración básica del cuestionario.
// Se declaran con `const` porque sus valores no cambian durante la ejecución.

/**
 * @const {Array<Object>} PREGUNTAS - Array que contiene los objetos de cada pregunta.
 * Cada objeto debe tener las propiedades:
 * - `question` (string): El texto de la pregunta.
 * - `options` (Array<string>): Un array con los textos de las opciones de respuesta.
 * - `answer` (string): La letra (A, B, C...) de la opción correcta.
 */
const PREGUNTAS = [
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 1.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el principal objetivo del control fiscal externo en Colombia?</p>`,
        options: [
            "Garantizar la estabilidad macroeconómica del país",
            "Promover la eficiencia, transparencia y legalidad en la gestión de los recursos públicos",
            "Asegurar el cumplimiento de las políticas públicas del gobierno de turno",
            "Fomentar la inversión extranjera en el sector público"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 2.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué rol juega el control interno en la gestión pública del Estado Colombiano?</p>`,
        options: [
            "Un sistema de sanciones para funcionarios corruptos",
            "Un mecanismo para auditar las decisiones del Contralor General",
            "Un sistema integrado de planes, métodos y procedimientos para asegurar el cumplimiento de objetivos y el buen manejo de recursos por parte de los órganos del Estado",
            "Una herramienta para centralizar la toma de decisiones de las administraciones en las entidades del Estado"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 3.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la principal diferencia entre el control fiscal interno y el externo en Colombia?</p>`,
        options: [
            "El control interno es ejercido por las Contralorías Generales conforme criterios de competencia definida por los recursos públicos a vigilar y/o controlar, mientras que el externo es responsabilidad de cada entidad pública",
            "El control interno se enfoca en la gestión diaria, mientras que el externo evalúa el desempeño y la eficiencia de la gestión pública",
            "El control interno es obligatorio, mientras que el externo es opcional",
            "No existe diferencia, ambos son ejercidos por la Contraloría General de la República y/o Contralorías Generales Territoriales"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 4.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué artículo de la Constitución Política de Colombia estipula que la función administrativa debe ejercerse con fundamento en principios como la moralidad y la eficacia?</p>`,
        options: [
            "Artículo 113",
            "Artículo 209",
            "Artículo 267",
            "Artículo 365"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 5.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál ley estableció las normas para el ejercicio del control interno en las entidades y organismos del Estado en Colombia?</p>`,
        options: [
            "Ley 80 de 1993",
            "Ley 87 de 1993",
            "Ley 489 de 1998",
            "Ley 1474 de 2011"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 6.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué modelo se adoptó en 2005 con el fin de fortalecer la implementación de las prácticas propias del Control Interno en Colombia?</p>`,
        options: [
            "Modelo COSO",
            "Modelo Estándar de Control Interno para el Estado Colombiano – MECI",
            "Modelo Integrado de Planeación y Gestión – MIPG",
            "Modelo de Gestión de Calidad NTCGP 1000"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 7.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Identifique el ente rector del Control Interno en Colombia:</p>`,
        options: [
            "Contraloría General de la República – CGR",
            "Departamento Nacional de Planeación – DNP",
            "Departamento Administrativo para Vigilancia y Control Interno – DAVCI",
            "Departamento Administrativo de la Función Pública – DAFP"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 8.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cómo se articulan el control interno y externo para una gestión efectiva de los recursos públicos?</p>`,
        options: [
            "Compitiendo entre sí para identificar irregularidades",
            "Colaborándose mutuamente para evitar duplicidades y reprocesos",
            "Trabajando coordinadamente, donde el interno es la primera línea de defensa y el externo evalúa su efectividad",
            "El control externo delega de forma parcial la responsabilidad de vigilancia al control interno, quien determina mediante procesos de focalización y priorización un muestreo integral de seguimiento a los procesos de la entidad"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 9.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la misión principal de la Contraloría General de la República (CGR)?</p>`,
        options: [
            "Administrar el presupuesto nacional",
            "Procurar el buen uso de los recursos y bienes públicos y contribuir a la modernización del Estado",
            "Representar al Estado en litigios internacionales",
            "Diseñar las políticas económicas del país"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 10.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿En qué nivel administrativo la Contraloría General de la República (CGR) ejerce la máxima autoridad en control fiscal?</p>`,
        options: [
            "Municipal",
            "Departamental",
            "Nacional",
            "Distrital"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 11.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué tipo de control fiscal se enfoca en la gestión diaria de las actividades y operaciones en los entes del Estado?</p>`,
        options: [
            "Control Fiscal Externo",
            "Control Fiscal Posterior",
            "Control Fiscal Interno",
            "Control Fiscal Selectivo"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 12.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el objetivo principal del control interno en Colombia?</p>`,
        options: [
            "Sancionar a los funcionarios públicos por actos de perdida de recursos públicos",
            "Asegurar la legalidad, eficiencia y eficacia de la gestión pública, así como la prevención de riesgos",
            "Centralizar la vigilancia y control fiscal de las entidades estatales del gobierno",
            "contribuir con la vigilancia del gasto público en las instancias gubernamentales"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 13.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué Decreto instrumentó la integración de los Sistemas de Desarrollo Administrativo y de Gestión de la Calidad en un solo Sistema de Gestión?</p>`,
        options: [
            "Decreto 1599 de 2005",
            "Decreto 943 de 2014",
            "Decreto 1499 de 2017",
            "Decreto 403 de 2020"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 14.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se entiende por 'líneas de defensa' en el contexto del control fiscal?</p>`,
        options: [
            "Las estrategias de defensa legal de los recursos del Estado",
            "Las barreras jurídicas que protegen los bienes públicos",
            "El control interno como primera línea y el control externo como segunda línea",
            "Las políticas de seguridad informática de las entidades públicas para la defensa de los recursos públicos"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 15.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué tipo de control fiscal ejerce la CGR, diferenciándolo del control interno?</p>`,
        options: [
            "Control interno, previo y perceptivo",
            "Control externo, posterior, selectivo, concomitante y preventivo",
            "Control mixto, combinando elementos internos y externos",
            "Control jurisdiccional, concomitante y preventivo, enfocado en fallos de responsabilidad fiscal y auditorias"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 16.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la naturaleza del control preventivo y concomitante ejercido por la CGR según el Acto Legislativo 04 de 2019?</p>`,
        options: [
            "Vinculante y obligatorio para la administración",
            "Excepcional, no vinculante y de alerta con función de advertencia",
            "De articulación y conexidad con las entidades vigiladas",
            "Centrado en la coherencia de las decisiones administrativas"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 17.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué artículo de la Constitución Política de Colombia establece las bases para la vigilancia y control fiscal ejercido por la CGR?</p>`,
        options: [
            "Artículo 116",
            "Artículo 267",
            "Artículo 365",
            "Artículo 150"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 18.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Es un requisito para ser elegido Contralor General de la República?</p>`,
        options: [
            "Haber sido miembro del Congreso en los dos años anteriores a la elección",
            "Tener menos de treinta años de edad",
            "Tener título universitario en ciencias jurídicas, humanas, económicas, financieras, administrativas o contables y experiencia profesional no menor a 5 años",
            "Ser colombiano de nacimiento bilingüe y/o doble nacionalidad"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 19.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué tipo de informes son resultado del control fiscal macro realizado por la CGR?</p>`,
        options: [
            "Informes de gestión interna de la CGR",
            "Informes sobre los resultados del Banco de la República",
            "El informe anual sobre las Finanzas del Estado, la Situación de la Deuda, la Cuenta General del Presupuesto y el Tesoro, y la Auditoría al Balance General de la Nación",
            "Informes sobre la inversión extranjera en Colombia"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 20.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué evalúa el control de gestión dentro de los componentes básicos de la auditoría?</p>`,
        options: [
            "La realización de los procesos contables en los estados financieros",
            "El cumplimiento de las normas constitucionales, legales y jurisprudenciales",
            "La eficiencia y eficacia en la administración de los recursos públicos",
            "El logro de los objetivos y cumplimiento de planes."
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 21.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el objetivo principal del proceso de responsabilidad fiscal?</p>`,
        options: [
            "Sancionar y corregir fiscalmente a los funcionarios corruptos",
            "Recuperar los dineros sustraídos al erario y resarcir los daños al patrimonio público",
            "Realizar auditorías financieras y de cumplimiento a las entidades públicas",
            "Promover la transparencia en la asignación y la ejecución de los recursos públicos"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 22.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué ley que regula en un principio el proceso de responsabilidad fiscal ordinario?</p>`,
        options: [
            "Ley 80 de 1993",
            "Ley 610 de 2000",
            "Ley 42 de 1993",
            "Ley 1474 de 2011"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 23.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué tipo de auditoría se enfoca en determinar si la información bancaria de una entidad se presenta de conformidad con el marco de referencia para la emisión de información relativa al manejo bancario y el marco regulatorio aplicable?</p>`,
        options: [
            "Auditoría de Cumplimiento",
            "Auditoría de Desempeño",
            "Auditoría Financiera",
            "Auditoría de Gestión"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 24.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función principal de la Dirección de Información, Análisis y Reacción Inmediata (DIARI) dentro de la CGR?</p>`,
        options: [
            "Realizar auditorías financieras y de cumplimiento a las entidades públicas basados en herramientas de inteligencia artificial",
            "Vigilar y controlar el uso de los recursos públicos en tiempo real utilizando tecnología BID DATA, entre otras herramientas digitales, virtuales y electrónicas",
            "Representar judicialmente a la CGR en lo referente a la vigilancia fiscal concomitante y preventivo",
            "Diseñar la política fiscal del país a partir del análisis de los mapas de contratación pública levantados conforme los datos de las entidades del Estado"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 25.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función principal de la Unidad de Investigaciones Especiales Contra la Corrupción?</p>`,
        options: [
            "Investigar todos los casos de corrupción en el país que tenga conocimiento la CGR",
            "Concentrar los esfuerzos misionales en casos de mayor impacto nacional que exigen intervención inmediata ante el riesgo de pérdida o afectación a los recursos públicos",
            "Realizar auditorías financieras y de cumplimiento a las entidades públicas sectorizadas con base en los informes de corrupción rendidos por la Secretaría de la Transparencia",
            "Representar judicialmente a la CGR ante las Altas Cortes en casos de extrema corrupción"
        ],
        answer: "B"
    },    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 26.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué función cumple la Unidad de Apoyo Técnico al Congreso de la CGR?</p>`,
        options: [
            "Realizar auditorías financieras, de Cumplimiento y Desempeño al Congreso de la República",
            "Prestar asistencia técnica al Congreso en el ejercicio de sus funciones legislativas y de control político",
            "Apoyar jurídicamente al Congreso de la República cuando se inicien procesos de responsabilidad fiscal en la Comisión de Investigaciones de la Cámara de Representantes a los aforados Constitucionales",
            "Apoyar Jurídicamente al Congreso de la República cuando se inicie juicios fiscales en la Comisión del Acusaciones del Senado a los aforados constitucionales"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 27.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el propósito de las Gerencias Departamentales Colegiadas de la CGR en los territorios?</p>`,
        options: [
            "Desconcentrar el control fiscal en la capital del país con la finalidad de unificar criterios de vigilancia y control fiscal a nivel nacional en Colombia",
            "Garantizar la presencia de la Contraloría en todo el territorio nacional, fortaleciendo el control fiscal y haciendo un eficiente ejercicio de prevención, investigación y sanción de actos de corrupción y control de la gestión pública en el territorio asignado",
            "Realizar auditorías financieras, cumplimiento y gestión a las entidades públicas del orden territorial que ejecuten recursos propios",
            "Representar judicialmente a la CGR en los entes territoriales en determinadas autoridades judiciales que por su competencia asuman litigios en contra de la entidad"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 28.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función principal de la Contraloría Delegada para la Participación Ciudadana de la CGR?</p>`,
        options: [
            "Realizar auditorías articuladas con la participación de las OSC conforme el PNVCF de la CGR en aquellos territorios donde se vigilen recursos públicos endógenos",
            "Garantizar y promover las herramientas para que la ciudadanía pueda ser parte del proceso de vigilancia a la gestión de las entidades públicas y la ejecución de los recursos de los colombianos",
            "Representar al Contralor General de la Republica en los territorios en los espacios de concertación ciudadana",
            "Diseñar la política pública del Estado participativo para las entidades públicas del Estado colombiano"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 29.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el propósito principal del listado maestro de documentos y registros dentro del SIGECI de la CGR?</p>`,
        options: [
            "Gestionar el acceso a la información pública con respecto a las actividades internas de la CGR a nivel de procedimientos",
            "Servir como índice de documentos que apoyan el control y operación de los macroprocesos y procesos",
            "Esquematizar por dependencia y gerencias los procesos y procedimientos de las entidades de control fiscal",
            "Evaluar el desempeño en la realización de las actividades de los macroprocesos y procesos por parte de los servidores públicos de la entidad"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 30.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál de los siguientes macroprocesos se enfoca en la formulación de políticas, estrategias y planes para la vigilancia y control fiscal?</p>`,
        options: [
            "Desarrollo Institucional (DIN)",
            "Direccionamiento Estratégico (DET)",
            "Gestión de Información y Análisis (GIA)",
            "Gestión del Riesgo, Seguridad y Continuidad del Negocio (RSC)"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 31.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué macroproceso de la CGR se encarga de gestionar el desarrollo y la modernización institucional a través de la gestión del conocimiento y la innovación?</p>`,
        options: [
            "Comunicación y Divulgación (CYD)",
            "Gestión del Talento Humano (GTH)",
            "Desarrollo Institucional (DIN)",
            "Gestión de Recursos de la Entidad (GRE)"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 32.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el objetivo principal del macroproceso de Comunicación y Divulgación (CYD) dentro de la CGR?</p>`,
        options: [
            "Gestionar los recursos financieros de la entidad",
            "Comunicar y divulgar información de interés público e institucional",
            "Gestionar el talento humano de la CGR",
            "Evaluar el desempeño de los sujetos de control"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 33.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál de los siguientes NO es un valor fundamental de la Contraloría General de la República según el Plan Estratégico 2022-2026?</p>`,
        options: [
            "Independencia",
            "Servicio",
            "Competencia",
            "Buena fe"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 34.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué tipo de control fiscal evalúa el comportamiento de las finanzas del Estado a nivel agregado y el cumplimiento de los objetivos macroeconómicos?</p>`,
        options: [
            "Control Fiscal Micro",
            "Control Fiscal Macro",
            "Control de Cumplimiento – Gestión",
            "Control de Legalidad"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 35.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la visión de la Contraloría General de la República para el año 2026?</p>`,
        options: [
            "Ser la entidad con mayor número actuaciones de vigilancia y control fiscal a nivel nacional por resultados institucionales",
            "Ser reconocida como una Entidad Fiscalizadora Superior que inspira confianza y es modelo de innovación",
            "Ser la entidad con mayor relevancia en materia de vigilancia fiscal y control fiscal a nivel nacional y territorial",
            "Ser la entidad con el mejor talento humano del Estado colombiano en materia de vigilancia y control fiscal"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 36.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué documento contiene un listado de las personas naturales o jurídicas que han sido halladas responsables fiscales por la Contraloría?</p>`,
        options: [
            "El Informe Anual sobre las Finanzas del Estado",
            "El Boletín de Responsables Fiscales",
            "La Cuenta General del Presupuesto y el Tesoro",
            "El Plan Nacional de Vigilancia y Control Fiscal"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 37.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál de los siguientes sistemas de control fiscal busca determinar la eficiencia y eficacia de las entidades en la administración de los recursos públicos?</p>`,
        options: [
            "Control Financiero",
            "Control de Legalidad",
            "Control de Gestión",
            "Control de Resultados"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 38.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿A través de cual Ley se establece el proceso de responsabilidad fiscal verbal?</p>`,
        options: [
            "Ley 42 de 1993",
            "Ley 80 de 1993",
            "Ley 610 de 2000",
            "Ley 1474 de 2011"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 39.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál macroproceso se ocupa de la gestión de riesgos, seguridad y continuidad del negocio en la CGR?</p>`,
        options: [
            "Gestión del Riesgo, Seguridad y Continuidad del Negocio (RSC)",
            "Gestión de Información y Análisis (GIA)",
            "Vigilancia Fiscal (VIG)",
            "Control Fiscal Micro (CMI)"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 40.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el enfoque principal del macroproceso de Gestión de Información y Análisis (GIA) en la CGR?</p>`,
        options: [
            "Gestionar la relación con los grupos de valor",
            "Gestionar y analizar información para optimizar la toma de decisiones",
            "Establecer los procesos y procedimientos que permita el desarrollo de las misionalidades en la CGR",
            "Gestionar los procesos y procedimientos de la Gerencia del Talento Humano CGR"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 41.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué macroproceso busca promover y fortalecer el control social a lo público y su integración a la vigilancia y control fiscal?</p>`,
        options: [
            "Gestión de Relaciones con los Grupos de Valor (RGV)",
            "Control Fiscal Macro (CMA)",
            "Responsabilidad Fiscal y Resarcimiento del Daño al Patrimonio Público (RDP)",
            "Gestión de las Tecnologías de Información (GTI)"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 42.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Se considera como un objetivo del macroproceso de Vigilancia Fiscal (VIG) en la CGR:</p>`,
        options: [
            "Determinar la responsabilidad fiscal",
            "Observar los objetos de control sin intervenir en sus decisiones",
            "Gestionar los recursos de la entidad",
            "Gestionar las tecnologías de la información"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 43.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Mediante cual macroproceso se determinar si la gestión fiscal se ajusta al marco legal y logra los efectos previstos?</p>`,
        options: [
            "Control Fiscal Macro (CMA)",
            "Gestión del Talento Humano (GTH)",
            "Control Fiscal Micro (CMI)",
            "Gestión de Recursos de la Entidad (GRE)"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 44.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El objetivo o finalidad del macroproceso de Control Fiscal Macro (CMA) en la CGR es:</p>`,
        options: [
            "Establecer la responsabilidad fiscal y ejercer el cobro coactivo",
            "Gestionar el ingreso, permanencia y retiro de los servidores públicos",
            "Consolidar los análisis y resultados de vigilancia y control fiscal de las finanzas y políticas públicas",
            "Gestionar los recursos necesarios para el cumplimiento de la misión institucional"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 45.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es el macroproceso que se enfoca en establecer los responsables fiscales y procurar la recuperación del daño económico causado a los recursos del Estado:</p>`,
        options: [
            "Gestión de las Tecnologías de Información (GTI) aplicado a los procesos misionales de la CGR",
            "Evaluación, Análisis y Mejora de la vigilancia y control fiscal en la CGR",
            "Direccionamiento Estratégico (DET) enfocado en la recuperación de los recursos públicos malversados o dilapidados por los gestores fiscales",
            "Responsabilidad Fiscal y Resarcimiento del Daño al Patrimonio Público (RDP)"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 46.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es el objetivo del macroproceso de Gestión del Talento Humano (GTH) en la CGR:</p>`,
        options: [
            "Gestionar las tecnologías de la información enfocados en la productividad del Talento Humano CGR",
            "Gestionar el ingreso, permanencia y retiro de los servidores públicos",
            "Gestionar los recursos e instrumentos necesarios para el cumplimiento de la misión institucional de la entidad",
            "Gestionar la medición, seguimiento y evaluación de la gestión de los servidores públicos de la CGR en todos sus niveles – cargos"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 47.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué macroproceso se encarga de gestionar los recursos necesarios para garantizar el cumplimiento de la misión institucional de la CGR?</p>`,
        options: [
            "Gestión de Recursos de la Entidad (GRE)",
            "Gestión de las Tecnologías de Información (GTI)",
            "Evaluación, Análisis y Mejora",
            "Direccionamiento Estratégico (DET)"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 48.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El tipo de auditoría de la CGR para evaluar si las políticas, programas, proyectos u organizaciones gubernamentales operan de conformidad con los principios de economía, eficiencia y eficacia, es:</p>`,
        options: [
            "Auditoría Financiera",
            "Auditoría de Cumplimiento",
            "Auditoría de Desempeño",
            "Revisión de Cuentas"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 49.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Estos principios NO rige el Plan Estratégico de la CGR 2022-2026:</p>`,
        options: [
            "La Participación Ciudadana",
            "Igualdad, Equidad, la Paz, el Desarrollo Sostenible, el Enfoque Diferencial y Territorial",
            "Transformación Digital",
            "Concentración de funciones y desconcentración administrativa de la CGR"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 50.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Se entiende por Actuación Especial de Vigilancia y Control (AEF):</p>`,
        options: [
            "Un proceso integral, holístico y detallado de auditoría de cumplimiento para vigilar los recursos del Estado",
            "Una acción de vigilancia breve y sumaria sobre un hecho que afecta el patrimonio público",
            "Un programa de vigilancia y control fiscal para supervisar los recursos exógenos y endógenos del Estado",
            "Un informe anual de la CGR sobre el estado de las finanzas públicas"
        ],
        answer: "B"
    },
        {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 51.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la misión de la Contraloría General de la República según el Plan Estratégico 2022-2026?</p>`,
        options: [
            "Ejercer la vigilancia y control fiscal independiente, mediante la participación ciudadana y la transformación digital",
            "Sancionar a los funcionarios públicos que incurran en actos de perdida de los recursos públicos",
            "Promover el desarrollo estratégico y económico del país",
            "Controlar los recursos públicos de cualquier índole de manera eficiente"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 52.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es el tipo de auditoría que se enfoca en determinar si la entidad, asunto o materia a auditar cumplen con las disposiciones de todo orden, emanadas de Organismos o Entidades competentes que han sido identificadas como criterios de evaluación:</p>`,
        options: [
            "Auditoría Financiera",
            "Auditoría de Desempeño",
            "Actuación Especial de Vigilancia y Control",
            "Auditoría de Cumplimiento"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 53.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">La CGR considera que es el principal insumo del control fiscal macro:</p>`,
        options: [
            "Las denuncias ciudadanas con estadísticas de todo orden",
            "Las estadísticas acopladas y procesadas por la CGR",
            "Los informes de auditoría financiera, cumplimiento y de gestión",
            "Los planes de mejoramiento de las entidades auditadas"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 54.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el enfoque principal del macroproceso de Gestión de las Tecnologías de Información (GTI) en la CGR?</p>`,
        options: [
            "Gestionar el talento humano en el marco de la arquitectura empresarial digital de la CGR",
            "Gestionar las Tecnologías de la Información – TI - en el marco de la Arquitectura Empresarial de la CGR",
            "Establecer relaciones de valor en el marco de las comunicaciones y su conexión con las TI y demás actividades transversales de la CGR",
            "Gestionar la relación con los grupos de valor y el ejercicio del control fiscal macro"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 55.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Identifique el macroproceso que se ocupa de la medición, seguimiento y evaluación del desempeño de la CGR para optimizar la toma de decisiones:</p>`,
        options: [
            "Gestión de Relaciones con los Grupos de Valor (RGV)",
            "Control Fiscal Macro (CMA)",
            "Evaluación, Análisis y Mejora",
            "Responsabilidad Fiscal y Resarcimiento del Daño al Patrimonio Público (RDP)"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 56.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El principal objetivo de la Resolución Organizacional OGZ-0765-2020, es:</p>`,
        options: [
            "Designar al responsable del Sistema de Gestión de Seguridad de la Contraloría",
            "Establecer el Manual para la Gestión de Riesgos de la CGR",
            "Designar el Oficial de Protección de Datos Personales en la Contraloría General de la República y fijar sus funciones",
            "Modificar la Resolución Organizacional OGZ-0531 de 2016"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 57.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">En la Constitución Política, el derecho a la intimidad personal y el acceso a la información personal se regula en el _____.</p>`,
        options: [
            "Artículo 267",
            "Artículo 15",
            "Artículo 136",
            "Artículo 90"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 58.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué principio de la vigilancia y control fiscal permite a los órganos de control acceder a la información sin que se les oponga reserva alguna?</p>`,
        options: [
            "Principio de Reserva Legal",
            "Principio de Confidencialidad",
            "Principio de Inoponibilidad",
            "Principio de Oportunidad"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 59.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Dependencia de la Contraloría General de la República que asume las funciones de Oficial de Protección de Datos Personales:</p>`,
        options: [
            "Dirección de Información, Análisis y Reacción Inmediata – DIARI",
            "Unidad de Seguridad y Aseguramiento Tecnológico e Informático (USATI)",
            "Dirección de Gestión Documental y Archivo – DGDA",
            "Oficina de Sistemas e Informática – OSEI"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 60.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es una de las funciones específicas del Oficial de Protección de Datos Personales en la CGR:</p>`,
        options: [
            "Ejecutar auditorías internas en las dependencias de la Contraloría con la reserva constitucional y legal sobre las actividades realizadas",
            "Estructurar, diseñar y administrar el Programa Integral de Gestión de Datos Personales",
            "Representar a la Contraloría ante la Superintendencia de Industria y Comercio en materia de litigios por protección de datos personales",
            "Gestionar ante la PGN las acciones tendientes a la protección de datos del sector público"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 61.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Esta ley establece las disposiciones generales sobre la Protección de Datos Personales en Colombia?</p>`,
        options: [
            "Ley 1712 de 2014",
            "Ley 1273 de 2009",
            "Ley 1581 de 2012",
            "Ley 1474 de 2011"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 62.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es el decreto que reglamenta parcialmente la Ley 1581 de 2012 sobre protección de datos personales en Colombia?</p>`,
        options: [
            "Decreto 267 de 2000",
            "Decreto 1377 de 2013",
            "Decreto 403 de 2020",
            "Decreto 620 de 2020"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 63.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué entidad es calificada como la autoridad nacional que defiende los derechos fundamentales relacionados con la correcta administración de datos personales?</p>`,
        options: [
            "Contraloría General de la República",
            "Secretaría de la Presidencia para la Transparencia",
            "Superintendencia de Industria y Comercio",
            "Procuraduría General de la Nación"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 64.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es excluida la _____ a personas naturales o jurídicas según la Ley 1712 de 2014.</p>`,
        options: [
            "Información financiera, económica y bancaria",
            "Información exceptuada por daño de sus derechos a la intimidad, vida, salud o seguridad, así como los secretos comerciales, industriales y profesionales",
            "Información presupuestal, contable y financiera",
            "Información precontractual, contractual y postcontractual"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 65.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué delito se adicionó al Código Penal mediante la Ley 1273 de 2009 relacionado con la violación de datos personales?</p>`,
        options: [
            "Hurto por medios informáticos, electrónicos y digitales",
            "Daño informático, electrónico y digital",
            "Violación de datos personales",
            "Acceso abusivo a un sistema informático con fines terroristas"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 66.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué función corresponde a la Dirección de Gestión Documental según el Decreto 267 de 2000, modificado por el Decreto 2037 de 2019?</p>`,
        options: [
            "Dirigir las labores de archivo en el ejercicio de la vigilancia fiscal de la CGR",
            "Proteger la información y los datos personales que reposan en medios físicos, bases de datos y documentos electrónicos",
            "Administrar los aplicativos institucionales independiente de los procesos misionales donde operan",
            "Proponer acciones de mejora a través de un plan de acción para el manejo de los archivos institucionales de la CGR"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 67.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Fue aprobado por el Comité Institucional de Gestión y de Coordinación de Control Interno (CIGECCI) de la Contraloría General de la República en septiembre de 2019:</p>`,
        options: [
            "El Plan Estratégico de la Contraloría",
            "El Manual para la Gestión de Riesgos de la CGR",
            "El Código de Ética de la Contraloría",
            "El Reglamento Interno de la Contraloría"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 68.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Mediante este Decreto se subrogó el título 17 de la parte 2 del libro 2 del Decreto 1078 de 2015, estableciendo lineamientos generales en el uso y operación de los servicios ciudadanos digitales:</p>`,
        options: [
            "Decreto 267 de 2000",
            "Decreto 1377 de 2013",
            "Decreto 403 de 2020",
            "Decreto 620 de 2020"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 69.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Son implicaciones del marco normativo que regula la protección de datos personales:</p>`,
        options: [
            "Únicamente la conservación de las bases de datos físicas de las personas naturales y jurídicas",
            "Únicamente la seguridad de la información de las personas naturales",
            "Velar por la seguridad de la información, así como la conservación de las bases de datos personales, tanto electrónicas como físicas",
            "Únicamente la designación del Oficial de Protección de Datos Personales"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 70.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función general de la Unidad de Seguridad y Aseguramiento Tecnológico e Informático (USATI) como Oficial de Protección de Datos Personales?</p>`,
        options: [
            "Gestionar el uso de los espacios públicos en el nivel central y desconcentrados de la CGR",
            "Velar por la protección de datos personales y asesorar en el trámite de respuesta a las solicitudes de los titulares de los datos en el ejercicio de sus derechos",
            "Representar legalmente a la CGR ante los organismos de seguridad del Estado Colombia",
            "Ejecutar auditorías internas en las dependencias de la Contraloría que permita determinar el riesgo de seguridad a nivel externo y interno"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 71.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Según el Acto Legislativo 02 de 2015, ¿Cuál es el periodo de elección del Contralor General de la República?</p>`,
        options: [
            "Igual al del Presidente de la República (cuatro años) y reelegible hasta por un periodo más",
            "Igual al del Presidente de la República (cuatro años) y no reelegible",
            "Cuatro años, con posibilidad de reelección",
            "Cuatro años, periodo de carácter personal a cumplir por el elegido"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 72.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué implica la función de 'jurisdicción coactiva' del Contralor General de la República?</p>`,
        options: [
            "La capacidad de imponer medidas cautelares sobre el corpus de los funcionarios investigados",
            "La facultad de recaudar los fallos pecuniarios de responsabilidad fiscal y tener prelación en dicho recaudo",
            "El poder de iniciar procesos penales y disciplinarios directamente contra funcionarios públicos involucrados en hechos de perdida de recursos públicos",
            "La facultad de cobrar fallos sancionatorios de responsabilidad fiscal y tener preferencia en dicho recaudo"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 73.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el propósito principal del Sistema Nacional de Control Fiscal, dirigido e implementado con apoyo de la Auditoría General de la República?</p>`,
        options: [
            "Desconcentrar todas las funciones de control fiscal en la Contraloría General de la República y las contralorías territoriales",
            "Armonizar los sistemas de control fiscal de todas las entidades públicas del orden nacional y territorial, unificando la vigilancia y control de la gestión fiscal",
            "Asesorar a las contralorías territoriales con la finalidad de promocionar y crear una única entidad de control a nivel nacional",
            "Supervisar exclusivamente el control interno de las entidades del Estado"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 74.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El control fiscal preventivo y concomitante introducido por el Acto Legislativo 04 de 2019, implica:</p>`,
        options: [
            "La intervención de la CGR en la supervisión de los recursos públicos ejecutados por las entidades nacionales y territoriales del Estado",
            "Una vigilancia fiscal vinculante que obliga a las entidades a seguir las recomendaciones de la Contraloría",
            "Alerta y función de advertencia sobre riesgos inminentes en operaciones o procesos en ejecución, sin carácter vinculante",
            "La intervención administrativa inmediata de la CGR con mecanismos de control fiscal posterior y selectivo ante cualquier alerta de irregularidades identificadas en el ejercicio de acciones de vigilancia del control concomitante y preventivo"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 75.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">NO es un requisito para ser Contralor General de la República en Colombia:</p>`,
        options: [
            "Ser colombiano de nacimiento y ciudadano en ejercicio",
            "Tener más de 35 años",
            "Haber sido miembro del Congreso o cualquier entidad del Estado en calidad de Directivo en el año inmediatamente anterior a la elección",
            "Tener título universitario o haber sido profesor universitario durante un tiempo no menor a 5 años"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 76.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Tras el Acuerdo de Paz con las FARC, ¿Qué función específica se le asignó a la Contraloría General de la República?</p>`,
        options: [
            "La supervisión de los procesos de reincorporación de excombatientes, entrega de tierras y participación política de víctimas y victimarios",
            "Las auditorías forenses a los programas enfocadas de manera exclusiva a la restitución de tierras",
            "La investigación fiscal sobe el costo del Estado por la comisión de crímenes de guerra, genocidio y lesa humanidad",
            "La creación de una Contraloría Delegada para la Paz (postconflicto), encargada de vigilar los recursos destinados al posconflicto"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 77.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál fue el principal aporte de la Misión Kemmerer en la creación de la Contraloría General de la República?</p>`,
        options: [
            "La recomendación de crear una Corte de Cuentas independiente del poder ejecutivo",
            "La transformación de la Corte de Cuentas en Departamento de Contraloría, con funciones más amplias de control fiscal",
            "La implementación de un sistema de control fiscal en Colombia basado en el modelo estadounidense con rasgos de carácter europeo",
            "La creación de la Superintendencia Bancaria, finanzas y de comercio"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 78.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué implicó el Acto Legislativo N.º 1 de 1945 para la Contraloría General de la República?</p>`,
        options: [
            "Le otorgó autonomía administrativa y financiera",
            "La integró a la rama legislativa del poder público",
            "Le dio consagración constitucional a la función de vigilancia de la gestión fiscal",
            "Eliminó su función de control fiscal posterior y selectivo implementado por la Misión Kemmerer"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 79.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Una implicación que la Contraloría General de la República sea un órgano autónomo según la Constitución de 1991?</p>`,
        options: [
            "Que realizar de manera autónoma ejercicios de control fiscal de manera posterior, perceptiva y de forma excepcional, concomitante y previo",
            "Que realiza de manera independiente y autonomía ejercicios de control previo y perceptivo y de forma excepcional, posterior y selectivo",
            "Que no pertenece a ninguna de las ramas del poder público y tiene autonomía administrativa, presupuestal y técnica",
            "Que puede como regla general ejercer vigilancia y control fiscal sobre las entidades del orden nacional y territorial"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 80.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función del Contralor General de la República con respecto a la Cuenta General del Presupuesto y del Tesoro?</p>`,
        options: [
            "Elaborarla y presentarla al Congreso de la República",
            "Revisarla y aprobarla antes de su presentación al Congreso",
            "Presentarla a la Cámara de Representantes y certificar el balance de la Hacienda presentado por el Contador General de la Nación",
            "Modificarla ante errores para ajustarla y presentar al Congreso de la República"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 81.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué tipo de sanciones puede imponer el Contralor General de la República a quienes omitan la obligación de suministrar información o impidan el ejercicio de la vigilancia y control fiscal?</p>`,
        options: [
            "Solo amonestaciones verbales y escritas",
            "Únicamente multas económicas y llamados de atención",
            "Desde multa hasta suspensión en el ejercicio del cargo",
            "Exclusivamente suspensión y destitución del cargo"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 82.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la relación entre la Contraloría General de la República y las Contralorías Territoriales?</p>`,
        options: [
            "La Contraloría General de la República ejerce control concomitante y preventivo sobre las Contralorías Territoriales para generar alertas sobre su funcionamiento",
            "Las Contralorías Territoriales son totalmente autónomas y realizan control preferente con respecto a la Contraloría General de la República en la vigilancia y control fiscal de los recursos del orden nacional",
            "No existe ninguna relación entre la Contraloría General de la República y las Contralorías Territoriales",
            "La Contraloría General de la República puede intervenir en las funciones de vigilancia y control de competencia de las Contralorías Territoriales en casos excepcionales previstos por la ley"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 83.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué función cumple el Contralor General de la República en relación con los recursos naturales y el ambiente?</p>`,
        options: [
            "Presentar al Congreso de la República un informe anual sobre el estado de los recursos naturales y del ambiente",
            "Administrar con acciones de control fiscal los recursos naturales del país",
            "Autorizar el ejercicio de la vigilancia y control fiscal a la CAR y Contralorías Territoriales en lo referente a la explotación de recursos naturales",
            "Definir mediante las auditoria de desempeño la política ambiental del país"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 84.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">En materia de control fiscal, la figura de 'visita' en la época de la colonización española, implicaba:</p>`,
        options: [
            "Un viaje de inspección realizado por el Rey de España a las colonias",
            "Un sistema de control fiscal ejercido por la Casa de Contratación de Sevilla",
            "Un tipo de vigilancia fiscal y control administrativo a los virreinatos y capitanías generales, ejercida por el Real Visitador",
            "La obligación de los virreyes de rendir cuentas anuales a la Corona española con respecto a los recursos recaudados en las colonias"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 85.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Se considera como el alcance de la función de policía judicial que puede ejercer el Contralor General de la República?</p>`,
        options: [
            "Se limita a las investigaciones fiscales y penales relacionados con la corrupción",
            "Se extiende a todas las modalidades de vigilancia y control fiscal, directamente o a través de los servidores públicos de la entidad",
            "Solo puede ejercerse con autorización judicial previa",
            "Está restringida a la recolección de pruebas documentales"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 86.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la principal diferencia entre el control concomitante y preventivo y el control posterior y selectivo en el contexto de la vigilancia – control fiscal en Colombia?</p>`,
        options: [
            "El control concomitante y preventivo busca determinar observaciones y hallazgos, mientras que el control posterior se centra en la eliminación de riesgos potenciales",
            "El control concomitante y preventivo se enfoca en la prevención de daños al patrimonio público, mientras que el control posterior y selectivo busca determinar responsabilidades fiscales",
            "El control concomitante y preventivo implica hallazgos fiscales, mientras que el control posterior y selectivo garantiza la independencia de la administración",
            "El control concomitante y preventivo sustituye al control posterior y selectivo, mientras que el control posterior y selectivo complementa al control concomitante y preventivo"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 87.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Según el Acto Legislativo 04 de 2019, ¿cuál es el mecanismo principal a través del cual la Contraloría General de la República ejerce el control concomitante y preventivo?</p>`,
        options: [
            "Las auditorias de cumplimiento y financieras con hallazgos de connotación fiscal",
            "Las actuaciones especiales de fiscalización con hallazgos de connotación fiscal",
            "La emisión de alertas y advertencias a los sujetos vigilados",
            "La sanción directa de los gestores fiscales investigados a través de los PASF"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 88.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué implica la prohibición de coadministración en el contexto del control concomitante y preventivo ejercido por la CGR?</p>`,
        options: [
            "Que la Contraloría General de la República no puede participar en la toma de decisiones de la administración",
            "Que la Contraloría General de la República puede imposibilitar a través del veto las decisiones de la administración si considera que son perjudiciales para el patrimonio público",
            "Que la Contraloría General de la República puede sugerir la gestión diferente de los recursos públicos a la administración",
            "Que la Contraloría General de la República pueda sancionar directamente a los gestores fiscales a través de los PASF"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 89.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la finalidad principal del control fiscal concomitante y preventivo según el artículo 55 del Decreto Ley 403 de 2020?</p>`,
        options: [
            "Controlar a los gestores fiscales por irregularidades en el manejo de los recursos públicos de carácter posterior pero selectivo",
            "Que el control fiscal posterior y selectivo sea de carácter excepcional y no vinculante",
            "La defensa y protección del patrimonio público a través del seguimiento permanente de los recursos públicos",
            "Realizar sugerencias a la administración sobre la ejecución de los recursos públicos ante evidentes irregularidades en su manejo"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 90.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Los mecanismos que puede utilizar la Contraloría General de la República para realizar el seguimiento permanente a los recursos públicos en el marco del control concomitante y preventivo, son:</p>`,
        options: [
            "Acceso y análisis de la información, articulación con el control social y el control interno, y acompañamiento en instancias de asesoría",
            "Realizar copias espejo de información reservada, imposición de sanciones directas a los gestores fiscales y ordenar el allanamiento a las entidades objeto de la vigilancia control fiscal",
            "Sugerir e implementar a la administración acciones de mejora en la ejecución de los recursos públicos y en tiempo real",
            "Coordinación directa de la ejecución de los proyectos una vez siniestrados"
        ],
        answer: "A"
    },
        {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 91.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué tipo de información no puede ser negada a la Contraloría General de la República para el cumplimiento de sus funciones?</p>`,
        options: [
            "Información personal de los funcionarios públicos",
            "Información estratégica de las empresas privadas",
            "Información sujeta a reserva legal",
            "Información clasificada como secreto de Estado"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 92.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función principal de la Dirección de Información, Análisis y Reacción Inmediata (DIARI) CGR en el contexto del control fiscal?</p>`,
        options: [
            "Vigilar y controlar a los gestores fiscales a través de métodos pasivos de seguimiento",
            "Sugerir acciones de control punitivo ante las evidentes irregularidades en la ejecución de los recursos del Estado",
            "Ejercer control previo, concomitante y selectivo sobre las decisiones administrativas",
            "Producir informes de analítica de datos para hacer más eficientes las funciones de vigilancia y control fiscal"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 93.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué implicación tiene la sentencia C-140/20 de la Corte Constitucional en relación con el control concomitante y preventivo?</p>`,
        options: [
            "Permite la flexibilizar acciones de intervención en la ejecución de los recursos públicos por parte de la CGR en los procesos de alerta que emite a la administración",
            "Prohíbe que el control concomitante y preventivo incida en las decisiones de la administración al punto de instituir un sistema de coadministración",
            "Elimina la figura de la advertencia y la sustituye por meras alertas a la administración de tal forma que no se incurra en coadministración",
            "Otorga facultades amplias a la CGR para el ejercicio de la vigilancia y control fiscal concomitante y preventivo al punto de autorizar la sanción a los gestores fiscales por el daño patrimonial al Estado"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 94.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la diferencia fundamental entre el control preventivo actual y el control previo eliminado en Colombia con la Constitución Política de 1991?</p>`,
        options: [
            "El control preventivo actual implica coadministración, mientras que el control previo no, solo alertas y advertencias a la administración",
            "Una vez culminan las operaciones de ejecución de los recursos públicos el control preventivo actual es más expedito, rápido y eficaz, que el denominado control previo",
            "No hay diferencias significativas entre el control preventivo actual y el control previo, es un cambio de términos en el lenguaje con igual incidencia desde el punto de vista de la vigilancia y el control fiscal en Colombia",
            "El control preventivo actual no implica coadministración y se centra en la alerta y advertencia, mientras que el control previo se consideraba un sistema de coadministración arbitrario"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 95.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Cinco características principales del nuevo modelo de control fiscal preventivo y concomitante según la reforma?</p>`,
        options: [
            "Sin coadministración, carácter no vinculante, pronunciamiento sobre la conveniencia de las decisiones, sanción directa al gestor fiscal, y coordinación con otras entidades",
            "Control de connotaciones previas, carácter no obligatorio, pronunciamiento sobre la conveniencia de las decisiones, sanción indirecta al gestor fiscal, y corresponde a todas las entidades de control",
            "No implica coadministración, carácter excepcional y no vinculante, no pronunciarse sobre la conveniencia de las decisiones, emitir alertas - realizarse en forma de advertencia, y corresponde su realización exclusivamente al Contralor General",
            "Coadministración, carácter obligatorio, pronunciamiento sobre la conveniencia de las decisiones, realización en forma de veto, y corresponde a todas las entidades de control"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 96.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Las 'alertas tempranas' en el contexto del control preventivo y concomitante son:</p>`,
        options: [
            "Orden directa a los gestores fiscales con la finalidad de corregir las irregularidades evidenciadas en la ejecución de los recursos públicos",
            "El informe breve y sucinto de la detección preliminar de algún posible riesgo de afectación o pérdida de los recursos públicos",
            "La advertencia formal al gestor fiscal",
            "La solicitud de rectificación en la forma como se viene ejecutando los recursos públicos"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 97.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la naturaleza jurídica del control fiscal posterior y selectivo según el artículo 267 de la Constitución Política de Colombia?</p>`,
        options: [
            "Es una función pública administrativa especializada mediante la cual se vigila la gestión fiscal de la administración y de los particulares que manejan fondos o bienes de la nación",
            "Es una función de carácter administrativa sancionatoria de la Contraloría General de la República",
            "Es una función de seguimiento previo de los recursos públicos",
            "Es una función de control sancionatorio de las decisiones administrativas ante las irregularidades comprobadas en el manejo de recursos del Estado"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 98.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El carácter 'selectivo' del control fiscal posterior realizado por la CGR, implica:</p>`,
        options: [
            "Que la Contraloría General de la República debe controlar cada transacción realizada por la administración",
            "Que la Contraloría General de la República puede elegir muestras representativas para evaluar la gestión fiscal basados en los criterios de focalización y priorización",
            "Que la Contraloría General de la República puede vetar las decisiones administrativas",
            "Que la Contraloría General de la República puede sancionar directamente a los gestores fiscales"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 99.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Los dos momentos diferenciados que comprende el control posterior de la gestión fiscal según la sentencia C-557 de 2009, son:</p>`,
        options: [
            "La labor de vigilancia y la imposición de sanciones",
            "La labor de alerta y la imposición de recomendaciones",
            "La labor de vigilancia y el inicio de procesos de responsabilidad fiscal",
            "La labor de control preventivo y la imposición de restricciones preventivas"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 100.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es el momento en que se ejerce el control fiscal respecto de los contratos estatales, según la sentencia C-623 de 1999:</p>`,
        options: [
            "Únicamente después de la liquidación o terminación de los contratos",
            "A partir de su legalización y durante su ejecución, y una vez liquidados o terminados",
            "Únicamente antes de la legalización de los contratos",
            "Únicamente durante la ejecución de los contratos"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 101.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Identifique el criterio principal para que un municipio o distrito pueda crear y organizar su propia contraloría, según la Ley 136 de 1994 modificada por la Ley 617 de 2000:</p>`,
        options: [
            "Tener una población superior a 50,000 habitantes",
            "Contar con la aprobación del Concejo Municipal o Distrital",
            "Demostrar capacidad financiera para sostener la contraloría",
            "Estar clasificado en categoría especial o primera, o ser de segunda categoría con más de 100,000 habitantes"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 102.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué ley estableció en su momento y una vez expedida la Constitución Política de 1994, la organización del sistema de control fiscal y el procedimiento de responsabilidad fiscal, estructurando las etapas de investigación y juicio fiscal?</p>`,
        options: [
            "Ley 14 de 1983",
            "Ley 12 de 1986",
            "Ley 42 de 1993",
            "Ley 610 de 2000"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 103.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Se determinó como el principal enfoque del ajuste fiscal promovido por la Ley 617 de 2000 en relación con los gobiernos territoriales:</p>`,
        options: [
            "Aumentar la inversión en infraestructura a través de incentivar el recaudo de impuestos de los entes territoriales",
            "Restringir el endeudamiento territorial y mejorar el manejo del gasto, entre otros, evitar entidad de control sin la correspondiente autonomía financiera",
            "Incrementar la contratación de personal en el sector público enfocado en la prestación de los servicios básicos del Estado",
            "Reducir los impuestos territoriales para incentivar la creación de empresa y empleo digno"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 104.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Señale los tres puntos clave en los que se orientó el ajuste fiscal promovido por la Ley 617 de 2000:</p>`,
        options: [
            "Ingresos corrientes de libre destinación, categorización de entidades territoriales y reglamentación de gastos de inversión",
            "Endeudamiento territorial, inversión social y categorización de entidades territoriales",
            "Ingresos corrientes de libre destinación, categorización de entidades territoriales y reglamentación de gastos de funcionamiento",
            "Gastos de funcionamiento, inversión en infraestructura y recaudo de impuestos"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 105.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El artículo de la Constitución Política de Colombia donde se establece la existencia de la Auditoría General de la República, es:</p>`,
        options: [
            "Artículo 113",
            "Artículo 267",
            "Artículo 274",
            "Artículo 300"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 106.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Es la autoridad encargada de elegir al Auditor General de la República y de qué tema?</p>`,
        options: [
            "El Presidente de la República de tema enviada por el Congreso",
            "El Congreso de la República de tema enviada por el Presidente",
            "El Consejo de Estado de tema enviada por la Corte Suprema de Justicia",
            "La Corte Constitucional de tema enviada por el Consejo de Estado"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 107.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El período para el cual es elegido el Auditor General de la República es de:</p>`,
        options: [
            "Dos años",
            "Tres años",
            "Cuatro años",
            "Cinco años"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 108.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué tipo de control ejerce la Auditoría General de la República sobre la Contraloría General de la República y las contralorías territoriales?</p>`,
        options: [
            "Control administrativo y disciplinario",
            "Control financiero y penal",
            "Control jerárquico, funcional y por competencias",
            "Control de vigilancia de la gestión fiscal"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 109.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál de las siguientes NO es una función del Auditor General de la República según el Decreto Ley 272 de 2000?</p>`,
        options: [
            "Fijar las políticas para la evaluación financiera y de gestión de los organismos de control",
            "Presentar informes al Congreso, al Presidente y al Comité Directivo de la Contraloría General",
            "Contribuir a la elección objetiva, transparente y autónoma de los contralores departamentales y municipales",
            "Promover investigaciones penales o disciplinarias contra funcionarios de las entidades vigiladas"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 110.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué busca la Auditoría General de la República a través de la vigilancia y el control fiscal ejercido a los órganos de su competencia funcional de carácter constitucional?</p>`,
        options: [
            "Justificar y concertar el gasto público",
            "Promover la transparencia y el buen gobierno en la gestión de los recursos públicos",
            "Centralizar el ejercicio de la vigilancia y control fiscal a través de procesos y procedimientos integrales sobre los recursos públicos",
            "Contribuir a la autonomía de las entidades territoriales desde una perspectiva integral de las acciones de vigilancia y control fiscal"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 111.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es el término de caducidad establecido en la Ley 610 de 2000 para el inicio del proceso de responsabilidad fiscal:</p>`,
        options: [
            "Tres años a partir de la fecha de cumplimiento en las obligaciones de ejecución instantánea, y/o desde el último acto en las obligaciones de tracto sucesivo",
            "Cuatro años a partir de la fecha de cumplimiento en las obligaciones de ejecución instantánea, y/o desde el último acto en las obligaciones de tracto sucesivo",
            "Cinco años a partir de la fecha de cumplimiento en las obligaciones de ejecución instantánea, y/o desde el último acto en las obligaciones de tracto sucesivo",
            "Diez años a partir de la fecha de cumplimiento en las obligaciones de ejecución instantánea, y/o desde el último acto en las obligaciones de tracto sucesivo"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 112.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Para ser elegido Auditor General, además de ser colombiano de nacimiento y en ejercicio de la ciudadanía y tener más de 35 años, se requiere:</p>`,
        options: [
            "Haber sido Contralor Territorial, Jefe de Oficina Control Interno o Supervisor",
            "Tener título universitario en cualquier área y experiencia en el sector público",
            "Tener título universitario en ciencias jurídicas, humanas, económicas, financieras, administrativas o contables y experiencia profesional no menor a 5 años",
            "Tener título universitario en ciencias jurídicas, humanas, económicas, financieras, administrativas o contables y experiencia profesional específica en vigilancia y control fiscal o de supervisión de contratos no menor a 5 años"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 113.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué prohibición existe para ser elegido Auditor General en el año inmediatamente anterior a la elección?</p>`,
        options: [
            "Haber sido miembro de una junta directiva de una empresa privada",
            "Haber sido candidato a la Presidencia de la República",
            "Haber sido rector de una universidad pública o privada",
            "Haber sido miembro del Congreso u ocupado cargo público alguno del orden nacional un año antes a la elección, salvo la docencia"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 114.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">La dependencia de la Auditoría General de la República que se encarga de dirigir, coordinar y controlar la formulación, diseño e implantación de modelos uniformes para el ejercicio de la auditoría integral de las entidades vigiladas, es:</p>`,
        options: [
            "Oficina Jurídica",
            "Dirección de Control Fiscal",
            "Oficina de Planeación",
            "Dirección de Recursos Financieros"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 115.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Dependencia _____ de la Auditoría General de la República que se encarga de dirigir y organizar las actividades requeridas para la administración del talento humano y los recursos físicos, financieros y económicos de la entidad:</p>`,
        options: [
            "Secretaría General",
            "Gerencia de Talento Humano",
            "Secretaría de Talento Humano",
            "Dirección de Talento Humano"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 116.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es una de las funciones de la Unidad de Reacción Inmediata según el artículo 42D del Decreto Ley 267 de 2000:</p>`,
        options: [
            "Dirigir las acciones de reacción inmediata de vigilancia y control fiscal",
            "Realizar auditorías anuales producto del control fiscal concomitante y preventivo",
            "Gestionar y concertar actuaciones especiales de fiscalización producto de las observaciones fiscales del control fiscal concomitante y posterior",
            "Coordinar con la Oficina de Planeación las auditorias de cumplimiento que ejecutara producto del control fiscal posterior y selectivo que se le encargue"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 117.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué establece el numeral 4 del artículo 35 del Decreto Ley 267 de 2000 como función del Contralor General de la República?</p>`,
        options: [
            "Dirigir las labores administrativas y de vigilancia fiscal",
            "Supervisar el presupuesto nacional",
            "Coordinar con otras entidades gubernamentales",
            "Realizar auditorías externas"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 118.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué tipo de acción de control fiscal se menciona en el artículo 76 del Decreto Ley 403 de 2020?</p>`,
        options: [
            "Auditoría completa",
            "Revisión de cuentas anuales",
            "Acción de control fiscal breve y sumaria",
            "Evaluación de proyectos a largo plazo"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 119.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">La Contraloría General de la República en ejercicio de su autonomía administrativa según el artículo 6o del Decreto Ley 267 de 2000, debe:</p>`,
        options: [
            "Realizar auditorías externas",
            "Coordinar con el gobierno local",
            "Supervisar el uso de recursos privados",
            "Definir aspectos relacionados con el cumplimiento de sus funciones"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 120.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se requiere para que la Unidad de Reacción Inmediata pueda adelantar Especial Seguimiento o Actuaciones especiales de Fiscalización?</p>`,
        options: [
            "Autorización Previa del Director de la DIARI CGR",
            "Autorización previa del Contralor General de la República",
            "Consentimiento del Director de la Oficina de Planeación de la CGR",
            "Revisión de la Contraloría Delegada competente de la CGR"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 121.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es una de las funciones de la Dirección de Orientación al Control Fiscal:</p>`,
        options: [
            "Dirigir la implementación de políticas y programas sobre vigilancia y control fiscal",
            "Realizar auditorías a los ciudadanos desde una perspectiva social",
            "Gestionar recursos internacionales para la capacitación en vigilancia y control fiscal",
            "Promover mecanismos anticorrupción a través de los planes de acción"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 122.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se debe proponer para la adopción en materia de vigilancia y control fiscal por parte del Contralor General?</p>`,
        options: [
            "Recursos para el desarrollo de proyectos enmarcados en garantizar una lucha anticorrupción efectiva",
            "Estrategias desde las conclusiones de las auditorías de Gestión realizadas por la CGR",
            "Políticas y programas para el buen funcionamiento de la CGR",
            "Normativas a nivel nacional que eviten la evasión fiscal"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 123.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es una de las responsabilidades de las Contralorías Delegadas Generales CGR:</p>`,
        options: [
            "Articular y concertar aspectos de vigilancia y control sobre los temas de su competencia",
            "Promover ante el Congreso políticas públicas sobe sus materias",
            "Desarrollar estrategias para evitar la evasión fiscal",
            "Coordinar auditorías a ciudadanos a nivel nacional conforme las necesidades del sector"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 124.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Se debe adoptar en la Contraloría General de la República para mejorar a nivel institucional conforme las competencias constitucionales, lo siguiente:</p>`,
        options: [
            "Un modelo de Gobierno de Datos y estrategia de datos abiertos",
            "Un modelo estándar para la elaboración del Plan de Accion enfocado a las entidad del Estado",
            "Un Modelo de control ciudadano ejercido por las Organizaciones de la Sociedad Civil – OSC",
            "Un modelo estándar para determinar los riesgos de corrupción a nivel nacional"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 125.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función principal de la Dirección de Seguimiento Regional según el artículo 57A del Decreto Ley 267 de 2000?</p>`,
        options: [
            "Realizar auditorías especiales a los sujetos de control de su competencia",
            "Gestionar recursos internacionales para financiar actividades de seguimiento a proyectos regionales de impacto nacional",
            "Desarrollar estrategias que permita concertar Actuaciones Especiales de Fiscalización a nivel territorial",
            "Dirigir la implementación de políticas de participación ciudadana en procesos de vigilancia y control fiscal"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 126.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la responsabilidad de la Contraloría General en relación con la promoción del control ciudadano a la gestión fiscal?</p>`,
        options: [
            "Ejecutar auditorías a las OSC con los ciudadanos que la conforman",
            "Proponer y diseñar políticas para la promoción del control ciudadano en la ejecución de los recursos del Estado",
            "Gestionar recursos para financiar el control social que realizan las OSC, entre otras, veedurías",
            "Desarrollar estrategias enfocadas en promover la participación ciudadana en los sujetos de control del nivel territorial y nacional"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 127.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Se debe coordinar entre el Fondo de Bienestar Social y CGR:</p>`,
        options: [
            "Estrategias para lograr la vinculación de particulares y funcionarios a los programas del FBS",
            "Actividades de bienestar enfocados en el bienestar de los servidores públicos temporales y provisionales de la CGR",
            "Coordinar el traslado de recursos entre la FBS y CGR para la realización de las actividades de bienestar social para funcionarios de carrera administrativa",
            "Políticas de mejoramiento de la calidad de vida laboral de los funcionarios de la CGR"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 128.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es un instrumento que debe adoptarse en la Contraloría General de la República para mejorar la transparencia:</p>`,
        options: [
            "Un modelo de Gobierno de Datos y estrategia de datos abiertos",
            "Un programa para la digitalización de los expedientes administrativos de competencia de la CGR",
            "Un modelo estándar para el trámite de los procesos PASF y PRF",
            "Una estructura empresarial acorde a las practicas privadas de eficiencia y eficacia"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 129.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Se considera la principal función de las Direcciones de Vigilancia Fiscal:</p>`,
        options: [
            "Promover modelos de acciones anticorrupción",
            "Supervisar y coordinar el control fiscal macro",
            "Dirigir la auditoría a los sujetos de control y particulares que ejecutan recursos públicos",
            "Dirigir los Procesos de responsabilidad fiscal y cobro coactivo"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 130.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se deben hacer las dependencias de la CGR en coordinación con la Delegada para la Participación Ciudadana?</p>`,
        options: [
            "Hacer seguimiento a las denuncias ciudadanas sobre recursos del Estado",
            "Promover actividades para la constitución de veedurías ciudadanas a nivel nacional",
            "Desarrollar estrategias de control social a los recursos públicos",
            "Coordinar de manera proactiva auditorías con y para ciudadanos"
        ],
        answer: "A"
    },
        {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 131.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué establece el Decreto Ley 403 del 16 de marzo de 2020?</p>`,
        options: [
            "Normas para la correcta implementación del Acto Legislativo 04 de 2019",
            "Regulaciones sobre el control fiscal preventivo y concomitante",
            "Condiciones para el seguimiento a los recursos públicos",
            "Todas las anteriores"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 132.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función de la Unidad de Reacción Inmediata según el documento?</p>`,
        options: [
            "Alertar sobre riesgos de recursos públicos",
            "Realizar auditorías internas bajo los criterios del Control Fiscal Concomitante y Preventivo",
            "Coordinar con la Secretaría de Transparencia acciones de vigilancia de los recursos públicos en tiempo real",
            "Emitir sanciones por irregularidades en le ejecución de los recursos públicos"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 133.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Que se debe indicar en el informe del control concomitante y preventivo si alguno de los aspectos no resulta aplicable?</p>`,
        options: [
            "No se requiere ninguna indicación",
            "Se debe omitir el aspecto",
            "Se debe indicar que no es aplicable",
            "Se debe realizar un nuevo informe"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 134.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es una característica del control es el control fiscal concomitante y preventivo según la Ley 403:</p>`,
        options: [
            "Vinculante",
            "Excepcional",
            "Optativo",
            "Regular"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 135.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">______ tiene la facultad exclusiva de advertir sobre presuntos daños fiscales como resultado de la realización de actuaciones enmarcadas en el control fiscal concomitante y preventivo:</p>`,
        options: [
            "El Contralor Delegado Sectorial",
            "El Jefe de Unidad competente",
            "El Director de la DIARI por competencia funcional",
            "El Contralor General de la República"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 136.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué deben consultar las Contralorías Delegadas antes de formular requerimientos de información a los sujetos de vigilancia y control en el marco del control fiscal preventivo y concomitante?</p>`,
        options: [
            "La información disponible en la Dirección de Información, Análisis y Reacción Inmediata -DIARI-",
            "Los informes de analítica generados por la Contraloría",
            "Las solicitudes de asistencia a las audiencias de conciliación",
            "Los documentos de la Oficina de planeación de la Contraloría"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 137.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Mencione ¿Cuál es el objetivo de las instancias de asesoría y decisión de la Contraloría General de la República?</p>`,
        options: [
            "Realizar auditorías internas",
            "Preparar su accionar de vigilancia y control fiscal",
            "Emitir sanciones a los sujetos vigilados producto de las irregularidades por daño fiscal",
            "Coordinar con otras entidades actividades de vigilancia en plano del control fiscal concomitante y preventivo"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 138.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Son criterios excepcionales que se deben considerar para determinar un riesgo inminente de pérdida de recursos públicos:</p>`,
        options: [
            "Trascendencia social, alto impacto ambiental y alta connotación económica",
            "Bajo costo, alta ineficiencia y manejos irregulares de las inversiones",
            "Opiniones de la ciudadanía, auditorías previas y antecedentes fiscales",
            "Normativas internas, falta de gestión y denuncias tramitadas"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 139.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El parágrafo transitorio respecto al Sistema de Alertas de Control Interno, establece:</p>`,
        options: [
            "Se implementará de inmediato con la finalidad de identificar irregulares comportamientos de los gestores fiscales",
            "La Unidad de información, análisis y Reacción Inmediata - DIARI podrá alertar sobre riesgos",
            "Se requieren acciones urgentes para su implementación",
            "Las Contralorías Delegadas dejaran de actuar una vez implementado"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 140.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Espacios a los cuales podrán acceder los ciudadanos en materia de participación ciudadana:</p>`,
        options: [
            "Espacios de deliberación pública",
            "Espacios de recreación",
            "Espacios de control social",
            "Espacios diseñados de veeduría"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 141.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Quién asiste al Contralor General en la coordinación y seguimiento de la Contraloría General de la República?</p>`,
        options: [
            "El Director de Oficina de Sistemas",
            "El Grupo de trabajo del Despacho",
            "El Director de la Oficina Jurídica",
            "El Vicecontralor General de la República"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 142.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la naturaleza del fallo de responsabilidad fiscal en Colombia?</p>`,
        options: [
            "Patrimonial",
            "Penal",
            "Civil",
            "Sancionatorio"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 143.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">En términos económicos, se busca recuperar con el fallo con responsabilidad fiscal:</p>`,
        options: [
            "El valor real (indexado) equivalente al detrimento patrimonial al Estado",
            "La confianza de la ciudadanía con la condena al gestor fiscal corrupto",
            "Los recursos públicos en la cantidad que fue sustraída por el gestor fiscal corrupto",
            "probar La eficiencia administrativa de la CGR"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 144.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El tipo de control fiscal que es considerado útil para asegurar un control fiscal en tiempo real es:</p>`,
        options: [
            "Control posterior",
            "Control Previo",
            "Control Perceptivo",
            "Control preventivo y concomitante"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 145.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es el objetivo principal del control interno en Colombia:</p>`,
        options: [
            "Asegurar la legalidad y eficiencia de la gestión pública",
            "Incrementar los recursos públicos",
            "Reducir el tiempo de auditoría",
            "Mejorar la comunicación entre la ciudadanía y los sujetos de control de la CGR"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 146.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">Es lo que se debe elaborar como resultado de las auditorías realizadas por la CGR:</p>`,
        options: [
            "Un informe de auditoría",
            "Un Plan de Mejoramiento",
            "Un documento con destino a los sujetos de control",
            "Un análisis de riesgos y soluciones"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 147.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se busca prevenir a través del control interno?</p>`,
        options: [
            "Riesgos e irregularidades",
            "Conflictos entre los sujetos de control y la CGR",
            "impedir el control fiscal externo",
            "Desviaciones en el ejercicio del control fiscal realizado por las Contralorías"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 148.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué ley dispuso que la Contraloría General de la República tenga acceso sin restricciones a los sistemas de información de entidades públicas y privadas?</p>`,
        options: [
            "Ley 1955 de 2019",
            "Ley 617 de 2000",
            "Ley 80 de 1993",
            "Ley 1474 de 2011"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 149.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se debe hacer por parte del grupo auditor cuando se encuentran hallazgos con incidencia fiscal?</p>`,
        options: [
            "Elaborar un Plan de Mejoramiento",
            "Realizar una auditoría adicional",
            "Trasladar a la dependencia competente para que se inicie el PRF",
            "Suspender al representante legal de la entidad auditada"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 150.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">_____ ejerce las funciones de policía judicial en el contexto de la vigilancia y control fiscal?</p>`,
        options: [
            "El Contralor General de la República",
            "Los servidores públicos de la entidad",
            "El Director de la DIARI",
            "Los Contralores Delegados y Gerentes Departamentales Colegiados"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 151.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se busca coordinar a través de la Dirección de Seguimiento Regional de la Contraloría?</p>`,
        options: [
            "La difusión de logros ciudadanos",
            "La ejecución de auditorías para recuperación de elefantes blancos",
            "La capacitación de funcionarios en materia de control social",
            "La gestión de recursos públicos en los entes territoriales"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 152.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">El Contralor General de la Republica tiene la facultad de intervención administrativa sobre las Contraloria Territoriales, identifique dos (2) características:</p>`,
        options: [
            "Excepcional y no vinculante",
            "Obligatoria y vinculante",
            "Temporal y opcional",
            "Permanente y vinculante"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 153.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué debe contener el Plan de Mejoramiento elaborado por las entidades auditadas?</p>`,
        options: [
            "Acciones correctivas para subsanar observaciones",
            "Un informe detallado de la acciones ejecutadas para contener los hallazgos",
            "Un análisis de riesgos sobre las causas que dieron origen a los hallazgo",
            "Soluciones inmediatas para la recuperación de los recursos públicos objeto de hallazgo fiscal"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 154.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se busca fortalecer a través del Acto Legislativo 04 de 2019 en relación con la Contraloría General de la República?</p>`,
        options: [
            "El régimen constitucional y legal de la vigilancia y el control fiscal",
            "La autonomía de las Contralorías Territoriales",
            "La participación ciudadana en la gestión pública",
            "La transparencia en el manejo y administración de recursos públicos"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 155.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Con el AL 04-2019 y sus normas jurídica reglamentarias, se establece sobre la reserva legal de información en el contexto de las funciones de la Contraloría, lo siguiente:</p>`,
        options: [
            "Se aplicará a todos los documentos de la entidad",
            "Se limitará a información financiera y contable",
            "Se podrá compartir con entidades privadas",
            "No será oponible para el uso en funciones constitucionales y legales"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 156.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué decreto modifica la estructura orgánica y funcional de la Contraloría General de la República en 2020?</p>`,
        options: [
            "Decreto 888 de 2017",
            "Decreto 405 de 2020",
            "Ley 1807 de 2016",
            "Decreto Ley 267 de 2000"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 157.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué norma jurídica determina las disposiciones para prevenir y combatir la corrupción en la contratación pública?</p>`,
        options: [
            "Ley 106 de 1993",
            "Ley 1474 de 2011",
            "Decreto 405 de 2020",
            "Resolución 5500 de 2003"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 158.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es el objetivo del Decreto Ley 267 de 2000?</p>`,
        options: [
            "Establecer la planta de personal de la Contraloría",
            "Fijar normas sobre organización y funcionamiento de la Contraloría",
            "Modificar la estructura orgánica y funcional de la CGR",
            "Crear el Centro de Estudios Fiscales (CEF) CGR"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 159.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué norma jurídica modifica parcialmente el Decreto 267 de 2000, sobre normas de organización y funcionamiento de la CGR?</p>`,
        options: [
            "Ley 106 de 1993",
            "Ley 1474 de 2011",
            "Ley 1807 de 2016",
            "Decreto 405 de 2020"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 160.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se prohíbe a quienes forman parte de las corporaciones que intervienen en la postulación del Contralor?</p>`,
        options: [
            "Dar recomendaciones",
            "Recibir salarios del Estado",
            "Ejercer funciones públicas",
            "Presentar proyectos de ley"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 161.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">_____ edad mínima se requiere para ser elegido contralor departamental, distrital o municipal:</p>`,
        options: [
            "20 años",
            "25 años",
            "30 años",
            "35 años"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 162.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">_____es el porcentaje de los ingresos corrientes del Sistema General de Regalías se destina a la operatividad del Sistema de Seguimiento, Evaluación y Control:</p>`,
        options: [
            "1%",
            "3%",
            "5%",
            "10%"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 163.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">_____ Entidad del Estado que tiene a su cargo la vigilancia de la gestión fiscal y el control de resultados de la administración:</p>`,
        options: [
            "El Congreso de la República",
            "La Auditoría General de la República",
            "La Contaduría General de la Nación",
            "La Contraloría General de la República"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 164.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">______ elige al Contralor General de la República:</p>`,
        options: [
            "El Consejo de Estado",
            "El Congreso en Pleno",
            "La Cámara de Representantes en Pleno",
            "El Senado de la República en Pleno"
        ],
        answer: "C"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 165.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué se establece sobre la reelección del Contralor General de la República?</p>`,
        options: [
            "Puede ser reelegido indefinidamente",
            "No podrá ser reelegido para el periodo inmediato",
            "Puede ser reelegido por un periodo adicional",
            "No hay restricciones sobre la reelección"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 166.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuántas líneas de defensa se mencionan en el Control Interno?</p>`,
        options: [
            "Tres",
            "Cuatro",
            "Cinco",
            "Seis"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 167.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la primera línea de defensa en el Control Interno?</p>`,
        options: [
            "Gerentes Públicos",
            "Jefes de Planeación",
            "Oficinas de control interno",
            "Comités sectoriales"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 168.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">_____ son los responsables de establecer instrumentos de gestión en materia de Control Interno:</p>`,
        options: [
            "Los Representantes Legales",
            "El Presidente de la República",
            "El Congreso de la República",
            "La Contaduría General de la Nación"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 169.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué figura se menciona como parte de la institucionalidad del Control Interno?</p>`,
        options: [
            "Comité Institucional de Coordinación de Control Interno",
            "Comité de Coordinación del Sistema de Control Interno",
            "Comité Sectorial de Auditoría",
            "Consejo Asesor del Gobierno Nacional"
        ],
        answer: "A"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 170.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué figura se menciona como parte de la estructura de control interno en el orden territorial?</p>`,
        options: [
            "Comité Institucional de Coordinación de Control Interno",
            "Comités Departamentales de Auditoría",
            "Consejo Asesor del Gobierno Nacional",
            "Oficina de Control Interno"
        ],
        answer: "D"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 171.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función del Comité de Coordinación del Sistema de Control Interno Institucional?</p>`,
        options: [
            "Establecer políticas de control interno",
            "Coordinar y asesorar en el diseño de estrategias",
            "Realizar auditorías externas",
            "Evaluar el desempeño de los servidores públicos"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 172.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué entidad debe coordinar con las entidades el cumplimiento de las disposiciones en la implantación del Sistema Nacional de Contabilidad Pública?</p>`,
        options: [
            "La Contraloría General de la República",
            "El Departamento Administrativo de la Función Pública",
            "Superintendencia para la contabilidad y el registro",
            "La Oficina de Control Interno de cada sector"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 173.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué componente del MECI se refiere a la gestión de riesgos?</p>`,
        options: [
            "Ambiente de control de riesgos",
            "Determinación de los riesgos",
            "Información y comunicación de los riesgos",
            "Evaluación del riesgo"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 174.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Qué componente del Control Interno se refiere a la verificación y evaluación?</p>`,
        options: [
            "Ambiente de control",
            "Actividades de control",
            "Evaluación del riesgo",
            "Información y comunicación de la verificación y evaluación"
        ],
        answer: "B"
    },
    {
        question: `<p style="text-align: center; font-size: 2em;"><strong>Pregunta 175.</strong></p><p><strong>Enunciado</strong></p><p style="text-align: justify; margin-top: 1em; padding-left: 30px;">¿Cuál es la función de la Contraloría General de la República en el contexto del Control Interno?</p>`,
        options: [
            "Órgano de Control Externo Fiscal que evalúa el sistema de gestión interno de los sujetos de control",
            "Aumentar la vigilancia y control fiscal sobre los sujetos de control de formas posterior y selectiva",
            "Disminuir los riesgos con el seguimiento permanente a la gestión del control interno",
            "Coordinar con el Control Interno la muestra de contratos a auditar"
        ],
        answer: "A"
    }
];
   // --- Elementos del DOM y SVG para Pausa ---
   // Asegúrate de que estos IDs ('btn-pause-resume', 'pause-overlay', 'btn-resume-from-overlay')
   // coincidan exactamente con tu archivo index.html.
   const btnPausaReanudar = document.getElementById('btn-pause-resume');
   const superposicionPausa = document.getElementById('pause-overlay');
   const btnReanudarDesdeSuperposicion = document.getElementById('btn-resume-from-overlay');
   // Considera si 'enlaceFinalizarAnticipado' ya está definido globalmente.
   // const enlaceFinalizarAnticipado = document.getElementById('btn-early-finish'); 

   const iconoPausaSVG = btnPausaReanudar ? btnPausaReanudar.innerHTML : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
   const iconoPlaySVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M8 5v14l11-7L8 5z"/></svg>';
/**
 * @const {number} TIEMPO_POR_PREGUNTA_SEG - Tiempo asignado (en segundos) para responder cada pregunta.
 */
const TIEMPO_POR_PREGUNTA_SEG = 90;

/**
 * @const {number} TOTAL_PREGUNTAS - Número total de preguntas en el cuestionario.
 * Se calcula automáticamente basándose en la longitud del array PREGUNTAS.
 */
const TOTAL_PREGUNTAS = PREGUNTAS.length;

/**
 * @const {number} TIEMPO_TOTAL_ESTIMADO_SEG - Tiempo total estimado para completar todo el cuestionario (en segundos).
 * Se basa en el número total de preguntas y el tiempo asignado por pregunta.
 */
const TIEMPO_TOTAL_ESTIMADO_SEG = TOTAL_PREGUNTAS * TIEMPO_POR_PREGUNTA_SEG;


// ========================================================================
// ==                         ESTADO DEL QUIZ                          ==
// ========================================================================
// Variables que almacenan el estado actual del cuestionario y cambian durante la ejecución.

/**
 * @type {number} indicePreguntaActual - Índice (base 0) de la pregunta que se está mostrando actualmente.
 */
let indicePreguntaActual = 0;

/**
 * @type {Array<string|null>} respuestasUsuario - Array para almacenar la respuesta del usuario para cada pregunta.
 * El índice del array corresponde al índice de la pregunta.
 * El valor puede ser: la letra de la opción ('A', 'B', 'C'), 'skipped' si fue pospuesta/omitida, o null si no se ha respondido.
 */
let respuestasUsuario = []; // Se inicializa en `iniciarCuestionario`

/**
 * @type {number|null} idIntervaloTimerPregunta - Guarda el ID del intervalo del temporizador de la pregunta actual.
 * Se usa para poder detener el timer más tarde. Null cuando no hay timer activo.
 */
let idIntervaloTimerPregunta = null;

/**
 * @type {number|null} idIntervaloTimerTotal - Guarda el ID del intervalo del temporizador total del cuestionario.
 * Se usa para poder detener el timer más tarde. Null cuando no hay timer activo.
 */
let idIntervaloTimerTotal = null;

/**
 * @type {number} tiempoRestantePregunta - Segundos restantes en el temporizador de la pregunta actual.
 */
let tiempoRestantePregunta = TIEMPO_POR_PREGUNTA_SEG; // Se actualiza por el timer

/**
 * @type {number} tiempoRestanteTotal - Segundos restantes en el temporizador total del cuestionario.
 */
let tiempoRestanteTotal = TIEMPO_TOTAL_ESTIMADO_SEG; // Se actualiza por el timer

/**
 * @type {number|null} tiempoInicioQuiz - Timestamp (en milisegundos) en el que se inició el cuestionario.
 * Se usa para calcular el tiempo transcurrido para el timer total. Null antes de iniciar.
 */
let tiempoInicioQuiz = null;

/**
 * @type {boolean} quizActivo - Bandera que indica si el cuestionario está actualmente en progreso.
 * Se usa para controlar la lógica de los timers y la interacción.
 */
let quizActivo = false;

/**
 * @type {boolean} revisandoPospuestas - Bandera que indica si el usuario está actualmente en el modo de revisión de preguntas pospuestas.
 */
let revisandoPospuestas = false;

/**
 * @type {Array<number>} indicesPospuestas - Array que almacena los índices (base 0) de las preguntas que fueron pospuestas o no respondidas al intentar finalizar.
 */
let indicesPospuestas = []; // Se llena al intentar finalizar

/**
 * @type {number} indiceActualPospuesta - Índice (base 0) dentro del array `indicesPospuestas` que indica qué pregunta pospuesta se está revisando actualmente.
 */
let indiceActualPospuesta = 0; // Se usa en el modo revisión

/**
 * @type {Chart|null} graficoResultados - Instancia del objeto Chart.js creado para mostrar la infografía de resultados.
 * Se guarda la referencia para poder destruirla y recrearla si es necesario (ej. al reiniciar). Null si no hay gráfico activo.
 */
let graficoResultados = null;
let estaPausado = false;

// ========================================================================
// ==                        REFERENCIAS AL DOM                        ==
// ========================================================================
// Variables que almacenarán referencias a los elementos HTML con los que interactuamos.
// Se asignan cuando el DOM está cargado (`iniciarAplicacion`).

let pantallaBienvenida, btnEmpezar, contenedorQuiz, contNavegacion, contPregunta, barraProgreso, textoProgreso, labelTextoProgreso, contResultados, btnSiguiente, btnPosponer, btnFinalizar, contBotonesQuiz, btnFinalizarAnticipado, displayTimerPregunta, displayTimerTotal, canvasGrafico, contGrafico, elementoHeader;

// Referencias a elementos del modal personalizado
let modalPersonalizado, tituloModal, mensajeModal, btnConfirmarModal, btnCancelarModal, btnOkModal;

// Variable para guardar el elemento que tenía el foco antes de abrir el modal (para accesibilidad)
let elementoEnfocadoAntesModal = null;

// ========================================================================
// ==                       CALLBACKS DEL MODAL                        ==
// ========================================================================
// Variables para almacenar temporalmente las funciones que se deben ejecutar
// cuando el usuario confirma o cancela en un modal. (Aunque la implementación actual
// usa closures directamente en `mostrarModal`, mantener estas variables comentadas
// puede servir como recordatorio si se quisiera cambiar la estrategia).

// let callbackConfirmacion = null; // Ya no se usa de esta forma
// let callbackAlerta = null;       // Ya no se usa de esta forma

// ========================================================================
// ==                    INICIALIZACIÓN DE LA APLICACIÓN                   ==
// ========================================================================

/**
 * Se ejecuta cuando el DOM (Document Object Model) está completamente cargado y listo.
 * Es el punto de entrada principal de la aplicación.
 */
document.addEventListener('DOMContentLoaded', iniciarAplicacion);

/**
 * Función principal que inicia la aplicación:
 * 1. Intenta obtener y almacenar las referencias a los elementos DOM.
 * 2. Configura la pantalla de bienvenida inicial.
 * 3. Configura listeners de eventos globales (como atajos de teclado).
 */
function iniciarAplicacion() {
    console.log("DOM Cargado - Iniciando Aplicación V4.1");
    // Intentar cachear elementos DOM y verificar si los críticos están presentes
    if (!cachearElementosDOM()) {
        console.error("Fallo al cachear elementos DOM críticos. La aplicación no puede iniciar.");
        return; // Detener la ejecución si faltan elementos esenciales
    }
    console.log("Elementos DOM cacheados.");

    // Configurar la interfaz inicial en la pantalla de bienvenida
    configurarPantallaBienvenida();

    // Configurar listeners de eventos que deben estar activos a nivel global (ej. teclado Escape en modal)
    // Esto se hace una sola vez al inicio.
    configurarListenersGlobales();
    console.log("Aplicación inicializada. Esperando clic en Empezar.");
}

/**
 * Obtiene referencias a los elementos HTML clave mediante su ID o selector.
 * Almacena estas referencias en variables globales.
 * Realiza una validación básica para asegurar que los elementos críticos existen.
 * @returns {boolean} True si los elementos críticos se encontraron, False en caso contrario.
 */
function cachearElementosDOM() {
    console.log("Cacheando elementos DOM...");
    // Asignación de referencias a variables
    pantallaBienvenida = document.getElementById('welcome-screen');
    btnEmpezar = document.getElementById('btn-start');
    contenedorQuiz = document.querySelector('.quiz-wrapper'); // Usa querySelector para una clase
    contNavegacion = document.getElementById('question-nav');
    contPregunta = document.getElementById('quiz-container');
    barraProgreso = document.getElementById('progress-bar');
    textoProgreso = document.getElementById('progress-text');
    // Obtener el span específico si existe, o usar textoProgreso si es solo un nodo de texto
    labelTextoProgreso = document.getElementById('progress-text-label');
    contResultados = document.getElementById('results-container');
    btnSiguiente = document.getElementById('btn-next');
    btnPosponer = document.getElementById('btn-skip');
    btnFinalizar = document.getElementById('btn-submit');
    contBotonesQuiz = document.getElementById('quiz-buttons');
    btnFinalizarAnticipado = document.getElementById('btn-early-finish');
    // Usar querySelector para elementos dentro de otros, o combinaciones
    displayTimerPregunta = document.querySelector('#question-timer .time');
    displayTimerTotal = document.querySelector('#total-timer .time');
    canvasGrafico = document.getElementById('infographic-chart');
    contGrafico = document.querySelector('.chart-container');
    elementoHeader = document.querySelector('.main header#quiz-header');

    // Cacheo de elementos del modal
    modalPersonalizado = document.getElementById('custom-modal');
    tituloModal = document.getElementById('modal-title');
    mensajeModal = document.getElementById('modal-message');
    btnConfirmarModal = document.getElementById('modal-btn-confirm');
    btnCancelarModal = document.getElementById('modal-btn-cancel');
    btnOkModal = document.getElementById('modal-btn-ok');

    // Validar que los elementos DOM *esenciales* para el funcionamiento existan.
    // Si falta alguno, la aplicación probablemente no funcionará.
    const elementosCriticos = {
        pantallaBienvenida, btnEmpezar, contenedorQuiz, contPregunta,
        contResultados, modalPersonalizado, btnConfirmarModal, btnCancelarModal, btnOkModal,
        btnFinalizar // btnFinalizar es crucial para terminar el quiz
    };

    for (const key in elementosCriticos) {
        if (!elementosCriticos[key]) {
            console.error(`Error Crítico: Falta el elemento DOM "${key}" con ID o selector "${key === 'contenedorQuiz' ? '.quiz-wrapper' : key === 'elementoHeader' ? '.main header#quiz-header' : key === 'displayTimerPregunta' ? '#question-timer .time' : key === 'displayTimerTotal' ? '#total-timer .time' : key === 'contGrafico' ? '.chart-container' : '#' + key}".`);
            // Mostrar un mensaje de error visible para el usuario si falta un elemento crítico
            document.body.innerHTML = `<p style="color:red; font-size: 18px; padding: 20px; text-align: center;">Error al cargar la interfaz del cuestionario.<br>Falta un componente esencial (${key}).<br>Por favor, contacta al administrador del sitio.</p>`;
            return false; // Indica que el cacheo falló
        }
    }
    console.log("Elementos DOM cacheados exitosamente.");
    return true; // Indica que el cacheo fue exitoso
}

/**
 * Configura el estado inicial de la pantalla de bienvenida:
 * - Detiene timers si estuvieran corriendo (limpieza).
 * - Asegura que el quiz esté marcado como inactivo.
 * - Controla la visibilidad de los contenedores principales (bienvenida visible, quiz oculto).
 * - Llena la información del quiz (número de preguntas, tiempos) en la interfaz de bienvenida.
 * - Re-aplica la animación de entrada si es necesario.
 * - Asigna el evento click al botón "EMPEZAR".
 */
function configurarPantallaBienvenida() {
    console.log("Configurando Pantalla Bienvenida...");
    // Detener cualquier timer activo si se regresa a la bienvenida
    detenerTimers();
    quizActivo = false; // Asegurar estado inactivo

    // --- Control de Visibilidad ---
    // Mostrar la pantalla de bienvenida
    if (pantallaBienvenida) pantallaBienvenida.classList.remove('hidden');

    // Ocultar todos los elementos que pertenecen al quiz activo o resultados
    if (contenedorQuiz) {
        contenedorQuiz.classList.remove('visible'); // Remover clase de transición
        contenedorQuiz.style.display = 'none';     // Ocultar completamente
    }
    // Asegurar que las secciones internas del quiz y resultados estén ocultas también
    if (contResultados) contResultados.style.display = 'none';
    if (elementoHeader) elementoHeader.style.display = ''; // Mostrar si estaba oculto por resultados
    if (contPregunta) contPregunta.style.display = 'flex'; // Mostrar si estaba oculto por resultados (display por defecto)
    if (contBotonesQuiz) contBotonesQuiz.style.display = 'flex'; // Mostrar si estaba oculto
    const linkFinalizarAnt = document.getElementById('early-finish-container');
    if (linkFinalizarAnt) linkFinalizarAnt.style.display = 'block'; // Mostrar si estaba oculto

    // --- Llenar Información del Quiz en la Bienvenida ---
    const elTotalPreguntas = document.getElementById('total-questions-info');
    const elTiempoPorPregunta = document.getElementById('time-per-question-info');
    const elTiempoTotal = document.getElementById('total-time-info');

    // Asegurarse de que los elementos existan antes de intentar modificar su textContent
    if (elTotalPreguntas) elTotalPreguntas.textContent = TOTAL_PREGUNTAS;
    if (elTiempoPorPregunta) elTiempoPorPregunta.textContent = TIEMPO_POR_PREGUNTA_SEG;
    // Calcular y mostrar el tiempo total estimado en minutos (redondeado hacia arriba)
    if (elTiempoTotal) elTiempoTotal.textContent = Math.ceil(TIEMPO_TOTAL_ESTIMADO_SEG / 60);

    // --- Animación de Entrada (Opcional, si el diseño lo usa) ---
    // Volver a aplicar la animación si el usuario regresa a la bienvenida
    const contenidoBienvenida = pantallaBienvenida?.querySelector('.welcome-content');
    if (contenidoBienvenida) {
        // Reiniciar animación: remover, forzar reflow, añadir de nuevo con un pequeño timeout
        contenidoBienvenida.style.animation = 'none';
        void contenidoBienvenida.offsetWidth; // Truco para forzar reflow (el navegador recalcula el layout)
        setTimeout(() => {
             contenidoBienvenida.style.animation = ''; // Volver a aplicar la animación definida en CSS
        }, 10); // Pequeño delay para asegurar que el navegador registre el cambio
    }

    // --- Asignar Evento al Botón Empezar ---
    // Asignar el manejador de eventos al botón de inicio.
    // Se verifica si ya tiene un manejador `onclick` para evitar duplicados si la función se llama varias veces.
    if (btnEmpezar && !btnEmpezar.onclick) {
        btnEmpezar.onclick = iniciarCuestionario; // Cuando se haga clic, llamar a iniciarCuestionario
        console.log("Evento click asignado a btnEmpezar.");
    }
    console.log("Pantalla Bienvenida configurada y lista.");
}

/**
 * Inicia el ciclo de vida del cuestionario:
 * 1. Oculta la pantalla de bienvenida.
 * 2. Muestra el contenedor principal del quiz.
 * 3. Inicializa el estado interno del quiz (respuestas, índices, etc.).
 * 4. Marca el quiz como activo.
 * 5. Renderiza la interfaz del quiz (navegación, primera pregunta).
 * 6. Inicia los temporizadores.
 * 7. Asigna los eventos de click a los botones de control del quiz.
 */
function iniciarCuestionario() {
    console.log("Iniciando Cuestionario...");
    // Verificación básica de que los contenedores principales existan antes de manipularlos
    if (!pantallaBienvenida || !contenedorQuiz) {
        console.error("Error al iniciar: Falta la pantalla de bienvenida o el contenedor del quiz.");
        return;
    }

    // --- Control de Visibilidad ---
    pantallaBienvenida.classList.add('hidden'); // Ocultar la pantalla de bienvenida
    contenedorQuiz.style.display = 'flex';    // Mostrar el contenedor principal del quiz usando flexbox
    void contenedorQuiz.offsetWidth;          // Forzar reflow para que la transición de opacidad funcione
    contenedorQuiz.classList.add('visible'); // Añadir clase para activar la transición de opacidad definida en CSS

    // --- Inicializar Estado ---
    inicializarEstadoQuiz(); // Resetear todas las variables de estado y limpiar UI previa
    quizActivo = true;       // Marcar la aplicación como activa en el modo quiz

    // --- Cargar Interfaz del Quiz ---
    crearNavegacion();        // Generar los botones de navegación lateral
    mostrarPregunta(indicePreguntaActual); // Mostrar la primera pregunta (índice 0)
    actualizarProgreso();     // Inicializar la barra de progreso y el texto
    verificarUltimaPregunta(); // Asegurar que los botones Siguiente/Finalizar estén correctos para la primera pregunta

    // --- Iniciar Mecanismos ---
    iniciarTimers();         // Poner en marcha los contadores de tiempo
    asignarEventosQuiz();    // Conectar las funciones a los botones "Siguiente", "Posponer", "Finalizar", etc.

    console.log("Cuestionario iniciado exitosamente.");
    // Opcional: Enfocar el contenedor principal o la primera pregunta para mejorar la accesibilidad
    // if (contPregunta) setTimeout(() => contPregunta.focus({ preventScroll: true }), 600); // Esperar que la transición termine
}

/**
 * Reinicia todas las variables de estado del quiz a sus valores iniciales.
 * Limpia elementos de la interfaz que pueden contener datos de una ejecución anterior.
 * Esta función se llama al iniciar un nuevo cuestionario.
 */
function inicializarEstadoQuiz() {
    console.log("Reiniciando estado del quiz...");
    // Asegurarse de que no haya timers corriendo antes de reiniciar
    detenerTimers();

    // Resetear variables de estado principales
    indicePreguntaActual = 0;
    // Crear un array nuevo para respuestas, lleno de `null` (sin responder)
    respuestasUsuario = Array(TOTAL_PREGUNTAS).fill(null);
    revisandoPospuestas = false; // No estamos en modo revisión al inicio
    indicesPospuestas = [];     // Limpiar lista de pospuestas
    indiceActualPospuesta = 0; // Resetear índice de revisión
    quizActivo = false;         // Se establecerá a true en iniciarCuestionario()

    // --- Limpiar UI de ejecuciones previas ---
    // Destruir la instancia de Chart.js si existe para liberar recursos
    if (graficoResultados instanceof Chart) {
        console.log("Destruyendo instancia previa de Chart.js.");
        graficoResultados.destroy();
        graficoResultados = null; // Limpiar la referencia
    }

    // Limpiar el contenido de los contenedores principales del quiz y resultados
    if (contPregunta) contPregunta.innerHTML = '';
    if (contNavegacion) contNavegacion.innerHTML = '';

    // Limpiar la lista detallada de resultados si ya contenía algo
    const listaDetallada = document.getElementById('detailed-results-list');
    if (listaDetallada) listaDetallada.innerHTML = '';

    // Resetear la barra de progreso visualmente
    if (barraProgreso) barraProgreso.style.width = '0%';

    // Resetear el texto de progreso
    if (textoProgreso && labelTextoProgreso) {
        labelTextoProgreso.textContent = `Progreso (0%):`; // Resetear el label fijo
        // Asegurarse de que el nodo de texto que contiene los números se actualice
        const nodoTexto = Array.from(textoProgreso.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if(nodoTexto) nodoTexto.nodeValue = ` 0 Resp / 0 Posp`; // Resetear el conteo numérico
    }

    // Asegurar que la sección de resultados y el gráfico estén ocultos
    if (contResultados) contResultados.style.display = 'none';
    if (contGrafico) contGrafico.style.display = 'none';

    // Asegurar que los elementos principales del quiz estén visibles (si se ocultaron para mostrar resultados)
    if (elementoHeader) elementoHeader.style.display = '';
    if (contPregunta) contPregunta.style.display = 'flex'; // Usar el display por defecto necesario
    if (contBotonesQuiz) contBotonesQuiz.style.display = 'flex';
    const linkFinAnticipado = document.getElementById('early-finish-container');
    if (linkFinAnticipado) linkFinAnticipado.style.display = 'block';

    // Resetear texto y estado del botón Finalizar
    if (btnFinalizar) {
        btnFinalizar.textContent = 'Finalizar';
        btnFinalizar.disabled = false; // Asegurar que no esté deshabilitado
    }
    // Asegurar que Siguiente y Posponer no estén ocultos al inicio
    if (btnSiguiente) btnSiguiente.classList.remove('hidden');
    if (btnPosponer) btnPosponer.classList.remove('hidden');

    console.log("Estado del quiz reiniciado.");
}
// ========================================================================
// ==                     FUNCIONES DE TEMPORIZADORES                    ==
// ========================================================================
// Funciones encargadas de iniciar, detener y actualizar los contadores de tiempo.

/**
 * Inicia los intervalos de los temporizadores (por pregunta y total).
 * Detiene cualquier timer previo antes de iniciar los nuevos.
 * Inicializa los tiempos restantes y actualiza su visualización.
 */
function iniciarTimers() {
    console.log("Iniciando timers...");
    detenerTimers(); // Asegurarse de que no haya timers duplicados corriendo

    // Registrar el momento exacto en que inician los timers
    tiempoInicioQuiz = Date.now();

    // Reinicializar los tiempos restantes a sus valores máximos
    tiempoRestantePregunta = TIEMPO_POR_PREGUNTA_SEG;
    tiempoRestanteTotal = TIEMPO_TOTAL_ESTIMADO_SEG;

    // Actualizar el texto visible de los timers con los valores iniciales
    actualizarDisplayTimer(displayTimerPregunta, tiempoRestantePregunta);
    actualizarDisplayTimer(displayTimerTotal, tiempoRestanteTotal);

    // Remover clases de estado (warning/ahead) si estuvieran presentes
    displayTimerTotal?.classList.remove('warning', 'ahead');
    displayTimerPregunta?.classList.remove('warning'. tiempoRestantePregunta<= 0);

    // Marcar el quiz como activo; esto es crucial para que los intervalos sigan corriendo
    quizActivo = true;
    // --- Timer por Pregunta ---
    // Configurar un intervalo que se ejecuta cada segundo
    idIntervaloTimerPregunta = setInterval(() => {
        if (estaPausado) {
            return; // No hacer nada si está pausado
        }   
        // Si el quiz ya no está activo (ej. se finalizó), detener este intervalo
        if (!quizActivo) {
            clearInterval(idIntervaloTimerPregunta);
            return;
        }
        // Decrementar el tiempo restante
        tiempoRestantePregunta--;
        // Actualizar el display del timer de pregunta
        actualizarDisplayTimer(displayTimerPregunta, tiempoRestantePregunta);

        // Añadir o quitar la clase 'warning' si el tiempo restante es 0 o menos
        // Esto cambia el color del timer en la UI
        displayTimerPregunta?.classList.toggle('warning', tiempoRestantePregunta <= 0);
        if (tiempoRestantePregunta > 0) {
            displayTimerPregunta?.classList.remove('warning');
            displayTimerPregunta?.classList.add('ahead'); // Verde
        } else {
            displayTimerPregunta?.classList.remove('ahead');
            displayTimerPregunta?.classList.add('warning'); // Rojo
        } 
        // Lógica opcional: si el tiempo por pregunta llega a 0, podrías auto-posponer o marcar como incorrecta
        // if (tiempoRestantePregunta <= 0) {
        //    // Implementar lógica para pasar automáticamente a la siguiente o marcar como no respondida
        //    console.log("Tiempo por pregunta agotado.");
        //    // posponerPregunta(); // O alguna otra acción
        // }

    }, 1000); // El intervalo es de 1000 milisegundos (1 segundo)

    // --- Timer Total ---
    // Configurar un intervalo que se ejecuta cada segundo
    idIntervaloTimerTotal = setInterval(() => {
        if (estaPausado) {
            return; // No hacer nada si está pausado
        }   
        // Si el quiz ya no está activo o no se registró el tiempo de inicio, detener este intervalo
        if (!quizActivo || !tiempoInicioQuiz) {
            clearInterval(idIntervaloTimerTotal);
            return;
        }

        // Calcular los segundos transcurridos desde que se inició el quiz
        const segundosTranscurridos = Math.floor((Date.now() - tiempoInicioQuiz) / 1000);

        // Calcular el tiempo restante total
        tiempoRestanteTotal = TIEMPO_TOTAL_ESTIMADO_SEG - segundosTranscurridos;

        // Actualizar el display del timer total
        actualizarDisplayTimer(displayTimerTotal, tiempoRestanteTotal);

        // --- Lógica para cambiar color del timer total según el progreso/tiempo ---
        // Asegurarse de que el elemento exista antes de modificar sus clases
        if (!displayTimerTotal) return;

        // Calcular el tiempo esperado para la pregunta actual si se llevara el ritmo ideal
        const tiempoEsperado = (indicePreguntaActual + 1) * TIEMPO_POR_PREGUNTA_SEG;

        // Remover clases de estado previas
        displayTimerTotal.classList.remove('warning', 'ahead');

        // Aplicar clase 'warning' si el tiempo total restante es <= 0 (agotado)
        if (tiempoRestanteTotal <= 0) {
            displayTimerTotal.classList.add('warning');
            // Lógica opcional: si el tiempo total llega a 0, finalizar el quiz automáticamente
             console.log("Tiempo total agotado. Finalizando cuestionario...");
             detenerTimers(); // Detener inmediatamente
             respuestasUsuario = respuestasUsuario.map(r => r === null ? 'skipped' : r); // Marcar pendientes como omitidas
             calcularYMostrarResultados(); // Proceder a mostrar resultados
             mostrarModal('alert', 'Tiempo Agotado', '¡El tiempo para completar el cuestionario ha terminado!');
             return; // Salir de la función del intervalo
        }
        // Aplicar clase 'warning' si se está significativamente por detrás del tiempo esperado para la pregunta actual
        else if (segundosTranscurridos > tiempoEsperado + 15) { // Si te has pasado por más de 15s del tiempo ideal para esta pregunta
             displayTimerTotal.classList.add('warning');
        }
        // Aplicar clase 'ahead' si se está significativamente por delante del tiempo esperado (y aún queda tiempo considerable)
        else if (segundosTranscurridos < tiempoEsperado - 15 && tiempoRestanteTotal > 60) { // Si vas rápido y aún queda más de un minuto
             displayTimerTotal.classList.add('ahead');
        }
        // Aplicar clase 'warning' cuando el tiempo total restante sea bajo (último minuto)
        else if (tiempoRestanteTotal <= 60 && tiempoRestanteTotal > 0) {
            displayTimerTotal.classList.add('warning');
        }

    }, 1000); // El intervalo es de 1000 milisegundos (1 segundo)
    console.log("Timers iniciados.");
}

/**
 * Formatea una cantidad de segundos en el formato de texto MM:SS (Minutos:Segundos).
 * Puede manejar segundos negativos si es necesario (aunque en este quiz no deberían ocurrir).
 * @param {number} segundos - El número de segundos a formatear.
 * @returns {string} La cadena de texto formateada como "MM:SS".
 */
function formatearTiempo(segundos) {
    const esNegativo = segundos < 0; // Verificar si el número es negativo
    const segAbs = Math.abs(segundos); // Trabajar con el valor absoluto
    const mins = Math.floor(segAbs / 60); // Calcular los minutos (parte entera)
    const segs = segAbs % 60; // Calcular los segundos restantes

    // Formatear minutos y segundos con ceros iniciales si son menores de 10
    const minsFormato = String(mins).padStart(2, '0');
    const segsFormato = String(segs).padStart(2, '0');

    // Retornar la cadena formateada, añadiendo el signo negativo si era necesario
    return `${esNegativo ? '-' : ''}${minsFormato}:${segsFormato}`;
}

/**
 * Actualiza el contenido de texto de un elemento HTML para mostrar un tiempo formateado.
 * Se usa para actualizar los displays de los temporizadores en la interfaz.
 * @param {HTMLElement} elemento - El elemento HTML (ej. un span) cuyo texto se va a actualizar.
 * @param {number} segundos - El número de segundos a mostrar, que será formateado.
 */
 function actualizarDisplayTimer(elemento, segundos) {
   // Verificar que el elemento exista antes de intentar modificar su textContent
   if (elemento) {
     elemento.textContent = formatearTiempo(segundos);
   } else {
     // Esto podría ser un warning si el elemento no es crítico, o un error si sí lo es
     console.warn("Intento de actualizar un elemento de timer que no fue encontrado en el DOM.");
   }
 }

/**
 * Reinicia el temporizador específico de la pregunta actual.
 * Se llama cada vez que se muestra una *nueva* pregunta (al avanzar, retroceder, o ir a una pospuesta).
 */
function reiniciarTimerPregunta() {
    console.log("Reiniciando timer de pregunta...");
    // Detener el intervalo del timer de pregunta actual
    clearInterval(idIntervaloTimerPregunta);
    idIntervaloTimerPregunta = null; // Limpiar la referencia

    // Resetear el tiempo restante de la pregunta al valor configurado
    tiempoRestantePregunta = TIEMPO_POR_PREGUNTA_SEG;

    // Actualizar el display del timer de pregunta con el nuevo tiempo
    actualizarDisplayTimer(displayTimerPregunta, tiempoRestantePregunta);

    // Remover la clase 'warning' si estaba activa
    displayTimerPregunta?.classList.remove('warning');

    // Si el quiz está activo, iniciar un nuevo intervalo para el timer de pregunta
    // Esto evita que el timer de pregunta corra si el quiz ha finalizado
    if (quizActivo) {
        idIntervaloTimerPregunta = setInterval(() => {
            // Si el quiz deja de estar activo mientras el intervalo corre, detenerse
            if (estaPausado) {
                return; // No hacer nada si está pausado
            }
            if (!quizActivo) {
                clearInterval(idIntervaloTimerPregunta);
                return;
            }
            tiempoRestantePregunta--;
            actualizarDisplayTimer(displayTimerPregunta, tiempoRestantePregunta);
            // Alternar la clase 'warning' si el tiempo llega a 0 o menos
            displayTimerPregunta?.classList.toggle('warning', tiempoRestantePregunta <= 0);

            // Lógica opcional de tiempo agotado por pregunta (puede duplicar la del timer total si ya la manejas ahí)
            // if (tiempoRestantePregunta <= 0) {
            //    console.log("Tiempo por pregunta agotado. Pasando a la siguiente...");
            //    // Considerar si quieres guardar 'skipped' aquí o simplemente avanzar
            //    // posponerPregunta(); // Esto guarda como skipped y avanza
            // }
        }, 1000); // Intervalo cada segundo
    }
    console.log("Timer de pregunta reiniciado.");
}

/**
 * Detiene ambos temporizadores (pregunta y total) limpiando sus intervalos.
 * Marca la bandera `quizActivo` como false.
 * Se llama al finalizar el cuestionario (normal o anticipadamente) o al regresar a la bienvenida.
 */
function detenerTimers() {
    console.log("Deteniendo timers...");
    quizActivo = false; // Marcar el quiz como inactivo

    // Limpiar el intervalo del timer de pregunta si está activo
    if (idIntervaloTimerPregunta !== null) {
        clearInterval(idIntervaloTimerPregunta);
        idIntervaloTimerPregunta = null; // Limpiar la referencia
    }

    // Limpiar el intervalo del timer total si está activo
    if (idIntervaloTimerTotal !== null) {
        clearInterval(idIntervaloTimerTotal);
        idIntervaloTimerTotal = null; // Limpiar la referencia
    }
    console.log("Timers detenidos.");
}
// ========================================================================
// ==                     FUNCIONES DE PAUSA/REANUDAR                    ==
// ========================================================================

/**
 * Alterna el estado de pausa del cuestionario.
 * Muestra/oculta el overlay de pausa, cambia el icono del botón y aplica/quita el desenfoque.
 */
function togglePause() {
    // Asegúrate de que las constantes btnPausaReanudar, superposicionPausa, etc.,
    // estén definidas globalmente o accesibles aquí.
    if (!btnPausaReanudar || !superposicionPausa || !btnReanudarDesdeSuperposicion) {
        console.warn("[togglePause] Faltan elementos del DOM para la pausa.");
        return;
    }

    estaPausado = !estaPausado; // Esto usa la variable global
    console.log(`[togglePause] Cuestionario ${estaPausado ? 'PAUSADO' : 'REANUDADO'}`);

    const quizWrapper = document.querySelector('.quiz-wrapper');
    if (estaPausado) {
        superposicionPausa.classList.add('active');
        superposicionPausa.setAttribute('aria-hidden', 'false');
        btnPausaReanudar.innerHTML = iconoPlaySVG; // Usa las constantes globales
        btnPausaReanudar.setAttribute('aria-label', 'Reanudar cuestionario');
        
        if (quizWrapper) quizWrapper.classList.add('blur-background');// Desactivar clics en las partes interactivas del quiz
        if (contPregunta) contPregunta.style.pointerEvents = 'none';
        if (contBotonesQuiz) contBotonesQuiz.style.pointerEvents = 'none';
        if (contNavegacion) contNavegacion.style.pointerEvents = 'none';
        else document.body.classList.add('blur-background'); // Fallback al body
        // Enfocar el botón de reanudar en el overlay para accesibilidad
        setTimeout(() => btnReanudarDesdeSuperposicion.focus(), 100); 
    } else {
        superposicionPausa.classList.remove('active');
        superposicionPausa.setAttribute('aria-hidden', 'true');
        btnPausaReanudar.innerHTML = iconoPausaSVG; // Usa las constantes globales
        btnPausaReanudar.setAttribute('aria-label', 'Pausar cuestionario');

        if (quizWrapper) quizWrapper.classList.remove('blur-background');
        // Reactivar clics en las partes interactivas del quiz
        if (contPregunta) contPregunta.style.pointerEvents = 'auto';
        if (contBotonesQuiz) contBotonesQuiz.style.pointerEvents = 'auto';
        if (contNavegacion) contNavegacion.style.pointerEvents = 'auto';
        else document.body.classList.remove('blur-background');
        // Devolver el foco al botón principal de pausa/reanudar
        setTimeout(() => btnPausaReanudar.focus(), 100); 
    }
}
// --- Event Listeners para Pausa/Reanudar ---
// Asegúrate que estos se añaden después de que el DOM esté cargado
// y las constantes (btnPausaReanudar, etc.) estén disponibles.

if (btnPausaReanudar) { // btnPausaReanudar debe ser la constante global
    btnPausaReanudar.addEventListener('click', togglePause);
} else {
    console.warn("Botón de Pausa/Reanudar no encontrado al añadir listener.");
}

if (btnReanudarDesdeSuperposicion) { // btnReanudarDesdeSuperposicion debe ser la constante global
    btnReanudarDesdeSuperposicion.addEventListener('click', togglePause);
} else {
    console.warn("Botón de Reanudar desde overlay no encontrado al añadir listener.");
}

// --- Pausa automática al perder foco o cambiar de pestaña ---
function pausarSiNoEstaPausado() {      
    if (quizActivo && !estaPausado) {

        togglePause();
        console.log('[AutoPause] El quiz se pausó automáticamente por pérdida de foco o pestaña oculta.');
    }
}

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        pausarSiNoEstaPausado();
    }
});
window.addEventListener('blur', function() {
    pausarSiNoEstaPausado();
});

document.addEventListener('keydown', (event) => {
    // superposicionPausa debe ser la constante global
    if (event.key === 'Escape' && estaPausado && superposicionPausa && superposicionPausa.classList.contains('active')) {
        console.log('[keydown] Escape presionado durante la pausa.');
        togglePause(); // Reanuda el cuestionario
    }
});
// ========================================================================
// ==                  FUNCIONES DE NAVEGACIÓN Y RENDERIZADO               ==
// ========================================================================
// Funciones para manejar la visualización de las preguntas y la navegación lateral.

/**
 * Crea dinámicamente los elementos de navegación en la barra lateral (`#question-nav`).
 * Genera un div por cada pregunta. Cada div representa un "botón" en la sidebar.
 * Asigna eventos click y keydown para navegar a la pregunta correspondiente.
 */
function crearNavegacion() {
    console.log("Creando navegación lateral...");
    // Verificar si el contenedor de navegación existe antes de modificarlo
    if (!contNavegacion) {
        console.error("Contenedor de navegación (#question-nav) no encontrado.");
        return;
    }

    contNavegacion.innerHTML = ''; // Limpiar cualquier contenido previo en la sidebar

    // Iterar sobre cada pregunta en el array PREGUNTAS
    PREGUNTAS.forEach((_, index) => {
        const itemNav = document.createElement('div'); // Crear un nuevo div para cada pregunta
        itemNav.setAttribute('role', 'button'); // Rol ARIA para indicar que es un control interactivo
        itemNav.setAttribute('tabindex', '0'); // Hacer el div enfocable con el teclado
        itemNav.dataset.number = index + 1; // Guardar el número de pregunta (base 1) como un atributo data

        // Asignar evento click: al hacer click, llamar a `irAPregunta` con el índice de la pregunta
        itemNav.onclick = () => irAPregunta(index);

        // Asignar evento keydown para accesibilidad con teclado (Enter o Espacio)
        itemNav.onkeydown = (e) => {
            // Verificar si la tecla presionada es Enter o Espacio
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevenir la acción por defecto (ej. scroll con Espacio)
                irAPregunta(index); // Navegar a la pregunta
            }
        };

        // Añadir el elemento creado a la barra lateral
        contNavegacion.appendChild(itemNav);
    });

    // Llamar a actualizarNavegacion para establecer los estilos iniciales (unanswered)
    actualizarNavegacion();
    console.log(`Navegación lateral creada para ${TOTAL_PREGUNTAS} preguntas.`);
}

/**
 * Renderiza el contenido de una pregunta específica (texto de pregunta y opciones) en el área principal del quiz.
 * Aplica efectos visuales de transición (fade-out/fade-in).
 * Asigna listeners a las opciones de respuesta.
 * Actualiza el estado de la navegación lateral y los botones.
 * @param {number} index - El índice (base 0) de la pregunta que se desea mostrar.
 */
function mostrarPregunta(index) {
    // Validar que el contenedor de preguntas exista y que el índice sea válido
    if (!contPregunta || index < 0 || index >= TOTAL_PREGUNTAS) {
        console.error(`Intento de mostrar pregunta con índice inválido: ${index}`);
        return;
    }
    console.log(`Mostrando pregunta ${index + 1}...`);

    // --- Preparar para la Transición ---
    // Remover la clase 'fade-in' si estaba presente de una transición anterior
    contPregunta.classList.remove('fade-in');
    // Añadir la clase 'fade-out' para iniciar la animación de salida
    contPregunta.classList.add('fade-out');

    // Reiniciar el temporizador de la pregunta actual cada vez que se muestra una nueva pregunta
    reiniciarTimerPregunta();

    // Usar setTimeout para dar tiempo a que la animación 'fade-out' se complete antes de cambiar el contenido HTML
    setTimeout(() => {
        try {
            const p = PREGUNTAS[index]; // Obtener los datos de la pregunta del array global

            // Validar que los datos de la pregunta sean válidos
            if (!p || !Array.isArray(p.options) || typeof p.question !== 'string' || typeof p.answer !== 'string') {
                 // Si los datos de la pregunta son incorrectos, mostrar un mensaje de error
                 throw new Error(`Datos inválidos para la pregunta con índice ${index}. Verifica el array PREGUNTAS.`);
            }

            // --- Generar HTML de las Opciones ---
            let opcionesHTML =
                `<fieldset class="options-fieldset">
                    <legend class="sr-only">Opciones pregunta ${index + 1}</legend> <ul class="options" role="radiogroup" aria-labelledby="question-text-${index}">`; // role="radiogroup" para accesibilidad

            // Iterar sobre cada opción de la pregunta actual
            p.options.forEach((opcionTexto, i) => {
                const letraOpcion = String.fromCharCode(65 + i); // Generar la letra de la opción (A, B, C...)
                const idOpcion = `q${index}_opt${i}`; // Generar un ID único para cada input y label
                // Verificar si esta opción fue la respuesta seleccionada previamente por el usuario para esta pregunta
                const estaMarcada = respuestasUsuario[index] === letraOpcion;

                opcionesHTML += `
                <li>
                    <input type="radio" id="${idOpcion}" name="answer_${index}" value="${letraOpcion}" ${estaMarcada ? 'checked' : ''} aria-labelledby="label-${idOpcion}">
                    <label id="label-${idOpcion}" for="${idOpcion}"><span class="option-letter">${letraOpcion}.</span> ${opcionTexto || ''}</label>
                </li>`;
            });
            opcionesHTML += '</ul></fieldset>'; // Cerrar las etiquetas ul y fieldset

            // --- Insertar Contenido en el DOM ---
            // Establecer el HTML interno del contenedor de preguntas con el nuevo contenido
            contPregunta.innerHTML = `
            <div class="question-container">
                <h2 class="question" id="question-text-${index}" tabindex="-1">${p.question}</h2>
                ${opcionesHTML} </div>`;

            // --- Asignar Listeners a las Opciones ---
            // Obtener todos los elementos <li> que contienen las opciones en la pregunta recién renderizada
            const itemsOpcion = contPregunta.querySelectorAll('.options li');
            itemsOpcion.forEach(item => {
                // Añadir listener para el evento 'click' a cada LI.
                // Cuando se hace click en el LI, se llama a la función `manejarClickOpcion`.
                item.addEventListener('click', manejarClickOpcion);

                // Opcional: Añadir listener de keydown a los radio buttons para manejar la tecla Espacio si es necesario
                // La navegación con flechas se maneja a nivel global en `manejarTeclaGlobal`
                const radio = item.querySelector('input[type="radio"]');
                if (radio) {
                     radio.addEventListener('keydown', e => {
                          // Prevenir la acción por defecto del navegador para la tecla Espacio
                          // si ya se va a manejar con JS o para evitar doble activación
                          if (e.key === ' ') e.preventDefault();
                     });
                }
            });

            // --- Actualizar UI ---
            actualizarNavegacion(); // Actualizar los estilos de los items en la sidebar
            verificarUltimaPregunta(); // Ajustar la visibilidad y texto de los botones (Siguiente/Finalizar)

            // --- Animación de Entrada ---
            // Remover la clase 'fade-out'
            contPregunta.classList.remove('fade-out');
            // Añadir la clase 'fade-in' para iniciar la animación de entrada
            contPregunta.classList.add('fade-in');
            // Después de un breve tiempo, remover la clase 'fade-in'
            setTimeout(() => contPregunta.classList.remove('fade-in'), 300); // La duración de la transición CSS

            // --- Gestión del Foco (Accesibilidad) ---
            // Intentar enfocar el texto de la pregunta para mejorar la navegación con teclado
            const elementoTextoPregunta = document.getElementById(`question-text-${index}`);
            if (elementoTextoPregunta) {
                 // Usar un pequeño timeout para asegurar que el elemento sea enfocable después de la transición y renderizado
                 setTimeout(() => elementoTextoPregunta.focus({ preventScroll: true }), 350); // preventScroll evita que la ventana se desplace automáticamente
            }

        } catch (error) {
             // Si ocurre algún error al mostrar la pregunta, loggearlo y mostrar un mensaje en la UI
             console.error(`Error al mostrar pregunta ${index + 1}:`, error);
             if (contPregunta) {
                 contPregunta.innerHTML = `<p style="color: red; padding: 20px;">Error al cargar esta pregunta.</p>`;
                 // Asegurarse de quitar la clase fade-out aunque haya error
                 contPregunta.classList.remove('fade-out');
             }
        }
    }, 300); // El timeout debe ser igual o mayor que la duración de la transición 'fade-out' en CSS
    console.log(`Pregunta ${index + 1} mostrada.`);
}

/**
 * Maneja el evento click en un elemento <li> de opción.
 * Encuentra el input radio dentro del LI clickeado, lo marca como seleccionado,
 * guarda la respuesta del usuario y aplica un efecto visual temporal.
 * 'this' dentro de esta función se refiere al elemento LI que fue clickeado.
 */
function manejarClickOpcion() {
    // Buscar el input radio dentro del <li> que recibió el click
    const radio = this.querySelector('input[type="radio"]');

    // Si se encontró un radio button dentro del LI
    if (radio) {
        // Verificar si este radio ya estaba marcado. Solo proceder si no lo estaba.
        if (!radio.checked) {
            radio.checked = true; // Marcar el input radio como seleccionado
            guardarRespuestaActual(); // Llamar a la función para guardar la respuesta en el estado global
        }

        // Añadir una clase temporal para un efecto visual (ej. escala, opacidad)
        this.classList.add('selected');
        // Remover la clase 'selected' después de un breve tiempo para que el efecto sea momentáneo
        setTimeout(() => this.classList.remove('selected'), 150); // Duración del efecto en ms

        // Lógica opcional: Avanzar a la siguiente pregunta automáticamente después de seleccionar una opción
        // setTimeout(() => {
        //      const esUltimaNormal = !revisandoPospuestas && indicePreguntaActual === TOTAL_PREGUNTAS - 1;
        //      const esUltimaRevision = revisandoPospuestas && indiceActualPospuesta === indicesPospuestas.length - 1;
        //      // Solo avanzar si no es la última pregunta (en flujo normal o revisión)
        //      if (!esUltimaNormal && !esUltimaRevision) {
        //           siguientePregunta();
        //      } else {
        //           // Si es la última, enfocar el botón Finalizar
        //           if(btnFinalizar) btnFinalizar.focus();
        //      }
        // }, 250); // Pequeño delay antes de avanzar
    }
}

/**
 * Guarda la respuesta seleccionada actualmente para la pregunta en el array `respuestasUsuario`.
 * Se llama cuando el usuario selecciona una opción.
 * Actualiza la navegación lateral y el indicador de progreso.
 */
function guardarRespuestaActual() {
    // Validar que el contenedor de preguntas exista y el índice actual sea válido
    if (!contPregunta || indicePreguntaActual < 0 || indicePreguntaActual >= TOTAL_PREGUNTAS) {
        console.warn("Intento de guardar respuesta en un estado inválido.");
        return;
    }

    // Buscar el input radio que esté 'checked' dentro del contenedor de la pregunta actual
    const inputSeleccionado = contPregunta.querySelector(`input[name="answer_${indicePreguntaActual}"]:checked`);

    // Determinar el valor de la respuesta: la letra de la opción si hay una seleccionada, o null si no
    const nuevoValor = inputSeleccionado ? inputSeleccionado.value : null;
    const valorAnterior = respuestasUsuario[indicePreguntaActual]; // Obtener el valor que estaba guardado antes

    // Solo actualizar y ejecutar lógica adicional si se seleccionó una opción Y es diferente de la respuesta guardada previamente
    if (nuevoValor && nuevoValor !== valorAnterior) {
        respuestasUsuario[indicePreguntaActual] = nuevoValor; // Actualizar el array de respuestas
        console.log(`Respuesta guardada para P${indicePreguntaActual + 1}: ${nuevoValor}`);

        // Actualizar la interfaz para reflejar el cambio:
        actualizarNavegacion(); // Cambiar el color del item en la sidebar
        actualizarProgreso(); // Recalcular y actualizar la barra/texto de progreso
    }
    // Nota: Si el usuario deselecciona una opción (lo cual no es posible con radio buttons a menos que se resetee programáticamente)
    // o selecciona la misma opción, la respuesta no cambia, y la lógica dentro de este `if` no se ejecuta.
}


/**
 * Avanza a la siguiente pregunta en el flujo actual (normal o revisión).
 * Guarda la respuesta actual antes de avanzar.
 * Si está en modo revisión y hay más preguntas pospuestas, va a la siguiente pospuesta.
 * Si termina la revisión o el flujo normal, ajusta los botones.
 */
function siguientePregunta() {
    console.log("Siguiente Pregunta solicitada.");
    // Asegurarse de guardar la respuesta actual antes de pasar a la siguiente pregunta
    guardarRespuestaActual();

    // --- Lógica de Navegación ---
    if (revisandoPospuestas) {
        // Si estamos revisando preguntas pospuestas:
        indiceActualPospuesta++; // Avanzar al siguiente índice en el array de pospuestas
        // Verificar si aún hay preguntas pospuestas por revisar
        if (indiceActualPospuesta < indicesPospuestas.length) {
            // Si hay más, ir a la pregunta correspondiente usando el índice del array `indicesPospuestas`
            irAPregunta(indicesPospuestas[indiceActualPospuesta]);
        } else {
            // Si no hay más preguntas en la lista de pospuestas: Fin de la revisión
            console.log("Fin de la revisión de preguntas pospuestas.");
            revisandoPospuestas = false; // Salir del modo revisión
            if (btnFinalizar) btnFinalizar.textContent = 'Finalizar'; // Restaurar texto del botón Finalizar
            verificarUltimaPregunta(); // Actualizar visibilidad de botones (Siguiente/Posponer/Finalizar)
            // Opcional: Volver a mostrar la última pregunta del flujo normal (si aplica) o quedarse en la que estaba
            // irAPregunta(indicePreguntaActual); // Esto podría ser confuso, la implementación actual se queda donde terminó la revisión.

            // Mostrar un modal informativo indicando que la revisión ha terminado
            mostrarModal('alert', 'Revisión Completa', "Has revisado todas las preguntas pospuestas.\nPuedes finalizar el cuestionario o navegar a otras preguntas.");
            // Asegurarse de que el foco esté en un lugar lógico después del modal, ej. el botón Finalizar
            if (btnFinalizar) btnFinalizar.focus();
        }
    } else {
        // Si no estamos revisando pospuestas (flujo normal):
        // Verificar si aún hay preguntas restantes en el flujo normal
        if (indicePreguntaActual < TOTAL_PREGUNTAS - 1) {
            // Si no es la última pregunta, avanzar al siguiente índice
            indicePreguntaActual++;
            mostrarPregunta(indicePreguntaActual); // Mostrar la nueva pregunta
        } else {
            // Si es la última pregunta del flujo normal, no hay siguiente
            console.log("Ya estás en la última pregunta.");
            // Asegurarse de que el botón Finalizar reciba el foco para indicar el siguiente paso
            if (btnFinalizar) btnFinalizar.focus();
        }
    }
}

/**
 * Marca la pregunta actual como 'skipped' (pospuesta) en el array `respuestasUsuario` y avanza a la siguiente pregunta en el flujo normal.
 * Solo funciona si no se está en modo revisión.
 */
function posponerPregunta() {
    // Esta acción solo es relevante en el flujo normal, no durante la revisión de pospuestas.
    if (revisandoPospuestas) {
        console.log("Intentando posponer pregunta durante la revisión. Acción ignorada.");
        return; // Salir si estamos revisando pospuestas
    }
    // Validar que el índice actual sea válido
    if (indicePreguntaActual < 0 || indicePreguntaActual >= TOTAL_PREGUNTAS) {
         console.warn("Intento de posponer pregunta con índice inválido.");
         return;
    }

    console.log(`Pospuesta pregunta ${indicePreguntaActual + 1}.`);
    // Marcar la respuesta de la pregunta actual como 'skipped'
    respuestasUsuario[indicePreguntaActual] = 'skipped';

    // Actualizar la interfaz:
    actualizarNavegacion(); // Cambiar el estilo del item en la sidebar a pospuesta
    actualizarProgreso(); // Actualizar el conteo de preguntas pospuestas en el texto de progreso

    // --- Navegar a la siguiente pregunta en el flujo normal ---
    // Verificar si hay una siguiente pregunta en el flujo normal
    if (indicePreguntaActual < TOTAL_PREGUNTAS - 1) {
        indicePreguntaActual++; // Avanzar al siguiente índice
        mostrarPregunta(indicePreguntaActual); // Mostrar la nueva pregunta
    } else {
        // Si es la última pregunta del flujo normal, no hay siguiente, solo queda finalizar
        console.log("Pospuesta la última pregunta normal. Queda finalizar.");
        verificarUltimaPregunta(); // Asegurar que el botón Siguiente esté oculto y Finalizar visible
        if (btnFinalizar) btnFinalizar.focus(); // Enfocar botón Finalizar
    }
}

/**
 * Navega a una pregunta específica haciendo clic en su item en la barra lateral o usando teclado.
 * Guarda la respuesta actual antes de cambiar de pregunta.
 * Ajusta el estado del modo revisión si se navega fuera de la secuencia de pospuestas.
 * @param {number} index - El índice (base 0) de la pregunta a la que se desea ir.
 */
 function irAPregunta(index) {
    // Validar: quiz activo, índice válido, y no intentar ir a la pregunta actual (evita recargar innecesariamente)
    if (!quizActivo || index < 0 || index >= TOTAL_PREGUNTAS || index === indicePreguntaActual) {
        if (index === indicePreguntaActual) console.log(`Ya estás en la pregunta ${index + 1}.`);
        else console.warn(`Intento de navegar a pregunta inválida o con quiz inactivo: ${index + 1}`);
        return;
    }
    console.log(`Navegando a pregunta ${index + 1}...`);

    // Guardar la respuesta seleccionada en la pregunta actual ANTES de cambiar de pregunta
    guardarRespuestaActual();

    // --- Lógica relacionada con el Modo Revisión ---
    // Si estábamos revisando preguntas pospuestas Y la pregunta a la que vamos NO está en la lista de pospuestas
    if (revisandoPospuestas && !indicesPospuestas.includes(index)) {
        console.log("Saliendo del modo revisión al navegar a una pregunta no pospuesta.");
        revisandoPospuestas = false; // Salir del modo revisión
        if (btnFinalizar) btnFinalizar.textContent = 'Finalizar'; // Restaurar texto del botón Finalizar
        // No ajustar `indiceActualPospuesta` aquí, ya que hemos salido de ese flujo
    }

    // Si estamos en modo revisión, pero la pregunta a la que vamos SÍ está en la lista de pospuestas
    if (revisandoPospuestas) {
         // Buscar el índice de la pregunta dentro del array de `indicesPospuestas`
         const indiceEnRevision = indicesPospuestas.indexOf(index);
         if (indiceEnRevision !== -1) {
              // Si se encuentra, actualizar `indiceActualPospuesta` para seguir la secuencia desde aquí
              indiceActualPospuesta = indiceEnRevision;
              console.log(`Actualizado índice de revisión a ${indiceActualPospuesta + 1} dentro de las pospuestas.`);
         } else {
              // Esto no debería ocurrir si la lógica anterior es correcta, pero como seguridad:
              console.warn("Error lógico: Revisando pospuestas pero navegando a índice no encontrado en indicesPospuestas. Saliendo de revisión.");
              revisandoPospuestas = false;
              if(btnFinalizar) btnFinalizar.textContent = 'Finalizar';
         }
    }

    // --- Mostrar la Nueva Pregunta ---
    indicePreguntaActual = index; // Actualizar el índice de la pregunta actual
    mostrarPregunta(indicePreguntaActual); // Renderizar la pregunta correspondiente

    // --- Actualizar UI ---
    // verificarUltimaPregunta(); // No es estrictamente necesario aquí si `mostrarPregunta` ya lo llama, pero puede ser redundante seguro. `mostrarPregunta` ya lo hace.
 }

/**
 * Actualiza las clases CSS y atributos ARIA de los elementos de navegación lateral (`#question-nav div`).
 * Esto cambia su color y apariencia según el estado de la respuesta (respondida, pospuesta, sin responder, activa).
 * También se usa para mostrar el estado final (correcto, incorrecto) en la pantalla de resultados.
 * @param {boolean} [esResultadoFinal=false] - Indica si la actualización es para mostrar resultados finales.
 * @param {object|null} [datosResultados=null] - Objeto con los datos de resultados si `esResultadoFinal` es true.
 */
function actualizarNavegacion(esResultadoFinal = false, datosResultados = null) {
    // Verificar si el contenedor de navegación existe
    if (!contNavegacion) {
        console.warn("Contenedor de navegación (#question-nav) no encontrado para actualizar.");
        return;
    }
    // Seleccionar todos los divs dentro de la sidebar
    const itemsNav = contNavegacion.querySelectorAll('div');

    // Iterar sobre cada elemento de navegación (div)
    itemsNav.forEach((itemNav, index) => {
        itemNav.className = ''; // Limpiar todas las clases de estado CSS previas
        itemNav.dataset.number = index + 1; // Asegurar que el atributo data-number esté correcto

        let sufijoAria = ''; // Sufijo para el atributo aria-label
        let clasesEstado = []; // Array para acumular las clases CSS de estado

        // --- Lógica para Resultados Finales ---
        if (esResultadoFinal && datosResultados?.details?.[index]) {
            // Si estamos mostrando resultados finales y hay datos para esta pregunta
            const estadoResultado = datosResultados.details[index].status || 'skipped'; // Obtener el estado (correct, incorrect, skipped)
            clasesEstado.push(`result-${estadoResultado}`); // Añadir clase CSS específica para resultados

            // Ajustar atributos para la vista de resultados:
            sufijoAria = `: ${estadoResultado}`; // Actualizar aria-label con el estado final
            // Deshabilitar la navegación haciendo click o teclado en la vista de resultados
            itemNav.onclick = null;
            itemNav.onkeydown = null;
            itemNav.removeAttribute('tabindex'); // Eliminar tabindex para que no sea enfocable

        }
        // --- Lógica para el Quiz Activo ---
        else if (quizActivo) {
            // Si el quiz está activo (no en resultados finales)
            const respuesta = respuestasUsuario[index]; // Obtener la respuesta guardada para esta pregunta

            // Determinar las clases de estado y el sufijo ARIA basado en la respuesta
            if (respuesta === 'skipped') {
                clasesEstado.push('skipped');
                sufijoAria = ' (pospuesta)';
            } else if (respuesta !== null) { // Si hay alguna respuesta guardada (no null)
                clasesEstado.push('answered');
                sufijoAria = ' (respondida)';
            } else { // Si la respuesta es null (sin responder)
                clasesEstado.push('unanswered');
            }

            // Añadir la clase 'active' si este item corresponde a la pregunta que se está mostrando actualmente
            if (index === indicePreguntaActual) {
                clasesEstado.push('active');
            }

            // Asegurarse de que los eventos de navegación estén asignados (importante si se limpiaron con className='')
            // Asignar evento click para ir a la pregunta
            itemNav.onclick = () => irAPregunta(index);
            // Asignar evento keydown para navegación con teclado
            itemNav.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    irAPregunta(index);
                }
            };
            itemNav.setAttribute('tabindex', '0'); // Asegurar que sea enfocable

        } else {
             // Si el quiz no está activo y no estamos en resultados finales (ej. en la pantalla de bienvenida después de un quiz)
             // Podríamos querer asegurar que no tengan clases de estado de quiz activo o eventos de navegación
             clasesEstado.push('unanswered'); // O un estado neutro si tienes uno
             sufijoAria = '';
             itemNav.onclick = null; // Desactivar click
             itemNav.onkeydown = null; // Desactivar teclado
             itemNav.removeAttribute('tabindex'); // No enfocable
        }

        // --- Aplicar Clases y Atributos ---
        // Si hay clases de estado para aplicar, añadirlas al elemento
        if (clasesEstado.length > 0) {
            itemNav.classList.add(...clasesEstado); // Usa spread operator para añadir múltiples clases
        }

        // Actualizar el atributo aria-label para accesibilidad
        itemNav.setAttribute('aria-label', `Pregunta ${index + 1}${sufijoAria}`);
    });
    console.log("Navegación lateral actualizada.");
}

/**
 * Actualiza visualmente la barra de progreso y el texto que muestra el progreso numérico.
 * Calcula el número de preguntas respondidas y pospuestas.
 */
function actualizarProgreso() {
    // Solo actualizar si el quiz está activo y el contenedor de navegación existe (indica que el quiz está renderizado)
    if (!quizActivo || !contNavegacion) {
         console.log("No se actualiza progreso: Quiz inactivo o navegación no renderizada.");
         return;
    }
    console.log("Actualizando progreso...");

    // Contar preguntas respondidas (valor no null y no 'skipped')
    const respondidas = respuestasUsuario.filter(r => r !== null && r !== 'skipped').length;
    // Contar preguntas pospuestas/omitidas ('skipped')
    const pospuestas = respuestasUsuario.filter(r => r === 'skipped').length;
    // El total de preguntas 'completadas' (respondidas + pospuestas)
    const completadas = respondidas + pospuestas;

    // Calcular el porcentaje de progreso (basado en 'completadas' sobre el total)
    // Evitar división por cero si no hay preguntas
    const porcentaje = TOTAL_PREGUNTAS > 0 ? Math.round((completadas / TOTAL_PREGUNTAS) * 100) : 0;

    // --- Actualizar la Barra de Progreso Visual ---
    // Verificar si el elemento de la barra de progreso existe antes de modificar su estilo
    if (barraProgreso) {
        barraProgreso.style.width = `${porcentaje}%`; // Establecer el ancho de la barra
    } else {
        console.warn("Elemento 'barraProgreso' no encontrado.");
    }

    // --- Actualizar el Texto de Progreso ---
    // Verificar si el contenedor de texto de progreso y su label existen
    if (textoProgreso && labelTextoProgreso) {
        // Actualizar el texto del label con el porcentaje
        labelTextoProgreso.textContent = `Progreso (${porcentaje}%):`;

        // Encontrar el nodo de texto dentro del contenedor que muestra el conteo numérico
        // Se usa `Array.from(textoProgreso.childNodes)` porque textContent afectaría todo el contenido,
        // incluyendo el span del label. Buscamos el nodo de tipo texto.
        const nodoTexto = Array.from(textoProgreso.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if(nodoTexto) {
            // Actualizar el contenido del nodo de texto con el conteo de respondidas y pospuestas
            nodoTexto.nodeValue = ` ${respondidas} Resp / ${pospuestas} Posp`;
        } else {
            console.warn("Nodo de texto numérico de progreso no encontrado.");
            // Fallback: si no se encuentra el nodo exacto, poner todo en el contenedor principal (menos ideal)
            // textoProgreso.textContent = `Progreso (${porcentaje}%): ${respondidas} Resp / ${pospuestas} Posp`;
        }
    } else {
        console.warn("Elementos de texto de progreso no encontrados.");
    }

    // --- Actualizar Atributo ARIA para Accesibilidad ---
    const contProgreso = document.querySelector('.progress-container');
     if (contProgreso) {
         // Actualizar el valor actual del progreso para tecnologías de asistencia
         contProgreso.setAttribute('aria-valuenow', porcentaje);
         // Los atributos aria-valuemin="0" y aria-valuemax="100" ya están en el HTML
     } else {
         console.warn("Contenedor de progreso para ARIA no encontrado.");
     }
    console.log(`Progreso: ${completadas}/${TOTAL_PREGUNTAS} (${porcentaje}%) - ${respondidas} respondidas, ${pospuestas} pospuestas.`);
}

/**
 * Verifica si la pregunta actual es la última en el flujo (normal o de revisión).
 * Ajusta la visibilidad y texto de los botones "Siguiente", "Posponer" y "Finalizar".
 * - El botón "Siguiente" se oculta en la última pregunta.
 * - El botón "Posponer" se oculta durante el modo de revisión.
 * - El botón "Finalizar" siempre está visible pero su texto puede cambiar en modo revisión.
 */
 function verificarUltimaPregunta() {
    // Verificar si los botones necesarios existen
    if(!btnSiguiente || !btnPosponer || !btnFinalizar) {
        console.warn("Faltan elementos de botón para verificar última pregunta.");
        return;
    }
    console.log("Verificando si es la última pregunta...");

    // Determinar si la pregunta actual es la última en el flujo NORMAL
    const esUltimaNormal = !revisandoPospuestas && indicePreguntaActual === TOTAL_PREGUNTAS - 1;

    // Determinar si la pregunta actual es la última en el flujo de REVISIÓN de pospuestas
    // Esto es true si estamos revisando Y el índice actual dentro del array de pospuestas es el último
    const esUltimaRevision = revisandoPospuestas && indiceActualPospuesta === indicesPospuestas.length - 1;

    // --- Controlar Visibilidad de Botones ---
    // Ocultar el botón "Siguiente" si estamos en la última pregunta del flujo normal O en la última de la revisión
    btnSiguiente.classList.toggle('hidden', esUltimaNormal || esUltimaRevision);
    // Ocultar el botón "Posponer" si estamos en modo de revisión
    btnPosponer.classList.toggle('hidden', revisandoPospuestas);

    // El botón "Finalizar" siempre debe estar visible, solo su texto y función cambian (manejado en manejarClicFinalizar)
    // Asegurar que no esté deshabilitado por si alguna lógica previa lo hizo
    btnFinalizar.disabled = false;

    console.log(`Estado de botones: Siguiente oculta=${esUltimaNormal || esUltimaRevision}, Posponer oculta=${revisandoPospuestas}.`);
 }
 // ========================================================================
// ==                 FUNCIONES DE FINALIZACIÓN Y RESULTADOS               ==
// ========================================================================
// Funciones que se ejecutan al terminar el quiz o al revisar resultados.

/**
 * Maneja el clic en el botón "Finalizar" o "Finalizar Revisión".
 * Guarda la respuesta actual, verifica si hay preguntas pendientes (sin responder o pospuestas).
 * Si hay pendientes, pregunta al usuario si desea revisar o finalizar sin revisar.
 * Si no hay pendientes o el usuario elige finalizar, procede a `confirmarYEnviarQuiz`.
 */
function manejarClicFinalizar() {
    console.log("--- Entrando a manejarClicFinalizar ---");
    console.log("Clic en botón Finalizar/Revisión detectado.");
    // Guardar la respuesta actual antes de iniciar el proceso de finalización
    guardarRespuestaActual();

    // --- Lógica basada en si se está revisando pospuestas o no ---
    if (!revisandoPospuestas) {
        // Si NO estamos actualmente en el modo de revisión (flujo normal):
        console.log("No se está revisando pospuestas (flujo normal).");
        // Identificar los índices de las preguntas que están sin responder (null) o pospuestas ('skipped')
        indicesPospuestas = respuestasUsuario.reduce((acc, r, i) => {
            if (r === 'skipped' || r === null) {
                 acc.push(i); // Añadir el índice al array de pospuestas/pendientes
            }
            return acc; // Retornar el acumulador
        }, []); // El valor inicial del acumulador es un array vacío

        // --- Manejo de Preguntas Pendientes ---
        if (indicesPospuestas.length > 0) {
            // Si se encontraron preguntas pendientes:
            console.log(`Se encontraron ${indicesPospuestas.length} preguntas pendientes.`);
            // Mostrar un modal de confirmación preguntando si el usuario quiere revisar
            mostrarModal(
                'confirm', // Tipo de modal: confirmación (Sí/No)
                'Preguntas Pendientes', // Título del modal
                `Tienes ${indicesPospuestas.length} pregunta(s) sin responder o pospuesta(s).\n¿Quieres revisarlas ahora?`, // Mensaje del modal
                (confirmadoRevision) => {
                    // Este es el callback que se ejecuta después de que el usuario clickea en el modal
                    console.log(`[Callback Modal Pendientes] Confirmado Revisión: ${confirmadoRevision}`);
                    if (confirmadoRevision) {
                        // Si el usuario confirmó que desea revisar:
                        console.log("Usuario eligió revisar pendientes. Iniciando revisión...");
                        revisandoPospuestas = true; // Activar el modo revisión
                        indiceActualPospuesta = 0; // Empezar desde el principio del array de pospuestas
                        if (btnFinalizar) btnFinalizar.textContent = 'Finalizar Revisión'; // Cambiar texto del botón
                        verificarUltimaPregunta(); // Ajustar visibilidad de botones (Posponer se oculta, Siguiente aparece/desaparece según revisión)
                        // Navegar a la primera pregunta pendiente en la lista
                        irAPregunta(indicesPospuestas[indiceActualPospuesta]);
                    } else {
                        // Si el usuario eligió NO revisar (quiere finalizar sin revisar):
                        console.log("Usuario eligió finalizar sin revisar pendientes.");
                        // Proceder a la confirmación final y envío del quiz, indicando que se saltó la revisión
                        confirmarYEnviarQuiz(true); // Pasar `true` para indicar que se saltó la revisión
                    }
                }
            );
        } else {
            // Si NO se encontraron preguntas pendientes:
            console.log("No hay preguntas pendientes. Procediendo a finalización.");
            // Proceder directamente a la confirmación final y envío del quiz
            confirmarYEnviarQuiz(false); // Pasar `false` porque no hay pendientes ni se saltó revisión
        }
    } else {
        // Si SÍ estamos actualmente en el modo de revisión de pospuestas:
        console.log("Se está revisando pospuestas. Procediendo a confirmación final.");
        // El usuario ya está revisando y ha clickeado "Finalizar Revisión".
        // Esto significa que desea finalizar el quiz, incluso si no ha terminado de revisar todas las pospuestas.
        // Proceder a la confirmación final y envío del quiz
        confirmarYEnviarQuiz(false); // No se saltó revisión (ya estaba en ella), solo confirma finalizar
    }
    console.log("--- Saliendo de manejarClicFinalizar ---");
}

/**
 * Maneja el clic en el enlace "Finalizar cuestionario de forma anticipada".
 * Muestra un modal de confirmación antes de finalizar el quiz inmediatamente.
 * Si se confirma, detiene timers, marca preguntas sin responder como omitidas y muestra resultados.
 * @param {Event} e - El evento de click.
 */
function manejarClicFinalizarAnticipado(e) {
    if (e) e.preventDefault(); // Prevenir la acción por defecto del enlace (navegar a #)
    console.log("Clic en Finalizar Anticipado detectado.");

    // Mostrar un modal de confirmación específico para la finalización anticipada
    mostrarModal(
        'confirm', // Tipo de modal: confirmación
        'Finalizar Anticipadamente', // Título
        '¿Seguro que quieres finalizar AHORA?\nLas preguntas sin responder se marcarán automáticamente como omitidas.', // Mensaje (usa \n para salto de línea)
        (confirmado) => {
            // Este callback se ejecuta después de que el usuario clickea en el modal
            console.log(`[Callback Modal Finalizar Anticipado] Confirmado: ${confirmado}`);
            if (confirmado) {
                // Si el usuario confirmó la finalización anticipada:
                console.log("Usuario confirmó finalización anticipada. Deteniendo timers y calculando resultados...");
                detenerTimers(); // Detener ambos temporizadores inmediatamente
                // Antes de calcular resultados, asegurarse de que cualquier pregunta `null` (sin responder) se marque como 'skipped'
                respuestasUsuario = respuestasUsuario.map(r => r === null ? 'skipped' : r);
                // Proceder a calcular y mostrar los resultados finales
                calcularYMostrarResultados();
            } else {
                // Si el usuario canceló la finalización anticipada
                console.log("Usuario canceló finalización anticipada.");
                // Opcional: devolver el foco al enlace si es relevante
                // if (btnFinalizarAnticipado) btnFinalizarAnticipado.focus();
            }
        }
    );
}

/**
 * Muestra un modal de confirmación final antes de enviar las respuestas y mostrar los resultados.
 * Ajusta el mensaje del modal según si hay preguntas pendientes o si se está en revisión.
 * Si el usuario confirma en el modal, detiene los timers, asegura que las respuestas null sean skipped,
 * y llama a `calcularYMostrarResultados`.
 * @param {boolean} saltoRevision - Indica si el usuario llegó aquí tras elegir NO revisar pendientes.
 */
function confirmarYEnviarQuiz(saltoRevision) {
    console.log(`--- [confirmarYEnviarQuiz] Iniciando (saltoRevision: ${saltoRevision}) ---`);
    // Asegurar que la respuesta de la pregunta actual esté guardada antes de cualquier lógica de finalización
    guardarRespuestaActual();

    // Contar cuántas preguntas aún están sin responder (null) o marcadas como 'skipped'
    const pendientes = respuestasUsuario.filter(r => r === null || r === 'skipped').length;

    // --- Construir el Mensaje del Modal de Confirmación Final ---
    let mensaje = "¿Enviar tus respuestas y finalizar el cuestionario?"; // Mensaje por defecto
    let titulo = "Finalizar Cuestionario"; // Título por defecto

    if (pendientes > 0 && saltoRevision) {
        // Si hay pendientes Y el usuario eligió saltar la revisión
        mensaje = `Vas a finalizar sin revisar ${pendientes} pregunta(s) pendiente(s).\n¿Continuar de todos modos?`;
        titulo = "Confirmar Finalización";
    } else if (pendientes > 0 && revisandoPospuestas) {
         // Si hay pendientes Y estamos en medio de la revisión de pospuestas
         // Calcular cuántas preguntas quedan en la lista de revisión a partir del índice actual
        const restantesEnRevision = indicesPospuestas.slice(indiceActualPospuesta).length;
        mensaje = `Aún tienes ${restantesEnRevision} pregunta(s) pendiente(s) en esta revisión.\n¿Finalizar de todos modos?`;
        titulo = "Finalizar Revisión Incompleta";
    } else if (revisandoPospuestas) {
        // Si estamos en modo revisión, pero ya no hay pendientes en la lista de pospuestas (debería ser raro llegar aquí con pendientes > 0)
        // O si solo se quiere confirmar la salida de la revisión.
        mensaje = "¿Finalizar la revisión y enviar tus respuestas?";
        titulo = "Finalizar Revisión";
    }
    // Si pendientes es 0 y no estamos revisando pospuestas, se usa el mensaje y título por defecto.

    console.log(`[confirmarYEnviarQuiz] Mensaje Modal: "${mensaje}"`);
    console.log(`[confirmarYEnviarQuiz] Llamando a mostrarModal...`);

    // Mostrar el modal de confirmación final.
    // La función crítica para calcular y mostrar resultados se llama DENTRO del callback,
    // garantizando que solo se ejecute si el usuario confirma en el modal.
    mostrarModal('confirm', titulo, mensaje, (confirmado) => {
        // --- Inicio del Callback del Modal de Confirmación Final ---
        console.log(`--- [Callback Modal Final] Ejecutado. Confirmado: ${confirmado} ---`);
        if (confirmado) {
            // Si el usuario CONFIRMÓ en el modal:
            console.log("[Callback Modal Final] CONFIRMADO. Procediendo a finalizar...");
            try {
                // Detener los temporizadores (es crucial detenerlos aquí una vez confirmada la finalización)
                detenerTimers();
                // Antes de calcular, asegurar que todas las preguntas que sigan siendo `null` se marquen como 'skipped'.
                // Esto es importante si el usuario finalizó anticipadamente o saltó la revisión.
                respuestasUsuario = respuestasUsuario.map(r => r === null ? 'skipped' : r);
                // Llamar a la función para realizar los cálculos finales y mostrar la interfaz de resultados.
                calcularYMostrarResultados();
                console.log("[Callback Modal Final] calcularYMostrarResultados LLAMADO.");
            } catch (error) {
                // Si ocurre algún error durante el proceso de finalización o al mostrar resultados
                console.error("[Callback Modal Final] Error durante la finalización:", error);
                // Mostrar un modal de alerta genérico al usuario
                 mostrarModal('alert', 'Error', 'Ocurrió un error inesperado al finalizar el cuestionario.');
            }
        } else {
            // Si el usuario CANCELÓ en el modal:
            console.log("[Callback Modal Final] CANCELADO.");
            // Si el usuario canceló mientras estaba en modo revisión, intentar devolver el foco al botón Finalizar Revisión
            if (revisandoPospuestas) {
                console.log("[Callback Modal Final] Cancelado durante revisión, devolviendo foco.");
                if (btnFinalizar) btnFinalizar.focus(); // Devolver el foco al botón
            }
            // Si canceló la confirmación normal, simplemente no se hace nada más y el quiz sigue en el estado actual.
        }
        // --- Fin del Callback del Modal de Confirmación Final ---
    });

    console.log("[confirmarYEnviarQuiz] Llamada a mostrarModal realizada (esperando respuesta del usuario).");
}

/**
 * Calcula el número final de respuestas correctas, incorrectas y omitidas
 * comparando las `respuestasUsuario` con las respuestas correctas en `PREGUNTAS`.
 * Luego, llama a `mostrarResultadosUI` para actualizar la interfaz.
 */
function calcularYMostrarResultados() {
    console.log("--- Entrando a calcularYMostrarResultados ---");
    console.log("Calculando Resultados...");

    // Asegurarse de que el quiz esté inactivo y los timers detenidos antes de calcular
    quizActivo = false;
    detenerTimers(); // Llama a detenerTimers por si acaso no se hizo antes (ej. por tiempo agotado)

    let correctas = 0;     // Contador de respuestas correctas
    let incorrectas = 0;   // Contador de respuestas incorrectas
    let omitidas = 0;      // Contador de preguntas omitidas/sin responder

    const resultadosDetallados = []; // Array para almacenar el resumen de cada pregunta para la lista detallada

    // Iterar sobre cada pregunta en el array PREGUNTAS para comparar con las respuestas del usuario
    PREGUNTAS.forEach((p, i) => {
        // Obtener la respuesta del usuario para esta pregunta.
        // En este punto, `respuestasUsuario[i]` debería ser 'A', 'B', 'C', o 'skipped'.
        // Los `null` ya deberían haber sido convertidos a 'skipped' si correspondía.
        const respUsuario = respuestasUsuario[i];
        const respCorrecta = p.answer; // Obtener la respuesta correcta de los datos de la pregunta

        let estado = 'skipped'; // Estado por defecto si no se cumplen otras condiciones

        // --- Determinar el Estado de la Respuesta ---
        if (respUsuario === respCorrecta) {
            correctas++; // Incrementar contador de correctas
            estado = 'correct'; // Marcar estado como correcto
        } else if (respUsuario !== 'skipped') { // Si la respuesta no es 'skipped' (implica que es una letra, pero incorrecta)
            incorrectas++; // Incrementar contador de incorrectas
            estado = 'incorrect'; // Marcar estado como incorrecto
        } else { // Si la respuesta es 'skipped' (o aún fuera null, aunque `confirmarYEnviarQuiz` intenta evitarlo)
            omitidas++; // Incrementar contador de omitidas
            estado = 'skipped'; // Marcar estado como skipped
        }

        // --- Guardar Datos Detallados para la UI ---
        // Crear un objeto con los detalles de esta pregunta para mostrar en la lista de resultados
        resultadosDetallados.push({
            questionIndex: i + 1, // Número de pregunta (base 1)
            questionText: p.question, // Texto de la pregunta
            userAnswer: respUsuario, // Respuesta que dio el usuario ('A', 'B', 'C', 'skipped')
            correctAnswer: respCorrecta, // Respuesta correcta ('A', 'B', 'C')
            status: estado, // Estado del resultado ('correct', 'incorrect', 'skipped')
            options: p.options || [] // Opciones originales para poder mostrar el texto de la respuesta
        });
    });

    // Calcular el porcentaje final de respuestas correctas
    // Evitar división por cero si no hay preguntas
    const porcentaje = TOTAL_PREGUNTAS > 0 ? Math.round((correctas / TOTAL_PREGUNTAS) * 100) : 0;

    // --- Preparar Objeto de Datos de Resultados ---
    // Crear un objeto que contenga todos los datos necesarios para mostrar en la UI de resultados
    const datosResultados = {
        totalQuestions: TOTAL_PREGUNTAS,
        correct: correctas,
        incorrect: incorrectas,
        skipped: omitidas,
        percentage: porcentaje,
        details: resultadosDetallados // Incluir el array con los detalles por pregunta
    };

    console.log("Resultados Calculados:", datosResultados);

    // Llamar a la función para actualizar la interfaz y mostrar la pantalla de resultados
    mostrarResultadosUI(datosResultados);
    console.log("--- Saliendo de calcularYMostrarResultados ---");
}

/**
 * Actualiza la interfaz para ocultar los elementos del quiz y mostrar la pantalla de resultados finales.
 * Llena los contadores, la lista detallada y el gráfico (si Chart.js está disponible) con los datos proporcionados.
 * @param {object} data - El objeto con los datos de resultados calculados (viene de `calcularYMostrarResultados`).
 */
function mostrarResultadosUI(data) {
    console.log("--- [mostrarResultadosUI] Iniciando... ---");

    // Asegurarse de que el quiz esté marcado como inactivo y los timers detenidos
    quizActivo = false;
    detenerTimers(); // Llamada redundante pero segura

    // --- Ocultar Elementos de la Interfaz del Quiz Activo ---
    console.log("[mostrarResultadosUI] Ocultando elementos del quiz...");
    try {
        // Ocultar el encabezado del quiz (título, timers, progreso)
        if (elementoHeader) {
             elementoHeader.style.display = 'none';
             console.log("... header oculto.");
        } else console.warn("headerElement no encontrado para ocultar.");
        
        // Ocultar explícitamente el contenedor de los timers
        const contTimers = document.querySelector('.timers-container');
        if (contTimers) {
             contTimers.style.display = 'none';
             console.log("... contTimers oculto.");
        } else console.warn("timers-container no encontrado para ocultar.");

        // Ocultar el área donde se mostraban las preguntas
        if (contPregunta) {
             contPregunta.style.display = 'none';
             console.log("... contPregunta oculto.");
        } else console.warn("contPregunta no encontrado para ocultar.");

        // Ocultar el contenedor de botones (Siguiente, Posponer, Finalizar)
        if (contBotonesQuiz) {
             contBotonesQuiz.style.display = 'none';
             console.log("... contBotonesQuiz oculto.");
        } else console.warn("contBotonesQuiz no encontrado para ocultar.");

        // Ocultar el enlace para finalizar anticipadamente
        const linkFinAnticipado = document.getElementById('early-finish-container');
        if (linkFinAnticipado) {
             linkFinAnticipado.style.display = 'none';
             console.log("... linkFinAnticipado oculto.");
        } else console.warn("early-finish-container no encontrado para ocultar.");

        // Ocultar la barra lateral de navegación
        if (contNavegacion) {
             contNavegacion.style.display = 'none';
             console.log("... contNavegacion (sidebar) oculto.");
             // Aunque se oculte, podríamos actualizar sus clases para reflejar el estado final en caso de que se muestre más tarde
        } else console.warn("contNavegacion no encontrado para ocultar.");

        // Opcional: Remover la clase 'visible' del contenedor principal del quiz si se usaba para control de display (el display: none ya lo hace)
        // if (contenedorQuiz) contenedorQuiz.classList.remove('visible');

    } catch(error) {
        console.error("[mostrarResultadosUI] Error al ocultar elementos del quiz:", error);
        // Continuar a pesar del error si el contenedor de resultados existe
    }


    // --- Mostrar y Llenar el Contenedor de Resultados ---
    if (contResultados) {
        // Asegurar que el contenedor de resultados esté visible
        contResultados.style.display = 'block';
        console.log("[mostrarResultadosUI] Contenedor de resultados MOSTRADO.");

        // Enfocar el título de la sección de resultados para mejorar la accesibilidad con teclado
        const tituloResultados = contResultados.querySelector('h2');
        // Usar requestAnimationFrame para posponer el enfoque hasta que el navegador termine de renderizar los cambios
        requestAnimationFrame(() => {
             if(tituloResultados) {
                 // Añadir tabindex="-1" temporalmente si no lo tiene para hacerlo enfocable programáticamente
                 if (!tituloResultados.hasAttribute('tabindex')) tituloResultados.setAttribute('tabindex', '-1');
                 tituloResultados.focus({ preventScroll: true }); // Enfocar sin desplazar la ventana
                 // Opcional: remover tabindex después de enfocar si no se necesita mantener enfocable
                 // setTimeout(() => tituloResultados.removeAttribute('tabindex'), 0);
             } else console.warn("Título de resultados no encontrado para enfocar.");
        });
    } else {
        // Si el contenedor de resultados CRÍTICO no se encontró, mostrar un mensaje de error básico
        console.error("CRITICAL: ¡Contenedor de resultados (#results-container) no encontrado! No se pueden mostrar los resultados en la página.");
        // Fallback: mostrar resultados en un alert (muy básico)
        alert(`¡Cuestionario finalizado!\nResultados:\nCorrectas: ${data.correct}\nIncorrectas: ${data.incorrect}\nOmitidas: ${data.skipped}\nPuntaje: ${data.percentage}%`);
        return; // Detener la ejecución de esta función si no se puede mostrar la UI de resultados
    }

    // --- Llenar Datos del Resumen ---
    console.log("[mostrarResultsUI] Llenando datos del resumen...");
    try {
        // Obtener referencias a los spans donde se muestran los conteos y el porcentaje
        const elCorrectas = document.getElementById('correct-count');
        const elIncorrectas = document.getElementById('incorrect-count');
        const elOmitidas = document.getElementById('skipped-count');
        const elPorcentaje = document.getElementById('score-percentage');

        // Actualizar el texto de cada elemento con los datos calculados
        if (elCorrectas) elCorrectas.textContent = data.correct; else console.warn("Elemento correct-count no encontrado.");
        if (elIncorrectas) elIncorrectas.textContent = data.incorrect; else console.warn("Elemento incorrect-count no encontrado.");
        if (elOmitidas) elOmitidas.textContent = data.skipped; else console.warn("Elemento skipped-count no encontrado.");
        if (elPorcentaje) elPorcentaje.textContent = `${data.percentage}%`; else console.warn("Elemento score-percentage no encontrado.");

    } catch (error) {
        console.error("[mostrarResultsUI] Error al llenar datos del resumen:", error);
    }

    // --- Llenar la Lista Detallada de Resultados ---
    console.log("[mostrarResultsUI] Llenando lista detallada...");
    try {
        const listaDetallada = document.getElementById('detailed-results-list');
        if (listaDetallada) {
            listaDetallada.innerHTML = ''; // Limpiar cualquier contenido previo

            // Verificar si hay detalles de preguntas disponibles
            if (data.details?.length > 0) {
                // Iterar sobre cada objeto de detalle de pregunta
                data.details.forEach(item => {
                    const divResultado = document.createElement('div'); // Crear un div para cada item de resultado
                    // Asignar clases CSS basadas en el estado (correct, incorrect, skipped) para aplicar estilos (ej. color del borde izquierdo)
                    divResultado.className = `result-item ${item.status || 'skipped'}`; // Usar 'skipped' como fallback

                    // --- Generar Texto para la Respuesta del Usuario ---
                    let textoRespUsuario = 'Omitida / Sin responder'; // Texto por defecto para omitidas o null
                    const letraUsuario = item.userAnswer; // Letra de la respuesta del usuario
                    const opciones = item.options || []; // Array de opciones de la pregunta actual

                    // Si el usuario respondió algo que no es 'skipped' o null
                    if (letraUsuario !== 'skipped' && letraUsuario !== null) {
                        // Convertir la letra de opción a un índice (A=0, B=1, etc.)
                        const idx = letraUsuario?.charCodeAt(0) - 65;
                        // Verificar que el índice sea válido y corresponda a una opción existente
                        if (letraUsuario && typeof letraUsuario === 'string' && idx >= 0 && idx < opciones.length) {
                             // Construir el texto mostrando la letra y el contenido de la opción
                             textoRespUsuario = `<span class="option-letter">${letraUsuario}.</span> ${opciones[idx]}`;
                        } else {
                             // Si la letra guardada es inválida (ej. 'Z')
                             textoRespUsuario = `Respuesta inválida guardada (${letraUsuario || 'ninguna'})`;
                             console.warn(`Respuesta inválida '${letraUsuario}' guardada para P${item.questionIndex}.`);
                        }
                    } else {
                         // Confirmar que el texto sea 'Pospuesta / Omitida' si el estado es skipped/null
                         textoRespUsuario = 'Pospuesta / Omitida';
                    }

                    // --- Generar Texto para la Respuesta Correcta (si es incorrecta la del usuario) ---
                    const letraCorrecta = item.correctAnswer; // Letra de la respuesta correcta
                    const idxCorrecta = letraCorrecta?.charCodeAt(0) - 65; // Índice de la respuesta correcta
                    let textoRespCorrectaHTML = ''; // Inicializar HTML para la respuesta correcta

                    // Solo mostrar la respuesta correcta si la respuesta del usuario fue incorrecta
                    if (item.status === 'incorrect') {
                         let textoCorrecta = `Correcta no disponible`; // Texto por defecto si la respuesta correcta es inválida
                         // Verificar que la letra de la respuesta correcta sea válida y corresponda a una opción existente
                         if (letraCorrecta && typeof letraCorrecta === 'string' && idxCorrecta >=0 && idxCorrecta < opciones.length) {
                              // Construir el texto mostrando la letra y el contenido de la opción correcta
                              textoCorrecta = `<span class="option-letter">${letraCorrecta}.</span> ${opciones[idxCorrecta]}`;
                         } else {
                             console.warn(`Respuesta correcta inválida '${letraCorrecta}' para P${item.questionIndex}.`);
                         }
                         // Construir el HTML para mostrar la respuesta correcta
                         textoRespCorrectaHTML = `<p class="correct-answer">Respuesta correcta: <span>${textoCorrecta}</span></p>`;
                    }


                    // --- Construir el HTML Completo del Item de Resultado ---
                    divResultado.innerHTML = `
                    <p class="question-text"><strong>${item.questionIndex}.</strong> ${item.questionText || '?'}</p>
                    <p class="user-answer ${item.status || 'skipped'}">Tu respuesta: <span>${textoRespUsuario}</span></p>
                    ${textoRespCorrectaHTML} `;

                    // Añadir el item de resultado creado a la lista detallada en el DOM
                    listaDetallada.appendChild(divResultado);
                });
            } else {
                 // Si no hay detalles de preguntas (ej. quiz con 0 preguntas), mostrar un mensaje
                 listaDetallada.innerHTML = '<p>No hay detalles disponibles para mostrar.</p>';
            }
        } else { console.warn("Contenedor 'detailed-results-list' no encontrado.");}

    } catch (error) {
        console.error("[mostrarResultsUI] Error al llenar lista detallada:", error);
        // Mostrar un mensaje de error en el contenedor si algo falla
        if (listaDetallada) listaDetallada.innerHTML = `<p style="color:red; padding: 20px;">Error al mostrar los detalles por pregunta.</p>`;
    }

    // --- Actualizar Estado Final de la Sidebar (aunque esté oculta) ---
    // Esto es útil por si decides hacer que la sidebar sea visible en la pantalla de resultados
    if (contNavegacion) {
        actualizarNavegacion(true, data); // Llama a la función con esResultadoFinal = true y los datos
    } else {
         console.warn("Contenedor de navegación no encontrado para actualizar estado final.");
    }


    // --- Mostrar el Gráfico de Resultados ---
    console.log("[mostrarResultsUI] Intentando mostrar gráfico...");
    mostrarGrafico(data); // Llama a la función que maneja Chart.js

    console.log("[mostrarResultsUI] UI de resultados actualizada exitosamente.");
} // Fin de la función mostrarResultadosUI

/**
 * Intenta inicializar y mostrar el gráfico de resultados usando Chart.js.
 * Verifica si la librería Chart.js está disponible.
 * Crea un gráfico de dona con la distribución de respuestas (correctas, incorrectas, omitidas).
 * Oculta el contenedor del gráfico si Chart.js no está disponible o hay un error.
 * @param {object} data - El objeto con los datos de resultados (debe incluir correct, incorrect, skipped).
 */
function mostrarGrafico(data) {
    // Verificar si los contenedores del gráfico y el canvas existen
    if (!contGrafico || !canvasGrafico) {
        console.warn("Elementos para el gráfico (contenedor o canvas) no encontrados.");
        return;
    }

    // Verificar si la librería Chart.js está cargada y disponible globalmente
    if (typeof Chart === 'undefined') {
        console.warn("Librería Chart.js no encontrada. El gráfico no se mostrará.");
        // Ocultar el contenedor si Chart.js no está disponible
        if(contGrafico) contGrafico.style.display = 'none';
        return; // Salir de la función si Chart.js no está listo
    }

    // Usar un pequeño timeout para dar tiempo a que el canvas esté visible y listo para dibujar
    setTimeout(() => {
        try {
            // Destruir cualquier instancia de gráfico previa asociada a este canvas
            if (graficoResultados instanceof Chart) {
                console.log("Destruyendo instancia previa de Chart.js para recrear.");
                graficoResultados.destroy();
                graficoResultados = null; // Limpiar la referencia
            }

            // Obtener el contexto 2D del canvas, necesario para dibujar el gráfico
            const ctx = canvasGrafico.getContext('2d');
            // Verificar que se pudo obtener el contexto
            if (!ctx) {
                throw new Error("No se pudo obtener el contexto 2D del canvas del gráfico.");
            }

            // --- Configurar y Crear el Nuevo Gráfico ---
            console.log("Creando nueva instancia de Chart.js...");
            graficoResultados = new Chart(ctx, {
                type: 'doughnut', // Tipo de gráfico: Dona (donut chart)
                data: {
                    labels: ['Correctas', 'Incorrectas', 'Omitidas'], // Etiquetas para las secciones del gráfico
                    datasets: [{
                        data: [data.correct, data.incorrect, data.skipped], // Datos: conteos de cada categoría
                        backgroundColor: [ // Colores para cada sección
                            'rgba(40, 167, 69, 0.8)',  // Verde para correctas (con algo de transparencia)
                            'rgba(255, 77, 109, 0.8)', // Rojo/Rosa para incorrectas (con algo de transparencia)
                            'rgba(255, 204, 0, 0.8)'   // Amarillo para omitidas (con algo de transparencia)
                        ],
                        borderColor: ['#FFF'], // Color del borde entre secciones (blanco)
                        borderWidth: 2 // Ancho del borde
                    }]
                },
                options: {
                    responsive: true, // El gráfico será responsivo y se ajustará a su contenedor
                    maintainAspectRatio: false, // No mantiene la relación de aspecto, se ajustará al tamaño del contenedor
                    plugins: {
                        legend: {
                            position: 'bottom' // Posición de la leyenda (debajo del gráfico)
                        },
                        title: {
                            display: true, // Mostrar el título del gráfico
                            text: 'Distribución de Respuestas', // Texto del título
                            padding: { bottom: 15 } // Espacio debajo del título
                        }
                    }
                }
            });
            console.log("Gráfico Chart.js creado.");

            // --- Mostrar los Elementos del Gráfico ---
            // Una vez que el gráfico se crea exitosamente, asegurar que su contenedor y canvas sean visibles
            if (contGrafico) contGrafico.style.display = 'block';
            if (canvasGrafico) canvasGrafico.style.display = 'block';

        } catch (error) {
            // Si ocurre un error durante la creación del gráfico (ej. canvas no válido)
            console.error("Error al crear o mostrar gráfico Chart.js:", error);
            // Ocultar los elementos del gráfico si falla
            if(contGrafico) contGrafico.style.display = 'none';
            if(canvasGrafico) canvasGrafico.style.display = 'none';
        }
    }, 150); // Pequeño delay para asegurar que el DOM esté listo tras mostrar resultados
}


// ========================================================================
// ==                  EVENT BINDING & KEYBOARD NAVIGATION               ==
// ========================================================================
// Funciones para asignar manejadores de eventos a elementos interactivos
// y gestionar la navegación con teclado.

/**
 * Asigna los manejadores de eventos `onclick` a los botones principales del quiz
 * (Siguiente, Posponer, Finalizar, Finalizar Anticipado).
 * Esta función se llama una vez que el quiz se inicia (`iniciarCuestionario`).
 */
function asignarEventosQuiz() {
    console.log("Asignando eventos a botones del quiz...");
    // Asignar la función `siguientePregunta` al evento click del botón Siguiente
    // Verificar si el botón existe antes de asignar el evento
    if (btnSiguiente) btnSiguiente.onclick = siguientePregunta; else console.warn("btnSiguiente no encontrado para asignar evento.");

    // Asignar la función `posponerPregunta` al evento click del botón Posponer
    if (btnPosponer) btnPosponer.onclick = posponerPregunta; else console.warn("btnPosponer no encontrado para asignar evento.");

    // Asignar la función `manejarClicFinalizar` al evento click del botón Finalizar
    if (btnFinalizar) btnFinalizar.onclick = manejarClicFinalizar; else console.warn("btnFinalizar no encontrado para asignar evento.");

    // Asignar la función `manejarClicFinalizarAnticipado` al evento click del enlace Finalizar Anticipado
    if (btnFinalizarAnticipado) btnFinalizarAnticipado.onclick = manejarClicFinalizarAnticipado; else console.warn("btnFinalizarAnticipado no encontrado para asignar evento.");

    console.log("Eventos de botones del quiz asignados.");
}

/**
 * Configura un único listener global para eventos de teclado en todo el documento.
 * Este listener maneja atajos de teclado para navegación y acciones (como Escape en modal).
 * Se llama una sola vez al inicio de la aplicación (`iniciarAplicacion`).
 */
function configurarListenersGlobales() {
     console.log("Configurando listener global de teclado...");
     // Remover cualquier listener previo para prevenir duplicados si esta función se llama más de una vez
     document.removeEventListener('keydown', manejarTeclaGlobal);
     // Añadir el listener al documento para capturar eventos de teclado
     document.addEventListener('keydown', manejarTeclaGlobal);
     console.log("Listener global de teclado configurado.");
}

/**
 * Manejador de eventos global para la tecla 'keydown'.
 * Define la lógica para atajos de teclado basados en el estado actual (modal abierto, quiz activo, foco en opciones, etc.).
 * @param {KeyboardEvent} e - El objeto evento de teclado.
 */
function manejarTeclaGlobal(e) {
    if (estaPausado) return;
    // --- Lógica para Modal Abierto ---
    // Verificar si el modal personalizado está visible
    if (modalPersonalizado && modalPersonalizado.getAttribute('aria-hidden') === 'false') {
        // Si el modal está abierto, solo responder a la tecla Escape
        if (e.key === 'Escape') {
            manejarEscapeModal(); // Llamar a la función para manejar la tecla Escape en el modal
            e.preventDefault(); // Prevenir cualquier acción por defecto del navegador para Escape
        }
        // Ignorar otras teclas mientras el modal está abierto
        return;
    }

    // --- Lógica para Quiz No Activo o Resultados Visibles ---
    // Si el quiz no está activo (ej. en pantalla de bienvenida o ya finalizado)
    // O si la sección de resultados está visible, ignorar la mayoría de los atajos de teclado del quiz
    if (!quizActivo || (contResultados && contResultados.style.display === 'block')) {
        return; // Salir de la función
    }

    // --- Identificar el Elemento Enfocado Actualmente ---
    const elActivo = document.activeElement; // Obtener el elemento que tiene el foco en este momento

    // Determinar el tipo de elemento enfocado para aplicar la lógica correcta
    const esInputTexto = elActivo && (elActivo.tagName === 'INPUT' && elActivo.type !== 'radio') || elActivo.tagName === 'TEXTAREA';
    const esOpcion = elActivo && elActivo.type === 'radio' && elActivo.closest('.options li');
    const esBoton = elActivo && (elActivo.tagName === 'BUTTON' || (elActivo.tagName === 'A' && elActivo.getAttribute('role') === 'button')); // Incluir enlaces con rol button
    const esSidebar = elActivo && elActivo.closest('#question-nav div'); // Elementos de navegación en la sidebar

    // Si el foco está en un input de texto o textarea, no interferir con la escritura
    if (esInputTexto) {
        return; // Salir de la función
    }

    // --- Manejo de Teclas ---
    if (esOpcion) {
        // Si el foco está en un input radio dentro de una opción, usar el manejador específico
        manejarTeclaOpcion(e, elActivo); // Llama a una función separada para manejar flechas y selección en opciones
    } else if (!esBoton && !esSidebar) {
        // Si el foco NO está en un botón, sidebar o input de texto/textarea (puede estar en el body, pregunta, etc.)
        // Aplicar atajos globales del quiz:
        if (e.key === 'ArrowRight' && btnSiguiente && !btnSiguiente.classList.contains('hidden')) {
            // Tecla Flecha Derecha: Si el botón Siguiente existe y no está oculto, ir a la siguiente pregunta
            e.preventDefault(); // Prevenir el scroll por defecto con flechas
            siguientePregunta();
        } else if (e.key.toUpperCase() === 'P' && btnPosponer && !btnPosponer.classList.contains('hidden')) {
            // Tecla 'P' (mayús o minús): Si el botón Posponer existe y no está oculto, posponer la pregunta
            e.preventDefault(); // Prevenir acción por defecto (ej. buscar 'p')
            posponerPregunta();
        } else if (e.key === 'Enter') {
             // Tecla Enter: Comportamiento contextual
             e.preventDefault(); // Prevenir acción por defecto
             // Si el botón Siguiente está visible, simular clic en Siguiente
             if (btnSiguiente && !btnSiguiente.classList.contains('hidden')) {
                  siguientePregunta();
             }
             // Si el botón Siguiente está oculto (implica que Finalizar está visible en flujo normal)
             // simular clic en Finalizar (esto podría necesitar un ajuste más preciso si hay otros botones)
             // La lógica actual de verificarUltimaPregunta hace que Siguiente se oculte cuando Finalizar es la opción principal.
             else if (btnFinalizar) {
                  manejarClicFinalizar(); // Llama a la función que maneja la finalización (con confirmación si es necesario)
             }
        }
        // Nota: Navegación con flechas arriba/abajo para opciones se maneja en `manejarTeclaOpcion`.
        // La navegación entre botones con Tab/Shift+Tab es nativa del navegador.
    }
    // Si el foco está en un botón o sidebar, se espera el comportamiento nativo del navegador (Enter/Espacio para activar)
}

/**
 * Maneja los eventos de teclado (principalmente flechas arriba/abajo y Espacio/Enter)
 * cuando el foco está en un input radio dentro de una opción de respuesta.
 * Permite navegar entre opciones con flechas y seleccionar con Espacio/Enter.
 * @param {KeyboardEvent} e - El objeto evento de teclado.
 * @param {HTMLElement} radioActivo - El elemento input radio que actualmente tiene el foco.
 */
function manejarTeclaOpcion(e, radioActivo) {
     // Obtener el elemento <li> que contiene el input radio activo
     const liActual = radioActivo.closest('li');
     if (!liActual) {
         console.warn("Input radio enfocado no encontrado dentro de un LI.");
         return; // Salir si no se encuentra el contenedor LI
     }

     // Obtener una lista de todos los elementos <li> de opción en la pregunta actual
     const todosLi = Array.from(contPregunta.querySelectorAll('.options li'));
     // Encontrar el índice del LI actual dentro de esa lista
     const idxActual = todosLi.indexOf(liActual);

     let radioAEnfocar = null; // Variable para almacenar el input radio al que queremos mover el foco

     // --- Lógica de Navegación con Flechas ---
     if (e.key === 'ArrowDown') {
         // Si se presiona Flecha Abajo: intentar mover el foco al siguiente LI
         if (idxActual < todosLi.length - 1) { // Verificar que no sea el último LI
             radioAEnfocar = todosLi[idxActual + 1].querySelector('input[type="radio"]'); // Obtener el radio del siguiente LI
         }
     } else if (e.key === 'ArrowUp') {
         // Si se presiona Flecha Arriba: intentar mover el foco al LI anterior
         if (idxActual > 0) { // Verificar que no sea el primer LI
             radioAEnfocar = todosLi[idxActual - 1].querySelector('input[type="radio"]'); // Obtener el radio del LI anterior
         }
     }
     // Nota: Las flechas izquierda/derecha en radiogroups a veces navegan entre grupos o hacen scroll.
     // Aquí solo manejamos arriba/abajo para navegación vertical entre opciones.

     // --- Lógica de Selección con Espacio o Enter ---
     else if (e.key === ' ' || e.key === 'Enter') {
          // Si se presiona Espacio o Enter mientras un radio tiene foco:
          e.preventDefault(); // Prevenir la acción por defecto (ej. scroll con Espacio)

          // Si el radio enfocado aún no está marcado, marcarlo y guardar la respuesta
          if (!radioActivo.checked) {
              radioActivo.checked = true;
              guardarRespuestaActual(); // Guarda la respuesta seleccionada
          }

          // Aplicar el efecto visual temporal al LI clickeado
          liActual.classList.add('selected');
          setTimeout(() => liActual.classList.remove('selected'), 150); // Eliminar la clase después de un breve tiempo

          // Opcional: Avanzar automáticamente a la siguiente pregunta después de seleccionar con teclado
          // (Misma lógica que el click automático en manejarClickOpcion)
          setTimeout(() => {
               const esUltimaNormal = !revisandoPospuestas && indicePreguntaActual === TOTAL_PREGUNTAS - 1;
               const esUltimaRevision = revisandoPospuestas && indiceActualPospuesta === indicesPospuestas.length - 1;
               // Solo avanzar si no es la última pregunta (en flujo normal o revisión)
               if (!esUltimaNormal && !esUltimaRevision) {
                    siguientePregunta(); // Avanzar a la siguiente pregunta
               } else {
                    // Si es la última, enfocar el botón Finalizar para el siguiente paso del usuario
                    if(btnFinalizar) btnFinalizar.focus();
               }
          }, 250); // Pequeño delay para la animación y percepción del usuario
          return; // Salir de la función después de manejar Espacio/Enter
     }

     // --- Aplicar Foco si se Navegó con Flechas ---
     // Si se encontró un radio button al que mover el foco (por Flecha Arriba/Abajo)
     if (radioAEnfocar) {
         e.preventDefault(); // Prevenir el scroll por defecto de las flechas
         radioAEnfocar.focus(); // Mover el foco al nuevo input radio
     }
}


// ========================================================================
// ==                  FUNCIONES DEL MODAL PERSONALIZADO                 ==
// ========================================================================
// Funciones para mostrar, ocultar y manejar la interacción con el modal de diálogo.

/**
 * Muestra el modal personalizado con un título, mensaje y botones configurables.
 * Guarda el elemento que tenía el foco antes de abrir el modal para restaurarlo al cerrar (accesibilidad).
 * Asigna manejadores de eventos a los botones del modal y controla su visibilidad según el tipo de modal.
 * Ejecuta un callback al cerrar el modal con el resultado de la interacción (true/false para confirm, undefined para alert).
 * @param {'confirm' | 'alert'} [tipo='alert'] - El tipo de modal a mostrar ('confirm' para Sí/No, 'alert' para OK).
 * @param {string} [titulo='Alerta'] - El texto del título del modal.
 * @param {string} [mensaje=''] - El texto del mensaje principal del modal. Permite usar '\n' para saltos de línea.
 * @param {function(boolean): void | function(): void | null} [callback=null] - La función que se ejecutará cuando el modal se cierre.
 * - Si el tipo es 'confirm', el callback recibe un booleano (true si se confirmó, false si se canceló).
 * - Si el tipo es 'alert', el callback se llama sin argumentos.
 * - Puede ser null si no se necesita un callback.
 */
function mostrarModal(tipo = 'alert', titulo = 'Alerta', mensaje = '', callback = null) {
    console.log(`--- [mostrarModal] Mostrando modal (Tipo: ${tipo}, Titulo: "${titulo}") ---`);
    // Verificar si los elementos DOM necesarios para el modal existen
    if (!modalPersonalizado || !tituloModal || !mensajeModal || !btnConfirmarModal || !btnCancelarModal || !btnOkModal) {
        console.error("[mostrarModal] Elementos del Modal no encontrados! Usando fallback nativo del navegador.");
        // Fallback a los diálogos nativos del navegador si los elementos del modal no están en el DOM
        if (tipo === 'confirm') {
            // Usar `confirm()` nativo y llamar al callback con true/false según la respuesta
            if (confirm(`${titulo}\n\n${mensaje}`)) {
                if (callback) callback(true);
            } else {
                if (callback) callback(false);
            }
        } else { // tipo 'alert'
            // Usar `alert()` nativo y llamar al callback
            alert(`${titulo}\n\n${mensaje}`);
            if (callback) callback();
        }
        return; // Salir de la función si se usó el fallback nativo
    }

    // --- Gestión del Foco para Accesibilidad ---
    // Guardar una referencia al elemento que tenía el foco antes de abrir el modal
    // Esto permite restaurar el foco a ese elemento al cerrar el modal.
    elementoEnfocadoAntesModal = document.activeElement;
    // Nota: Es buena práctica asegurarse de que el foco se mueva *dentro* del modal
    // una vez abierto para atraparlo y evitar que el usuario interactúe con el contenido detrás.
    // Esto a menudo se hace enfocando el primer elemento interactivo o el contenedor del modal.

    // --- Configurar Contenido del Modal ---
    tituloModal.textContent = titulo; // Establecer el título
    // Establecer el mensaje, reemplazando saltos de línea '\n' con etiquetas <br> para HTML
    mensajeModal.innerHTML = mensaje.replace(/\n/g, '<br>');
    // Usar un atributo data en el overlay para controlar la visibilidad de los botones con CSS
    modalPersonalizado.dataset.modalType = tipo;

    // --- Configurar Event Listeners de Botones ---
    // Definir las funciones que se ejecutarán cuando se haga clic en cada tipo de botón del modal.
    // Se definen aquí para poder usarlas tanto para añadir como para remover listeners.
    const accionConfirmar = () => {
        console.log("[Modal Listener] Botón Confirmar/Sí presionado.");
        hideCustomModal(); // Primero, ocultar el modal
        if (callback) callback(true); // Luego, ejecutar el callback, indicando confirmación (true)
    };
    const accionCancelar = () => {
        console.log("[Modal Listener] Botón Cancelar/No presionado.");
        hideCustomModal(); // Ocultar el modal
        if (callback) callback(false); // Ejecutar el callback, indicando cancelación (false)
    };
    const accionOk = () => {
        console.log("[Modal Listener] Botón OK presionado.");
        hideCustomModal(); // Ocultar el modal
        if (callback) callback(); // Ejecutar el callback (los callbacks de alerta no reciben argumentos)
    };

    // Es crucial LIMPIAR los listeners de clics anteriores antes de añadir los nuevos.
    // Esto previene que un botón ejecute múltiples callbacks si el modal se abre varias veces.
    // Remover los listeners usando las referencias a las funciones definidas arriba.
    btnConfirmarModal.removeEventListener('click', accionConfirmar);
    btnCancelarModal.removeEventListener('click', accionCancelar);
    btnOkModal.removeEventListener('click', accionOk);

    // Ahora, AÑADIR los listeners apropiados según el tipo de modal
    if (tipo === 'confirm') {
        btnConfirmarModal.addEventListener('click', accionConfirmar);
        btnCancelarModal.addEventListener('click', accionCancelar);
        // Para modals de confirmación, enfocar el botón "No" (cancelar) por defecto es común para prevenir acciones accidentales.
        // Usar un pequeño timeout para asegurar que el botón esté visible y enfocable.
        setTimeout(() => btnCancelarModal?.focus(), 50);
    } else { // tipo 'alert'
        btnOkModal.addEventListener('click', accionOk);
        // Para modals de alerta, enfocar el botón "OK" por defecto.
        setTimeout(() => btnOkModal?.focus(), 50);
    }

    // --- Mostrar el Modal ---
    // Cambiar el atributo aria-hidden a "false" para que el modal sea accesible y visible (CSS lo controla)
    modalPersonalizado.setAttribute('aria-hidden', 'false');
    console.log("[mostrarModal] Modal configurado y mostrado.");

    // Opcional: Implementar "trampa de foco" (focus trapping) para mantener el foco dentro del modal
    // Esto implica escuchar eventos de Tab/Shift+Tab y mover el foco manualmente si sale del modal.
    // No está incluido en este código, pero es una mejora de accesibilidad importante para modales.
}

/**
 * Oculta el modal personalizado.
 * Restaura el foco al elemento que lo tenía antes de que se abriera el modal (para accesibilidad).
 * No necesita remover listeners de botones aquí, ya que se limpian antes de ser asignados en `mostrarModal`.
 */
function hideCustomModal() {
    // Verificar si el elemento modal existe
    if (!modalPersonalizado) {
        console.warn("[hideCustomModal] Elemento modal no encontrado.");
        return;
    }
    console.log("--- [hideCustomModal] Ocultando modal ---");

    // Cambiar el atributo aria-hidden a "true" para ocultar el modal y hacerlo inaccesible
    modalPersonalizado.setAttribute('aria-hidden', 'true');

    // --- Restaurar Foco ---
    // Verificar si guardamos una referencia a un elemento que tenía foco antes de abrir el modal
    if (elementoEnfocadoAntesModal?.focus) {
        console.log("[hideCustomModal] Devolviendo foco a:", elementoEnfocadoAntesModal);
        try {
            // Intentar restaurar el foco al elemento guardado
            elementoEnfocadoAntesModal.focus();
        } catch (e) {
            // Capturar errores si el elemento ya no es enfocable (ej. fue removido del DOM)
            console.warn("No se pudo devolver el foco al elemento anterior:", e);
        }
    } else {
         console.log("[hideCustomModal] No hay elemento anterior para enfocar o no era enfocable.");
         // Opcional: Si no se puede devolver el foco, considerar enfocar un elemento por defecto
         // fuera del modal (ej. el body, o un botón principal si el diseño lo permite)
    }
    // Limpiar la referencia al elemento enfocado para evitar mantener referencias a elementos que quizás ya no existen.
    elementoEnfocadoAntesModal = null;
    console.log("[hideCustomModal] Modal oculto y foco restaurado (si fue posible).");
}

/**
 * Maneja la pulsación de la tecla Escape cuando el modal está abierto.
 * Simula un clic en el botón "Cancelar" (para modals de confirmación) o "OK" (para modals de alerta)
 * para cerrar el modal y ejecutar el callback correspondiente.
 */
function manejarEscapeModal() {
    // Verificar si el modal existe y si está visible
    if (!modalPersonalizado || modalPersonalizado.getAttribute('aria-hidden') === 'true') {
        // Si no existe o no está visible, ignorar la tecla Escape
        return;
    }
    console.log("--- [manejarEscapeModal] Tecla Escape presionada en modal ---");

    // Obtener el tipo de modal actual desde el atributo data
    const tipo = modalPersonalizado.dataset.modalType;

    if (tipo === 'confirm') {
        // Si es un modal de confirmación, simular un clic en el botón "Cancelar"
        console.log("[manejarEscapeModal] Simulando click en botón Cancelar.");
        // Usar ?.click() para asegurarse de que solo se llama si el botón existe
        btnCancelarModal?.click();
    } else { // tipo 'alert'
        // Si es un modal de alerta, simular un clic en el botón "OK"
        console.log("[manejarEscapeModal] Simulando click en botón OK.");
        btnOkModal?.click();
    }
    // Nota: La función hideCustomModal y el callback asociado se llamarán
    // automáticamente por el listener del click simulado.
}

/*
    ====================================================================
    ||                         FIN DEL SCRIPT                       ||
    ====================================================================
*/
