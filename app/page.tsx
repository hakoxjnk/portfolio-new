"use client";
import { Plus_Jakarta_Sans, Preahvihear } from "next/font/google";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const preahvihear = Preahvihear({ weight: "400", subsets: ["latin"] });

// Component Hiệu ứng Gõ chữ
const Typewriter = () => {
  const fullText = "I'm a Software Engineer.";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && text === "") {
        setIsDeleting(false); 
      } else {
        setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, isDeleting ? 50 : 120); 
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <span className="flex items-center">
      {text}
      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-[#A855F7] ml-1 font-light font-sans">|</motion.span>
    </span>
  );
};

export default function Home() {
  return (
    <main className={`min-h-screen bg-[#07020D] text-white overflow-hidden relative ${preahvihear.className}`}>
      
      {/* ================= HEADER ================= */}
      <nav className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-3 items-center relative z-30">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold cursor-pointer font-sans text-[#A855F7] drop-shadow-[0_0_10px_#A855F7] hover:scale-110 transition-transform duration-300">
          ~
        </motion.div>
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className={`${plusJakarta.className} flex justify-center gap-12 font-medium text-[15px]`}>
          <a href="#" className="hover:text-[#A855F7] hover:-translate-y-1 transition-all duration-300">Home</a>
          <a href="#" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">About</a>
          <a href="#" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">Lab</a>
        </motion.div>
        <div></div>
      </nav>

      {/* ================= CONTAINER CHÍNH ================= */}
      <section className="w-full flex justify-center px-8 pt-6 relative z-10 pb-32">
        <div className="flex flex-col items-start max-w-[880px] w-full pl-4 md:pl-16">
          
          {/* ================= 1. HERO SECTION ================= */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-row items-center gap-10 mb-10 group">
            <div className="relative shrink-0 hover:scale-105 transition-transform duration-500">
              {/* Vầng sáng tím (giữ nguyên để tạo hào quang) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#6B21A8]/40 blur-[70px] rounded-full z-0 pointer-events-none group-hover:bg-[#A855F7]/60 transition-colors duration-500 animate-pulse"></div>
              
              {/* Ảnh Avatar: Bỏ khung, bỏ nền. Dùng drop-shadow để bóng bám theo viền hình thật */}
              <div className="w-[140px] h-[140px] relative z-10 flex items-center justify-center drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <img src="/avatar.png" alt="Avatar" className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity drop-shadow-2xl" />
              </div>
            </div>

            <div className="text-left flex flex-col justify-center">
              <p className="text-[#A855F7] text-[13px] mb-2 italic tracking-wider animate-pulse">Hello! I Am <span className="font-sans">...</span></p>
              <h2 className="text-[32px] leading-[1.4] mb-3 transition-all duration-300 hover:text-purple-200">
                A Designer who <br />
                Judges a book <br />
                by its <span className="text-[#A855F7] border border-[#A855F7] rounded-[50%] px-4 py-1.5 relative inline-block transform -rotate-3 mx-1 shadow-[0_0_10px_rgba(168,85,247,0.3)]">cover...</span>
              </h2>
              <p className="text-[11px] text-gray-500 tracking-wider">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </motion.div>

          <div className="text-[46px] leading-none mb-6 text-left min-h-[50px]">
            <Typewriter />
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-[14px] text-gray-400 max-w-[650px] leading-[1.8] text-left">
            <p className="mb-6 hover:text-gray-300 transition-colors">
              Currently, I&apos;m a Software Engineer at <span className="text-[#3B82F6] font-semibold cursor-pointer hover:underline">Facebook</span>,
            </p>
            <p className="hover:text-gray-300 transition-colors">
              A self-taught UI/UX designer, functioning in the industry for 3+ years now. <br />
              I make meaningful and delightful digital products that create an equilibrium <br />
              between user needs and business goals.
            </p>
          </motion.div>

          {/* ================= 2. WORK EXPERIENCE ================= */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-full mt-28 z-20">
            <h3 className="text-[24px] mb-8 tracking-wide">Work Experience</h3>
            
            <div className="grid grid-cols-2 gap-6 w-full">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={item} className="bg-gradient-to-br from-[#1C0A35] to-[#0A0314] border border-[#A855F7]/20 rounded-[20px] px-7 py-6 flex flex-row items-center gap-5 hover:border-[#A855F7]/70 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] cursor-pointer">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/30 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-[65px] h-[65px] shrink-0 bg-[#0F0421] border border-[#A855F7]/20 rounded-2xl flex items-center justify-center z-10 p-2 shadow-inner shadow-purple-500/20 group-hover:rotate-12 transition-transform duration-500">
                    <img src={`/icon-work-${index + 1}.png`} alt="Work Icon" className="w-full h-full object-contain" />
                  </div>

                  <div className="flex flex-col items-start z-10 w-full">
                    <h4 className="text-[17px] mb-1 text-white/90 group-hover:text-[#A855F7] transition-colors">CIB on the Mobile</h4>
                    <p className="text-[11px] text-gray-400 mb-4 leading-[1.6]">
                      Take your client onboard seamlessly by our amazing tool of digital onboard process.
                    </p>
                    <button className="text-[9px] px-5 py-2 rounded-full border border-[#A855F7]/40 text-[#A855F7] group-hover:bg-[#A855F7] group-hover:text-white transition-all tracking-wider font-semibold">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= 3. TECH STACK & ORBIT GLOW ================= */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full mt-32 mb-40 flex flex-col items-center justify-center text-center relative">
            <p className="text-[15px] text-gray-300 mb-2 max-w-md leading-relaxed z-20">
              I&apos;m currently looking to join a <span className="text-[#A855F7] font-semibold drop-shadow-[0_0_5px_#A855F7]">cross-functional</span> team
            </p>
            <p className="text-[12px] text-gray-500 mb-10 z-20">
              that values improving people&apos;s lives through accessible design
            </p>

            <div className="relative w-full h-[400px] flex justify-center items-end mt-10">
              
              <svg className="absolute left-1/2 -translate-x-1/2 bottom-[100px] w-[500px] h-[250px] z-0 pointer-events-none" viewBox="0 0 500 250">
                 <path d="M 250 250 Q 150 150 50 50" stroke="#A855F7" strokeWidth="1.5" fill="none" className="opacity-30 drop-shadow-[0_0_5px_#A855F7]" />
                 <path d="M 250 250 Q 200 150 130 50" stroke="#A855F7" strokeWidth="1.5" fill="none" className="opacity-30 drop-shadow-[0_0_5px_#A855F7]" />
                 <path d="M 250 250 Q 250 150 210 50" stroke="#A855F7" strokeWidth="1.5" fill="none" className="opacity-30 drop-shadow-[0_0_5px_#A855F7]" />
                 <path d="M 250 250 Q 250 150 250 10" stroke="#A855F7" strokeWidth="1.5" fill="none" className="opacity-30 drop-shadow-[0_0_5px_#A855F7]" />
                 <path d="M 250 250 Q 250 150 290 50" stroke="#A855F7" strokeWidth="1.5" fill="none" className="opacity-30 drop-shadow-[0_0_5px_#A855F7]" />
                 <path d="M 250 250 Q 300 150 370 50" stroke="#A855F7" strokeWidth="1.5" fill="none" className="opacity-30 drop-shadow-[0_0_5px_#A855F7]" />
                 <path d="M 250 250 Q 350 150 450 50" stroke="#A855F7" strokeWidth="1.5" fill="none" className="opacity-30 drop-shadow-[0_0_5px_#A855F7]" />
              </svg>

              <div className="absolute bottom-[230px] w-full flex flex-col items-center gap-4 z-20">
                <div className="flex gap-4">
                  {['figma', 'react', 'c', 'node', 'redux', 'js', 'html'].map((tech, i) => (
                    <motion.div whileHover={{ scale: 1.2, y: -5 }} key={i} className="w-[38px] h-[38px] rounded-full bg-[#110524] border border-[#A855F7]/30 flex items-center justify-center p-[8px] shadow-[0_0_15px_rgba(168,85,247,0.2)] cursor-pointer overflow-hidden">
                      <img src={`/tech-${tech}.png`} alt={tech} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-4">
                  {['xd', 'next', 'logo', 'illustrator', 'ps', 'mongo'].map((tech, i) => (
                    <motion.div whileHover={{ scale: 1.2, y: -5 }} key={i} className="w-[34px] h-[34px] rounded-full bg-[#110524] border border-[#A855F7]/20 flex items-center justify-center p-[7px] shadow-[0_0_10px_rgba(168,85,247,0.1)] cursor-pointer overflow-hidden">
                      <img src={`/tech-${tech}.png`} alt={tech} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex items-center justify-center w-[800px] h-[250px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#a855f7]/30 blur-[80px] rounded-full z-0 pointer-events-none animate-pulse"></div>
                
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[180px] border border-purple-500/10 rounded-[50%] z-0 pointer-events-none">
                   <img src="/mini-icon-1.png" className="absolute top-0 left-[20%] w-4 h-4 opacity-50" alt="." />
                   <img src="/mini-icon-2.png" className="absolute bottom-0 right-[30%] w-5 h-5 opacity-50" alt="." />
                </motion.div>

                <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[140px] border border-[#A855F7]/30 rounded-[50%] z-0 pointer-events-none">
                   <img src="/mini-icon-3.png" className="absolute top-[10%] right-[10%] w-4 h-4 opacity-50" alt="." />
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[100px] border border-gray-500/20 rounded-[50%] transform rotate-[12deg] z-0 pointer-events-none"></div>

                <motion.div whileHover={{ scale: 1.1 }} className="w-[85px] h-[85px] bg-[#07020D] border-2 border-[#A855F7] shadow-[0_0_50px_#a855f7] rounded-full flex items-center justify-center z-20 overflow-hidden p-2 cursor-pointer animate-[pulse_3s_ease-in-out_infinite]">
                   <img src="/logo-center.png" alt="Logo" className="w-full h-full object-contain" />
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* ================= 4. FEATURED PROJECTS ================= */}
          <div className="w-full z-20">
            
            {/* Project 1 */}
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="grid grid-cols-12 items-center relative mb-40 z-10 group">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#A855F7]/20 blur-[100px] z-0 pointer-events-none group-hover:bg-[#A855F7]/40 transition-colors duration-700"></div>
              
              <div className="col-start-5 col-end-13 row-start-1 z-10 relative cursor-pointer overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[#A855F7]/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img src="/project-1.png" alt="Project 1" className="w-full aspect-[16/10] object-cover bg-[#130728]" />
              </div>

              <div className="col-start-1 col-end-8 row-start-1 z-20 flex flex-col items-start text-left pointer-events-none">
                <p className="text-[#A855F7] text-[12px] mb-2 tracking-wider">Featured Project</p>
                <h3 className="text-[26px] mb-6 group-hover:text-[#A855F7] transition-colors">Example Project</h3>
                <div className="bg-[#10061F]/90 backdrop-blur-xl border border-[#A855F7]/20 p-7 rounded-xl text-[13px] text-gray-300 leading-[1.8] shadow-2xl group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.2)] transition-shadow duration-500 pointer-events-auto">
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                </div>
                <div className="flex gap-4 mt-6 pointer-events-auto">
                  <img src="/icon-github.png" alt="GitHub" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all" />
                  <img src="/icon-link.png" alt="Link" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="grid grid-cols-12 items-center relative mb-32 z-10 group">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#A855F7]/20 blur-[100px] z-0 pointer-events-none group-hover:bg-[#A855F7]/40 transition-colors duration-700"></div>
              
              <div className="col-start-1 col-end-9 row-start-1 z-10 relative cursor-pointer overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[#A855F7]/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img src="/project-2.png" alt="Project 2" className="w-full aspect-[16/10] object-cover bg-[#130728]" />
              </div>

              <div className="col-start-6 col-end-13 row-start-1 z-20 flex flex-col items-end text-right pointer-events-none">
                <p className="text-[#A855F7] text-[12px] mb-2 tracking-wider">Featured Project</p>
                <h3 className="text-[26px] mb-6 group-hover:text-[#A855F7] transition-colors">Example Project</h3>
                <div className="bg-[#10061F]/90 backdrop-blur-xl border border-[#A855F7]/20 p-7 rounded-xl text-[13px] text-gray-300 leading-[1.8] shadow-2xl group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.2)] transition-shadow duration-500 pointer-events-auto">
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                </div>
                <div className="flex gap-4 mt-6 pointer-events-auto">
                  <img src="/icon-github.png" alt="GitHub" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all" />
                  <img src="/icon-link.png" alt="Link" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* ================= 5. CONTACT SECTION ================= */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full mt-20 flex flex-col items-start z-10">
            <h3 className="text-[22px] mb-6 tracking-wide">Contact</h3>
            <p className="text-[13px] text-gray-400 max-w-[500px] leading-[1.8] mb-8 hover:text-gray-300 transition-colors">
              I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives through accessible design. or have a project in mind? Let&apos;s connect.
            </p>
            
            <a href="mailto:tranthienan@gmail.com" className="text-[14px] text-white hover:text-[#A855F7] hover:scale-105 transition-all mb-8 tracking-wider origin-left inline-block">
              tranthienan@gmail.com
            </a>
            
            <div className="flex gap-5">
              <img src="/icon-ig.png" alt="Instagram" className="w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 hover:-translate-y-2 transition-all duration-300" />
              <img src="/icon-git.png" alt="Github" className="w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 hover:-translate-y-2 transition-all duration-300" />
              <img src="/icon-web.png" alt="Website" className="w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 hover:-translate-y-2 transition-all duration-300" />
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}