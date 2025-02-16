import { useRef } from "react";

type InputScreenProps<T> = {
    handleOnSubmit: () => void;
    handleReset: () => void;
    sequence: T[];
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputScreen = <T,>({handleOnSubmit, handleReset, setIsSuccess, sequence}: InputScreenProps<T>) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit() {
        // If input is not empty
        if (inputRef.current) {
            const input = inputRef.current.value;
            const sequenceString = sequence.toString();

            if(input === sequenceString) {
                // alert("Correct!");
                setIsSuccess(true);
            }
            else if(input !== sequenceString) {
                setIsSuccess(false);
                // alert("Incorrect!");
            }
            handleOnSubmit();
        } 
        // If input is empty
        else {
            alert("Voer een reeks in");
        }
    }

    return (
        <div className="flex gap-4 flex-col">
            <h1 className="text-white text-xl">Voer de reeks in met een komma tussen de items.</h1>
            <div className="flex gap-2 flex-row">
                <input className="border-1 w-28 bg-slate-200" ref={inputRef} />
                <button className="bg-black px-4 py-1 h-8 text-white rounded-l" onClick={handleSubmit}>Voer in</button>
                <button className="bg-black px-4 py-1 text-white rounded-l" onClick={handleReset}>Herhaal</button>
            </div>
        </div>
    );
}
