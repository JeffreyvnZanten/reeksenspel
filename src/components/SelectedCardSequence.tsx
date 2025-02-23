import { Card } from "./Card";

export const SelectedCardSequence = () => {
    return (
        <header className="flex justify-evenly py-4 sm:py-8">
            <Card url="./images/clubs/2.png" />
            <Card url="./images/hearts/3.png" />
            <Card url="./images/diamonds/10.png" />
        </header>
    )
}
