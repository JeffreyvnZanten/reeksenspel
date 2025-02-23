import { useState } from "react";
import { CardSearchBar } from "./CardSearchBar";
import { Button } from "./Button";
import { CardList } from "./CardList";
import { SelectedCardSequence } from "./SelectedCardSequence";

export const CardSelectionScreen = () => {

  return (
    <div>
        <SelectedCardSequence />
        <CardSearchBar />
        <Button 
          name="test" 
          icon="icons/cardFilterIcon.png" 
          onClick={() => {}} 
        />
        <CardList />
    </div>
  )
}
