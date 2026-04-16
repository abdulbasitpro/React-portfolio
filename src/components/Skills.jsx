import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  GitBranch,
  Wrench,
  Brain,
  MessageSquare,
  Users,
  Clock,
  Zap,
  CheckCircle2,
  Lightbulb,
  LayoutGrid,
  Layers,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: 'easeOut' }
  })
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: LayoutGrid,
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Sass', 'Tailwind CSS', 'Vite']
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware Design', 'MVC Architecture']
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    skills: ['MongoDB', 'Mongoose', 'MongoDB Atlas', 'NoSQL Design', 'Aggregation Pipeline']
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: Wrench,
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'npm / yarn', 'Vercel', 'Figma Basics']
  }
];

const softSkills = [
  { icon: Brain,          label: 'Problem Solving',   note: 'Structured analytical thinking' },
  { icon: MessageSquare,  label: 'Communication',      note: 'Clear, concise, async-first' },
  { icon: Users,          label: 'Collaboration',      note: 'Cross-functional team player' },
  { icon: Clock,          label: 'Time Management',    note: 'Deadline-driven & organised' },
  { icon: Zap,            label: 'Adaptability',       note: 'Fast learner, tech-agnostic' },
  { icon: Lightbulb,      label: 'Critical Thinking',  note: 'Data-informed decisions' }
];

const stats = [
  { value: '18+', label: 'Technologies', icon: Layers },
  { value: '1.5',  label: 'Years Building', icon: Code2 },
  { value: '10+', label: 'Projects Shipped', icon: Globe }
];

/* ─── Sub-components ────────────────────────────────────────────────────── */

const Tag = ({ label }) => (
  <span className="skill-tag">
    <CheckCircle2 size={12} className="skill-tag-icon" />
    {label}
  </span>
);

const CategoryCard = ({ cat, index }) => {
  const Icon = cat.icon;
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="skill-category-card"
    >
      <div className="skill-category-header">
        <span className="skill-category-icon-wrap">
          <Icon size={18} />
        </span>
        <h4 className="skill-category-title">{cat.label}</h4>
        <span className="skill-category-count">{cat.skills.length}</span>
      </div>
      <div className="skill-tag-grid">
        {cat.skills.map(s => <Tag key={s} label={s} />)}
      </div>
    </motion.div>
  );
};

const SoftSkillCard = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="soft-skill-card"
    >
      <span className="soft-skill-icon-wrap">
        <Icon size={20} />
      </span>
      <div>
        <p className="soft-skill-label">{item.label}</p>
        <p className="soft-skill-note">{item.note}</p>
      </div>
    </motion.div>
  );
};

/* ─── Main Component ────────────────────────────────────────────────────── */

const Skills = () => (
  <>
    <style>{`
      /* ── Section shell ── */
      #skills {
        padding: 80px 0 100px;
        background: var(--bg-section, #f8fafc);
        position: relative;
        overflow: hidden;
      }
      .dark #skills {
        background: #0f1117;
      }

      /* subtle grid texture */
      #skills::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(99,102,241,.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,.04) 1px, transparent 1px);
        background-size: 40px 40px;
        pointer-events: none;
      }

      /* ── Container ── */
      .skills-container {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 24px;
        position: relative;
        z-index: 1;
      }

      /* ── Section header ── */
      .skills-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .08em;
        text-transform: uppercase;
        color: #6366f1;
        background: rgba(99,102,241,.1);
        border: 1px solid rgba(99,102,241,.2);
        border-radius: 999px;
        padding: 4px 14px;
        margin-bottom: 20px;
      }
      .skills-heading {
        font-size: clamp(2rem, 4vw, 2.75rem);
        font-weight: 800;
        line-height: 1.15;
        color: #0f172a;
        letter-spacing: -.02em;
        margin-bottom: 14px;
      }
      .dark .skills-heading { color: #f1f5f9; }

      .skills-sub {
        font-size: 1.05rem;
        color: #64748b;
        max-width: 520px;
        margin: 0 auto;
        line-height: 1.7;
      }
      .dark .skills-sub { color: #94a3b8; }

      /* ── Stats row ── */
      .stats-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin: 52px 0;
      }
      @media (max-width: 600px) { .stats-row { grid-template-columns: 1fr; } }

      .stat-card {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px 24px;
        background: #fff;
         border: 1px solid #e2e8f0;
        border-radius: 14px;
        box-shadow: 0 1px 3px rgba(0,0,0,.06);
        
      }
      .dark .stat-card {
        background: #1a1f2e;
        border-color: #1e2740;
      }
      .stat-icon-wrap {
        width: 44px; height: 44px;
        border-radius: 12px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        display: flex; align-items: center; justify-content: center;
        color: #fff;
        flex-shrink: 0;
      }
      .stat-value {
        font-size: 1.6rem;
        font-weight: 800;
        color: #0f172a;
        line-height: 1;
      }
      .dark .stat-value { color: #f1f5f9; }
      .stat-label {
        font-size: .8rem;
        color: #94a3b8;
        margin-top: 2px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: .05em;
      }

      /* ── Section sub-headings ── */
      .section-sub-heading {
        font-size: 1.35rem;
        font-weight: 700;
        color: #0f172a;
        letter-spacing: -.01em;
        margin-bottom: 24px;
        
      }
      .dark .section-sub-heading { color: #f1f5f9; }

      /* ── Category cards grid ── */
      .category-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 64px;
      }

      .skill-category-card {
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 1px 3px rgba(0,0,0,.05);
        transition: box-shadow .25s, transform .25s;
      }
      .skill-category-card:hover {
        box-shadow: 0 8px 32px rgba(99,102,241,.12);
        transform: translateY(-3px);
      }
      .dark .skill-category-card {
        background: #1a1f2e;
        border-color: #1e2740;
      }

      .skill-category-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 18px;
      }
      .skill-category-icon-wrap {
        width: 36px; height: 36px;
        border-radius: 10px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        display: flex; align-items: center; justify-content: center;
        color: #fff;
        flex-shrink: 0;
      }
      .skill-category-title {
        font-size: 1rem;
        font-weight: 700;
        color: #0f172a;
        flex: 1;
      }
      .dark .skill-category-title { color: #f1f5f9; }
      .skill-category-count {
        font-size: .75rem;
        font-weight: 600;
        color: #6366f1;
        background: rgba(99,102,241,.1);
        border-radius: 999px;
        padding: 2px 8px;
      }

      /* ── Skill tags ── */
      .skill-tag-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .skill-tag {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: .78rem;
        font-weight: 500;
        color: #475569;
        background: #f1f5f9;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 4px 10px;
        cursor:pointer;
      }
      .skill-tag:hover {
        background: rgba(99,102,241,.08);
        color: #6366f1;
      }
      .dark .skill-tag {
        background: #0f1117;
        border-color: #1e2740;
        color: #94a3b8;
      }
      .dark .skill-tag:hover {
        background: rgba(99,102,241,.12);
        color: #818cf8;
      }
      .skill-tag-icon { color: #6366f1; flex-shrink: 0; }

      /* ── Soft skills ── */
      .soft-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;
      }
      .soft-skill-card {
        display: flex;
        align-items: flex-start;
        gap: 14px;
        padding: 18px 20px;
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
      }
      .dark .soft-skill-card {
        background: #1a1f2e;
        border-color: #1e2740;
      }
      .soft-skill-icon-wrap {
        width: 40px; height: 40px;
        border-radius: 10px;
        background: rgba(99,102,241,.1);
        display: flex; align-items: center; justify-content: center;
        color: #6366f1;
        flex-shrink: 0;
      }
      .soft-skill-label {
        font-size: .95rem;
        font-weight: 700;
        color: #0f172a;
        line-height: 1;
        margin-bottom: 4px;
      }
      .dark .soft-skill-label { color: #f1f5f9; }
      .soft-skill-note {
        font-size: .8rem;
        color: #94a3b8;
      }

      /* ── Divider ── */
      .skills-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
        margin: 52px 0;
      }
      .dark .skills-divider {
        background: linear-gradient(90deg, transparent, #1e2740, transparent);
      }
    `}</style>

    <section id="skills">
      <div className="skills-container">

        {/* ── Header ── */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="skills-eyebrow">
            <Code2 size={12} />
            Technical Skills
          </div>
          <h2 className="skills-heading">Built to Ship. Wired to Learn.</h2>
          <p className="skills-sub">
            A curated stack of technologies I use to design, build, and ship
            production-ready products — from UI to API.
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          className="stats-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} className="stat-card" variants={fadeUp} custom={i}>
                <div className="stat-icon-wrap"><Icon size={20} /></div>
                <div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Tech Stack ── */}
        <h3 className="section-sub-heading">Technical Stack</h3>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        <div className="skills-divider" />

        {/* ── Soft Skills ── */}
        <h3 className="section-sub-heading">Professional Qualities</h3>
        <div className="soft-grid">
          {softSkills.map((item, i) => (
            <SoftSkillCard key={item.label} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  </>
);

export default Skills;