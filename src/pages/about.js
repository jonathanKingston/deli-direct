export const details = {
  "description": "deli direct finds local companies offering supplies to those in need",
  "title": "About us"
};

export function render(props) {
  return `
  <div class="sidebyside">
    <section>
      <h1>
        A place to connect communities with their local businesses
      </h1>
      
      <p>
        Deli Direct is a platform that connects customers with local businesses. Launching first in Nottingham, England, we aim to track the availability of local small providers impacted by the outbreak and to connect those in need.
      
      <p>
        Currently, we are focusing on listing high quality deli, food, and drink suppliers in Nottingham, England—but we are hoping to quickly expand to other regions, countries, and additional business catergories as soon as possible.
      
      <p>
        <b>If you are interested in adding your business to the site, please fill in the form on this page. We are accepting submissions of all business types and in all regions. Titles with an (*) are required fields.</b>
      
      <p>
        If you have any additional questions, comments, or need to update a business listing, you can contact us at <a href="mailto:admin@deli.direct">admin@deli.direct</a>.
      
      <p>
        Stay safe.
    </section>
    <aside>
      <h2>Add your business to Deli Direct</h2>
      <form id="collectForm">
        <div>
          <label for="businessName">Business name*</label>
          <input name="title" id="businessName" required>
        </div>
        <div>
          <label for="contactName">Contact*</label>
          <input name="contact" id="contactName" required>
        </div>
        <div>
          <label for="contactName">Business description</label>
          <textarea name="blurb" id="blurb">
          </textarea>
        </div>
        <div>
          <label for="googleMap">Google map url*</label>
          <input type="url" name="location" id="googleMap" required>
        </div>
        <div>
          <label for="phoneNumber">Business phone number</label>
          <input type="tel" name="phone" id="phoneNumber" required>
        </div>
        <div>
          <label for="website">Business website</label>
          <input name="website" id="website" required>
        </div>
        <div>
          <label for="instagram">Instagram</label>
          <input type="url" name="instagram" id="instagram" required>
        </div>
        <div>
          <label for="facebook">Facebook</label>
          <input type="url" name="facebook" id="facebook" required>
        </div>
        <div>
          <label for="twitter">Twitter</label>
          <input type="url" name="twitter" id="twitter" required>
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
          <input type="url" name="deliveroo" id="deliveroo" required>
        </div>
        <div>
          <label for="justeat">Just-Eat</label>
          <input type="url" name="justeat" id="justeat" required>
        </div>
        <button>
          Submit
        </button>
      </form>
    </aside>
  </div>
  `;
}

export function init() {
console.log("hey");
  let collectForm = document.getElementById("collectForm");
  collectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let submitPath = "https://script.google.com/macros/s/AKfycbwihGbK7N_jR_VPfDOpp0nrQsxFCHdYn83yvGe0KXgd64QjSOB0/exec?";

    let fields = [...collectForm.querySelectorAll("input,textarea")];
    let data = {};
    for (let field of fields) {
      submitPath += `&${field.name}=${encodeURIComponent(field.value)}`;
    }
  
    submitPath.searchParams = data;
    let request = new Request(submitPath);
    fetch(request, {
      method: "GET",
      credentials: "omit",
      mode: "no-cors",
    });
  });
}
