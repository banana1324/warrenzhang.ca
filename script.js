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
    id: 'home', label: 'Home', title: 'Software that reaches the physical world.',
    meta: 'Computer Science · Software · Embedded · Robotics',
    description: 'I build systems where code eventually has to interact with something real: a robot, a sensor, a radio, a circuit, or a person using it. This portfolio works the same way—the robot physically retrieves the page you choose.',
    tags: ['Python', 'C/C++', 'Embedded', 'Robotics'],
    metrics: [['$195K+', 'Kickstarter funding'], ['15', 'RP2040 apps + games'], ['200+', 'coaching hours']],
    details: [
      'Built software across ESP32, RP2040, Arduino Uno, and Raspberry Pi platforms.',
      'Connected software to computer vision, sensors, wireless networks, and robotics.',
      'Interested in software engineering, embedded systems, robotics, applied AI, and interactive 3D.'
    ],
    model: 'home'
  }],

  about: [{
    id: 'about', label: 'About', title: 'I like understanding the whole system.',
    meta: 'Waterloo Computer Science · Richmond, BC',
    description: 'My strongest projects cross boundaries. I like writing the software, connecting it to hardware, testing the system, and tracing failures across code, electronics, communication, timing, and mechanics rather than treating each layer separately.',
    tags: ['Systems', 'Embedded', 'Robotics', '3D'],
    metrics: [['Waterloo', 'Computer Science'], ['Hardware + code', 'preferred problem space'], ['Build → test', 'iteration over demos']],
    details: [
      'Technical toolkit includes Python, MicroPython, Java, C/C++, JavaScript, ESP32, RP2040, Raspberry Pi, LoRaWAN, MQTT, Node-RED, PID, and odometry.',
      'I enjoy Blender rigid-body simulations and armatures because they turn geometry into systems with behavior.',
      'Outside technical work, I have coached badminton and performed trombone in school and orchestral settings.'
    ],
    model: 'about'
  }],

  projects: [
    {
      id: 'wildfire', label: 'Wildfire Detection', title: 'Wildfire Detection System',
      meta: 'C++ · LoRaWAN · Raspberry Pi · BME680 · MQTT · Node-RED',
      description: 'An end-to-end IoT monitoring system built around environmental sensing, long-range radio, a Raspberry Pi gateway, and a software pipeline for processing and visualization.',
      tags: ['C++', 'BME680', 'LoRaWAN', 'MQTT'],
      metrics: [['BME680', 'environmental sensing'], ['LoRaWAN', 'long-range transport'], ['Node-RED', 'visualization']],
      details: [
        'Configured a sensor node and Raspberry Pi gateway for long-range LoRaWAN communication.',
        'Integrated MQTT and Node-RED to process and visualize incoming environmental data.',
        'Tested the complete sensor-to-network-to-dashboard path as one system.'
      ],
      model: 'wildfire'
    },
    {
      id: 'kc15', label: 'KC15', title: 'KC15 RP2040 Learning Platform',
      meta: 'Python · MicroPython · RP2040 · Educational Software',
      description: 'For EIM Technology’s KC15 microcontroller learning kit, I built and debugged 15 software applications and games and created tutorials so students could reproduce and understand each project.',
      tags: ['RP2040', 'MicroPython', 'Python', 'Testing'],
      metrics: [['15', 'apps + games'], ['RP2040', 'target platform'], ['Tutorials', 'learning material']],
      details: [
        'Developed and debugged 15 applications and games for the KC15 platform.',
        'Verified reliable execution on the Raspberry Pi Pico / RP2040 platform.',
        'Produced technical tutorials and demonstrations intended for student use.'
      ],
      model: 'kc15'
    },
    {
      id: 'vision', label: 'Vision Robotics', title: 'Computer Vision Robotics',
      meta: 'Python · Face Recognition · Finger Recognition · Robot Control',
      description: 'Computer-vision projects that convert human visual input into physical robot actions, connecting recognition software to embedded and robotic systems.',
      tags: ['Python', 'Computer Vision', 'Robotics'],
      metrics: [['Vision', 'human input'], ['Robot', 'physical output'], ['2 modes', 'face + finger recognition']],
      details: [
        'Built face-recognition and finger-recognition interactions.',
        'Converted visual classifications into commands for robotic systems.',
        'Combined perception software with embedded hardware rather than keeping vision as a desktop-only demo.'
      ],
      model: 'vision'
    },
    {
      id: 'analog', label: 'Analog Circuits', title: 'Analog Circuit II',
      meta: 'Op-Amps · MOSFETs · BJTs · Diodes · Laplace · Fourier',
      description: 'Technical verification work for an analog-circuit learning project, checking diagrams, explanations, and teaching material while reasoning about semiconductor devices and circuit behavior.',
      tags: ['Op-Amps', 'MOSFETs', 'BJTs', 'Transforms'],
      metrics: [['Op-Amps', 'active circuits'], ['MOSFET / BJT', 'semiconductors'], ['Laplace / Fourier', 'analysis']],
      details: [
        'Verified diagrams, technical text, and teaching points for correctness.',
        'Worked with operational amplifiers, MOSFETs, BJTs, and diode behavior.',
        'Used mathematical analysis to reason about circuit response and verification.'
      ],
      model: 'analog'
    }
  ],

  experience: [
    {
      id: 'eim', label: 'EIM Technology', title: 'Technical Support Intern · EIM Technology',
      meta: 'Nov 2024 – Jun 2026 · Richmond, BC',
      description: 'Worked across embedded software, hardware integration, product testing, technical verification, and learning materials—moving repeatedly between code, electronics, debugging tools, and real users.',
      tags: ['Embedded', 'MicroPython', 'LoRaWAN', 'Debugging'],
      metrics: [['$195K+', 'Kickstarter funding'], ['446', 'campaign backers'], ['3', 'campaigns contributed to']],
      details: [
        'Developed embedded software for ESP32, Raspberry Pi Pico, Arduino Uno, and Raspberry Pi.',
        'Integrated sensors and LoRaWAN systems and used oscilloscopes and logic analyzers for diagnosis.',
        'Contributed software development and promotional photography to three Kickstarter campaigns.'
      ],
      model: 'eim'
    },
    {
      id: 'vex', label: 'VEX V5 Robotics Competition', title: 'VEX V5 Robotics Competition',
      meta: 'Robotics Team 4471A · CAD · PID · Odometry',
      description: 'Competition robotics work where mechanical design, control software, autonomous behavior, and repeated testing had to function together under real match constraints.',
      tags: ['VEX V5', 'CAD', 'PID Control', 'Odometry'],
      metrics: [['4471A', 'competition team'], ['PID', 'motion control'], ['Odometry', 'position tracking']],
      details: [
        'Worked on CAD and mechanical robot systems alongside programming and control.',
        'Applied PID control and odometry to improve repeatability and autonomous movement.',
        'Iterated through testing, mechanical changes, and software tuning in a competition environment.'
      ],
      model: 'vex'
    },
    {
      id: 'coaching', label: 'Badminton Coach', title: 'Badminton Coach · Stage18',
      meta: 'May 2024 – May 2026 · Richmond, BC',
      description: 'Coached young athletes in group lessons, turning technical corrections into clear instructions while keeping sessions organized, focused, and supportive.',
      tags: ['Coaching', 'Communication', 'Leadership'],
      metrics: [['200+', 'coaching hours'], ['40+', 'students coached'], ['7–15', 'student ages']],
      details: [
        'Coached more than 40 students across over 200 hours.',
        'Helped students strengthen badminton technique and confidence.',
        'Set clear expectations for conduct and sportsmanship while keeping group lessons focused.'
      ],
      model: 'coaching'
    },
    {
      id: 'orchestra', label: 'Orchestra', title: 'Second Trombone · Vancouver Chinese Philharmonic Orchestra',
      meta: 'Orchestral Performance · Trombone',
      description: 'Performed as second trombone with the Vancouver Chinese Philharmonic Orchestra, including a performance for the Consulate-General of the People’s Republic of China in Vancouver.',
      tags: ['Trombone', 'Orchestra', 'Performance'],
      metrics: [['2nd', 'trombone part'], ['Orchestra', 'ensemble performance'], ['Vancouver', 'Chinese Philharmonic']],
      details: [
        'Performed as second trombone with the Vancouver Chinese Philharmonic Orchestra.',
        'Played at an event for the Chinese Consulate-General in Vancouver.',
        'Worked in a large ensemble where timing, balance, preparation, and reliability all matter.'
      ],
      model: 'orchestra'
    }
  ],

  interests: [
    {
      id: 'blender', label: 'Blender', title: 'Blender · Physics · Armatures',
      meta: 'Rigid Bodies · Rigging · Mechanical Motion',
      description: 'I enjoy Blender most when a scene behaves like a system rather than a static render. Rigid-body simulations, collisions, armatures, and mechanical motion are the parts I keep returning to.',
      tags: ['Rigid Bodies', 'Armatures', '3D', 'Simulation'],
      metrics: [['Physics', 'rigid-body behavior'], ['Rigging', 'armatures + joints'], ['Three.js', 'interactive web 3D']],
      details: [
        'Rigid-body simulations and collision behavior.',
        'Armatures and mechanical motion.',
        'Interactive 3D used as interface behavior rather than background decoration.'
      ],
      model: 'blender'
    },
    {
      id: 'hardware', label: 'Hardware', title: 'Hardware gives software consequences.',
      meta: 'Sensors · Microcontrollers · Physical Debugging',
      description: 'I like the point where software stops being abstract and has to interact with a real sensor, motor, radio, or circuit—where a bug may live in timing, wiring, signal integrity, or the environment.',
      tags: ['ESP32', 'RP2040', 'Sensors', 'Oscilloscope'],
      metrics: [['ESP32', 'wireless MCU'], ['RP2040', 'embedded platform'], ['Scope', 'physical debugging']],
      details: [
        'Embedded systems and microcontrollers.',
        'Sensor and wireless communication integration.',
        'Oscilloscopes and logic analyzers for physical debugging.'
      ],
      model: 'hardware'
    },
    {
      id: 'music', label: 'Music', title: 'Trombone & live audio.',
      meta: 'Orchestral Performance · Live Sound',
      description: 'Music is another place where systems and timing matter. I have played trombone in school and orchestral settings and helped with live audio setup, teardown, and troubleshooting.',
      tags: ['Trombone', 'Orchestra', 'Live Audio'],
      metrics: [['Trombone', 'performance'], ['2nd', 'orchestral part'], ['Audio', 'live systems']],
      details: [
        'Second trombone with the Vancouver Chinese Philharmonic Orchestra.',
        'School ensemble and trombone experience.',
        'Live audio setup, teardown, and troubleshooting.'
      ],
      model: 'music'
    }
  ],

  contact: [{
    id: 'contact', label: 'Contact', title: 'Build something interesting with me.',
    meta: 'Software · Embedded · Robotics · AI',
    description: 'For software, embedded, robotics, or AI-related opportunities, email is the easiest way to reach me. GitHub, LinkedIn, YouTube, and my résumé are linked from the navigation.',
    tags: ['Email', 'GitHub', 'LinkedIn', 'YouTube'],
    metrics: [['Email', 'warrenz7980@gmail.com'], ['GitHub', 'banana1324'], ['YouTube', '@goosehjonk918']],
    details: [
      'Email: warrenz7980@gmail.com',
      'GitHub: github.com/banana1324',
      'LinkedIn: linkedin.com/in/fuyuanzhang'
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
scene.fog = new THREE.Fog(0x081018, 15, 31);

const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
camera.position.set(0, 4.65, 14.9);
const CAMERA_TARGET = new THREE.Vector3(0, 1.45, 1.15);
camera.lookAt(CAMERA_TARGET);

scene.add(new THREE.HemisphereLight(0xf7fbff, 0x1b2430, 2.35));
const keyLight = new THREE.DirectionalLight(0xffffff, 3.3);
keyLight.position.set(2.7, 10.5, 8.1);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -10;
keyLight.shadow.camera.right = 10;
keyLight.shadow.camera.top = 10;
keyLight.shadow.camera.bottom = -10;
scene.add(keyLight);
const fillLight = new THREE.PointLight(0x86b8eb, 14, 16);
fillLight.position.set(0, 5.1, 5.0);
scene.add(fillLight);
const rimLight = new THREE.DirectionalLight(0x78a8e8, 1.35);
rimLight.position.set(-5, 4.5, -4.8);
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
const floor = box(16.8, .24, 11.4, .08, 0x1b2530, .96, .03);
floor.position.set(0, -.12, 1.4);
scene.add(floor);
const grid = new THREE.GridHelper(16.2, 24, 0x465667, 0x2e3947);
grid.position.set(0, .012, 1.4);
grid.scale.z = .70;
scene.add(grid);
const rear = box(15.0, 5.1, .14, .05, 0x10161d, .94, .02);
rear.position.set(0, 2.45, -2.5);
scene.add(rear);
const sideL = box(.14, 5.1, 8.8, .05, 0x0e1319, .94, .02); sideL.position.set(-7.5, 2.45, 1.4); scene.add(sideL);
const sideR = sideL.clone(); sideR.position.x = 7.5; scene.add(sideR);
const glow = mesh(new THREE.CircleGeometry(1.2, 40), 0x2f4f7c, .4, .05);
glow.material.transparent = true; glow.material.opacity = .22; glow.position.set(0, 2.8, -2.36); scene.add(glow);
const hoseA = tubePath([new THREE.Vector3(-1.6,4.6,-2.36), new THREE.Vector3(-1.6,3.7,-1.5), new THREE.Vector3(-.8,3.05,-1.0), new THREE.Vector3(-.2,2.2,-.6)], .09);
const hoseB = tubePath([new THREE.Vector3(1.6,4.6,-2.36), new THREE.Vector3(1.6,3.8,-1.55), new THREE.Vector3(.9,3.1,-1.0), new THREE.Vector3(.28,2.25,-.68)], .09);
scene.add(hoseA, hoseB);

// ---------- arm ----------
const ARM = {
  base: new THREE.Vector3(0, .64, -2.00),
  lengths: [1.35, 1.6, 1.45, 1.05],
  rest: [1.00, -.58, .42, -.28],
  limits: [[.20, 2.1], [-1.45, .55], [-1.2, 1.25], [-1.25, .85]],
  radius: [.28, .23, .19, .16]
};
const armState = { yaw: 0, angles: [...ARM.rest], grip: .26 };
const armVisual = { root: null, links: [], joints: [], wrist: null, fl: null, fr: null, socket: null };

function buildArm() {
  const root = new THREE.Group();
  const plinth = mesh(new THREE.CylinderGeometry(.95, 1.18, .42, 46), 0x080a0e, .58, .28);
  plinth.position.copy(ARM.base).setY(.18);
  root.add(plinth);
  const column = mesh(new THREE.CylinderGeometry(.72, .62, 1.12, 38), 0x3a4653, .38, .72);
  column.position.copy(ARM.base).setY(.62);
  root.add(column);
  const collar = mesh(new THREE.TorusGeometry(.75, .08, 20, 48), 0x8eb7de, .22, .72);
  collar.position.copy(ARM.base).setY(1.14); collar.rotation.x = Math.PI / 2;
  root.add(collar);

  for (let i = 0; i < ARM.lengths.length; i++) {
    const link = mesh(new THREE.CylinderGeometry(ARM.radius[i], ARM.radius[i], 1, 34), 0x788390, .34, .82);
    root.add(link); armVisual.links.push(link);
    const joint = new THREE.Group();
    const shell = mesh(new THREE.SphereGeometry(ARM.radius[i] + .08, 28, 22), 0x060a10, .36, .36);
    joint.add(shell);
    const ring = mesh(new THREE.TorusGeometry(ARM.radius[i] + .075, .028, 18, 42), 0x8ec0ee, .18, .82);
    ring.rotation.x = Math.PI / 2; joint.add(ring);
    root.add(joint); armVisual.joints.push(joint);
  }

  const wrist = new THREE.Group();
  const wristBody = box(.38, .24, .58, .05, 0x090e15, .44, .32); wrist.add(wristBody);
  const wristCollar = mesh(new THREE.CylinderGeometry(.16, .16, .22, 24), 0x8ec0ee, .18, .82);
  wristCollar.rotation.z = Math.PI / 2; wristCollar.position.z = -.08; wrist.add(wristCollar);
  const fl = box(.10, .58, .10, .02, 0xcbd6df, .22, .6); fl.position.set(-.15, -.24, .12); wrist.add(fl);
  const fr = box(.10, .58, .10, .02, 0xcbd6df, .22, .6); fr.position.set(.15, -.24, .12); wrist.add(fr);
  const tipL = box(.08, .16, .16, .02, 0x0c1118, .46, .18); tipL.position.set(0, -.34, .10); fl.add(tipL);
  const tipR = box(.08, .16, .16, .02, 0x0c1118, .46, .18); tipR.position.set(0, -.34, .10); fr.add(tipR);
  const socket = new THREE.Object3D(); socket.position.set(0, -.44, .11); wrist.add(socket);
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
function clamp(v, [lo, hi]) { return Math.max(lo, Math.min(hi, v)); }
function nearestAngle(current, target) { return current + Math.atan2(Math.sin(target - current), Math.cos(target - current)); }
function segDist2D(a, b, c, d) {
  function pointSeg(p, a, b) {
    const ab = b.clone().sub(a); const den = ab.lengthSq() || 1;
    const t = THREE.MathUtils.clamp(p.clone().sub(a).dot(ab) / den, 0, 1);
    return p.distanceTo(a.clone().addScaledVector(ab, t));
  }
  return Math.min(pointSeg(a, c, d), pointSeg(b, c, d), pointSeg(c, a, b), pointSeg(d, a, b));
}
function selfCollides(angles) {
  const p = forward2D(angles);
  return segDist2D(p[0], p[1], p[2], p[3]) < .42 || segDist2D(p[0], p[1], p[3], p[4]) < .45 || segDist2D(p[1], p[2], p[3], p[4]) < .36;
}
function solveIK(target) {
  const dx = target.x - ARM.base.x, dz = target.z - ARM.base.z;
  const goal = new THREE.Vector2(Math.hypot(dx, dz), target.y - ARM.base.y);
  const yaw = nearestAngle(armState.yaw, Math.atan2(dz, dx));
  let angles = [...ARM.rest];
  for (let iter = 0; iter < 38; iter++) {
    for (let j = angles.length - 1; j >= 0; j--) {
      const p = forward2D(angles), joint = p[j], end = p[p.length - 1];
      const a = end.clone().sub(joint), b = goal.clone().sub(joint);
      const cross = a.x * b.y - a.y * b.x, dot = a.dot(b);
      angles[j] -= .54 * Math.atan2(cross, dot);
      angles[j] = clamp(angles[j], ARM.limits[j]);
    }
    angles = angles.map((a, i) => THREE.MathUtils.lerp(a, ARM.rest[i], .0022));
  }
  if (selfCollides(angles)) angles = angles.map((a, i) => THREE.MathUtils.lerp(a, ARM.rest[i], .55));
  return { yaw, angles };
}
function armWorldPoints(yaw = armState.yaw, angles = armState.angles) {
  const p = forward2D(angles); const dir = new THREE.Vector3(Math.cos(yaw), 0, Math.sin(yaw));
  return p.map(q => ARM.base.clone().addScaledVector(dir, q.x).add(new THREE.Vector3(0, q.y, 0)));
}
function placeLink(o, a, b) {
  const d = b.clone().sub(a), len = d.length();
  const mid = a.clone().add(b).multiplyScalar(.5); o.position.copy(mid);
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize());
  o.scale.set(1, Math.max(.1, len - .20), 1);
}
function updateArmVisual() {
  const p = armWorldPoints();
  armVisual.links.forEach((l, i) => placeLink(l, p[i], p[i + 1]));
  armVisual.joints.forEach((j, i) => { j.position.copy(p[i]); j.rotation.y = -armState.yaw; });
  const end = p[p.length - 1]; armVisual.wrist.position.copy(end); armVisual.wrist.rotation.set(0, -armState.yaw + Math.PI / 2, 0);
  armVisual.fl.position.x = -armState.grip; armVisual.fr.position.x = armState.grip;
}

function ease(t) { return 1 - Math.pow(1 - t, 3); }
function wait(ms) { return new Promise(r => setTimeout(r, state.reducedMotion ? 0 : ms)); }
function moveArmTo(target, duration = 360) { const s = solveIK(target); return moveArmPose(s.yaw, s.angles, duration); }
function moveArmPose(yaw, angles, duration = 320) {
  yaw = nearestAngle(armState.yaw, yaw);
  if (state.reducedMotion) { armState.yaw = yaw; armState.angles = [...angles]; updateArmVisual(); return Promise.resolve(); }
  state.armTween = { start: performance.now(), duration, fromYaw: armState.yaw, toYaw: yaw, fromAngles: [...armState.angles], toAngles: [...angles] };
  return wait(duration);
}
function setGrip(x, duration = 100) {
  if (state.reducedMotion) { armState.grip = x; return Promise.resolve(); }
  state.gripTween = { start: performance.now(), duration, from: armState.grip, to: x };
  return wait(duration);
}
function socketWorld() {
  armVisual.socket.updateMatrixWorld(true);
  const v = new THREE.Vector3(); armVisual.socket.getWorldPosition(v); return v;
}

// ---------- info boards ----------
const BOARD = { width: 3.35, height: 4.35, thickness: .075, handleX: 0.0, handleY: 2.02 };
function createBoard(section, item, index) {
  const group = new THREE.Group();
  const base = box(BOARD.width, BOARD.height, BOARD.thickness, .045, 0xf6f7f9, .95, .01);
  group.add(base);
  const clip = box(.48, .18, .14, .04, 0xc9ced6, .50, .34); clip.position.set(0, BOARD.height / 2 - .07, .03); group.add(clip);
  const handleAnchor = new THREE.Object3D(); handleAnchor.position.set(BOARD.handleX, BOARD.handleY, .045); group.add(handleAnchor);
  group.userData.handleAnchor = handleAnchor;

  const canvas = document.createElement('canvas'); canvas.width = 1500; canvas.height = 1850;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f6f7f9'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4f8fd7'; ctx.fillRect(82, 96, 52, 5);
  ctx.fillStyle = '#8b96a3'; ctx.font = '600 28px Inter, Arial'; ctx.fillText(section.toUpperCase(), 84, 150);
  ctx.fillStyle = '#0d1117'; ctx.font = '700 76px Inter, Arial';
  wrapText(ctx, item.title, 84, 235, 1325, 86);
  ctx.fillStyle = '#66707d'; ctx.font = '500 34px Inter, Arial';
  wrapText(ctx, item.meta, 84, 430, 1300, 44);

  drawPills(ctx, item.tags.slice(0, 4), 84, 496);

  ctx.fillStyle = '#202833'; ctx.font = '500 37px Inter, Arial';
  wrapText(ctx, item.description, 84, 610, 1310, 54);

  const metricY = 860;
  item.metrics.slice(0, 3).forEach((m, i) => {
    const x = 84 + i * 432;
    ctx.fillStyle = '#0e1319'; ctx.font = '700 58px Inter, Arial'; ctx.fillText(m[0], x, metricY);
    ctx.fillStyle = '#7b8692'; ctx.font = '600 28px Inter, Arial'; ctx.fillText(m[1], x, metricY + 52);
    if (i < 2) { ctx.fillStyle = '#d8dde3'; ctx.fillRect(x + 365, metricY - 34, 2, 92); }
  });

  ctx.fillStyle = '#cfd5dc'; ctx.fillRect(84, 1000, 1330, 2);
  ctx.fillStyle = '#8b96a3'; ctx.font = '700 26px Inter, Arial'; ctx.fillText('KEY HIGHLIGHTS', 84, 1060);
  ctx.fillStyle = '#1c232d'; ctx.font = '500 34px Inter, Arial';
  let y = 1140;
  item.details.slice(0, 3).forEach(line => {
    ctx.fillStyle = '#4f8fd7'; ctx.fillRect(86, y - 19, 14, 14);
    ctx.fillStyle = '#1c232d';
    y = wrapText(ctx, line, 124, y, 1288, 46) + 34;
  });
  ctx.fillStyle = '#9ca5af'; ctx.font = '500 24px Inter, Arial';
  ctx.fillText(`Warren Zhang · ${item.label}`, 84, 1768);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(BOARD.width - .18, BOARD.height - .18),
    new THREE.MeshBasicMaterial({ map: texture, toneMapped: false })
  );
  plane.position.z = BOARD.thickness / 2 + .002;
  group.add(plane);
  return group;
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
    ctx.fillStyle = '#4f8fd7'; ctx.fillText(label, cursor + 21, y + 29);
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
const STATION_RADIUS = 4.45;
const rayTargets = [];
const gltfLoader = new GLTFLoader();
const SUZANNE_URL = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/refs/heads/main/2.0/Suzanne/glTF/Suzanne.gltf';

function createAllStations() {
  const angles = distributeAngles(FLAT_ITEMS.length, THREE.MathUtils.degToRad(160), THREE.MathUtils.degToRad(20));
  FLAT_ITEMS.forEach((entry, i) => {
    const theta = angles[i];
    const x = Math.cos(theta) * STATION_RADIUS;
    const z = Math.sin(theta) * STATION_RADIUS + 1.55;
    const root = new THREE.Group();
    root.position.set(x, 0, z);
    root.rotation.y = Math.atan2(camera.position.x - x, camera.position.z - z);

    const pad = box(2.65, .12, 1.72, .09, 0x141d26, .84, .08); pad.position.y = .06; root.add(pad);
    const ring = mesh(new THREE.TorusGeometry(.86, .028, 12, 44), 0x465566, .44, .30); ring.rotation.x = Math.PI / 2; ring.position.y = .13; root.add(ring);
    const slotBase = box(.54, .12, 1.08, .04, 0x111821, .76, .08); slotBase.position.set(.82, .09, .10); root.add(slotBase);
    const slotBack = box(.22, 1.22, .16, .03, 0x0d1219, .84, .06); slotBack.position.set(.82, .61, -.23); root.add(slotBack);
    const slotMouth = box(.08, 1.08, .14, .02, 0x04070b, .86, .02); slotMouth.position.set(.82, .66, .27); root.add(slotMouth);

    const model = createTopicModel(entry.item.model, entry.key); model.position.set(-.38, .16, .10); model.scale.setScalar(.72); root.add(model);
    const board = createBoard(entry.section, entry.item, entry.index); board.visible = false; root.add(board);

    const guide = new THREE.Group();
    guide.position.set(.88, 1.16, .44); guide.rotation.set(-.06, 0, 0); guide.scale.setScalar(.58); root.add(guide);
    const guideHandle = new THREE.Object3D(); guideHandle.position.set(BOARD.handleX, BOARD.handleY, .045); guide.add(guideHandle);

    board.position.set(.82, .30, -.16);
    board.rotation.set(0, 0, 0);
    board.scale.setScalar(.54);
    board.userData.hiddenLocal = { p: new THREE.Vector3(.82, .30, -.16), q: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0)), s: new THREE.Vector3(.58, .58, .58) };
    board.userData.shownLocal = { p: new THREE.Vector3(.88, 1.16, .44), q: new THREE.Quaternion().setFromEuler(new THREE.Euler(-.06, 0, 0)), s: new THREE.Vector3(.58, .58, .58) };

    scene.add(root); root.updateMatrixWorld(true);
    const station = { ...entry, root, pad, ring, model, board, slotBase, slotBack, slotMouth, guide, guideHandle };
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
  station.guideHandle.updateMatrixWorld(true);
  const v = new THREE.Vector3(); station.guideHandle.getWorldPosition(v); return v;
}
function stationShownWorldPose(station) {
  station.guide.updateMatrixWorld(true);
  const p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  station.guide.matrixWorld.decompose(p, q, s);
  return { position: p, quaternion: q, scale: s };
}
function setSelectedStation(key) {
  state.selectedKey = key;
  for (const [k, s] of state.stations) {
    const selected = k === key;
    s.ring.material.color.setHex(selected ? 0x8eb7de : 0x465566);
    s.root.scale.setScalar(selected ? 1.05 : 1);
    s.slotMouth.material.color.setHex(selected ? 0x8eb7de : 0x04070b);
    s.slotMouth.material.emissive?.setHex?.(selected ? 0x214a72 : 0x000000);
    if (s.slotMouth.material.emissiveIntensity !== undefined) s.slotMouth.material.emissiveIntensity = selected ? .52 : 0;
  }
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
  await tweenLocalTransform(station.root, board, board.userData.shownLocal, 240);
}
async function slideBoardIn(station) {
  const board = station.board;
  await tweenLocalTransform(station.root, board, board.userData.hiddenLocal, 240, () => { board.visible = false; });
}
function beginHold(station) {
  const board = station.board;
  scene.attach(board);
  state.heldBoard = board;
  state.heldStation = station;
  const socket = socketWorld();
  const target = heldBoardTargetPose(new THREE.Vector3(), socket, new THREE.Vector3());
  state.heldFollow = {
    targetPrev: socket.clone(),
    tiltX: 0,
    tiltZ: 0
  };
  board.position.copy(target.position);
  board.quaternion.copy(target.quaternion);
}
function heldBoardTargetPose(socket = socketWorld(), newSocket = socket, socketDelta = new THREE.Vector3()) {
  const facing = new THREE.Object3D();
  facing.position.copy(newSocket);
  facing.lookAt(camera.position.x, camera.position.y - .1, camera.position.z);
  const q = facing.quaternion.clone();
  const lift = new THREE.Quaternion().setFromEuler(new THREE.Euler(.05, 0, 0));
  q.multiply(lift);
  const localHandle = new THREE.Vector3(BOARD.handleX, BOARD.handleY, 0).applyQuaternion(q);
  const hangOffset = new THREE.Vector3(0, -0.06, 0.02).applyQuaternion(q);
  return { position: newSocket.clone().sub(localHandle).add(hangOffset), quaternion: q };
}
function updateHeldBoard(now, dt) {
  if (!state.heldBoard || !state.heldFollow) return;
  const socket = socketWorld();
  const delta = socket.clone().sub(state.heldFollow.targetPrev);
  state.heldFollow.targetPrev.copy(socket);
  state.heldFollow.tiltX = THREE.MathUtils.lerp(state.heldFollow.tiltX, THREE.MathUtils.clamp(delta.z * .45, -.10, .10), .16);
  state.heldFollow.tiltZ = THREE.MathUtils.lerp(state.heldFollow.tiltZ, THREE.MathUtils.clamp(-delta.x * .45, -.10, .10), .16);
  const target = heldBoardTargetPose(undefined, socket, delta);
  const tilt = new THREE.Quaternion().setFromEuler(new THREE.Euler(state.heldFollow.tiltX, 0, state.heldFollow.tiltZ));
  target.quaternion.multiply(tilt);
  state.heldBoard.position.lerp(target.position, state.reducedMotion ? 1 : .18);
  state.heldBoard.quaternion.slerp(target.quaternion, state.reducedMotion ? 1 : .16);
}

const SAFE_PRESENT = new THREE.Vector3(0, 3.55, 2.10);
const SAFE_UP = new THREE.Vector3(0, 4.15, -.60);
const SAFE_ANGLES = [...ARM.rest];
async function stowCurrentBoard() {
  if (!state.heldBoard || !state.heldStation) return;
  const station = state.heldStation;
  dom.status.textContent = 'Returning page';
  const guide = stationGuideWorld(station);
  const above = guide.clone().add(new THREE.Vector3(0, .55, .22));
  await moveArmTo(above, 340);
  await moveArmTo(guide, 180);
  await setGrip(.26, 100);
  const board = state.heldBoard;
  state.heldBoard = null; state.heldFollow = null;
  station.root.attach(board);
  await tweenLocalTransform(station.root, board, station.board.userData.shownLocal, 120);
  await slideBoardIn(station);
  state.heldStation = null;
  await moveArmTo(SAFE_UP, 260);
  await moveArmPose(0, SAFE_ANGLES, 240);
}
async function pickupBoard(station) {
  dom.status.textContent = 'Revealing page';
  await slideBoardOut(station);
  setSelectedStation(station.key);
  updateNav();
  const guide = stationGuideWorld(station);
  const above = guide.clone().add(new THREE.Vector3(0, .55, .22));
  dom.status.textContent = 'Reaching page';
  await setGrip(.26, 80);
  await moveArmTo(above, 360);
  await moveArmTo(guide, 180);
  dom.status.textContent = 'Grabbing page';
  await setGrip(.09, 120);
  beginHold(station);
  await moveArmTo(above, 220);
  await moveArmTo(SAFE_UP, 280);
  dom.status.textContent = 'Presenting page';
  await moveArmTo(SAFE_PRESENT, 440);
  const settle = SAFE_PRESENT.clone().add(new THREE.Vector3(0, .02, .10));
  await moveArmTo(settle, 110);
  await moveArmTo(SAFE_PRESENT, 140);
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
function resolveSphereOBB(object, obb, radius) {
  obb.clampPoint(object.position, tmpClosest);
  tmpDelta.copy(object.position).sub(tmpClosest); let dist = tmpDelta.length();
  if (dist < radius) {
    if (dist < 1e-5) { tmpDelta.copy(object.position).sub(obb.center); if (tmpDelta.lengthSq() < 1e-5) tmpDelta.set(0, 1, 0); dist = .001; }
    tmpDelta.normalize(); object.position.copy(tmpClosest).addScaledVector(tmpDelta, radius + .002);
    const v = object.userData.velocity; const vn = v.dot(tmpDelta); if (vn < 0) v.addScaledVector(tmpDelta, -1.55 * vn);
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
        boardOBB.center.set(0, 0, 0); boardOBB.halfSize.set(BOARD.width / 2, BOARD.height / 2, BOARD.thickness / 2 + .03); boardOBB.rotation.identity();
        boardOBB.applyMatrix4(st.board.matrixWorld); resolveSphereOBB(o, boardOBB, r);
      }
    }
    if (state.heldBoard) {
      state.heldBoard.updateMatrixWorld(true);
      boardOBB.center.set(0, 0, 0); boardOBB.halfSize.set(BOARD.width / 2, BOARD.height / 2, BOARD.thickness / 2 + .03); boardOBB.rotation.identity();
      boardOBB.applyMatrix4(state.heldBoard.matrixWorld); resolveSphereOBB(o, boardOBB, r);
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
