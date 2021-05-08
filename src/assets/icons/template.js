/* eslint-disable no-shadow */
function template({ template }, opts, { imports, componentName, props, jsx, exports }) {
  const comment = `
        /* eslint-disable max-len */
        /* eslint-disable react/jsx-props-no-spreading */
    `;

  return template.ast`
      ${comment}
      ${imports}

      const ${componentName} = (${props}) => ${jsx}
      ${exports}
    `;
}
module.exports = template;
