import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Loader2, Image as ImageIcon } from 'lucide-react';

const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eli-Compressor</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Manrope', sans-serif; }
        body { background: #050505; min-height: 100vh; color: #f3f3f3; padding: 1rem; }
        @media (min-width: 768px) { body { padding: 2rem; } }
        .container { max-width: 64rem; margin-left: auto; margin-right: auto; background-color: #000000; border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); overflow: hidden; border: 1px solid #1a1a1a; }
        /* Removido header interno para consistencia con el sitio */
        .content { padding: 1.5rem; }
        .section { margin-bottom: 2rem; }
        .section-title { font-size: 1.1rem; line-height: 1.5rem; font-weight: 600; color: #e5e7eb; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .upload-area { border: 2px dashed #E60000; border-radius: 0.5rem; padding: 2rem; text-align: center; background-color: #0a0a0a; transition: all 0.3s; }
        .upload-area:hover { background-color: #111; border-color: #ff3333; }
        .upload-icon { height: 3rem; width: 3rem; margin-left: auto; margin-right: auto; color: #E60000; margin-bottom: 1rem; }
        .btn { padding: 0.75rem 1.5rem; border-radius: 9999px; cursor: pointer; transition: all 0.3s; display: inline-block; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.75rem; border: none; }
        .btn-primary { background-color: #E60000; color: white; }
        .btn-primary:hover { background-color: #ff1a1a; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(230, 0, 0, 0.3); }
        .btn-secondary { background-color: #222; color: white; border: 1px solid #333; }
        .btn-secondary:hover { background-color: #333; transform: translateY(-2px); }
        .hidden { display: none !important; }
        .cropper-container { position: relative; overflow: hidden; width: 100%; height: 400px; background-color: #111; border-radius: 0.5rem; border: 1px solid #222; }
        .cropper-image { position: absolute; cursor: move; }
        .crop-overlay { position: absolute; border: 2px dashed #ffffff; box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7); box-sizing: border-box; cursor: move; }
        .resize-handle { position: absolute; width: 12px; height: 12px; background-color: #E60000; border: 2px solid white; border-radius: 50%; }
        .resize-handle.nw { top: -6px; left: -6px; cursor: nwse-resize; }
        .resize-handle.ne { top: -6px; right: -6px; cursor: nesw-resize; }
        .resize-handle.sw { bottom: -6px; left: -6px; cursor: nesw-resize; }
        .resize-handle.se { bottom: -6px; right: -6px; cursor: nwse-resize; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) { .md-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); } .md-col-span-1 { grid-column: span 1 / span 1; } .md-col-span-2 { grid-column: span 2 / span 2; } }
        .gap-6 { gap: 1.5rem; }
        .bg-gray-900 { background-color: #0a0a0a; }
        .p-4 { padding: 1rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .border { border-width: 1px; }
        .border-red-900 { border-color: #222; }
        .mb-6 { margin-bottom: 1.5rem; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .w-full { width: 100%; }
        .format-selector { overflow-x: auto; padding-bottom: 10px; margin-bottom: 1rem; }
        .format-cards { display: flex; gap: 0.75rem; padding: 0.5rem; }
        .format-card { flex-shrink: 0; width: 120px; height: 100px; cursor: pointer; border-radius: 0.5rem; background: #111; border: 1px solid #222; display: flex; flex-direction: column; justify-content: center; align-items: center; transition: all 0.3s; }
        .format-card:hover { border-color: #E60000; transform: translateY(-2px); }
        .format-card.selected { border-color: #E60000; background: #1a0505; box-shadow: 0 0 15px rgba(230, 0, 0, 0.2); }
        .format-icon { font-size: 1.25rem; margin-bottom: 0.25rem; font-weight: bold; color: #E60000; }
        .format-title { font-weight: bold; margin-bottom: 0.25rem; font-size: 0.75rem; text-align: center; color: #fff; }
        .format-dimensions { font-size: 0.65rem; color: #666; }
        input[type="range"] { accent-color: #E60000; }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <div id="uploadSection" class="section">
                <h2 class="section-title">1. Seleccionar Imagen</h2>
                <div class="upload-area">
                    <svg xmlns="http://www.w3.org/2000/svg" class="upload-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p style="margin-bottom: 1.5rem; color: #888;">Arrastra tu archivo aquí o utiliza el botón inferior</p>
                    <input type="file" id="imageInput" accept="image/jpeg, image/png" class="hidden">
                    <label for="imageInput" class="btn btn-primary">Cargar Archivo</label>
                </div>
            </div>
            <div id="editSection" class="section hidden">
                <h2 class="section-title">2. Ajustes de Formato</h2>
                <div class="format-selector">
                    <div class="format-cards">
                        <div class="format-card" data-ratio="1:1" data-name="Instagram Post">
                            <div class="format-icon">IG</div>
                            <div class="format-title">Feed Post</div>
                            <div class="format-dimensions">1080x1080</div>
                        </div>
                        <div class="format-card" data-ratio="4:5" data-name="Instagram Vertical">
                            <div class="format-icon">IGV</div>
                            <div class="format-title">Vertical</div>
                            <div class="format-dimensions">1080x1350</div>
                        </div>
                        <div class="format-card" data-ratio="9:16" data-name="Stories">
                            <div class="format-icon">ST</div>
                            <div class="format-title">Stories</div>
                            <div class="format-dimensions">1080x1920</div>
                        </div>
                        <div class="format-card" data-ratio="16:9" data-name="Facebook">
                            <div class="format-icon">FB</div>
                            <div class="format-title">Horizontal</div>
                            <div class="format-dimensions">1200x628</div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md-grid-cols-3 gap-6">
                    <div class="md-col-span-1 bg-gray-900 p-4 rounded-lg border border-red-900">
                        <div style="margin-bottom: 1.5rem;">
                            <h3 style="font-weight: 500; color: #e5e7eb; margin-bottom: 0.5rem; font-size: 0.85rem; text-transform: uppercase;">Calidad de Salida</h3>
                            <div class="flex items-center">
                                <input type="range" id="qualitySlider" min="1" max="100" value="80" style="width: 100%;">
                                <span id="qualityValue" style="font-size: 0.875rem; color: #E60000; margin-left: 0.5rem; font-weight: bold;">80%</span>
                            </div>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <h3 style="font-weight: 500; color: #e5e7eb; margin-bottom: 0.5rem; font-size: 0.85rem; text-transform: uppercase;">Datos Técnicos</h3>
                            <div style="font-size: 0.75rem; color: #888; background-color: #111; padding: 0.75rem; border-radius: 0.25rem;">
                                <p id="originalSize">Original: --</p>
                                <p id="dimensions">Dimensiones: --</p>
                            </div>
                        </div>
                    </div>
                    <div class="md-col-span-2">
                        <div class="cropper-container" id="cropperContainer">
                            <img id="previewImage" class="cropper-image" src="" alt="Vista previa">
                            <div class="crop-overlay" id="cropOverlay">
                                <div class="resize-handle nw"></div><div class="resize-handle ne"></div><div class="resize-handle sw"></div><div class="resize-handle se"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 2rem; display: flex; justify-content: space-between;">
                    <button id="backButton" class="btn btn-secondary">Cancelar</button>
                    <button id="processButton" class="btn btn-primary">Procesar Imagen</button>
                </div>
            </div>
            <div id="downloadSection" class="section hidden">
                <h2 class="section-title">3. Resultado Final</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-gray-900 p-4 rounded-lg border border-red-900">
                        <h3 style="font-weight: 500; color: #888; margin-bottom: 1rem; font-size: 0.75rem; text-transform: uppercase;">Antes</h3>
                        <div style="height: 300px; background: #000; display: flex; align-items: center; justify-content: center; border-radius: 0.5rem; overflow: hidden;"><img id="beforeImage" style="max-width: 100%; max-height: 100%;" src="" alt="Antes"></div>
                    </div>
                    <div class="bg-gray-900 p-4 rounded-lg border border-red-900">
                        <h3 style="font-weight: 500; color: #E60000; margin-bottom: 1rem; font-size: 0.75rem; text-transform: uppercase;">Después (Optimizado)</h3>
                        <div style="height: 300px; background: #000; display: flex; align-items: center; justify-content: center; border-radius: 0.5rem; overflow: hidden;"><img id="afterImage" style="max-width: 100%; max-height: 100%;" src="" alt="Después"></div>
                    </div>
                </div>
                <div style="margin-top: 2rem; display: flex; justify-content: space-between;">
                    <button id="editAgainButton" class="btn btn-secondary">Nueva Imagen</button>
                    <button id="downloadButton" class="btn btn-primary">Descargar Ahora</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        const imageInput=document.getElementById("imageInput"),uploadSection=document.getElementById("uploadSection"),editSection=document.getElementById("editSection"),downloadSection=document.getElementById("downloadSection"),previewImage=document.getElementById("previewImage"),cropOverlay=document.getElementById("cropOverlay"),cropperContainer=document.getElementById("cropperContainer"),qualitySlider=document.getElementById("qualitySlider"),qualityValue=document.getElementById("qualityValue"),formatCards=document.querySelectorAll(".format-card"),originalSizeEl=document.getElementById("originalSize"),dimensionsEl=document.getElementById("dimensions"),backButton=document.getElementById("backButton"),processButton=document.getElementById("processButton"),beforeImage=document.getElementById("beforeImage"),afterImage=document.getElementById("afterImage"),editAgainButton=document.getElementById("editAgainButton"),downloadButton=document.getElementById("downloadButton"),resizeHandles=document.querySelectorAll(".resize-handle");
        let originalImage=null,originalFile=null,originalSize=0,currentRatio="1:1",isDragging=!1,isResizing=!1,currentResizeHandle=null,startX=0,startY=0,startWidth=0,startHeight=0,startLeft=0,startTop=0,activeCard=null,processedImageData=null;
        imageInput.addEventListener("change",handleImageUpload);qualitySlider.addEventListener("input",()=>{qualityValue.textContent=\`\${qualitySlider.value}%\`});
        formatCards.forEach(e=>{e.addEventListener("click",()=>{formatCards.forEach(e=>e.classList.remove("selected")),e.classList.add("selected"),setCropRatio(e.dataset.ratio)})});
        backButton.addEventListener("click",()=>location.reload());processButton.addEventListener("click",processImage);editAgainButton.addEventListener("click",()=>location.reload());
        downloadButton.addEventListener("click",()=>{if(!processedImageData)return;const e=document.createElement("a");e.href=processedImageData.dataUrl;e.download=\`ELI-OPTIMIZED-\${originalFile.name}\`;e.click()});
        function handleImageUpload(){if(!imageInput.files||!imageInput.files[0])return;const e=imageInput.files[0];originalFile=e,originalSize=e.size;const t=new FileReader;t.onload=function(e){originalImage=new Image;originalImage.onload=function(){uploadSection.classList.add("hidden"),editSection.classList.remove("hidden"),previewImage.src=e.target.result,updateImageInfo(),initCropper()},originalImage.src=e.target.result},t.readAsDataURL(e)}
        function initCropper(){const e=cropperContainer.getBoundingClientRect(),t=e.width,o=e.height,n=originalImage.width,a=originalImage.height,r=n/a;let i,s;r>t/o?(i=t,s=i/r):(s=o,i=s*r);previewImage.style.width=\`\${i}px\`;previewImage.style.height=\`\${s}px\`;previewImage.style.left=\`\${(t-i)/2}px\`;previewImage.style.top=\`\${(o-s)/2}px\`;setCropRatio("1:1")}
        function setCropRatio(e){currentRatio=e;const t=cropperContainer.getBoundingClientRect(),o=t.width,n=t.height;let a,r;if("custom"!==e){let[t,i]=e.split(":").map(Number);const s=t/i;o/n>s?(r=0.8*n,a=r*s):(a=0.8*o,r=a/s);const d=(o-a)/2,c=(n-r)/2;cropOverlay.style.width=\`\${a}px\`,cropOverlay.style.height=\`\${r}px\`,cropOverlay.style.left=\`\${d}px\`,cropOverlay.style.top=\`\${c}px\`}}
        function updateImageInfo(){const e=e=>e<1024?e+" B":e<1048576?(e/1024).toFixed(1)+" KB":(e/1048576).toFixed(1)+" MB";originalSizeEl.textContent=\`Original: \${e(originalSize)}\`,dimensionsEl.textContent=\`Dimensiones: \${originalImage.width} × \${originalImage.height}\`}
        function processImage(){try{const e=document.createElement("canvas"),o=e.getContext("2d"),n=cropperContainer.getBoundingClientRect(),a=cropOverlay.getBoundingClientRect(),r=previewImage.getBoundingClientRect(),i=originalImage.width/r.width,s=originalImage.height/r.height,d=(a.left-r.left)*i,c=(a.top-r.top)*s,l=a.width*i,g=a.height*s;e.width=l,e.height=g,o.drawImage(originalImage,d,c,l,g,0,0,l,g);const m=e.toDataURL("image/jpeg",parseInt(qualitySlider.value)/100);processedImageData={dataUrl:m},beforeImage.src=originalImage.src,afterImage.src=m,editSection.classList.add("hidden"),downloadSection.classList.remove("hidden")}catch(e){alert("Error al procesar la imagen.")}}
        cropOverlay.addEventListener("mousedown",e=>{if(e.target===cropOverlay){isDragging=!0,startX=e.clientX,startY=e.clientY,startLeft=cropOverlay.offsetLeft,startTop=cropOverlay.offsetTop,document.addEventListener("mousemove",drag),document.addEventListener("mouseup",stopDrag)}});
        function drag(e){if(!isDragging)return;const t=e.clientX-startX,o=e.clientY-startY;let n=startLeft+t,a=startTop+o;const r=cropperContainer.getBoundingClientRect(),i=cropOverlay.getBoundingClientRect();n<0&&(n=0),a<0&&(a=0),n+i.width>r.width&&(n=r.width-i.width),a+i.height>r.height&&(a=r.height-i.height);cropOverlay.style.left=\`\${n}px\`,cropOverlay.style.top=\`\${a}px\`}
        function stopDrag(){isDragging=!1,document.removeEventListener("mousemove",drag),document.removeEventListener("mouseup",stopDrag)}
    </script>
</body>
</html>
`;

export const ImageCompressorTool: React.FC = () => {
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
          <span className="text-[10px] font-bold text-agency-red uppercase tracking-[0.2em] leading-none mb-1">Optimización SEO</span>
          <h2 className="font-display text-xl uppercase tracking-wider text-white">Compresor Pro</h2>
        </div>

        <div className="hidden md:flex items-center gap-2 text-agency-red">
          <ImageIcon size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Image Engine</span>
        </div>
        <div className="w-10 h-10 md:hidden"></div>
      </div>

      {/* Contenedor del Motor de Compresión */}
      <div className="flex-1 relative bg-black">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-agency-black z-40">
            <Loader2 className="text-agency-red animate-spin mb-4" size={48} />
            <p className="text-agency-red text-xs font-bold uppercase tracking-[0.2em] animate-pulse">Cargando Motor Gráfico...</p>
          </div>
        )}
        
        <iframe
          srcDoc={htmlContent}
          className={`w-full h-full border-none transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          title="Eli-Compressor"
          sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-modals"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      
      {/* Footer minimalista de la herramienta */}
      <div className="bg-agency-black py-2 px-6 border-t border-white/10 text-center">
        <p className="text-[8px] text-gray-600 uppercase tracking-widest">
          Desarrollado por Elizabeth Rugel &copy; 2026 - Optimización local sin envío de datos al servidor
        </p>
      </div>
    </div>
  );
};