import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";

const canvas = document.querySelector("#three-canvas");

// --------------------
// THREE.JS
// --------------------

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0b0c);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(8, 5, 10);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// --------------------
// LIGHTS
// --------------------

const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);

directionalLight.position.set(6, 10, 6);

directionalLight.castShadow = true;

scene.add(directionalLight);

// --------------------
// GRID
// --------------------

const grid = new THREE.GridHelper(
    40,
    40,
    0x555555,
    0x222222
);

scene.add(grid);

// --------------------
// PHYSICS WORLD
// --------------------

const world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -9.82, 0)
});

world.broadphase = new CANNON.SAPBroadphase(world);

world.allowSleep = true;

// Ground physics

const groundBody = new CANNON.Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Plane()
});

groundBody.quaternion.setFromEuler(
    -Math.PI / 2,
    0,
    0
);

world.addBody(groundBody);

// --------------------
// MATERIALS
// --------------------

const orangeMaterial = new THREE.MeshStandardMaterial({
    color: 0xf57c00,
    roughness: 0.45,
    metalness: 0.05
});

const darkMaterial = new THREE.MeshStandardMaterial({
    color: 0x303236,
    roughness: 0.55,
    metalness: 0.15
});

const lightMaterial = new THREE.MeshStandardMaterial({
    color: 0xd8d8d2,
    roughness: 0.5,
    metalness: 0.05
});

// --------------------
// OBJECT STORAGE
// --------------------

const objects = [];

// --------------------
// CREATE BOX
// --------------------

function createBox(
    size,
    position,
    material
) {
    const geometry = new THREE.BoxGeometry(
        size.x,
        size.y,
        size.z
    );

    const mesh = new THREE.Mesh(
        geometry,
        material
    );

    mesh.position.copy(position);

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add(mesh);

    const shape = new CANNON.Box(
        new CANNON.Vec3(
            size.x / 2,
            size.y / 2,
            size.z / 2
        )
    );

    const body = new CANNON.Body({
        mass: 1,
        shape: shape,
        position: new CANNON.Vec3(
            position.x,
            position.y,
            position.z
        )
    });

    body.angularVelocity.set(
        Math.random(),
        Math.random(),
        Math.random()
    );

    body.angularDamping = 0.2;

    world.addBody(body);

    objects.push({
        mesh: mesh,
        body: body
    });
}

// --------------------
// CREATE SPHERE
// --------------------

function createSphere(
    radius,
    position,
    material
) {
    const geometry = new THREE.SphereGeometry(
        radius,
        32,
        32
    );

    const mesh = new THREE.Mesh(
        geometry,
        material
    );

    mesh.position.copy(position);

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add(mesh);

    const shape = new CANNON.Sphere(radius);

    const body = new CANNON.Body({
        mass: 1,
        shape: shape,
        position: new CANNON.Vec3(
            position.x,
            position.y,
            position.z
        )
    });

    world.addBody(body);

    objects.push({
        mesh: mesh,
        body: body
    });
}

// --------------------
// CREATE SIMULATION
// --------------------

function createSimulation() {

    createBox(
        new THREE.Vector3(1.5, 1.5, 1.5),
        new THREE.Vector3(2, 8, 0),
        orangeMaterial
    );

    createBox(
        new THREE.Vector3(2.3, 0.8, 1),
        new THREE.Vector3(3, 11, 0.5),
        darkMaterial
    );

    createBox(
        new THREE.Vector3(1, 2.2, 1),
        new THREE.Vector3(1, 14, -0.5),
        lightMaterial
    );

    createSphere(
        0.8,
        new THREE.Vector3(4, 16, 0),
        orangeMaterial
    );

    createSphere(
        0.55,
        new THREE.Vector3(2, 18, 1),
        lightMaterial
    );

    createBox(
        new THREE.Vector3(1.2, 1.2, 1.2),
        new THREE.Vector3(4.5, 20, -1),
        darkMaterial
    );
}

createSimulation();

// --------------------
// CAMERA CONTROLS
// --------------------

const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.target.set(2.5, 2, 0);

controls.minDistance = 5;
controls.maxDistance = 18;

controls.maxPolarAngle = Math.PI / 2.05;

// --------------------
// ANIMATION
// --------------------

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const deltaTime = Math.min(
        clock.getDelta(),
        0.1
    );

    world.step(
        1 / 60,
        deltaTime,
        3
    );

    for (const object of objects) {

        object.mesh.position.copy(
            object.body.position
        );

        object.mesh.quaternion.copy(
            object.body.quaternion
        );
    }

    controls.update();

    renderer.render(
        scene,
        camera
    );
}

animate();

// --------------------
// RESIZE
// --------------------

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);
