import type { Region } from "types";
import { places } from "../tmp/places";

export const regions: Array<Region> = [
  {
    location: [
      52.95448349999999,
      -1.1549223,
    ],
    key: "nottingham",
    name: "Nottingham"
  },
  {
    location: [
      53.070605,
      -0.806564
    ],
    key: "newark",
    name: "Newark on Tent"
  },
  {
    location: [
      52.9188043,
      -1.4748227
    ],
    key: "derby",
    name: "Derby"
  },
  {
    location: [
      52.898561,
      -1.269387
    ],
    key: "ilkeston",
    name: "Ilkeston"
  },
  {
    location: [
      51.538783,
      -0.102392
    ],
    key: "islington",
    name: "Islington"
  },
  {
    location: [
      53.309292,
      -1.122656
    ],
    "key": "worksop",
    "name": "Worksop"
  },
  {
    location: [
      53.215212,
      -1.676305
    ],
    "key": "bakewell",
    "name": "Bakewell"
  }
];

export const defaultRegion = regions[0];

function toRadians(n: number) {
  return n * Math.PI / 180;
}

export function calculateDistance(a: [number, number], b: [number, number]) {
  let R = 6371000;
  let φ1 = toRadians(a[0]);
  let φ2 = toRadians(b[0]);
  let Δφ = toRadians(b[0] - a[0]);
  let Δλ = toRadians(b[1]-a[1]);
  
  let o = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  let c = 2 * Math.atan2(Math.sqrt(o), Math.sqrt(1-o));

  return R * c;
}

export function findNearestRegion(userLocation: [number, number]) {
  regions.sort((a, b) => {
    let distanceA = calculateDistance(userLocation, a.location || [0,0]);
    let distanceB = calculateDistance(userLocation, b.location || [0,0]);

    if (distanceA < distanceB) {
      return -1;
    }
    if (distanceA > distanceB) {
      return 1;
    }
    return 0;
  });
  // TODO return error if too far away
  return regions[0];
}

export async function lookupPostcode(postcode: string): Promise<[number, number] | null> {
  let response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
  let data = await response.json();
  if (!("result" in data)) {
    return null;
  }
  return [data.result.latitude, data.result.longitude];
}

const aproxLocationKey = "aproxLocationKey";

export async function loadIpLocation() {
  const ipCheck = "https://api.ipdata.co/?api-key=255e8bee85633e201aa99cdbae675bb2736795e2efbf9fef679d227d";
  if (!(aproxLocationKey in localStorage)) {
    try {
      let response = await fetch(ipCheck);
      let data = await response.json();
      if ("latitude" in data && "longitude" in data) {
        localStorage[aproxLocationKey] = JSON.stringify([data.latitude, data.longitude]);
      }
    } catch (e) {
      localStorage[aproxLocationKey] = null;
    }
  }
}

export function getAproximateLocation() {
  let userAproxLocation = defaultRegion.location;
  if (aproxLocationKey in localStorage) {
    userAproxLocation = JSON.parse(localStorage[aproxLocationKey]);
    if (!userAproxLocation) {
      userAproxLocation = defaultRegion.location;
    }
  }
  
  // If the distance is greater than 25km away from defaultRegion revert to default
  if (calculateDistance(defaultRegion.location, userAproxLocation) > 25000) {
    userAproxLocation = defaultRegion.location;
  }

  return userAproxLocation;
}
