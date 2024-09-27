//~ 2- our own custom render method

function customRender(reactElement, container){

    //~ First approach
    /** //! not a good code because of attributes -> if there are more we have to inject them seperately
    const domElement  = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    //~ Second approach
    const domElement  = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue       //^ if there are more objects inside props then ignore them

        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)

    

}

//~ 1- Created our own react element

const reactElement  = {             //^ React under the hood
    type: 'a',      //div, p, h1
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)