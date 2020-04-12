import type { PageProps } from "../types";
import { lookupPostcode, findNearestRegion } from "../map";

export const details = {
  "canonical": "/",
  "description": "Deli Direct finds local companies offering supplies to those in need",
  "title": "Find Nottingham food & drink independents"
};

export function render(props: PageProps) {
  return `
    <div class="center home sidebyside">
      <section class="intro">
        <h1>Discover &amp; Support Local Independents</h1>
        <p>Deli Direct connects you to local Nottingham food and drink shops. With over 100 listings, find out how to connect with and support local businesses.</p>
        <form id="lookup-form">
          <label for="postcode">Enter your postcode</label><input name="postcode" id="postcode" autofill="postal-code" />
          <button>Find local places</button>
        </form>
      </section>
      <aside>
        <img src="/images/home-image.svg" alt="">
      </aside>
    </div>
  `;
}

async function submitPostcode(e: Event) {
  e.preventDefault();
  let postcodeElement = document.getElementById("postcode") as HTMLInputElement;
  let postcode = postcodeElement.value;
  let location = await lookupPostcode(postcode);
  let region = findNearestRegion(location);
  // TODO store selected location
  console.log("b", location, region);
  window.location.href = `/${region.key}/places`;
  
  // get location
  // go to places
}

function debounce(func: any, wait: number) {
	let timeout: any;
	return function(...args: any) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeout = 0;
			func(...args);
    }, wait);
	};
}

async function suggestPostcode(value: string) {
  let response = await fetch(`https://api.postcodes.io/postcodes/${value}/autocomplete`);
  let json = await response.json();
  console.log("c", json);
}

export function init() {
  let lookupFormElement = document.getElementById("lookup-form") as HTMLInputElement;
  lookupFormElement.addEventListener("submit", submitPostcode);

  let postcodeElement = document.getElementById("postcode") as HTMLInputElement;
  let eventHandler = debounce((e: KeyboardEvent) => {
    console.log("event", e);
    suggestPostcode(postcodeElement.value);
  }, 800);
  postcodeElement.addEventListener("keydown", eventHandler);
}
