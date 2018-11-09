var Tetris = {
    newTetris: function(elementId) {
        var root = document.getElementById(elementId);
        root.setAttribute('style', 'background-color: blue')
        var board = document.createElement('div');
        root.appendChild(board)
        Tetris.createBoardAt(board)
    },
    createBoardAt: function(element) {
        
        var table = document.createElement('table')
        var tbody = document.createElement('tbody')
        table.appendChild(tbody)
        var i = 0;
        var j = 0;
        for (i=0; i < 8; i++) {
            var row = document.createElement('tr')
            row.setAttribute('id', 'row'+i)
            for (j=0; j < 8; j++) {
                var col = document.createElement('td')
                col.innerText = i+'-'+j
                col.setAttribute('id', i+'-'+j)
                row.appendChild(col);
            }
            tbody.appendChild(row)
        }
        element.appendChild(table)
    }
}
