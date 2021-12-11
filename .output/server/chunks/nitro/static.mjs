import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/korek-logo.png": {
    "type": "image/png",
    "etag": "\"9523-raXWk2bgVAY9LVCapM6qNurblJQ\"",
    "mtime": "2021-12-10T18:46:01.912Z",
    "path": "../public/korek-logo.png"
  },
  "/_nuxt/ActionMessage-d72a3922.mjs": {
    "type": "application/javascript",
    "etag": "\"1d7-f9ePs5JIcW7Z6+CrV9jandHjjIU\"",
    "mtime": "2021-12-10T18:46:01.920Z",
    "path": "../public/_nuxt/ActionMessage-d72a3922.mjs"
  },
  "/_nuxt/ActionSection-e0b6e6d5.mjs": {
    "type": "application/javascript",
    "etag": "\"257-teh1XebN6Y+ky4HyYKl8iYi0VVM\"",
    "mtime": "2021-12-10T18:46:01.920Z",
    "path": "../public/_nuxt/ActionSection-e0b6e6d5.mjs"
  },
  "/_nuxt/ApplicationLogo-f8a41fdb.mjs": {
    "type": "application/javascript",
    "etag": "\"de3-Io6/0DDg985FXZFVvjTrs7T57H4\"",
    "mtime": "2021-12-10T18:46:01.920Z",
    "path": "../public/_nuxt/ApplicationLogo-f8a41fdb.mjs"
  },
  "/_nuxt/ApplicationMark-22ac153d.mjs": {
    "type": "application/javascript",
    "etag": "\"24d-PQ8HevCGQtMV/S/PqSYMQZZ+pP0\"",
    "mtime": "2021-12-10T18:46:01.920Z",
    "path": "../public/_nuxt/ApplicationMark-22ac153d.mjs"
  },
  "/_nuxt/AuthenticationCard-9571b0c8.mjs": {
    "type": "application/javascript",
    "etag": "\"1ac-1qTgSQ3rp/ObJ6mNATmtVol7D1s\"",
    "mtime": "2021-12-10T18:46:01.920Z",
    "path": "../public/_nuxt/AuthenticationCard-9571b0c8.mjs"
  },
  "/_nuxt/AuthenticationCardLogo-e4704e4d.mjs": {
    "type": "application/javascript",
    "etag": "\"9f-RTRuApMyoCsJgv/25lHngvv5dIU\"",
    "mtime": "2021-12-10T18:46:01.920Z",
    "path": "../public/_nuxt/AuthenticationCardLogo-e4704e4d.mjs"
  },
  "/_nuxt/Banner-60470e1d.mjs": {
    "type": "application/javascript",
    "etag": "\"8e4-68ehey5KWsN/a+MAsfeG45q6KGI\"",
    "mtime": "2021-12-10T18:46:01.919Z",
    "path": "../public/_nuxt/Banner-60470e1d.mjs"
  },
  "/_nuxt/Button-39134091.mjs": {
    "type": "application/javascript",
    "etag": "\"300-1ouaoy2L0mOg+QDTABEBfpghgp4\"",
    "mtime": "2021-12-10T18:46:01.919Z",
    "path": "../public/_nuxt/Button-39134091.mjs"
  },
  "/_nuxt/Button-ad837904.mjs": {
    "type": "application/javascript",
    "etag": "\"26e-OMP0uJAk1LHSw+BXBHB3FAjUJZA\"",
    "mtime": "2021-12-10T18:46:01.919Z",
    "path": "../public/_nuxt/Button-ad837904.mjs"
  },
  "/_nuxt/Checkbox-c88097b9.mjs": {
    "type": "application/javascript",
    "etag": "\"27d-HLWcdlrD5lyC2Eeg797te3HIw9o\"",
    "mtime": "2021-12-10T18:46:01.919Z",
    "path": "../public/_nuxt/Checkbox-c88097b9.mjs"
  },
  "/_nuxt/ConfirmationModal-6d7a1f70.mjs": {
    "type": "application/javascript",
    "etag": "\"551-wJ/OMJWzABjMbMB2Ljfceo8f4lM\"",
    "mtime": "2021-12-10T18:46:01.919Z",
    "path": "../public/_nuxt/ConfirmationModal-6d7a1f70.mjs"
  },
  "/_nuxt/ConfirmsPassword-208491e0.mjs": {
    "type": "application/javascript",
    "etag": "\"96e-7NlwivPBlGpD8w6/rTDwn3kmEMs\"",
    "mtime": "2021-12-10T18:46:01.919Z",
    "path": "../public/_nuxt/ConfirmsPassword-208491e0.mjs"
  },
  "/_nuxt/DangerButton-a9576590.mjs": {
    "type": "application/javascript",
    "etag": "\"23f-o1WF9guLmS7TcRsv5uQLYcgsxg0\"",
    "mtime": "2021-12-10T18:46:01.918Z",
    "path": "../public/_nuxt/DangerButton-a9576590.mjs"
  },
  "/_nuxt/DialogModal-7f9b0f4e.mjs": {
    "type": "application/javascript",
    "etag": "\"2ec-sQFoKgIfLLA2i+I/SJO6MoTTkiY\"",
    "mtime": "2021-12-10T18:46:01.918Z",
    "path": "../public/_nuxt/DialogModal-7f9b0f4e.mjs"
  },
  "/_nuxt/Dropdown-d8a77583.mjs": {
    "type": "application/javascript",
    "etag": "\"612-N/YPtxpImtOkpsXyauO43ralpWE\"",
    "mtime": "2021-12-10T18:46:01.918Z",
    "path": "../public/_nuxt/Dropdown-d8a77583.mjs"
  },
  "/_nuxt/DropdownLink-40a16f63.mjs": {
    "type": "application/javascript",
    "etag": "\"b3-s42jqNuG8u24Q972pAFYAPYymEc\"",
    "mtime": "2021-12-10T18:46:01.918Z",
    "path": "../public/_nuxt/DropdownLink-40a16f63.mjs"
  },
  "/_nuxt/FormSection-ffc9c474.mjs": {
    "type": "application/javascript",
    "etag": "\"421-cDldKF9mLgpBBKuHYolY7FhSc7Q\"",
    "mtime": "2021-12-10T18:46:01.918Z",
    "path": "../public/_nuxt/FormSection-ffc9c474.mjs"
  },
  "/_nuxt/Icon-cd747b94.mjs": {
    "type": "application/javascript",
    "etag": "\"254-4atPMasVvwOOrGCvJ6eN36F4tak\"",
    "mtime": "2021-12-10T18:46:01.918Z",
    "path": "../public/_nuxt/Icon-cd747b94.mjs"
  },
  "/_nuxt/Input-f328dca3.mjs": {
    "type": "application/javascript",
    "etag": "\"3b7-g2rr/5xpRMA8De7KEOEaaY7KI8A\"",
    "mtime": "2021-12-10T18:46:01.917Z",
    "path": "../public/_nuxt/Input-f328dca3.mjs"
  },
  "/_nuxt/InputError-d9957879.mjs": {
    "type": "application/javascript",
    "etag": "\"12e-dYCJS+3l/dkhqEpCeJXrfnkoI6g\"",
    "mtime": "2021-12-10T18:46:01.917Z",
    "path": "../public/_nuxt/InputError-d9957879.mjs"
  },
  "/_nuxt/Label-06b545bf.mjs": {
    "type": "application/javascript",
    "etag": "\"15f-csgT5Je1gcFbBHSdQuKS8fU10mY\"",
    "mtime": "2021-12-10T18:46:01.917Z",
    "path": "../public/_nuxt/Label-06b545bf.mjs"
  },
  "/_nuxt/Modal-f7f9b352.mjs": {
    "type": "application/javascript",
    "etag": "\"809-HxCCd4bWiEqcGOCcuuihZ/GlA/Q\"",
    "mtime": "2021-12-10T18:46:01.917Z",
    "path": "../public/_nuxt/Modal-f7f9b352.mjs"
  },
  "/_nuxt/NavLink-1c136dfd.mjs": {
    "type": "application/javascript",
    "etag": "\"269-FcJUri86/AzXZGoVgHWvvNqYExM\"",
    "mtime": "2021-12-10T18:46:01.917Z",
    "path": "../public/_nuxt/NavLink-1c136dfd.mjs"
  },
  "/_nuxt/ResponsiveNavLink-d7aab01d.mjs": {
    "type": "application/javascript",
    "etag": "\"33a-EsKr3c1izszw2/+msKRI+HAW0pg\"",
    "mtime": "2021-12-10T18:46:01.916Z",
    "path": "../public/_nuxt/ResponsiveNavLink-d7aab01d.mjs"
  },
  "/_nuxt/SecondaryButton-6635b32f.mjs": {
    "type": "application/javascript",
    "etag": "\"252-i4NT3sQTUVy20pJjxuZdZeQLNYc\"",
    "mtime": "2021-12-10T18:46:01.916Z",
    "path": "../public/_nuxt/SecondaryButton-6635b32f.mjs"
  },
  "/_nuxt/SectionBorder-7a96044c.mjs": {
    "type": "application/javascript",
    "etag": "\"109-GQxBeraLeniaDfoLy8xAM+ihCHI\"",
    "mtime": "2021-12-10T18:46:01.916Z",
    "path": "../public/_nuxt/SectionBorder-7a96044c.mjs"
  },
  "/_nuxt/SectionTitle-79eb0175.mjs": {
    "type": "application/javascript",
    "etag": "\"1d1-ByAtcGZ58fHQKz9s7/xCgSjUOTQ\"",
    "mtime": "2021-12-10T18:46:01.916Z",
    "path": "../public/_nuxt/SectionTitle-79eb0175.mjs"
  },
  "/_nuxt/TheHeader-c74ad79c.mjs": {
    "type": "application/javascript",
    "etag": "\"15b-Bdzi6n3DyS/1QcH8wi0Ev1LQuwk\"",
    "mtime": "2021-12-10T18:46:01.916Z",
    "path": "../public/_nuxt/TheHeader-c74ad79c.mjs"
  },
  "/_nuxt/ValidationErrors-09767224.mjs": {
    "type": "application/javascript",
    "etag": "\"23a-sQDiuD4qpDHuueRZZ1LE6GktrjA\"",
    "mtime": "2021-12-10T18:46:01.916Z",
    "path": "../public/_nuxt/ValidationErrors-09767224.mjs"
  },
  "/_nuxt/Welcome-c8f055f7.mjs": {
    "type": "application/javascript",
    "etag": "\"144a-YmsdgVgGRQ6+g/efCh7jAYB4CkI\"",
    "mtime": "2021-12-10T18:46:01.915Z",
    "path": "../public/_nuxt/Welcome-c8f055f7.mjs"
  },
  "/_nuxt/about-196cfdc6.mjs": {
    "type": "application/javascript",
    "etag": "\"89-EdpnFt47R6Grx1SCYnMT8soVeTM\"",
    "mtime": "2021-12-10T18:46:01.915Z",
    "path": "../public/_nuxt/about-196cfdc6.mjs"
  },
  "/_nuxt/custom-06100dd1.mjs": {
    "type": "application/javascript",
    "etag": "\"ff-gmiH9t5kG46Q8fxCALzQuWWImGs\"",
    "mtime": "2021-12-10T18:46:01.914Z",
    "path": "../public/_nuxt/custom-06100dd1.mjs"
  },
  "/_nuxt/entry-4a36a4e1.mjs": {
    "type": "application/javascript",
    "etag": "\"2423c-ktgHt0BLW9i75TA5HAca3I+bICY\"",
    "mtime": "2021-12-10T18:46:01.914Z",
    "path": "../public/_nuxt/entry-4a36a4e1.mjs"
  },
  "/_nuxt/index-bde225ee.mjs": {
    "type": "application/javascript",
    "etag": "\"386-qLUXa3ne0KPbJX04flzlZqfbfLw\"",
    "mtime": "2021-12-10T18:46:01.914Z",
    "path": "../public/_nuxt/index-bde225ee.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"2550-jS1kmwGnIbm3w3y7J5EZOkZAn2c\"",
    "mtime": "2021-12-10T18:46:01.914Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/assets/Icon.0c64b6bb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29-zrjqzzaDbb+BaAPGCeYLi4HNDWQ\"",
    "mtime": "2021-12-10T18:46:01.915Z",
    "path": "../public/_nuxt/assets/Icon.0c64b6bb.css"
  },
  "/_nuxt/assets/entry.2b900a84.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"58ba-V6WjlJS9pNAS76UBw78V5tQFqDk\"",
    "mtime": "2021-12-10T18:46:01.915Z",
    "path": "../public/_nuxt/assets/entry.2b900a84.css"
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
const STATIC_ASSETS_BASE = "/Users/jihad/Desktop/Projects/nuxt-starter/dist" + "/" + "1639161958";
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
