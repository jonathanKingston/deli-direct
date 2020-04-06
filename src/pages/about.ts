import type { PageProps } from "../types";

export const details = {
  "description": "deli direct finds local companies offering supplies to those in need",
  "title": "About us"
};

export function render(props: PageProps) {
  return `
  <div class="sidebyside">
    <section>
      <h1>
        A place to connect people with their independent shops
      </h1>
      
      <p>
        Deli Direct is a site that connects food and drink lovers with local businesses. Launching first in Nottingham UK, we aim to track the availability of small providers impacted by the outbreak.
      
      <p>
        We are focused on listing high quality deli, food, and drink suppliers in Nottingham. Find local craft beer, delicatessen, farm shops and bakeries that are available to deliver or take away.
      
      <p>
        <b>If you are interested in adding your business to the site, please fill in the form on this page. We are accepting submissions of all business types and in all regions. Titles with an (*) are required fields.</b>
      
      <p>
        If you have any additional questions, comments, or need to update a business listing, you can contact us at <a href="mailto:admin@deli.direct">admin@deli.direct</a>.
      
      <p>
        Stay safe.
    </section>
    <aside>
      <form id="collectForm">
        <h2>Add your business to Deli Direct</h2>
        <div>
          <label for="businessName">Business name*</label>
          <input name="title" id="businessName" required>
        </div>
        <div>
          <label for="contactName">Contact name*</label>
          <input name="contact" id="contactName" required>
        </div>
        <div>
          <label for="contactName">Business description</label>
          <textarea name="blurb" id="blurb">
          </textarea>
        </div>
        <div>
          <label for="address">Business Address*</label>
          <textarea name="address" id="address" required>
          </textarea>
        </div>
        <div>
          <label for="phoneNumber">Business phone number</label>
          <input type="tel" name="phone" id="phoneNumber">
        </div>
        <div>
          <label for="website">Business website</label>
          <input name="website" id="website">
        </div>
        <div>
          <label for="instagram">Instagram</label>
          <input type="url" name="instagram" id="instagram">
        </div>
        <div>
          <label for="facebook">Facebook</label>
          <input type="url" name="facebook" id="facebook">
        </div>
        <div>
          <label for="twitter">Twitter</label>
          <input type="url" name="twitter" id="twitter">
        </div>
        <div>
          <label for="businessType">Business type</label>
          <select name="type" id="businessType">
            <option>Select a type</option>
            <option>Brewery</option>
            <option>Deli</option>
            <option>Wholesalers</option>
            <option>Bakery</option>
            <option>Cafe</option>
            <option>Pub</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label for="deliveroo">Deliveroo</label>
          <input type="url" name="deliveroo" id="deliveroo">
        </div>
        <div>
          <label for="justeat">Just-Eat</label>
          <input type="url" name="justeat" id="justeat">
        </div>
        <div>
          <button>
            Submit
          </button>
        </div>
      </form>
      <div id="formSuccess" hidden>
        <h3>Thank you!</h3>

        <p>Thank you for submitting your business information to Deli Direct.
        <p>If you are submitting a new region (outside of Nottingham)—hold tight! Once we have gathered enough businesses for a new region, we will add it to our listings section on the site.

        <p>As we are a small team, we also appreciate your patience as we review each new submission. We will reach out if there are any issues.

        <p>If you think you have made a mistake or need to make any changes, please contact us.
      </div>
    </aside>
  </div>
  `;
}

export function init() {
  let collectForm = document.getElementById("collectForm");
  let formSuccess = document.getElementById("formSuccess");

  collectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let submitPath = "https://script.google.com/macros/s/AKfycbwihGbK7N_jR_VPfDOpp0nrQsxFCHdYn83yvGe0KXgd64QjSOB0/exec?";

    let fields = [...collectForm.querySelectorAll("input,textarea")] as Array<HTMLInputElement|HTMLTextAreaElement>;
    for (let field of fields) {
      submitPath += `&${field.name}=${encodeURIComponent(field.value)}`;
    }
  
    let request = new Request(submitPath);
    fetch(request, {
      method: "GET",
      credentials: "omit",
      mode: "no-cors",
    });
    collectForm.setAttribute("hidden", "");
    formSuccess.removeAttribute("hidden");
  });
}
