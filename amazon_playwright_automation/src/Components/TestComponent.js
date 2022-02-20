import React, {Component} from 'react'

export default class TestComponent extends Component {
    testList = [
        {
            id: 0,
            value: 'zero'
        },  
        {
            id: 1,
            value: 'one'
        },  
        {
            id: 2,
            value: 'two'
        },  
        {
            id: 3,
            value: 'three'
        },  
    ]
    constructor(){
        super()
        this.state = {
            testList: this.testList
        }
    }

    remove = (e) => {
        console.log(`target.id: ${e.target.id}`)
        this.testList = this.testList.filter(item => item.id != e.target.id)
        console.log(this.testList)
        this.setState({
            testList: this.testList
        })
    }
    render(){
        return (
            <div>
                <div> TestComponent </div>
                <div>
                    {
                        this.testList.map( i => {
                            return (
                                <div>
                                    <span> {i.id} : </span>
                                    <span> {i.value} </span>
                                    <button id={i.id} onClick={ this.remove }> Remove </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}