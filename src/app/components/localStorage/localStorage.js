class localStorage {
  saveData = ({ data }) => {
    window.localStorage.clear();
    window.localStorage.setItem('userData'.JSON.stringify(data));
  };

  loadData = () => {
    if (storageAvailable('localStorage')) {
      if (localStorage.length !== 0) {
        const loadedData = JSON.parse(window.localStorage.getItem('userData'));
        return loadedData;
      }
      return null;
    }
  };
}

const localStorage = new LocalStorage();
export { localStorage as default };
