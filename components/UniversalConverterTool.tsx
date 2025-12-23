import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Loader2, ArrowRightLeft } from 'lucide-react';

const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>>_Eli-Convert</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=JetBrains+Mono:wght@700&display=swap');
        
        :root {
            --primary: #ff3a3a;
            --primary-dark: #cc0000;
            --glass-bg: rgba(30, 30, 30, 0.7);
            --glass-border: rgba(255, 58, 58, 0.3);
        }
        
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #050505;
            color: #f0f0f0;
            min-height: 100vh;
            margin: 0;
            padding: 1rem;
        }
        
        .glassmorphism {
            background: var(--glass-bg);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .converter-container {
            border-radius: 1.5rem;
            overflow: hidden;
            transition: all 0.5s ease;
        }
        
        input, select {
            background: rgba(30, 30, 30, 0.8);
            border: 1px solid rgba(255, 58, 58, 0.2);
            color: #f0f0f0;
            transition: all 0.3s ease;
            height: 50px;
            padding: 0.75rem;
        }
        
        input:focus, select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(255, 58, 58, 0.2);
        }
        
        .btn {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            height: 50px;
        }
        
        .btn:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transform: translateX(-100%);
            transition: 0.5s;
        }
        
        .btn:hover:after { transform: translateX(100%); }
        .btn:active { transform: scale(0.95); }
        
        .category-select select { appearance: none; }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(255, 58, 58, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(255, 58, 58, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 58, 58, 0); }
        }
        
        .pulse { animation: pulse 2s infinite; }
        .result-container { position: relative; }
        .result-glow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba(255, 58, 58, 0.2), transparent 70%);
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
            border-radius: 0.5rem;
        }
        .result-active .result-glow { opacity: 1; }
        
        .motivation-container {
            overflow: hidden;
            height: 60px;
            position: relative;
        }
        
        .motivation-text {
            position: absolute;
            width: 100%;
            text-align: center;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
        }
        
        .motivation-text.active { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body class="p-4 md:p-6">
    <div class="max-w-4xl mx-auto converter-container glassmorphism p-6 md:p-8">
        {/* Removido header interno para consistencia con el sitio */}
        
        <div class="category-select mb-8 max-w-md mx-auto">
            <label for="categorySelect" class="block text-gray-300 font-medium mb-2 uppercase text-xs tracking-widest opacity-60">Tipo de conversión:</label>
            <select id="categorySelect" class="w-full px-4 py-3 rounded-lg glassmorphism text-white">
                <option value="area">📏 Área</option>
                <option value="dataTransfer">📡 Tasa de Transferencia</option>
                <option value="digitalStorage">💾 Almacenamiento Digital</option>
                <option value="energy">⚡ Energía</option>
                <option value="frequency">🔄 Frecuencia</option>
                <option value="fuelEfficiency">⛽ Combustible</option>
                <option value="length">📏 Longitud</option>
                <option value="mass">⚖️ Masa</option>
                <option value="angle">📐 Ángulo Plano</option>
                <option value="pressure">🔍 Presión</option>
                <option value="speed">🚀 Velocidad</option>
                <option value="temperature">🌡️ Temperatura</option>
                <option value="time">⏱️ Tiempo</option>
                <option value="volume">🧪 Volumen</option>
            </select>
        </div>
        
        <div class="converter-interface">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="input-section p-5 glassmorphism rounded-xl">
                    <label for="inputValue" class="block text-gray-300 font-medium mb-2 uppercase text-[10px] tracking-widest">Valor:</label>
                    <input type="number" id="inputValue" class="w-full px-4 py-3 rounded-lg" value="1">
                    <label for="fromUnit" class="block text-gray-300 font-medium mt-4 mb-2 uppercase text-[10px] tracking-widest">De:</label>
                    <select id="fromUnit" class="w-full px-4 py-3 rounded-lg"></select>
                </div>
                <div class="output-section p-5 glassmorphism rounded-xl">
                    <div class="result-container" id="resultContainer">
                        <label for="result" class="block text-gray-300 font-medium mb-2 uppercase text-[10px] tracking-widest">Resultado:</label>
                        <input type="text" id="result" class="w-full px-4 py-3 rounded-lg border-agency-red" readonly>
                        <div class="result-glow"></div>
                    </div>
                    <label for="toUnit" class="block text-gray-300 font-medium mt-4 mb-2 uppercase text-[10px] tracking-widest">A:</label>
                    <select id="toUnit" class="w-full px-4 py-3 rounded-lg"></select>
                </div>
            </div>
            <div class="mt-8 text-center flex flex-col md:flex-row justify-center gap-4">
                <button id="convertBtn" class="btn px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors pulse uppercase tracking-widest text-xs">Convertir</button>
                <button id="swapBtn" class="btn px-8 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors uppercase tracking-widest text-xs">Intercambiar</button>
            </div>
            <div class="mt-6 p-4 glassmorphism rounded-lg text-center">
                <p class="text-gray-300 text-xs"><span class="font-bold text-red-500 uppercase tracking-widest mr-2">Fórmula:</span> <span id="formula">-</span></p>
            </div>
            <div class="mt-8 motivation-container glassmorphism rounded-lg p-4">
                <div class="motivation-text" id="motivationText"></div>
            </div>
        </div>
    </div>

    <script>
        const unitData = {
            area: { units: { "m²": { name: "Metro cuadrado", factor: 1 }, "km²": { name: "Kilómetro cuadrado", factor: 1000000 }, "cm²": { name: "Centímetro cuadrado", factor: 0.0001 }, "ha": { name: "Hectárea", factor: 10000 } } },
            dataTransfer: { units: { "bps": { name: "Bits p/s", factor: 1 }, "Mbps": { name: "Megabits p/s", factor: 1000000 }, "GBps": { name: "Gigabytes p/s", factor: 8000000000 } } },
            digitalStorage: { units: { "B": { name: "Byte", factor: 1 }, "KB": { name: "Kilobyte", factor: 1024 }, "MB": { name: "Megabyte", factor: 1048576 }, "GB": { name: "Gigabyte", factor: 1073741824 } } },
            energy: { units: { "J": { name: "Julio", factor: 1 }, "cal": { name: "Caloría", factor: 4.184 }, "kWh": { name: "Kilovatio-hora", factor: 3600000 } } },
            frequency: { units: { "Hz": { name: "Hertz", factor: 1 }, "MHz": { name: "Megahertz", factor: 1000000 } } },
            fuelEfficiency: { units: { "km/L": { name: "Km por litro", factor: 1 }, "L/100km": { name: "L/100km", convert: (v, t) => 100/v } } },
            length: { units: { "m": { name: "Metro", factor: 1 }, "km": { name: "Kilómetro", factor: 1000 }, "cm": { name: "Centímetro", factor: 0.01 }, "in": { name: "Pulgada", factor: 0.0254 } } },
            mass: { units: { "kg": { name: "Kilogramo", factor: 1 }, "g": { name: "Gramo", factor: 0.001 }, "lb": { name: "Libra", factor: 0.453592 } } },
            angle: { units: { "deg": { name: "Grado", factor: 1 }, "rad": { name: "Radián", factor: 57.2958 } } },
            pressure: { units: { "Pa": { name: "Pascal", factor: 1 }, "bar": { name: "Bar", factor: 100000 }, "psi": { name: "PSI", factor: 6894.76 } } },
            speed: { units: { "m/s": { name: "Metros/s", factor: 1 }, "km/h": { name: "Km/h", factor: 0.277778 } } },
            temperature: { units: { "°C": { name: "Celsius", convert: (v, t) => t==="°F"?(v*9/5)+32:t==="K"?v+273.15:v }, "°F": { name: "Fahrenheit", convert: (v, t) => t==="°C"?(v-32)*5/9:t==="K"?((v-32)*5/9)+273.15:v }, "K": { name: "Kelvin", convert: (v, t) => t==="°C"?v-273.15:t==="°F"?((v-273.15)*9/5)+32:v } } },
            time: { units: { "s": { name: "Segundo", factor: 1 }, "min": { name: "Minuto", factor: 60 }, "h": { name: "Hora", factor: 3600 }, "yr": { name: "Año", factor: 31536000 } } },
            volume: { units: { "m³": { name: "Metro cúbico", factor: 1 }, "L": { name: "Litro", factor: 0.001 } } }
        };

        const motivationalMessages = ["Precisión absoluta 🚀", "Mide dos veces, convierte una ✨", "Eficiencia pura 🎯"];
        const categorySelect = document.getElementById('categorySelect'), inputValue = document.getElementById('inputValue'), fromUnit = document.getElementById('fromUnit'), toUnit = document.getElementById('toUnit'), result = document.getElementById('result'), formula = document.getElementById('formula'), convertBtn = document.getElementById('convertBtn'), swapBtn = document.getElementById('swapBtn'), resultContainer = document.getElementById('resultContainer'), motivationText = document.getElementById('motivationText');
        let currentCategory = 'area', currentMotivationIndex = 0;

        function init() {
            categorySelect.addEventListener('change', () => { currentCategory = categorySelect.value; loadUnits(); convert(); });
            convertBtn.addEventListener('click', () => { convert(); resultContainer.classList.add('result-active'); setTimeout(() => resultContainer.classList.remove('result-active'), 1000); });
            swapBtn.addEventListener('click', () => { const t = fromUnit.value; fromUnit.value = toUnit.value; toUnit.value = t; convert(); });
            inputValue.addEventListener('input', convert); fromUnit.addEventListener('change', convert); toUnit.addEventListener('change', convert);
            loadUnits(); convert(); setInterval(showMsg, 5000); showMsg();
        }
        function showMsg() { motivationText.innerHTML = \`<div class="motivation-text active">\${motivationalMessages[currentMotivationIndex]}</div>\`; currentMotivationIndex = (currentMotivationIndex+1)%motivationalMessages.length; }
        function loadUnits() { fromUnit.innerHTML = ''; toUnit.innerHTML = ''; const u = unitData[currentCategory].units; for(const [c, o] of Object.entries(u)){ fromUnit.innerHTML += \`<option value="\${c}">\${o.name}</option>\`; toUnit.innerHTML += \`<option value="\${c}">\${o.name}</option>\`; } toUnit.selectedIndex = 1; }
        function convert() { const v = parseFloat(inputValue.value); if(isNaN(v)) return; const f = fromUnit.value, t = toUnit.value, u = unitData[currentCategory].units; let res; if(u[f].convert) res = u[f].convert(v, t); else res = (v * u[f].factor) / u[t].factor; result.value = res.toLocaleString(undefined, {maximumFractionDigits: 6}); formula.textContent = \`\${v}\${f} = \${res.toFixed(4)}\${t}\`; }
        init();
    </script>
</body>
</html>
`;

export const UniversalConverterTool: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full h-screen bg-agency-black flex flex-col overflow-hidden">
      {/* Barra de navegación superior integrada (HEADER ESTANDARIZADO) */}
      <div className="flex items-center justify-between px-6 py-4 bg-agency-black border-b border-white/10 z-50 mt-16 md:mt-20">
        <Link 
          to="/herramientas" 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full border border-white/10 group-hover:bg-agency-red group-hover:border-agency-red transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Volver a Herramientas</span>
        </Link>
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold text-agency-red uppercase tracking-[0.2em] leading-none mb-1">Utilidades Web</span>
          <h2 className="font-display text-xl uppercase tracking-wider text-white">Conversor Universal</h2>
        </div>

        <div className="hidden md:flex items-center gap-2 text-agency-red">
          <ArrowRightLeft size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Calc Engine</span>
        </div>
        <div className="w-10 h-10 md:hidden"></div>
      </div>

      {/* Contenedor del Motor del Conversor */}
      <div className="flex-1 relative bg-black">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-agency-black z-40">
            <Loader2 className="text-agency-red animate-spin mb-4" size={48} />
            <p className="text-agency-red text-xs font-bold uppercase tracking-[0.2em] animate-pulse">Iniciando Motor de Cálculo...</p>
          </div>
        )}
        
        <iframe
          srcDoc={htmlContent}
          className={`w-full h-full border-none transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          title="Eli Universal Converter"
          sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-modals"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      
      {/* Footer minimalista de la herramienta */}
      <div className="bg-agency-black py-2 px-6 border-t border-white/10 text-center">
        <p className="text-[8px] text-gray-600 uppercase tracking-widest">
          Desarrollado por Elizabeth Rugel &copy; 2026 - Herramienta de Precisión Digital
        </p>
      </div>
    </div>
  );
};