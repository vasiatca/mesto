export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item, prepend = false) {
    const card = this._renderer(item);
    const element = card.getCard();

    if (prepend) {
      this._container.prepend(element);
    } else {
      this._container.append(element);
    }
  }

  renderItems() {
    this._items.forEach(item => {
      this.addItem(item);
    });
  }
}