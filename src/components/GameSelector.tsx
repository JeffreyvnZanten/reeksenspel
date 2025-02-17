// import { useState } from "react";
// import { ClickableIcon } from "./ClickableIcon";

// export const GameSelector = () => {
//     const [gameName, setGameName] = useState<"getallenreeks" | null>(null);

//     return (
//         <div className="items-center flex gap-2 flex-col">
//             <div>
//                 <ul>
//                     <li>{gameName}</li>
//                 </ul>
//             </div>
//             <div className="flex gap-8 flex-row justify-center">
//                 <ClickableIcon
//                     name="getallenreeks"
//                     onClick={() => setGameName("getallenreeks")}
//                     isSelected={gameName === "getallenreeks"}
//                 />
//                 <ClickableIcon
//                     name="playing-cards"
//                     onClick={() => setGameName("playing-cards")}
//                     isSelected={gameName === "playing-cards"}
//                 />
//             </div>
//         </div>
//     )
// }
