import storageAccess from './storageAccess.js';

class LocalStorage {
  saveData = (data) => {
    localStorage.clear();
    localStorage.setItem('userData', JSON.stringify(data));
  };

  loadData = () => {
    if (storageAccess('localStorage')) {
      if (localStorage.length !== 0) {
        const loadedData = JSON.parse(localStorage.getItem('userData'));
        return loadedData;
      }
    }
    return null;
  };
}

const storage = new LocalStorage();
export { storage as default };
