import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { ConvexGeometry } from "three/addons/geometries/ConvexGeometry.js";

import * as CANNON from
    "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";


// --------------------------------------------------
// SETTINGS
// --------------------------------------------------

const MAX_USER_OBJECTS = 20;
const GRID_SIZE = 40;

let userObjectCount = 0;
let selectedObject = null;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;


// --------------------------------------------------
// THREE.JS
// --------------------------------------------------

const canvas = document.querySelector("#three-canvas");

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x0b0b0c);


const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(
    8,
    5,
    10
);


const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);

renderer.shadowMap.enabled = true;

renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;


// --------------------------------------------------
// LIGHTING
// --------------------------------------------------

const ambientLight =
    new THREE.AmbientLight(
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
// BLENDER GRID
// --------------------------------------------------

const grid = new THREE.GridHelper(
    GRID_SIZE,
    GRID_SIZE,
    0x555555,
    0x222222
);

scene.add(grid);


// --------------------------------------------------
// PHYSICS WORLD
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


const physicsMaterial =
    new CANNON.Material(
        "objects"
    );


const contactMaterial =
    new CANNON.ContactMaterial(
        physicsMaterial,
        physicsMaterial,
        {
            friction: 0.45,
            restitution: 0.25
        }
    );

world.addContactMaterial(
    contactMaterial
);


// --------------------------------------------------
// GROUND
// --------------------------------------------------

const groundBody =
    new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: physicsMaterial
    });

groundBody.addShape(
    new CANNON.Plane()
);

groundBody.quaternion.setFromEuler(
    -Math.PI / 2,
    0,
    0
);

world.addBody(
    groundBody
);


// --------------------------------------------------
// INVISIBLE EDGE WALLS
// --------------------------------------------------

function createInvisibleWall(
    halfExtents,
    position
) {

    const shape =
        new CANNON.Box(
            halfExtents
        );

    const body =
        new CANNON.Body({
            type: CANNON.Body.STATIC,
            material: physicsMaterial,
            position: position
        });

    body.addShape(shape);

    world.addBody(body);
}


const edge =
    GRID_SIZE / 2;

const wallThickness = 0.35;
const wallHeight = 12;


// Left
createInvisibleWall(

    new CANNON.Vec3(
        wallThickness,
        wallHeight / 2,
        edge
    ),

    new CANNON.Vec3(
        -edge,
        wallHeight / 2,
        0
    )
);


// Right
createInvisibleWall(

    new CANNON.Vec3(
        wallThickness,
        wallHeight / 2,
        edge
    ),

    new CANNON.Vec3(
        edge,
        wallHeight / 2,
        0
    )
);


// Back
createInvisibleWall(

    new CANNON.Vec3(
        edge,
        wallHeight / 2,
        wallThickness
    ),

    new CANNON.Vec3(
        0,
        wallHeight / 2,
        -edge
    )
);


// Front
createInvisibleWall(

    new CANNON.Vec3(
        edge,
        wallHeight / 2,
        wallThickness
    ),

    new CANNON.Vec3(
        0,
        wallHeight / 2,
        edge
    )
);


// --------------------------------------------------
// MATERIALS
// --------------------------------------------------

function createMaterial(color) {

    return new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.45,
        metalness: 0.05,
        side: THREE.DoubleSide
    });
}


const orangeMaterial =
    createMaterial(
        0xf57c00
    );

const lightMaterial =
    createMaterial(
        0xd8d8d2
    );

const darkMaterial =
    createMaterial(
        0x303236
    );


// --------------------------------------------------
// OBJECT STORAGE
// --------------------------------------------------

const objects = [];


// --------------------------------------------------
// RANDOM SPAWN LOCATION
// --------------------------------------------------

function getSpawnPosition() {

    return new THREE.Vector3(

        2 + Math.random() * 3,

        8 + Math.random() * 5,

        -2 + Math.random() * 4
    );
}


// --------------------------------------------------
// REGISTER PHYSICS OBJECT
// --------------------------------------------------

function registerObject(
    mesh,
    body,
    type,
    userAdded = true,
    colliderVisual = null
) {

    mesh.traverse((child) => {

        if (child.isMesh) {

            child.castShadow = true;
            child.receiveShadow = true;
        }
    });


    scene.add(mesh);

    world.addBody(body);


    const object = {
        mesh: mesh,
        body: body,
        type: type,
        userAdded: userAdded,
        colliderVisual: colliderVisual
    };


    mesh.traverse((child) => {

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
// CUBE
// --------------------------------------------------

function createCube(
    position = getSpawnPosition(),
    userAdded = true
) {

    const size = 1.4;


    const mesh =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                size,
                size,
                size
            ),

            orangeMaterial.clone()
        );


    mesh.position.copy(position);


    const body =
        new CANNON.Body({
            mass: 1,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    body.addShape(

        new CANNON.Box(
            new CANNON.Vec3(
                size / 2,
                size / 2,
                size / 2
            )
        )
    );


    return registerObject(
        mesh,
        body,
        "cube",
        userAdded
    );
}


// --------------------------------------------------
// PLANE
// --------------------------------------------------

function createPlane(
    position = getSpawnPosition(),
    userAdded = true
) {

    const mesh =
        new THREE.Mesh(

            new THREE.PlaneGeometry(
                2,
                2
            ),

            lightMaterial.clone()
        );


    mesh.rotation.x =
        -Math.PI / 2;

    mesh.position.copy(position);


    const body =
        new CANNON.Body({
            mass: 0.4,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    body.addShape(

        new CANNON.Box(
            new CANNON.Vec3(
                1,
                0.04,
                1
            )
        )
    );


    return registerObject(
        mesh,
        body,
        "plane",
        userAdded
    );
}


// --------------------------------------------------
// CIRCLE
// --------------------------------------------------

function createCircle(
    position = getSpawnPosition(),
    userAdded = true
) {

    const mesh =
        new THREE.Mesh(

            new THREE.CircleGeometry(
                1,
                32
            ),

            orangeMaterial.clone()
        );


    mesh.rotation.x =
        -Math.PI / 2;

    mesh.position.copy(position);


    const body =
        new CANNON.Body({
            mass: 0.5,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    body.addShape(

        new CANNON.Cylinder(
            1,
            1,
            0.08,
            24
        )
    );


    return registerObject(
        mesh,
        body,
        "circle",
        userAdded
    );
}


// --------------------------------------------------
// UV SPHERE
// --------------------------------------------------

function createSphere(
    position = getSpawnPosition(),
    userAdded = true
) {

    const radius = 0.8;


    const mesh =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                radius,
                32,
                32
            ),

            lightMaterial.clone()
        );


    mesh.position.copy(position);


    const body =
        new CANNON.Body({
            mass: 1,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    body.addShape(

        new CANNON.Sphere(
            radius
        )
    );


    return registerObject(
        mesh,
        body,
        "sphere",
        userAdded
    );
}


// --------------------------------------------------
// ICOSPHERE
// --------------------------------------------------

function createIcosphere(
    position = getSpawnPosition(),
    userAdded = true
) {

    const radius = 0.8;


    const mesh =
        new THREE.Mesh(

            new THREE.IcosahedronGeometry(
                radius,
                2
            ),

            orangeMaterial.clone()
        );


    mesh.position.copy(position);


    const body =
        new CANNON.Body({
            mass: 1,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    body.addShape(

        new CANNON.Sphere(
            radius
        )
    );


    return registerObject(
        mesh,
        body,
        "icosphere",
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


    const mesh =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                radius,
                radius,
                height,
                32
            ),

            darkMaterial.clone()
        );


    mesh.position.copy(position);


    const body =
        new CANNON.Body({
            mass: 1,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    body.addShape(

        new CANNON.Cylinder(
            radius,
            radius,
            height,
            20
        )
    );


    return registerObject(
        mesh,
        body,
        "cylinder",
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

    const mesh =
        new THREE.Mesh(

            new THREE.ConeGeometry(
                0.8,
                1.8,
                32
            ),

            orangeMaterial.clone()
        );


    mesh.position.copy(position);


    const body =
        new CANNON.Body({
            mass: 1,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    body.addShape(

        new CANNON.Cylinder(
            0.15,
            0.8,
            1.8,
            20
        )
    );


    return registerObject(
        mesh,
        body,
        "cone",
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

    const majorRadius = 0.8;
    const tubeRadius = 0.24;


    const mesh =
        new THREE.Mesh(

            new THREE.TorusGeometry(
                majorRadius,
                tubeRadius,
                20,
                40
            ),

            lightMaterial.clone()
        );


    mesh.position.copy(position);


    const body =
        new CANNON.Body({
            mass: 1,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    // Compound collider around the ring

    const segments = 12;

    for (
        let i = 0;
        i < segments;
        i++
    ) {

        const angle =
            (i / segments) *
            Math.PI *
            2;


        body.addShape(

            new CANNON.Sphere(
                tubeRadius
            ),

            new CANNON.Vec3(

                Math.cos(angle) *
                majorRadius,

                Math.sin(angle) *
                majorRadius,

                0
            )
        );
    }


    return registerObject(
        mesh,
        body,
        "torus",
        userAdded
    );
}


// --------------------------------------------------
// GRID OBJECT
// --------------------------------------------------

function createGridObject(
    position = getSpawnPosition(),
    userAdded = true
) {

    const geometry =
        new THREE.PlaneGeometry(
            2,
            2,
            5,
            5
        );


    const material =
        new THREE.MeshBasicMaterial({
            color: 0xd8d8d2,
            wireframe: true,
            side: THREE.DoubleSide
        });


    const mesh =
        new THREE.Mesh(
            geometry,
            material
        );


    mesh.rotation.x =
        -Math.PI / 2;

    mesh.position.copy(position);


    const body =
        new CANNON.Body({
            mass: 0.4,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    body.addShape(

        new CANNON.Box(
            new CANNON.Vec3(
                1,
                0.04,
                1
            )
        )
    );


    return registerObject(
        mesh,
        body,
        "grid",
        userAdded
    );
}


// --------------------------------------------------
// SUZANNE
// --------------------------------------------------

let suzanneGeometry = null;
let suzanneHullGeometry = null;
let suzanneCollisionShape = null;

const gltfLoader =
    new GLTFLoader();


const SUZANNE_URL =
    "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Suzanne/glTF/Suzanne.gltf";


function geometryToConvexShape(
    geometry
) {

    const position =
        geometry.attributes.position;


    const vertexMap =
        new Map();

    const vertices = [];

    const faces = [];


    function getVertexIndex(
        x,
        y,
        z
    ) {

        const key =
            `${x.toFixed(5)},${y.toFixed(5)},${z.toFixed(5)}`;


        if (
            vertexMap.has(key)
        ) {

            return vertexMap.get(key);
        }


        const index =
            vertices.length;


        vertices.push(

            new CANNON.Vec3(
                x,
                y,
                z
            )
        );


        vertexMap.set(
            key,
            index
        );


        return index;
    }


    for (
        let i = 0;
        i < position.count;
        i += 3
    ) {

        const face = [];


        for (
            let j = 0;
            j < 3;
            j++
        ) {

            face.push(

                getVertexIndex(

                    position.getX(
                        i + j
                    ),

                    position.getY(
                        i + j
                    ),

                    position.getZ(
                        i + j
                    )
                )
            );
        }


        faces.push(face);
    }


    return new CANNON.ConvexPolyhedron({
        vertices: vertices,
        faces: faces
    });
}


gltfLoader.load(

    SUZANNE_URL,

    (gltf) => {

        let sourceMesh = null;


        gltf.scene.traverse(
            (child) => {

                if (
                    child.isMesh &&
                    !sourceMesh
                ) {

                    sourceMesh =
                        child;
                }
            }
        );


        if (!sourceMesh) {

            console.error(
                "Suzanne mesh not found."
            );

            return;
        }


        let geometry =
            sourceMesh.geometry.clone();


        geometry.scale(
            0.75,
            0.75,
            0.75
        );


        geometry.center();

        geometry.computeVertexNormals();


        suzanneGeometry =
            geometry;


        // Remove duplicate exported vertices
        // before calculating the convex hull.

        const position =
            geometry.attributes.position;

        const unique = new Map();


        for (
            let i = 0;
            i < position.count;
            i++
        ) {

            const x =
                position.getX(i);

            const y =
                position.getY(i);

            const z =
                position.getZ(i);


            const key =
                `${x.toFixed(4)},${y.toFixed(4)},${z.toFixed(4)}`;


            if (
                !unique.has(key)
            ) {

                unique.set(

                    key,

                    new THREE.Vector3(
                        x,
                        y,
                        z
                    )
                );
            }
        }


        let points =
            Array.from(
                unique.values()
            );


        // Keeps browser performance reasonable.

        if (
            points.length > 1500
        ) {

            const step =
                Math.ceil(
                    points.length /
                    1500
                );


            points =
                points.filter(
                    (_, index) =>
                        index % step === 0
                );
        }


        suzanneHullGeometry =
            new ConvexGeometry(
                points
            );


        suzanneCollisionShape =
            geometryToConvexShape(
                suzanneHullGeometry
            );


        console.log(
            "Suzanne ready."
        );
    },

    undefined,

    (error) => {

        console.error(
            "Suzanne failed to load:",
            error
        );
    }
);


// --------------------------------------------------
// CREATE SUZANNE
// --------------------------------------------------

function createMonkey(
    position = getSpawnPosition(),
    userAdded = true
) {

    if (
        !suzanneGeometry ||
        !suzanneCollisionShape
    ) {

        showStatus(
            "Suzanne is still loading..."
        );

        return null;
    }


    const group =
        new THREE.Group();


    const monkey =
        new THREE.Mesh(

            suzanneGeometry.clone(),

            orangeMaterial.clone()
        );


    group.add(monkey);


    // Visible collision mesh outline

    const wireframe =
        new THREE.LineSegments(

            new THREE.WireframeGeometry(
                suzanneHullGeometry
            ),

            new THREE.LineBasicMaterial({
                color: 0xffa033,
                transparent: true,
                opacity: 0.28
            })
        );


    group.add(wireframe);


    group.position.copy(
        position
    );


    const body =
        new CANNON.Body({
            mass: 1.2,
            material: physicsMaterial,
            position: new CANNON.Vec3(
                position.x,
                position.y,
                position.z
            )
        });


    // Actual mesh-shaped convex collision hull,
    // rather than the old sphere collider.

    body.addShape(
        suzanneCollisionShape
    );


    return registerObject(
        group,
        body,
        "monkey",
        userAdded,
        wireframe
    );
}


// --------------------------------------------------
// CREATE BY TYPE
// --------------------------------------------------

function createByType(
    type,
    position = getSpawnPosition(),
    userAdded = true
) {

    if (type === "plane") {

        return createPlane(
            position,
            userAdded
        );
    }


    if (type === "cube") {

        return createCube(
            position,
            userAdded
        );
    }


    if (type === "circle") {

        return createCircle(
            position,
            userAdded
        );
    }


    if (type === "sphere") {

        return createSphere(
            position,
            userAdded
        );
    }


    if (type === "icosphere") {

        return createIcosphere(
            position,
            userAdded
        );
    }


    if (type === "cylinder") {

        return createCylinder(
            position,
            userAdded
        );
    }


    if (type === "cone") {

        return createCone(
            position,
            userAdded
        );
    }


    if (type === "torus") {

        return createTorus(
            position,
            userAdded
        );
    }


    if (type === "grid") {

        return createGridObject(
            position,
            userAdded
        );
    }


    if (type === "monkey") {

        return createMonkey(
            position,
            userAdded
        );
    }


    return null;
}


// --------------------------------------------------
// INITIAL OBJECTS
// --------------------------------------------------

createCube(
    new THREE.Vector3(
        2,
        8,
        0
    ),
    false
);


createSphere(
    new THREE.Vector3(
        4,
        11,
        0
    ),
    false
);


createCylinder(
    new THREE.Vector3(
        3,
        14,
        -1
    ),
    false
);


createCone(
    new THREE.Vector3(
        5,
        17,
        1
    ),
    false
);


// --------------------------------------------------
// STATUS MESSAGE
// --------------------------------------------------

const statusMessage =
    document.createElement(
        "div"
    );

statusMessage.id =
    "blender-status";

document.body.appendChild(
    statusMessage
);


let statusTimeout;


function showStatus(message) {

    statusMessage.textContent =
        message;


    statusMessage.classList.add(
        "visible"
    );


    clearTimeout(
        statusTimeout
    );


    statusTimeout =
        setTimeout(
            () => {

                statusMessage
                    .classList
                    .remove(
                        "visible"
                    );

            },
            1800
        );
}


// --------------------------------------------------
// OBJECT COUNTER
// --------------------------------------------------

const counter =
    document.createElement(
        "div"
    );

counter.id =
    "object-counter";

document.body.appendChild(
    counter
);


function updateObjectCounter() {

    counter.textContent =
        `${userObjectCount} / ${MAX_USER_OBJECTS}`;
}


updateObjectCounter();


// --------------------------------------------------
// BLENDER ADD MENU
// --------------------------------------------------

const addMenu =
    document.createElement(
        "div"
    );

addMenu.id =
    "blender-add-menu";


addMenu.innerHTML = `

    <div class="blender-menu-title">
        Add
    </div>

    <div class="blender-menu-item blender-has-submenu">

        <span>Mesh</span>
        <span class="menu-arrow">›</span>

        <div class="blender-submenu">

            <button data-add="plane">
                Plane
            </button>

            <button data-add="cube">
                Cube
            </button>

            <button data-add="circle">
                Circle
            </button>

            <button data-add="sphere">
                UV Sphere
            </button>

            <button data-add="icosphere">
                Icosphere
            </button>

            <button data-add="cylinder">
                Cylinder
            </button>

            <button data-add="cone">
                Cone
            </button>

            <button data-add="torus">
                Torus
            </button>

            <div class="menu-separator"></div>

            <button data-add="grid">
                Grid
            </button>

            <button data-add="monkey">
                Monkey
            </button>

        </div>

    </div>

`;


// --------------------------------------------------
// ADD OBJECT
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


    const object =
        createByType(type);


    if (!object) {

        return;
    }


    closeAddMenu();

    selectObject(
        object
    );


    showStatus(
        `${type} added`
    );
}


// --------------------------------------------------
// MENU BUTTONS
// --------------------------------------------------

addMenu
    .querySelectorAll(
        "button[data-add]"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();


                    addNewObject(
                        button.dataset.add
                    );
                }
            );
        }
    );


// --------------------------------------------------
// TRACK POINTER
// --------------------------------------------------

window.addEventListener(
    "pointermove",
    (event) => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;
    }
);


// --------------------------------------------------
// MENU OPEN / CLOSE
// --------------------------------------------------

function openAddMenu() {

    const menuWidth = 230;
    const menuHeight = 500;


    let x = mouseX;
    let y = mouseY;


    if (
        x + menuWidth >
        window.innerWidth
    ) {

        x =
            window.innerWidth -
            menuWidth -
            10;
    }


    if (
        y + menuHeight >
        window.innerHeight
    ) {

        y =
            window.innerHeight -
            menuHeight -
            10;
    }


    addMenu.style.left =
        `${Math.max(10, x)}px`;

    addMenu.style.top =
        `${Math.max(10, y)}px`;


    addMenu.classList.add(
        "visible"
    );
}


function closeAddMenu() {

    addMenu.classList.remove(
        "visible"
    );
}


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


    if (
        selectedObject.colliderVisual
    ) {

        selectedObject
            .colliderVisual
            .material
            .opacity =
            0.28;
    }


    selectedObject = null;
}


function selectObject(object) {

    clearSelection();


    selectedObject =
        object;


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


    if (
        object.colliderVisual
    ) {

        object
            .colliderVisual
            .material
            .opacity =
            0.9;
    }
}


// --------------------------------------------------
// CLICK SELECTION
// --------------------------------------------------

canvas.addEventListener(
    "pointerdown",
    (event) => {

        pointer.x =
            (
                event.clientX /
                window.innerWidth
            ) *
            2 -
            1;


        pointer.y =
            -(
                event.clientY /
                window.innerHeight
            ) *
            2 +
            1;


        raycaster.setFromCamera(
            pointer,
            camera
        );


        const meshes = [];


        for (
            const object
            of objects
        ) {

            object.mesh.traverse(
                (child) => {

                    if (child.isMesh) {

                        meshes.push(
                            child
                        );
                    }
                }
            );
        }


        const hits =
            raycaster.intersectObjects(
                meshes,
                false
            );


        if (
            hits.length === 0
        ) {

            clearSelection();

            return;
        }


        const object =
            hits[0]
                .object
                .userData
                .physicsObject;


        if (object) {

            selectObject(
                object
            );
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


    if (
        index === -1
    ) {

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
        selectedObject
            .mesh
            .position
            .clone();


    position.y += 2;


    const duplicate =
        createByType(
            selectedObject.type,
            position,
            true
        );


    if (duplicate) {

        selectObject(
            duplicate
        );

        showStatus(
            "Object duplicated"
        );
    }
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
                addMenu.classList.contains(
                    "visible"
                )
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
// CLICK ELSEWHERE CLOSES MENU
// --------------------------------------------------

document.addEventListener(
    "pointerdown",
    (event) => {

        if (
            !addMenu.contains(
                event.target
            )
        ) {

            closeAddMenu();
        }
    }
);


// --------------------------------------------------
// ORBIT CONTROLS
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


// IMPORTANT:
// Mouse wheel no longer zooms.
// It scrolls the website normally.

controls.enableZoom = false

// Never let OrbitControls capture the mouse wheel.
// The wheel should scroll the webpage instead.

canvas.addEventListener(
    "wheel",
    (event) => {
        event.stopImmediatePropagation();
    },
    {
        capture: true,
        passive: true
    }
);


controls.minDistance = 5;
controls.maxDistance = 18;


controls.maxPolarAngle =
    Math.PI / 2.05;


// --------------------------------------------------
// NEXT SECTION BUTTON
// --------------------------------------------------

const hero =
    document.querySelector(
        ".hero"
    );


const nextButton =
    document.createElement(
        "a"
    );


nextButton.id =
    "next-section-button";

nextButton.href =
    "#about";


nextButton.innerHTML = `

    <span>
        NEXT
    </span>

    <strong>
        ↓
    </strong>

`;


hero.appendChild(
    nextButton
);


// --------------------------------------------------
// VIEWPORT HINT
// --------------------------------------------------

const viewportLabel =
    document.querySelector(
        ".viewport-label"
    );


if (viewportLabel) {

    viewportLabel.innerHTML = `

        <span>
            INTERACTIVE VIEWPORT
        </span>

        <span>
            DRAG TO ORBIT · SHIFT + A TO ADD
        </span>

    `;
}


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
