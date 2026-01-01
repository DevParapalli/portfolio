"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { shaders } from "@/lib/shaders";

interface WaveBackgroundProps {
    className?: string;
}

export default function WaveBackground({ className }: WaveBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Setup
        const container = containerRef.current;
        const renderer = new THREE.WebGLRenderer({
            powerPreference: "high-performance",
            antialias: true,
            alpha: true,
        });

        // Size to container
        const width = container.clientWidth;
        const height = container.clientHeight;

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();

        // Camera setup - adjusted for fullscreen to look similar to the card view
        // The original expected ~300px width. For fullscreen we need to cover more area.
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        // camera.position.z = 250; // Adjusted z-position for better view of the wave

        // Colors - Purple scheme (Index 2 from original)
        // Sending 0-255 values because the shader divides by 255
        const low = new THREE.Vector3(43, 75, 235);
        const high = new THREE.Vector3(213, 51, 248);

        console.log("WaveBackground mounting");
        console.log("Shader length fragment:", shaders.fullFragment?.length);

        // Geometry
        // Increased size to cover screen. 600x600 might be too small for fullscreen.
        const geometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);

        // Uniforms
        const uniforms = {
            u_lowColor: { type: "v3", value: low },
            u_highColor: { type: "v3", value: high },
            u_time: { type: "f", value: 0 },
            u_height: { type: "f", value: 1 }, // Default height
            u_rand: { type: "f", value: new THREE.Vector2(randomInteger(6, 10), randomInteger(8, 10)) }
        };

        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            fragmentShader: shaders.fullFragment,
            vertexShader: shaders.fullVertex,
            // side: THREE.DoubleSide
        });

        // DEBUG: Use basic material to verify visibility
        // const material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide, wireframe: true });

        const mesh = new THREE.Mesh(geometry, material);
        // Rotate to face camera better for a background effect
        // mesh.rotation.x = -Math.PI / 5;
        mesh.position.set(0, 0, -300);
        mesh.material.needsUpdate = true;
        scene.add(mesh);

        // Animation Loop
        let t = 0;
        let animationFrameId: number;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            uniforms.u_time.value = t;
            t += 0.02; // Slightly slower for background

            // Gentle movement of height
            uniforms.u_height.value = 0.5 + Math.sin(t * 0.5) * 0.2;

            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            if (!container) return;

            const w = container.clientWidth;
            const h = container.clientHeight;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();

            renderer.setSize(w, h);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
}

function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
