import React from 'react'
import { useContext } from 'react'
import MarkContext from '../context/MarkContext'
import ButtonsContext from '../context/ButtonsContext'
import { filter } from 'bluebird'


const Buttons = (props) => {

    const{mark,setMark} = useContext(MarkContext);
    const{buttons,setButtons} = useContext(ButtonsContext);

    const addMark = (i)=>{
        if(mark.length != 5)
        {
            const markCheck = mark.find((mark)=>{return mark.amount===i.amount });

            if(!markCheck)
            {
                setMark([...mark,i]);
            }
            
        }
        
    }

    //Checks to see if button was pressed, if button was pressed it deletes the mark if button is pressed again.
    
    const deleteMark = (amt)=>
    {
        const allButtons = [...buttons];
        const getButton = allButtons.find(btn => btn.value === amt);
        
    

      
    
       if(getButton.enabled === false)
        {
            const markVal = [...mark];
           
               
                const filtered = markVal.filter((mark) =>{ return mark.amount !== amt});
                console.log(filtered)
                setMark(filtered);
                setButtons(allButtons);

                getButton.enabled = true;
            
                getButton.color = "";
                setButtons(allButtons);
          
        }
        else{
            buttonChoosen(amt);
        }
     
      
    }

  const buttonChoosen = (id)=>
  {
    const button = [...buttons];

    const currentButton = button.find(btn=>btn.id === id);

    currentButton.color = 'chosenBtn';

    setButtons(button);
  }


    //function sets button state to false
    const disablebutton = (amt) =>{
       const pressedbutton = [...buttons];
       const getButton =  pressedbutton.find((button)=>{return button.id === amt})
       
       getButton.enabled = false;

       

       setButtons(pressedbutton);

       
        return true;
   
    } 

    //Function disables the button
    const disable= (amt)=>
    {
        const btn = buttons.find((button)=>{return button.id === amt})
        if(btn.enabled === false)
        {
            return true
        }

    }
  


    return (
        
            <button className={props.borderColor} value={props.num} onClick={(event)=>
                {
                    deleteMark(props.num);

                    const newMark={
                        id:(Math.floor(Math.random()*1000)+1),
                        amount:parseInt(event.target.value)
                    }

                    
                    
                    addMark(newMark);

                    disablebutton(props.num);

                  // buttonChoosen(props.num);
                   

                    
                    
                }
            }>{props.num}</button>
        
    )
}
Buttons.defaultProps={
    num:0
}
export default Buttons
