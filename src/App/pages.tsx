"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  BarChart3, 
  Database, 
  BrainCircuit, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Send, 
  Linkedin, 
  Mail, 
  Phone,
  ArrowRight,
  ExternalLink,
  Cpu,
  LineChart,
  Layers,
  FileSpreadsheet,
  MonitorDot,
  Github,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LOGO_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/LOGO-removebg-preview-1768410471892.png?width=8000&height=8000&resize=contain";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-primary">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Parcours", href: "#journey" },
    { name: "Compétences", href: "#skills" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Logo" className="w-10 h-10 object-contain" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30 px-4 py-2 font-semibold animate-pulse">
            À la recherche d'un stage ou d'une alternance
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            La passion au service <br />
            <span className="text-primary text-glow">de la data</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Étudiant en licence Professionnelle de Datamining à l'université Gustave Eiffel. 
            Organisé, méthodique et passionné par la transformation des données brutes en insights stratégiques.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="neo-button h-12 px-8 text-lg" asChild>
              <a href="#experience">Voir mon parcours <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
            <Button variant="outline" className="h-12 px-8 text-lg border-white/10 hover:bg-white/5" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <motion.div
              animate={{ 
                rotate: 360,
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "70% 30% 50% 50% / 30% 60% 40% 70%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-600/30 border border-primary/20 backdrop-blur-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img src={LOGO_URL} alt="Hero Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const [showFullText, setShowFullText] = useState(false);
  
  const stats = [
    { label: "Projets Data", value: "15+", icon: Database },
    { label: "Années d'Expérience", value: "3+", icon: BarChart3 },
    { label: "Technologies", value: "10+", icon: BrainCircuit },
  ];

  const shortText = "Ma passion pour la data est née de la volonté de comprendre les mécaniques invisibles qui régissent notre économie. Doté d'un esprit analytique et d'une curiosité insatiable, je me spécialise dans le datamining et l'analyse prédictive.";
  
  const fullText = `Ma passion pour la data est née de la volonté de comprendre les mécaniques invisibles qui régissent notre économie et nos sociétés. Depuis toujours fasciné par les chiffres et leur capacité à raconter des histoires, j'ai orienté mon parcours académique vers l'analyse de données et les mathématiques appliquées.

Mon aventure universitaire a débuté à l'Université Claude Bernard Lyon 1, où j'ai acquis des fondements solides en mathématiques et en économie. Cette double formation m'a permis de développer une vision holistique des enjeux économiques, alliant rigueur mathématique et compréhension des mécanismes macro et microéconomiques.

Poursuivant ma quête d'excellence, j'ai intégré CY Tech en Génie Mathématiques et Informatique. Cette formation d'ingénieur m'a doté de compétences avancées en probabilités, statistiques inférentielles, algorithmique et programmation. J'y ai notamment approfondi les méthodes de simulation et l'analyse numérique.

Aujourd'hui, je finalise une Licence Professionnelle en Datamining à l'Université Gustave Eiffel, où je me spécialise dans les techniques de fouille de données : arbres de décision, clustering, scoring et forêts aléatoires. Je maîtrise également les statistiques multidimensionnelles (ACP, AFC, ACM) et la programmation SAS.

Ce qui me distingue ? Ma capacité à transformer des données brutes en insights stratégiques exploitables. Je suis convaincu que derrière chaque dataset se cache une opportunité d'amélioration, une décision à éclairer, une histoire à raconter.`;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="text-primary">01.</span> À propos
            </h2>
            <div className="text-muted-foreground leading-relaxed">
              {showFullText ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {fullText.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </motion.div>
              ) : (
                <p>{shortText}</p>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFullText(!showFullText)}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              {showFullText ? "Version courte" : "Version complète"}
              <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${showFullText ? "rotate-90" : ""}`} />
            </Button>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mx-auto"
            >
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/57d25caf-2e08-4d98-82a4-fa99cc171135/IMG_0927-removebg-preview-1768481524558.png?width=8000&height=8000&resize=contain"
                  alt="Cephas Allogo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-4 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const academicPath = [
    {
      year: "Depuis 2025",
      title: "Licence Professionnelle Datamining",
      school: "Université Gustave Eiffel",
      desc: "Spécialisation en techniques de minage de données, statistiques multidimensionnelles et programmation SAS/R.",
      notions: [
        "Datamining : Arbres de décision, Clustering, Scoring, Forêts aléatoires",
        "Statistiques multidimensionnelles : ACP, AFC, ACM, Analyse discriminante",
        "Programmation SAS : SAS Base, SAS SQL, Macro-programmation",
        "Langages Data : R & Python pour l'analyse statistique",
        "Bases de données : SQL avancé et gestion de bases Oracle"
      ]
    },
    {
      year: "2022 - 2025",
      title: "Ingénieur Génie Mathématiques et Informatique",
      school: "CY Tech",
      desc: "Base solide en probabilités, simulation, et programmation (C, Python). Statistiques inférentielles.",
      notions: [
        "Probabilités & Statistiques inférentielles (Tests d'hypothèses, Estimations)",
        "Analyse numérique & Méthodes de Monte Carlo",
        "Programmation : Développement en C et Python (POO)",
        "Algorithmique & Structures de données complexes",
        "Optimisation mathématique et recherche opérationnelle"
      ]
    },
    {
      year: "2018 - 2022",
      title: "DEUG Mathématiques et Économie",
      school: "Université Claude Bernard Lyon 1",
      desc: "Fondamentaux en mathématiques, micro/macroéconomie et finance. Introduction à l'informatique C++.",
      notions: [
        "Analyse réelle & Algèbre linéaire",
        "Microéconomie & Macroéconomie approfondies",
        "Mathématiques financières et actuarielles",
        "Introduction à l'informatique et programmation C++",
        "Comptabilité générale et gestion d'entreprise"
      ]
    },
    {
      year: "2018",
      title: "Baccalauréat",
      school: "Obtention",
      desc: "Point de départ de mon parcours scientifique et analytique.",
      notions: [
        "Mathématiques fondamentales",
        "Sciences physiques et chimiques",
        "Méthodologie de recherche scientifique",
        "Raisonnement logique et analytique"
      ]
    }
  ];

  return (
    <section id="journey" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
          <span className="text-primary">02.</span> Parcours Académique
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
          
          <div className="space-y-12">
            {academicPath.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-[15px] md:left-1/2 w-8 h-8 rounded-full border-4 border-background bg-primary -translate-x-1/2 flex items-center justify-center z-10">
                  <GraduationCap className="w-3 h-3 text-white" />
                </div>
                
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-16 pl-12" : "md:pr-16 pl-12"}`}>
                  <motion.div 
                    layout
                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                    className="glass p-6 rounded-2xl hover:border-primary/30 transition-all group cursor-pointer"
                  >
                    <span className="text-primary font-mono text-sm mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.school}</p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">{item.desc}</p>

                    <AnimatePresence>
                      {expandedIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
                            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Notions abordées :</p>
                            {item.notions.map((notion, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                <span>{notion}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-4 flex justify-end">
                      <span className="text-[10px] text-primary/50 uppercase tracking-widest font-bold group-hover:text-primary transition-colors">
                        {expandedIndex === i ? "Réduire" : "Découvrir les notions"}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Langages",
      skills: ["Python", "R", "SQL", "SAS", "VBA", "C", "C++", "JavaScript", "CSS"],
      icon: Code2
    },
    {
      title: "Analyse de Données",
      skills: ["Pandas", "Statistiques", "Datamining", "Dataiku", "Simulation", "Streamlit"],
      icon: LineChart
    },
    {
      title: "Bases de données",
      skills: ["Oracle", "MySQL", "MongoDB"],
      icon: Database
    },
    {
      title: "Business Intelligence",
      skills: ["Power BI", "Excel", "PowerPoint", "Word"],
      icon: BarChart3
    },
    {
      title: "Outils & Frameworks",
      skills: ["GitHub", "Vite", "React"],
      icon: Layers
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
          <span className="text-primary">03.</span> Compétences
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/5 border-white/5 hover:bg-primary/20 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Chargé des données statistiques macroéconomiques",
      company: "Ministère des Finances",
      location: "Libreville, Gabon",
      period: "Mai 2025 - Août 2025",
      missions: [
        "Élaboration et valorisation des comptes économiques du Gabon",
        "Analyse et mise en cohérence des données d'origines diverses",
        "Calcul du PIB, consommation, investissement (cadre comptabilité nationale)",
        "Construction d'outils de prévision adaptés aux exigences internationales"
      ]
    },
    {
      title: "Stagiaire Data Scientist",
      company: "RHOPEN",
      location: "Paris, France",
      period: "Juillet 2024 - Août 2024",
      missions: [
        "Collaboration avec l'équipe de Data Scientists sur des projets réels",
        "Identification de nouvelles sources de données pertinentes",
        "Contribution à la documentation technique",
        "Initiation avancée à l'usage de Dataiku"
      ]
    },
    {
      title: "Stagiaire de Mathématiques",
      company: "Collège les gratte-ciel",
      location: "Villeurbanne, France",
      period: "Janvier 2022 - Mai 2022",
      missions: [
        "Observation et conduite de classe",
        "Support pédagogique pour les élèves",
        "Exercice des activités de conseiller principal d'éducation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
          <span className="text-primary">04.</span> Expériences Professionnelles
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group border-white/5"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%] transition-all group-hover:w-40 group-hover:h-40" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-primary/80 font-medium">{exp.company} • {exp.location}</p>
                </div>
                <Badge variant="outline" className="w-fit h-fit border-primary/30 text-primary">
                  {exp.period}
                </Badge>
              </div>

              <ul className="space-y-3">
                {exp.missions.map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
      {
        title: "Analyse Prédictive de l'Économie",
        category: "Macroéconomie",
        desc: "Développement d'outils de prévision du PIB et des grands agrégats économiques lors de mon stage au Ministère des Finances.",
        fullDesc: "Ce projet a consisté à développer des outils de prévision macroéconomique pour le Ministère des Finances du Gabon. L'objectif principal était de créer des modèles permettant d'estimer le PIB, la consommation et l'investissement en s'appuyant sur les cadres de la comptabilité nationale. J'ai travaillé sur l'élaboration et la valorisation des comptes économiques, en analysant et mettant en cohérence des données d'origines diverses. Les outils développés permettent de construire des prévisions adaptées aux exigences internationales et de fournir des indicateurs fiables pour la prise de décision économique.",
        tech: ["Excel avancé", "VBA", "PowerPoint"],
        icon: LineChart,
        reportUrl: "#",
        githubUrl: "#"
      },
    {
      title: "Dataiku Pipeline Design",
      category: "Ingénierie des Données",
      desc: "Mise en place de flux de données automatisés et nettoyage de datasets massifs chez RHOPEN.",
      fullDesc: "Durant mon stage chez RHOPEN, j'ai collaboré avec l'équipe de Data Scientists sur la mise en place de pipelines de données automatisés. Le projet impliquait le nettoyage et la transformation de datasets volumineux, l'identification de nouvelles sources de données pertinentes, et la création de flux ETL robustes. J'ai utilisé Dataiku pour orchestrer l'ensemble du processus, de l'ingestion des données brutes jusqu'à la production de datasets prêts pour l'analyse. J'ai également contribué à la documentation technique pour assurer la maintenabilité des solutions développées.",
      tech: ["Dataiku", "SQL", "Pandas"],
      icon: Layers,
      reportUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Simulation Mathématique",
      category: "Académique",
      desc: "Projet de simulation d'équations différentielles et modélisation de comportements aléatoires.",
      fullDesc: "Ce projet académique réalisé à CY Tech portait sur la simulation numérique d'équations différentielles et la modélisation de phénomènes stochastiques. J'ai implémenté des méthodes de Monte Carlo pour simuler des comportements aléatoires, ainsi que des algorithmes de résolution numérique (Euler, Runge-Kutta) pour les équations différentielles. Le projet comprenait également une analyse de convergence et une étude de la précision des différentes méthodes. Les résultats ont été visualisés à l'aide de graphiques comparatifs montrant l'évolution des systèmes simulés.",
      tech: ["Python", "NumPy", "C"],
      icon: Cpu,
      reportUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analyse Multidimensionnelle",
      category: "Statistiques",
      desc: "Étude statistique complexe sur des jeux de données réels utilisant des méthodes de clustering et d'ACP.",
      fullDesc: "Ce projet de statistiques multidimensionnelles a été réalisé dans le cadre de ma Licence Professionnelle en Datamining. L'objectif était d'appliquer des techniques avancées d'analyse de données sur des jeux de données réels. J'ai mis en œuvre des méthodes de réduction de dimensionnalité (ACP, AFC, ACM), des algorithmes de clustering (K-means, CAH), et des techniques de scoring. L'analyse a permis d'identifier des patterns cachés dans les données et de segmenter efficacement les observations. Les résultats ont été présentés sous forme de rapports détaillés avec visualisations et interprétations métier.",
      tech: ["R", "SAS", "Statistiques"],
      icon: BarChart3,
      reportUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
          <span className="text-primary">05.</span> Projets & Missions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(i)}
              className="group glass p-1 rounded-[2rem] hover:border-primary/50 transition-all overflow-hidden cursor-pointer"
            >
              <div className="bg-background/40 p-8 rounded-[1.8rem] h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="border-white/10 text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-1 rounded">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="text-center mt-auto">
                  <span className="text-sm text-primary/60 group-hover:text-primary transition-colors">
                    Cliquez pour plus de détails
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {React.createElement(projects[selectedProject].icon, { className: "w-7 h-7 text-primary" })}
                </div>
                <div>
                  <Badge variant="outline" className="border-white/10 text-xs mb-1">
                    {projects[selectedProject].category}
                  </Badge>
                  <h3 className="text-2xl font-bold">{projects[selectedProject].title}</h3>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Description complète</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {projects[selectedProject].fullDesc}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((t) => (
                    <span key={t} className="text-sm font-mono text-primary/70 bg-primary/10 px-3 py-1.5 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full gap-2 border-white/10 hover:bg-white/5 hover:text-primary transition-colors h-12" asChild>
                  <a href={projects[selectedProject].reportUrl} target="_blank" rel="noopener noreferrer">
                    <FileSpreadsheet className="w-5 h-5" /> Rapport
                  </a>
                </Button>
                <Button variant="outline" className="w-full gap-2 border-white/10 hover:bg-white/5 hover:text-primary transition-colors h-12" asChild>
                  <a href={projects[selectedProject].githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skew-y-3 origin-right -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass p-12 rounded-[3rem]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Parlons de vos <br /><span className="text-primary">Données</span>.</h2>
              <p className="text-muted-foreground mb-10">
                Vous avez un projet ou une opportunité d'alternance ? Je suis prêt à relever de nouveaux défis en tant que Data Analyst / Scientist.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium">cephasallogo@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Téléphone</p>
                    <p className="font-medium">07 46 51 08 28</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <a href="https://linkedin.com/in/cephas-akikmane-allogo" target="_blank" className="font-medium hover:text-primary transition-colors">
                      Cephas AKIKMANE ALLOGO
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nom" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                />
              </div>
              <input 
                type="text" 
                placeholder="Sujet" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
              />
              <textarea 
                placeholder="Votre message" 
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors resize-none"
              />
              <Button className="neo-button w-full h-14 text-lg">
                Envoyer le message <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold tracking-tighter">CEPHAS ALLOGO</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Conçu pour l'excellence analytique.
        </p>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
