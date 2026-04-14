import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <img src={logoImg} alt="Starroots logo" className="w-40 h-40 md:w-52 md:h-52 drop-shadow-2xl" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm tracking-[0.35em] uppercase text-muted-foreground mb-4 font-body"
        >
          Projeto de Rebrand
        </motion.p>

        <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight mb-6">
          Star<span className="text-gradient">roots</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
        >
          Dos campos de café até o seu copo, a natureza é a prioridade.
          Uma nova identidade visual que conecta sustentabilidade e experiência.
        </motion.p>

        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="w-8 h-px bg-border" />
          <span className="tracking-widest uppercase text-xs">@starroots</span>
          <span className="w-8 h-px bg-border" />
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-border"
        />
      </div>
    </section>
  );
}
