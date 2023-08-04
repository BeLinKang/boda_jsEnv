const fs = require("fs");
const path = require("path");
let env_path = path.resolve(__dirname, '../env/');
let mylist = ''
let mylist2 = ''
let name_ = []
filelist=[
    "EventTarget",
    "Node",
    "WindowProperties",
    "Window",
    "AudioNode",
    "AudioScheduledSourceNode",
    "StorageManager",
    "Worklet",
    "Element",
    "MediaStreamTrack",
    "HTMLElement",
    "HTMLCollection",
    "NetworkInformation",
    "CustomElementRegistry",
    "Event",
    "UIEvent",
    "MouseEvent",
    "Document",
    "HTMLDocument",
    "AuthenticatorResponse",
    "Location",
    "Storage",
    "CharacterData",
    "Text",
    "Database",
    "CloseEvent",
    "Notification",
    "IDBDatabase",
    "IDBRequest",
    "IDBOpenDBRequest",
    "DeprecatedStorageQuota",
    "IDBFactory",
    "History",
    "Screen",
    "Sensor",
    "CSSStyleDeclaration",
    "CanvasRenderingContext2D",
    "WebGLRenderingContext",
    "MediaQueryList",
    "MutationRecord",
    "webkitRequestFileSystem",
    "CSSRuleList",
    "Attr",
    "Option",
    "Navigation",
    "MediaStream",
    "TrustedTypePolicyFactory",
    "Scheduler",
    "CookieStore",
    "RTCSessionDescription",
    "RTCDataChannel",
    "CacheStorage",
    // "Promise",
    "OffscreenCanvasRenderingContext2D",
    "DeprecatedStorageInfo",
    "SpeechSynthesis",
    "VisualViewport",
    "BeforeInstallPromptEvent",
    "BarProp",
    "BaseAudioContext",
    "BluetoothUUID",
    "StyleMedia",
    "HTMLMediaElement",
    "Audio",
    "HTMLAudioElement",
    "Crypto",
    "CDATASection",
    "CredentialsContainer",
    "Comment",
    "DocumentFragment",
    "DocumentType",
    "DOMParser",
    "Bluetooth",
    "External",
    "PointerEvent",
    "WebSocket",
    "SourceBuffer",
    "DOMStringList",
    "Headers",
    "IDBObjectStore",
    "IDBTransaction",
    "IDBVersionChangeEvent",
    "TextTrackList",
    "SpeechSynthesisUtterance",
    "MediaEncryptedEvent",
    "MutationObserver",
    "NamedNodeMap",
    "NodeList",
    "OfflineAudioContext",
    "Path2D",
    "LockManager",
    "XPathExpression",
    "Performance",
    "ScreenOrientation",
    "PerformanceEntry",
    "PerformancePaintTiming",
    "PerformanceResourceTiming",
    "Permissions",
    "PermissionStatus",
    "Request",
    "SVGElement",
    "DeviceOrientationEvent",
    "PresentationConnectionCloseEvent",
    "SVGGraphicsElement",
    "SVGGElement",
    "SVGPatternElement",
    "SVGGeometryElement",
    "SVGPathElement",
    "SVGSVGElement",
    "SVGSymbolElement",
    "SVGUseElement",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "RTCPeerConnection",
    "WebGLBuffer",
    "WebGLProgram",
    "CSS",
    "OrientationSensor",
    "Navigator",
    "BatteryManager",
    "Plugin",
    "PluginArray",
    "MimeType",
    "MimeTypeArray",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequest",
    "AbortController",
    "AbortSignal",
    "AbsoluteOrientationSensor",
    "AbstractRange",
    "Accelerometer",
    "alert",
    "AnalyserNode",
    "Animation",
    "AnimationEffect",
    "AnimationEvent",
    "AnimationPlaybackEvent",
    "AnimationTimeline",
    "AudioBuffer",
    "AudioBufferSourceNode",
    "AudioContext",
    "AudioData",
    "AudioDecoder",
    "AudioDestinationNode",
    "AudioEncoder",
    "AudioListener",
    "AudioParam",
    "AudioParamMap",
    "AudioProcessingEvent",
    "AudioSinkInfo",
    "AudioWorklet",
    "AudioWorkletNode",
    "AuthenticatorAssertionResponse",
    "AuthenticatorAttestationResponse",
    "BackgroundFetchManager",
    "BackgroundFetchRecord",
    "BackgroundFetchRegistration",
    "BeforeUnloadEvent",
    "BiquadFilterNode",
    "Blob",
    "BlobEvent",
    "BluetoothCharacteristicProperties",
    "BluetoothDevice",
    "BluetoothRemoteGATTCharacteristic",
    "BluetoothRemoteGATTDescriptor",
    "BluetoothRemoteGATTServer",
    "BluetoothRemoteGATTService",
    // "blur",
    "BroadcastChannel",
    "BrowserCaptureMediaStreamTrack",
    "StyleSheet",
    "CSSStyleValue",
    "CSSNumericValue",
    "CSSMathValue",
    "CSSTransformComponent",
    "CSSRule",
    "CSSGroupingRule",
    "ByteLengthQueuingStrategy",
    "Cache",
    "caches",
    "cancelAnimationFrame",
    "cancelIdleCallback",
    "CanvasCaptureMediaStreamTrack",
    "CanvasFilter",
    "CanvasGradient",
    "CanvasPattern",
    "CaptureController",
    "captureEvents",
    "ChannelMergerNode",
    "ChannelSplitterNode",
    // "clearInterval",
    // "clearTimeout",
    "clientInformation",
    "Clipboard",
    "ClipboardEvent",
    "ClipboardItem",
    // "close",
    // "closed",
    "CompositionEvent",
    "CompressionStream",
    // "confirm",
    "ConstantSourceNode",
    "ContentVisibilityAutoStateChangeEvent",
    "ConvolverNode",
    "CookieChangeEvent",
    "cookieStore",
    "CookieStoreManager",
    "CountQueuingStrategy",
    // "createImageBitmap",
    "Credential",
    // "credentialless",
    "CropTarget",
    // "crossOriginIsolated",
    "CryptoKey",
    "CSSAnimation",
    "CSSConditionRule",
    "CSSContainerRule",
    "CSSCounterStyleRule",
    "CSSFontFaceRule",
    "CSSFontPaletteValuesRule",
    "CSSImageValue",
    "CSSImportRule",
    "CSSKeyframeRule",
    "CSSKeyframesRule",
    "CSSKeywordValue",
    "CSSLayerBlockRule",
    "CSSLayerStatementRule",
    "CSSMathClamp",
    "CSSMathInvert",
    "CSSMathMax",
    "CSSMathMin",
    "CSSMathNegate",
    "CSSMathProduct",
    "CSSMathSum",
    "CSSMatrixComponent",
    "CSSMediaRule",
    "CSSNamespaceRule",
    "CSSNumericArray",
    "CSSPageRule",
    "CSSPerspective",
    "CSSPositionValue",
    "CSSPropertyRule",
    "CSSRotate",
    "CSSScale",
    "CSSSkew",
    "CSSSkewX",
    "CSSSkewY",
    "CSSStyleRule",
    "CSSStyleSheet",
    "CSSSupportsRule",
    "CSSTransformValue",
    "CSSTransition",
    "CSSTranslate",
    "CSSUnitValue",
    "CSSUnparsedValue",
    "CSSVariableReferenceValue",
    "customElements",
    "CustomEvent",
    "CustomStateSet",
    "DataTransfer",
    "DataTransferItem",
    "DataTransferItemList",
    "DecompressionStream",
    "DelayNode",
    "DelegatedInkTrailPresenter",
    "DeviceMotionEvent",
    "DeviceMotionEventAcceleration",
    "DeviceMotionEventRotationRate",
    // "devicePixelRatio",
    "DocumentTimeline",
    "DOMMatrixReadOnly",
    "DOMError",
    "DOMException",
    "DOMImplementation",
    "DOMMatrix",
    "DOMPointReadOnly",
    "DOMPoint",
    "DOMQuad",
    "DOMRectReadOnly",
    "DOMRect",
    "DOMRectList",
    "DOMStringMap",
    "DOMTokenList",
    "DragEvent",
    "DynamicsCompressorNode",
    "ElementInternals",
    "EncodedAudioChunk",
    "EncodedVideoChunk",
    "ErrorEvent",
    "EventCounts",
    "EventSource",
    "EyeDropper",
    "WritableStream",
    "FileSystemHandle",
    "FeaturePolicy",
    "FederatedCredential",
    // "fetch",
    "File",
    "FileList",
    "FileReader",
    "FileSystemDirectoryHandle",
    "FileSystemFileHandle",
    "FileSystemWritableFileStream",
    // "find",
    // "focus",
    "FocusEvent",
    "FontData",
    "FontFace",
    "FontFaceSetLoadEvent",
    "FormData",
    "FormDataEvent",
    "FragmentDirective",
    "GainNode",
    "Gamepad",
    "GamepadButton",
    "GamepadEvent",
    "GamepadHapticActuator",
    "Geolocation",
    "GeolocationCoordinates",
    "GeolocationPosition",
    "GeolocationPositionError",
    "getComputedStyle",
    "getScreenDetails",
    "getSelection",
    "GravitySensor",
    "Gyroscope",
    "HashChangeEvent",
    "HID",
    "HIDConnectionEvent",
    "HIDDevice",
    "HIDInputReportEvent",
    "Highlight",
    "HighlightRegistry",
    "HTMLAllCollection",
    "HTMLAnchorElement",
    "HTMLAreaElement",
    "HTMLBaseElement",
    "HTMLBodyElement",
    "HTMLBRElement",
    "HTMLButtonElement",
    "HTMLCanvasElement",
    "HTMLDataElement",
    "HTMLDataListElement",
    "HTMLDetailsElement",
    "HTMLDialogElement",
    "HTMLDirectoryElement",
    "HTMLDivElement",
    "HTMLDListElement",
    "HTMLEmbedElement",
    "HTMLFieldSetElement",
    "HTMLFontElement",
    "HTMLFormControlsCollection",
    "HTMLFormElement",
    "HTMLFrameElement",
    "HTMLFrameSetElement",
    "HTMLHeadElement",
    "HTMLHeadingElement",
    "HTMLHRElement",
    "HTMLHtmlElement",
    "HTMLIFrameElement",
    "HTMLImageElement",
    "HTMLInputElement",
    "HTMLLabelElement",
    "HTMLLegendElement",
    "HTMLLIElement",
    "HTMLLinkElement",
    "HTMLMapElement",
    "HTMLMarqueeElement",
    "HTMLMenuElement",
    "HTMLMetaElement",
    "HTMLMeterElement",
    "HTMLModElement",
    "HTMLObjectElement",
    "HTMLOListElement",
    "HTMLOptGroupElement",
    "HTMLOptionElement",
    "HTMLOptionsCollection",
    "HTMLOutputElement",
    "HTMLParagraphElement",
    "HTMLParamElement",
    "HTMLPictureElement",
    "HTMLPreElement",
    "HTMLProgressElement",
    "HTMLQuoteElement",
    "HTMLScriptElement",
    "HTMLSelectElement",
    "HTMLSlotElement",
    "HTMLSourceElement",
    "HTMLSpanElement",
    "HTMLStyleElement",
    "HTMLTableCaptionElement",
    "HTMLTableCellElement",
    "HTMLTableColElement",
    "HTMLTableElement",
    "HTMLTableRowElement",
    "HTMLTableSectionElement",
    "HTMLTemplateElement",
    "HTMLTextAreaElement",
    "HTMLTimeElement",
    "HTMLTitleElement",
    "HTMLTrackElement",
    "HTMLUListElement",
    "HTMLUnknownElement",
    "HTMLVideoElement",
    "MediaDeviceInfo",
    "IDBCursor",
    "IDBCursorWithValue",
    "IDBIndex",
    "IDBKeyRange",
    "IdentityCredential",
    "IdleDeadline",
    "IdleDetector",
    "IIRFilterNode",
    "Image",
    "ImageBitmap",
    "ImageBitmapRenderingContext",
    "ImageCapture",
    "ImageData",
    "ImageDecoder",
    "ImageTrack",
    "ImageTrackList",
    "indexedDB",
    "Ink",
    // "innerHeight",
    // "innerWidth",
    "InputDeviceCapabilities",
    "InputDeviceInfo",
    "InputEvent",
    "IntersectionObserver",
    "IntersectionObserverEntry",
    // "isSecureContext",
    "Keyboard",
    "KeyboardEvent",
    "KeyboardLayoutMap",
    "KeyframeEffect",
    "LargestContentfulPaint",
    "LaunchParams",
    "launchQueue",
    "LayoutShift",
    "LayoutShiftAttribution",
    "LinearAccelerationSensor",
    "localStorage",
    "locationbar",
    "Lock",
    // "matchMedia",
    "MathMLElement",
    "MediaCapabilities",
    "MediaDevices",
    "MediaElementAudioSourceNode",
    "MediaError",
    "MediaKeyMessageEvent",
    "MediaKeys",
    "MediaKeySession",
    "MediaKeyStatusMap",
    "MediaKeySystemAccess",
    "MediaList",
    "MediaMetadata",
    "MediaQueryListEvent",
    "MediaRecorder",
    "MediaSession",
    "MediaSource",
    "MediaSourceHandle",
    "MediaStreamAudioDestinationNode",
    "MediaStreamAudioSourceNode",
    "MediaStreamEvent",
    "MediaStreamTrackEvent",
    "MediaStreamTrackGenerator",
    "MediaStreamTrackProcessor",
    "menubar",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "MIDIPort",
    "MIDIAccess",
    "MIDIConnectionEvent",
    "MIDIInput",
    "MIDIInputMap",
    "MIDIMessageEvent",
    "MIDIOutput",
    "MIDIOutputMap",
    // "moveBy",
    // "moveTo",
    "MutationEvent",
    // "name",
    "NavigateEvent",
    "NavigationCurrentEntryChangeEvent",
    "NavigationDestination",
    "NavigationHistoryEntry",
    "NavigationPreloadManager",
    "NavigationTransition",
    "NavigatorManagedData",
    "NavigatorUAData",
    "NodeFilter",
    "NodeIterator",
    "OfflineAudioCompletionEvent",
    // "offscreenBuffering",
    "OffscreenCanvas",
    // "open",
    "openDatabase",
    // "origin",
    // "originAgentCluster",
    "OscillatorNode",
    "OTPCredential",
    // "outerHeight",
    // "outerWidth",
    "OverconstrainedError",
    "PaymentRequestUpdateEvent",
    "PageTransitionEvent",
    // "pageXOffset",
    // "pageYOffset",
    "PannerNode",
    "PasswordCredential",
    "PaymentAddress",
    "PaymentManager",
    "PaymentMethodChangeEvent",
    "PaymentRequest",
    "PaymentResponse",
    "PerformanceElementTiming",
    "PerformanceEventTiming",
    "PerformanceLongTaskTiming",
    "PerformanceMark",
    "PerformanceMeasure",
    "PerformanceNavigation",
    "PerformanceNavigationTiming",
    "PerformanceObserver",
    "PerformanceObserverEntryList",
    "PerformanceServerTiming",
    "PerformanceTiming",
    "PeriodicSyncManager",
    "PeriodicWave",
    "personalbar",
    "PictureInPictureEvent",
    "PictureInPictureWindow",
    "PopStateEvent",
    "postMessage",
    "Presentation",
    "PresentationAvailability",
    "PresentationConnection",
    "PresentationConnectionAvailableEvent",
    "PresentationConnectionList",
    "PresentationReceiver",
    "PresentationRequest",
    // "print",
    "ProcessingInstruction",
    "Profiler",
    "ProgressEvent",
    "PromiseRejectionEvent",
    // "prompt",
    "PublicKeyCredential",
    "PushManager",
    "PushSubscription",
    "PushSubscriptionOptions",
    "queryLocalFonts",
    "queueMicrotask",
    "RadioNodeList",
    "Range",
    "ReadableByteStreamController",
    "ReadableStream",
    "ReadableStreamBYOBReader",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "ReadableStreamDefaultReader",
    "RelativeOrientationSensor",
    "releaseEvents",
    "RemotePlayback",
    "reportError",
    "ReportingObserver",
    "requestAnimationFrame",
    "requestIdleCallback",
    // "resizeBy",
    "ResizeObserver",
    "ResizeObserverEntry",
    "ResizeObserverSize",
    // "resizeTo",
    "Response",
    "RTCCertificate",
    "RTCDataChannelEvent",
    "RTCDtlsTransport",
    "RTCDTMFSender",
    "RTCDTMFToneChangeEvent",
    "RTCEncodedAudioFrame",
    "RTCEncodedVideoFrame",
    "RTCError",
    "RTCErrorEvent",
    "RTCIceCandidate",
    "RTCIceTransport",
    "RTCPeerConnectionIceErrorEvent",
    "RTCPeerConnectionIceEvent",
    "RTCRtpReceiver",
    "RTCRtpSender",
    "RTCRtpTransceiver",
    "RTCSctpTransport",
    "RTCStatsReport",
    "RTCTrackEvent",
    "Sanitizer",
    "Scheduling",
    "ScreenDetailed",
    "ScreenDetails",
    // "screenLeft",
    // "screenTop",
    // "screenX",
    // "screenY",
    "ScriptProcessorNode",
    // "scroll",
    // "scrollbars",
    // "scrollBy",
    // "scrollTo",
    // "scrollX",
    // "scrollY",
    "SecurityPolicyViolationEvent",
    "Selection",
    "SensorErrorEvent",
    "Serial",
    "SerialPort",
    "ServiceWorker",
    "ServiceWorkerContainer",
    "ServiceWorkerRegistration",
    "sessionStorage",
    "ShadowRoot",
    "SharedWorker",
    "showDirectoryPicker",
    "showOpenFilePicker",
    "showSaveFilePicker",
    "SourceBufferList",
    "speechSynthesis",
    "SpeechSynthesisEvent",
    "SpeechSynthesisErrorEvent",
    "StaticRange",
    // "status",
    "statusbar",
    "StereoPannerNode",
    "stop",
    "StorageEvent",
    "structuredClone",
    "styleMedia",
    "StylePropertyMapReadOnly",
    "StylePropertyMap",
    "StyleSheetList",
    "SubmitEvent",
    "SubtleCrypto",
    "SVGAElement",
    "SVGAngle",
    "SVGAnimatedAngle",
    "SVGAnimatedBoolean",
    "SVGAnimatedEnumeration",
    "SVGAnimatedInteger",
    "SVGAnimatedLength",
    "SVGAnimatedLengthList",
    "SVGAnimatedNumber",
    "SVGAnimatedNumberList",
    "SVGAnimatedPreserveAspectRatio",
    "SVGAnimatedRect",
    "SVGAnimatedString",
    "SVGAnimatedTransformList",
    "SVGAnimationElement",
    "SVGAnimateElement",
    "SVGAnimateMotionElement",
    "SVGAnimateTransformElement",
    "SVGCircleElement",
    "SVGClipPathElement",
    "SVGComponentTransferFunctionElement",
    "SVGDefsElement",
    "SVGDescElement",
    "SVGEllipseElement",
    "SVGFEBlendElement",
    "SVGFEColorMatrixElement",
    "SVGFEComponentTransferElement",
    "SVGFECompositeElement",
    "SVGFEConvolveMatrixElement",
    "SVGFEDiffuseLightingElement",
    "SVGFEDisplacementMapElement",
    "SVGFEDistantLightElement",
    "SVGFEDropShadowElement",
    "SVGFEFloodElement",
    "SVGFEFuncAElement",
    "SVGFEFuncBElement",
    "SVGFEFuncGElement",
    "SVGFEFuncRElement",
    "SVGFEGaussianBlurElement",
    "SVGFEImageElement",
    "SVGFEMergeElement",
    "SVGFEMergeNodeElement",
    "SVGFEMorphologyElement",
    "SVGFEOffsetElement",
    "SVGFEPointLightElement",
    "SVGFESpecularLightingElement",
    "SVGFESpotLightElement",
    "SVGFETileElement",
    "SVGFETurbulenceElement",
    "SVGFilterElement",
    "SVGForeignObjectElement",
    "SVGGradientElement",
    "SVGImageElement",
    "SVGLength",
    "SVGLengthList",
    "SVGLinearGradientElement",
    "SVGLineElement",
    "SVGMarkerElement",
    "SVGMaskElement",
    "SVGMatrix",
    "SVGMetadataElement",
    "SVGMPathElement",
    "SVGNumber",
    "SVGNumberList",
    "SVGPoint",
    "SVGPointList",
    "SVGPolygonElement",
    "SVGPolylineElement",
    "SVGPreserveAspectRatio",
    "SVGRadialGradientElement",
    "SVGRect",
    "SVGRectElement",
    "SVGScriptElement",
    "SVGSetElement",
    "SVGStopElement",
    "SVGStringList",
    "SVGStyleElement",
    "SVGSwitchElement",
    "SVGTextContentElement",
    "SVGTextPositioningElement",
    "SVGTextElement",
    "SVGTextPathElement",
    "SVGTitleElement",
    "SVGTransform",
    "SVGTransformList",
    "SVGTSpanElement",
    "SVGUnitTypes",
    "SVGViewElement",
    "SyncManager",
    "TaskAttributionTiming",
    "TaskController",
    "TaskPriorityChangeEvent",
    "TaskSignal",
    "TextDecoder",
    "TextDecoderStream",
    "TextEncoder",
    "TextEncoderStream",
    "TextEvent",
    "TextMetrics",
    "TextTrack",
    "TextTrackCue",
    "TextTrackCueList",
    "TimeRanges",
    "toolbar",
    "Touch",
    "TouchEvent",
    "TouchList",
    "TrackEvent",
    "TransformStream",
    "TransformStreamDefaultController",
    "TransitionEvent",
    "TreeWalker",
    "TrustedHTML",
    "TrustedScript",
    "TrustedScriptURL",
    "TrustedTypePolicy",
    "trustedTypes",
    "URL",
    "URLPattern",
    "URLSearchParams",
    "USB",
    "USBAlternateInterface",
    "USBConfiguration",
    "USBConnectionEvent",
    "USBDevice",
    "USBEndpoint",
    "USBInterface",
    "USBInTransferResult",
    "USBIsochronousInTransferPacket",
    "USBIsochronousInTransferResult",
    "USBIsochronousOutTransferPacket",
    "USBIsochronousOutTransferResult",
    "USBOutTransferResult",
    "UserActivation",
    "ValidityState",
    "VideoColorSpace",
    "VideoDecoder",
    "VideoEncoder",
    "VideoFrame",
    "VideoPlaybackQuality",
    "ViewTransition",
    // "vilame_setter",
    "VirtualKeyboard",
    "VirtualKeyboardGeometryChangeEvent",
    "VTTCue",
    "WakeLock",
    "WakeLockSentinel",
    "WaveShaperNode",
    "WebGL2RenderingContext",
    "WebGLActiveInfo",
    "WebGLContextEvent",
    "WebGLFramebuffer",
    "WebGLQuery",
    "WebGLRenderbuffer",
    "WebGLSampler",
    "WebGLSync",
    "WebGLTexture",
    "WebGLTransformFeedback",
    "WebGLUniformLocation",
    "WebGLVertexArrayObject",
    "webkitCancelAnimationFrame",
    "WebKitCSSMatrix",
    "webkitMediaStream",
    "WebKitMutationObserver",
    "webkitRequestAnimationFrame",
    "webkitResolveLocalFileSystemURL",
    "webkitRTCPeerConnection",
    "webkitSpeechGrammar",
    "webkitSpeechGrammarList",
    "webkitSpeechRecognition",
    "webkitSpeechRecognitionError",
    "webkitSpeechRecognitionEvent",
    "webkitURL",
    "WebTransport",
    "WebTransportBidirectionalStream",
    "WebTransportDatagramDuplexStream",
    "WebTransportError",
    "WheelEvent",
    "WindowControlsOverlay",
    "WindowControlsOverlayGeometryChangeEvent",
    "Worker",
    "WritableStreamDefaultController",
    "WritableStreamDefaultWriter",
    // "ws",
    "XRSpace",
    "XRDepthInformation",
    "XRReferenceSpace",
    "XMLDocument",
    "XMLHttpRequestUpload",
    "XMLSerializer",
    "XPathEvaluator",
    "XPathResult",
    "XRAnchor",
    "XRAnchorSet",
    "XRBoundedReferenceSpace",
    "XRCamera",
    "XRCPUDepthInformation",
    "XRDOMOverlayState",
    "XRFrame",
    "XRHitTestResult",
    "XRHitTestSource",
    "XRInputSource",
    "XRInputSourceArray",
    "XRInputSourceEvent",
    "XRInputSourcesChangeEvent",
    "XRLayer",
    "XRLightEstimate",
    "XRLightProbe",
    "XRPose",
    "XRRay",
    "XRReferenceSpaceEvent",
    "XRRenderState",
    "XRRigidTransform",
    "XRSession",
    "XRSessionEvent",
    "XRSystem",
    "XRTransientInputHitTestResult",
    "XRTransientInputHitTestSource",
    "XRView",
    "XRViewerPose",
    "XRViewport",
    "XRWebGLBinding",
    "XRWebGLDepthInformation",
    "XRWebGLLayer",
    "XSLTProcessor",
    // "Error",
    "MemoryInfo",
    // "atob",
    // "btoa",
    // "chrome",
    "GPU",
    "GPUAdapter",
    "GPUAdapterInfo",
    "GPUBindGroup",
    "GPUBindGroupLayout",
    "GPUBuffer",
    "GPUBufferUsage",
    "GPUCanvasContext",
    "GPUColorWrite",
    "GPUCommandBuffer",
    "GPUCommandEncoder",
    "GPUCompilationInfo",
    "GPUCompilationMessage",
    "GPUComputePassEncoder",
    "GPUComputePipeline",
    "GPUDevice",
    "GPUDeviceLostInfo",
    "GPUError",
    "GPUExternalTexture",
    "GPUInternalError",
    "GPUMapMode",
    "GPUOutOfMemoryError",
    "GPUPipelineError",
    "GPUPipelineLayout",
    "GPUQuerySet",
    "GPUQueue",
    "GPURenderBundle",
    "GPURenderBundleEncoder",
    "GPURenderPassEncoder",
    "GPURenderPipeline",
    "GPUSampler",
    "GPUShaderModule",
    "GPUShaderStage",
    "GPUSupportedFeatures",
    "GPUSupportedLimits",
    "GPUTexture",
    "GPUTextureUsage",
    "GPUTextureView",
    "GPUUncapturedErrorEvent",
    "GPUValidationError",
    "LaunchQueue",
    // "length",
    "ToggleEvent",
  ]

// files=fs.readdirSync(env_path)
// for (f of files){
//     name=f.split('.js')[0]
//     // console.log(name)
//     if (filelist.indexOf(name)==-1){
//         console.log('name',name,'不存在')
//         filelist.push(name)
//     }
// }

// console.log(filelist)
// debugger
// debugger
function getFile(name) {
    // name_.push(name)
    try {
        // name_.push(name)
        return fs.readFileSync(`${env_path}/${name}.js`) + "\r\n";

    } catch (e) {
        console.log(`${env_path}/${name}.js不存在`)
        return "";
    }
}

// function getHtmlElement() {
//     try {
//         let code = "";
//         let filelist = fs.readdirSync(`${env_path}/htmlElements`)
//         for (let i = 0; i < filelist.length; i++) {
//             code += fs.readFileSync(`${env_path}/htmlElements/${filelist[i]}`) + "\r\n"
//             // name_.push(filelist[i])

//         }
//         return code
//     } catch (e) {
//         console.log(`${env_path}/${name}.js不存在`)
//         return "";
//     }
// }

function getCode() {
    
    let code = "//env相关代码" + "\r\n"
    for (file of filelist){
        code += getFile(file)
    }
    
    // code += getFile("WindowProperties")
    // code += getFile("Window")
    // code += getFile("Node")
    // code +=getFile('StorageManager')
    // code += getFile("Element")
    // code += getFile("HTMLElement")
    // code += getFile("HTMLCollection")
    // // code += getHtmlElement()
    // code += getFile("NetworkInformation")
    // code += getFile("CustomElementRegistry")
    // code += getFile("Event");
    // code += getFile("UIEvent");
    // code += getFile("MouseEvent");
    // code += getFile("Document")
    // code += getFile("HTMLDocument")
    // code += getFile("Location")
    // code += getFile("Storage")
    // code += getFile("CharacterData")
    // code += getFile("Text")
    // code += getFile('Database')
    // code += getFile('CloseEvent')
    // code += getFile('Notification')
    // code += getFile("IDBDatabase")
    // code += getFile("IDBRequest")
    // code += getFile("IDBOpenDBRequest")
    // code += getFile("IDBFactory")
    // code += getFile("History")
    // code += getFile("Screen")
    // code += getFile("CSSStyleDeclaration")
    // code += getFile("CanvasRenderingContext2D")
    // code += getFile("WebGLRenderingContext")
    // code += getFile("MediaQueryList")
    // code += getFile('MutationRecord')
    // code +=getFile('webkitRequestFileSystem')
    // // code += getFile("matchMedia")
    // code += getFile("CSSRuleList")
    // code += getFile('Attr')
    // code += getFile('Option')
    // code += getFile('Navigation')
    // code += getFile("MediaStream")
    // code += getFile("TrustedTypePolicyFactory")
    // code += getFile('Scheduler')
    // code += getFile("CookieStore")
    // code +=getFile('RTCSessionDescription')
    // code+=  getFile('RTCDataChannel')
    // code += getFile("CacheStorage")
    // code +=getFile('Promise')
    // code += getFile('OffscreenCanvasRenderingContext2D')
    // code += getFile('DeprecatedStorageInfo')
    // code += getFile('SpeechSynthesis')
    // code += getFile("VisualViewport")
    // code += getFile('BeforeInstallPromptEvent')
    // code += getFile("BarProp")
    // code += getFile("BaseAudioContext")
    // code += getFile("BluetoothUUID")
    // code += getFile('StyleMedia')
    // code += getFile('Audio')
    // code += getFile("Crypto")
    // code +=getFile('HTMLAudioElement')
    // code += getFile("CDATASection")
    // code +=getFile('CredentialsContainer')
    // code += getFile("Comment")
    // code += getFile("DocumentFragment")
    // code += getFile("DocumentType")
    // code += getFile("DOMParser")
    // code +=getFile('Bluetooth')
    // code += getFile("External")
    // code+=getFile('PointerEvent')
    // code += getFile('WebSocket')
    // code += getFile('SourceBuffer')
    // code += getFile("DOMStringList")
    // code += getFile("Headers")
    // code += getFile("IDBObjectStore")
    // code += getFile("IDBTransaction")
    // code += getFile("IDBVersionChangeEvent")
    // code += getFile('TextTrackList')
    // code += getFile('SpeechSynthesisUtterance')
    // code += getFile("MediaEncryptedEvent")
    // code += getFile("MutationObserver")
    // code += getFile("NamedNodeMap")
    // code += getFile("NodeList")
    // code += getFile("OfflineAudioContext")
    // code += getFile("Path2D")
    // code +=getFile('LockManager')
    // code +=getFile('XPathExpression')
    // code += getFile("Performance")
    // code += getFile('ScreenOrientation')
    // code += getFile("PerformanceEntry")
    // code += getFile("PerformancePaintTiming")
    // code +=getFile("PerformanceResourceTiming")
    // code += getFile("Permissions")
    // code += getFile("PermissionStatus")
    // code += getFile("Request")
    // code += getFile("SVGElement")
    // code+=getFile('DeviceOrientationEvent')
    // code +=getFile('PresentationConnectionCloseEvent')
    // code += getFile("SVGGraphicsElement")
    // code += getFile('SVGGElement')
    // code += getFile('SVGPatternElement')
    // code += getFile("SVGGeometryElement")
    // code += getFile("SVGPathElement")
    // code += getFile("SVGSVGElement")
    // code += getFile("SVGSymbolElement")
    // code += getFile("SVGUseElement")

    // code += getFile('WebGLShader')
    // code += getFile("WebGLShaderPrecisionFormat")

    // code += getFile("RTCPeerConnection")

    // code += getFile("WebGLBuffer")

    // code += getFile("WebGLProgram")
    // code += getFile("CSS")
    // code += getFile("Navigator")
    // code += getFile("BatteryManager")
    // code += getFile("Plugin")
    // code += getFile("PluginArray")
    // code += getFile("MimeType")
    // code += getFile("MimeTypeArray")
    // code += getFile("XMLHttpRequestEventTarget")
    // code += getFile("XMLHttpRequest")

    // code += getFile("globalThis") //全局环境放在最后
    // console.log('name_',name_)
    // debugger
    return code
}
module.exports = {
    getCode, getFile
}