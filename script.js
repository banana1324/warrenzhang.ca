import * as THREE from 'three';

import {
  OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import {
  CSS3DRenderer,
  CSS3DObject
} from 'three/addons/renderers/CSS3DRenderer.js';

import {
  RoundedBoxGeometry
} from 'three/addons/geometries/RoundedBoxGeometry.js';


/* =========================================================
   EXTERNAL LINKS
========================================================= */

const LINKS = {
  github:
    'https://github.com/banana1324',

  linkedin:
    'https://www.linkedin.com/in/fuyuanzhang',

  youtube:
    'https://www.youtube.com/@goosehjonk918',

  email:
    'mailto:warrenz7980@gmail.com',

  resume:
    './assets/resume.pdf'
};


/* =========================================================
   PORTFOLIO CONTENT
========================================================= */

const CONTENT = {

  home: [

    {
      id:
        'home',

      label:
        'Home',

      title:
        'Software that reaches the physical world.',

      meta:
        'Computer Science · Software · Embedded · Robotics',

      description:
        'I build systems where code eventually has to interact with something real: a robot, a sensor, a radio, a circuit, or a person using it. This portfolio works the same way—the robotic curator physically brings each piece of information into view.',

      tags: [
        'Python',
        'C/C++',
        'Embedded',
        'Robotics',
        'Three.js'
      ],

      metrics: [
        [
          '$195K+',
          'raised across 3 Kickstarter campaigns'
        ],

        [
          '15',
          'RP2040 apps and games built'
        ],

        [
          '200+',
          'hours coaching badminton'
        ]
      ],

      details: [
        'Developed software across ESP32, RP2040, Arduino Uno, and Raspberry Pi platforms.',

        'Built computer-vision interactions, sensor networks, wireless systems, and technical learning software.',

        'Interested in software engineering, robotics, embedded systems, applied AI, and interactive 3D.'
      ],

      prop:
        'robot'
    }

  ],


  about: [

    {
      id:
        'about',

      label:
        'About',

      title:
        'I like understanding the whole system.',

      meta:
        'Waterloo Computer Science · Richmond, BC',

      description:
        'My strongest projects cross boundaries. I like writing the software, connecting it to hardware, testing the system, and tracing failures across code, electronics, communication, timing, and mechanics rather than treating each layer separately.',

      tags: [
        'Systems',
        'Embedded',
        'Robotics',
        'AI',
        '3D'
      ],

      metrics: [
        [
          'Waterloo',
          'Computer Science'
        ],

        [
          'Hardware + code',
          'preferred problem space'
        ],

        [
          'Build → test',
          'iteration over demos'
        ]
      ],

      details: [
        'Technical toolkit includes Python, MicroPython, Java, C/C++, JavaScript, HTML/CSS, ESP32, RP2040, Raspberry Pi, LoRaWAN, MQTT, Node-RED, PID, odometry, oscilloscopes, and logic analyzers.',

        'I enjoy Blender rigid-body simulations and armatures because they turn static geometry into systems with behavior.',

        'Outside technical work, I have coached badminton and performed trombone in school and orchestral settings.'
      ],

      prop:
        'portrait'
    }

  ],


  projects: [

    {
      id:
        'wildfire',

      label:
        'Wildfire Detection',

      title:
        'Wildfire Detection System',

      meta:
        'C++ · LoRaWAN · Raspberry Pi · BME680 · MQTT · Node-RED',

      description:
        'An end-to-end IoT monitoring system built around a BME680 environmental sensor, a LoRaWAN node, and a Raspberry Pi gateway. Sensor data travels over long-range radio into an MQTT and Node-RED pipeline for processing and visualization.',

      tags: [
        'C++',
        'BME680',
        'LoRaWAN',
        'MQTT',
        'Node-RED'
      ],

      metrics: [
        [
          'BME680',
          'environmental sensing'
        ],

        [
          'LoRaWAN',
          'long-range transport'
        ],

        [
          'Node-RED',
          'processing + visualization'
        ]
      ],

      details: [
        'Configured a sensor node and Raspberry Pi gateway for long-range LoRaWAN communication.',

        'Integrated MQTT and Node-RED to process and visualize incoming environmental data.',

        'Tested the complete sensor-to-network-to-dashboard path as one system.'
      ],

      prop:
        'wildfire'
    },


    {
      id:
        'kc15',

      label:
        'KC15',

      title:
        'KC15 RP2040 Learning Platform',

      meta:
        'Python · MicroPython · RP2040 · Educational Software',

      description:
        'For EIM Technology’s KC15 microcontroller learning kit, I built and debugged 15 software applications and games and created supporting tutorials so students could reproduce and understand each project.',

      tags: [
        'RP2040',
        'MicroPython',
        'Python',
        'Testing'
      ],

      metrics: [
        [
          '15',
          'apps and games'
        ],

        [
          'RP2040',
          'target platform'
        ],

        [
          'Tutorials',
          'learning materials produced'
        ]
      ],

      details: [
        'Developed and debugged 15 applications and games for the KC15 platform.',

        'Verified reliable execution on the Raspberry Pi Pico / RP2040 platform.',

        'Produced technical tutorials and demonstrations intended for student use.'
      ],

      prop:
        'pcb'
    },


    {
      id:
        'vision',

      label:
        'Vision Robotics',

      title:
        'Computer Vision Robotics',

      meta:
        'Python · Face Recognition · Finger Recognition · Robot Control',

      description:
        'Computer-vision projects that convert human visual input into physical robot actions. I built applications using face and finger recognition and connected those recognition results to robotic systems.',

      tags: [
        'Python',
        'Computer Vision',
        'Robotics',
        'Embedded'
      ],

      metrics: [
        [
          'Vision',
          'human input'
        ],

        [
          'Robot',
          'physical output'
        ],

        [
          '2 modes',
          'face + finger recognition'
        ]
      ],

      details: [
        'Built face-recognition and finger-recognition interactions.',

        'Converted visual classifications into commands for robotic systems.',

        'Combined perception software with embedded and physical hardware rather than keeping vision as a desktop-only demo.'
      ],

      prop:
        'robot'
    },


    {
      id:
        'analog',

      label:
        'Analog Circuits',

      title:
        'Analog Circuit II',

      meta:
        'Op-Amps · MOSFETs · BJTs · Diodes · Laplace · Fourier',

      description:
        'Technical verification work for an analog-circuit learning project, checking diagrams, explanations, and teaching material while working with semiconductor devices and the mathematics used to analyze circuit behavior.',

      tags: [
        'Op-Amps',
        'MOSFETs',
        'BJTs',
        'Laplace',
        'Fourier'
      ],

      metrics: [
        [
          'Op-Amps',
          'active circuit analysis'
        ],

        [
          'MOSFET / BJT',
          'semiconductor devices'
        ],

        [
          'Transforms',
          'Laplace + Fourier'
        ]
      ],

      details: [
        'Verified diagrams, technical text, and teaching points for correctness.',

        'Worked with operational amplifiers, MOSFETs, BJTs, and diode behavior.',

        'Used mathematical analysis to reason about circuit response and verification.'
      ],

      prop:
        'circuit'
    }

  ],


  experience: [

    {
      id:
        'eim',

      label:
        'EIM Technology',

      title:
        'Technical Support Intern · EIM Technology',

      meta:
        'Nov 2024 – Jun 2026 · Richmond, BC',

      description:
        'Worked across embedded software, hardware integration, product testing, technical verification, and learning materials. The role repeatedly moved between code, electronics, debugging tools, and systems intended for real learners.',

      tags: [
        'Embedded',
        'MicroPython',
        'LoRaWAN',
        'Hardware Debugging'
      ],

      metrics: [
        [
          '$195K+',
          'Kickstarter campaign funding'
        ],

        [
          '446',
          'campaign backers'
        ],

        [
          '3',
          'Kickstarter projects contributed to'
        ]
      ],

      details: [
        'Developed embedded software for ESP32, Raspberry Pi Pico, Arduino Uno, and Raspberry Pi using Python, MicroPython, and Arduino C/C++.',

        'Integrated sensors and LoRaWAN systems and used oscilloscopes and logic analyzers to diagnose hardware and communication issues.',

        'Contributed software development and promotional photography to three Kickstarter campaigns.'
      ],

      prop:
        'pcb'
    },


    {
      id:
        'vex',

      label:
        'VEX V5 Robotics Competition',

      title:
        'VEX V5 Robotics Competition',

      meta:
        'Robotics Team 4471A · CAD · PID · Odometry',

      description:
        'Competition robotics work where mechanical design, control software, autonomous behavior, and repeated testing had to function together under real match constraints.',

      tags: [
        'VEX V5',
        'CAD',
        'PID Control',
        'Odometry'
      ],

      metrics: [
        [
          '4471A',
          'competition robotics team'
        ],

        [
          'PID',
          'motion control'
        ],

        [
          'Odometry',
          'position tracking'
        ]
      ],

      details: [
        'Worked on CAD and mechanical robot systems alongside programming and control.',

        'Applied PID control and odometry to improve repeatability and autonomous movement.',

        'Iterated through testing, mechanical changes, and software tuning in a competitive environment.'
      ],

      prop:
        'vex'
    },


    {
      id:
        'coaching',

      label:
        'Badminton Coach',

      title:
        'Badminton Coach · Stage18',

      meta:
        'May 2024 – May 2026 · Richmond, BC',

      description:
        'Coached young athletes in group lessons, turning technical corrections into clear instructions while keeping sessions organized and supportive. Coaching became a different kind of debugging: seeing why a movement was failing and finding an explanation that clicked.',

      tags: [
        'Coaching',
        'Communication',
        'Leadership'
      ],

      metrics: [
        [
          '200+',
          'coaching hours'
        ],

        [
          '40+',
          'students coached'
        ],

        [
          '7–15',
          'student ages'
        ]
      ],

      details: [
        'Coached more than 40 students across over 200 hours.',

        'Helped students strengthen badminton technique and confidence.',

        'Set clear expectations for conduct and sportsmanship while keeping group lessons focused.'
      ],

      prop:
        'racket'
    },


    {
      id:
        'orchestra',

      label:
        'Orchestra',

      title:
        'Second Trombone · Vancouver Chinese Philharmonic Orchestra',

      meta:
        'Orchestral Performance · Trombone',

      description:
        'Performed as second trombone with the Vancouver Chinese Philharmonic Orchestra, including a performance for the Consulate-General of the People’s Republic of China in Vancouver.',

      tags: [
        'Trombone',
        'Orchestra',
        'Live Performance'
      ],

      metrics: [
        [
          '2nd',
          'trombone part'
        ],

        [
          'Orchestra',
          'ensemble performance'
        ],

        [
          'Vancouver',
          'Chinese Philharmonic Orchestra'
        ]
      ],

      details: [
        'Performed as second trombone with the Vancouver Chinese Philharmonic Orchestra.',

        'Played at an event for the Chinese Consulate-General in Vancouver.',

        'Worked inside a large ensemble where timing, balance, preparation, and reliability matter as much as individual technique.'
      ],

      prop:
        'trombone'
    }

  ],


  interests: [

    {
      id:
        'blender',

      label:
        'Blender',

      title:
        'Blender · Physics · Armatures',

      meta:
        'Rigid Bodies · Rigging · Mechanical Motion',

      description:
        'I enjoy Blender most when a scene behaves like a system rather than a static render. Rigid-body simulations, collisions, armatures, and mechanical motion are the parts I keep coming back to. The robotic curator on this site comes directly from that interest.',

      tags: [
        'Rigid Bodies',
        'Armatures',
        '3D',
        'Simulation'
      ],

      metrics: [
        [
          'Physics',
          'rigid-body behavior'
        ],

        [
          'Rigging',
          'armatures + joints'
        ],

        [
          'Three.js',
          'interactive web 3D'
        ]
      ],

      details: [
        'Rigid-body simulations and collision behavior.',

        'Armatures and mechanical motion.',

        'Interactive 3D as part of interface design rather than background decoration.'
      ],

      prop:
        'monkey'
    },


    {
      id:
        'hardware',

      label:
        'Hardware',

      title:
        'Hardware gives software consequences.',

      meta:
        'Sensors · Microcontrollers · Physical Debugging',

      description:
        'I like the point where software stops being abstract and has to interact with a real sensor, motor, radio, or circuit. Hardware makes bugs more interesting because the answer may be in timing, wiring, signal integrity, or the environment rather than one line of code.',

      tags: [
        'ESP32',
        'RP2040',
        'Sensors',
        'Oscilloscope'
      ],

      metrics: [
        [
          'ESP32',
          'wireless microcontroller'
        ],

        [
          'RP2040',
          'embedded platform'
        ],

        [
          'Scope',
          'physical debugging'
        ]
      ],

      details: [
        'Embedded systems and microcontrollers.',

        'Sensor and wireless communication integration.',

        'Oscilloscopes and logic analyzers for physical debugging.'
      ],

      prop:
        'scope'
    },


    {
      id:
        'music',

      label:
        'Music',

      title:
        'Trombone & live audio.',

      meta:
        'Orchestral Performance · Live Sound',

      description:
        'Music is another place where systems and timing matter. I have played trombone in school and orchestral settings and helped with live audio setup, teardown, and troubleshooting.',

      tags: [
        'Trombone',
        'Orchestra',
        'Live Audio'
      ],

      metrics: [
        [
          'Trombone',
          'performance'
        ],

        [
          '2nd',
          'orchestral trombone part'
        ],

        [
          'Audio',
          'live systems'
        ]
      ],

      details: [
        'Second trombone with the Vancouver Chinese Philharmonic Orchestra.',

        'School ensemble and trombone experience.',

        'Live audio setup, teardown, and troubleshooting.'
      ],

      prop:
        'trombone'
    }

  ],


  contact: [

    {
      id:
        'contact',

      label:
        'Contact',

      title:
        'Build something interesting with me.',

      meta:
        'Software · Embedded · Robotics · AI',

      description:
        'For software, embedded, robotics, or AI-related opportunities, email is the easiest way to reach me. My GitHub, LinkedIn, YouTube channel, and résumé are available from the workspace navigation.',

      tags: [
        'Email',
        'GitHub',
        'LinkedIn',
        'YouTube'
      ],

      metrics: [
        [
          'Email',
          'warrenz7980@gmail.com'
        ],

        [
          'GitHub',
          'banana1324'
        ],

        [
          'YouTube',
          '@goosehjonk918'
        ]
      ],

      details: [
        'Email: warrenz7980@gmail.com',

        'GitHub: github.com/banana1324',

        'LinkedIn: linkedin.com/in/fuyuanzhang'
      ],

      prop:
        'envelope'
    }

  ]

};


/* =========================================================
   NAVIGATION
========================================================= */

const NAV_SECTIONS = [

  [
    'home',
    '⌂',
    'Home'
  ],

  [
    'about',
    '◉',
    'About'
  ],

  [
    'projects',
    '◇',
    'Projects'
  ],

  [
    'experience',
    '▣',
    'Experience'
  ],

  [
    'interests',
    '○',
    'Interests'
  ],

  [
    'contact',
    '@',
    'Contact'
  ]

];


/* =========================================================
   LAB OBJECT LAYOUTS
========================================================= */

const PROP_LAYOUTS = {

  home: [

    [
      'wildfire',
      null,
      -3.7,
      0,
      -1.8,
      0.55
    ],

    [
      'robot',
      null,
      -3.6,
      0,
      1.8,
      0.52
    ],

    [
      'pcb',
      null,
      0.3,
      0,
      -3.7,
      0.58
    ],

    [
      'racket',
      null,
      5.0,
      0,
      1.7,
      0.42
    ],

    [
      'trombone',
      null,
      4.8,
      0,
      -1.9,
      0.39
    ],

    [
      'monkey',
      null,
      1.1,
      0,
      3.4,
      0.48
    ]

  ],


  about: [

    [
      'portrait',
      'about',
      -3.5,
      0,
      1.6,
      0.58
    ],

    [
      'resume',
      null,
      -3.7,
      0,
      -1.6,
      0.58
    ],

    [
      'laptop',
      null,
      4.8,
      0,
      -1.8,
      0.54
    ],

    [
      'books',
      null,
      4.7,
      0,
      1.6,
      0.63
    ]

  ],


  projects: [

    [
      'wildfire',
      'wildfire',
      -3.7,
      0,
      -1.8,
      0.61
    ],

    [
      'pcb',
      'kc15',
      -3.7,
      0,
      1.8,
      0.62
    ],

    [
      'robot',
      'vision',
      4.7,
      0,
      1.6,
      0.54
    ],

    [
      'circuit',
      'analog',
      4.7,
      0,
      -1.8,
      0.62
    ]

  ],


  experience: [

    [
      'pcb',
      'eim',
      -3.7,
      0,
      -1.8,
      0.62
    ],

    [
      'vex',
      'vex',
      -3.7,
      0,
      1.7,
      0.55
    ],

    [
      'racket',
      'coaching',
      4.7,
      0,
      1.5,
      0.44
    ],

    [
      'trombone',
      'orchestra',
      4.7,
      0,
      -1.7,
      0.41
    ]

  ],


  interests: [

    [
      'monkey',
      'blender',
      -3.7,
      0,
      -1.8,
      0.57
    ],

    [
      'scope',
      'hardware',
      -3.7,
      0,
      1.8,
      0.58
    ],

    [
      'trombone',
      'music',
      4.7,
      0,
      1.5,
      0.42
    ],

    [
      'cubeStack',
      null,
      4.7,
      0,
      -1.8,
      0.56
    ]

  ],


  contact: [

    [
      'envelope',
      'contact',
      -3.6,
      0,
      -1.2,
      0.65
    ],

    [
      'phone',
      null,
      -3.3,
      0,
      1.8,
      0.60
    ],

    [
      'resume',
      null,
      4.5,
      0,
      -1.6,
      0.57
    ],

    [
      'laptop',
      null,
      4.5,
      0,
      1.8,
      0.52
    ]

  ]

};


/* =========================================================
   DOM
========================================================= */

const dom = {

  canvas:
    document.querySelector(
      '#scene-canvas'
    ),

  cssRoot:
    document.querySelector(
      '#css3d-root'
    ),

  sidebar:
    document.querySelector(
      '#sidebar-sections'
    ),

  search:
    document.querySelector(
      '#site-search'
    ),

  searchResults:
    document.querySelector(
      '#search-results'
    ),

  sceneLabel:
    document.querySelector(
      '#scene-label'
    ),

  armStatus:
    document.querySelector(
      '#arm-status'
    ),

  resetView:
    document.querySelector(
      '#reset-view'
    ),

  addObject:
    document.querySelector(
      '#add-object'
    ),

  addMenu:
    document.querySelector(
      '#add-menu'
    ),

  live:
    document.querySelector(
      '#screen-reader-live'
    )

};


/* =========================================================
   STATE
========================================================= */

const state = {

  section:
    'home',

  index:
    0,

  propGroup:
    null,

  currentCard:
    null,

  heldCard:
    null,

  sequence:
    0,

  armTween:
    null,

  gripTween:
    null,

  cardTweens:
    [],

  spawned:
    [],

  selectedSpawn:
    null,

  addOpen:
    false,

  reducedMotion:
    window
      .matchMedia(
        '(prefers-reduced-motion: reduce)'
      )
      .matches

};


/* =========================================================
   WEBGL
========================================================= */

const webgl =
  new THREE.WebGLRenderer({
    canvas:
      dom.canvas,

    antialias:
      true,

    alpha:
      true
  });


webgl.setPixelRatio(
  Math.min(
    window.devicePixelRatio,
    2
  )
);


webgl.shadowMap.enabled =
  true;


webgl.shadowMap.type =
  THREE.PCFSoftShadowMap;


webgl.outputColorSpace =
  THREE.SRGBColorSpace;


webgl.toneMapping =
  THREE.ACESFilmicToneMapping;


webgl.toneMappingExposure =
  1.05;


webgl.setClearColor(
  0x0a0d11,
  0
);


/* =========================================================
   CSS 3D RENDERER
========================================================= */

const css3d =
  new CSS3DRenderer();


css3d.domElement.style.position =
  'fixed';


css3d.domElement.style.inset =
  '0';


css3d.domElement.style.pointerEvents =
  'none';


dom.cssRoot.appendChild(
  css3d.domElement
);


/* =========================================================
   SCENE
========================================================= */

const scene =
  new THREE.Scene();


scene.fog =
  new THREE.Fog(
    0x10151a,
    12,
    28
  );


/* =========================================================
   CAMERA
========================================================= */

const camera =
  new THREE.PerspectiveCamera(
    42,
    1,
    0.1,
    100
  );


camera.position.set(
  8.8,
  5.7,
  10.8
);


/* =========================================================
   CONTROLS
========================================================= */

const controls =
  new OrbitControls(
    camera,
    dom.canvas
  );


controls.target.set(
  0.5,
  1.35,
  0
);


controls.enableDamping =
  true;


controls.dampingFactor =
  0.06;


/*
  Intentionally disabled.

  Mouse wheel remains available for
  normal webpage behavior.
*/

controls.enableZoom =
  false;


controls.enablePan =
  false;


controls.minPolarAngle =
  Math.PI *
  0.21;


controls.maxPolarAngle =
  Math.PI *
  0.49;


controls.update();


/* =========================================================
   LIGHTING
========================================================= */

scene.add(
  new THREE.HemisphereLight(
    0xe7f0f8,
    0x20272e,
    2.0
  )
);


const key =
  new THREE.DirectionalLight(
    0xffffff,
    3.0
  );


key.position.set(
  6,
  10,
  6
);


key.castShadow =
  true;


key.shadow.mapSize.set(
  2048,
  2048
);


key.shadow.camera.left =
  -10;


key.shadow.camera.right =
  10;


key.shadow.camera.top =
  10;


key.shadow.camera.bottom =
  -10;


scene.add(
  key
);


const cool =
  new THREE.DirectionalLight(
    0x6f9fc8,
    1.35
  );


cool.position.set(
  -6,
  4,
  -5
);


scene.add(
  cool
);


const workLight =
  new THREE.PointLight(
    0x7aa9ce,
    13,
    9
  );


workLight.position.set(
  -3.8,
  4.0,
  4.0
);


scene.add(
  workLight
);


/* =========================================================
   MATERIAL HELPERS
========================================================= */

function material(
  color,
  roughness = 0.55,
  metalness = 0.15
) {

  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness
  });

}


function mesh(
  geometry,
  color,
  roughness = 0.55,
  metalness = 0.15
) {

  const object =
    new THREE.Mesh(
      geometry,
      material(
        color,
        roughness,
        metalness
      )
    );


  object.castShadow =
    true;


  object.receiveShadow =
    true;


  return object;

}


function box(
  width,
  height,
  depth,
  radius,
  color,
  roughness = 0.55,
  metalness = 0.15
) {

  return mesh(
    new RoundedBoxGeometry(
      width,
      height,
      depth,
      4,
      radius
    ),
    color,
    roughness,
    metalness
  );

}


/* =========================================================
   LAB TABLE
========================================================= */

const floor =
  box(
    18,
    0.28,
    11,
    0.08,
    0x2c333b,
    0.94,
    0.03
  );


floor.position.y =
  -0.14;


scene.add(
  floor
);


const grid =
  new THREE.GridHelper(
    17.5,
    22,
    0x58636f,
    0x3a434c
  );


grid.position.y =
  0.012;


grid.scale.z =
  0.62;


scene.add(
  grid
);


/* =========================================================
   BACK WALL / LAB STRUCTURE
========================================================= */

const rearWall =
  box(
    13.5,
    4.6,
    0.14,
    0.04,
    0x151b21,
    0.88,
    0.04
  );


rearWall.position.set(
  0.4,
  2.3,
  -5.0
);


scene.add(
  rearWall
);


for (
  let x = -5.5;
  x <= 5.5;
  x += 0.55
) {

  for (
    let y = 0.6;
    y <= 4.0;
    y += 0.55
  ) {

    const hole =
      mesh(
        new THREE.CylinderGeometry(
          0.028,
          0.028,
          0.16,
          8
        ),
        0x0b0f13,
        0.8,
        0.02
      );


    hole.rotation.x =
      Math.PI /
      2;


    hole.position.set(
      x,
      y,
      -4.91
    );


    scene.add(
      hole
    );

  }

}


/* =========================================================
   INDUSTRIAL ROBOT ARM

   6 articulated degrees of freedom:
   - base yaw
   - shoulder
   - elbow
   - wrist pitch
   - wrist yaw
   - wrist roll

   plus independent gripper motion.
========================================================= */

const ARM = {

  L1:
    2.18,

  L2:
    1.94,

  baseY:
    0.68,

  baseX:
    3.15,

  baseZ:
    0.05,

  limits: {

    base: [
      -2.55,
      2.55
    ],

    shoulder: [
      -0.15,
      2.55
    ],

    elbow: [
      0.12,
      2.75
    ],

    wristPitch: [
      -2.2,
      2.2
    ]

  }

};


/* =========================================================
   BUILD ROBOT ARM
========================================================= */

function buildRobotArm() {

  const group =
    new THREE.Group();


  const graphite =
    0x14191e;


  const darkSteel =
    0x28323b;


  const steel =
    0x8f9ba5;


  const blueSteel =
    0x405c73;


  /* Base */

  const foot =
    mesh(
      new THREE.CylinderGeometry(
        0.75,
        0.88,
        0.25,
        40
      ),
      graphite,
      0.3,
      0.76
    );


  foot.position.y =
    0.125;


  group.add(
    foot
  );


  const base =
    mesh(
      new THREE.CylinderGeometry(
        0.6,
        0.7,
        0.49,
        40
      ),
      darkSteel,
      0.35,
      0.68
    );


  base.position.y =
    0.43;


  group.add(
    base
  );


  /* Joint 1: Base yaw */

  const baseYaw =
    new THREE.Group();


  baseYaw.position.y =
    ARM.baseY;


  group.add(
    baseYaw
  );


  const shoulderHousing =
    mesh(
      new THREE.CylinderGeometry(
        0.46,
        0.46,
        0.58,
        34
      ),
      graphite,
      0.28,
      0.78
    );


  shoulderHousing.rotation.z =
    Math.PI /
    2;


  baseYaw.add(
    shoulderHousing
  );


  /* Joint 2: Shoulder */

  const shoulder =
    new THREE.Group();


  baseYaw.add(
    shoulder
  );


  const upper =
    box(
      0.55,
      ARM.L1,
      0.61,
      0.11,
      blueSteel,
      0.38,
      0.45
    );


  upper.position.y =
    ARM.L1 /
    2;


  shoulder.add(
    upper
  );


  const upperRail =
    box(
      0.19,
      1.25,
      0.635,
      0.04,
      graphite,
      0.42,
      0.62
    );


  upperRail.position.y =
    ARM.L1 /
    2;


  shoulder.add(
    upperRail
  );


  /* Joint 3: Elbow */

  const elbow =
    new THREE.Group();


  elbow.position.y =
    ARM.L1;


  shoulder.add(
    elbow
  );


  const elbowHub =
    mesh(
      new THREE.CylinderGeometry(
        0.44,
        0.44,
        0.54,
        34
      ),
      graphite,
      0.27,
      0.8
    );


  elbowHub.rotation.z =
    Math.PI /
    2;


  elbow.add(
    elbowHub
  );


  for (
    const x of [
      -0.3,
      0.3
    ]
  ) {

    const cap =
      mesh(
        new THREE.CylinderGeometry(
          0.31,
          0.31,
          0.055,
          28
        ),
        steel,
        0.2,
        0.86
      );


    cap.rotation.z =
      Math.PI /
      2;


    cap.position.x =
      x;


    elbow.add(
      cap
    );

  }


  const forearm =
    new THREE.Group();


  elbow.add(
    forearm
  );


  const lower =
    box(
      0.46,
      ARM.L2,
      0.50,
      0.10,
      darkSteel,
      0.36,
      0.55
    );


  lower.position.y =
    ARM.L2 /
    2;


  forearm.add(
    lower
  );


  const lowerRail =
    box(
      0.16,
      1.06,
      0.525,
      0.035,
      0x10151a,
      0.4,
      0.68
    );


  lowerRail.position.y =
    ARM.L2 /
    2;


  forearm.add(
    lowerRail
  );


  /* Joint 4: Wrist pitch */

  const wristPitch =
    new THREE.Group();


  wristPitch.position.y =
    ARM.L2;


  forearm.add(
    wristPitch
  );


  const wristHub =
    mesh(
      new THREE.CylinderGeometry(
        0.31,
        0.31,
        0.40,
        28
      ),
      graphite,
      0.26,
      0.82
    );


  wristHub.rotation.z =
    Math.PI /
    2;


  wristPitch.add(
    wristHub
  );


  /* Joint 5: Wrist yaw */

  const wristYaw =
    new THREE.Group();


  wristYaw.position.y =
    0.24;


  wristPitch.add(
    wristYaw
  );


  const yawHub =
    mesh(
      new THREE.CylinderGeometry(
        0.23,
        0.23,
        0.29,
        24
      ),
      darkSteel,
      0.25,
      0.78
    );


  wristYaw.add(
    yawHub
  );


  /* Joint 6: Wrist roll */

  const wristRoll =
    new THREE.Group();


  wristRoll.position.y =
    0.19;


  wristYaw.add(
    wristRoll
  );


  const rollHub =
    mesh(
      new THREE.CylinderGeometry(
        0.19,
        0.19,
        0.26,
        24
      ),
      steel,
      0.2,
      0.82
    );


  rollHub.rotation.x =
    Math.PI /
    2;


  wristRoll.add(
    rollHub
  );


  /* Gripper */

  const gripper =
    new THREE.Group();


  gripper.position.y =
    0.24;


  wristRoll.add(
    gripper
  );


  const palm =
    box(
      0.56,
      0.22,
      0.40,
      0.05,
      graphite,
      0.28,
      0.78
    );


  gripper.add(
    palm
  );


  const fingerL =
    box(
      0.12,
      0.65,
      0.16,
      0.025,
      steel,
      0.24,
      0.82
    );


  fingerL.position.set(
    -0.21,
    0.38,
    0
  );


  gripper.add(
    fingerL
  );


  const fingerR =
    fingerL.clone();


  fingerR.position.x =
    0.21;


  gripper.add(
    fingerR
  );


  const fingerTipL =
    box(
      0.16,
      0.14,
      0.20,
      0.025,
      0xa9b2ba,
      0.24,
      0.78
    );


  fingerTipL.position.set(
    -0.21,
    0.72,
    0
  );


  gripper.add(
    fingerTipL
  );


  const fingerTipR =
    fingerTipL.clone();


  fingerTipR.position.x =
    0.21;


  gripper.add(
    fingerTipR
  );


  /*
    Physical mounting point for
    the information card.
  */

  const cardSocket =
    new THREE.Group();


  cardSocket.position.set(
    0,
    0.74,
    0
  );


  gripper.add(
    cardSocket
  );


  return {

    group,

    baseYaw,

    shoulder,

    elbow,

    forearm,

    wristPitch,

    wristYaw,

    wristRoll,

    gripper,

    fingerL,

    fingerR,

    fingerTipL,

    fingerTipR,

    cardSocket

  };

}


const arm =
  buildRobotArm();


arm.group.position.set(
  ARM.baseX,
  0,
  ARM.baseZ
);


scene.add(
  arm.group
);


/* =========================================================
   ARM POSES / TARGETS
========================================================= */

const HOME_POSE = {

  base:
    0.10,

  shoulder:
    1.08,

  elbow:
    1.02,

  wristPitch:
    -2.02,

  wristYaw:
    0,

  wristRoll:
    0,

  grip:
    0.21

};


/*
  Where the arm presents the top grab tab.
*/

const PRESENT_TARGET =
  new THREE.Vector3(
    0.25,
    3.65,
    0.85
  );


/*
  The cards initially exist at the back/right
  of the laboratory, like cards in a rack.
*/

const RACK_CARD_POS =
  new THREE.Vector3(
    4.35,
    2.25,
    -1.55
  );


const RACK_GRAB_TARGET =
  new THREE.Vector3(
    4.25,
    3.76,
    -1.50
  );


applyArmPose(
  HOME_POSE
);


/* =========================================================
   IK HELPERS
========================================================= */

function clamp(
  value,
  [
    min,
    max
  ]
) {

  return Math.max(
    min,
    Math.min(
      max,
      value
    )
  );

}


/*
  This prevents the base from deciding that a
  3-degree move should instead become a
  357-degree rotation.
*/

function nearestAngle(
  current,
  target
) {

  return (
    current +
    Math.atan2(
      Math.sin(
        target -
        current
      ),
      Math.cos(
        target -
        current
      )
    )
  );

}


/* =========================================================
   ANALYTIC IK SOLVER

   Important stability features:

   1. Fixed elbow branch.
   2. Shortest-angle base movement.
   3. Explicit joint limits.
   4. No iterative random solver.
   5. Wrist compensates for shoulder + elbow.
========================================================= */

function solveIK(
  worldTarget
) {

  const baseWorld =
    new THREE.Vector3(
      ARM.baseX,
      ARM.baseY,
      ARM.baseZ
    );


  const dx =
    worldTarget.x -
    baseWorld.x;


  const dz =
    worldTarget.z -
    baseWorld.z;


  const vertical =
    worldTarget.y -
    baseWorld.y;


  const radial =
    Math.max(
      0.001,
      Math.hypot(
        dx,
        dz
      )
    );


  let base =
    Math.atan2(
      dz,
      -dx
    );


  base =
    nearestAngle(
      arm.baseYaw.rotation.y,
      base
    );


  base =
    clamp(
      base,
      ARM.limits.base
    );


  const originalDistance =
    Math.hypot(
      radial,
      vertical
    );


  const reach =
    Math.min(
      originalDistance,
      ARM.L1 +
      ARM.L2 -
      0.06
    );


  const scale =
    reach /
    Math.max(
      0.001,
      originalDistance
    );


  const r =
    radial *
    scale;


  const y =
    vertical *
    scale;


  let cosPsi =
    (
      r *
      r +

      y *
      y -

      ARM.L1 *
      ARM.L1 -

      ARM.L2 *
      ARM.L2
    ) /
    (
      2 *
      ARM.L1 *
      ARM.L2
    );


  cosPsi =
    THREE.MathUtils.clamp(
      cosPsi,
      -1,
      1
    );


  /*
    FIXED negative elbow branch.

    It never randomly changes from
    elbow-up to elbow-down.
  */

  const psi =
    -Math.acos(
      cosPsi
    );


  const phi =
    Math.atan2(
      y,
      r
    ) -
    Math.atan2(
      ARM.L2 *
      Math.sin(
        psi
      ),
      ARM.L1 +
      ARM.L2 *
      Math.cos(
        psi
      )
    );


  let shoulder =
    Math.PI /
    2 -
    phi;


  let elbow =
    -psi;


  shoulder =
    clamp(
      shoulder,
      ARM.limits.shoulder
    );


  elbow =
    clamp(
      elbow,
      ARM.limits.elbow
    );


  /*
    Counter-rotate the wrist so
    the gripper stays stable.
  */

  let wristPitch =
    -(
      shoulder +
      elbow
    ) +
    0.03;


  wristPitch =
    clamp(
      wristPitch,
      ARM.limits.wristPitch
    );


  return {

    base,

    shoulder,

    elbow,

    wristPitch,

    wristYaw:
      0,

    wristRoll:
      0,

    grip:
      0.21

  };

}


/* =========================================================
   READ CURRENT ARM POSE
========================================================= */

function armPose() {

  return {

    base:
      arm.baseYaw
        .rotation
        .y,

    shoulder:
      arm.shoulder
        .rotation
        .z,

    elbow:
      arm.elbow
        .rotation
        .z,

    wristPitch:
      arm.wristPitch
        .rotation
        .z,

    wristYaw:
      arm.wristYaw
        .rotation
        .y,

    wristRoll:
      arm.wristRoll
        .rotation
        .y,

    grip:
      Math.abs(
        arm.fingerR
          .position
          .x
      )

  };

}


/* =========================================================
   APPLY ARM POSE
========================================================= */

function applyArmPose(
  pose
) {

  arm.baseYaw.rotation.y =
    pose.base;


  arm.shoulder.rotation.z =
    pose.shoulder;


  arm.elbow.rotation.z =
    pose.elbow;


  arm.wristPitch.rotation.z =
    pose.wristPitch;


  arm.wristYaw.rotation.y =
    pose.wristYaw ??
    0;


  arm.wristRoll.rotation.y =
    pose.wristRoll ??
    0;


  setGripInstant(
    pose.grip ??
    0.21
  );

}


/* =========================================================
   GRIPPER
========================================================= */

function setGripInstant(
  x
) {

  arm.fingerL.position.x =
    -x;


  arm.fingerR.position.x =
    x;


  arm.fingerTipL.position.x =
    -x;


  arm.fingerTipR.position.x =
    x;

}


/* =========================================================
   ANIMATION HELPERS
========================================================= */

function ease(
  t
) {

  return (
    1 -
    Math.pow(
      1 -
      t,
      3
    )
  );

}


function wait(
  milliseconds
) {

  return new Promise(
    resolve =>
      setTimeout(
        resolve,
        state.reducedMotion
          ? 0
          : milliseconds
      )
  );

}


/* =========================================================
   MOVE ARM WITH IK
========================================================= */

function moveArmTo(
  target,
  duration = 560,
  overrides = {}
) {

  const solved = {
    ...solveIK(
      target
    ),
    ...overrides
  };


  if (
    state.reducedMotion
  ) {

    applyArmPose(
      solved
    );


    return Promise.resolve();

  }


  state.armTween = {

    start:
      performance.now(),

    duration,

    from:
      armPose(),

    to:
      solved

  };


  return wait(
    duration
  );

}


/* =========================================================
   MOVE ARM TO EXPLICIT POSE
========================================================= */

function moveArmPose(
  pose,
  duration = 520
) {

  const to = {
    ...HOME_POSE,
    ...pose
  };


  if (
    state.reducedMotion
  ) {

    applyArmPose(
      to
    );


    return Promise.resolve();

  }


  state.armTween = {

    start:
      performance.now(),

    duration,

    from:
      armPose(),

    to

  };


  return wait(
    duration
  );

}


/* =========================================================
   ANIMATE GRIPPER
========================================================= */

function setGrip(
  x,
  duration = 130
) {

  if (
    state.reducedMotion
  ) {

    setGripInstant(
      x
    );


    return Promise.resolve();

  }


  state.gripTween = {

    start:
      performance.now(),

    duration,

    from:
      Math.abs(
        arm.fingerR
          .position
          .x
      ),

    to:
      x

  };


  return wait(
    duration
  );

}


/* =========================================================
   CSS3D INFORMATION SHEET
========================================================= */

const CARD = {

  width:
    660,

  height:
    760,

  scale:
    0.00405

};


/* =========================================================
   CREATE CARD DOM
========================================================= */

function cardElement(
  section,
  item
) {

  const root =
    document.createElement(
      'article'
    );


  root.className =
    'info-sheet is-moving';


  const metricMarkup =
    item.metrics
      .map(
        (
          [
            value,
            label
          ]
        ) => `

          <div class="sheet-metric">

            <strong>
              ${escapeHTML(value)}
            </strong>

            <span>
              ${escapeHTML(label)}
            </span>

          </div>

        `
      )
      .join(
        ''
      );


  const tagMarkup =
    item.tags
      .map(
        tag => `
          <span class="sheet-tag">
            ${escapeHTML(tag)}
          </span>
        `
      )
      .join(
        ''
      );


  const detailsMarkup =
    item.details
      .map(
        detail => `
          <li>
            ${escapeHTML(detail)}
          </li>
        `
      )
      .join(
        ''
      );


  root.innerHTML = `

    <div class="sheet-breadcrumb">
      ${escapeHTML(section)}
      ·
      ${escapeHTML(item.label)}
    </div>

    <h1>
      ${escapeHTML(item.title)}
    </h1>

    <div class="sheet-meta">
      ${escapeHTML(item.meta)}
    </div>

    <p class="sheet-description">
      ${escapeHTML(item.description)}
    </p>

    <div class="sheet-tags">
      ${tagMarkup}
    </div>

    <div class="sheet-section-label">
      Impact / context
    </div>

    <div class="sheet-metrics">
      ${metricMarkup}
    </div>

    <div class="sheet-section-label">
      Key details
    </div>

    <ul class="sheet-details">
      ${detailsMarkup}
    </ul>

    <div class="sheet-footer">

      <span>
        Selected work · Warren Zhang
      </span>

      <span>
        ${String(
          state.index +
          1
        ).padStart(
          2,
          '0'
        )}
        /
        ${String(
          CONTENT[
            section
          ].length
        ).padStart(
          2,
          '0'
        )}
      </span>

    </div>

  `;


  return root;

}


/* =========================================================
   CREATE CSS3D CARD
========================================================= */

function createCard(
  section,
  item
) {

  const element =
    cardElement(
      section,
      item
    );


  const object =
    new CSS3DObject(
      element
    );


  object.scale.setScalar(
    CARD.scale
  );


  object.position.copy(
    RACK_CARD_POS
  );


  object.rotation.set(
    -0.02,
    -0.62,
    0.02
  );


  object.userData.element =
    element;


  object.userData.section =
    section;


  object.userData.item =
    item;


  scene.add(
    object
  );


  return object;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
  value
) {

  return String(
    value
  )
    .replace(
      /[&<>'"]/g,
      character => ({
        '&':
          '&amp;',

        '<':
          '&lt;',

        '>':
          '&gt;',

        "'":
          '&#39;',

        '"':
          '&quot;'
      })[
        character
      ]
    );

}


/* =========================================================
   CARD WORLD POSE
========================================================= */

function setCardWorldPose(
  card,
  position,
  quaternion,
  scale = CARD.scale
) {

  scene.attach(
    card
  );


  card.position.copy(
    position
  );


  card.quaternion.copy(
    quaternion
  );


  card.scale.setScalar(
    scale
  );

}


/* =========================================================
   CARD FACES USER
========================================================= */

function desiredCardQuaternion() {

  const temp =
    new THREE.Object3D();


  temp.position
    .copy(
      PRESENT_TARGET
    )
    .add(
      new THREE.Vector3(
        -0.25,
        -1.15,
        0
      )
    );


  temp.lookAt(
    camera.position
  );


  temp.rotateZ(
    -0.035
  );


  return temp.quaternion
    .clone();

}


/* =========================================================
   WHILE ARM HOLDS CARD:
   KEEP THE CARD FACING THE USER
========================================================= */

function orientHeldCard() {

  if (
    !state.heldCard ||
    state.heldCard.parent !==
      arm.cardSocket
  ) {

    return;

  }


  const parentQ =
    new THREE.Quaternion();


  arm.cardSocket
    .getWorldQuaternion(
      parentQ
    );


  const desired =
    desiredCardQuaternion();


  const local =
    parentQ
      .clone()
      .invert()
      .multiply(
        desired
      );


  state.heldCard
    .quaternion
    .copy(
      local
    );

}


/* =========================================================
   CARD LOCAL TWEEN
========================================================= */

function tweenCardLocal(
  card,
  toPosition,
  duration = 180
) {

  const from =
    card.position
      .clone();


  if (
    state.reducedMotion
  ) {

    card.position.copy(
      toPosition
    );


    return Promise.resolve();

  }


  state.cardTweens.push({

    card,

    start:
      performance.now(),

    duration,

    from,

    to:
      toPosition.clone(),

    type:
      'local'

  });


  return wait(
    duration
  );

}


/* =========================================================
   CARD WORLD TWEEN
========================================================= */

function tweenCardWorld(
  card,
  toPosition,
  toQuaternion,
  toScale,
  duration = 420,
  fade = false
) {

  scene.attach(
    card
  );


  const fromPosition =
    card.position.clone();


  const fromQuaternion =
    card.quaternion.clone();


  const fromScale =
    card.scale.x;


  if (
    state.reducedMotion
  ) {

    card.position.copy(
      toPosition
    );


    card.quaternion.copy(
      toQuaternion
    );


    card.scale.setScalar(
      toScale
    );


    if (
      fade
    ) {

      card.userData
        .element
        .style
        .opacity =
        '0';

    }


    return Promise.resolve();

  }


  state.cardTweens.push({

    card,

    start:
      performance.now(),

    duration,

    fromPos:
      fromPosition,

    toPos:
      toPosition.clone(),

    fromQuat:
      fromQuaternion,

    toQuat:
      toQuaternion.clone(),

    fromScale,

    toScale,

    fade,

    type:
      'world'

  });


  return wait(
    duration
  );

}


/* =========================================================
   TAKE PREVIOUS INFORMATION AWAY
========================================================= */

async function returnCurrentCard(
  token
) {

  if (
    !state.currentCard
  ) {

    return;

  }


  const card =
    state.currentCard;


  card.userData
    .element
    .classList
    .add(
      'is-leaving'
    );


  card.userData
    .element
    .classList
    .remove(
      'is-moving'
    );


  dom.armStatus.textContent =
    'Taking previous information away';


  /*
    If the robot is currently holding the sheet,
    move it back toward the rack first.
  */

  if (
    card.parent ===
    arm.cardSocket
  ) {

    await moveArmTo(
      new THREE.Vector3(
        4.38,
        3.45,
        -1.82
      ),
      520,
      {
        wristRoll:
          0.05
      }
    );


    if (
      token !==
      state.sequence
    ) {

      return;

    }

  }


  /*
    Release card from gripper.
  */

  scene.attach(
    card
  );


  state.heldCard =
    null;


  await setGrip(
    0.21,
    110
  );


  const rackQuaternion =
    new THREE.Quaternion()
      .setFromEuler(
        new THREE.Euler(
          -0.02,
          -0.62,
          0.02
        )
      );


  /*
    Slide old information away and fade it.
  */

  await tweenCardWorld(
    card,
    RACK_CARD_POS
      .clone()
      .add(
        new THREE.Vector3(
          0.75,
          0.05,
          -0.2
        )
      ),
    rackQuaternion,
    CARD.scale *
      0.92,
    330,
    true
  );


  if (
    card.parent
  ) {

    card.parent.remove(
      card
    );

  }


  card.element
    ?.remove?.();


  card.userData
    .element
    ?.remove?.();


  state.currentCard =
    null;

}


/* =========================================================
   DELIVER NEW INFORMATION

   Sequence:

   1. Take old sheet away.
   2. Spawn new sheet in rack.
   3. Reach rack.
   4. Close gripper.
   5. Attach sheet to gripper.
   6. Pull sheet toward user.
   7. Slight forward handoff / throw.
   8. Settle while still holding it.
========================================================= */

async function deliverCard(
  section,
  item
) {

  const token =
    ++state.sequence;


  await returnCurrentCard(
    token
  );


  if (
    token !==
    state.sequence
  ) {

    return;

  }


  const card =
    createCard(
      section,
      item
    );


  state.currentCard =
    card;


  dom.armStatus.textContent =
    'Reaching for new information';


  /*
    Open gripper.
  */

  await setGrip(
    0.22,
    80
  );


  /*
    Stable IK reaches card rack.
  */

  await moveArmTo(
    RACK_GRAB_TARGET,
    600,
    {
      wristRoll:
        -0.06
    }
  );


  if (
    token !==
    state.sequence
  ) {

    return;

  }


  dom.armStatus.textContent =
    'Grabbing information';


  /*
    Close fingers around the card's grab tab.
  */

  await setGrip(
    0.095,
    150
  );


  if (
    token !==
    state.sequence
  ) {

    return;

  }


  /*
    Crucial physical step:

    Reparent the CSS3D information card
    to the arm's card socket.

    It is now actually carried by the arm.
  */

  arm.cardSocket.attach(
    card
  );


  state.heldCard =
    card;


  card.userData
    .element
    .classList
    .add(
      'is-moving'
    );


  /*
    The panel is about 3 world units tall.

    Move the CENTER down from the gripper so
    the fingers are gripping the top tab,
    instead of grabbing the center of the sheet.
  */

  await tweenCardLocal(
    card,
    new THREE.Vector3(
      0,
      -1.42,
      0
    ),
    180
  );


  if (
    token !==
    state.sequence
  ) {

    return;

  }


  dom.armStatus.textContent =
    'Bringing information to you';


  /*
    Move sheet toward user.
  */

  await moveArmTo(
    PRESENT_TARGET,
    680,
    {
      wristRoll:
        -0.04
    }
  );


  if (
    token !==
    state.sequence
  ) {

    return;

  }


  /*
    Small overshoot.

    This makes the motion feel like
    "here, take this" rather than
    simply moving to a fixed coordinate.
  */

  await moveArmTo(
    PRESENT_TARGET
      .clone()
      .add(
        new THREE.Vector3(
          -0.20,
          0.06,
          0.35
        )
      ),
    180,
    {
      wristRoll:
        -0.02
    }
  );


  if (
    token !==
    state.sequence
  ) {

    return;

  }


  /*
    Settle back slightly.
  */

  await moveArmTo(
    PRESENT_TARGET,
    210,
    {
      wristRoll:
        -0.04
    }
  );


  card.userData
    .element
    .classList
    .remove(
      'is-moving',
      'is-leaving'
    );


  dom.armStatus.textContent =
    'Holding selected information';


  dom.live.textContent =
    `${item.title}. ${item.description}`;

}


/* =========================================================
   CONTEXTUAL SCENE PROPS
========================================================= */

function clearProps() {

  if (
    !state.propGroup
  ) {

    return;

  }


  scene.remove(
    state.propGroup
  );


  disposeGroup(
    state.propGroup
  );


  state.propGroup =
    null;

}


function loadProps(
  section
) {

  clearProps();


  const group =
    new THREE.Group();


  group.userData.props =
    [];


  const layout =
    PROP_LAYOUTS[
      section
    ] ||
    PROP_LAYOUTS.home;


  for (
    const [
      model,
      itemId,
      x,
      y,
      z,
      scale
    ]
    of layout
  ) {

    const object =
      createModel(
        model
      );


    object.position.set(
      x,
      y,
      z
    );


    object.scale.setScalar(
      scale
    );


    object.rotation.y =
      x < 0
        ? 0.35
        : -0.35;


    object.userData.itemId =
      itemId;


    object.userData.baseScale =
      scale;


    group.add(
      object
    );


    group.userData
      .props
      .push(
        object
      );

  }


  scene.add(
    group
  );


  state.propGroup =
    group;

}


/* =========================================================
   MODEL FACTORY
========================================================= */

function createModel(
  name
) {

  switch (
    name
  ) {

    case 'wildfire':
      return createWildfire();

    case 'pcb':
      return createPCB();

    case 'robot':
      return createRobot(
        false
      );

    case 'vex':
      return createRobot(
        true
      );

    case 'racket':
      return createRacket();

    case 'trombone':
      return createTrombone();

    case 'monkey':
      return createMonkey();

    case 'scope':
      return createScope();

    case 'portrait':
      return createPortrait();

    case 'resume':
      return createResume();

    case 'laptop':
      return createLaptop();

    case 'books':
      return createBooks();

    case 'circuit':
      return createCircuit();

    case 'envelope':
      return createEnvelope();

    case 'phone':
      return createPhone();

    case 'cubeStack':
      return createCubeStack();

    default:
      return createRobot(
        false
      );

  }

}


/* =========================================================
   WILDFIRE SENSOR MODEL
========================================================= */

function createWildfire() {

  const group =
    new THREE.Group();


  const body =
    box(
      1.55,
      0.78,
      1.15,
      0.14,
      0x37424b,
      0.7,
      0.12
    );


  body.position.y =
    0.45;


  group.add(
    body
  );


  const lid =
    box(
      1.6,
      0.1,
      1.2,
      0.07,
      0x56636d,
      0.55,
      0.18
    );


  lid.position.y =
    0.88;


  group.add(
    lid
  );


  const screen =
    box(
      0.42,
      0.22,
      0.03,
      0.025,
      0x6f9bb3,
      0.25,
      0.12
    );


  screen.position.set(
    0.42,
    0.59,
    0.59
  );


  screen.material
    .emissive
    .set(
      0x1b3847
    );


  screen.material
    .emissiveIntensity =
    0.55;


  group.add(
    screen
  );


  const grille =
    box(
      0.48,
      0.30,
      0.08,
      0.03,
      0x15191d,
      0.75,
      0.05
    );


  grille.position.set(
    -0.4,
    0.55,
    0.59
  );


  group.add(
    grille
  );


  for (
    let i = -2;
    i <= 2;
    i++
  ) {

    const vent =
      box(
        0.045,
        0.21,
        0.015,
        0.005,
        0x87939c,
        0.45,
        0.4
      );


    vent.position.set(
      -0.4 +
      i *
      0.075,
      0.55,
      0.64
    );


    group.add(
      vent
    );

  }


  const antennaBase =
    mesh(
      new THREE.CylinderGeometry(
        0.095,
        0.115,
        0.16,
        16
      ),
      0x171a1e,
      0.4,
      0.45
    );


  antennaBase.position.set(
    0.5,
    1,
    -0.26
  );


  group.add(
    antennaBase
  );


  const antenna =
    mesh(
      new THREE.CylinderGeometry(
        0.032,
        0.041,
        1.5,
        12
      ),
      0x121417,
      0.5,
      0.4
    );


  antenna.position.set(
    0.5,
    1.8,
    -0.26
  );


  group.add(
    antenna
  );


  return group;

}


/* =========================================================
   PCB MODEL
========================================================= */

function createPCB() {

  const group =
    new THREE.Group();


  const board =
    box(
      2,
      0.12,
      1.25,
      0.05,
      0x315e4d,
      0.65,
      0.12
    );


  board.position.y =
    0.26;


  group.add(
    board
  );


  const chip =
    box(
      0.62,
      0.13,
      0.62,
      0.025,
      0x111417,
      0.65,
      0.08
    );


  chip.position.set(
    0.04,
    0.38,
    0
  );


  group.add(
    chip
  );


  const usb =
    box(
      0.42,
      0.23,
      0.52,
      0.035,
      0xaab0b4,
      0.26,
      0.8
    );


  usb.position.set(
    -0.8,
    0.4,
    0
  );


  group.add(
    usb
  );


  for (
    const z of [
      -0.5,
      0.5
    ]
  ) {

    for (
      let i = 0;
      i < 10;
      i++
    ) {

      const pin =
        mesh(
          new THREE.CylinderGeometry(
            0.02,
            0.02,
            0.24,
            8
          ),
          0xc2a257,
          0.2,
          0.8
        );


      pin.position.set(
        -0.7 +
        i *
        0.155,
        0.42,
        z
      );


      group.add(
        pin
      );

    }

  }


  for (
    let i = 0;
    i < 4;
    i++
  ) {

    const capacitor =
      mesh(
        new THREE.CylinderGeometry(
          0.065,
          0.065,
          0.14,
          12
        ),
        i % 2
          ? 0x2b333a
          : 0xb88e4f,
        0.45,
        0.25
      );


    capacitor.position.set(
      0.52 +
      (
        i %
        2
      ) *
      0.19,
      0.4,
      -0.28 +
      Math.floor(
        i /
        2
      ) *
      0.2
    );


    group.add(
      capacitor
    );

  }


  return group;

}


/* =========================================================
   ROBOT / VEX MODEL
========================================================= */

function createRobot(
  vex
) {

  const group =
    new THREE.Group();


  const chassis =
    box(
      1.8,
      0.42,
      1.25,
      0.1,
      vex
        ? 0x3d4752
        : 0x414b54,
      0.43,
      0.5
    );


  chassis.position.y =
    0.58;


  group.add(
    chassis
  );


  const rail =
    box(
      1.92,
      0.14,
      1.35,
      0.04,
      0x60778d,
      0.4,
      0.38
    );


  rail.position.y =
    0.37;


  group.add(
    rail
  );


  for (
    const [
      x,
      z
    ]
    of [
      [
        -0.75,
        -0.55
      ],

      [
        0.75,
        -0.55
      ],

      [
        -0.75,
        0.55
      ],

      [
        0.75,
        0.55
      ]
    ]
  ) {

    const wheel =
      mesh(
        new THREE.CylinderGeometry(
          0.31,
          0.31,
          0.24,
          24
        ),
        0x15181b,
        0.82,
        0.08
      );


    wheel.rotation.z =
      Math.PI /
      2;


    wheel.position.set(
      x,
      0.38,
      z
    );


    group.add(
      wheel
    );


    const hub =
      mesh(
        new THREE.CylinderGeometry(
          0.1,
          0.1,
          0.27,
          16
        ),
        0xabb4bc,
        0.25,
        0.78
      );


    hub.rotation.z =
      Math.PI /
      2;


    hub.position.set(
      x,
      0.38,
      z
    );


    group.add(
      hub
    );

  }


  if (
    vex
  ) {

    const tower =
      box(
        0.7,
        1.2,
        0.55,
        0.05,
        0x687989,
        0.45,
        0.45
      );


    tower.position.set(
      0,
      1.25,
      0
    );


    group.add(
      tower
    );


    const claw =
      box(
        1.15,
        0.16,
        0.18,
        0.04,
        0x8996a0,
        0.35,
        0.65
      );


    claw.position.set(
      0,
      1.85,
      0.35
    );


    group.add(
      claw
    );


    const brace1 =
      box(
        0.14,
        1.2,
        0.14,
        0.03,
        0x8b969f,
        0.34,
        0.72
      );


    brace1.position.set(
      -0.42,
      1.2,
      0
    );


    brace1.rotation.z =
      -0.28;


    group.add(
      brace1
    );


    const brace2 =
      brace1.clone();


    brace2.position.x =
      0.42;


    brace2.rotation.z =
      0.28;


    group.add(
      brace2
    );

  }

  else {

    const deck =
      box(
        1.25,
        0.12,
        0.82,
        0.05,
        0x315e4d,
        0.67,
        0.12
      );


    deck.position.y =
      0.86;


    group.add(
      deck
    );


    const mast =
      box(
        0.22,
        1.15,
        0.22,
        0.04,
        0x536f88,
        0.4,
        0.28
      );


    mast.position.y =
      1.45;


    group.add(
      mast
    );


    const cameraBody =
      box(
        0.7,
        0.42,
        0.48,
        0.07,
        0x21262b,
        0.36,
        0.55
      );


    cameraBody.position.y =
      2.03;


    group.add(
      cameraBody
    );


    const lens =
      mesh(
        new THREE.CylinderGeometry(
          0.16,
          0.16,
          0.16,
          20
        ),
        0x6d96b4,
        0.2,
        0.7
      );


    lens.rotation.x =
      Math.PI /
      2;


    lens.position.set(
      0,
      2.03,
      0.31
    );


    group.add(
      lens
    );

  }


  return group;

}


/* =========================================================
   BADMINTON RACKET
========================================================= */

function createRacket() {

  const group =
    new THREE.Group();


  const frame =
    mesh(
      new THREE.TorusGeometry(
        0.67,
        0.05,
        12,
        56
      ),
      0xaeb8c0,
      0.3,
      0.62
    );


  frame.scale.y =
    1.28;


  frame.position.y =
    1.72;


  group.add(
    frame
  );


  const lineMaterial =
    new THREE.LineBasicMaterial({
      color:
        0x88949e,

      transparent:
        true,

      opacity:
        0.68
    });


  for (
    let i = -5;
    i <= 5;
    i++
  ) {

    const x =
      i *
      0.1;


    const normalized =
      x /
      0.62;


    const height =
      Math.sqrt(
        Math.max(
          0,
          1 -
          normalized *
          normalized
        )
      ) *
      0.8;


    group.add(
      new THREE.Line(
        new THREE.BufferGeometry()
          .setFromPoints([
            new THREE.Vector3(
              x,
              1.72 -
              height,
              0
            ),

            new THREE.Vector3(
              x,
              1.72 +
              height,
              0
            )
          ]),
        lineMaterial.clone()
      )
    );

  }


  for (
    let i = -7;
    i <= 7;
    i++
  ) {

    const y =
      i *
      0.1;


    const normalized =
      y /
      0.8;


    const width =
      Math.sqrt(
        Math.max(
          0,
          1 -
          normalized *
          normalized
        )
      ) *
      0.62;


    group.add(
      new THREE.Line(
        new THREE.BufferGeometry()
          .setFromPoints([
            new THREE.Vector3(
              -width,
              1.72 +
              y,
              0
            ),

            new THREE.Vector3(
              width,
              1.72 +
              y,
              0
            )
          ]),
        lineMaterial.clone()
      )
    );

  }


  const shaft =
    mesh(
      new THREE.CylinderGeometry(
        0.026,
        0.033,
        1.05,
        12
      ),
      0xb3bdc5,
      0.28,
      0.72
    );


  shaft.position.y =
    0.82;


  group.add(
    shaft
  );


  const handle =
    mesh(
      new THREE.CylinderGeometry(
        0.058,
        0.073,
        0.7,
        14
      ),
      0x202429,
      0.78,
      0.04
    );


  handle.position.y =
    0.3;


  group.add(
    handle
  );


  group.rotation.z =
    -0.12;


  return group;

}


/* =========================================================
   TROMBONE
========================================================= */

function createTrombone() {

  const group =
    new THREE.Group();


  const brass =
    0xa98b4c;


  for (
    const y of [
      0.84,
      1.12
    ]
  ) {

    const tube =
      mesh(
        new THREE.CylinderGeometry(
          0.032,
          0.032,
          2.15,
          12
        ),
        brass,
        0.24,
        0.78
      );


    tube.rotation.z =
      Math.PI /
      2;


    tube.position.set(
      -0.04,
      y,
      0
    );


    group.add(
      tube
    );

  }


  for (
    const x of [
      -0.48,
      0.2
    ]
  ) {

    const brace =
      mesh(
        new THREE.CylinderGeometry(
          0.022,
          0.022,
          0.28,
          10
        ),
        0x816a39,
        0.24,
        0.75
      );


    brace.position.set(
      x,
      0.98,
      0
    );


    group.add(
      brace
    );

  }


  const bell =
    mesh(
      new THREE.ConeGeometry(
        0.42,
        0.72,
        34,
        1,
        true
      ),
      brass,
      0.22,
      0.82
    );


  bell.rotation.z =
    -Math.PI /
    2;


  bell.position.set(
    1.34,
    1.12,
    0
  );


  group.add(
    bell
  );


  const rim =
    mesh(
      new THREE.TorusGeometry(
        0.42,
        0.024,
        10,
        38
      ),
      0xc4a15d,
      0.2,
      0.85
    );


  rim.rotation.y =
    Math.PI /
    2;


  rim.position.set(
    1.7,
    1.12,
    0
  );


  group.add(
    rim
  );


  const bend =
    mesh(
      new THREE.TorusGeometry(
        0.14,
        0.032,
        10,
        28,
        Math.PI
      ),
      brass,
      0.22,
      0.82
    );


  bend.rotation.set(
    Math.PI /
    2,
    0,
    Math.PI /
    2
  );


  bend.position.set(
    -1.15,
    0.98,
    0
  );


  group.add(
    bend
  );


  return group;

}


/* =========================================================
   BLENDER MONKEY
========================================================= */

function createMonkey() {

  const group =
    new THREE.Group();


  const brown =
    0x7f736b;


  const light =
    0xa6988e;


  const head =
    mesh(
      new THREE.IcosahedronGeometry(
        0.64,
        2
      ),
      brown,
      0.72,
      0.04
    );


  head.scale.set(
    1.02,
    0.95,
    0.82
  );


  head.position.y =
    1.12;


  group.add(
    head
  );


  for (
    const x of [
      -0.42,
      0.42
    ]
  ) {

    const cheek =
      mesh(
        new THREE.IcosahedronGeometry(
          0.31,
          1
        ),
        brown,
        0.73,
        0.04
      );


    cheek.scale.set(
      0.9,
      1.05,
      0.78
    );


    cheek.position.set(
      x,
      0.96,
      0.32
    );


    group.add(
      cheek
    );


    const ear =
      mesh(
        new THREE.IcosahedronGeometry(
          0.28,
          1
        ),
        brown,
        0.73,
        0.04
      );


    ear.scale.set(
      0.55,
      0.95,
      0.32
    );


    ear.position.set(
      x < 0
        ? -0.74
        : 0.74,
      1.13,
      0
    );


    group.add(
      ear
    );

  }


  const muzzle =
    mesh(
      new THREE.IcosahedronGeometry(
        0.43,
        2
      ),
      light,
      0.77,
      0.03
    );


  muzzle.scale.set(
    1.08,
    0.6,
    0.72
  );


  muzzle.position.set(
    0,
    0.91,
    0.54
  );


  group.add(
    muzzle
  );


  return group;

}


/* =========================================================
   OSCILLOSCOPE
========================================================= */

function createScope() {

  const group =
    new THREE.Group();


  const body =
    box(
      1.7,
      1.05,
      1.15,
      0.11,
      0x39434c,
      0.58,
      0.24
    );


  body.position.y =
    0.58;


  group.add(
    body
  );


  const screen =
    box(
      0.95,
      0.55,
      0.025,
      0.04,
      0x365f6f,
      0.25,
      0.08
    );


  screen.position.set(
    -0.22,
    0.68,
    0.59
  );


  screen.material
    .emissive
    .set(
      0x18333b
    );


  screen.material
    .emissiveIntensity =
    0.6;


  group.add(
    screen
  );


  for (
    let i = 0;
    i < 3;
    i++
  ) {

    const knob =
      mesh(
        new THREE.CylinderGeometry(
          0.09,
          0.09,
          0.08,
          18
        ),
        0x8d9aa4,
        0.35,
        0.6
      );


    knob.rotation.x =
      Math.PI /
      2;


    knob.position.set(
      0.55,
      0.78 -
      i *
      0.25,
      0.61
    );


    group.add(
      knob
    );

  }


  return group;

}


/* =========================================================
   PORTRAIT
========================================================= */

function createPortrait() {

  const group =
    new THREE.Group();


  const torso =
    box(
      1.3,
      0.82,
      0.68,
      0.2,
      0x4d5e6b,
      0.72,
      0.06
    );


  torso.position.y =
    0.46;


  group.add(
    torso
  );


  const neck =
    mesh(
      new THREE.CylinderGeometry(
        0.18,
        0.21,
        0.3,
        16
      ),
      0xb99a82,
      0.85,
      0.02
    );


  neck.position.y =
    1;


  group.add(
    neck
  );


  const head =
    mesh(
      new THREE.IcosahedronGeometry(
        0.47,
        3
      ),
      0xc6a78e,
      0.86,
      0.02
    );


  head.scale.set(
    0.9,
    1.08,
    0.86
  );


  head.position.y =
    1.43;


  group.add(
    head
  );


  const hair =
    mesh(
      new THREE.IcosahedronGeometry(
        0.48,
        2
      ),
      0x25282b,
      0.85,
      0.02
    );


  hair.scale.set(
    0.93,
    0.5,
    0.89
  );


  hair.position.set(
    0,
    1.7,
    -0.02
  );


  group.add(
    hair
  );


  return group;

}


/* =========================================================
   RESUME
========================================================= */

function createResume() {

  const group =
    new THREE.Group();


  const paper =
    box(
      1.28,
      0.035,
      1.72,
      0.02,
      0xd7d9d8,
      0.86,
      0
    );


  paper.position.y =
    0.05;


  group.add(
    paper
  );


  [
    0.72,
    0.9,
    0.8,
    0.62,
    0.93,
    0.78,
    0.88
  ]
    .forEach(
      (
        length,
        index
      ) => {

        const line =
          box(
            length,
            0.015,
            0.04,
            0.006,
            index ===
            0
              ? 0x37414a
              : 0x747d84,
            0.75,
            0
          );


        line.position.set(
          -0.1,
          0.075,
          -0.57 +
          index *
          0.18
        );


        group.add(
          line
        );

      }
    );


  return group;

}


/* =========================================================
   LAPTOP
========================================================= */

function createLaptop() {

  const group =
    new THREE.Group();


  const base =
    box(
      1.8,
      0.09,
      1.12,
      0.05,
      0x737b82,
      0.32,
      0.7
    );


  base.position.y =
    0.11;


  group.add(
    base
  );


  const screenGroup =
    new THREE.Group();


  screenGroup.position.set(
    0,
    0.17,
    -0.49
  );


  screenGroup.rotation.x =
    -0.22;


  group.add(
    screenGroup
  );


  const frame =
    box(
      1.68,
      1,
      0.07,
      0.06,
      0x30363b,
      0.34,
      0.62
    );


  frame.position.y =
    0.51;


  screenGroup.add(
    frame
  );


  const screen =
    box(
      1.5,
      0.82,
      0.015,
      0.035,
      0x284d61,
      0.25,
      0.1
    );


  screen.position.set(
    0,
    0.52,
    0.045
  );


  screen.material
    .emissive
    .set(
      0x152e3c
    );


  screen.material
    .emissiveIntensity =
    0.5;


  screenGroup.add(
    screen
  );


  return group;

}


/* =========================================================
   BOOKS
========================================================= */

function createBooks() {

  const group =
    new THREE.Group();


  [
    [
      1.35,
      0.22,
      0.82,
      0x516a7d
    ],

    [
      1.18,
      0.2,
      0.78,
      0x765f58
    ],

    [
      1.3,
      0.21,
      0.8,
      0x566754
    ]
  ]
    .forEach(
      (
        [
          width,
          height,
          depth,
          color
        ],
        index
      ) => {

        const book =
          box(
            width,
            height,
            depth,
            0.045,
            color,
            0.76,
            0.02
          );


        book.position.y =
          0.11 +
          index *
          0.21;


        book.rotation.y =
          (
            index -
            1
          ) *
          0.06;


        group.add(
          book
        );

      }
    );


  return group;

}


/* =========================================================
   ANALOG CIRCUIT BOARD
========================================================= */

function createCircuit() {

  const group =
    new THREE.Group();


  const board =
    box(
      1.85,
      0.09,
      1.15,
      0.04,
      0x4e5d66,
      0.72,
      0.06
    );


  board.position.y =
    0.18;


  group.add(
    board
  );


  const opAmp =
    box(
      0.55,
      0.14,
      0.4,
      0.025,
      0x171a1e,
      0.62,
      0.08
    );


  opAmp.position.set(
    -0.28,
    0.3,
    0
  );


  group.add(
    opAmp
  );


  for (
    const x of [
      0.3,
      0.55
    ]
  ) {

    const capacitor =
      mesh(
        new THREE.CylinderGeometry(
          0.07,
          0.07,
          0.23,
          14
        ),
        0x7f8f9b,
        0.38,
        0.4
      );


    capacitor.position.set(
      x,
      0.34,
      -0.2
    );


    group.add(
      capacitor
    );

  }


  for (
    let i = 0;
    i < 4;
    i++
  ) {

    const resistor =
      box(
        0.36,
        0.06,
        0.08,
        0.018,
        0x9a8c6a,
        0.62,
        0.12
      );


    resistor.position.set(
      0.25 +
      (
        i %
        2
      ) *
      0.38,
      0.31,
      0.15 +
      Math.floor(
        i /
        2
      ) *
      0.2
    );


    group.add(
      resistor
    );

  }


  return group;

}


/* =========================================================
   ENVELOPE
========================================================= */

function createEnvelope() {

  const group =
    new THREE.Group();


  const envelope =
    box(
      1.62,
      0.07,
      1.05,
      0.05,
      0xd7d8d5,
      0.82,
      0
    );


  envelope.position.y =
    0.07;


  group.add(
    envelope
  );


  return group;

}


/* =========================================================
   PHONE
========================================================= */

function createPhone() {

  const group =
    new THREE.Group();


  const body =
    box(
      0.6,
      0.09,
      1.18,
      0.1,
      0x242a30,
      0.35,
      0.68
    );


  body.position.y =
    0.07;


  group.add(
    body
  );


  const screen =
    box(
      0.51,
      0.016,
      1,
      0.08,
      0x315668,
      0.25,
      0.1
    );


  screen.position.y =
    0.125;


  screen.material
    .emissive
    .set(
      0x18313c
    );


  screen.material
    .emissiveIntensity =
    0.5;


  group.add(
    screen
  );


  return group;

}


/* =========================================================
   RIGID BODY CUBE STACK
========================================================= */

function createCubeStack() {

  const group =
    new THREE.Group();


  [
    [
      0x58738c,
      -0.5,
      0.3
    ],

    [
      0x7a8791,
      0.1,
      0.3
    ],

    [
      0x596b60,
      0.67,
      0.3
    ],

    [
      0x6f677b,
      -0.2,
      0.85
    ],

    [
      0x82735e,
      0.4,
      0.87
    ]
  ]
    .forEach(
      (
        [
          color,
          x,
          y
        ],
        index
      ) => {

        const cube =
          box(
            0.54,
            0.54,
            0.54,
            0.06,
            color,
            0.54,
            0.14
          );


        cube.position.set(
          x,
          y,
          0
        );


        cube.rotation.set(
          index *
          0.06,
          index *
          0.11,
          index *
          0.04
        );


        group.add(
          cube
        );

      }
    );


  return group;

}


/* =========================================================
   DISPOSE 3D OBJECT
========================================================= */

function disposeGroup(
  group
) {

  group?.traverse(
    child => {

      child.geometry
        ?.dispose?.();


      if (
        Array.isArray(
          child.material
        )
      ) {

        child.material
          .forEach(
            material =>
              material
                .dispose?.()
          );

      }

      else {

        child.material
          ?.dispose?.();

      }

    }
  );

}


/* =========================================================
   SIDEBAR
========================================================= */

function renderSidebar() {

  dom.sidebar
    .replaceChildren();


  for (
    const [
      section,
      symbol,
      label
    ]
    of NAV_SECTIONS
  ) {

    const group =
      document.createElement(
        'div'
      );


    group.className =
      'nav-group';


    const title =
      document.createElement(
        'button'
      );


    title.type =
      'button';


    title.className =
      'nav-group-title';


    title.dataset.section =
      section;


    title.innerHTML = `

      <span class="nav-symbol">
        ${symbol}
      </span>

      <span class="label">
        ${label}
      </span>

    `;


    title.addEventListener(
      'click',
      () =>
        setSelection(
          section,
          0
        )
    );


    group.appendChild(
      title
    );


    if (
      CONTENT[
        section
      ].length >
      1
    ) {

      const items =
        document.createElement(
          'div'
        );


      items.className =
        'nav-items';


      CONTENT[
        section
      ]
        .forEach(
          (
            item,
            index
          ) => {

            const button =
              document.createElement(
                'button'
              );


            button.type =
              'button';


            button.className =
              'nav-item';


            button.dataset.section =
              section;


            button.dataset.itemId =
              item.id;


            button.textContent =
              item.label;


            button.addEventListener(
              'click',
              () =>
                setSelection(
                  section,
                  index
                )
            );


            items.appendChild(
              button
            );

          }
        );


      group.appendChild(
        items
      );

    }


    dom.sidebar
      .appendChild(
        group
      );

  }


  updateSidebarState();

}


/* =========================================================
   UPDATE SIDEBAR STATE
========================================================= */

function updateSidebarState() {

  document
    .querySelectorAll(
      '.nav-group-title'
    )
    .forEach(
      button =>
        button
          .classList
          .toggle(
            'is-active',
            button.dataset
              .section ===
            state.section
          )
    );


  document
    .querySelectorAll(
      '.nav-item'
    )
    .forEach(
      button =>
        button
          .classList
          .toggle(
            'is-active',
            button.dataset
              .section ===
              state.section &&
            button.dataset
              .itemId ===
              currentItem().id
          )
    );

}


/* =========================================================
   SEARCH INDEX
========================================================= */

const SEARCH_INDEX =
  [];


for (
  const [
    section,
    items
  ]
  of Object.entries(
    CONTENT
  )
) {

  for (
    const [
      index,
      item
    ]
    of items.entries()
  ) {

    SEARCH_INDEX.push({

      section,

      index,

      item,

      text:
        `${section} ${item.label} ${item.title} ${item.meta} ${item.tags.join(' ')} ${item.description}`
          .toLowerCase()

    });

  }

}


/* =========================================================
   SEARCH
========================================================= */

function renderSearch(
  query
) {

  const normalized =
    query
      .trim()
      .toLowerCase();


  if (
    !normalized
  ) {

    dom.searchResults.hidden =
      true;


    dom.searchResults
      .replaceChildren();


    return;

  }


  const matches =
    SEARCH_INDEX
      .filter(
        result =>
          result.text
            .includes(
              normalized
            )
      )
      .slice(
        0,
        8
      );


  dom.searchResults
    .replaceChildren();


  if (
    !matches.length
  ) {

    const empty =
      document.createElement(
        'div'
      );


    empty.className =
      'search-empty';


    empty.textContent =
      'No matching work.';


    dom.searchResults
      .appendChild(
        empty
      );

  }

  else {

    matches.forEach(
      result => {

        const button =
          document.createElement(
            'button'
          );


        button.type =
          'button';


        button.className =
          'search-result';


        button.innerHTML = `

          <strong>
            ${escapeHTML(
              result.item.title
            )}
          </strong>

          <span>
            ${escapeHTML(
              result.section
            )}
            ·
            ${escapeHTML(
              result.item.meta
            )}
          </span>

        `;


        button.addEventListener(
          'click',
          () => {

            setSelection(
              result.section,
              result.index
            );


            dom.search.value =
              '';


            renderSearch(
              ''
            );

          }
        );


        dom.searchResults
          .appendChild(
            button
          );

      }
    );

  }


  dom.searchResults.hidden =
    false;

}


/* =========================================================
   SEARCH EVENTS
========================================================= */

dom.search
  .addEventListener(
    'input',
    () =>
      renderSearch(
        dom.search.value
      )
  );


window.addEventListener(
  'keydown',
  event => {

    if (
      (
        event.metaKey ||
        event.ctrlKey
      ) &&
      event.key
        .toLowerCase() ===
        'k'
    ) {

      event.preventDefault();


      dom.search.focus();


      dom.search.select();

    }


    if (
      event.key ===
      'Escape'
    ) {

      dom.search.blur();


      renderSearch(
        ''
      );


      closeAddMenu();

    }

  }
);


document.addEventListener(
  'pointerdown',
  event => {

    if (
      !dom.searchResults
        .contains(
          event.target
        ) &&
      event.target !==
        dom.search
    ) {

      renderSearch(
        ''
      );

    }


    if (
      state.addOpen &&
      !dom.addMenu
        .contains(
          event.target
        ) &&
      !dom.addObject
        .contains(
          event.target
        )
    ) {

      closeAddMenu();

    }

  }
);


/* =========================================================
   CURRENT ITEM
========================================================= */

function currentItem() {

  return (
    CONTENT[
      state.section
    ][
      state.index
    ]
  );

}


/* =========================================================
   CHANGE SELECTION
========================================================= */

function setSelection(
  section,
  index = 0,
  updateHash = true
) {

  if (
    !CONTENT[
      section
    ]
  ) {

    section =
      'home';

  }


  const sectionChanged =
    section !==
      state.section ||
    !state.propGroup;


  state.section =
    section;


  state.index =
    Math.max(
      0,
      Math.min(
        index,
        CONTENT[
          section
        ].length -
        1
      )
    );


  if (
    sectionChanged
  ) {

    loadProps(
      section
    );

  }


  updateSidebarState();


  const item =
    currentItem();


  dom.sceneLabel.textContent =
    `${section.toUpperCase()} · ${item.label.toUpperCase()}`;


  /*
    This launches the physical robotic
    information retrieval sequence.
  */

  deliverCard(
    section,
    item
  );


  if (
    updateHash
  ) {

    history.replaceState(
      null,
      '',
      `#${section}/${item.id}`
    );

  }

}


/* =========================================================
   HASH ROUTING
========================================================= */

function readHash() {

  const raw =
    location.hash
      .replace(
        /^#/,
        ''
      );


  if (
    !raw
  ) {

    setSelection(
      'home',
      0,
      false
    );


    return;

  }


  const [
    section,
    id
  ] =
    raw.split(
      '/'
    );


  if (
    !CONTENT[
      section
    ]
  ) {

    setSelection(
      'home',
      0,
      false
    );


    return;

  }


  const index =
    Math.max(
      0,
      CONTENT[
        section
      ]
        .findIndex(
          item =>
            item.id ===
            id
        )
    );


  setSelection(
    section,
    index,
    false
  );

}


window.addEventListener(
  'hashchange',
  readHash
);


/* =========================================================
   BRAND LINK
========================================================= */

document
  .querySelectorAll(
    '[data-jump-section]'
  )
  .forEach(
    anchor =>
      anchor.addEventListener(
        'click',
        event => {

          event.preventDefault();


          setSelection(
            anchor.dataset
              .jumpSection,
            0
          );

        }
      )
  );


/* =========================================================
   CLICK 3D PROPS
========================================================= */

const raycaster =
  new THREE.Raycaster();


const pointer =
  new THREE.Vector2();


let pointerDown = {
  x:
    0,

  y:
    0
};


function raycastProp(
  event
) {

  if (
    !state.propGroup
  ) {

    return null;

  }


  const rect =
    dom.canvas
      .getBoundingClientRect();


  pointer.x =
    (
      (
        event.clientX -
        rect.left
      ) /
      rect.width
    ) *
    2 -
    1;


  pointer.y =
    -(
      (
        event.clientY -
        rect.top
      ) /
      rect.height
    ) *
    2 +
    1;


  raycaster.setFromCamera(
    pointer,
    camera
  );


  const hits =
    raycaster
      .intersectObjects(
        state.propGroup
          .children,
        true
      );


  for (
    const hit of hits
  ) {

    let object =
      hit.object;


    while (
      object &&
      object !==
        state.propGroup
    ) {

      if (
        object.userData
          .itemId
      ) {

        return object;

      }


      object =
        object.parent;

    }

  }


  return null;

}


dom.canvas.addEventListener(
  'pointerdown',
  event => {

    pointerDown = {
      x:
        event.clientX,

      y:
        event.clientY
    };

  }
);


dom.canvas.addEventListener(
  'pointerup',
  event => {

    if (
      Math.hypot(
        event.clientX -
        pointerDown.x,
        event.clientY -
        pointerDown.y
      ) >
      6
    ) {

      return;

    }


    const prop =
      raycastProp(
        event
      );


    if (
      !prop
    ) {

      return;

    }


    const index =
      CONTENT[
        state.section
      ]
        .findIndex(
          item =>
            item.id ===
            prop.userData
              .itemId
        );


    if (
      index >=
      0
    ) {

      setSelection(
        state.section,
        index
      );

    }

  }
);


dom.canvas.addEventListener(
  'pointermove',
  event => {

    dom.canvas.style.cursor =
      raycastProp(
        event
      )
        ? 'pointer'
        : 'grab';

  }
);


/* =========================================================
   BLENDER-STYLE OBJECT SPAWNING
========================================================= */

const BOUNDS =
  7.4;


function spawnShape(
  kind
) {

  let object;


  switch (
    kind
  ) {

    case 'plane':

      object =
        box(
          1.3,
          0.1,
          1.3,
          0.03,
          0x69737d,
          0.8,
          0.05
        );

      break;


    case 'circle':

      object =
        mesh(
          new THREE.CylinderGeometry(
            0.62,
            0.62,
            0.1,
            32
          ),
          0x7a746c,
          0.65,
          0.12
        );

      break;


    case 'sphere':

      object =
        mesh(
          new THREE.SphereGeometry(
            0.6,
            26,
            18
          ),
          0x62766a,
          0.52,
          0.12
        );

      break;


    case 'icosphere':

      object =
        mesh(
          new THREE.IcosahedronGeometry(
            0.63,
            2
          ),
          0x596f82,
          0.5,
          0.16
        );

      break;


    case 'cylinder':

      object =
        mesh(
          new THREE.CylinderGeometry(
            0.5,
            0.5,
            1.1,
            24
          ),
          0x766b6b,
          0.55,
          0.16
        );

      break;


    case 'cone':

      object =
        mesh(
          new THREE.ConeGeometry(
            0.62,
            1.2,
            26
          ),
          0x7d755f,
          0.55,
          0.16
        );

      break;


    case 'torus':

      object =
        mesh(
          new THREE.TorusGeometry(
            0.53,
            0.18,
            16,
            42
          ),
          0x706879,
          0.5,
          0.2
        );

      break;


    case 'monkey':

      object =
        createMonkey();


      object.scale.setScalar(
        0.8
      );

      break;


    default:

      object =
        box(
          1,
          1,
          1,
          0.06,
          0x596f82,
          0.5,
          0.18
        );

  }


  object.userData.radius =
    0.72;


  object.position.set(
    (
      Math.random() -
      0.5
    ) *
    3,
    4 +
    Math.random(),
    (
      Math.random() -
      0.5
    ) *
    2.5
  );


  object.rotation.set(
    Math.random(),
    Math.random(),
    Math.random()
  );


  object.userData.velocity =
    new THREE.Vector3(
      (
        Math.random() -
        0.5
      ) *
      1.4,
      0,
      (
        Math.random() -
        0.5
      ) *
      1.4
    );


  object.userData.angular =
    new THREE.Vector3(
      Math.random() -
      0.5,
      Math.random() -
      0.5,
      Math.random() -
      0.5
    )
      .multiplyScalar(
        1.5
      );


  scene.add(
    object
  );


  state.spawned.push(
    object
  );


  state.selectedSpawn =
    object;


  closeAddMenu();


  if (
    state.spawned.length >
    14
  ) {

    const oldest =
      state.spawned.shift();


    scene.remove(
      oldest
    );


    disposeGroup(
      oldest
    );

  }

}


/* =========================================================
   LIGHTWEIGHT RIGID BODY PHYSICS
========================================================= */

function updatePhysics(
  dt
) {

  for (
    const object
    of state.spawned
  ) {

    const velocity =
      object.userData
        .velocity;


    const angular =
      object.userData
        .angular;


    const radius =
      object.userData
        .radius ||
      0.6;


    velocity.y +=
      -7.7 *
      dt;


    object.position
      .addScaledVector(
        velocity,
        dt
      );


    object.rotation.x +=
      angular.x *
      dt;


    object.rotation.y +=
      angular.y *
      dt;


    object.rotation.z +=
      angular.z *
      dt;


    if (
      object.position.y -
      radius <
      0
    ) {

      object.position.y =
        radius;


      if (
        velocity.y <
        0
      ) {

        velocity.y *=
          -0.42;

      }


      velocity.x *=
        0.986;


      velocity.z *=
        0.986;


      angular.multiplyScalar(
        0.992
      );

    }


    for (
      const axis
      of [
        'x',
        'z'
      ]
    ) {

      if (
        object.position[
          axis
        ] +
        radius >
        BOUNDS
      ) {

        object.position[
          axis
        ] =
          BOUNDS -
          radius;


        velocity[
          axis
        ] =
          -Math.abs(
            velocity[
              axis
            ]
          ) *
          0.54;

      }

      else if (
        object.position[
          axis
        ] -
        radius <
        -BOUNDS
      ) {

        object.position[
          axis
        ] =
          -BOUNDS +
          radius;


        velocity[
          axis
        ] =
          Math.abs(
            velocity[
              axis
            ]
          ) *
          0.54;

      }

    }

  }

}


/* =========================================================
   BLENDER ACTIONS
========================================================= */

function tossSelected() {

  const object =
    state.selectedSpawn;


  if (
    object
  ) {

    object.userData
      .velocity
      .set(
        (
          Math.random() -
          0.5
        ) *
        3.2,
        5.3,
        (
          Math.random() -
          0.5
        ) *
        3.2
      );

  }

}


function spinSelected() {

  const object =
    state.selectedSpawn;


  if (
    object
  ) {

    object.userData
      .angular
      .add(
        new THREE.Vector3(
          0.7,
          1.4,
          0.35
        )
      );

  }

}


function deleteSelected() {

  const object =
    state.selectedSpawn;


  if (
    !object
  ) {

    return;

  }


  scene.remove(
    object
  );


  state.spawned =
    state.spawned
      .filter(
        item =>
          item !==
          object
      );


  disposeGroup(
    object
  );


  state.selectedSpawn =
    state.spawned
      .at(
        -1
      ) ||
    null;

}


/* =========================================================
   ADD MENU
========================================================= */

function openAddMenu() {

  state.addOpen =
    true;


  dom.addMenu.hidden =
    false;


  dom.addObject
    .setAttribute(
      'aria-expanded',
      'true'
    );

}


function closeAddMenu() {

  state.addOpen =
    false;


  dom.addMenu.hidden =
    true;


  dom.addObject
    .setAttribute(
      'aria-expanded',
      'false'
    );

}


dom.addObject
  .addEventListener(
    'click',
    () =>
      state.addOpen
        ? closeAddMenu()
        : openAddMenu()
  );


dom.addMenu
  .querySelectorAll(
    '[data-add]'
  )
  .forEach(
    button =>
      button
        .addEventListener(
          'click',
          () =>
            spawnShape(
              button.dataset
                .add
            )
        )
  );


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

window.addEventListener(
  'keydown',
  event => {

    const editable =
      event.target instanceof
        HTMLInputElement ||
      event.target instanceof
        HTMLTextAreaElement;


    if (
      editable
    ) {

      return;

    }


    if (
      event.shiftKey &&
      event.key
        .toLowerCase() ===
        'a'
    ) {

      event.preventDefault();


      openAddMenu();


      return;

    }


    if (
      state.addOpen &&
      /^[1-9]$/.test(
        event.key
      )
    ) {

      spawnShape(
        [
          'plane',
          'cube',
          'circle',
          'sphere',
          'icosphere',
          'cylinder',
          'cone',
          'torus',
          'monkey'
        ][
          Number(
            event.key
          ) -
          1
        ]
      );


      return;

    }


    if (
      event.key
        .toLowerCase() ===
      'g'
    ) {

      tossSelected();

    }


    if (
      event.key
        .toLowerCase() ===
      'r'
    ) {

      spinSelected();

    }


    if (
      event.key
        .toLowerCase() ===
      'x'
    ) {

      deleteSelected();

    }

  }
);


/* =========================================================
   RESET VIEW
========================================================= */

dom.resetView
  .addEventListener(
    'click',
    () => {

      camera.position.set(
        8.8,
        5.7,
        10.8
      );


      controls.target.set(
        0.5,
        1.35,
        0
      );


      controls.update();

    }
  );


/* =========================================================
   UPDATE ARM TWEEN
========================================================= */

function updateArmTween(
  now
) {

  if (
    !state.armTween
  ) {

    return;

  }


  const tween =
    state.armTween;


  const t =
    Math.min(
      1,
      (
        now -
        tween.start
      ) /
      tween.duration
    );


  const e =
    ease(
      t
    );


  const from =
    tween.from;


  const to =
    tween.to;


  arm.baseYaw.rotation.y =
    THREE.MathUtils.lerp(
      from.base,
      to.base,
      e
    );


  arm.shoulder.rotation.z =
    THREE.MathUtils.lerp(
      from.shoulder,
      to.shoulder,
      e
    );


  arm.elbow.rotation.z =
    THREE.MathUtils.lerp(
      from.elbow,
      to.elbow,
      e
    );


  arm.wristPitch.rotation.z =
    THREE.MathUtils.lerp(
      from.wristPitch,
      to.wristPitch,
      e
    );


  arm.wristYaw.rotation.y =
    THREE.MathUtils.lerp(
      from.wristYaw ??
      0,
      to.wristYaw ??
      0,
      e
    );


  arm.wristRoll.rotation.y =
    THREE.MathUtils.lerp(
      from.wristRoll ??
      0,
      to.wristRoll ??
      0,
      e
    );


  if (
    t >=
    1
  ) {

    state.armTween =
      null;

  }

}


/* =========================================================
   UPDATE GRIP TWEEN
========================================================= */

function updateGripTween(
  now
) {

  if (
    !state.gripTween
  ) {

    return;

  }


  const tween =
    state.gripTween;


  const t =
    Math.min(
      1,
      (
        now -
        tween.start
      ) /
      tween.duration
    );


  const e =
    ease(
      t
    );


  const x =
    THREE.MathUtils.lerp(
      tween.from,
      tween.to,
      e
    );


  setGripInstant(
    x
  );


  if (
    t >=
    1
  ) {

    state.gripTween =
      null;

  }

}


/* =========================================================
   UPDATE CARD TWEENS
========================================================= */

function updateCardTweens(
  now
) {

  state.cardTweens =
    state.cardTweens
      .filter(
        tween => {

          const t =
            Math.min(
              1,
              (
                now -
                tween.start
              ) /
              tween.duration
            );


          const e =
            ease(
              t
            );


          if (
            tween.type ===
            'local'
          ) {

            tween.card
              .position
              .lerpVectors(
                tween.from,
                tween.to,
                e
              );

          }

          else {

            tween.card
              .position
              .lerpVectors(
                tween.fromPos,
                tween.toPos,
                e
              );


            tween.card
              .quaternion
              .slerpQuaternions(
                tween.fromQuat,
                tween.toQuat,
                e
              );


            tween.card
              .scale
              .setScalar(
                THREE.MathUtils
                  .lerp(
                    tween.fromScale,
                    tween.toScale,
                    e
                  )
              );


            if (
              tween.fade
            ) {

              tween.card
                .userData
                .element
                .style
                .opacity =
                String(
                  1 -
                  e *
                  0.94
                );

            }

          }


          return (
            t <
            1
          );

        }
      );

}


/* =========================================================
   RESIZE
========================================================= */

function resize() {

  const width =
    window.innerWidth;


  const height =
    window.innerHeight;


  webgl.setSize(
    width,
    height,
    false
  );


  css3d.setSize(
    width,
    height
  );


  camera.aspect =
    width /
    height;


  camera
    .updateProjectionMatrix();

}


window.addEventListener(
  'resize',
  resize
);


/* =========================================================
   MAIN ANIMATION LOOP
========================================================= */

let last =
  performance.now();


function animate(
  now
) {

  requestAnimationFrame(
    animate
  );


  const dt =
    Math.min(
      0.033,
      (
        now -
        last
      ) /
      1000
    );


  last =
    now;


  controls.update();


  updateArmTween(
    now
  );


  updateGripTween(
    now
  );


  updateCardTweens(
    now
  );


  updatePhysics(
    dt
  );


  /*
    Information stays readable while the robot
    moves because its world-facing orientation
    is compensated relative to the arm.
  */

  orientHeldCard();


  webgl.render(
    scene,
    camera
  );


  css3d.render(
    scene,
    camera
  );

}


/* =========================================================
   INITIALIZE
========================================================= */

renderSidebar();


resize();


readHash();


requestAnimationFrame(
  animate
);
