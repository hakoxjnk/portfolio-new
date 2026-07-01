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
  
  // ================= DỮ LIỆU WORK EXPERIENCE =================
  const workExperiences = [
    { id: 1, title: "CIB on the Mobile", description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", icon: "/icon/work1.png" },
    { id: 2, title: "UI/UX Designer at Apple", description: "Designed intuitive user interfaces for the next generation of iOS applications.", icon: "/icon/work2.png" },
    { id: 3, title: "Frontend Developer", description: "Built scalable and responsive web applications using React and Next.js.", icon: "/icon/work3.png" },
    { id: 4, title: "Freelance Designer", description: "Worked with multiple international clients to deliver high-quality branding packages.", icon: "/icon/work4.png" }
  ];

  return (
    <main className={`min-h-screen bg-[#07020D] text-white overflow-hidden relative ${preahvihear.className}`}>
      
      {/* ================= HEADER ================= */}
      <nav className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-3 items-center relative z-30">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold cursor-pointer font-sans text-[#A855F7] drop-shadow-[0_0_10px_#A855F7] hover:scale-110 transition-transform duration-300">~</motion.div>
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#6B21A8]/40 blur-[70px] rounded-full z-0 pointer-events-none group-hover:bg-[#A855F7]/60 transition-colors duration-500 animate-pulse"></div>
              <div className="w-[140px] h-[140px] relative z-10 flex items-center justify-center drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <img src="/av/avatar.png" alt="Avatar" className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity drop-shadow-2xl" />
              </div>
            </div>
            <div className="text-left flex flex-col justify-center">
              <p className="text-[#A855F7] text-[13px] mb-2 italic tracking-wider animate-pulse">Hello! I Am <span className="font-sans">Hako</span></p>
              <h2 className="text-[32px] leading-[1.4] mb-3 transition-all duration-300 hover:text-purple-200">
                A Designer who <br /> Judges a book <br /> by its <span className="text-[#A855F7] border border-[#A855F7] rounded-[50%] px-4 py-1.5 relative inline-block transform -rotate-3 mx-1 shadow-[0_0_10px_rgba(168,85,247,0.3)]">cover...</span>
              </h2>
              <p className="text-[11px] text-gray-500 tracking-wider">Because if the cover does not impress you what else can?</p>
            </div>
          </motion.div>

          <div className="text-[46px] leading-none mb-6 text-left min-h-[50px]">
            <Typewriter />
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-[14px] text-gray-400 max-w-[650px] leading-[1.8] text-left">
            <p className="mb-6 hover:text-gray-300 transition-colors">Currently, I&apos;m a Software Engineer at <span className="text-[#3B82F6] font-semibold cursor-pointer hover:underline">Facebook</span>,</p>
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
              {workExperiences.map((job) => (
                <div key={job.id} className="bg-gradient-to-br from-[#1C0A35] to-[#0A0314] border border-[#A855F7]/20 rounded-[20px] px-7 py-6 flex flex-row items-center gap-5 hover:border-[#A855F7]/70 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] cursor-pointer">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/30 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-[70px] h-[70px] shrink-0 flex items-center justify-center z-10 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-500">
                    <img src={job.icon} alt={job.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col items-start z-10 w-full">
                    <h4 className="text-[17px] mb-1 text-white/90 group-hover:text-[#A855F7] transition-colors">{job.title}</h4>
                    <p className="text-[11px] text-gray-400 mb-4 leading-[1.6]">{job.description}</p>
                    <button className="text-[9px] px-5 py-2 rounded-full border border-[#A855F7]/40 text-[#A855F7] group-hover:bg-[#A855F7] group-hover:text-white transition-all tracking-wider font-semibold">LEARN MORE</button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= 3. NEURAL NETWORK HUB (THIẾT KẾ MỚI) ================= */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full mt-24 mb-40 flex flex-col items-center justify-center text-center relative z-20">
            
            <p className="text-[15px] text-gray-300 mb-1 max-w-md leading-relaxed z-30">
              I&apos;m currently looking to join a <span className="text-[#A855F7] font-semibold drop-shadow-[0_0_5px_#A855F7]">cross-functional</span> team
            </p>
            <p className="text-[12px] text-gray-500 z-30 mb-8">
              that values improving people&apos;s lives through accessible design
            </p>

            {/* CONTAINER ĐỘ ĐỊNH VỊ CHUẨN XÁC */}
            <div className="relative w-full max-w-[800px] h-[500px] mx-auto mt-6 flex flex-col items-center">
              
              {/* CÁC ĐƯỜNG TRUYỀN NĂNG LƯỢNG (SVG) */}
              <svg className="absolute top-[30px] left-0 w-full h-[350px] z-10 pointer-events-none" viewBox="0 0 800 350">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {/* Đường dẫn Hàng 1 */}
                <path d="M 238,20 C 238,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 292,20 C 292,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 346,20 C 346,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 400,20 C 400,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 454,20 C 454,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 508,20 C 508,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 562,20 C 562,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                
                {/* Đường dẫn Hàng 2 */}
                <path d="M 275,70 C 275,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 325,70 C 325,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 375,70 C 375,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 425,70 C 425,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 475,70 C 475,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
                <path d="M 525,70 C 525,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_3px_#A855F7]" />
              </svg>

              {/* 2 HÀNG ICON TOP */}
              <div className="flex flex-col items-center gap-5 z-20 relative top-0">
                {/* Hàng 1 */}
                <div className="flex gap-4">
                  {['figma', 'react', 'c', 'node', 'redux', 'js', 'html'].map((tech, i) => (
                    <motion.div whileHover={{ y: -5, scale: 1.1 }} key={`row1-${i}`} className="w-[38px] h-[38px] rounded-full bg-[#110524] border border-[#A855F7]/20 flex items-center justify-center p-[8px] shadow-[0_0_10px_rgba(168,85,247,0.3)] cursor-pointer">
                      <img src={`/tech/tech-${tech}.png`} alt={tech} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
                {/* Hàng 2 */}
                <div className="flex gap-4">
                  {['c', 'next', 'logo', 'java', 'ps', 'mongo'].map((tech, i) => (
                    <motion.div whileHover={{ y: -5, scale: 1.1 }} key={`row2-${i}`} className="w-[34px] h-[34px] rounded-full bg-[#110524] border border-[#A855F7]/20 flex items-center justify-center p-[7px] shadow-[0_0_10px_rgba(168,85,247,0.3)] cursor-pointer">
                      <img src={`/tech/tech-${tech}.png`} alt={tech} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* QUẢ CẦU PHÁT SÁNG TRUNG TÂM (CORE) */}
              <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                {/* Hiệu ứng Glow nền */}
                <div className="absolute w-[200px] h-[200px] bg-[#8B5CF6]/40 blur-[60px] rounded-full z-0 pointer-events-none animate-pulse"></div>
                {/* Logo lõi */}
                <motion.div whileHover={{ scale: 1.05 }} className="w-[85px] h-[85px] bg-[#0A0214] border border-[#8B5CF6]/50 shadow-[0_0_40px_#8B5CF6] rounded-full flex items-center justify-center p-4 z-10 cursor-pointer transition-all duration-300">
                  <img src="/logo1/logo.png" alt="Logo Core" className="w-full h-full object-contain drop-shadow-[0_0_10px_white]" />
                </motion.div>
              </div>

              {/* VÒNG QUỸ ĐẠO CHÌM PHÍA DƯỚI & TINY ICONS */}
              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[1200px] h-[300px] z-0 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 300">
                  <ellipse cx="600" cy="150" rx="550" ry="120" fill="none" stroke="#A855F7" strokeWidth="1" opacity="0.15" />
                  <ellipse cx="600" cy="150" rx="450" ry="90" fill="none" stroke="#A855F7" strokeWidth="1" opacity="0.25" />
                  <ellipse cx="600" cy="150" rx="350" ry="60" fill="none" stroke="#A855F7" strokeWidth="1" opacity="0.4" />
                </svg>

                {/* Các icon siêu nhỏ mờ ảo bay lơ lửng trên quỹ đạo */}
                <img src="/tech/tech-html.png" className="absolute top-[25%] left-[20%] w-5 h-5 opacity-30 grayscale blur-[1px]" alt="." />
                <img src="/tech/tech-js.png" className="absolute top-[20%] right-[25%] w-6 h-6 opacity-30 grayscale blur-[1px]" alt="." />
                <img src="/tech/tech-figma.png" className="absolute bottom-[20%] left-[25%] w-4 h-4 opacity-40 grayscale blur-[1px]" alt="." />
                <img src="/tech/tech-react.png" className="absolute bottom-[35%] right-[20%] w-5 h-5 opacity-40 grayscale blur-[1px]" alt="." />
                <img src="/tech/tech-node.png" className="absolute top-[40%] left-[10%] w-6 h-6 opacity-20 grayscale blur-[1px]" alt="." />
                <img src="/tech/tech-css.png" className="absolute bottom-[10%] right-[30%] w-4 h-4 opacity-25 grayscale blur-[1px]" alt="." />
              </div>

            </div>
          </motion.div>

          {/* ================= 4. FEATURED PROJECTS ================= */}
          <div className="w-full z-20 mt-10">
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
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
                </div>
                <div className="flex gap-4 mt-6 pointer-events-auto">
                  <img src="/icon-github.png" alt="GitHub" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all" />
                  <img src="/icon-link.png" alt="Link" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </motion.div>

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
                  Create and save new playlists of recommended tracks based on your existing playlists and more. Discover new music intuitively.
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