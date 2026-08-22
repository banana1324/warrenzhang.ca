import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";

const canvas = document.querySelector("#three-canvas");

// --------------------------------------------------
// SETTINGS
// --------------------------------------------------

const MAX_USER_OBJECTS = 20;

let userObjectCount = 0;
let selectedObject = null;

// --------------------------------------------------
// THREE.JS SCENE
// --------------------------------------------------

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

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// --------------------------------------------------
// LIGHTS
// --------------------------------------------------

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1.4
);

scene.add(ambientLight);

const directionalLight =
    new THREE.DirectionalLight(
        0xffffff,
        4
    );

directionalLight.position.set(
    6,
    10,
    6
);

directionalLight.castShadow = true;

scene.add(directionalLight);

// --------------------------------------------------
// GRID
// --------------------------------------------------

const grid = new THREE.GridHelper(
    40,
    40,
    0x555555,
    0x222222
);

scene.add(grid);

// --------------------------------------------------
// PHYSICS
// --------------------------------------------------

const world = new CANNON.World({
    gravity: new CANNON.Vec3(
        0,
        -9.82,
        0
    )
});

world.broadphase =
    new CANNON.SAPBroadphase(world);

world.allowSleep = true;

// Ground

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

// --------------------------------------------------
// MATERIALS
// --------------------------------------------------

function createMaterial(color) {
    return new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.45,
        metalness: 0.05
    });
}

const orangeMaterial =
    createMaterial(0xf57c00);

const darkMaterial =
    createMaterial(0x303236);

const lightMaterial =
    createMaterial(0xd8d8d2);

// --------------------------------------------------
// OBJECT STORAGE
// --------------------------------------------------

const objects = [];

// --------------------------------------------------
// RANDOM SPAWN POSITION
// --------------------------------------------------

function getSpawnPosition() {

    return new THREE.Vector3(
        2 + Math.random() * 3,
        8 + Math.random() * 5,
        -2 + Math.random() * 4
    );
}

// --------------------------------------------------
// ADD OBJECT
// --------------------------------------------------

function addPhysicsObject(
    mesh,
    body,
    userAdded = true
) {

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add(mesh);
    world.addBody(body);

    const object = {
        mesh: mesh,
        body: body,
        userAdded: userAdded
    };

    mesh.userData.physicsObject = object;

    objects.push(object);

    if (userAdded) {
        userObjectCount++;
        updateObjectCounter();
    }

    return object;
}

// --------------------------------------------------
// CUBE
// --------------------------------------------------

function createCube(
    position = getSpawnPosition(),
    userAdded = true
) {

    const size = 1.4;

    const geometry =
        new THREE.BoxGeometry(
            size,
            size,
            size
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            orangeMaterial.clone()
        );

    mesh.position.copy(position);

    const shape =
        new CANNON.Box(
            new CANNON.Vec3(
                size / 2,
                size / 2,
                size / 2
            )
        );

    const body =
        new CANNON.Body({
            mass: 1,
            shape: shape,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });

    return addPhysicsObject(
        mesh,
        body,
        userAdded
    );
}

// --------------------------------------------------
// SPHERE
// --------------------------------------------------

function createSphere(
    position = getSpawnPosition(),
    userAdded = true
) {

    const radius = 0.8;

    const geometry =
        new THREE.SphereGeometry(
            radius,
            32,
            32
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            lightMaterial.clone()
        );

    mesh.position.copy(position);

    const shape =
        new CANNON.Sphere(radius);

    const body =
        new CANNON.Body({
            mass: 1,
            shape: shape,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });

    return addPhysicsObject(
        mesh,
        body,
        userAdded
    );
}

// --------------------------------------------------
// CYLINDER
// --------------------------------------------------

function createCylinder(
    position = getSpawnPosition(),
    userAdded = true
) {

    const radius = 0.7;
    const height = 1.8;

    const geometry =
        new THREE.CylinderGeometry(
            radius,
            radius,
            height,
            32
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            darkMaterial.clone()
        );

    mesh.position.copy(position);

    const shape =
        new CANNON.Cylinder(
            radius,
            radius,
            height,
            16
        );

    const body =
        new CANNON.Body({
            mass: 1,
            shape: shape,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });

    return addPhysicsObject(
        mesh,
        body,
        userAdded
    );
}

// --------------------------------------------------
// CONE
// --------------------------------------------------

function createCone(
    position = getSpawnPosition(),
    userAdded = true
) {

    const geometry =
        new THREE.ConeGeometry(
            0.8,
            1.8,
            32
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            orangeMaterial.clone()
        );

    mesh.position.copy(position);

    // Physics approximation
    const shape =
        new CANNON.Cylinder(
            0.15,
            0.8,
            1.8,
            16
        );

    const body =
        new CANNON.Body({
            mass: 1,
            shape: shape,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });

    return addPhysicsObject(
        mesh,
        body,
        userAdded
    );
}

// --------------------------------------------------
// TORUS
// --------------------------------------------------

function createTorus(
    position = getSpawnPosition(),
    userAdded = true
) {

    const geometry =
        new THREE.TorusGeometry(
            0.8,
            0.25,
            20,
            40
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            lightMaterial.clone()
        );

    mesh.position.copy(position);

    // Simple physics approximation
    const shape =
        new CANNON.Sphere(0.9);

    const body =
        new CANNON.Body({
            mass: 1,
            shape: shape,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });

    return addPhysicsObject(
        mesh,
        body,
        userAdded
    );
}

// --------------------------------------------------
// TEMPORARY MONKEY
// --------------------------------------------------

function createMonkey(
    position = getSpawnPosition(),
    userAdded = true
) {

    const group =
        new THREE.Group();

    const material =
        orangeMaterial.clone();

    // Head
    const head =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.75,
                24,
                24
            ),
            material
        );

    head.scale.set(
        1,
        0.85,
        0.9
    );

    group.add(head);

    // Left ear
    const leftEar =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.35,
                20,
                20
            ),
            material
        );

    leftEar.position.set(
        -0.72,
        0,
        0
    );

    group.add(leftEar);

    // Right ear
    const rightEar =
        leftEar.clone();

    rightEar.position.x = 0.72;

    group.add(rightEar);

    // Muzzle
    const muzzle =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.42,
                20,
                20
            ),
            material
        );

    muzzle.position.set(
        0,
        -0.22,
        0.58
    );

    muzzle.scale.set(
        1.1,
        0.7,
        0.8
    );

    group.add(muzzle);

    group.position.copy(position);

    group.traverse((child) => {

        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    // Physics proxy
    const shape =
        new CANNON.Sphere(0.9);

    const body =
        new CANNON.Body({
            mass: 1,
            shape: shape,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });

    scene.add(group);
    world.addBody(body);

    const object = {
        mesh: group,
        body: body,
        userAdded: userAdded
    };

    group.traverse((child) => {
        child.userData.physicsObject =
            object;
    });

    objects.push(object);

    if (userAdded) {
        userObjectCount++;
        updateObjectCounter();
    }

    return object;
}

// --------------------------------------------------
// INITIAL SCENE OBJECTS
// --------------------------------------------------

createCube(
    new THREE.Vector3(2, 8, 0),
    false
);

createSphere(
    new THREE.Vector3(4, 11, 0),
    false
);

createCylinder(
    new THREE.Vector3(3, 14, -1),
    false
);

createCone(
    new THREE.Vector3(5, 17, 1),
    false
);

// --------------------------------------------------
// ADD MENU
// --------------------------------------------------

const addMenu =
    document.createElement("div");

addMenu.id = "blender-add-menu";

addMenu.innerHTML = `
    <div class="add-menu-title">
        Add
    </div>

    <button data-add="cube">
        <span>Mesh</span>
        Cube
    </button>

    <button data-add="sphere">
        <span>Mesh</span>
        UV Sphere
    </button>

    <button data-add="cylinder">
        <span>Mesh</span>
        Cylinder
    </button>

    <button data-add="cone">
        <span>Mesh</span>
        Cone
    </button>

    <button data-add="torus">
        <span>Mesh</span>
        Torus
    </button>

    <button data-add="monkey">
        <span>Mesh</span>
        Monkey
    </button>

    <div class="add-menu-footer">
        Shift + A
    </div>
`;

document.body.appendChild(addMenu);

// --------------------------------------------------
// OBJECT COUNTER
// --------------------------------------------------

const counter =
    document.createElement("div");

counter.id = "object-counter";

document.body.appendChild(counter);

function updateObjectCounter() {

    counter.textContent =
        `${userObjectCount} / ${MAX_USER_OBJECTS}`;
}

updateObjectCounter();

// --------------------------------------------------
// STATUS MESSAGE
// --------------------------------------------------

const statusMessage =
    document.createElement("div");

statusMessage.id = "blender-status";

document.body.appendChild(
    statusMessage
);

let statusTimeout;

function showStatus(message) {

    statusMessage.textContent = message;

    statusMessage.classList.add(
        "visible"
    );

    clearTimeout(statusTimeout);

    statusTimeout =
        setTimeout(() => {

            statusMessage.classList.remove(
                "visible"
            );

        }, 1800);
}

// --------------------------------------------------
// ADD NEW OBJECT
// --------------------------------------------------

function addNewObject(type) {

    if (
        userObjectCount >=
        MAX_USER_OBJECTS
    ) {

        showStatus(
            "Object limit reached"
        );

        return;
    }

    let object = null;

    if (type === "cube") {
        object = createCube();
    }

    if (type === "sphere") {
        object = createSphere();
    }

    if (type === "cylinder") {
        object = createCylinder();
    }

    if (type === "cone") {
        object = createCone();
    }

    if (type === "torus") {
        object = createTorus();
    }

    if (type === "monkey") {
        object = createMonkey();
    }

    closeAddMenu();

    if (object) {

        selectObject(object);

        showStatus(
            `${type} added`
        );
    }
}

// --------------------------------------------------
// ADD MENU CONTROLS
// --------------------------------------------------

function openAddMenu() {

    addMenu.classList.add(
        "visible"
    );
}

function closeAddMenu() {

    addMenu.classList.remove(
        "visible"
    );
}

addMenu
    .querySelectorAll("button")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                addNewObject(
                    button.dataset.add
                );
            }
        );
    });

// --------------------------------------------------
// SELECTION
// --------------------------------------------------

const raycaster =
    new THREE.Raycaster();

const pointer =
    new THREE.Vector2();

function clearSelection() {

    if (!selectedObject) {
        return;
    }

    selectedObject.mesh.traverse(
        (child) => {

            if (
                child.isMesh &&
                child.material &&
                child.material.emissive
            ) {

                child.material.emissive.set(
                    0x000000
                );
            }
        }
    );

    selectedObject = null;
}

function selectObject(object) {

    clearSelection();

    selectedObject = object;

    object.mesh.traverse(
        (child) => {

            if (
                child.isMesh &&
                child.material &&
                child.material.emissive
            ) {

                child.material.emissive.set(
                    0x4a2100
                );
            }
        }
    );
}

canvas.addEventListener(
    "pointerdown",
    (event) => {

        pointer.x =
            (event.clientX /
                window.innerWidth) *
                2 -
            1;

        pointer.y =
            -(event.clientY /
                window.innerHeight) *
                2 +
            1;

        raycaster.setFromCamera(
            pointer,
            camera
        );

        const meshes = [];

        for (const object of objects) {

            object.mesh.traverse(
                (child) => {

                    if (child.isMesh) {
                        meshes.push(child);
                    }
                }
            );
        }

        const hits =
            raycaster.intersectObjects(
                meshes,
                false
            );

        if (hits.length === 0) {
            clearSelection();
            return;
        }

        const object =
            hits[0]
                .object
                .userData
                .physicsObject;

        if (object) {
            selectObject(object);
        }
    }
);

// --------------------------------------------------
// DELETE
// --------------------------------------------------

function deleteSelected() {

    if (!selectedObject) {
        return;
    }

    const index =
        objects.indexOf(
            selectedObject
        );

    if (index === -1) {
        return;
    }

    scene.remove(
        selectedObject.mesh
    );

    world.removeBody(
        selectedObject.body
    );

    if (
        selectedObject.userAdded
    ) {

        userObjectCount--;

        updateObjectCounter();
    }

    objects.splice(
        index,
        1
    );

    selectedObject = null;

    showStatus(
        "Object deleted"
    );
}

// --------------------------------------------------
// DUPLICATE
// --------------------------------------------------

function duplicateSelected() {

    if (!selectedObject) {
        return;
    }

    if (
        userObjectCount >=
        MAX_USER_OBJECTS
    ) {

        showStatus(
            "Object limit reached"
        );

        return;
    }

    const position =
        selectedObject.mesh.position
            .clone();

    position.y += 2;

    createCube(
        position,
        true
    );

    showStatus(
        "Object duplicated"
    );
}

// --------------------------------------------------
// KEYBOARD SHORTCUTS
// --------------------------------------------------

window.addEventListener(
    "keydown",
    (event) => {

        // Shift + A
        if (
            event.shiftKey &&
            event.code === "KeyA"
        ) {

            event.preventDefault();

            if (
                addMenu.classList
                    .contains("visible")
            ) {

                closeAddMenu();

            } else {

                openAddMenu();
            }

            return;
        }

        // Escape
        if (
            event.code === "Escape"
        ) {

            closeAddMenu();
            clearSelection();

            return;
        }

        // Delete / X
        if (
            event.code === "Delete" ||
            event.code === "KeyX"
        ) {

            if (selectedObject) {

                event.preventDefault();

                deleteSelected();
            }

            return;
        }

        // Shift + D
        if (
            event.shiftKey &&
            event.code === "KeyD"
        ) {

            event.preventDefault();

            duplicateSelected();

            return;
        }
    }
);

// --------------------------------------------------
// CAMERA CONTROLS
// --------------------------------------------------

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );

controls.enableDamping = true;

controls.dampingFactor = 0.05;

controls.target.set(
    2.5,
    2,
    0
);

controls.minDistance = 5;

controls.maxDistance = 18;

controls.maxPolarAngle =
    Math.PI / 2.05;

// --------------------------------------------------
// ANIMATION
// --------------------------------------------------

const clock =
    new THREE.Clock();

function animate() {

    requestAnimationFrame(
        animate
    );

    const deltaTime =
        Math.min(
            clock.getDelta(),
            0.1
        );

    world.step(
        1 / 60,
        deltaTime,
        3
    );

    for (
        const object
        of objects
    ) {

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

// --------------------------------------------------
// RESIZE
// --------------------------------------------------

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
