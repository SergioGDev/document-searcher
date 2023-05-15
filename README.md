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

### Code structure
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
- `src/hooks`: It's the folder to contain the custom hooks of the app. In order to show how we can build it, I've created the custom hooks `src/hooks/useDocumentListFiltered.ts`, that have the logic to get the filtered list; and `src/hooks/useFilterInput.ts`, that have the logic of the general inputs (text field and select, in this case).
- `src/pages`: It's the folder to contain the pages of the app. For now we only have the page `src/pages/DocumentSearcherPage.tsx`, but if in the future we'd like to implement other pages (using a router in order to protect routes), it will be the folder that will contain them.
-  `src/store`: It contains the store of the app. Like I said in section _Other tools used_, I've used *Redux Toolkit* to manage the store of the app. The main functionality of the store is to manage the *filterObject* that can filter the results of the finder.
- `src/types`: Here we have the file `src/types/types.ts`, that contains the common types of the app (Props, Components, Filters or Data).

### Explanation of the test approach
As the test statement said, the app had to be scalable. So, I've decided to use *Redux Toolkit* in order to manage the state of the app. I've put in the store of the app the *filterObject*. This object can contain the value of all filters that we could use. The way that I use it is simple: when you use a filter of the filter box, the store will save a pair [key, value] that could be used by the hook that bring us the _documentList_. 

I've created constants to distinguish if the input is a textField or a select, because the behavior is different in each element:
- `FILTER_INPUT` is for text field inputs. When we write in a InputFinder the filter will find coincidences in text. 
- `FILTER_SELECT` if for selects inputs. When we select in a SelectBase the filter will find equalities in the values of the list.

If we want to add a different behavior, we only have to create a diferent constant and add the behavior to the *documentListFiltered* function.

To manage the components, I've create a simple structure. We have the folders:
- `src/components/DocumentList`: Here we have the component that show the document list. To have the simplest component possible I've create a `DocumentItemList` that render the box with the data of a document item.
- `src/components/FilterBox`: This component will have all the filters that we could use. The behavior of each filter will be inside each base component.
- `src/components/forms`: This folder will have all the base components that make up the filter box. All the components will use the *filterObject* in order to filter the *documentList*. When a component change the *filterObject* will be updated and the document list will change using this *filterObject*. We could create all the inputs that we'll need using the base components. For this test we have need to create the next base filter components:
    - `src/components/forms/InputFinder.tsx`: It's a text field that find coincidences in the document list.
    - `src/components/forms/SelectBase.tsx`: It's a text field that find equalities in the document list.
    
Like we said before, we've used the *store* to manage de *filterObject*. Each time a filter input change, the *filterObject* will be updated. When this happens, the *documentList* will be updated using the filters.