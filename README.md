<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Simple Three.js scene</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <style>
        body {
            margin: 0;
        }
        canvas {
            width: 100%;
            height: 100%;
        }
    </style>
    
</head>
<body>
    <script>
        //setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({antialias: true})
camera.position.z = 5

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//cube1
let geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
let material = new THREE.MeshStandardMaterial({color: 0xD7E046})
let cube1 = new THREE.Mesh(geometry, material)
cube1.position.set(-1, 0, 0)
scene.add(cube1)
renderer.render(scene, camera)

//cube2
let geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5)
let material2 = new THREE.MeshStandardMaterial({color: 0x194E6E})
let cube2 = new THREE.Mesh(geometry2, material2)
cube2.position.set(0, 0, 0)
scene.add(cube2)
renderer.render(scene, camera)

//cube3
let geometry3 = new THREE.BoxGeometry(0.5, 0.5, 0.5)
let material3 = new THREE.MeshStandardMaterial({color: 0x659D55})
let cube3 = new THREE.Mesh(geometry3, material3)
cube3.position.set(1, 0, 0)
scene.add(cube3)
renderer.render(scene, camera)


//lighting
let ambientLight = new THREE.AmbientLight(0x353C4F, 0.5)
scene.add(ambientLight)
let pointLight = new THREE.PointLight(0xF9F8D0, 1.5);
pointLight.position.set(25, 50, 25);
scene.add(pointLight)

//sphere
let geometry1 = new THREE.SphereGeometry(2, 10,10);
let material1 = new THREE.MeshBasicMaterial({color: "#B8F9AC", wireframe: true, transparent: true})
let wireframeCube = new THREE.Mesh(geometry1, material1)
scene.add(wireframeCube)

//animation
function animate() {
    requestAnimationFrame(animate)
    cube1.rotation.x += 0.04;
    cube1.rotation.y += 0.04;
    cube2.rotation.x -= 0.04;
    cube2.rotation.y -= 0.04;
    cube3.rotation.x -= 0.04;
    cube3.rotation.y -= 0.04;
    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.01;
    renderer.render(scene,camera)
}
animate()

    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/102/three.js"></script>
    <script src="main.js"></script>
</body>
</html>
