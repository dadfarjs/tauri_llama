import clsx from "clsx";
import { QUESTIONS } from "../data";
import { Description, Field, Label, Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Sidebar = () => {
  return (
    <div className="bg-black flex flex-col items-start p-4 h-screen">
      <div className="w-full max-w-md py-4">
        <Field>
          <Label className="text-sm/6 font-medium text-white">Select AI</Label>
          <Description className="text-sm/6 text-white/50">
            Select a AI for chat
          </Description>
          <div className="relative">
            <Select
              className={clsx(
                "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                // Make the text of each option black on Windows
                "*:text-black"
              )}
            >
              <option value="llama3.2">Llama:3.2</option>
              <option value="dorna">Dorna</option>
            </Select>
            <ChevronDownIcon
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
              aria-hidden="true"
            />
          </div>
        </Field>
      </div>

      {/* top bar */}
      <div
        onClick={() => window.location.reload()}
        className="flex items-center w-full p-1 rounded-lg hover:bg-[#202123]"
      >
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-[#ececf1] rounded-full p-1 h-8 w-8">
            <img src="/images/asset 12.svg" alt="logo" />
          </div>
          <h2 className="text-[#ececf1] font-semibold">New Chat</h2>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full w-full">
        {/* recent chats */}
        <div>
          <p className="text-[#666666] text-sm mt-12">Today</p>
          <div className="text-[#ececf1] text-sm space-y-4 mt-4 w-full">
            {QUESTIONS.map((q: string, index: number) => (
              <div
                key={index}
                className="p-1 w-full rounded-lg cursor-pointer hover:bg-[#202123]"
              >
                {q}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          {/* upgrade */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-[#ececf1] rounded-full p-1 h-8 w-8">
              <img src="/images/asset 7.svg" alt="img" />
            </div>

            <div className="text-[#ececf1]">
              <p className="font-bold text-sm">Upgade</p>
              <p className="text-sm">Get GPT-4, DALL-E and more</p>
            </div>
          </div>

          {/* account */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/images/asset 0.png"
              alt="account"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-[#ececf1]">FullStack Snehasish</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
