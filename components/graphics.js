const {Component} = require('react');
var React = require('react');

class SVGSquare extends Component {

    render() {
        let square = this.props.square;

        return <rect
            width={square.size}
            height={square.size}
            style={square.style}
            x = {square.x}
            y = {square.y}
    />}
}


class SVGSquareMultiple extends Component {
    /*
      squares =
     */
    render () {
        return <g transform='translate(10,10)'>{this.props.squares.map((square,i)=><SVGSquare key={'multiple'+i} square={square} />)}</g>;
    }
}

class SVGSquaresRow extends Component {

    render() {

        let squares = this.props.stylemap.map((style_index, i) => {

            return {

                x: this.props.x,
                y: this.props.y + i*(this.props.size + this.props.distance) - this.props.distance*2,
                style: this.props.styles[style_index],
                size: this.props.size
            }}
        );
        return <SVGSquareMultiple squares={squares}/>
    }
}
export {SVGSquare, SVGSquareMultiple, SVGSquaresRow};