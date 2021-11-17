import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/korek-logo.png": {
    "type": "image/png",
    "etag": "\"9523-raXWk2bgVAY9LVCapM6qNurblJQ\"",
    "mtime": "2021-09-30T07:46:49.879Z",
    "path": "../public/korek-logo.png"
  },
  "/_nuxt/about-f677a8a6.mjs": {
    "type": "application/javascript",
    "etag": "\"89-bfkNdE9Ol/z3cE6x9tp+Srd6ycA\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/about-f677a8a6.mjs"
  },
  "/_nuxt/ActionMessage-d40d6db6.mjs": {
    "type": "application/javascript",
    "etag": "\"1d7-As546gKL6T7dHuEBNSzJMAFU2jI\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/ActionMessage-d40d6db6.mjs"
  },
  "/_nuxt/ActionSection-cd67c732.mjs": {
    "type": "application/javascript",
    "etag": "\"257-ihgWmW/6zVWuvJRtMU68hCjRuw8\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/ActionSection-cd67c732.mjs"
  },
  "/_nuxt/ApplicationLogo-0147570a.mjs": {
    "type": "application/javascript",
    "etag": "\"de3-blNOWG0DXETrv1HWipHLmHVPEsw\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/ApplicationLogo-0147570a.mjs"
  },
  "/_nuxt/ApplicationMark-e99a56fe.mjs": {
    "type": "application/javascript",
    "etag": "\"24d-zErr1xMB7k3N7UoXbWH2feMBaG8\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/ApplicationMark-e99a56fe.mjs"
  },
  "/_nuxt/AuthenticationCard-9f281ea0.mjs": {
    "type": "application/javascript",
    "etag": "\"1ac-vfwKh3VQQcFRK2LPyPiONv9D9HA\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/AuthenticationCard-9f281ea0.mjs"
  },
  "/_nuxt/AuthenticationCardLogo-caa4b00c.mjs": {
    "type": "application/javascript",
    "etag": "\"9f-Gbz2GkggxD9CHcIjDSCBHycZxrI\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/AuthenticationCardLogo-caa4b00c.mjs"
  },
  "/_nuxt/Banner-5b36a211.mjs": {
    "type": "application/javascript",
    "etag": "\"8e4-HJGH1Jf65nKHi1iH3EnrR16Rpmk\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/Banner-5b36a211.mjs"
  },
  "/_nuxt/Button-382bf40d.mjs": {
    "type": "application/javascript",
    "etag": "\"300-qr1xc6a9AeEoPxdTWU9V93HU2Us\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/Button-382bf40d.mjs"
  },
  "/_nuxt/Button-f5309fae.mjs": {
    "type": "application/javascript",
    "etag": "\"235-heDLJbffk2UDEG6hgs2LTvbqqPA\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/Button-f5309fae.mjs"
  },
  "/_nuxt/Checkbox-ef6e2f82.mjs": {
    "type": "application/javascript",
    "etag": "\"282-j5vc3TjytTJgsKoETPsuAA2mnnY\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/Checkbox-ef6e2f82.mjs"
  },
  "/_nuxt/ConfirmationModal-2ba283e5.mjs": {
    "type": "application/javascript",
    "etag": "\"551-ch0xYBt6BTRFBrFDmEYooJx+L8U\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/ConfirmationModal-2ba283e5.mjs"
  },
  "/_nuxt/ConfirmsPassword-56a7daa1.mjs": {
    "type": "application/javascript",
    "etag": "\"96e-1cIolN39Ptsk76FMUaahHmPml0Q\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/ConfirmsPassword-56a7daa1.mjs"
  },
  "/_nuxt/custom-9c7093f5.mjs": {
    "type": "application/javascript",
    "etag": "\"ff-eIb8z7A9/OHD9JQYf/fU3/tf7NY\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/custom-9c7093f5.mjs"
  },
  "/_nuxt/DangerButton-10f8792e.mjs": {
    "type": "application/javascript",
    "etag": "\"23f-Dzp0JNKaUT17gOZe53FBkpIn43A\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/DangerButton-10f8792e.mjs"
  },
  "/_nuxt/DialogModal-3c8016f2.mjs": {
    "type": "application/javascript",
    "etag": "\"2f1-/1f6FiyCuAFBQh911hMpcHdZm6k\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/DialogModal-3c8016f2.mjs"
  },
  "/_nuxt/Dropdown-966cc498.mjs": {
    "type": "application/javascript",
    "etag": "\"612-4fbtkCFhfYXWGqP5cB2gmSaLNkc\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/Dropdown-966cc498.mjs"
  },
  "/_nuxt/DropdownLink-2e338566.mjs": {
    "type": "application/javascript",
    "etag": "\"b3-Qdf1OfCcIyfh9E+feSxlKxKz7E0\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/DropdownLink-2e338566.mjs"
  },
  "/_nuxt/entry-c066cf72.mjs": {
    "type": "application/javascript",
    "etag": "\"1c0bb-sPR5NlbUkaHTuMc5Er7QZ/svM30\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/entry-c066cf72.mjs"
  },
  "/_nuxt/FormSection-71fc90fd.mjs": {
    "type": "application/javascript",
    "etag": "\"426-jbNEXzEZ90s594kk8kj7C9QzQ9o\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/FormSection-71fc90fd.mjs"
  },
  "/_nuxt/index-18a815bb.mjs": {
    "type": "application/javascript",
    "etag": "\"219-VTMoZ22TZEZsU0ZsmOyA6XF/icM\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/index-18a815bb.mjs"
  },
  "/_nuxt/Input-54b6892c.mjs": {
    "type": "application/javascript",
    "etag": "\"229-zPmGUA0PvCUGox4IGUCZ2lPTEdk\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/Input-54b6892c.mjs"
  },
  "/_nuxt/InputError-f0128bb3.mjs": {
    "type": "application/javascript",
    "etag": "\"12e-d+eBcKoizSdMYbdFPhDDWmT9DQY\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/InputError-f0128bb3.mjs"
  },
  "/_nuxt/korek-logo.png": {
    "type": "image/png",
    "etag": "\"9523-raXWk2bgVAY9LVCapM6qNurblJQ\"",
    "mtime": "2021-09-30T07:46:49.879Z",
    "path": "../public/_nuxt/korek-logo.png"
  },
  "/_nuxt/Label-d8b50a60.mjs": {
    "type": "application/javascript",
    "etag": "\"15f-txQAtsDV1kWUoZ4RGyh/2Lvf5o0\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/Label-d8b50a60.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"23e0-S0am/mMiRNROrXcySYLfAIeyTNs\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/Modal-187ff426.mjs": {
    "type": "application/javascript",
    "etag": "\"80e-rDrMPEdk55op6KSF3Vgtqs/0xkE\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/Modal-187ff426.mjs"
  },
  "/_nuxt/NavLink-e7f70133.mjs": {
    "type": "application/javascript",
    "etag": "\"269-qDEx2qfEVB066123PlLMkjGtMos\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/NavLink-e7f70133.mjs"
  },
  "/_nuxt/ResponsiveNavLink-d351b782.mjs": {
    "type": "application/javascript",
    "etag": "\"33a-I+zEPDxd9sak4p5fYTb4TsFRoI4\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/ResponsiveNavLink-d351b782.mjs"
  },
  "/_nuxt/SecondaryButton-89726242.mjs": {
    "type": "application/javascript",
    "etag": "\"252-LdJPl50/WGKLmsL7/udZqzk7zwc\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/SecondaryButton-89726242.mjs"
  },
  "/_nuxt/SectionBorder-acdbccf7.mjs": {
    "type": "application/javascript",
    "etag": "\"ff-ct69zFs9Zdt29aJ8wAxfszMyPBA\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/SectionBorder-acdbccf7.mjs"
  },
  "/_nuxt/SectionTitle-af34583a.mjs": {
    "type": "application/javascript",
    "etag": "\"1cc-peIa7m7ggTBITuB6OTqpS4aKpuM\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/SectionTitle-af34583a.mjs"
  },
  "/_nuxt/TheHeader-50ff17d5.mjs": {
    "type": "application/javascript",
    "etag": "\"156-nmTYUfwhJ1hw9WW7rW6Mks92Xq4\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/TheHeader-50ff17d5.mjs"
  },
  "/_nuxt/ValidationErrors-f0f8fbfe.mjs": {
    "type": "application/javascript",
    "etag": "\"23a-h77OMiNi+Tdk/Ozl3aiPmeJQ+PA\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/ValidationErrors-f0f8fbfe.mjs"
  },
  "/_nuxt/Welcome-355bb328.mjs": {
    "type": "application/javascript",
    "etag": "\"144a-cAWnvf3zTQO7l3hpgZbgtFENxYs\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/Welcome-355bb328.mjs"
  },
  "/_nuxt/assets/entry.82989ba6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"59dc-sGIufClVF9X+teOPCYsMm3PeZMc\"",
    "mtime": "2021-11-17T08:21:57.652Z",
    "path": "../public/_nuxt/assets/entry.82989ba6.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "D:/nuxt/starter/dist" + "/" + "1637137313";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
