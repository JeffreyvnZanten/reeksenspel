import { useRef } from "react";

type InputScreenProps = {
    handleOnSubmit: (input: string) => void;
}

export const InputScreen = ({handleOnSubmit}: InputScreenProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function isCorrectSequenceType(sequence: string) {
        const sequenceItems = sequence.split(" ");
        const isNumberSequence = sequenceItems.every((item) => !isNaN(Number(item)));
        const isStringSequence = sequenceItems.every((item) => isNaN(Number(item)));
        
        return isNumberSequence || isStringSequence
    }

    function handleSubmit() {
        if (inputRef.current) {
            if(isCorrectSequenceType(inputRef.current.value)) handleOnSubmit(inputRef.current.value);
        }
    }

    return (
        <div>
            <h1>Voer de reeks in met een spatie tussen de items.</h1>
            <input ref={inputRef} />
            <button onClick={handleSubmit} >Submit</button>
        </div>
    );
}
