import { useEffect, useRef } from "react";
import * as THREE from "three";

const DeveloperCharacter = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ff88, 0.5);
    pointLight.position.set(-5, 3, 2);
    scene.add(pointLight);

    // Create Developer Character
    const character = new THREE.Group();

    // Head
    const headGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb8a3,
      roughness: 0.4,
      metalness: 0.1,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.2;
    character.add(head);

    // Eyes with glow effect
    const eyeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      emissive: 0x00ff88,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.8,
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, 1.35, 0.35);
    character.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 1.35, 0.35);
    character.add(rightEye);

    // Body with gradient shirt
    const bodyGeometry = new THREE.CapsuleGeometry(0.3, 0.8, 16, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1f3a,
      roughness: 0.5,
      metalness: 0.2,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.5;
    character.add(body);

    // Code accent on chest
    const codeAccent = new THREE.Group();
    const codeGeometry = new THREE.PlaneGeometry(0.25, 0.4);
    const codeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      emissive: 0x00ff88,
      emissiveIntensity: 0.3,
      roughness: 0.8,
    });
    const codeMesh = new THREE.Mesh(codeGeometry, codeMaterial);
    codeMesh.position.z = 0.31;
    codeAccent.position.y = 0.7;
    codeAccent.add(codeMesh);
    character.add(codeAccent);

    // Arms
    const armGeometry = new THREE.CapsuleGeometry(0.1, 0.6, 8, 16);
    const armMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb8a3,
      roughness: 0.4,
      metalness: 0.1,
    });

    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.5, 0.8, 0);
    leftArm.rotation.z = 0.3;
    character.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.5, 0.8, 0);
    rightArm.rotation.z = -0.3;
    character.add(rightArm);

    // Laptop (right hand)
    const laptopGroup = new THREE.Group();
    
    const laptopBodyGeometry = new THREE.BoxGeometry(0.6, 0.4, 0.1);
    const laptopBodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.3,
      metalness: 0.7,
    });
    const laptopBody = new THREE.Mesh(laptopBodyGeometry, laptopBodyMaterial);
    laptopBody.position.y = -0.15;
    laptopGroup.add(laptopBody);

    // Laptop screen
    const screenGeometry = new THREE.PlaneGeometry(0.5, 0.3);
    const screenMaterial = new THREE.MeshStandardMaterial({
      color: 0x0d1117,
      emissive: 0x1f6feb,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.3,
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0.05, 0.08);
    screen.rotation.x = -0.3;
    laptopGroup.add(screen);

    laptopGroup.position.set(0.8, 0.3, 0);
    laptopGroup.rotation.z = -0.2;
    character.add(laptopGroup);

    // Headphones
    const headphoneGroup = new THREE.Group();
    
    const headbandGeometry = new THREE.TorusGeometry(0.35, 0.05, 16, 16);
    const headbandMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6b35,
      roughness: 0.4,
      metalness: 0.6,
    });
    const headband = new THREE.Mesh(headbandGeometry, headbandMaterial);
    headband.rotation.x = Math.PI / 2;
    headband.position.y = 0.15;
    headphoneGroup.add(headband);

    // Earcup
    const earcupGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const earcupMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6b35,
      roughness: 0.4,
      metalness: 0.6,
    });
    
    const leftEarcup = new THREE.Mesh(earcupGeometry, earcupMaterial);
    leftEarcup.position.set(-0.28, 1.15, 0);
    headphoneGroup.add(leftEarcup);

    const rightEarcup = new THREE.Mesh(earcupGeometry, earcupMaterial);
    rightEarcup.position.set(0.28, 1.15, 0);
    headphoneGroup.add(rightEarcup);

    character.add(headphoneGroup);

    scene.add(character);

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Floating animation
      character.position.y = Math.sin(Date.now() * 0.001) * 0.3;

      // Rotation animation
      character.rotation.y += 0.003;

      // Eye glow pulse
      const intensity = 0.5 + Math.sin(Date.now() * 0.003) * 0.3;
      eyeMaterial.emissiveIntensity = intensity;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default DeveloperCharacter;
