import React, { useState } from 'react';

const InputMessage = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const text = prompt;
      setPrompt('');
      // const res=await generateMessage(prompt)
      // setMessages([
      //   ...messages,
      //   {text:text,isUser:true},
      //   {text:res,isUser:false}
      // ])
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col p-4 md:p-0 mx-auto">
      <div className="w-[32rem] h-[55px] border border-gray-600 flex items-center rounded-lg p-2">
        <input
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          className="text-white h-full w-full p-2 outline-none bg-inherit"
          type="text"
          placeholder="Message ChatGPT clone"
        />
        <button onClick={handleClick} className="bg-gray-600 h-full p-2 rounded-lg">
          <img src="/images/asset 10.svg" alt="btn-img" />
        </button>
      </div>
      <p className="text-xs text-white p-2 text-center">
        ChatGPT clone can make mistakes. Consider checking important information.
      </p>
    </div>
  );
};

export default InputMessage;
