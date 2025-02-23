import { useRef } from "react";

type InputScreenProps<T> = {
    handleOnSubmit: () => void;
    handleReset: () => void;
    sequence: T[];
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NumberInputScreen = <T,>({handleOnSubmit, handleReset, setIsSuccess, sequence}: InputScreenProps<T>) => {
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

    console.log("NumberInputScreen");
    return (
        <div className="flex gap-4 flex-col justify-center py-6 items-center">
            <div className="w-84 h-40 p-8 bg-blue-900 rounded-lg">
                <h1 className="text-white text-2xl">Voer de reeks in met een komma tussen de items.</h1>
            </div>
            <div className="absolute bottom-0 sm:static flex p-3 gap-2 flex-row">
                <input className="border-1 w-60 bg-slate-200" ref={inputRef} />
                <button className="bg-black px-6 py-2 text-white text-xl rounded-md" onClick={handleSubmit}>Enter</button>
                <button className="bg-black px-6 py-2 text-white text-xl rounded-md" onClick={handleReset}>Repeat</button>
            </div>
        </div>
    );
}
