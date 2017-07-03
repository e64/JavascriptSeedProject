import React from 'react';
import ReactDOM from 'react-dom';
import multipleTable from './multipleTable.es2015';

class DislayTableLayout extends React.Component {
    render() {
        const element = (
            <div>
                <ul className="listeTables">
                    <li onClick={(e) => this.changeTable(0, e)}>0</li>
                    <li onClick={(e) => this.changeTable(1, e)}>1</li>
                    <li onClick={(e) => this.changeTable(2, e)}>2</li>
                    <li onClick={(e) => this.changeTable(3, e)}>3</li>
                    <li onClick={(e) => this.changeTable(4, e)}>4</li>
                    <li onClick={(e) => this.changeTable(5, e)}>5</li>
                    <li onClick={(e) => this.changeTable(6, e)}>6</li>
                    <li onClick={(e) => this.changeTable(7, e)}>7</li>
                    <li onClick={(e) => this.changeTable(8, e)}>8</li>
                    <li onClick={(e) => this.changeTable(9, e)}>9</li>
                    <li onClick={(e) => this.changeTable(10, e)}>10</li>
                </ul>
                <div id="renderDislayTable"></div>
            </div>
        );
        return element
    }

    changeTable(tableNumber, e) {
        e.preventDefault();
        let tableMultiplication = new multipleTable;
        let theTable = tableMultiplication.getTableOf(tableNumber);
        ReactDOM.render(<DisplayTable theTable={theTable}/>, document.getElementById('renderDislayTable'));
    }
}

export function renderDislayTableLayout(number) {
    ReactDOM.render(<DislayTableLayout/>, document.getElementById('tableMultiplication'));
}

class DisplayTable extends React.Component {
    render() {
        const listItems = this.props.theTable.map((arr) =>

            <li key={arr[1].toString()}>
                <span className="number">{arr[0]}</span>
                <span>X</span>
                <span className="number">{arr[1]}</span>
                <span>=</span>
                <span className="number">{arr[2]}</span>
            </li>
        );
        const element = (
            <div>
                <ul className="tableM">
                    {listItems}
                </ul>
            </div>
        );
        return element
    }
}

export function renderDislayTable(number) {
    let multiplicationTable = new multipleTable();
    let theTable = multiplicationTable.getTableOf(number)
    ReactDOM.render(<renderDislayTable theTable={theTable}/>, document.getElementById('tableMultiplication'));
}