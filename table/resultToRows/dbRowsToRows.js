var dbRowToRow = require('./dbRowToRow');
var newRowArray = require('../rowArray');

function dbRowsToRows(span, dbRows) {
    var rows = newRowArray(span.table);
    var queryContext = dbRows.queryContext;
    for (var i = 0; i < dbRows.length; i++) {
        var row = dbRowToRow(span, dbRows[i], queryContext);
        rows.push(row);
    }
    return rows;
}

module.exports = dbRowsToRows;