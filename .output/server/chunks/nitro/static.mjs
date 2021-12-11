import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/korek-logo.png": {
    "type": "image/png",
    "etag": "\"9523-raXWk2bgVAY9LVCapM6qNurblJQ\"",
    "mtime": "2021-12-11T10:51:22.652Z",
    "path": "../public/korek-logo.png"
  },
  "/_nuxt/ActionMessage-61d39460.mjs": {
    "type": "application/javascript",
    "etag": "\"1d7-NP+bUr4fbWoQyxjhvv/AwyCvOZ4\"",
    "mtime": "2021-12-11T10:51:22.662Z",
    "path": "../public/_nuxt/ActionMessage-61d39460.mjs"
  },
  "/_nuxt/ActionSection-6b3f9127.mjs": {
    "type": "application/javascript",
    "etag": "\"257-umZBnRPaONCW+ElnAXYiPfX2iFY\"",
    "mtime": "2021-12-11T10:51:22.662Z",
    "path": "../public/_nuxt/ActionSection-6b3f9127.mjs"
  },
  "/_nuxt/ApplicationLogo-f3780d21.mjs": {
    "type": "application/javascript",
    "etag": "\"de3-n4UC1Ez4MnziXEtFpx0f2K3oLKE\"",
    "mtime": "2021-12-11T10:51:22.662Z",
    "path": "../public/_nuxt/ApplicationLogo-f3780d21.mjs"
  },
  "/_nuxt/ApplicationMark-26344333.mjs": {
    "type": "application/javascript",
    "etag": "\"24d-Uqel3cWcB0C0b+tNENXWp/rQrMQ\"",
    "mtime": "2021-12-11T10:51:22.661Z",
    "path": "../public/_nuxt/ApplicationMark-26344333.mjs"
  },
  "/_nuxt/AuthenticationCard-85d0f5fb.mjs": {
    "type": "application/javascript",
    "etag": "\"1ac-vWvJP/lghxzKAchGQxiNE3cdLLE\"",
    "mtime": "2021-12-11T10:51:22.661Z",
    "path": "../public/_nuxt/AuthenticationCard-85d0f5fb.mjs"
  },
  "/_nuxt/AuthenticationCardLogo-1ab9f31c.mjs": {
    "type": "application/javascript",
    "etag": "\"9f-Zr9woDRF8EUccw0s2jHSdvWG+u4\"",
    "mtime": "2021-12-11T10:51:22.661Z",
    "path": "../public/_nuxt/AuthenticationCardLogo-1ab9f31c.mjs"
  },
  "/_nuxt/Banner-cf6e6851.mjs": {
    "type": "application/javascript",
    "etag": "\"8e4-tZDWLRrJPKxsHCnRu3dQd+ZeOxc\"",
    "mtime": "2021-12-11T10:51:22.661Z",
    "path": "../public/_nuxt/Banner-cf6e6851.mjs"
  },
  "/_nuxt/Button-2666fb58.mjs": {
    "type": "application/javascript",
    "etag": "\"300-EnKSanwPnA+Q32qe5sL5o0jxxRA\"",
    "mtime": "2021-12-11T10:51:22.661Z",
    "path": "../public/_nuxt/Button-2666fb58.mjs"
  },
  "/_nuxt/Button-91413df0.mjs": {
    "type": "application/javascript",
    "etag": "\"26e-KirAzb+OERwkhPwcUljnYQjYdvU\"",
    "mtime": "2021-12-11T10:51:22.660Z",
    "path": "../public/_nuxt/Button-91413df0.mjs"
  },
  "/_nuxt/Checkbox-c6290b03.mjs": {
    "type": "application/javascript",
    "etag": "\"27d-s9wRf3MqSs4hfsowX9Uuu38IniQ\"",
    "mtime": "2021-12-11T10:51:22.660Z",
    "path": "../public/_nuxt/Checkbox-c6290b03.mjs"
  },
  "/_nuxt/ConfirmationModal-61593ec2.mjs": {
    "type": "application/javascript",
    "etag": "\"551-kGEB3Yyfz902zaTRPan7S0DF+PA\"",
    "mtime": "2021-12-11T10:51:22.660Z",
    "path": "../public/_nuxt/ConfirmationModal-61593ec2.mjs"
  },
  "/_nuxt/ConfirmsPassword-27dd21a2.mjs": {
    "type": "application/javascript",
    "etag": "\"96e-lrpRlEFou9Ti9k57607V4iGiB1M\"",
    "mtime": "2021-12-11T10:51:22.660Z",
    "path": "../public/_nuxt/ConfirmsPassword-27dd21a2.mjs"
  },
  "/_nuxt/DangerButton-7f744dd0.mjs": {
    "type": "application/javascript",
    "etag": "\"23f-eVLnylKU0kfViEf3HFyu+vzyLK4\"",
    "mtime": "2021-12-11T10:51:22.660Z",
    "path": "../public/_nuxt/DangerButton-7f744dd0.mjs"
  },
  "/_nuxt/DialogModal-2c23b134.mjs": {
    "type": "application/javascript",
    "etag": "\"2ec-kToGOKoZ3EMBQ3B/J3yzrWODn3Y\"",
    "mtime": "2021-12-11T10:51:22.659Z",
    "path": "../public/_nuxt/DialogModal-2c23b134.mjs"
  },
  "/_nuxt/Dropdown-8adc9ba7.mjs": {
    "type": "application/javascript",
    "etag": "\"612-mWz582bTbLVO9sQTOEcictmty6s\"",
    "mtime": "2021-12-11T10:51:22.659Z",
    "path": "../public/_nuxt/Dropdown-8adc9ba7.mjs"
  },
  "/_nuxt/DropdownLink-c6188f53.mjs": {
    "type": "application/javascript",
    "etag": "\"b3-dYfCGokGXSIMIlE6AFnWJntFOp4\"",
    "mtime": "2021-12-11T10:51:22.659Z",
    "path": "../public/_nuxt/DropdownLink-c6188f53.mjs"
  },
  "/_nuxt/FormSection-774989ac.mjs": {
    "type": "application/javascript",
    "etag": "\"421-qaVtwuoG/5qYiNXPSHzDRRJJG7o\"",
    "mtime": "2021-12-11T10:51:22.659Z",
    "path": "../public/_nuxt/FormSection-774989ac.mjs"
  },
  "/_nuxt/Icon-91e6dc28.mjs": {
    "type": "application/javascript",
    "etag": "\"254-V13SmbpzKrW9njcwFxl2lQrIGJg\"",
    "mtime": "2021-12-11T10:51:22.659Z",
    "path": "../public/_nuxt/Icon-91e6dc28.mjs"
  },
  "/_nuxt/Input-67b57870.mjs": {
    "type": "application/javascript",
    "etag": "\"3b7-2grP9TtCYgMkdN06GUcqpC6F6g8\"",
    "mtime": "2021-12-11T10:51:22.658Z",
    "path": "../public/_nuxt/Input-67b57870.mjs"
  },
  "/_nuxt/InputError-771b8322.mjs": {
    "type": "application/javascript",
    "etag": "\"12e-DJUt6wflnFmjHIaCdhPA4r2tvVk\"",
    "mtime": "2021-12-11T10:51:22.658Z",
    "path": "../public/_nuxt/InputError-771b8322.mjs"
  },
  "/_nuxt/Label-f616d0a9.mjs": {
    "type": "application/javascript",
    "etag": "\"15f-/oKRtjUq+WSyZKO2dz74qgia/ek\"",
    "mtime": "2021-12-11T10:51:22.658Z",
    "path": "../public/_nuxt/Label-f616d0a9.mjs"
  },
  "/_nuxt/Modal-df54e84c.mjs": {
    "type": "application/javascript",
    "etag": "\"809-fj2Ik9IPdDWCsLFisBvoI4sKdnI\"",
    "mtime": "2021-12-11T10:51:22.658Z",
    "path": "../public/_nuxt/Modal-df54e84c.mjs"
  },
  "/_nuxt/NavLink-b4b3be67.mjs": {
    "type": "application/javascript",
    "etag": "\"269-ZCIdAy9ZEqvyDwCjLEeUslkNu4w\"",
    "mtime": "2021-12-11T10:51:22.658Z",
    "path": "../public/_nuxt/NavLink-b4b3be67.mjs"
  },
  "/_nuxt/ResponsiveNavLink-a5559d3b.mjs": {
    "type": "application/javascript",
    "etag": "\"33a-2jG5SJV6v+1HCl4/XhCDtG9vC6g\"",
    "mtime": "2021-12-11T10:51:22.657Z",
    "path": "../public/_nuxt/ResponsiveNavLink-a5559d3b.mjs"
  },
  "/_nuxt/SecondaryButton-0331806c.mjs": {
    "type": "application/javascript",
    "etag": "\"252-15KUfs4ODE2JAnyT4CVRp/LN6po\"",
    "mtime": "2021-12-11T10:51:22.657Z",
    "path": "../public/_nuxt/SecondaryButton-0331806c.mjs"
  },
  "/_nuxt/SectionBorder-ea0f7b93.mjs": {
    "type": "application/javascript",
    "etag": "\"109-1t0MNXyLlqcnoBro8nfed4fvGuA\"",
    "mtime": "2021-12-11T10:51:22.657Z",
    "path": "../public/_nuxt/SectionBorder-ea0f7b93.mjs"
  },
  "/_nuxt/SectionTitle-b6476159.mjs": {
    "type": "application/javascript",
    "etag": "\"1d1-rl2ft3YsgSSlVuO55+ancGXZ578\"",
    "mtime": "2021-12-11T10:51:22.657Z",
    "path": "../public/_nuxt/SectionTitle-b6476159.mjs"
  },
  "/_nuxt/TheHeader-457c78da.mjs": {
    "type": "application/javascript",
    "etag": "\"15b-b5Vg8vCdmobkZk86Tg0QET/oPIA\"",
    "mtime": "2021-12-11T10:51:22.656Z",
    "path": "../public/_nuxt/TheHeader-457c78da.mjs"
  },
  "/_nuxt/ValidationErrors-2feb4ea9.mjs": {
    "type": "application/javascript",
    "etag": "\"23a-2wylLGiUOgPIHI6svZGipT+Nwu4\"",
    "mtime": "2021-12-11T10:51:22.656Z",
    "path": "../public/_nuxt/ValidationErrors-2feb4ea9.mjs"
  },
  "/_nuxt/Welcome-9af43816.mjs": {
    "type": "application/javascript",
    "etag": "\"144a-zS/UrtzlNBea3FeR8/FewbeaF8w\"",
    "mtime": "2021-12-11T10:51:22.656Z",
    "path": "../public/_nuxt/Welcome-9af43816.mjs"
  },
  "/_nuxt/about-e36c5ef9.mjs": {
    "type": "application/javascript",
    "etag": "\"89-SepKjnOkcyrTH/VsYzsNmUESj54\"",
    "mtime": "2021-12-11T10:51:22.656Z",
    "path": "../public/_nuxt/about-e36c5ef9.mjs"
  },
  "/_nuxt/custom-3d5aee2e.mjs": {
    "type": "application/javascript",
    "etag": "\"ff-d+GAPSApdIKHFSFgsy8HcTJ8Gwk\"",
    "mtime": "2021-12-11T10:51:22.655Z",
    "path": "../public/_nuxt/custom-3d5aee2e.mjs"
  },
  "/_nuxt/entry-020a2e38.mjs": {
    "type": "application/javascript",
    "etag": "\"29d8b-ZvMuyPivdPFS9VQCZoX666us9us\"",
    "mtime": "2021-12-11T10:51:22.655Z",
    "path": "../public/_nuxt/entry-020a2e38.mjs"
  },
  "/_nuxt/index-a0ba2745.mjs": {
    "type": "application/javascript",
    "etag": "\"1b998-cbCob1qs2+Xn34DSdCZTVieIWDg\"",
    "mtime": "2021-12-11T10:51:22.654Z",
    "path": "../public/_nuxt/index-a0ba2745.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"2586-oUhHu5WSC9gt98Qof8HrQuWEkAo\"",
    "mtime": "2021-12-11T10:51:22.653Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/assets/Icon.0c64b6bb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29-zrjqzzaDbb+BaAPGCeYLi4HNDWQ\"",
    "mtime": "2021-12-11T10:51:22.656Z",
    "path": "../public/_nuxt/assets/Icon.0c64b6bb.css"
  },
  "/_nuxt/assets/entry.ea14c267.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5aa0-SC3qN+VpJWw2cfkaMOEv+QOf4+g\"",
    "mtime": "2021-12-11T10:51:22.655Z",
    "path": "../public/_nuxt/assets/entry.ea14c267.css"
  },
  "/_nuxt/assets/index.bf62ec00.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5fc7-aHzlnQkYt9bjMdnmIE2QlIi3FrE\"",
    "mtime": "2021-12-11T10:51:22.655Z",
    "path": "../public/_nuxt/assets/index.bf62ec00.css"
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
const STATIC_ASSETS_BASE = "/Users/jihad/Desktop/Projects/nuxt-starter/dist" + "/" + "1639219878";
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
