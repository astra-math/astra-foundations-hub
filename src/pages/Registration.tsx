import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const preferredWorkshopSlots = [
  "18–19 April 2026 | Grades 5–6 | 1:00 PM IST | 7:30 AM GMT",
  "18–19 April 2026 | Grades 7–8 | 3:00 PM IST | 9:30 AM GMT",
  "25–26 April 2026 | Grades 5–6 | 1:00 PM IST | 7:30 AM GMT",
  "25–26 April 2026 | Grades 7–8 | 3:00 PM IST | 9:30 AM GMT",
  "2–3 May 2026 | Grades 5–6 | 1:00 PM IST | 7:30 AM GMT",
  "2–3 May 2026 | Grades 7–8 | 3:00 PM IST | 9:30 AM GMT"
];

const Registration = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    navigate("/workshops");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const goal = formData.get("Goal") as string;

    if (!goal || goal.trim() === "") {
      toast.error("Please tell us what you're hoping your child gains from this experience (Question 9).");
      return;
    }

    setIsSubmitting(true);

    try {
      // Form successfully integrated with Google Sheets
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzM6yLjXwF6cJuPsYx_9m01VT4vMfes204OE2ng2mSKu7c5vaPTC1nkCBejsif2RyOSdA/exec";

      // We use no-cors to avoid strict browser blocking from Google's redirect
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      toast.error("Failed to submit. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout hideCTA>
      <section className="light-section bg-cream section-padding pt-24 md:pt-32 min-h-screen flex items-center justify-center">
        <div className="container-astra max-w-4xl mx-auto w-full">
          <div className="bg-white border border-gold/20 p-6 md:p-12 rounded-lg shadow-sm relative text-left">
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Close form"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            {isSubmitted ? (
              <div className="py-12 md:py-20 text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 text-gold mb-6 border border-gold/30">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-semibold mb-6">
                  Thank You for Your Interest
                </h2>
                <div className="text-foreground/80 text-lg space-y-4 max-w-2xl mx-auto">
                  <p>Your seat is tentatively reserved.</p>
                  <p>You will receive session details on WhatsApp and email closer to the session date.</p>
                  <p className="font-medium text-gold">Please ensure your child attends both sessions for the full experience.</p>
                </div>
                <div className="mt-12">
                  <Button variant="gold" size="lg" onClick={handleClose}>
                    Return to Programs
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-semibold mb-8">
                  Astra Math Circle- Discovery Sessions
                </h2>

                <div className="mb-12 space-y-8 text-foreground/80 text-base leading-relaxed border-b border-gold/20 pb-10">
                  <div>
                    <p className="mb-4">
                      Astra Math Circle discovery sessions are designed for students who find school math easy and are ready for something deeper. Small groups. Live sessions. Real mathematical thinking.
                    </p>
                    <p className="mb-4">
                      Each session is mentor-led and discussion-based. Students explore one mathematical idea in depth, from first principles to unexpected results, and learn to reason through problems they have never seen before.
                    </p>
                    <p className="mb-4">
                      Students who build this foundation naturally become capable of solving advanced problems and participating in competitions such as AMC, UKMT, IOQM, SASMO, and the Australian Mathematics Competition. However, this is a consequence of how the program is designed, not its stated goal.
                    </p>
                    <p>
                      Students who wish to go further can continue into the Astra Summer Mathematical Immersion, a structured six-week program with small mentor-led cohorts, beginning in April and May.
                    </p>
                  </div>

                  <div className="mb-8 font-inter">
                    <h4 className="font-heading text-xl font-semibold mb-3 text-gold">Format</h4>
                    <div className="space-y-4">
                      <p>Two live sessions over one weekend (60–75 minutes each).</p>
                      <p>Each session is a complete mathematical experience in itself.</p>
                      <ul className="space-y-2">
                        <li className="flex gap-2"><span className="text-gold mt-1 text-sm">●</span><span><strong>Session 1:</strong> A mathematical idea explored in depth, from first principles to unexpected results.</span></li>
                        <li className="flex gap-2"><span className="text-gold mt-1 text-sm">●</span><span><strong>Session 2:</strong> A different idea, approached in the same way - deep exploration, discussion, and reasoning through unfamiliar problems.</span></li>
                      </ul>
                      <p className="text-foreground/90">Attending both sessions is strongly recommended.</p>
                      <p className="text-foreground/90">Families who have attended often find that the second session is where the Astra approach truly becomes clear.</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-heading text-xl font-semibold mb-3 text-gold">Schedule</h4>
                    <div className="space-y-4">
                      <p>Workshops are conducted across multiple weekends.</p>
                      <p>You can select your preferred date and time slot in the registration form.</p>
                      <p>Sessions are available for:</p>
                      <ul className="space-y-2 text-sm md:text-base">
                        <li className="flex gap-3"><span className="text-gold mt-1 text-xs">●</span><span>Grades 5-6 (based on most recently completed / currently completing grade)</span></li>
                        <li className="flex gap-3"><span className="text-gold mt-1 text-xs">●</span><span>Grades 7-8 (based on most recently completed / currently completing grade)</span></li>
                      </ul>
                      <p>All sessions are conducted live online.</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-heading text-xl font-semibold mb-3 text-gold">About Astra Math Circle</h4>
                    <p className="mb-3">
                      Astra Math Circle is built on the global math circle tradition, where students learn mathematics through problems, discussion, and structured reasoning.
                    </p>
                    <p className="mb-3">We focus on:</p>
                    <ul className="space-y-2 text-sm md:text-base mb-3">
                      <li className="flex gap-3"><span className="text-gold mt-1 text-xs">●</span><span>small mentor-led cohorts</span></li>
                      <li className="flex gap-3"><span className="text-gold mt-1 text-xs">●</span><span>problems before explanations</span></li>
                      <li className="flex gap-3"><span className="text-gold mt-1 text-xs">●</span><span>sustained engagement with non-routine ideas</span></li>
                    </ul>
                    <p>
                      This builds mathematical confidence and prepares students naturally for advanced problem-solving and competitions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-heading text-xl font-semibold mb-3 text-gold">Questions</h4>
                    <div className="space-y-3">
                      <p className="flex items-center gap-3"><span className="text-xl">💬</span><span>WhatsApp: +91 72042 48989</span></p>
                      <p className="flex items-center gap-3"><span className="text-xl">✉</span><span>support@astramathcircle.com</span></p>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/70 text-base mb-8">
                  These sessions are designed for students who are comfortable with school math and willing to attempt unfamiliar problems.
                </p>
                <form className="space-y-6 text-left max-w-2xl" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-navy/70 text-base mb-1.5 font-heading">1. Student Name</label>
                    <input
                      type="text"
                      name="Student Name"
                      required
                      className="w-full border border-gold/30 bg-white rounded px-4 py-3 text-navy text-base focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-navy/70 text-base mb-1.5 font-heading">2. Student Grade (most recently completed or currently completing)</label>
                    <p className="text-sm text-foreground/60 mb-2">Please select the grade your child has most recently completed, or is currently completing. Example: If your child is finishing Grade 6 (or has just finished Grade 6) and will move to Grade 7, select Grade 6.</p>
                    <select
                      name="Grade"
                      required
                      className="w-full border border-gold/30 bg-white rounded px-3 py-3 text-navy text-base focus:outline-none focus:border-gold"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a grade...</option>
                      <option value="Grade 4 or below">Grade 4 or below</option>
                      {[5, 6, 7, 8, 9].map((grade) => (
                        <option key={grade} value={`Grade ${grade}`}>Grade {grade}</option>
                      ))}
                      <option value="Grade 10 and above">Grade 10 and above</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-navy/70 text-base mb-1.5 font-heading">3. School Name</label>
                    <input
                      type="text"
                      name="School Name"
                      required
                      className="w-full border border-gold/30 bg-white rounded px-4 py-3 text-navy text-base focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-navy/70 text-base mb-1.5 font-heading">4. Parent / Guardian Name</label>
                    <input
                      type="text"
                      name="Parent Name"
                      required
                      className="w-full border border-gold/30 bg-white rounded px-4 py-3 text-navy text-base focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-navy/70 text-base mb-1.5 font-heading">5. City of Residence</label>
                    <input
                      type="text"
                      name="City"
                      required
                      className="w-full border border-gold/30 bg-white rounded px-4 py-3 text-navy text-base focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-navy/70 text-base mb-1.5 font-heading">6. WhatsApp Number</label>
                    <input
                      type="tel"
                      name="Phone"
                      required
                      className="w-full border border-gold/30 bg-white rounded px-4 py-3 text-navy text-base focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-navy/70 text-base mb-1.5 font-heading">7. Email Address</label>
                    <input
                      type="email"
                      name="Email"
                      required
                      className="w-full border border-gold/30 bg-white rounded px-4 py-3 text-navy text-base focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-navy/70 text-base mb-1.5 font-heading">8. Preferred Workshop Slot (choose one)</label>
                    <p className="text-sm text-foreground/60 mb-2">Each slot includes both Saturday and Sunday sessions. Seats are limited to small groups.</p>
                    <p className="text-sm text-foreground/60 mb-2">Please select a slot aligned with your child’s most recently completed (or currently completing) grade.</p>
                    <select
                      name="Preferred Workshop Slot"
                      required
                      className="w-full border border-gold/30 bg-white rounded px-3 py-3 text-navy text-base focus:outline-none focus:border-gold"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a slot...</option>
                      {preferredWorkshopSlots.map((slot, i) => (
                        <option key={i} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-navy/70 text-base mb-1.5 font-heading">
                      9. What are you hoping your child gains from this experience?
                    </label>
                    <textarea
                      name="Goal"
                      rows={3}
                      required
                      className="w-full border border-gold/30 bg-white rounded px-4 py-3 text-navy text-base focus:outline-none focus:border-gold resize-none"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6">
                    <Button variant="outline-gold" size="lg" type="button" onClick={handleClose} className="w-full" disabled={isSubmitting}>
                      Cancel
                    </Button>
                    <Button variant="gold" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Registration;
