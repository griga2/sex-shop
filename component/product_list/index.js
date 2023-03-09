const template = document.createElement("template");

template.innerHTML = `
    <div class = "item_list">
      <div>
        <a>Title</a>
      </div>
    </div>
`;

class ItemList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode:"open"});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    // connectedCallback() {
    //   // браузер вызывает этот метод при добавлении элемента в документ
    //   // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    // }
  
    // disconnectedCallback() {
    //   // браузер вызывает этот метод при удалении элемента из документа
    //   // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    // }
  
    // static get observedAttributes() {
    //   return [/* массив имён атрибутов для отслеживания их изменений */];
    // }
  
    attributeChangedCallback(name, oldValue, newValue) {
      // вызывается при изменении одного из перечисленных выше атрибутов    
    }
  
    // adoptedCallback() {
    //   // вызывается, когда элемент перемещается в новый документ
    //   // (происходит в document.adoptNode, используется очень редко)
    // }
  
    // у элемента могут быть ещё другие методы и свойства
  }

  export default ItemList;
