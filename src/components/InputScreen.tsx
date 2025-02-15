import { useRef } from "react";

type InputScreenProps<T> = {
    handleOnSubmit: (input: string) => void;
    sequence: T[];
}

export const InputScreen = <T,>({handleOnSubmit}: InputScreenProps<T>) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function isCorrectSequenceType(input: string) {
        const sequenceItems = input.split(" ");
        const isNumberSequence = sequenceItems.every((item) => !isNaN(Number(item)));
        const isStringSequence = sequenceItems.every((item) => isNaN(Number(item)));
        
        return isNumberSequence || isStringSequence
    }

    function handleSubmit() {
        if (inputRef.current) {
            if(isCorrectSequenceType(inputRef.current.value)) { 
                alert("De reeks is correct");
                handleOnSubmit(inputRef.current.value);
            }
            else alert("De reeks is niet correct");
        } else {
            alert("Voer een reeks in");
        }
    }

    return (
        <div>
            <h1>Voer de reeks in met een spatie tussen de items.</h1>
            <input className="border-1" ref={inputRef} />
            <button onClick={handleSubmit} >Submit</button>
        </div>
    );
}
