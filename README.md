# Test task

This project test task for position React developer.\
It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task

Create React app using TypeScript for generating forms by JSON config.

Application must contain two tabs:

- Config - to enter configuration with JSON.
- Result - to display resulting form.

Application should be enable to generate forms with any number of fields.\
Available field types:

- Integer
- String
- Text (multi string)
- Boolean (checkbox)
- Enumerate (radio button)

Also, application must allow to set form's title and button's count and their text.

### Config example

```json
{
  "id": "form",
  "title": "TITLE",
  "fields": [
    {
      "label": "string field",
      "type": "string",
      "value": "cxvcv",
      "name": "first",
      "readOnly": true
    },
    {
      "label": "second string field",
      "type": "string",
      "value": "second",
      "name": "second",
      "autoComplete": true
    },
    {
      "label": "int field",
      "type": "int",
      "min": 10,
      "max": 20,
      "value": 20
    },
    {
      "label": "boolean field",
      "type": "boolean",
      "value": false,
      "name": "bool"
    },
    {
      "label": "enum field",
      "type": "enum",
      "items": [
        {
          "label": "one",
          "value": "1"
        },
        {
          "label": "two",
          "value": "2",
          "autoFocus": true
        }
      ],
      "value": "1"
    },
    {
      "label": "Text field",
      "placeholder": "text",
      "type": "text",
      "value": "Here is a text",
      "rows": 5,
      "resizeable": true
    },
    {
      "label": "Date field",
      "placeholder": "date",
      "clearable": true,
      "type": "date",
      "value": "2022-08-02"
    },
    {
      "label": "Date field 2",
      "placeholder": "date",
      "type": "date",
      "value": "2022-08-17"
    }
  ],
  "buttons": [
    {
      "text": "Button"
    },
    {
      "text": "Button 2",
      "type": "button"
    },
    {
      "text": "Reset",
      "type": "reset"
    },
    {
      "text": "Submit",
      "type": "submit"
    }
  ]
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs check code with eslint. If there are problems, they will be shown in the console.

### 'npm run lint:fix'

Like `npm run lint` but tries to fix problems.

### `npm run prettier`

Runs prettier to fix code layout.
