import type { PageProps } from "../types";

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
      <a class="button" href="/places">Find local places</a>
      </section>
      <aside>
        <img src="/images/home-image.svg" alt="">
      </aside>
    </div>
  `;
}
