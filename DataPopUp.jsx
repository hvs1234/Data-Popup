// import React from 'react'

import { useRef, useState } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const DataPopUp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [spellError, setSpellError] = useState("");
  const [pronounceError, setPronounceError] = useState("");
  const [spellTouched, setSpellTouched] = useState(false);
  const [pronounceTouched, setPronounceTouched] = useState(false);
  const spellRef = useRef(null);
  const pronounceRef = useRef(null);

  const handleAddDataClick = () => {
    setShowPopup(true);
  };

  const handleVerifyClick = () => {
    const spellValue = spellRef.current.value.trim();
    const pronounceValue = pronounceRef.current.value.trim();

    var hasError = false;

    if (!spellValue) {
      setSpellError("Please fill out this field");
      hasError = true;
    } else {
      setSpellError("");
    }

    if (!pronounceValue) {
      setPronounceError("Please fill out this field");
      hasError = true;
    } else {
      setPronounceError("");
    }

    if (!hasError) {
      setShowPopup(false);
      // Perform any further actions like form submission here
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSpellChange = () => {
    setSpellTouched(true);
    setSpellError("");
  };

  const handlePronounceChange = () => {
    setPronounceTouched(true);
    setPronounceError("");
  };

  return (
    <>
      <div className="flex justify-end px-[10rem] max-xl:px-[0]">
        <button
          className="bg-[darkblue] font-normal text-[1.6rem] text-[white] px-[1rem] py-[0.5rem] tracking-[0] rounded-md"
          onClick={handleAddDataClick}
        >
          Add Data
        </button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1001]">
          <div className="bg-white px-[3rem] py-[3rem] rounded-lg shadow-lg w-[600px] h-[auto] flex flex-col justify-center relative">
            <button
              className="absolute top-[0] right-[2rem] text-[3rem] text-[black] z-[1002]"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h2 className="text-[2.5rem] font-medium">Pronunciation Editor</h2>
            <div className="line h-[1px] w-[100%] bg-[grey] mt-[1rem] mb-[2rem]"></div>
            <div className="px-[0] py-[2rem]">
              <p className="text-[2rem] font-normal">Add a new word</p>
            </div>
            <div className="flex gap-[1rem] items-center justify-start w-[100%] bg-[white] px-[1rem] py-[1rem] rounded-md border-[1px] border-[#7a7a7a] mb-[2rem]">
              <HiMiniSpeakerWave size={26} className="cursor-pointer" />
              <input
                type="text"
                className="w-full rounded-xl outline-0 text-[2rem] capitalize font-normal"
                placeholder="How it's spelled"
                required
                ref={spellRef}
                onChange={handleSpellChange}
                onBlur={() => setSpellTouched(true)}
              />
            </div>
            {spellTouched && spellError && (
              <p className="text-red-500 text-[1.6rem] mb-[2rem]">{spellError}</p>
            )}
            <div className="flex gap-[1rem] items-center justify-start w-[100%] bg-[white] px-[1rem] py-[1rem] rounded-md border-[1px] border-[#7a7a7a] mb-[2rem]">
              <HiMiniSpeakerWave size={26} className="cursor-pointer" />
              <input
                type="text"
                className="w-full rounded-xl outline-0 text-[2rem] capitalize font-normal"
                placeholder="How it should be pronounced"
                required
                ref={pronounceRef}
                onChange={handlePronounceChange}
                onBlur={() => setPronounceTouched(true)}
              />
            </div>
            {pronounceTouched && pronounceError && (
              <p className="text-red-500 text-[1.6rem] mb-[1rem]">{pronounceError}</p>
            )}
            <div className="flex w-[100%]">
              <button
                type="submit"
                className="bg-[#337cad] text-white text-[2rem] px-4 py-2 rounded-xl w-[100%] mt-[1rem] transition-all duration-[0.2s] hover:bg-[#30739f]"
                onClick={handleVerifyClick}
              >
                Add Word
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DataPopUp;
