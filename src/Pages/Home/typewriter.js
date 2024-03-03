import Fade from '@mui/material/Fade';
import Typewriter from "typewriter-effect";

const TypewriterComponent = ({fields, highlightColor='init'}) => {
    return (
        <div style={{color: highlightColor}}>
                <Typewriter
                    options={{
                    loop: true,
                    deleteSpeed: 10,
                    delay: 30,
                    }}
                    onInit={(typewriter) => {
                        const words = fields;
                        typewriter.typeString("I live in a world of ");
                        
                        for (let index = 0; index < words.length; index++) {
                            typewriter.typeString(words[index]).pauseFor(1200).deleteChars(words[index].length);
                        }
                        typewriter.start();
                    }}
                />
        </div>
    )
}

export default TypewriterComponent;
