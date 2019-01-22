var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

        _this.createTable = function () {

            var columns = [];
            // Outer loop to create parent
            for (var y = 0; y < 8; y++) {
                var cells = [];
                //Inner loop to create children
                for (var x = 0; x < 8; x++) {
                    if (y % 2 == 0 && x % 2 != 0) {
                        cells.push(React.createElement(
                            'span',
                            { className: 'white', key: x, onClick: function onClick(e) {
                                    return _this.checkTarget(e);
                                } },
                            _this.placePiece(x, y)
                        ));
                    } else if (y % 2 != 0 && x % 2 == 0) {
                        cells.push(React.createElement(
                            'span',
                            { className: 'white', key: x, onClick: function onClick(e) {
                                    return _this.checkTarget(e);
                                } },
                            _this.placePiece(x, y)
                        ));
                    } else {
                        cells.push(React.createElement(
                            'span',
                            { className: 'black', key: x, onClick: function onClick(e) {
                                    return _this.checkTarget(e);
                                } },
                            _this.placePiece(x, y)
                        ));
                    }
                }
                //Create the parent and add the children
                columns.push(React.createElement(
                    'div',
                    { className: 'column', key: y },
                    cells
                ));
            }
            return columns;
        };

        _this.placePiece = function (x, y) {
            if (x == 3 && y == 3) {
                _this.state.piece = React.createElement('b', { className: 'pawn' });
                window.onload = function () {
                    var parentPawn = document.getElementsByClassName("column");
                    var pawn = document.getElementsByClassName("pawn");
                    var columnPiece = parentPawn[y];
                    if (pawn.length > 0) {
                        columnPiece.className += " piece-inside";
                    }
                };
                return _this.state.piece;
            }
        };

        _this.checkTarget = function (e) {
            if (e.target.className == _this.state.selectedPiece) {
                console.log("I am the piece and I am ok");
                return;
            } else if (e.target.className !== _this.state.selectedPiece) {
                // {this.legalMove()}
                console.log("I am the cell without piece");
                return;
            } else if (!_this.state.selectedPiece(e.target)) {
                // {this.legalMove()}
                console.log("i am nothing");
            }
        };

        _this.legalMove = function (el) {};

        _this.state = {
            piece: '',
            selectedPiece: 'pawn',
            pieceFalse: 'column'
        };
        return _this;
    }

    //Function to create table and color it

    //Function to append a piece to specific point in table


    //Function for check e.Target


    _createClass(Table, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'inner-table' },
                this.createTable()
            );
        }
    }]);

    return Table;
}(React.Component);

ReactDOM.render(React.createElement(Table, null), document.getElementById('table'));