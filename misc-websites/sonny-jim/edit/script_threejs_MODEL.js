<!-- <script type="module">
		import * as THREE from './js/libraries/three/three.module.js';
		import { OBJLoader } from './js/libraries/three/examples/jsm/loaders/OBJLoader.js';

		let container;
		let camera, scene, renderer;
		let mouseX = 0, mouseY = 0;
		let windowHalfX = window.innerWidth / 2;
		let windowHalfY = window.innerHeight / 2;
		let balloon;

		init();
		animate();

		function init() {
			container = document.createElement('div');
			document.body.appendChild(container);

			//camera
			camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 2000);
			camera.position.z = 250;

			// scene
			scene = new THREE.Scene();

			//lights
			const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
			hemiLight.color.setHSL(0.6, 1, 0.6);
			hemiLight.groundColor.setHSL(0.095, 1, 0.75);
			hemiLight.position.set(0, 50, 0);
			scene.add(hemiLight);

			scene.add(camera);

			// load object
			function loadModel() {
				balloon.traverse(function (child) {
				});
				balloon.position.y = - 20;
				scene.add(balloon);
			}

			// manager
			const manager = new THREE.LoadingManager(loadModel);

			manager.onProgress = function (item, loaded, total) {
				console.log(item, loaded, total);
			};
			function onProgress(xhr) {
				if (xhr.lengthComputable) {
					const percentComplete = xhr.loaded / xhr.total * 100;
					console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');
				}
			}
			function onError() { }

			//object
			const loader = new OBJLoader(manager);
			loader.load('assets/3D/balloons.obj', function (obj) {
				balloon = obj;
			}, onProgress, onError);

			//renderer
			renderer = new THREE.WebGLRenderer();
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			container.appendChild(renderer.domElement);

			window.addEventListener('resize', onWindowResize);
		}

		//window resizing
		function onWindowResize() {
			windowHalfX = window.innerWidth / 2;
			windowHalfY = window.innerHeight / 2;

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		function animate() {
			requestAnimationFrame(animate);
			render();
		}

		function render() {
			camera.position.x += (mouseX - camera.position.x) * .02;
			camera.position.y += (- mouseY - camera.position.y) * .02;

			camera.lookAt(scene.position);

			renderer.render(scene, camera);
		}
	</script>-->