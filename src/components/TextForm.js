import React, {useState} from "react";

export default function TextForm(props) {
    //to covert text in uppercase
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked! "  + text);
        let newText = text.toUpperCase();
        setText(newText)                                        //correct way to change the state
        props.showAlert("Text converted to Uppercase!", "success");
    }

    //to covert text in lowercase
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)    
        props.showAlert("Text converted to Lowercase!", "success");                                    
    }

    //to clear all text 
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)     
        props.showAlert("Textarea Cleared!", "success");                                   
    }

    //to hear text
    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    //to reverse the text
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Reversed Text!", "success");
    };
    
    //copy text
    const handleCopyClick =()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");
      };

      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed Extra Spaces!", "success");
    };

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');   
        
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-warning mx-1" onClick={speak}>Speak</button>
            <button className="btn btn-warning mx-1" onClick={handleReverse}>Reverse Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text Summary :</h2>
            <p>
                <b>{text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</b>
            </p>
            <h3>Time required to read your text :</h3>
            <p> <b>{0.008 * text.split(' ').filter((element)=>{return element!==0}).length} Minutes</b></p>
            {/* <h3>Preview of text:</h3> */}
            <p><b>Preview of text :</b>{text.length>0?text:" Enter something to preview it here!"}</p>
        </div>
        </>
    );
}
