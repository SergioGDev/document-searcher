import documentList from '../data/data.json';
import { DocumentData, FILTER_INPUT, FILTER_SELECT, StringMap } from '../types/types';


export const getDocumentListFiltered = (filterObject: StringMap) => {
    // If we dont have filters, we'll return the complete list.
    if (Object.keys(filterObject).length === 0) return documentList;

    let filterList = documentList;
    Object.keys(filterObject).forEach( (key: string) => {
      const keyDocument = key.replace('FilterSelect', '').replace('FilterInput', '');

      filterList = filterList.filter((document: DocumentData) => {
        // If it's a select input, we'll have to find equality. If it's a input text, we'll have to find coincidences.
        if (key.indexOf(FILTER_INPUT) !== -1) {
            return document[keyDocument as keyof DocumentData].toLowerCase().indexOf(filterObject[key].toLowerCase()) !== -1;
        } else if (key.indexOf(FILTER_SELECT) !== -1) {
            return document[keyDocument as keyof DocumentData] === filterObject[key];
        }
      })
    })
    return filterList;
}