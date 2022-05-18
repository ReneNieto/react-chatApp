import { useState } from 'react';
import Picker from 'emoji-picker-react';


export default function EmojiPicker({chosenEmoji, setChosenEmoji}) {

    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
    };
  
    return (
      <div className='bottom-20 absolute z-10 ' >
        {chosenEmoji ? (
          <span>You chose: {chosenEmoji.emoji}</span>
        ) : (
          <span>No emoji Chosen</span>
        )}
        <Picker onEmojiClick={onEmojiClick} />
      </div>
    );
}