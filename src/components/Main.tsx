import { useEffect, useRef, useState } from 'react';
import './main.css';
import Starter from './Starter';
import { SUGGESTIONS } from '../data';
import InputMessage from './chat/InputMessage';
// import { generateMessage } from "../utils/openai";

const Main = () => {
  const ref: any = useRef();
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => ref.current.scrollIntoView({ behavior: 'smooth' }), 1000);
  }, [messages]);

  return (
    <div className="flex flex-col justify-between h-screen">
      <h1 className="font-bold text-xl text-white p-4">ChatGPT 3.5 Clone</h1>
      <div>
        {/* <Starter/> */}
        {/* messages */}
        {messages.length === 0 ? (
          <div className="flex flex-col gap-12">
            <Starter />
            <InputMessage />
          </div>
        ) : (
          <div className="overflow-y-scroll h-full w-full md:w-[70%] mx-auto md:p-0 p-4 flex flex-col">
            {/* message */}
            {messages.map((m: any, index) => (
              <div key={index} className="flex items-start space-x-4 my-6 p-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src={m.isUser ? '/images/asset 0.png' : '/images/logo.png'}
                  alt="user"
                />
                <div className="flex flex-col items-start">
                  <p className="text-[#ececf1] font-bold">{m.isUser ? 'You' : 'ChatGPT'}</p>
                  <p className="text-[#ececf1]">{m.text}</p>
                </div>
              </div>
            ))}
            <div ref={ref} />
          </div>
        )}
      </div>

      <div>
        {/* suggestions */}
        {messages.length === 0 && (
          <>
            <div className="my-8 md:p-0 p-4 mx-auto max-w-[32rem] grid gap-2 grid-cols-2">
              {SUGGESTIONS.map((s: any, index: number) => (
                <div
                  onClick={() => setPrompt(s.title + ' ' + s.desc)}
                  key={index}
                  className="flex flex-col items-start p-2 rounded-lg border border-gray-600 cursor-pointer"
                >
                  <p className="text-sm text-[#c5c5d2]">{s.title}</p>
                  <p className="text-sm font-bold text-[#585757]">{s.desc}</p>
                </div>
              ))}
            </div>
            {loading && (
              <p className="text-white text-sm animate-pulse text-center">Loading responses...</p>
            )}
            {/* input */}
            <InputMessage />
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
