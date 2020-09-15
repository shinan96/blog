export const parseUrl(val) {
      if (!val) return null;
      let search = location.search;
      let serchParams = new URLSearchParams(search);
      return serchParams.get(val);

}