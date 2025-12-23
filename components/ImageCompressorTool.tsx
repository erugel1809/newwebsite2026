import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// El código HTML proporcionado se inyecta directamente en el iframe.
// Se han escapado las comillas invertidas (backticks) y los símbolos $ para que funcione dentro de la cadena de React.
const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eli-Compressor</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { background: linear-gradient(135deg, #1f1f1f, #000000); min-height: 100vh; color: #f3f3f3; padding: 1rem; }
        @media (min-width: 768px) { body { padding: 2rem; } }
        .container { max-width: 64rem; margin-left: auto; margin-right: auto; background-color: #000000; border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); overflow: hidden; border: 1px solid #9b1c1c; }
        .header { padding: 1.5rem; background-image: linear-gradient(to right, #000000, #7f1d1d); position: relative; text-align: center; }
        .header h1 { font-size: 1.75rem; line-height: 2rem; font-weight: 700; display: inline-block; }
        @media (min-width: 768px) { .header h1 { font-size: 2rem; line-height: 2.25rem; } }
        .header p { color: #d1d5db; margin-top: 0.5rem; font-size: 0.9rem; }
        .content { padding: 1.5rem; }
        .section { margin-bottom: 2rem; }
        .section-title { font-size: 1.1rem; line-height: 1.5rem; font-weight: 600; color: #e5e7eb; margin-bottom: 1rem; }
        .upload-area { border: 2px dashed #9b1c1c; border-radius: 0.5rem; padding: 2rem; text-align: center; background-color: #111827; }
        .upload-icon { height: 3rem; width: 3rem; margin-left: auto; margin-right: auto; color: #dc2626; margin-bottom: 1rem; }
        .btn { padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: inline-block; }
        .btn-primary { background-color: #ff0000; color: white; }
        .btn-primary:hover { background-color: #cc0000; transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .btn-secondary { background-color: #333333; color: white; }
        .btn-secondary:hover { background-color: #444444; transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .btn-hover-effect:hover { transform: scale(1.05); }
        .hidden { display: none !important; }
        .text-sm { font-size: 0.875rem; }
        .text-gray-400 { color: #9ca3af; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-4 { margin-top: 1rem; }
        .text-red-400 { color: #f87171; }
        .cropper-container { position: relative; overflow: hidden; width: 100%; height: 400px; background-color: #1a1a1a; border-radius: 0.5rem; }
        .cropper-image { position: absolute; cursor: move; }
        .crop-overlay { position: absolute; border: 2px dashed #ffffff; box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7); box-sizing: border-box; cursor: move; }
        .resize-handle { position: absolute; width: 10px; height: 10px; background-color: white; border: 1px solid #ff0000; border-radius: 50%; }
        .resize-handle.nw { top: -5px; left: -5px; cursor: nwse-resize; }
        .resize-handle.ne { top: -5px; right: -5px; cursor: nesw-resize; }
        .resize-handle.sw { bottom: -5px; left: -5px; cursor: nesw-resize; }
        .resize-handle.se { bottom: -5px; right: -5px; cursor: nwse-resize; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) { .md-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); } .md-col-span-1 { grid-column: span 1 / span 1; } .md-col-span-2 { grid-column: span 2 / span 2; } }
        .gap-6 { gap: 1.5rem; }
        .bg-gray-900 { background-color: #111827; }
        .p-4 { padding: 1rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .border { border-width: 1px; }
        .border-red-900 { border-color: #7f1d1d; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .mr-2 { margin-right: 0.5rem; }
        .w-full { width: 100%; }
        .ml-2 { margin-left: 0.5rem; }
        .w-8 { width: 2rem; }
        .text-gray-300 { color: #d1d5db; }
        .bg-gray-800 { background-color: #1f2937; }
        .p-3 { padding: 0.75rem; }
        .rounded { border-radius: 0.25rem; }
        .text-center { text-align: center; }
        .justify-between { justify-content: space-between; }
        .mt-6 { margin-top: 1.5rem; }
        .space-x-3 > * + * { margin-left: 0.75rem; }
        .inline-flex { display: inline-flex; }
        .format-selector { overflow-x: auto; scrollbar-width: thin; scrollbar-color: #ff0000 #333; padding-bottom: 10px; }
        .format-selector::-webkit-scrollbar { height: 8px; }
        .format-selector::-webkit-scrollbar-track { background: #333; border-radius: 10px; }
        .format-selector::-webkit-scrollbar-thumb { background-color: #ff0000; border-radius: 10px; }
        .format-cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; min-width: max-content; }
        @media (min-width: 640px) { .format-cards { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (min-width: 768px) { .format-cards { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
        @media (min-width: 1024px) { .format-cards { grid-template-columns: repeat(8, minmax(0, 1fr)); } }
        .format-card { perspective: 1000px; height: 100px; cursor: pointer; transition: transform 0.3s; }
        .format-card:hover { transform: translateY(-5px); }
        .format-card.selected { transform: translateY(-8px); }
        .format-card.selected .format-card-front { border: 2px solid #ff0000; box-shadow: 0 0 15px rgba(255, 0, 0, 0.5); }
        .format-card-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s; transform-style: preserve-3d; }
        .format-card.active .format-card-inner { transform: rotateX(180deg); }
        .format-card-front, .format-card-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; border-radius: 0.5rem; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0.75rem; }
        .format-card-front { background: linear-gradient(145deg, #2a2a2a, #1a1a1a); color: white; border: 2px solid #333; }
        .format-card-back { background: linear-gradient(145deg, #ff0000, #cc0000); color: white; transform: rotateX(180deg); border: 2px solid #cc0000; }
        .format-icon { font-size: 1.25rem; margin-bottom: 0.25rem; font-weight: bold; }
        .format-title { font-weight: bold; margin-bottom: 0.25rem; font-size: 0.85rem; }
        .format-dimensions { font-size: 0.7rem; opacity: 0.8; }
        .loading { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 9999; }
        .spinner { border: 4px solid rgba(255, 255, 255, 0.3); border-radius: 50%; border-top: 4px solid #ff0000; width: 40px; height: 40px; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animated-title { position: relative; display: inline-block; background: linear-gradient(90deg, #ff0000, #ffffff, #ff0000); background-size: 200% auto; -webkit-background-clip: text; color: transparent; animation: shine 3s linear infinite; }
        @keyframes shine { to { background-position: 200% center; } }
        .motivation-container { position: absolute; right: 1.5rem; bottom: 0.5rem; height: 2rem; width: 200px; overflow: hidden; text-align: right; }
        .motivation-message { position: absolute; right: 0; opacity: 0; transform: translateY(20px); transition: all 0.5s ease; color: #ff5555; font-weight: bold; text-shadow: 0 0 5px rgba(0,0,0,0.5); pointer-events: none; width: 100%; text-align: right; }
        .motivation-message.show { opacity: 1; transform: translateY(0); }
        .download-pulse { animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        .download-notification { position: fixed; bottom: 20px; right: 20px; background-color: #00cc66; color: white; padding: 15px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); display: flex; align-items: center; transform: translateY(100px); opacity: 0; transition: all 0.5s ease; z-index: 1000; }
        .download-notification.show { transform: translateY(0); opacity: 1; }
        .download-notification-icon { margin-right: 12px; font-size: 24px; }
        .download-format-menu { position: absolute; background-color: #1f2937; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); overflow: hidden; z-index: 10; border: 1px solid #374151; }
        .download-format-option { width: 100%; text-align: left; padding: 0.5rem 1rem; background: none; border: none; color: white; cursor: pointer; }
        .download-format-option:hover { background-color: #374151; }
        .before-after-container { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        @media (min-width: 768px) { .before-after-container { grid-template-columns: 1fr 1fr; } }
        .image-container { position: relative; background-color: black; border: 1px solid #374151; border-radius: 0.5rem; overflow: hidden; height: 300px; }
        .centered-image { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; }
        .info-box { margin-top: 0.5rem; font-size: 0.875rem; color: #d1d5db; background-color: #1f2937; padding: 0.5rem; border-radius: 0.25rem; }
        .selected-format-info { margin-bottom: 1rem; padding: 0.75rem; background-color: rgba(127, 29, 29, 0.3); border-radius: 0.5rem; border: 1px solid #7f1d1d; }
        .selected-format-info h4 { font-weight: 500; color: white; margin-bottom: 0.25rem; font-size: 0.9rem; }
        .selected-format-info p { color: #fca5a5; font-weight: 700; font-size: 0.85rem; }
        .footer { background-color: #111827; padding: 1.5rem; text-align: center; border-top: 1px solid #374151; }
        .footer-text { color: #d1d5db; font-size: 0.85rem; margin-bottom: 0.75rem; }
        .security-notice { background-color: rgba(127, 29, 29, 0.2); border: 1px solid #7f1d1d; border-radius: 0.5rem; padding: 0.75rem; margin-top: 1rem; text-align: center; font-size: 0.85rem; color: #fca5a5; }
        .creator-link { color: #ff6b6b; text-decoration: none; font-weight: 600; transition: all 0.3s; }
        .creator-link:hover { color: #ff0000; text-decoration: underline; }
        .processing-message-container { position: relative; height: 60px; width: 100%; overflow: hidden; margin-top: 20px; }
        .processing-message { position: absolute; top: 0; left: 0; width: 100%; text-align: center; color: #ffffff; font-size: 1.25rem; font-weight: bold; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
        .processing-message.show { opacity: 1; transform: translateY(0); }
        .processing-message.hide { opacity: 0; transform: translateY(-20px); }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="animated-title">>_Eli-Compressor</h1>
            <p>Comprime y recorta tus imágenes para redes sociales como un profesional</p>
            <div id="motivationContainer" class="motivation-container"></div>
        </div>
        <div class="content">
            <div id="uploadSection" class="section">
                <h2 class="section-title">1. Sube tu imagen</h2>
                <div class="upload-area">
                    <svg xmlns="http://www.w3.org/2000/svg" class="upload-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p style="margin-bottom: 1rem; color: #d1d5db;">Arrastra y suelta tu imagen aquí o</p>
                    <input type="file" id="imageInput" accept="image/jpeg, image/png" class="hidden">
                    <label for="imageInput" class="btn btn-primary btn-hover-effect">Buscar Archivos</label>
                    <p class="text-sm text-gray-400 mt-2">Soporta archivos JPG y PNG</p>
                    <p class="text-red-400 mt-4">Consejo: Las imágenes de alta calidad funcionan mejor</p>
                </div>
                <div class="security-notice">
                    <svg xmlns="http://www.w3.org/2000/svg" style="height: 1.25rem; width: 1.25rem; display: inline-block; vertical-align: middle; margin-right: 0.5rem;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Tus archivos están seguros. Todas las imágenes se procesan localmente en tu navegador.
                </div>
            </div>
            <div id="editSection" class="section hidden">
                <h2 class="section-title">2. Edita tu imagen</h2>
                <div class="mb-6">
                    <h3 style="font-weight: 500; color: #e5e7eb; margin-bottom: 0.75rem; font-size: 0.95rem;">Selecciona un formato para redes sociales</h3>
                    <div class="format-selector">
                        <div class="format-cards">
                            <div class="format-card" data-ratio="1:1" data-name="Instagram Post">
                                <div class="format-card-inner">
                                    <div class="format-card-front"><div class="format-icon">IG</div><div class="format-title">Instagram Post</div><div class="format-dimensions">1080 × 1080 px</div></div>
                                    <div class="format-card-back"><div class="format-title">Instagram Post</div><div class="format-dimensions">Relación 1:1</div><div style="margin-top: 0.5rem; font-size: 0.7rem;">Perfecto para feed</div></div>
                                </div>
                            </div>
                            <div class="format-card" data-ratio="4:5" data-name="Instagram Vertical">
                                <div class="format-card-inner">
                                    <div class="format-card-front"><div class="format-icon">IG-V</div><div class="format-title">Instagram Vertical</div><div class="format-dimensions">1080 × 1350 px</div></div>
                                    <div class="format-card-back"><div class="format-title">Instagram Vertical</div><div class="format-dimensions">Relación 4:5</div><div style="margin-top: 0.5rem; font-size: 0.7rem;">Más espacio visual</div></div>
                                </div>
                            </div>
                            <div class="format-card" data-ratio="16:9" data-name="Facebook Portada">
                                <div class="format-card-inner">
                                    <div class="format-card-front"><div class="format-icon">FB</div><div class="format-title">Facebook Portada</div><div class="format-dimensions">1200 × 630 px</div></div>
                                    <div class="format-card-back"><div class="format-title">Facebook Portada</div><div class="format-dimensions">Relación 16:9</div><div style="margin-top: 0.5rem; font-size: 0.7rem;">Destaca tu perfil</div></div>
                                </div>
                            </div>
                            <div class="format-card" data-ratio="1.91:1" data-name="Facebook Post">
                                <div class="format-card-inner">
                                    <div class="format-card-front"><div class="format-icon">FB-P</div><div class="format-title">Facebook Post</div><div class="format-dimensions">1200 × 628 px</div></div>
                                    <div class="format-card-back"><div class="format-title">Facebook Post</div><div class="format-dimensions">Relación 1.91:1</div><div style="margin-top: 0.5rem; font-size: 0.7rem;">Optimizado para feed</div></div>
                                </div>
                            </div>
                            <div class="format-card" data-ratio="9:16" data-name="Stories">
                                <div class="format-card-inner">
                                    <div class="format-card-front"><div class="format-icon">ST</div><div class="format-title">Stories</div><div class="format-dimensions">1080 × 1920 px</div></div>
                                    <div class="format-card-back"><div class="format-title">Stories</div><div class="format-dimensions">Relación 9:16</div><div style="margin-top: 0.5rem; font-size: 0.7rem;">Pantalla completa</div></div>
                                </div>
                            </div>
                            <div class="format-card" data-ratio="2:3" data-name="Pinterest">
                                <div class="format-card-inner">
                                    <div class="format-card-front"><div class="format-icon">PIN</div><div class="format-title">Pinterest</div><div class="format-dimensions">1000 × 1500 px</div></div>
                                    <div class="format-card-back"><div class="format-title">Pinterest</div><div class="format-dimensions">Relación 2:3</div><div style="margin-top: 0.5rem; font-size: 0.7rem;">Más visibilidad</div></div>
                                </div>
                            </div>
                            <div class="format-card" data-ratio="16:10" data-name="LinkedIn Banner">
                                <div class="format-card-inner">
                                    <div class="format-card-front"><div class="format-icon">LI</div><div class="format-title">LinkedIn Banner</div><div class="format-dimensions">1584 × 396 px</div></div>
                                    <div class="format-card-back"><div class="format-title">LinkedIn Banner</div><div class="format-dimensions">Relación 16:10</div><div style="margin-top: 0.5rem; font-size: 0.7rem;">Profesional</div></div>
                                </div>
                            </div>
                            <div class="format-card" data-ratio="1:1" data-name="WooCommerce">
                                <div class="format-card-inner">
                                    <div class="format-card-front" style="background: linear-gradient(to bottom right, #4a1d96, #5b21b6); border-color: #6d28d9;"><div class="format-icon">WC</div><div class="format-title">WooCommerce</div><div class="format-dimensions">800 × 800 px</div></div>
                                    <div class="format-card-back" style="background: linear-gradient(to bottom right, #5b21b6, #7c3aed); border-color: #8b5cf6;"><div class="format-title">WooCommerce</div><div class="format-dimensions">Relación 1:1</div><div style="margin-top: 0.5rem; font-size: 0.7rem;">Vende más</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md-grid-cols-3 gap-6">
                    <div class="md-col-span-1 bg-gray-900 p-4 rounded-lg border border-red-900">
                        <div style="margin-bottom: 1.5rem;">
                            <h3 style="font-weight: 500; color: #e5e7eb; margin-bottom: 0.5rem; font-size: 0.95rem;">Compresión</h3>
                            <div class="flex items-center">
                                <span style="font-size: 0.875rem; color: #9ca3af; margin-right: 0.5rem;">Calidad:</span>
                                <input type="range" id="qualitySlider" min="1" max="100" value="80" style="width: 100%; height: 0.5rem; background-color: #374151; border-radius: 0.5rem; appearance: none; cursor: pointer;">
                                <span id="qualityValue" style="font-size: 0.875rem; color: #e5e7eb; margin-left: 0.5rem; width: 2rem;">80%</span>
                            </div>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <h3 style="font-weight: 500; color: #e5e7eb; margin-bottom: 0.5rem; font-size: 0.95rem;">Información</h3>
                            <div style="font-size: 0.875rem; color: #d1d5db; background-color: #1f2937; padding: 0.75rem; border-radius: 0.25rem;">
                                <p id="originalSize">Tamaño original: --</p>
                                <p id="dimensions">Dimensiones: --</p>
                            </div>
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <button id="customFormatBtn" style="width: 100%; padding: 0.75rem 1rem; background-color: #1f2937; border: 1px solid #374151; border-radius: 0.25rem; font-size: 0.875rem; color: #d1d5db; cursor: pointer;">Formato Personalizado</button>
                        </div>
                        <div id="selectedFormatInfo" class="selected-format-info hidden">
                            <h4>Formato seleccionado:</h4>
                            <p id="selectedFormatName">--</p>
                        </div>
                    </div>
                    <div class="md-col-span-2">
                        <div class="cropper-container" id="cropperContainer">
                            <img id="previewImage" class="cropper-image" src="" alt="Vista previa">
                            <div class="crop-overlay" id="cropOverlay">
                                <div class="resize-handle nw"></div><div class="resize-handle ne"></div><div class="resize-handle sw"></div><div class="resize-handle se"></div>
                            </div>
                        </div>
                        <p style="text-align: center; margin-top: 0.5rem; color: #9ca3af; font-size: 0.8rem;">Arrastra para mover, usa las esquinas para redimensionar</p>
                    </div>
                </div>
                <div style="margin-top: 1.5rem; display: flex; justify-content: space-between;">
                    <button id="backButton" class="btn btn-secondary btn-hover-effect">Volver</button>
                    <button id="processButton" class="btn btn-primary btn-hover-effect" style="padding: 0.5rem 1.5rem;">Procesar Imagen</button>
                </div>
            </div>
            <div id="downloadSection" class="section hidden">
                <h2 class="section-title">3. Listo para descargar</h2>
                <div class="before-after-container">
                    <div class="bg-gray-900 p-4 rounded-lg border border-red-900">
                        <h3 style="font-weight: 500; color: #e5e7eb; margin-bottom: 0.5rem; font-size: 0.95rem;">Antes</h3>
                        <div class="image-container"><img id="beforeImage" class="centered-image" src="" alt="Antes"></div>
                        <div class="info-box" id="beforeInfo">Tamaño original: --</div>
                    </div>
                    <div class="bg-gray-900 p-4 rounded-lg border border-red-900">
                        <h3 style="font-weight: 500; color: #e5e7eb; margin-bottom: 0.5rem; font-size: 0.95rem;">Después</h3>
                        <div class="image-container"><img id="afterImage" class="centered-image" src="" alt="Después"></div>
                        <div class="info-box" id="afterInfo">Nuevo tamaño: --</div>
                    </div>
                </div>
                <div style="margin-top: 1.5rem; display: flex; justify-content: space-between;">
                    <button id="editAgainButton" class="btn btn-secondary btn-hover-effect">Editar de Nuevo</button>
                    <div style="display: flex;">
                        <button id="downloadButton" class="btn btn-primary btn-hover-effect download-pulse" style="display: inline-flex; align-items: center; margin-right: 0.75rem;">
                            <svg xmlns="http://www.w3.org/2000/svg" style="height: 1.25rem; width: 1.25rem; margin-right: 0.5rem;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Descargar Imagen
                        </button>
                        <button id="downloadAsButton" style="padding: 0.5rem 0.75rem; background-color: #374151; border-radius: 0.5rem; transition: all 0.3s; display: inline-flex; align-items: center;">
                            <svg xmlns="http://www.w3.org/2000/svg" style="height: 1.25rem; width: 1.25rem;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p class="footer-text">Creado por <a href="https://elizabethrugel.com" target="_blank" class="creator-link">Elizabeth Rugel</a></p>
        </div>
    </div>
    <div id="downloadFormatMenu" class="download-format-menu hidden">
        <div style="padding: 0.25rem 0;">
            <button class="download-format-option" data-format="image/jpeg" data-ext="jpg">JPEG (.jpg)</button>
            <button class="download-format-option" data-format="image/png" data-ext="png">PNG (.png)</button>
            <button class="download-format-option" data-format="image/webp" data-ext="webp">WebP (.webp)</button>
        </div>
    </div>
    <div id="downloadNotification" class="download-notification">
        <div class="download-notification-icon">✓</div>
        <div><div style="font-weight: 700;">Descarga completada</div><div style="font-size: 0.875rem;">Tu imagen ha sido guardada correctamente</div></div>
    </div>
    <div id="loadingOverlay" class="loading hidden">
        <div style="text-align: center;">
            <div class="spinner" style="margin: 0 auto 1rem auto;"></div>
            <p style="color: white; font-size: 1.25rem;">Trabajando en tu imagen...</p>
            <p id="loadingMessage" style="color: #f87171; margin-top: 0.5rem;">La magia está sucediendo...</p>
            <div id="processingMessageContainer" class="processing-message-container"></div>
        </div>
    </div>
    <script>
        const imageInput=document.getElementById("imageInput"),uploadSection=document.getElementById("uploadSection"),editSection=document.getElementById("editSection"),downloadSection=document.getElementById("downloadSection"),previewImage=document.getElementById("previewImage"),cropOverlay=document.getElementById("cropOverlay"),cropperContainer=document.getElementById("cropperContainer"),qualitySlider=document.getElementById("qualitySlider"),qualityValue=document.getElementById("qualityValue"),formatCards=document.querySelectorAll(".format-card"),customFormatBtn=document.getElementById("customFormatBtn"),originalSizeEl=document.getElementById("originalSize"),newSizeEl=document.getElementById("newSize"),compressionRateEl=document.getElementById("compressionRate"),dimensionsEl=document.getElementById("dimensions"),backButton=document.getElementById("backButton"),processButton=document.getElementById("processButton"),beforeImage=document.getElementById("beforeImage"),afterImage=document.getElementById("afterImage"),beforeInfo=document.getElementById("beforeInfo"),afterInfo=document.getElementById("afterInfo"),editAgainButton=document.getElementById("editAgainButton"),downloadButton=document.getElementById("downloadButton"),downloadAsButton=document.getElementById("downloadAsButton"),downloadFormatMenu=document.getElementById("downloadFormatMenu"),downloadFormatOptions=document.querySelectorAll(".download-format-option"),loadingOverlay=document.getElementById("loadingOverlay"),loadingMessage=document.getElementById("loadingMessage"),resizeHandles=document.querySelectorAll(".resize-handle"),motivationContainer=document.getElementById("motivationContainer"),selectedFormatInfo=document.getElementById("selectedFormatInfo"),selectedFormatName=document.getElementById("selectedFormatName"),downloadNotification=document.getElementById("downloadNotification"),processingMessageContainer=document.getElementById("processingMessageContainer");
        let originalImage=null,originalFile=null,originalSize=0,currentRatio="1:1",isDragging=!1,isResizing=!1,currentResizeHandle=null,startX=0,startY=0,startWidth=0,startHeight=0,startLeft=0,startTop=0,activeCard=null,processedImageData=null,currentImageFormat="image/jpeg",currentFileExtension="jpg",processingMessageInterval=null,currentMotivationMessage=null,currentProcessingMessage=null;
        const motivationalMessages=["Vas por buen camino","Tu imagen se verá increíble","Optimizando al máximo","Menos peso, misma calidad","Tus redes sociales brillarán","Estás haciendo un gran trabajo","Eli-Compressor a tu servicio","Compresión de nivel profesional","Tu web cargará más rápido","Ahorrando espacio como un pro"],loadingMessages=["Aplicando algoritmos avanzados de compresión...","Optimizando píxeles para un resultado perfecto...","Reduciendo el tamaño sin perder calidad...","Preparando tu imagen para brillar en redes sociales...","Haciendo magia con los bytes...","Comprimiendo con amor cada píxel...","Transformando tu imagen en una obra maestra ligera...","Eli-Compressor está dando lo mejor...","Casi listo. Puliendo los detalles finales..."],processingMotivationalMessages=["¡Tu imagen se está transformando en algo increíble!","Optimizando cada píxel con precisión...","Creando magia digital para tus redes sociales...","¡Estamos haciendo que tu imagen brille!","Comprimiendo con inteligencia, manteniendo la calidad...","Preparando una imagen perfecta para tus seguidores...","¡Casi listo! El resultado te va a encantar...","Trabajando para que tu contenido destaque...","Aplicando tecnología de compresión avanzada...","¡Tu imagen será ligera y hermosa a la vez!"];
        imageInput.addEventListener("change",handleImageUpload),qualitySlider.addEventListener("input",updateQualityValue),formatCards.forEach(e=>{e.addEventListener("click",()=>{formatCards.forEach(e=>e.classList.remove("selected")),e.classList.add("selected"),activeCard&&activeCard.classList.remove("active"),e.classList.add("active"),activeCard=e,selectedFormatInfo.classList.remove("hidden"),selectedFormatName.textContent=e.dataset.name,setTimeout(()=>{setCropRatio(e.dataset.ratio),setTimeout(()=>{e.classList.remove("active")},1500)},300)})}),customFormatBtn.addEventListener("click",()=>{formatCards.forEach(e=>e.classList.remove("selected")),activeCard&&(activeCard.classList.remove("active"),activeCard=null),selectedFormatInfo.classList.remove("hidden"),selectedFormatName.textContent="Formato Personalizado",setCropRatio("custom")}),backButton.addEventListener("click",goToUpload),processButton.addEventListener("click",processImage),editAgainButton.addEventListener("click",goToEdit),downloadButton.addEventListener("click",function(e){e.preventDefault(),downloadProcessedImage()}),downloadAsButton.addEventListener("click",function(e){const t=downloadAsButton.getBoundingClientRect();downloadFormatMenu.style.top=\`\${t.bottom+window.scrollY}px\`,downloadFormatMenu.style.right=\`\${window.innerWidth-t.right}px\`,downloadFormatMenu.classList.toggle("hidden"),e.stopPropagation()}),downloadFormatOptions.forEach(e=>{e.addEventListener("click",function(){currentImageFormat=this.dataset.format,currentFileExtension=this.dataset.ext,downloadFormatMenu.classList.add("hidden"),downloadProcessedImage()})}),document.addEventListener("click",function(e){!downloadFormatMenu.contains(e.target)&&e.target!==downloadAsButton&&downloadFormatMenu.classList.add("hidden")}),setInterval(showRandomMotivation,5e3);
        function showRandomMotivation(){!editSection.classList.contains("hidden")&&(currentMotivationMessage?(currentMotivationMessage.classList.remove("show"),setTimeout(()=>{currentMotivationMessage&&currentMotivationMessage.parentNode&&currentMotivationMessage.remove(),showNewMotivationMessage()},500)):showNewMotivationMessage())}
        function showNewMotivationMessage(){const e=motivationalMessages[Math.floor(Math.random()*motivationalMessages.length)],t=document.createElement("div");t.className="motivation-message",t.textContent=e,motivationContainer.appendChild(t),currentMotivationMessage=t,t.offsetHeight,t.classList.add("show"),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>{t.parentNode&&t.remove(),currentMotivationMessage=null},500)},3e3)}
        function showProcessingMotivationalMessages(){const e=()=>{const e=processingMotivationalMessages[Math.floor(Math.random()*processingMotivationalMessages.length)];currentProcessingMessage?(currentProcessingMessage.classList.add("hide"),currentProcessingMessage.classList.remove("show"),setTimeout(()=>{currentProcessingMessage&&currentProcessingMessage.parentNode&&currentProcessingMessage.remove(),t(e)},500)):t(e)};function t(e){const t=document.createElement("div");t.className="processing-message",t.textContent=e,processingMessageContainer.appendChild(t),currentProcessingMessage=t,t.offsetHeight,t.classList.add("show")}return e(),setInterval(e,3e3)}
        const dropArea=uploadSection.querySelector(".upload-area");function preventDefaults(e){e.preventDefault(),e.stopPropagation()}function highlight(){dropArea.style.backgroundColor="#1f2937"}function unhighlight(){dropArea.style.backgroundColor="#111827"}function handleDrop(e){const t=e.dataTransfer.files;t.length&&(imageInput.files=t,handleImageUpload())}function startDrag(e){e.target===cropOverlay&&(isDragging=!0,startX=e.clientX,startY=e.clientY,startLeft=cropOverlay.offsetLeft,startTop=cropOverlay.offsetTop,document.addEventListener("mousemove",drag),document.addEventListener("mouseup",stopDrag),e.preventDefault())}function drag(e){if(!isDragging)return;const t=e.clientX-startX,o=e.clientY-startY;let n=startLeft+t,a=startTop+o;const r=cropperContainer.getBoundingClientRect(),i=cropOverlay.getBoundingClientRect();n<0&&(n=0),a<0&&(a=0),n+i.width>r.width&&(n=r.width-i.width),a+i.height>r.height&&(a=r.height-i.height),cropOverlay.style.left=\`\${n}px\`,cropOverlay.style.top=\`\${a}px\`}function stopDrag(){isDragging=!1,document.removeEventListener("mousemove",drag),document.removeEventListener("mouseup",stopDrag)}function startResize(e,t){isResizing=!0,currentResizeHandle=t.className.split(" ")[1],startX=e.clientX,startY=e.clientY,startWidth=cropOverlay.offsetWidth,startHeight=cropOverlay.offsetHeight,startLeft=cropOverlay.offsetLeft,startTop=cropOverlay.offsetTop,document.addEventListener("mousemove",resize),document.addEventListener("mouseup",stopResize),e.preventDefault(),e.stopPropagation()}function resize(e){if(!isResizing)return;const t=e.clientX-startX,o=e.clientY-startY;let n=startWidth,a=startHeight,r=startLeft,i=startTop;switch(currentResizeHandle){case"nw":n=startWidth-t,a=startHeight-o,r=startLeft+t,i=startTop+o;break;case"ne":n=startWidth+t,a=startHeight-o,i=startTop+o;break;case"sw":n=startWidth-t,a=startHeight+o,r=startLeft+t;break;case"se":n=startWidth+t,a=startHeight+o}if("custom"!==currentRatio){let[e,s]=currentRatio.split(":").map(Number);"1.91:1"===currentRatio&&(e=1.91,s=1);const d=e/s;["nw","sw"].includes(currentResizeHandle)?a=n/d:n=a*d,["nw","ne"].includes(currentResizeHandle)&&("nw"===currentResizeHandle&&(r=startLeft+(startWidth-n)),i=startTop+(startHeight-a))}const s=50;n<s&&(n=s,["nw","sw"].includes(currentResizeHandle)&&(r=startLeft+startWidth-s)),a<s&&(a=s,["nw","ne"].includes(currentResizeHandle)&&(i=startTop+startHeight-s));const d=cropperContainer.getBoundingClientRect();r<0&&(n+=r,r=0),i<0&&(a+=i,i=0),r+n>d.width&&(n=d.width-r),i+a>d.height&&(a=d.height-i),cropOverlay.style.width=\`\${n}px\`,cropOverlay.style.height=\`\${a}px\`,cropOverlay.style.left=\`\${r}px\`,cropOverlay.style.top=\`\${i}px\`}function stopResize(){isResizing=!1,document.removeEventListener("mousemove",resize),document.removeEventListener("mouseup",stopResize)}function handleImageUpload(){if(!imageInput.files||!imageInput.files[0])return;const e=imageInput.files[0];originalFile=e,originalSize=e.size,"image/png"===e.type?(currentImageFormat="image/png",currentFileExtension="png"):(currentImageFormat="image/jpeg",currentFileExtension="jpg");const t=new FileReader;t.onload=function(e){originalImage=new Image,originalImage.onload=function(){uploadSection.classList.add("hidden"),editSection.classList.remove("hidden"),previewImage.src=e.target.result,updateImageInfo(),initCropper(),showRandomMotivation()},originalImage.src=e.target.result},t.readAsDataURL(e)}function updateQualityValue(){qualityValue.textContent=\`\${qualitySlider.value}%\`}function setCropRatio(e){currentRatio=e;const t=cropperContainer.getBoundingClientRect(),o=t.width,n=t.height;let a,r;if("custom"!==e){let[t,i]=e.split(":").map(Number);"1.91:1"===e&&(t=1.91,i=1);const s=t/i;o/n>s?(r=0.8*n,a=r*s):(a=0.8*o,r=a/s);const d=(o-a)/2,c=(n-r)/2;cropOverlay.style.width=\`\${a}px\`,cropOverlay.style.height=\`\${r}px\`,cropOverlay.style.left=\`\${d}px\`,cropOverlay.style.top=\`\${c}px\`}}function initCropper(){const e=cropperContainer.getBoundingClientRect(),t=e.width,o=e.height,n=originalImage.width,a=originalImage.height,r=n/a;let i,s;r>t/o?(i=t,s=i/r):(s=o,i=s*r),previewImage.style.width=\`\${i}px\`,previewImage.style.height=\`\${s}px\`,previewImage.style.left=\`\${(t-i)/2}px\`,previewImage.style.top=\`\${(o-s)/2}px\`,setCropRatio("1:1"),formatCards.length>0&&formatCards[0].click()}function updateImageInfo(){const e=e=>e<1024?e+" B":e<1048576?(e/1024).toFixed(1)+" KB":(e/1048576).toFixed(1)+" MB";originalSizeEl.textContent=\`Tamaño original: \${e(originalSize)}\`,dimensionsEl.textContent=\`Dimensiones: \${originalImage.width} × \${originalImage.height}\`}function goToUpload(){editSection.classList.add("hidden"),uploadSection.classList.remove("hidden"),activeCard&&(activeCard.classList.remove("active"),activeCard=null),selectedFormatInfo.classList.add("hidden"),formatCards.forEach(e=>e.classList.remove("selected"))}function goToEdit(){downloadSection.classList.add("hidden"),editSection.classList.remove("hidden"),!activeCard&&formatCards.length>0&&formatCards[0].click()}function processImage(){loadingOverlay.classList.remove("hidden"),processingMessageContainer.innerHTML="",currentProcessingMessage=null;const e=()=>{const e=loadingMessages[Math.floor(Math.random()*loadingMessages.length)];loadingMessage.textContent=e};e();const t=setInterval(e,2e3);processingMessageInterval=showProcessingMotivationalMessages(),setTimeout(()=>{try{const e=document.createElement("canvas"),o=e.getContext("2d"),n=cropperContainer.getBoundingClientRect(),a=cropOverlay.getBoundingClientRect(),r=previewImage.getBoundingClientRect(),i=originalImage.width/r.width,s=originalImage.height/r.height,d=(a.left-r.left)*i,c=(a.top-r.top)*s,l=a.width*i,g=a.height*s;e.width=l,e.height=g,o.drawImage(originalImage,d,c,l,g,0,0,l,g);const u=parseInt(qualitySlider.value)/100,m=e.toDataURL(currentImageFormat,u);processedImageData={dataUrl:m,width:Math.round(l),height:Math.round(g)};const p=m.split(",")[1],h=Math.ceil(3*p.length/4);beforeImage.src=originalImage.src,afterImage.src=m;const f=e=>e<1024?e+" B":e<1048576?(e/1024).toFixed(1)+" KB":(e/1048576).toFixed(1)+" MB",y=(100*(1-h/originalSize)).toFixed(1);beforeInfo.textContent=\`Original: \${f(originalSize)} (\${originalImage.width} × \${originalImage.height})\`,afterInfo.textContent=\`Comprimido: \${f(h)} (\${Math.round(l)} × \${Math.round(g)}) - Reducción: \${y}%\`,editSection.classList.add("hidden"),downloadSection.classList.remove("hidden")}catch(e){console.error("Error al procesar la imagen:",e),alert("Hubo un error al procesar tu imagen. Por favor, inténtalo de nuevo.")}finally{clearInterval(t),clearInterval(processingMessageInterval),loadingOverlay.classList.add("hidden")}},2500)}function downloadProcessedImage(){if(!processedImageData)return;try{const e=document.createElement("a"),t=\`Eli-Compressor_\${originalFile.name.split(".")[0]}.\${currentFileExtension}\`,o=document.createElement("canvas");o.width=processedImageData.width,o.height=processedImageData.height;const n=o.getContext("2d"),a=new Image;a.onload=function(){n.drawImage(a,0,0);const r=parseInt(qualitySlider.value)/100,i=o.toDataURL(currentImageFormat,r);e.href=i,e.download=t,document.body.appendChild(e),e.click(),document.body.removeChild(e),showDownloadNotification()},a.src=processedImageData.dataUrl}catch(e){console.error("Error al descargar la imagen:",e),alert("Hubo un error al descargar la imagen. Por favor, inténtalo de nuevo.")}}function showDownloadNotification(){downloadNotification.classList.add("show"),setTimeout(()=>{downloadNotification.classList.remove("show")},3e3)}["dragenter","dragover","dragleave","drop"].forEach(e=>{dropArea.addEventListener(e,preventDefaults,!1)}),["dragenter","dragover"].forEach(e=>{dropArea.addEventListener(e,highlight,!1)}),["dragleave","drop"].forEach(e=>{dropArea.addEventListener(e,unhighlight,!1)}),dropArea.addEventListener("drop",handleDrop,!1),cropOverlay.addEventListener("mousedown",startDrag),resizeHandles.forEach(e=>{e.addEventListener("mousedown",t=>startResize(t,e))}),cropOverlay.addEventListener("touchstart",handleTouchStart,!1),document.addEventListener("touchmove",handleTouchMove,!1),document.addEventListener("touchend",handleTouchEnd,!1);let touchDragging=!1,touchStartX,touchStartY;function handleTouchStart(e){e.target===cropOverlay&&(touchDragging=!0,touchStartX=e.touches[0].clientX,touchStartY=e.touches[0].clientY,startLeft=cropOverlay.offsetLeft,startTop=cropOverlay.offsetTop,e.preventDefault())}function handleTouchMove(e){if(!touchDragging)return;const t=e.touches[0].clientX,o=e.touches[0].clientY,n=t-touchStartX,a=o-touchStartY;let r=startLeft+n,i=startTop+a;const s=cropperContainer.getBoundingClientRect(),d=cropOverlay.getBoundingClientRect();r<0&&(r=0),i<0&&(i=0),r+d.width>s.width&&(r=s.width-d.width),i+d.height>s.height&&(i=s.height-d.height),cropOverlay.style.left=\`\${r}px\`,cropOverlay.style.top=\`\${i}px\`,e.preventDefault()}function handleTouchEnd(){touchDragging=!1}
    </script>
</body>
</html>
`;

export const ImageCompressorTool: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative w-full h-screen bg-black flex flex-col">
            {/* Back Button Overlay */}
            <Link to="/herramientas" className="absolute top-4 left-4 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-agency-red hover:scale-110 transition-all border border-white/20">
                <ArrowLeft />
            </Link>
            
            {/* Iframe Container */}
            <iframe
                srcDoc={htmlContent}
                className="w-full h-full border-none"
                title="Eli-Compressor"
                sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-modals"
                style={{ width: '100%', height: '100vh', border: 'none' }}
            />
        </div>
    );
};