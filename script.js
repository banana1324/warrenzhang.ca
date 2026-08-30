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
    tags: ['Python', 'C/C++', 'Java', 'Embedded', 'Robotics', 'Computer Vision'],
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


// Board copy foregrounds ownership, debugging, reliability, systems thinking, measurable output, and communication.
// The goal is a strong technical portfolio voice without sounding like a job-specific application.
const PORTFOLIO_BOARD_COPY = {
  'home/home': {
    title: 'Software, Embedded Systems & Robotics',
    meta: 'University of Waterloo CS · Python · C/C++ · Java · Embedded Systems',
    summary: 'I build software that has to work under real constraints: hardware timing, sensor data, networks, robotics, and users. The common thread across my projects is end-to-end ownership, disciplined debugging, and making systems understandable enough for other people to rely on.',
    metrics: [['15', 'embedded apps + games'], ['$195K+', 'Kickstarter funding tied to products contributed to'], ['3 years', 'competition robotics']],
    contributions: [
      'Developed software across ESP32, RP2040, Arduino, and Raspberry Pi environments.',
      'Built systems spanning sensing, networking, computer vision, robotics, and data visualization.',
      'Debug by measuring first, changing one variable at a time, retesting, and documenting the result.',
      'Comfortable explaining technical decisions to teammates, learners, and non-specialists.'
    ],
    scope: 'Best fit: technical roles where implementation, testing, integration, and ownership matter more than isolated coding exercises.',
    impact: 'Evidence of execution includes 15 shipped learning projects, contribution to three Kickstarter-backed products, and three years of iterative robotics development.',
    tags: ['Python', 'C/C++', 'Java', 'Embedded', 'Robotics', 'Systems Debugging']
  },
  'about/about': {
    title: 'About Warren Zhang',
    meta: 'Computer Science · University of Waterloo · Software · Embedded Systems · Robotics',
    summary: 'I like understanding the whole system—not just the line of code in front of me. My work has grown from taking apart computers into embedded software, robotics, technical verification, teaching, and projects where software has visible consequences in the physical world.',
    metrics: [['15', 'embedded apps + games'], ['$195K+', 'Kickstarter funding tied to products contributed to'], ['3 years', 'VEX robotics']],
    contributions: [
      'I am strongest when a problem crosses boundaries: software, hardware, timing, sensors, networking, mechanics, or documentation.',
      'I learn by testing deliberately, tracing failures to their source, and explaining the result clearly enough that another person can build on it.'
    ],
    scope: 'At EIM Technology, I worked across RP2040 and ESP32 software, hardware debugging, technical verification, and educational content. In robotics, I have worked with PID control, odometry, CAD, autonomous behavior, and repeated competition-driven iteration.',
    impact: 'Outside technical work, coaching 40+ badminton students and serving as a Physics 11 teaching assistant taught me how to communicate with patience. If you are building thoughtful software, robotics, embedded systems, or tools that make complex technology easier to use, I would be glad to connect.',
    tags: ['Systems', 'Debugging', 'Embedded', 'Robotics', 'Teaching', 'Technical Communication']
  },
  'projects/wildfire': {
    title: 'Wildfire Detection System',
    meta: 'Systems Project · C++ · LoRaWAN · Raspberry Pi · MQTT',
    summary: 'Built an end-to-end environmental-monitoring pipeline from sensor acquisition to long-range transport, gateway processing, messaging, and dashboard visualization. The project required reasoning across interfaces rather than treating each component as an isolated demo.',
    metrics: [['End-to-end', 'sensor → network → dashboard'], ['LoRaWAN', 'long-range transport'], ['MQTT + Node-RED', 'processing + visualization']],
    contributions: [
      'Owned the complete data path from BME680 sensing through a LoRaWAN node and Raspberry Pi gateway.',
      'Integrated MQTT and Node-RED so incoming device data could be processed and visualized reliably.',
      'Tested the full pipeline as one system and debugged failures across hardware, networking, and software boundaries.',
      'Designed the project around observable data flow instead of a single successful component test.'
    ],
    scope: 'Engineering focus: system decomposition, interface design, integration testing, networked data flow, and end-to-end ownership.',
    impact: 'Demonstrates the ability to build and debug a multi-stage system where correctness depends on several technologies working together.',
    tags: ['C++', 'LoRaWAN', 'MQTT', 'Raspberry Pi', 'BME680', 'Node-RED']
  },
  'projects/kc15': {
    title: 'KC15 RP2040 Learning Platform',
    meta: 'Embedded Software · RP2040 · Python / MicroPython · Product Reliability',
    summary: 'Built and debugged 15 applications and games for a physical RP2040 learning platform. The software had to run reliably on the target hardware and be clear enough that students could reproduce each project from documentation.',
    metrics: [['15', 'apps + games'], ['15', 'project tutorials'], ['RP2040', 'target hardware verified']],
    contributions: [
      'Implemented and debugged 15 embedded applications and games on the KC15 platform.',
      'Verified Raspberry Pi Pico / RP2040 behavior rather than assuming desktop logic would transfer cleanly to hardware.',
      'Diagnosed timing, state, and hardware-interaction issues until projects behaved consistently.',
      'Produced a tutorial for each project, turning implementation knowledge into reproducible engineering documentation.'
    ],
    scope: 'Engineering focus: repeated delivery, test/debug cycles, platform constraints, documentation, and maintaining quality across a family of related programs.',
    impact: 'Shows that I can move beyond one-off prototypes and deliver a set of usable, documented software experiences on real hardware.',
    tags: ['RP2040', 'MicroPython', 'Python', 'Testing', 'Technical Writing']
  },
  'projects/vision': {
    title: 'Computer Vision Robotics',
    meta: 'Python · Perception Pipeline · Recognition · Robot-Control Integration',
    summary: 'Built computer-vision experiments that convert visual input into structured signals and then use those signals to drive robotic behavior. The important engineering challenge was connecting perception output to a physical system, not stopping at classification.',
    metrics: [['Hand landmarks', 'gesture input'], ['Face ID', 'identity recognition'], ['Robot control', 'physical output']],
    contributions: [
      'Detected hand landmarks and inferred finger-count gestures from camera input.',
      'Added face identity recognition and facial-expression classification as additional perception signals.',
      'Mapped vision results into commands for robotic systems, connecting software inference to physical behavior.',
      'Used the project to learn how perception errors propagate into downstream control decisions.'
    ],
    scope: 'Technical focus: data pipelines, API boundaries between subsystems, handling imperfect inputs, and integrating multiple modules into one working behavior.',
    impact: 'Demonstrates curiosity about applied AI while keeping the focus on integration and system behavior rather than model demos alone.',
    tags: ['Python', 'Computer Vision', 'Recognition', 'Robotics', 'Integration']
  },
  'projects/analog': {
    title: 'Analog Circuit II · Technical Verification',
    meta: 'Validation · Numerical Results · Oscilloscope Evidence · Technical Review',
    summary: 'Supported verification of an analog-electronics learning project by checking formulas, diagrams, labels, code examples, numerical results, and oscilloscope evidence. The engineering value is the same discipline used in review and QA: verify assumptions, reproduce results, and communicate defects precisely.',
    metrics: [['Verification', 'diagrams + technical text'], ['Oscilloscope', 'measured evidence'], ['Laplace / Fourier', 'analysis reviewed']],
    contributions: [
      'Checked technical material for correctness rather than accepting documentation at face value.',
      'Recorded numerical results and oscilloscope screenshots to compare expected and observed behavior.',
      'Reviewed content involving op-amps, MOSFETs, BJTs, diodes, and signal transforms.',
      'Reported errors and possible improvements clearly to the technical team.'
    ],
    scope: 'Engineering focus: verification mindset, attention to edge cases, reproducible evidence, technical review, and concise defect communication.',
    impact: 'Shows that I care about correctness and can validate technical work created by other people, not only code I wrote myself.',
    tags: ['Verification', 'Testing', 'Technical Review', 'Signals', 'Documentation']
  },
  'experience/eim': {
    title: 'Technical Support Intern · EIM Technology',
    meta: 'Embedded / Product Engineering · Nov 2024 – Jun 2026 · Richmond, BC',
    summary: 'Worked across embedded software, hardware integration, product testing, technical verification, AI experimentation, and documentation for real educational technology products. The role required switching quickly between implementation, debugging, validation, and communication.',
    metrics: [['$195K+', 'Kickstarter funding'], ['446', 'campaign backers'], ['15', 'KC15 apps + games']],
    contributions: [
      'Developed software for ESP32, RP2040, Arduino, and Raspberry Pi using Python, MicroPython, and C/C++.',
      'Built and debugged 15 KC15 applications and games and documented each project for student use.',
      'Integrated sensors and LoRaWAN systems and used oscilloscopes / logic analyzers to diagnose failures.',
      'Reviewed instructional material, debugged AI software, and contributed to products launched through Kickstarter.'
    ],
    scope: 'Engineering focus: broad technical ownership, debugging across layers, repeated delivery, product context, and communication with people outside a single engineering specialty.',
    impact: 'Contributed to three Kickstarter campaigns reaching 446 backers and more than $195K in funding while building practical engineering judgment in a real team environment.',
    tags: ['Python', 'C/C++', 'RP2040', 'ESP32', 'LoRaWAN', 'Debugging']
  },
  'experience/vex': {
    title: 'Robotics Software & Controls · 4471A Eagles',
    meta: 'VEX V5 · PID · Odometry · Autonomous · CAD · 3 years',
    summary: 'Helped turn a five-student, mentor-less team that finished 59th of 59 at its first tournament into a tournament-winning school robotics team. My contribution centered on control software, odometry, CAD, debugging, and keeping the team methodical when the robot failed under competition pressure.',
    metrics: [['59 / 59', 'first tournament'], ['Tournament Champion', 'later result'], ['PID + Odometry', 'core control software']],
    contributions: [
      'Wrote major portions of the robot control stack, including PID motion control and odometry for autonomous positioning.',
      'Debugged failures across sensors, motors, software, and mechanics using logs and controlled changes instead of random tuning.',
      'Served as a primary CAD designer and pushed the team toward more deliberate design planning.',
      'Helped a small team continue iterating through repeated failures until it became an official school team and tournament champion.'
    ],
    scope: 'Engineering focus: control systems, state estimation, debugging under pressure, collaboration with mechanical teammates, and learning from repeated production-like failures.',
    impact: 'The strongest signal is trajectory: measurable improvement came from better engineering process, not a single lucky redesign.',
    tags: ['C++', 'PID', 'Odometry', 'Autonomous', 'VEX V5', 'CAD']
  },
  'experience/coaching': {
    title: 'Badminton Coach · Technical Communication & Leadership',
    meta: 'Stage18 Badminton Center · 200+ hours · 40+ students',
    summary: 'Coaching is the clearest evidence that I can adapt communication to the person in front of me. Different students needed different explanations, levels of structure, and feedback—similar to working with teammates who have different technical backgrounds.',
    metrics: [['200+', 'coaching hours'], ['40+', 'students coached'], ['7–15', 'student ages']],
    contributions: [
      'Explained technique in multiple ways until students could apply the idea, not merely repeat it back.',
      'Managed group dynamics while keeping sessions organized, focused, and supportive.',
      'Used disagreements and losses to teach constructive resets instead of blame.',
      'Learned to give specific feedback without removing ownership from the person doing the work.'
    ],
    scope: 'What this demonstrates: mentoring, code-review style feedback, conflict de-escalation, communicating across experience levels, and helping a team improve without dominating it.',
    impact: 'Shows leadership through patience and clarity rather than authority—useful on teams where strong engineers also need to make other people more effective.',
    tags: ['Communication', 'Mentoring', 'Leadership', 'Feedback']
  },
  'experience/orchestra': {
    title: 'Trombone · Ensemble Reliability & Team Execution',
    meta: 'School Band · Vancouver Chinese Philharmonic Orchestra · 6 years',
    summary: 'Orchestral performance rewards preparation, listening, precision, and knowing when your part should lead versus support. Those habits transfer directly to collaborative engineering work where individual execution has to fit a larger system.',
    metrics: [['6 years', 'trombone'], ['1st / 2nd', 'section roles'], ['Live performance', 'high-consequence execution']],
    contributions: [
      'Perform as first trombone at school and second trombone with the Vancouver Chinese Philharmonic Orchestra.',
      'Mentor younger players on tone, breath control, and difficult passages.',
      'Performed in large ensembles and public events where preparation and timing have immediate consequences.',
      'Practice consistently outside scheduled rehearsals rather than relying on last-minute preparation.'
    ],
    scope: 'What this demonstrates: preparation, listening, dependable execution, mentoring, and contributing to a system where success depends on every participant meeting a shared standard.',
    impact: 'Adds evidence of discipline and team reliability beyond technical projects alone.',
    tags: ['Teamwork', 'Preparation', 'Mentoring', 'Performance']
  },
  'interests/blender': {
    title: 'Blender · Simulation, Rigging & Interactive Systems',
    meta: 'Rigid Bodies · Constraints · Armatures · 3D Interaction',
    summary: 'Blender is where I explore how geometry becomes behavior. I am most interested in rigid-body systems, constraints, armatures, and mechanical motion—the same interest that led to this portfolio’s physical page-switching interface.',
    metrics: [['2K+', 'views on one Blender video'], ['Rigid bodies', 'simulation'], ['Armatures', 'controlled motion']],
    contributions: [
      'Build scenes around collision, constraint, and motion rather than static rendering alone.',
      'Use armatures and mechanical relationships to create predictable movement.',
      'Experiment with how physical behavior can become part of an interface instead of decoration.',
      'Translate 3D ideas into browser-based interaction through Three.js.'
    ],
    scope: 'What this demonstrates: simulation thinking, stateful interaction, geometry, real-time rendering, and designing user-facing behavior with technical constraints.',
    impact: 'Demonstrates technical curiosity outside coursework and a willingness to learn unfamiliar systems deeply enough to build with them.',
    tags: ['Three.js', 'Blender', 'Simulation', 'Rigging', '3D Interaction']
  },
  'interests/hardware': {
    title: 'Low-Level Systems & Hardware Debugging',
    meta: 'ESP32 · RP2040 · Arduino · Raspberry Pi · Oscilloscope · Logic Analyzer',
    summary: 'Hardware work made me a better software debugger because it removes the assumption that every failure comes from code. Timing, wiring, communication, voltage, sensors, and environment can all change software behavior.',
    metrics: [['4 platforms', 'MCUs / SBCs'], ['LoRaWAN', 'wireless systems'], ['Scope + analyzer', 'debugging tools']],
    contributions: [
      'Develop embedded software across ESP32, RP2040, Arduino, and Raspberry Pi environments.',
      'Integrate sensors and wireless communication rather than testing firmware in isolation.',
      'Use oscilloscopes and logic analyzers when logs alone cannot explain a failure.',
      'Trace problems across boundaries until the actual root cause is understood.'
    ],
    scope: 'What this demonstrates: low-level debugging, concurrency/timing intuition, interfaces, observability, and comfort working close to the system boundary.',
    impact: 'Gives me a broader failure model than software-only experience and improves how I reason about systems under real constraints.',
    tags: ['Embedded', 'C/C++', 'Debugging', 'Sensors', 'Observability']
  },
  'interests/music': {
    title: 'Music & Live Audio · Operating Real-Time Systems',
    meta: 'Trombone · Live Sound · Troubleshooting · Mentoring',
    summary: 'Live music and audio reinforce habits that matter in engineering: prepare before the event, monitor the system while it runs, make small corrections under pressure, and understand how one component affects the whole experience.',
    metrics: [['1st Trombone', 'school band'], ['2nd Trombone', 'VCPO'], ['Live audio', 'setup + troubleshooting']],
    contributions: [
      'Perform in school and orchestral environments where timing and reliability are immediately visible.',
      'Help with live-audio setup, signal levels, equipment order, teardown, and troubleshooting.',
      'Mentor younger musicians and explain technique in practical, actionable language.',
      'Practice deliberately outside formal sessions to improve weak points before performance.'
    ],
    scope: 'What this demonstrates: operational awareness, calm troubleshooting, preparation, monitoring, and communication in a live environment.',
    impact: 'Shows that I am comfortable being accountable when a system has to work in real time rather than only in development.',
    tags: ['Live Systems', 'Troubleshooting', 'Mentoring', 'Team Execution']
  },
  'contact/contact': {
    title: 'Contact & Opportunities',
    meta: 'Software · Embedded · Robotics · Systems',
    summary: 'I am interested in technical opportunities where I can own meaningful pieces of a system, learn from strong engineers, and work close enough to real users or hardware that correctness and reliability matter.',
    metrics: [['GitHub', 'banana1324'], ['LinkedIn', 'fuyuanzhang'], ['Email', 'warrenz7980@gmail.com']],
    contributions: [
      'Strongest experience: embedded software, robotics controls, end-to-end IoT systems, and technical debugging.',
      'Comfortable moving between implementation, testing, documentation, and cross-functional problem solving.',
      'Interested in teams with high engineering standards, thoughtful code review, and meaningful ownership.',
      'Portfolio links include GitHub, LinkedIn, YouTube, and résumé.'
    ],
    scope: 'Interested in: software, embedded systems, robotics, or related technical internships where strong debugging and learning speed are valued.',
    impact: 'I would bring curiosity, technical range, careful debugging, and a track record of sticking with difficult systems until they work reliably.',
    tags: ['Software', 'Embedded', 'Robotics', 'Systems']
  }
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
  uiSection: 'home', uiIndex: 0,
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
  boardMode: 'carry',
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
renderer.setClearColor(0x05080c, 1);
renderer.setScissorTest(true);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x070b0f, 17, 37);

const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
camera.position.set(1.45, 5.18, 13.90);
const CAMERA_TARGET = new THREE.Vector3(1.45, 2.72, 1.85);
camera.lookAt(CAMERA_TARGET);

scene.add(new THREE.HemisphereLight(0xeef7ff, 0x120d08, 2.05));
const keyLight = new THREE.DirectionalLight(0xffe4c2, 4.25);
keyLight.position.set(1.3, 11.2, 6.4);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -10;
keyLight.shadow.camera.right = 10;
keyLight.shadow.camera.top = 10;
keyLight.shadow.camera.bottom = -10;
scene.add(keyLight);
const fillLight = new THREE.PointLight(0x68b8ff, 11.0, 24);
fillLight.position.set(2.1, 5.2, 1.7);
scene.add(fillLight);
const rimLight = new THREE.DirectionalLight(0xffa34d, .92);
rimLight.position.set(6.0, 6.4, -4.8);
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
const floorMat = new THREE.MeshPhysicalMaterial({
  color:0x11171d, roughness:.28, metalness:.68, clearcoat:.24, clearcoatRoughness:.38
});
const floor = new THREE.Mesh(new RoundedBoxGeometry(20.8, .22, 13.6, 5, .08), floorMat);
floor.position.set(1.0, -.11, 1.45);
floor.receiveShadow = true;
scene.add(floor);

const grid = new THREE.GridHelper(19.8, 32, 0x234963, 0x182935);
grid.position.set(1.0, .018, 1.48);
grid.scale.z = .72;
grid.material.opacity = .24;
grid.material.transparent = true;
scene.add(grid);

const rear = box(19.2, 6.7, .18, .05, 0x090d12, .72, .24);
rear.position.set(1.0, 3.28, -3.38);
scene.add(rear);
const sideL = box(.16, 6.7, 11.6, .05, 0x080c10, .78, .20); sideL.position.set(-8.55, 3.28, 1.5); scene.add(sideL);
const sideR = sideL.clone(); sideR.position.x = 10.55; scene.add(sideR);

// Repeating industrial wall bays, vertical light bars and structural columns.
for (let i = 0; i < 8; i++) {
  const x = -7.6 + i * 2.45;
  const bay = box(1.92, 4.90, .11, .035, i % 2 ? 0x101820 : 0x0d141b, .74, .22);
  bay.position.set(x + .8, 3.15, -3.23);
  scene.add(bay);

  const column = box(.18, 5.75, .28, .03, 0x27323b, .38, .66);
  column.position.set(x - .16 + .8, 3.12, -3.02);
  scene.add(column);

  if (i % 2 === 0) {
    const blue = box(.055, 2.35, .055, .012, 0x7bc8ff, .20, .16);
    blue.material.emissive.setHex(0x2a91d0); blue.material.emissiveIntensity = 2.2;
    blue.position.set(x + .49 + .8, 3.30, -3.04);
    scene.add(blue);
  }
}

// Ceiling beams and warm practical lights.
for (let i = 0; i < 6; i++) {
  const beam = box(18.4, .12, .26, .03, 0x1e272e, .34, .72);
  beam.position.set(1.0, 6.30, -2.6 + i * 1.78);
  scene.add(beam);
  if (i < 4) {
    const lamp = box(1.00, .055, .08, .02, 0xffbc70, .18, .08);
    lamp.material.emissive.setHex(0xff8a32); lamp.material.emissiveIntensity = 2.8;
    lamp.position.set(i % 2 ? 6.3 : -4.5, 6.18, -2.34 + i * 1.72);
    lamp.rotation.y = i % 2 ? -.18 : .18;
    scene.add(lamp);
  }
}

function makeScreen(x,y,z,w,h,accent=0x56b9ff) {
  const frame = box(w+.16, h+.16, .10, .035, 0x111820, .34, .46);
  frame.position.set(x,y,z); scene.add(frame);
  const panel = box(w,h,.025,.02,0x07131c,.25,.05);
  panel.position.set(x,y,z+.065);
  panel.material.emissive.setHex(accent); panel.material.emissiveIntensity=.38;
  scene.add(panel);
  for (let r=0;r<4;r++) {
    const line=box(w*.66,.018,.010,.003,r===0?0x7dccff:0x2c6688,.25,.05);
    line.position.set(x-w*.08,y+h*.26-r*h*.17,z+.083);
    line.material.emissive.setHex(r===0?0x5fc8ff:0x245873); line.material.emissiveIntensity=1.2;
    scene.add(line);
  }
}
makeScreen(7.05,2.20,-3.03,1.62,1.02);
makeScreen(7.05,1.02,-3.03,1.62,.72,0x58d6b4);
makeScreen(-5.55,2.10,-3.03,1.36,.82,0x5ea9ff);

function makeWallMark() {
  const c=document.createElement('canvas'); c.width=700; c.height=1100;
  const ctx=c.getContext('2d'); ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle='rgba(255,255,255,.86)'; ctx.font='800 210px Inter, Arial'; ctx.fillText('WZ',74,260);
  ctx.fillStyle='rgba(145,176,194,.88)'; ctx.font='700 54px Inter, Arial';
  ctx.fillText('ENGINEER.',82,390); ctx.fillText('BUILDER.',82,462); ctx.fillText('EDUCATOR.',82,534);
  const tex=new THREE.CanvasTexture(c); tex.colorSpace=THREE.SRGBColorSpace;
  const p=new THREE.Mesh(new THREE.PlaneGeometry(1.45,2.28),new THREE.MeshBasicMaterial({map:tex,transparent:true,toneMapped:false}));
  p.position.set(8.35,3.15,-3.10); p.rotation.y=-.04; scene.add(p);
}
makeWallMark();

const warmPool = new THREE.PointLight(0xff8d38, 5.8, 10);
warmPool.position.set(5.9, 2.4, 3.8); scene.add(warmPool);
const coolPool = new THREE.PointLight(0x3d9fe5, 7.4, 11);
coolPool.position.set(-3.7, 2.5, 3.4); scene.add(coolPool);

// ---------- arm ----------
const ARM = {
  base: new THREE.Vector3(-4.90, .68, -.98),
  lengths: [2.75, 3.45, 3.20, 2.45],
  radius: [.37, .31, .26, .22]
};

const ARM_POSES = {
  // Compact carry pose: high enough to clear the floor and folded close to the base.
  offscreen: [1.830, -.280, -1.150, -1.100],
  carry: [1.830, -.280, -1.150, -1.100],
  // Same wrist height as carry, but extended toward the viewer for a nearly horizontal approach.
  read: [1.026, -.514, -.144, -.138]
};

const ARM_MOTION_SCALE = 1.22;
const GRIP_MOTION_SCALE = 1.20;
const BOARD_MOTION_SCALE = 1.0;
const PRESENT_YAW = .88;
const OFFSCREEN_YAW = Math.PI;
const HELD_BOARD_SCALE = 1.08;

const armState = { yaw: OFFSCREEN_YAW, angles: [...ARM_POSES.offscreen], grip: .095 };
const armVisual = { root:null, links:[], joints:[], wrist:null, fl:null, fr:null, socket:null };

function addBolt(parent, x, y, z, scale=.055) {
  const bolt = mesh(new THREE.CylinderGeometry(scale, scale, scale*.45, 12), 0xb5bcc2, .22, .86);
  bolt.rotation.x = Math.PI/2; bolt.position.set(x,y,z); parent.add(bolt);
}
function createIndustrialLink(index) {
  const g=new THREE.Group();
  const r=ARM.radius[index];
  const core=box(r*2.05,1,r*1.55,.055,0x4b5055,.32,.82); g.add(core);
  const inset=box(r*1.44,.82,r*1.62,.035,0x20262c,.40,.55); inset.position.z=.045; g.add(inset);
  const railL=box(.065,.88,r*1.80,.022,0x8e9497,.24,.88); railL.position.x=-r*.91; g.add(railL);
  const railR=railL.clone(); railR.position.x=r*.91; g.add(railR);
  const cable=box(.075,.78,.075,.028,0x0b0d0f,.72,.12); cable.position.set(r*1.04,.02,-r*.66); g.add(cable);
  for (const yy of [-.34,.34]) { addBolt(g,-r*.94,yy,r*.82,.045); addBolt(g,r*.94,yy,r*.82,.045); }
  const caution=box(r*.62,.035,.025,.006,0xe88b32,.24,.30); caution.position.set(0,.05,r*.82); g.add(caution);
  return g;
}
function createIndustrialJoint(index) {
  const g=new THREE.Group();
  const r=ARM.radius[Math.min(index,ARM.radius.length-1)] + .16;
  const housing=mesh(new THREE.CylinderGeometry(r,r,.38,38),0x171b1f,.28,.82);
  housing.rotation.z=Math.PI/2; g.add(housing);
  const capL=mesh(new THREE.CylinderGeometry(r*.76,r*.76,.065,32),0x6c7378,.22,.88); capL.rotation.z=Math.PI/2; capL.position.x=-.22; g.add(capL);
  const capR=capL.clone(); capR.position.x=.22; g.add(capR);
  const ring=mesh(new THREE.TorusGeometry(r*.80,.035,16,42),0x2f8ed0,.20,.65); ring.rotation.y=Math.PI/2; ring.position.x=.255; ring.material.emissive.setHex(0x17496d); ring.material.emissiveIntensity=.8; g.add(ring);
  for(let i=0;i<8;i++){
    const a=i/8*Math.PI*2; const b=mesh(new THREE.CylinderGeometry(.032,.032,.025,10),0xc5c9cb,.18,.90);
    b.rotation.z=Math.PI/2; b.position.set(.264,Math.cos(a)*r*.55,Math.sin(a)*r*.55); g.add(b);
  }
  return g;
}
function buildArm() {
  const root=new THREE.Group();

  const baseFoot=mesh(new THREE.CylinderGeometry(1.05,1.22,.26,54),0x080a0c,.28,.78); baseFoot.position.copy(ARM.base).setY(.13); root.add(baseFoot);
  const baseRing=mesh(new THREE.TorusGeometry(.98,.085,20,56),0x2f3438,.22,.88); baseRing.position.copy(ARM.base).setY(.28); baseRing.rotation.x=Math.PI/2; root.add(baseRing);
  const lower=mesh(new THREE.CylinderGeometry(.78,.92,.72,46),0x30363b,.30,.82); lower.position.copy(ARM.base).setY(.62); root.add(lower);
  const bearing=mesh(new THREE.CylinderGeometry(.70,.70,.34,44),0x111418,.24,.88); bearing.position.copy(ARM.base).setY(1.05); root.add(bearing);
  const crown=mesh(new THREE.TorusGeometry(.70,.065,18,48),0x2e91d0,.18,.65); crown.position.copy(ARM.base).setY(1.22); crown.rotation.x=Math.PI/2; crown.material.emissive.setHex(0x154969); crown.material.emissiveIntensity=.9; root.add(crown);
  for(let i=0;i<12;i++){ const a=i/12*Math.PI*2; const b=mesh(new THREE.CylinderGeometry(.045,.045,.035,10),0xc2c6c9,.20,.9); b.position.set(ARM.base.x+Math.cos(a)*.87,.29,ARM.base.z+Math.sin(a)*.87); root.add(b); }

  for(let i=0;i<ARM.lengths.length;i++) { const link=createIndustrialLink(i); root.add(link); armVisual.links.push(link); }
  for(let i=0;i<ARM.lengths.length;i++) { const joint=createIndustrialJoint(i); root.add(joint); armVisual.joints.push(joint); }

  const wrist=new THREE.Group();
  const wristDrive=mesh(new THREE.CylinderGeometry(.33,.33,.58,36),0x161a1f,.24,.84); wristDrive.rotation.z=Math.PI/2; wrist.add(wristDrive);
  const wristBand=mesh(new THREE.TorusGeometry(.335,.038,16,42),0x2d92d4,.18,.68); wristBand.rotation.y=Math.PI/2; wristBand.position.x=.30; wrist.add(wristBand);

  // Rounded claw hub instead of a rectangular end-effector block.
  const hub=mesh(new THREE.CylinderGeometry(.29,.34,.34,32),0x2c3339,.28,.78); hub.position.y=-.30; wrist.add(hub);
  const hubRing=mesh(new THREE.TorusGeometry(.30,.035,14,36),0x87939b,.20,.72); hubRing.rotation.x=Math.PI/2; hubRing.position.y=-.46; wrist.add(hubRing);

  const fl=new THREE.Group(); fl.position.set(-.23,-.45,.12); wrist.add(fl);
  const fr=new THREE.Group(); fr.position.set(.23,-.45,.12); wrist.add(fr);

  function buildClawFinger(group, mirror=1){
    const upper=box(.14,.46,.17,.035,0xa8b0b6,.24,.82); upper.position.set(.08*mirror,-.19,0); upper.rotation.z=-.22*mirror; group.add(upper);
    const knuckle=mesh(new THREE.CylinderGeometry(.105,.105,.17,20),0x58636b,.24,.76); knuckle.rotation.x=Math.PI/2; knuckle.position.set(.16*mirror,-.40,0); group.add(knuckle);
    const lower=box(.13,.38,.16,.030,0xb9c0c5,.22,.86); lower.position.set(.20*mirror,-.57,0); lower.rotation.z=.32*mirror; group.add(lower);
    const pad=box(.12,.15,.25,.025,0x101419,.50,.28); pad.position.set(.13*mirror,-.77,.04); pad.rotation.z=.12*mirror; group.add(pad);
  }
  buildClawFinger(fl,-1); buildClawFinger(fr,1);

  const socket=new THREE.Object3D(); socket.position.set(0,-1.10,.145); wrist.add(socket);
  root.add(wrist);
  armVisual.root=root; armVisual.wrist=wrist; armVisual.fl=fl; armVisual.fr=fr; armVisual.socket=socket;
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
  const socketOffset = new THREE.Vector3(0, -1.10, .145).applyQuaternion(wristQ);
  return end.clone().add(socketOffset);
}
function placeLink(o, a, b) {
  const d = b.clone().sub(a), len = d.length();
  const mid = a.clone().add(b).multiplyScalar(.5);
  o.position.copy(mid);
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize());
  o.scale.set(1, Math.max(.1, len - .28), 1);
}
function updateArmVisual() {
  const p = armWorldPoints();
  armVisual.links.forEach((l, i) => placeLink(l, p[i], p[i + 1]));
  armVisual.joints.forEach((j, i) => { j.position.copy(p[i]); j.rotation.y = -armState.yaw; });
  const end = p[p.length - 1];
  armVisual.wrist.position.copy(end);
  armVisual.wrist.rotation.set(0, -armState.yaw + Math.PI / 2, 0);
  const gripT=THREE.MathUtils.clamp((.26-armState.grip)/(.26-.095),0,1);
  armVisual.fl.rotation.z = THREE.MathUtils.lerp(-.10,-.34,gripT);
  armVisual.fr.rotation.z = THREE.MathUtils.lerp(.10,.34,gripT);
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
function moveArmPath(targets, duration = 900, options = {}) {
  duration = Math.round(duration * ARM_MOTION_SCALE);
  let previousYaw = armState.yaw;
  const keyframes=[{at:0,yaw:previousYaw,angles:[...armState.angles]}];
  targets.forEach((target,i)=>{
    const yaw=nearestAngle(previousYaw,target.yaw);
    keyframes.push({at:target.at ?? ((i+1)/targets.length),yaw,angles:[...target.angles]});
    previousYaw=yaw;
  });
  if(state.reducedMotion){
    const last=keyframes.at(-1); armState.yaw=last.yaw; armState.angles=[...last.angles];
    if(options.modeAfter) state.boardMode=options.modeAfter;
    updateArmVisual(); return Promise.resolve();
  }
  state.armTween={start:performance.now(),duration,keyframes,switchBoardModeAt:options.switchBoardModeAt,modeAfter:options.modeAfter,modeSwitched:false};
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
const BOARD = { width:6.80, height:2.75, thickness:.095, handleX:0, handleY:1.50, stationScale:1 };
function createBoard(section,item,index) {
  const key=`${section}/${item.id}`;
  const copy=PORTFOLIO_BOARD_COPY[key]||{
    title:item.title, meta:item.meta, summary:item.description, metrics:item.metrics,
    contributions:item.details, scope:getScopeText(section,item), impact:'Built through repeated testing, debugging, documentation, and iteration.', tags:item.tags
  };

  const group=new THREE.Group();
  const back=box(BOARD.width,BOARD.height,BOARD.thickness,.075,0x1b232b,.66,.12); group.add(back);
  const rim=box(BOARD.width+.12,BOARD.height+.12,.055,.085,0x384651,.44,.28); rim.position.z=-.055; group.add(rim);
  const clampBase=box(.76,.20,.24,.045,0x727d86,.28,.72); clampBase.position.set(BOARD.handleX,BOARD.height/2-.07,.10); group.add(clampBase);
  const gripTab=box(.055,.34,.19,.018,0x242b31,.22,.90); gripTab.position.set(BOARD.handleX,BOARD.handleY,.145); group.add(gripTab);
  const cap=box(.36,.09,.27,.025,0x59636c,.24,.82); cap.position.set(BOARD.handleX,BOARD.height/2+.18,.12); group.add(cap);
  for(const x of [-.23,.23]) addBolt(clampBase,BOARD.handleX+x,0,.14,.035);
  const handleAnchor=new THREE.Object3D(); handleAnchor.position.set(BOARD.handleX,BOARD.handleY,.145); group.add(handleAnchor); group.userData.handleAnchor=handleAnchor;

  const canvas=document.createElement('canvas'); canvas.width=3700; canvas.height=1500;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#1c242c'; ctx.fillRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<1800;i++){ const a=Math.random()*.016; ctx.fillStyle=`rgba(205,218,228,${a})`; ctx.fillRect(Math.random()*3700,Math.random()*1500,1,1); }

  if(key==='about/about') drawAboutBoard(ctx,copy,index);
  else drawStandardBoard(ctx,section,copy,index);

  const texture=new THREE.CanvasTexture(canvas); texture.colorSpace=THREE.SRGBColorSpace; texture.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),16);
  const plane=new THREE.Mesh(new THREE.PlaneGeometry(BOARD.width-.18,BOARD.height-.18),new THREE.MeshBasicMaterial({map:texture,toneMapped:false}));
  plane.position.z=BOARD.thickness/2+.006; group.add(plane);
  group.userData.texture=texture;
  return group;
}

function drawStandardBoard(ctx,section,copy,index){
  const margin=150, contentW=3400;
  const accent='#82b4d8', primary='#edf2f5', body='#d2dae0', muted='#a8b4bd', rule='#43525e', card='#232e37';

  // Category and title deliberately sit higher than v21.
  ctx.fillStyle=accent; ctx.font='700 57px Inter, Arial';
  ctx.fillText(`${section.toUpperCase()}  ·  ${String(index+1).padStart(2,'0')}`,margin,60);
  ctx.fillStyle=primary; ctx.font='800 150px Inter, Arial';
  const titleEnd=wrapText(ctx,copy.title,margin,166,contentW,152);
  ctx.fillStyle=muted; ctx.font='500 60px Inter, Arial';
  const metaEnd=wrapText(ctx,copy.meta,margin,titleEnd+54,contentW,70);
  drawOutlinePills(ctx,copy.tags.slice(0,5),margin,metaEnd+20,contentW,true,true);

  const profileY=metaEnd+98;
  ctx.strokeStyle=rule; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(margin,profileY); ctx.lineTo(3550,profileY); ctx.stroke();
  ctx.fillStyle=accent; ctx.font='800 48px Inter, Arial'; ctx.fillText('PROFILE',margin,profileY+50);
  ctx.fillStyle=body; ctx.font='500 60px Inter, Arial';
  const summaryEnd=wrapText(ctx,copy.summary,margin,profileY+118,contentW,72);

  const metricY=summaryEnd+48, gap=34, cardW=(contentW-gap*2)/3, cardH=164;
  copy.metrics.slice(0,3).forEach((m,i)=>{
    const x=margin+i*(cardW+gap);
    roundRect(ctx,x,metricY,cardW,cardH,22,card); strokeRoundRect(ctx,x,metricY,cardW,cardH,22,'#465764',2);
    ctx.fillStyle=accent; ctx.font='800 72px Inter, Arial'; wrapText(ctx,String(m[0]),x+28,metricY+67,cardW-56,76);
    ctx.fillStyle=muted; ctx.font='600 38px Inter, Arial'; wrapText(ctx,String(m[1]),x+28,metricY+126,cardW-56,44);
  });

  const lowerTop=metricY+cardH+66, colGap=180, colW=(contentW-colGap)/2;
  const leftX=margin, rightX=margin+colW+colGap;
  ctx.fillStyle=accent; ctx.font='800 57px Inter, Arial';
  ctx.fillText('SELECTED CONTRIBUTIONS',leftX,lowerTop); ctx.fillText('ROLE · SCOPE · IMPACT',rightX,lowerTop);

  let leftY=lowerTop+78; ctx.font='500 52px Inter, Arial';
  copy.contributions.slice(0,2).forEach(line=>{
    ctx.fillStyle=accent; ctx.beginPath(); ctx.arc(leftX+9,leftY-16,6,0,Math.PI*2); ctx.fill(); ctx.fillStyle=body;
    const lineEnd=wrapText(ctx,line,leftX+34,leftY,colW-34,66); leftY=lineEnd+44;
  });

  ctx.fillStyle=body; ctx.font='500 52px Inter, Arial';
  const scopeEnd=wrapText(ctx,copy.scope,rightX,lowerTop+78,colW,66);
  ctx.fillStyle=accent; ctx.font='800 45px Inter, Arial'; ctx.fillText('WHY IT MATTERS',rightX,scopeEnd+52);
  ctx.fillStyle=body; ctx.font='500 52px Inter, Arial';
  wrapText(ctx,copy.impact,rightX,scopeEnd+112,colW,66);

  const footerY=1282;
  ctx.strokeStyle=rule; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(margin,footerY); ctx.lineTo(3550,footerY); ctx.stroke();
  // Core stack and contact are roughly 2× the v21 size.
  ctx.fillStyle=accent; ctx.font='800 54px Inter, Arial'; ctx.fillText('CORE STACK',margin,footerY+58); ctx.fillText('CONTACT',2200,footerY+58);
  ctx.fillStyle=primary; ctx.font='600 50px Inter, Arial';
  wrapText(ctx,copy.tags.slice(0,6).join('  ·  '),margin,footerY+118,1880,58);
  ctx.fillStyle=primary; ctx.font='500 48px Inter, Arial';
  ctx.fillText('github.com/banana1324',2200,footerY+118); ctx.fillText('linkedin.com/in/fuyuanzhang',2200,footerY+170);
}

function drawAboutBoard(ctx,copy,index){
  const margin=150, contentW=3400;
  const accent='#82b4d8', primary='#edf2f5', body='#d2dae0', muted='#a8b4bd', rule='#43525e', card='#232e37';
  ctx.fillStyle=accent; ctx.font='700 57px Inter, Arial'; ctx.fillText(`ABOUT  ·  ${String(index+1).padStart(2,'0')}`,margin,60);
  ctx.fillStyle=primary; ctx.font='800 150px Inter, Arial'; ctx.fillText('About Warren Zhang',margin,166);
  ctx.fillStyle=muted; ctx.font='500 60px Inter, Arial'; ctx.fillText(copy.meta,margin,238);

  ctx.strokeStyle=rule; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(margin,292); ctx.lineTo(3550,292); ctx.stroke();
  ctx.fillStyle=primary; ctx.font='700 74px Inter, Arial'; ctx.fillText('I like understanding the whole system.',margin,382);
  ctx.fillStyle=body; ctx.font='500 56px Inter, Arial';
  const introEnd=wrapText(ctx,copy.summary,margin,454,contentW,68);

  const metricY=introEnd+44, gap=34, cardW=(contentW-gap*2)/3, cardH=160;
  copy.metrics.slice(0,3).forEach((m,i)=>{
    const x=margin+i*(cardW+gap); roundRect(ctx,x,metricY,cardW,cardH,22,card); strokeRoundRect(ctx,x,metricY,cardW,cardH,22,'#465764',2);
    ctx.fillStyle=accent; ctx.font='800 72px Inter, Arial'; ctx.fillText(String(m[0]),x+30,metricY+67);
    ctx.fillStyle=muted; ctx.font='600 38px Inter, Arial'; wrapText(ctx,String(m[1]),x+30,metricY+122,cardW-60,42);
  });

  const columnsY=metricY+cardH+70, colGap=180, colW=(contentW-colGap)/2, rightX=margin+colW+colGap;
  ctx.fillStyle=accent; ctx.font='800 52px Inter, Arial'; ctx.fillText('WHAT I BRING',margin,columnsY); ctx.fillText('HOW I WORK',rightX,columnsY);
  ctx.fillStyle=body; ctx.font='500 50px Inter, Arial';
  const leftEnd=wrapText(ctx,copy.contributions[0],margin,columnsY+70,colW,64);
  wrapText(ctx,copy.contributions[1],rightX,columnsY+70,colW,64);

  const proofY=Math.max(leftEnd+78,1110);
  ctx.strokeStyle=rule; ctx.beginPath(); ctx.moveTo(margin,proofY-40); ctx.lineTo(3550,proofY-40); ctx.stroke();
  ctx.fillStyle=accent; ctx.font='800 48px Inter, Arial'; ctx.fillText('EXPERIENCE IN PRACTICE',margin,proofY);
  ctx.fillStyle=body; ctx.font='500 48px Inter, Arial'; wrapText(ctx,copy.scope,margin,proofY+64,2050,60);

  ctx.fillStyle=accent; ctx.font='800 52px Inter, Arial'; ctx.fillText('LET’S CONNECT',2360,proofY);
  ctx.fillStyle=body; ctx.font='500 46px Inter, Arial'; wrapText(ctx,copy.impact,2360,proofY+64,1190,58);
  ctx.fillStyle=primary; ctx.font='600 44px Inter, Arial'; ctx.fillText('warrenz7980@gmail.com',2360,1404);
}

function drawOutlinePills(ctx,pills,x,y,maxWidth,dark=false,large=false){
  ctx.font=`600 ${large?42:28}px Inter, Arial`; let cx=x,cy=y;
  pills.forEach(label=>{ const h=large?56:42,pad=large?58:44,step=large?68:52; const w=ctx.measureText(label).width+pad; if(cx+w>maxWidth+x){cx=x;cy+=step;} strokeRoundRect(ctx,cx,cy,w,h,large?22:18,dark?'#465967':'#aeb7c0',2); ctx.fillStyle=dark?'#9ec4df':'#174878';ctx.fillText(label,cx+(large?29:22),cy+(large?41:30));cx+=w+(large?18:14); });
}
function strokeRoundRect(ctx,x,y,w,h,r,stroke,width=2){
  ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke();
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
const rayTargets=[];
const gltfLoader=new GLTFLoader();
const SUZANNE_URL='https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/refs/heads/main/2.0/Suzanne/glTF/Suzanne.gltf';
const PODIUM_SCALE={
  'projects/wildfire':.43,
  'projects/kc15':.43,
  'experience/vex':.40,
  'experience/eim':.40,
  'experience/coaching':.35,
  'experience/orchestra':.29,
  'interests/blender':.43,
  'home/home':.37,
  'about/about':.36,
  'projects/vision':.39,
  'projects/analog':.40,
  'interests/hardware':.40,
  'interests/music':.31,
  'contact/contact':.40
};
const PODIUM_LAYOUT={
  // Front row — shifted farther away from the camera
  'projects/wildfire':[-3.80,.12,4.82],
  'projects/kc15':[-1.70,.12,4.90],
  'experience/vex':[.40,.12,4.96],
  'experience/eim':[2.50,.12,4.96],
  'experience/coaching':[4.60,.12,4.90],
  'experience/orchestra':[6.70,.12,4.80],
  'interests/blender':[8.78,.12,4.66],

  // Back row — also shifted deeper into the scene
  'home/home':[-4.55,.12,2.48],
  'about/about':[-2.45,.12,2.44],
  'projects/vision':[-.35,.12,2.42],
  'projects/analog':[1.75,.12,2.42],
  'interests/hardware':[3.85,.12,2.44],
  'interests/music':[5.95,.12,2.48],
  'contact/contact':[8.05,.12,2.54]
};
function sectionAccent(section){ return ({home:0x64b7ee,about:0x66c3f2,projects:0x53b6ff,experience:0x61c9f1,interests:0x63bde6,contact:0x64b7ee})[section]||0x5ab9f1; }
function createPodiumLabel(text){
  const c=document.createElement('canvas'); c.width=900;c.height=180;const ctx=c.getContext('2d');ctx.clearRect(0,0,900,180);
  roundRect(ctx,8,8,884,164,44,'rgba(7,12,18,.94)');ctx.strokeStyle='rgba(68,179,247,.55)';ctx.lineWidth=4;ctx.stroke();
  ctx.fillStyle='#f4f7fa';ctx.font='700 42px Inter, Arial';ctx.textAlign='center';ctx.textBaseline='middle';
  let label=text;while(ctx.measureText(label).width>780&&label.length>12)label=label.slice(0,-2);if(label!==text)label+='…';ctx.fillText(label,450,90);
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
  const p=new THREE.Mesh(new THREE.PlaneGeometry(1.36,.27),new THREE.MeshBasicMaterial({map:t,transparent:true,depthWrite:false,toneMapped:false}));p.renderOrder=4;return p;
}
function createAllStations(){
  FLAT_ITEMS.forEach(entry=>{
    const root=new THREE.Group(); scene.add(root);
    let pad=null,ring=null,model=null,label=null;
    const pos=PODIUM_LAYOUT[entry.key];
    if(pos){
      pad=mesh(new THREE.CylinderGeometry(.58,.69,.16,38),0x111820,.32,.72);pad.position.set(pos[0],.09,pos[2]);root.add(pad);
      const lower=mesh(new THREE.CylinderGeometry(.67,.73,.09,38),0x060a0e,.30,.72);lower.position.set(pos[0],.025,pos[2]);root.add(lower);
      ring=mesh(new THREE.TorusGeometry(.63,.030,16,48),0x3cb5ff,.18,.54);ring.rotation.x=Math.PI/2;ring.position.set(pos[0],.19,pos[2]);ring.material.emissive.setHex(0x146a9d);ring.material.emissiveIntensity=1.2;root.add(ring);
      model=createTopicModel(entry.item.model,entry.key);model.position.set(pos[0],.22,pos[2]);const baseScale=PODIUM_SCALE[entry.key]||.48;model.scale.setScalar(baseScale);model.userData.baseScale=baseScale;model.rotation.y=Math.atan2(camera.position.x-pos[0],camera.position.z-pos[2]);root.add(model);
      label=createPodiumLabel(entry.item.label);const toCam=new THREE.Vector3(camera.position.x-pos[0],0,camera.position.z-pos[2]).normalize();label.position.set(pos[0],.26,pos[2]).addScaledVector(toCam,.62);label.lookAt(camera.position.x,.30,camera.position.z);root.add(label);
      root.traverse(child=>{if(child.isMesh){child.userData.navKey=entry.key;rayTargets.push(child);}});
    }
    state.stations.set(entry.key,{...entry,root,pad,ring,model,label,board:null});
  });
}
function setSelectedStation(key){
  state.selectedKey=key;
  for(const [k,st] of state.stations){ if(!st.model)continue; const selected=k===key; const base=st.model.userData.baseScale||.48; st.model.scale.setScalar(base*(selected?1.16:1)); if(st.ring){st.ring.material.color.setHex(selected?0x76d0ff:0x3cb5ff);st.ring.material.emissiveIntensity=selected?2.0:1.0;} }
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
function currentItem() { return CONTENT[state.uiSection][state.uiIndex]; }
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
  document.querySelectorAll('.nav-header').forEach(b => b.classList.toggle('is-active', b.dataset.section === state.uiSection));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('is-active', b.dataset.section === state.uiSection && b.dataset.itemId === currentItem().id));
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
function disposeBoard(board){
  if(!board)return;
  scene.remove(board);
  board.userData.texture?.dispose?.();
  disposeObject(board);
}
function beginHold(station,board){
  state.boardMode='carry';
  scene.add(board);
  board.scale.setScalar(HELD_BOARD_SCALE);
  board.visible=true;
  state.heldBoard=board;
  state.heldStation=station;
  const socket=socketWorld();
  state.heldFollow={prevSocket:socket.clone(),prevVelocity:new THREE.Vector3(),swingX:0,swingZ:0,swingVX:0,swingVZ:0};
  updateHeldBoard(performance.now(),1/60,true);
}
function heldBoardTargetPose(socket,swingX=0,swingZ=0){
  let q;
  if(state.boardMode==='carry'){
    // Tangent to the base rotation: the panel rides edge-on beside the arm instead of broadside.
    q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,-armState.yaw+Math.PI/2,0));
  }else{
    // Final reading state is exactly parallel to the viewer's image plane.
    q=camera.quaternion.clone();
  }
  q.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(swingX*.25,0,swingZ*.25)));
  const scale=state.heldBoard?.scale.x||HELD_BOARD_SCALE;
  const localHandle=new THREE.Vector3(BOARD.handleX*scale,BOARD.handleY*scale,.145*scale).applyQuaternion(q);
  return {position:socket.clone().sub(localHandle),quaternion:q};
}
function updateHeldBoard(now,dt,snap=false){
  if(!state.heldBoard||!state.heldFollow)return;
  const socket=socketWorld(),f=state.heldFollow,safeDt=Math.max(1/120,Math.min(dt||1/60,1/20));
  const velocity=socket.clone().sub(f.prevSocket).multiplyScalar(1/safeDt);const acceleration=velocity.clone().sub(f.prevVelocity).multiplyScalar(1/safeDt);
  f.prevSocket.copy(socket);f.prevVelocity.lerp(velocity,.38);
  const stiffness=22.0,damping=9.0,drive=.0030;
  const ax=THREE.MathUtils.clamp(acceleration.z*drive,-.42,.42),az=THREE.MathUtils.clamp(-acceleration.x*drive,-.42,.42);
  f.swingVX+=(-stiffness*f.swingX-damping*f.swingVX+ax)*safeDt;f.swingVZ+=(-stiffness*f.swingZ-damping*f.swingVZ+az)*safeDt;
  f.swingX=THREE.MathUtils.clamp(f.swingX+f.swingVX*safeDt,-.045,.045);f.swingZ=THREE.MathUtils.clamp(f.swingZ+f.swingVZ*safeDt,-.045,.045);
  const target=heldBoardTargetPose(socket,f.swingX,f.swingZ);state.heldBoard.position.copy(target.position);if(snap||state.reducedMotion)state.heldBoard.quaternion.copy(target.quaternion);else state.heldBoard.quaternion.slerp(target.quaternion,.46);
}
async function carryCurrentCompletelyOffscreen(){
  if(!state.heldBoard)return;
  state.boardMode='carry';
  dom.status.textContent='Moving current page away';
  // One continuous motion: retract near the base, then rotate off-screen without stopping.
  await moveArmPath([
    {yaw:PRESENT_YAW,angles:ARM_POSES.carry,at:.34},
    {yaw:OFFSCREEN_YAW,angles:ARM_POSES.carry,at:1}
  ],900);
  await wait(175);
  await setGrip(.26,70);
  await wait(175);
}
async function swapBoardWhileOffscreen(station){
  state.boardMode='carry';
  const old=state.heldBoard;
  state.heldBoard=null;state.heldFollow=null;state.heldStation=null;
  if(old)disposeBoard(old);
  updateArmVisual();
  const board=createBoard(station.section,station.item,station.index);
  beginHold(station,board);
  await setGrip(.095,115);
}
async function bringBoardBackOnscreen(){
  // One continuous return path. The page stays tucked close while rotating, then
  // becomes parallel to the viewer during the final forward extension.
  state.boardMode='carry';
  dom.status.textContent='Bringing next page in';
  await moveArmPath([
    {yaw:PRESENT_YAW,angles:ARM_POSES.carry,at:.68},
    {yaw:PRESENT_YAW,angles:ARM_POSES.read,at:1}
  ],980,{switchBoardModeAt:.68,modeAfter:'read'});
  dom.status.textContent='Page ready';
}
async function deliverBoard(section,index){
  state.busy=true;
  const item=CONTENT[section][index],key=`${section}/${item.id}`,station=state.stations.get(key);
  if(state.heldBoard)await carryCurrentCompletelyOffscreen();
  state.section=section; state.index=index;
  await swapBoardWhileOffscreen(station);
  // For the initial page, the arm begins off-camera already holding it. For every later page,
  // the swap happens only after the old panel has stayed fully off-camera for 0.5 seconds.
  await bringBoardBackOnscreen();
  state.busy=false;
  if(state.queued){const q=state.queued;state.queued=null;requestSelection(q.section,q.index,q.updateHash);}
}
function requestSelection(section,index=0,updateHash=true){
  if(!CONTENT[section])section='home'; index=Math.max(0,Math.min(index,CONTENT[section].length-1));
  const item=CONTENT[section][index],key=`${section}/${item.id}`;

  // UI reacts immediately. Only the physical arm + board take time to catch up.
  state.uiSection=section; state.uiIndex=index;
  setSelectedStation(key); updateNav();
  dom.topbarTitle.textContent=item.title;
  dom.live.textContent=`${item.title}. ${item.description}`;
  if(updateHash)history.replaceState(null,'',`#${section}/${item.id}`);

  if(state.busy){state.queued={section,index,updateHash:false};dom.status.textContent='Queued next page';return;}
  deliverBoard(section,index);
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
      if (st.model) { const modelBox = new THREE.Box3().setFromObject(st.model); resolveSphereBox(o, modelBox, r); }
      if (st.pad) { const padBox = new THREE.Box3().setFromObject(st.pad); resolveSphereBox(o, padBox, r); }
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
  // Spawned rigid bodies also collide with each other instead of ghosting through one another.
  for (let i=0;i<state.spawned.length;i++) for (let j=i+1;j<state.spawned.length;j++) {
    const a=state.spawned[i],b=state.spawned[j],ra=a.userData.radius||.55,rb=b.userData.radius||.55;
    const delta=b.position.clone().sub(a.position);let dist=delta.length(),min=ra+rb;
    if(dist<min){ if(dist<1e-5){delta.set(1,0,0);dist=.001;} const n=delta.multiplyScalar(1/dist),push=(min-dist)*.5; a.position.addScaledVector(n,-push);b.position.addScaledVector(n,push); const va=a.userData.velocity,vb=b.userData.velocity,rel=vb.clone().sub(va).dot(n); if(rel<0){const impulse=-rel*.58;va.addScaledVector(n,-impulse);vb.addScaledVector(n,impulse);} }
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
  const tw=state.armTween;
  const t=Math.min(1,(now-tw.start)/tw.duration);
  const e=.5-.5*Math.cos(Math.PI*t); // smooth global acceleration/deceleration
  if(tw.keyframes){
    if(tw.switchBoardModeAt!=null && !tw.modeSwitched && e>=tw.switchBoardModeAt){
      state.boardMode=tw.modeAfter||'read'; tw.modeSwitched=true;
    }
    let a=tw.keyframes[0],b=tw.keyframes.at(-1);
    for(let i=0;i<tw.keyframes.length-1;i++){
      if(e>=tw.keyframes[i].at && e<=tw.keyframes[i+1].at){ a=tw.keyframes[i]; b=tw.keyframes[i+1]; break; }
    }
    const span=Math.max(.0001,b.at-a.at),local=THREE.MathUtils.clamp((e-a.at)/span,0,1);
    armState.yaw=THREE.MathUtils.lerp(a.yaw,b.yaw,local);
    armState.angles=a.angles.map((v,i)=>THREE.MathUtils.lerp(v,b.angles[i],local));
  }else{
    armState.yaw=THREE.MathUtils.lerp(tw.fromYaw,tw.toYaw,e);
    armState.angles=tw.fromAngles.map((a,i)=>THREE.MathUtils.lerp(a,tw.toAngles[i],e));
  }
  if(t>=1){ if(tw.modeAfter) state.boardMode=tw.modeAfter; state.armTween=null; }
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
