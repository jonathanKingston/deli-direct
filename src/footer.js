export function render(props) {
  return `
    </main>
    <footer>
      <div class="center">
        <section>
          <h4>Get added to deli direct</h4>
          <p>Deli Direct currently only serves Nottingham, UK &mdash; but we hope to expand to other regions. If you would like to contribute your business, please add it via the <a href="/about">business submission form</a>.</p>
        </section>
        <nav class="menu">
          <ul>
            <li><a href="/places">The Places</a>
            <li><a href="/about">About</a>
          </ul>
        </nav>

        <nav>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:admin@deli.direct">admin@deli.direct</a>
          </ul>

          <h4>Connect with us</h4>
          <ul class="icons">
            <li><a href="https://www.facebook.com/delidirectuk/" rel="noopener" target="_blank" class="facebook">delidirectuk</a>
            <li><a href="https://twitter.com/deli_direct_uk" rel="noopener" target="_blank" class="twitter">@deli_direct_uk</a>
            <li><a href="https://www.instagram.com/deli_direct" rel="noopener" target="_blank" class="instagram">@deli_direct</a>
          </ul>
        </nav>
      </div>
    </footer>
    <script src="output.js"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161955128-1"></script>
  </body>
  </html>
  `;
}
