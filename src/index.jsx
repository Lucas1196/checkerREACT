class Table extends React.Component {
    constructor() {
        super();
        this.state = { 
            piece: '',
            selectedPiece: 'pawn',
            pieceFalse: 'column',
        };
    }
    
    //Function to create table and color it
    createTable = () => {
    
    let columns = [];
    // Outer loop to create parent
    for (let y = 0; y < 8; y++) {
        let cells = [];
            //Inner loop to create children
            for (let x = 0; x < 8; x++) {
                if ( y % 2 == 0 && x % 2 != 0 ) {
                    cells.push(<span className = "white" key = {x} onClick={((e) => this.checkTarget(e))}>{this.placePiece(x, y)}</span>)
                }
                else if ( y % 2 != 0 && x % 2 == 0 ) {
                    cells.push(<span className = "white" key = {x} onClick={((e) => this.checkTarget(e))}>{this.placePiece(x, y)}</span>)
                }
                else {
                    cells.push(<span className = "black" key = {x} onClick={((e) => this.checkTarget(e))}>{this.placePiece(x, y)}</span>)
                } 
            }
            //Create the parent and add the children
            columns.push(<div className = "column" key = {y}>{cells}</div>)
        }
        return columns;
    }
    //Function to append a piece to specific point in table
    placePiece = (x, y) => {
        if ( x == 3 && y == 3 ) {
            this.state.piece = <b className="pawn"></b>
            window.onload = function () {
                var parentPawn = document.getElementsByClassName("column");
                var pawn = document.getElementsByClassName("pawn");
                const columnPiece = parentPawn[y];
                if (pawn.length > 0) {
                    columnPiece.className += " piece-inside";
                }
            }
            return this.state.piece;
        }
    }

    //Function for check e.Target
    checkTarget = (e) => {
        if ( e.target.className == this.state.selectedPiece ) {
            console.log("I am the piece and I am ok");
            return;
        }
        else if ( e.target.className !== this.state.selectedPiece ) {
            // {this.legalMove()}
            console.log("I am the cell without piece");
            return;
        }
        else if ( !this.state.selectedPiece(e.target) ) {
            // {this.legalMove()}
            console.log("i am nothing");
        }
    }
    legalMove = (el) => {

    }
    render() {
        return(
            <div className = "inner-table">
                {this.createTable()}
            </div>
        )
    }
}

ReactDOM.render(<Table />, document.getElementById('table'));