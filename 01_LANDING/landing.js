// 1. Data Model Configurations
const featuresData = [
    {
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`,
        title: "Cognitive Tracking (EEG)",
        desc: "Capture cognitive load and focus metrics to capture cognitive load and measure focus metrics."
    },
    {
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`,
        title: "AI Skill Evaluation",
        desc: "Machine learning analysis performance data in the performance data to analyze performance data."
    },
    {
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
        title: "Secure Digital Certification",
        desc: "Immutable digital credentials and hooks immutable digital credentials."
    }

    
];

const timelineSteps = [
    { name: "Register", icon: "assets/register.svg" },
    { name: "EEG Calibration", icon: "assets/eeg.svg" },
    { name: "Exam", icon: "assets/exam.svg" },
    { name: "AI Analysis", icon: "assets/ai.svg" },
    { name: "Certification", icon: "assets/cert.svg" }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Features Grid
    // 1. Inject Features Grid
    const featuresGrid = document.getElementById("features-grid");
    if (featuresGrid) {
        featuresGrid.innerHTML = "";
        featuresData.forEach((feat, index) => {
            const cardHTML = `
                <div class="glass-panel border border-white/5 rounded-2xl p-8 text-left hover:border-neonCyan/30 transition-all duration-300 group cursor-default animate-fade-in" style="animation-delay: ${index * 100}ms">
                    <div class="w-10 h-10 rounded-xl bg-neonCyan/10 border border-neonCyan/20 flex items-center justify-center text-neonCyan mb-6 group-hover:bg-neonCyan group-hover:text-cyberDark transition-all duration-300">
                        ${feat.icon}
                    </div>
                    <h3 class="text-lg font-bold text-white mb-3 tracking-wide">${feat.title}</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">${feat.desc}</p>
                </div>
            `;
            featuresGrid.insertAdjacentHTML("beforeend", cardHTML);
        });
    }

    // 2. Inject Timeline Structure
    const timelineContainer = document.getElementById("timeline-container");
    if (timelineContainer) {
        timelineContainer.innerHTML = "";

        const progressTrack = document.createElement("div");
        progressTrack.className = "absolute top-7 left-0 w-full h-[2px] bg-gradient-to-r from-neonCyan/20 via-neonCyan/50 to-neonCyan/20 hidden md:block z-0";
        timelineContainer.appendChild(progressTrack);

        const stepsWrapper = document.createElement("div");
        stepsWrapper.className = "grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10";

        timelineSteps.forEach(step => {
            const stepNode = document.createElement("div");
            stepNode.className = "flex flex-col items-center text-center group";
            
            // FIX: Use an <img> tag to render the SVG file from your assets folder
            stepNode.innerHTML = `
                <div class="w-14 h-14 bg-[#0a0c16] border border-neonCyan/30 rounded-full flex items-center justify-center text-lg text-neonCyan mb-4 shadow-[0_0_15px_rgba(0,242,254,0.1)] group-hover:scale-110 group-hover:border-neonCyan transition-all duration-300">
                    <img src="${step.icon}" alt="${step.name}" class="w-6 h-6" />
                </div>
                <span class="text-xs font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300">
                    ${step.name}
                </span>
            `;
            stepsWrapper.appendChild(stepNode);
        });
        timelineContainer.appendChild(stepsWrapper);
    }

    // 3. AGGRESSIVE SCREEN SIGNAL WAVE ENGINE (WITH LIGHT-SCATTER SHADOW)
    const shadowPathElement = document.getElementById("bg-wave-blue-shadow");
    const cyanPathElement = document.getElementById("bg-wave-cyan");
    const blueSecondaryPathElement = document.getElementById("bg-wave-blue-secondary");
    let animationTick = 0;

    function renderAggressiveWaves() {
        let shadowPath = "";
        let cyanPath = "";
        let blueSecondaryPath = "";
        
        const canvasWidth = 1400;
        const verticalCenter = 200; 
        const resolutionPoints = 100; 

        for (let i = 0; i <= resolutionPoints; i++) {
            const x = (i / resolutionPoints) * canvasWidth;

            const continuousVolume = Math.sin((i / resolutionPoints) * Math.PI);
            const edgeFlattener = Math.pow(continuousVolume, 0.35); 

            // --- 1. PRIMARY CYAN SIGNAL ---
            let cyanSineMix = Math.sin(i * 0.25 + animationTick * 0.14) * 45;
            let cyanSpikeMix = Math.cos(i * 0.65 - animationTick * 0.22) * Math.abs(Math.sin(i * 0.15)) * 125;
            let cyanPointedModifier = Math.abs(Math.sin(i * 0.4 + animationTick * 0.1)) * 30;
            
            let cyanY = verticalCenter + (cyanSineMix + cyanSpikeMix - cyanPointedModifier) * edgeFlattener;
            cyanPath += `${i === 0 ? 'M' : 'L'} ${x} ${cyanY}`;

            // --- 2. SUPER LIGHT BLUE SCATTERED SHADOW (Ambient background haze tracker) ---
            let shadowSineMix = Math.sin(i * 0.25 + (animationTick - 5) * 0.13) * 47;
            let shadowSpikeMix = Math.cos(i * 0.65 - (animationTick - 5) * 0.21) * Math.abs(Math.sin(i * 0.15)) * 120;
            let shadowPointedModifier = Math.abs(Math.sin(i * 0.4 + (animationTick - 5) * 0.1)) * 28;
            
            let shadowY = verticalCenter + 6 + (shadowSineMix + shadowSpikeMix - shadowPointedModifier) * edgeFlattener;
            shadowPath += `${i === 0 ? 'M' : 'L'} ${x} ${shadowY}`;

            // --- 3. SECONDARY INTERSECTING CYAN/BLUE SIGNAL (Replaced original Purple math layout) ---
            let blueAltSineMix = Math.sin(i * 0.18 - animationTick * 0.09) * 55;
            let blueAltSpikeMix = Math.sin(i * 0.52 + animationTick * 0.18) * Math.cos(i * 0.12) * 95;
            let blueAltPointedModifier = Math.abs(Math.cos(i * 0.35 - animationTick * 0.15)) * 25;

            let blueSecondaryY = verticalCenter + (blueAltSineMix + blueAltSpikeMix + blueAltPointedModifier) * edgeFlattener;
            blueSecondaryPath += `${i === 0 ? 'M' : 'L'} ${x} ${blueSecondaryY}`;
        }

        if (shadowPathElement) shadowPathElement.setAttribute("d", shadowPath);
        if (cyanPathElement) cyanPathElement.setAttribute("d", cyanPath);
        if (blueSecondaryPathElement) blueSecondaryPathElement.setAttribute("d", blueSecondaryPath);

        animationTick++;
        requestAnimationFrame(renderAggressiveWaves);
    }

    if (shadowPathElement || cyanPathElement || blueSecondaryPathElement) {
        renderAggressiveWaves();
    }
});