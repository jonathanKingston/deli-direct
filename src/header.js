export function render(props) {
  function pageSelected(page) {
    if (props.page == page) {
      return `class="selected"`;
    }
    return "";
  }
  let canonicalPath = props.canonical || "/" + props.page;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Deli Direct - ${props.title}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <link rel="preload" as="style" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="">
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&family=Maitree&display=swap">
      <meta name="description" content="${props.title}">
      <link rel="manifest" href="/manifest.webmanifest">
      <link rel="preconnect" href="https://www.google-analytics.com">
      <link rel="canonical" href="https://deli.direct${canonicalPath}">
    </head>
    <body>
      <header>
        <h1><a href="/">Deli Direct</a></h1>
        <nav>
          <a href="/places" ${pageSelected("places")}>The Places</a>
          <a href="/about" ${pageSelected("about")}>About Us</a>
        </nav>
      </header>
      <main>
        <nav id="filter" hidden>
          <h2>Nottingham, UK</h2>
          <form id="listFilter" hidden>
            <legend>Filter</legend>

            <input type="checkbox" name="delivers" id="deliversFilter" />
            <label for="deliversFilter">Delivery</label>

            <input type="checkbox" name="collect" id="collectFilter" />
            <label for="collectFilter">Collect</label>

            <input type="checkbox" name="plantBased" id="plantBasedFilter" />
            <label for="plantBasedFilter" class="plantBasedFilterLabel" title="Plant based">Plant based</label>
          </form>
          <ul>
            <li class="list"><a href="/places" ${pageSelected("places")} >List</a>
            <li class="map"><a href="/map" ${pageSelected("map")} >Map</a>
          </ul>
        </nav>
        <div id="unsupported" hidden>
          Unfortunately your browser is unsupported at the moment.
        </div>
  `;
}
