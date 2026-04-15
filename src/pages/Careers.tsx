import Layout from "@/components/Layout";

const Careers = () => {
    return (
        <Layout>
            {/* 1. Hero Section */}
            <section className="bg-navy section-padding pt-24 md:pt-32">
                <div className="container-astra">
                    <h1 className="font-heading text-3xl md:text-4xl text-cream font-semibold mb-6">
                        Careers at Astra Math Circle
                    </h1>
                    <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl text-left">
                        <p>
                            If you care deeply about how students learn to think about mathematics, Astra may be a place where your work matters.
                        </p>
                        <p className="text-cream/70 mt-4">
                            Astra Math Circle is building a community of mentors who care deeply about mathematics and about how young students learn to think.
                        </p>
                    </div>
                </div>
            </section>

            <div className="gold-divider" />

            {/* 4. Roles at Astra */}
            <section className="light-section bg-cream section-padding">
                <div className="container-astra">
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
                        Roles at Astra
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-5xl">
                        {/* Math Circle Mentor */}
                        <div className="p-8 bg-white border border-gold/20 rounded-lg shadow-sm flex flex-col h-full">
                            <h3 className="font-heading text-2xl text-foreground font-semibold mb-4">Math Circle Mentor</h3>
                            <div className="text-foreground/70 text-sm md:text-base leading-relaxed flex-grow">
                                <p className="mb-4">
                                    Mentors guide small circles of students through structured problem-solving sessions.
                                </p>
                                <p className="mb-3">Responsibilities include:</p>
                                <ul className="space-y-3 py-1">
                                    {[
                                        "leading Math Circle discussions",
                                        "encouraging student participation",
                                        "helping formalize mathematical insights",
                                        "providing feedback to the academic team",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-gold mt-1.5 text-xs">●</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Problem Design and Curriculum */}
                        <div className="p-8 bg-white border border-gold/20 rounded-lg shadow-sm flex flex-col h-full">
                            <h3 className="font-heading text-2xl text-foreground font-semibold mb-4">Problem Design and Curriculum</h3>
                            <div className="text-foreground/70 text-sm md:text-base leading-relaxed flex-grow">
                                <p className="mb-4">
                                    Astra also collaborates with individuals interested in designing mathematical problems and curriculum.
                                </p>
                                <p className="mb-3">This work involves:</p>
                                <ul className="space-y-3 py-1">
                                    {[
                                        "developing exploratory problem sets",
                                        "adapting classical Olympiad problems for discussion-based learning",
                                        "designing session structures and mentor notes",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-gold mt-1.5 text-xs">●</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="gold-divider" />

            {/* 8. Apply Section */}
            <section className="bg-navy section-padding">
                <div className="container-astra">
                    <h2 className="font-heading text-3xl md:text-4xl text-cream mb-8">
                        Apply
                    </h2>
                    <div className="space-y-6 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl">
                        <p>
                            If you are interested in mentoring or contributing to Astra's academic work, please write to:
                        </p>
                        <a
                            href="mailto:support@astramathcircle.com"
                            className="inline-block text-xl font-heading text-gold hover:text-gold/80 transition-colors font-semibold"
                        >
                            support@astramathcircle.com
                        </a>
                        <p>
                            Include a brief introduction about your background, your interest in mathematics, and any experience working with students.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Careers;
