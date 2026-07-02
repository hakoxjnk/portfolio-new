"use client";
import { Plus_Jakarta_Sans, Preahvihear } from "next/font/google";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [isMounted, setIsMounted] = useState(false);
  const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setClicks((prev) => prev.filter(c => c.id !== id)), 1000);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // ================= DỮ LIỆU WORK EXPERIENCE & LINKS CỦA TỪNG NÚT LEARN MORE =================
  const workExperiences = [
    { id: 1, title: "CIB on the Mobile", description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", icon: "/icon/work1.png", link: "https://github.com/hakoxjnk" },
    { id: 2, title: "UI/UX Designer at Apple", description: "Designed intuitive user interfaces for the next generation of iOS applications.", icon: "/icon/work2.png", link: "https://github.com/hakoxjnk" },
    { id: 3, title: "Frontend Developer", description: "Built scalable and responsive web applications using React and Next.js.", icon: "/icon/work3.png", link: "https://github.com/hakoxjnk" },
    { id: 4, title: "Freelance Designer", description: "Worked with multiple international clients to deliver high-quality branding packages.", icon: "/icon/work4.png", link: "https://github.com/hakoxjnk" }
  ];

  return (
    <main className={`min-h-screen bg-[#07020D] text-white overflow-hidden relative ${preahvihear.className}`}>
      
      {/* Cấu hình thêm scroll-behavior để kích hoạt lướt mượt mà */}
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes sweep {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(200%) skewX(-45deg); }
        }
        .animate-sweep { animation: sweep 0.8s ease-in-out forwards; }
        
        .glitch-text { animation: glitch 3s infinite; }
        @keyframes glitch {
          0%, 90%, 100% { text-shadow: none; transform: translate(0); }
          92% { text-shadow: 2px 0 #A855F7, -2px 0 #3B82F6; transform: translate(-1px, 1px); }
          94% { text-shadow: -2px 0 #A855F7, 2px 0 #3B82F6; transform: translate(1px, -1px); }
          96% { text-shadow: 2px 0 #A855F7, -2px 0 #3B82F6; transform: translate(-1px, 0); }
        }
      `}</style>

      {/* HIỆU ỨNG: CLICK VĂNG SAO & SÓNG ÂM */}
      {isMounted && clicks.map(click => (
        <div key={click.id} className="fixed pointer-events-none z-[1000]" style={{ top: click.y, left: click.x }}>
          <motion.div initial={{ scale: 0.2, opacity: 1 }} animate={{ scale: 4, opacity: 0 }} transition={{ duration: 0.6 }} className="absolute -inset-4 border-2 border-[#A855F7] rounded-full" />
          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * 360 * (Math.PI / 180);
            const distance = 40 + Math.random() * 40;
            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                animate={{ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance, scale: Math.random() * 0.8 + 0.5, opacity: 0, rotate: 180 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute -top-2 -left-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill={i % 2 === 0 ? "white" : "#A855F7"} className="drop-shadow-[0_0_5px_currentColor]">
                  <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" />
                </svg>
              </motion.div>
            )
          })}
        </div>
      ))}

      {/* THANH NĂNG LƯỢNG CUỘN */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#A855F7] to-[#3B82F6] origin-left z-50 shadow-[0_0_15px_#A855F7]" style={{ scaleX }} />

      {/* ================= HEADER (ĐÃ THÊM LIÊN KẾT CUỘN & CONTACT) ================= */}
      <nav className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-3 items-center relative z-40">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold cursor-pointer font-sans text-[#A855F7] drop-shadow-[0_0_10px_#A855F7] hover:scale-110 transition-transform duration-300">~</motion.div>
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className={`${plusJakarta.className} flex justify-center gap-12 font-medium text-[15px]`}>
          <a href="#" className="hover:text-[#A855F7] hover:-translate-y-1 transition-all duration-300">Home</a>
          <a href="#about" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">About</a>
          <a href="#lab" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">Lab</a>
          <a href="#contact" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">Contact</a>
        </motion.div>
        <div></div>
      </nav>

      {/* ================= CONTAINER CHÍNH ================= */}
      <section className="w-full flex justify-center px-8 pt-6 relative z-10 pb-32">
        <div className="flex flex-col items-start max-w-[880px] w-full pl-4 md:pl-16">
          
          {/* ================= 1. HERO SECTION ================= */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8 }} className="flex flex-row items-center gap-10 mb-10 group">
            <div className="relative shrink-0 hover:scale-105 transition-transform duration-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#6B21A8]/40 blur-[70px] rounded-full z-0 pointer-events-none group-hover:bg-[#A855F7]/60 transition-colors duration-500 animate-pulse"></div>
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="w-[170px] h-[170px] relative z-10 flex items-center justify-center drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <img src="/av/avatar.png" alt="Avatar" className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity drop-shadow-2xl" />
              </motion.div>
            </div>

            <div className="text-left flex flex-col justify-center">
              <p className="text-[#A855F7] text-[13px] mb-2 italic tracking-wider animate-pulse">Hello! I Am <span className="font-sans font-bold text-white text-[16px] glitch-text inline-block">Hako</span></p>
              <h2 className="text-[32px] leading-[1.4] mb-3 transition-all duration-300 hover:text-purple-200">
                A Designer who <br /> Judges a book <br /> by its <span className="text-[#A855F7] border border-[#A855F7] rounded-[50%] px-4 py-1.5 relative inline-block transform -rotate-3 mx-1 shadow-[0_0_10px_rgba(168,85,247,0.3)]">cover...</span>
              </h2>
              <p className="text-[11px] text-gray-500 tracking-wider">Because if the cover does not impress you what else can?</p>
            </div>
          </motion.div>

          <div className="text-[46px] leading-none mb-6 text-left min-h-[50px]">
            <Typewriter />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-[14px] text-gray-400 max-w-[650px] leading-[1.8] text-left relative z-20">
            <p className="mb-6 hover:text-gray-300 transition-colors">Currently, I&apos;m a Software Engineer at <span className="text-[#3B82F6] font-semibold cursor-pointer hover:text-white transition-all drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Facebook</span>,</p>
            <p className="hover:text-gray-300 transition-colors">
              A self-taught UI/UX designer, functioning in the industry for 3+ years now. <br />
              I make meaningful and delightful digital products that create an equilibrium <br />
              between user needs and business goals.
            </p>
          </motion.div>

          {/* ================= 2. WORK EXPERIENCE (Đã thêm id="about" để nhấn tự cuộn xuống) ================= */}
          <motion.div id="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.8 }} className="w-full mt-28 z-20 scroll-mt-10">
            <h3 className="text-[24px] mb-8 tracking-wide">Work Experience</h3>
            <div className="grid grid-cols-2 gap-6 w-full">
              {workExperiences.map((job) => (
                <motion.div 
                  key={job.id} 
                  whileHover={{ scale: 1.02, y: -5 }} 
                  className="bg-gradient-to-br from-[#1C0A35] to-[#0A0314] border border-[#A855F7]/20 rounded-[20px] px-7 py-6 flex flex-row items-center gap-5 hover:border-[#A855F7]/70 transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)] cursor-pointer"
                >
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/30 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-[70px] h-[70px] shrink-0 flex items-center justify-center z-10 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-500">
                    <img src={job.icon} alt={job.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col items-start z-10 w-full">
                    <h4 className="text-[17px] mb-1 text-white/90 group-hover:text-[#A855F7] transition-colors">{job.title}</h4>
                    <p className="text-[11px] text-gray-400 mb-4 leading-[1.6]">{job.description}</p>
                    {/* Nút LEARN MORE đã trỏ link động thành công */}
                    <a href={job.link} target="_blank" rel="noopener noreferrer" className="z-20">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-[9px] px-5 py-2 rounded-full border border-[#A855F7]/40 text-[#A855F7] group-hover:bg-[#A855F7] group-hover:text-white group-hover:shadow-[0_0_15px_#A855F7] transition-all tracking-wider font-semibold">
                        LEARN MORE
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= 3. NEURAL NETWORK HUB ================= */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1 }} className="w-full mt-24 mb-40 flex flex-col items-center justify-center text-center relative z-20">
            <p className="text-[15px] text-gray-300 mb-1 max-w-md leading-relaxed z-30">
              I&apos;m currently looking to join a <span className="text-[#A855F7] font-semibold drop-shadow-[0_0_5px_#A855F7] hover:text-white transition-colors cursor-pointer">cross-functional</span> team
            </p>
            <p className="text-[12px] text-gray-500 z-30 mb-8">that values improving people&apos;s lives through accessible design</p>

            <div className="relative w-full max-w-[800px] h-[500px] mx-auto mt-6 flex flex-col items-center">
              <svg className="absolute top-[30px] left-0 w-full h-[350px] z-10 pointer-events-none" viewBox="0 0 800 350">
                <defs><linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#A855F7" stopOpacity="0.1" /><stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" /></linearGradient></defs>
                <path d="M 238,20 C 238,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 292,20 C 292,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 346,20 C 346,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 400,20 C 400,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 454,20 C 454,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 508,20 C 508,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 562,20 C 562,150 400,200 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 275,70 C 275,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 325,70 C 325,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 375,70 C 375,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 425,70 C 425,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 475,70 C 475,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
                <path d="M 525,70 C 525,180 400,220 400,320" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="drop-shadow-[0_0_5px_#A855F7]" />
              </svg>

              <div className="flex flex-col items-center gap-5 z-20 relative top-0">
                <div className="flex gap-4">
                  {['figma', 'react', 'c', 'node', 'redux', 'js', 'html'].map((tech, i) => (
                    <motion.div whileHover={{ y: -8, scale: 1.15, boxShadow: "0px 0px 20px rgba(168,85,247,0.6)" }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} key={`row1-${i}`} className="w-[38px] h-[38px] rounded-full bg-[#110524] border border-[#A855F7]/30 flex items-center justify-center p-[8px] shadow-[0_0_10px_rgba(168,85,247,0.3)] cursor-pointer">
                      <img src={`/tech/tech-${tech}.png`} alt={tech} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-4">
                  {['css', 'next', 'php', 'java', 'ps', 'mongo'].map((tech, i) => (
                    <motion.div whileHover={{ y: -8, scale: 1.15, boxShadow: "0px 0px 20px rgba(168,85,247,0.6)" }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} key={`row2-${i}`} className="w-[34px] h-[34px] rounded-full bg-[#110524] border border-[#A855F7]/30 flex items-center justify-center p-[7px] shadow-[0_0_10px_rgba(168,85,247,0.3)] cursor-pointer">
                      <img src={`/tech/tech-${tech}.png`} alt={tech} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                <div className="absolute w-[200px] h-[200px] bg-[#8B5CF6]/40 blur-[60px] rounded-full z-0 pointer-events-none animate-[pulse_3s_ease-in-out_infinite]"></div>
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 0px 60px rgba(139,92,246,1)" }} whileTap={{ scale: 0.9 }} className="w-[85px] h-[85px] bg-[#0A0214] border-2 border-[#8B5CF6] shadow-[0_0_40px_#8B5CF6] rounded-full flex items-center justify-center p-4 z-10 cursor-pointer">
                  <img src="/logo1/logo.png" alt="Logo Core" className="w-full h-full object-contain drop-shadow-[0_0_10px_white]" />
                </motion.div>
              </div>

              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[1200px] h-[300px] z-0 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 300">
                  <ellipse cx="600" cy="150" rx="550" ry="120" fill="none" stroke="#A855F7" strokeWidth="1" opacity="0.15" />
                  <ellipse cx="600" cy="150" rx="450" ry="90" fill="none" stroke="#A855F7" strokeWidth="1" opacity="0.25" />
                  <ellipse cx="600" cy="150" rx="350" ry="60" fill="none" stroke="#A855F7" strokeWidth="1" opacity="0.4" />
                </svg>
                <motion.img animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} src="/tech/tech-html.png" className="absolute top-[25%] left-[20%] w-5 h-5 grayscale blur-[1px]" alt="." />
                <motion.img animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }} src="/tech/tech-js.png" className="absolute top-[20%] right-[25%] w-6 h-6 grayscale blur-[1px]" alt="." />
                <motion.img animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1 }} src="/tech/tech-figma.png" className="absolute bottom-[20%] left-[25%] w-4 h-4 grayscale blur-[1px]" alt="." />
                <motion.img animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 4 }} src="/tech/tech-react.png" className="absolute bottom-[35%] right-[20%] w-5 h-5 grayscale blur-[1px]" alt="." />
                <motion.img animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 3.5 }} src="/tech/tech-node.png" className="absolute top-[40%] left-[10%] w-6 h-6 grayscale blur-[1px]" alt="." />
              </div>
            </div>
          </motion.div>

          {/* ================= 4. FEATURED PROJECTS (Đã thêm id="lab" để nhấn tự cuộn xuống) ================= */}
          <div id="lab" className="w-full z-20 mt-10 scroll-mt-10">
            
            {/* PROJECT 1 */}
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8 }} className="grid grid-cols-12 items-center relative mb-40 group">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#A855F7]/20 blur-[100px] z-0 pointer-events-none group-hover:bg-[#A855F7]/40 transition-colors duration-700"></div>
              
              <div className="col-start-5 col-end-13 row-start-1 relative overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.05] z-10 group-hover:z-30 cursor-pointer">
                <div className="absolute inset-0 bg-[#A855F7]/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <div className="absolute inset-0 w-full h-full z-20 translate-x-[-150%] skew-x-[-45deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-sweep pointer-events-none"></div>
                <img src="/project-1.png" alt="Project 1" className="w-full aspect-[16/10] object-cover bg-[#130728]" />
              </div>
              
              <div className="col-start-1 col-end-8 row-start-1 flex flex-col items-start text-left pointer-events-none z-20 group-hover:z-0 transition-all duration-500">
                <p className="text-[#A855F7] text-[12px] mb-2 tracking-wider drop-shadow-md">Featured Project</p>
                <h3 className="text-[26px] mb-6 transition-colors drop-shadow-lg">Example Project</h3>
                <div className="bg-[#10061F]/90 backdrop-blur-xl border border-[#A855F7]/20 p-7 rounded-xl text-[13px] text-gray-300 leading-[1.8] shadow-2xl pointer-events-auto hover:border-[#A855F7]/60 cursor-pointer">
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
                </div>
                {/* Đã bọc link vào các Icon dự án */}
                <div className="flex gap-4 mt-6 pointer-events-auto">
                  <a href="https://github.com/hakoxjnk" target="_blank" rel="noopener noreferrer">
                    <motion.img whileHover={{ scale: 1.2, y: -2 }} src="/icon-github.png" alt="GitHub" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-all" />
                  </a>
                  <a href="https://github.com/hakoxjnk" target="_blank" rel="noopener noreferrer">
                    <motion.img whileHover={{ scale: 1.2, y: -2 }} src="/icon-link.png" alt="Link" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* PROJECT 2 */}
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8 }} className="grid grid-cols-12 items-center relative mb-32 group">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#A855F7]/20 blur-[100px] z-0 pointer-events-none group-hover:bg-[#A855F7]/40 transition-colors duration-700"></div>
              
              <div className="col-start-1 col-end-9 row-start-1 relative overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.05] z-10 group-hover:z-30 cursor-pointer">
                <div className="absolute inset-0 bg-[#A855F7]/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <div className="absolute inset-0 w-full h-full z-20 translate-x-[-150%] skew-x-[-45deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-sweep pointer-events-none"></div>
                <img src="/project-2.png" alt="Project 2" className="w-full aspect-[16/10] object-cover bg-[#130728]" />
              </div>

              <div className="col-start-6 col-end-13 row-start-1 flex flex-col items-end text-right pointer-events-none z-20 group-hover:z-0 transition-all duration-500">
                <p className="text-[#A855F7] text-[12px] mb-2 tracking-wider drop-shadow-md">Featured Project</p>
                <h3 className="text-[26px] mb-6 transition-colors drop-shadow-lg">Example Project</h3>
                <div className="bg-[#10061F]/90 backdrop-blur-xl border border-[#A855F7]/20 p-7 rounded-xl text-[13px] text-gray-300 leading-[1.8] shadow-2xl pointer-events-auto hover:border-[#A855F7]/60 cursor-pointer">
                  Create and save new playlists of recommended tracks based on your existing playlists and more. Discover new music intuitively.
                </div>
                <div className="flex gap-4 mt-6 pointer-events-auto">
                  <a href="https://github.com/hakoxjnk" target="_blank" rel="noopener noreferrer">
                    <motion.img whileHover={{ scale: 1.2, y: -2 }} src="/icon-github.png" alt="GitHub" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-all" />
                  </a>
                  <a href="https://github.com/hakoxjnk" target="_blank" rel="noopener noreferrer">
                    <motion.img whileHover={{ scale: 1.2, y: -2 }} src="/icon-link.png" alt="Link" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= 5. CONTACT SECTION (Đã thêm id="contact" để nhấn tự cuộn xuống) ================= */}
          <motion.div id="contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.6 }} className="w-full mt-20 flex flex-col items-start z-10 scroll-mt-10">
            <h3 className="text-[22px] mb-6 tracking-wide">Contact</h3>
            <p className="text-[13px] text-gray-400 max-w-[500px] leading-[1.8] mb-8 hover:text-gray-300 transition-colors">
              I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives through accessible design. or have a project in mind? Let&apos;s connect.
            </p>
            <motion.a whileHover={{ x: 10, color: "#A855F7" }} href="mailto:tranthienan@gmail.com" className="text-[14px] text-white transition-all mb-8 tracking-wider inline-block">
              tranthienan@gmail.com
            </motion.a>
            {/* Đã bọc link vào các Icon footer dưới chân trang */}
            <div className="flex gap-5">
              <a href="https://github.com/hakoxjnk" target="_blank" rel="noopener noreferrer">
                <motion.img whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} src="/icon-ig.png" alt="Instagram" className="w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 transition-all" />
              </a>
              <a href="https://github.com/hakoxjnk" target="_blank" rel="noopener noreferrer">
                <motion.img whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} src="/icon-git.png" alt="Github" className="w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 transition-all" />
              </a>
              <a href="https://github.com/hakoxjnk" target="_blank" rel="noopener noreferrer">
                <motion.img whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} src="/icon-web.png" alt="Website" className="w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 transition-all" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}