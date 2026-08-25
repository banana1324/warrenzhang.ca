import * as THREE from "three";

import {
  OrbitControls
} from "three/addons/controls/OrbitControls.js";

import {
  RoundedBoxGeometry
} from "three/addons/geometries/RoundedBoxGeometry.js";


/* =========================================================
   LINKS
========================================================= */

const LINKS = {
  github: "https://github.com/banana1324",
  linkedin: "https://www.linkedin.com/in/fuyuanzhang",
  email: "mailto:warrenz7980@gmail.com",
  resume: "./assets/resume.pdf"
};


/* =========================================================
   WEBSITE CONTENT
========================================================= */

const CONTENT = {

  home: [
    {
      id: "home",

      label: "Home",

      kicker: "HELLO",

      title:
        "Building things that move, sense, and think.",

      meta:
        "Waterloo CS · Software · Embedded · Robotics",

      description:
        "I like projects where software eventually has to interact with something real: a robot, a sensor, a radio, a physical interface, or a person using it. This portfolio is built the same way. Pick something to inspect and the lab brings it to you.",

      facts: [
        {
          value: "Software",
          label: "Python · C++ · JavaScript"
        },
        {
          value: "Embedded",
          label: "ESP32 · RP2040 · Raspberry Pi"
        },
        {
          value: "Robotics",
          label: "Vision · PID · Odometry"
        }
      ],

      details: [
        "The information panel is intentionally the main part of the website.",
        "The lab bench changes depending on the section you are reading.",
        "The robotic arm acts as a curator and presents the object connected to the current topic."
      ],

      model: "robot",

      armPose: "welcome",

      links: {
        primary: {
          label: "Explore projects",
          action: "projects"
        },

        secondary: {
          label: "GitHub ↗",
          href: LINKS.github
        }
      }
    }
  ],


  about: [
    {
      id: "about",

      label: "About",

      kicker: "ABOUT",

      title:
        "I like working where software meets hardware.",

      meta:
        "Computer Science · University of Waterloo",

      description:
        "My interests sit between software engineering, embedded systems, robotics, and applied AI. I enjoy building the code, connecting it to physical hardware, testing the whole system, and figuring out why it does not behave the way I expected.",

      facts: [
        {
          value: "Waterloo",
          label: "Computer Science"
        },
        {
          value: "Systems",
          label: "Hardware + software"
        },
        {
          value: "Builder",
          label: "Projects over demos"
        }
      ],

      details: [
        "I enjoy embedded systems because the software has to deal with real sensors, timing, communication, and hardware limitations.",
        "Robotics combines several things I like at once: software, mechanical systems, electronics, perception, and control.",
        "I also enjoy interactive web development and 3D because an interface can itself become something the visitor experiments with."
      ],

      model: "portrait",

      armPose: "present",

      links: {
        primary: {
          label: "Resume ↗",
          href: LINKS.resume
        },

        secondary: {
          label: "LinkedIn ↗",
          href: LINKS.linkedin
        }
      }
    }
  ],


  projects: [

    {
      id: "wildfire",

      label: "Wildfire",

      kicker: "PROJECT",

      title:
        "Wildfire Detection System",

      meta:
        "C++ · LoRaWAN · Raspberry Pi · BME680 · MQTT",

      description:
        "I built an IoT wildfire monitoring system that connects an environmental sensor node to a Raspberry Pi gateway over LoRaWAN, then sends the data into an MQTT and Node-RED software pipeline for processing and visualization.",

      facts: [
        {
          value: "BME680",
          label: "Environmental sensing"
        },
        {
          value: "LoRaWAN",
          label: "Long-range communication"
        },
        {
          value: "Node-RED",
          label: "Dashboard + processing"
        }
      ],

      details: [
        "Developed the environmental sensing node and configured long-range wireless communication.",
        "Connected the sensor side to a Raspberry Pi gateway and MQTT data flow.",
        "Built a dashboard and tested the end-to-end sensor, radio, gateway, and visualization pipeline."
      ],

      model: "wildfire",

      armPose: "inspect",

      links: {
        primary: {
          label: "GitHub ↗",
          href: LINKS.github
        }
      }
    },


    {
      id: "robotics",

      label: "Robotics",

      kicker: "PROJECT",

      title:
        "Embedded Robotics",

      meta:
        "Python · MicroPython · Computer Vision · PID",

      description:
        "My robotics projects combine embedded programming with perception and physical control. I have built computer-vision applications that recognize faces and fingers and use those inputs to control robotic systems.",

      facts: [
        {
          value: "Vision",
          label: "Face + finger recognition"
        },
        {
          value: "Control",
          label: "PID + odometry"
        },
        {
          value: "Embedded",
          label: "MicroPython + C++"
        }
      ],

      details: [
        "Built computer-vision interactions that convert visual recognition into physical robot commands.",
        "Worked with PID control and odometry in competition robotics.",
        "Debugged systems across software, electronics, mechanical components, and sensors."
      ],

      model: "robot",

      armPose: "point",

      links: {
        primary: {
          label: "GitHub ↗",
          href: LINKS.github
        }
      }
    },


    {
      id: "embedded",

      label: "Embedded",

      kicker: "PROJECT",

      title:
        "Embedded Systems",

      meta:
        "ESP32 · RP2040 · Arduino · Raspberry Pi",

      description:
        "I have developed and debugged software for several embedded platforms, connected sensors and wireless systems, and used physical debugging tools when the problem could not be solved by reading code alone.",

      facts: [
        {
          value: "ESP32",
          label: "Wireless embedded systems"
        },
        {
          value: "RP2040",
          label: "MicroPython + C++"
        },
        {
          value: "Debugging",
          label: "Scope + logic analyzer"
        }
      ],

      details: [
        "Worked with ESP32, Raspberry Pi Pico, Arduino Uno, and Raspberry Pi.",
        "Integrated sensors and LoRaWAN communication.",
        "Used oscilloscopes and logic analyzers to diagnose hardware and communication problems."
      ],

      model: "pcb",

      armPose: "inspect",

      links: {
        primary: {
          label: "GitHub ↗",
          href: LINKS.github
        }
      }
    },


    {
      id: "web",

      label: "Web",

      kicker: "PROJECT",

      title:
        "Interactive Web Projects",

      meta:
        "JavaScript · HTML/CSS · Three.js",

      description:
        "I enjoy websites most when the interface itself is part of the project. Instead of treating motion and 3D as decoration, I like using interaction to explain what the user is looking at.",

      facts: [
        {
          value: "Three.js",
          label: "Interactive 3D"
        },
        {
          value: "Responsive",
          label: "Desktop + mobile"
        },
        {
          value: "GitHub",
          label: "Version + deployment"
        }
      ],

      details: [
        "Built responsive interfaces using JavaScript and HTML/CSS.",
        "Experimented with 3D interaction, rigid bodies, and motion.",
        "Designed this portfolio so the information remains fast while the 3D scene reacts in parallel."
      ],

      model: "monitor",

      armPose: "present",

      links: {
        primary: {
          label: "GitHub ↗",
          href: LINKS.github
        }
      }
    }

  ],


  experience: [

    {
      id: "eim",

      label: "EIM",

      kicker: "EXPERIENCE",

      title:
        "EIM Technology",

      meta:
        "Technical Support Intern · Nov 2024 – Jun 2026",

      description:
        "At EIM Technology I worked across embedded software, hardware integration, testing, and technical learning materials. The work gave me repeated practice taking a hardware/software system from an idea to something another person could actually use.",

      facts: [
        {
          value: "15",
          label: "Apps + games"
        },
        {
          value: "446",
          label: "Kickstarter backers"
        },
        {
          value: "$195k+",
          label: "Campaign funding"
        }
      ],

      details: [
        "Developed embedded software for ESP32, RP2040, Arduino Uno, and Raspberry Pi.",
        "Built and debugged 15 apps and games for the KC15 EIM learning kit.",
        "Integrated sensors and LoRaWAN systems and used oscilloscopes and logic analyzers for debugging.",
        "Contributed software development and promotional photography to three Kickstarter campaigns."
      ],

      model: "pcb",

      armPose: "inspect",

      links: {
        primary: {
          label: "Resume ↗",
          href: LINKS.resume
        }
      }
    },


    {
      id: "robotics-team",

      label: "4471A",

      kicker: "EXPERIENCE",

      title:
        "Competition Robotics",

      meta:
        "CAD · PID · Odometry · Robot Systems",

      description:
        "Competition robotics taught me to treat software, mechanics, and electronics as one system. A control algorithm only matters if the physical robot can actually repeat the motion under competition conditions.",

      facts: [
        {
          value: "4471A",
          label: "Competition team"
        },
        {
          value: "PID",
          label: "Motion control"
        },
        {
          value: "CAD",
          label: "Mechanical design"
        }
      ],

      details: [
        "Worked with CAD and mechanical robot systems.",
        "Applied PID control and odometry to robot movement.",
        "Iterated through testing, mechanical changes, and software tuning."
      ],

      model: "robot",

      armPose: "point",

      links: {
        primary: {
          label: "Resume ↗",
          href: LINKS.resume
        }
      }
    },


    {
      id: "coaching",

      label: "Coaching",

      kicker: "EXPERIENCE",

      title:
        "Badminton Coach",

      meta:
        "Stage18 Badminton Center · May 2024 – May 2026",

      description:
        "Coaching taught me how to notice small errors, explain them clearly, and adjust the explanation when a student does not understand it the first time. It was also very different from technical work because the system I was working with was a group of people.",

      facts: [
        {
          value: "200+",
          label: "Coaching hours"
        },
        {
          value: "40+",
          label: "Students"
        },
        {
          value: "7–15",
          label: "Student ages"
        }
      ],

      details: [
        "Coached more than 40 students across over 200 hours.",
        "Helped students improve badminton technique and confidence.",
        "Maintained clear expectations and kept group lessons focused and organized."
      ],

      model: "racket",

      armPose: "reach",

      links: {
        primary: {
          label: "Resume ↗",
          href: LINKS.resume
        }
      }
    }

  ],


  interests: [

    {
      id: "blender",

      label: "Blender",

      kicker: "INTEREST",

      title:
        "Blender & 3D",

      meta:
        "Rigid Bodies · Armatures · Mechanical Motion",

      description:
        "The part of Blender I enjoy most is making a scene behave. Rigid-body simulations, collisions, armatures, and mechanisms are more interesting to me than simply producing a static render.",

      facts: [
        {
          value: "Physics",
          label: "Rigid bodies"
        },
        {
          value: "Rigging",
          label: "Armatures"
        },
        {
          value: "3D",
          label: "Interactive systems"
        }
      ],

      details: [
        "I like building rigid-body simulations and seeing how objects interact.",
        "Armatures are interesting because they turn a static mesh into a mechanical system.",
        "The robotic curator on this website is directly inspired by that interest."
      ],

      model: "monkey",

      armPose: "play",

      links: {}
    },


    {
      id: "hardware",

      label: "Hardware",

      kicker: "INTEREST",

      title:
        "Hardware & Electronics",

      meta:
        "Sensors · Microcontrollers · Debugging",

      description:
        "I like the point where a program stops being entirely abstract and has to interact with a sensor, a motor, a radio, or a circuit. Hardware makes bugs more interesting because the answer is not always somewhere in the source code.",

      facts: [
        {
          value: "Sensors",
          label: "Physical inputs"
        },
        {
          value: "Boards",
          label: "Embedded computing"
        },
        {
          value: "Tools",
          label: "Physical debugging"
        }
      ],

      details: [
        "Microcontrollers and embedded development.",
        "Sensor and wireless communication integration.",
        "Debugging with oscilloscopes and logic analyzers."
      ],

      model: "pcb",

      armPose: "inspect",

      links: {}
    },


    {
      id: "music",

      label: "Music",

      kicker: "INTEREST",

      title:
        "Music & Audio",

      meta:
        "Trombone · Live Audio",

      description:
        "Music is another place where timing, coordination, and systems matter. I have played trombone and also worked with live audio setup and equipment.",

      facts: [
        {
          value: "Trombone",
          label: "Performance"
        },
        {
          value: "Audio",
          label: "Live sound"
        },
        {
          value: "Team",
          label: "Performance systems"
        }
      ],

      details: [
        "Played trombone in school ensembles.",
        "Helped set up and take down live audio systems.",
        "Learned to diagnose problems by listening and adjusting in real time."
      ],

      model: "trombone",

      armPose: "present",

      links: {}
    }

  ],


  contact: [
    {
      id: "contact",

      label: "Contact",

      kicker: "CONTACT",

      title:
        "Get in touch.",

      meta:
        "Email · GitHub · LinkedIn",

      description:
        "For software, embedded, robotics, or AI-related opportunities, email is the easiest way to reach me. My GitHub and LinkedIn are also linked below.",

      facts: [
        {
          value: "Email",
          label: "Direct contact"
        },
        {
          value: "GitHub",
          label: "Projects + code"
        },
        {
          value: "LinkedIn",
          label: "Experience"
        }
      ],

      details: [
        "Email: warrenz7980@gmail.com",
        "GitHub: banana1324",
        "LinkedIn: fuyuanzhang"
      ],

      model: "envelope",

      armPose: "present",

      links: {
        primary: {
          label: "Email ↗",
          href: LINKS.email
        },

        secondary: {
          label: "GitHub ↗",
          href: LINKS.github
        },

        tertiary: {
          label: "LinkedIn ↗",
          href: LINKS.linkedin
        }
      }
    }
  ]

};


/* =========================================================
   SCENE KITS

   These are the objects sitting around the robotic arm.
========================================================= */

const SCENE_KITS = {

  home: [
    {
      model: "wildfire",
      position: [-3.9, 0, -1.8],
      rotation: [0, 0.4, 0],
      scale: 0.63,
      target: ["projects", "wildfire"]
    },

    {
      model: "robot",
      position: [-4.2, 0, 1.7],
      rotation: [0, 0.7, 0],
      scale: 0.56,
      target: ["projects", "robotics"]
    },

    {
      model: "pcb",
      position: [-1.2, 0, -2.8],
      rotation: [0, -0.2, 0],
      scale: 0.62,
      target: ["projects", "embedded"]
    },

    {
      model: "monitor",
      position: [4.3, 0, -2.1],
      rotation: [0, -0.55, 0],
      scale: 0.52,
      target: ["projects", "web"]
    },

    {
      model: "racket",
      position: [4.9, 0, 1.8],
      rotation: [0, -0.5, -0.1],
      scale: 0.5,
      target: ["experience", "coaching"]
    },

    {
      model: "monkey",
      position: [1.6, 0, -3.3],
      rotation: [0, -0.5, 0],
      scale: 0.48,
      target: ["interests", "blender"]
    },

    {
      model: "trombone",
      position: [0.1, 0, 3.2],
      rotation: [0, 0.4, 0],
      scale: 0.45,
      target: ["interests", "music"]
    }
  ],


  about: [
    {
      model: "portrait",
      position: [-3.8, 0, 0.8],
      rotation: [0, 0.5, 0],
      scale: 0.58,
      target: ["about", "about"]
    },

    {
      model: "laptop",
      position: [-3.5, 0, -2.1],
      rotation: [0, 0.3, 0],
      scale: 0.62
    },

    {
      model: "resume",
      position: [4, 0.03, -1.8],
      rotation: [-0.04, -0.5, 0],
      scale: 0.62
    },

    {
      model: "books",
      position: [4.1, 0, 1.8],
      rotation: [0, -0.5, 0],
      scale: 0.64
    }
  ],


  projects: [
    {
      model: "wildfire",
      position: [-4.1, 0, -1.7],
      rotation: [0, 0.5, 0],
      scale: 0.67,
      target: ["projects", "wildfire"]
    },

    {
      model: "robot",
      position: [-4.2, 0, 1.7],
      rotation: [0, 0.6, 0],
      scale: 0.58,
      target: ["projects", "robotics"]
    },

    {
      model: "pcb",
      position: [4.2, 0, -1.8],
      rotation: [0, -0.5, 0],
      scale: 0.68,
      target: ["projects", "embedded"]
    },

    {
      model: "monitor",
      position: [4.2, 0, 1.8],
      rotation: [0, -0.6, 0],
      scale: 0.55,
      target: ["projects", "web"]
    }
  ],


  experience: [
    {
      model: "pcb",
      position: [-4.1, 0, -1.6],
      rotation: [0, 0.5, 0],
      scale: 0.68,
      target: ["experience", "eim"]
    },

    {
      model: "robot",
      position: [-4.1, 0, 1.8],
      rotation: [0, 0.65, 0],
      scale: 0.58,
      target: ["experience", "robotics-team"]
    },

    {
      model: "racket",
      position: [4.25, 0, 1.25],
      rotation: [0, -0.55, -0.12],
      scale: 0.54,
      target: ["experience", "coaching"]
    },

    {
      model: "shuttlecock",
      position: [3.1, 0, -1.6],
      rotation: [0, 0.4, 0.35],
      scale: 0.8,
      target: ["experience", "coaching"]
    }
  ],


  interests: [
    {
      model: "monkey",
      position: [-4.1, 0, -1.4],
      rotation: [0, 0.5, 0],
      scale: 0.57,
      target: ["interests", "blender"]
    },

    {
      model: "cubeStack",
      position: [-3.5, 0, 1.9],
      rotation: [0, 0.25, 0],
      scale: 0.63,
      target: ["interests", "blender"]
    },

    {
      model: "pcb",
      position: [4.25, 0, -1.7],
      rotation: [0, -0.5, 0],
      scale: 0.67,
      target: ["interests", "hardware"]
    },

    {
      model: "trombone",
      position: [4.1, 0, 1.8],
      rotation: [0, -0.45, 0],
      scale: 0.48,
      target: ["interests", "music"]
    }
  ],


  contact: [
    {
      model: "envelope",
      position: [-3.9, 0, -1.5],
      rotation: [0, 0.45, 0],
      scale: 0.7
    },

    {
      model: "phone",
      position: [-3.6, 0, 1.6],
      rotation: [0, 0.5, 0],
      scale: 0.64
    },

    {
      model: "resume",
      position: [4, 0, -1.65],
      rotation: [0, -0.5, 0],
      scale: 0.62
    },

    {
      model: "laptop",
      position: [4, 0, 1.8],
      rotation: [0, -0.5, 0],
      scale: 0.57
    }
  ]

};


/* =========================================================
   ROBOT ARM POSES
========================================================= */

const ARM_POSES = {

  welcome: {
    base: -0.52,
    shoulder: -0.34,
    elbow: 1.08,
    forearm: -0.46,
    wrist: 0.16,
    wristY: 0.0,
    grip: 0.23
  },

  present: {
    base: -1.08,
    shoulder: -0.63,
    elbow: 1.42,
    forearm: -0.73,
    wrist: 0.34,
    wristY: 0.12,
    grip: 0.19
  },

  inspect: {
    base: -1.23,
    shoulder: -0.78,
    elbow: 1.58,
    forearm: -0.82,
    wrist: 0.25,
    wristY: 0.06,
    grip: 0.16
  },

  point: {
    base: -1.02,
    shoulder: -0.53,
    elbow: 1.27,
    forearm: -0.45,
    wrist: -0.2,
    wristY: 0.18,
    grip: 0.3
  },

  reach: {
    base: -1.35,
    shoulder: -0.78,
    elbow: 1.67,
    forearm: -0.91,
    wrist: 0.12,
    wristY: -0.1,
    grip: 0.11
  },

  play: {
    base: -0.7,
    shoulder: -0.24,
    elbow: 0.85,
    forearm: -0.24,
    wrist: 0.47,
    wristY: 0.25,
    grip: 0.34
  }

};


/* =========================================================
   DOM
========================================================= */

const dom = {

  viewport:
    document.querySelector("#viewport"),

  canvas:
    document.querySelector("#scene-canvas"),

  sceneLabel:
    document.querySelector("#scene-label"),

  sceneFooterName:
    document.querySelector("#scene-footer-name"),

  contentKicker:
    document.querySelector("#content-kicker"),

  contentCount:
    document.querySelector("#content-count"),

  contentTitle:
    document.querySelector("#content-title"),

  contentMeta:
    document.querySelector("#content-meta"),

  contentDescription:
    document.querySelector("#content-description"),

  factGrid:
    document.querySelector("#fact-grid"),

  contentDetails:
    document.querySelector("#content-details"),

  itemNavigation:
    document.querySelector("#item-navigation"),

  itemList:
    document.querySelector("#item-list"),

  previousItem:
    document.querySelector("#previous-item"),

  nextItem:
    document.querySelector("#next-item"),

  primaryLink:
    document.querySelector("#primary-link"),

  secondaryLink:
    document.querySelector("#secondary-link"),

  tertiaryLink:
    document.querySelector("#tertiary-link"),

  resetView:
    document.querySelector("#reset-view"),

  addObject:
    document.querySelector("#add-object"),

  addMenu:
    document.querySelector("#add-menu"),

  mobileMenuButton:
    document.querySelector("#mobile-menu-button"),

  mobileNav:
    document.querySelector("#mobile-nav")

};


/* =========================================================
   STATE
========================================================= */

const state = {

  section:
    "home",

  index:
    0,

  activeKit:
    null,

  previousKit:
    null,

  kitAnimation:
    null,

  featuredModel:
    null,

  previousFeatured:
    null,

  featuredAnimation:
    null,

  armPose:
    {
      ...ARM_POSES.welcome
    },

  armTarget:
    {
      ...ARM_POSES.welcome
    },

  spawned:
    [],

  selectedSpawn:
    null,

  addMenuOpen:
    false

};


/* =========================================================
   THREE.JS SETUP
========================================================= */

const renderer =
  new THREE.WebGLRenderer({
    canvas: dom.canvas,
    antialias: true
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
  1.1;


const scene =
  new THREE.Scene();


scene.background =
  new THREE.Color(
    0x171b21
  );


scene.fog =
  new THREE.Fog(
    0x171b21,
    11,
    25
  );


const camera =
  new THREE.PerspectiveCamera(
    42,
    1,
    0.1,
    100
  );


camera.position.set(
  7.8,
  5.3,
  9.9
);


/* =========================================================
   ORBIT CONTROLS
========================================================= */

const controls =
  new OrbitControls(
    camera,
    dom.canvas
  );


controls.target.set(
  0,
  1.15,
  0
);


controls.enableDamping =
  true;


controls.dampingFactor =
  0.065;


/*
  Do NOT allow wheel zoom.
  The user's mouse wheel remains normal webpage scrolling.
*/

controls.enableZoom =
  false;


controls.enablePan =
  false;


controls.minPolarAngle =
  Math.PI * 0.25;


controls.maxPolarAngle =
  Math.PI * 0.49;


controls.update();


/* =========================================================
   LIGHTING
========================================================= */

const hemi =
  new THREE.HemisphereLight(
    0xeaf3ff,
    0x2b3039,
    2.25
  );


scene.add(
  hemi
);


const mainLight =
  new THREE.DirectionalLight(
    0xffffff,
    3.15
  );


mainLight.position.set(
  6,
  10,
  5
);


mainLight.castShadow =
  true;


mainLight.shadow.mapSize.set(
  2048,
  2048
);


mainLight.shadow.camera.left =
  -10;


mainLight.shadow.camera.right =
  10;


mainLight.shadow.camera.top =
  10;


mainLight.shadow.camera.bottom =
  -10;


scene.add(
  mainLight
);


const warmLight =
  new THREE.DirectionalLight(
    0xff932e,
    1.35
  );


warmLight.position.set(
  -5,
  4,
  -5
);


scene.add(
  warmLight
);


const blueLight =
  new THREE.PointLight(
    0x5d9ee0,
    18,
    8
  );


blueLight.position.set(
  -4,
  4,
  3
);


scene.add(
  blueLight
);


/* =========================================================
   MATERIAL HELPERS
========================================================= */

function material(
  color,
  roughness = 0.55,
  metalness = 0.15,
  emissive = 0x000000,
  emissiveIntensity = 0
) {

  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness,
    emissive,
    emissiveIntensity
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


/* =========================================================
   LAB BENCH
========================================================= */

const bench =
  new THREE.Group();


scene.add(
  bench
);


const floor =
  roundedBox(
    18,
    0.28,
    11,
    0.08,
    0x343941,
    0.93,
    0.05
  );


floor.position.y =
  -0.14;


bench.add(
  floor
);


const grid =
  new THREE.GridHelper(
    17.6,
    22,
    0x5d6571,
    0x434a54
  );


grid.position.y =
  0.011;


grid.scale.z =
  0.62;


bench.add(
  grid
);


/* Back tool rail */

for (
  let i = -5;
  i <= 5;
  i++
) {

  const railPin =
    mesh(
      new THREE.CylinderGeometry(
        0.035,
        0.035,
        0.42,
        10
      ),
      0x68717d,
      0.38,
      0.6
    );


  railPin.rotation.x =
    Math.PI / 2;


  railPin.position.set(
    i * 0.83,
    0.3,
    -4.48
  );


  bench.add(
    railPin
  );

}


/* =========================================================
   FEATURED PEDESTAL
========================================================= */

const pedestal =
  new THREE.Group();


scene.add(
  pedestal
);


const pedestalBase =
  mesh(
    new THREE.CylinderGeometry(
      1.28,
      1.48,
      0.32,
      40
    ),
    0x24272d,
    0.36,
    0.65
  );


pedestalBase.position.y =
  0.16;


pedestal.add(
  pedestalBase
);


const pedestalRing =
  mesh(
    new THREE.TorusGeometry(
      1.15,
      0.08,
      14,
      48
    ),
    0xf28c28,
    0.4,
    0.4
  );


pedestalRing.rotation.x =
  Math.PI / 2;


pedestalRing.position.y =
  0.37;


pedestal.add(
  pedestalRing
);


const pedestalTop =
  mesh(
    new THREE.CylinderGeometry(
      1.08,
      1.08,
      0.13,
      40
    ),
    0x15171b,
    0.72,
    0.3
  );


pedestalTop.position.y =
  0.42;


pedestal.add(
  pedestalTop
);


pedestal.position.set(
  -1.2,
  0,
  0.25
);


const featuredRoot =
  new THREE.Group();


featuredRoot.position.set(
  -1.2,
  0.51,
  0.25
);


scene.add(
  featuredRoot
);


/* =========================================================
   CURATOR ROBOT ARM
========================================================= */

const arm =
  buildRobotArm();


arm.group.position.set(
  2.1,
  0,
  -0.15
);


scene.add(
  arm.group
);


/* =========================================================
   ROBOT ARM MODEL
========================================================= */

function buildRobotArm() {

  const group =
    new THREE.Group();


  const orange =
    0xe77713;


  const orangeDark =
    0xb95008;


  const dark =
    0x1b1d21;


  const steel =
    0x9da5ae;


  /* Base */

  const baseFoot =
    mesh(
      new THREE.CylinderGeometry(
        0.72,
        0.82,
        0.24,
        36
      ),
      dark,
      0.35,
      0.7
    );


  baseFoot.position.y =
    0.12;


  group.add(
    baseFoot
  );


  const baseBody =
    mesh(
      new THREE.CylinderGeometry(
        0.57,
        0.66,
        0.45,
        36
      ),
      orangeDark,
      0.4,
      0.35
    );


  baseBody.position.y =
    0.42;


  group.add(
    baseBody
  );


  const baseJoint =
    new THREE.Group();


  baseJoint.position.y =
    0.65;


  group.add(
    baseJoint
  );


  const shoulderHousing =
    mesh(
      new THREE.CylinderGeometry(
        0.45,
        0.45,
        0.54,
        30
      ),
      dark,
      0.32,
      0.68
    );


  shoulderHousing.rotation.z =
    Math.PI / 2;


  baseJoint.add(
    shoulderHousing
  );


  const shoulder =
    new THREE.Group();


  shoulder.position.y =
    0.14;


  baseJoint.add(
    shoulder
  );


  /* Upper arm */

  const upper =
    roundedBox(
      0.55,
      2.15,
      0.58,
      0.13,
      orange,
      0.4,
      0.28
    );


  upper.position.y =
    1.03;


  shoulder.add(
    upper
  );


  const upperInset =
    roundedBox(
      0.26,
      1.28,
      0.61,
      0.07,
      0x24272b,
      0.43,
      0.45
    );


  upperInset.position.set(
    0,
    1.03,
    0
  );


  shoulder.add(
    upperInset
  );


  const elbow =
    new THREE.Group();


  elbow.position.y =
    2.03;


  shoulder.add(
    elbow
  );


  const elbowOuter =
    mesh(
      new THREE.CylinderGeometry(
        0.46,
        0.46,
        0.52,
        30
      ),
      dark,
      0.32,
      0.72
    );


  elbowOuter.rotation.z =
    Math.PI / 2;


  elbow.add(
    elbowOuter
  );


  const elbowCap1 =
    mesh(
      new THREE.CylinderGeometry(
        0.31,
        0.31,
        0.055,
        28
      ),
      steel,
      0.23,
      0.82
    );


  elbowCap1.rotation.z =
    Math.PI / 2;


  elbowCap1.position.x =
    0.29;


  elbow.add(
    elbowCap1
  );


  const elbowCap2 =
    elbowCap1.clone();


  elbowCap2.position.x =
    -0.29;


  elbow.add(
    elbowCap2
  );


  const forearm =
    new THREE.Group();


  elbow.add(
    forearm
  );


  const lower =
    roundedBox(
      0.45,
      1.65,
      0.47,
      0.11,
      orange,
      0.4,
      0.28
    );


  lower.position.y =
    0.78;


  forearm.add(
    lower
  );


  const wrist =
    new THREE.Group();


  wrist.position.y =
    1.56;


  forearm.add(
    wrist
  );


  const wristJoint =
    mesh(
      new THREE.CylinderGeometry(
        0.31,
        0.31,
        0.4,
        24
      ),
      dark,
      0.3,
      0.7
    );


  wristJoint.rotation.z =
    Math.PI / 2;


  wrist.add(
    wristJoint
  );


  const hand =
    new THREE.Group();


  hand.position.y =
    0.33;


  wrist.add(
    hand
  );


  const palm =
    roundedBox(
      0.55,
      0.25,
      0.4,
      0.06,
      0x25282d,
      0.3,
      0.65
    );


  hand.add(
    palm
  );


  const fingerL =
    roundedBox(
      0.13,
      0.62,
      0.17,
      0.03,
      steel,
      0.28,
      0.72
    );


  fingerL.position.set(
    -0.2,
    0.35,
    0
  );


  hand.add(
    fingerL
  );


  const fingerR =
    roundedBox(
      0.13,
      0.62,
      0.17,
      0.03,
      steel,
      0.28,
      0.72
    );


  fingerR.position.set(
    0.2,
    0.35,
    0
  );


  hand.add(
    fingerR
  );


  /* Initial pose */

  baseJoint.rotation.y =
    ARM_POSES.welcome.base;


  shoulder.rotation.z =
    ARM_POSES.welcome.shoulder;


  elbow.rotation.z =
    ARM_POSES.welcome.elbow;


  forearm.rotation.z =
    ARM_POSES.welcome.forearm;


  wrist.rotation.z =
    ARM_POSES.welcome.wrist;


  return {
    group,
    baseJoint,
    shoulder,
    elbow,
    forearm,
    wrist,
    fingerL,
    fingerR
  };

}


/* =========================================================
   MODEL FACTORY
========================================================= */

function createModel(
  name
) {

  switch (name) {

    case "wildfire":
      return createWildfireSensor();

    case "robot":
      return createRobot();

    case "pcb":
      return createPCB();

    case "monitor":
      return createMonitor();

    case "racket":
      return createRacket();

    case "shuttlecock":
      return createShuttlecock();

    case "monkey":
      return createMonkey();

    case "trombone":
      return createTrombone();

    case "portrait":
      return createPortrait();

    case "laptop":
      return createLaptop();

    case "resume":
      return createResume();

    case "books":
      return createBooks();

    case "phone":
      return createPhone();

    case "envelope":
      return createEnvelope();

    case "cubeStack":
      return createCubeStack();

    default:
      return createRobot();

  }

}


/* =========================================================
   WILDFIRE SENSOR
========================================================= */

function createWildfireSensor() {

  const group =
    new THREE.Group();


  /* Rugged enclosure */

  const enclosure =
    roundedBox(
      1.5,
      0.78,
      1.15,
      0.15,
      0x343c42,
      0.68,
      0.15
    );


  enclosure.position.y =
    0.45;


  group.add(
    enclosure
  );


  /* Top plate */

  const lid =
    roundedBox(
      1.56,
      0.12,
      1.2,
      0.09,
      0x465159,
      0.55,
      0.25
    );


  lid.position.y =
    0.88;


  group.add(
    lid
  );


  /* Sensor grille */

  const grille =
    roundedBox(
      0.48,
      0.32,
      0.12,
      0.04,
      0x181b1d,
      0.75,
      0.05
    );


  grille.position.set(
    -0.4,
    0.55,
    0.585
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
      roundedBox(
        0.055,
        0.22,
        0.02,
        0.01,
        0x8b989f,
        0.5,
        0.4
      );


    vent.position.set(
      -0.4 +
      i * 0.075,
      0.55,
      0.655
    );


    group.add(
      vent
    );

  }


  /* Display */

  const display =
    roundedBox(
      0.42,
      0.22,
      0.035,
      0.03,
      0x66c7d4,
      0.25,
      0.15
    );


  display.position.set(
    0.42,
    0.6,
    0.65
  );


  display.material.emissive.set(
    0x174a50
  );


  display.material.emissiveIntensity =
    0.7;


  group.add(
    display
  );


  /* Status LEDs */

  const ledColors = [
    0x70d454,
    0xf2b43c,
    0x4f9ee8
  ];


  ledColors.forEach(
    (
      color,
      index
    ) => {

      const led =
        mesh(
          new THREE.SphereGeometry(
            0.045,
            14,
            10
          ),
          color,
          0.2,
          0.15
        );


      led.material.emissive.set(
        color
      );


      led.material.emissiveIntensity =
        1.5;


      led.position.set(
        -0.18 +
        index * 0.15,
        0.34,
        0.65
      );


      group.add(
        led
      );

    }
  );


  /* Antenna base */

  const antennaBase =
    mesh(
      new THREE.CylinderGeometry(
        0.1,
        0.12,
        0.17,
        18
      ),
      0x17191b,
      0.4,
      0.45
    );


  antennaBase.position.set(
    0.5,
    1.02,
    -0.28
  );


  group.add(
    antennaBase
  );


  const antenna =
    mesh(
      new THREE.CylinderGeometry(
        0.035,
        0.043,
        1.5,
        14
      ),
      0x111214,
      0.5,
      0.4
    );


  antenna.position.set(
    0.5,
    1.84,
    -0.28
  );


  group.add(
    antenna
  );


  /* Small wildfire symbol */

  const flame1 =
    mesh(
      new THREE.ConeGeometry(
        0.14,
        0.46,
        20
      ),
      0xff8c25,
      0.45,
      0.1
    );


  flame1.position.set(
    -0.03,
    1.23,
    0.03
  );


  group.add(
    flame1
  );


  const flame2 =
    mesh(
      new THREE.ConeGeometry(
        0.07,
        0.28,
        16
      ),
      0xffd05a,
      0.42,
      0.08
    );


  flame2.position.set(
    0,
    1.27,
    0.09
  );


  group.add(
    flame2
  );


  group.userData.baseRadius =
    0.9;


  return group;

}


/* =========================================================
   ROBOT
========================================================= */

function createRobot() {

  const group =
    new THREE.Group();


  const chassis =
    roundedBox(
      1.75,
      0.45,
      1.25,
      0.13,
      0x414850,
      0.43,
      0.55
    );


  chassis.position.y =
    0.57;


  group.add(
    chassis
  );


  /* Orange bumper */

  const bumper =
    roundedBox(
      1.88,
      0.17,
      1.35,
      0.07,
      0xe87818,
      0.42,
      0.26
    );


  bumper.position.y =
    0.38;


  group.add(
    bumper
  );


  /* Wheels */

  const wheelPositions = [
    [-0.74, -0.55],
    [0.74, -0.55],
    [-0.74, 0.55],
    [0.74, 0.55]
  ];


  wheelPositions.forEach(
    (
      [x, z]
    ) => {

      const wheel =
        mesh(
          new THREE.CylinderGeometry(
            0.31,
            0.31,
            0.24,
            26
          ),
          0x16181b,
          0.82,
          0.08
        );


      wheel.rotation.z =
        Math.PI / 2;


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
            0.11,
            0.11,
            0.27,
            18
          ),
          0xb6bec5,
          0.28,
          0.75
        );


      hub.rotation.z =
        Math.PI / 2;


      hub.position.set(
        x,
        0.38,
        z
      );


      group.add(
        hub
      );

    }
  );


  /* Electronics deck */

  const deck =
    roundedBox(
      1.24,
      0.13,
      0.84,
      0.05,
      0x285f47,
      0.68,
      0.12
    );


  deck.position.y =
    0.86;


  group.add(
    deck
  );


  /* Mast */

  const mast =
    roundedBox(
      0.22,
      1.2,
      0.22,
      0.05,
      0xe87818,
      0.4,
      0.24
    );


  mast.position.set(
    0,
    1.47,
    0
  );


  group.add(
    mast
  );


  /* Camera */

  const cameraBox =
    roundedBox(
      0.72,
      0.44,
      0.5,
      0.09,
      0x22262b,
      0.38,
      0.55
    );


  cameraBox.position.set(
    0,
    2.07,
    0
  );


  group.add(
    cameraBox
  );


  const lens =
    mesh(
      new THREE.CylinderGeometry(
        0.17,
        0.17,
        0.18,
        22
      ),
      0x579bc9,
      0.18,
      0.72
    );


  lens.rotation.x =
    Math.PI / 2;


  lens.position.set(
    0,
    2.07,
    0.32
  );


  lens.material.emissive.set(
    0x123148
  );


  lens.material.emissiveIntensity =
    0.5;


  group.add(
    lens
  );


  /* Ultrasonic pair */

  for (
    const x of [-0.28, 0.28]
  ) {

    const sensor =
      mesh(
        new THREE.CylinderGeometry(
          0.105,
          0.105,
          0.08,
          20
        ),
        0x9aa5ad,
        0.26,
        0.76
      );


    sensor.rotation.x =
      Math.PI / 2;


    sensor.position.set(
      x,
      0.64,
      0.68
    );


    group.add(
      sensor
    );

  }


  group.userData.baseRadius =
    1.15;


  return group;

}


/* =========================================================
   PCB
========================================================= */

function createPCB() {

  const group =
    new THREE.Group();


  const board =
    roundedBox(
      2.05,
      0.12,
      1.28,
      0.06,
      0x246348,
      0.65,
      0.15
    );


  board.position.y =
    0.25;


  group.add(
    board
  );


  /* MCU */

  const chip =
    roundedBox(
      0.65,
      0.14,
      0.65,
      0.03,
      0x101214,
      0.64,
      0.08
    );


  chip.position.set(
    0.05,
    0.37,
    0
  );


  group.add(
    chip
  );


  /* chip pins */

  for (
    const z of [-0.36, 0.36]
  ) {

    for (
      let i = -3;
      i <= 3;
      i++
    ) {

      const pin =
        roundedBox(
          0.08,
          0.035,
          0.17,
          0.01,
          0xc6c9c5,
          0.25,
          0.78
        );


      pin.position.set(
        i * 0.09,
        0.37,
        z
      );


      group.add(
        pin
      );

    }

  }


  /* USB connector */

  const usb =
    roundedBox(
      0.42,
      0.24,
      0.55,
      0.04,
      0xa6adb3,
      0.26,
      0.78
    );


  usb.position.set(
    -0.82,
    0.4,
    0
  );


  group.add(
    usb
  );


  /* antenna block */

  const antenna =
    roundedBox(
      0.53,
      0.07,
      0.37,
      0.02,
      0xdfd4aa,
      0.75,
      0.03
    );


  antenna.position.set(
    0.73,
    0.35,
    0.25
  );


  group.add(
    antenna
  );


  /* capacitors */

  for (
    let i = 0;
    i < 4;
    i++
  ) {

    const cap =
      mesh(
        new THREE.CylinderGeometry(
          0.07,
          0.07,
          0.15,
          12
        ),
        i % 2
          ? 0x2c3640
          : 0xd19b38,
        0.45,
        0.28
      );


    cap.position.set(
      0.58 +
      (i % 2) * 0.19,
      0.4,
      -0.28 +
      Math.floor(i / 2) * 0.2
    );


    group.add(
      cap
    );

  }


  /* pin headers */

  for (
    const z of [-0.52, 0.52]
  ) {

    for (
      let i = 0;
      i < 10;
      i++
    ) {

      const pin =
        mesh(
          new THREE.CylinderGeometry(
            0.022,
            0.022,
            0.25,
            8
          ),
          0xd2af53,
          0.2,
          0.8
        );


      pin.position.set(
        -0.73 +
        i * 0.16,
        0.43,
        z
      );


      group.add(
        pin
      );

    }

  }


  group.userData.baseRadius =
    1.1;


  return group;

}


/* =========================================================
   MONITOR
========================================================= */

function createMonitor() {

  const group =
    new THREE.Group();


  const frame =
    roundedBox(
      2.25,
      1.42,
      0.18,
      0.13,
      0x1a1d22,
      0.36,
      0.55
    );


  frame.position.y =
    1.3;


  group.add(
    frame
  );


  const screen =
    roundedBox(
      2.02,
      1.19,
      0.03,
      0.08,
      0x294b66,
      0.28,
      0.12
    );


  screen.position.set(
    0,
    1.31,
    0.107
  );


  screen.material.emissive.set(
    0x16344c
  );


  screen.material.emissiveIntensity =
    0.65;


  group.add(
    screen
  );


  /* fake editor lines */

  const lineColors = [
    0x6cc4ff,
    0xf2a95d,
    0x9ed47d,
    0xc88bd9
  ];


  for (
    let i = 0;
    i < 7;
    i++
  ) {

    const line =
      roundedBox(
        0.48 +
        (i % 3) * 0.18,
        0.035,
        0.015,
        0.01,
        lineColors[
          i % lineColors.length
        ],
        0.35,
        0.1
      );


    line.position.set(
      -0.55 +
      (i % 2) * 0.2,
      1.62 -
      i * 0.12,
      0.135
    );


    line.material.emissive.set(
      lineColors[
        i % lineColors.length
      ]
    );


    line.material.emissiveIntensity =
      0.7;


    group.add(
      line
    );

  }


  const stand =
    roundedBox(
      0.3,
      0.66,
      0.25,
      0.05,
      0x3f454c,
      0.35,
      0.65
    );


  stand.position.y =
    0.52;


  group.add(
    stand
  );


  const foot =
    roundedBox(
      1.05,
      0.1,
      0.64,
      0.05,
      0x3d4248,
      0.36,
      0.67
    );


  foot.position.y =
    0.14;


  group.add(
    foot
  );


  group.userData.baseRadius =
    1.2;


  return group;

}


/* =========================================================
   BADMINTON RACKET
========================================================= */

function createRacket() {

  const group =
    new THREE.Group();


  /* Oval head */

  const frame =
    mesh(
      new THREE.TorusGeometry(
        0.68,
        0.055,
        14,
        64
      ),
      0xd8dde2,
      0.3,
      0.65
    );


  frame.scale.y =
    1.29;


  frame.position.y =
    1.75;


  group.add(
    frame
  );


  /* Strings */

  const stringMaterial =
    new THREE.LineBasicMaterial({
      color:
        0xb7c0c8,
      transparent:
        true,
      opacity:
        0.65
    });


  const stringGroup =
    new THREE.Group();


  for (
    let i = -5;
    i <= 5;
    i++
  ) {

    const x =
      i * 0.1;


    const normalized =
      x / 0.63;


    const height =
      Math.sqrt(
        Math.max(
          0,
          1 -
          normalized *
          normalized
        )
      ) *
      0.82;


    const geometry =
      new THREE.BufferGeometry()
        .setFromPoints([
          new THREE.Vector3(
            x,
            1.75 - height,
            0
          ),

          new THREE.Vector3(
            x,
            1.75 + height,
            0
          )
        ]);


    stringGroup.add(
      new THREE.Line(
        geometry,
        stringMaterial.clone()
      )
    );

  }


  for (
    let i = -7;
    i <= 7;
    i++
  ) {

    const y =
      i * 0.1;


    const normalized =
      y / 0.82;


    const width =
      Math.sqrt(
        Math.max(
          0,
          1 -
          normalized *
          normalized
        )
      ) *
      0.63;


    const geometry =
      new THREE.BufferGeometry()
        .setFromPoints([
          new THREE.Vector3(
            -width,
            1.75 + y,
            0
          ),

          new THREE.Vector3(
            width,
            1.75 + y,
            0
          )
        ]);


    stringGroup.add(
      new THREE.Line(
        geometry,
        stringMaterial.clone()
      )
    );

  }


  group.add(
    stringGroup
  );


  const shaft =
    mesh(
      new THREE.CylinderGeometry(
        0.027,
        0.035,
        1.08,
        12
      ),
      0xc8cdd2,
      0.28,
      0.72
    );


  shaft.position.y =
    0.83;


  group.add(
    shaft
  );


  const throat =
    mesh(
      new THREE.ConeGeometry(
        0.13,
        0.34,
        14
      ),
      0xe87818,
      0.36,
      0.28
    );


  throat.position.y =
    1.25;


  group.add(
    throat
  );


  const handle =
    mesh(
      new THREE.CylinderGeometry(
        0.06,
        0.075,
        0.72,
        14
      ),
      0x1e2023,
      0.8,
      0.05
    );


  handle.position.y =
    0.3;


  group.add(
    handle
  );


  /* Grip rings */

  for (
    let i = 0;
    i < 6;
    i++
  ) {

    const grip =
      mesh(
        new THREE.TorusGeometry(
          0.072,
          0.009,
          8,
          20
        ),
        0x4c4f52,
        0.78,
        0.05
      );


    grip.rotation.x =
      Math.PI / 2;


    grip.position.y =
      0.06 +
      i * 0.1;


    group.add(
      grip
    );

  }


  group.rotation.z =
    -0.12;


  group.userData.baseRadius =
    0.9;


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
        0.18,
        18,
        12
      ),
      0xe1c396,
      0.78,
      0.02
    );


  cork.scale.y =
    0.72;


  cork.position.y =
    0.18;


  group.add(
    cork
  );


  for (
    let i = 0;
    i < 12;
    i++
  ) {

    const feather =
      roundedBox(
        0.08,
        0.54,
        0.025,
        0.015,
        0xf3f3ed,
        0.86,
        0
      );


    const angle =
      (
        i /
        12
      ) *
      Math.PI *
      2;


    feather.position.set(
      Math.cos(angle) *
      0.16,
      0.55,
      Math.sin(angle) *
      0.16
    );


    feather.rotation.z =
      Math.cos(angle) *
      0.22;


    feather.rotation.x =
      Math.sin(angle) *
      0.22;


    feather.rotation.y =
      -angle;


    group.add(
      feather
    );

  }


  group.userData.baseRadius =
    0.5;


  return group;

}


/* =========================================================
   BLENDER MONKEY-INSPIRED MODEL
========================================================= */

function createMonkey() {

  const group =
    new THREE.Group();


  const brown =
    0x98705b;


  const light =
    0xba8e70;


  /* cranium */

  const head =
    mesh(
      new THREE.IcosahedronGeometry(
        0.64,
        2
      ),
      brown,
      0.72,
      0.05
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


  /* cheeks */

  for (
    const x of [-0.42, 0.42]
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

  }


  /* ears */

  for (
    const x of [-0.74, 0.74]
  ) {

    const ear =
      mesh(
        new THREE.IcosahedronGeometry(
          0.3,
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
      x,
      1.13,
      0
    );


    group.add(
      ear
    );

  }


  /* muzzle */

  const muzzle =
    mesh(
      new THREE.IcosahedronGeometry(
        0.44,
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


  /* brow ridge */

  for (
    const x of [-0.24, 0.24]
  ) {

    const brow =
      roundedBox(
        0.38,
        0.1,
        0.14,
        0.03,
        0x5b4035,
        0.7,
        0.03
      );


    brow.position.set(
      x,
      1.25,
      0.61
    );


    brow.rotation.z =
      x < 0
        ? -0.16
        : 0.16;


    group.add(
      brow
    );

  }


  /* eyes */

  for (
    const x of [-0.23, 0.23]
  ) {

    const eye =
      mesh(
        new THREE.SphereGeometry(
          0.07,
          14,
          10
        ),
        0x151515,
        0.3,
        0.05
      );


    eye.position.set(
      x,
      1.16,
      0.69
    );


    group.add(
      eye
    );

  }


  group.userData.baseRadius =
    0.9;


  return group;

}


/* =========================================================
   TROMBONE
========================================================= */

function createTrombone() {

  const group =
    new THREE.Group();


  const brass =
    0xc99735;


  const darkBrass =
    0x8a611f;


  /* Main tubes */

  for (
    const y of [0.84, 1.12]
  ) {

    const tube =
      mesh(
        new THREE.CylinderGeometry(
          0.035,
          0.035,
          2.2,
          12
        ),
        brass,
        0.23,
        0.8
      );


    tube.rotation.z =
      Math.PI / 2;


    tube.position.set(
      -0.05,
      y,
      0
    );


    group.add(
      tube
    );

  }


  /* braces */

  for (
    const x of [-0.48, 0.2]
  ) {

    const brace =
      mesh(
        new THREE.CylinderGeometry(
          0.024,
          0.024,
          0.28,
          10
        ),
        darkBrass,
        0.25,
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


  /* Bell */

  const bell =
    mesh(
      new THREE.ConeGeometry(
        0.43,
        0.74,
        36,
        1,
        true
      ),
      brass,
      0.22,
      0.82
    );


  bell.rotation.z =
    -Math.PI / 2;


  bell.position.set(
    1.36,
    1.12,
    0
  );


  group.add(
    bell
  );


  const bellRim =
    mesh(
      new THREE.TorusGeometry(
        0.43,
        0.025,
        10,
        40
      ),
      0xd9ac4c,
      0.2,
      0.85
    );


  bellRim.rotation.y =
    Math.PI / 2;


  bellRim.position.set(
    1.73,
    1.12,
    0
  );


  group.add(
    bellRim
  );


  /* Slide U bend */

  const bend =
    mesh(
      new THREE.TorusGeometry(
        0.14,
        0.034,
        10,
        30,
        Math.PI
      ),
      brass,
      0.22,
      0.82
    );


  bend.rotation.set(
    Math.PI / 2,
    0,
    Math.PI / 2
  );


  bend.position.set(
    -1.18,
    0.98,
    0
  );


  group.add(
    bend
  );


  /* mouthpiece */

  const mouthpiece =
    mesh(
      new THREE.CylinderGeometry(
        0.05,
        0.075,
        0.35,
        14
      ),
      0xbec3c5,
      0.18,
      0.9
    );


  mouthpiece.rotation.z =
    Math.PI / 2;


  mouthpiece.position.set(
    -1.3,
    1.12,
    0
  );


  group.add(
    mouthpiece
  );


  group.userData.baseRadius =
    1.25;


  return group;

}


/* =========================================================
   PORTRAIT BUST
========================================================= */

function createPortrait() {

  const group =
    new THREE.Group();


  const torso =
    roundedBox(
      1.32,
      0.86,
      0.72,
      0.22,
      0x52697c,
      0.72,
      0.06
    );


  torso.position.y =
    0.47;


  torso.scale.x =
    1.12;


  group.add(
    torso
  );


  const neck =
    mesh(
      new THREE.CylinderGeometry(
        0.19,
        0.22,
        0.33,
        18
      ),
      0xcba887,
      0.85,
      0.02
    );


  neck.position.y =
    1.02;


  group.add(
    neck
  );


  const head =
    mesh(
      new THREE.IcosahedronGeometry(
        0.48,
        3
      ),
      0xd1ae8d,
      0.86,
      0.02
    );


  head.scale.set(
    0.9,
    1.08,
    0.86
  );


  head.position.y =
    1.46;


  group.add(
    head
  );


  const hair =
    mesh(
      new THREE.IcosahedronGeometry(
        0.49,
        2
      ),
      0x252525,
      0.85,
      0.02
    );


  hair.scale.set(
    0.93,
    0.52,
    0.89
  );


  hair.position.set(
    0,
    1.74,
    -0.02
  );


  group.add(
    hair
  );


  group.userData.baseRadius =
    0.85;


  return group;

}


/* =========================================================
   LAPTOP
========================================================= */

function createLaptop() {

  const group =
    new THREE.Group();


  const base =
    roundedBox(
      1.8,
      0.1,
      1.15,
      0.06,
      0x737980,
      0.32,
      0.7
    );


  base.position.y =
    0.12;


  group.add(
    base
  );


  const screenGroup =
    new THREE.Group();


  screenGroup.position.set(
    0,
    0.18,
    -0.5
  );


  screenGroup.rotation.x =
    -0.23;


  group.add(
    screenGroup
  );


  const frame =
    roundedBox(
      1.7,
      1.03,
      0.08,
      0.07,
      0x33383e,
      0.34,
      0.62
    );


  frame.position.y =
    0.53;


  screenGroup.add(
    frame
  );


  const screen =
    roundedBox(
      1.52,
      0.84,
      0.02,
      0.04,
      0x224863,
      0.25,
      0.1
    );


  screen.position.set(
    0,
    0.54,
    0.051
  );


  screen.material.emissive.set(
    0x133044
  );


  screen.material.emissiveIntensity =
    0.65;


  screenGroup.add(
    screen
  );


  /* Keyboard */

  for (
    let row = 0;
    row < 4;
    row++
  ) {

    for (
      let col = 0;
      col < 9;
      col++
    ) {

      const key =
        roundedBox(
          0.12,
          0.018,
          0.095,
          0.01,
          0x24282d,
          0.52,
          0.3
        );


      key.position.set(
        -0.56 +
        col * 0.14,
        0.18,
        -0.22 +
        row * 0.13
      );


      group.add(
        key
      );

    }

  }


  group.userData.baseRadius =
    1.0;


  return group;

}


/* =========================================================
   RESUME SHEET
========================================================= */

function createResume() {

  const group =
    new THREE.Group();


  const paper =
    roundedBox(
      1.3,
      0.04,
      1.75,
      0.03,
      0xe8e7e0,
      0.86,
      0
    );


  paper.position.y =
    0.06;


  group.add(
    paper
  );


  const lineLengths = [
    0.74,
    0.92,
    0.82,
    0.62,
    0.94,
    0.8,
    0.9
  ];


  lineLengths.forEach(
    (
      length,
      index
    ) => {

      const line =
        roundedBox(
          length,
          0.018,
          0.045,
          0.01,
          index === 0
            ? 0x333940
            : 0x7a8085,
          0.74,
          0
        );


      line.position.set(
        -0.1,
        0.09,
        -0.58 +
        index * 0.18
      );


      group.add(
        line
      );

    }
  );


  const orangeLine =
    roundedBox(
      0.28,
      0.022,
      0.05,
      0.01,
      0xe87818,
      0.55,
      0
    );


  orangeLine.position.set(
    -0.44,
    0.095,
    -0.73
  );


  group.add(
    orangeLine
  );


  group.userData.baseRadius =
    0.95;


  return group;

}


/* =========================================================
   BOOK STACK
========================================================= */

function createBooks() {

  const group =
    new THREE.Group();


  const books = [
    [1.35, 0.22, 0.82, 0x4f6f89],
    [1.18, 0.2, 0.78, 0xb45d3b],
    [1.3, 0.21, 0.8, 0x5d7550]
  ];


  books.forEach(
    (
      [
        w,
        h,
        d,
        color
      ],
      index
    ) => {

      const book =
        roundedBox(
          w,
          h,
          d,
          0.05,
          color,
          0.76,
          0.02
        );


      book.position.y =
        0.11 +
        index * 0.21;


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


  group.userData.baseRadius =
    0.8;


  return group;

}


/* =========================================================
   PHONE
========================================================= */

function createPhone() {

  const group =
    new THREE.Group();


  const body =
    roundedBox(
      0.62,
      0.1,
      1.22,
      0.12,
      0x20242a,
      0.35,
      0.68
    );


  body.position.y =
    0.08;


  group.add(
    body
  );


  const screen =
    roundedBox(
      0.53,
      0.02,
      1.04,
      0.09,
      0x1f5575,
      0.25,
      0.12
    );


  screen.position.y =
    0.145;


  screen.material.emissive.set(
    0x12354b
  );


  screen.material.emissiveIntensity =
    0.72;


  group.add(
    screen
  );


  const cameraDot =
    mesh(
      new THREE.SphereGeometry(
        0.035,
        12,
        8
      ),
      0x090a0b,
      0.3,
      0.45
    );


  cameraDot.position.set(
    0,
    0.17,
    -0.43
  );


  group.add(
    cameraDot
  );


  group.userData.baseRadius =
    0.72;


  return group;

}


/* =========================================================
   ENVELOPE
========================================================= */

function createEnvelope() {

  const group =
    new THREE.Group();


  const envelope =
    roundedBox(
      1.65,
      0.08,
      1.08,
      0.06,
      0xe2e0d9,
      0.8,
      0
    );


  envelope.position.y =
    0.08;


  group.add(
    envelope
  );


  const lineMaterial =
    new THREE.LineBasicMaterial({
      color:
        0x7a7e80
    });


  const points1 = [
    new THREE.Vector3(
      -0.75,
      0.13,
      -0.45
    ),

    new THREE.Vector3(
      0,
      0.13,
      0.02
    ),

    new THREE.Vector3(
      0.75,
      0.13,
      -0.45
    )
  ];


  group.add(
    new THREE.Line(
      new THREE.BufferGeometry()
        .setFromPoints(
          points1
        ),
      lineMaterial
    )
  );


  const points2 = [
    new THREE.Vector3(
      -0.75,
      0.13,
      0.45
    ),

    new THREE.Vector3(
      0,
      0.13,
      0
    ),

    new THREE.Vector3(
      0.75,
      0.13,
      0.45
    )
  ];


  group.add(
    new THREE.Line(
      new THREE.BufferGeometry()
        .setFromPoints(
          points2
        ),
      lineMaterial.clone()
    )
  );


  group.userData.baseRadius =
    0.9;


  return group;

}


/* =========================================================
   CUBE STACK
========================================================= */

function createCubeStack() {

  const group =
    new THREE.Group();


  const colors = [
    0xe87818,
    0x5f8eb8,
    0x6fa25a,
    0x9b6fad,
    0xd4a247
  ];


  const positions = [
    [-0.5, 0.32, 0],
    [0.1, 0.32, 0],
    [0.68, 0.32, 0.04],
    [-0.2, 0.88, 0.02],
    [0.4, 0.9, -0.03]
  ];


  positions.forEach(
    (
      [x, y, z],
      index
    ) => {

      const cube =
        roundedBox(
          0.55,
          0.55,
          0.55,
          0.07,
          colors[index],
          0.53,
          0.14
        );


      cube.position.set(
        x,
        y,
        z
      );


      cube.rotation.set(
        index * 0.07,
        index * 0.13,
        index * 0.04
      );


      group.add(
        cube
      );

    }
  );


  group.userData.baseRadius =
    1.0;


  return group;

}


/* =========================================================
   MODEL OPACITY
========================================================= */

function setGroupOpacity(
  group,
  opacity
) {

  group.traverse(
    child => {

      if (
        !child.material
      ) {
        return;
      }


      const materials =
        Array.isArray(
          child.material
        )
          ? child.material
          : [child.material];


      materials.forEach(
        mat => {

          mat.transparent =
            opacity < 0.999;


          mat.opacity =
            opacity;

        }
      );

    }
  );

}


/* =========================================================
   DISPOSAL
========================================================= */

function disposeGroup(
  group
) {

  if (
    !group
  ) {
    return;
  }


  group.traverse(
    child => {

      child.geometry
        ?.dispose?.();


      if (
        Array.isArray(
          child.material
        )
      ) {

        child.material.forEach(
          mat =>
            mat.dispose?.()
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
   SCENE KIT LOADING
========================================================= */

function loadSceneKit(
  section
) {

  const descriptors =
    SCENE_KITS[
      section
    ] ||
    SCENE_KITS.home;


  const newGroup =
    new THREE.Group();


  newGroup.scale.setScalar(
    0.96
  );


  newGroup.userData.props =
    [];


  descriptors.forEach(
    descriptor => {

      const object =
        createModel(
          descriptor.model
        );


      object.position.set(
        ...descriptor.position
      );


      object.rotation.set(
        ...descriptor.rotation
      );


      object.scale.setScalar(
        descriptor.scale
      );


      object.userData.baseScale =
        descriptor.scale;


      object.userData.highlightScale =
        descriptor.scale *
        1.1;


      object.userData.targetScale =
        descriptor.scale;


      if (
        descriptor.target
      ) {

        object.userData.clickTarget = {
          section:
            descriptor.target[0],

          id:
            descriptor.target[1]
        };

      }


      newGroup.add(
        object
      );


      newGroup.userData.props.push(
        object
      );

    }
  );


  setGroupOpacity(
    newGroup,
    0
  );


  scene.add(
    newGroup
  );


  state.previousKit =
    state.activeKit;


  state.activeKit =
    newGroup;


  state.kitAnimation = {
    start:
      performance.now(),

    duration:
      430
  };

}


/* =========================================================
   FEATURED MODEL
========================================================= */

function swapFeaturedModel(
  modelName
) {

  const incoming =
    createModel(
      modelName
    );


  incoming.scale.setScalar(
    0.02
  );


  incoming.position.set(
    0.25,
    0.08,
    0
  );


  featuredRoot.add(
    incoming
  );


  state.previousFeatured =
    state.featuredModel;


  state.featuredModel =
    incoming;


  state.featuredAnimation = {
    start:
      performance.now(),

    duration:
      480
  };

}


/* =========================================================
   ARM TARGET
========================================================= */

function setArmPose(
  poseName
) {

  const pose =
    ARM_POSES[
      poseName
    ] ||
    ARM_POSES.welcome;


  state.armTarget =
    {
      ...pose
    };

}


/* =========================================================
   CONTENT RENDERING
========================================================= */

function currentItems() {

  return CONTENT[
    state.section
  ];

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

  if (
    !CONTENT[section]
  ) {
    section =
      "home";
  }


  const sectionChanged =
    state.section !== section;


  state.section =
    section;


  const items =
    CONTENT[section];


  if (
    itemId
  ) {

    const found =
      items.findIndex(
        item =>
          item.id === itemId
      );


    state.index =
      found >= 0
        ? found
        : 0;

  }

  else {

    state.index =
      0;

  }


  if (
    sectionChanged ||
    !state.activeKit
  ) {

    loadSceneKit(
      section
    );

  }


  renderCurrentItem();


  updateNavigationStyles();


  if (
    updateHash
  ) {

    const item =
      currentItem();


    history.replaceState(
      null,
      "",
      `#${section}/${item.id}`
    );

  }


  if (
    !dom.mobileNav.hidden
  ) {

    dom.mobileNav.hidden =
      true;


    dom.mobileMenuButton
      .setAttribute(
        "aria-expanded",
        "false"
      );

  }

}


/* =========================================================
   SELECT ITEM
========================================================= */

function selectItem(
  index,
  updateHash = true
) {

  const items =
    currentItems();


  state.index =
    (
      index +
      items.length
    ) %
    items.length;


  renderCurrentItem();


  if (
    updateHash
  ) {

    const item =
      currentItem();


    history.replaceState(
      null,
      "",
      `#${state.section}/${item.id}`
    );

  }

}


/* =========================================================
   MAIN CONTENT
========================================================= */

function renderCurrentItem() {

  const item =
    currentItem();


  const items =
    currentItems();


  dom.contentKicker.textContent =
    item.kicker;


  dom.contentCount.textContent =
    `${String(
      state.index + 1
    ).padStart(
      2,
      "0"
    )} / ${String(
      items.length
    ).padStart(
      2,
      "0"
    )}`;


  dom.contentTitle.textContent =
    item.title;


  dom.contentMeta.textContent =
    item.meta;


  dom.contentDescription.textContent =
    item.description;


  dom.sceneLabel.textContent =
    `${capitalize(
      state.section
    )} / ${item.label}`;


  dom.sceneFooterName.textContent =
    sectionSceneName(
      state.section
    );


  renderFacts(
    item.facts
  );


  renderDetails(
    item.details
  );


  renderItemNavigation();


  renderLinks(
    item.links || {}
  );


  swapFeaturedModel(
    item.model
  );


  setArmPose(
    item.armPose
  );


  highlightProps(
    item.id
  );

}


/* =========================================================
   FACTS
========================================================= */

function renderFacts(
  facts
) {

  dom.factGrid
    .replaceChildren();


  facts.forEach(
    fact => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "fact-card";


      const strong =
        document.createElement(
          "strong"
        );


      strong.textContent =
        fact.value;


      const span =
        document.createElement(
          "span"
        );


      span.textContent =
        fact.label;


      card.append(
        strong,
        span
      );


      dom.factGrid.append(
        card
      );

    }
  );

}


/* =========================================================
   DETAILS
========================================================= */

function renderDetails(
  details
) {

  dom.contentDetails
    .replaceChildren();


  details.forEach(
    detail => {

      const li =
        document.createElement(
          "li"
        );


      li.textContent =
        detail;


      dom.contentDetails.append(
        li
      );

    }
  );

}


/* =========================================================
   ITEM NAV
========================================================= */

function renderItemNavigation() {

  const items =
    currentItems();


  dom.itemNavigation.hidden =
    items.length <= 1;


  dom.itemList
    .replaceChildren();


  items.forEach(
    (
      item,
      index
    ) => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "item-button";


      if (
        index ===
        state.index
      ) {

        button.classList.add(
          "is-active"
        );

      }


      button.textContent =
        item.label;


      button.addEventListener(
        "click",
        () =>
          selectItem(
            index
          )
      );


      dom.itemList.append(
        button
      );

    }
  );

}


/* =========================================================
   LINKS
========================================================= */

function renderLinks(
  links
) {

  configureLink(
    dom.primaryLink,
    links.primary
  );


  configureLink(
    dom.secondaryLink,
    links.secondary
  );


  configureLink(
    dom.tertiaryLink,
    links.tertiary
  );

}


function configureLink(
  element,
  data
) {

  if (
    !data
  ) {

    element.hidden =
      true;


    element.removeAttribute(
      "href"
    );


    element.onclick =
      null;


    return;

  }


  element.hidden =
    false;


  element.textContent =
    data.label;


  if (
    data.action
  ) {

    element.href =
      "#";


    element.target =
      "";


    element.onclick =
      event => {

        event.preventDefault();


        setSection(
          data.action
        );

      };


    return;

  }


  element.onclick =
    null;


  element.href =
    data.href;


  if (
    data.href &&
    !data.href.startsWith(
      "mailto:"
    )
  ) {

    element.target =
      "_blank";


    element.rel =
      "noreferrer";

  }

}


/* =========================================================
   NAV STYLE
========================================================= */

function updateNavigationStyles() {

  document
    .querySelectorAll(
      "[data-section]"
    )
    .forEach(
      button => {

        const active =
          button.dataset.section ===
          state.section;


        button.classList.toggle(
          "is-active",
          active
        );

      }
    );

}


/* =========================================================
   PROP HIGHLIGHTING
========================================================= */

function highlightProps(
  itemId
) {

  if (
    !state.activeKit
  ) {
    return;
  }


  const props =
    state.activeKit
      .userData
      .props || [];


  props.forEach(
    prop => {

      const target =
        prop.userData
          .clickTarget;


      const matches =
        target &&
        target.section ===
        state.section &&
        target.id ===
        itemId;


      prop.userData.targetScale =
        matches
          ? prop.userData.highlightScale
          : prop.userData.baseScale;

    }
  );

}


/* =========================================================
   3D CLICKING
========================================================= */

const raycaster =
  new THREE.Raycaster();


const pointer =
  new THREE.Vector2();


let pointerDown = {
  x: 0,
  y: 0
};


function updatePointer(
  event
) {

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

}


function findClickable(
  object
) {

  let current =
    object;


  while (
    current
  ) {

    if (
      current.userData
        .clickTarget
    ) {

      return current;

    }


    current =
      current.parent;

  }


  return null;

}


function raycastProps(
  event
) {

  if (
    !state.activeKit
  ) {

    return null;

  }


  updatePointer(
    event
  );


  raycaster
    .setFromCamera(
      pointer,
      camera
    );


  const intersections =
    raycaster
      .intersectObjects(
        state.activeKit.children,
        true
      );


  for (
    const hit of intersections
  ) {

    const clickable =
      findClickable(
        hit.object
      );


    if (
      clickable
    ) {

      return clickable;

    }

  }


  return null;

}


dom.canvas.addEventListener(
  "pointermove",
  event => {

    const clickable =
      raycastProps(
        event
      );


    dom.canvas.style.cursor =
      clickable
        ? "pointer"
        : "grab";

  }
);


dom.canvas.addEventListener(
  "pointerdown",
  event => {

    pointerDown = {
      x:
        event.clientX,

      y:
        event.clientY
    };


    dom.viewport.focus({
      preventScroll:
        true
    });

  }
);


dom.canvas.addEventListener(
  "pointerup",
  event => {

    const distance =
      Math.hypot(
        event.clientX -
        pointerDown.x,

        event.clientY -
        pointerDown.y
      );


    if (
      distance > 6
    ) {
      return;
    }


    const clickable =
      raycastProps(
        event
      );


    if (
      !clickable
    ) {
      return;
    }


    const target =
      clickable.userData
        .clickTarget;


    setSection(
      target.section,
      target.id
    );

  }
);


/* =========================================================
   BLENDER-STYLE SPAWN OBJECTS
========================================================= */

const BOUNDS =
  7.6;


function buildSpawnObject(
  type
) {

  switch (type) {

    case "plane": {

      const object =
        roundedBox(
          1.35,
          0.1,
          1.35,
          0.03,
          0x737a81,
          0.78,
          0.06
        );


      object.userData.radius =
        0.72;


      return object;

    }


    case "circle": {

      const object =
        mesh(
          new THREE.CylinderGeometry(
            0.64,
            0.64,
            0.1,
            34
          ),
          0xb48054,
          0.62,
          0.16
        );


      object.userData.radius =
        0.67;


      return object;

    }


    case "sphere": {

      const object =
        mesh(
          new THREE.SphereGeometry(
            0.6,
            28,
            20
          ),
          0x6fa45a,
          0.5,
          0.14
        );


      object.userData.radius =
        0.6;


      return object;

    }


    case "icosphere": {

      const object =
        mesh(
          new THREE.IcosahedronGeometry(
            0.63,
            2
          ),
          0x5a94bf,
          0.47,
          0.18
        );


      object.userData.radius =
        0.63;


      return object;

    }


    case "cylinder": {

      const object =
        mesh(
          new THREE.CylinderGeometry(
            0.5,
            0.5,
            1.1,
            26
          ),
          0xc45e53,
          0.52,
          0.18
        );


      object.userData.radius =
        0.64;


      return object;

    }


    case "cone": {

      const object =
        mesh(
          new THREE.ConeGeometry(
            0.62,
            1.2,
            28
          ),
          0xc5a34b,
          0.52,
          0.18
        );


      object.userData.radius =
        0.67;


      return object;

    }


    case "torus": {

      const object =
        mesh(
          new THREE.TorusGeometry(
            0.53,
            0.18,
            18,
            46
          ),
          0xa05aa4,
          0.48,
          0.2
        );


      object.userData.radius =
        0.74;


      return object;

    }


    case "monkey": {

      const object =
        createMonkey();


      object.scale.setScalar(
        0.78
      );


      object.userData.radius =
        0.82;


      return object;

    }


    case "cube":
    default: {

      const object =
        roundedBox(
          1.02,
          1.02,
          1.02,
          0.06,
          0xe87818,
          0.49,
          0.18
        );


      object.userData.radius =
        0.76;


      return object;

    }

  }

}


function spawnObject(
  type
) {

  const object =
    buildSpawnObject(
      type
    );


  object.position.set(
    (
      Math.random() -
      0.5
    ) * 3,

    4.2 +
    Math.random(),

    (
      Math.random() -
      0.5
    ) * 2.7
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
        1.6
      );


  object.userData.dynamic =
    true;


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
    15
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
   SIMPLE PHYSICS
========================================================= */

function updatePhysics(
  dt
) {

  const gravity =
    -7.8;


  state.spawned.forEach(
    object => {

      if (
        !object.userData
          .dynamic
      ) {
        return;
      }


      const velocity =
        object.userData
          .velocity;


      const angular =
        object.userData
          .angular;


      const radius =
        object.userData
          .radius || 0.55;


      velocity.y +=
        gravity *
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


      /* floor */

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


      /* Invisible bench walls */

      for (
        const axis of [
          "x",
          "z"
        ]
      ) {

        if (
          object.position[axis] +
          radius >
          BOUNDS
        ) {

          object.position[axis] =
            BOUNDS -
            radius;


          velocity[axis] =
            -Math.abs(
              velocity[axis]
            ) *
            0.55;

        }


        else if (
          object.position[axis] -
          radius <
          -BOUNDS
        ) {

          object.position[axis] =
            -BOUNDS +
            radius;


          velocity[axis] =
            Math.abs(
              velocity[axis]
            ) *
            0.55;

        }

      }

    }
  );

}


/* =========================================================
   SPAWN OBJECT ACTIONS
========================================================= */

function tossSelected() {

  const object =
    state.selectedSpawn;


  if (
    !object
  ) {
    return;
  }


  object.userData
    .velocity
    .set(
      (
        Math.random() -
        0.5
      ) * 3.2,

      5.3,

      (
        Math.random() -
        0.5
      ) * 3.2
    );

}


function spinSelected() {

  const object =
    state.selectedSpawn;


  if (
    !object
  ) {
    return;
  }


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
    state.spawned.filter(
      item =>
        item !== object
    );


  disposeGroup(
    object
  );


  state.selectedSpawn =
    state.spawned[
      state.spawned.length -
      1
    ] ||
    null;

}


/* =========================================================
   ADD MENU
========================================================= */

function positionAddMenu() {

  const rect =
    dom.viewport
      .getBoundingClientRect();


  const width =
    242;


  const left =
    Math.max(
      10,

      Math.min(
        rect.width -
        width -
        10,

        rect.width *
        0.5 -
        width *
        0.5
      )
    );


  const top =
    Math.max(
      52,

      Math.min(
        rect.height -
        390,

        rect.height *
        0.27
      )
    );


  dom.addMenu.style.left =
    `${left}px`;


  dom.addMenu.style.top =
    `${top}px`;

}


function openAddMenu() {

  state.addMenuOpen =
    true;


  dom.addMenu.hidden =
    false;


  dom.addObject
    .setAttribute(
      "aria-expanded",
      "true"
    );


  positionAddMenu();

}


function closeAddMenu() {

  state.addMenuOpen =
    false;


  dom.addMenu.hidden =
    true;


  dom.addObject
    .setAttribute(
      "aria-expanded",
      "false"
    );

}


/* =========================================================
   EVENT LISTENERS — SECTION TABS
========================================================= */

document
  .querySelectorAll(
    "[data-section]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          setSection(
            button.dataset
              .section
          );

        }
      );

    }
  );


/* =========================================================
   ITEM ARROWS
========================================================= */

dom.previousItem
  .addEventListener(
    "click",
    () => {

      selectItem(
        state.index -
        1
      );

    }
  );


dom.nextItem
  .addEventListener(
    "click",
    () => {

      selectItem(
        state.index +
        1
      );

    }
  );


/* =========================================================
   MOBILE MENU
========================================================= */

dom.mobileMenuButton
  .addEventListener(
    "click",
    () => {

      const opening =
        dom.mobileNav
          .hidden;


      dom.mobileNav.hidden =
        !opening;


      dom.mobileMenuButton
        .setAttribute(
          "aria-expanded",
          String(
            opening
          )
        );

    }
  );


/* =========================================================
   VIEWPORT BUTTONS
========================================================= */

dom.resetView
  .addEventListener(
    "click",
    resetView
  );


dom.addObject
  .addEventListener(
    "click",
    () => {

      if (
        state.addMenuOpen
      ) {

        closeAddMenu();

      }

      else {

        openAddMenu();

      }

    }
  );


dom.addMenu
  .querySelectorAll(
    "[data-add]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          spawnObject(
            button.dataset
              .add
          );

        }
      );

    }
  );


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

dom.viewport
  .addEventListener(
    "keydown",
    event => {

      if (
        event.shiftKey &&
        event.key.toLowerCase() ===
        "a"
      ) {

        event.preventDefault();


        openAddMenu();


        return;

      }


      if (
        state.addMenuOpen &&
        /^[1-9]$/.test(
          event.key
        )
      ) {

        const objects = [
          "plane",
          "cube",
          "circle",
          "sphere",
          "icosphere",
          "cylinder",
          "cone",
          "torus",
          "monkey"
        ];


        spawnObject(
          objects[
            Number(
              event.key
            ) -
            1
          ]
        );


        return;

      }


      if (
        event.key.toLowerCase() ===
        "g"
      ) {

        tossSelected();

      }


      if (
        event.key.toLowerCase() ===
        "r"
      ) {

        spinSelected();

      }


      if (
        event.key.toLowerCase() ===
        "x"
      ) {

        deleteSelected();

      }


      if (
        event.key ===
        "Escape"
      ) {

        closeAddMenu();

      }

    }
  );


/* =========================================================
   CLICK OUTSIDE ADD MENU
========================================================= */

document
  .addEventListener(
    "pointerdown",
    event => {

      if (
        !state.addMenuOpen
      ) {
        return;
      }


      if (
        dom.addMenu.contains(
          event.target
        ) ||
        dom.addObject.contains(
          event.target
        )
      ) {

        return;

      }


      closeAddMenu();

    }
  );


/* =========================================================
   HASH ROUTING
========================================================= */

function readHash() {

  const value =
    location.hash
      .replace(
        /^#/,
        ""
      );


  if (
    !value
  ) {

    setSection(
      "home",
      "home",
      false
    );


    return;

  }


  const [
    section,
    itemId
  ] =
    value.split(
      "/"
    );


  if (
    !CONTENT[section]
  ) {

    setSection(
      "home",
      "home",
      false
    );


    return;

  }


  setSection(
    section,
    itemId,
    false
  );

}


window
  .addEventListener(
    "hashchange",
    readHash
  );


/* =========================================================
   CAMERA
========================================================= */

function resetView() {

  camera.position.set(
    7.8,
    5.3,
    9.9
  );


  controls.target.set(
    0,
    1.15,
    0
  );


  controls.update();

}


/* =========================================================
   RESIZE
========================================================= */

function resizeRenderer() {

  const rect =
    dom.viewport
      .getBoundingClientRect();


  const width =
    Math.max(
      1,
      Math.floor(
        rect.width
      )
    );


  const height =
    Math.max(
      1,
      Math.floor(
        rect.height
      )
    );


  renderer.setSize(
    width,
    height,
    false
  );


  camera.aspect =
    width /
    height;


  camera
    .updateProjectionMatrix();

}


window
  .addEventListener(
    "resize",
    () => {

      resizeRenderer();


      if (
        state.addMenuOpen
      ) {

        positionAddMenu();

      }

    }
  );


/* =========================================================
   ANIMATION — KIT TRANSITION
========================================================= */

function updateKitAnimation(
  now
) {

  if (
    !state.kitAnimation
  ) {
    return;
  }


  const animation =
    state.kitAnimation;


  const t =
    Math.min(
      1,

      (
        now -
        animation.start
      ) /
      animation.duration
    );


  const eased =
    1 -
    Math.pow(
      1 -
      t,
      3
    );


  if (
    state.activeKit
  ) {

    setGroupOpacity(
      state.activeKit,
      eased
    );


    state.activeKit
      .scale
      .setScalar(
        0.96 +
        eased *
        0.04
      );

  }


  if (
    state.previousKit
  ) {

    setGroupOpacity(
      state.previousKit,
      1 -
      eased
    );


    state.previousKit
      .scale
      .setScalar(
        1 -
        eased *
        0.04
      );

  }


  if (
    t >= 1
  ) {

    if (
      state.previousKit
    ) {

      scene.remove(
        state.previousKit
      );


      disposeGroup(
        state.previousKit
      );

    }


    state.previousKit =
      null;


    state.kitAnimation =
      null;

  }

}


/* =========================================================
   ANIMATION — FEATURED OBJECT
========================================================= */

function updateFeaturedAnimation(
  now
) {

  if (
    !state.featuredAnimation
  ) {
    return;
  }


  const animation =
    state.featuredAnimation;


  const t =
    Math.min(
      1,

      (
        now -
        animation.start
      ) /
      animation.duration
    );


  const eased =
    1 -
    Math.pow(
      1 -
      t,
      3
    );


  if (
    state.featuredModel
  ) {

    state.featuredModel
      .scale
      .setScalar(
        Math.max(
          0.02,
          eased
        )
      );


    state.featuredModel
      .position.x =
      (
        1 -
        eased
      ) *
      0.28;


    state.featuredModel
      .rotation.y =
      (
        1 -
        eased
      ) *
      -0.38;

  }


  if (
    state.previousFeatured
  ) {

    state.previousFeatured
      .scale
      .setScalar(
        Math.max(
          0.001,
          1 -
          eased
        )
      );


    state.previousFeatured
      .position.x =
      -eased *
      0.3;

  }


  if (
    t >= 1
  ) {

    if (
      state.previousFeatured
    ) {

      featuredRoot.remove(
        state.previousFeatured
      );


      disposeGroup(
        state.previousFeatured
      );

    }


    state.previousFeatured =
      null;


    state.featuredModel
      .scale
      .setScalar(
        1
      );


    state.featuredModel
      .position
      .set(
        0,
        0,
        0
      );


    state.featuredAnimation =
      null;

  }

}


/* =========================================================
   ANIMATION — ARM
========================================================= */

function updateArm(
  dt
) {

  const smoothing =
    1 -
    Math.exp(
      -dt *
      6.5
    );


  for (
    const key of [
      "base",
      "shoulder",
      "elbow",
      "forearm",
      "wrist",
      "wristY",
      "grip"
    ]
  ) {

    state.armPose[key] =
      THREE.MathUtils.lerp(
        state.armPose[key],
        state.armTarget[key],
        smoothing
      );

  }


  arm.baseJoint.rotation.y =
    state.armPose.base;


  arm.shoulder.rotation.z =
    state.armPose.shoulder;


  arm.elbow.rotation.z =
    state.armPose.elbow;


  arm.forearm.rotation.z =
    state.armPose.forearm;


  arm.wrist.rotation.z =
    state.armPose.wrist;


  arm.wrist.rotation.y =
    state.armPose.wristY;


  arm.fingerL.position.x =
    -state.armPose.grip;


  arm.fingerR.position.x =
    state.armPose.grip;

}


/* =========================================================
   ANIMATION — PROP HIGHLIGHT
========================================================= */

function updateProps(
  dt
) {

  if (
    !state.activeKit
  ) {
    return;
  }


  const smoothing =
    1 -
    Math.exp(
      -dt *
      7
    );


  const props =
    state.activeKit
      .userData
      .props || [];


  props.forEach(
    prop => {

      const current =
        prop.scale.x;


      const target =
        prop.userData
          .targetScale ||
        prop.userData
          .baseScale ||
        1;


      const next =
        THREE.MathUtils.lerp(
          current,
          target,
          smoothing
        );


      prop.scale.setScalar(
        next
      );

    }
  );

}


/* =========================================================
   UTILITIES
========================================================= */

function capitalize(
  text
) {

  return (
    text
      .charAt(0)
      .toUpperCase() +
    text.slice(1)
  );

}


function sectionSceneName(
  section
) {

  const names = {

    home:
      "Personal Lab",

    about:
      "About Bench",

    projects:
      "Project Lab",

    experience:
      "Experience Bench",

    interests:
      "Interests Bench",

    contact:
      "Contact Desk"

  };


  return names[
    section
  ] || "Personal Lab";

}


/* =========================================================
   RENDER LOOP
========================================================= */

let previousTime =
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
        previousTime
      ) /
      1000
    );


  previousTime =
    now;


  controls.update();


  updatePhysics(
    dt
  );


  updateArm(
    dt
  );


  updateProps(
    dt
  );


  updateKitAnimation(
    now
  );


  updateFeaturedAnimation(
    now
  );


  /* slowly rotate featured item */

  if (
    state.featuredModel
  ) {

    state.featuredModel
      .rotation.y +=
      dt *
      0.12;

  }


  renderer.render(
    scene,
    camera
  );

}


/* =========================================================
   INITIALIZE
========================================================= */

resizeRenderer();


readHash();


requestAnimationFrame(
  animate
);
