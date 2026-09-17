import { SiReact, SiNextdotjs, SiSpringboot, SiFastapi, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiMysql, SiDocker, SiKubernetes, SiFirebase, SiTensorflow, SiPytorch, SiOpenaigym, SiGithub } from 'react-icons/si';
import { FaJava, FaAws, FaMicrosoft } from 'react-icons/fa';

const techRow1 = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
];

const techRow2 = [
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'AWS', icon: FaAws },
  { name: 'Azure', icon: FaMicrosoft },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'OpenAI', icon: SiOpenaigym },
  { name: 'GitHub', icon: SiGithub },
  { name: 'React', icon: SiReact }, // Repeat to fill
];

export function Technologies() {
  return (
    <section className="py-20 bg-black/40 border-y border-white/5 overflow-hidden flex flex-col gap-8">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Powered by <span className="text-gradient">Modern Tech Stack</span>
        </h2>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {[...techRow1, ...techRow1].map((tech, index) => (
            <div key={index} className="mx-8 flex items-center gap-3 text-foreground/50 hover:text-cyan-400 transition-colors duration-300">
              <tech.icon className="w-8 h-8" />
              <span className="text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee-reverse whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {[...techRow2, ...techRow2].map((tech, index) => (
            <div key={index} className="mx-8 flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors duration-300">
              <tech.icon className="w-8 h-8" />
              <span className="text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
