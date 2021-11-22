import React, { useState } from "react";
import Answers from "../Components/Answers";
import Header from "../Components/Header";
import PreviousSearches from "../Components/PreviousSearches";
import QuestionsSearchBar from "../Components/QuestionsSearchBar";
import ResultsPromps from "../Components/ResultsPromps";
import vector5 from "../images/vector5.png";
import vector6 from "../images/vector6.png";
import team from "../images/team.png";
import metrohacks from "../images/metrohacks.png";

import wow_infographics from "../images/wow_infographics.png";
import Footer from "../Components/Footer";
import Positive from "../Components/Postive";
function Result() {
  const [file, setFile] = useState("");
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, exercitationem minima officia dolorem voluptatibus molestiae at veniam, expedita sed, laboriosam odio iure natus blanditiis error inventore iusto totam sint recusandae mollitia voluptate? Consequuntur exercitationem culpa veniam. Placeat quasi rem tenetur nemo tempore iste et veniam magni consequatur quas earum unde consequuntur asperiores soluta necessitatibus facere sint, dolorem amet excepturi dolores maxime, quisquam culpa. Molestias nisi dolores doloribus, reprehenderit neque numquam obcaecati! Nihil totam omnis saepe repellendus iste quaerat error dolorum itaque mollitia! Ipsum alias itaque dicta? Numquam aliquam voluptate odit beatae atque ipsum, minima maxime repellat eos reiciendis ipsa nostrum.";
  const handeChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
  };
  return (
    <div className=" bg-bg-result relative w-full min-h-screen">
      <Header />

      <div className="w-11/12 mx-auto relative z-30">
        {/* UPLOADING FILE */}
        <div className="grid grid-cols-3 gap-2">
          <div className=" rounded-xl bg-red-500 col-span-2 row-span-2 col-start-1 px-4 py-2">
            <div className="w-full flex flex-row justify-between">
              <p className="text-lg">Preview</p>
              <p className="text-custom-pink">View in folders</p>
            </div>
            <div className=" w-full grid grid-cols-4 gap-3">
              <div className="bg-gray-200 col-span-2 row-span-2 col-start-1">
                .
              </div>
              <div className="bg-gray-200 col-span-1 row-span-1 col-start-3">
                .
              </div>
              <div className="bg-gray-200 col-span-1 row-span-1 col-start-4">
                .
              </div>
              <div className="bg-gray-200 col-span-2 row-start-2 col-start-3">
                .
              </div>
            </div>
          </div>
          <div className=" rounded-xl bg-blue-500 col-span-1 row-span-1 col-start-3 px-2 py-1">
            <p className="font-semibold text-lg tracking-wide text-white">
              Upload
            </p>
            <input
              type="file"
              name=""
              id="uploadMP3"
              className="hidden"
              onChange={(e) => handeChange(e)}
            />
            <div
              className="w-full border border-dashed border-white grid place-content-center py-4"
              htmlFor="uploadMP3"
            >
              <div className="flex flex-row justify-center space-x-4 py-4">
                <i class="fas fa-music text-3xl text-white"></i>
                <i class="fas fa-video  text-3xl text-white"></i>
              </div>
              <label
                htmlFor="uploadMP3"
                className="text-white text-lg cursor-pointer"
              >
                <span className="underline">Upload</span> your mp3/mp4
              </label>
            </div>

            <div className="flex flex-row justify-between items-center w-full bg-white px-4 py-1">
              {file.type == "audio/mpeg" && <i class="fas fa-music"></i>}
              {file.type == "video/mp4" && <i class="fas fa-video"></i>}

              <div className="flex flex-col flex-1 pl-3 pr-2">
                <p>{file.name}</p>
                <p className="text-sm text-gray-500">
                  {(file.size / 1024).toFixed(1)} kb
                </p>
              </div>

              <i class="fas fa-check text-blue-700"></i>
            </div>
          </div>
          <div className=" rounded-xl bg-red-500 col-span-1 row-span-1 col-start-3 row-start-2">
            .
          </div>
        </div>

        {/* UPLOADING TEXT */}
        <div className=" flex flex-col w-full py-8 px-10 rounded-3xl bg-gray-800 justify-items-start mt-10">
          <p className="text-2xl text-white">Transcript</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            value={text}
            className="w-full mt-3"
          ></textarea>

          <div className="grid grid-cols-4 mt-16 space-x-8">
            <div className=" col-span-2 flex flex-col flex-2">
              <p className="text-2xl text-white">Summary</p>
              <p className="text-yellow-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio illum id nobis esse magni officiis natus, soluta
                dignissimos possimus exercitationem magnam, odio odit corporis
                pariatur eveniet ducimus assumenda non quia facere obcaecati
                iure maiores. Ipsum animi dolore provident quis exercitationem
                in, sunt alias quas, recusandae harum explicabo obcaecati
                ratione! Facilis repudiandae amet et, omnis eaque laboriosam
                repellendus eos natus commodi.
              </p>
            </div>

            <div className="KEYPOINTS col-span-1 flex-1 flex flex-col justify-center items-center  py-2 bg-blue-300 rounded-3xl">
              <p className="text-xl text-green-300">Key points</p>
              <p className="py-1 border-b border-blue-400 mb-2">
                Passing props - <span>10:34</span>
              </p>
              <p className="py-1 border-b border-blue-400 mb-2">
                Passing props - <span>10:34</span>
              </p>
              <p className="py-1 border-b border-blue-400 mb-2">
                Passing props - <span>10:34</span>
              </p>
            </div>
            <Positive />
          </div>
        </div>

        <div className="flex flex-col space-y-5 mt-16">
          <QuestionsSearchBar placeholder="Got Questions to Ask? (We can get you through the fluff)" />
          <Answers />
          <Answers />
        </div>

        <h1 className="text-3xl text-white font-bold tracking-wider mt-12">
          Previous Searches
        </h1>

        <div className="flex flex-col w-full justify-center items-center space-y-5 py-8">
          <PreviousSearches />
          <p className="text-3xl text-white underline">See more</p>
          <img src={team} alt="" />
        </div>
      </div>

      <img src={vector5} alt="" className="absolute top-80 z-10" />
      <img src={vector6} alt="" className="absolute top-20 right-0 z-10" />
      <img src={metrohacks} alt="" className="absolute bottom-0 z-10" />
      <Footer />
    </div>
  );
}

export default Result;
