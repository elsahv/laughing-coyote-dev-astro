import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import './chunks/astro_vlHRU2XH.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.QciOGcno.css"},{"type":"inline","content":"p{font-size:18px}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.QciOGcno.css"}],"routeData":{"route":"/websites/generations-backflow","isIndex":false,"type":"page","pattern":"^\\/websites\\/generations-backflow\\/?$","segments":[[{"content":"websites","dynamic":false,"spread":false}],[{"content":"generations-backflow","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/websites/generations-backflow.md","pathname":"/websites/generations-backflow","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.QciOGcno.css"}],"routeData":{"route":"/websites/hovey-roofing","isIndex":false,"type":"page","pattern":"^\\/websites\\/hovey-roofing\\/?$","segments":[[{"content":"websites","dynamic":false,"spread":false}],[{"content":"hovey-roofing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/websites/hovey-roofing.md","pathname":"/websites/hovey-roofing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.QciOGcno.css"},{"type":"inline","content":"p{font-size:18px}\n.gridTemplateAreas[data-astro-cid-maqz3d7x]{display:grid;grid-gap:1em;grid-template-areas:\"A B\" \"C D\"}@media screen and (max-width: 800px){.gridTemplateAreas[data-astro-cid-maqz3d7x]{display:grid;grid-template-areas:\"A\" \"B\" \"D\" \"C\"}}#sq-1[data-astro-cid-maqz3d7x]{grid-area:A}#sq-2[data-astro-cid-maqz3d7x]{grid-area:B}#sq-3[data-astro-cid-maqz3d7x]{grid-area:C}#sq-4[data-astro-cid-maqz3d7x]{grid-area:D}#content-container[data-astro-cid-maqz3d7x]{margin:50px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/elsahvy/Desktop/LC-astro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/elsahvy/Desktop/LC-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/websites/hovey-roofing.md":"chunks/pages/hovey-roofing_jfCkuAmq.mjs","/src/pages/index.astro":"chunks/pages/index_AjcbAthL.mjs","\u0000@astrojs-manifest":"manifest_QCCiZr1s.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_2NMHiZ1B.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_eYEo-FZ-.mjs","\u0000@astro-page:src/pages/websites/generations-backflow@_@md":"chunks/generations-backflow_mQmnjfa7.mjs","\u0000@astro-page:src/pages/websites/hovey-roofing@_@md":"chunks/hovey-roofing_kF-fSbQE.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_v4G1ojbl.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/hoveyroofing.ANkwSKWm.png","/_astro/fish-expo-demo.c4vNfRzF.png","/_astro/index.QciOGcno.css","/favicon.svg","/fish-images/about.jpg","/fish-images/aboutImg.jpg","/fish-images/boy-watch-fish.jpg","/fish-images/contactImg.jpg","/fish-images/error-404.png","/fish-images/gallery1.jpg","/fish-images/gallery2.jpg","/fish-images/gallery3.jpg","/fish-images/gallery4.jpg","/fish-images/gallery5.jpg","/fish-images/hero-fish.jpg","/fish-images/jellyfish.jpg","/fish-images/logo.png","/fish-images/sliderImg1.jpg","/fish-images/sliderImg2.jpg","/fish-images/sliderImg3.jpg","/fish-images/sliderImg4.jpg","/fish-images/team1.png","/fish-images/team2.png","/fish-images/team3.png","/images/coyote.png","/images/image1.png","/images/image2.png","/images/image3.png","/images/image4.png","/images/image5.png","/images/image6.png","/images/image7.png","/images/screen.png","/images/self.jpg","/screenshots/hoveyroofing.png","/screenshots/site1.png","/screenshots/site2.png","/screenshots/site3.png","/screenshots/site4.png","/screenshots/site5.png","/screenshots/site6.png","/screenshots/site7.png","/fish-images/assets/jellyfish.jpg","/fish-images/assets/school.jpg","/fish-images/assets/seals.jpg","/fish-images/assets/shark.jpg","/fish-images/assets/starfish.jpg","/fish-images/assets/turtle.jpg","/fish-images/assets/urchin.jpg","/fish-images/assets/weird-looking-fish.jpg","/fish-images/assets/yellow-fish.jpg","/screenshots/designs/-hero.png","/screenshots/designs/-writingtobetterhealth.png","/screenshots/designs/blog-right-sidebar.png","/screenshots/designs/double-panel.png","/screenshots/designs/fish-expo-demo.png","/screenshots/designs/site1.png"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
