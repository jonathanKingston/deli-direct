export function render(props) {
  function pageSelected(page) {
    if (props.page == page) {
      return `class="selected"`;
    }
  }
  let canonicalPath = props.canonical || "/" + props.page;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<title>deli direct - ${props.title}</title>
    	<meta charset="utf-8" />
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <link rel="preload" as="style" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="">
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;900&family=Public+Sans:wght@300;400;700&display=swap">
      <meta name="description" content="${props.title}">
      <link rel="manifest" href="/manifest.webmanifest">
      <link rel="preconnect" href="https://www.google-analytics.com">
      <link rel="canonical" href="https://deli.direct${canonicalPath}">
    </head>
    <body>
      <header>
        <h1><a href="/">deli direct</a></h1>
        <nav>
          <a href="/" ${pageSelected("index")}>The Places</a>
          <a href="/about" ${pageSelected("about")}>About Us</a>
        </nav>
      </header>
      <main>
        <a href="/" ${pageSelected("index")}>List</a>
        <a href="/map" ${pageSelected("map")}>Map</a>
  `;
}
