import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const fieldClass =
  "border-white/15 bg-white/[0.04] text-white placeholder:text-slate-500 focus-visible:ring-accent";

export default function ContactSection() {
  return (
    <section id="contact" className="section-shine py-16 md:py-20">
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Support</span>
          <h2 className="section-heading mt-5">Contact Us</h2>
          <p className="section-subheading mt-4">
            Get in touch with our investment experts
          </p>
          <div className="gold-rule mt-6" />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-white">Get in Touch</h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Ready to start your real estate investment journey? Our team is here to
                guide you through every step. Contact us today for a free consultation.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Phone, title: "Phone", body: "+91 9294553783" },
                { icon: Mail, title: "Email", body: "info@minilands.in" },
                {
                  icon: MapPin,
                  title: "Address",
                  body: "401, Heritage Building, 582, MG Road, Opposite Hukumchand Ghanta Ghar, New Palasia, Indore, Madhya Pradesh, 452001, India",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  body: "10:00 AM – 7:00 PM (Monday – Saturday)",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="glass-panel flex items-start gap-4 p-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{title}</h4>
                    <p className="text-sm leading-relaxed text-slate-300">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 shadow-panel">
            <h3 className="mb-6 text-2xl font-semibold text-white">Send us a Message</h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-300">
                    First Name
                  </label>
                  <Input id="firstName" type="text" placeholder="Enter your first name" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-300">
                    Last Name
                  </label>
                  <Input id="lastName" type="text" placeholder="Enter your last name" className={fieldClass} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email address" className={fieldClass} />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" className={fieldClass} />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="What's this about?" className={fieldClass} />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us more about your investment goals..."
                  className={fieldClass}
                />
              </div>

              <Button className="shine-button w-full py-3">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
