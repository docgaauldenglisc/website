// Code code code. look at my expert code.

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth /
    window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const circleGeometry = new THREE.CircleGeometry(1, 32);
const circleMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff});
const circle = new THREE.Mesh(circleGeometry, circleMaterial);
circle.translateX(3);
scene.add(circle);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const tgeometry = new THREE.TorusKnotGeometry( 1, 0.2, 64, 8); 
const tmaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } ); 
const torusKnot = new THREE.Mesh( tgeometry, tmaterial ); 
torusKnot.translateX(-3);
scene.add( torusKnot );

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    cube.rotation.z += 0.05;
    circle.rotation.x += 0.05;
    circle.rotation.y += 0.05;
    circle.rotation.z += 0.05;
    torusKnot.rotation.x += 0.05;
    torusKnot.rotation.y += 0.05;
    torusKnot.rotation.z += 0.05;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
