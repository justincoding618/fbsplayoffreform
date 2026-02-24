const sorttable = function (tableID) {
  getTableID = document.getElementById(tableID);
  new DataTable(getTableID);
};

sorttable("playoff-appearances");
sorttable("playoff-drought");
