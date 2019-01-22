class Table extends React.Component {
    constructor() {
        super();
        this.state = { 
            piece: '',
            selectedPiece: 'pawn',
            pieceInside: 'piece-inside',
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
            columns.push(<div className = "column" key = {y}>{cells}{this.pieceInside()}</div>)
        }
        return columns;
    }
    //Function to append a piece to specific point in table
    placePiece = (x, y) => {
        if ( x == 4 && y == 5 ) {
            this.state.piece = <b className="pawn"></b>
            return this.state.piece;
        }
    }
    //Function to add class "piece-inside" to the column which contains the pawn
    pieceInside = () => {
        var parentPawn = document.getElementsByClassName("column");
        if( parentPawn.className !== this.state.pieceInside ) {
            // parengtPawn.classList.add("piece-inside");
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