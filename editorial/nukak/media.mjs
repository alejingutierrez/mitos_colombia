import { chimilaMedia } from "../chimila/media.mjs";

const guaviareIniridaApproximate = {
  latitude: 3.86,
  longitude: -67.92,
};

const originPair = chimilaMedia["yunari-y-las-cinco-tierras"];

export const nukakMedia = {
  "creacion-nukak-maku": {
    horizontal: originPair.horizontal,
    vertical: originPair.vertical,
    reusedFrom: "chimila/yunari-y-las-cinco-tierras",
    ...guaviareIniridaApproximate,
  },
};
