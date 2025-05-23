module.exports = {
  //Lint & Prettify TS and JS Files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `prettier --write ${filenames.join(' ')}`,
    `npm run test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
