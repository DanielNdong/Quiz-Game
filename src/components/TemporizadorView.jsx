function TemporizadorView({ timer }) {
  return (
    <div className="w-60 text-red-800 text-xl text-center font-bold bg-zinc-50 p-5 rounded-lg shadow-md shadow-red-800">
      {timer}
    </div>
  );
}

export default TemporizadorView;
