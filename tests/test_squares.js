const {Component} = require('react');

var ReactDOM = require('react-dom');
var React = require('react');

const {SVGSquare, SVGSquareMultiple, SVGSquaresRow} =require("babel!../components/graphics.js");

var DEFAULT_SQUARE = {
    x: 0,
    y: 0,
    style: {
        fill: 'blue',
        strokeWidth: 2,
        stroke: 'black',
        opacity: 0.5
    },
    size: 20
};


class SquareTest1 extends Component {

    render () {return <div>
        <svg>
            <SVGSquare square = {DEFAULT_SQUARE}
            />
        </svg>
    </div>
    }
}

class SquareTest2 extends Component {

    render() {

        let x_offset_red_square = JSON.parse(JSON.stringify(DEFAULT_SQUARE));
        x_offset_red_square.x = 30;
        x_offset_red_square.style.fill='red';

        let y_offset_green_square = JSON.parse(JSON.stringify(DEFAULT_SQUARE));

        y_offset_green_square.y = 30;
        y_offset_green_square.style.fill = 'green';

        return <div>
            <svg>
                <SVGSquareMultiple
                    squares={[DEFAULT_SQUARE, x_offset_red_square, y_offset_green_square]}
                />
            </svg>
        </div>
    }
}

class SquareTest3 extends Component {

    render () {

        let styles = [
            {
                fill: 'red',
                strokeWidth: 2,
                stroke: 'black',
                opacity: 0.5
            },
            {
                fill: 'green',
                strokeWidth: 2,
                stroke: 'black',
                opacity: 0.5
            },
            {
                fill: 'blue',
                strokeWidth: 2,
                stroke: 'black',
                opacity: 0.5
            }

        ];

        return <div>
            <svg>
                <SVGSquaresRow styles={styles} stylemap={[0,0,0,1,1,2]} size={20} x={10} y={10} distance={3}/>
            </svg>
        </div>
    }
}

class TestSquares extends Component {

    render() {
     return <div>
            <div>Single Square</div>
            <div><SquareTest1/></div>
            <div>Multiple Square</div>
            <div><SquareTest2/></div>
            <div>Squares in a Row</div>
            <div><SquareTest3/></div>

        </div>

    }


}

export {TestSquares}