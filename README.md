# [Deli Direct](https://deli.direct/)


To get started with building this site, follow the Install setup.

## Install

Ensure you have a latest copy of nodejs and run:

```
npm install
```

To run the site, see Serve


## Audit places

Sorts the places.json file, later will audit all the data for validity.

```
npm run audit-places
```

## Init

Initialise the `dist/` directory with the github pages branch. This is used to deploy.

```
npm run init
```

## Serve

Serve the site locally for testing.

```
npm run serve
```

## Build

Build static files, moving a copy into `dist/`

```
npm run build
```

## Publish

Adds all the changes in `dist/` and pushes to gh-pages which publishes the site

```
npm run publish
```
