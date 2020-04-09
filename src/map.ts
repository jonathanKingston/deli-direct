import { places } from "../tmp/places";

export const nottingham: [number, number] = [
  52.95448349999999,
  -1.1549223
];

export const regions = [
  {
    location: [
      52.95448349999999,
      -1.1549223,
    ],
    path: "/places/nottingham",
    name: "Nottingham"
  },
  {
    location: [
      53.118755,
      -1.448822
    ],
    path: "/places/derby",
    name: "Derby"
  }
];

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
    let distanceA = calculateDistance(userLocation, [a.location[0] || 0, a.location[1] || 0]);
    let distanceB = calculateDistance(userLocation, [b.location[0] || 0, b.location[1] || 0]);

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
  return [data.result.longitude, data.result.latitude];
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
  let userAproxLocation = nottingham;
  if (aproxLocationKey in localStorage) {
    userAproxLocation = JSON.parse(localStorage[aproxLocationKey]);
    if (!userAproxLocation) {
      userAproxLocation = nottingham;
    }
  }
  
  // If the distance is greater than 25km away from nottingham revert to notts
  if (calculateDistance(nottingham, userAproxLocation) > 25000) {
    userAproxLocation = nottingham;
  }

  return userAproxLocation;
}
