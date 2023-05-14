import { SelectItem } from "../types/types"

export const getVersionsList = () => {
    const versionList: SelectItem[] = [];

    for (let i = 1; i <= 10; i++) {
        versionList.push({
            value: `v${i}`,
            label: `v${i}`,
        })
    }

    return versionList;
}