import { all } from 'country-list-js';
import { SelectItem } from '../types/types';

export const getCountryList = () => {
    const mapList: SelectItem[] = Object.keys(all).map( (key: string) => {
        return {
            value: all[key].name,
            label: all[key].name,
        }
    })

    return mapList.sort( (a: SelectItem, b: SelectItem) => {
        return (a.value > b.value) ? 1 : -1;
    } )
}