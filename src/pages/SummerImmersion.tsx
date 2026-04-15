import Layout from "@/components/Layout";

const SummerImmersion = () => {
    return (
        <Layout>
            <section className="bg-navy section-padding pt-24 md:pt-32">
                <div className="container-astra">
                    <h1 className="font-heading text-3xl md:text-4xl text-cream font-semibold mb-10">
                        Summer Mathematical Immersion
                    </h1>
                    <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-2xl text-left">
                        <p className="text-cream/70">
                            The Summer Mathematical Immersion is a six-week guided introduction to the Astra learning model.
                        </p>
                        <p className="text-cream/70">
                            The program allows students to experience deep mathematical thinking through the Math Circle format. Over six weeks, students engage with carefully chosen problems, participate in structured discussions, and develop habits of reasoning that form the foundation of the Astra curriculum.
                        </p>
                        <p className="text-cream/70">
                            The immersion serves both as a standalone intellectual experience and as a pathway into the year-long Astra circles.
                        </p>
                    </div>
                </div>
            </section>

            <div className="gold-divider" />


            {/* Who Should Attend */}
            <section className="light-section bg-cream section-padding">
                <div className="container-astra">
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                        Who Should Attend
                    </h2>
                    <div className="space-y-4 text-foreground/70 text-sm md:text-base leading-relaxed max-w-2xl">
                        <p>
                            The Summer Immersion is suitable for students in Grades 5 to 9 who are curious about mathematics and willing to engage with unfamiliar problems.
                        </p>
                        <p>Prior Olympiad experience is not required.</p>
                        <p>
                            Students should be comfortable thinking independently and discussing ideas in a small group environment.
                        </p>
                    </div>
                </div>
            </section>

            <div className="gold-divider" />

            {/* Program Outcomes */}
            <section className="bg-navy section-padding">
                <div className="container-astra">
                    <h2 className="font-heading text-3xl md:text-4xl text-cream mb-8 md:mb-12">
                        Program Outcomes
                    </h2>
                    <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl">
                        <p>By the end of the immersion, students typically develop:</p>
                        <ul className="space-y-3 py-2">
                            {[
                                "Greater confidence in tackling unfamiliar problems",
                                "Stronger reasoning and explanation skills",
                                "Comfort with mathematical discussion",
                                "Exposure to several areas of advanced problem solving",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="text-gold mt-1.5 text-xs">●</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">
                            For students who wish to continue, the immersion also provides a pathway into the year-long Astra Math Circle program.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SummerImmersion;
