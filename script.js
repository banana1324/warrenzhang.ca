import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("#three-canvas");

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d0d0d);

// Camera
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(6, 4, 7);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(4, 6, 5);
scene.add(directionalLight);

// Cube
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);

const cubeMaterial = new THREE.MeshStandardMaterial({
    color: 0xff6b00,
    roughness: 0.4,
    metalness: 0.1
});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.y = 1.2;

scene.add(cube);

// Ground grid
const grid = new THREE.GridHelper(
    30,
    30,
    0x555555,
    0x242424
);

scene.add(grid);

// Camera controls
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.target.set(0, 1, 0);

controls.minDistance = 4;
controls.maxDistance = 15;

controls.maxPolarAngle = Math.PI / 2.05;

// Animation
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.y += 0.003;

    controls.update();

    renderer.render(scene, camera);
}

animate();

// Resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});
