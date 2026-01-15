import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Footer from "../components/Footer";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email is too long"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<ContactFormData> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ak.work69@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Open to opportunities",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <main className="min-h-screen pt-24">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="orb orb-purple w-[500px] h-[500px] -top-32 right-0 opacity-25" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 -left-32 opacity-20" />
        <div className="grid-background opacity-10 absolute inset-0" />
      </div>

      {/* Header */}
      <section className="section-container py-20">
        <AnimatedSection>
          <motion.p className="font-body text-sm text-secondary tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Let's Build</span>
            <br />
            <span className="text-foreground">Something Great</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mt-6">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Fill out the form below and I'll get back to you as soon as
            possible.
          </p>
        </AnimatedSection>
      </section>

      {/* Contact Content */}
      <section className="section-container py-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-2xl font-bold mb-6">
                Contact Info
              </h2>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-intense p-6 rounded-xl flex items-center gap-4 hover:glow-purple transition-all duration-300"
                  >
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}
                    >
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-heading text-sm font-medium">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="glass-intense p-8 rounded-2xl">
                <h3 className="font-display text-lg font-bold mb-4">
                  Let's Connect
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Whether you have a project idea, a question, or just want to
                  say hi, my inbox is always open. I'll try my best to get back
                  to you within 24 hours!
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-body text-sm text-green-400">
                    Available for freelance
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.2}>
              <div className="glass-intense rounded-2xl p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold mb-4">
                      Message Sent!
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-8 px-6 py-3 rounded-full glass font-body text-sm"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-body text-sm text-muted-foreground">
                          Name
                        </label>
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          animate={{
                            borderColor:
                              focusedField === "name"
                                ? "hsl(270, 70%, 50%)"
                                : "transparent",
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-muted/50 border-2 font-body text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                            errors.name ? "border-destructive" : ""
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="font-body text-xs text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="font-body text-sm text-muted-foreground">
                          Email
                        </label>
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          animate={{
                            borderColor:
                              focusedField === "email"
                                ? "hsl(270, 70%, 50%)"
                                : "transparent",
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-muted/50 border-2 font-body text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                            errors.email ? "border-destructive" : ""
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="font-body text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="font-body text-sm text-muted-foreground">
                        Subject
                      </label>
                      <motion.input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        animate={{
                          borderColor:
                            focusedField === "subject"
                              ? "hsl(270, 70%, 50%)"
                              : "transparent",
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-muted/50 border-2 font-body text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                          errors.subject ? "border-destructive" : ""
                        }`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="font-body text-xs text-destructive">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="font-body text-sm text-muted-foreground">
                        Message
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        animate={{
                          borderColor:
                            focusedField === "message"
                              ? "hsl(270, 70%, 50%)"
                              : "transparent",
                        }}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl bg-muted/50 border-2 font-body text-foreground placeholder:text-muted-foreground focus:outline-none resize-none transition-all duration-300 ${
                          errors.message ? "border-destructive" : ""
                        }`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <p className="font-body text-xs text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-secondary to-glow-cyan font-body font-medium text-primary-foreground flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
