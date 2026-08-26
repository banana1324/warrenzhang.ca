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
  section: 'home', index: 0, busy: false, queued: null,
  expanded: new Set(['projects', 'experience', 'interests']),
  stations: new Map(), selectedKey: null,
  heldBoard: null, heldStation: null, holdBlend: null,
  armTween: null, gripTween: null, objectTweens: [],
  addOpen: false, spawned: [], selectedSpawn: null,
  reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches
};

// ---------- renderer / scene ----------
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
scene.fog = new THREE.Fog(0x0b1016, 12, 25);

const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
camera.position.set(8.3, 5.35, 11.2);
const CAMERA_TARGET = new THREE.Vector3(0.15, 1.85, 0.1);
camera.lookAt(CAMERA_TARGET);

scene.add(new THREE.HemisphereLight(0xf8fbff, 0x202a35, 2.25));
const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
keyLight.position.set(5.5, 10, 7);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -10;
keyLight.shadow.camera.right = 10;
keyLight.shadow.camera.top = 10;
keyLight.shadow.camera.bottom = -10;
scene.add(keyLight);
const rimLight = new THREE.DirectionalLight(0x77a7df, 1.45);
rimLight.position.set(-6, 5, -5);
scene.add(rimLight);
const fillLight = new THREE.PointLight(0xb5d3ed, 11, 10);
fillLight.position.set(-2.5, 4.6, 3.8);
scene.add(fillLight);

function mat(color, roughness=.55, metalness=.15) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}
function mesh(geometry, color, roughness=.55, metalness=.15) {
  const o = new THREE.Mesh(geometry, mat(color, roughness, metalness));
  o.castShadow = true; o.receiveShadow = true; return o;
}
function box(w,h,d,r,color,rough=.55,metal=.15) {
  return mesh(new RoundedBoxGeometry(w,h,d,4,r), color, rough, metal);
}
function cylinderBetween(a,b,radius,color,rough=.32,metal=.75) {
  const d = b.clone().sub(a); const len=d.length();
  const o=mesh(new THREE.CylinderGeometry(radius,radius,len,24),color,rough,metal);
  o.position.copy(a).add(b).multiplyScalar(.5);
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());
  return o;
}
function disposeObject(object) {
  object?.traverse(child => {
    child.geometry?.dispose?.();
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    mats.filter(Boolean).forEach(m => { m.map?.dispose?.(); m.dispose?.(); });
  });
}

// ---------- clean environment ----------
const floor = box(15.8,.24,9.4,.08,0x1e2630,.95,.025);
floor.position.set(.1,-.12,.15); scene.add(floor);
const grid = new THREE.GridHelper(15.4,22,0x44515e,0x303944);
grid.position.set(.1,.012,.15); grid.scale.z=.61; scene.add(grid);
const rear = box(12.2,4.9,.12,.04,0x11171e,.93,.02);
rear.position.set(.15,2.45,-4.35); scene.add(rear);
for (const x of [-4.3,-2.1,.1,2.3,4.5]) {
  const strip=box(.025,3.8,.025,.005,0x27313b,.7,.1); strip.position.set(x,2.35,-4.27); scene.add(strip);
}

// ---------- modern information boards ----------
const BOARD = { width:3.05, height:3.90, thickness:.105, handleX:1.18, handleY:2.05 };

function drawBoardCanvas(section,item,index) {
  const c=document.createElement('canvas'); c.width=900; c.height=1150;
  const x=c.getContext('2d');
  x.fillStyle='#f7f8fa'; x.fillRect(0,0,c.width,c.height);
  x.fillStyle='#76a5e2'; x.fillRect(64,62,82,6);
  x.fillStyle='#748091'; x.font='700 18px Arial';
  x.fillText(`${section.toUpperCase()} · ${String(index+1).padStart(2,'0')}`,64,105);
  x.fillStyle='#101318'; x.font='700 52px Arial';
  let y=wrapCanvasText(x,item.title,64,170,772,58,3);
  x.fillStyle='#6d7682'; x.font='600 20px Arial';
  y=wrapCanvasText(x,item.meta,64,y+34,772,28,2);
  x.fillStyle='#303640'; x.font='400 25px Arial';
  y=wrapCanvasText(x,item.description,64,y+48,772,37,5);

  x.strokeStyle='#e3e7eb'; x.lineWidth=2; x.beginPath(); x.moveTo(64,y+44); x.lineTo(836,y+44); x.stroke();
  const statsY=y+90; const col=772/3;
  item.metrics.forEach(([value,label],i)=>{
    const sx=64+i*col;
    if(i){x.strokeStyle='#e4e7eb'; x.beginPath(); x.moveTo(sx,statsY-9); x.lineTo(sx,statsY+85); x.stroke();}
    x.fillStyle='#5c8ed0'; x.font='700 31px Arial'; wrapCanvasText(x,value,sx+(i?24:0),statsY+24,col-32,34,2);
    x.fillStyle='#7b8490'; x.font='500 15px Arial'; wrapCanvasText(x,label,sx+(i?24:0),statsY+62,col-35,21,2);
  });
  const detailsY=statsY+155;
  x.fillStyle='#7c8590'; x.font='700 15px Arial'; x.fillText('HIGHLIGHTS',64,detailsY);
  x.font='400 20px Arial'; let by=detailsY+46;
  item.details.slice(0,3).forEach(detail=>{
    x.fillStyle='#6e9fdc'; x.beginPath(); x.arc(70,by-7,3.5,0,Math.PI*2); x.fill();
    x.fillStyle='#424a54'; by=wrapCanvasText(x,detail,91,by,735,29,3)+18;
  });
  x.strokeStyle='#e5e8eb'; x.beginPath(); x.moveTo(64,1060); x.lineTo(836,1060); x.stroke();
  x.fillStyle='#9aa2ac'; x.font='500 14px Arial'; x.fillText('Warren Zhang',64,1095);
  x.textAlign='right'; x.fillText(item.label,836,1095); x.textAlign='left';
  return c;
}
function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight,maxLines=Infinity) {
  const words=String(text).split(/\s+/); let line=''; let lines=0; let cy=y;
  for(let i=0;i<words.length;i++){
    const t=line?`${line} ${words[i]}`:words[i];
    if(ctx.measureText(t).width>maxWidth && line){
      ctx.fillText(line,x,cy); line=words[i]; cy+=lineHeight; lines++;
      if(lines>=maxLines-1){
        let rest=[line,...words.slice(i+1)].join(' ');
        while(ctx.measureText(`${rest}…`).width>maxWidth && rest.length) rest=rest.slice(0,-1);
        ctx.fillText(`${rest}…`,x,cy); return cy;
      }
    } else line=t;
  }
  if(line) ctx.fillText(line,x,cy); return cy;
}
function createBoard(section,item,index) {
  const g=new THREE.Group();
  const shell=box(BOARD.width+.09,BOARD.height+.09,BOARD.thickness,.07,0xe9edf2,.36,.16); g.add(shell);
  const canvas=drawBoardCanvas(section,item,index);
  const texture=new THREE.CanvasTexture(canvas); texture.colorSpace=THREE.SRGBColorSpace; texture.generateMipmaps=false; texture.minFilter=THREE.LinearFilter; texture.magFilter=THREE.LinearFilter;
  const page=new THREE.Mesh(new THREE.PlaneGeometry(BOARD.width-.08,BOARD.height-.08),new THREE.MeshBasicMaterial({map:texture,toneMapped:false}));
  page.position.z=BOARD.thickness*.56; g.add(page);
  const handle=box(.48,.22,.16,.055,0xc9d2dc,.28,.46); handle.position.set(BOARD.handleX,BOARD.handleY,.01); g.add(handle);
  const anchor=new THREE.Object3D(); anchor.position.copy(handle.position); g.add(anchor);
  g.userData.texture=texture; g.userData.handleAnchor=anchor; return g;
}

// ---------- realistic multi-joint arm ----------
const ARM = {
  base: new THREE.Vector3(1.55,1.28,.25),
  lengths:[1.52,1.45,1.18,.82],
  rest:[.10,.68,-.58,-.48],
  limits:[[-.18,.48],[.18,1.28],[-1.20,.05],[-1.10,.22]],
  radius:[.27,.24,.21,.18]
};
const armState={yaw:2.85,angles:[...ARM.rest],grip:.22};
const armVisual=buildArm(); scene.add(armVisual.root);

function buildArm(){
  const root=new THREE.Group();
  const pedestal=mesh(new THREE.CylinderGeometry(.74,.90,.31,42),0x171d23,.27,.82); pedestal.position.set(ARM.base.x,.155,ARM.base.z); root.add(pedestal);
  const column=mesh(new THREE.CylinderGeometry(.55,.65,1.16,42),0x8e99a3,.24,.83); column.position.set(ARM.base.x,.73,ARM.base.z); root.add(column);
  const baseRing=mesh(new THREE.CylinderGeometry(.62,.62,.16,42),0x6e9fd0,.23,.61); baseRing.position.copy(ARM.base); root.add(baseRing);
  const links=ARM.lengths.map((_,i)=>{ const l=mesh(new THREE.CylinderGeometry(ARM.radius[i],ARM.radius[i],1,28),i%2?0x858f99:0x9ba5ae,.23,.80); root.add(l); return l; });
  const joints=[];
  for(let i=0;i<=ARM.lengths.length;i++){
    const j=new THREE.Group();
    const core=mesh(new THREE.SphereGeometry(i===0?.36:.30,28,20),0x151b21,.22,.84); j.add(core);
    const ring=mesh(new THREE.TorusGeometry(i===0?.34:.29,.045,12,32),0x6ea3d1,.22,.62); ring.rotation.y=Math.PI/2; j.add(ring);
    root.add(j); joints.push(j);
  }
  const wrist=new THREE.Group();
  const pitch=mesh(new THREE.CylinderGeometry(.23,.23,.36,28),0x87939d,.22,.82); pitch.rotation.z=Math.PI/2; wrist.add(pitch);
  const yaw=mesh(new THREE.CylinderGeometry(.18,.18,.28,26),0x6b9dca,.22,.64); yaw.position.y=-.25; wrist.add(yaw);
  const roll=mesh(new THREE.CylinderGeometry(.15,.15,.24,24),0x202830,.22,.85); roll.rotation.x=Math.PI/2; roll.position.y=-.47; wrist.add(roll);
  const palm=box(.52,.18,.36,.05,0x13191f,.24,.84); palm.position.y=-.66; wrist.add(palm);
  const fl=box(.11,.50,.15,.025,0xadb6be,.20,.84); fl.position.set(-.22,-.98,0); wrist.add(fl);
  const fr=fl.clone(); fr.position.x=.22; wrist.add(fr);
  const socket=new THREE.Object3D(); socket.position.set(0,-1.24,0); wrist.add(socket);
  root.add(wrist);
  return {root,links,joints,wrist,fl,fr,socket};
}

function forward2D(angles){
  const p=[new THREE.Vector2(0,0)]; let x=0,y=0,a=0;
  angles.forEach((angle,i)=>{a+=angle;x+=Math.sin(a)*ARM.lengths[i];y+=Math.cos(a)*ARM.lengths[i];p.push(new THREE.Vector2(x,y));});
  return p;
}
function clamp(v,[lo,hi]){return Math.max(lo,Math.min(hi,v));}
function nearestAngle(current,target){return current+Math.atan2(Math.sin(target-current),Math.cos(target-current));}
function segDist2D(a,b,c,d){
  function pointSeg(p,a,b){const ab=b.clone().sub(a);const den=ab.lengthSq()||1;const t=THREE.MathUtils.clamp(p.clone().sub(a).dot(ab)/den,0,1);return p.distanceTo(a.clone().addScaledVector(ab,t));}
  return Math.min(pointSeg(a,c,d),pointSeg(b,c,d),pointSeg(c,a,b),pointSeg(d,a,b));
}
function selfCollides(angles){
  const p=forward2D(angles);
  return segDist2D(p[0],p[1],p[2],p[3])<.42 || segDist2D(p[0],p[1],p[3],p[4])<.42 || segDist2D(p[1],p[2],p[3],p[4])<.37;
}
function solveIK(target){
  const dx=target.x-ARM.base.x, dz=target.z-ARM.base.z;
  const goal=new THREE.Vector2(Math.hypot(dx,dz),target.y-ARM.base.y);
  const yaw=nearestAngle(armState.yaw,Math.atan2(dz,dx));
  let angles=[...ARM.rest];
  for(let iter=0;iter<28;iter++){
    for(let j=angles.length-1;j>=0;j--){
      const p=forward2D(angles), joint=p[j], end=p[p.length-1];
      const a=end.clone().sub(joint), b=goal.clone().sub(joint);
      const cross=a.x*b.y-a.y*b.x, dot=a.dot(b);
      angles[j]-=.62*Math.atan2(cross,dot);
      angles[j]=clamp(angles[j],ARM.limits[j]);
    }
    angles=angles.map((a,i)=>THREE.MathUtils.lerp(a,ARM.rest[i],.0025));
  }
  if(selfCollides(angles)) angles=angles.map((a,i)=>THREE.MathUtils.lerp(a,ARM.rest[i],.62));
  return {yaw,angles};
}
function armWorldPoints(yaw=armState.yaw,angles=armState.angles){
  const p=forward2D(angles); const dir=new THREE.Vector3(Math.cos(yaw),0,Math.sin(yaw));
  return p.map(q=>ARM.base.clone().addScaledVector(dir,q.x).add(new THREE.Vector3(0,q.y,0)));
}
function placeLink(o,a,b,r){
  const d=b.clone().sub(a), len=d.length(), gap=.34;
  const mid=a.clone().add(b).multiplyScalar(.5); o.position.copy(mid);
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.clone().normalize());
  o.scale.set(1,Math.max(.12,len-gap),1);
}
function updateArmVisual(){
  const p=armWorldPoints();
  armVisual.links.forEach((l,i)=>placeLink(l,p[i],p[i+1],ARM.radius[i]));
  armVisual.joints.forEach((j,i)=>{j.position.copy(p[i]); j.rotation.y=-armState.yaw;});
  const end=p[p.length-1]; armVisual.wrist.position.copy(end); armVisual.wrist.rotation.set(0,-armState.yaw+Math.PI/2,0);
  armVisual.fl.position.x=-armState.grip; armVisual.fr.position.x=armState.grip;
}

function ease(t){return 1-Math.pow(1-t,3);}
function wait(ms){return new Promise(r=>setTimeout(r,state.reducedMotion?0:ms));}
function moveArmTo(target,duration=360){
  const s=solveIK(target); return moveArmPose(s.yaw,s.angles,duration);
}
function moveArmPose(yaw,angles,duration=320){
  yaw=nearestAngle(armState.yaw,yaw);
  if(state.reducedMotion){armState.yaw=yaw;armState.angles=[...angles];updateArmVisual();return Promise.resolve();}
  state.armTween={start:performance.now(),duration,fromYaw:armState.yaw,toYaw:yaw,fromAngles:[...armState.angles],toAngles:[...angles]};
  return wait(duration);
}
function setGrip(x,duration=100){
  if(state.reducedMotion){armState.grip=x;return Promise.resolve();}
  state.gripTween={start:performance.now(),duration,from:armState.grip,to:x}; return wait(duration);
}
function socketWorld(){armVisual.socket.updateMatrixWorld(true);const v=new THREE.Vector3();armVisual.socket.getWorldPosition(v);return v;}

// ---------- stations: all items exist all the time ----------
const SLOT_POSITIONS = [
  [-4.50,-2.15],[-3.00,-2.80],[-1.35,-3.05],[.45,-3.10],[2.35,-2.90],[4.10,-2.20],[4.85,-.85],
  [4.80,.95],[4.05,2.35],[2.45,2.95],[.70,3.10],[-1.20,3.00],[-2.90,2.45],[-4.35,1.10]
];
const modelRayTargets=[];
const gltfLoader=new GLTFLoader();
const SUZANNE_URL='https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/refs/heads/main/2.0/Suzanne/glTF/Suzanne.gltf';

function createAllStations(){
  FLAT_ITEMS.forEach((entry,i)=>{
    const [x,z]=SLOT_POSITIONS[i];
    const root=new THREE.Group(); root.position.set(x,0,z);
    const face=Math.atan2(camera.position.x-x,camera.position.z-z); root.rotation.y=face;
    const pedestal=box(2.15,.12,1.42,.08,0x151c24,.82,.08); pedestal.position.y=.06; root.add(pedestal);
    const ring=mesh(new THREE.TorusGeometry(.72,.025,10,42),0x3f4d5b,.45,.32); ring.rotation.x=Math.PI/2; ring.position.y=.13; root.add(ring);
    const model=createTopicModel(entry.item.model,entry.key); model.position.set(0,.12,.10); model.scale.setScalar(.70); root.add(model);
    const board=createBoard(entry.section,entry.item,entry.index); board.scale.setScalar(.58); board.position.set(-.48,1.26,-.48); board.rotation.set(-.18,0,.0); root.add(board);
    scene.add(root); root.updateMatrixWorld(true);
    const h=new THREE.Vector3(); board.userData.handleAnchor.getWorldPosition(h);
    const worldPos=new THREE.Vector3(), worldQ=new THREE.Quaternion(), worldScale=new THREE.Vector3(); board.matrixWorld.decompose(worldPos,worldQ,worldScale);
    const station={...entry,root,pedestal,ring,model,board,handleWorld:h,homeWorld:{position:worldPos,quaternion:worldQ,scale:worldScale}};
    state.stations.set(entry.key,station);
    root.traverse(child=>{ child.userData.navKey=entry.key; if(child.isMesh) modelRayTargets.push(child); });
  });
}

function setSelectedStation(key){
  state.selectedKey=key;
  for(const [k,s] of state.stations){
    const selected=k===key;
    s.ring.material.color.setHex(selected?0x6f9fd2:0x3f4d5b);
    s.ring.material.emissive?.setHex?.(selected?0x193d61:0x000000);
    if(s.ring.material.emissiveIntensity!==undefined) s.ring.material.emissiveIntensity=selected?.8:0;
    s.root.scale.setScalar(selected?1.05:1);
  }
}

// ---------- modern stylized but recognizable models ----------
function createTopicModel(kind,key){
  switch(kind){
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
function createHomeModel(){const g=new THREE.Group();const r=createVisionRobot();r.scale.setScalar(.68);r.position.x=-.32;g.add(r);const b=createDevBoard();b.scale.setScalar(.65);b.position.set(.72,.18,.2);g.add(b);return g;}
function createAboutModel(){const g=new THREE.Group();const l=createLaptop();l.scale.setScalar(.64);l.position.x=-.35;g.add(l);const books=createBooks();books.scale.setScalar(.70);books.position.set(.63,0,.18);g.add(books);return g;}
function createWildfireModel(){
  const g=new THREE.Group(); const body=box(1.05,.74,.82,.12,0x364853,.64,.14);body.position.y=.44;g.add(body);
  const lid=box(1.10,.09,.86,.05,0x536a78,.50,.22);lid.position.y=.85;g.add(lid);
  const screen=box(.28,.17,.02,.025,0x72a4ba,.20,.12);screen.position.set(.25,.48,.43);screen.material.emissive.setHex(0x1d4352);screen.material.emissiveIntensity=.65;g.add(screen);
  const vent=box(.30,.21,.025,.025,0x182026,.70,.06);vent.position.set(-.25,.48,.43);g.add(vent);
  const ant=cylinderBetween(new THREE.Vector3(.28,.92,-.15),new THREE.Vector3(.28,2.0,-.15),.026,0x13191f,.38,.55);g.add(ant);
  const gateway=box(.62,.16,.44,.055,0x75818b,.36,.55);gateway.position.set(.60,.17,-.22);gateway.rotation.y=-.2;g.add(gateway);return g;
}
function createKC15Model(){const g=new THREE.Group();const b=createDevBoard();b.scale.setScalar(.95);g.add(b);const s=createMiniScreen();s.scale.setScalar(.58);s.position.set(.76,.15,-.18);g.add(s);return g;}
function createVisionRobot(){
  const g=new THREE.Group();const chassis=box(1.18,.30,.80,.09,0x414d58,.42,.52);chassis.position.y=.42;g.add(chassis);
  for(const [x,z] of [[-.48,-.38],[.48,-.38],[-.48,.38],[.48,.38]]){const w=mesh(new THREE.CylinderGeometry(.22,.22,.18,24),0x161c21,.75,.08);w.rotation.z=Math.PI/2;w.position.set(x,.27,z);g.add(w);}
  const mast=box(.16,.80,.16,.04,0x668cad,.38,.30);mast.position.y=1.0;g.add(mast);const cam=box(.54,.32,.36,.065,0x222a31,.34,.56);cam.position.y=1.46;g.add(cam);
  const lens=mesh(new THREE.CylinderGeometry(.12,.12,.13,20),0x6d9dc1,.18,.72);lens.rotation.x=Math.PI/2;lens.position.set(0,1.46,.23);g.add(lens);return g;
}
function createAnalogModel(){
  const g=new THREE.Group();const board=box(1.34,.08,.88,.045,0x455760,.66,.08);board.position.y=.16;g.add(board);const op=box(.44,.12,.32,.025,0x12171b,.58,.12);op.position.set(-.28,.26,0);g.add(op);
  for(let i=0;i<4;i++){const r=box(.30,.05,.07,.016,0xb49b68,.60,.12);r.position.set(.15+(i%2)*.39,.27,-.18+Math.floor(i/2)*.27);g.add(r);}return g;
}
function createEIMModel(){const g=new THREE.Group();const b=createDevBoard();b.scale.setScalar(.78);b.position.x=-.3;g.add(b);const s=createScope();s.scale.setScalar(.46);s.position.set(.66,0,-.08);g.add(s);return g;}
function createVexModel(){
  const g=new THREE.Group();const chassis=box(1.22,.25,.82,.06,0x444e58,.40,.56);chassis.position.y=.38;g.add(chassis);
  for(const [x,z] of [[-.50,-.37],[.50,-.37],[-.50,.37],[.50,.37]]){const w=mesh(new THREE.CylinderGeometry(.24,.24,.20,26),0x161b20,.75,.08);w.rotation.z=Math.PI/2;w.position.set(x,.25,z);g.add(w);}
  const l=box(.12,1.05,.12,.03,0x8997a3,.30,.72);l.position.set(-.34,.93,0);l.rotation.z=-.16;g.add(l);const r=l.clone();r.position.x=.34;r.rotation.z=.16;g.add(r);
  const beam=box(.88,.12,.15,.03,0x8997a3,.30,.72);beam.position.set(0,1.46,.03);g.add(beam);const claw=box(.08,.52,.10,.025,0x6e91ae,.32,.62);claw.position.set(-.25,1.70,.23);claw.rotation.z=-.34;g.add(claw);const claw2=claw.clone();claw2.position.x=.25;claw2.rotation.z=.34;g.add(claw2);return g;
}
function createBadmintonModel(){const g=new THREE.Group();const r=createRacket();r.scale.setScalar(.78);r.position.set(-.18,.02,0);r.rotation.z=-.16;g.add(r);const sh=createShuttle();sh.scale.setScalar(.72);sh.position.set(.54,.14,.28);sh.rotation.z=.45;g.add(sh);return g;}
function createTromboneDisplay(){const g=new THREE.Group();const t=createTrombone();t.scale.setScalar(.62);t.position.set(-.12,.12,0);t.rotation.z=-.07;g.add(t);const stand=createMusicStand();stand.scale.setScalar(.54);stand.position.set(.76,0,-.22);g.add(stand);return g;}
function createSuzanneModel(key){
  const g=new THREE.Group();const pedestal=mesh(new THREE.CylinderGeometry(.54,.62,.15,28),0x2a333d,.64,.18);pedestal.position.y=.08;g.add(pedestal);
  gltfLoader.load(SUZANNE_URL,gltf=>{
    const s=gltf.scene;s.scale.setScalar(.56);s.position.y=.83;s.rotation.y=Math.PI;
    s.traverse(c=>{if(c.isMesh){c.material=mat(0x8e98a2,.42,.18);c.castShadow=true;c.receiveShadow=true;c.userData.navKey=key;modelRayTargets.push(c);}});g.add(s);
  },undefined,()=>{});
  return g;
}
function createHardwareModel(){const g=new THREE.Group();const s=createScope();s.scale.setScalar(.60);s.position.x=-.25;g.add(s);const b=createDevBoard();b.scale.setScalar(.50);b.position.set(.72,.15,.20);g.add(b);return g;}
function createMusicModel(){const g=new THREE.Group();const t=createTrombone();t.scale.setScalar(.57);t.position.set(-.18,.12,0);g.add(t);const mixer=box(.68,.15,.45,.055,0x303b45,.44,.46);mixer.position.set(.68,.15,.08);g.add(mixer);return g;}
function createContactModel(){const g=new THREE.Group();const l=createLaptop();l.scale.setScalar(.58);l.position.x=-.33;g.add(l);const env=box(.67,.05,.43,.04,0xe5e8eb,.80,.02);env.position.set(.62,.13,.20);env.rotation.y=-.2;g.add(env);return g;}
function createDevBoard(){
  const g=new THREE.Group();const board=box(1.18,.07,.66,.04,0x2e6753,.64,.12);board.position.y=.15;g.add(board);const chip=box(.34,.09,.34,.022,0x10151a,.58,.10);chip.position.set(.05,.24,0);g.add(chip);const usb=box(.27,.15,.31,.035,0xaeb5bb,.24,.80);usb.position.set(-.45,.24,0);g.add(usb);return g;
}
function createMiniScreen(){const g=new THREE.Group();const body=box(.68,.45,.12,.06,0x252e36,.36,.58);body.position.y=.28;g.add(body);const s=box(.56,.32,.015,.035,0x315a70,.20,.10);s.position.set(0,.29,.069);s.material.emissive.setHex(0x173746);s.material.emissiveIntensity=.65;g.add(s);return g;}
function createLaptop(){const g=new THREE.Group();const base=box(1.10,.07,.72,.04,0x78828a,.30,.72);base.position.y=.08;g.add(base);const sg=new THREE.Group();sg.position.set(0,.13,-.31);sg.rotation.x=-.22;g.add(sg);const f=box(1.04,.62,.05,.05,0x30373d,.32,.62);f.position.y=.32;sg.add(f);const s=box(.90,.50,.012,.03,0x2b5369,.20,.10);s.position.set(0,.32,.034);s.material.emissive.setHex(0x183442);s.material.emissiveIntensity=.60;sg.add(s);return g;}
function createBooks(){const g=new THREE.Group();[[.84,.14,.51,0x536f84],[.74,.14,.49,0x74625d],[.80,.14,.50,0x5b705e]].forEach(([w,h,d,c],i)=>{const b=box(w,h,d,.035,c,.74,.02);b.position.y=.07+i*.15;g.add(b);});return g;}
function createScope(){
  const g=new THREE.Group();const body=box(1.08,.67,.72,.08,0x394650,.54,.24);body.position.y=.35;g.add(body);const s=box(.58,.34,.02,.03,0x376373,.20,.08);s.position.set(-.16,.41,.37);s.material.emissive.setHex(0x183943);s.material.emissiveIntensity=.70;g.add(s);for(let i=0;i<3;i++){const k=mesh(new THREE.CylinderGeometry(.055,.055,.06,16),0x9aa7b0,.32,.62);k.rotation.x=Math.PI/2;k.position.set(.35,.47-i*.16,.39);g.add(k);}return g;
}
function createRacket(){
  const g=new THREE.Group();const frame=mesh(new THREE.TorusGeometry(.43,.035,12,56),0xb6c0c8,.25,.72);frame.scale.y=1.31;frame.position.y=1.12;g.add(frame);
  const lm=new THREE.LineBasicMaterial({color:0x94a2ad,transparent:true,opacity:.80});
  for(let i=-4;i<=4;i++){const xx=i*.085,n=xx/.40,h=Math.sqrt(Math.max(0,1-n*n))*.54;g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(xx,1.12-h,0),new THREE.Vector3(xx,1.12+h,0)]),lm.clone()));}
  for(let i=-6;i<=6;i++){const yy=i*.073,n=yy/.52,w=Math.sqrt(Math.max(0,1-n*n))*.40;g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-w,1.12+yy,0),new THREE.Vector3(w,1.12+yy,0)]),lm.clone()));}
  const shaft=mesh(new THREE.CylinderGeometry(.020,.025,.72,12),0xb8c0c6,.24,.74);shaft.position.y=.58;g.add(shaft);const handle=mesh(new THREE.CylinderGeometry(.044,.056,.47,14),0x20252a,.76,.05);handle.position.y=.20;g.add(handle);return g;
}
function createShuttle(){const g=new THREE.Group();const cork=mesh(new THREE.SphereGeometry(.10,14,9),0xd9c19d,.76,.02);cork.scale.y=.72;cork.position.y=.10;g.add(cork);for(let i=0;i<10;i++){const f=box(.038,.32,.014,.008,0xf0f2ef,.86,0);const a=i/10*Math.PI*2;f.position.set(Math.cos(a)*.095,.32,Math.sin(a)*.095);f.rotation.y=-a;f.rotation.z=Math.cos(a)*.18;f.rotation.x=Math.sin(a)*.18;g.add(f);}return g;}
function createTrombone(){
  const g=new THREE.Group(), brass=0xb28f4d, silver=0xc2c8cd;
  // long outer slide tubes
  const p1a=new THREE.Vector3(-1.28,.74,0), p1b=new THREE.Vector3(.62,.74,0), p2a=new THREE.Vector3(-1.28,.98,0), p2b=new THREE.Vector3(.62,.98,0);
  g.add(cylinderBetween(p1a,p1b,.023,brass,.20,.84)); g.add(cylinderBetween(p2a,p2b,.023,brass,.20,.84));
  // slide crook
  const crook=mesh(new THREE.TorusGeometry(.12,.023,10,30,Math.PI),brass,.20,.84);crook.rotation.set(Math.PI/2,0,-Math.PI/2);crook.position.set(-1.28,.86,0);g.add(crook);
  // slide brace
  for(const xx of [-.66,.20]) g.add(cylinderBetween(new THREE.Vector3(xx,.74,0),new THREE.Vector3(xx,.98,0),.017,brass,.20,.82));
  // bell-section tube and tuning bow
  g.add(cylinderBetween(new THREE.Vector3(.62,.98,0),new THREE.Vector3(1.10,.98,0),.028,brass,.20,.86));
  g.add(cylinderBetween(new THREE.Vector3(.62,.74,0),new THREE.Vector3(.83,.74,0),.026,brass,.20,.86));
  const tuning=mesh(new THREE.TorusGeometry(.18,.026,10,32,Math.PI),brass,.20,.86);tuning.rotation.set(Math.PI/2,0,-Math.PI/2);tuning.position.set(.84,.86,0);g.add(tuning);
  // bell stem and flare
  g.add(cylinderBetween(new THREE.Vector3(1.05,.98,0),new THREE.Vector3(1.34,.98,0),.045,brass,.18,.88));
  const bell=mesh(new THREE.ConeGeometry(.34,.62,40,1,true),brass,.18,.88);bell.rotation.z=-Math.PI/2;bell.position.set(1.64,.98,0);g.add(bell);
  const rim=mesh(new THREE.TorusGeometry(.34,.018,10,40),brass,.16,.90);rim.rotation.y=Math.PI/2;rim.position.set(1.95,.98,0);g.add(rim);
  // mouthpiece and receiver
  g.add(cylinderBetween(new THREE.Vector3(.55,.74,0),new THREE.Vector3(.88,.74,0),.018,silver,.16,.92));
  const cup=mesh(new THREE.ConeGeometry(.055,.12,18),silver,.15,.92);cup.rotation.z=-Math.PI/2;cup.position.set(.94,.74,0);g.add(cup);
  return g;
}
function createMusicStand(){const g=new THREE.Group();const pole=mesh(new THREE.CylinderGeometry(.020,.020,.95,12),0x1a2026,.54,.32);pole.position.y=.48;g.add(pole);const tray=box(.58,.04,.42,.03,0x1b2229,.56,.32);tray.position.set(0,.96,0);tray.rotation.x=-.62;g.add(tray);return g;}

// ---------- selection / sidebar ----------
function currentItem(){return CONTENT[state.section][state.index];}
function renderNav(){
  dom.nav.replaceChildren();
  NAV.forEach(([section,icon,label])=>{
    const group=document.createElement('div');group.className='nav-group';
    const header=document.createElement('button');header.type='button';header.className='nav-header';header.dataset.section=section;
    const hasChildren=CONTENT[section].length>1;
    header.setAttribute('aria-expanded',hasChildren?String(state.expanded.has(section)):'false');
    header.innerHTML=`<span class="nav-icon">${icon}</span><span>${label}</span>${hasChildren?'<span class="nav-chevron">›</span>':''}`;
    header.addEventListener('click',()=>{
      if(hasChildren){ state.expanded.has(section)?state.expanded.delete(section):state.expanded.add(section); renderNav(); }
      else requestSelection(section,0);
    });
    group.appendChild(header);
    if(hasChildren){
      const list=document.createElement('div');list.className='nav-items';list.hidden=!state.expanded.has(section);
      CONTENT[section].forEach((item,index)=>{
        const b=document.createElement('button');b.type='button';b.className='nav-item';b.dataset.section=section;b.dataset.itemId=item.id;b.textContent=item.label;
        b.addEventListener('click',()=>requestSelection(section,index));list.appendChild(b);
      });
      group.appendChild(list);
    }
    dom.nav.appendChild(group);
  }); updateNav();
}
function updateNav(){
  document.querySelectorAll('.nav-header').forEach(b=>b.classList.toggle('is-active',b.dataset.section===state.section));
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('is-active',b.dataset.section===state.section&&b.dataset.itemId===currentItem().id));
}

// ---------- board hold / collision-safe choreography ----------
const PRESENT_TARGET=new THREE.Vector3(.45,4.38,2.25);
const SAFE_ANGLES=[...ARM.rest];
function boardHandleWorld(board){board.updateMatrixWorld(true);const v=new THREE.Vector3();board.userData.handleAnchor.getWorldPosition(v);return v;}
function boardFacingQuat(position){const d=new THREE.Object3D();d.position.copy(position);d.lookAt(camera.position);return d.quaternion.clone();}
function heldBoardPose(){
  const socket=socketWorld();const q=boardFacingQuat(socket);
  const localHandle=new THREE.Vector3(BOARD.handleX,BOARD.handleY,0).applyQuaternion(q);
  return {position:socket.clone().sub(localHandle),quaternion:q};
}
function beginHold(station){
  scene.attach(station.board); state.heldBoard=station.board; state.heldStation=station;
  const t=heldBoardPose();state.holdBlend={start:performance.now(),duration:state.reducedMotion?1:150,fromP:station.board.position.clone(),fromQ:station.board.quaternion.clone(),to:t};
}
function updateHeldBoard(now){
  if(!state.heldBoard)return;const t=heldBoardPose();
  if(state.holdBlend){const f=Math.min(1,(now-state.holdBlend.start)/state.holdBlend.duration),e=ease(f);state.heldBoard.position.lerpVectors(state.holdBlend.fromP,t.position,e);state.heldBoard.quaternion.slerpQuaternions(state.holdBlend.fromQ,t.quaternion,e);if(f>=1)state.holdBlend=null;}
  else {state.heldBoard.position.copy(t.position);state.heldBoard.quaternion.copy(t.quaternion);}
}
function tweenWorld(object,p,q,s,duration=200){
  scene.attach(object);
  if(state.reducedMotion){object.position.copy(p);object.quaternion.copy(q);object.scale.copy(s);return Promise.resolve();}
  state.objectTweens.push({object,start:performance.now(),duration,fromP:object.position.clone(),toP:p.clone(),fromQ:object.quaternion.clone(),toQ:q.clone(),fromS:object.scale.clone(),toS:s.clone()});return wait(duration);
}
async function returnHeldBoard(){
  if(!state.heldStation||!state.heldBoard)return;
  const st=state.heldStation;dom.status.textContent='Returning previous page';
  await moveArmPose(armState.yaw,SAFE_ANGLES,220);
  const above=st.handleWorld.clone().add(new THREE.Vector3(0,.55,0));await moveArmTo(above,330);await moveArmTo(st.handleWorld,190);
  state.heldBoard=null;state.holdBlend=null;
  await Promise.all([tweenWorld(st.board,st.homeWorld.position,st.homeWorld.quaternion,st.homeWorld.scale,180),setGrip(.22,90)]);
  st.root.attach(st.board); st.board.position.set(-.48,1.26,-.48); st.board.rotation.set(-.18,0,0); st.board.scale.setScalar(.58);
  state.heldStation=null;await moveArmPose(armState.yaw,SAFE_ANGLES,200);
}
async function deliverBoard(section,index){
  state.busy=true;await returnHeldBoard();
  state.section=section;state.index=index;const item=currentItem();const key=`${section}/${item.id}`;setSelectedStation(key);updateNav();dom.topbarTitle.textContent=item.title;
  const st=state.stations.get(key);dom.status.textContent='Reaching selected page';
  await setGrip(.22,60);await moveArmPose(Math.atan2(st.handleWorld.z-ARM.base.z,st.handleWorld.x-ARM.base.x),SAFE_ANGLES,260);
  const hover=st.handleWorld.clone().add(new THREE.Vector3(0,.58,0));await moveArmTo(hover,300);await moveArmTo(st.handleWorld,180);
  dom.status.textContent='Grabbing page';await setGrip(.09,110);beginHold(st);
  dom.status.textContent='Lifting page';await moveArmTo(hover,220);
  await moveArmPose(armState.yaw,SAFE_ANGLES,230);
  dom.status.textContent='Bringing page forward';await moveArmTo(PRESENT_TARGET,480);
  const overshoot=PRESENT_TARGET.clone().add(new THREE.Vector3(-.08,.05,.23));await moveArmTo(overshoot,110);await moveArmTo(PRESENT_TARGET,150);
  dom.status.textContent='Page ready';dom.live.textContent=`${item.title}. ${item.description}`;state.busy=false;
  if(state.queued){const q=state.queued;state.queued=null;requestSelection(q.section,q.index,q.updateHash);}
}
function requestSelection(section,index=0,updateHash=true){
  if(!CONTENT[section])section='home';index=Math.max(0,Math.min(index,CONTENT[section].length-1));
  if(state.busy){state.queued={section,index,updateHash};dom.status.textContent='Queued next page';return;}
  if(updateHash)history.replaceState(null,'',`#${section}/${CONTENT[section][index].id}`);
  deliverBoard(section,index);
}

// ---------- raycast: clicking any station object selects it ----------
const raycaster=new THREE.Raycaster(), pointer=new THREE.Vector2();
dom.canvas.addEventListener('pointerup',e=>{
  const sidebar=getSidebarWidth(); if(e.clientX<sidebar)return;
  pointer.x=((e.clientX-sidebar)/(innerWidth-sidebar))*2-1;pointer.y=-(e.clientY/innerHeight)*2+1;
  raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(modelRayTargets,true);
  for(const hit of hits){let o=hit.object;while(o){if(o.userData.navKey){const st=state.stations.get(o.userData.navKey);if(st){requestSelection(st.section,st.index);return;}}o=o.parent;}}
});

// ---------- physics with real board/model/arm collisions ----------
const boardOBB=new OBB(), tmpClosest=new THREE.Vector3(), tmpDelta=new THREE.Vector3();
function resolveSphereOBB(object,obb,radius){
  obb.clampPoint(object.position,tmpClosest);tmpDelta.copy(object.position).sub(tmpClosest);let dist=tmpDelta.length();
  if(dist<radius){if(dist<1e-5){tmpDelta.copy(object.position).sub(obb.center);if(tmpDelta.lengthSq()<1e-5)tmpDelta.set(0,1,0);dist=.001;}tmpDelta.normalize();object.position.copy(tmpClosest).addScaledVector(tmpDelta,radius+.002);const v=object.userData.velocity;const vn=v.dot(tmpDelta);if(vn<0)v.addScaledVector(tmpDelta,-1.55*vn);}
}
function resolveSphereBox(object,box3,radius){
  box3.clampPoint(object.position,tmpClosest);tmpDelta.copy(object.position).sub(tmpClosest);let dist=tmpDelta.length();
  if(dist<radius){if(dist<1e-5){tmpDelta.copy(object.position).sub(box3.getCenter(new THREE.Vector3()));if(tmpDelta.lengthSq()<1e-5)tmpDelta.set(0,1,0);dist=.001;}tmpDelta.normalize();object.position.copy(tmpClosest).addScaledVector(tmpDelta,radius+.002);const v=object.userData.velocity;const vn=v.dot(tmpDelta);if(vn<0)v.addScaledVector(tmpDelta,-1.45*vn);}
}
function closestPointSegment(p,a,b,out){const ab=b.clone().sub(a);const t=THREE.MathUtils.clamp(p.clone().sub(a).dot(ab)/(ab.lengthSq()||1),0,1);return out.copy(a).addScaledVector(ab,t);}
function resolveSphereArm(object,radius){
  const pts=armWorldPoints();const cp=new THREE.Vector3();
  for(let i=0;i<pts.length-1;i++){
    closestPointSegment(object.position,pts[i],pts[i+1],cp);tmpDelta.copy(object.position).sub(cp);const rr=radius+ARM.radius[i]+.04;let dist=tmpDelta.length();
    if(dist<rr){if(dist<1e-5){tmpDelta.set(0,1,0);dist=.001;}tmpDelta.normalize();object.position.copy(cp).addScaledVector(tmpDelta,rr);const v=object.userData.velocity;const vn=v.dot(tmpDelta);if(vn<0)v.addScaledVector(tmpDelta,-1.5*vn);}
  }
}
function updatePhysics(dt){
  for(const o of state.spawned){
    const v=o.userData.velocity,a=o.userData.angular,r=o.userData.radius||.55;v.y-=7.7*dt;o.position.addScaledVector(v,dt);o.rotation.x+=a.x*dt;o.rotation.y+=a.y*dt;o.rotation.z+=a.z*dt;
    if(o.position.y-r<0){o.position.y=r;if(v.y<0)v.y*=-.40;v.x*=.985;v.z*=.985;a.multiplyScalar(.991);}
    for(const st of state.stations.values()){
      st.board.updateMatrixWorld(true);boardOBB.center.set(0,0,0);boardOBB.halfSize.set(BOARD.width/2,BOARD.height/2,BOARD.thickness/2+.03);boardOBB.rotation.identity();boardOBB.applyMatrix4(st.board.matrixWorld);resolveSphereOBB(o,boardOBB,r);
      const modelBox=new THREE.Box3().setFromObject(st.model);resolveSphereBox(o,modelBox,r);const pedBox=new THREE.Box3().setFromObject(st.pedestal);resolveSphereBox(o,pedBox,r);
    }
    resolveSphereArm(o,r);
    const limit=6.5;for(const ax of ['x','z']){if(o.position[ax]+r>limit){o.position[ax]=limit-r;v[ax]=-Math.abs(v[ax])*.5;}else if(o.position[ax]-r<-limit){o.position[ax]=-limit+r;v[ax]=Math.abs(v[ax])*.5;}}
  }
}

function spawnShape(kind){
  let o;
  if(kind==='plane')o=box(1.15,.08,1.15,.025,0x717980,.78,.05);
  else if(kind==='circle')o=mesh(new THREE.CylinderGeometry(.52,.52,.10,32),0x7b746c,.62,.14);
  else if(kind==='sphere')o=mesh(new THREE.SphereGeometry(.50,26,18),0x64786b,.50,.13);
  else if(kind==='icosphere')o=mesh(new THREE.IcosahedronGeometry(.52,2),0x5d7488,.48,.18);
  else if(kind==='cylinder')o=mesh(new THREE.CylinderGeometry(.43,.43,.94,24),0x776b6b,.52,.18);
  else if(kind==='cone')o=mesh(new THREE.ConeGeometry(.53,1.0,26),0x81785e,.52,.18);
  else if(kind==='torus')o=mesh(new THREE.TorusGeometry(.46,.15,16,42),0x706979,.48,.20);
  else if(kind==='monkey'){o=new THREE.Group();gltfLoader.load(SUZANNE_URL,g=>{const s=g.scene;s.scale.setScalar(.45);s.traverse(c=>{if(c.isMesh){c.material=mat(0x8e98a2,.42,.18);c.castShadow=true;}});o.add(s);});}
  else o=box(.86,.86,.86,.055,0x5d7488,.48,.18);
  o.userData.radius=.54;o.position.set(-.2+(Math.random()-.5)*2.0,4.0+Math.random(),1.0+(Math.random()-.5)*1.3);o.rotation.set(Math.random(),Math.random(),Math.random());o.userData.velocity=new THREE.Vector3((Math.random()-.5)*1.2,0,(Math.random()-.5)*1.2);o.userData.angular=new THREE.Vector3(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(1.4);scene.add(o);state.spawned.push(o);state.selectedSpawn=o;closeAddMenu();if(state.spawned.length>12){const old=state.spawned.shift();scene.remove(old);disposeObject(old);}
}
function tossSelected(){if(state.selectedSpawn)state.selectedSpawn.userData.velocity.set((Math.random()-.5)*3,5,(Math.random()-.5)*3);}
function spinSelected(){state.selectedSpawn?.userData.angular.add(new THREE.Vector3(.7,1.3,.35));}
function deleteSelected(){const o=state.selectedSpawn;if(!o)return;scene.remove(o);state.spawned=state.spawned.filter(x=>x!==o);disposeObject(o);state.selectedSpawn=state.spawned.at(-1)||null;}
function openAddMenu(){state.addOpen=true;dom.addMenu.hidden=false;dom.addObject.setAttribute('aria-expanded','true');}
function closeAddMenu(){state.addOpen=false;dom.addMenu.hidden=true;dom.addObject.setAttribute('aria-expanded','false');}
dom.addObject.addEventListener('click',()=>state.addOpen?closeAddMenu():openAddMenu());
dom.addMenu.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>spawnShape(b.dataset.add)));
document.addEventListener('pointerdown',e=>{if(state.addOpen&&!dom.addMenu.contains(e.target)&&!dom.addObject.contains(e.target))closeAddMenu();});
window.addEventListener('keydown',e=>{
  if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;
  if(e.shiftKey&&e.key.toLowerCase()==='a'){e.preventDefault();openAddMenu();return;}
  if(state.addOpen&&/^[1-9]$/.test(e.key)){spawnShape(['plane','cube','circle','sphere','icosphere','cylinder','cone','torus','monkey'][Number(e.key)-1]);return;}
  if(e.key.toLowerCase()==='g')tossSelected();if(e.key.toLowerCase()==='r')spinSelected();if(e.key.toLowerCase()==='x')deleteSelected();if(e.key==='Escape')closeAddMenu();
});

// ---------- animation updates ----------
function updateArmTween(now){
  if(!state.armTween)return;const t=Math.min(1,(now-state.armTween.start)/state.armTween.duration),e=ease(t),tw=state.armTween;
  armState.yaw=THREE.MathUtils.lerp(tw.fromYaw,tw.toYaw,e);armState.angles=tw.fromAngles.map((a,i)=>THREE.MathUtils.lerp(a,tw.toAngles[i],e));if(t>=1)state.armTween=null;
}
function updateGripTween(now){if(!state.gripTween)return;const t=Math.min(1,(now-state.gripTween.start)/state.gripTween.duration);armState.grip=THREE.MathUtils.lerp(state.gripTween.from,state.gripTween.to,ease(t));if(t>=1)state.gripTween=null;}
function updateObjectTweens(now){state.objectTweens=state.objectTweens.filter(tw=>{const t=Math.min(1,(now-tw.start)/tw.duration),e=ease(t);tw.object.position.lerpVectors(tw.fromP,tw.toP,e);tw.object.quaternion.slerpQuaternions(tw.fromQ,tw.toQ,e);tw.object.scale.lerpVectors(tw.fromS,tw.toS,e);return t<1;});}

function getSidebarWidth(){return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sidebar'))||330;}
function resize(){
  const w=innerWidth,h=innerHeight,side=Math.min(getSidebarWidth(),w-120),rw=Math.max(120,w-side);
  renderer.setSize(w,h,false);renderer.setViewport(side,0,rw,h);renderer.setScissor(side,0,rw,h);camera.aspect=rw/h;camera.updateProjectionMatrix();camera.lookAt(CAMERA_TARGET);
}
window.addEventListener('resize',resize);

function readHash(){
  const raw=location.hash.replace(/^#/,'');if(!raw){requestSelection('home',0,false);return;}
  const [section,id]=raw.split('/');const s=CONTENT[section]?section:'home';const i=Math.max(0,CONTENT[s].findIndex(x=>x.id===id));requestSelection(s,i,false);
}
window.addEventListener('hashchange',readHash);
document.querySelector('[data-direct-section="home"]').addEventListener('click',e=>{e.preventDefault();requestSelection('home',0);});

let last=performance.now();
function animate(now){
  requestAnimationFrame(animate);const dt=Math.min(.033,(now-last)/1000);last=now;
  updateArmTween(now);updateGripTween(now);updateArmVisual();updateHeldBoard(now);updateObjectTweens(now);updatePhysics(dt);renderer.render(scene,camera);
}

renderNav();createAllStations();resize();updateArmVisual();readHash();requestAnimationFrame(animate);
