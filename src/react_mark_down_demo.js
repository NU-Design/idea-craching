import { Component } from 'react';
import ReactMarkdown from 'react-markdown'


class ReactMarkDownDemo extends Component {
    state = {}
    render() {
        const markdown = `### A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`
        return (
            <div className="App">
                <ReactMarkdown children={markdown} />
            </div>
        );
    }
}

export default ReactMarkDownDemo;