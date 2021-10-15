import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Component } from "react";
import Nav from './Nav.js'
//Title
//Nav?
//Background Img
export default class Header extends Component {
    constructor() {
        super()
        this.source = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAA51JREFUeF7tnTGW1DAMhrM1HT1nyOMcXImSK3EOXs5AT0cNbzdexpmJZiRbipXh23Ztx/k/67dlZ5KXaZr+TIF/8zzvtr4sy0vgZc1Nz/O8q8OyLOa2LBVeRQDANE0AsAybgLI5AHz91H5rP35f6n7/tdtONjsyi/7l474+nz/YdPv281/5rQUB4E0Y0fcBYBtoj0o/bwTUd66wo1ErohqAedTX95jOggBwP/jC5wAAJAIgwKhXROksSJpsJVlTWxAAbrEdakEAOAhAfZk6KXsmAFarkSwrJAIA8CjtuPwfAKsWYh7glfGeJQLqfkaviFTZLwD00WwtCYCi2Kid0f8bQIIVkdn3e/Z80s0BAFgVGLYKAsBBABLnBGYL8kq+ak3CIwAA9xdnAFj12RzCRK/9iYDB2S8AALD1xeqs+MjDGSbhdwwKAFLWat1+qPeXAACAAxIxp2UoEWCN9b3yHadjqud2hD5K8woW1GhB1sfEAfAuNBFwG6MpMmHdxtyllPVZHXmVZWvzafeCAPCmgN/j6dKELVkQAE4MQLIF4UciVxMyFnQTLFa/BoAhQYiwIAAYAPRlxft2EQ0gYuUzbDsaAIPzAAAAwLwKwoLWQSOe2TIHMAk3KrBWO3QviDmAOYA5oH1rmjygy+uuK9vPBgAAAFcFmISHPY54lq2IzXizPq+psLiu9r2CIfMytEsgADwYItECRbdPBBQFNFsRtVjCO4smq8UBAAB9YyDaIqLb77v7S+3Uk7CXLWhgeF3LCgYARTEAFCHqSdJLFCJgJy41T0jU1bxOpkZdV7KmdBYkdRQA1tmlMREDQFGg59XFGlYaK/Aa9VJ/MvQhtQUBQDOUG8tkGH0Z+pAuAjSjvuq0Cr/GTiUYmv6oOiEUAkARBgAPNtfqAUQE9MRcY91KdOkdc1LLm6NHjR01drGp2jALsvYWAFbFnMsDwFlQa3MCAOnlruKv4LEgq/KlPAAahfOqBgAvJRvbAUCjcF7VAOClZGM7AGgUrqeaYumpWQXVXUiXlKVOxADQM3wd6gLAQcSeJoy+L10qdVJ2RguyftoEAK1RQAS0KtdRr8P3NRaUbkWUzoIAUMbIqF1DABwEQDhWjP6ikurLSbVPRQ/EYRYEgBUzAFYdxLfxnj4CjCP9apXy+irNsD/NC8HDwYRHAADuDyAA3NdnXASEBf7a8JGfKrHeSs+r8q3XqstvX13c05KiLgBuRQJA0WRUBPwFaxTdPXuOx2gAAAAASUVORK5CYIIA'
        this.restaurantName = "Wasabi's Diner"
        this.opHour = '9am-9pm Monday-Friday'
        this.address = "280 Jane Trail, Danville, KY 40422"
    }
    render() {
        // renders the restaurant name
        return (
            <>
                <div className={"container-fluid " + "bg-danger " + 'text-center '} >

                    <div className='row' height='97.33'>

                        <div className={'col ' + 'my-auto'} >
                            <img src={this.source} alt='Logo' max-height='130.33' />
                        </div>

                        <div className='col'>
                            <h1 className='text-center'>{this.restaurantName}</h1>
                            <h3 className='text-center'>{this.address}</h3>
                            <h6 className='text-center'>{this.opHour}</h6>
                        </div>

                    </div>
                    
                </div>
                <Nav />
            </>
        );
    }

}





