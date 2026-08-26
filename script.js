import * as THREE from 'three';

import {
  RoundedBoxGeometry
} from 'three/addons/geometries/RoundedBoxGeometry.js';


/* =========================================================
   LINKS
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
   CONTENT
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
        'I build systems where code eventually has to interact with something real: a robot, a sensor, a radio, a circuit, or a person using it. This portfolio works the same way—the robotic arm physically swaps the page you are reading.',

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

      model:
        'home'
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

      model:
        'about'
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

      model:
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
          'learning material produced'
        ]

      ],

      details: [

        'Developed and debugged 15 applications and games for the KC15 platform.',

        'Verified reliable execution on the Raspberry Pi Pico / RP2040 platform.',

        'Produced technical tutorials and demonstrations intended for student use.'

      ],

      model:
        'kc15'
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

      model:
        'vision'
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

      model:
        'analog'
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

      model:
        'eim'
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

      model:
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

      model:
        'coaching'
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

      model:
        'orchestra'
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
        'I enjoy Blender most when a scene behaves like a system rather than a static render. Rigid-body simulations, collisions, armatures, and mechanical motion are the parts I keep coming back to. The robotic page switcher on this site comes directly from that interest.',

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

      model:
        'blender'
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

      model:
        'hardware'
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

      model:
        'music'
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
        'For software, embedded, robotics, or AI-related opportunities, email is the easiest way to reach me. My GitHub, LinkedIn, YouTube channel, and résumé are linked from the site navigation.',

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

      model:
        'contact'
    }

  ]

};


const NAV = [

  [
    'home',
    '⌂',
    'Home'
  ],

  [
    'about',
    '●',
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
   DOM
========================================================= */

const dom = {

  canvas:
    document.querySelector(
      '#scene-canvas'
    ),

  nav:
    document.querySelector(
      '#nav-groups'
    ),

  topbarTitle:
    document.querySelector(
      '#topbar-title'
    ),

  sceneStatus:
    document.querySelector(
      '#scene-status-text'
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

  busy:
    false,

  queued:
    null,

  station:
    null,

  heldCard:
    null,

  holdBlend:
    null,

  armTween:
    null,

  gripTween:
    null,

  objectTweens:
    [],

  addOpen:
    false,

  spawned:
    [],

  selectedSpawn:
    null,

  reducedMotion:
    window
      .matchMedia(
        '(prefers-reduced-motion: reduce)'
      )
      .matches

};


/* =========================================================
   THREE SETUP

   Fixed camera.
   No OrbitControls.
   No drag-to-look-around.
========================================================= */

const renderer =
  new THREE.WebGLRenderer({

    canvas:
      dom.canvas,

    antialias:
      true,

    alpha:
      true

  });


renderer.setPixelRatio(

  Math.min(

    window.devicePixelRatio,

    2

  )

);


renderer.shadowMap.enabled =
  true;


renderer.shadowMap.type =
  THREE.PCFSoftShadowMap;


renderer.outputColorSpace =
  THREE.SRGBColorSpace;


renderer.toneMapping =
  THREE.ACESFilmicToneMapping;


renderer.toneMappingExposure =
  1.08;


renderer.setClearColor(
  0x0a0d12,
  0
);


const scene =
  new THREE.Scene();


scene.fog =
  new THREE.Fog(

    0x0b1016,

    11,

    25

  );


const camera =
  new THREE.PerspectiveCamera(

    32,

    1,

    0.1,

    100

  );


camera.position.set(

  7.6,

  4.7,

  9.5

);


const CAMERA_TARGET =
  new THREE.Vector3(

    0.45,

    2.25,

    0.15

  );


camera.lookAt(
  CAMERA_TARGET
);


/* =========================================================
   MATERIAL HELPERS
========================================================= */

function makeMaterial(

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

      makeMaterial(

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


function roundedBox(

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


function disposeObject(

  object

) {

  object
    ?.traverse(

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

              material => {

                material.map
                  ?.dispose?.();


                material
                  .dispose?.();

              }

            );

        }

        else {

          child.material
            ?.map
            ?.dispose?.();


          child.material
            ?.dispose?.();

        }

      }

    );

}


/* =========================================================
   LIGHTING
========================================================= */

scene.add(

  new THREE.HemisphereLight(

    0xf5f8fb,

    0x202936,

    2.25

  )

);


const keyLight =
  new THREE.DirectionalLight(

    0xffffff,

    3.4

  );


keyLight.position.set(

  6,

  10,

  7

);


keyLight.castShadow =
  true;


keyLight.shadow.mapSize.set(

  2048,

  2048

);


keyLight.shadow.camera.left =
  -9;


keyLight.shadow.camera.right =
  9;


keyLight.shadow.camera.top =
  9;


keyLight.shadow.camera.bottom =
  -9;


scene.add(
  keyLight
);


const coolLight =
  new THREE.DirectionalLight(

    0x7aa9df,

    1.75

  );


coolLight.position.set(

  -5,

  5,

  -3

);


scene.add(
  coolLight
);


const softLight =
  new THREE.PointLight(

    0xb7d5f2,

    16,

    9

  );


softLight.position.set(

  -2,

  4.5,

  3.8

);


scene.add(
  softLight
);


/* =========================================================
   FLOOR / BACK WALL
========================================================= */

const floor =
  roundedBox(

    15.5,

    0.28,

    9.0,

    0.08,

    0x202934,

    0.94,

    0.03

  );


floor.position.set(

  0.2,

  -0.14,

  0.15

);


scene.add(
  floor
);


const floorGrid =
  new THREE.GridHelper(

    15.0,

    20,

    0x506070,

    0x35414d

  );


floorGrid.position.set(

  0.2,

  0.012,

  0.15

);


floorGrid.scale.z =
  0.6;


scene.add(
  floorGrid
);


const rearPanel =
  roundedBox(

    11.5,

    4.7,

    0.13,

    0.05,

    0x111820,

    0.9,

    0.03

  );


rearPanel.position.set(

  0.25,

  2.35,

  -4.25

);


scene.add(
  rearPanel
);


const brandGlow =
  new THREE.PointLight(

    0x6ba8dd,

    11,

    6

  );


brandGlow.position.set(

  1.2,

  3.0,

  -3.4

);


scene.add(
  brandGlow
);


/* =========================================================
   BACK WALL WZ
========================================================= */

const wallCanvas =
  document.createElement(
    'canvas'
  );


wallCanvas.width =
  768;


wallCanvas.height =
  256;


const wallCtx =
  wallCanvas.getContext(
    '2d'
  );


wallCtx.clearRect(

  0,

  0,

  768,

  256

);


wallCtx.font =
  '800 144px Inter, Arial, sans-serif';


wallCtx.fillStyle =
  'rgba(130, 181, 228, 0.22)';


wallCtx.textAlign =
  'center';


wallCtx.textBaseline =
  'middle';


wallCtx.fillText(

  'WZ',

  384,

  128

);


const wallTexture =
  new THREE.CanvasTexture(
    wallCanvas
  );


wallTexture.colorSpace =
  THREE.SRGBColorSpace;


const wallMark =
  new THREE.Mesh(

    new THREE.PlaneGeometry(

      3.0,

      1.0

    ),

    new THREE.MeshBasicMaterial({

      map:
        wallTexture,

      transparent:
        true,

      depthWrite:
        false,

      toneMapped:
        false

    })

  );


wallMark.position.set(

  1.0,

  2.8,

  -4.17

);


scene.add(
  wallMark
);


/* =========================================================
   LARGE ROBOT ARM

   Four major links.

   Visible articulations:
   - base rotation
   - shoulder
   - elbow 1
   - elbow 2
   - elbow 3
   - wrist pitch
   - wrist yaw
   - wrist roll
   - gripper
========================================================= */

const ARM = {

  base:
    new THREE.Vector3(

      2.55,

      1.48,

      0.4

    ),

  lengths: [

    1.38,

    1.52,

    1.32,

    0.95

  ],

  limits: [

    [
      -0.28,
      1.15
    ],

    [
      -1.20,
      1.40
    ],

    [
      -1.30,
      1.40
    ],

    [
      -1.30,
      1.40
    ]

  ],

  rest: [

    0.12,

    0.62,

    0.42,

    0.35

  ]

};


const armState = {

  yaw:
    2.95,

  angles:
    [
      ...ARM.rest
    ],

  grip:
    0.23

};


const armVisual =
  buildArmVisual();


scene.add(
  armVisual.root
);


/* =========================================================
   BUILD ARM
========================================================= */

function buildArmVisual() {

  const root =
    new THREE.Group();


  const baseFoot =
    mesh(

      new THREE.CylinderGeometry(

        0.72,

        0.88,

        0.28,

        40

      ),

      0x161d24,

      0.28,

      0.82

    );


  baseFoot.position.set(

    ARM.base.x,

    0.14,

    ARM.base.z

  );


  root.add(
    baseFoot
  );


  const baseColumn =
    mesh(

      new THREE.CylinderGeometry(

        0.55,

        0.66,

        1.36,

        40

      ),

      0x7e8993,

      0.25,

      0.8

    );


  baseColumn.position.set(

    ARM.base.x,

    0.80,

    ARM.base.z

  );


  root.add(
    baseColumn
  );


  const baseCap =
    mesh(

      new THREE.CylinderGeometry(

        0.58,

        0.58,

        0.18,

        40

      ),

      0x6ea6d4,

      0.28,

      0.56

    );


  baseCap.position.set(

    ARM.base.x,

    ARM.base.y,

    ARM.base.z

  );


  root.add(
    baseCap
  );


  const linkMeshes =
    ARM.lengths.map(

      (
        _,
        index
      ) => {

        const link =
          roundedBox(

            index === 0
              ? 0.56
              : 0.48,

            1,

            index === 0
              ? 0.60
              : 0.50,

            0.16,

            index % 2 === 0
              ? 0x9aa4ad
              : 0x858f99,

            0.25,

            0.76

          );


        root.add(
          link
        );


        return link;

      }

    );


  const jointGroups =
    Array.from(

      {
        length:
          ARM.lengths.length
      },

      (
        _,
        index
      ) => {

        const group =
          new THREE.Group();


        const core =
          mesh(

            new THREE.SphereGeometry(

              index === 0
                ? 0.34
                : 0.30,

              26,

              18

            ),

            0x1a222a,

            0.28,

            0.78

          );


        group.add(
          core
        );


        const cap =
          mesh(

            new THREE.CylinderGeometry(

              index === 0
                ? 0.32
                : 0.28,

              index === 0
                ? 0.32
                : 0.28,

              0.12,

              28

            ),

            0x75acd8,

            0.25,

            0.54

          );


        cap.rotation.z =
          Math.PI /
          2;


        cap.position.x =
          0.30;


        group.add(
          cap
        );


        const cap2 =
          cap.clone();


        cap2.position.x =
          -0.30;


        group.add(
          cap2
        );


        root.add(
          group
        );


        return group;

      }

    );


  const wrist =
    new THREE.Group();


  const wristPitch =
    mesh(

      new THREE.CylinderGeometry(

        0.28,

        0.28,

        0.40,

        28

      ),

      0x1a222a,

      0.25,

      0.8

    );


  wristPitch.rotation.z =
    Math.PI /
    2;


  wrist.add(
    wristPitch
  );


  const wristYaw =
    mesh(

      new THREE.CylinderGeometry(

        0.23,

        0.23,

        0.30,

        26

      ),

      0x6fa7d5,

      0.24,

      0.58

    );


  wristYaw.position.y =
    -0.24;


  wrist.add(
    wristYaw
  );


  const wristRoll =
    mesh(

      new THREE.CylinderGeometry(

        0.19,

        0.19,

        0.26,

        26

      ),

      0x222b34,

      0.23,

      0.82

    );


  wristRoll.rotation.x =
    Math.PI /
    2;


  wristRoll.position.y =
    -0.46;


  wrist.add(
    wristRoll
  );


  const gripperPalm =
    roundedBox(

      0.62,

      0.20,

      0.42,

      0.06,

      0x131a21,

      0.26,

      0.82

    );


  gripperPalm.position.y =
    -0.66;


  wrist.add(
    gripperPalm
  );


  const fingerL =
    roundedBox(

      0.13,

      0.62,

      0.17,

      0.035,

      0xaab4bd,

      0.22,

      0.82

    );


  fingerL.position.set(

    -0.23,

    -1.02,

    0

  );


  wrist.add(
    fingerL
  );


  const fingerR =
    fingerL.clone();


  fingerR.position.x =
    0.23;


  wrist.add(
    fingerR
  );


  const socket =
    new THREE.Object3D();


  socket.position.set(

    0,

    -1.28,

    0

  );


  wrist.add(
    socket
  );


  root.add(
    wrist
  );


  return {

    root,

    linkMeshes,

    jointGroups,

    wrist,

    fingerL,

    fingerR,

    socket

  };

}


/* =========================================================
   FORWARD KINEMATICS
========================================================= */

function forward2D(

  angles

) {

  const points = [

    {
      x:
        0,

      y:
        0
    }

  ];


  let x =
    0;


  let y =
    0;


  let cumulative =
    0;


  for (

    let i = 0;

    i <
    ARM.lengths.length;

    i +=
    1

  ) {

    cumulative +=
      angles[
        i
      ];


    x +=
      Math.sin(
        cumulative
      ) *
      ARM.lengths[
        i
      ];


    y +=
      Math.cos(
        cumulative
      ) *
      ARM.lengths[
        i
      ];


    points.push({

      x,

      y

    });

  }


  return points;

}


/* =========================================================
   DETERMINISTIC CCD IK

   No random solving.
   No elbow branch switching.
   Warm-starts from current pose.
   Each joint has explicit limits.
========================================================= */

function solveArmTarget(

  target

) {

  const dx =
    target.x -
    ARM.base.x;


  const dz =
    target.z -
    ARM.base.z;


  const localTarget = {

    x:
      Math.hypot(
        dx,
        dz
      ),

    y:
      target.y -
      ARM.base.y

  };


  let targetYaw =
    Math.atan2(
      dz,
      dx
    );


  targetYaw =
    nearestAngle(

      armState.yaw,

      targetYaw

    );


  const angles = [

    ...armState.angles

  ];


  for (

    let iteration = 0;

    iteration < 20;

    iteration += 1

  ) {

    for (

      let jointIndex =
        angles.length -
        1;

      jointIndex >= 0;

      jointIndex -= 1

    ) {

      const points =
        forward2D(
          angles
        );


      const joint =
        points[
          jointIndex
        ];


      const end =
        points[
          points.length -
          1
        ];


      const ax =
        end.x -
        joint.x;


      const ay =
        end.y -
        joint.y;


      const bx =
        localTarget.x -
        joint.x;


      const by =
        localTarget.y -
        joint.y;


      const cross =
        ax *
        by -
        ay *
        bx;


      const dot =
        ax *
        bx +
        ay *
        by;


      let delta =
        Math.atan2(
          cross,
          dot
        );


      delta *=
        0.72;


      /*
        Our segment angle convention is clockwise
        from vertical, hence subtraction here.
      */

      angles[
        jointIndex
      ] -=
        delta;


      angles[
        jointIndex
      ] =
        clamp(

          angles[
            jointIndex
          ],

          ARM.limits[
            jointIndex
          ]

        );

    }


    /*
      Tiny rest-pose attraction.

      It keeps the visual silhouette
      going upward first and bending
      over afterward.
    */

    for (

      let i = 0;

      i <
      angles.length;

      i +=
      1

    ) {

      angles[
        i
      ] =
        THREE.MathUtils.lerp(

          angles[
            i
          ],

          ARM.rest[
            i
          ],

          0.003

        );


      angles[
        i
      ] =
        clamp(

          angles[
            i
          ],

          ARM.limits[
            i
          ]

        );

    }

  }


  return {

    yaw:
      targetYaw,

    angles

  };

}


/* =========================================================
   HELPERS
========================================================= */

function clamp(

  value,

  limits

) {

  return Math.max(

    limits[
      0
    ],

    Math.min(

      limits[
        1
      ],

      value

    )

  );

}


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
   GET WORLD JOINTS
========================================================= */

function getArmWorldPoints(

  yaw =
    armState.yaw,

  angles =
    armState.angles

) {

  const planar =
    forward2D(
      angles
    );


  const direction =
    new THREE.Vector3(

      Math.cos(
        yaw
      ),

      0,

      Math.sin(
        yaw
      )

    );


  return planar.map(

    point =>

      ARM.base
        .clone()
        .addScaledVector(

          direction,

          point.x

        )
        .add(

          new THREE.Vector3(

            0,

            point.y,

            0

          )

        )

  );

}


/* =========================================================
   POSITION LINK BETWEEN TWO JOINTS
========================================================= */

function placeBetween(

  object,

  start,

  end,

  thicknessScale = 1

) {

  const direction =
    end
      .clone()
      .sub(
        start
      );


  const length =
    direction.length();


  const midpoint =
    start
      .clone()
      .add(
        end
      )
      .multiplyScalar(
        0.5
      );


  object.position.copy(
    midpoint
  );


  object.quaternion
    .setFromUnitVectors(

      new THREE.Vector3(
        0,
        1,
        0
      ),

      direction
        .clone()
        .normalize()

    );


  object.scale.set(

    thicknessScale,

    length,

    thicknessScale

  );

}


/* =========================================================
   UPDATE ARM MESHES
========================================================= */

function updateArmVisual() {

  const points =
    getArmWorldPoints();


  for (

    let i = 0;

    i <
    ARM.lengths.length;

    i +=
    1

  ) {

    placeBetween(

      armVisual
        .linkMeshes[
          i
        ],

      points[
        i
      ],

      points[
        i +
        1
      ]

    );


    armVisual
      .jointGroups[
        i
      ]
      .position
      .copy(

        points[
          i
        ]

      );


    armVisual
      .jointGroups[
        i
      ]
      .rotation
      .y =
      -armState.yaw;

  }


  const end =
    points[
      points.length -
      1
    ];


  armVisual
    .wrist
    .position
    .copy(
      end
    );


  /*
    Keep wrist/gripper predictable,
    rather than letting it freely spin.
  */

  armVisual
    .wrist
    .rotation
    .set(

      0,

      -armState.yaw +
      Math.PI /
      2,

      0

    );


  armVisual
    .fingerL
    .position
    .x =
    -armState.grip;


  armVisual
    .fingerR
    .position
    .x =
    armState.grip;

}


/* =========================================================
   ARM MOTION
========================================================= */

function moveArmTo(

  target,

  duration = 440

) {

  const solved =
    solveArmTarget(
      target
    );


  if (
    state.reducedMotion
  ) {

    armState.yaw =
      solved.yaw;


    armState.angles = [

      ...solved.angles

    ];


    updateArmVisual();


    return Promise.resolve();

  }


  state.armTween = {

    start:
      performance.now(),

    duration,

    fromYaw:
      armState.yaw,

    toYaw:
      solved.yaw,

    fromAngles: [

      ...armState.angles

    ],

    toAngles: [

      ...solved.angles

    ]

  };


  return wait(
    duration
  );

}


function moveArmPose(

  yaw,

  angles,

  duration = 300

) {

  const targetYaw =
    nearestAngle(

      armState.yaw,

      yaw

    );


  if (
    state.reducedMotion
  ) {

    armState.yaw =
      targetYaw;


    armState.angles = [

      ...angles

    ];


    updateArmVisual();


    return Promise.resolve();

  }


  state.armTween = {

    start:
      performance.now(),

    duration,

    fromYaw:
      armState.yaw,

    toYaw:
      targetYaw,

    fromAngles: [

      ...armState.angles

    ],

    toAngles: [

      ...angles

    ]

  };


  return wait(
    duration
  );

}


function setGrip(

  amount,

  duration = 110

) {

  if (
    state.reducedMotion
  ) {

    armState.grip =
      amount;


    return Promise.resolve();

  }


  state.gripTween = {

    start:
      performance.now(),

    duration,

    from:
      armState.grip,

    to:
      amount

  };


  return wait(
    duration
  );

}


function wait(

  milliseconds

) {

  return new Promise(

    resolve => {

      setTimeout(

        resolve,

        state.reducedMotion
          ? 0
          : milliseconds

      );

    }

  );

}


function easeOutCubic(

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


/* =========================================================
   INFORMATION CARD
========================================================= */

const CARD = {

  width:
    3.72,

  height:
    4.72,

  /*
    The handle is deliberately at the
    TOP-RIGHT of the page.

    That causes the page itself to hang
    mostly LEFT of the arm.
  */

  handleX:
    1.43,

  handleY:
    2.52,

  stationPosition:
    new THREE.Vector3(

      -1.12,

      2.37,

      -1.68

    ),

  stationRotation:
    new THREE.Euler(

      -0.12,

      0.33,

      -0.018

    ),

  presentSocket:
    new THREE.Vector3(

      1.10,

      4.72,

      2.15

    ),

  presentOvershoot:
    new THREE.Vector3(

      0.96,

      4.78,

      2.46

    )

};


/* =========================================================
   CREATE INFO CARD
========================================================= */

function createInfoCard(

  section,

  item,

  index

) {

  const group =
    new THREE.Group();


  const frame =
    roundedBox(

      CARD.width +
      0.08,

      CARD.height +
      0.08,

      0.10,

      0.065,

      0xe8edf3,

      0.46,

      0.08

    );


  group.add(
    frame
  );


  const canvas =
    drawCardCanvas(

      section,

      item,

      index

    );


  const texture =
    new THREE.CanvasTexture(
      canvas
    );


  texture.colorSpace =
    THREE.SRGBColorSpace;


  texture.anisotropy =
    Math.min(

      renderer
        .capabilities
        .getMaxAnisotropy(),

      8

    );


  const page =
    new THREE.Mesh(

      new THREE.PlaneGeometry(

        CARD.width -
        0.10,

        CARD.height -
        0.10

      ),

      new THREE.MeshBasicMaterial({

        map:
          texture,

        toneMapped:
          false

      })

    );


  page.position.z =
    0.058;


  group.add(
    page
  );


  /*
    Visible handle for the robot.
  */

  const handle =
    roundedBox(

      0.58,

      0.30,

      0.14,

      0.055,

      0xcad6e1,

      0.38,

      0.24

    );


  handle.position.set(

    CARD.handleX,

    CARD.handleY,

    0

  );


  group.add(
    handle
  );


  const handleAnchor =
    new THREE.Object3D();


  handleAnchor.position.copy(
    handle.position
  );


  group.add(
    handleAnchor
  );


  group.userData.texture =
    texture;


  group.userData.handleAnchor =
    handleAnchor;


  group.userData.item =
    item;


  group.userData.section =
    section;


  return group;

}


/* =========================================================
   DRAW INFORMATION PAGE
========================================================= */

function drawCardCanvas(

  section,

  item,

  index

) {

  const canvas =
    document.createElement(
      'canvas'
    );


  canvas.width =
    1400;


  canvas.height =
    1760;


  const ctx =
    canvas.getContext(
      '2d'
    );


  ctx.fillStyle =
    '#f8fafc';


  ctx.fillRect(

    0,

    0,

    canvas.width,

    canvas.height

  );


  /*
    Simplify-like clean accent.
  */

  ctx.fillStyle =
    '#6d9ee8';


  ctx.fillRect(

    82,

    78,

    154,

    9

  );


  ctx.fillStyle =
    '#6487b9';


  ctx.font =
    '700 29px Arial, sans-serif';


  ctx.fillText(

    `${section.toUpperCase()}  ·  ${item.label.toUpperCase()}`,

    82,

    137

  );


  ctx.fillStyle =
    '#111827';


  ctx.font =
    '750 83px Arial, sans-serif';


  const titleBottom =
    wrapText(

      ctx,

      item.title,

      82,

      242,

      1228,

      90,

      3

    );


  ctx.fillStyle =
    '#667085';


  ctx.font =
    '600 29px Arial, sans-serif';


  const metaBottom =
    wrapText(

      ctx,

      item.meta,

      82,

      titleBottom +
      52,

      1220,

      42,

      2

    );


  let tagX =
    82;


  let tagY =
    metaBottom +
    55;


  ctx.font =
    '600 25px Arial, sans-serif';


  item.tags
    .forEach(

      tag => {

        const width =
          ctx
            .measureText(
              tag
            )
            .width +
          44;


        if (

          tagX +
          width >
          1316

        ) {

          tagX =
            82;


          tagY +=
            58;

        }


        roundedRect2D(

          ctx,

          tagX,

          tagY -
          31,

          width,

          43,

          13

        );


        ctx.fillStyle =
          '#eaf1fb';


        ctx.fill();


        ctx.fillStyle =
          '#5478aa';


        ctx.fillText(

          tag,

          tagX +
          22,

          tagY

        );


        tagX +=
          width +
          12;

      }

    );


  const descY =
    tagY +
    72;


  ctx.fillStyle =
    '#344054';


  ctx.font =
    '500 35px Arial, sans-serif';


  const descBottom =
    wrapText(

      ctx,

      item.description,

      82,

      descY,

      1220,

      53,

      6

    );


  const metricsTop =
    descBottom +
    58;


  const metricGap =
    20;


  const metricWidth =
    (
      1236 -
      metricGap *
      2
    ) /
    3;


  item.metrics
    .forEach(

      (
        [
          value,
          label
        ],
        metricIndex
      ) => {

        const x =
          82 +
          metricIndex *
          (
            metricWidth +
            metricGap
          );


        roundedRect2D(

          ctx,

          x,

          metricsTop,

          metricWidth,

          188,

          25

        );


        ctx.fillStyle =
          '#eef3f8';


        ctx.fill();


        ctx.fillStyle =
          '#4e7fbd';


        ctx.font =
          '750 50px Arial, sans-serif';


        wrapText(

          ctx,

          value,

          x +
          28,

          metricsTop +
          62,

          metricWidth -
          56,

          56,

          2

        );


        ctx.fillStyle =
          '#667085';


        ctx.font =
          '600 23px Arial, sans-serif';


        wrapText(

          ctx,

          label,

          x +
          28,

          metricsTop +
          124,

          metricWidth -
          56,

          31,

          2

        );

      }

    );


  const detailsTop =
    metricsTop +
    252;


  ctx.fillStyle =
    '#667085';


  ctx.font =
    '700 25px Arial, sans-serif';


  ctx.fillText(

    'KEY CONTRIBUTIONS',

    82,

    detailsTop

  );


  let bulletY =
    detailsTop +
    62;


  ctx.font =
    '500 30px Arial, sans-serif';


  item.details
    .forEach(

      detail => {

        ctx.fillStyle =
          '#6d9ee8';


        ctx.beginPath();


        ctx.arc(

          94,

          bulletY -
          11,

          5,

          0,

          Math.PI *
          2

        );


        ctx.fill();


        ctx.fillStyle =
          '#475467';


        bulletY =
          wrapText(

            ctx,

            detail,

            121,

            bulletY,

            1160,

            42,

            3

          ) +
          24;

      }

    );


  ctx.strokeStyle =
    '#e4e7ec';


  ctx.lineWidth =
    2;


  ctx.beginPath();


  ctx.moveTo(

    82,

    1642

  );


  ctx.lineTo(

    1318,

    1642

  );


  ctx.stroke();


  ctx.fillStyle =
    '#98a2b3';


  ctx.font =
    '600 23px Arial, sans-serif';


  ctx.fillText(

    'Warren Zhang · Interactive Portfolio',

    82,

    1692

  );


  ctx.textAlign =
    'right';


  ctx.fillText(

    `${String(index + 1).padStart(2, '0')} / ${String(CONTENT[section].length).padStart(2, '0')}`,

    1318,

    1692

  );


  ctx.textAlign =
    'left';


  return canvas;

}


/* =========================================================
   CANVAS HELPERS
========================================================= */

function roundedRect2D(

  ctx,

  x,

  y,

  width,

  height,

  radius

) {

  const r =
    Math.min(

      radius,

      width /
      2,

      height /
      2

    );


  ctx.beginPath();


  ctx.moveTo(

    x +
    r,

    y

  );


  ctx.arcTo(

    x +
    width,

    y,

    x +
    width,

    y +
    height,

    r

  );


  ctx.arcTo(

    x +
    width,

    y +
    height,

    x,

    y +
    height,

    r

  );


  ctx.arcTo(

    x,

    y +
    height,

    x,

    y,

    r

  );


  ctx.arcTo(

    x,

    y,

    x +
    width,

    y,

    r

  );


  ctx.closePath();

}


function wrapText(

  ctx,

  text,

  x,

  y,

  maxWidth,

  lineHeight,

  maxLines = Infinity

) {

  const words =
    String(
      text
    )
      .split(
        /\s+/
      );


  let line =
    '';


  let lineCount =
    0;


  let cursorY =
    y;


  for (

    let i = 0;

    i <
    words.length;

    i +=
    1

  ) {

    const test =
      line
        ? `${line} ${words[i]}`
        : words[i];


    if (

      ctx
        .measureText(
          test
        )
        .width >
        maxWidth &&

      line

    ) {

      ctx.fillText(

        line,

        x,

        cursorY

      );


      line =
        words[
          i
        ];


      lineCount +=
        1;


      cursorY +=
        lineHeight;


      if (

        lineCount >=
        maxLines -
        1

      ) {

        const remaining = [

          line,

          ...words.slice(
            i +
            1
          )

        ].join(
          ' '
        );


        let clipped =
          remaining;


        while (

          ctx
            .measureText(
              `${clipped}…`
            )
            .width >
            maxWidth &&

          clipped.length >
          0

        ) {

          clipped =
            clipped.slice(
              0,
              -1
            );

        }


        ctx.fillText(

          `${clipped}…`,

          x,

          cursorY

        );


        return cursorY;

      }

    }

    else {

      line =
        test;

    }

  }


  if (
    line
  ) {

    ctx.fillText(

      line,

      x,

      cursorY

    );

  }


  return cursorY;

}


/* =========================================================
   TOPIC STATION
========================================================= */

const STATION_MODEL_POS =
  new THREE.Vector3(

    -1.45,

    0,

    -0.70

  );


function createStation(

  section,

  item,

  index

) {

  const root =
    new THREE.Group();


  const model =
    createTopicModel(
      item.model
    );


  model.position.copy(
    STATION_MODEL_POS
  );


  root.add(
    model
  );


  const base =
    roundedBox(

      3.65,

      0.16,

      2.45,

      0.10,

      0x18212b,

      0.83,

      0.08

    );


  base.position.set(

    -1.18,

    0.08,

    -1.15

  );


  root.add(
    base
  );


  /*
    The page starts physically leaning
    behind / against its relevant model.
  */

  const card =
    createInfoCard(

      section,

      item,

      index

    );


  card.position.copy(
    CARD.stationPosition
  );


  card.rotation.copy(
    CARD.stationRotation
  );


  root.add(
    card
  );


  scene.add(
    root
  );


  root.updateMatrixWorld(
    true
  );


  const handleWorld =
    new THREE.Vector3();


  card.userData
    .handleAnchor
    .getWorldPosition(
      handleWorld
    );


  return {

    root,

    model,

    card,

    handleWorld,

    cardPose: {

      position:
        card.position
          .clone(),

      quaternion:
        card.quaternion
          .clone()

    }

  };

}


/* =========================================================
   TOPIC MODEL FACTORY
========================================================= */

function createTopicModel(

  kind

) {

  switch (
    kind
  ) {

    case 'home':
      return createHomeStationModel();

    case 'about':
      return createAboutStationModel();

    case 'wildfire':
      return createWildfireStationModel();

    case 'kc15':
      return createKC15StationModel();

    case 'vision':
      return createVisionRobot();

    case 'analog':
      return createAnalogStationModel();

    case 'eim':
      return createEIMStationModel();

    case 'vex':
      return createVexRobot();

    case 'coaching':
      return createBadmintonStationModel();

    case 'orchestra':
      return createOrchestraStationModel();

    case 'blender':
      return createBlenderStationModel();

    case 'hardware':
      return createHardwareStationModel();

    case 'music':
      return createMusicStationModel();

    case 'contact':
      return createContactStationModel();

    default:
      return createHomeStationModel();

  }

}


/* =========================================================
   HOME MODEL
========================================================= */

function createHomeStationModel() {

  const group =
    new THREE.Group();


  const robot =
    createVisionRobot();


  robot.scale.setScalar(
    0.62
  );


  robot.position.set(

    -0.40,

    0,

    0.05

  );


  group.add(
    robot
  );


  const board =
    createDevBoard();


  board.scale.setScalar(
    0.58
  );


  board.position.set(

    0.82,

    0.15,

    0.28

  );


  board.rotation.y =
    -0.35;


  group.add(
    board
  );


  const smallScreen =
    createMiniScreen();


  smallScreen.scale.setScalar(
    0.55
  );


  smallScreen.position.set(

    0.68,

    0.2,

    -0.55

  );


  group.add(
    smallScreen
  );


  return group;

}


/* =========================================================
   ABOUT MODEL
========================================================= */

function createAboutStationModel() {

  const group =
    new THREE.Group();


  const laptop =
    createLaptopModel();


  laptop.scale.setScalar(
    0.72
  );


  laptop.position.set(

    -0.55,

    0.12,

    0.1

  );


  group.add(
    laptop
  );


  const books =
    createBooksModel();


  books.scale.setScalar(
    0.66
  );


  books.position.set(

    0.62,

    0,

    -0.05

  );


  group.add(
    books
  );


  const bust =
    createBustModel();


  bust.scale.setScalar(
    0.48
  );


  bust.position.set(

    0.55,

    0.15,

    0.65

  );


  group.add(
    bust
  );


  return group;

}


/* =========================================================
   WILDFIRE MODEL
========================================================= */

function createWildfireStationModel() {

  const group =
    new THREE.Group();


  const sensor =
    roundedBox(

      1.10,

      0.82,

      0.88,

      0.13,

      0x354652,

      0.62,

      0.14

    );


  sensor.position.set(

    -0.20,

    0.48,

    0.1

  );


  group.add(
    sensor
  );


  const top =
    roundedBox(

      1.16,

      0.10,

      0.94,

      0.06,

      0x506675,

      0.52,

      0.22

    );


  top.position.set(

    -0.20,

    0.93,

    0.1

  );


  group.add(
    top
  );


  const grille =
    roundedBox(

      0.36,

      0.24,

      0.03,

      0.03,

      0x151b20,

      0.74,

      0.06

    );


  grille.position.set(

    -0.46,

    0.53,

    0.55

  );


  group.add(
    grille
  );


  const screen =
    roundedBox(

      0.32,

      0.18,

      0.03,

      0.03,

      0x6a9fb8,

      0.22,

      0.14

    );


  screen.position.set(

    0.12,

    0.55,

    0.56

  );


  screen.material
    .emissive
    .set(
      0x1b3c4b
    );


  screen.material
    .emissiveIntensity =
    0.7;


  group.add(
    screen
  );


  const antennaBase =
    mesh(

      new THREE.CylinderGeometry(

        0.08,

        0.10,

        0.16,

        18

      ),

      0x171c20,

      0.38,

      0.52

    );


  antennaBase.position.set(

    0.23,

    1.06,

    -0.12

  );


  group.add(
    antennaBase
  );


  const antenna =
    mesh(

      new THREE.CylinderGeometry(

        0.025,

        0.035,

        1.35,

        14

      ),

      0x12171b,

      0.48,

      0.44

    );


  antenna.position.set(

    0.23,

    1.78,

    -0.12

  );


  group.add(
    antenna
  );


  const gateway =
    roundedBox(

      0.68,

      0.18,

      0.54,

      0.06,

      0x6b7680,

      0.42,

      0.52

    );


  gateway.position.set(

    0.62,

    0.17,

    -0.34

  );


  gateway.rotation.y =
    -0.30;


  group.add(
    gateway
  );


  const tree =
    createLowPolyTree();


  tree.scale.setScalar(
    0.55
  );


  tree.position.set(

    -0.85,

    0,

    -0.48

  );


  group.add(
    tree
  );


  return group;

}


/* =========================================================
   KC15 MODEL
========================================================= */

function createKC15StationModel() {

  const group =
    new THREE.Group();


  const board =
    createDevBoard();


  board.scale.setScalar(
    0.88
  );


  board.position.set(

    -0.15,

    0.16,

    0.15

  );


  board.rotation.y =
    0.18;


  group.add(
    board
  );


  const display =
    createMiniScreen();


  display.scale.setScalar(
    0.68
  );


  display.position.set(

    0.72,

    0.23,

    -0.20

  );


  display.rotation.y =
    -0.28;


  group.add(
    display
  );


  const controller =
    roundedBox(

      0.64,

      0.18,

      0.42,

      0.07,

      0x2c3740,

      0.44,

      0.42

    );


  controller.position.set(

    -0.76,

    0.17,

    -0.20

  );


  group.add(
    controller
  );


  return group;

}


/* =========================================================
   VISION ROBOT
========================================================= */

function createVisionRobot() {

  const group =
    new THREE.Group();


  const chassis =
    roundedBox(

      1.45,

      0.38,

      0.96,

      0.11,

      0x3f4b56,

      0.43,

      0.55

    );


  chassis.position.y =
    0.48;


  group.add(
    chassis
  );


  for (

    const [
      x,
      z
    ]
    of [

      [
        -0.60,
        -0.46
      ],

      [
        0.60,
        -0.46
      ],

      [
        -0.60,
        0.46
      ],

      [
        0.60,
        0.46
      ]

    ]

  ) {

    const wheel =
      mesh(

        new THREE.CylinderGeometry(

          0.25,

          0.25,

          0.20,

          24

        ),

        0x161b20,

        0.78,

        0.08

      );


    wheel.rotation.z =
      Math.PI /
      2;


    wheel.position.set(

      x,

      0.31,

      z

    );


    group.add(
      wheel
    );


    const hub =
      mesh(

        new THREE.CylinderGeometry(

          0.09,

          0.09,

          0.23,

          18

        ),

        0x91a0ac,

        0.24,

        0.74

      );


    hub.rotation.z =
      Math.PI /
      2;


    hub.position.set(

      x,

      0.31,

      z

    );


    group.add(
      hub
    );

  }


  const mast =
    roundedBox(

      0.20,

      1.02,

      0.20,

      0.05,

      0x6b92b3,

      0.38,

      0.28

    );


  mast.position.y =
    1.14;


  group.add(
    mast
  );


  const cameraBox =
    roundedBox(

      0.68,

      0.42,

      0.44,

      0.08,

      0x212932,

      0.34,

      0.56

    );


  cameraBox.position.y =
    1.72;


  group.add(
    cameraBox
  );


  const lens =
    mesh(

      new THREE.CylinderGeometry(

        0.15,

        0.15,

        0.14,

        20

      ),

      0x78a8ca,

      0.18,

      0.70

    );


  lens.rotation.x =
    Math.PI /
    2;


  lens.position.set(

    0,

    1.72,

    0.28

  );


  group.add(
    lens
  );


  return group;

}


/* =========================================================
   ANALOG MODEL
========================================================= */

function createAnalogStationModel() {

  const group =
    new THREE.Group();


  const board =
    roundedBox(

      1.55,

      0.10,

      1.02,

      0.05,

      0x45555f,

      0.68,

      0.08

    );


  board.position.y =
    0.18;


  group.add(
    board
  );


  const opAmp =
    roundedBox(

      0.52,

      0.14,

      0.38,

      0.03,

      0x11161b,

      0.60,

      0.10

    );


  opAmp.position.set(

    -0.30,

    0.31,

    0.02

  );


  group.add(
    opAmp
  );


  for (

    let i = 0;

    i < 4;

    i += 1

  ) {

    const resistor =
      roundedBox(

        0.34,

        0.06,

        0.08,

        0.02,

        0xb39b69,

        0.62,

        0.10

      );


    resistor.position.set(

      0.20 +
      (
        i %
        2
      ) *
      0.42,

      0.31,

      -0.20 +
      Math.floor(
        i /
        2
      ) *
      0.30

    );


    group.add(
      resistor
    );

  }


  for (

    const x of [

      0.30,

      0.62

    ]

  ) {

    const capacitor =
      mesh(

        new THREE.CylinderGeometry(

          0.07,

          0.07,

          0.24,

          14

        ),

        0x8194a2,

        0.34,

        0.44

      );


    capacitor.position.set(

      x,

      0.36,

      0.28

    );


    group.add(
      capacitor
    );

  }


  return group;

}


/* =========================================================
   EIM MODEL
========================================================= */

function createEIMStationModel() {

  const group =
    new THREE.Group();


  const board =
    createDevBoard();


  board.scale.setScalar(
    0.78
  );


  board.position.set(

    -0.35,

    0.16,

    0.15

  );


  group.add(
    board
  );


  const scope =
    createScopeModel();


  scope.scale.setScalar(
    0.52
  );


  scope.position.set(

    0.75,

    0,

    -0.05

  );


  group.add(
    scope
  );


  const antenna =
    mesh(

      new THREE.CylinderGeometry(

        0.025,

        0.035,

        1.15,

        12

      ),

      0x14191e,

      0.46,

      0.44

    );


  antenna.position.set(

    -0.90,

    0.75,

    -0.32

  );


  group.add(
    antenna
  );


  return group;

}


/* =========================================================
   VEX V5 ROBOT
========================================================= */

function createVexRobot() {

  const group =
    new THREE.Group();


  const chassis =
    roundedBox(

      1.55,

      0.30,

      1.00,

      0.07,

      0x3d4751,

      0.40,

      0.56

    );


  chassis.position.y =
    0.44;


  group.add(
    chassis
  );


  for (

    const [
      x,
      z
    ]
    of [

      [
        -0.62,
        -0.44
      ],

      [
        0.62,
        -0.44
      ],

      [
        -0.62,
        0.44
      ],

      [
        0.62,
        0.44
      ]

    ]

  ) {

    const wheel =
      mesh(

        new THREE.CylinderGeometry(

          0.29,

          0.29,

          0.22,

          26

        ),

        0x171c21,

        0.75,

        0.10

      );


    wheel.rotation.z =
      Math.PI /
      2;


    wheel.position.set(

      x,

      0.30,

      z

    );


    group.add(
      wheel
    );


    /*
      Omni/mecanum-style roller detail.
    */

    for (

      let rib = 0;

      rib < 7;

      rib += 1

    ) {

      const roller =
        mesh(

          new THREE.CylinderGeometry(

            0.025,

            0.025,

            0.30,

            8

          ),

          0x566674,

          0.50,

          0.26

        );


      roller.rotation.z =
        Math.PI /
        2;


      roller.rotation.y =
        rib *
        (
          Math.PI /
          3.5
        );


      roller.position.set(

        x,

        0.30,

        z

      );


      group.add(
        roller
      );

    }

  }


  const towerL =
    roundedBox(

      0.16,

      1.28,

      0.16,

      0.03,

      0x8795a2,

      0.34,

      0.70

    );


  towerL.position.set(

    -0.42,

    1.02,

    0

  );


  towerL.rotation.z =
    -0.13;


  group.add(
    towerL
  );


  const towerR =
    towerL.clone();


  towerR.position.x =
    0.42;


  towerR.rotation.z =
    0.13;


  group.add(
    towerR
  );


  const topBeam =
    roundedBox(

      1.15,

      0.14,

      0.18,

      0.03,

      0x8795a2,

      0.34,

      0.70

    );


  topBeam.position.set(

    0,

    1.64,

    0.06

  );


  group.add(
    topBeam
  );


  const clawLeft =
    roundedBox(

      0.12,

      0.58,

      0.12,

      0.03,

      0x6e8ba2,

      0.36,

      0.58

    );


  clawLeft.position.set(

    -0.34,

    1.88,

    0.32

  );


  clawLeft.rotation.z =
    -0.34;


  group.add(
    clawLeft
  );


  const clawRight =
    clawLeft.clone();


  clawRight.position.x =
    0.34;


  clawRight.rotation.z =
    0.34;


  group.add(
    clawRight
  );


  return group;

}


/* =========================================================
   BADMINTON MODEL
========================================================= */

function createBadmintonStationModel() {

  const group =
    new THREE.Group();


  const stand =
    roundedBox(

      0.72,

      0.12,

      0.58,

      0.05,

      0x232d36,

      0.72,

      0.14

    );


  stand.position.y =
    0.06;


  group.add(
    stand
  );


  const racket =
    createDetailedRacket();


  racket.scale.setScalar(
    0.86
  );


  racket.position.set(

    -0.15,

    0.08,

    0.0

  );


  racket.rotation.z =
    -0.18;


  group.add(
    racket
  );


  const shuttle =
    createShuttlecock();


  shuttle.scale.setScalar(
    0.78
  );


  shuttle.position.set(

    0.62,

    0.16,

    0.36

  );


  shuttle.rotation.z =
    0.48;


  group.add(
    shuttle
  );


  const secondShuttle =
    createShuttlecock();


  secondShuttle.scale.setScalar(
    0.58
  );


  secondShuttle.position.set(

    0.55,

    0.11,

    -0.26

  );


  secondShuttle.rotation.z =
    -0.34;


  group.add(
    secondShuttle
  );


  return group;

}


/* =========================================================
   ORCHESTRA MODEL
========================================================= */

function createOrchestraStationModel() {

  const group =
    new THREE.Group();


  const standBase =
    mesh(

      new THREE.CylinderGeometry(

        0.34,

        0.38,

        0.10,

        26

      ),

      0x171d22,

      0.62,

      0.22

    );


  standBase.position.y =
    0.05;


  group.add(
    standBase
  );


  const trombone =
    createDetailedTrombone();


  trombone.scale.setScalar(
    0.66
  );


  trombone.position.set(

    -0.10,

    0.32,

    0.0

  );


  trombone.rotation.z =
    -0.07;


  group.add(
    trombone
  );


  const musicStand =
    createMusicStand();


  musicStand.scale.setScalar(
    0.70
  );


  musicStand.position.set(

    0.72,

    0.0,

    -0.34

  );


  group.add(
    musicStand
  );


  return group;

}


/* =========================================================
   BLENDER MODEL
========================================================= */

function createBlenderStationModel() {

  const group =
    new THREE.Group();


  const monkey =
    createMonkeyModel();


  monkey.scale.setScalar(
    0.82
  );


  monkey.position.set(

    -0.22,

    0.05,

    0.10

  );


  group.add(
    monkey
  );


  for (

    let i = 0;

    i < 4;

    i += 1

  ) {

    const cube =
      roundedBox(

        0.36,

        0.36,

        0.36,

        0.055,

        [
          0x66798a,
          0x6d7d6c,
          0x776d82,
          0x88765d
        ][
          i
        ],

        0.52,

        0.16

      );


    cube.position.set(

      0.52 +
      (
        i %
        2
      ) *
      0.38,

      0.18 +
      Math.floor(
        i /
        2
      ) *
      0.40,

      -0.16 +
      (
        i %
        2
      ) *
      0.22

    );


    cube.rotation.set(

      i *
      0.13,

      i *
      0.21,

      i *
      0.08

    );


    group.add(
      cube
    );

  }


  return group;

}


/* =========================================================
   HARDWARE MODEL
========================================================= */

function createHardwareStationModel() {

  const group =
    new THREE.Group();


  const scope =
    createScopeModel();


  scope.scale.setScalar(
    0.74
  );


  scope.position.set(

    -0.25,

    0,

    0.0

  );


  group.add(
    scope
  );


  const board =
    createDevBoard();


  board.scale.setScalar(
    0.52
  );


  board.position.set(

    0.72,

    0.12,

    0.28

  );


  board.rotation.y =
    -0.25;


  group.add(
    board
  );


  const probeCable =
    new THREE.Line(

      new THREE.BufferGeometry()
        .setFromPoints([

          new THREE.Vector3(
            0.30,
            0.48,
            0.34
          ),

          new THREE.Vector3(
            0.52,
            0.33,
            0.26
          ),

          new THREE.Vector3(
            0.78,
            0.22,
            0.16
          )

        ]),

      new THREE.LineBasicMaterial({

        color:
          0x6d8ca5

      })

    );


  group.add(
    probeCable
  );


  return group;

}


/* =========================================================
   MUSIC MODEL
========================================================= */

function createMusicStationModel() {

  const group =
    new THREE.Group();


  const trombone =
    createDetailedTrombone();


  trombone.scale.setScalar(
    0.62
  );


  trombone.position.set(

    -0.30,

    0.32,

    0.0

  );


  group.add(
    trombone
  );


  const mixer =
    roundedBox(

      0.84,

      0.18,

      0.56,

      0.06,

      0x303a43,

      0.48,

      0.44

    );


  mixer.position.set(

    0.65,

    0.18,

    0.12

  );


  group.add(
    mixer
  );


  for (

    let i = 0;

    i < 5;

    i += 1

  ) {

    const knob =
      mesh(

        new THREE.CylinderGeometry(

          0.035,

          0.035,

          0.045,

          12

        ),

        0x8a9aa6,

        0.35,

        0.58

      );


    knob.position.set(

      0.40 +
      i *
      0.12,

      0.30,

      0.14

    );


    group.add(
      knob
    );

  }


  return group;

}


/* =========================================================
   CONTACT MODEL
========================================================= */

function createContactStationModel() {

  const group =
    new THREE.Group();


  const laptop =
    createLaptopModel();


  laptop.scale.setScalar(
    0.62
  );


  laptop.position.set(

    -0.40,

    0.10,

    -0.02

  );


  group.add(
    laptop
  );


  const envelope =
    roundedBox(

      0.84,

      0.06,

      0.56,

      0.05,

      0xe7ebee,

      0.82,

      0.02

    );


  envelope.position.set(

    0.62,

    0.15,

    0.28

  );


  envelope.rotation.y =
    -0.28;


  group.add(
    envelope
  );


  const phone =
    roundedBox(

      0.34,

      0.07,

      0.68,

      0.08,

      0x232a31,

      0.34,

      0.64

    );


  phone.position.set(

    0.70,

    0.13,

    -0.32

  );


  phone.rotation.y =
    0.24;


  group.add(
    phone
  );


  return group;

}


/* =========================================================
   DEV BOARD
========================================================= */

function createDevBoard() {

  const group =
    new THREE.Group();


  const board =
    roundedBox(

      1.48,

      0.09,

      0.78,

      0.045,

      0x2f6a55,

      0.68,

      0.10

    );


  board.position.y =
    0.16;


  group.add(
    board
  );


  const chip =
    roundedBox(

      0.42,

      0.10,

      0.42,

      0.025,

      0x10151a,

      0.62,

      0.08

    );


  chip.position.set(

    0.08,

    0.26,

    0.0

  );


  group.add(
    chip
  );


  const usb =
    roundedBox(

      0.32,

      0.18,

      0.38,

      0.04,

      0xabb3ba,

      0.26,

      0.78

    );


  usb.position.set(

    -0.56,

    0.27,

    0

  );


  group.add(
    usb
  );


  for (

    const z of [

      -0.32,

      0.32

    ]

  ) {

    for (

      let i = 0;

      i < 8;

      i += 1

    ) {

      const pin =
        mesh(

          new THREE.CylinderGeometry(

            0.016,

            0.016,

            0.20,

            8

          ),

          0xc3a159,

          0.20,

          0.82

        );


      pin.position.set(

        -0.48 +
        i *
        0.14,

        0.28,

        z

      );


      group.add(
        pin
      );

    }

  }


  return group;

}


/* =========================================================
   MINI SCREEN
========================================================= */

function createMiniScreen() {

  const group =
    new THREE.Group();


  const body =
    roundedBox(

      0.82,

      0.56,

      0.14,

      0.07,

      0x252e36,

      0.38,

      0.58

    );


  body.position.y =
    0.35;


  group.add(
    body
  );


  const screen =
    roundedBox(

      0.68,

      0.40,

      0.02,

      0.04,

      0x315a70,

      0.22,

      0.08

    );


  screen.position.set(

    0,

    0.36,

    0.082

  );


  screen.material
    .emissive
    .set(
      0x163845
    );


  screen.material
    .emissiveIntensity =
    0.68;


  group.add(
    screen
  );


  return group;

}


/* =========================================================
   LAPTOP
========================================================= */

function createLaptopModel() {

  const group =
    new THREE.Group();


  const base =
    roundedBox(

      1.38,

      0.08,

      0.88,

      0.045,

      0x7b848c,

      0.32,

      0.70

    );


  base.position.y =
    0.09;


  group.add(
    base
  );


  const screenGroup =
    new THREE.Group();


  screenGroup.position.set(

    0,

    0.15,

    -0.38

  );


  screenGroup.rotation.x =
    -0.22;


  group.add(
    screenGroup
  );


  const frame =
    roundedBox(

      1.30,

      0.78,

      0.06,

      0.055,

      0x30373d,

      0.34,

      0.60

    );


  frame.position.y =
    0.40;


  screenGroup.add(
    frame
  );


  const screen =
    roundedBox(

      1.14,

      0.64,

      0.015,

      0.035,

      0x2b5369,

      0.22,

      0.08

    );


  screen.position.set(

    0,

    0.40,

    0.042

  );


  screen.material
    .emissive
    .set(
      0x173441
    );


  screen.material
    .emissiveIntensity =
    0.65;


  screenGroup.add(
    screen
  );


  return group;

}


/* =========================================================
   BOOKS
========================================================= */

function createBooksModel() {

  const group =
    new THREE.Group();


  [

    [
      1.05,
      0.18,
      0.63,
      0x526e84
    ],

    [
      0.92,
      0.17,
      0.60,
      0x76615b
    ],

    [
      1.00,
      0.18,
      0.62,
      0x5b705d
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
          roundedBox(

            width,

            height,

            depth,

            0.045,

            color,

            0.76,

            0.02

          );


        book.position.y =
          0.09 +
          index *
          0.18;


        book.rotation.y =
          (
            index -
            1
          ) *
          0.05;


        group.add(
          book
        );

      }

    );


  return group;

}


/* =========================================================
   BUST
========================================================= */

function createBustModel() {

  const group =
    new THREE.Group();


  const torso =
    roundedBox(

      0.88,

      0.58,

      0.48,

      0.16,

      0x566d80,

      0.70,

      0.06

    );


  torso.position.y =
    0.30;


  group.add(
    torso
  );


  const neck =
    mesh(

      new THREE.CylinderGeometry(

        0.13,

        0.15,

        0.24,

        16

      ),

      0xc4a58d,

      0.84,

      0.02

    );


  neck.position.y =
    0.70;


  group.add(
    neck
  );


  const head =
    mesh(

      new THREE.IcosahedronGeometry(

        0.33,

        3

      ),

      0xc9aa91,

      0.85,

      0.02

    );


  head.scale.set(

    0.90,

    1.08,

    0.86

  );


  head.position.y =
    0.99;


  group.add(
    head
  );


  const hair =
    mesh(

      new THREE.IcosahedronGeometry(

        0.34,

        2

      ),

      0x25292d,

      0.86,

      0.02

    );


  hair.scale.set(

    0.92,

    0.50,

    0.88

  );


  hair.position.set(

    0,

    1.18,

    -0.02

  );


  group.add(
    hair
  );


  return group;

}


/* =========================================================
   OSCILLOSCOPE
========================================================= */

function createScopeModel() {

  const group =
    new THREE.Group();


  const body =
    roundedBox(

      1.30,

      0.82,

      0.86,

      0.09,

      0x394650,

      0.56,

      0.24

    );


  body.position.y =
    0.42;


  group.add(
    body
  );


  const screen =
    roundedBox(

      0.72,

      0.42,

      0.02,

      0.035,

      0x376373,

      0.22,

      0.08

    );


  screen.position.set(

    -0.18,

    0.50,

    0.44

  );


  screen.material
    .emissive
    .set(
      0x183943
    );


  screen.material
    .emissiveIntensity =
    0.72;


  group.add(
    screen
  );


  const trace =
    new THREE.Line(

      new THREE.BufferGeometry()
        .setFromPoints([

          new THREE.Vector3(
            -0.49,
            0.52,
            0.456
          ),

          new THREE.Vector3(
            -0.36,
            0.60,
            0.456
          ),

          new THREE.Vector3(
            -0.24,
            0.42,
            0.456
          ),

          new THREE.Vector3(
            -0.08,
            0.63,
            0.456
          ),

          new THREE.Vector3(
            0.14,
            0.49,
            0.456
          )

        ]),

      new THREE.LineBasicMaterial({

        color:
          0x9dd0d0

      })

    );


  group.add(
    trace
  );


  for (

    let i = 0;

    i < 3;

    i += 1

  ) {

    const knob =
      mesh(

        new THREE.CylinderGeometry(

          0.075,

          0.075,

          0.07,

          18

        ),

        0x9ba8b1,

        0.32,

        0.62

      );


    knob.rotation.x =
      Math.PI /
      2;


    knob.position.set(

      0.43,

      0.58 -
      i *
      0.20,

      0.46

    );


    group.add(
      knob
    );

  }


  return group;

}


/* =========================================================
   BADMINTON RACKET
========================================================= */

function createDetailedRacket() {

  const group =
    new THREE.Group();


  const frame =
    mesh(

      new THREE.TorusGeometry(

        0.52,

        0.040,

        14,

        60

      ),

      0xb4bec7,

      0.26,

      0.70

    );


  frame.scale.y =
    1.30;


  frame.position.y =
    1.35;


  group.add(
    frame
  );


  const stringMaterial =
    new THREE.LineBasicMaterial({

      color:
        0x91a0ab,

      transparent:
        true,

      opacity:
        0.78

    });


  for (

    let i = -4;

    i <= 4;

    i +=
    1

  ) {

    const x =
      i *
      0.10;


    const normalized =
      x /
      0.48;


    const height =
      Math.sqrt(

        Math.max(

          0,

          1 -
          normalized *
          normalized

        )

      ) *
      0.64;


    group.add(

      new THREE.Line(

        new THREE.BufferGeometry()
          .setFromPoints([

            new THREE.Vector3(

              x,

              1.35 -
              height,

              0

            ),

            new THREE.Vector3(

              x,

              1.35 +
              height,

              0

            )

          ]),

        stringMaterial.clone()

      )

    );

  }


  for (

    let i = -6;

    i <= 6;

    i +=
    1

  ) {

    const y =
      i *
      0.09;


    const normalized =
      y /
      0.62;


    const width =
      Math.sqrt(

        Math.max(

          0,

          1 -
          normalized *
          normalized

        )

      ) *
      0.48;


    group.add(

      new THREE.Line(

        new THREE.BufferGeometry()
          .setFromPoints([

            new THREE.Vector3(

              -width,

              1.35 +
              y,

              0

            ),

            new THREE.Vector3(

              width,

              1.35 +
              y,

              0

            )

          ]),

        stringMaterial.clone()

      )

    );

  }


  const shaft =
    mesh(

      new THREE.CylinderGeometry(

        0.022,

        0.028,

        0.88,

        12

      ),

      0xb5bec5,

      0.26,

      0.74

    );


  shaft.position.y =
    0.71;


  group.add(
    shaft
  );


  const handle =
    mesh(

      new THREE.CylinderGeometry(

        0.050,

        0.063,

        0.56,

        14

      ),

      0x20252a,

      0.78,

      0.05

    );


  handle.position.y =
    0.24;


  group.add(
    handle
  );


  for (

    let i = 0;

    i < 5;

    i +=
    1

  ) {

    const grip =
      mesh(

        new THREE.TorusGeometry(

          0.062,

          0.0065,

          8,

          18

        ),

        0x4c545a,

        0.70,

        0.08

      );


    grip.rotation.x =
      Math.PI /
      2;


    grip.position.y =
      0.04 +
      i *
      0.09;


    group.add(
      grip
    );

  }


  return group;

}


/* =========================================================
   SHUTTLECOCK
========================================================= */

function createShuttlecock() {

  const group =
    new THREE.Group();


  const cork =
    mesh(

      new THREE.SphereGeometry(

        0.13,

        16,

        10

      ),

      0xd8c09b,

      0.78,

      0.02

    );


  cork.scale.y =
    0.72;


  cork.position.y =
    0.13;


  group.add(
    cork
  );


  for (

    let i = 0;

    i < 10;

    i +=
    1

  ) {

    const feather =
      roundedBox(

        0.052,

        0.40,

        0.018,

        0.012,

        0xf0f2ef,

        0.86,

        0

      );


    const angle =
      (
        i /
        10
      ) *
      Math.PI *
      2;


    feather.position.set(

      Math.cos(
        angle
      ) *
      0.12,

      0.40,

      Math.sin(
        angle
      ) *
      0.12

    );


    feather.rotation.y =
      -angle;


    feather.rotation.z =
      Math.cos(
        angle
      ) *
      0.20;


    feather.rotation.x =
      Math.sin(
        angle
      ) *
      0.20;


    group.add(
      feather
    );

  }


  return group;

}


/* =========================================================
   TROMBONE
========================================================= */

function createDetailedTrombone() {

  const group =
    new THREE.Group();


  const brass =
    0xb08d4b;


  for (

    const y of [

      0.75,

      0.99

    ]

  ) {

    const tube =
      mesh(

        new THREE.CylinderGeometry(

          0.026,

          0.026,

          1.82,

          12

        ),

        brass,

        0.22,

        0.82

      );


    tube.rotation.z =
      Math.PI /
      2;


    tube.position.set(

      -0.02,

      y,

      0

    );


    group.add(
      tube
    );

  }


  for (

    const x of [

      -0.38,

      0.15

    ]

  ) {

    const brace =
      mesh(

        new THREE.CylinderGeometry(

          0.019,

          0.019,

          0.24,

          10

        ),

        0x846a39,

        0.24,

        0.76

      );


    brace.position.set(

      x,

      0.87,

      0

    );


    group.add(
      brace
    );

  }


  const bell =
    mesh(

      new THREE.ConeGeometry(

        0.35,

        0.61,

        34,

        1,

        true

      ),

      brass,

      0.20,

      0.84

    );


  bell.rotation.z =
    -Math.PI /
    2;


  bell.position.set(

    1.08,

    0.99,

    0

  );


  group.add(
    bell
  );


  const rim =
    mesh(

      new THREE.TorusGeometry(

        0.35,

        0.020,

        10,

        36

      ),

      0xc6a65c,

      0.18,

      0.86

    );


  rim.rotation.y =
    Math.PI /
    2;


  rim.position.set(

    1.38,

    0.99,

    0

  );


  group.add(
    rim
  );


  const bend =
    mesh(

      new THREE.TorusGeometry(

        0.12,

        0.026,

        10,

        28,

        Math.PI

      ),

      brass,

      0.21,

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

    -0.96,

    0.87,

    0

  );


  group.add(
    bend
  );


  const mouthpiece =
    mesh(

      new THREE.CylinderGeometry(

        0.042,

        0.058,

        0.30,

        14

      ),

      0xbfc6cb,

      0.18,

      0.90

    );


  mouthpiece.rotation.z =
    Math.PI /
    2;


  mouthpiece.position.set(

    -1.08,

    0.99,

    0

  );


  group.add(
    mouthpiece
  );


  return group;

}


/* =========================================================
   MUSIC STAND
========================================================= */

function createMusicStand() {

  const group =
    new THREE.Group();


  const pole =
    mesh(

      new THREE.CylinderGeometry(

        0.025,

        0.025,

        1.15,

        12

      ),

      0x1a2026,

      0.56,

      0.32

    );


  pole.position.y =
    0.58;


  group.add(
    pole
  );


  const tray =
    roundedBox(

      0.72,

      0.05,

      0.52,

      0.035,

      0x1b2229,

      0.58,

      0.32

    );


  tray.position.set(

    0,

    1.15,

    0

  );


  tray.rotation.x =
    -0.65;


  group.add(
    tray
  );


  for (

    let i = 0;

    i < 3;

    i +=
    1

  ) {

    const leg =
      mesh(

        new THREE.CylinderGeometry(

          0.018,

          0.018,

          0.55,

          10

        ),

        0x1a2026,

        0.56,

        0.32

      );


    leg.position.set(

      0,

      0.18,

      0

    );


    leg.rotation.z =
      0.72;


    leg.rotation.y =
      (
        i /
        3
      ) *
      Math.PI *
      2;


    group.add(
      leg
    );

  }


  return group;

}


/* =========================================================
   BLENDER MONKEY
========================================================= */

function createMonkeyModel() {

  const group =
    new THREE.Group();


  const brown =
    0x81766e;


  const light =
    0xa99a90;


  const head =
    mesh(

      new THREE.IcosahedronGeometry(

        0.47,

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
    0.84;


  group.add(
    head
  );


  for (

    const x of [

      -0.31,

      0.31

    ]

  ) {

    const cheek =
      mesh(

        new THREE.IcosahedronGeometry(

          0.23,

          1

        ),

        brown,

        0.73,

        0.04

      );


    cheek.scale.set(

      0.92,

      1.04,

      0.78

    );


    cheek.position.set(

      x,

      0.72,

      0.24

    );


    group.add(
      cheek
    );


    const ear =
      mesh(

        new THREE.IcosahedronGeometry(

          0.21,

          1

        ),

        brown,

        0.73,

        0.04

      );


    ear.scale.set(

      0.58,

      0.95,

      0.34

    );


    ear.position.set(

      x < 0
        ? -0.56
        : 0.56,

      0.84,

      0

    );


    group.add(
      ear
    );

  }


  const muzzle =
    mesh(

      new THREE.IcosahedronGeometry(

        0.31,

        2

      ),

      light,

      0.77,

      0.03

    );


  muzzle.scale.set(

    1.08,

    0.60,

    0.72

  );


  muzzle.position.set(

    0,

    0.68,

    0.40

  );


  group.add(
    muzzle
  );


  for (

    const x of [

      -0.17,

      0.17

    ]

  ) {

    const eye =
      mesh(

        new THREE.SphereGeometry(

          0.045,

          14,

          10

        ),

        0x111416,

        0.28,

        0.05

      );


    eye.position.set(

      x,

      0.88,

      0.50

    );


    group.add(
      eye
    );

  }


  return group;

}


/* =========================================================
   TREE
========================================================= */

function createLowPolyTree() {

  const group =
    new THREE.Group();


  const trunk =
    mesh(

      new THREE.CylinderGeometry(

        0.07,

        0.09,

        0.62,

        10

      ),

      0x6d5748,

      0.72,

      0.02

    );


  trunk.position.y =
    0.31;


  group.add(
    trunk
  );


  const crown1 =
    mesh(

      new THREE.ConeGeometry(

        0.42,

        0.72,

        10

      ),

      0x4d6657,

      0.76,

      0.02

    );


  crown1.position.y =
    0.82;


  group.add(
    crown1
  );


  const crown2 =
    mesh(

      new THREE.ConeGeometry(

        0.34,

        0.62,

        10

      ),

      0x567563,

      0.76,

      0.02

    );


  crown2.position.y =
    1.12;


  group.add(
    crown2
  );


  return group;

}


/* =========================================================
   CARD / ARM CHOREOGRAPHY
========================================================= */

function getCardHandleWorld(

  card

) {

  card.updateMatrixWorld(
    true
  );


  const target =
    new THREE.Vector3();


  card.userData
    .handleAnchor
    .getWorldPosition(
      target
    );


  return target;

}


function getSocketWorld() {

  armVisual
    .socket
    .updateMatrixWorld(
      true
    );


  const target =
    new THREE.Vector3();


  armVisual
    .socket
    .getWorldPosition(
      target
    );


  return target;

}


/* =========================================================
   CARD ORIENTATION

   Page always faces the camera while being carried.
========================================================= */

function cardFacingQuaternion(

  position

) {

  const dummy =
    new THREE.Object3D();


  dummy.position.copy(
    position
  );


  dummy.lookAt(
    camera.position
  );


  return dummy.quaternion
    .clone();

}


/* =========================================================
   ATTACHED CARD POSE

   The socket grabs the TOP-RIGHT handle.

   The page extends left/downward from that point,
   preventing the body of the page from passing
   through the robot forearm.
========================================================= */

function attachedCardPose() {

  const socket =
    getSocketWorld();


  const quaternion =
    cardFacingQuaternion(
      socket
    );


  const localHandle =
    new THREE.Vector3(

      CARD.handleX,

      CARD.handleY,

      0.08

    )
      .applyQuaternion(
        quaternion
      );


  const center =
    socket
      .clone()
      .sub(
        localHandle
      );


  return {

    position:
      center,

    quaternion

  };

}


/* =========================================================
   BEGIN HOLDING CARD
========================================================= */

function beginHoldingCard(

  card

) {

  state.heldCard =
    card;


  const target =
    attachedCardPose();


  state.holdBlend = {

    start:
      performance.now(),

    duration:
      state.reducedMotion
        ? 1
        : 150,

    fromPosition:
      card.position
        .clone(),

    fromQuaternion:
      card.quaternion
        .clone(),

    target

  };

}


/* =========================================================
   FOLLOW GRIPPER
========================================================= */

function updateHeldCard(

  now

) {

  if (
    !state.heldCard
  ) {

    return;

  }


  const target =
    attachedCardPose();


  if (
    state.holdBlend
  ) {

    const t =
      Math.min(

        1,

        (
          now -
          state.holdBlend.start
        ) /
        state.holdBlend.duration

      );


    const e =
      easeOutCubic(
        t
      );


    state.heldCard
      .position
      .lerpVectors(

        state.holdBlend
          .fromPosition,

        target.position,

        e

      );


    state.heldCard
      .quaternion
      .slerpQuaternions(

        state.holdBlend
          .fromQuaternion,

        target.quaternion,

        e

      );


    if (
      t >= 1
    ) {

      state.holdBlend =
        null;

    }

  }

  else {

    state.heldCard
      .position
      .copy(
        target.position
      );


    state.heldCard
      .quaternion
      .copy(
        target.quaternion
      );

  }

}


/* =========================================================
   TWEEN OBJECT
========================================================= */

function tweenObject(

  object,

  position,

  quaternion,

  duration = 220

) {

  if (
    state.reducedMotion
  ) {

    object.position.copy(
      position
    );


    object.quaternion.copy(
      quaternion
    );


    return Promise.resolve();

  }


  state.objectTweens.push({

    object,

    start:
      performance.now(),

    duration,

    fromPosition:
      object.position
        .clone(),

    toPosition:
      position.clone(),

    fromQuaternion:
      object.quaternion
        .clone(),

    toQuaternion:
      quaternion.clone()

  });


  return wait(
    duration
  );

}


/* =========================================================
   RETURN CURRENT PAGE
========================================================= */

async function returnCurrentPage() {

  if (
    !state.station
  ) {

    return;

  }


  dom.sceneStatus.textContent =
    'Returning previous page';


  if (
    state.heldCard
  ) {

    /*
      Carry old page back toward the
      model it originally leaned against.
    */

    await moveArmTo(

      state.station
        .handleWorld,

      420

    );


    /*
      Release.
    */

    state.heldCard =
      null;


    state.holdBlend =
      null;


    await Promise.all([

      tweenObject(

        state.station
          .card,

        state.station
          .cardPose
          .position,

        state.station
          .cardPose
          .quaternion,

        180

      ),

      setGrip(

        0.23,

        100

      )

    ]);

  }


  /*
    Retract to a clean arcing rest pose.
  */

  await moveArmPose(

    2.95,

    ARM.rest,

    250

  );


  scene.remove(
    state.station.root
  );


  disposeObject(
    state.station.root
  );


  state.station =
    null;

}


/* =========================================================
   DELIVER NEW PAGE
========================================================= */

async function deliverPage(

  section,

  index

) {

  state.busy =
    true;


  await returnCurrentPage();


  state.section =
    section;


  state.index =
    index;


  updateNavigation();


  const item =
    currentItem();


  dom.topbarTitle.textContent =
    item.title;


  dom.sceneStatus.textContent =
    'Preparing new page';


  /*
    New page appears leaning on its
    relevant topic model.
  */

  state.station =
    createStation(

      section,

      item,

      index

    );


  await moveArmPose(

    2.95,

    ARM.rest,

    180

  );


  await setGrip(

    0.23,

    70

  );


  const handle =
    getCardHandleWorld(

      state.station.card

    );


  state.station
    .handleWorld
    .copy(
      handle
    );


  dom.sceneStatus.textContent =
    'Reaching for page';


  /*
    Stable multi-joint IK reaches
    the page's handle.
  */

  await moveArmTo(

    handle,

    470

  );


  dom.sceneStatus.textContent =
    'Grabbing page';


  await setGrip(

    0.095,

    120

  );


  /*
    Now the page follows the gripper.
  */

  beginHoldingCard(
    state.station.card
  );


  /*
    Lift first to clear the physical model.
  */

  const liftTarget =
    handle
      .clone()
      .add(

        new THREE.Vector3(

          0.10,

          0.72,

          0.24

        )

      );


  dom.sceneStatus.textContent =
    'Lifting page';


  await moveArmTo(

    liftTarget,

    240

  );


  /*
    Carry page toward visitor.
  */

  dom.sceneStatus.textContent =
    'Bringing page forward';


  await moveArmTo(

    CARD.presentSocket,

    520

  );


  /*
    Small handoff movement.
  */

  await moveArmTo(

    CARD.presentOvershoot,

    125

  );


  await moveArmTo(

    CARD.presentSocket,

    165

  );


  dom.sceneStatus.textContent =
    'Page ready';


  dom.live.textContent =
    `${item.title}. ${item.description}`;


  state.busy =
    false;


  /*
    If user clicked another item during
    the animation, immediately service
    only the latest queued page.
  */

  if (
    state.queued
  ) {

    const next =
      state.queued;


    state.queued =
      null;


    requestSelection(

      next.section,

      next.index,

      next.updateHash

    );

  }

}


/* =========================================================
   NAVIGATION
========================================================= */

function currentItem() {

  return CONTENT[
    state.section
  ][
    state.index
  ];

}


function renderNavigation() {

  dom.nav
    .replaceChildren();


  NAV.forEach(

    (
      [
        section,
        icon,
        label
      ]
    ) => {

      const group =
        document.createElement(
          'div'
        );


      group.className =
        'nav-group';


      const sectionButton =
        document.createElement(
          'button'
        );


      sectionButton.type =
        'button';


      sectionButton.className =
        'nav-section-button';


      sectionButton.dataset.section =
        section;


      sectionButton.innerHTML = `

        <span class="nav-section-icon">
          ${icon}
        </span>

        <span>
          ${label}
        </span>

      `;


      sectionButton
        .addEventListener(

          'click',

          () =>
            requestSelection(

              section,

              0

            )

        );


      group.appendChild(
        sectionButton
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


              button
                .addEventListener(

                  'click',

                  () =>
                    requestSelection(

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


      dom.nav.appendChild(
        group
      );

    }

  );


  updateNavigation();

}


/* =========================================================
   ACTIVE NAV
========================================================= */

function updateNavigation() {

  document
    .querySelectorAll(
      '.nav-section-button'
    )
    .forEach(

      button => {

        button.classList.toggle(

          'is-active',

          button.dataset
            .section ===
          state.section

        );

      }

    );


  document
    .querySelectorAll(
      '.nav-item'
    )
    .forEach(

      button => {

        button.classList.toggle(

          'is-active',

          button.dataset
            .section ===
            state.section &&

          button.dataset
            .itemId ===
            currentItem().id

        );

      }

    );

}


/* =========================================================
   REQUEST PAGE
========================================================= */

function requestSelection(

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


  index =
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
    state.busy
  ) {

    state.queued = {

      section,

      index,

      updateHash

    };


    dom.sceneStatus.textContent =
      'Queued next page';


    return;

  }


  if (
    updateHash
  ) {

    history.replaceState(

      null,

      '',

      `#${section}/${CONTENT[section][index].id}`

    );

  }


  deliverPage(

    section,

    index

  );

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

    requestSelection(

      'home',

      0,

      false

    );


    return;

  }


  const [
    section,
    itemId
  ] =
    raw.split(
      '/'
    );


  const safeSection =
    CONTENT[
      section
    ]
      ? section
      : 'home';


  const index =
    Math.max(

      0,

      CONTENT[
        safeSection
      ]
        .findIndex(

          item =>
            item.id ===
            itemId

        )

    );


  requestSelection(

    safeSection,

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
    '[data-section][data-index]'
  )
  .forEach(

    link => {

      link.addEventListener(

        'click',

        event => {

          event.preventDefault();


          requestSelection(

            link.dataset.section,

            Number(
              link.dataset.index
            )

          );

        }

      );

    }

  );


/* =========================================================
   OPTIONAL BLENDER ADD OBJECT
========================================================= */

const PHYSICS_BOUNDS =
  6.2;


function spawnShape(

  kind

) {

  let object;


  switch (
    kind
  ) {

    case 'plane':

      object =
        roundedBox(

          1.2,

          0.10,

          1.2,

          0.03,

          0x707980,

          0.78,

          0.05

        );

      break;


    case 'circle':

      object =
        mesh(

          new THREE.CylinderGeometry(

            0.56,

            0.56,

            0.10,

            32

          ),

          0x7b746c,

          0.62,

          0.14

        );

      break;


    case 'sphere':

      object =
        mesh(

          new THREE.SphereGeometry(

            0.54,

            26,

            18

          ),

          0x627769,

          0.52,

          0.12

        );

      break;


    case 'icosphere':

      object =
        mesh(

          new THREE.IcosahedronGeometry(

            0.56,

            2

          ),

          0x5d7488,

          0.48,

          0.18

        );

      break;


    case 'cylinder':

      object =
        mesh(

          new THREE.CylinderGeometry(

            0.46,

            0.46,

            1.02,

            24

          ),

          0x776b6b,

          0.52,

          0.18

        );

      break;


    case 'cone':

      object =
        mesh(

          new THREE.ConeGeometry(

            0.57,

            1.10,

            26

          ),

          0x80775e,

          0.52,

          0.18

        );

      break;


    case 'torus':

      object =
        mesh(

          new THREE.TorusGeometry(

            0.50,

            0.16,

            16,

            42

          ),

          0x706979,

          0.48,

          0.20

        );

      break;


    case 'monkey':

      object =
        createMonkeyModel();


      object.scale.setScalar(
        0.74
      );

      break;


    default:

      object =
        roundedBox(

          0.92,

          0.92,

          0.92,

          0.06,

          0x5d7488,

          0.48,

          0.18

        );

  }


  object.userData.radius =
    0.65;


  object.position.set(

    -0.3 +
    (
      Math.random() -
      0.5
    ) *
    2.0,

    4.2 +
    Math.random(),

    1.1 +
    (
      Math.random() -
      0.5
    ) *
    1.6

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
      1.2,

      0,

      (
        Math.random() -
        0.5
      ) *
      1.2

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
        1.4
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
    12

  ) {

    const oldest =
      state.spawned.shift();


    scene.remove(
      oldest
    );


    disposeObject(
      oldest
    );

  }

}


/* =========================================================
   SIMPLE RIGID BODY PHYSICS
========================================================= */

function updatePhysics(

  dt

) {

  state.spawned
    .forEach(

      object => {

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


        velocity.y -=
          7.7 *
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
              -0.40;

          }


          velocity.x *=
            0.985;


          velocity.z *=
            0.985;


          angular
            .multiplyScalar(
              0.991
            );

        }


        for (

          const axis of [

            'x',

            'z'

          ]

        ) {

          if (

            object.position[
              axis
            ] +
            radius >
            PHYSICS_BOUNDS

          ) {

            object.position[
              axis
            ] =
              PHYSICS_BOUNDS -
              radius;


            velocity[
              axis
            ] =
              -Math.abs(

                velocity[
                  axis
                ]

              ) *
              0.52;

          }

          else if (

            object.position[
              axis
            ] -
            radius <
            -PHYSICS_BOUNDS

          ) {

            object.position[
              axis
            ] =
              -PHYSICS_BOUNDS +
              radius;


            velocity[
              axis
            ] =
              Math.abs(

                velocity[
                  axis
                ]

              ) *
              0.52;

          }

        }

      }

    );

}


/* =========================================================
   BLENDER OBJECT ACTIONS
========================================================= */

function tossSelected() {

  if (
    !state.selectedSpawn
  ) {

    return;

  }


  state.selectedSpawn
    .userData
    .velocity
    .set(

      (
        Math.random() -
        0.5
      ) *
      3.0,

      5.0,

      (
        Math.random() -
        0.5
      ) *
      3.0

    );

}


function spinSelected() {

  if (
    !state.selectedSpawn
  ) {

    return;

  }


  state.selectedSpawn
    .userData
    .angular
    .add(

      new THREE.Vector3(

        0.7,

        1.3,

        0.35

      )

    );

}


function deleteSelected() {

  if (
    !state.selectedSpawn
  ) {

    return;

  }


  const object =
    state.selectedSpawn;


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


  disposeObject(
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

    () => {

      state.addOpen
        ? closeAddMenu()
        : openAddMenu();

    }

  );


dom.addMenu
  .querySelectorAll(
    '[data-add]'
  )
  .forEach(

    button => {

      button.addEventListener(

        'click',

        () =>
          spawnShape(
            button.dataset.add
          )

      );

    }

  );


document.addEventListener(

  'pointerdown',

  event => {

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
   KEYBOARD
========================================================= */

window.addEventListener(

  'keydown',

  event => {

    if (

      event.target instanceof
        HTMLInputElement ||

      event.target instanceof
        HTMLTextAreaElement

    ) {

      return;

    }


    /*
      No H/help shortcut.
    */


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

      const list = [

        'plane',

        'cube',

        'circle',

        'sphere',

        'icosphere',

        'cylinder',

        'cone',

        'torus',

        'monkey'

      ];


      spawnShape(

        list[
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


    if (
      event.key ===
      'Escape'
    ) {

      closeAddMenu();

    }

  }

);


/* =========================================================
   ARM TWEEN
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
    easeOutCubic(
      t
    );


  armState.yaw =
    THREE.MathUtils.lerp(

      tween.fromYaw,

      tween.toYaw,

      e

    );


  armState.angles =
    tween.fromAngles
      .map(

        (
          fromAngle,
          index
        ) =>

          THREE.MathUtils.lerp(

            fromAngle,

            tween.toAngles[
              index
            ],

            e

          )

      );


  if (
    t >= 1
  ) {

    state.armTween =
      null;

  }

}


/* =========================================================
   GRIP TWEEN
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


  armState.grip =
    THREE.MathUtils.lerp(

      tween.from,

      tween.to,

      easeOutCubic(
        t
      )

    );


  if (
    t >= 1
  ) {

    state.gripTween =
      null;

  }

}


/* =========================================================
   CARD RETURN TWEENS
========================================================= */

function updateObjectTweens(

  now

) {

  state.objectTweens =
    state.objectTweens
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
            easeOutCubic(
              t
            );


          tween.object
            .position
            .lerpVectors(

              tween.fromPosition,

              tween.toPosition,

              e

            );


          tween.object
            .quaternion
            .slerpQuaternions(

              tween.fromQuaternion,

              tween.toQuaternion,

              e

            );


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

  renderer.setSize(

    window.innerWidth,

    window.innerHeight,

    false

  );


  camera.aspect =
    window.innerWidth /
    window.innerHeight;


  camera
    .updateProjectionMatrix();


  camera.lookAt(
    CAMERA_TARGET
  );

}


window.addEventListener(

  'resize',

  resize

);


/* =========================================================
   LOOP
========================================================= */

let lastTime =
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
        lastTime
      ) /
      1000

    );


  lastTime =
    now;


  updateArmTween(
    now
  );


  updateGripTween(
    now
  );


  updateArmVisual();


  updateHeldCard(
    now
  );


  updateObjectTweens(
    now
  );


  updatePhysics(
    dt
  );


  renderer.render(

    scene,

    camera

  );

}


/* =========================================================
   START
========================================================= */

renderNavigation();


resize();


updateArmVisual();


readHash();


requestAnimationFrame(
  animate
);
