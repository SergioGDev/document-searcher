import { SelectChangeEvent } from "@mui/material";

// PROPS //
export type SelectProps = {
    value: string;
    onChange: (
        event: SelectChangeEvent
    ) => void;
}

export type SelectBaseProps = {
    label: string;
    name: string;
    options: SelectItem[];
}

export type InputFinderProps = {
    name: string;
}

// COMPONENT //
export interface SelectItem {
    value: string;
    label: string;
}

export interface StringMap {
    [key: string]: string;
}

// FILTERS //
// Add here the name of the selects
// export const SELECT_COUNTRY_FILTER = 'countryFilterSelect';
// export const SELECT_VERSION_FILTER = 'versionFilterSelect';
// export const INPUT_FINDER_FILTER = 'textFilterInput';

export const FILTER_SELECT = 'FilterSelect';
export const FILTER_INPUT = 'FilterInput';

export interface DocumentData {
    version: string;
    country: string;
    text: string;
}