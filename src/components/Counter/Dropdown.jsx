import React, { Component } from "react";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__toggle" onClick={this.show}>
          Показать
        </button>
        <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Скрыть
        </button>
        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
