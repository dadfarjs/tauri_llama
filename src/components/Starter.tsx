

const Starter = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-[200px] md:h-[350px] ">
       <div className="bg-[#ececf1] h-10 w-10 p-2 rounded-full">
          <img src="/tauri.svg" alt="logo"/>
       </div>
       <h1 className="text-white font-bold text-2xl">How can I help you today?</h1>
    </div>
  )
}

export default Starter