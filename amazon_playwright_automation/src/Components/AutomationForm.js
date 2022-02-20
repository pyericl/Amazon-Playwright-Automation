import React, { Component } from 'react'
import AutomationUtil from '../Util/AutomationUtil'

export default class AutomationForm extends Component {
    formList = [
        {
            id: 0,
            value: 'first form!'
        }
    ]
    currIndex = 0

    constructor(){
        super()
        this.state = {
            formList: this.formList,
            currIndex: this.currIndex
        }
    }

    addForm = () => {
        this.currIndex++
        this.formList.push({
            id: this.currIndex,
            value: 'new form'
        })

        this.setState({
            formList: this.formList,
            currIndex: this.currIndex
        })
    }
    removeForm = (i) => {
        i.preventDefault()
        console.log(`removing: ${i.target}`)
        console.log(`removing: ${i.target.id}`)

        // this.formList.splice(i.target.id, 1);
        this.formList = this.formList.filter( item => item.id != i.target.id)
        this.setState({
            formList: this.formList
        })
    }
    handleChange = (e) => {
        let id = e.target.id
        let targetItem = this.formList.find( item => item.id == id)
        targetItem['value'] = e.target.value

        this.setState({
            formList: this.formList
        })
    }
    submitSearch = (e) => {
        e.preventDefault()
        console.log(e.target)
        // const formData = new FormData(e.target);
        // const formProps = Object.fromEntries(formData);
        // console.log(`formData: ${formData}`)
        // console.log(`formProps: ${formProps}`)
        // console.log(formData)
        // console.log(formProps)
        // console.log(formProps['2'])

        let submissionList = []
        this.formList.forEach( item => {
            submissionList.push(item.value)
        })
        console.log(`current formList: ${ JSON.stringify(this.formList) }`)
        console.log(`submissionList: [ ${submissionList} ]`)
    }

    testClick2 = () => {
        AutomationUtil.testCall2()
    }
    addTestValues = () => {
        this.formList = [
            {
                id: 0,
                value: 'nvidia 3060'
            },
            {
                id: 1,
                value: 'nvidia 3070'
            },
            {
                id: 2,
                value: 'nvidia 3080'
            }
        ]
        this.currIndex = 2

        this.setState({
            formList: this.formList,
            currIndex: this.currIndex
        })
    }

    render() {
        return (
            <div>
                <div> Hello Automation! </div>
                <button onClick={ this.addForm }> Add a Form </button>
                <form onSubmit={ this.submitSearch }>
                    {
                        this.formList.map( i => {
                            return (
                                <div>
                                    <input type='text'
                                        id={i.id}
                                        name={i.id}
                                        value={i.value}

                                        onChange={ this.handleChange }
                                    />
                                    <button id={i.id} onClick={ this.removeForm }> Remove </button> 
                                    <span> id: {i.id} </span>
                                </div>
                            )
                        }) 
                    }
                    <button type='submit'> Submit</button>
                </form>

                <button onClick={ this.testClick }> click to test </button>
                <button onClick={ this.testClick2 }> testClick2 </button>
                <button onClick={ this.addTestValues }> Add Test Values </button>
            </div>
        )
    }
}