import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const CONTENT = {
  projects: [
    {
      id: 'wildfire',
      label: 'Wildfire',
      kicker: 'PROJECT',
      title: 'Wildfire Detection',
      meta: 'ESP32 · LoRaWAN · MQTT · Python',
      description:
        'A remote sensing system built around low-power wireless nodes and a software pipeline for monitoring wildfire-related conditions.',
      details: [
        'Designed around long-range LoRaWAN communication for remote deployments.',
        'Connected embedded sensing, networking, and software into one end-to-end system.',
        'Built a dashboard and tested the full sensor-to-visualization pipeline.'
      ],
      primary: { label: 'Project details ↗', href: '#' },
      secondary: { label: 'GitHub ↗', href: 'https://github.com/banana1324' },
      scene: 'wildfire'
    },
    {
      id: 'robotics',
      label: 'Robotics',
      kicker: 'PROJECT',
      title: 'Robotics',
      meta: 'Computer Vision · PID · Odometry · Embedded',
      description:
        'Robotics work spanning perception, motion control, embedded systems, and competition hardware.',
      details: [
        'Used PID control and odometry for repeatable robot movement.',
        'Worked with computer vision for face and hand/finger recognition.',
        'Built and debugged systems across software, electronics, and mechanics.'
      ],
      primary: { label: 'Project details ↗', href: '#' },
      secondary: { label: 'GitHub ↗', href: 'https://github.com/banana1324' },
      scene: 'robot'
    },
    {
      id: 'embedded',
      label: 'Embedded',
      kicker: 'PROJECT',
      title: 'Embedded Systems',
      meta: 'RP2040 · ESP32 · MicroPython · Sensors',
      description:
        'Embedded projects using microcontrollers, sensors, wireless communication, and practical hardware debugging tools.',
      details: [
        'Worked with ESP32, RP2040, Arduino, Raspberry Pi, and sensor integrations.',
        'Used oscilloscopes and logic analyzers to diagnose firmware and hardware issues.',
        'Built systems intended to run reliably outside a desktop environment.'
      ],
      primary: { label: 'Project details ↗', href: '#' },
      secondary: { label: 'GitHub ↗', href: 'https://github.com/banana1324' },
      scene: 'embedded'
    },
    {
      id: 'web',
      label: 'Web',
      kicker: 'PROJECT',
      title: 'Web Projects',
      meta: 'JavaScript · HTML/CSS · Interactive UI',
      description:
        'Web work focused on interfaces that feel responsive and intentional rather than looking like static résumé pages.',
      details: [
        'Built responsive interfaces for desktop, tablet, and mobile.',
        'Experimented with physics, 3D scenes, motion, and interaction design.',
        'Used Git and GitHub for version control and deployment.'
      ],
      primary: { label: 'Project details ↗', href: '#' },
      secondary: { label: 'GitHub ↗', href: 'https://github.com/banana1324' },
      scene: 'web'
    }
  ],

  experience: [
    {
      id: 'eim',
      label: 'EIM',
      kicker: 'EXPERIENCE',
      title: 'EIM Technology',
      meta: 'Technical Support Intern · 2024–2026',
      description:
        'Worked across embedded software, hardware integration, computer vision, testing, and technical learning materials.',
      details: [
        'Developed embedded software for ESP32, RP2040, Arduino Uno, and Raspberry Pi.',
        'Integrated sensors and LoRaWAN systems.',
        'Built and debugged apps and games for the KC15 EIM learning kit.'
      ],
      primary: { label: 'Resume ↗', href: 'assets/resume.pdf' },
      secondary: null,
      scene: 'embedded'
    },
    {
      id: 'robotics-team',
      label: '4471A',
      kicker: 'EXPERIENCE',
      title: 'Robotics Team 4471A',
      meta: 'CAD · PID · Odometry · Competition Robotics',
      description:
        'Competition robotics work combining mechanical design with software control and iterative testing.',
      details: [
        'Worked on CAD and robot systems.',
        'Applied PID and odometry concepts.',
        'Built under competition constraints with a team.'
      ],
      primary: { label: 'Resume ↗', href: 'assets/resume.pdf' },
      secondary: null,
      scene: 'robot'
    },
    {
      id: 'coaching',
      label: 'Coaching',
      kicker: 'EXPERIENCE',
      title: 'Badminton Coach',
      meta: '200+ hours · 40+ students',
      description:
        'Coached intermediate youth groups and learned how to explain movement, diagnose mistakes, and keep a group progressing together.',
      details: [
        'Coached students ages 7–15.',
        'Worked with 40+ learners over time.',
        'Balanced technical instruction with clear, concise feedback.'
      ],
      primary: { label: 'Resume ↗', href: 'assets/resume.pdf' },
      secondary: null,
      scene: 'racket'
    }
  ],

  interests: [
    {
      id: 'blender',
      label: 'Blender',
      kicker: 'INTEREST',
      title: 'Blender & 3D',
      meta: 'Rigid Bodies · Armatures · Procedural Play',
      description:
        'I like Blender most when the scene behaves like a system: objects collide, mechanisms move, and armatures make things feel alive.',
      details: [
        'Rigid-body simulations and collisions.',
        'Armatures and mechanical motion.',
        '3D interaction as part of interface design.'
      ],
      primary: null,
      secondary: null,
      scene: 'monkey'
    },
    {
      id: 'hardware',
      label: 'Hardware',
      kicker: 'INTEREST',
      title: 'Hardware',
      meta: 'Electronics · Sensors · Debugging',
      description:
        'I enjoy projects where code eventually has to interact with a real sensor, motor, radio, or circuit.',
      details: [
        'Embedded systems and microcontrollers.',
        'Robotics and sensor integration.',
        'Debugging physical systems.'
      ],
      primary: null,
      secondary: null,
      scene: 'embedded'
    },
    {
      id: 'music',
      label: 'Music',
      kicker: 'INTEREST',
      title: 'Music & Audio',
      meta: 'Trombone · Live Audio',
      description:
        'Music has been another place where timing, systems, and teamwork matter. I have played trombone and helped with live audio setup.',
      details: [
        'Trombone performance.',
        'Audio setup and teardown.',
        'Learning systems by listening and adjusting.'
      ],
      primary: null,
      secondary: null,
      scene: 'trombone'
    }
  ],

  about: [
    {
      id: 'about',
      label: 'About',
      kicker: 'ABOUT',
      title: 'Warren Zhang',
      meta: 'Computer Science · University of Waterloo',
      description:
        'I build software and embedded systems, especially projects that cross the boundary between code and the physical world.',
      details: [
        'Interested in software engineering, robotics, embedded systems, and applied AI.',
        'I like interfaces with real interaction instead of decorative motion.',
        'This site is deliberately short: pick something and it comes to you.'
      ],
      primary: { label: 'Resume ↗', href: 'assets/resume.pdf' },
      secondary: null,
      scene: 'portrait'
    }
  ],

  contact: [
    {
      id: 'contact',
      label: 'Contact',
      kicker: 'CONTACT',
      title: 'Get in touch',
      meta: 'GitHub · LinkedIn · Email',
      description:
        'Email, GitHub, and LinkedIn are all here for quick contact or a closer look at my work.',
      details: [
        'Open to software, embedded, robotics, and AI-related opportunities.',
        'Based in Richmond, BC and studying Computer Science at the University of Waterloo.'
      ],
      primary: {
        label: 'Email ↗',
        href: 'mailto:warrenz7980@gmail.com'
      },
      secondary: {
        label: 'GitHub ↗',
        href: 'https://github.com/banana1324'
      },
      tertiary: {
        label: 'LinkedIn ↗',
        href: 'https://www.linkedin.com/in/fuyuanzhang'
      },
      scene: 'contact'
    }
  ]
};

const state = {
  section: 'home',
  index: 0,
  currentScene: 'workbench',
  selectedSpawn: null,
  spawned: [],
  animation: null,
  addMenuOpen: false
};

const dom = {
  viewport: document.querySelector('#viewport'),
  canvas: document.querySelector('#scene-canvas'),
  hero: document.querySelector('#hero-copy'),
  sceneLabel: document.querySelector('#scene-label'),
  selectorItems: document.querySelector('#selector-items'),
  previous: document.querySelector('#previous-item'),
  next: document.querySelector('#next-item'),
  infoIndex: document.querySelector('#info-index'),
  infoType: document.querySelector('#info-type'),
  infoKicker: document.querySelector('#info-kicker'),
  infoTitle: document.querySelector('#info-title'),
  infoMeta: document.querySelector('#info-meta'),
  infoDescription: document.querySelector('#info-description'),
  infoDetails: document.querySelector('#info-details'),
  primaryLink: document.querySelector('#info-primary-link'),
  secondaryLink: document.querySelector('#info-secondary-link'),
  tertiaryLink: document.querySelector('#info-tertiary-link'),
  resetView: document.querySelector('#reset-view'),
  addObject: document.querySelector('#add-object'),
  addMenu: document.querySelector('#add-menu'),
  mobileMenuButton: document.querySelector('.mobile-menu-button'),
  mobileNav: document.querySelector('#mobile-nav')
};

const renderer = new THREE.WebGLRenderer({
  canvas: dom.canvas,
  antialias: true,
  alpha: false
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1b1e24);
scene.fog = new THREE.Fog(0x1b1e24, 11, 22);

const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
camera.position.set(7.2, 5.4, 9.2);

const controls = new OrbitControls(camera, dom.canvas);
controls.target.set(0, 1.1, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.065;
controls.enableZoom = false;
controls.enablePan = false;
controls.minPolarAngle = Math.PI * 0.25;
controls.maxPolarAngle = Math.PI * 0.49;
controls.update();

scene.add(new THREE.HemisphereLight(0xffffff, 0x2a2f38, 2.3));

const keyLight = new THREE.DirectionalLight(0xffffff, 3.5);
keyLight.position.set(5, 9, 5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -9;
keyLight.shadow.camera.right = 9;
keyLight.shadow.camera.top = 9;
keyLight.shadow.camera.bottom = -9;
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0xf28c28, 1.7);
rimLight.position.set(-5, 4, -4);
scene.add(rimLight);

const grid = new THREE.GridHelper(18, 18, 0x5b6574, 0x313740);
grid.position.y = 0.005;
scene.add(grid);

const floor = new THREE.Mesh(
  new THREE.BoxGeometry(18, 0.18, 18),
  new THREE.MeshStandardMaterial({
    color: 0x2b3038,
    roughness: 0.96,
    metalness: 0.03
  })
);

floor.position.y = -0.1;
floor.receiveShadow = true;
scene.add(floor);

const BOUNDS = 7.6;

const workbench = new THREE.Group();
scene.add(workbench);

const arm = buildRobotArm();
arm.group.position.set(2.2, 0, -0.2);
workbench.add(arm.group);

const pedestal = new THREE.Group();
const pedestalBase = mesh(
  new THREE.CylinderGeometry(1.25, 1.4, 0.34, 36),
  0x353535,
  0.45,
  0.65
);
pedestalBase.position.y = 0.17;
pedestal.add(pedestalBase);

const pedestalTop = mesh(
  new THREE.CylinderGeometry(1.08, 1.08, 0.12, 36),
  0x1d2026,
  0.7,
  0.25
);
pedestalTop.position.y = 0.4;
pedestal.add(pedestalTop);

pedestal.position.set(-1.4, 0, 0.25);
workbench.add(pedestal);

const displayRoot = new THREE.Group();
displayRoot.position.set(-1.4, 0.58, 0.25);
workbench.add(displayRoot);

let currentModel = createModel('wildfire');
displayRoot.add(currentModel);

const sceneDecor = createDecor();
workbench.add(sceneDecor);

function mesh(geometry, color, roughness = 0.5, metalness = 0.2) {
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness
  });
  const object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  object.receiveShadow = true;
  return object;
}

function buildRobotArm() {
  const group = new THREE.Group();
  const orange = 0xe77817;
  const dark = 0x242424;

  const base = mesh(
    new THREE.CylinderGeometry(0.62, 0.74, 0.38, 32),
    dark,
    0.45,
    0.55
  );
  base.position.y = 0.19;
  group.add(base);

  const baseJoint = new THREE.Group();
  baseJoint.position.y = 0.45;
  group.add(baseJoint);

  const joint0 = mesh(
    new THREE.CylinderGeometry(0.42, 0.42, 0.38, 28),
    orange,
    0.38,
    0.32
  );
  joint0.rotation.z = Math.PI / 2;
  baseJoint.add(joint0);

  const shoulder = new THREE.Group();
  shoulder.position.set(0, 0.2, 0);
  baseJoint.add(shoulder);

  const upper = mesh(
    new THREE.BoxGeometry(0.48, 2.2, 0.5),
    orange,
    0.42,
    0.25
  );
  upper.position.y = 1.03;
  shoulder.add(upper);

  const elbow = new THREE.Group();
  elbow.position.set(0, 2.05, 0);
  shoulder.add(elbow);

  const elbowJoint = mesh(
    new THREE.CylinderGeometry(0.4, 0.4, 0.44, 28),
    dark,
    0.35,
    0.65
  );
  elbowJoint.rotation.z = Math.PI / 2;
  elbow.add(elbowJoint);

  const forearm = new THREE.Group();
  elbow.add(forearm);

  const lower = mesh(
    new THREE.BoxGeometry(0.42, 1.8, 0.44),
    orange,
    0.42,
    0.25
  );
  lower.position.y = 0.82;
  forearm.add(lower);

  const wrist = new THREE.Group();
  wrist.position.set(0, 1.64, 0);
  forearm.add(wrist);

  const wristJoint = mesh(
    new THREE.CylinderGeometry(0.31, 0.31, 0.36, 24),
    dark,
    0.34,
    0.68
  );
  wristJoint.rotation.z = Math.PI / 2;
  wrist.add(wristJoint);

  const gripper = new THREE.Group();
  gripper.position.y = 0.36;
  wrist.add(gripper);

  const palm = mesh(
    new THREE.BoxGeometry(0.54, 0.22, 0.4),
    dark,
    0.35,
    0.65
  );
  gripper.add(palm);

  const fingerL = mesh(
    new THREE.BoxGeometry(0.13, 0.55, 0.16),
    0xcfcfcf,
    0.28,
    0.72
  );
  const fingerR = fingerL.clone();

  fingerL.position.set(-0.2, 0.28, 0);
  fingerR.position.set(0.2, 0.28, 0);

  gripper.add(fingerL, fingerR);

  shoulder.rotation.z = -0.34;
  elbow.rotation.z = 1.15;
  forearm.rotation.z = -0.44;
  wrist.rotation.z = 0.12;
  baseJoint.rotation.y = -0.45;

  return {
    group,
    baseJoint,
    shoulder,
    elbow,
    forearm,
    wrist,
    gripper
  };
}

function createDecor() {
  const group = new THREE.Group();

  const cube = mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), 0x5a7abf, 0.46, 0.22);
  cube.position.set(-4.5, 0.36, -2.1);
  cube.rotation.set(0.2, 0.4, 0.1);
  group.add(cube);

  const sphere = mesh(new THREE.IcosahedronGeometry(0.5, 2), 0x7fbd58, 0.52, 0.12);
  sphere.position.set(4.8, 0.53, 2.4);
  group.add(sphere);

  const torus = mesh(new THREE.TorusGeometry(0.56, 0.14, 18, 48), 0xa45ca4, 0.42, 0.26);
  torus.position.set(-4.2, 0.65, 2.2);
  torus.rotation.x = Math.PI / 2;
  group.add(torus);

  return group;
}

function createModel(kind) {
  switch (kind) {
    case 'robot':
      return createRobotModel();
    case 'embedded':
      return createEmbeddedModel();
    case 'web':
      return createWebModel();
    case 'racket':
      return createRacketModel();
    case 'monkey':
      return createMonkeyModel();
    case 'trombone':
      return createTromboneModel();
    case 'portrait':
      return createPortraitModel();
    case 'contact':
      return createContactModel();
    case 'wildfire':
    default:
      return createWildfireModel();
  }
}

function createWildfireModel() {
  const group = new THREE.Group();

  const board = mesh(new THREE.BoxGeometry(1.55, 0.18, 1.15), 0x315d46, 0.62, 0.16);
  board.position.y = 0.15;
  group.add(board);

  for (let i = 0; i < 8; i++) {
    const pin = mesh(new THREE.BoxGeometry(0.08, 0.08, 0.18), 0xd2b25f, 0.28, 0.72);
    pin.position.set(-0.62 + i * 0.18, 0.28, -0.56);
    group.add(pin);
  }

  const chip = mesh(new THREE.BoxGeometry(0.62, 0.14, 0.46), 0x161616, 0.65, 0.08);
  chip.position.set(-0.12, 0.33, 0.03);
  group.add(chip);

  const antenna = mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.85, 12), 0x222222, 0.45, 0.4);
  antenna.position.set(0.58, 1.05, 0.28);
  group.add(antenna);

  const sensor = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.28, 20), 0xdedede, 0.72, 0.06);
  sensor.position.set(-0.55, 0.37, 0.28);
  group.add(sensor);

  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(0.22, 0.65, 24),
    new THREE.MeshStandardMaterial({
      color: 0xf28c28,
      emissive: 0x7a2600,
      emissiveIntensity: 0.85,
      roughness: 0.48
    })
  );
  flame.position.set(0.05, 0.82, -0.12);
  flame.scale.z = 0.72;
  flame.castShadow = true;
  group.add(flame);

  group.scale.setScalar(1.25);
  return group;
}

function createRobotModel() {
  const group = new THREE.Group();

  const chassis = mesh(new THREE.BoxGeometry(1.8, 0.45, 1.2), 0x505050, 0.42, 0.55);
  chassis.position.y = 0.6;
  group.add(chassis);

  [-0.72, 0.72].forEach(x => {
    [-0.54, 0.54].forEach(z => {
      const wheel = mesh(
        new THREE.CylinderGeometry(0.31, 0.31, 0.22, 24),
        0x171717,
        0.8,
        0.1
      );
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.43, z);
      group.add(wheel);
    });
  });

  const mast = mesh(new THREE.BoxGeometry(0.28, 1.5, 0.28), 0xe77817, 0.45, 0.2);
  mast.position.set(0, 1.45, -0.05);
  group.add(mast);

  const cameraBody = mesh(new THREE.BoxGeometry(0.75, 0.48, 0.48), 0x2b2b2b, 0.38, 0.4);
  cameraBody.position.set(0, 2.12, 0);
  group.add(cameraBody);

  const lens = mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.16, 24), 0x5793c9, 0.2, 0.7);
  lens.rotation.x = Math.PI / 2;
  lens.position.set(0, 2.12, 0.31);
  group.add(lens);

  group.scale.setScalar(0.92);
  return group;
}

function createEmbeddedModel() {
  const group = new THREE.Group();

  const pcb = mesh(new THREE.BoxGeometry(2.05, 0.16, 1.12), 0x2a6a52, 0.65, 0.12);
  pcb.position.y = 0.35;
  group.add(pcb);

  const chip = mesh(new THREE.BoxGeometry(0.66, 0.13, 0.66), 0x111111, 0.65, 0.08);
  chip.position.set(0.05, 0.5, 0);
  group.add(chip);

  const usb = mesh(new THREE.BoxGeometry(0.42, 0.2, 0.48), 0xb7b7b7, 0.28, 0.78);
  usb.position.set(-0.84, 0.49, 0);
  group.add(usb);

  for (const side of [-1, 1]) {
    for (let i = 0; i < 8; i++) {
      const pin = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.3, 8), 0xd8b75e, 0.25, 0.82);
      pin.position.set(-0.65 + i * 0.19, 0.52, side * 0.47);
      group.add(pin);
    }
  }

  const antenna = mesh(new THREE.BoxGeometry(0.62, 0.08, 0.38), 0xe0d4aa, 0.72, 0.04);
  antenna.position.set(0.68, 0.49, 0.02);
  group.add(antenna);

  group.rotation.y = -0.18;
  return group;
}

function createWebModel() {
  const group = new THREE.Group();

  const frame = mesh(new THREE.BoxGeometry(2.2, 1.42, 0.18), 0x1c1c1c, 0.35, 0.6);
  frame.position.y = 1.22;
  group.add(frame);

  const screen = mesh(new THREE.PlaneGeometry(1.92, 1.14), 0x487aa0, 0.9, 0.02);
  screen.position.set(0, 1.22, 0.101);
  group.add(screen);

  const stand = mesh(new THREE.BoxGeometry(0.28, 0.7, 0.22), 0x4b4b4b, 0.36, 0.62);
  stand.position.y = 0.52;
  group.add(stand);

  const foot = mesh(new THREE.BoxGeometry(1.0, 0.12, 0.58), 0x4b4b4b, 0.36, 0.62);
  foot.position.y = 0.15;
  group.add(foot);

  return group;
}

function createRacketModel() {
  const group = new THREE.Group();

  const head = mesh(new THREE.TorusGeometry(0.67, 0.07, 14, 48), 0xd9d9d9, 0.3, 0.58);
  head.scale.y = 1.22;
  head.position.y = 1.55;
  group.add(head);

  const handle = mesh(new THREE.CylinderGeometry(0.055, 0.075, 1.35, 14), 0x282828, 0.72, 0.08);
  handle.position.y = 0.5;
  group.add(handle);

  const shaft = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.75, 10), 0xb7b7b7, 0.28, 0.72);
  shaft.position.y = 1.02;
  group.add(shaft);

  group.rotation.z = -0.16;
  return group;
}

function createMonkeyModel() {
  const group = new THREE.Group();
  const materialColor = 0x9b6a4a;

  const head = mesh(new THREE.SphereGeometry(0.72, 18, 12), materialColor, 0.72, 0.05);
  head.scale.set(1, 0.95, 0.8);
  head.position.y = 1.05;
  group.add(head);

  const muzzle = mesh(new THREE.SphereGeometry(0.42, 16, 10), 0xb98763, 0.8, 0.03);
  muzzle.scale.set(1.05, 0.65, 0.7);
  muzzle.position.set(0, 0.88, 0.52);
  group.add(muzzle);

  [-1, 1].forEach(side => {
    const ear = mesh(new THREE.SphereGeometry(0.34, 14, 10), materialColor, 0.72, 0.05);
    ear.scale.set(0.42, 0.85, 0.32);
    ear.position.set(side * 0.78, 1.12, 0);
    group.add(ear);
  });

  group.rotation.y = 0.15;
  return group;
}

function createTromboneModel() {
  const group = new THREE.Group();
  const brass = 0xc9952e;

  const tube1 = mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.1, 12), brass, 0.26, 0.74);
  tube1.rotation.z = Math.PI / 2;
  tube1.position.set(-0.15, 1.0, 0);
  group.add(tube1);

  const tube2 = tube1.clone();
  tube2.position.y = 0.72;
  group.add(tube2);

  const bell = mesh(new THREE.ConeGeometry(0.4, 0.65, 28, 1, true), brass, 0.24, 0.76);
  bell.rotation.z = -Math.PI / 2;
  bell.position.set(1.18, 1.0, 0);
  group.add(bell);

  const slide = mesh(new THREE.TorusGeometry(0.22, 0.035, 10, 28, Math.PI), brass, 0.24, 0.76);
  slide.rotation.set(Math.PI / 2, 0, Math.PI / 2);
  slide.position.set(-1.1, 0.86, 0);
  group.add(slide);

  group.scale.setScalar(1.05);
  return group;
}

function createPortraitModel() {
  const group = new THREE.Group();

  const bust = mesh(new THREE.CylinderGeometry(0.72, 1.0, 0.9, 24), 0x647688, 0.72, 0.08);
  bust.position.y = 0.45;
  group.add(bust);

  const head = mesh(new THREE.SphereGeometry(0.58, 24, 16), 0xd1b49a, 0.86, 0.02);
  head.position.y = 1.35;
  group.add(head);

  return group;
}

function createContactModel() {
  const group = new THREE.Group();

  const envelope = mesh(new THREE.BoxGeometry(1.8, 1.08, 0.12), 0xe4e4e4, 0.82, 0.02);
  envelope.position.y = 1;
  group.add(envelope);

  const flapGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.9, 1.45, 0.08),
    new THREE.Vector3(0, 0.92, 0.12),
    new THREE.Vector3(0.9, 1.45, 0.08)
  ]);

  const flap = new THREE.Line(
    flapGeometry,
    new THREE.LineBasicMaterial({ color: 0x777777 })
  );
  group.add(flap);

  return group;
}

function tweenModelTo(sceneKind) {
  if (!sceneKind) return;

  state.currentScene = sceneKind;

  const outgoing = currentModel;
  const incoming = createModel(sceneKind);

  incoming.scale.multiplyScalar(0.01);
  incoming.position.set(0.25, 0.1, 0);

  displayRoot.add(incoming);
  currentModel = incoming;

  state.animation = {
    start: performance.now(),
    duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 520,
    outgoing,
    incoming
  };

  animateArmSwap();
}

function animateArmSwap() {
  arm.baseJoint.userData.pulseStart = performance.now();
}

function itemsForSection(section) {
  return CONTENT[section] || [];
}

function setSection(section, index = 0, { updateHash = true } = {}) {
  if (section === 'home') {
    state.section = 'home';
    state.index = 0;

    dom.hero.classList.remove('is-hidden');
    dom.sceneLabel.textContent = 'Warren / Workbench';

    updateNavState('home');
    renderSelector(CONTENT.projects, -1);
    renderInfo(CONTENT.projects[0], 0, CONTENT.projects.length, 'Selected work');
    tweenModelTo('wildfire');

    if (updateHash) history.replaceState(null, '', '#home');
    return;
  }

  const resolved = section === 'about' ? 'about' : section;
  const items = itemsForSection(resolved);
  if (!items.length) return;

  state.section = resolved;
  state.index = Math.max(0, Math.min(index, items.length - 1));

  dom.hero.classList.add('is-hidden');
  updateNavState(section);
  selectItem(state.index, { updateHash });
}

function selectItem(index, { updateHash = true } = {}) {
  const items = itemsForSection(state.section);
  if (!items.length) return;

  state.index = (index + items.length) % items.length;
  const item = items[state.index];

  renderInfo(item, state.index, items.length, sectionLabel(state.section));
  renderSelector(items, state.index);
  dom.sceneLabel.textContent = `${sectionLabel(state.section)} / ${item.title}`;

  queueMicrotask(() => {
    tweenModelTo(item.scene);
  });

  if (updateHash) {
    history.replaceState(null, '', `#${state.section}/${item.id}`);
  }
}

function renderInfo(item, index, total, typeLabel) {
  dom.infoIndex.textContent =
    String(index + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');

  dom.infoType.textContent = typeLabel;
  dom.infoKicker.textContent = item.kicker;
  dom.infoTitle.textContent = item.title;
  dom.infoMeta.textContent = item.meta;
  dom.infoDescription.textContent = item.description;

  dom.infoDetails.replaceChildren(
    ...item.details.map(text => {
      const li = document.createElement('li');
      li.textContent = text;
      return li;
    })
  );

  applyLink(dom.primaryLink, item.primary);
  applyLink(dom.secondaryLink, item.secondary);
  applyLink(dom.tertiaryLink, item.tertiary);
}

function applyLink(anchor, data) {
  if (!data) {
    anchor.hidden = true;
    anchor.removeAttribute('href');
    return;
  }
  anchor.hidden = false;
  anchor.textContent = data.label;
  anchor.href = data.href;
}

function renderSelector(items, activeIndex) {
  dom.selectorItems.replaceChildren(
    ...items.map((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `selector-chip${index === activeIndex ? ' is-active' : ''}`;
      button.textContent = item.label;
      button.setAttribute('aria-pressed', String(index === activeIndex));

      button.addEventListener('click', () => {
        if (state.section === 'home') {
          state.section = 'projects';
          dom.hero.classList.add('is-hidden');
          updateNavState('projects');
        }
        selectItem(index);
      });

      return button;
    })
  );

  requestAnimationFrame(() => {
    dom.selectorItems.querySelector('.is-active')?.scrollIntoView({
      inline: 'center',
      block: 'nearest'
    });
  });
}

function updateNavState(section) {
  document.querySelectorAll('[data-section]').forEach(element => {
    if (!element.classList.contains('nav-link')) return;
    element.classList.toggle('is-active', element.dataset.section === section);
  });
}

function sectionLabel(section) {
  return {
    projects: 'Selected work',
    experience: 'Experience',
    interests: 'Interests',
    about: 'About',
    contact: 'Contact'
  }[section] || 'Selected work';
}

function parseHash() {
  const raw = location.hash.replace(/^#/, '');

  if (!raw || raw === 'home') {
    return setSection('home', 0, { updateHash: false });
  }

  const [section, id] = raw.split('/');
  const items = itemsForSection(section);

  if (!items.length) {
    return setSection('home', 0, { updateHash: false });
  }

  const index = Math.max(0, items.findIndex(item => item.id === id));
  setSection(section, index, { updateHash: false });
}

function toggleAddMenu(force) {
  const shouldOpen = typeof force === 'boolean' ? force : !state.addMenuOpen;

  state.addMenuOpen = shouldOpen;
  dom.addMenu.hidden = !shouldOpen;
  dom.addObject.setAttribute('aria-expanded', String(shouldOpen));

  if (shouldOpen) positionAddMenu();
}

function positionAddMenu() {
  const rect = dom.viewport.getBoundingClientRect();
  const menuWidth = 244;

  const left = Math.max(8, Math.min(rect.width - menuWidth - 8, rect.width * 0.5 - menuWidth * 0.5));
  const top = Math.max(46, Math.min(rect.height - 350, rect.height * 0.35));

  dom.addMenu.style.left = `${left}px`;
  dom.addMenu.style.top = `${top}px`;
}

function spawnObject(kind) {
  const object = buildSpawnMesh(kind);
  const radius = object.userData.radius || 0.55;

  object.position.set((Math.random() - 0.5) * 3, 4 + Math.random() * 1.2, (Math.random() - 0.5) * 2.5);
  object.rotation.set(Math.random(), Math.random(), Math.random());

  object.userData.velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 1.5,
    0,
    (Math.random() - 0.5) * 1.5
  );

  object.userData.angular = new THREE.Vector3(
    Math.random() - 0.5,
    Math.random() - 0.5,
    Math.random() - 0.5
  ).multiplyScalar(1.6);

  object.userData.dynamic = true;
  object.userData.radius = radius;
  object.userData.kind = kind;

  scene.add(object);
  state.spawned.push(object);
  state.selectedSpawn = object;
  toggleAddMenu(false);

  if (state.spawned.length > 14) {
    const oldest = state.spawned.shift();
    scene.remove(oldest);
    disposeObject(oldest);
  }
}

function buildSpawnMesh(kind) {
  let object;

  switch (kind) {
    case 'plane':
      object = mesh(new THREE.BoxGeometry(1.4, 0.12, 1.4), 0x6f6f6f, 0.8, 0.05);
      object.userData.radius = 0.72;
      break;
    case 'circle':
      object = mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.11, 32), 0xb1825c, 0.64, 0.12);
      object.userData.radius = 0.72;
      break;
    case 'uvsphere':
      object = mesh(new THREE.SphereGeometry(0.62, 28, 18), 0x7fbd58, 0.52, 0.12);
      object.userData.radius = 0.62;
      break;
    case 'icosphere':
      object = mesh(new THREE.IcosahedronGeometry(0.66, 2), 0x5aa7d6, 0.48, 0.18);
      object.userData.radius = 0.66;
      break;
    case 'cylinder':
      object = mesh(new THREE.CylinderGeometry(0.53, 0.53, 1.15, 24), 0xc96c5c, 0.55, 0.16);
      object.userData.radius = 0.62;
      break;
    case 'cone':
      object = mesh(new THREE.ConeGeometry(0.65, 1.3, 28), 0xc6a95a, 0.52, 0.18);
      object.userData.radius = 0.68;
      break;
    case 'torus':
      object = mesh(new THREE.TorusGeometry(0.58, 0.2, 18, 44), 0xa45ca4, 0.48, 0.22);
      object.userData.radius = 0.78;
      break;
    case 'monkey':
      object = createMonkeyModel();
      object.scale.setScalar(0.85);
      object.userData.radius = 0.92;
      break;
    case 'cube':
    default:
      object = mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), 0xe77817, 0.5, 0.2);
      object.userData.radius = 0.76;
      break;
  }

  return object;
}

function updateRigidBodies(dt) {
  const gravity = -7.6;

  for (const object of state.spawned) {
    if (!object.userData.dynamic) continue;

    const velocity = object.userData.velocity;
    const angular = object.userData.angular;
    const radius = object.userData.radius || 0.55;

    velocity.y += gravity * dt;
    object.position.addScaledVector(velocity, dt);

    object.rotation.x += angular.x * dt;
    object.rotation.y += angular.y * dt;
    object.rotation.z += angular.z * dt;

    if (object.position.y - radius < 0) {
      object.position.y = radius;
      if (velocity.y < 0) velocity.y *= -0.43;
      velocity.x *= 0.985;
      velocity.z *= 0.985;
      angular.multiplyScalar(0.992);
    }

    for (const axis of ['x', 'z']) {
      const value = object.position[axis];

      if (value + radius > BOUNDS) {
        object.position[axis] = BOUNDS - radius;
        velocity[axis] = -Math.abs(velocity[axis]) * 0.56;
      } else if (value - radius < -BOUNDS) {
        object.position[axis] = -BOUNDS + radius;
        velocity[axis] = Math.abs(velocity[axis]) * 0.56;
      }
    }
  }
}

function tossSelected() {
  const selected = state.selectedSpawn;
  if (!selected) return;

  selected.userData.velocity.set(
    (Math.random() - 0.5) * 3.2,
    5.3,
    (Math.random() - 0.5) * 3.2
  );
}

function rotateSelected() {
  const selected = state.selectedSpawn;
  if (!selected) return;

  selected.userData.angular.add(new THREE.Vector3(0.7, 1.4, 0.35));
}

function disposeObject(object) {
  object.traverse?.(child => {
    child.geometry?.dispose?.();

    if (Array.isArray(child.material)) {
      child.material.forEach(material => material.dispose?.());
    } else {
      child.material?.dispose?.();
    }
  });
}

document.querySelectorAll('[data-section]').forEach(element => {
  element.addEventListener('click', () => {
    const section = element.dataset.section;
    if (!section) return;

    setSection(section);

    if (!dom.mobileNav.hidden) {
      dom.mobileNav.hidden = true;
      dom.mobileMenuButton.setAttribute('aria-expanded', 'false');
    }
  });
});

dom.previous.addEventListener('click', () => {
  if (state.section === 'home') {
    return setSection('projects', CONTENT.projects.length - 1);
  }
  selectItem(state.index - 1);
});

dom.next.addEventListener('click', () => {
  if (state.section === 'home') {
    return setSection('projects', 0);
  }
  selectItem(state.index + 1);
});

dom.resetView.addEventListener('click', resetView);
dom.addObject.addEventListener('click', () => toggleAddMenu());

dom.addMenu.querySelectorAll('[data-add]').forEach(button => {
  button.addEventListener('click', () => {
    spawnObject(button.dataset.add);
  });
});

dom.mobileMenuButton.addEventListener('click', () => {
  const open = dom.mobileNav.hidden;
  dom.mobileNav.hidden = !open;
  dom.mobileMenuButton.setAttribute('aria-expanded', String(open));
});

window.addEventListener('hashchange', parseHash);
window.addEventListener('resize', () => {
  resizeRenderer();
  if (state.addMenuOpen) positionAddMenu();
});

dom.viewport.addEventListener('keydown', event => {
  const target = event.target;

  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  ) {
    return;
  }

  if (event.shiftKey && event.key.toLowerCase() === 'a') {
    event.preventDefault();
    toggleAddMenu(true);
    return;
  }

  if (state.addMenuOpen && /^[1-9]$/.test(event.key)) {
    const map = ['plane', 'cube', 'circle', 'uvsphere', 'icosphere', 'cylinder', 'cone', 'torus', 'monkey'];
    spawnObject(map[Number(event.key) - 1]);
    return;
  }

  if (event.key.toLowerCase() === 'g') tossSelected();
  if (event.key.toLowerCase() === 'r') rotateSelected();
  if (event.key === 'Escape') toggleAddMenu(false);
});

dom.viewport.addEventListener('pointerdown', () => {
  dom.viewport.focus({ preventScroll: true });
});

document.addEventListener('pointerdown', event => {
  if (!state.addMenuOpen) return;

  if (dom.addMenu.contains(event.target) || dom.addObject.contains(event.target)) {
    return;
  }

  toggleAddMenu(false);
});

function resetView() {
  camera.position.set(7.2, 5.4, 9.2);
  controls.target.set(0, 1.1, 0);
  controls.update();
}

function resizeRenderer() {
  const rect = dom.viewport.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width));
  const height = Math.max(1, Math.floor(rect.height));

  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

let lastTime = performance.now();

function animate(now) {
  requestAnimationFrame(animate);

  const dt = Math.min(0.032, (now - lastTime) / 1000);
  lastTime = now;

  controls.update();
  updateRigidBodies(dt);
  animateSwap(now);
  animateArm(now);

  displayRoot.rotation.y += dt * 0.16;
  renderer.render(scene, camera);
}

function animateSwap(now) {
  if (!state.animation) return;

  const a = state.animation;
  const t = Math.min(1, (now - a.start) / a.duration);
  const eased = 1 - Math.pow(1 - t, 3);

  a.incoming.scale.setScalar(Math.max(0.01, eased));
  a.incoming.position.x = (1 - eased) * 0.35;
  a.incoming.rotation.y = (1 - eased) * -0.5;

  if (a.outgoing) {
    a.outgoing.scale.setScalar(Math.max(0.001, 1 - eased));
    a.outgoing.position.x = -eased * 0.35;
    a.outgoing.rotation.y = eased * 0.45;
  }

  if (t >= 1) {
    if (a.outgoing && a.outgoing !== a.incoming) {
      displayRoot.remove(a.outgoing);
      disposeObject(a.outgoing);
    }

    a.incoming.scale.setScalar(1);
    a.incoming.position.set(0, 0, 0);
    state.animation = null;
  }
}

function animateArm(now) {
  const start = arm.baseJoint.userData.pulseStart;
  if (!start) return;

  const duration = 520;
  const t = Math.min(1, (now - start) / duration);
  const pulse = Math.sin(t * Math.PI);

  arm.baseJoint.rotation.y = -0.45 - pulse * 0.5;
  arm.elbow.rotation.z = 1.15 + pulse * 0.22;
  arm.wrist.rotation.z = 0.12 - pulse * 0.18;

  if (t >= 1) {
    arm.baseJoint.userData.pulseStart = null;
  }
}

resizeRenderer();
parseHash();
requestAnimationFrame(animate);
