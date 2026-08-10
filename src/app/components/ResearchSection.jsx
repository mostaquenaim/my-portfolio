import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';

const publication = {
  title:
    'Utilizing Kidney Ontology for Data-Driven Exploration of Potential Biomarkers in Kidney Diseases: Introducing the Kidney Diseases Biomarker Ontology (KDBO)',
  authors: [
    'Arjun Kumar Bose Arnob',
    'Mostaque Ahammed Naim',
    'Md Tahmid Rezwan',
    'Mohammad Mahmudul Hasan',
  ],
  conference: 'ICCA 2024',
  date: 'October 2024',
  doi: '10.1145/3723178.3723230',
  abstract:
    'This study proposes a new method of identifying possible kidney disease biomarkers using the Kidney Diseases Biomarker Ontology (KDBO), merging clinical imaging, biopsy data, proteomics and genomic data through the Kidney Development Subontology (KDSO) of Gene Ontology (GO). Machine learning, network analysis and statistical approaches are used to identify novel biomarkers with implications for renal impairment at different disease stages, validated against existing markers across patient cohorts.',
};

const researchProject = {
  title: 'CNN-LSTM Based DDoS Detection',
  tag: 'Research Project',
  description:
    'Applied a hybrid CNN-LSTM deep learning architecture to detect Distributed Denial-of-Service (DDoS) attacks from network traffic, combining convolutional feature extraction with sequential pattern modeling for improved detection accuracy.',
  tags: ['Deep Learning', 'CNN', 'LSTM', 'Network Security'],
};

export default function ResearchSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-mono text-accent text-sm mb-2">04. Research</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Research</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-surface border border-border rounded-xl p-6 md:p-8 mb-8"
      >
        <p className="text-xs font-mono uppercase tracking-wider text-accent mb-3">
          Undergraduate Thesis &middot; Published
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug mb-4">
          {publication.title}
        </h3>

        <p className="text-sm text-muted mb-6">
          {publication.authors.map((author, i) => (
            <span key={author}>
              <span className={author === 'Mostaque Ahammed Naim' ? 'text-accent font-medium' : ''}>
                {author}
              </span>
              {i < publication.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-3 mb-6 text-sm">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted mb-1">Published in</p>
            <p className="text-foreground">{publication.conference}</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted mb-1">Date</p>
            <p className="text-foreground">{publication.date}</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted mb-1">DOI</p>
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-strong transition-colors"
            >
              {publication.doi}
            </a>
          </div>
        </div>

        <p className="text-sm text-muted leading-relaxed border-l-2 border-border pl-4 mb-8">
          {publication.abstract}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background rounded-md text-sm font-semibold hover:bg-accent-strong transition-colors"
          >
            <FaExternalLinkAlt size={12} />
            View Publication
          </a>
          <a
            href="https://dl.acm.org/doi/pdf/10.1145/3723178.3723230"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-md text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            <FaFilePdf size={13} />
            Download PDF
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-surface border border-border rounded-xl p-6 md:p-8"
      >
        <p className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
          {researchProject.tag}
        </p>
        <h3 className="text-lg font-semibold text-foreground mb-3">{researchProject.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-5">{researchProject.description}</p>
        <div className="flex flex-wrap gap-2">
          {researchProject.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-background border border-border rounded-md text-xs font-mono text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
