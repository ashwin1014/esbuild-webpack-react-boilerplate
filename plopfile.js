module.exports = (plop) => {
  plop.setGenerator('page', {
    description: 'Create a Page',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your Page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/Pages/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Page.js.hbs'
      },
      {
        type: 'add',
        path: 'src/app/Pages/{{pascalCase name}}/{{pascalCase name}}.style.scss',
        templateFile: 'plop-templates/style.scss.hbs'
      },
      {
        type: 'add',
        path: 'src/localization/{{pascalCase name}}.locale.js',
        templateFile: 'plop-templates/localize.js.hbs'
      }
    ]
  });
  plop.setGenerator('ui-component', {
    description: 'Create a reusable UI component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/sharedComponents/uiComponents/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component.js.hbs'
      }
    ]
  });
  plop.setGenerator('form-component', {
    description: 'Create a reusable form component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/sharedComponents/formComponents/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component.js.hbs'
      }
    ]
  });
};
