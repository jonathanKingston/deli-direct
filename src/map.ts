export const nottingham: [number, number] = [
  52.95448349999999,
  -1.1549223
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

export async function loadIpLocation() {
  const ipCheck = "https://api.ipdata.co/?api-key=255e8bee85633e201aa99cdbae675bb2736795e2efbf9fef679d227d";
  if (!("location" in localStorage)) {
    try {
      let response = await fetch(ipCheck);
      let data = await response.json();
      if ("latitude" in data && "longitude" in data) {
        localStorage["location"] = JSON.stringify([data.latitude, data.longitude]);
      }
    } catch (e) {
      localStorage["location"] = nottingham;
    }
  }
}

export function getAproximateLocation() {
  let userAproxLocation = nottingham;
  if ("location" in localStorage) {
    userAproxLocation = JSON.parse(localStorage.location);
  }
  
  // If the distance is greater than 25km away from nottingham revert to notts
  if (calculateDistance(nottingham, userAproxLocation) > 25000) {
    userAproxLocation = nottingham;
  }

  return userAproxLocation;
}
