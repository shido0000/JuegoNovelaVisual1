// ============================================
// HISTORIA COMPLETA - ACTO I
// Academia Stellaris: Destinos Cruzados
// ============================================

import { Scene, Chapter } from '../types';

// ---- CAPÍTULO 1: LA LLEGADA ----
export const chapter1Scenes: Scene[] = [
  {
    id: 'ch1_intro',
    chapter: 1,
    background: 'academy-gate',
    lines: [
      { type: 'scene_change', text: 'Capítulo 1: La Llegada', background: 'academy-gate' },
      { type: 'narration', text: 'El carruaje se detiene ante las imponentes puertas de la Academia Stellaris. Torres de cristal se alzan hacia el cielo crepuscular, reflejando mil estrellas incluso antes de que anochezca.' },
      { type: 'narration', text: 'Tu corazón late con fuerza. Has sido aceptado/a como estudiante de último año, una oportunidad que cambia la vida. Pero algo en el aire se siente... diferente.' },
      { type: 'dialogue', speaker: 'lyra', text: '...Otro estudiante nuevo. Qué emoción.' },
      { type: 'narration', text: 'Una joven de cabello plateado te observa desde las sombras de un arco. Sus ojos brillan como hielo bajo la luna.' },
      { type: 'choice', text: '¿Cómo reaccionas?', choices: [
        { text: 'Saludar con una sonrisa cálida', effects: { lyra: 1, melody: 1 }, nextScene: 'ch1_warm_greeting' },
        { text: 'Asentir con respeto y seguir camino', effects: { lyra: 0, kael: 1 }, nextScene: 'ch1_respectful' },
        { text: 'Mirarla fijamente con curiosidad', effects: { lyra: 2, sage: 1 }, nextScene: 'ch1_curious' }
      ]}
    ]
  },
  {
    id: 'ch1_warm_greeting',
    chapter: 1,
    background: 'academy-gate',
    lines: [
      { type: 'dialogue', speaker: 'lyra', text: '...¿Me saludas? La mayoría se asusta de mí.' },
      { type: 'narration', text: 'Una leve sonrisa cruza su rostro antes de desaparecer.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Soy Lyra. Lyra Frostwind. Si buscas problemas, los encontrarás aquí.' },
      { type: 'narration', text: 'Antes de que puedas responder, una voz melodiosa interrumpe.' },
      { type: 'dialogue', speaker: 'melody', text: '¡Oh! ¡Un rostro nuevo! ¡Qué maravilla! Soy Melody, y esta academia es mucho más interesante con sangre fresca.' },
      { type: 'dialogue', speaker: 'melody', text: '¿Vienes a estudiar magia? ¿Combate? ¿O quizás... a encontrar el amor? *guiño*' },
      { type: 'narration', text: 'Melody hace una reverencia teatral. Su laúd brilla con runas doradas.' },
      { type: 'nextScene', text: '', nextScene: 'ch1_main_hall' }
    ]
  },
  {
    id: 'ch1_respectful',
    chapter: 1,
    background: 'academy-gate',
    lines: [
      { type: 'narration', text: 'Asientes con respeto y continúas tu camino. La joven te observa con una ceja alzada.' },
      { type: 'narration', text: 'Un joven alto con armadura ligera se cruza en tu camino. Su mano descansa sobre la empuñadura de su espada.' },
      { type: 'dialogue', speaker: 'kael', text: 'Alto. Identifícate. Soy Kael Ironheart, capitán de la guardia de la academia.' },
      { type: 'dialogue', speaker: 'kael', text: '...Hmm. Tus ojos muestran determinación. Bienvenido/a a Stellaris. Mantén tu camino recto y no tendremos problemas.' },
      { type: 'narration', text: 'Su voz es firme pero no cruel. Hay honor en cada palabra.' },
      { type: 'nextScene', text: '', nextScene: 'ch1_main_hall' }
    ]
  },
  {
    id: 'ch1_curious',
    chapter: 1,
    background: 'academy-gate',
    lines: [
      { type: 'narration', text: 'Tu mirada curiosa la incomoda visiblemente. Da un paso atrás.' },
      { type: 'dialogue', speaker: 'lyra', text: '¿Qué miras? ¿Nunca has visto a alguien con poderes de hielo?' },
      { type: 'narration', text: 'Una voz grave y culta surge desde un banco cercano.' },
      { type: 'dialogue', speaker: 'sage', text: 'Fascinante. Los ojos de un recién llegado siempre ven lo que otros ignoran. Interesante percepción.' },
      { type: 'narration', text: 'Un joven con gafas redondas y un libro enorme emerge de entre las sombras. Las páginas brillan con escritura invisible.' },
      { type: 'dialogue', speaker: 'sage', text: 'Soy Sage. Bibliotecario de los archivos prohibidos. Si alguna vez buscas respuestas... búscame en el tercer sótano.' },
      { type: 'nextScene', text: '', nextScene: 'ch1_main_hall' }
    ]
  },
  {
    id: 'ch1_main_hall',
    chapter: 1,
    background: 'main-hall',
    lines: [
      { type: 'scene_change', text: '', background: 'main-hall' },
      { type: 'narration', text: 'El vestíbulo principal es majestuoso. Candelabros flotantes iluminan retratos de antiguos magos. Estudiantes deambulan en grupos.' },
      { type: 'narration', text: 'Una voz anuncia por un cristal parlante: "Todos los nuevos estudiantes, presentense en el Gran Comedor para la ceremonia de bienvenida."' },
      { type: 'choice', text: '¿A dónde te diriges primero?', choices: [
        { text: 'Ir directamente al comedor', effects: { kael: 1 }, nextScene: 'ch1_dining' },
        { text: 'Explorar los jardines', effects: { melody: 1, lyra: 1 }, nextScene: 'ch1_gardens' },
        { text: 'Visitar la biblioteca', effects: { sage: 2 }, nextScene: 'ch1_library' }
      ]}
    ]
  },
  {
    id: 'ch1_dining',
    chapter: 1,
    background: 'dining-hall',
    lines: [
      { type: 'narration', text: 'El Gran Comedor es un espectáculo. Mesas largas se llenan de estudiantes riendo. La comida aparece mágicamente en los platos.' },
      { type: 'dialogue', speaker: 'kael', text: 'Llegas pronto. Me gusta la puntualidad. Siéntate, la ceremonia empieza en minutos.' },
      { type: 'narration', text: 'Kael te señala un asiento junto a él. Parece aprobar tu decisión.' },
      { type: 'dialogue', speaker: 'kael', text: 'Un consejo: en esta academia, las apariencias engañan. Confía en tus instintos.' },
      { type: 'narration', text: 'La ceremonia comienza. El director anuncia que este año será "especial". Algo grande está por venir.' },
      { type: 'nextScene', text: '', nextScene: 'ch1_ceremony' }
    ]
  },
  {
    id: 'ch1_gardens',
    chapter: 1,
    background: 'gardens',
    lines: [
      { type: 'narration', text: 'Los jardines son un laberinto de flores luminiscentes. Fuentes cantan melodías suaves.' },
      { type: 'dialogue', speaker: 'melody', text: '¡Mira! ¡Las flores de luna! Solo florecen para quienes tienen el corazón abierto.' },
      { type: 'narration', text: 'Melody está sentada en el borde de una fuente, tocando su laúd. Las flores a su alrededor brillan con más intensidad.' },
      { type: 'dialogue', speaker: 'melody', text: '¿Sabías que cada flor tiene una canción? Si escuchas con el corazón... puedes oírlas.' },
      { type: 'narration', text: 'De repente, una ráfaga de viento helado pasa. Lyra aparece entre los setos.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Melody, estás haciendo que las flores crezcan de nuevo. El jardinero se quejará.' },
      { type: 'dialogue', speaker: 'melody', text: '¡Lyra! Siempre tan... fresca. *risita* ¿Vienes a disfrutar del atardecer?' },
      { type: 'narration', text: 'Por un momento, ves a Lyra casi sonreír. Casi.' },
      { type: 'nextScene', text: '', nextScene: 'ch1_ceremony' }
    ]
  },
  {
    id: 'ch1_library',
    chapter: 1,
    background: 'library',
    lines: [
      { type: 'narration', text: 'La biblioteca es infinita. Estanterías se pierden en la oscuridad del techo. El olor a pergamino antiguo llena el aire.' },
      { type: 'dialogue', speaker: 'sage', text: 'Ah, un visitante. La mayoría teme este lugar. Los libros aquí... muerden.' },
      { type: 'narration', text: 'Sage está rodeado de pilas de libros. Uno flota a su lado, pasando páginas solo.' },
      { type: 'dialogue', speaker: 'sage', text: '¿Sabes por qué los archivos prohibidos están bajo la biblioteca? Porque el conocimiento peligroso debe estar cerca, pero no al alcance de todos.' },
      { type: 'choice', text: '¿Qué le preguntas?', choices: [
        { text: '¿Qué secretos guarda esta academia?', effects: { sage: 2 }, nextScene: 'ch1_library_secrets' },
        { text: '¿Me recomiendas algún libro?', effects: { sage: 1 }, nextScene: 'ch1_library_books' }
      ]}
    ]
  },
  {
    id: 'ch1_library_secrets',
    chapter: 1,
    background: 'library',
    lines: [
      { type: 'dialogue', speaker: 'sage', text: '...Interesante pregunta. Demasiado directa para un primer día.' },
      { type: 'narration', text: 'Sage se quita las gafas y las limpia lentamente. Sus ojos son de un violeta profundo.' },
      { type: 'dialogue', speaker: 'sage', text: 'Digamos que Stellaris fue construida sobre algo. Algo antiguo. Algo que algunos preferirían mantener dormido.' },
      { type: 'dialogue', speaker: 'sage', text: 'Pero eso es conversación para otro día. Por ahora... disfruta de tu inocencia.' },
      { type: 'narration', text: 'Un libro cae de un estante alto. Sage lo atrapa sin mirar.' },
      { type: 'dialogue', speaker: 'sage', text: 'La ceremonia está por empezar. No querrás perdértela.' },
      { type: 'nextScene', text: '', nextScene: 'ch1_ceremony' }
    ]
  },
  {
    id: 'ch1_library_books',
    chapter: 1,
    background: 'library',
    lines: [
      { type: 'dialogue', speaker: 'sage', text: '¿Un lector curioso? Qué agradable.' },
      { type: 'narration', text: 'Sage camina entre los estantes, pasando los dedos por los lomos de los libros.' },
      { type: 'dialogue', speaker: 'sage', text: 'Empieza con "Historia de las Cuatro Fundaciones". Es seguro... y revelador.' },
      { type: 'narration', text: 'Te entrega un libro encuadernado en cuero azul. Las letras doradas brillan al tacto.' },
      { type: 'dialogue', speaker: 'sage', text: 'Si después de leerlo aún tienes preguntas... ya sabes dónde encontrarme.' },
      { type: 'narration', text: 'Una campana suena en la distancia. La ceremonia va a comenzar.' },
      { type: 'nextScene', text: '', nextScene: 'ch1_ceremony' }
    ]
  },
  {
    id: 'ch1_ceremony',
    chapter: 1,
    background: 'great-hall',
    lines: [
      { type: 'scene_change', text: '', background: 'great-hall' },
      { type: 'narration', text: 'El Gran Salón brilla con magia ancestral. El director, un anciano de barba estrellada, se eleva sobre el estrado.' },
      { type: 'dialogue', speaker: 'narrator', text: '"Bienvenidos a un nuevo año en la Academia Stellaris. Este año será... diferente. Lo siento en las estrellas."' },
      { type: 'narration', text: 'Las cuatro velas elementales se encienden: fuego, agua, tierra y aire. Pero una parpadea de forma extraña.' },
      { type: 'narration', text: 'Sientes una corriente de energía recorrer el suelo. Otros estudiantes también la notan.' },
      { type: 'narration', text: 'Al terminar la ceremonia, los estudiantes se dispersan hacia sus dormitorios. Tu primer día ha terminado... pero algo te dice que esto apenas comienza.' },
      { type: 'narration', text: '— FIN DEL CAPÍTULO 1 —' },
      { type: 'nextScene', text: '', nextScene: 'ch2_intro' }
    ]
  }
];

// ---- CAPÍTULO 2: PRIMERAS CLASES ----
export const chapter2Scenes: Scene[] = [
  {
    id: 'ch2_intro',
    chapter: 2,
    background: 'dormitory',
    lines: [
      { type: 'scene_change', text: 'Capítulo 2: Primeras Clases', background: 'dormitory' },
      { type: 'narration', text: 'La mañana siguiente. La luz del sol se filtra por las ventanas encantadas de tu dormitorio. Un goblin mensajero deja un horario en tu puerta.' },
      { type: 'narration', text: 'Tu primera clase es "Magia Elemental Avanzada" con la profesora... Lyra Frostwind. Espera, ¿ella es profesora?' },
      { type: 'choice', text: '¿Cómo te preparas para la clase?', choices: [
        { text: 'Llegar temprano y sentarte al frente', effects: { lyra: 2, kael: 1 }, nextScene: 'ch2_early_class' },
        { text: 'Preguntar a otros estudiantes sobre Lyra', effects: { sage: 1, melody: 1 }, nextScene: 'ch2_ask_around' },
        { text: 'Ir directamente, confías en tu instinto', effects: { kael: 2 }, nextScene: 'ch2_instinct' }
      ]}
    ]
  },
  {
    id: 'ch2_early_class',
    chapter: 2,
    background: 'classroom',
    lines: [
      { type: 'narration', text: 'Llegas al aula con tiempo de sobra. El salón está vacío, con cristales de práctica en cada escritorio.' },
      { type: 'narration', text: 'Lyra entra unos minutos después. Te ve y se sorprende.' },
      { type: 'dialogue', speaker: 'lyra', text: '...¿Tú? ¿Llegaste temprano? Nadie llega temprano a mi clase.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Bien. Al menos alguien toma esto en serio. Prepárate, no seré indulgente.' },
      { type: 'narration', text: 'Pero hay algo en su tono... ¿aprobación? La clase comienza. Lyra es exigente pero brillante.' },
      { type: 'narration', text: 'Durante la práctica, tu cristal responde con una luz inusual. Lyra lo nota.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Eso... es extraño. Tu magia tiene un matiz que no reconozco. ¿Has sentido algo diferente últimamente?' },
      { type: 'choice', text: '¿Qué respondes?', choices: [
        { text: '"Sí, desde que llegué. Como si la academia me llamara."', effects: { lyra: 2 }, nextScene: 'ch2_class_honest' },
        { text: '"No estoy seguro/a. ¿Debería preocuparme?"', effects: { lyra: 1, sage: 1 }, nextScene: 'ch2_class_worried' }
      ]}
    ]
  },
  {
    id: 'ch2_class_honest',
    chapter: 2,
    background: 'classroom',
    lines: [
      { type: 'dialogue', speaker: 'lyra', text: '...La academia te llama. Hmm.' },
      { type: 'narration', text: 'Lyra mira hacia la ventana, como si buscara algo en el horizonte.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Yo también sentí eso cuando llegué, hace años. La academia... elige a quienes necesita.' },
      { type: 'narration', text: 'Por un momento, su máscara de hielo se resquebraja. Ves vulnerabilidad en sus ojos.' },
      { type: 'dialogue', speaker: 'lyra', text: 'No le cuentes esto a nadie. Y... ten cuidado con lo que la academia te pida.' },
      { type: 'narration', text: 'La clase termina. Lyra se va rápido, pero antes de salir, se gira.' },
      { type: 'dialogue', speaker: 'lyra', text: '...Gracias por llegar temprano.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_afternoon' }
    ]
  },
  {
    id: 'ch2_class_worried',
    chapter: 2,
    background: 'classroom',
    lines: [
      { type: 'dialogue', speaker: 'lyra', text: '¿Preocuparte? No... todavía no. Pero si los síntomas aumentan, busca a Sage en la biblioteca.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Él sabe más de estos... fenómenos... de lo que admite.' },
      { type: 'narration', text: 'Lyra escribe algo en un pergamino y te lo entrega. Es un pase para los archivos.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Muéstrale esto. Y... cuídate.' },
      { type: 'narration', text: 'Hay preocupación genuina en su voz. Quizás bajo ese hielo hay más calidez de la que muestra.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_afternoon' }
    ]
  },
  {
    id: 'ch2_ask_around',
    chapter: 2,
    background: 'corridor',
    lines: [
      { type: 'narration', text: 'En el pasillo, un grupo de estudiantes susurra al ver tu horario.' },
      { type: 'dialogue', speaker: 'melody', text: '¡Tienes clase con Lyra! ¡La Dama de Hielo! Cuidado, dicen que congeló a un estudiante que la interrumpió.' },
      { type: 'narration', text: 'Melody aparece a tu lado como si la hubieras invocado.' },
      { type: 'dialogue', speaker: 'melody', text: 'En realidad, es mucho más dulce de lo que parece. Solo... le cuesta mostrarlo. *susurra* Escribí una canción sobre ella.' },
      { type: 'dialogue', speaker: 'sage', text: 'Melody, no deberías esparcir rumores. Lyra Frostwind es la maga de hielo más talentosa de su generación. Su frialdad es... protección.' },
      { type: 'narration', text: 'Sage aparece del otro lado, como siempre, sin que lo oyeras llegar.' },
      { type: 'dialogue', speaker: 'sage', text: 'Si vas a su clase, presta atención a lo que NO dice. Las verdades más grandes viven en los silencios.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_afternoon' }
    ]
  },
  {
    id: 'ch2_instinct',
    chapter: 2,
    background: 'corridor',
    lines: [
      { type: 'narration', text: 'Caminas con paso firme hacia el aula. En el camino, Kael patrulla el corredor.' },
      { type: 'dialogue', speaker: 'kael', text: 'Vas a la clase de Lyra. Bien. Es dura pero justa.' },
      { type: 'dialogue', speaker: 'kael', text: 'Un consejo: en esta academia, la fuerza no lo es todo. La magia de Lyra... es de las más poderosas que he visto.' },
      { type: 'narration', text: 'Kael parece elegir sus palabras con cuidado.' },
      { type: 'dialogue', speaker: 'kael', text: 'Hay algo que no me gusta de esta semana. Los sensores mágicos están alterados. Mantente alerta.' },
      { type: 'narration', text: 'Asientes. Kael asiente de vuelta con aprobación.' },
      { type: 'dialogue', speaker: 'kael', text: 'Bien. Me alegra ver a alguien que no subestima los peligros.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_afternoon' }
    ]
  },
  {
    id: 'ch2_afternoon',
    chapter: 2,
    background: 'courtyard',
    lines: [
      { type: 'scene_change', text: '', background: 'courtyard' },
      { type: 'narration', text: 'La tarde cae sobre el patio. Los estudiantes se reúnen en grupos. Un evento especial se anuncia: el Festival de las Estrellas se acerca.' },
      { type: 'narration', text: 'El Festival es la tradición más importante de Stellaris. Cada estudiante debe elegir un compañero para el baile ceremonial.' },
      { type: 'dialogue', speaker: 'melody', text: '¡El Festival! ¡Mi época favorita! La música, las luces, los romances que florecen... ¡Es mágico!' },
      { type: 'narration', text: 'Melody gira sobre sí misma, esparciendo notas musicales doradas.' },
      { type: 'choice', text: '¿Con quién pasas la tarde?', choices: [
        { text: 'Buscar a Lyra en la torre de hielo', effects: { lyra: 2 }, nextScene: 'ch2_lyra_tower' },
        { text: 'Entrenar con Kael en el patio de armas', effects: { kael: 2 }, nextScene: 'ch2_kael_training' },
        { text: 'Investigar con Sage los sensores alterados', effects: { sage: 2 }, nextScene: 'ch2_sage_investigation' },
        { text: 'Escuchar a Melody ensayar su canción del festival', effects: { melody: 2 }, nextScene: 'ch2_melody_song' }
      ]}
    ]
  },
  {
    id: 'ch2_lyra_tower',
    chapter: 2,
    background: 'ice-tower',
    lines: [
      { type: 'narration', text: 'La torre de hielo se eleva en el ala norte. Dentro, todo es cristal y frío. Lyra medita en el centro.' },
      { type: 'dialogue', speaker: 'lyra', text: '...¿Cómo entraste? Esta torre está sellada.' },
      { type: 'narration', text: 'Abre los ojos. Por un momento, ves sorpresa... y algo más.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Nadie viene aquí. Es... mi refugio. ¿Qué quieres?' },
      { type: 'choice', text: '', choices: [
        { text: '"Quería conocerte mejor. Más allá de la profesora."', effects: { lyra: 2 }, nextScene: 'ch2_lyra_romance1' },
        { text: '"Los sensores están alterados. ¿Tú sabes algo?"', effects: { lyra: 1, sage: 1 }, nextScene: 'ch2_lyra_sensors' }
      ]}
    ]
  },
  {
    id: 'ch2_lyra_romance1',
    chapter: 2,
    background: 'ice-tower',
    lines: [
      { type: 'cg_show', text: '', cgId: 'lyra_romance1' },
      { type: 'narration', text: 'Lyra se queda en silencio. Los cristales a su alrededor comienzan a brillar con un tono más cálido, casi rosado.' },
      { type: 'dialogue', speaker: 'lyra', text: '...Conocerme. Nadie me ha dicho eso antes.' },
      { type: 'narration', text: 'Se levanta. El hielo bajo sus pies forma flores delicadas.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Mi poder... responde a mis emociones. Cuando estoy cerca de alguien que... que me hace sentir...' },
      { type: 'narration', text: 'Se detiene. Las flores de hielo se marchitan y ella se cierra de nuevo.' },
      { type: 'dialogue', speaker: 'lyra', text: 'No importa. Vete. Tengo que meditar.' },
      { type: 'narration', text: 'Pero cuando sales, jurarías haber visto una sonrisa en su reflejo en el hielo.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_evening' }
    ]
  },
  {
    id: 'ch2_lyra_sensors',
    chapter: 2,
    background: 'ice-tower',
    lines: [
      { type: 'dialogue', speaker: 'lyra', text: 'Los sensores... Sí. Los he sentido. Hay una perturbación en las líneas ley de la academia.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Algo se está despertando debajo de nosotros. Algo antiguo.' },
      { type: 'narration', text: 'Lyra camina hacia un mural en la pared. Lo toca y se ilumina, mostrando runas antiguas.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Los fundadores sellaron algo aquí. Cada generación, el sello se debilita un poco más.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Si tú también puedes sentirlo... quizás fuiste traído/a aquí por una razón.' },
      { type: 'narration', text: 'Sus ojos te miran con una intensidad nueva. Ya no eres solo un estudiante nuevo.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_evening' }
    ]
  },
  {
    id: 'ch2_kael_training',
    chapter: 2,
    background: 'training-yard',
    lines: [
      { type: 'narration', text: 'El patio de armas resuena con el choque de espadas. Kael dirige a los guardias en entrenamiento.' },
      { type: 'dialogue', speaker: 'kael', text: '¿Vienes a entrenar? Bien. Toma esta espada de práctica.' },
      { type: 'narration', text: 'Kael te lanza una espada de madera encantada. Pesa como acero real.' },
      { type: 'dialogue', speaker: 'kael', text: 'En la academia no solo se aprende magia. El cuerpo también debe estar preparado. Ataca.' },
      { type: 'narration', text: 'Entrenas durante una hora. Kael es exigente pero justo. Corrige tu postura con manos firmes.' },
      { type: 'dialogue', speaker: 'kael', text: 'Tienes potencial. No muchos aguantan mi ritmo.' },
      { type: 'narration', text: 'El sol se pone. Kael te ofrece agua de una cantimplora. Sus manos son cálidas a pesar de la armadura.' },
      { type: 'dialogue', speaker: 'kael', text: 'Escucha... he notado cosas extrañas. Patrullas nocturnas canceladas. Estudiantes que reportan sombras. Algo pasa.' },
      { type: 'dialogue', speaker: 'kael', text: 'Si ves algo... ven a mí. Proteger esta academia es mi deber. Y tú... me importa tu seguridad.' },
      { type: 'narration', text: 'Hay algo en su mirada. Preocupación genuina. Quizás más que eso.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_evening' }
    ]
  },
  {
    id: 'ch2_sage_investigation',
    chapter: 2,
    background: 'library-basement',
    lines: [
      { type: 'narration', text: 'El tercer sótano de la biblioteca es un laberinto de estanterías antiguas. Sage te espera con mapas extendidos.' },
      { type: 'dialogue', speaker: 'sage', text: 'Ah, viniste. Excelente. Mira esto...' },
      { type: 'narration', text: 'El mapa muestra la academia con líneas de energía pulsante. Algunas parpadean en rojo.' },
      { type: 'dialogue', speaker: 'sage', text: 'Las líneas ley están desestabilizándose. El sello de los Fundadores se está agrietando.' },
      { type: 'dialogue', speaker: 'sage', text: 'Llevo años investigando esto. Los fundadores no solo construyeron una academia... construyeron una prisión.' },
      { type: 'choice', text: '', choices: [
        { text: '"¿Una prisión? ¿Para qué?"', effects: { sage: 2 }, nextScene: 'ch2_sage_prison' },
        { text: '"¿Por qué me cuentas esto a mí?"', effects: { sage: 2 }, nextScene: 'ch2_sage_why_me' }
      ]}
    ]
  },
  {
    id: 'ch2_sage_prison',
    chapter: 2,
    background: 'library-basement',
    lines: [
      { type: 'dialogue', speaker: 'sage', text: 'Para un ser. Una entidad de caos puro que amenazó con destruir el mundo hace mil años.' },
      { type: 'dialogue', speaker: 'sage', text: 'Los cuatro fundadores dieron su vida para sellarlo. La academia es la tapa de su tumba.' },
      { type: 'narration', text: 'Sage señala un punto en el mapa donde las líneas se cruzan.' },
      { type: 'dialogue', speaker: 'sage', text: 'Aquí, bajo el Gran Salón, duerme. Y está soñando. Sus sueños... se filtran.' },
      { type: 'dialogue', speaker: 'sage', text: 'Las sombras que algunos ven. Los sensores alterados. Es él, intentando despertar.' },
      { type: 'narration', text: 'Sage te mira con sus ojos violeta. Hay urgencia en ellos.' },
      { type: 'dialogue', speaker: 'sage', text: 'Necesito ayuda. Y creo que tú... eres parte de la respuesta.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_evening' }
    ]
  },
  {
    id: 'ch2_sage_why_me',
    chapter: 2,
    background: 'library-basement',
    lines: [
      { type: 'dialogue', speaker: 'sage', text: '¿Por qué tú? Buena pregunta.' },
      { type: 'narration', text: 'Sage saca un libro antiguo y lo abre en una página marcada.' },
      { type: 'dialogue', speaker: 'sage', text: 'Hay una profecía. Habla de un "forastero con luz dual" que llega cuando el sello se quiebra.' },
      { type: 'dialogue', speaker: 'sage', text: 'Tu magia en clase hoy... ese matiz que Lyra notó. Es único. No pertenece a ningún elemento conocido.' },
      { type: 'narration', text: 'Sage cierra el libro con cuidado.' },
      { type: 'dialogue', speaker: 'sage', text: 'No te asustes. Las profecías son mapas, no cadenas. Pero tu llegada no es casualidad.' },
      { type: 'dialogue', speaker: 'sage', text: 'Y... confieso que me alegra no estar solo en esto. He cargado este secreto mucho tiempo.' },
      { type: 'narration', text: 'Por primera vez, Sage parece vulnerable. Humano.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_evening' }
    ]
  },
  {
    id: 'ch2_melody_song',
    chapter: 2,
    background: 'music-room',
    lines: [
      { type: 'narration', text: 'La sala de música está encantada: las notas flotan en el aire como mariposas de luz.' },
      { type: 'dialogue', speaker: 'melody', text: '¡Llegaste! Quería que fueras el primero en escuchar mi nueva canción para el Festival.' },
      { type: 'narration', text: 'Melody toma su laúd. Sus dedos danzan sobre las cuerdas. La melodía es hermosa y melancólica.' },
      { type: 'dialogue', speaker: 'melody', text: '"Bajo estrellas que lloran, dos almas se encuentran..."' },
      { type: 'narration', text: 'Se detiene de repente. Sus ojos se humedecen.' },
      { type: 'dialogue', speaker: 'melody', text: '...Es sobre mi madre. Ella era barda también. Murió cuando yo era pequeña, en un... accidente mágico.' },
      { type: 'dialogue', speaker: 'melody', text: 'La música es lo único que me queda de ella. Cuando toco... la siento cerca.' },
      { type: 'choice', text: '', choices: [
        { text: 'Abrazarla en silencio', effects: { melody: 3 }, nextScene: 'ch2_melody_embrace' },
        { text: '"Tu madre estaría orgullosa de ti"', effects: { melody: 2 }, nextScene: 'ch2_melody_proud' }
      ]}
    ]
  },
  {
    id: 'ch2_melody_embrace',
    chapter: 2,
    background: 'music-room',
    lines: [
      { type: 'cg_show', text: '', cgId: 'melody_romance1' },
      { type: 'narration', text: 'La abrazas sin decir palabra. Melody se tensa un momento... y luego se aferra a ti.' },
      { type: 'dialogue', speaker: 'melody', text: '...Gracias. Nadie... nadie me había abrazado así en años.' },
      { type: 'narration', text: 'Sus lágrimas caen sobre tu hombro. El laúd emite notas suaves, como si llorara con ella.' },
      { type: 'dialogue', speaker: 'melody', text: 'Eres diferente a los demás. Lo siento. Tu presencia es... cálida. Como un hogar.' },
      { type: 'narration', text: 'Se separa, se seca los ojos y sonríe. Una sonrisa real, sin máscara.' },
      { type: 'dialogue', speaker: 'melody', text: 'Perdón por el drama. Pero... me alegra que hayas venido.' },
      { type: 'nextScene', text: '', nextScene: 'ch2_evening' }
    ]
  },
  {
    id: 'ch2_melody_proud',
    chapter: 2,
    background: 'music-room',
    lines: [
      { type: 'narration', text: 'Melody te mira con ojos enormes. Luego sonríe, y es la sonrisa más brillante que has visto.' },
      { type: 'dialogue', speaker: 'melody', text: '¿Crees... que estaría orgullosa? De verdad lo piensas?' },
      { type: 'narration', text: 'Toca unas notas suaves. Las mariposas de luz se arremolinan alrededor de ambos.' },
      { type: 'dialogue', speaker: 'melody', text: 'Sabes... creo que sí. Ella siempre dijo que la música conecta a los vivos con los que se fueron.' },
      { type: 'dialogue', speaker: 'melody', text: 'Y tú... haces que me sienta menos sola. Eso es un regalo enorme.' },
      { type: 'narration', text: 'Las notas del laúd se vuelven más alegres. Las mariposas de luz danzan más rápido.' },
      { type: 'dialogue', speaker: 'melody', text: '¡Ven al Festival conmigo! Como mi... invitado/a especial. ¡Será mágico!' },
      { type: 'nextScene', text: '', nextScene: 'ch2_evening' }
    ]
  },
  {
    id: 'ch2_evening',
    chapter: 2,
    background: 'dormitory',
    lines: [
      { type: 'scene_change', text: '', background: 'dormitory' },
      { type: 'narration', text: 'Noche. En tu dormitorio, mientras intentas dormir, sientes un temblor sutil. Las paredes vibran.' },
      { type: 'narration', text: 'Por la ventana, ves una luz extraña emanando del suelo del patio. Dura solo un segundo.' },
      { type: 'narration', text: 'Algo se mueve bajo la academia. Algo que no debería estar despierto.' },
      { type: 'narration', text: '— FIN DEL CAPÍTULO 2 —' },
      { type: 'nextScene', text: '', nextScene: 'ch3_intro' }
    ]
  }
];

// ---- CAPÍTULO 3: EL INCIDENTE ----
export const chapter3Scenes: Scene[] = [
  {
    id: 'ch3_intro',
    chapter: 3,
    background: 'dormitory',
    lines: [
      { type: 'scene_change', text: 'Capítulo 3: El Incidente', background: 'dormitory' },
      { type: 'narration', text: 'Te despiertas con gritos. Alarmas mágicas resuenan por toda la academia. Pasillos iluminados en rojo.' },
      { type: 'narration', text: 'Un goblin mensajero golpea tu puerta: "¡Evacuación al patio! ¡Ahora!"' },
      { type: 'narration', text: 'En el pasillo, ves una grieta en el suelo. De ella emana una oscuridad pulsante.' },
      { type: 'choice', text: '¿Qué haces?', choices: [
        { text: 'Correr al patio como indican', effects: { kael: 1 }, nextScene: 'ch3_evacuate' },
        { text: 'Investigar la grieta', effects: { sage: 2, lyra: 1 }, nextScene: 'ch3_investigate' },
        { text: 'Buscar a otros estudiantes', effects: { melody: 2 }, nextScene: 'ch3_help_others' }
      ]}
    ]
  },
  {
    id: 'ch3_evacuate',
    chapter: 3,
    background: 'courtyard',
    lines: [
      { type: 'narration', text: 'Corres al patio. Cientos de estudiantes se agolpan. Kael organiza la evacuación con voz de mando.' },
      { type: 'dialogue', speaker: 'kael', text: '¡Mantengan la calma! ¡Guardias, formen un perímetro!' },
      { type: 'narration', text: 'Kael te ve y asiente. Luego su expresión se oscurece.' },
      { type: 'dialogue', speaker: 'kael', text: 'La grieta se está expandiendo. He visto esto antes... en los archivos. Es el sello.' },
      { type: 'narration', text: 'Lyra aparece, sus manos brillando con hielo. Sage llega con libros abiertos.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Puedo contenerla... temporalmente. Pero necesito ayuda.' },
      { type: 'dialogue', speaker: 'kael', text: '¡Tú! ¡Ayuda a Lyra! ¡Tu magia es diferente, quizás puedas reforzar el sello!' },
      { type: 'narration', text: 'Te unes a Lyra. Juntos, canalizan energía hacia la grieta. El hielo y tu luz se entrelazan.' },
      { type: 'narration', text: 'La grieta se cierra... por ahora. Pero todos saben que es temporal.' },
      { type: 'nextScene', text: '', nextScene: 'ch3_aftermath' }
    ]
  },
  {
    id: 'ch3_investigate',
    chapter: 3,
    background: 'corridor-dark',
    lines: [
      { type: 'narration', text: 'Te acercas a la grieta. La oscuridad pulsa como un corazón. Voces susurran desde dentro.' },
      { type: 'dialogue', speaker: 'sage', text: '¡No te acerques! ...Espera. ¿Puedes oírlas? ¿Las voces?' },
      { type: 'narration', text: 'Sage aparece a tu lado, sin aliento.' },
      { type: 'dialogue', speaker: 'sage', text: 'Solo alguien con afinidad al vacío puede oír las voces del sello. Es... la profecía.' },
      { type: 'narration', text: 'Lyra llega y congela los bordes de la grieta para estabilizarla.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Si puede oír al ente... quizás puede comunicarse con él. O sellarlo de nuevo.' },
      { type: 'narration', text: 'Pones la mano cerca de la grieta. Una voz antigua habla en tu mente:' },
      { type: 'dialogue', speaker: 'narrator', text: '"Libérame... y te daré poder... Libérame... y tus deseos serán realidad..."' },
      { type: 'choice', text: '', choices: [
        { text: 'Rechazar la tentación y alejarte', effects: { lyra: 2, kael: 1 }, nextScene: 'ch3_reject' },
        { text: 'Preguntar al ente qué es realmente', effects: { sage: 2 }, nextScene: 'ch3_question' }
      ]}
    ]
  },
  {
    id: 'ch3_reject',
    chapter: 3,
    background: 'corridor-dark',
    lines: [
      { type: 'narration', text: 'Retiras la mano con fuerza. La oscuridad ruge frustrada.' },
      { type: 'dialogue', speaker: 'lyra', text: '¡Bien hecho! No escuches sus promesas. Es mentiras puras.' },
      { type: 'narration', text: 'Lyra te mira con respeto. Algo ha cambiado entre ustedes.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Resistir su influencia... eso requiere una voluntad enorme. Estoy... impresionada.' },
      { type: 'narration', text: 'Juntos logran estabilizar la grieta. Pero la amenaza persiste.' },
      { type: 'nextScene', text: '', nextScene: 'ch3_aftermath' }
    ]
  },
  {
    id: 'ch3_question',
    chapter: 3,
    background: 'corridor-dark',
    lines: [
      { type: 'dialogue', speaker: 'sage', text: '¡No! ¡No debes dialogar con—!' },
      { type: 'narration', text: 'La voz responde: "Soy lo que fue encerrado injustamente. Los fundadores temían lo que no comprendían..."' },
      { type: 'narration', text: 'Sage toma notas frenéticamente. Sus ojos brillan con excitación académica.' },
      { type: 'dialogue', speaker: 'sage', text: 'Fascinante... Si dice la verdad... la historia oficial podría estar equivocada...' },
      { type: 'dialogue', speaker: 'lyra', text: 'O es exactamente lo que quiere que creamos. No podemos confiar en sus palabras.' },
      { type: 'narration', text: 'La conversación se corta cuando la grieta se estabiliza. Pero has ganado información valiosa.' },
      { type: 'nextScene', text: '', nextScene: 'ch3_aftermath' }
    ]
  },
  {
    id: 'ch3_help_others',
    chapter: 3,
    background: 'corridor',
    lines: [
      { type: 'narration', text: 'Corres por los pasillos buscando estudiantes. En una esquina, encuentras a Melody ayudando a primeros años.' },
      { type: 'dialogue', speaker: 'melody', text: '¡Gracias a los dioses que llegas! Los más pequeños están aterrados.' },
      { type: 'narration', text: 'Melody canta una melodía suave que calma a los niños. Su laúd brilla con luz dorada.' },
      { type: 'dialogue', speaker: 'melody', text: 'No puedo dejarlos... pero alguien debe guiarlos al patio. ¿Me ayudas?' },
      { type: 'narration', text: 'Juntos guían a los estudiantes al patio. Melody no deja de cantar, manteniendo la calma.' },
      { type: 'dialogue', speaker: 'melody', text: 'Eres buena persona. Lo supe desde el primer día. El mundo necesita más personas como tú.' },
      { type: 'narration', text: 'En el patio, Kael y Lyra ya contienen la grieta. El peligro pasa... por ahora.' },
      { type: 'nextScene', text: '', nextScene: 'ch3_aftermath' }
    ]
  },
  {
    id: 'ch3_aftermath',
    chapter: 3,
    background: 'great-hall',
    lines: [
      { type: 'scene_change', text: '', background: 'great-hall' },
      { type: 'narration', text: 'Reunión de emergencia en el Gran Salón. El director habla con gravedad.' },
      { type: 'dialogue', speaker: 'narrator', text: '"El sello se ha debilitado. El Festival continuará, pero con medidas de seguridad reforzadas. Necesitamos mantener la moral alta."' },
      { type: 'narration', text: 'Los cuatro se acercan a ti después de la reunión.' },
      { type: 'dialogue', speaker: 'kael', text: 'Lo que pasó hoy... no es normal. El sello no debería haberse agrietado tan pronto.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Alguien está acelerando el proceso. Alguien dentro de la academia.' },
      { type: 'dialogue', speaker: 'sage', text: 'Tenemos poco tiempo. Si el sello se rompe durante el Festival...' },
      { type: 'dialogue', speaker: 'melody', text: '...sería un desastre. Con tanta gente reunida, tanta emoción... el ente se alimentaría.' },
      { type: 'choice', text: '¿Qué propones?', choices: [
        { text: '"Debemos investigar quién está debilitando el sello"', effects: { sage: 2, kael: 1 }, nextScene: 'ch3_investigation_plan' },
        { text: '"Debemos reforzar el sello antes del Festival"', effects: { lyra: 2 }, nextScene: 'ch3_seal_plan' },
        { text: '"Debemos cancelar el Festival por seguridad"', effects: { kael: 2, melody: -1 }, nextScene: 'ch3_cancel_plan' }
      ]}
    ]
  },
  {
    id: 'ch3_investigation_plan',
    chapter: 3,
    background: 'great-hall',
    lines: [
      { type: 'dialogue', speaker: 'sage', text: 'Exacto. Hay un traidor. Y creo que sé por dónde empezar a buscar.' },
      { type: 'dialogue', speaker: 'kael', text: 'Yo reforzaré las patrullas. Nadie se moverá sin que lo sepa.' },
      { type: 'narration', text: 'El grupo se forma. Por primera vez, sientes que no estás solo/a en esto.' },
      { type: 'narration', text: 'Cada uno te mira con confianza. Eres el centro de algo importante.' },
      { type: 'nextScene', text: '', nextScene: 'ch3_night' }
    ]
  },
  {
    id: 'ch3_seal_plan',
    chapter: 3,
    background: 'great-hall',
    lines: [
      { type: 'dialogue', speaker: 'lyra', text: 'Puedo enseñarte la técnica de refuerzo. Pero necesitarás controlar tu magia dual.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Ven a la torre de hielo esta noche. Te entrenaré personalmente.' },
      { type: 'narration', text: 'Hay determinación en sus ojos... y algo más. ¿Preocupación por ti?' },
      { type: 'dialogue', speaker: 'melody', text: '¡Y yo puedo preparar una canción de protección! ¡La música también sella!' },
      { type: 'nextScene', text: '', nextScene: 'ch3_night' }
    ]
  },
  {
    id: 'ch3_cancel_plan',
    chapter: 3,
    background: 'great-hall',
    lines: [
      { type: 'dialogue', speaker: 'kael', text: 'Es la opción más segura. Pero el director no aceptará fácilmente.' },
      { type: 'dialogue', speaker: 'melody', text: 'El Festival es... importante para muchos. Es la única alegría que tienen en meses de estudio.' },
      { type: 'narration', text: 'Melody parece decepcionada, pero asiente.' },
      { type: 'dialogue', speaker: 'sage', text: 'Quizás un punto medio: reducir el Festival pero no cancelarlo. Menos gente, más protección.' },
      { type: 'narration', text: 'Acuerdan presentar la propuesta al director juntos. La unidad del grupo es vuestra mayor fortaleza.' },
      { type: 'nextScene', text: '', nextScene: 'ch3_night' }
    ]
  },
  {
    id: 'ch3_night',
    chapter: 3,
    background: 'dormitory',
    lines: [
      { type: 'scene_change', text: '', background: 'dormitory' },
      { type: 'narration', text: 'Esa noche, no puedes dormir. Las palabras del ente resuenan en tu mente.' },
      { type: 'narration', text: 'Una sombra se desliza por tu ventana. Un mensaje atado a una flecha: "Confía en nadie. El traidor está cerca. —S"' },
      { type: 'narration', text: '¿S? ¿Sage? ¿O alguien más? La paranoia se instala.' },
      { type: 'narration', text: 'Pero mañana es el Festival. Y necesitas decidir en quién confiar.' },
      { type: 'choice', text: '¿Con quién compartes el mensaje?', choices: [
        { text: 'Con Lyra - ella es la más analítica', effects: { lyra: 2 }, nextScene: 'ch3_trust_lyra' },
        { text: 'Con Kael - él puede protegerte', effects: { kael: 2 }, nextScene: 'ch3_trust_kael' },
        { text: 'Con Sage - la S podría ser de él', effects: { sage: 2 }, nextScene: 'ch3_trust_sage' },
        { text: 'Con Melody - ella conoce los secretos de todos', effects: { melody: 2 }, nextScene: 'ch3_trust_melody' }
      ]}
    ]
  },
  {
    id: 'ch3_trust_lyra',
    chapter: 3,
    background: 'ice-tower',
    lines: [
      { type: 'narration', text: 'Lyra lee el mensaje con expresión seria. El hielo de la torre cruje.' },
      { type: 'dialogue', speaker: 'lyra', text: 'La "S"... podría ser muchos. Pero hay algo que no te he dicho.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Mi familia... sirvió a los fundadores. Sé cosas sobre el sello que otros ignoran.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Hay un ritual que puede reforzar el sello. Pero requiere dos magos... en perfecta sincronía.' },
      { type: 'narration', text: 'Sus ojos azules te buscan. Hay vulnerabilidad y confianza en su mirada.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Quiero que seas tú. Mi compañero/a en el ritual. ¿Confías en mí?' },
      { type: 'narration', text: '— FIN DEL CAPÍTULO 3 —' },
      { type: 'nextScene', text: '', nextScene: 'ch4_intro' }
    ]
  },
  {
    id: 'ch3_trust_kael',
    chapter: 3,
    background: 'guard-quarters',
    lines: [
      { type: 'narration', text: 'Kael examina la flecha y el mensaje. Su mandíbula se tensa.' },
      { type: 'dialogue', speaker: 'kael', text: 'Alguien entró en tu habitación. Esto es inaceptable.' },
      { type: 'dialogue', speaker: 'kael', text: 'Escucha... quiero que estés bajo mi protección hasta que esto termine. No te dejaré solo/a.' },
      { type: 'narration', text: 'Su mano encuentra la tuya. Su agarre es firme, cálido, reconfortante.' },
      { type: 'dialogue', speaker: 'kael', text: 'He perdido gente por no actuar a tiempo. No voy a perderte a ti.' },
      { type: 'narration', text: 'Hay más que deber en sus palabras. Hay algo personal. Algo que ambos sienten pero no nombran.' },
      { type: 'dialogue', speaker: 'kael', text: 'Mañana, en el Festival... quédate cerca de mí. Por favor.' },
      { type: 'narration', text: '— FIN DEL CAPÍTULO 3 —' },
      { type: 'nextScene', text: '', nextScene: 'ch4_intro' }
    ]
  },
  {
    id: 'ch3_trust_sage',
    chapter: 3,
    background: 'library-basement',
    lines: [
      { type: 'narration', text: 'Sage palidece al ver el mensaje. Se quita las gafas nerviosamente.' },
      { type: 'dialogue', speaker: 'sage', text: 'La S... no soy yo. Pero sé quién podría ser.' },
      { type: 'dialogue', speaker: 'sage', text: 'Hay un quinto... un estudiante que desapareció hace meses. Sebastian. Investigaba el sello.' },
      { type: 'dialogue', speaker: 'sage', text: 'Creo que descubrió algo que no debía. Y ahora... quizás intenta advertirnos. O manipulamos.' },
      { type: 'narration', text: 'Sage te mira con intensidad renovada.' },
      { type: 'dialogue', speaker: 'sage', text: 'Tú y yo... somos los únicos que entendemos lo que está en juego. Juntos podemos descifrar esto.' },
      { type: 'dialogue', speaker: 'sage', text: 'Confío en ti. Más de lo que debería, quizás. Pero... necesito alguien en quien creer.' },
      { type: 'narration', text: '— FIN DEL CAPÍTULO 3 —' },
      { type: 'nextScene', text: '', nextScene: 'ch4_intro' }
    ]
  },
  {
    id: 'ch3_trust_melody',
    chapter: 3,
    background: 'music-room',
    lines: [
      { type: 'narration', text: 'Melody escucha y sus ojos se abren de par en par.' },
      { type: 'dialogue', speaker: 'melody', text: 'La S... Sebastian. Era mi... amigo. Más que amigo. Nos queríamos.' },
      { type: 'narration', text: 'Su voz se quiebra. Las cuerdas del laúd vibran solas.' },
      { type: 'dialogue', speaker: 'melody', text: 'Desapareció hace meses. Nadie quiso buscarlo. Dijeron que se fue voluntariamente.' },
      { type: 'dialogue', speaker: 'melody', text: 'Pero si él envió esto... está vivo. Y está intentando ayudarnos.' },
      { type: 'narration', text: 'Melody se acerca. Sus ojos brillan con lágrimas y determinación.' },
      { type: 'dialogue', speaker: 'melody', text: 'Gracias por confiar en mí. Prometo que no te fallaré. Encontraremos a Sebastian... y salvaremos la academia.' },
      { type: 'narration', text: '— FIN DEL CAPÍTULO 3 —' },
      { type: 'nextScene', text: '', nextScene: 'ch4_intro' }
    ]
  }
];

// ---- CAPÍTULO 4: EL FESTIVAL ----
export const chapter4Scenes: Scene[] = [
  {
    id: 'ch4_intro',
    chapter: 4,
    background: 'festival',
    lines: [
      { type: 'scene_change', text: 'Capítulo 4: El Festival de las Estrellas', background: 'festival' },
      { type: 'narration', text: 'El día del Festival. La academia brilla con miles de linternas encantadas. Música llena el aire.' },
      { type: 'narration', text: 'Pero bajo la alegría, la tensión es palpable. Los guardias patrullan el doble. Los sensores mágicos zumban.' },
      { type: 'narration', text: 'Es hora de elegir a tu compañero/a para el baile ceremonial. Tu corazón sabe a quién buscar.' },
      { type: 'affinity_check', text: '', affinityCheck: { character: 'highest', threshold: 5, passScene: 'ch4_romance_path', failScene: 'ch4_friendship_path' } }
    ]
  },
  {
    id: 'ch4_romance_path',
    chapter: 4,
    background: 'festival',
    lines: [
      { type: 'narration', text: 'Tu corazón late con fuerza. Sabes exactamente con quién quieres estar esta noche.' },
      { type: 'narration', text: 'Las estrellas brillan con intensidad sobrenatural. El Festival comienza.' },
      { type: 'narration', text: 'Entre la multitud, ves a la persona que ha capturado tu corazón. Se acerca.' },
      { type: 'narration', text: '— Escena de Romance —' },
      { type: 'affinity_check', text: '', affinityCheck: { character: 'lyra', threshold: 7, passScene: 'ch4_lyra_romance2', failScene: 'ch4_check_kael' } }
    ]
  },
  {
    id: 'ch4_check_kael',
    chapter: 4,
    background: 'festival',
    lines: [
      { type: 'affinity_check', text: '', affinityCheck: { character: 'kael', threshold: 7, passScene: 'ch4_kael_romance2', failScene: 'ch4_check_sage' } }
    ]
  },
  {
    id: 'ch4_check_sage',
    chapter: 4,
    background: 'festival',
    lines: [
      { type: 'affinity_check', text: '', affinityCheck: { character: 'sage', threshold: 7, passScene: 'ch4_sage_romance2', failScene: 'ch4_check_melody' } }
    ]
  },
  {
    id: 'ch4_check_melody',
    chapter: 4,
    background: 'festival',
    lines: [
      { type: 'affinity_check', text: '', affinityCheck: { character: 'melody', threshold: 7, passScene: 'ch4_melody_romance2', failScene: 'ch4_friendship_path' } }
    ]
  },
  {
    id: 'ch4_lyra_romance2',
    chapter: 4,
    background: 'ice-garden',
    lines: [
      { type: 'cg_show', text: '', cgId: 'lyra_romance2' },
      { type: 'narration', text: 'Lyra te espera en un jardín secreto donde el hielo y las flores coexisten. Su vestido brilla como aurora boreal.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Viniste. De verdad viniste.' },
      { type: 'narration', text: 'Su voz tiembla. Por primera vez, no hay barrera de hielo entre ustedes.' },
      { type: 'dialogue', speaker: 'lyra', text: 'Toda mi vida he mantenido a todos alejados. El hielo era mi escudo. Pero contigo... se derrite.' },
      { type: 'narration', text: 'Toma tu mano. Donde sus dedos tocan los tuyos, pequeñas flores de hielo florecen.' },
      { type: 'dialogue', speaker: 'lyra', text: 'No sé hacer esto. No sé ser... cálida. Pero quiero intentarlo. Contigo.' },
      { type: 'narration', text: 'Se acerca. El mundo se reduce a sus ojos azules y el brillo de las estrellas.' },
      { type: 'dialogue', speaker: 'lyra', text: '¿Puedo...? ¿Puedo besarte? Es la primera vez que quiero hacerlo.' },
      { type: 'narration', text: 'Bajo un cielo de estrellas y flores de hielo, sus labios encuentran los tuyos. Fríos al principio, luego... perfectos.' },
      { type: 'narration', text: 'El sello bajo la academia pulsa... pero esta noche, el amor es más fuerte que la oscuridad.' },
      { type: 'nextScene', text: '', nextScene: 'ch4_climax' }
    ]
  },
  {
    id: 'ch4_kael_romance2',
    chapter: 4,
    background: 'balcony',
    lines: [
      { type: 'cg_show', text: '', cgId: 'kael_romance2' },
      { type: 'narration', text: 'Kael te encuentra en el balcón. Sin armadura, con una túnica simple. Se ve... vulnerable.' },
      { type: 'dialogue', speaker: 'kael', text: 'Esta noche no soy el capitán. Soy solo... yo. Kael. Un hombre que ha encontrado algo que vale más que cualquier batalla.' },
      { type: 'narration', text: 'Se acerca. Sus manos, normalmente tan firmes, tiemblan ligeramente.' },
      { type: 'dialogue', speaker: 'kael', text: 'Siempre he sido el protector. El fuerte. Pero contigo... puedo dejar de ser fuerte un momento.' },
      { type: 'narration', text: 'Apoya su frente contra la tuya. Su respiración es cálida en la noche fría.' },
      { type: 'dialogue', speaker: 'kael', text: 'No sé cómo se supone que se hace esto. Pero sé que quiero estar a tu lado. En cada batalla. En cada amanecer.' },
      { type: 'narration', text: 'Sus labios encuentran los tuyos con la misma determinación con la que empuña su espada: sin dudas, con todo el corazón.' },
      { type: 'dialogue', speaker: 'kael', text: 'Te protegeré. Siempre. Eso... es mi promesa.' },
      { type: 'narration', text: 'Bajo las estrellas del Festival, dos corazones laten al unísono.' },
      { type: 'nextScene', text: '', nextScene: 'ch4_climax' }
    ]
  },
  {
    id: 'ch4_sage_romance2',
    chapter: 4,
    background: 'library-secret',
    lines: [
      { type: 'cg_show', text: '', cgId: 'sage_romance2' },
      { type: 'narration', text: 'Sage te lleva a una habitación secreta en la biblioteca. Libros flotan formando un dosel de conocimiento.' },
      { type: 'dialogue', speaker: 'sage', text: 'He leído sobre el amor en mil libros. He estudiado la química, la poesía, la filosofía del corazón.' },
      { type: 'dialogue', speaker: 'sage', text: 'Pero nada... nada me preparó para sentirlo.' },
      { type: 'narration', text: 'Se quita las gafas. Sin ellas, sus ojos violeta son aún más intensos.' },
      { type: 'dialogue', speaker: 'sage', text: 'Contigo, las palabras me fallan. Y yo siempre tengo las palabras perfectas.' },
      { type: 'narration', text: 'Ríe suavemente. Es la primera vez que lo ves reír así. Libre.' },
      { type: 'dialogue', speaker: 'sage', text: 'Eres mi capítulo favorito. Mi teoría confirmada. Mi mayor descubrimiento.' },
      { type: 'narration', text: 'Se acerca. Los libros a su alrededor giran más rápido, como si celebraran.' },
      { type: 'dialogue', speaker: 'sage', text: '¿Puedo... escribir este momento en mi corazón? Para recordarlo por siempre.' },
      { type: 'narration', text: 'El beso sabe a tinta antigua y promesas nuevas. Los libros susurran bendiciones en lenguas olvidadas.' },
      { type: 'nextScene', text: '', nextScene: 'ch4_climax' }
    ]
  },
  {
    id: 'ch4_melody_romance2',
    chapter: 4,
    background: 'stage',
    lines: [
      { type: 'cg_show', text: '', cgId: 'melody_romance2' },
      { type: 'narration', text: 'Melody está en el escenario. Pero esta noche, su canción es solo para ti.' },
      { type: 'dialogue', speaker: 'melody', text: '"En un mundo de sombras, encontré tu luz. En una melodía rota, encontré mi canción..."' },
      { type: 'narration', text: 'Baja del escenario y se acerca. Las notas doradas los envuelven a ambos.' },
      { type: 'dialogue', speaker: 'melody', text: 'Escribí esta canción el día que te conocí. Cada nota es un latido. Cada verso, una razón para amarte.' },
      { type: 'narration', text: 'Sus ojos brillan. No hay tristeza esta noche. Solo alegría pura.' },
      { type: 'dialogue', speaker: 'melody', text: 'Mi madre decía que la música del alma solo suena cuando encuentras a tu otra mitad. Ahora lo entiendo.' },
      { type: 'dialogue', speaker: 'melody', text: 'Tú eres mi melodía. La que estaba buscando sin saberlo.' },
      { type: 'narration', text: 'El beso es como una sinfonía: suave al principio, luego crescendo, llenando cada espacio con calor y luz.' },
      { type: 'dialogue', speaker: 'melody', text: 'Quédate conmigo. Siempre. Hagamos música juntos.' },
      { type: 'nextScene', text: '', nextScene: 'ch4_climax' }
    ]
  },
  {
    id: 'ch4_friendship_path',
    chapter: 4,
    background: 'festival',
    lines: [
      { type: 'narration', text: 'El Festival es hermoso. Bailas, ríes, disfrutas. Los cuatro están cerca, formando un grupo unido.' },
      { type: 'narration', text: 'Hay cariño entre ustedes, pero algo más profundo aún no ha florecido. Quizás necesite más tiempo.' },
      { type: 'narration', text: 'Pero la amistad que han forjado es sólida como el acero. Y eso, en sí mismo, es valioso.' },
      { type: 'nextScene', text: '', nextScene: 'ch4_climax' }
    ]
  },
  {
    id: 'ch4_climax',
    chapter: 4,
    background: 'great-hall',
    lines: [
      { type: 'scene_change', text: '', background: 'great-hall' },
      { type: 'narration', text: 'A medianoche, el suelo tiembla. Las linternas se apagan. Un rugido surge de las profundidades.' },
      { type: 'narration', text: '¡El sello se rompe!' },
      { type: 'narration', text: 'Oscuridad pura emerge del suelo del Gran Salón. Los estudiantes gritan. El caos estalla.' },
      { type: 'dialogue', speaker: 'narrator', text: '"¡LIBERTAD! ¡MIL AÑOS DE PRISIÓN TERMINAN HOY!"' },
      { type: 'narration', text: 'Una sombra colosal se eleva. Pero entonces... Sebastian aparece.' },
      { type: 'narration', text: 'Un joven pálido, ojeroso, pero con determinación en los ojos.' },
      { type: 'dialogue', speaker: 'narrator', text: '"¡No! ¡El sello puede repararse! ¡Necesito que canalices tu luz dual al núcleo del sello!"' },
      { type: 'choice', text: 'Es el momento decisivo. ¿Qué haces?', choices: [
        { text: 'Canalizar toda tu energía para sellar al ente', effects: { lyra: 1, kael: 1, sage: 1, melody: 1 }, nextScene: 'ch4_ending_good' },
        { text: 'Intentar comunicarte con el ente primero', effects: { sage: 2 }, nextScene: 'ch4_ending_neutral' }
      ]}
    ]
  },
  {
    id: 'ch4_ending_good',
    chapter: 4,
    background: 'great-hall',
    lines: [
      { type: 'cg_show', text: '', cgId: 'ending_good' },
      { type: 'narration', text: 'Canalizas toda tu energía. Los cuatro se unen a tu lado, combinando sus poderes con el tuyo.' },
      { type: 'narration', text: 'Lyra: hielo. Kael: fuerza. Sage: sabiduría. Melody: esperanza.' },
      { type: 'narration', text: 'Tu luz dual se expande, envolviendo la oscuridad. El ente ruge... y se desvanece.' },
      { type: 'narration', text: 'El sello se repara, más fuerte que nunca. La academia está a salvo.' },
      { type: 'narration', text: 'Sebastian sonríe antes de desvanecerse. Su misión ha terminado.' },
      { type: 'narration', text: 'Los estudiantes aplauden. Lágrimas de alivio. El Festival puede continuar.' },
      { type: 'narration', text: 'Pero lo más importante... has encontrado algo más valioso que cualquier poder.' },
      { type: 'narration', text: '═══ FINAL: LA LUZ DE STELLARIS ═══' },
      { type: 'narration', text: 'Has completado el Acto I. La historia continúa...' },
      { type: 'narration', text: 'Gracias por jugar. ❤️' }
    ]
  },
  {
    id: 'ch4_ending_neutral',
    chapter: 4,
    background: 'great-hall',
    lines: [
      { type: 'narration', text: 'Te acercas a la sombra. Tu luz dual te protege de su influencia.' },
      { type: 'narration', text: 'En tu mente, el ente habla. Y esta vez... escuchas verdad.' },
      { type: 'dialogue', speaker: 'narrator', text: '"No soy malvado. Fui traicionado. Los fundadores temían mi poder y me encerraron..."' },
      { type: 'narration', text: 'Sage toma notas frenéticamente. Tiene razón: la historia oficial podría estar equivocada.' },
      { type: 'choice', text: '', choices: [
        { text: 'Ayudar al ente a encontrar paz', effects: { sage: 2 }, nextScene: 'ch4_ending_truth' },
        { text: 'Sellalo de nuevo, es muy arriesgado', effects: { kael: 1, lyra: 1 }, nextScene: 'ch4_ending_good' }
      ]}
    ]
  },
  {
    id: 'ch4_ending_truth',
    chapter: 4,
    background: 'great-hall',
    lines: [
      { type: 'cg_show', text: '', cgId: 'ending_truth' },
      { type: 'narration', text: 'Con la ayuda de Sage y Sebastian, descubres la verdad: el ente no era malvado. Era un guardián traicionado.' },
      { type: 'narration', text: 'Tu luz dual le da paz. Mil años de dolor se disuelven. El ente sonríe... y se transforma en luz.' },
      { type: 'narration', text: 'La academia brilla como nunca. El sello se transforma en una fuente de poder positivo.' },
      { type: 'narration', text: 'La verdad ha liberado a todos. Y tú has cambiado la historia para siempre.' },
      { type: 'narration', text: '═══ FINAL: LA VERDAD DE LOS FUNDADORES ═══' },
      { type: 'narration', text: 'Has completado el Acto I. La historia continúa...' },
      { type: 'narration', text: 'Gracias por jugar. ❤️' }
    ]
  }
];

// ---- TODAS LAS ESCENAS ----
export const allScenes: Scene[] = [
  ...chapter1Scenes,
  ...chapter2Scenes,
  ...chapter3Scenes,
  ...chapter4Scenes
];

// ---- CAPÍTULOS ----
export const chapters: Chapter[] = [
  { id: 'ch1', number: 1, title: 'La Llegada', scenes: ['ch1_intro'] },
  { id: 'ch2', number: 2, title: 'Primeras Clases', scenes: ['ch2_intro'] },
  { id: 'ch3', number: 3, title: 'El Incidente', scenes: ['ch3_intro'] },
  { id: 'ch4', number: 4, title: 'El Festival de las Estrellas', scenes: ['ch4_intro'] }
];

// ---- ESCENA INICIAL ----
export const STARTING_SCENE = 'ch1_intro';
