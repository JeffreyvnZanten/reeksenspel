import { Button } from "./Button"

export const CardSearchBar = () => {
  return (
    <nav>
        <div className="bg-blue-900 py-3 items-center flex gap-2 justify-center">
            <input 
                className="bg-white"
                type="text" 
                placeholder="Card name" 
            />
            <Button
                name="search"
                className="bg-red-900 py-1 px-4 text-white rounded-xl border border-white-900"
                onClick={() => {}}
            />
        </div>
    </nav>
  )
}
