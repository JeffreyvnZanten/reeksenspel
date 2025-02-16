type ScoreDisplayProps = {
  setGameState: () => void;
  isSuccess: boolean;
}

export const ScoreDisplay = ({setGameState, isSuccess} :ScoreDisplayProps) => {

  return (
    <div className="text-center flex flex-col gap-6">
      {isSuccess && <h1 className="text-4xl text-white">Goed gedaan!</h1>}
      {!isSuccess && <h1 className="text-4xl text-white">Helaas, probeer het nog eens</h1>}
      <button className="bg-black px-4 py-2 rounded-xl text-white" onClick={setGameState}>Ga terug</button>
    </div>
  )
}
