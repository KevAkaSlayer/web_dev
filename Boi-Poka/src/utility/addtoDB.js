const getStoredReadList = () => {
    let readList;
    if(localStorage.getItem('readList') === null){
        readList = [];
    } else {
        readList = JSON.parse(localStorage.getItem('readList'));
    }
    return readList; 
}

const addToStoredReadList = (book) => {
    const readList = getStoredReadList();
    if(!readList.includes(book)){
        readList.push(book);
        localStorage.setItem('readList', JSON.stringify(readList));
    }
    
}   

const getStoredWishList = () => {
    let wishList;
    if(localStorage.getItem('wishList') === null){
        wishList = [];
    } else {
        wishList = JSON.parse(localStorage.getItem('wishList'));
    }
    return wishList;
}

const addToStoredWishList = (book) => {
    const wishList = getStoredWishList();
    if(!wishList.includes(book)){
        wishList.push(book);
        localStorage.setItem('wishList', JSON.stringify(wishList));
    }
}

export {  addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList };