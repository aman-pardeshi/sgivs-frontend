const colorsArray = [
  'blue-300',
  'blue-400',
  'blue-500',
  'blue-600',
  'blue-700',
  'blue-800',
  'blue-900',
  'green-300',
  'green-400',
  'green-500',
  'green-600',
  'green-700',
  'green-800',
  'green-900',
  'yellow-300',
  'yellow-400',
  'yellow-500',
  'yellow-600',
  'yellow-700',
  'yellow-800',
  'yellow-900',
  'cyan-300',
  'cyan-400',
  'cyan-500',
  'cyan-600',
  'cyan-700',
  'cyan-800',
  'cyan-900',
  'pink-300',
  'pink-400',
  'pink-500',
  'pink-600',
  'pink-700',
  'pink-800',
  'pink-900',
  'indigo-200',
  'indigo-300',
  'indigo-400',
  'indigo-500',
  'indigo-600',
  'indigo-700',
  'indigo-800',
  'indigo-900',
  'red-300',
  'red-400',
  'red-500',
  'red-600',
  'red-700',
  'red-800',
  'red-900',
  'teal-400',
  'teal-500',
  'teal-600',
  'teal-700',
  'teal-800',
  'teal-900',
  'orange-300',
  'orange-400',
  'orange-500',
  'orange-600',
  'orange-700',
  'orange-800',
  'orange-900',
  'bluegray-300',
  'bluegray-400',
  'bluegray-500',
  'bluegray-600',
  'bluegray-700',
  'bluegray-800',
  'bluegray-900',
  'purple-300',
  'purple-400',
  'purple-500',
  'purple-600',
  'purple-700',
  'purple-800',
  'purple-900',
  'primary-400',
  'primary-500',
  'primary-600',
  'primary-700',
  'primary-800',
  'primary-900',
];

export function convertToHtml(content: any) {
  if (!content || !Array.isArray(content)) {
    return '';
  }

  return content
    .map((block) => {
      switch (block.type) {
        case 'paragraph':
          return `<p>${convertChildrenToHtml(block.children)}</p>`;
        // Handle other types as needed
        case 'image':
          return `<img src="${block.image.url}" alt="${block.image.alternativeText}" class="content-image"/>`;

        case 'list':
          return block.format === 'unordered'
            ? `<ul>${convertChildrenToHtml(block.children)}</ul>`
            : `<ol>${convertChildrenToHtml(block.children)}</ol>`;

        case 'heading':
          if (block.level === 1) {
            return `<h1>${convertChildrenToHtml(block.children)}</h1>`;
          } else if (block.level === 2) {
            return `<h2>${convertChildrenToHtml(block.children)}</h2>`;
          } else if (block.level === 3) {
            return `<h3>${convertChildrenToHtml(block.children)}</h3>`;
          } else if (block.level === 4) {
            return `<h4>${convertChildrenToHtml(block.children)}</h4>`;
          } else if (block.level === 5) {
            return `<h5>${convertChildrenToHtml(block.children)}</h5>`;
          } else {
            return `<h6>${convertChildrenToHtml(block.children)}</h6>`;
          }
          return;

        case 'code':
          return `<pre><code>${convertChildrenToHtml(
            block.children
          )}</code></pre>`;

        case 'quote':
          return `<blockquote>${convertChildrenToHtml(
            block.children
          )}</blockquote>`;

        default:
          return '';
      }
    })
    .join('');
}

function convertChildrenToHtml(children: any): string {
  if (!children || !Array.isArray(children)) {
    return '';
  }

  return children
    .map((child) => {
      switch (child.type) {
        case 'text':
          let codeString = child.text.replace('\n', `<br />`);
          if (child.bold) {
            codeString = `<b>${codeString}</b>`;
          }

          if (child.italic) {
            codeString = `<em>${codeString}</em>`;
          }

          if (child.underline) {
            codeString = `<u>${codeString}</u>`;
          }

          if (child.strikethrough) {
            codeString = `<del>${codeString}</del>`;
          }

          if (child.code) {
            codeString = `<code>${codeString}</code>`;
          }
          return codeString;
        // Handle other child types as needed

        case 'link':
          return `<a href="${child.url}">${child.children[0].text}</a>`;

        case 'list-item':
          return `<li>${convertChildrenToHtml(child.children)}</li>`;

        default:
          return '';
      }
    })
    .join('');
}

export function selectRandomColor() {
  let random = Math.random() * 120;
  random = Math.floor(random);
  return colorsArray[random];
}
