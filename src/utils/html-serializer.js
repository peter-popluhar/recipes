import PrismicDOM from "prismic-dom";

const Elements = PrismicDOM.RichText.Elements;

export const htmlSerializer = function (type, element, content, children) {
      switch(type) {
      case Elements.listItem:
        return `<li class="r-t-li">
            <label>
                <input type="checkbox"/>
                <svg
                  height="21"
                  viewBox="0 0 21 21"
                  width="21"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m.5 5.5 3 3 8.028-8"
                    fill="none"
                    stroke="#2a2e3b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    transform="translate(5 6)" />
                </svg>
                <span>${children.join('')}</span>
            </label>
        </li>`;
          case Elements.oListItem:
              return `<li class="r-t-li">
            <label>
                <input type="checkbox"/>
                <span>${children.join('')}</span>
            </label>
        </li>`;
      case Elements.heading3:
        return `<h3 class="r-t-h3">${children.join('')}</h3>`;
      case Elements.list:
        return `<ul class="r-t-ul">${children.join('')}</ul>`;
      case Elements.oList:
          return `<ul class="r-t-ol">${children.join('')}</ul>`;
      default:
        return null;
    }
  };
