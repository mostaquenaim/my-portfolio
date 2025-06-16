import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFilePdf, FaQuoteLeft } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const PublicationSection = () => {
    const publication = {
        title: "Utilizing Kidney Ontology for Data-Driven Exploration of Potential Biomarkers in Kidney Diseases: Introducing the Kidney Diseases Biomarker Ontology (KDBO)",
        authors: "Arjun Kumar Bose Arnob, Mostaque Ahammed Naim, Md Tahmid Rezwan, Mohammad Mahmudul Hasan",
        conference: "ICCA 2024",
        date: "October 2024",
        doi: "10.1145/3723178.3723230",
        abstract: "This study proposes a new method of identifying possible kidney disease biomarkers using Kidney Diseases Biomarker Ontology (KDBO). This study classically merges clinical imaging, biopsy data, proteomics, and genomic data derived from various sources through the Kidney Development Subontology (KDSO) of Gene Ontology (GO). Machine learning algorithms, network analysis, and statistical approaches are used to identify novel biomarkers that have implications for renal impairment at different stages of the disease have been employed here. A comparison between the new upstart markers found and the available right markers was made in patient cohorts to confirm their accuracy. The study showed that employing kidney ontology improves diagnosis, prognosis, and treatment by facilitating earlier identification of dysfunction, precise evaluation of disease severity levels, tailored choice therapy, addressing issues related to renal ontologies, and presenting suggestions for future studies."
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Research Publication
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        My academic contribution in the field of biomedical informatics and ontology engineering.
                    </p>
                </motion.div>

                {/* Publication Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                >
                    <div className="p-8 md:p-10">
                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                            {publication.title}
                        </h2>

                        {/* Authors */}
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-500 mb-2">AUTHORS</h3>
                            <p className="text-gray-700">
                                {publication.authors.split(', ').map((author, index) => (
                                    <span key={index}>
                                        {author.includes('Mostaque Ahammed Naim') ? (
                                            <span className="font-bold text-blue-600">{author}</span>
                                        ) : (
                                            author
                                        )}
                                        {index < publication.authors.split(', ').length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </p>
                        </div>

                        {/* Conference and Date */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 mb-2">PUBLISHED IN</h3>
                                <p className="text-gray-700 font-medium">{publication.conference}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 mb-2">PUBLICATION DATE</h3>
                                <p className="text-gray-700 font-medium">{publication.date}</p>
                            </div>
                        </div>

                        {/* DOI */}
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-gray-500 mb-2">DOI</h3>
                            <div className="flex items-center">
                                <a
                                    href={`https://doi.org/${publication.doi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                                    data-tooltip-id="doi-tooltip"
                                    data-tooltip-content="View publication on publisher's site"
                                >
                                    {publication.doi}
                                    <FaExternalLinkAlt className="ml-2 text-sm" />
                                </a>
                                <Tooltip id="doi-tooltip" />
                            </div>
                        </div>

                        {/* Abstract */}
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-gray-500 mb-2">ABSTRACT</h3>
                            <div className="relative">
                                <FaQuoteLeft className="absolute -top-2 -left-2 text-gray-200 text-2xl" />
                                <p className="text-gray-700 pl-6 italic">{publication.abstract}</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={`https://doi.org/${publication.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center transition-colors"
                            >
                                <FaExternalLinkAlt className="mr-2" />
                                View Publication
                            </a>
                            <a
                                href="https://dl.acm.org/doi/pdf/10.1145/3723178.3723230"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium flex items-center transition-colors"
                            >
                                <FaFilePdf className="mr-2 text-red-500" />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100"
                >
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">About This Research</h3>
                    <p className="text-gray-700">
                        This publication represents cutting-edge work at the intersection of biomedical informatics and machine learning.
                        The Kidney Diseases Biomarker Ontology (KDBO) developed in this research has potential applications in precision
                        medicine and personalized treatment strategies for kidney disease patients.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default PublicationSection;