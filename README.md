# DOCUMENT SEARCHER
## Made by: Sergio García Hernández

### Technology
- React v18.2.0
- Typescript v5.0.2

### Other tools used
- [Material UI](https://mui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- The library [country-list](https://www.npmjs.com/package/country-list)
- Vite
- ESLint

### Scripts
- `npm run dev`: Used to runs the server in development mode.
- `npm run build`: Used to build a production bundle of the app.

### Explanation of the code structure
In order to have a structured code, I've decided to order de paths of the project as follows:
- `src/components`: Here are the individual components of the app. 
    - We have a folder `src/components/forms` to save the forms common components of the app:
        - `src/components/forms/InputFinder.tsx`
        - `src/components/forms/SelectBase.tsx`
    - The rest of the components have their own folder in order to have a good project structure. If we need to create an specific subcomponent of a component, we will create it into the folder of the specific component. For example, for the component `src/components/DocumentList/DocumentList.tsx`, I've create a subcomponent `src/components/DocumentList/DocumentItemList.tsx` that only will be used inside the component `src/components/DocumentList/DocumentList.tsx`.

- `src/data`: It contains the data of the app. The objects of the array have the following structure:
    - `country: string`
    - `version: string`
    - `text: string`

- `src/functions`: It contains the funcions of the app. Here we have the functionality of get the data of the selects and filter the list of the documents using the filterObject.
- `src/pages`: It's the folder to contain the pages of the app. For now we only have the page `src/pages/DocumentSearcherPage.tsx`, but if in the future we'd like to implement other pages (using a router in order to protect routes), it will be the folder that will contain them.
-  `src/store`: It contains the store of the app. Like I said in section _Other tools used_, I've used *Redux Toolkit* to manage the store of the app. The main functionality of the store is to manage the *filterObject* that can filter the results of the finder.
- `src/types`: Here we have the file `src/types/types.ts`, that contains the common types of the app (Props, Components, Filters or Data).

### Explanation of the test approach
