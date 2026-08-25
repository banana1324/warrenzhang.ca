import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const LINKS = {
  github: 'https://github.com/banana1324',
  linkedin: 'https://www.linkedin.com/in/fuyuanzhang',
  youtube: 'https://www.youtube.com/@goosehjonk918',
  email: 'mailto:warrenz7980@gmail.com',
  resume: './assets/resume.pdf'
};

const CONTENT = {
  home: [{
    id: 'home', label: 'Home', kicker: 'INTRO',
    title: 'Software that reaches the physical world.',
    meta: 'Waterloo Computer Science · Richmond, BC',
    description: 'I build software, embedded systems, and robotics projects where code eventually has to interact with something real. My work ranges from computer vision and LoRaWAN sensor networks to microcontroller software, VEX robotics, and interactive web interfaces.',
    metrics: [
      ['$195K+', 'raised across 3 Kickstarter campaigns'],
      ['15', 'apps and games built for an RP2040 platform'],
      ['200+', 'hours coaching badminton']
    ],
    details: [
      'Developed software for ESP32, RP2040, Arduino Uno, and Raspberry Pi platforms.',
      'Built computer-vision interactions, sensor networks, wireless systems, and educational software.',
      'Interested in software engineering, robotics, embedded systems, applied AI, and interactive 3D.'
    ],
    prop: 'robot', pose: 'present',
    links: {
      primary: ['Resume', LINKS.resume],
      secondary: ['GitHub', LINKS.github],
      tertiary: ['LinkedIn', LINKS.linkedin]
    }
  }],

  about: [{
    id: 'about', label: 'About', kicker: 'ABOUT',
    title: 'I like understanding the whole system.',
    meta: 'Computer Science · Hardware + software · Builder',
    description: 'I am most interested in projects that cross boundaries: software connected to sensors, computer vision controlling a robot, electronics paired with a useful interface, or a physical system that forces the code to deal with timing, noise, and failure. I also enjoy Blender because it lets me think about motion and mechanics visually.',
    metrics: [
      ['Waterloo', 'Computer Science'],
      ['Python / C++', 'core technical languages'],
      ['Git + HW', 'software and physical debugging']
    ],
    details: [
      'Technical toolkit includes Python, MicroPython, Java, C/C++, JavaScript, HTML/CSS, ESP32, RP2040, Raspberry Pi, LoRaWAN, MQTT, Node-RED, PID, odometry, oscilloscopes, and logic analyzers.',
      'LinkedIn projects include embedded learning software and analog-circuit verification work involving operational amplifiers, MOSFETs, BJTs, diodes, Laplace transforms, Fourier transforms, and elements of complex analysis.',
      'Outside technical work, I have coached badminton and performed trombone in ensemble settings.'
    ],
    prop: 'portrait', pose: 'present',
    links: {
      primary: ['Resume', LINKS.resume],
      secondary: ['LinkedIn', LINKS.linkedin],
      tertiary: ['YouTube', LINKS.youtube]
    }
  }],

  projects: [
    {
      id: 'wildfire',
      label: 'Wildfire',
      kicker: 'PROJECT',
      title: 'Wildfire Detection System',
      meta: 'C++ · LoRaWAN · Raspberry Pi · BME680 · MQTT · Node-RED',
      description: 'An end-to-end IoT monitoring system built around a BME680 environmental sensor, a LoRaWAN node, and a Raspberry Pi gateway. Sensor data travels over long-range radio into an MQTT and Node-RED pipeline for processing and visualization.',
      metrics: [
        ['BME680', 'environmental sensing'],
        ['LoRaWAN', 'long-range transport'],
        ['Node-RED', 'data visualization']
      ],
      details: [
        'Configured the sensor node and Raspberry Pi gateway for long-range LoRaWAN communication.',
        'Integrated MQTT and Node-RED to process and visualize incoming environmental data.',
        'Tested the complete sensor-to-network-to-dashboard path rather than treating each subsystem separately.'
      ],
      prop: 'wildfire',
      pose: 'inspect',
      links: {
        primary: ['GitHub', LINKS.github]
      }
    },

    {
      id: 'kc15',
      label: 'KC15',
      kicker: 'PROJECT',
      title: 'RP2040 Learning Platform',
      meta: 'Python · MicroPython · RP2040 · Technical Education',
      description: 'For EIM Technology’s KC15 microcontroller learning kit, I wrote and debugged all 15 software applications and games, produced tutorials for each, and made sure they ran reliably on the Raspberry Pi Pico platform.',
      metrics: [
        ['15', 'apps and games'],
        ['RP2040', 'target platform'],
        ['15', 'tutorials produced']
      ],
      details: [
        'Wrote and debugged all 15 applications and games for the platform.',
        'Created written and video tutorials so students could reproduce and understand the projects.',
        'Verified compatibility and reliable execution on the Raspberry Pi Pico (RP2040).'
      ],
      prop: 'pcb',
      pose: 'inspect',
      links: {
        primary: ['GitHub', LINKS.github],
        secondary: ['LinkedIn', LINKS.linkedin]
      }
    },

    {
      id: 'vision',
      label: 'Vision Robotics',
      kicker: 'PROJECT',
      title: 'Computer Vision Robotics',
      meta: 'Python · Face Recognition · Finger Recognition · Robotic Control',
      description: 'Computer-vision projects that turn human input into physical robot actions. I built applications using face and finger recognition and connected the recognition results to robotic systems.',
      metrics: [
        ['Vision', 'human input'],
        ['Robotics', 'physical output'],
        ['Python', 'software layer']
      ],
      details: [
        'Built face-recognition and finger-recognition interactions.',
        'Converted visual classifications into control commands for robotic systems.',
        'Combined perception software with embedded and physical hardware rather than keeping computer vision as a desktop-only demo.'
      ],
      prop: 'robot',
      pose: 'point',
      links: {
        primary: ['GitHub', LINKS.github]
      }
    },

    {
      id: 'analog',
      label: 'Analog Circuits',
      kicker: 'PROJECT',
      title: 'Analog Circuit II',
      meta: 'Op-Amps · MOSFETs · BJTs · Diodes · Laplace · Fourier',
      description: 'Contributed technical verification to EIM Technology’s Analog Circuit II project. I checked diagrams, explanations, and teaching material while working with semiconductor devices and the mathematical tools used to analyze circuit behavior.',
      metrics: [
        ['Op-Amps', 'active circuits'],
        ['MOSFET / BJT', 'semiconductor devices'],
        ['Laplace / Fourier', 'circuit analysis']
      ],
      details: [
        'Verified diagrams, teaching points, and technical text for correctness.',
        'Worked with operational amplifiers, MOSFETs, BJTs, and multiple diode types.',
        'Applied Laplace and Fourier transforms and elements of complex analysis to analyze and verify circuit behavior.'
      ],
      prop: 'circuit',
      pose: 'inspect',
      links: {
        primary: ['LinkedIn', LINKS.linkedin]
      }
    }
  ],

  experience: [
    {
      id: 'eim',
      label: 'EIM Technology',
      kicker: 'EXPERIENCE',
      title: 'Technical Support Intern · EIM Technology',
      meta: 'Nov 2024 – Jun 2026 · Richmond, BC',
      description: 'Worked across embedded software, hardware integration, technical verification, educational content, and product testing. The role let me move between code, electronics, debugging tools, and material intended for real learners.',
      metrics: [
        ['$195K+', 'Kickstarter funding'],
        ['446', 'campaign backers'],
        ['15', 'apps and games']
      ],
      details: [
        'Contributed software development and promotional photography to three Kickstarter campaigns with 446 backers and more than $195,000 raised.',
        'Developed embedded software for ESP32, Raspberry Pi Pico, Arduino Uno, and Raspberry Pi using Python, MicroPython, and Arduino C/C++.',
        'Integrated sensors and LoRaWAN systems and used oscilloscopes and logic analyzers to diagnose hardware and communication issues.'
      ],
      prop: 'pcb',
      pose: 'inspect',
      links: {
        primary: ['Resume', LINKS.resume],
        secondary: ['LinkedIn', LINKS.linkedin]
      }
    },

    {
      id: 'vex',
      label: 'VEX V5 Robotics',
      kicker: 'EXPERIENCE',
      title: 'VEX V5 Robotics Competition',
      meta: 'CAD · PID Control · Odometry · Competition Robotics',
      description: 'Worked on a VEX V5 competition robot where mechanical design, autonomous control, driver reliability, and repeated testing had to work together. My work included CAD, PID control, odometry, and iteration under competition constraints.',
      metrics: [
        ['VEX V5', 'competition platform'],
        ['PID', 'motion control'],
        ['Odometry', 'robot localization']
      ],
      details: [
        'Worked on CAD and mechanical robot systems alongside programming and control.',
        'Applied PID control and odometry to improve repeatability and autonomous movement.',
        'Iterated through testing, mechanical changes, and software tuning as part of a competition team.'
      ],
      prop: 'vex',
      pose: 'point',
      links: {
        primary: ['Resume', LINKS.resume]
      }
    },

    {
      id: 'coaching',
      label: 'Badminton Coach',
      kicker: 'EXPERIENCE',
      title: 'Badminton Coach · Stage18',
      meta: 'May 2024 – May 2026 · Richmond, BC',
      description: 'Coached young athletes in group lessons, turning technical corrections into clear instructions while keeping sessions organized and supportive. Coaching gave me a different kind of debugging problem: understanding why a person’s movement was not working and finding an explanation that clicked.',
      metrics: [
        ['200+', 'coaching hours'],
        ['40+', 'students coached'],
        ['7–15', 'student ages']
      ],
      details: [
        'Coached more than 40 students across over 200 hours.',
        'Helped students strengthen badminton technique and confidence.',
        'Set clear expectations for conduct and sportsmanship while keeping group lessons focused and orderly.'
      ],
      prop: 'racket',
      pose: 'reach',
      links: {
        primary: ['Resume', LINKS.resume]
      }
    },

    {
      id: 'orchestra',
      label: 'Orchestra',
      kicker: 'EXPERIENCE',
      title: 'Second Trombone · Vancouver Chinese Philharmonic Orchestra',
      meta: 'Orchestral performance · Trombone',
      description: 'Played second trombone with the Vancouver Chinese Philharmonic Orchestra, including a performance for the Consulate-General of the People’s Republic of China in Vancouver. Ensemble playing taught me to listen closely, adjust quickly, and support the larger system instead of trying to dominate it.',
      metrics: [
        ['2nd', 'trombone chair'],
        ['Orchestra', 'ensemble performance'],
        ['Vancouver', 'Chinese Philharmonic Orchestra']
      ],
      details: [
        'Performed as second trombone with the Vancouver Chinese Philharmonic Orchestra.',
        'Played at an event for the Chinese Consulate-General in Vancouver.',
        'Worked within a large ensemble where timing, balance, and reliable preparation matter as much as individual technique.'
      ],
      prop: 'trombone',
      pose: 'present',
      links: {
        tertiary: ['YouTube', LINKS.youtube]
      }
    }
  ],

  interests: [
    {
      id: 'blender',
      label: 'Blender',
      kicker: 'INTEREST',
      title: 'Blender · Physics · Armatures',
      meta: 'Rigid bodies · Mechanical motion · 3D interaction',
      description: 'I enjoy Blender most when the scene behaves like a system rather than a static render. Rigid-body simulations, collisions, armatures, and mechanical motion are the parts I keep coming back to. The robotic curator on this site comes directly from that interest.',
      metrics: [
        ['Rigid Bodies', 'physics'],
        ['Armatures', 'rigging'],
        ['Three.js', 'web 3D']
      ],
      details: [
        'Rigid-body simulations and collision behavior.',
        'Armatures and mechanical motion.',
        'Interactive 3D as part of interface design rather than background decoration.'
      ],
      prop: 'monkey',
      pose: 'play',
      links: {
        tertiary: ['YouTube', LINKS.youtube]
      }
    },

    {
      id: 'hardware',
      label: 'Hardware',
      kicker: 'INTEREST',
      title: 'Hardware that gives software consequences.',
      meta: 'Sensors · Microcontrollers · Debugging',
      description: 'I like the point where a program stops being abstract and has to interact with a real sensor, motor, radio, or circuit. Hardware makes bugs more interesting because the answer may be in timing, wiring, signal integrity, or the environment rather than in one line of code.',
      metrics: [
        ['ESP32', 'wireless MCU'],
        ['RP2040', 'embedded platform'],
        ['Scope', 'physical debugging']
      ],
      details: [
        'Embedded systems and microcontrollers.',
        'Sensor and wireless communication integration.',
        'Oscilloscopes and logic analyzers for physical debugging.'
      ],
      prop: 'scope',
      pose: 'inspect',
      links: {}
    },

    {
      id: 'music',
      label: 'Music',
      kicker: 'INTEREST',
      title: 'Trombone & live audio.',
      meta: 'Orchestral performance · Live sound',
      description: 'Music has been another place where systems and timing matter. I have played trombone in school and orchestral settings, mentored other trombone players, and helped with live audio setup and teardown.',
      metrics: [
        ['Trombone', 'performance'],
        ['2nd Chair', 'orchestral role'],
        ['Audio', 'live systems']
      ],
      details: [
        'Second trombone with the Vancouver Chinese Philharmonic Orchestra.',
        'Trombone mentor and school ensemble experience.',
        'Live audio setup, teardown, and troubleshooting.'
      ],
      prop: 'trombone',
      pose: 'present',
      links: {
        tertiary: ['YouTube', LINKS.youtube]
      }
    }
  ],

  contact: [{
    id: 'contact',
    label: 'Contact',
    kicker: 'CONTACT',
    title: 'Build something interesting with me.',
    meta: 'Software · Embedded · Robotics · AI',
    description: 'For software, embedded, robotics, or AI-related opportunities, email is the easiest way to reach me. My GitHub, LinkedIn, YouTube channel, and résumé are also available below.',
    metrics: [
      ['Email', 'direct contact'],
      ['GitHub', 'projects + code'],
      ['YouTube', 'videos']
    ],
    details: [
      'warrenz7980@gmail.com',
      'github.com/banana1324',
      'linkedin.com/in/fuyuanzhang'
    ],
    prop: 'envelope',
    pose: 'present',
    links: {
      primary: ['Email', LINKS.email],
      secondary: ['GitHub', LINKS.github],
      tertiary: ['YouTube', LINKS.youtube]
    }
  }]
};

const KIT_LAYOUTS = {
  home: [
    ['robot', 'home', -3.2, 0, 1.6, .52],
    ['wildfire', null, -3.9, 0, -1.7, .55],
    ['pcb', null, -.8, 0, -3.5, .58],
    ['racket', null, 4.8, 0, 1.9, .42],
    ['trombone', null, .5, 0, 3.7, .40],
    ['monkey', null, 4.6, 0, -2.2, .48]
  ],

  about: [
    ['portrait', 'about', -3.4, 0, 1.2, .58],
    ['resume', null, -3.7, 0, -1.8, .58],
    ['laptop', null, 4.4, 0, -1.8, .55],
    ['books', null, 4.1, 0, 1.8, .63]
  ],

  projects: [
    ['wildfire', 'wildfire', -3.7, 0, -1.8, .62],
    ['pcb', 'kc15', -3.8, 0, 1.7, .62],
    ['robot', 'vision', 4.35, 0, 1.6, .55],
    ['circuit', 'analog', 4.2, 0, -1.8, .62]
  ],

  experience: [
    ['pcb', 'eim', -3.8, 0, -1.7, .62],
    ['vex', 'vex', -3.8, 0, 1.7, .55],
    ['racket', 'coaching', 4.2, 0, 1.6, .45],
    ['trombone', 'orchestra', 4.25, 0, -1.7, .42]
  ],

  interests: [
    ['monkey', 'blender', -3.8, 0, -1.7, .57],
    ['scope', 'hardware', -3.7, 0, 1.8, .58],
    ['trombone', 'music', 4.1, 0, 1.5, .43],
    ['cubeStack', null, 4.2, 0, -1.8, .56]
  ],

  contact: [
    ['envelope', 'contact', -3.6, 0, -1.2, .65],
    ['phone', null, -3.2, 0, 1.8, .6],
    ['resume', null, 4, 0, -1.6, .57],
    ['laptop', null, 4, 0, 1.8, .52]
  ]
};

const dom = {
  canvas: document.querySelector('#scene-canvas'),
  title: document.querySelector('#content-title'),
  meta: document.querySelector('#content-meta'),
  description: document.querySelector('#content-description'),
  kicker: document.querySelector('#content-kicker'),
  count: document.querySelector('#content-count'),
  metrics: document.querySelector('#metrics'),
  details: document.querySelector('#content-details'),
  itemNav: document.querySelector('#item-nav'),
  itemList: document.querySelector('#item-list'),
  prev: document.querySelector('#previous-item'),
  next: document.querySelector('#next-item'),
  primary: document.querySelector('#primary-action'),
  secondary: document.querySelector('#secondary-action'),
  tertiary: document.querySelector('#tertiary-action'),
  sceneLabel: document.querySelector('#scene-label'),
  armStatus: document.querySelector('#arm-status'),
  reset: document.querySelector('#reset-view'),
  addObject: document.querySelector('#add-object'),
  addMenu: document.querySelector('#add-menu'),
  menuButton: document.querySelector('#menu-button'),
  mobileMenu: document.querySelector('#mobile-menu')
};

const state = {
  section: 'home',
  index: 0,
  kit: null,
  held: null,
  sequence: 0,
  armMotion: null,
  gripMotion: null,
  restoreTweens: [],
  spawned: [],
  selectedSpawn: null,
  addOpen: false
};

const renderer = new THREE.WebGLRenderer({
  canvas: dom.canvas,
  antialias: true
});

renderer.setPixelRatio(
  Math.min(window.devicePixelRatio, 2)
);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x11151a);
scene.fog = new THREE.Fog(0x11151a, 12, 27);

const camera = new THREE.PerspectiveCamera(
  42,
  1,
  .1,
  100
);

camera.position.set(
  8.4,
  5.6,
  10.5
);

const controls = new OrbitControls(
  camera,
  dom.canvas
);

controls.target.set(
  .3,
  1.2,
  0
);

controls.enableDamping = true;
controls.dampingFactor = .065;
controls.enableZoom = false;
controls.enablePan = false;
controls.minPolarAngle = Math.PI * .22;
controls.maxPolarAngle = Math.PI * .49;

controls.update();

scene.add(
  new THREE.HemisphereLight(
    0xe9f2fb,
    0x252a30,
    2.1
  )
);

const keyLight = new THREE.DirectionalLight(
  0xffffff,
  3.0
);

keyLight.position.set(
  6,
  10,
  6
);

keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);

scene.add(keyLight);

const coolLight = new THREE.DirectionalLight(
  0x8faecb,
  1.25
);

coolLight.position.set(
  -5,
  4,
  -4
);

scene.add(coolLight);

const fillLight = new THREE.PointLight(
  0x587ca0,
  13,
  9
);

fillLight.position.set(
  -4,
  3.6,
  4
);

scene.add(fillLight);

function mat(
  color,
  rough = .55,
  metal = .15,
  emissive = 0x000000,
  intensity = 0
) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: rough,
    metalness: metal,
    emissive,
    emissiveIntensity: intensity
  });
}

function mesh(
  geometry,
  color,
  rough = .55,
  metal = .15
) {
  const m = new THREE.Mesh(
    geometry,
    mat(color, rough, metal)
  );

  m.castShadow = true;
  m.receiveShadow = true;

  return m;
}

function box(
  w,
  h,
  d,
  r,
  color,
  rough = .55,
  metal = .15
) {
  return mesh(
    new RoundedBoxGeometry(
      w,
      h,
      d,
      4,
      r
    ),
    color,
    rough,
    metal
  );
}

/* LAB SURFACE */

const floor = box(
  18,
  .28,
  11,
  .08,
  0x293038,
  .92,
  .04
);

floor.position.y = -.14;

scene.add(floor);

const grid = new THREE.GridHelper(
  17.6,
  22,
  0x596572,
  0x3b444e
);

grid.position.y = .012;
grid.scale.z = .62;

scene.add(grid);

/* ROBOT ARM */

const ARM = {
  L1: 2.05,
  L2: 1.72,
  baseY: .66
};

function buildArm() {
  const group = new THREE.Group();

  const dark = 0x171b20;
  const steel = 0x9aa5ae;
  const blue = 0x546f87;
  const blue2 = 0x3f566b;

  const foot = mesh(
    new THREE.CylinderGeometry(
      .72,
      .84,
      .24,
      36
    ),
    dark,
    .35,
    .68
  );

  foot.position.y = .12;

  group.add(foot);

  const base = mesh(
    new THREE.CylinderGeometry(
      .58,
      .68,
      .48,
      36
    ),
    blue2,
    .4,
    .45
  );

  base.position.y = .43;

  group.add(base);

  const basePivot = new THREE.Group();

  basePivot.position.y = ARM.baseY;

  group.add(basePivot);

  const shoulderHub = mesh(
    new THREE.CylinderGeometry(
      .43,
      .43,
      .54,
      30
    ),
    dark,
    .3,
    .7
  );

  shoulderHub.rotation.z = Math.PI / 2;

  basePivot.add(shoulderHub);

  const shoulder = new THREE.Group();

  basePivot.add(shoulder);

  const upper = box(
    .5,
    ARM.L1,
    .54,
    .12,
    blue,
    .4,
    .32
  );

  upper.position.y = ARM.L1 / 2;

  shoulder.add(upper);

  const upperInset = box(
    .22,
    1.15,
    .565,
    .05,
    dark,
    .45,
    .5
  );

  upperInset.position.y = ARM.L1 / 2;

  shoulder.add(upperInset);

  const elbow = new THREE.Group();

  elbow.position.y = ARM.L1;

  shoulder.add(elbow);

  const elbowHub = mesh(
    new THREE.CylinderGeometry(
      .42,
      .42,
      .5,
      28
    ),
    dark,
    .3,
    .72
  );

  elbowHub.rotation.z = Math.PI / 2;

  elbow.add(elbowHub);

  for (const x of [-.275, .275]) {
    const cap = mesh(
      new THREE.CylinderGeometry(
        .29,
        .29,
        .05,
        26
      ),
      steel,
      .22,
      .82
    );

    cap.rotation.z = Math.PI / 2;
    cap.position.x = x;

    elbow.add(cap);
  }

  const forearm = new THREE.Group();

  elbow.add(forearm);

  const lower = box(
    .42,
    ARM.L2,
    .45,
    .1,
    blue,
    .4,
    .32
  );

  lower.position.y = ARM.L2 / 2;

  forearm.add(lower);

  const wrist = new THREE.Group();

  wrist.position.y = ARM.L2;

  forearm.add(wrist);

  const wristHub = mesh(
    new THREE.CylinderGeometry(
      .29,
      .29,
      .36,
      24
    ),
    dark,
    .3,
    .72
  );

  wristHub.rotation.z = Math.PI / 2;

  wrist.add(wristHub);

  const gripper = new THREE.Group();

  gripper.position.y = .26;

  wrist.add(gripper);

  const palm = box(
    .5,
    .22,
    .38,
    .05,
    dark,
    .3,
    .68
  );

  gripper.add(palm);

  const fingerL = box(
    .12,
    .58,
    .15,
    .025,
    steel,
    .28,
    .72
  );

  fingerL.position.set(
    -.2,
    .35,
    0
  );

  gripper.add(fingerL);

  const fingerR = fingerL.clone();

  fingerR.position.x = .2;

  gripper.add(fingerR);

  return {
    group,
    basePivot,
    shoulder,
    elbow,
    forearm,
    wrist,
    gripper,
    fingerL,
    fingerR
  };
}

const arm = buildArm();

arm.group.position.set(
  2.2,
  0,
  -.1
);

scene.add(arm.group);

arm.basePivot.rotation.y = Math.PI;
arm.shoulder.rotation.z = -1.5;
arm.elbow.rotation.z = 1.05;

const PRESENT_POINT = new THREE.Vector3(
  -.7,
  2.15,
  .75
);

function solveIK(worldPoint) {
  arm.group.updateMatrixWorld(true);

  const p = arm.group.worldToLocal(
    worldPoint.clone()
  );

  const dx = p.x;
  const dz = p.z;
  const py = p.y - ARM.baseY;

  const r = Math.sqrt(
    dx * dx +
    dz * dz
  );

  const originalDistance = Math.sqrt(
    r * r +
    py * py
  );

  const d = Math.max(
    .2,
    Math.min(
      originalDistance,
      ARM.L1 +
      ARM.L2 -
      .08
    )
  );

  const scale =
    d /
    Math.max(
      .0001,
      originalDistance
    );

  const px = r * scale;
  const yy = py * scale;

  let c2 =
    (
      px * px +
      yy * yy -
      ARM.L1 * ARM.L1 -
      ARM.L2 * ARM.L2
    ) /
    (
      2 *
      ARM.L1 *
      ARM.L2
    );

  c2 = THREE.MathUtils.clamp(
    c2,
    -1,
    1
  );

  const a2 = Math.acos(c2);

  const a1 =
    Math.atan2(
      yy,
      px
    ) -
    Math.atan2(
      ARM.L2 *
      Math.sin(a2),

      ARM.L1 +
      ARM.L2 *
      Math.cos(a2)
    );

  return {
    base: Math.atan2(
      -dz,
      dx
    ),

    shoulder:
      a1 -
      Math.PI / 2,

    elbow:
      a2
  };
}

function currentPose() {
  return {
    base: arm.basePivot.rotation.y,
    shoulder: arm.shoulder.rotation.z,
    elbow: arm.elbow.rotation.z
  };
}

function startArmMotion(
  target,
  duration = 600
) {
  state.armMotion = {
    start: performance.now(),
    duration,
    from: currentPose(),
    to: target
  };
}

function moveArmTo(
  worldPoint,
  duration = 600
) {
  startArmMotion(
    solveIK(worldPoint),
    duration
  );

  return wait(duration);
}

function setGrip(
  openAmount,
  duration = 160
) {
  state.gripMotion = {
    start: performance.now(),
    duration,
    from: Math.abs(
      arm.fingerR.position.x
    ),
    to: openAmount
  };

  return wait(duration);
}

function wait(ms) {
  return new Promise(
    resolve =>
      setTimeout(resolve, ms)
  );
}

/* MODEL FACTORY */

function createModel(name) {
  switch (name) {
    case 'wildfire':
      return createWildfire();

    case 'pcb':
      return createPCB();

    case 'robot':
      return createRobot(false);

    case 'vex':
      return createRobot(true);

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
      return createRobot(false);
  }
}

/* WILDFIRE SENSOR */

function createWildfire() {
  const g = new THREE.Group();

  const body = box(
    1.55,
    .78,
    1.15,
    .14,
    0x37424b,
    .7,
    .12
  );

  body.position.y = .45;

  g.add(body);

  const lid = box(
    1.6,
    .1,
    1.2,
    .07,
    0x52606b,
    .55,
    .18
  );

  lid.position.y = .88;

  g.add(lid);

  const screen = box(
    .42,
    .22,
    .03,
    .025,
    0x6b94a9,
    .25,
    .12
  );

  screen.position.set(
    .42,
    .59,
    .59
  );

  screen.material.emissive.set(
    0x1b3847
  );

  screen.material.emissiveIntensity = .55;

  g.add(screen);

  const grille = box(
    .48,
    .3,
    .08,
    .03,
    0x15191d,
    .75,
    .05
  );

  grille.position.set(
    -.4,
    .55,
    .59
  );

  g.add(grille);

  for (let i = -2; i <= 2; i++) {
    const v = box(
      .045,
      .21,
      .015,
      .005,
      0x87939c,
      .45,
      .4
    );

    v.position.set(
      -.4 +
      i * .075,
      .55,
      .64
    );

    g.add(v);
  }

  for (let i = 0; i < 3; i++) {
    const colors = [
      0x86b484,
      0xd2b36e,
      0x7193b1
    ];

    const c = colors[i];

    const led = mesh(
      new THREE.SphereGeometry(
        .04,
        12,
        8
      ),
      c,
      .2,
      .1
    );

    led.material.emissive.set(c);
    led.material.emissiveIntensity = 1.2;

    led.position.set(
      -.18 +
      i * .14,
      .33,
      .63
    );

    g.add(led);
  }

  const ab = mesh(
    new THREE.CylinderGeometry(
      .095,
      .115,
      .16,
      16
    ),
    0x171a1e,
    .4,
    .45
  );

  ab.position.set(
    .5,
    1,
    -.26
  );

  g.add(ab);

  const ant = mesh(
    new THREE.CylinderGeometry(
      .032,
      .041,
      1.5,
      12
    ),
    0x121417,
    .5,
    .4
  );

  ant.position.set(
    .5,
    1.8,
    -.26
  );

  g.add(ant);

  return g;
}

/* PCB */

function createPCB() {
  const g = new THREE.Group();

  const board = box(
    2,
    .12,
    1.25,
    .05,
    0x315e4d,
    .65,
    .12
  );

  board.position.y = .26;

  g.add(board);

  const chip = box(
    .62,
    .13,
    .62,
    .025,
    0x111417,
    .65,
    .08
  );

  chip.position.set(
    .04,
    .38,
    0
  );

  g.add(chip);

  const usb = box(
    .42,
    .23,
    .52,
    .035,
    0xaab0b4,
    .26,
    .8
  );

  usb.position.set(
    -.8,
    .4,
    0
  );

  g.add(usb);

  for (const z of [-.5, .5]) {
    for (let i = 0; i < 10; i++) {
      const p = mesh(
        new THREE.CylinderGeometry(
          .02,
          .02,
          .24,
          8
        ),
        0xc2a257,
        .2,
        .8
      );

      p.position.set(
        -.7 +
        i * .155,
        .42,
        z
      );

      g.add(p);
    }
  }

  for (let i = 0; i < 4; i++) {
    const cap = mesh(
      new THREE.CylinderGeometry(
        .065,
        .065,
        .14,
        12
      ),
      i % 2
        ? 0x2b333a
        : 0xb88e4f,
      .45,
      .25
    );

    cap.position.set(
      .52 +
      (i % 2) * .19,
      .4,
      -.28 +
      Math.floor(i / 2) * .2
    );

    g.add(cap);
  }

  return g;
}

/* ROBOT / VEX ROBOT */

function createRobot(vex) {
  const g = new THREE.Group();

  const chassis = box(
    1.8,
    .42,
    1.25,
    .1,
    vex
      ? 0x3d4752
      : 0x414b54,
    .43,
    .5
  );

  chassis.position.y = .58;

  g.add(chassis);

  const rail = box(
    1.92,
    .14,
    1.35,
    .04,
    0x60778d,
    .4,
    .38
  );

  rail.position.y = .37;

  g.add(rail);

  for (
    const [x, z]
    of [
      [-.75, -.55],
      [.75, -.55],
      [-.75, .55],
      [.75, .55]
    ]
  ) {
    const wh = mesh(
      new THREE.CylinderGeometry(
        .31,
        .31,
        .24,
        24
      ),
      0x15181b,
      .82,
      .08
    );

    wh.rotation.z = Math.PI / 2;

    wh.position.set(
      x,
      .38,
      z
    );

    g.add(wh);

    const hub = mesh(
      new THREE.CylinderGeometry(
        .1,
        .1,
        .27,
        16
      ),
      0xabb4bc,
      .25,
      .78
    );

    hub.rotation.z = Math.PI / 2;

    hub.position.set(
      x,
      .38,
      z
    );

    g.add(hub);
  }

  if (vex) {
    const tower = box(
      .7,
      1.2,
      .55,
      .05,
      0x687989,
      .45,
      .45
    );

    tower.position.set(
      0,
      1.25,
      0
    );

    g.add(tower);

    const claw = box(
      1.15,
      .16,
      .18,
      .04,
      0x8996a0,
      .35,
      .65
    );

    claw.position.set(
      0,
      1.85,
      .35
    );

    g.add(claw);
  }

  else {
    const deck = box(
      1.25,
      .12,
      .82,
      .05,
      0x315e4d,
      .67,
      .12
    );

    deck.position.y = .86;

    g.add(deck);

    const mast = box(
      .22,
      1.15,
      .22,
      .04,
      0x536f88,
      .4,
      .28
    );

    mast.position.y = 1.45;

    g.add(mast);

    const cam = box(
      .7,
      .42,
      .48,
      .07,
      0x21262b,
      .36,
      .55
    );

    cam.position.y = 2.03;

    g.add(cam);

    const lens = mesh(
      new THREE.CylinderGeometry(
        .16,
        .16,
        .16,
        20
      ),
      0x6d96b4,
      .2,
      .7
    );

    lens.rotation.x = Math.PI / 2;

    lens.position.set(
      0,
      2.03,
      .31
    );

    g.add(lens);
  }

  return g;
}

/* BADMINTON RACKET */

function createRacket() {
  const g = new THREE.Group();

  const frame = mesh(
    new THREE.TorusGeometry(
      .67,
      .05,
      12,
      56
    ),
    0xaeb8c0,
    .3,
    .62
  );

  frame.scale.y = 1.28;
  frame.position.y = 1.72;

  g.add(frame);

  const lineMat = new THREE.LineBasicMaterial({
    color: 0x88949e,
    transparent: true,
    opacity: .68
  });

  for (let i = -5; i <= 5; i++) {
    const x = i * .1;
    const n = x / .62;

    const h =
      Math.sqrt(
        Math.max(
          0,
          1 - n * n
        )
      ) *
      .8;

    g.add(
      new THREE.Line(
        new THREE.BufferGeometry()
          .setFromPoints([
            new THREE.Vector3(
              x,
              1.72 - h,
              0
            ),

            new THREE.Vector3(
              x,
              1.72 + h,
              0
            )
          ]),
        lineMat.clone()
      )
    );
  }

  for (let i = -7; i <= 7; i++) {
    const y = i * .1;
    const n = y / .8;

    const w =
      Math.sqrt(
        Math.max(
          0,
          1 - n * n
        )
      ) *
      .62;

    g.add(
      new THREE.Line(
        new THREE.BufferGeometry()
          .setFromPoints([
            new THREE.Vector3(
              -w,
              1.72 + y,
              0
            ),

            new THREE.Vector3(
              w,
              1.72 + y,
              0
            )
          ]),
        lineMat.clone()
      )
    );
  }

  const shaft = mesh(
    new THREE.CylinderGeometry(
      .026,
      .033,
      1.05,
      12
    ),
    0xb3bdc5,
    .28,
    .72
  );

  shaft.position.y = .82;

  g.add(shaft);

  const handle = mesh(
    new THREE.CylinderGeometry(
      .058,
      .073,
      .7,
      14
    ),
    0x202429,
    .78,
    .04
  );

  handle.position.y = .3;

  g.add(handle);

  g.rotation.z = -.12;

  return g;
}

/* TROMBONE */

function createTrombone() {
  const g = new THREE.Group();

  const brass = 0xa98b4c;

  for (const y of [.84, 1.12]) {
    const t = mesh(
      new THREE.CylinderGeometry(
        .032,
        .032,
        2.15,
        12
      ),
      brass,
      .24,
      .78
    );

    t.rotation.z = Math.PI / 2;

    t.position.set(
      -.04,
      y,
      0
    );

    g.add(t);
  }

  for (const x of [-.48, .2]) {
    const b = mesh(
      new THREE.CylinderGeometry(
        .022,
        .022,
        .28,
        10
      ),
      0x816a39,
      .24,
      .75
    );

    b.position.set(
      x,
      .98,
      0
    );

    g.add(b);
  }

  const bell = mesh(
    new THREE.ConeGeometry(
      .42,
      .72,
      34,
      1,
      true
    ),
    brass,
    .22,
    .82
  );

  bell.rotation.z = -Math.PI / 2;

  bell.position.set(
    1.34,
    1.12,
    0
  );

  g.add(bell);

  const rim = mesh(
    new THREE.TorusGeometry(
      .42,
      .024,
      10,
      38
    ),
    0xc4a15d,
    .2,
    .85
  );

  rim.rotation.y = Math.PI / 2;

  rim.position.set(
    1.7,
    1.12,
    0
  );

  g.add(rim);

  const bend = mesh(
    new THREE.TorusGeometry(
      .14,
      .032,
      10,
      28,
      Math.PI
    ),
    brass,
    .22,
    .82
  );

  bend.rotation.set(
    Math.PI / 2,
    0,
    Math.PI / 2
  );

  bend.position.set(
    -1.15,
    .98,
    0
  );

  g.add(bend);

  return g;
}

/* BLENDER MONKEY */

function createMonkey() {
  const g = new THREE.Group();

  const brown = 0x7f736b;
  const light = 0xa6988e;

  const head = mesh(
    new THREE.IcosahedronGeometry(
      .64,
      2
    ),
    brown,
    .72,
    .04
  );

  head.scale.set(
    1.02,
    .95,
    .82
  );

  head.position.y = 1.12;

  g.add(head);

  for (const x of [-.42, .42]) {
    const cheek = mesh(
      new THREE.IcosahedronGeometry(
        .31,
        1
      ),
      brown,
      .73,
      .04
    );

    cheek.scale.set(
      .9,
      1.05,
      .78
    );

    cheek.position.set(
      x,
      .96,
      .32
    );

    g.add(cheek);

    const ear = mesh(
      new THREE.IcosahedronGeometry(
        .28,
        1
      ),
      brown,
      .73,
      .04
    );

    ear.scale.set(
      .55,
      .95,
      .32
    );

    ear.position.set(
      x < 0
        ? -.74
        : .74,
      1.13,
      0
    );

    g.add(ear);
  }

  const muzzle = mesh(
    new THREE.IcosahedronGeometry(
      .43,
      2
    ),
    light,
    .77,
    .03
  );

  muzzle.scale.set(
    1.08,
    .6,
    .72
  );

  muzzle.position.set(
    0,
    .91,
    .54
  );

  g.add(muzzle);

  return g;
}

/* OSCILLOSCOPE */

function createScope() {
  const g = new THREE.Group();

  const body = box(
    1.7,
    1.05,
    1.15,
    .11,
    0x39434c,
    .58,
    .24
  );

  body.position.y = .58;

  g.add(body);

  const screen = box(
    .95,
    .55,
    .025,
    .04,
    0x365f6f,
    .25,
    .08
  );

  screen.position.set(
    -.22,
    .68,
    .59
  );

  screen.material.emissive.set(
    0x18333b
  );

  screen.material.emissiveIntensity = .6;

  g.add(screen);

  for (let i = 0; i < 3; i++) {
    const k = mesh(
      new THREE.CylinderGeometry(
        .09,
        .09,
        .08,
        18
      ),
      0x8d9aa4,
      .35,
      .6
    );

    k.rotation.x = Math.PI / 2;

    k.position.set(
      .55,
      .78 - i * .25,
      .61
    );

    g.add(k);
  }

  const trace = new THREE.Line(
    new THREE.BufferGeometry()
      .setFromPoints([
        new THREE.Vector3(
          -.6,
          .7,
          .615
        ),

        new THREE.Vector3(
          -.45,
          .78,
          .615
        ),

        new THREE.Vector3(
          -.3,
          .58,
          .615
        ),

        new THREE.Vector3(
          -.15,
          .82,
          .615
        ),

        new THREE.Vector3(
          .05,
          .66,
          .615
        )
      ]),

    new THREE.LineBasicMaterial({
      color: 0x91c5c8
    })
  );

  g.add(trace);

  return g;
}

/* PORTRAIT */

function createPortrait() {
  const g = new THREE.Group();

  const torso = box(
    1.3,
    .82,
    .68,
    .2,
    0x4d5e6b,
    .72,
    .06
  );

  torso.position.y = .46;

  g.add(torso);

  const neck = mesh(
    new THREE.CylinderGeometry(
      .18,
      .21,
      .3,
      16
    ),
    0xb99a82,
    .85,
    .02
  );

  neck.position.y = 1;

  g.add(neck);

  const head = mesh(
    new THREE.IcosahedronGeometry(
      .47,
      3
    ),
    0xc6a78e,
    .86,
    .02
  );

  head.scale.set(
    .9,
    1.08,
    .86
  );

  head.position.y = 1.43;

  g.add(head);

  const hair = mesh(
    new THREE.IcosahedronGeometry(
      .48,
      2
    ),
    0x25282b,
    .85,
    .02
  );

  hair.scale.set(
    .93,
    .5,
    .89
  );

  hair.position.set(
    0,
    1.7,
    -.02
  );

  g.add(hair);

  return g;
}

/* RESUME */

function createResume() {
  const g = new THREE.Group();

  const paper = box(
    1.28,
    .035,
    1.72,
    .02,
    0xd7d9d8,
    .86,
    0
  );

  paper.position.y = .05;

  g.add(paper);

  [
    .72,
    .9,
    .8,
    .62,
    .93,
    .78,
    .88
  ].forEach((l, i) => {
    const ln = box(
      l,
      .015,
      .04,
      .006,
      i === 0
        ? 0x37414a
        : 0x747d84,
      .75,
      0
    );

    ln.position.set(
      -.1,
      .075,
      -.57 + i * .18
    );

    g.add(ln);
  });

  return g;
}

/* LAPTOP */

function createLaptop() {
  const g = new THREE.Group();

  const base = box(
    1.8,
    .09,
    1.12,
    .05,
    0x737b82,
    .32,
    .7
  );

  base.position.y = .11;

  g.add(base);

  const sg = new THREE.Group();

  sg.position.set(
    0,
    .17,
    -.49
  );

  sg.rotation.x = -.22;

  g.add(sg);

  const frame = box(
    1.68,
    1,
    .07,
    .06,
    0x30363b,
    .34,
    .62
  );

  frame.position.y = .51;

  sg.add(frame);

  const screen = box(
    1.5,
    .82,
    .015,
    .035,
    0x284d61,
    .25,
    .1
  );

  screen.position.set(
    0,
    .52,
    .045
  );

  screen.material.emissive.set(
    0x152e3c
  );

  screen.material.emissiveIntensity = .5;

  sg.add(screen);

  return g;
}

/* BOOKS */

function createBooks() {
  const g = new THREE.Group();

  [
    [1.35, .22, .82, 0x516a7d],
    [1.18, .2, .78, 0x765f58],
    [1.3, .21, .8, 0x566754]
  ].forEach(
    ([w, h, d, c], i) => {
      const b = box(
        w,
        h,
        d,
        .045,
        c,
        .76,
        .02
      );

      b.position.y =
        .11 +
        i * .21;

      b.rotation.y =
        (i - 1) * .06;

      g.add(b);
    }
  );

  return g;
}

/* ANALOG CIRCUIT */

function createCircuit() {
  const g = new THREE.Group();

  const board = box(
    1.85,
    .09,
    1.15,
    .04,
    0x4e5d66,
    .72,
    .06
  );

  board.position.y = .18;

  g.add(board);

  const op = box(
    .55,
    .14,
    .4,
    .025,
    0x171a1e,
    .62,
    .08
  );

  op.position.set(
    -.28,
    .3,
    0
  );

  g.add(op);

  for (const x of [.3, .55]) {
    const cap = mesh(
      new THREE.CylinderGeometry(
        .07,
        .07,
        .23,
        14
      ),
      0x7f8f9b,
      .38,
      .4
    );

    cap.position.set(
      x,
      .34,
      -.2
    );

    g.add(cap);
  }

  for (let i = 0; i < 4; i++) {
    const r = box(
      .36,
      .06,
      .08,
      .018,
      0x9a8c6a,
      .62,
      .12
    );

    r.position.set(
      .25 +
      (i % 2) * .38,
      .31,
      .15 +
      Math.floor(i / 2) * .2
    );

    g.add(r);
  }

  return g;
}

/* ENVELOPE */

function createEnvelope() {
  const g = new THREE.Group();

  const e = box(
    1.62,
    .07,
    1.05,
    .05,
    0xd7d8d5,
    .82,
    0
  );

  e.position.y = .07;

  g.add(e);

  const lm = new THREE.LineBasicMaterial({
    color: 0x777e83
  });

  g.add(
    new THREE.Line(
      new THREE.BufferGeometry()
        .setFromPoints([
          new THREE.Vector3(
            -.72,
            .11,
            -.43
          ),

          new THREE.Vector3(
            0,
            .11,
            .02
          ),

          new THREE.Vector3(
            .72,
            .11,
            -.43
          )
        ]),
      lm
    )
  );

  return g;
}

/* PHONE */

function createPhone() {
  const g = new THREE.Group();

  const b = box(
    .6,
    .09,
    1.18,
    .1,
    0x242a30,
    .35,
    .68
  );

  b.position.y = .07;

  g.add(b);

  const s = box(
    .51,
    .016,
    1,
    .08,
    0x315668,
    .25,
    .1
  );

  s.position.y = .125;

  s.material.emissive.set(
    0x18313c
  );

  s.material.emissiveIntensity = .5;

  g.add(s);

  return g;
}

/* CUBE STACK */

function createCubeStack() {
  const g = new THREE.Group();

  [
    [0x58738c, -.5, .3],
    [0x7a8791, .1, .3],
    [0x596b60, .67, .3],
    [0x6f677b, -.2, .85],
    [0x82735e, .4, .87]
  ].forEach(
    ([c, x, y], i) => {
      const q = box(
        .54,
        .54,
        .54,
        .06,
        c,
        .54,
        .14
      );

      q.position.set(
        x,
        y,
        0
      );

      q.rotation.set(
        i * .06,
        i * .11,
        i * .04
      );

      g.add(q);
    }
  );

  return g;
}

/* SCENE KITS */

function clearKit() {
  if (state.held) {
    const heldObject =
      state.held.object;

    if (heldObject?.parent) {
      heldObject.parent.remove(
        heldObject
      );
    }

    disposeGroup(heldObject);

    state.held = null;
  }

  if (!state.kit) {
    return;
  }

  scene.remove(state.kit);

  disposeGroup(state.kit);

  state.kit = null;
}

function loadKit(section) {
  clearKit();

  const group =
    new THREE.Group();

  group.userData.props = [];

  for (
    const [
      model,
      itemId,
      x,
      y,
      z,
      scale
    ]
    of
    KIT_LAYOUTS[section] ||
    KIT_LAYOUTS.home
  ) {
    const obj =
      createModel(model);

    obj.position.set(
      x,
      y,
      z
    );

    obj.scale.setScalar(scale);

    obj.rotation.y =
      x < 0
        ? .35
        : -.35;

    obj.userData.home = {
      position: obj.position.clone(),
      rotation: obj.rotation.clone(),
      scale: obj.scale.clone()
    };

    obj.userData.itemId = itemId;
    obj.userData.model = model;

    group.add(obj);

    group.userData.props.push(
      obj
    );
  }

  scene.add(group);

  state.kit = group;
}

function disposeGroup(group) {
  group?.traverse(
    child => {
      child.geometry?.dispose?.();

      if (
        Array.isArray(
          child.material
        )
      ) {
        child.material.forEach(
          m =>
            m.dispose?.()
        );
      }

      else {
        child.material
          ?.dispose?.();
      }
    }
  );
}

function getPropFor(item) {
  return (
    state.kit
      ?.userData
      .props
      .find(
        p =>
          p.userData.itemId ===
          item.id
      ) ||
    state.kit
      ?.userData
      .props[0] ||
    null
  );
}

/* RETURN PREVIOUS OBJECT */

function resetHeld() {
  if (!state.held) {
    return;
  }

  const {
    object,
    kit,
    home
  } = state.held;

  if (object.parent) {
    object.parent.remove(object);
  }

  if (
    kit &&
    kit.parent
  ) {
    kit.add(object);

    object.position.copy(
      home.position
    );

    object.rotation.copy(
      home.rotation
    );

    object.scale.copy(
      home.scale
    );
  }

  state.held = null;
}

/* ACTUAL GRAB SEQUENCE */

async function curateItem(item) {
  const token =
    ++state.sequence;

  resetHeld();

  await setGrip(
    .21,
    80
  );

  if (
    token !==
    state.sequence
  ) {
    return;
  }

  const prop =
    getPropFor(item);

  if (!prop) {
    return;
  }

  dom.armStatus.textContent =
    'Reaching';

  prop.updateMatrixWorld(true);

  const target =
    new THREE.Vector3();

  prop.getWorldPosition(target);

  target.y += .55;

  await moveArmTo(
    target,
    560
  );

  if (
    token !==
    state.sequence
  ) {
    return;
  }

  dom.armStatus.textContent =
    'Grabbing';

  await setGrip(
    .095,
    150
  );

  if (
    token !==
    state.sequence
  ) {
    return;
  }

  const kit =
    state.kit;

  const home = {
    position:
      prop.userData.home
        .position.clone(),

    rotation:
      prop.userData.home
        .rotation.clone(),

    scale:
      prop.userData.home
        .scale.clone()
  };

  /*
    This is the important part.

    Object3D.attach() reparents the object
    to the robot gripper while preserving
    its world transform.

    From here on, when the gripper moves,
    the selected object moves with it.
  */

  arm.gripper.attach(prop);

  state.held = {
    object: prop,
    kit,
    home
  };

  /*
    Move the grabbed object into the space
    directly between the fingers.
  */

  const fromPos =
    prop.position.clone();

  const fromQuat =
    prop.quaternion.clone();

  const toPos =
    new THREE.Vector3(
      0,
      .52,
      0
    );

  const toQuat =
    new THREE.Quaternion()
      .setFromEuler(
        new THREE.Euler(
          0,
          0,
          0
        )
      );

  state.restoreTweens.push({
    object: prop,
    start: performance.now(),
    duration: 180,
    fromPos,
    toPos,
    fromQuat,
    toQuat,
    local: true
  });

  dom.armStatus.textContent =
    'Presenting';

  await moveArmTo(
    PRESENT_POINT,
    620
  );

  if (
    token !==
    state.sequence
  ) {
    return;
  }

  dom.armStatus.textContent =
    'Holding selected object';
}

/* CONTENT */

function currentItems() {
  return (
    CONTENT[state.section] ||
    CONTENT.home
  );
}

function currentItem() {
  return currentItems()[
    state.index
  ];
}

function setSection(
  section,
  itemId = null,
  updateHash = true
) {
  if (!CONTENT[section]) {
    section = 'home';
  }

  const changed =
    section !==
    state.section ||
    !state.kit;

  state.section =
    section;

  const items =
    CONTENT[section];

  const found =
    itemId
      ? items.findIndex(
          i =>
            i.id === itemId
        )
      : -1;

  state.index =
    found >= 0
      ? found
      : 0;

  if (changed) {
    loadKit(section);
  }

  render();

  updateNav();

  curateItem(
    currentItem()
  );

  if (updateHash) {
    history.replaceState(
      null,
      '',
      `#${section}/${currentItem().id}`
    );
  }

  if (
    !dom.mobileMenu.hidden
  ) {
    dom.mobileMenu.hidden =
      true;

    dom.menuButton
      .setAttribute(
        'aria-expanded',
        'false'
      );
  }
}

function selectItem(index) {
  const items =
    currentItems();

  state.index =
    (
      index +
      items.length
    ) %
    items.length;

  render();

  curateItem(
    currentItem()
  );

  history.replaceState(
    null,
    '',
    `#${state.section}/${currentItem().id}`
  );
}

function render() {
  const item =
    currentItem();

  const items =
    currentItems();

  dom.kicker.textContent =
    item.kicker;

  dom.count.textContent =
    `${String(
      state.index + 1
    ).padStart(
      2,
      '0'
    )} / ${String(
      items.length
    ).padStart(
      2,
      '0'
    )}`;

  dom.title.textContent =
    item.title;

  dom.meta.textContent =
    item.meta;

  dom.description.textContent =
    item.description;

  dom.sceneLabel.textContent =
    `${capitalize(
      state.section
    )} · ${item.label}`;

  dom.metrics.replaceChildren(
    ...item.metrics.map(
      ([value, label]) => {
        const d =
          document.createElement(
            'div'
          );

        d.className =
          'metric';

        const s =
          document.createElement(
            'strong'
          );

        s.textContent =
          value;

        const sp =
          document.createElement(
            'span'
          );

        sp.textContent =
          label;

        d.append(
          s,
          sp
        );

        return d;
      }
    )
  );

  dom.details.replaceChildren(
    ...item.details.map(
      text => {
        const li =
          document.createElement(
            'li'
          );

        li.textContent =
          text;

        return li;
      }
    )
  );

  dom.itemNav.hidden =
    items.length <= 1;

  dom.itemList.replaceChildren(
    ...items.map(
      (it, i) => {
        const b =
          document.createElement(
            'button'
          );

        b.type =
          'button';

        b.className =
          `item-button${
            i === state.index
              ? ' is-active'
              : ''
          }`;

        b.textContent =
          it.label;

        b.addEventListener(
          'click',
          () =>
            selectItem(i)
        );

        return b;
      }
    )
  );

  renderLinks(
    item.links || {}
  );
}

function renderLinks(links) {
  configLink(
    dom.primary,
    links.primary
  );

  configLink(
    dom.secondary,
    links.secondary
  );

  configLink(
    dom.tertiary,
    links.tertiary
  );
}

function configLink(
  el,
  data
) {
  if (!data) {
    el.hidden = true;

    el.removeAttribute(
      'href'
    );

    return;
  }

  el.hidden = false;

  el.textContent =
    data[0];

  el.href =
    data[1];

  if (
    !data[1]
      .startsWith(
        'mailto:'
      )
  ) {
    el.target =
      '_blank';

    el.rel =
      'noreferrer';
  }

  else {
    el.removeAttribute(
      'target'
    );
  }
}

function updateNav() {
  document
    .querySelectorAll(
      '[data-section]'
    )
    .forEach(
      el => {
        el.classList.toggle(
          'is-active',
          el.dataset.section ===
          state.section
        );
      }
    );
}

function capitalize(s) {
  return (
    s.charAt(0)
      .toUpperCase() +
    s.slice(1)
  );
}

/* CLICKABLE 3D PROPS */

const raycaster =
  new THREE.Raycaster();

const pointer =
  new THREE.Vector2();

let pointerDown = {
  x: 0,
  y: 0
};

function pointerFromEvent(e) {
  const r =
    dom.canvas
      .getBoundingClientRect();

  pointer.x =
    (
      (
        e.clientX -
        r.left
      ) /
      r.width
    ) *
    2 -
    1;

  pointer.y =
    -(
      (
        e.clientY -
        r.top
      ) /
      r.height
    ) *
    2 +
    1;
}

function findItemProp(obj) {
  let p = obj;

  while (p) {
    if (
      p.userData
        ?.itemId
    ) {
      return p;
    }

    p = p.parent;
  }

  return null;
}

function raycastItem(e) {
  if (!state.kit) {
    return null;
  }

  pointerFromEvent(e);

  raycaster.setFromCamera(
    pointer,
    camera
  );

  for (
    const hit
    of raycaster
      .intersectObjects(
        state.kit.children,
        true
      )
  ) {
    const p =
      findItemProp(
        hit.object
      );

    if (p) {
      return p;
    }
  }

  return null;
}

dom.canvas.addEventListener(
  'pointermove',
  e => {
    dom.canvas.style.cursor =
      raycastItem(e)
        ? 'pointer'
        : 'grab';
  }
);

dom.canvas.addEventListener(
  'pointerdown',
  e => {
    pointerDown = {
      x: e.clientX,
      y: e.clientY
    };
  }
);

dom.canvas.addEventListener(
  'pointerup',
  e => {
    if (
      Math.hypot(
        e.clientX -
        pointerDown.x,

        e.clientY -
        pointerDown.y
      ) >
      6
    ) {
      return;
    }

    const p =
      raycastItem(e);

    if (!p) {
      return;
    }

    const idx =
      currentItems()
        .findIndex(
          i =>
            i.id ===
            p.userData.itemId
        );

    if (idx >= 0) {
      selectItem(idx);
    }
  }
);

/* BLENDER ADD MENU + LIGHT PHYSICS */

const BOUNDS = 7.4;

function spawnShape(kind) {
  let o;

  switch (kind) {
    case 'plane':
      o = box(
        1.3,
        .1,
        1.3,
        .03,
        0x6d747b,
        .8,
        .05
      );
      break;

    case 'circle':
      o = mesh(
        new THREE.CylinderGeometry(
          .62,
          .62,
          .1,
          32
        ),
        0x7f776c,
        .65,
        .12
      );
      break;

    case 'sphere':
      o = mesh(
        new THREE.SphereGeometry(
          .6,
          26,
          18
        ),
        0x677b6a,
        .52,
        .12
      );
      break;

    case 'icosphere':
      o = mesh(
        new THREE.IcosahedronGeometry(
          .63,
          2
        ),
        0x5d7183,
        .5,
        .16
      );
      break;

    case 'cylinder':
      o = mesh(
        new THREE.CylinderGeometry(
          .5,
          .5,
          1.1,
          24
        ),
        0x776b6b,
        .55,
        .16
      );
      break;

    case 'cone':
      o = mesh(
        new THREE.ConeGeometry(
          .62,
          1.2,
          26
        ),
        0x81775e,
        .55,
        .16
      );
      break;

    case 'torus':
      o = mesh(
        new THREE.TorusGeometry(
          .53,
          .18,
          16,
          42
        ),
        0x736878,
        .5,
        .2
      );
      break;

    case 'monkey':
      o =
        createMonkey();

      o.scale.setScalar(.8);
      break;

    default:
      o = box(
        1,
        1,
        1,
        .06,
        0x5d7183,
        .5,
        .18
      );
  }

  o.userData.radius = .72;

  o.position.set(
    (
      Math.random() -
      .5
    ) *
    3,

    4 +
    Math.random(),

    (
      Math.random() -
      .5
    ) *
    2.5
  );

  o.rotation.set(
    Math.random(),
    Math.random(),
    Math.random()
  );

  o.userData.velocity =
    new THREE.Vector3(
      (
        Math.random() -
        .5
      ) *
      1.4,

      0,

      (
        Math.random() -
        .5
      ) *
      1.4
    );

  o.userData.angular =
    new THREE.Vector3(
      Math.random() - .5,
      Math.random() - .5,
      Math.random() - .5
    )
      .multiplyScalar(
        1.5
      );

  scene.add(o);

  state.spawned.push(o);

  state.selectedSpawn = o;

  closeAdd();

  if (
    state.spawned.length >
    14
  ) {
    const old =
      state.spawned.shift();

    scene.remove(old);

    disposeGroup(old);
  }
}

function updatePhysics(dt) {
  for (
    const o
    of state.spawned
  ) {
    const v =
      o.userData.velocity;

    const a =
      o.userData.angular;

    const r =
      o.userData.radius ||
      .6;

    v.y +=
      -7.7 *
      dt;

    o.position
      .addScaledVector(
        v,
        dt
      );

    o.rotation.x +=
      a.x * dt;

    o.rotation.y +=
      a.y * dt;

    o.rotation.z +=
      a.z * dt;

    if (
      o.position.y -
      r <
      0
    ) {
      o.position.y = r;

      if (v.y < 0) {
        v.y *= -.42;
      }

      v.x *= .986;
      v.z *= .986;

      a.multiplyScalar(
        .992
      );
    }

    for (
      const axis
      of ['x', 'z']
    ) {
      if (
        o.position[axis] +
        r >
        BOUNDS
      ) {
        o.position[axis] =
          BOUNDS - r;

        v[axis] =
          -Math.abs(
            v[axis]
          ) *
          .54;
      }

      else if (
        o.position[axis] -
        r <
        -BOUNDS
      ) {
        o.position[axis] =
          -BOUNDS + r;

        v[axis] =
          Math.abs(
            v[axis]
          ) *
          .54;
      }
    }
  }
}

function tossSelected() {
  const o =
    state.selectedSpawn;

  if (o) {
    o.userData.velocity.set(
      (
        Math.random() -
        .5
      ) *
      3.2,

      5.3,

      (
        Math.random() -
        .5
      ) *
      3.2
    );
  }
}

function spinSelected() {
  const o =
    state.selectedSpawn;

  if (o) {
    o.userData.angular.add(
      new THREE.Vector3(
        .7,
        1.4,
        .35
      )
    );
  }
}

function deleteSelected() {
  const o =
    state.selectedSpawn;

  if (!o) {
    return;
  }

  scene.remove(o);

  state.spawned =
    state.spawned.filter(
      x =>
        x !== o
    );

  disposeGroup(o);

  state.selectedSpawn =
    state.spawned.at(-1) ||
    null;
}

function openAdd() {
  state.addOpen = true;

  dom.addMenu.hidden =
    false;

  dom.addObject
    .setAttribute(
      'aria-expanded',
      'true'
    );

  positionAdd();
}

function closeAdd() {
  state.addOpen = false;

  dom.addMenu.hidden =
    true;

  dom.addObject
    .setAttribute(
      'aria-expanded',
      'false'
    );
}

function positionAdd() {
  dom.addMenu.style.right =
    '20px';

  dom.addMenu.style.bottom =
    '60px';
}

/* UI EVENTS */

document
  .querySelectorAll(
    '[data-section]'
  )
  .forEach(
    el =>
      el.addEventListener(
        'click',
        e => {
          if (
            el.tagName ===
            'A'
          ) {
            e.preventDefault();
          }

          setSection(
            el.dataset.section
          );
        }
      )
  );

dom.prev.addEventListener(
  'click',
  () =>
    selectItem(
      state.index - 1
    )
);

dom.next.addEventListener(
  'click',
  () =>
    selectItem(
      state.index + 1
    )
);

dom.reset.addEventListener(
  'click',
  () => {
    camera.position.set(
      8.4,
      5.6,
      10.5
    );

    controls.target.set(
      .3,
      1.2,
      0
    );

    controls.update();
  }
);

dom.addObject.addEventListener(
  'click',
  () =>
    state.addOpen
      ? closeAdd()
      : openAdd()
);

dom.addMenu
  .querySelectorAll(
    '[data-add]'
  )
  .forEach(
    b =>
      b.addEventListener(
        'click',
        () =>
          spawnShape(
            b.dataset.add
          )
      )
  );

dom.menuButton.addEventListener(
  'click',
  () => {
    const opening =
      dom.mobileMenu.hidden;

    dom.mobileMenu.hidden =
      !opening;

    dom.menuButton
      .setAttribute(
        'aria-expanded',
        String(opening)
      );
  }
);

window.addEventListener(
  'hashchange',
  readHash
);

window.addEventListener(
  'resize',
  resize
);

document.addEventListener(
  'pointerdown',
  e => {
    if (
      state.addOpen &&
      !dom.addMenu.contains(
        e.target
      ) &&
      !dom.addObject.contains(
        e.target
      )
    ) {
      closeAdd();
    }
  }
);

window.addEventListener(
  'keydown',
  e => {
    if (
      e.target instanceof
      HTMLInputElement ||
      e.target instanceof
      HTMLTextAreaElement
    ) {
      return;
    }

    if (
      e.shiftKey &&
      e.key.toLowerCase() ===
      'a'
    ) {
      e.preventDefault();

      openAdd();

      return;
    }

    if (
      state.addOpen &&
      /^[1-9]$/.test(
        e.key
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
          Number(e.key) - 1
        ]
      );

      return;
    }

    if (
      e.key.toLowerCase() ===
      'g'
    ) {
      tossSelected();
    }

    if (
      e.key.toLowerCase() ===
      'r'
    ) {
      spinSelected();
    }

    if (
      e.key.toLowerCase() ===
      'x'
    ) {
      deleteSelected();
    }

    if (
      e.key ===
      'Escape'
    ) {
      closeAdd();
    }
  }
);

/* HASH */

function readHash() {
  const raw =
    location.hash.replace(
      /^#/,
      ''
    );

  if (!raw) {
    setSection(
      'home',
      'home',
      false
    );

    return;
  }

  const [
    s,
    id
  ] =
    raw.split('/');

  setSection(
    CONTENT[s]
      ? s
      : 'home',

    id || null,

    false
  );
}

/* RESIZE */

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
}

/* ARM ANIMATION */

function updateArmMotion(now) {
  if (!state.armMotion) {
    return;
  }

  const m =
    state.armMotion;

  const t =
    Math.min(
      1,
      (
        now -
        m.start
      ) /
      m.duration
    );

  const e =
    1 -
    Math.pow(
      1 - t,
      3
    );

  arm.basePivot.rotation.y =
    THREE.MathUtils.lerp(
      m.from.base,
      m.to.base,
      e
    );

  arm.shoulder.rotation.z =
    THREE.MathUtils.lerp(
      m.from.shoulder,
      m.to.shoulder,
      e
    );

  arm.elbow.rotation.z =
    THREE.MathUtils.lerp(
      m.from.elbow,
      m.to.elbow,
      e
    );

  if (t >= 1) {
    state.armMotion = null;
  }
}

function updateGrip(now) {
  if (!state.gripMotion) {
    return;
  }

  const m =
    state.gripMotion;

  const t =
    Math.min(
      1,
      (
        now -
        m.start
      ) /
      m.duration
    );

  const e =
    1 -
    Math.pow(
      1 - t,
      3
    );

  const x =
    THREE.MathUtils.lerp(
      m.from,
      m.to,
      e
    );

  arm.fingerL.position.x =
    -x;

  arm.fingerR.position.x =
    x;

  if (t >= 1) {
    state.gripMotion = null;
  }
}

function updateTweens(now) {
  state.restoreTweens =
    state.restoreTweens.filter(
      tw => {
        const t =
          Math.min(
            1,
            (
              now -
              tw.start
            ) /
            tw.duration
          );

        const e =
          1 -
          Math.pow(
            1 - t,
            3
          );

        tw.object.position
          .lerpVectors(
            tw.fromPos,
            tw.toPos,
            e
          );

        tw.object.quaternion
          .slerpQuaternions(
            tw.fromQuat,
            tw.toQuat,
            e
          );

        return t < 1;
      }
    );
}

/* MAIN LOOP */

let last =
  performance.now();

function animate(now) {
  requestAnimationFrame(
    animate
  );

  const dt =
    Math.min(
      .033,
      (
        now -
        last
      ) /
      1000
    );

  last = now;

  controls.update();

  updateArmMotion(now);
  updateGrip(now);
  updateTweens(now);
  updatePhysics(dt);

  renderer.render(
    scene,
    camera
  );
}

resize();
readHash();

requestAnimationFrame(
  animate
);
