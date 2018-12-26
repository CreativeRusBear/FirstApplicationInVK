//сортировка
//по какому типу будет происходить сортировка (первоночально по имени)
let friendsSort = localStorage.friendSort || "name";

//установка сортировки
export function setFriendSort(sort) {
    friendsSort=sort;
    //оохранение данных
    localStorage.friendSort = sort;
}

//получение сортировки
export function getFriendSort() {
    return friendsSort;
}
