class Table extends React.Component {
    constructor() {
        super();
        this.state = { 
            piece: '',
            selectedPiece: 'pawn',
            containerPiece: '',
            x: 4,
            y: 3,
        }
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

    //Function to append a piece to specific point in table and give to the column which contains THE PIECE class PIECE-INSIDE(Distinct Class)
    placePiece = (x, y) => {
        if ( x == this.state.x && y == this.state.y ) {
            this.state.piece = <b className="pawn"></b>
            window.onload = function () {
                let parentPawn = document.getElementsByClassName("column");
                let pawn = document.getElementsByClassName("pawn");
                const columnPiece = parentPawn[y];
                if (pawn.length > 0) {
                    columnPiece.className += " piece-inside";
                }
            }
            return this.state.piece;
        }
    }
    
    // componentDidUpdate = () => {
    //     this.setState({
    //         containerPiece: containerPiece,
    //     })
    // }

    //Function for check e.Target
    checkTarget = (e) => {
        if ( e.target.className == this.state.selectedPiece ) {
            console.log("I am the piece and I am ok");
            return;
        }
        else if ( e.target.className !== this.state.selectedPiece ) {
            {this.legalMove()}
            console.log("I am the cell without piece");
            return;
        }
        else if ( !this.state.selectedPiece(e.target) ) {
            console.log("i am nothing");
        }
    }
    legalMove = (el) => {
        let container = document.getElementsByClassName("piece-inside")[0];
        let yPawn = this.state.y;
        console.log(yPawn);
        let pieceChildren = container.children;
        for (val of pieceChildren) {
            if (val.firstChild) {
                break;
            }
        }
        var xPawn = this.state.x;
        // var x = el.getAttribute("data-x"); 
        // var parentEl = el.parentElement; 
        // var y = parentEl.getAttribute("data-y"); 

        // if(x == xPawn-1 || x == xPawn+1) && (y == yPawn-1 || y == yPawn+1)) {
        //     let newContainer = el.parentElement.classList.add("piece-inside");
        //     let oldContainer = container.classList.remove("piece-inside");
        //     let newpiece = el.appendChild(document.createElement("b"));
        //         newpiece.classList.add("pawn");
        //         piece.remove();
        //         piece = newpiece;
        // }
        // else {
        //     console.log("Nu e o mutare buna!");
        // }

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