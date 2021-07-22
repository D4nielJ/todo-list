class LocalStorage {
  localStorage = {
    data: '',
  };

  saveData = (data) => {
    this.localStorage.data = JSON.stringify(data);
  };

  loadData = () => {
    if (localStorage.data !== '') {
      const loadedData = JSON.parse(localStorage.data);
      return loadedData;
    }
    return null;
  };
}

const storage = new LocalStorage();
export { storage as default };
