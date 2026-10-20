import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DQ23DRnX.js";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => (0, import_react.createElement)("svg", {
	ref,
	...defaultAttributes,
	width: size,
	height: size,
	stroke: color,
	strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
	className: mergeClasses("lucide", className),
	...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
	...rest
}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]));
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpRight = createLucideIcon("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Boxes = createLucideIcon("boxes", [
	["path", {
		d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
		key: "lc1i9w"
	}],
	["path", {
		d: "m7 16.5-4.74-2.85",
		key: "1o9zyk"
	}],
	["path", {
		d: "m7 16.5 5-3",
		key: "va8pkn"
	}],
	["path", {
		d: "M7 16.5v5.17",
		key: "jnp8gn"
	}],
	["path", {
		d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
		key: "8zsnat"
	}],
	["path", {
		d: "m17 16.5-5-3",
		key: "8arw3v"
	}],
	["path", {
		d: "m17 16.5 4.74-2.85",
		key: "8rfmw"
	}],
	["path", {
		d: "M17 16.5v5.17",
		key: "k6z78m"
	}],
	["path", {
		d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
		key: "1xygjf"
	}],
	["path", {
		d: "M12 8 7.26 5.15",
		key: "1vbdud"
	}],
	["path", {
		d: "m12 8 4.74-2.85",
		key: "3rx089"
	}],
	["path", {
		d: "M12 13.5V8",
		key: "1io7kd"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarCheck = createLucideIcon("calendar-check", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "m9 16 2 2 4-4",
		key: "19s6y9"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleAlert = createLucideIcon("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clock = createLucideIcon("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Cloud = createLucideIcon("cloud", [["path", {
	d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
	key: "p7xjir"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CodeXml = createLucideIcon("code-xml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Database = createLucideIcon("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileText = createLucideIcon("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Gauge = createLucideIcon("gauge", [["path", {
	d: "m12 14 4-4",
	key: "9kzdfg"
}], ["path", {
	d: "M3.34 19a10 10 0 1 1 17.32 0",
	key: "19p75a"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Github = createLucideIcon("github", [["path", {
	d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
	key: "tonef"
}], ["path", {
	d: "M9 18c-4.51 2-5-2-7-2",
	key: "9comsn"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Handshake = createLucideIcon("handshake", [
	["path", {
		d: "m11 17 2 2a1 1 0 1 0 3-3",
		key: "efffak"
	}],
	["path", {
		d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
		key: "9pr0kb"
	}],
	["path", {
		d: "m21 3 1 11h-2",
		key: "1tisrp"
	}],
	["path", {
		d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
		key: "1uvwmv"
	}],
	["path", {
		d: "M3 4h8",
		key: "1ep09j"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LifeBuoy = createLucideIcon("life-buoy", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m4.93 4.93 4.24 4.24",
		key: "1ymg45"
	}],
	["path", {
		d: "m14.83 9.17 4.24-4.24",
		key: "1cb5xl"
	}],
	["path", {
		d: "m14.83 14.83 4.24 4.24",
		key: "q42g0n"
	}],
	["path", {
		d: "m9.17 14.83-4.24 4.24",
		key: "bqpfvv"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Linkedin = createLucideIcon("linkedin", [
	["path", {
		d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
		key: "c2jq9f"
	}],
	["rect", {
		width: "4",
		height: "12",
		x: "2",
		y: "9",
		key: "mk3on5"
	}],
	["circle", {
		cx: "4",
		cy: "4",
		r: "2",
		key: "bt5ra8"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lock = createLucideIcon("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MessageCircle = createLucideIcon("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plug = createLucideIcon("plug", [
	["path", {
		d: "M12 22v-5",
		key: "1ega77"
	}],
	["path", {
		d: "M15 8V2",
		key: "18g5xt"
	}],
	["path", {
		d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",
		key: "1xoxul"
	}],
	["path", {
		d: "M9 8V2",
		key: "14iosj"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plus = createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Quote = createLucideIcon("quote", [["path", {
	d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "rib7q0"
}], ["path", {
	d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "1ymkrd"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ruler = createLucideIcon("ruler", [
	["path", {
		d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
		key: "icamh8"
	}],
	["path", {
		d: "m14.5 12.5 2-2",
		key: "inckbg"
	}],
	["path", {
		d: "m11.5 9.5 2-2",
		key: "fmmyf7"
	}],
	["path", {
		d: "m8.5 6.5 2-2",
		key: "vc6u1g"
	}],
	["path", {
		d: "m17.5 15.5 2-2",
		key: "wo5hmg"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Server = createLucideIcon("server", [
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "2",
		rx: "2",
		ry: "2",
		key: "ngkwjq"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		ry: "2",
		key: "iecqi9"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "6",
		y2: "6",
		key: "16zg32"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "18",
		y2: "18",
		key: "nzw8ys"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Target = createLucideIcon("target", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "6",
		key: "1vlfrh"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TrendingUp = createLucideIcon("trending-up", [["path", {
	d: "M16 7h6v6",
	key: "box55l"
}], ["path", {
	d: "m22 7-8.5 8.5-5-5L2 17",
	key: "1t1m79"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Wrench = createLucideIcon("wrench", [["path", {
	d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
	key: "1ngwbx"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region src/data/site.ts
var contact = {
	name: "Steve",
	fullName: "Steevan J",
	role: "Django SaaS Architect & Backend Engineer",
	email: "hello@stevedev.live",
	phoneDisplay: "+91 97424 14178",
	phoneHref: "tel:+919742414178",
	whatsapp: "https://wa.me/919742414178",
	github: "https://github.com/steevanj",
	githubHandle: "steevanj",
	linkedin: "https://linkedin.com/in/steechinna",
	linkedinHandle: "steechinna",
	location: "Bengaluru, India",
	resume: "https://drive.google.com/file/d/18Phc4dvb8O8mo8kPkrC1vs666T1-Emn8/view?usp=sharing",
	bookingUrl: "mailto:hello@stevedev.live?subject=" + encodeURIComponent("Discovery call request") + "&body=Hi%20Steve%2C%0A%0AI%20would%20like%20to%20book%20a%20short%20discovery%20call.%0A%0AA%20few%20times%20that%20work%20for%20me%20(with%20timezone)%3A%0A-%20%0A-%20%0A%0AWhat%20I%20want%20to%20build%3A%0A",
	responseTime: "Within 24 hours",
	availability: "Available for freelance projects"
};
var navLinks = [
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Work",
		href: "#work"
	},
	{
		label: "Process",
		href: "#process"
	},
	{
		label: "Packages",
		href: "#pricing"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "FAQ",
		href: "#faq"
	}
];
var proofStats = [
	{
		value: "2",
		label: "Production platforms live",
		note: "WeSalvator · Crescent Academy"
	},
	{
		value: "10+",
		label: "REST APIs shipped",
		note: "Django REST Framework"
	},
	{
		value: "25%",
		label: "Faster API responses",
		note: "via query optimisation"
	},
	{
		value: "<24h",
		label: "Reply to every enquiry",
		note: "Mon – Sat"
	}
];
var promises = [
	"Fixed-price quotes",
	"Weekly progress demos",
	"You own 100% of the code"
];
var painPoints = [
	{
		pain: "Your app slows down as users grow",
		fix: "I profile the slow endpoints, remove N+1 queries, add indexes and Redis caching."
	},
	{
		pain: "You have an idea, but no backend team",
		fix: "I take you from a rough spec to a deployed, production-ready MVP."
	},
	{
		pain: "Your frontend or mobile team is blocked on APIs",
		fix: "Clean, versioned, documented DRF APIs your developers can build on immediately."
	},
	{
		pain: "Emails, reports and imports freeze the app",
		fix: "I move slow work to Celery + Redis background jobs so users never wait."
	},
	{
		pain: "Your Django codebase feels fragile",
		fix: "Upgrades, refactors, tests and bug fixes — without breaking what already works."
	},
	{
		pain: "You want to sell your software to many clients",
		fix: "Multi-tenant SaaS architecture with tenant isolation, roles and subscriptions."
	}
];
var services = [
	{
		icon: "web",
		title: "Django Web Development",
		outcome: "Custom Django applications built for performance, security and scalability.",
		deliverables: [
			"Custom business logic & admin",
			"Secure auth & permissions",
			"Clean, tested codebase"
		],
		idealFor: "Businesses replacing spreadsheets or off-the-shelf tools"
	},
	{
		icon: "saas",
		title: "SaaS Development",
		outcome: "Multi-tenant SaaS architecture with subscriptions, roles and user management.",
		deliverables: [
			"Tenant isolation",
			"Plans, billing & subscriptions",
			"Team accounts & RBAC"
		],
		idealFor: "Founders launching or scaling a SaaS product"
	},
	{
		icon: "api",
		title: "API Development",
		outcome: "REST APIs with Django REST Framework that frontend and mobile teams love to use.",
		deliverables: [
			"JWT / token auth",
			"Versioned, documented endpoints",
			"Third-party integrations"
		],
		idealFor: "React, Next.js and mobile app teams"
	},
	{
		icon: "devops",
		title: "DevOps & Deployment",
		outcome: "Docker, Nginx, Gunicorn and CI/CD so every release is boring — in a good way.",
		deliverables: [
			"Dockerised environments",
			"Automated CI/CD pipelines",
			"Cloud server setup"
		],
		idealFor: "Teams still deploying by hand"
	},
	{
		icon: "speed",
		title: "Performance Optimisation",
		outcome: "Database tuning, Redis caching and query optimisation for faster pages and lower bills.",
		deliverables: [
			"Query & N+1 audit",
			"Redis caching layer",
			"Celery background jobs"
		],
		idealFor: "Apps that got slower as they grew"
	},
	{
		icon: "support",
		title: "Maintenance & Support",
		outcome: "Bug fixing, Django upgrades and ongoing support so your product stays healthy.",
		deliverables: [
			"Bug fixes & upgrades",
			"Security patches",
			"Monthly retainer option"
		],
		idealFor: "Live products that need a reliable engineer"
	}
];
var caseStudies = [
	{
		name: "WeSalvator",
		category: "Animal rescue & welfare platform",
		role: "Python Backend Developer",
		liveUrl: "https://uat.wesalvator.com",
		status: "Live",
		problem: "A growing rescue platform needed its backend to stay fast, reliable and secure as more rescues, volunteers and users came online.",
		solution: "Optimised Django ORM queries and removed N+1 bottlenecks, fixed production bugs, hardened security and error handling, and moved slow work onto Celery + Redis.",
		results: [
			"More reliable APIs under real production traffic",
			"Faster database-backed endpoints after N+1 fixes",
			"Stronger security and predictable error handling"
		],
		stack: [
			"Django",
			"DRF",
			"PostgreSQL",
			"Celery",
			"Redis"
		]
	},
	{
		name: "Crescent Academy",
		category: "Education platform",
		role: "Backend Developer",
		liveUrl: "https://crescentacademyedu.com",
		status: "Live",
		problem: "The academy needed secure accounts and core learning workflows — and transactional emails were slowing down user requests.",
		solution: "Built the Django APIs, JWT authentication and core backend workflows, resolved N+1 query issues, and moved email delivery to asynchronous Celery + Redis tasks.",
		results: [
			"Emails no longer block user requests",
			"Leaner queries on the busiest pages",
			"Secure token-based authentication"
		],
		stack: [
			"Django",
			"DRF",
			"MySQL",
			"JWT",
			"Celery",
			"Redis"
		]
	},
	{
		name: "EchoSphere",
		category: "Voice-based social platform",
		role: "Solo product build",
		codeUrl: "https://github.com/steevanj",
		status: "Product build",
		problem: "Live voice rooms need real-time presence and interactions that a plain request/response backend cannot deliver.",
		solution: "Django + DRF for authentication and social APIs, WebSockets backed by Redis for real-time rooms, plus a Spotify API integration.",
		results: [
			"Real-time rooms",
			"Authentication & social interactions",
			"Third-party API integrations"
		],
		stack: [
			"Django",
			"DRF",
			"Redis",
			"WebSockets",
			"Spotify API"
		]
	}
];
var testimonials = [];
var processSteps = [
	{
		title: "Free discovery call",
		time: "20–30 min",
		text: "We talk goals, users, scope and constraints. You leave with clarity — even if we don’t end up working together."
	},
	{
		title: "Proposal & fixed quote",
		time: "Within 48 hours",
		text: "A written scope with milestones, timeline and a clear price. No vague estimates, no surprise invoices."
	},
	{
		title: "Build in weekly sprints",
		time: "Demo every week",
		text: "You get a staging link and a short progress update every week, so you always know exactly where things stand."
	},
	{
		title: "Launch & handover",
		time: "Production-ready",
		text: "Deployment, documentation and credentials handed over — plus a post-launch support window for fixes."
	}
];
var guarantees = [
	{
		title: "You own the code",
		text: "Full IP and repository ownership on payment."
	},
	{
		title: "No black boxes",
		text: "Weekly demos and a staging environment you can click through."
	},
	{
		title: "Production quality",
		text: "Readable, documented code that another developer can pick up."
	},
	{
		title: "Timezone-friendly",
		text: "IST-based with overlap for UK/EU mornings and US evenings."
	}
];
var techStack = [
	{
		group: "Backend",
		items: [
			"Python",
			"Django",
			"Django REST Framework",
			"Celery"
		]
	},
	{
		group: "Database",
		items: [
			"PostgreSQL",
			"MySQL",
			"Redis",
			"SQLite"
		]
	},
	{
		group: "Security",
		items: [
			"JWT",
			"RBAC",
			"OAuth integrations",
			"Secure headers"
		]
	},
	{
		group: "DevOps",
		items: [
			"Docker",
			"Nginx",
			"Gunicorn",
			"Linux",
			"Jenkins",
			"CI/CD"
		]
	},
	{
		group: "Cloud",
		items: [
			"AWS",
			"DigitalOcean",
			"Azure"
		]
	},
	{
		group: "Tools",
		items: [
			"Git",
			"GitHub",
			"Gitea",
			"Postman"
		]
	}
];
var about = {
	intro: "Hi, I’m Steve.",
	story: [
		"I’m a Django backend developer who builds multi-tenant SaaS applications, REST APIs, authentication systems, Redis-powered services, payment integrations and deployment pipelines.",
		"I’ve shipped backend work on live platforms used by real people — from an animal-rescue network to an education platform — fixing slow queries, hardening security and moving heavy work into background jobs.",
		"Today I help startups and businesses turn ideas into scalable products: thoughtfully architected, properly deployed and easy to grow."
	],
	mission: "Build software that keeps working when your business takes off.",
	industries: [
		"Non-profit & animal welfare",
		"Education",
		"Social & media",
		"SaaS startups"
	],
	timeline: [
		{
			when: "07/2026 – Present",
			title: "Python Backend Developer",
			where: "WeSalvator",
			text: "Production Django REST APIs, ORM optimisation, Celery + Redis integration, security and error handling."
		},
		{
			when: "01/2026 – 06/2026",
			title: "Python Backend Developer Trainee",
			where: "Cloud Institution",
			text: "10+ REST APIs and 8+ database entities; JWT, RBAC and query optimisation that improved API response times by 25%."
		},
		{
			when: "2023 – 2026",
			title: "B.E. Information Science & Engineering",
			where: "The Oxford College of Engineering",
			text: "Preceded by a Diploma in Computer Science & Engineering (BTL Polytechnic)."
		}
	]
};
var pricingPlans = [
	{
		name: "Starter Project",
		timeline: "1–2 weeks",
		description: "A focused Django build or a well-defined fix — perfect to get started.",
		features: [
			"Business website or small web app",
			"Django admin for your team",
			"Forms, emails & basic auth",
			"Deployment to your server"
		],
		cta: "Start a starter project",
		featured: false
	},
	{
		name: "Business Application",
		timeline: "3–6 weeks",
		description: "A complete web application or API that runs a core part of your business.",
		features: [
			"Everything in Starter",
			"Roles, permissions & dashboards",
			"REST API for web / mobile apps",
			"Payments & third-party integrations",
			"Celery + Redis background jobs"
		],
		cta: "Build my application",
		featured: true
	},
	{
		name: "SaaS Development",
		timeline: "6+ weeks",
		description: "A multi-tenant SaaS platform architected to scale from day one.",
		features: [
			"Multi-tenant architecture",
			"Subscriptions & billing",
			"Team accounts & RBAC",
			"CI/CD & production infrastructure"
		],
		cta: "Discuss my SaaS",
		featured: false
	}
];
var faqs = [
	{
		q: "Do you work with clients outside India?",
		a: "Yes. I work remotely with clients anywhere and keep a few hours of overlap with your timezone for calls. All communication is in English, async-friendly, and documented in writing."
	},
	{
		q: "How much will my project cost?",
		a: "It depends on scope, so there are no fixed price tags. After a free call I send a clear written quote — and if it’s above your budget, I’ll suggest what to build first so you still get real value. Small fixes and ongoing support can also be billed hourly or as a monthly retainer."
	},
	{
		q: "Can you take over an existing Django project?",
		a: "Absolutely. I start with a short code and infrastructure review, flag the risky parts, and then fix, upgrade or extend the app without breaking what already works."
	},
	{
		q: "Do I own the code?",
		a: "Yes — 100%. The code lives in your repository and all IP transfers to you on payment. I’m happy to sign an NDA before we discuss details."
	},
	{
		q: "Do you build the frontend as well?",
		a: "My focus is the backend. For UI I use Django templates with HTMX/Alpine.js, or I plug cleanly into your React, Next.js or mobile team through well-documented APIs."
	},
	{
		q: "How do payments work?",
		a: "Usually milestone-based: a deposit to kick off, then payments tied to delivered, demoed milestones. You never pay for work you haven’t seen."
	},
	{
		q: "What do you need from me to get started?",
		a: "Just a rough idea of what you want to build. Fill in the project brief below or book a call — we’ll turn it into a clear scope together."
	}
];
var estimator = {
	types: [
		{
			id: "website",
			label: "Business website",
			hint: "Marketing site with admin & forms",
			days: 5
		},
		{
			id: "webapp",
			label: "Web application",
			hint: "Dashboards, workflows, users",
			days: 15
		},
		{
			id: "saas",
			label: "SaaS platform",
			hint: "Multi-customer product",
			days: 30
		},
		{
			id: "api",
			label: "REST API / backend",
			hint: "For a web or mobile frontend",
			days: 10
		},
		{
			id: "fix",
			label: "Fix or speed up an app",
			hint: "Existing Django project",
			days: 4
		}
	],
	includedScreens: 5,
	perScreenDays: .5,
	features: [
		{
			id: "auth",
			label: "User accounts & roles",
			days: 2
		},
		{
			id: "payments",
			label: "Payments & subscriptions",
			days: 3
		},
		{
			id: "integrations",
			label: "Third-party API integrations",
			days: 2
		},
		{
			id: "dashboard",
			label: "Admin dashboard & reports",
			days: 3
		},
		{
			id: "jobs",
			label: "Background jobs (Celery + Redis)",
			days: 2
		},
		{
			id: "realtime",
			label: "Real-time features (WebSockets)",
			days: 4
		},
		{
			id: "tenancy",
			label: "Multi-tenancy",
			days: 8
		},
		{
			id: "deploy",
			label: "Deployment & CI/CD",
			days: 2
		}
	],
	sizes: [
		{
			maxDays: 10,
			label: "Small project",
			text: "A focused build — a great way to start working together."
		},
		{
			maxDays: 25,
			label: "Medium project",
			text: "A solid application delivered in a few weekly milestones."
		},
		{
			maxDays: 45,
			label: "Large project",
			text: "A substantial product, planned and shipped in phases."
		},
		{
			maxDays: Infinity,
			label: "Complex platform",
			text: "Best scoped together on a call, then built milestone by milestone."
		}
	]
};
var wizard = {
	businessTypes: [
		"Startup MVP",
		"SaaS product",
		"Business web app",
		"API for web / mobile app",
		"Fix or scale an existing app",
		"Something else"
	],
	features: [
		"User accounts & roles",
		"Payments & subscriptions",
		"REST API",
		"Admin dashboard",
		"Background jobs",
		"Real-time features",
		"Multi-tenancy",
		"Third-party integrations",
		"Deployment & DevOps",
		"Performance fixes"
	],
	timelines: [
		"ASAP (under 2 weeks)",
		"Within a month",
		"1–3 months",
		"Flexible"
	],
	budgets: [
		"Under $500",
		"$500 – $1,500",
		"$1,500 – $5,000",
		"$5,000+",
		"Not sure yet"
	]
};
//#endregion
//#region src/components/Navbar.tsx
var import_jsx_runtime = require_jsx_runtime();
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 24);
			let current = "";
			for (const link of navLinks) {
				const el = document.querySelector(link.href);
				if (el && el.getBoundingClientRect().top <= 120) current = link.href;
			}
			setActive(current);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line bg-canvas/85 backdrop-blur-xl" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "container-x flex h-[72px] items-center justify-between gap-6",
			"aria-label": "Main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "group flex items-center gap-2.5",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-xl bg-ink font-mono text-sm font-bold text-white transition-transform group-hover:-rotate-6",
						children: "S/"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[17px] font-extrabold tracking-tight",
						children: ["steve", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: ".dev"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-1 lg:flex",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: `rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${active === link.href ? "bg-white text-ink shadow-sm ring-1 ring-line" : "text-muted hover:text-ink"}`,
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-4 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 text-[13px] font-semibold text-ink-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), "Available"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "btn btn-primary !px-5 !py-2.5 !text-[14px]",
						children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					className: "grid h-10 w-10 place-items-center rounded-xl border border-line bg-white lg:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-canvas lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex flex-col gap-1 py-6",
				children: [
					navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						onClick: () => setOpen(false),
						className: "border-b border-line py-4 text-2xl font-extrabold tracking-tight",
						children: link.label
					}, link.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						onClick: () => setOpen(false),
						className: "btn btn-primary mt-6",
						children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: contact.whatsapp,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "btn btn-ghost mt-3",
						children: "Chat on WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex items-center justify-center gap-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }),
							" ",
							contact.availability
						]
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/Hero.tsx
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pt-[72px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/15 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-60 left-[-15%] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative flex flex-col items-center pt-16 pb-24 text-center md:pt-24 lg:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-in chip !py-2 !pr-4",
						style: { ["--d"]: "0ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							contact.availability,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "· replies within 24h"
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hero-in mt-7 font-mono text-[13px] font-medium tracking-wide text-muted",
						style: { ["--d"]: "80ms" },
						children: [
							contact.name,
							" — ",
							contact.role
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero-in mt-4 max-w-5xl text-[clamp(2.5rem,6.5vw,5.2rem)] leading-[1.02] font-extrabold tracking-[-0.045em]",
						style: { ["--d"]: "140ms" },
						children: [
							"Django developer helping businesses build",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "scalable web applications."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hero-in mt-7 max-w-[44rem] text-[17px] leading-relaxed text-ink-soft md:text-[19px]",
						style: { ["--d"]: "220ms" },
						children: [
							"Backend engineer specialising in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-semibold text-ink",
								children: "Django, DRF, SaaS architecture"
							}),
							", multi-tenant systems, API development, Redis, Celery and DevOps. I turn your idea — or your slow, fragile app — into a product that’s fast, secure and ready to grow."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-in mt-10 flex flex-wrap items-center justify-center gap-3",
						style: { ["--d"]: "300ms" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "btn btn-primary",
								children: ["Hire me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								className: "btn btn-ghost",
								children: "View projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: contact.bookingUrl,
								className: "group inline-flex items-center gap-2 px-3 py-3 text-[15px] font-bold text-ink hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
									size: 18,
									className: "text-accent"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "underline decoration-line decoration-2 underline-offset-4 group-hover:decoration-accent",
									children: "Schedule a free consultation"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hero-in mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2",
						style: { ["--d"]: "380ms" },
						children: promises.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-[14px] font-semibold text-ink-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-5 w-5 place-items-center rounded-full bg-live/12 text-live",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 13,
									strokeWidth: 3
								})
							}), p]
						}, p))
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/ProofBar.tsx
var marqueeItems = techStack.flatMap((g) => g.items);
function ProofBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Track record",
		className: "border-y border-line bg-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x",
			children: proofStats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				style: { ["--reveal-delay"]: `${i * 80}ms` },
				className: `px-2 py-8 md:px-8 md:py-10 ${i < 2 ? "border-b border-line md:border-b-0" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-4xl font-extrabold tracking-[-0.04em] md:text-5xl",
						children: s.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[15px] font-bold",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[13px] text-muted",
						children: s.note
					})
				]
			}, s.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee overflow-hidden border-t border-line py-5",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track gap-10",
				children: [...marqueeItems, ...marqueeItems].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-10 font-mono text-[14px] font-medium text-muted",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-line" })]
				}, `${item}-${i}`))
			})
		})]
	});
}
//#endregion
//#region src/components/Problems.tsx
function Problems() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Sound familiar?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "section-title mt-4",
							children: ["Your product deserves a backend that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hl",
								children: "doesn’t hold it back."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-[17px] leading-relaxed text-ink-soft",
							children: "Most of my clients come to me with one of these problems. Each has a clear, proven fix."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: painPoints.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						"data-reveal": true,
						style: { ["--reveal-delay"]: `${i % 3 * 90}ms` },
						className: "card card-hover flex flex-col p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-start gap-3 text-[16px] font-bold leading-snug",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
									size: 20,
									className: "mt-0.5 shrink-0 text-rose-500"
								}), p.pain]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-5 h-px bg-line" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									size: 20,
									className: "mt-0.5 shrink-0 text-live"
								}), p.fix]
							})
						]
					}, p.pain))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "btn btn-dark",
						children: ["Tell me what’s slowing you down ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/Services.tsx
var icons = {
	web: Layers,
	saas: Boxes,
	api: Plug,
	devops: Server,
	speed: Gauge,
	support: LifeBuoy
};
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "border-t border-line bg-white py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				"data-reveal": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title mt-4",
							children: "Outcomes, not just code."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-[17px] leading-relaxed text-ink-soft",
							children: "You’re not hiring someone who “knows Django”. You’re hiring an engineer who delivers a working, scalable product — and stays accountable for it."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#pricing",
					className: "btn btn-ghost shrink-0",
					children: ["See pricing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => {
					const Icon = icons[s.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						"data-reveal": true,
						style: { ["--reveal-delay"]: `${i % 3 * 90}ms` },
						className: "card card-hover group relative flex flex-col overflow-hidden p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 22 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-extrabold tracking-tight",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 text-[15px] leading-relaxed text-ink-soft",
								children: s.outcome
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2",
								children: s.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5 text-[14px] font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 15,
										strokeWidth: 3,
										className: "text-accent"
									}), d]
								}, d))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-auto pt-6 text-[13px] text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-ink-soft",
										children: "Ideal for:"
									}),
									" ",
									s.idealFor
								]
							})
						]
					}, s.title);
				})
			})]
		})
	});
}
//#endregion
//#region src/components/Work.tsx
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "bg-night-grid relative overflow-hidden py-24 text-white md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-sky-300",
							children: "Portfolio & case studies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "section-title mt-4",
							children: ["Real platforms. Real users. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sky-300",
								children: "Real results."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-[17px] leading-relaxed text-slate-300",
							children: "Not tutorials or clones — backend work running in production. Here’s the problem, what I did, and what changed."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 space-y-6",
					children: caseStudies.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						"data-reveal": true,
						className: "grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-colors duration-300 hover:border-white/20 lg:grid-cols-[0.9fr_1.1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col border-b border-white/10 p-7 md:p-9 lg:border-r lg:border-b-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[13px] text-slate-400",
										children: ["0", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[12px] font-semibold",
										children: [c.status === "Live" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), c.status]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-3xl font-extrabold tracking-tight md:text-4xl",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[15px] text-slate-300",
									children: c.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-[12px] text-slate-400",
									children: ["Role: ", c.role]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: c.stack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-white/[0.07] px-3 py-1 font-mono text-[12px] text-slate-200",
										children: t
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex flex-wrap gap-3 pt-8",
									children: [c.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: c.liveUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "btn btn-primary !px-5 !py-2.5 !text-[14px]",
										children: ["Live site ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
									}), c.codeUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: c.codeUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "btn btn-ghost-dark !px-5 !py-2.5 !text-[14px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 15 }), " GitHub"]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-7 p-7 md:p-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] text-rose-300 uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { size: 14 }), " The problem"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-[16px] leading-relaxed text-slate-200",
									children: c.problem
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] text-sky-300 uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { size: 14 }), " My solution"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-[16px] leading-relaxed text-slate-200",
									children: c.solution
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] text-emerald-300 uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 14 }), " The result"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 grid gap-2 sm:grid-cols-3",
									children: c.results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-3 text-[14px] leading-snug font-semibold text-emerald-50",
										children: r
									}, r))
								})] })
							]
						})]
					}, c.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-accent/25 to-violet-600/20 p-8 md:flex-row md:items-center",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-extrabold tracking-tight",
						children: "Your project could be the next case study."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-slate-300",
						children: "Tell me what you’re building — I’ll reply with a plan within 24 hours."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "btn bg-white !text-ink hover:bg-slate-100",
						children: ["Start your project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/Testimonials.tsx
function Testimonials() {
	if (testimonials.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				"data-reveal": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Testimonials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title mt-4",
					children: "What clients say."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					"data-reveal": true,
					className: "card flex flex-col p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 text-amber-400",
							"aria-label": "5 out of 5 stars",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 16,
								fill: "currentColor"
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-5 text-[16px] leading-relaxed text-ink-soft",
							children: [
								"“",
								t.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-auto pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] text-muted",
								children: t.title
							})]
						})
					]
				}, t.name))
			})]
		})
	});
}
//#endregion
//#region src/components/Process.tsx
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "How we’ll work together"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title mt-4",
							children: "A clear process. Zero guesswork."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-[17px] leading-relaxed text-ink-soft",
							children: "Hiring a freelancer shouldn’t feel risky. You’ll always know what’s being built, when it ships and what it costs."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 lg:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "relative grid gap-5 md:grid-cols-2 lg:grid-cols-4",
						children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							"data-reveal": true,
							style: { ["--reveal-delay"]: `${i * 110}ms` },
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ink font-mono text-lg font-bold text-white shadow-lg shadow-ink/20 lg:mx-0",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card mt-5 h-[calc(100%-76px)] p-6 text-center lg:text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[12px] font-medium tracking-wide text-accent uppercase",
										children: step.time
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-lg font-extrabold tracking-tight",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[15px] leading-relaxed text-ink-soft",
										children: step.text
									})
								]
							})]
						}, step.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-4 rounded-3xl border border-line bg-white p-6 sm:grid-cols-2 md:p-8 lg:grid-cols-4",
					"data-reveal": true,
					children: guarantees.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							size: 22,
							className: "mt-0.5 shrink-0 text-live"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold",
							children: g.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[14px] leading-relaxed text-muted",
							children: g.text
						})] })]
					}, g.title))
				})
			]
		})
	});
}
//#endregion
//#region src/components/TechStack.tsx
var groupIcons = {
	Backend: CodeXml,
	Database,
	Security: Lock,
	DevOps: Server,
	Cloud,
	Tools: Wrench
};
function TechStack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack",
		className: "border-y border-line bg-white py-24 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Technology stack"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title mt-4",
						children: "Battle-tested tools for production software."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[17px] leading-relaxed text-ink-soft",
						children: "I pick boring, proven technology on purpose. It’s easier to hire for, cheaper to run and it keeps working at 3 a.m."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl bg-ink p-5 font-mono text-[13px] leading-relaxed text-slate-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sky-400",
									children: "$"
								}),
								" pip install ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white",
									children: "django djangorestframework celery redis"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sky-400",
									children: "$"
								}),
								" docker compose up ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "-d"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-emerald-400",
								children: "✓ api, worker, db, cache — healthy"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: techStack.map((g, i) => {
					const Icon = groupIcons[g.group] ?? CodeXml;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						style: { ["--reveal-delay"]: `${i % 2 * 90}ms` },
						className: "rounded-2xl border border-line bg-canvas p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2.5 text-[15px] font-extrabold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 18,
								className: "text-accent"
							}), g.group]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip !text-[13px] transition-colors hover:border-accent hover:text-accent",
								children: item
							}, item))
						})]
					}, g.group);
				})
			})]
		})
	});
}
//#endregion
//#region src/components/About.tsx
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "About me"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title mt-4",
						children: about.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-5 text-[17px] leading-relaxed text-ink-soft",
						children: about.story.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "mt-8 flex gap-4 rounded-2xl border-l-4 border-accent bg-accent-soft p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
							size: 22,
							className: "shrink-0 text-accent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "text-[17px] font-bold leading-snug text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[12px] font-semibold tracking-[0.14em] text-accent uppercase",
								children: "My mission"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block",
								children: about.mission
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-bold tracking-wide text-muted uppercase",
							children: "Industries I’ve worked with"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: about.industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip",
								children: ind
							}, ind))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: contact.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn btn-ghost !px-5 !py-2.5 !text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 16 }), " LinkedIn"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: contact.github,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn btn-ghost !px-5 !py-2.5 !text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 }), " GitHub"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: contact.resume,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn btn-ghost !px-5 !py-2.5 !text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 16 }), " Résumé"]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				style: { ["--reveal-delay"]: "120ms" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-line p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-extrabold tracking-tight",
								children: contact.fullName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] text-muted",
								children: contact.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 flex items-center gap-1 text-[13px] text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 13 }),
									" ",
									contact.location
								]
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-8 bottom-8 left-[31px] w-px bg-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "relative",
							children: about.timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: `relative flex gap-5 ${i > 0 ? "mt-7" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-[3px] border-white ring-1 ${i === 0 ? "bg-live ring-live" : "bg-slate-300 ring-line"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[12px] text-muted",
										children: t.when
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-extrabold",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[14px] font-semibold text-accent",
										children: t.where
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-[14px] leading-relaxed text-ink-soft",
										children: t.text
									})
								] })]
							}, t.title))
						})]
					})]
				})
			})]
		})
	});
}
//#endregion
//#region src/components/Pricing.tsx
var typeToBrief = {
	website: "Business web app",
	webapp: "Business web app",
	saas: "SaaS product",
	api: "API for web / mobile app",
	fix: "Fix or scale an existing app"
};
var featureToBrief = {
	auth: "User accounts & roles",
	payments: "Payments & subscriptions",
	integrations: "Third-party integrations",
	dashboard: "Admin dashboard",
	jobs: "Background jobs",
	realtime: "Real-time features",
	tenancy: "Multi-tenancy",
	deploy: "Deployment & DevOps"
};
var planToBrief = [
	{},
	{ businessType: "Business web app" },
	{ businessType: "SaaS product" }
];
function Pricing({ onPrefill }) {
	const [typeId, setTypeId] = (0, import_react.useState)(estimator.types[1].id);
	const [screens, setScreens] = (0, import_react.useState)(8);
	const [features, setFeatures] = (0, import_react.useState)(["auth", "deploy"]);
	const result = (0, import_react.useMemo)(() => {
		const type = estimator.types.find((t) => t.id === typeId) ?? estimator.types[0];
		let days = type.days + Math.max(0, screens - estimator.includedScreens) * estimator.perScreenDays;
		for (const f of estimator.features) if (features.includes(f.id)) days += f.days;
		const size = estimator.sizes.find((s) => days <= s.maxDays) ?? estimator.sizes[estimator.sizes.length - 1];
		const minWeeks = Math.max(1, Math.ceil(days / 5));
		return {
			type,
			size,
			minWeeks,
			maxWeeks: Math.max(minWeeks + 1, Math.ceil(days * 1.3 / 5))
		};
	}, [
		typeId,
		screens,
		features
	]);
	const toggleFeature = (id) => setFeatures((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
	const sendEstimate = () => {
		onPrefill({
			businessType: typeToBrief[typeId],
			features: features.map((f) => featureToBrief[f]).filter(Boolean),
			note: `Scope estimator: ${result.type.label}, ~${screens} pages/screens — ${result.size.label.toLowerCase()}, ~${result.minWeeks}–${result.maxWeeks} weeks.`,
			nonce: Date.now()
		});
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "border-t border-line bg-white py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Packages"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title mt-4",
							children: "Flexible pricing that fits your budget."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-[17px] leading-relaxed text-ink-soft",
							children: "Every project is different, so there are no fixed price tags. We agree the scope together on a free call, and you get a clear written quote before any work starts."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid items-stretch gap-5 lg:grid-cols-3",
					children: pricingPlans.map((plan, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						"data-reveal": true,
						style: { ["--reveal-delay"]: `${i * 90}ms` },
						className: `relative flex flex-col rounded-3xl p-8 ${plan.featured ? "bg-ink text-white shadow-2xl shadow-accent/25 ring-2 ring-accent lg:-my-4 lg:py-12" : "card"}`,
						children: [
							plan.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-[12px] font-bold text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 13 }), " Most popular"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-extrabold tracking-tight",
								children: plan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-2 text-[15px] leading-relaxed ${plan.featured ? "text-slate-300" : "text-muted"}`,
								children: plan.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: `mt-5 flex items-center gap-1.5 text-[13px] font-semibold ${plan.featured ? "text-sky-300" : "text-accent"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 14 }),
									" Typical timeline: ",
									plan.timeline
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-7 space-y-3",
								children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-[15px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 17,
										strokeWidth: 3,
										className: `mt-0.5 shrink-0 ${plan.featured ? "text-sky-300" : "text-live"}`
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: plan.featured ? "text-slate-100" : "text-ink-soft",
										children: f
									})]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-auto pt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									onClick: () => onPrefill({
										...planToBrief[i],
										nonce: Date.now()
									}),
									className: `btn w-full ${plan.featured ? "btn-primary" : "btn-ghost"}`,
									children: [
										plan.cta,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
									]
								})
							})
						]
					}, plan.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-line bg-canvas px-6 py-5 text-center md:flex-row md:text-left",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-3 text-[15px] text-ink-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, {
							size: 20,
							className: "hidden shrink-0 text-accent md:block"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-extrabold text-ink",
							children: "Tight budget?"
						}), " Tell me what you have — I’ll suggest the scope that gets you the most value for it. Monthly support retainers are also available."] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "shrink-0 text-[15px] font-bold text-accent hover:underline",
						children: "Get a free quote →"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "estimate",
					className: "mt-20 overflow-hidden rounded-3xl border border-line bg-canvas",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-[1.25fr_0.75fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 md:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] text-accent uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { size: 16 }), " Project scope estimator"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl font-extrabold tracking-tight md:text-3xl",
									children: "How big is your project?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[15px] text-muted",
									children: "Answer three questions to see the project size and a rough timeline."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
									className: "mt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-[14px] font-bold",
										children: "1. What are you building?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3",
										children: estimator.types.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-pressed": typeId === t.id,
											onClick: () => setTypeId(t.id),
											className: "option",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block",
												children: t.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 block text-[12px] font-medium text-muted",
												children: t.hint
											})]
										}, t.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "screens",
										className: "flex items-center justify-between text-[14px] font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2. Roughly how many pages / screens?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-lg bg-white px-2.5 py-1 font-mono text-accent ring-1 ring-line",
											children: screens
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "screens",
										type: "range",
										min: 1,
										max: 40,
										value: screens,
										onChange: (e) => setScreens(Number(e.target.value)),
										className: "mt-4 w-full accent-[#2563eb]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
									className: "mt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-[14px] font-bold",
										children: "3. Which features do you need?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 grid gap-2.5 sm:grid-cols-2",
										children: estimator.features.map((f) => {
											const on = features.includes(f.id);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												role: "checkbox",
												"aria-checked": on,
												onClick: () => toggleFeature(f.id),
												className: "option flex items-center gap-3 !py-3 text-[14px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors ${on ? "border-accent bg-accent text-white" : "border-slate-300"}`,
													children: on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
														size: 13,
														strokeWidth: 3.5
													})
												}), f.label]
											}, f.id);
										})
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-night-grid flex flex-col justify-between p-6 text-white md:p-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:sticky lg:top-28",
								"aria-live": "polite",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-bold tracking-[0.14em] text-sky-300 uppercase",
										children: "Your project"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-[clamp(2rem,3vw,2.6rem)] leading-tight font-extrabold tracking-[-0.04em]",
										children: result.size.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[15px] leading-relaxed text-slate-300",
										children: result.size.text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-5 flex items-center gap-2 text-[16px] font-semibold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
												size: 17,
												className: "text-sky-300"
											}),
											" About ",
											result.minWeeks,
											"–",
											result.maxWeeks,
											" weeks"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-8 space-y-2.5 border-t border-white/10 pt-6 text-[14px] text-slate-300",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Project type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-white",
													children: result.type.label
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pages / screens" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-white",
													children: screens
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Features" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-white",
													children: features.length
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: sendEstimate,
										className: "btn btn-primary mt-8 w-full",
										children: ["Get my free quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-center text-[12px] text-slate-400",
										children: "Free and no obligation. Pricing is agreed together after a short call."
									})
								]
							})
						})]
					})
				})
			]
		})
	});
}
//#endregion
//#region src/lib/email-links.ts
var q = (params) => Object.entries(params).filter(([, v]) => v).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
var gmailLink = (to, subject, body) => `https://mail.google.com/mail/?${q({
	view: "cm",
	fs: "1",
	to,
	su: subject,
	body
})}`;
var outlookLink = (to, subject, body) => `https://outlook.live.com/mail/0/deeplink/compose?${q({
	to,
	subject,
	body
})}`;
var mailtoLink = (to, subject, body) => {
	const query = q({
		subject,
		body
	});
	return `mailto:${to}${query ? `?${query}` : ""}`;
};
//#endregion
//#region src/components/EmailOptions.tsx
function EmailOptions({ to, subject, body, dark = false }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const copy = async () => {
		try {
			await navigator.clipboard.writeText(to);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	};
	const base = `inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-bold transition-colors ${dark ? "bg-white/10 text-white hover:bg-white/20" : "border border-line bg-white text-ink hover:border-accent hover:text-accent"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: gmailLink(to, subject, body),
				target: "_blank",
				rel: "noopener noreferrer",
				className: base,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GmailIcon, {}), " Gmail"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: outlookLink(to, subject, body),
				target: "_blank",
				rel: "noopener noreferrer",
				className: base,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutlookIcon, {}), " Outlook"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: mailtoLink(to, subject, body),
				className: base,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 14 }), " Mail app"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: copy,
				className: base,
				"aria-label": `Copy ${to}`,
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					size: 14,
					className: "text-live"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 14 }), copied ? "Copied" : "Copy"]
			})
		]
	});
}
function GmailIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "14",
		height: "14",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M2 6.5v11A1.5 1.5 0 0 0 3.5 19H6V9.8L2 6.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M18 19h2.5a1.5 1.5 0 0 0 1.5-1.5v-11l-4 3.3V19z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC04",
				d: "M18 5.5v4.3l4-3.3V5.4c0-1.3-1.5-2-2.5-1.2L18 5.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M6 9.8V5.5l6 4.6 6-4.6v4.3l-6 4.6-6-4.6z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#C5221F",
				d: "M2 5.4v1.1l4 3.3V5.5L4.5 4.2C3.5 3.4 2 4.1 2 5.4z"
			})
		]
	});
}
function OutlookIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "14",
		height: "14",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2",
				y: "4",
				width: "13",
				height: "16",
				rx: "2",
				fill: "#0F6CBD"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "8.5",
				cy: "12",
				rx: "3",
				ry: "3.6",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#28A8EA",
				d: "M15 7h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6V7z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "m15 9 3.5 2.5L22 9v1.2l-3.5 2.5L15 10.2z",
				opacity: ".9"
			})
		]
	});
}
//#endregion
//#region src/components/Contact.tsx
var STEPS = [
	"Project",
	"Features",
	"Timeline",
	"Budget",
	"Contact"
];
var empty = {
	businessType: "",
	features: [],
	timeline: "",
	budget: "",
	name: "",
	email: "",
	company: "",
	preferred: "Email",
	description: ""
};
var emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
function buildBrief(f, note) {
	return [
		"New project brief — stevedev.live",
		"",
		`Project type: ${f.businessType}`,
		`Features: ${f.features.length ? f.features.join(", ") : "Not sure yet"}`,
		`Timeline: ${f.timeline}`,
		`Budget: ${f.budget}`,
		note ? `\n${note}` : "",
		"",
		`Name: ${f.name}`,
		`Email: ${f.email}`,
		`Company: ${f.company || "—"}`,
		`Preferred contact: ${f.preferred}`,
		"",
		"About the project:",
		f.description
	].filter((line, i, arr) => !(line === "" && arr[i - 1] === "")).join("\n");
}
function Contact({ prefill }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const [form, setForm] = (0, import_react.useState)(empty);
	const [note, setNote] = (0, import_react.useState)();
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(null);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [failed, setFailed] = (0, import_react.useState)(false);
	const [honeypot, setHoneypot] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!prefill) return;
		setForm((f) => ({
			...f,
			businessType: prefill.businessType ?? f.businessType,
			features: prefill.features ?? f.features,
			timeline: prefill.timeline ?? f.timeline,
			budget: prefill.budget ?? f.budget
		}));
		setNote(prefill.note);
		setSent(null);
		setStep(0);
	}, [prefill]);
	const set = (key, value) => setForm((f) => ({
		...f,
		[key]: value
	}));
	const stepValid = [
		!!form.businessType,
		true,
		!!form.timeline,
		!!form.budget,
		form.name.trim().length > 1 && emailOk(form.email) && form.description.trim().length > 9
	];
	const next = () => {
		if (!stepValid[step]) {
			setTouched(true);
			return;
		}
		setTouched(false);
		setStep((s) => Math.min(STEPS.length - 1, s + 1));
	};
	const back = () => {
		setTouched(false);
		setStep((s) => Math.max(0, s - 1));
	};
	const subject = `Project brief: ${form.businessType} — ${form.name}${form.company ? ` (${form.company})` : ""}`;
	const send = async (channel) => {
		if (!stepValid[4]) {
			setTouched(true);
			return;
		}
		if (channel === "whatsapp") {
			window.open(`${contact.whatsapp}?text=${encodeURIComponent(buildBrief(form, note))}`, "_blank", "noopener,noreferrer");
			setSent("whatsapp");
			return;
		}
		setSending(true);
		setFailed(false);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					...form,
					note,
					website: honeypot
				})
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || !data.ok) throw new Error("send failed");
			setSent("email");
		} catch {
			setFailed(true);
		} finally {
			setSending(false);
		}
	};
	const copyBrief = async () => {
		try {
			await navigator.clipboard.writeText(buildBrief(form, note));
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	};
	const reset = () => {
		setForm(empty);
		setNote(void 0);
		setStep(0);
		setSent(null);
		setFailed(false);
		setTouched(false);
	};
	const progress = (step + 1) / STEPS.length * 100;
	const showError = touched && !stepValid[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-20 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Start a project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title mt-4",
						children: "Let’s build something that grows your business."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-[17px] leading-relaxed text-ink-soft",
						children: [
							"Answer five quick questions and I’ll reply with next steps, a rough plan and honest feedback on your idea —",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-ink",
								children: [" ", contact.responseTime.toLowerCase()]
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-4",
						children: [
							"I review your brief and reply within 24 hours",
							"We jump on a free 20–30 min discovery call",
							"You get a written scope & fixed quote within 48 hours"
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3.5 text-[15px] font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink font-mono text-[13px] text-white",
								children: i + 1
							}), t]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card border-accent/30 p-4 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[12px] font-semibold text-muted",
											children: "Email me directly"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[16px] font-extrabold break-all",
											children: contact.email
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailOptions, {
										to: contact.email,
										subject: "Project enquiry"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: contact.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "card card-hover flex items-center gap-3 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[12px] font-semibold text-muted",
									children: "WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[14px] font-bold",
									children: contact.phoneDisplay
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: contact.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "card card-hover flex items-center gap-3 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-700",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[12px] font-semibold text-muted",
									children: "LinkedIn"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[14px] font-bold",
									children: contact.linkedinHandle
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: contact.github,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "card card-hover flex items-center gap-3 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[12px] font-semibold text-muted",
									children: "GitHub"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[14px] font-bold",
									children: contact.githubHandle
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 font-semibold text-ink-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									size: 16,
									className: "text-accent"
								}),
								" Response time: ",
								contact.responseTime
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.bookingUrl,
							className: "flex items-center gap-2 font-bold text-accent hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { size: 16 }), " Prefer a call? Book one"]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				style: { ["--reveal-delay"]: "120ms" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card overflow-hidden shadow-2xl shadow-ink/10",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "step-in flex flex-col items-center px-6 py-16 text-center md:px-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-16 w-16 place-items-center rounded-full bg-live/12 text-live",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 34 })
							}),
							sent === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-6 text-2xl font-extrabold tracking-tight",
								children: [
									"Thanks, ",
									form.name.trim().split(" ")[0],
									" — your brief is in my inbox!"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft",
								children: [
									"I’ll review it and reply to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: form.email
									}),
									" ",
									contact.responseTime.toLowerCase(),
									". Keep an eye on your spam folder just in case."
								]
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-2xl font-extrabold tracking-tight",
								children: "Your brief is ready to go!"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft",
								children: [
									"WhatsApp should have opened with your brief — just hit send. Didn’t open? Copy the brief and email it to",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: contact.email
									}),
									"."
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: copyBrief,
									className: "btn btn-ghost",
									children: [
										copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 }),
										" ",
										copied ? "Copied!" : "Copy brief"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: reset,
									className: "btn btn-dark",
									children: "Start a new brief"
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-line p-6 pb-5 md:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-[13px] font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted",
									children: [
										"Step ",
										step + 1,
										" of ",
										STEPS.length
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: STEPS[step]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-gradient-to-r from-accent to-violet-500 transition-[width] duration-500",
									style: { width: `${progress}%` }
								})
							}),
							note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex items-start gap-2 rounded-xl bg-accent-soft px-3.5 py-2.5 text-[13px] font-medium text-accent-dark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 15,
									className: "mt-0.5 shrink-0"
								}), "Pre-filled from the scope estimator — review and continue."]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							if (step < STEPS.length - 1) next();
							else send("email");
						},
						className: "p-6 md:p-8",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "step-in min-h-[300px]",
								children: [
									step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-xl font-extrabold tracking-tight",
										children: "What are you looking to build?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 grid gap-2.5 sm:grid-cols-2",
										children: wizard.businessTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-pressed": form.businessType === t,
											onClick: () => set("businessType", t),
											className: "option",
											children: t
										}, t))
									})] }),
									step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
											className: "text-xl font-extrabold tracking-tight",
											children: "Which features do you need?"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[14px] text-muted",
											children: "Pick all that apply — or skip if you’re not sure yet."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 flex flex-wrap gap-2.5",
											children: wizard.features.map((f) => {
												const on = form.features.includes(f);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													role: "checkbox",
													"aria-checked": on,
													onClick: () => set("features", on ? form.features.filter((x) => x !== f) : [...form.features, f]),
													className: "option inline-flex items-center gap-2 !rounded-full !px-4 !py-2.5 text-[14px]",
													children: [on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
														size: 14,
														strokeWidth: 3
													}), f]
												}, f);
											})
										})
									] }),
									step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-xl font-extrabold tracking-tight",
										children: "When do you need it?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 grid gap-2.5 sm:grid-cols-2",
										children: wizard.timelines.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-pressed": form.timeline === t,
											onClick: () => set("timeline", t),
											className: "option",
											children: t
										}, t))
									})] }),
									step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
											className: "text-xl font-extrabold tracking-tight",
											children: "Do you have a budget in mind?"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[14px] text-muted",
											children: "Just a rough range so I can suggest the right scope — pricing is always flexible. “Not sure yet” is perfectly fine."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 grid gap-2.5 sm:grid-cols-2",
											children: wizard.budgets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-pressed": form.budget === b,
												onClick: () => set("budget", b),
												className: "option",
												children: b
											}, b))
										})
									] }),
									step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-extrabold tracking-tight",
										children: "Where should I send my reply?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[13px] font-bold",
													children: "Name *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field mt-1.5",
													value: form.name,
													onChange: (e) => set("name", e.target.value),
													autoComplete: "name",
													placeholder: "Jane Smith",
													"aria-invalid": touched && form.name.trim().length < 2
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[13px] font-bold",
													children: "Email *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field mt-1.5",
													type: "email",
													value: form.email,
													onChange: (e) => set("email", e.target.value),
													autoComplete: "email",
													placeholder: "jane@company.com",
													"aria-invalid": touched && !emailOk(form.email)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[13px] font-bold",
													children: "Company"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field mt-1.5",
													value: form.company,
													onChange: (e) => set("company", e.target.value),
													autoComplete: "organization",
													placeholder: "Optional"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[13px] font-bold",
													children: "Preferred contact"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													className: "field mt-1.5",
													value: form.preferred,
													onChange: (e) => set("preferred", e.target.value),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Email" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "WhatsApp" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Video call" })
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[13px] font-bold",
													children: "Tell me about the project *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													className: "field mt-1.5 resize-none",
													rows: 4,
													value: form.description,
													onChange: (e) => set("description", e.target.value),
													placeholder: "What problem are you solving, who are the users, and is there an existing app or design?",
													"aria-invalid": touched && form.description.trim().length < 10
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												name: "website",
												value: honeypot,
												onChange: (e) => setHoneypot(e.target.value),
												tabIndex: -1,
												autoComplete: "off",
												"aria-hidden": "true",
												className: "absolute -left-[9999px] h-0 w-0 opacity-0"
											})
										]
									})] })
								]
							}, step),
							failed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								role: "alert",
								className: "mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[14px] font-semibold text-rose-700",
									children: "Sorry — the form couldn’t send just now. Send the same brief with one click instead:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailOptions, {
										to: contact.email,
										subject,
										body: buildBrief(form, note)
									})
								})]
							}),
							showError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "mt-4 text-[14px] font-semibold text-rose-600",
								children: step === 4 ? "Please add your name, a valid email and a short project description." : "Please choose an option to continue."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: back,
									disabled: step === 0,
									className: "inline-flex items-center gap-1.5 text-[15px] font-bold text-muted transition-colors hover:text-ink disabled:invisible",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back"]
								}), step < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "btn btn-primary",
									children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => send("whatsapp"),
										className: "btn btn-ghost",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }), " Send via WhatsApp"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: sending,
										className: "btn btn-primary disabled:opacity-70",
										children: [sending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											size: 16,
											className: "animate-spin"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }), sending ? "Sending…" : "Send brief"]
									})]
								})]
							})
						]
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-[13px] text-muted",
					children: "No spam, no obligation. Your details are only used to reply to you."
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/FAQ.tsx
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "border-t border-line bg-white py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "FAQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title mt-4",
						children: "Questions clients usually ask."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-[17px] leading-relaxed text-ink-soft",
						children: [
							"Something else on your mind? Email",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${contact.email}`,
								className: "font-bold text-accent hover:underline",
								children: contact.email
							}),
							" ",
							"— I reply ",
							contact.responseTime.toLowerCase(),
							"."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-line border-y border-line",
				"data-reveal": true,
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "faq-item group",
					open: i === 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex items-center justify-between gap-6 py-6 text-[17px] font-bold",
						children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-all duration-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "-mt-1 pr-12 pb-6 text-[16px] leading-relaxed text-ink-soft",
						children: f.a
					})]
				}, f.q))
			})]
		})
	});
}
//#endregion
//#region src/components/FinalCTA.tsx
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 pb-6 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-night-grid relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] px-6 py-20 text-center text-white md:py-28",
			"data-reveal": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[100px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }),
							" ",
							contact.availability
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-7 text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.03] font-extrabold tracking-[-0.045em]",
						children: [
							"Have a project in mind? ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sky-300",
								children: "Let’s make it real."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300",
						children: "Whether it’s a new SaaS, an API for your app, or a Django project that needs rescuing — the first conversation is free and you’ll leave with a clear next step."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "btn btn-primary",
							children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.bookingUrl,
							className: "btn btn-ghost-dark",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { size: 16 }), " Book a free call"]
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	const socials = [
		{
			label: "Email",
			href: `mailto:${contact.email}`,
			icon: Mail
		},
		{
			label: "WhatsApp",
			href: contact.whatsapp,
			icon: MessageCircle
		},
		{
			label: "LinkedIn",
			href: contact.linkedin,
			icon: Linkedin
		},
		{
			label: "GitHub",
			href: contact.github,
			icon: Github
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "pt-16 pb-28 lg:pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 border-b border-line pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-xl bg-ink font-mono text-sm font-bold text-white",
								children: "S/"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[17px] font-extrabold tracking-tight",
								children: ["steve", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: ".dev"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-xs text-[15px] leading-relaxed text-muted",
							children: [contact.role, ". Helping startups and businesses build scalable Django products."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${contact.email}`,
							className: "mt-5 inline-block text-[15px] font-bold text-accent hover:underline",
							children: contact.email
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-bold tracking-wide text-muted uppercase",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-[15px]",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "text-ink-soft hover:text-accent",
							children: s.title
						}) }, s.title))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-bold tracking-wide text-muted uppercase",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-[15px]",
						children: [
							...navLinks,
							{
								label: "Scope estimator",
								href: "#estimate"
							},
							{
								label: "Contact",
								href: "#contact"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-ink-soft hover:text-accent",
							children: l.label
						}) }, l.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-bold tracking-wide text-muted uppercase",
						children: "Connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-[15px]",
						children: socials.map(({ label, href, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href,
							target: href.startsWith("http") ? "_blank" : void 0,
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 text-ink-soft hover:text-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 15 }),
								" ",
								label
							]
						}) }, label))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-between gap-3 pt-8 text-[13px] text-muted md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					contact.fullName,
					" · stevedev.live"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Freelance Django & Python backend developer · ", contact.location] })]
			})]
		})
	});
}
//#endregion
//#region src/components/MobileCTA.tsx
function MobileCTA() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const contactEl = document.getElementById("contact");
			const inContact = contactEl ? contactEl.getBoundingClientRect().top < window.innerHeight * .6 : false;
			setShow(window.scrollY > window.innerHeight * .8 && !inContact);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 p-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`,
		"aria-hidden": !show,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: contact.whatsapp,
				target: "_blank",
				rel: "noopener noreferrer",
				tabIndex: show ? 0 : -1,
				className: "btn btn-ghost !px-4",
				"aria-label": "Chat on WhatsApp",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
					size: 18,
					className: "text-emerald-600"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				tabIndex: show ? 0 : -1,
				className: "btn btn-primary flex-1",
				children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
			})]
		})
	});
}
//#endregion
//#region src/hooks/useReveal.ts
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll("[data-reveal]");
		if (!("IntersectionObserver" in window)) {
			els.forEach((el) => el.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		els.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
}
//#endregion
//#region src/App.tsx
function App() {
	const [prefill, setPrefill] = (0, import_react.useState)(null);
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-canvas text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contact",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white",
				children: "Skip to contact form"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problems, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, { onPrefill: setPrefill }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, { prefill }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCTA, {})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { Index as component };
