export default class ListDataClothes {
    constructor() {
        this.listDataClothes = [];
    }

    addClothes(clothes) {
        this.listDataClothes = [...this.listDataClothes, clothes];
    }
}