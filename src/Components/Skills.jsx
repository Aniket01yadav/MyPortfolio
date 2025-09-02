import React from 'react';
import HTML from '../assets/HTML.svg'
import CSS from '../assets/CSS.svg'
import JAVASCRIPT from '../assets/JAVASCRIPT.png'
import REACT from '../assets/REACT.svg'
import NODE from '../assets/NODE.svg'
import EXPRESS from '../assets/EXPRESS.svg'
import MONGODB from '../assets/MONGODB.svg'
import MSSQL from '../assets/MSSQL.svg'
import C from '../assets/C.png'
import CPP from '../assets/CPP.png'
import GIT from '../assets/GIT.svg'
import VS_CODE from '../assets/VS_CODE.svg'
import GITHUB from '../assets/GITHUB.svg'
import POSTMAN from '../assets/POSTMAN.png'
import MUTHHI from '../assets/MUTHHI.jpg'


const Skills = () => {
    return(
        <>  
<section id='skills' className="py-16 relative">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center text-cyan-300 mb-10">My Skills</h2>
    <h4 className='text-xl font-bold text-center text-cyan-300 mb-10'>Tools & Technologies</h4>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      
      {/* <!-- HTML --> */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
        {/* <!-- HTML SVG --> */}
        <img
                    src= {HTML}
                    alt="HTML_logo"
                    className="w-15 h-15 mb-3"
        />
        <span className="text-white font-semibold">HTML</span>
      </div>


      {/* <!-- CSS --> */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500">
        {/* CSS svg */}
        <img
                    src= {CSS}
                    alt="CSS_logo"
                    className="w-15 h-15 mb-3"
        />
        
        <span className="text-white font-semibold">CSS</span>
      </div>



      {/* <!-- JavaScript --> */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400">
        {/* Javascript svg */}
        <img
                    src= {JAVASCRIPT}
                    alt="Javascript_logo"
                    className="w-15 h-15 mb-3"
        />
        <span className="text-white font-semibold">JavaScript</span>
      </div>



      {/* <!-- Tailwind CSS --> */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-400">
        {/* Tailwind svg */}
        <svg viewBox="0 0 48 48" className="w-15 h-15 mb-3">
          <path fill="#38B2AC" d="M24 9c-6 0-10 3-12 9 2-3 4-4 7-3 1 1 2 2 3 3 4 4 9 4 13 0 2-2 3-5 3-8-2-3-5-4-8-4zm-12 9c-6 0-10 3-12 9 2-3 4-4 7-3 1 1 2 2 3 3 4 4 9 4 13 0 2-2 3-5 3-8-2-3-5-4-8-4z"></path>
        </svg>
        <span className="text-white font-semibold">Tailwind</span>
      </div>



      {/* React */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-300">
        {/* React svg */}
        <img
                    src= {REACT}
                    alt="React_logo"
                    className="w-13 h-13 mb-3"
        />
        <span className="text-white font-semibold">React</span>
      </div>



      {/* Node */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-300">
        <img
                    src= {NODE}
                    alt="Node_logo"
                    className="w-15 h-15 mb-3"
        />
        <span className="text-white font-semibold">Node.JS</span>
      </div>



      {/* Express */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-gray-600">
          <img
                    src= {EXPRESS}
                    alt="Express_logo"
                    className="w-15 h-15 mb-3"
        />
        <span className="text-white font-semibold">Express</span>
      </div>



      {/* MongoDB */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-500">
        <img
                    src= {MONGODB}
                    alt="MongoDB_logo"
                    className="w-15 h-15 mb-3"
        />
        <span className="text-white font-semibold">MongoDB</span>
      </div>



      {/* MSSQL */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-800">
        <img
                    src= {MSSQL}
                    alt="MSSQL_logo"
                    className="w-15 h-15 mb-3"
        />
        <span className="text-white font-semibold">MSSQL</span>
      </div>



      {/* C */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-400">
        <img
                    src= {C}
                    alt="C_logo"
                    className="w-13 h-13 mb-3"
        />
        <span className="text-white font-semibold">C</span>
      </div>



      {/* CPP */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-400">
        <img
                    src= {CPP}
                    alt="CPP_logo"
                    className="w-13 h-13 mb-3"
        />
        <span className="text-white font-semibold">C++</span>
      </div>



      {/* Git */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-600">
        <img
                    src= {GIT}
                    alt="Git_logo"
                    className="w-15 h-15 mb-3"
        />
        <span className="text-white font-semibold">Git</span>
      </div>



      {/* Vs code */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-700">
        <img
                    src= {VS_CODE}
                    alt="Vs Code_logo"
                    className="w-13 h-13 mb-3"
        />
        <span className="text-white font-semibold">Vs code</span>
      </div>


      {/* PostMan */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-400">
        <img
                    src= {POSTMAN}
                    alt="Postman_logo"
                    className="w-13 h-13 mb-3"
        />
        <span className="text-white font-semibold">Postman</span>
      </div>

      {/* Github */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-gray-600">
        <img
                    src= {GITHUB}
                    alt="Github_logo"
                    className="w-13 h-13 mb-3"
        />
        <span className="text-white font-semibold">Github</span>
      </div>

      {/* Muthi */}
      <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-white">
        <img
                    src= {MUTHHI}
                    alt="MUTHHI_logo"
                    className="w-13 h-13 mb-3"
        />
        <span className="text-white font-semibold">Muthii</span>
      </div>


    </div>
  </div>
</section>

        </>
    )
}


export default Skills