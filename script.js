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
    id: 'home',
    label: 'Home',
    title: 'Software that reaches the physical world.',
    meta: 'Computer Science · Software · Embedded · Robotics',
    description: 'I build systems where code eventually has to interact with something real: a robot, a sensor, a radio, a circuit, or a person using it. This portfolio works the same way—the robotic curator physically brings each piece of information into view.',
    tags: ['Python', 'C/C++', 'Embedded', 'Robotics', 'Three.js'],
    metrics: [
      ['$195K+', 'raised across 3 Kickstarter campaigns'],
      ['15', 'RP2040 apps and games built'],
      ['200+', 'hours coaching badminton']
    ],
    details: [
      'Developed software across ESP32, RP2040, Arduino Uno, and Raspberry Pi platforms.',
      'Built computer-vision interactions, sensor networks, wireless systems, and technical learning software.',
      'Interested in software engineering, robotics, embedded systems, applied AI, and interactive 3D.'
    ],
    prop: 'robot'
  }],

  about: [{
    id: 'about',
    label: 'About',
    title: 'I like understanding the whole system.',
    meta: 'Waterloo Computer Science · Richmond, BC',
    description: 'My strongest projects cross boundaries. I like writing the software, connecting it to hardware, testing the system, and tracing failures across code, electronics, communication, timing, and mechanics rather than treating each layer separately.',
    tags: ['Systems', 'Embedded', 'Robotics', 'AI', '3D'],
    metrics: [
      ['Waterloo', 'Computer Science'],
      ['Hardware + code', 'preferred problem space'],
      ['Build → test', 'iteration over demos']
    ],
    details: [
      'Technical toolkit includes Python, MicroPython, Java, C/C++, JavaScript, HTML/CSS, ESP32, RP2040, Raspberry Pi, LoRaWAN, MQTT, Node-RED, PID, odometry, oscilloscopes, and logic analyzers.',
      'I enjoy Blender rigid-body simulations and armatures because they turn static geometry into systems with behavior.',
      'Outside technical work, I have coached badminton and performed trombone in school and orchestral settings.'
    ],
    prop: 'portrait'
  }],

  projects: [
    {
      id: 'wildfire',
      label: 'Wildfire Detection',
      title: 'Wildfire Detection System',
      meta: 'C++ · LoRaWAN · Raspberry Pi · BME680 · MQTT · Node-RED',
      description: 'An end-to-end IoT monitoring system built around a BME680 environmental sensor, a LoRaWAN node, and a Raspberry Pi gateway. Sensor data travels over long-range radio into an MQTT and Node-RED pipeline for processing and visualization.',
      tags: ['C++', 'BME680', 'LoRaWAN', 'MQTT', 'Node-RED'],
      metrics: [
        ['BME680', 'environmental sensing'],
        ['LoRaWAN', 'long-range transport'],
        ['Node-RED', 'processing + visualization']
      ],
      details: [
        'Configured a sensor node and Raspberry Pi gateway for long-range LoRaWAN communication.',
        'Integrated MQTT and Node-RED to process and visualize incoming environmental data.',
        'Tested the complete sensor-to-network-to-dashboard path as one system.'
      ],
      prop: 'wildfire'
    },
    {
      id: 'kc15',
      label: 'KC15',
      title: 'KC15 RP2040 Learning Platform',
      meta: 'Python · MicroPython · RP2040 · Educational Software',
      description: 'For EIM Technology’s KC15 microcontroller learning kit, I built and debugged 15 software applications and games and created supporting tutorials so students could reproduce and understand each project.',
      tags: ['RP2040', 'MicroPython', 'Python', 'Testing'],
      metrics: [
        ['15', 'apps and games'],
        ['RP2040', 'target platform'],
        ['Tutorials', 'learning materials produced']
      ],
      details: [
        'Developed and debugged 15 applications and games for the KC15 platform.',
        'Verified reliable execution on the Raspberry Pi Pico / RP2040 platform.',
        'Produced technical tutorials and demonstrations intended for student use.'
      ],
      prop: 'pcb'
    },
    {
      id: 'vision',
      label: 'Vision Robotics',
      title: 'Computer Vision Robotics',
      meta: 'Python · Face Recognition · Finger Recognition · Robot Control',
      description: 'Computer-vision projects that convert human visual input into physical robot actions. I built applications using face and finger recognition and connected those recognition results to robotic systems.',
      tags: ['Python', 'Computer Vision', 'Robotics', 'Embedded'],
      metrics: [
        ['Vision', 'human input'],
        ['Robot', 'physical output'],
        ['2 modes', 'face + finger recognition']
      ],
      details: [
        'Built face-recognition and finger-recognition interactions.',
        'Converted visual classifications into commands for robotic systems.',
        'Combined perception software with embedded and physical hardware rather than keeping vision as a desktop-only demo.'
      ],
      prop: 'robot'
    },
    {
      id: 'analog',
      label: 'Analog Circuits',
      title: 'Analog Circuit II',
      meta: 'Op-Amps · MOSFETs · BJTs · Diodes · Laplace · Fourier',
      description: 'Technical verification work for an analog-circuit learning project, checking diagrams, explanations, and teaching material while working with semiconductor devices and the mathematics used to analyze circuit behavior.',
      tags: ['Op-Amps', 'MOSFETs', 'BJTs', 'Laplace', 'Fourier'],
      metrics: [
        ['Op-Amps', 'active circuit analysis'],
        ['MOSFET / BJT', 'semiconductor devices'],
        ['Transforms', 'Laplace + Fourier']
      ],
      details: [
        'Verified diagrams, technical text, and teaching points for correctness.',
        'Worked with operational amplifiers, MOSFETs, BJTs, and diode behavior.',
        'Used mathematical analysis to reason about circuit response and verification.'
      ],
      prop: 'circuit'
    }
  ],

  experience: [
    {
      id: 'eim',
      label: 'EIM Technology',
      title: 'Technical Support Intern · EIM Technology',
      meta: 'Nov 2024 – Jun 2026 · Richmond, BC',
      description: 'Worked across embedded software, hardware integration, product testing, technical verification, and learning materials. The role repeatedly moved between code, electronics, debugging tools, and systems intended for real learners.',
      tags: ['Embedded', 'MicroPython', 'LoRaWAN', 'Hardware Debugging'],
      metrics: [
        ['$195K+', 'Kickstarter campaign funding'],
        ['446', 'campaign backers'],
        ['3', 'Kickstarter projects contributed to']
      ],
      details: [
        'Developed embedded software for ESP32, Raspberry Pi Pico, Arduino Uno, and Raspberry Pi using Python, MicroPython, and Arduino C/C++.',
        'Integrated sensors and LoRaWAN systems and used oscilloscopes and logic analyzers to diagnose hardware and communication issues.',
        'Contributed software development and promotional photography to three Kickstarter campaigns.'
      ],
      prop: 'pcb'
    },
    {
      id: 'vex',
      label: 'VEX V5 Robotics Competition',
      title: 'VEX V5 Robotics Competition',
      meta: 'Robotics Team 4471A · CAD · PID · Odometry',
      description: 'Competition robotics work where mechanical design, control software, autonomous behavior, and repeated testing had to function together under real match constraints.',
      tags: ['VEX V5', 'CAD', 'PID Control', 'Odometry'],
      metrics: [
        ['4471A', 'competition robotics team'],
        ['PID', 'motion control'],
        ['Odometry', 'position tracking']
      ],
      details: [
        'Worked on CAD and mechanical robot systems alongside programming and control.',
        'Applied PID control and odometry to improve repeatability and autonomous movement.',
        'Iterated through testing, mechanical changes, and software tuning in a competitive environment.'
      ],
      prop: 'vex'
    },
    {
      id: 'coaching',
      label: 'Badminton Coach',
      title: 'Badminton Coach · Stage18',
      meta: 'May 2024 – May 2026 · Richmond, BC',
      description: 'Coached young athletes in group lessons, turning technical corrections into clear instructions while keeping sessions organized and supportive. Coaching became a different kind of debugging: seeing why a movement was failing and finding an explanation that clicked.',
      tags: ['Coaching', 'Communication', 'Leadership'],
      metrics: [
        ['200+', 'coaching hours'],
        ['40+', 'students coached'],
        ['7–15', 'student ages']
      ],
      details: [
        'Coached more than 40 students across over 200 hours.',
        'Helped students strengthen badminton technique and confidence.',
        'Set clear expectations for conduct and sportsmanship while keeping group lessons focused.'
      ],
      prop: 'racket'
    },
    {
      id: 'orchestra',
      label: 'Orchestra',
      title: 'Second Trombone · Vancouver Chinese Philharmonic Orchestra',
      meta: 'Orchestral Performance · Trombone',
      description: 'Performed as second trombone with the Vancouver Chinese Philharmonic Orchestra, including a performance for the Consulate-General of the People’s Republic of China in Vancouver.',
      tags: ['Trombone', 'Orchestra', 'Live Performance'],
      metrics: [
        ['2nd', 'trombone part'],
        ['Orchestra', 'ensemble performance'],
        ['Vancouver', 'Chinese Philharmonic Orchestra']
      ],
      details: [
        'Performed as second trombone with the Vancouver Chinese Philharmonic Orchestra.',
        'Played at an event for the Chinese Consulate-General in Vancouver.',
        'Worked inside a large ensemble where timing, balance, preparation, and reliability matter as much as individual technique.'
      ],
      prop: 'trombone'
    }
  ],

  interests: [
    {
      id: 'blender',
      label: 'Blender',
      title: 'Blender · Physics · Armatures',
      meta: 'Rigid Bodies · Rigging · Mechanical Motion',
      description: 'I enjoy Blender most when a scene behaves like a system rather than a static render. Rigid-body simulations, collisions, armatures, and mechanical motion are the parts I keep coming back to. The robotic curator on this site comes directly from that interest.',
      tags: ['Rigid Bodies', 'Armatures', '3D', 'Simulation'],
      metrics: [
        ['Physics', 'rigid-body behavior'],
        ['Rigging', 'armatures + joints'],
        ['Three.js', 'interactive web 3D']
      ],
      details: [
        'Rigid-body simulations and collision behavior.',
        'Armatures and mechanical motion.',
        'Interactive 3D as part of interface design rather than background decoration.'
      ],
      prop: 'monkey'
    },
    {
      id: 'hardware',
      label: 'Hardware',
      title: 'Hardware gives software consequences.',
      meta: 'Sensors · Microcontrollers · Physical Debugging',
      description: 'I like the point where software stops being abstract and has to interact with a real sensor, motor, radio, or circuit. Hardware makes bugs more interesting because the answer may be in timing, wiring, signal integrity, or the environment rather than one line of code.',
      tags: ['ESP32', 'RP2040', 'Sensors', 'Oscilloscope'],
      metrics: [
        ['ESP32', 'wireless microcontroller'],
        ['RP2040', 'embedded platform'],
        ['Scope', 'physical debugging']
      ],
      details: [
        'Embedded systems and microcontrollers.',
        'Sensor and wireless communication integration.',
        'Oscilloscopes and logic analyzers for physical debugging.'
      ],
      prop: 'scope'
    },
    {
      id: 'music',
      label: 'Music',
      title: 'Trombone & live audio.',
      meta: 'Orchestral Performance · Live Sound',
      description: 'Music is another place where systems and timing matter. I have played trombone in school and orchestral settings and helped with live audio setup, teardown, and troubleshooting.',
      tags: ['Trombone', 'Orchestra', 'Live Audio'],
      metrics: [
        ['Trombone', 'performance'],
        ['2nd', 'orchestral trombone part'],
        ['Audio', 'live systems']
      ],
      details: [
        'Second trombone with the Vancouver Chinese Philharmonic Orchestra.',
        'School ensemble and trombone experience.',
        'Live audio setup, teardown, and troubleshooting.'
      ],
      prop: 'trombone'
    }
  ],

  contact: [{
    id: 'contact',
    label: 'Contact',
    title: 'Build something interesting with me.',
    meta: 'Software · Embedded · Robotics · AI',
    description: 'For software, embedded, robotics, or AI-related opportunities, email is the easiest way to reach me. My GitHub, LinkedIn, YouTube channel, and résumé are available from the workspace navigation.',
    tags: ['Email', 'GitHub', 'LinkedIn', 'YouTube'],
    metrics: [
      ['Email', 'warrenz7980@gmail.com'],
      ['GitHub', 'banana1324'],
      ['YouTube', '@goosehjonk918']
    ],
    details: [
      'Email: warrenz7980@gmail.com',
      'GitHub: github.com/banana1324',
      'LinkedIn: linkedin.com/in/fuyuanzhang'
    ],
    prop: 'envelope'
  }]
};

const NAV_SECTIONS = [
  ['home', '⌂', 'Home'],
  ['about', '◉', 'About'],
  ['projects', '◇', 'Projects'],
  ['experience', '▣', 'Experience'],
  ['interests', '○', 'Interests'],
  ['contact', '@', 'Contact']
];

const PROP_LAYOUTS = {
  home: [
    ['wildfire', null, -3.7, 0, -1.8, .55],
    ['robot', null, -3.6, 0, 1.8, .52],
    ['pcb', null, .3, 0, -3.7, .58],
    ['racket', null, 5.0, 0, 1.7, .42],
    ['trombone', null, 4.8, 0, -1.9, .39],
    ['monkey', null, 1.1, 0, 3.4, .48]
  ],
  about: [
    ['portrait', 'about', -3.5, 0, 1.6, .58],
    ['resume', null, -3.7, 0, -1.6, .58],
    ['laptop', null, 4.8, 0, -1.8, .54],
    ['books', null, 4.7, 0, 1.6, .63]
  ],
  projects: [
    ['wildfire', 'wildfire', -3.7, 0, -1.8, .61],
    ['pcb', 'kc15', -3.7, 0, 1.8, .62],
    ['robot', 'vision', 4.7, 0, 1.6, .54],
    ['circuit', 'analog', 4.7, 0, -1.8, .62]
  ],
  experience: [
    ['pcb', 'eim', -3.7, 0, -1.8, .62],
    ['vex', 'vex', -3.7, 0, 1.7, .55],
    ['racket', 'coaching', 4.7, 0, 1.5, .44],
    ['trombone', 'orchestra', 4.7, 0, -1.7, .41]
  ],
  interests: [
    ['monkey', 'blender', -3.7, 0, -1.8, .57],
    ['scope', 'hardware', -3.7, 0, 1.8, .58],
    ['trombone', 'music', 4.7, 0, 1.5, .42],
    ['cubeStack', null, 4.7, 0, -1.8, .56]
  ],
  contact: [
    ['envelope', 'contact', -3.6, 0, -1.2, .65],
    ['phone', null, -3.3, 0, 1.8, .60],
    ['resume', null, 4.5, 0, -1.6, .57],
    ['laptop', null, 4.5, 0, 1.8, .52]
  ]
};

/* =========================================================
   DOM + STATE
========================================================= */

const dom = {
  canvas: document.querySelector('#scene-canvas'),
  sidebar: document.querySelector('#sidebar-nav'),
  sceneLabel: document.querySelector('#scene-label'),
  armStatus: document.querySelector('#arm-status'),
  helpButton: document.querySelector('#help-button'),
  helpPanel: document.querySelector('#help-panel'),
  resetView: document.querySelector('#reset-view'),
  addObject: document.querySelector('#add-object'),
  addMenu: document.querySelector('#add-menu'),
  live: document.querySelector('#screen-reader-live')
};

const state = {
  section: 'home',
  index: 0,
  propGroup: null,
  currentCard: null,
  heldCard: null,
  sequence: 0,
  armTween: null,
  gripTween: null,
  cardTweens: [],
  spawned: [],
  selectedSpawn: null,
  addOpen: false,
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
};

/* =========================================================
   WEBGL SCENE
========================================================= */

const renderer = new THREE.WebGLRenderer({
  canvas: dom.canvas,
  antialias: true,
  alpha: false
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.setClearColor(0x081017, 1);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x081017);
scene.fog = new THREE.Fog(0x081017, 12, 29);

const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
camera.position.set(9.7, 5.9, 12.4);

const controls = new OrbitControls(camera, dom.canvas);
controls.target.set(0.65, 2.0, 0.0);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.enableZoom = false;
controls.enablePan = false;
controls.minPolarAngle = Math.PI * 0.20;
controls.maxPolarAngle = Math.PI * 0.49;
controls.update();

scene.add(new THREE.HemisphereLight(0xdcebf6, 0x18232c, 2.1));

const keyLight = new THREE.DirectionalLight(0xe8f4ff, 3.4);
keyLight.position.set(5.5, 10, 7.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -11;
keyLight.shadow.camera.right = 11;
keyLight.shadow.camera.top = 11;
keyLight.shadow.camera.bottom = -11;
scene.add(keyLight);

const blueRim = new THREE.DirectionalLight(0x4f9fd8, 1.75);
blueRim.position.set(-6, 4.5, -5);
scene.add(blueRim);

const coolFill = new THREE.PointLight(0x6fb7e9, 14, 10);
coolFill.position.set(-2.5, 4.2, 4.5);
scene.add(coolFill);

/* =========================================================
   MATERIAL HELPERS
========================================================= */

function material(color, roughness = 0.55, metalness = 0.15) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function mesh(geometry, color, roughness = 0.55, metalness = 0.15) {
  const object = new THREE.Mesh(geometry, material(color, roughness, metalness));
  object.castShadow = true;
  object.receiveShadow = true;
  return object;
}

function box(width, height, depth, radius, color, roughness = 0.55, metalness = 0.15) {
  return mesh(
    new RoundedBoxGeometry(width, height, depth, 4, radius),
    color,
    roughness,
    metalness
  );
}

/* =========================================================
   LAB ENVIRONMENT
========================================================= */

const floor = box(18, 0.28, 11.3, 0.08, 0x202a33, 0.93, 0.04);
floor.position.y = -0.14;
scene.add(floor);

const grid = new THREE.GridHelper(17.6, 24, 0x41576a, 0x2b3945);
grid.position.y = 0.012;
grid.scale.z = 0.64;
scene.add(grid);

const rearWall = box(14.3, 5.1, 0.16, 0.035, 0x0e151c, 0.9, 0.04);
rearWall.position.set(0.65, 2.55, -5.18);
scene.add(rearWall);

/* peg-board style wall */
for (let x = -5.3; x <= 5.8; x += 0.62) {
  for (let y = 0.65; y <= 4.45; y += 0.58) {
    const peg = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.18, 8), 0x03070a, 0.8, 0.02);
    peg.rotation.x = Math.PI / 2;
    peg.position.set(x, y, -5.08);
    scene.add(peg);
  }
}

function createServerRack() {
  const rack = new THREE.Group();
  const frame = box(1.8, 4.1, 0.95, 0.08, 0x121a21, 0.42, 0.58);
  frame.position.y = 2.08;
  rack.add(frame);

  for (let i = 0; i < 7; i++) {
    const unit = box(1.48, 0.38, 1.01, 0.035, 0x1d2832, 0.4, 0.5);
    unit.position.set(0, 0.52 + i * 0.5, 0);
    rack.add(unit);

    for (let j = 0; j < 4; j++) {
      const led = mesh(new THREE.SphereGeometry(0.035, 10, 8), j === 3 ? 0x9a7e4f : 0x4da8ec, 0.2, 0.2);
      led.material.emissive.set(led.material.color);
      led.material.emissiveIntensity = 2.0;
      led.position.set(-0.48 + j * 0.28, 0.52 + i * 0.5, 0.54);
      rack.add(led);
    }
  }
  return rack;
}

const serverRack = createServerRack();
serverRack.position.set(6.4, 0, -3.4);
serverRack.rotation.y = -0.12;
scene.add(serverRack);

function createWallLogo() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '700 132px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#d9f1ff';
  ctx.shadowColor = '#57b8ff';
  ctx.shadowBlur = 26;
  ctx.fillText('WZ', 256, 132);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(2.35, 1.18),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
  );
  plane.position.set(3.35, 2.9, -5.04);
  return plane;
}
scene.add(createWallLogo());

/* =========================================================
   MULTI-LINK ROBOT ARM

   Four physical arm links + three wrist axes + gripper.
   The positional chain uses deterministic planar FABRIK.
========================================================= */

const ARM = {
  base: new THREE.Vector3(3.95, 0.0, 0.25),
  baseY: 0.72,
  lengths: [1.45, 1.30, 1.15, 1.02],
  jointLimits: [
    [-2.25, 0.30],
    [-2.10, 2.10],
    [-1.95, 1.95],
    [-1.75, 1.75]
  ]
};

function createLinkVisual(length, index) {
  const group = new THREE.Group();
  const steel = index % 2 ? 0x26323c : 0x303d48;
  const rail = box(0.40 - index * 0.025, length * 0.88, 0.48 - index * 0.02, 0.08, steel, 0.34, 0.62);
  rail.position.y = length * 0.48;
  group.add(rail);

  const inset = box(0.14, length * 0.58, 0.50 - index * 0.02, 0.035, 0x0e151b, 0.38, 0.72);
  inset.position.y = length * 0.48;
  group.add(inset);

  const accent = box(0.05, length * 0.50, 0.515 - index * 0.02, 0.015, 0x477ca0, 0.32, 0.58);
  accent.position.set(-0.14 + index * 0.01, length * 0.48, 0);
  group.add(accent);
  return group;
}

function buildRobotArm() {
  const group = new THREE.Group();
  const dark = 0x0d1217;
  const steel = 0x8d9aa5;

  const foot = mesh(new THREE.CylinderGeometry(0.78, 0.92, 0.28, 40), dark, 0.28, 0.80);
  foot.position.y = 0.14;
  group.add(foot);

  const baseBody = mesh(new THREE.CylinderGeometry(0.62, 0.72, 0.60, 40), 0x202a33, 0.32, 0.72);
  baseBody.position.y = 0.52;
  group.add(baseBody);

  const baseYaw = new THREE.Group();
  baseYaw.position.y = ARM.baseY;
  group.add(baseYaw);

  const shoulderHousing = mesh(new THREE.CylinderGeometry(0.50, 0.50, 0.62, 36), dark, 0.25, 0.82);
  shoulderHousing.rotation.z = Math.PI / 2;
  baseYaw.add(shoulderHousing);

  const joints = [];
  const links = [];
  let parent = baseYaw;

  ARM.lengths.forEach((length, index) => {
    const joint = new THREE.Group();
    parent.add(joint);
    joints.push(joint);

    const jointHub = mesh(new THREE.CylinderGeometry(0.42 - index * 0.045, 0.42 - index * 0.045, 0.48 - index * 0.035, 32), dark, 0.24, 0.84);
    jointHub.rotation.z = Math.PI / 2;
    joint.add(jointHub);

    for (const side of [-1, 1]) {
      const cap = mesh(new THREE.CylinderGeometry(0.27 - index * 0.025, 0.27 - index * 0.025, 0.045, 28), steel, 0.18, 0.9);
      cap.rotation.z = Math.PI / 2;
      cap.position.x = side * (0.27 - index * 0.018);
      joint.add(cap);
    }

    const link = createLinkVisual(length, index);
    joint.add(link);
    links.push(link);

    const end = new THREE.Group();
    end.position.y = length;
    joint.add(end);
    parent = end;
  });

  /* wrist pitch module */
  const wristPitch = new THREE.Group();
  parent.add(wristPitch);
  const pitchHub = mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.36, 26), dark, 0.22, 0.86);
  pitchHub.rotation.z = Math.PI / 2;
  wristPitch.add(pitchHub);

  /* wrist yaw module */
  const wristYaw = new THREE.Group();
  wristYaw.position.y = 0.28;
  wristPitch.add(wristYaw);
  const yawHub = mesh(new THREE.CylinderGeometry(0.20, 0.20, 0.26, 24), 0x2c3741, 0.22, 0.82);
  wristYaw.add(yawHub);

  /* wrist roll module */
  const wristRoll = new THREE.Group();
  wristRoll.position.y = 0.25;
  wristYaw.add(wristRoll);
  const rollHub = mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.27, 24), steel, 0.2, 0.88);
  rollHub.rotation.x = Math.PI / 2;
  wristRoll.add(rollHub);

  const gripper = new THREE.Group();
  gripper.position.y = 0.24;
  wristRoll.add(gripper);

  const palm = box(0.56, 0.22, 0.38, 0.05, dark, 0.26, 0.82);
  gripper.add(palm);

  const fingerL = box(0.12, 0.62, 0.15, 0.025, steel, 0.22, 0.88);
  fingerL.position.set(-0.21, 0.38, 0);
  gripper.add(fingerL);

  const fingerR = fingerL.clone();
  fingerR.position.x = 0.21;
  gripper.add(fingerR);

  const tipL = box(0.18, 0.13, 0.20, 0.025, 0xb1bcc5, 0.2, 0.84);
  tipL.position.set(-0.21, 0.71, 0);
  gripper.add(tipL);
  const tipR = tipL.clone();
  tipR.position.x = 0.21;
  gripper.add(tipR);

  const cardSocket = new THREE.Group();
  cardSocket.position.set(0, 0.74, 0);
  gripper.add(cardSocket);

  return { group, baseYaw, joints, links, wristPitch, wristYaw, wristRoll, gripper, fingerL, fingerR, tipL, tipR, cardSocket };
}

const arm = buildRobotArm();
arm.group.position.copy(ARM.base);
scene.add(arm.group);

const REST_POSE = {
  baseYaw: Math.PI * 0.93,
  joints: [-1.10, 0.72, -0.48, 0.23],
  wristPitch: 0.25,
  wristYaw: 0,
  wristRoll: 0,
  grip: 0.22
};

function setGripInstant(value) {
  arm.fingerL.position.x = -value;
  arm.fingerR.position.x = value;
  arm.tipL.position.x = -value;
  arm.tipR.position.x = value;
}

function applyArmPose(pose) {
  arm.baseYaw.rotation.y = pose.baseYaw;
  pose.joints.forEach((angle, i) => { arm.joints[i].rotation.z = angle; });
  arm.wristPitch.rotation.z = pose.wristPitch ?? 0;
  arm.wristYaw.rotation.y = pose.wristYaw ?? 0;
  arm.wristRoll.rotation.y = pose.wristRoll ?? 0;
  setGripInstant(pose.grip ?? 0.22);
}
applyArmPose(REST_POSE);

function currentArmPose() {
  return {
    baseYaw: arm.baseYaw.rotation.y,
    joints: arm.joints.map(j => j.rotation.z),
    wristPitch: arm.wristPitch.rotation.z,
    wristYaw: arm.wristYaw.rotation.y,
    wristRoll: arm.wristRoll.rotation.y,
    grip: Math.abs(arm.fingerR.position.x)
  };
}

function normalizeAngle(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

function nearestAngle(current, target) {
  return current + normalizeAngle(target - current);
}

function clamp(value, range) {
  return Math.max(range[0], Math.min(range[1], value));
}

function currentPlanarPoints() {
  const points = [new THREE.Vector2(0, 0)];
  let cumulative = Math.PI / 2;
  let p = points[0].clone();

  arm.joints.forEach((joint, index) => {
    cumulative += joint.rotation.z;
    p = p.clone().add(new THREE.Vector2(
      Math.cos(cumulative) * ARM.lengths[index],
      Math.sin(cumulative) * ARM.lengths[index]
    ));
    points.push(p);
  });

  return points;
}

/*
  Deterministic 2D FABRIK.
  The chain solves in one plane after base yaw, so there is no
  random elbow-up/elbow-down flip. We seed each solve from the
  current pose and always use shortest-angle interpolation.
*/
function solveArmIK(worldTarget) {
  const baseWorld = new THREE.Vector3(ARM.base.x, ARM.baseY, ARM.base.z);
  const delta = worldTarget.clone().sub(baseWorld);
  const radial = Math.max(0.001, Math.hypot(delta.x, delta.z));
  const vertical = delta.y;

  const desiredYaw = Math.atan2(-delta.z, delta.x);
  const baseYaw = nearestAngle(arm.baseYaw.rotation.y, desiredYaw);

  const target = new THREE.Vector2(radial, vertical);
  const points = currentPlanarPoints();
  const root = new THREE.Vector2(0, 0);
  const totalLength = ARM.lengths.reduce((a, b) => a + b, 0);

  if (target.length() >= totalLength - 0.001) {
    const direction = target.clone().normalize();
    points[0].copy(root);
    for (let i = 0; i < ARM.lengths.length; i++) {
      points[i + 1].copy(points[i]).addScaledVector(direction, ARM.lengths[i]);
    }
  } else {
    for (let iteration = 0; iteration < 16; iteration++) {
      points[points.length - 1].copy(target);

      for (let i = points.length - 2; i >= 0; i--) {
        const direction = points[i].clone().sub(points[i + 1]).normalize();
        points[i].copy(points[i + 1]).addScaledVector(direction, ARM.lengths[i]);
      }

      points[0].copy(root);

      for (let i = 0; i < ARM.lengths.length; i++) {
        const direction = points[i + 1].clone().sub(points[i]).normalize();
        points[i + 1].copy(points[i]).addScaledVector(direction, ARM.lengths[i]);
      }

      if (points[points.length - 1].distanceTo(target) < 0.002) break;
    }
  }

  const absoluteAngles = [];
  for (let i = 0; i < ARM.lengths.length; i++) {
    const d = points[i + 1].clone().sub(points[i]);
    absoluteAngles.push(Math.atan2(d.y, d.x));
  }

  const relative = [];
  let parentAbs = Math.PI / 2;
  for (let i = 0; i < absoluteAngles.length; i++) {
    let q = normalizeAngle(absoluteAngles[i] - parentAbs);
    q = nearestAngle(arm.joints[i].rotation.z, q);
    q = clamp(q, ARM.jointLimits[i]);
    relative.push(q);
    parentAbs = absoluteAngles[i];
  }

  const accumulated = relative.reduce((a, b) => a + b, 0);
  const wristPitch = clamp(-accumulated * 0.55, [-1.5, 1.5]);

  return {
    baseYaw,
    joints: relative,
    wristPitch,
    wristYaw: 0,
    wristRoll: 0,
    grip: Math.abs(arm.fingerR.position.x)
  };
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, state.reducedMotion ? 0 : ms));
}

function moveArmPose(targetPose, duration = 620) {
  if (state.reducedMotion) {
    applyArmPose(targetPose);
    return Promise.resolve();
  }

  state.armTween = {
    start: performance.now(),
    duration,
    from: currentArmPose(),
    to: targetPose
  };
  return wait(duration);
}

function moveArmTo(worldTarget, duration = 620, overrides = {}) {
  const solved = { ...solveArmIK(worldTarget), ...overrides };
  if (overrides.joints) solved.joints = overrides.joints;
  return moveArmPose(solved, duration);
}

function setGrip(value, duration = 140) {
  if (state.reducedMotion) {
    setGripInstant(value);
    return Promise.resolve();
  }

  state.gripTween = {
    start: performance.now(),
    duration,
    from: Math.abs(arm.fingerR.position.x),
    to: value
  };
  return wait(duration);
}

/* =========================================================
   INFORMATION CARD AS A REAL WEBGL OBJECT

   This replaces CSS3D. It now participates in depth testing,
   so the arm can genuinely pass in front of it and grab it.
========================================================= */

const CARD = {
  width: 3.45,
  height: 4.05,
  textureWidth: 1536,
  textureHeight: 1800
};

const RACK_TARGET = new THREE.Vector3(5.05, 4.20, -2.00);
const PRESENT_TARGET = new THREE.Vector3(0.55, 4.22, 0.85);

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function wrapLines(ctx, text, maxWidth) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let current = '';

  words.forEach(word => {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  });
  if (current) lines.push(current);
  return lines;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const lines = wrapLines(ctx, text, maxWidth).slice(0, maxLines);
  lines.forEach((line, index) => ctx.fillText(line, x, y + index * lineHeight));
  return y + lines.length * lineHeight;
}

function createCardTexture(section, item) {
  const canvas = document.createElement('canvas');
  canvas.width = CARD.textureWidth;
  canvas.height = CARD.textureHeight;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#0e1b25');
  gradient.addColorStop(1, '#09131b');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(92,184,246,.82)';
  ctx.lineWidth = 5;
  drawRoundedRect(ctx, 8, 8, canvas.width - 16, canvas.height - 16, 36);
  ctx.stroke();

  const left = 90;
  const contentWidth = canvas.width - 180;
  let y = 95;

  ctx.fillStyle = '#79c4f6';
  ctx.font = '600 30px Arial';
  ctx.fillText(section.toUpperCase(), left, y);

  y += 86;
  ctx.fillStyle = '#f3f8fc';
  ctx.font = '700 76px Arial';
  y = drawWrappedText(ctx, item.title, left, y, contentWidth, 82, 3);

  y += 20;
  ctx.fillStyle = '#8fa4b5';
  ctx.font = '400 26px Arial';
  y = drawWrappedText(ctx, item.meta, left, y, contentWidth, 38, 2);

  y += 24;
  let tagX = left;
  const tagY = y;
  ctx.font = '500 22px Arial';
  item.tags.forEach(tag => {
    const width = ctx.measureText(tag).width + 38;
    if (tagX + width > left + contentWidth) return;
    ctx.fillStyle = 'rgba(64,137,188,.24)';
    drawRoundedRect(ctx, tagX, tagY - 27, width, 42, 10);
    ctx.fill();
    ctx.strokeStyle = 'rgba(90,180,240,.45)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#a8d8f8';
    ctx.fillText(tag, tagX + 18, tagY + 2);
    tagX += width + 12;
  });

  y += 74;
  ctx.fillStyle = '#c8d5df';
  ctx.font = '400 34px Arial';
  y = drawWrappedText(ctx, item.description, left, y, contentWidth, 49, 6);

  y += 44;
  ctx.fillStyle = '#9bb4c7';
  ctx.font = '600 28px Arial';
  ctx.fillText('IMPACT', left, y);
  y += 34;

  ctx.strokeStyle = 'rgba(255,255,255,.10)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(left, y);
  ctx.lineTo(left + contentWidth, y);
  ctx.stroke();

  y += 82;
  const metricWidth = contentWidth / 3;
  item.metrics.forEach(([value, label], index) => {
    const x = left + metricWidth * index;
    ctx.fillStyle = '#54b7fa';
    ctx.font = '600 60px Arial';
    ctx.fillText(String(value), x, y);
    ctx.fillStyle = '#a7b6c2';
    ctx.font = '400 25px Arial';
    drawWrappedText(ctx, label, x, y + 38, metricWidth - 26, 31, 2);
  });

  y += 142;
  ctx.fillStyle = '#9bb4c7';
  ctx.font = '600 28px Arial';
  ctx.fillText('KEY CONTRIBUTIONS', left, y);
  y += 34;

  ctx.strokeStyle = 'rgba(255,255,255,.10)';
  ctx.beginPath();
  ctx.moveTo(left, y);
  ctx.lineTo(left + contentWidth, y);
  ctx.stroke();

  y += 54;
  ctx.font = '400 28px Arial';
  item.details.slice(0, 4).forEach(detail => {
    ctx.fillStyle = '#5ab9f4';
    ctx.beginPath();
    ctx.arc(left + 8, y - 8, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#b9c7d1';
    y = drawWrappedText(ctx, detail, left + 30, y, contentWidth - 30, 39, 3);
    y += 20;
  });

  ctx.fillStyle = '#5f7788';
  ctx.font = '400 22px Arial';
  ctx.fillText('Warren Zhang · Selected work', left, canvas.height - 72);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  texture.needsUpdate = true;
  return texture;
}

function createInfoCard(section, item) {
  const group = new THREE.Group();
  group.userData.isInfoCard = true;

  /* origin is the physical grab tab at top center */
  const bodyCenterY = -CARD.height / 2 - 0.10;

  const back = box(CARD.width + 0.08, CARD.height + 0.08, 0.10, 0.10, 0x071018, 0.34, 0.38);
  back.position.set(0, bodyCenterY, 0);
  group.add(back);

  const texture = createCardTexture(section, item);
  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(CARD.width, CARD.height),
    new THREE.MeshBasicMaterial({ map: texture, transparent: false })
  );
  face.position.set(0, bodyCenterY, 0.056);
  group.add(face);

  const edgeMaterial = material(0x3d91c7, 0.28, 0.58);
  const leftEdge = new THREE.Mesh(new THREE.BoxGeometry(0.025, CARD.height + 0.04, 0.06), edgeMaterial);
  leftEdge.position.set(-CARD.width / 2 - 0.02, bodyCenterY, 0.07);
  group.add(leftEdge);
  const rightEdge = leftEdge.clone();
  rightEdge.position.x = CARD.width / 2 + 0.02;
  group.add(rightEdge);
  const topEdge = new THREE.Mesh(new THREE.BoxGeometry(CARD.width + 0.04, 0.025, 0.06), edgeMaterial);
  topEdge.position.set(0, -0.12, 0.07);
  group.add(topEdge);
  const bottomEdge = topEdge.clone();
  bottomEdge.position.y = -CARD.height - 0.08;
  group.add(bottomEdge);

  const tab = box(0.58, 0.24, 0.16, 0.04, 0x2f5d7b, 0.28, 0.62);
  tab.position.set(0, 0.02, 0);
  group.add(tab);

  /* little metal tab ends make the grip readable */
  for (const x of [-0.22, 0.22]) {
    const cap = box(0.13, 0.28, 0.19, 0.03, 0xa7b3bc, 0.2, 0.85);
    cap.position.set(x, 0.03, 0);
    group.add(cap);
  }

  group.userData.texture = texture;
  group.userData.item = item;
  group.userData.section = section;
  return group;
}

function disposeCard(card) {
  if (!card) return;
  card.userData.texture?.dispose?.();
  disposeGroup(card);
}

function worldFacingQuaternion(position) {
  const temp = new THREE.Object3D();
  temp.position.copy(position);
  temp.lookAt(camera.position);
  return temp.quaternion.clone();
}

function tweenObjectWorld(object, toPosition, toQuaternion, duration = 420, toScale = 1) {
  scene.attach(object);

  if (state.reducedMotion) {
    object.position.copy(toPosition);
    object.quaternion.copy(toQuaternion);
    object.scale.setScalar(toScale);
    return Promise.resolve();
  }

  state.cardTweens.push({
    object,
    start: performance.now(),
    duration,
    fromPos: object.position.clone(),
    toPos: toPosition.clone(),
    fromQuat: object.quaternion.clone(),
    toQuat: toQuaternion.clone(),
    fromScale: object.scale.x,
    toScale
  });

  return wait(duration);
}

function alignHeldCardToCamera() {
  if (!state.heldCard || state.heldCard.parent !== arm.cardSocket) return;
  const socketWorld = new THREE.Quaternion();
  arm.cardSocket.getWorldQuaternion(socketWorld);
  const cardWorldPos = new THREE.Vector3();
  state.heldCard.getWorldPosition(cardWorldPos);
  const desiredWorld = worldFacingQuaternion(cardWorldPos);
  const desiredLocal = socketWorld.clone().invert().multiply(desiredWorld);
  state.heldCard.quaternion.slerp(desiredLocal, 0.18);
}

async function takeOldCardAway(token) {
  if (!state.currentCard) return;

  const card = state.currentCard;
  dom.armStatus.textContent = 'Taking previous information away';

  if (card.parent === arm.cardSocket) {
    await moveArmTo(new THREE.Vector3(4.75, 4.12, -1.45), 560, { wristRoll: 0.08 });
    if (token !== state.sequence) return;
    scene.attach(card);
    state.heldCard = null;
    await setGrip(0.22, 120);
  }

  const awayPosition = RACK_TARGET.clone().add(new THREE.Vector3(0.7, -0.1, -0.45));
  const awayQuaternion = worldFacingQuaternion(awayPosition);
  await tweenObjectWorld(card, awayPosition, awayQuaternion, 300, 0.82);

  scene.remove(card);
  disposeCard(card);
  state.currentCard = null;
}

async function deliverCard(section, item) {
  const token = ++state.sequence;

  await takeOldCardAway(token);
  if (token !== state.sequence) return;

  const card = createInfoCard(section, item);
  card.position.copy(RACK_TARGET);
  card.quaternion.copy(worldFacingQuaternion(RACK_TARGET));
  card.scale.setScalar(0.88);
  scene.add(card);
  state.currentCard = card;

  dom.armStatus.textContent = 'Reaching for information';
  await setGrip(0.22, 80);
  await moveArmTo(RACK_TARGET.clone().add(new THREE.Vector3(0, 0.06, 0)), 680, {
    wristRoll: -0.08,
    wristYaw: 0.05
  });
  if (token !== state.sequence) return;

  dom.armStatus.textContent = 'Grabbing information';
  await setGrip(0.095, 150);
  if (token !== state.sequence) return;

  /* the card now really becomes part of the gripper hierarchy */
  arm.cardSocket.attach(card);
  state.heldCard = card;

  /* snap the grab tab into the finger socket while preserving full card body */
  if (!state.reducedMotion) {
    const start = card.position.clone();
    const startQ = card.quaternion.clone();
    state.cardTweens.push({
      object: card,
      start: performance.now(),
      duration: 180,
      fromPos: start,
      toPos: new THREE.Vector3(0, 0.01, 0),
      fromQuat: startQ,
      toQuat: new THREE.Quaternion(),
      fromScale: card.scale.x,
      toScale: 1,
      local: true
    });
    await wait(180);
  } else {
    card.position.set(0, 0.01, 0);
    card.quaternion.identity();
    card.scale.setScalar(1);
  }

  if (token !== state.sequence) return;

  dom.armStatus.textContent = 'Bringing information to you';
  await moveArmTo(PRESENT_TARGET, 800, {
    wristRoll: -0.04,
    wristYaw: 0.02
  });
  if (token !== state.sequence) return;

  /* short handoff / throw-like overshoot */
  await moveArmTo(PRESENT_TARGET.clone().add(new THREE.Vector3(-0.18, 0.05, 0.28)), 170, {
    wristRoll: 0.02
  });
  if (token !== state.sequence) return;

  await moveArmTo(PRESENT_TARGET, 220, { wristRoll: -0.04 });

  dom.armStatus.textContent = 'Holding selected information';
  dom.live.textContent = `${item.title}. ${item.description}`;
}

function createModel(name) {
  switch(name) {
    case 'wildfire': return createWildfire();
    case 'pcb': return createPCB();
    case 'robot': return createRobot(false);
    case 'vex': return createRobot(true);
    case 'racket': return createRacket();
    case 'trombone': return createTrombone();
    case 'monkey': return createMonkey();
    case 'scope': return createScope();
    case 'portrait': return createPortrait();
    case 'resume': return createResume();
    case 'laptop': return createLaptop();
    case 'books': return createBooks();
    case 'circuit': return createCircuit();
    case 'envelope': return createEnvelope();
    case 'phone': return createPhone();
    case 'cubeStack': return createCubeStack();
    default: return createRobot(false);
  }
}

function createWildfire() {
  const g = new THREE.Group();
  const body=box(1.55,.78,1.15,.14,0x37424b,.7,.12); body.position.y=.45; g.add(body);
  const lid=box(1.6,.1,1.2,.07,0x56636d,.55,.18); lid.position.y=.88; g.add(lid);
  const screen=box(.42,.22,.03,.025,0x6f9bb3,.25,.12); screen.position.set(.42,.59,.59); screen.material.emissive.set(0x1b3847); screen.material.emissiveIntensity=.55; g.add(screen);
  const grille=box(.48,.30,.08,.03,0x15191d,.75,.05); grille.position.set(-.4,.55,.59); g.add(grille);
  for(let i=-2;i<=2;i++){ const vent=box(.045,.21,.015,.005,0x87939c,.45,.4); vent.position.set(-.4+i*.075,.55,.64); g.add(vent); }
  const ab=mesh(new THREE.CylinderGeometry(.095,.115,.16,16),0x171a1e,.4,.45); ab.position.set(.5,1,-.26); g.add(ab);
  const ant=mesh(new THREE.CylinderGeometry(.032,.041,1.5,12),0x121417,.5,.4); ant.position.set(.5,1.8,-.26); g.add(ant);
  return g;
}

function createPCB() {
  const g=new THREE.Group();
  const board=box(2,.12,1.25,.05,0x315e4d,.65,.12); board.position.y=.26; g.add(board);
  const chip=box(.62,.13,.62,.025,0x111417,.65,.08); chip.position.set(.04,.38,0); g.add(chip);
  const usb=box(.42,.23,.52,.035,0xaab0b4,.26,.8); usb.position.set(-.8,.4,0); g.add(usb);
  for(const z of[-.5,.5]) for(let i=0;i<10;i++){ const p=mesh(new THREE.CylinderGeometry(.02,.02,.24,8),0xc2a257,.2,.8); p.position.set(-.7+i*.155,.42,z); g.add(p); }
  for(let i=0;i<4;i++){ const cap=mesh(new THREE.CylinderGeometry(.065,.065,.14,12),i%2?0x2b333a:0xb88e4f,.45,.25); cap.position.set(.52+(i%2)*.19,.4,-.28+Math.floor(i/2)*.2); g.add(cap); }
  return g;
}

function createRobot(vex) {
  const g=new THREE.Group();
  const chassis=box(1.8,.42,1.25,.1,vex?0x3d4752:0x414b54,.43,.5); chassis.position.y=.58; g.add(chassis);
  const rail=box(1.92,.14,1.35,.04,0x60778d,.4,.38); rail.position.y=.37; g.add(rail);
  for(const [x,z] of [[-.75,-.55],[.75,-.55],[-.75,.55],[.75,.55]]){
    const wh=mesh(new THREE.CylinderGeometry(.31,.31,.24,24),0x15181b,.82,.08); wh.rotation.z=Math.PI/2; wh.position.set(x,.38,z); g.add(wh);
    const hub=mesh(new THREE.CylinderGeometry(.1,.1,.27,16),0xabb4bc,.25,.78); hub.rotation.z=Math.PI/2; hub.position.set(x,.38,z); g.add(hub);
  }
  if(vex){
    const tower=box(.7,1.2,.55,.05,0x687989,.45,.45); tower.position.set(0,1.25,0); g.add(tower);
    const claw=box(1.15,.16,.18,.04,0x8996a0,.35,.65); claw.position.set(0,1.85,.35); g.add(claw);
    const brace1=box(.14,1.2,.14,.03,0x8b969f,.34,.72); brace1.position.set(-.42,1.2,0); brace1.rotation.z=-.28; g.add(brace1);
    const brace2=brace1.clone(); brace2.position.x=.42; brace2.rotation.z=.28; g.add(brace2);
  } else {
    const deck=box(1.25,.12,.82,.05,0x315e4d,.67,.12); deck.position.y=.86; g.add(deck);
    const mast=box(.22,1.15,.22,.04,0x536f88,.4,.28); mast.position.y=1.45; g.add(mast);
    const cam=box(.7,.42,.48,.07,0x21262b,.36,.55); cam.position.y=2.03; g.add(cam);
    const lens=mesh(new THREE.CylinderGeometry(.16,.16,.16,20),0x6d96b4,.2,.7); lens.rotation.x=Math.PI/2; lens.position.set(0,2.03,.31); g.add(lens);
  }
  return g;
}

function createRacket() {
  const g=new THREE.Group();
  const frame=mesh(new THREE.TorusGeometry(.67,.05,12,56),0xaeb8c0,.3,.62); frame.scale.y=1.28; frame.position.y=1.72; g.add(frame);
  const lm=new THREE.LineBasicMaterial({color:0x88949e,transparent:true,opacity:.68});
  for(let i=-5;i<=5;i++){const x=i*.1,n=x/.62,h=Math.sqrt(Math.max(0,1-n*n))*.8;g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,1.72-h,0),new THREE.Vector3(x,1.72+h,0)]),lm.clone()));}
  for(let i=-7;i<=7;i++){const y=i*.1,n=y/.8,w=Math.sqrt(Math.max(0,1-n*n))*.62;g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-w,1.72+y,0),new THREE.Vector3(w,1.72+y,0)]),lm.clone()));}
  const shaft=mesh(new THREE.CylinderGeometry(.026,.033,1.05,12),0xb3bdc5,.28,.72); shaft.position.y=.82; g.add(shaft);
  const handle=mesh(new THREE.CylinderGeometry(.058,.073,.7,14),0x202429,.78,.04); handle.position.y=.3; g.add(handle); g.rotation.z=-.12; return g;
}

function createTrombone() {
  const g=new THREE.Group(), brass=0xa98b4c;
  for(const y of[.84,1.12]){const t=mesh(new THREE.CylinderGeometry(.032,.032,2.15,12),brass,.24,.78);t.rotation.z=Math.PI/2;t.position.set(-.04,y,0);g.add(t);}
  for(const x of[-.48,.2]){const b=mesh(new THREE.CylinderGeometry(.022,.022,.28,10),0x816a39,.24,.75);b.position.set(x,.98,0);g.add(b);}
  const bell=mesh(new THREE.ConeGeometry(.42,.72,34,1,true),brass,.22,.82);bell.rotation.z=-Math.PI/2;bell.position.set(1.34,1.12,0);g.add(bell);
  const rim=mesh(new THREE.TorusGeometry(.42,.024,10,38),0xc4a15d,.2,.85);rim.rotation.y=Math.PI/2;rim.position.set(1.7,1.12,0);g.add(rim);
  const bend=mesh(new THREE.TorusGeometry(.14,.032,10,28,Math.PI),brass,.22,.82);bend.rotation.set(Math.PI/2,0,Math.PI/2);bend.position.set(-1.15,.98,0);g.add(bend); return g;
}

function createMonkey(){
  const g=new THREE.Group(),brown=0x7f736b,light=0xa6988e;
  const head=mesh(new THREE.IcosahedronGeometry(.64,2),brown,.72,.04);head.scale.set(1.02,.95,.82);head.position.y=1.12;g.add(head);
  for(const x of[-.42,.42]){const cheek=mesh(new THREE.IcosahedronGeometry(.31,1),brown,.73,.04);cheek.scale.set(.9,1.05,.78);cheek.position.set(x,.96,.32);g.add(cheek);const ear=mesh(new THREE.IcosahedronGeometry(.28,1),brown,.73,.04);ear.scale.set(.55,.95,.32);ear.position.set(x<0?-.74:.74,1.13,0);g.add(ear);}
  const muzzle=mesh(new THREE.IcosahedronGeometry(.43,2),light,.77,.03);muzzle.scale.set(1.08,.6,.72);muzzle.position.set(0,.91,.54);g.add(muzzle);return g;
}

function createScope(){
  const g=new THREE.Group();const body=box(1.7,1.05,1.15,.11,0x39434c,.58,.24);body.position.y=.58;g.add(body);
  const screen=box(.95,.55,.025,.04,0x365f6f,.25,.08);screen.position.set(-.22,.68,.59);screen.material.emissive.set(0x18333b);screen.material.emissiveIntensity=.6;g.add(screen);
  for(let i=0;i<3;i++){const k=mesh(new THREE.CylinderGeometry(.09,.09,.08,18),0x8d9aa4,.35,.6);k.rotation.x=Math.PI/2;k.position.set(.55,.78-i*.25,.61);g.add(k);} return g;
}

function createPortrait(){
  const g=new THREE.Group();const torso=box(1.3,.82,.68,.2,0x4d5e6b,.72,.06);torso.position.y=.46;g.add(torso);
  const neck=mesh(new THREE.CylinderGeometry(.18,.21,.3,16),0xb99a82,.85,.02);neck.position.y=1;g.add(neck);
  const head=mesh(new THREE.IcosahedronGeometry(.47,3),0xc6a78e,.86,.02);head.scale.set(.9,1.08,.86);head.position.y=1.43;g.add(head);
  const hair=mesh(new THREE.IcosahedronGeometry(.48,2),0x25282b,.85,.02);hair.scale.set(.93,.5,.89);hair.position.set(0,1.7,-.02);g.add(hair);return g;
}

function createResume(){const g=new THREE.Group();const paper=box(1.28,.035,1.72,.02,0xd7d9d8,.86,0);paper.position.y=.05;g.add(paper);[.72,.9,.8,.62,.93,.78,.88].forEach((l,i)=>{const ln=box(l,.015,.04,.006,i===0?0x37414a:0x747d84,.75,0);ln.position.set(-.1,.075,-.57+i*.18);g.add(ln);});return g;}
function createLaptop(){const g=new THREE.Group();const base=box(1.8,.09,1.12,.05,0x737b82,.32,.7);base.position.y=.11;g.add(base);const sg=new THREE.Group();sg.position.set(0,.17,-.49);sg.rotation.x=-.22;g.add(sg);const frame=box(1.68,1,.07,.06,0x30363b,.34,.62);frame.position.y=.51;sg.add(frame);const screen=box(1.5,.82,.015,.035,0x284d61,.25,.1);screen.position.set(0,.52,.045);screen.material.emissive.set(0x152e3c);screen.material.emissiveIntensity=.5;sg.add(screen);return g;}
function createBooks(){const g=new THREE.Group();[[1.35,.22,.82,0x516a7d],[1.18,.2,.78,0x765f58],[1.3,.21,.8,0x566754]].forEach(([w,h,d,c],i)=>{const b=box(w,h,d,.045,c,.76,.02);b.position.y=.11+i*.21;b.rotation.y=(i-1)*.06;g.add(b);});return g;}
function createCircuit(){const g=new THREE.Group();const board=box(1.85,.09,1.15,.04,0x4e5d66,.72,.06);board.position.y=.18;g.add(board);const op=box(.55,.14,.4,.025,0x171a1e,.62,.08);op.position.set(-.28,.3,0);g.add(op);for(const x of[.3,.55]){const cap=mesh(new THREE.CylinderGeometry(.07,.07,.23,14),0x7f8f9b,.38,.4);cap.position.set(x,.34,-.2);g.add(cap);}for(let i=0;i<4;i++){const r=box(.36,.06,.08,.018,0x9a8c6a,.62,.12);r.position.set(.25+(i%2)*.38,.31,.15+Math.floor(i/2)*.2);g.add(r);}return g;}
function createEnvelope(){const g=new THREE.Group();const e=box(1.62,.07,1.05,.05,0xd7d8d5,.82,0);e.position.y=.07;g.add(e);return g;}
function createPhone(){const g=new THREE.Group();const b=box(.6,.09,1.18,.1,0x242a30,.35,.68);b.position.y=.07;g.add(b);const s=box(.51,.016,1,.08,0x315668,.25,.1);s.position.y=.125;s.material.emissive.set(0x18313c);s.material.emissiveIntensity=.5;g.add(s);return g;}
function createCubeStack(){const g=new THREE.Group();[[0x58738c,-.5,.3],[0x7a8791,.1,.3],[0x596b60,.67,.3],[0x6f677b,-.2,.85],[0x82735e,.4,.87]].forEach(([c,x,y],i)=>{const q=box(.54,.54,.54,.06,c,.54,.14);q.position.set(x,y,0);q.rotation.set(i*.06,i*.11,i*.04);g.add(q);});return g;}

function disposeGroup(group) {
  if (!group) return;
  group.traverse?.(child => {
    child.geometry?.dispose?.();
    if (Array.isArray(child.material)) {
      child.material.forEach(mat => mat.dispose?.());
    } else {
      child.material?.dispose?.();
    }
  });
}

/* =========================================================
   CONTEXTUAL LAB PROPS
========================================================= */

function clearProps() {
  if (!state.propGroup) return;
  scene.remove(state.propGroup);
  disposeGroup(state.propGroup);
  state.propGroup = null;
}

function loadProps(section) {
  clearProps();

  const group = new THREE.Group();
  group.userData.props = [];
  const layout = PROP_LAYOUTS[section] || PROP_LAYOUTS.home;

  layout.forEach(([modelName, itemId, x, y, z, scale]) => {
    const object = createModel(modelName);
    object.position.set(x, y, z);
    object.scale.setScalar(scale);
    object.rotation.y = x < 0 ? 0.35 : -0.35;
    object.userData.itemId = itemId;
    group.add(object);
    group.userData.props.push(object);
  });

  scene.add(group);
  state.propGroup = group;
}

/* =========================================================
   NAVIGATION
========================================================= */

function currentItem() {
  return CONTENT[state.section][state.index];
}

function renderSidebar() {
  dom.sidebar.replaceChildren();

  NAV_SECTIONS.forEach(([section, icon, label]) => {
    const block = document.createElement('div');
    block.className = 'nav-section';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-section-button';
    button.dataset.section = section;
    button.innerHTML = `
      <span class="nav-icon">${icon}</span>
      <span class="nav-label">${label}</span>
      <span class="nav-caret">${CONTENT[section].length > 1 ? '⌄' : ''}</span>
    `;
    button.addEventListener('click', () => setSelection(section, 0));
    block.appendChild(button);

    if (CONTENT[section].length > 1) {
      const children = document.createElement('div');
      children.className = 'nav-children';

      CONTENT[section].forEach((item, index) => {
        const child = document.createElement('button');
        child.type = 'button';
        child.className = 'nav-child';
        child.dataset.section = section;
        child.dataset.itemId = item.id;
        child.textContent = item.label;
        child.addEventListener('click', () => setSelection(section, index));
        children.appendChild(child);
      });

      block.appendChild(children);
    }

    dom.sidebar.appendChild(block);
  });

  updateSidebar();
}

function updateSidebar() {
  document.querySelectorAll('.nav-section-button').forEach(button => {
    button.classList.toggle('is-active', button.dataset.section === state.section);
  });

  document.querySelectorAll('.nav-child').forEach(button => {
    button.classList.toggle(
      'is-active',
      button.dataset.section === state.section && button.dataset.itemId === currentItem().id
    );
  });
}

function setSelection(section, index = 0, updateHash = true) {
  if (!CONTENT[section]) section = 'home';

  const sectionChanged = section !== state.section || !state.propGroup;
  state.section = section;
  state.index = Math.max(0, Math.min(index, CONTENT[section].length - 1));

  if (sectionChanged) loadProps(section);
  updateSidebar();

  const item = currentItem();
  dom.sceneLabel.textContent = `${section.toUpperCase()} · ${item.label.toUpperCase()}`;
  deliverCard(section, item);

  if (updateHash) {
    history.replaceState(null, '', `#${section}/${item.id}`);
  }
}

function readHash() {
  const raw = location.hash.replace(/^#/, '');
  if (!raw) {
    setSelection('home', 0, false);
    return;
  }

  const [section, id] = raw.split('/');
  if (!CONTENT[section]) {
    setSelection('home', 0, false);
    return;
  }

  const found = CONTENT[section].findIndex(item => item.id === id);
  setSelection(section, found >= 0 ? found : 0, false);
}

window.addEventListener('hashchange', readHash);

document.querySelector('[data-home-link]').addEventListener('click', event => {
  event.preventDefault();
  setSelection('home', 0);
});

/* =========================================================
   CLICKABLE 3D PROPS
========================================================= */

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let pointerDown = { x: 0, y: 0 };

function raycastProp(event) {
  if (!state.propGroup) return null;

  const rect = dom.canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  const hits = raycaster.intersectObjects(state.propGroup.children, true);
  for (const hit of hits) {
    let object = hit.object;
    while (object && object !== state.propGroup) {
      if (object.userData?.itemId) return object;
      object = object.parent;
    }
  }
  return null;
}

dom.canvas.addEventListener('pointerdown', event => {
  pointerDown = { x: event.clientX, y: event.clientY };
});

dom.canvas.addEventListener('pointerup', event => {
  if (Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y) > 6) return;
  const prop = raycastProp(event);
  if (!prop) return;

  const index = CONTENT[state.section].findIndex(item => item.id === prop.userData.itemId);
  if (index >= 0) setSelection(state.section, index);
});

dom.canvas.addEventListener('pointermove', event => {
  dom.canvas.style.cursor = raycastProp(event) ? 'pointer' : 'grab';
});

/* =========================================================
   BLENDER-STYLE OBJECT SPAWNING + SIMPLE PHYSICS
========================================================= */

const BOUNDS = 7.4;

function spawnShape(kind) {
  let object;

  switch (kind) {
    case 'plane':
      object = box(1.3, 0.1, 1.3, 0.03, 0x69737d, 0.8, 0.05);
      break;
    case 'circle':
      object = mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.1, 32), 0x7a746c, 0.65, 0.12);
      break;
    case 'sphere':
      object = mesh(new THREE.SphereGeometry(0.6, 26, 18), 0x62766a, 0.52, 0.12);
      break;
    case 'icosphere':
      object = mesh(new THREE.IcosahedronGeometry(0.63, 2), 0x596f82, 0.5, 0.16);
      break;
    case 'cylinder':
      object = mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.1, 24), 0x766b6b, 0.55, 0.16);
      break;
    case 'cone':
      object = mesh(new THREE.ConeGeometry(0.62, 1.2, 26), 0x7d755f, 0.55, 0.16);
      break;
    case 'torus':
      object = mesh(new THREE.TorusGeometry(0.53, 0.18, 16, 42), 0x706879, 0.5, 0.2);
      break;
    case 'monkey':
      object = createMonkey();
      object.scale.setScalar(0.8);
      break;
    default:
      object = box(1, 1, 1, 0.06, 0x596f82, 0.5, 0.18);
  }

  object.userData.radius = 0.72;
  object.position.set((Math.random() - 0.5) * 3, 4 + Math.random(), (Math.random() - 0.5) * 2.5);
  object.rotation.set(Math.random(), Math.random(), Math.random());
  object.userData.velocity = new THREE.Vector3((Math.random() - 0.5) * 1.4, 0, (Math.random() - 0.5) * 1.4);
  object.userData.angular = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(1.5);

  scene.add(object);
  state.spawned.push(object);
  state.selectedSpawn = object;
  closeAddMenu();

  if (state.spawned.length > 14) {
    const oldest = state.spawned.shift();
    scene.remove(oldest);
    disposeGroup(oldest);
  }
}

function updatePhysics(dt) {
  state.spawned.forEach(object => {
    const velocity = object.userData.velocity;
    const angular = object.userData.angular;
    const radius = object.userData.radius || 0.6;

    velocity.y += -7.7 * dt;
    object.position.addScaledVector(velocity, dt);
    object.rotation.x += angular.x * dt;
    object.rotation.y += angular.y * dt;
    object.rotation.z += angular.z * dt;

    if (object.position.y - radius < 0) {
      object.position.y = radius;
      if (velocity.y < 0) velocity.y *= -0.42;
      velocity.x *= 0.986;
      velocity.z *= 0.986;
      angular.multiplyScalar(0.992);
    }

    for (const axis of ['x', 'z']) {
      if (object.position[axis] + radius > BOUNDS) {
        object.position[axis] = BOUNDS - radius;
        velocity[axis] = -Math.abs(velocity[axis]) * 0.54;
      } else if (object.position[axis] - radius < -BOUNDS) {
        object.position[axis] = -BOUNDS + radius;
        velocity[axis] = Math.abs(velocity[axis]) * 0.54;
      }
    }
  });
}

function tossSelected() {
  const object = state.selectedSpawn;
  if (!object) return;
  object.userData.velocity.set((Math.random() - 0.5) * 3.2, 5.3, (Math.random() - 0.5) * 3.2);
}

function spinSelected() {
  const object = state.selectedSpawn;
  if (!object) return;
  object.userData.angular.add(new THREE.Vector3(0.7, 1.4, 0.35));
}

function deleteSelected() {
  const object = state.selectedSpawn;
  if (!object) return;
  scene.remove(object);
  state.spawned = state.spawned.filter(item => item !== object);
  disposeGroup(object);
  state.selectedSpawn = state.spawned.at(-1) || null;
}

function openAddMenu() {
  state.addOpen = true;
  dom.addMenu.hidden = false;
  dom.addObject.setAttribute('aria-expanded', 'true');
}

function closeAddMenu() {
  state.addOpen = false;
  dom.addMenu.hidden = true;
  dom.addObject.setAttribute('aria-expanded', 'false');
}

dom.addObject.addEventListener('click', () => state.addOpen ? closeAddMenu() : openAddMenu());
dom.addMenu.querySelectorAll('[data-add]').forEach(button => {
  button.addEventListener('click', () => spawnShape(button.dataset.add));
});

/* =========================================================
   HELP + KEYBOARD
========================================================= */

function toggleHelp(force) {
  const show = typeof force === 'boolean' ? force : dom.helpPanel.hidden;
  dom.helpPanel.hidden = !show;
  dom.helpButton.setAttribute('aria-expanded', String(show));
}

dom.helpButton.addEventListener('click', () => toggleHelp());

window.addEventListener('keydown', event => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;

  if (event.key.toLowerCase() === 'h') {
    toggleHelp();
    return;
  }

  if (event.shiftKey && event.key.toLowerCase() === 'a') {
    event.preventDefault();
    openAddMenu();
    return;
  }

  if (state.addOpen && /^[1-9]$/.test(event.key)) {
    const names = ['plane', 'cube', 'circle', 'sphere', 'icosphere', 'cylinder', 'cone', 'torus', 'monkey'];
    spawnShape(names[Number(event.key) - 1]);
    return;
  }

  if (event.key.toLowerCase() === 'g') tossSelected();
  if (event.key.toLowerCase() === 'r') spinSelected();
  if (event.key.toLowerCase() === 'x') deleteSelected();
  if (event.key === 'Escape') {
    closeAddMenu();
    toggleHelp(false);
  }
});

document.addEventListener('pointerdown', event => {
  if (state.addOpen && !dom.addMenu.contains(event.target) && !dom.addObject.contains(event.target)) {
    closeAddMenu();
  }
});

/* =========================================================
   RESET + RESIZE
========================================================= */

dom.resetView.addEventListener('click', () => {
  camera.position.set(9.7, 5.9, 12.4);
  controls.target.set(0.65, 2.0, 0.0);
  controls.update();
});

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);

/* =========================================================
   ANIMATION TWEENS
========================================================= */

function updateArmTween(now) {
  if (!state.armTween) return;

  const tween = state.armTween;
  const t = Math.min(1, (now - tween.start) / tween.duration);
  const e = easeOutCubic(t);

  arm.baseYaw.rotation.y = THREE.MathUtils.lerp(tween.from.baseYaw, tween.to.baseYaw, e);
  arm.joints.forEach((joint, i) => {
    joint.rotation.z = THREE.MathUtils.lerp(tween.from.joints[i], tween.to.joints[i], e);
  });
  arm.wristPitch.rotation.z = THREE.MathUtils.lerp(tween.from.wristPitch, tween.to.wristPitch, e);
  arm.wristYaw.rotation.y = THREE.MathUtils.lerp(tween.from.wristYaw, tween.to.wristYaw, e);
  arm.wristRoll.rotation.y = THREE.MathUtils.lerp(tween.from.wristRoll, tween.to.wristRoll, e);

  if (t >= 1) state.armTween = null;
}

function updateGripTween(now) {
  if (!state.gripTween) return;
  const tween = state.gripTween;
  const t = Math.min(1, (now - tween.start) / tween.duration);
  setGripInstant(THREE.MathUtils.lerp(tween.from, tween.to, easeOutCubic(t)));
  if (t >= 1) state.gripTween = null;
}

function updateCardTweens(now) {
  state.cardTweens = state.cardTweens.filter(tween => {
    const t = Math.min(1, (now - tween.start) / tween.duration);
    const e = easeOutCubic(t);

    tween.object.position.lerpVectors(tween.fromPos, tween.toPos, e);
    tween.object.quaternion.slerpQuaternions(tween.fromQuat, tween.toQuat, e);
    tween.object.scale.setScalar(THREE.MathUtils.lerp(tween.fromScale, tween.toScale, e));

    return t < 1;
  });
}

/* =========================================================
   MAIN LOOP
========================================================= */

let previousTime = performance.now();

function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min(0.033, (now - previousTime) / 1000);
  previousTime = now;

  controls.update();
  updateArmTween(now);
  updateGripTween(now);
  updateCardTweens(now);
  updatePhysics(dt);
  alignHeldCardToCamera();

  renderer.render(scene, camera);
}

/* =========================================================
   INIT
========================================================= */

renderSidebar();
resize();
readHash();
requestAnimationFrame(animate);
