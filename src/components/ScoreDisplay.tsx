type ScoreDisplayProps = {
  setGameState: () => void;
}

export const ScoreDisplay = ({setGameState} :ScoreDisplayProps) => {
  return (
    <div className="text-center">
      <button className="bg-red-800 px-4 py-2 rounded-xl text-white" onClick={setGameState}>Ga terug</button>
    </div>
  )
}
