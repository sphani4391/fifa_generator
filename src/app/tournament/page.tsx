"use client";
const Page = () => {
  return (
    <div className="flex flex-wrap justify-center items-start min-h-screen">
      <h1 className="w-full text-center p-4 m-2 font-semibold rounded-lg shadow-xl text-7xl bg-blue-300 h-fit">
        FIFA Tournament Generator
      </h1>
      <div className="flex flex-col items-center justify-between bg-yellow-200 text-black min-h-40 p-2">
        <div className="bg-blue-300 min-w-80 flex justify-between h-fit">
          <label
            htmlFor="tournamentName"
            className="block text-sm font-medium text-gray-700"
          >
            Tournament Name:
          </label>
          <input type="text" name="tournamentName" />
        </div>
        <div className="bg-blue-300 max-w-md flex justify-between min-w-80 h-fit">
          <label
            htmlFor="numberSelect"
            className="block text-sm font-medium text-gray-700"
          >
            Number of players: &nbsp;&nbsp;&nbsp;
          </label>
          <select
            id="numberSelect"
            name="number"
            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="0">--</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Page;
