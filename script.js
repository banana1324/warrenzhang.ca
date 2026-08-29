import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBB } from 'three/addons/math/OBB.js';

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
    title: 'Software, embedded systems & robotics.',
    meta: 'Computer Science · University of Waterloo · Richmond, BC',
    description: 'I am most interested in the point where software reaches the physical world—robots, sensors, radios, circuits, and the people who rely on them. My work combines embedded development, robotics, technical communication, and hands-on debugging.',
    tags: ['Python', 'C/C++', 'Embedded', 'Robotics', 'Computer Vision'],
    metrics: [['$195K+', 'Kickstarter funding contributed to'], ['446', 'campaign backers'], ['200+', 'badminton coaching hours']],
    details: [
      'Developed software across ESP32, RP2040, Arduino Uno, and Raspberry Pi platforms.',
      'Built projects spanning LoRaWAN sensing, computer vision, robotics, circuit verification, and educational software.',
      'Use a deliberate debugging process: measure, change one variable, test, document, and explain the result.',
      'Also teach and mentor through Physics 11, badminton coaching, and technical learning materials.'
    ],
    model: 'home'
  }],

  about: [{
    id: 'about',
    label: 'About',
    title: 'Curious about the system behind the screen.',
    meta: 'Computer Science · Systems · Teaching · Building',
    description: 'I started by taking apart computers because I wanted to know what was happening inside them. That curiosity grew into embedded software, robotics, circuit analysis, teaching, and projects where the quality of an explanation matters almost as much as the code.',
    tags: ['Systems Thinking', 'Debugging', 'Teaching', 'Hardware + Software'],
    metrics: [['3 years', 'VEX robotics'], ['2 years', 'EIM Technology'], ['Physics 11', 'teaching assistant']],
    details: [
      'As a Physics 11 teaching assistant, I learned to return to definitions, sketches, and multiple explanations until an idea clicks.',
      'Worked with a small group on an Arduino-based accessibility project for blind and low-vision goalball athletes using sound and vibration feedback.',
      'Enjoy projects that force me to move between code, electronics, communication, mechanics, and user needs.',
      'Outside engineering, I coach badminton, perform trombone, and create 3D work in Blender.'
    ],
    model: 'about'
  }],

  projects: [
    {
      id: 'wildfire',
      label: 'Wildfire Detection',
      title: 'Wildfire Detection System',
      meta: 'Personal Project · Nov 2025 – May 2026 · C++ · LoRaWAN · Raspberry Pi · BME680',
      description: 'Developed an end-to-end IoT wildfire-monitoring system that captures environmental data, sends it over long-range radio, and processes it through a Raspberry Pi gateway into a dashboard.',
      tags: ['C++', 'BME680', 'LoRaWAN', 'MQTT', 'Node-RED'],
      metrics: [['BME680', 'environmental sensing'], ['LoRaWAN', 'long-range data link'], ['MQTT + Node-RED', 'processing + dashboard']],
      details: [
        'Developed environmental monitoring around a BME680 sensor.',
        'Configured a LoRaWAN sensor node and Raspberry Pi gateway for long-range data transmission.',
        'Integrated MQTT and Node-RED to process and visualize sensor data.',
        'Built the dashboard and tested the full sensor-to-network-to-visualization path end to end.'
      ],
      model: 'wildfire'
    },
    {
      id: 'kc15',
      label: 'KC15',
      title: 'KC15 RP2040 Learning Platform',
      meta: 'EIM Technology · Embedded Software · RP2040 · Python / MicroPython',
      description: 'Built software for an RP2040-based educational platform designed for students. The work had to be reliable on physical hardware and understandable enough for a learner to reproduce from the accompanying tutorial.',
      tags: ['RP2040', 'MicroPython', 'Python', 'Testing', 'Technical Writing'],
      metrics: [['15', 'apps + games built'], ['15', 'tutorials produced'], ['RP2040', 'hardware compatibility verified']],
      details: [
        'Built and debugged 15 applications and games for the KC15 learning kit.',
        'Ensured Raspberry Pi Pico / RP2040 compatibility across the software projects.',
        'Created a tutorial for each project so students could reproduce and understand the implementation.',
        'Debugged timing, logic, and hardware interaction issues instead of treating the code as a desktop-only exercise.'
      ],
      model: 'kc15'
    },
    {
      id: 'vision',
      label: 'Vision Robotics',
      title: 'Computer Vision Robotics',
      meta: 'AI Exploration · Hand Landmark Tracking · Face Recognition · Facial Expression Classification',
      description: 'Built an early AI and computer-vision project to become more familiar with perception systems, then connected the visual output to robotic behavior rather than stopping at classification.',
      tags: ['Computer Vision', 'Hand Tracking', 'Face Recognition', 'Emotion Classification', 'Robotics'],
      metrics: [['Finger count', 'gesture interpretation'], ['Face ID', 'identity recognition'], ['Emotion', 'facial-expression classification']],
      details: [
        'Detected hand landmarks and inferred how many fingers a user was holding up.',
        'Recognized the identity of the person presenting the gesture.',
        'Classified facial expressions to estimate the visible emotional state of the user.',
        'Mapped perception results into commands for robotic systems, turning vision output into physical behavior.'
      ],
      model: 'vision'
    },
    {
      id: 'analog',
      label: 'Analog Circuits',
      title: 'Analog Circuit II: Signals, Systems & Filters',
      meta: 'EVO-IN-MOTION · Technical Verification / Student Reviewer · Kickstarter Project',
      description: 'Supported the technical verification of an analog electronics learning project, checking both engineering accuracy and whether the material would make sense to a student encountering the concepts for the first time.',
      tags: ['Op-Amps', 'MOSFETs', 'BJTs', 'Diodes', 'Laplace + Fourier'],
      metrics: [['Circuit verification', 'diagrams + teaching points'], ['Oscilloscope', 'results + screenshots'], ['Transforms', 'Laplace + Fourier analysis']],
      details: [
        'Verified circuit diagrams, teaching points, labels, and technical text for accuracy and presentation.',
        'Recorded numerical results and oscilloscope screenshots to confirm circuit behavior.',
        'Worked with operational amplifiers, MOSFETs, BJTs, and multiple diode types.',
        'Applied Laplace and Fourier transforms and elements of complex analysis, while communicating errors and possible improvements to the team.'
      ],
      model: 'analog'
    }
  ],

  experience: [
    {
      id: 'eim',
      label: 'EIM Technology',
      title: 'Technical Support Intern · EIM Technology',
      meta: 'Richmond, BC · Nov 2024 – Jun 2026 · 4–5 hrs/week during Grades 11–12',
      description: 'Worked across embedded software, hardware integration, technical verification, educational content, AI experimentation, and product media for a hands-on technology education company.',
      tags: ['Embedded Software', 'RP2040', 'ESP32', 'LoRaWAN', 'Hardware Debugging'],
      metrics: [['$195K+', 'Kickstarter funding'], ['446', 'campaign backers'], ['3', 'campaigns contributed to']],
      details: [
        'Developed embedded software for ESP32, Raspberry Pi Pico (RP2040), Arduino Uno, and Raspberry Pi using Python, MicroPython, and Arduino C/C++.',
        'Built and debugged 15 KC15 apps and games, created tutorials for each, and verified RP2040 compatibility.',
        'Integrated sensors and LoRaWAN systems and diagnosed hardware / communication issues with oscilloscopes and logic analyzers.',
        'Debugged AI software, reviewed instructional content, and contributed product-demo filming and promotional photography.'
      ],
      model: 'eim'
    },
    {
      id: 'vex',
      label: 'VEX V5 Robotics Competition',
      title: 'VEX V5 Robotics Competition · 4471A Eagles',
      meta: '3 years · Control Software · CAD · PID · Odometry · Autonomous',
      description: 'Our five-person team began in a friend’s garage with no coach and finished our first tournament 59th out of 59. We rebuilt repeatedly, became our school’s official robotics team, and later won tournament and skills championships along with design and judges awards.',
      tags: ['VEX V5', 'PID', 'Odometry', 'CAD', 'Autonomous'],
      metrics: [['59 / 59', 'first tournament'], ['Tournament Champion', 'later competition result'], ['Skills + Design', 'championship / award recognition']],
      details: [
        'Wrote major parts of the robot control system, including PID motion control and odometry for reliable autonomous positioning.',
        'Served as a primary CAD designer and pushed the team toward proper CAD planning instead of relying only on rough sketches.',
        'Debugged failures across software, sensors, motors, and mechanics using build logs and one-variable-at-a-time testing.',
        'Helped keep a small, mentor-less team working together through repeated tournament failures until we became an official school team and tournament champion.'
      ],
      model: 'vex'
    },
    {
      id: 'coaching',
      label: 'Badminton Coach',
      title: 'Badminton Coach · Stage18 Badminton Center',
      meta: 'Richmond, BC · May 2024 – May 2026 · Intermediate Group',
      description: 'Coached young athletes in group lessons, adapting explanations to different confidence levels and using competition moments to teach sportsmanship, self-control, and resilience as well as technique.',
      tags: ['Coaching', 'Communication', 'Leadership', 'Sportsmanship'],
      metrics: [['200+', 'coaching hours'], ['40+', 'students coached'], ['Ages 7–15', 'student range']],
      details: [
        'Coached 40+ students across more than 200 hours of group instruction.',
        'Adjusted demonstrations and explanations for competitive, hesitant, energetic, and less-confident athletes.',
        'Used disagreements and line-call disputes as opportunities to reinforce sportsmanship and respectful resets.',
        'Helped students grow in confidence and character, including a player who progressed from reacting poorly to losses to shaking an opponent’s hand and focusing on what he learned.'
      ],
      model: 'coaching'
    },
    {
      id: 'orchestra',
      label: 'Orchestra',
      title: 'Trombone · School Band & Vancouver Chinese Philharmonic Orchestra',
      meta: '6 years · First Trombone (school) · Second Trombone (VCPO)',
      description: 'Started trombone in Grade 6 with no idea how to play and developed largely through self-directed practice. I now perform as first trombone at school and second trombone with the Vancouver Chinese Philharmonic Orchestra.',
      tags: ['Trombone', 'Orchestra', 'Performance', 'Mentoring'],
      metrics: [['6 years', 'playing trombone'], ['2 musicals', 'Into the Woods + The Sound of Music'], ['Disney + Sun Peaks', 'concert performances']],
      details: [
        'Perform as first trombone in my school band and mentor younger players on tone, breath control, and confidence.',
        'Perform as second trombone with the Vancouver Chinese Philharmonic Orchestra.',
        'Performed with the orchestra at an event for the Consulate-General of the People’s Republic of China in Vancouver.',
        'Additional performances include Disney Anaheim, Sun Peaks, Into the Woods, and The Sound of Music; I continue to practice daily.'
      ],
      model: 'orchestra'
    }
  ],

  interests: [
    {
      id: 'blender',
      label: 'Blender',
      title: 'Blender · Physics · Armatures',
      meta: 'Personal 3D Work · Rigid Bodies · Rigging · Mechanical Motion',
      description: 'I started Blender for fun and became especially interested in scenes that behave like systems: rigid-body collisions, armatures, constraints, and mechanical motion rather than static renders.',
      tags: ['Rigid Bodies', 'Armatures', 'Constraints', '3D Animation'],
      metrics: [['2K+', 'views on one Blender video'], ['Physics', 'rigid-body simulation'], ['Rigging', 'armatures + motion']],
      details: [
        'Experiment with rigid-body simulations, collision behavior, and physically driven scenes.',
        'Use armatures and constraints to build controlled mechanical motion.',
        'One of my Blender videos has received more than 2,000 views.',
        'The robotic page-switching concept on this portfolio grew directly from this interest in physical interface behavior.'
      ],
      model: 'blender'
    },
    {
      id: 'hardware',
      label: 'Hardware',
      title: 'Hardware gives software consequences.',
      meta: 'ESP32 · RP2040 · Arduino · Raspberry Pi · Sensors · Debugging Tools',
      description: 'I enjoy the point where code has to survive contact with real electronics. A bug may come from firmware, timing, wiring, communication, signal quality, or the environment—not just one line of code.',
      tags: ['ESP32', 'RP2040', 'Arduino', 'Oscilloscope', 'Logic Analyzer'],
      metrics: [['4 platforms', 'ESP32 / RP2040 / Arduino / Pi'], ['LoRaWAN', 'wireless integration'], ['Scope + analyzer', 'physical debugging']],
      details: [
        'Develop embedded software in Python, MicroPython, and C/C++ across multiple microcontroller platforms.',
        'Integrate sensors and long-range communication systems such as LoRaWAN.',
        'Use oscilloscopes and logic analyzers to diagnose hardware and communication issues.',
        'Enjoy tracing a failure across software and hardware until the underlying cause is understood.'
      ],
      model: 'hardware'
    },
    {
      id: 'music',
      label: 'Music',
      title: 'Music, teaching & live audio.',
      meta: 'Trombone · Ensemble Performance · Mentoring · Worship Audio',
      description: 'Music has taught me the same habits I value in engineering: listening carefully, practicing deliberately, adjusting in real time, and understanding how one part fits into a larger system.',
      tags: ['Trombone', 'Orchestra', 'Live Audio', 'Mentoring'],
      metrics: [['1st Trombone', 'school band'], ['2nd Trombone', 'VCPO'], ['Live sound', 'setup + troubleshooting']],
      details: [
        'Mentor younger trombone players on tone, breath support, and difficult passages.',
        'Perform in school and orchestral settings across multiple musical styles.',
        'Help with worship / live-audio setup, microphone levels, equipment order, teardown, and troubleshooting.',
        'Maintain a personal folder of trombone music and practice regularly outside scheduled rehearsals.'
      ],
      model: 'music'
    }
  ],

  contact: [{
    id: 'contact',
    label: 'Contact',
    title: 'Build something interesting with me.',
    meta: 'Software · Embedded · Robotics · AI',
    description: 'For software, embedded, robotics, or AI-related opportunities, email is the easiest way to reach me. GitHub, LinkedIn, YouTube, and my résumé are linked from the navigation.',
    tags: ['Email', 'GitHub', 'LinkedIn', 'YouTube'],
    metrics: [['Email', 'warrenz7980@gmail.com'], ['GitHub', 'banana1324'], ['YouTube', '@goosehjonk918']],
    details: [
      'Email: warrenz7980@gmail.com',
      'GitHub: github.com/banana1324',
      'LinkedIn: linkedin.com/in/fuyuanzhang',
      'YouTube: @goosehjonk918'
    ],
    model: 'contact'
  }]
};

const NAV = [
  ['home', '⌂', 'Home'],
  ['about', '●', 'About'],
  ['projects', '◇', 'Projects'],
  ['experience', '▣', 'Experience'],
  ['interests', '○', 'Interests'],
  ['contact', '@', 'Contact']
];

const FLAT_ITEMS = [];
for (const [section, items] of Object.entries(CONTENT)) {
  items.forEach((item, index) => FLAT_ITEMS.push({ section, index, item, key: `${section}/${item.id}` }));
}

const dom = {
  canvas: document.querySelector('#scene-canvas'),
  nav: document.querySelector('#nav-groups'),
  topbarTitle: document.querySelector('#topbar-title'),
  status: document.querySelector('#scene-status'),
  addObject: document.querySelector('#add-object'),
  addMenu: document.querySelector('#add-menu'),
  live: document.querySelector('#screen-reader-live')
};

const state = {
  section: 'home', index: 0,
  expanded: new Set(['projects', 'experience', 'interests']),
  stations: new Map(),
  selectedKey: null,
  busy: false,
  queued: null,
  heldBoard: null,
  heldStation: null,
  dockedBoard: null,
  boardSlideTweens: [],
  localTweens: [],
  armTween: null,
  gripTween: null,
  heldFollow: null,
  addOpen: false,
  spawned: [],
  selectedSpawn: null,
  reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches
};

const renderer = new THREE.WebGLRenderer({ canvas: dom.canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
renderer.setClearColor(0x090c11, 1);
renderer.setScissorTest(true);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x0c1215, 18, 38);

const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
camera.position.set(1.3, 5.15, 14.35);
const CAMERA_TARGET = new THREE.Vector3(1.45, 2.08, 1.56);
camera.lookAt(CAMERA_TARGET);

scene.add(new THREE.HemisphereLight(0xf9fbff, 0x262117, 2.2));
const keyLight = new THREE.DirectionalLight(0xffefd8, 3.75);
keyLight.position.set(0, 10.5, 7.2);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -10;
keyLight.shadow.camera.right = 10;
keyLight.shadow.camera.top = 10;
keyLight.shadow.camera.bottom = -10;
scene.add(keyLight);
const fillLight = new THREE.PointLight(0x6eb4aa, 8.2, 20);
fillLight.position.set(0, 5.4, 3.8);
scene.add(fillLight);
const rimLight = new THREE.DirectionalLight(0xe2c79d, .72);
rimLight.position.set(5.5, 5.2, -3.5);
scene.add(rimLight);

function mat(color, roughness = .55, metalness = .15) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}
function mesh(geometry, color, roughness = .55, metalness = .15) {
  const o = new THREE.Mesh(geometry, mat(color, roughness, metalness));
  o.castShadow = true;
  o.receiveShadow = true;
  return o;
}
function box(w, h, d, r, color, rough = .55, metal = .15) {
  return mesh(new RoundedBoxGeometry(w, h, d, 5, r), color, rough, metal);
}
function cylinderBetween(a, b, radius, color, rough = .32, metal = .75) {
  const d = b.clone().sub(a);
  const len = d.length();
  const o = mesh(new THREE.CylinderGeometry(radius, radius, len, 28), color, rough, metal);
  o.position.copy(a).add(b).multiplyScalar(.5);
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  return o;
}
function tubePath(points, radius = .08, color = 0x151b22, rough = .52, metal = .18) {
  const curve = new THREE.CatmullRomCurve3(points);
  return mesh(new THREE.TubeGeometry(curve, 32, radius, 18, false), color, rough, metal);
}
function disposeObject(object) {
  object?.traverse(child => {
    child.geometry?.dispose?.();
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    mats.filter(Boolean).forEach(m => { m.map?.dispose?.(); m.dispose?.(); });
  });
}

// ---------- environment ----------
const floor = box(18.8, .24, 13.2, .08, 0x273237, .90, .04);
floor.position.set(0, -.12, 1.35);
scene.add(floor);
const grid = new THREE.GridHelper(18.2, 28, 0x56636a, 0x364147);
grid.position.set(0, .012, 1.4);
grid.scale.z = .70;
grid.material.opacity = .30;
grid.material.transparent = true;
scene.add(grid);
const rear = box(17.0, 5.6, .14, .05, 0x20272a, .88, .03);
rear.position.set(0, 2.70, -3.1);
scene.add(rear);
const sideL = box(.14, 5.6, 10.0, .05, 0x171d20, .90, .02); sideL.position.set(-8.5, 2.70, 1.4); scene.add(sideL);
const sideR = sideL.clone(); sideR.position.x = 8.5; scene.add(sideR);
const glow = mesh(new THREE.CircleGeometry(1.1, 40), 0x72a899, .4, .05);
glow.material.transparent = true; glow.material.opacity = .075; glow.position.set(0, 3.0, -2.96); scene.add(glow);
const hoseA = tubePath([new THREE.Vector3(-2.2,5.0,-2.96), new THREE.Vector3(-2.0,4.0,-2.0), new THREE.Vector3(-1.2,3.4,-1.4), new THREE.Vector3(-.45,2.5,-.82)], .065, 0x1b2225, .62, .08);
const hoseB = tubePath([new THREE.Vector3(2.2,5.0,-2.96), new THREE.Vector3(2.0,4.0,-2.0), new THREE.Vector3(1.2,3.4,-1.4), new THREE.Vector3(.45,2.5,-.82)], .065, 0x1b2225, .62, .08);
scene.add(hoseA, hoseB);

const warmPool = new THREE.PointLight(0xe4b873, 4.8, 9);
warmPool.position.set(4.2, 2.4, 3.8);
scene.add(warmPool);
const coolPool = new THREE.PointLight(0x77a999, 3.8, 8);
coolPool.position.set(-4.8, 2.1, 4.2);
scene.add(coolPool);

// ---------- arm ----------
const ARM = {
  base: new THREE.Vector3(-3.65, .64, -1.08),
  lengths: [1.96, 2.46, 2.18, 1.58],
  radius: [.34, .28, .24, .20]
};

const ARM_POSES = {
  // Parked high and to the left, like a large industrial arm waiting off the main stage.
  safe: [1.52, -.34, -.14, -.10],
  // Exact pickup pose for the docked page beside each topic object.
  pickup: [1.20, -.18, -.06, -.04],
  // Slightly raised / retracted pose used immediately after the page is grabbed.
  lift: [1.36, -.24, -.02, -.06],
  // Presentation pose toward the visitor.
  present: [1.00, -.12, .04, -.04]
};

const ARM_MOTION_SCALE = 2.45;
const GRIP_MOTION_SCALE = 1.65;
const BOARD_MOTION_SCALE = 1.25;

const armState = { yaw: 0.62, angles: [...ARM_POSES.safe], grip: .26 };
const armVisual = { root: null, links: [], joints: [], wrist: null, fl: null, fr: null, socket: null };

function buildArm() {
  const root = new THREE.Group();
  const plinth = mesh(new THREE.CylinderGeometry(.95, 1.18, .42, 46), 0x080a0e, .58, .28);
  plinth.position.copy(ARM.base).setY(.18);
  root.add(plinth);
  const column = mesh(new THREE.CylinderGeometry(.72, .62, 1.12, 38), 0x48575a, .48, .54);
  column.position.copy(ARM.base).setY(.62);
  root.add(column);
  const collar = mesh(new THREE.TorusGeometry(.75, .08, 20, 48), 0x8bb8aa, .28, .58);
  collar.position.copy(ARM.base).setY(1.14); collar.rotation.x = Math.PI / 2;
  root.add(collar);

  for (let i = 0; i < ARM.lengths.length; i++) {
    const link = mesh(new THREE.CylinderGeometry(ARM.radius[i], ARM.radius[i], 1, 34), 0x7f8c8c, .40, .62);
    root.add(link); armVisual.links.push(link);
    const joint = new THREE.Group();
    const shell = mesh(new THREE.SphereGeometry(ARM.radius[i] + .08, 28, 22), 0x060a10, .36, .36);
    joint.add(shell);
    const ring = mesh(new THREE.TorusGeometry(ARM.radius[i] + .075, .028, 18, 42), 0x9bc9bb, .24, .62);
    ring.rotation.x = Math.PI / 2; joint.add(ring);
    root.add(joint); armVisual.joints.push(joint);
  }

  const wrist = new THREE.Group();
  const wristBody = box(.38, .24, .58, .05, 0x090e15, .44, .32); wrist.add(wristBody);
  const wristCollar = mesh(new THREE.CylinderGeometry(.16, .16, .22, 24), 0x9bc9bb, .24, .62);
  wristCollar.rotation.z = Math.PI / 2; wristCollar.position.z = -.08; wrist.add(wristCollar);
  const fl = box(.10, .58, .10, .02, 0xcbd6df, .22, .6); fl.position.set(-.15, -.24, .12); wrist.add(fl);
  const fr = box(.10, .58, .10, .02, 0xcbd6df, .22, .6); fr.position.set(.15, -.24, .12); wrist.add(fr);
  const tipL = box(.08, .16, .16, .02, 0x0c1118, .46, .18); tipL.position.set(0, -.34, .10); fl.add(tipL);
  const tipR = box(.08, .16, .16, .02, 0x0c1118, .46, .18); tipR.position.set(0, -.34, .10); fr.add(tipR);
  const socket = new THREE.Object3D(); socket.position.set(0, -.47, .24); wrist.add(socket);
  root.add(wrist);
  armVisual.root = root; armVisual.wrist = wrist; armVisual.fl = fl; armVisual.fr = fr; armVisual.socket = socket;
  scene.add(root);
}

function forward2D(angles) {
  const pts = [new THREE.Vector2(0, 0)];
  let a = 0;
  for (let i = 0; i < angles.length; i++) {
    a += angles[i];
    const prev = pts[pts.length - 1];
    pts.push(new THREE.Vector2(prev.x + Math.cos(a) * ARM.lengths[i], prev.y + Math.sin(a) * ARM.lengths[i]));
  }
  return pts;
}
function nearestAngle(current, target) {
  return current + Math.atan2(Math.sin(target - current), Math.cos(target - current));
}
function armWorldPoints(yaw = armState.yaw, angles = armState.angles) {
  const p = forward2D(angles);
  const dir = new THREE.Vector3(Math.cos(yaw), 0, Math.sin(yaw));
  return p.map(q => ARM.base.clone().addScaledVector(dir, q.x).add(new THREE.Vector3(0, q.y, 0)));
}
function armSocketForPose(yaw, angles) {
  const end = armWorldPoints(yaw, angles).at(-1);
  // Mirrors the wrist visual transform used in updateArmVisual().
  const wristQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -yaw + Math.PI / 2, 0));
  const socketOffset = new THREE.Vector3(0, -.47, .24).applyQuaternion(wristQ);
  return end.clone().add(socketOffset);
}
function placeLink(o, a, b) {
  const d = b.clone().sub(a), len = d.length();
  const mid = a.clone().add(b).multiplyScalar(.5);
  o.position.copy(mid);
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize());
  o.scale.set(1, Math.max(.1, len - .20), 1);
}
function updateArmVisual() {
  const p = armWorldPoints();
  armVisual.links.forEach((l, i) => placeLink(l, p[i], p[i + 1]));
  armVisual.joints.forEach((j, i) => { j.position.copy(p[i]); j.rotation.y = -armState.yaw; });
  const end = p[p.length - 1];
  armVisual.wrist.position.copy(end);
  armVisual.wrist.rotation.set(0, -armState.yaw + Math.PI / 2, 0);
  armVisual.fl.position.x = -armState.grip;
  armVisual.fr.position.x = armState.grip;
}

function ease(t) { return 1 - Math.pow(1 - t, 3); }
function wait(ms) { return new Promise(r => setTimeout(r, state.reducedMotion ? 0 : ms)); }
function moveArmPose(yaw, angles, duration = 320) {
  duration = Math.round(duration * ARM_MOTION_SCALE);
  yaw = nearestAngle(armState.yaw, yaw);
  if (state.reducedMotion) {
    armState.yaw = yaw;
    armState.angles = [...angles];
    updateArmVisual();
    return Promise.resolve();
  }
  state.armTween = {
    start: performance.now(), duration,
    fromYaw: armState.yaw, toYaw: yaw,
    fromAngles: [...armState.angles], toAngles: [...angles]
  };
  return wait(duration);
}
function setGrip(x, duration = 100) {
  duration = Math.round(duration * GRIP_MOTION_SCALE);
  if (state.reducedMotion) { armState.grip = x; return Promise.resolve(); }
  state.gripTween = { start: performance.now(), duration, from: armState.grip, to: x };
  return wait(duration);
}
function socketWorld() {
  armVisual.socket.updateMatrixWorld(true);
  const v = new THREE.Vector3(); armVisual.socket.getWorldPosition(v); return v;
}

// ---------- info boards ----------
const BOARD = { width: 4.5, height: 5.28, thickness: .075, handleX: 0.0, handleY: 2.45, stationScale: 1.02 };
function createBoard(section, item, index) {
  const group = new THREE.Group();
  const base = box(BOARD.width, BOARD.height, BOARD.thickness, .045, 0xf7f7f5, .96, .01);
  group.add(base);

  const clip = box(.52, .19, .28, .04, 0xc5cbd0, .48, .30);
  clip.position.set(0, BOARD.height / 2 - .06, .12);
  group.add(clip);

  const handleAnchor = new THREE.Object3D();
  handleAnchor.position.set(BOARD.handleX, BOARD.handleY, .045);
  group.add(handleAnchor);
  group.userData.handleAnchor = handleAnchor;

  const canvas = document.createElement('canvas');
  canvas.width = 2200;
  canvas.height = 2700;
  const ctx = canvas.getContext('2d');

  // Apple / modern resume-sheet palette.
  ctx.fillStyle = '#f7f7f5';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#111318';
  ctx.font = '700 34px Inter, Arial';
  ctx.fillText('WARREN ZHANG', 110, 126);

  ctx.textAlign = 'right';
  ctx.fillStyle = '#7c858f';
  ctx.font = '600 34px Inter, Arial';
  ctx.fillText(`${section.toUpperCase()}  ·  ${String(index + 1).padStart(2, '0')}`, 1874, 126);
  ctx.textAlign = 'left';

  ctx.fillStyle = '#5a8e83';
  ctx.fillRect(110, 156, 62, 6);

  ctx.fillStyle = '#111318';
  ctx.font = '700 88px Inter, Arial';
  const titleEnd = wrapText(ctx, item.title, 110, 300, 1940, 108);

  ctx.fillStyle = '#68717c';
  ctx.font = '500 42px Inter, Arial';
  const metaEnd = wrapText(ctx, item.meta, 110, titleEnd + 74, 1940, 58);

  ctx.fillStyle = '#d5d9de';
  ctx.fillRect(110, metaEnd + 58, 1760, 2);

  ctx.fillStyle = '#8a929c';
  ctx.font = '700 29px Inter, Arial';
  ctx.fillText('PROFILE', 110, metaEnd + 122);

  ctx.fillStyle = '#272d35';
  ctx.font = '500 46px Inter, Arial';
  const summaryEnd = wrapText(ctx, item.description, 110, metaEnd + 198, 1940, 66);

  // Impact row: resume style, no cards around cards.
  const metricTop = Math.max(summaryEnd + 92, 930);
  ctx.fillStyle = '#d5d9de';
  ctx.fillRect(110, metricTop - 40, 1760, 2);

  item.metrics.slice(0, 3).forEach((m, i) => {
    const x = 110 + i * 588;
    if (i > 0) {
      ctx.fillStyle = '#dfe3e7';
      ctx.fillRect(x - 34, metricTop + 2, 2, 122);
    }
    ctx.fillStyle = '#111318';
    ctx.font = '700 60px Inter, Arial';
    wrapText(ctx, m[0], x, metricTop + 48, 520, 62);
    ctx.fillStyle = '#7b848e';
    ctx.font = '600 28px Inter, Arial';
    wrapText(ctx, m[1], x, metricTop + 104, 520, 38);
  });

  const contribTop = metricTop + 218;
  ctx.fillStyle = '#d5d9de';
  ctx.fillRect(110, contribTop - 38, 1760, 2);
  ctx.fillStyle = '#8a929c';
  ctx.font = '700 29px Inter, Arial';
  ctx.fillText('SELECTED CONTRIBUTIONS', 110, contribTop + 30);

  let y = contribTop + 102;
  ctx.font = '500 46px Inter, Arial';
  item.details.slice(0, 5).forEach(line => {
    ctx.fillStyle = '#5a8e83';
    ctx.beginPath();
    ctx.arc(120, y - 12, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#252c34';
    y = wrapText(ctx, line, 152, y, 1860, 52) + 32;
  });

  const scopeTop = y + 34;
  ctx.fillStyle = '#d5d9de';
  ctx.fillRect(110, scopeTop, 1760, 2);
  ctx.fillStyle = '#8a929c';
  ctx.font = '700 29px Inter, Arial';
  ctx.fillText('ROLE / SCOPE', 110, scopeTop + 56);

  ctx.fillStyle = '#252c34';
  ctx.font = '500 39px Inter, Arial';
  const scopeText = getScopeText(section, item);
  const scopeEnd = wrapText(ctx, scopeText, 110, scopeTop + 124, 1940, 52);

  // Skills line at bottom keeps the page looking like a resume rather than a dashboard.
  const skillsY = Math.max(scopeEnd + 140, 2140);
  ctx.fillStyle = '#d5d9de';
  ctx.fillRect(110, skillsY - 90, 1760, 2);
  ctx.fillStyle = '#8a929c';
  ctx.font = '700 23px Inter, Arial';
  ctx.fillText('TOOLS / FOCUS', 110, skillsY + 8);

  ctx.fillStyle = '#2f5f96';
  ctx.font = '600 36px Inter, Arial';
  wrapText(ctx, item.tags.slice(0, 6).join('   ·   '), 110, skillsY + 66, 1760, 42);

  ctx.fillStyle = '#a0a7af';
  ctx.font = '500 26px Inter, Arial';
  ctx.fillText('warrenz7980@gmail.com  ·  github.com/banana1324  ·  linkedin.com/in/fuyuanzhang', 110, 2570);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 16);

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(BOARD.width - .18, BOARD.height - .18),
    new THREE.MeshBasicMaterial({ map: texture, toneMapped: false })
  );
  plane.position.z = BOARD.thickness / 2 + .002;
  group.add(plane);
  return group;
}

function getScopeText(section, item) {
  const toolText = item.tags.slice(0, 4).join(', ');
  if (section === 'projects') return `This project combined implementation, verification, and explanation. Beyond building the technical system itself, I aimed to make the work reliable enough to test on real hardware and clear enough that another student or teammate could understand the design decisions behind it. Focus areas included ${toolText}.`;
  if (section === 'experience') return `This role combined technical execution with communication and support. I was responsible not only for building or debugging systems, but also for explaining issues clearly, coordinating with others, and helping turn complex work into something more understandable and dependable for a team, a learner, or a user.`;
  if (section === 'interests') return `This interest shapes how I approach technical work more broadly. I tend to be drawn to systems that have visible behavior, constraints, and feedback, and I often bring ideas from this area back into my robotics, hardware, and interface projects.`;
  if (section === 'about' || section === 'home') return `What ties these experiences together is the same working style: test deliberately, change one variable at a time, keep notes, and explain the result clearly enough that someone else can build on it. That is the mindset I try to bring into both technical projects and team environments.`;
  return `The main thread here is building things carefully, communicating them clearly, and learning enough from each project that the next one starts from a stronger foundation.`;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(/\s+/); let line = '';
  for (let i = 0; i < words.length; i++) {
    const testLine = line ? `${line} ${words[i]}` : words[i];
    const w = ctx.measureText(testLine).width;
    if (w > maxWidth && line) { ctx.fillText(line, x, y); line = words[i]; y += lineHeight; }
    else line = testLine;
  }
  if (line) ctx.fillText(line, x, y);
  return y;
}
function drawPills(ctx, pills, x, y) {
  let cursor = x;
  ctx.font = '600 26px Inter, Arial';
  pills.forEach(label => {
    const w = ctx.measureText(label).width + 42;
    roundRect(ctx, cursor, y, w, 42, 18, '#e9edf2');
    ctx.fillStyle = '#5a8e83'; ctx.fillText(label, cursor + 21, y + 29);
    cursor += w + 12;
  });
}
function roundRect(ctx, x, y, w, h, r, fill) {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();
}

// ---------- stations ----------
const STATION_RADIUS = 5.05;
const rayTargets = [];
const gltfLoader = new GLTFLoader();
const SUZANNE_URL = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/refs/heads/main/2.0/Suzanne/glTF/Suzanne.gltf';

function createAllStations() {
  // Slots are on a precise inner circle matching the fixed pickup pose.
  // Models sit farther out, alternating radii so the display objects do not overlap.
  const angles = distributeAngles(FLAT_ITEMS.length, THREE.MathUtils.degToRad(176), THREE.MathUtils.degToRad(4));
  const displayOrder = [
    'contact/contact',
    'interests/music',
    'experience/orchestra',
    'projects/analog',
    'interests/hardware',
    'projects/vision',
    'experience/coaching',
    'experience/vex',
    'experience/eim',
    'projects/kc15',
    'projects/wildfire',
    'interests/blender',
    'about/about',
    'home/home'
  ];
  const orderedEntries = [
    ...displayOrder.map(key => FLAT_ITEMS.find(entry => entry.key === key)).filter(Boolean),
    ...FLAT_ITEMS.filter(entry => !displayOrder.includes(entry.key))
  ];

  orderedEntries.forEach((entry, i) => {
    const theta = angles[i];
    const dir = new THREE.Vector3(Math.cos(theta), 0, Math.sin(theta));
    const pickupSocket = armSocketForPose(theta, ARM_POSES.pickup);
    const slotCenter = new THREE.Vector3(pickupSocket.x, 0, pickupSocket.z);
    const pickupRadius = Math.hypot(slotCenter.x - ARM.base.x, slotCenter.z - ARM.base.z);
    const pickupHandleY = pickupSocket.y;
    const modelRadius = pickupRadius + 5.1 + (i % 2) * 1.55;
    const modelCenter = ARM.base.clone().addScaledVector(dir, modelRadius);
    modelCenter.y = 0;

    const root = new THREE.Group();
    scene.add(root);

    // Object pedestal, farther away from the arm than the page slot.
    const pad = box(1.52, .10, 1.12, .12, 0x273238, .80, .08);
    pad.position.set(modelCenter.x, .05, modelCenter.z);
    pad.rotation.y = -theta + Math.PI / 2;
    root.add(pad);

    const ring = mesh(new THREE.TorusGeometry(.53, .022, 12, 44), 0x74857c, .48, .20);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(modelCenter.x, .13, modelCenter.z);
    root.add(ring);

    const model = createTopicModel(entry.item.model, entry.key);
    model.position.set(modelCenter.x, .18, modelCenter.z);
    model.rotation.y = Math.atan2(camera.position.x - modelCenter.x, camera.position.z - modelCenter.z);
    model.scale.setScalar(.58);
    root.add(model);

    const stationLabel = createStationLabel(entry.item.label);
    const toCamera = new THREE.Vector3(camera.position.x - modelCenter.x, 0, camera.position.z - modelCenter.z).normalize();
    stationLabel.position.copy(modelCenter).addScaledVector(toCamera, .84);
    stationLabel.position.y = .28;
    stationLabel.lookAt(camera.position.x, .25, camera.position.z);
    root.add(stationLabel);

    // A visible dock sits beside each topic object. The page does not pop out of the floor;
    // it rests in a presentation cradle until the arm reaches over from the left to grab it.
    const slotYaw = Math.PI / 2 - theta;
    const tangent = new THREE.Vector3(Math.cos(theta + Math.PI / 2), 0, Math.sin(theta + Math.PI / 2));
    const dockBase = box(1.02, .09, 1.26, .05, 0x12181d, .84, .05);
    dockBase.position.set(slotCenter.x, .045, slotCenter.z);
    dockBase.rotation.y = slotYaw;
    root.add(dockBase);

    const dockSpine = box(.10, 1.62, 1.08, .03, 0x1d252c, .62, .18);
    dockSpine.position.set(slotCenter.x, .82, slotCenter.z);
    dockSpine.rotation.y = slotYaw;
    dockSpine.position.addScaledVector(tangent, -.26);
    root.add(dockSpine);

    const dockLip = box(.22, .10, 1.04, .03, 0x5c6872, .38, .24);
    dockLip.position.set(slotCenter.x, .11, slotCenter.z);
    dockLip.rotation.y = slotYaw;
    dockLip.position.addScaledVector(tangent, .23);
    root.add(dockLip);

    const dockRails = box(.08, .12, 1.06, .03, 0x7b8a93, .30, .28);
    dockRails.position.copy(dockLip.position).addScaledVector(tangent, .18);
    dockRails.rotation.y = slotYaw;
    root.add(dockRails);

    const board = createBoard(entry.section, entry.item, entry.index);
    board.scale.setScalar(BOARD.stationScale);
    const shownCenterY = pickupHandleY - BOARD.handleY * BOARD.stationScale;
    board.position.set(slotCenter.x, shownCenterY, slotCenter.z);
    board.visible = false;
    root.add(board);

    const faceDummy = new THREE.Object3D();
    faceDummy.position.copy(board.position);
    faceDummy.lookAt(camera.position.x, board.position.y, camera.position.z);
    const shownQ = faceDummy.quaternion.clone();
    const dockQ = shownQ.clone().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.24, 0, 0)));
    const shownS = new THREE.Vector3(BOARD.stationScale, BOARD.stationScale, BOARD.stationScale);
    const pickupP = board.position.clone();
    const dockP = pickupP.clone().addScaledVector(tangent, -.18);
    dockP.y -= .54;
    const shownP = pickupP.clone();
    board.quaternion.copy(dockQ);
    board.userData.hiddenLocal = { p: dockP.clone(), q: dockQ.clone(), s: shownS.clone() };
    board.userData.emergedLocal = { p: dockP.clone(), q: dockQ.clone(), s: shownS.clone() };
    board.userData.pickupLocal = { p: pickupP.clone(), q: shownQ.clone(), s: shownS.clone() };
    board.userData.shownLocal = { p: shownP, q: shownQ, s: shownS.clone() };

    root.updateMatrixWorld(true);
    ring.material.color.setHex(sectionAccent(entry.section));
    ring.material.opacity = .76;
    ring.material.transparent = true;

    const station = {
      ...entry, root, pad, ring, model, board,
      slotBase: dockBase, slotBack: dockSpine, slotMouth: dockLip,
      slotCenter: slotCenter.clone(), modelCenter: modelCenter.clone(),
      pickupYaw: theta, pickupHandleY
    };
    state.stations.set(entry.key, station);

    root.traverse(child => {
      if (child.isMesh) child.userData.navKey = entry.key;
      if (child.isMesh) rayTargets.push(child);
    });
  });
}
function distributeAngles(count, start, end) {
  if (count === 1) return [(start + end) / 2];
  return Array.from({ length: count }, (_, i) => start + (end - start) * (i / (count - 1)));
}
function stationGuideWorld(station) {
  // By construction, the fixed pickup pose lands exactly on this handle.
  return armSocketForPose(station.pickupYaw, ARM_POSES.pickup);
}
function sectionAccent(section) {
  return ({
    home: 0x7aa9a0,
    about: 0xc5a77b,
    projects: 0x6faaa4,
    experience: 0xd2a56f,
    interests: 0x86a86f,
    contact: 0xc48672
  })[section] || 0x7aa9a0;
}

function setSelectedStation(key) {
  state.selectedKey = key;
  for (const [k, s] of state.stations) {
    const selected = k === key;
    s.ring.material.color.setHex(selected ? sectionAccent(s.section) : 0x64736c);
    s.model.scale.setScalar(selected ? .72 : .50);
    s.slotMouth.material.color.setHex(selected ? sectionAccent(s.section) : 0x05090a);
    s.slotMouth.material.emissive?.setHex?.(selected ? sectionAccent(s.section) : 0x000000);
    if (s.slotMouth.material.emissiveIntensity !== undefined) s.slotMouth.material.emissiveIntensity = selected ? .22 : 0;
  }
}

function createStationLabel(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 980;
  canvas.height = 196;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  roundRect(ctx, 10, 10, 960, 176, 40, 'rgba(10,15,22,0.90)');
  ctx.strokeStyle = 'rgba(143,184,222,0.24)';
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fillStyle = '#f3f6f9';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const words = text.split(/\s+/);
  let line1 = '', line2 = '';
  ctx.font = '700 58px Inter, Arial';
  for (const word of words) {
    const try1 = line1 ? `${line1} ${word}` : word;
    if (ctx.measureText(try1).width <= 840 || !line1) line1 = try1;
    else line2 = line2 ? `${line2} ${word}` : word;
  }
  while (ctx.measureText(line2).width > 840 && line2.length > 14) line2 = line2.slice(0, -2);
  if (line2 && line2 !== text.split(/\s+/).slice(line1.split(/\s+/).length).join(' ')) line2 += '…';

  if (line2) {
    ctx.fillText(line1, 490, 72);
    ctx.font = '700 51px Inter, Arial';
    ctx.fillText(line2, 490, 132);
  } else {
    while (ctx.measureText(line1).width > 850 && line1.length > 14) line1 = line1.slice(0, -2);
    if (line1 !== text) line1 += '…';
    ctx.fillText(line1, 490, 98);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(2.22, .46),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, toneMapped: false })
  );
  plane.renderOrder = 3;
  return plane;
}

// ---------- models ----------
function createTopicModel(kind, key) {
  switch (kind) {
    case 'home': return createHomeModel();
    case 'about': return createAboutModel();
    case 'wildfire': return createWildfireModel();
    case 'kc15': return createKC15Model();
    case 'vision': return createVisionRobot();
    case 'analog': return createAnalogModel();
    case 'eim': return createEIMModel();
    case 'vex': return createVexModel();
    case 'coaching': return createBadmintonModel();
    case 'orchestra': return createTromboneDisplay();
    case 'blender': return createSuzanneModel(key);
    case 'hardware': return createHardwareModel();
    case 'music': return createMusicModel();
    case 'contact': return createContactModel();
    default: return createHomeModel();
  }
}
function createHomeModel() {
  const g = new THREE.Group();
  const r = createVisionRobot(); r.scale.setScalar(.62); r.position.x = -.25; g.add(r);
  const b = createDevBoard(); b.scale.setScalar(.64); b.position.set(.85, .12, .16); g.add(b);
  return g;
}
function createAboutModel() {
  const g = new THREE.Group();
  const l = createLaptop(); l.scale.setScalar(.70); l.position.x = -.18; g.add(l);
  const books = createBooks(); books.scale.setScalar(.78); books.position.set(.78, 0, .14); g.add(books);
  return g;
}
function createWildfireModel() {
  const g = new THREE.Group();
  const body = box(1.0, .72, .76, .10, 0x334552, .64, .16); body.position.y = .42; g.add(body);
  const lid = box(1.06, .09, .80, .05, 0x526b7b, .52, .22); lid.position.y = .82; g.add(lid);
  const screen = box(.30, .18, .03, .02, 0x6fa8c9, .18, .12); screen.position.set(.26, .50, .39); screen.material.emissive.setHex(0x1a4352); screen.material.emissiveIntensity = .65; g.add(screen);
  const vent = box(.30, .20, .03, .02, 0x182026, .70, .06); vent.position.set(-.24, .50, .39); g.add(vent);
  g.add(cylinderBetween(new THREE.Vector3(.22, .88, -.10), new THREE.Vector3(.22, 1.92, -.10), .025, 0x12191f, .34, .55));
  const gateway = box(.66, .16, .42, .05, 0x788692, .36, .52); gateway.position.set(.78, .16, -.12); gateway.rotation.y = -.18; g.add(gateway);
  return g;
}
function createKC15Model() {
  const g = new THREE.Group();
  const b = createDevBoard(); b.scale.setScalar(.96); g.add(b);
  const s = createMiniScreen(); s.scale.setScalar(.62); s.position.set(.86, .14, -.18); g.add(s);
  return g;
}
function createVisionRobot() {
  const g = new THREE.Group();
  const chassis = box(1.18, .30, .82, .09, 0x414d58, .42, .52); chassis.position.y = .42; g.add(chassis);
  for (const [x, z] of [[-.48, -.38], [.48, -.38], [-.48, .38], [.48, .38]]) {
    const w = mesh(new THREE.CylinderGeometry(.22, .22, .18, 24), 0x161c21, .75, .08); w.rotation.z = Math.PI / 2; w.position.set(x, .27, z); g.add(w);
  }
  const mast = box(.16, .86, .16, .04, 0x6b94b7, .38, .30); mast.position.y = 1.0; g.add(mast);
  const cam = box(.58, .34, .38, .06, 0x222a31, .34, .56); cam.position.y = 1.50; g.add(cam);
  const lens = mesh(new THREE.CylinderGeometry(.12, .12, .13, 20), 0x6d9dc1, .18, .72); lens.rotation.x = Math.PI / 2; lens.position.set(0, 1.50, .24); g.add(lens);
  return g;
}
function createAnalogModel() {
  const g = new THREE.Group();
  const board = box(1.34, .08, .88, .04, 0x455760, .66, .08); board.position.y = .16; g.add(board);
  const chip = box(.44, .12, .32, .02, 0x12171b, .58, .12); chip.position.set(-.28, .26, 0); g.add(chip);
  for (let i = 0; i < 4; i++) {
    const r = box(.30, .05, .07, .016, 0xb49b68, .60, .12);
    r.position.set(.15 + (i % 2) * .39, .27, -.18 + Math.floor(i / 2) * .27); g.add(r);
  }
  return g;
}
function createEIMModel() {
  const g = new THREE.Group();
  const b = createDevBoard(); b.scale.setScalar(.78); b.position.x = -.24; g.add(b);
  const s = createScope(); s.scale.setScalar(.52); s.position.set(.82, 0, -.05); g.add(s);
  return g;
}
function createVexModel() {
  const g = new THREE.Group();
  const chassis = box(1.25, .26, .86, .06, 0x444e58, .42, .58); chassis.position.y = .38; g.add(chassis);
  for (const [x, z] of [[-.50, -.37], [.50, -.37], [-.50, .37], [.50, .37]]) {
    const w = mesh(new THREE.CylinderGeometry(.24, .24, .20, 26), 0x161b20, .75, .08); w.rotation.z = Math.PI / 2; w.position.set(x, .24, z); g.add(w);
  }
  const l = box(.12, 1.08, .12, .03, 0x8c9ba8, .30, .72); l.position.set(-.34, .94, 0); l.rotation.z = -.16; g.add(l);
  const r = l.clone(); r.position.x = .34; r.rotation.z = .16; g.add(r);
  const beam = box(.90, .12, .15, .03, 0x8c9ba8, .30, .72); beam.position.set(0, 1.48, .03); g.add(beam);
  const clawA = box(.08, .52, .10, .025, 0x6e91ae, .32, .62); clawA.position.set(-.25, 1.72, .23); clawA.rotation.z = -.34; g.add(clawA);
  const clawB = clawA.clone(); clawB.position.x = .25; clawB.rotation.z = .34; g.add(clawB);
  return g;
}
function createBadmintonModel() {
  const g = new THREE.Group();
  const racket = createRacket(); racket.rotation.z = -.48; racket.position.set(-.12, .02, .04); racket.scale.setScalar(.96); g.add(racket);
  const shuttle = createShuttlecock(); shuttle.position.set(.66, .34, .18); shuttle.rotation.z = .42; shuttle.rotation.y = .25; shuttle.scale.setScalar(1.05); g.add(shuttle);
  return g;
}
function createTromboneDisplay() {
  const g = new THREE.Group();
  const t = createTrombone(); t.rotation.y = -.28; t.rotation.z = -.12; t.position.set(.05, .25, .10); t.scale.setScalar(.82); g.add(t);
  return g;
}
function createSuzanneModel(key) {
  const g = new THREE.Group();
  const base = mesh(new THREE.CylinderGeometry(.42, .48, .16, 30), 0x4b5d72, .40, .52); base.position.y = .08; g.add(base);
  const mount = new THREE.Group(); mount.position.y = .22; g.add(mount);
  gltfLoader.load(SUZANNE_URL, gltf => {
    const s = gltf.scene;
    s.scale.setScalar(.62);
    s.rotation.y = -.28;
    s.position.y = .08;
    s.traverse(c => { if (c.isMesh) { c.material = mat(0xd3d8df, .58, .08); c.castShadow = true; c.userData.navKey = key; rayTargets.push(c); } });
    mount.add(s);
  });
  return g;
}
function createHardwareModel() {
  const g = new THREE.Group();
  const board = createDevBoard(); board.scale.setScalar(.82); board.position.x = -.26; g.add(board);
  const probeA = cylinderBetween(new THREE.Vector3(.50, .24, .26), new THREE.Vector3(.92, .80, .22), .03, 0xd1b36d, .42, .42); g.add(probeA);
  const probeB = cylinderBetween(new THREE.Vector3(.54, .18, -.10), new THREE.Vector3(.94, .72, -.20), .026, 0x98a9bf, .42, .42); g.add(probeB);
  return g;
}
function createMusicModel() {
  const g = new THREE.Group();
  const t = createTrombone(); t.scale.setScalar(.62); t.rotation.y = -.45; t.rotation.z = -.12; t.position.set(.06, .26, 0); g.add(t);
  return g;
}
function createContactModel() {
  const g = new THREE.Group();
  const env = box(.86, .56, .08, .04, 0xeff2f5, .80, .04); env.rotation.z = -.10; env.position.set(-.22, .42, .08); g.add(env);
  const stamp = box(.16, .16, .02, .01, 0x8eb7de, .32, .08); stamp.position.set(.04, .54, .13); g.add(stamp);
  const phone = box(.36, .68, .08, .05, 0x1f2730, .36, .32); phone.position.set(.64, .34, .05); g.add(phone);
  const screen = box(.28, .52, .01, .02, 0x7db3de, .18, .08); screen.position.set(.64, .34, .10); screen.material.emissive.setHex(0x1a4352); screen.material.emissiveIntensity = .6; g.add(screen);
  return g;
}
function createDevBoard() {
  const g = new THREE.Group();
  const board = box(1.12, .10, .58, .03, 0x215d49, .82, .05); board.position.y = .10; g.add(board);
  const chip = box(.36, .12, .28, .03, 0x11161b, .62, .06); chip.position.set(0, .18, 0); g.add(chip);
  for (let i = 0; i < 2; i++) for (let j = 0; j < 8; j++) {
    const pin = box(.04, .08, .04, .008, 0xd0b274, .36, .42);
    pin.position.set(-.45 + i * .90, .18, -.22 + j * .062); g.add(pin);
  }
  const usb = box(.18, .13, .16, .02, 0x9aa5ae, .28, .72); usb.position.set(.57, .14, 0); g.add(usb);
  return g;
}
function createMiniScreen() {
  const g = new THREE.Group();
  const frame = box(.52, .38, .06, .03, 0x2e363e, .38, .24); frame.position.y = .24; g.add(frame);
  const face = box(.40, .26, .01, .01, 0x78b2dd, .16, .02); face.position.set(0, .24, .035); face.material.emissive.setHex(0x173b4b); face.material.emissiveIntensity = .8; g.add(face);
  const stand = box(.12, .20, .10, .02, 0x424b56, .42, .28); stand.position.y = .10; g.add(stand);
  return g;
}
function createLaptop() {
  const g = new THREE.Group();
  const base = box(1.05, .08, .72, .03, 0x7d8792, .42, .54); base.position.y = .06; g.add(base);
  const hinge = box(.12, .08, .62, .02, 0x434c56, .46, .28); hinge.position.set(0, .12, -.05); g.add(hinge);
  const screen = box(.98, .66, .05, .03, 0x394452, .38, .42); screen.position.set(0, .45, -.20); screen.rotation.x = -.92; g.add(screen);
  const face = box(.84, .54, .01, .01, 0x78b2dd, .16, .02); face.position.set(0, .48, -.34); face.rotation.x = -.92; face.material.emissive.setHex(0x173b4b); face.material.emissiveIntensity = .9; g.add(face);
  return g;
}
function createBooks() {
  const g = new THREE.Group();
  const colors = [0x798ca3, 0x95a57d, 0xb28f78];
  colors.forEach((c, i) => {
    const b = box(.82 - i * .06, .12, .56, .03, c, .72, .04); b.position.set(0, .08 + i * .14, 0); b.rotation.z = (i - 1) * .05; g.add(b);
  });
  return g;
}
function createScope() {
  const g = new THREE.Group();
  const body = box(1.02, .62, .66, .07, 0x3f4a56, .42, .32); body.position.y = .32; g.add(body);
  const face = box(.70, .36, .02, .02, 0x7eb8e3, .16, .02); face.position.set(0, .36, .34); face.material.emissive.setHex(0x163c4e); face.material.emissiveIntensity = .8; g.add(face);
  for (let i = 0; i < 4; i++) {
    const knob = mesh(new THREE.CylinderGeometry(.06, .06, .10, 18), 0xcfd6df, .26, .62); knob.rotation.x = Math.PI / 2; knob.position.set(.28 + i * .12, .16, .34); g.add(knob);
  }
  return g;
}
function createRacket() {
  const g = new THREE.Group();
  const head = mesh(new THREE.TorusGeometry(.50, .036, 18, 54), 0xe1e5ea, .28, .74); head.scale.set(1.02, 1.28, 1); head.position.y = .92; head.rotation.z = .02; g.add(head);
  for (let i = -3; i <= 3; i++) {
    const s = mesh(new THREE.CylinderGeometry(.0045, .0045, 1.03, 8), 0xd6dde5, .20, .12); s.position.set(i * .13, .92, 0); s.scale.y = 1.12; g.add(s);
  }
  for (let i = -4; i <= 4; i++) {
    const s = mesh(new THREE.CylinderGeometry(.0045, .0045, .96, 8), 0xd6dde5, .20, .12); s.rotation.z = Math.PI / 2; s.position.set(0, .92 + i * .12, 0); s.scale.y = 1.12; g.add(s);
  }
  const shaft = cylinderBetween(new THREE.Vector3(0, .30, 0), new THREE.Vector3(0, .63, 0), .028, 0xcdd3db, .24, .82); g.add(shaft);
  const handle = cylinderBetween(new THREE.Vector3(0, -.32, 0), new THREE.Vector3(0, .30, 0), .055, 0x12171d, .84, .04); g.add(handle);
  const cap = mesh(new THREE.CylinderGeometry(.08, .08, .08, 20), 0xc9a87d, .48, .18); cap.position.y = -.36; g.add(cap);
  return g;
}
function createShuttlecock() {
  const g = new THREE.Group();
  const cork = mesh(new THREE.CylinderGeometry(.12, .10, .18, 22), 0xe9dcc7, .88, .02); cork.position.y = .02; g.add(cork);
  for (let i = 0; i < 16; i++) {
    const angle = i / 16 * Math.PI * 2;
    const feather = box(.035, .56, .008, .005, 0xf8f8f9, .96, .02);
    feather.position.set(Math.cos(angle) * .18, .28, Math.sin(angle) * .18);
    feather.rotation.z = Math.cos(angle) * .45;
    feather.rotation.x = Math.sin(angle) * .45;
    feather.rotation.y = angle;
    g.add(feather);
  }
  return g;
}
function createTrombone() {
  const g = new THREE.Group();
  const gold = 0xa57a2a, dark = 0x6d5120, silver = 0xcfd6dd;
  const bellTail = cylinderBetween(new THREE.Vector3(.52, .40, 0), new THREE.Vector3(1.55, .40, 0), .028, gold, .22, .82); g.add(bellTail);
  const bell = mesh(new THREE.CylinderGeometry(.10, .34, .78, 30, 1, true), gold, .18, .82); bell.rotation.z = -Math.PI / 2; bell.position.set(1.98, .40, 0); g.add(bell);
  const bellRim = mesh(new THREE.TorusGeometry(.34, .024, 12, 36), silver, .18, .84); bellRim.rotation.y = Math.PI / 2; bellRim.position.set(2.36, .40, 0); g.add(bellRim);
  const mouthPipe = cylinderBetween(new THREE.Vector3(-.68, .55, 0), new THREE.Vector3(.52, .55, 0), .028, gold, .22, .82); g.add(mouthPipe);
  const slideTopA = cylinderBetween(new THREE.Vector3(-.85, .26, .09), new THREE.Vector3(1.15, .26, .09), .020, silver, .18, .86); g.add(slideTopA);
  const slideTopB = cylinderBetween(new THREE.Vector3(-.85, .26, -.09), new THREE.Vector3(1.15, .26, -.09), .020, silver, .18, .86); g.add(slideTopB);
  const slideOuterA = cylinderBetween(new THREE.Vector3(-1.40, .07, .09), new THREE.Vector3(1.02, .07, .09), .026, silver, .20, .86); g.add(slideOuterA);
  const slideOuterB = cylinderBetween(new THREE.Vector3(-1.40, .07, -.09), new THREE.Vector3(1.02, .07, -.09), .026, silver, .20, .86); g.add(slideOuterB);
  const crook = mesh(new THREE.TorusGeometry(.09, .026, 12, 28, Math.PI), silver, .20, .86); crook.rotation.z = Math.PI / 2; crook.position.set(-1.40, .07, 0); g.add(crook);
  const brace1 = cylinderBetween(new THREE.Vector3(-.32, .55, 0), new THREE.Vector3(-.32, .07, 0), .022, dark, .24, .52); g.add(brace1);
  const brace2 = cylinderBetween(new THREE.Vector3(.22, .55, 0), new THREE.Vector3(.22, .26, 0), .020, dark, .24, .52); g.add(brace2);
  const brace3 = cylinderBetween(new THREE.Vector3(.98, .40, 0), new THREE.Vector3(.98, .26, 0), .018, dark, .24, .52); g.add(brace3);
  const receiver = cylinderBetween(new THREE.Vector3(-.86, .55, 0), new THREE.Vector3(-1.12, .55, 0), .030, gold, .22, .82); g.add(receiver);
  const mouthpiece = mesh(new THREE.CylinderGeometry(.02, .06, .14, 18), silver, .20, .86); mouthpiece.rotation.z = -Math.PI / 2; mouthpiece.position.set(-1.19, .55, 0); g.add(mouthpiece);
  return g;
}

// ---------- nav ----------
function currentItem() { return CONTENT[state.section][state.index]; }
function renderNav() {
  dom.nav.innerHTML = '';
  NAV.forEach(([section, icon, label]) => {
    const hasChildren = CONTENT[section].length > 1;
    const group = document.createElement('div'); group.className = 'nav-group';
    const header = document.createElement('button'); header.type = 'button'; header.className = 'nav-header'; header.dataset.section = section;
    header.setAttribute('aria-expanded', String(hasChildren && state.expanded.has(section)));
    header.innerHTML = `<span class="nav-icon">${icon}</span><span>${label}</span>${hasChildren ? '<span class="nav-chevron">›</span>' : ''}`;
    header.addEventListener('click', () => {
      if (hasChildren) { state.expanded.has(section) ? state.expanded.delete(section) : state.expanded.add(section); renderNav(); }
      else requestSelection(section, 0);
    });
    group.appendChild(header);
    if (hasChildren) {
      const list = document.createElement('div'); list.className = 'nav-items'; list.hidden = !state.expanded.has(section);
      CONTENT[section].forEach((item, index) => {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'nav-item'; b.dataset.section = section; b.dataset.itemId = item.id; b.textContent = item.label;
        b.addEventListener('click', () => requestSelection(section, index)); list.appendChild(b);
      });
      group.appendChild(list);
    }
    dom.nav.appendChild(group);
  });
  updateNav();
}
function updateNav() {
  document.querySelectorAll('.nav-header').forEach(b => b.classList.toggle('is-active', b.dataset.section === state.section));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('is-active', b.dataset.section === state.section && b.dataset.itemId === currentItem().id));
}

// ---------- board transition helpers ----------
function tweenLocalTransform(parent, object, to, duration = 240, onComplete) {
  duration = Math.round(duration * BOARD_MOTION_SCALE);
  const from = { p: object.position.clone(), q: object.quaternion.clone(), s: object.scale.clone() };
  if (state.reducedMotion) {
    object.position.copy(to.p); object.quaternion.copy(to.q); object.scale.copy(to.s); if (onComplete) onComplete(); return Promise.resolve();
  }
  state.localTweens.push({ parent, object, start: performance.now(), duration, from, to, onComplete });
  return wait(duration);
}
function updateLocalTweens(now) {
  state.localTweens = state.localTweens.filter(tw => {
    const t = Math.min(1, (now - tw.start) / tw.duration), e = ease(t);
    tw.object.position.lerpVectors(tw.from.p, tw.to.p, e);
    tw.object.quaternion.slerpQuaternions(tw.from.q, tw.to.q, e);
    tw.object.scale.lerpVectors(tw.from.s, tw.to.s, e);
    if (t >= 1) tw.onComplete?.();
    return t < 1;
  });
}
async function slideBoardOut(station) {
  const board = station.board;
  board.visible = true;
  board.position.copy(board.userData.hiddenLocal.p);
  board.quaternion.copy(board.userData.hiddenLocal.q);
  board.scale.copy(board.userData.hiddenLocal.s);
  // The page begins docked beside the object, then the arm comes over to collect it.
  await tweenLocalTransform(station.root, board, board.userData.pickupLocal, 260);
}
async function slideBoardIn(station) {
  const board = station.board;
  // Return the page to its dock beside the object.
  await tweenLocalTransform(station.root, board, board.userData.hiddenLocal, 240, () => { board.visible = false; });
}
function beginHold(station) {
  const board = station.board;
  scene.attach(board);
  board.scale.setScalar(1.18);
  state.heldBoard = board;
  state.heldStation = station;
  const socket = socketWorld();
  state.heldFollow = {
    prevSocket: socket.clone(),
    prevVelocity: new THREE.Vector3(),
    swingX: 0,
    swingZ: 0,
    swingVX: 0,
    swingVZ: 0
  };
  updateHeldBoard(performance.now(), 1 / 60, true);
}
function heldBoardTargetPose(socket, swingX = 0, swingZ = 0) {
  // The board is a rigid plate pinned at its top-center handle.
  // Nominal orientation faces the visitor; swing is applied around that rigid orientation.
  const facing = new THREE.Object3D();
  facing.position.copy(socket);
  facing.lookAt(camera.position.x, camera.position.y - .15, camera.position.z);
  const q = facing.quaternion.clone();
  q.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(swingX, 0, swingZ)));
  const viewDir = new THREE.Vector3(camera.position.x - socket.x, camera.position.y - socket.y, camera.position.z - socket.z).normalize();
  const presentationOffset = viewDir.multiplyScalar(3.35);
  const localHandle = new THREE.Vector3(BOARD.handleX * BOARD.stationScale, BOARD.handleY * BOARD.stationScale, 0).applyQuaternion(q);
  return { position: socket.clone().add(presentationOffset).sub(localHandle), quaternion: q };
}
function updateHeldBoard(now, dt, snap = false) {
  if (!state.heldBoard || !state.heldFollow) return;
  const socket = socketWorld();
  const f = state.heldFollow;
  const safeDt = Math.max(1 / 120, Math.min(dt || 1 / 60, 1 / 20));
  const velocity = socket.clone().sub(f.prevSocket).multiplyScalar(1 / safeDt);
  const acceleration = velocity.clone().sub(f.prevVelocity).multiplyScalar(1 / safeDt);
  f.prevSocket.copy(socket);
  f.prevVelocity.lerp(velocity, .42);

  // Damped pendulum response. This is not a visual lag: the top-center handle remains constrained to the gripper.
  const stiffness = 15.5, damping = 6.2, drive = .0075;
  const ax = THREE.MathUtils.clamp(acceleration.z * drive, -.75, .75);
  const az = THREE.MathUtils.clamp(-acceleration.x * drive, -.75, .75);
  f.swingVX += (-stiffness * f.swingX - damping * f.swingVX + ax) * safeDt;
  f.swingVZ += (-stiffness * f.swingZ - damping * f.swingVZ + az) * safeDt;
  f.swingX = THREE.MathUtils.clamp(f.swingX + f.swingVX * safeDt, -.18, .18);
  f.swingZ = THREE.MathUtils.clamp(f.swingZ + f.swingVZ * safeDt, -.18, .18);

  const target = heldBoardTargetPose(socket, f.swingX, f.swingZ);
  if (snap || state.reducedMotion) {
    state.heldBoard.position.copy(target.position);
    state.heldBoard.quaternion.copy(target.quaternion);
  } else {
    // Position is exact enough to preserve the rigid pin constraint; orientation is smoothly damped.
    state.heldBoard.position.copy(target.position);
    state.heldBoard.quaternion.slerp(target.quaternion, .36);
  }
}

const PRESENT_YAW = 0.58;
const SAFE_YAW = 0.18;

async function rotateSafelyTo(yaw, duration = 330) {
  // Never rotate the base while the links are extended near the objects.
  await moveArmPose(armState.yaw, ARM_POSES.safe, 190);
  await moveArmPose(yaw, ARM_POSES.safe, duration);
}

async function stowCurrentBoard() {
  if (!state.heldBoard || !state.heldStation) return;
  const station = state.heldStation;
  dom.status.textContent = 'Returning page';

  // Fold first, rotate only while clear of the display ring, then extend to the exact slot handle.
  await moveArmPose(armState.yaw, ARM_POSES.lift, 180);
  await rotateSafelyTo(station.pickupYaw, 340);
  await moveArmPose(station.pickupYaw, ARM_POSES.lift, 200);
  await moveArmPose(station.pickupYaw, ARM_POSES.pickup, 210);

  await setGrip(.26, 100);
  const board = state.heldBoard;
  state.heldBoard = null;
  state.heldFollow = null;
  station.root.attach(board);
  board.position.copy(board.userData.shownLocal.p);
  board.quaternion.copy(board.userData.shownLocal.q);
  board.scale.copy(board.userData.shownLocal.s);
  await slideBoardIn(station);
  state.heldStation = null;

  await moveArmPose(station.pickupYaw, ARM_POSES.lift, 180);
  await rotateSafelyTo(SAFE_YAW, 320);
}

async function pickupBoard(station) {
  setSelectedStation(station.key);
  updateNav();
  dom.status.textContent = 'Opening slot';
  await slideBoardOut(station);

  await setGrip(.26, 70);
  await rotateSafelyTo(station.pickupYaw, 340);
  await moveArmPose(station.pickupYaw, ARM_POSES.lift, 200);
  dom.status.textContent = 'Aligning page';
  await tweenLocalTransform(station.root, station.board, station.board.userData.pickupLocal, 110);
  dom.status.textContent = 'Grabbing page';
  await moveArmPose(station.pickupYaw, ARM_POSES.pickup, 280);
  await setGrip(.09, 120);

  // At this instant the socket and top-center board handle are the same point by construction.
  beginHold(station);

  dom.status.textContent = 'Lifting page';
  await moveArmPose(station.pickupYaw, ARM_POSES.lift, 320);
  await rotateSafelyTo(PRESENT_YAW, 520);
  dom.status.textContent = 'Bringing page forward';
  await moveArmPose(PRESENT_YAW, ARM_POSES.present, 460);
  dom.status.textContent = 'Page ready';
}

async function deliverBoard(section, index) {
  state.busy = true;
  await stowCurrentBoard();
  state.section = section; state.index = index;
  const item = currentItem();
  const key = `${section}/${item.id}`;
  const station = state.stations.get(key);
  setSelectedStation(key);
  dom.topbarTitle.textContent = item.title;
  dom.live.textContent = `${item.title}. ${item.description}`;
  await pickupBoard(station);
  state.busy = false;
  if (state.queued) {
    const q = state.queued; state.queued = null; requestSelection(q.section, q.index, q.updateHash);
  }
}
function requestSelection(section, index = 0, updateHash = true) {
  if (!CONTENT[section]) section = 'home';
  index = Math.max(0, Math.min(index, CONTENT[section].length - 1));
  if (state.busy) { state.queued = { section, index, updateHash }; dom.status.textContent = 'Queued next page'; return; }
  if (updateHash) history.replaceState(null, '', `#${section}/${CONTENT[section][index].id}`);
  deliverBoard(section, index);
}

// ---------- object picking ----------
const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
dom.canvas.addEventListener('pointerup', e => {
  const sidebar = getSidebarWidth(); if (e.clientX < sidebar) return;
  pointer.x = ((e.clientX - sidebar) / (innerWidth - sidebar)) * 2 - 1;
  pointer.y = -(e.clientY / innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(rayTargets, true);
  for (const hit of hits) {
    let o = hit.object;
    while (o) {
      if (o.userData.navKey) {
        const st = state.stations.get(o.userData.navKey);
        if (st) { requestSelection(st.section, st.index); return; }
      }
      o = o.parent;
    }
  }
});

// ---------- physics ----------
const boardOBB = new OBB(), tmpClosest = new THREE.Vector3(), tmpDelta = new THREE.Vector3();
function resolveSphereOBB(object, obb, radius, onImpact = null) {
  obb.clampPoint(object.position, tmpClosest);
  tmpDelta.copy(object.position).sub(tmpClosest); let dist = tmpDelta.length();
  if (dist < radius) {
    if (dist < 1e-5) {
      tmpDelta.copy(object.position).sub(obb.center);
      if (tmpDelta.lengthSq() < 1e-5) tmpDelta.set(0, 1, 0);
      dist = .001;
    }
    tmpDelta.normalize();
    object.position.copy(tmpClosest).addScaledVector(tmpDelta, radius + .002);
    const v = object.userData.velocity;
    const vn = v.dot(tmpDelta);
    if (vn < 0) {
      const impulse = -1.55 * vn;
      v.addScaledVector(tmpDelta, impulse);
      onImpact?.(tmpDelta.clone(), impulse, tmpClosest.clone());
    }
  }
}
function resolveSphereBox(object, box3, radius) {
  box3.clampPoint(object.position, tmpClosest);
  tmpDelta.copy(object.position).sub(tmpClosest); let dist = tmpDelta.length();
  if (dist < radius) {
    if (dist < 1e-5) { tmpDelta.copy(object.position).sub(box3.getCenter(new THREE.Vector3())); if (tmpDelta.lengthSq() < 1e-5) tmpDelta.set(0, 1, 0); dist = .001; }
    tmpDelta.normalize(); object.position.copy(tmpClosest).addScaledVector(tmpDelta, radius + .002);
    const v = object.userData.velocity; const vn = v.dot(tmpDelta); if (vn < 0) v.addScaledVector(tmpDelta, -1.45 * vn);
  }
}
function closestPointSegment(p, a, b, out) {
  const ab = b.clone().sub(a); const t = THREE.MathUtils.clamp(p.clone().sub(a).dot(ab) / (ab.lengthSq() || 1), 0, 1);
  return out.copy(a).addScaledVector(ab, t);
}
function resolveSphereArm(object, radius) {
  const pts = armWorldPoints(); const cp = new THREE.Vector3();
  for (let i = 0; i < pts.length - 1; i++) {
    closestPointSegment(object.position, pts[i], pts[i + 1], cp);
    tmpDelta.copy(object.position).sub(cp); const rr = radius + ARM.radius[i] + .05; let dist = tmpDelta.length();
    if (dist < rr) {
      if (dist < 1e-5) { tmpDelta.set(0, 1, 0); dist = .001; }
      tmpDelta.normalize(); object.position.copy(cp).addScaledVector(tmpDelta, rr);
      const v = object.userData.velocity; const vn = v.dot(tmpDelta); if (vn < 0) v.addScaledVector(tmpDelta, -1.5 * vn);
    }
  }
}
function updatePhysics(dt) {
  for (const o of state.spawned) {
    const v = o.userData.velocity, a = o.userData.angular, r = o.userData.radius || .55;
    v.y -= 7.7 * dt;
    o.position.addScaledVector(v, dt);
    o.rotation.x += a.x * dt; o.rotation.y += a.y * dt; o.rotation.z += a.z * dt;
    if (o.position.y - r < 0) { o.position.y = r; if (v.y < 0) v.y *= -.40; v.x *= .985; v.z *= .985; a.multiplyScalar(.991); }
    for (const st of state.stations.values()) {
      const modelBox = new THREE.Box3().setFromObject(st.model); resolveSphereBox(o, modelBox, r);
      const padBox = new THREE.Box3().setFromObject(st.pad); resolveSphereBox(o, padBox, r);
      const slotBox = new THREE.Box3().setFromObject(st.slotBack); resolveSphereBox(o, slotBox, r);
      if (st.board.visible || st === state.heldStation) {
        st.board.updateMatrixWorld(true);
        boardOBB.center.set(0, 0, 0); boardOBB.halfSize.set(BOARD.width / 2, BOARD.height / 2, BOARD.thickness / 2 + .14); boardOBB.rotation.identity();
        boardOBB.applyMatrix4(st.board.matrixWorld); resolveSphereOBB(o, boardOBB, r);
      }
    }
    if (state.heldBoard) {
      state.heldBoard.updateMatrixWorld(true);
      boardOBB.center.set(0, 0, 0); boardOBB.halfSize.set(BOARD.width / 2, BOARD.height / 2, BOARD.thickness / 2 + .14); boardOBB.rotation.identity();
      boardOBB.applyMatrix4(state.heldBoard.matrixWorld);
      resolveSphereOBB(o, boardOBB, r, (normal, impulse) => {
        // Two-way response: a thrown object can kick the constrained rigid page and make it swing.
        if (state.heldFollow) {
          state.heldFollow.swingVX += THREE.MathUtils.clamp(normal.z * impulse * .055, -.42, .42);
          state.heldFollow.swingVZ += THREE.MathUtils.clamp(-normal.x * impulse * .055, -.42, .42);
        }
      });
    }
    resolveSphereArm(o, r);
    const limitX = 7.1, minZ = -3.0, maxZ = 6.6;
    if (o.position.x + r > limitX) { o.position.x = limitX - r; v.x = -Math.abs(v.x) * .5; }
    if (o.position.x - r < -limitX) { o.position.x = -limitX + r; v.x = Math.abs(v.x) * .5; }
    if (o.position.z + r > maxZ) { o.position.z = maxZ - r; v.z = -Math.abs(v.z) * .5; }
    if (o.position.z - r < minZ) { o.position.z = minZ + r; v.z = Math.abs(v.z) * .5; }
  }
}

// ---------- add objects ----------
function spawnShape(kind) {
  let o;
  if (kind === 'plane') o = box(1.15, .08, 1.15, .025, 0x717980, .78, .05);
  else if (kind === 'circle') o = mesh(new THREE.CylinderGeometry(.52, .52, .10, 32), 0x7b746c, .62, .14);
  else if (kind === 'sphere') o = mesh(new THREE.SphereGeometry(.50, 26, 18), 0x64786b, .50, .13);
  else if (kind === 'icosphere') o = mesh(new THREE.IcosahedronGeometry(.52, 2), 0x5d7488, .48, .18);
  else if (kind === 'cylinder') o = mesh(new THREE.CylinderGeometry(.43, .43, .94, 24), 0x776b6b, .52, .18);
  else if (kind === 'cone') o = mesh(new THREE.ConeGeometry(.53, 1.0, 26), 0x81785e, .52, .18);
  else if (kind === 'torus') o = mesh(new THREE.TorusGeometry(.46, .15, 16, 42), 0x706979, .48, .20);
  else if (kind === 'monkey') {
    o = new THREE.Group();
    const base = mesh(new THREE.CylinderGeometry(.34, .42, .16, 24), 0x536171, .52, .34); base.position.y = .08; o.add(base);
    gltfLoader.load(SUZANNE_URL, g => {
      const s = g.scene; s.scale.setScalar(.42); s.position.y = .28;
      s.traverse(c => { if (c.isMesh) { c.material = mat(0xced4db, .48, .08); c.castShadow = true; } });
      o.add(s);
    });
  } else o = box(.86, .86, .86, .055, 0x5d7488, .48, .18);
  o.userData.radius = .54;
  o.position.set((Math.random() - .5) * 2.0, 4.0 + Math.random(), 2.0 + (Math.random() - .5) * 1.6);
  o.rotation.set(Math.random(), Math.random(), Math.random());
  o.userData.velocity = new THREE.Vector3((Math.random() - .5) * 1.2, 0, (Math.random() - .5) * 1.2);
  o.userData.angular = new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).multiplyScalar(1.4);
  scene.add(o); state.spawned.push(o); state.selectedSpawn = o; closeAddMenu(); if (state.spawned.length > 12) { const old = state.spawned.shift(); scene.remove(old); disposeObject(old); }
}
function tossSelected() { if (state.selectedSpawn) state.selectedSpawn.userData.velocity.set((Math.random() - .5) * 3, 5, (Math.random() - .5) * 3); }
function spinSelected() { state.selectedSpawn?.userData.angular.add(new THREE.Vector3(.7, 1.3, .35)); }
function deleteSelected() { const o = state.selectedSpawn; if (!o) return; scene.remove(o); state.spawned = state.spawned.filter(x => x !== o); disposeObject(o); state.selectedSpawn = state.spawned.at(-1) || null; }
function openAddMenu() { state.addOpen = true; dom.addMenu.hidden = false; dom.addObject.setAttribute('aria-expanded', 'true'); }
function closeAddMenu() { state.addOpen = false; dom.addMenu.hidden = true; dom.addObject.setAttribute('aria-expanded', 'false'); }
dom.addObject.addEventListener('click', () => state.addOpen ? closeAddMenu() : openAddMenu());
dom.addMenu.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => spawnShape(b.dataset.add)));
document.addEventListener('pointerdown', e => { if (state.addOpen && !dom.addMenu.contains(e.target) && !dom.addObject.contains(e.target)) closeAddMenu(); });
window.addEventListener('keydown', e => {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
  if (e.shiftKey && e.key.toLowerCase() === 'a') { e.preventDefault(); openAddMenu(); return; }
  if (state.addOpen && /^[1-9]$/.test(e.key)) { spawnShape(['plane', 'cube', 'circle', 'sphere', 'icosphere', 'cylinder', 'cone', 'torus', 'monkey'][Number(e.key) - 1]); return; }
  if (e.key.toLowerCase() === 'g') tossSelected();
  if (e.key.toLowerCase() === 'r') spinSelected();
  if (e.key.toLowerCase() === 'x') deleteSelected();
  if (e.key === 'Escape') closeAddMenu();
});

// ---------- animation / layout ----------
function updateArmTween(now) {
  if (!state.armTween) return;
  const t = Math.min(1, (now - state.armTween.start) / state.armTween.duration), e = ease(t), tw = state.armTween;
  armState.yaw = THREE.MathUtils.lerp(tw.fromYaw, tw.toYaw, e);
  armState.angles = tw.fromAngles.map((a, i) => THREE.MathUtils.lerp(a, tw.toAngles[i], e));
  if (t >= 1) state.armTween = null;
}
function updateGripTween(now) {
  if (!state.gripTween) return;
  const t = Math.min(1, (now - state.gripTween.start) / state.gripTween.duration);
  armState.grip = THREE.MathUtils.lerp(state.gripTween.from, state.gripTween.to, ease(t));
  if (t >= 1) state.gripTween = null;
}
function getSidebarWidth() { return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sidebar')) || 360; }
function resize() {
  const w = innerWidth, h = innerHeight, side = Math.min(getSidebarWidth(), w - 120), rw = Math.max(120, w - side);
  renderer.setSize(w, h, false);
  renderer.setViewport(side, 0, rw, h);
  renderer.setScissor(side, 0, rw, h);
  camera.aspect = rw / h; camera.updateProjectionMatrix(); camera.lookAt(CAMERA_TARGET);
}
window.addEventListener('resize', resize);

function readHash() {
  const raw = location.hash.replace(/^#/, '');
  if (!raw) { requestSelection('home', 0, false); return; }
  const [section, id] = raw.split('/');
  const s = CONTENT[section] ? section : 'home';
  const i = Math.max(0, CONTENT[s].findIndex(x => x.id === id));
  requestSelection(s, i, false);
}
window.addEventListener('hashchange', readHash);
document.querySelector('[data-direct-section="home"]').addEventListener('click', e => { e.preventDefault(); requestSelection('home', 0); });

let last = performance.now();
function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min(.033, (now - last) / 1000); last = now;
  updateArmTween(now); updateGripTween(now); updateLocalTweens(now); updateArmVisual(); updateHeldBoard(now, dt); updatePhysics(dt);
  renderer.render(scene, camera);
}

buildArm();
renderNav();
createAllStations();
resize();
updateArmVisual();
readHash();
requestAnimationFrame(animate);
