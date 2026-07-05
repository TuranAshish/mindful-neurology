import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { ScrollAnimations } from "@/components/scroll-animations";
import {
  AdvocacyIcon,
  ArrowRightIcon,
  BrainIcon,
  CheckIcon,
  LocationIcon,
  MailIcon,
  MeditationIcon,
  PhoneIcon,
  ResearchIcon,
  StethoscopeIcon,
} from "@/components/icons";
import { Logo } from "@/components/logo";
import { Testimonials } from "@/components/testimonials";
import { StripeCheckoutButton } from "@/components/stripe-checkout-button";

const services = [
  {
    icon: StethoscopeIcon,
    number: "01",
    title: "Neurology consultation",
    description:
      "Individualized neurological evaluation for people in New York or Connecticut, and for patients who travel to our Monroe, NY office.",
    note: "Clinical care",
  },
  {
    icon: MeditationIcon,
    number: "02",
    title: "Meditation courses",
    description:
      "Structured 6–8 week programs combining guided meditation, brain education, community reflection, and practical exercises.",
    note: "Online & group",
  },
  {
    icon: ResearchIcon,
    number: "03",
    title: "Innovative research",
    description:
      "Research collaborations exploring how mind-body practices may relate to symptoms, neural networks, and measurable clinical outcomes.",
    note: "Evidence-informed",
  },
  {
    icon: AdvocacyIcon,
    number: "04",
    title: "Professional education",
    description:
      "Programs for clinicians and organizations that expand awareness of validated non-pharmacological and lifestyle interventions.",
    note: "For professionals",
  },
];

const approach = [
  ["Understand", "Learn how stress, attention, fatigue, movement, and sensory load can influence the nervous system."],
  ["Practice", "Build repeatable skills through breathwork, meditation, gentle movement, and structured relaxation."],
  ["Observe", "Notice patterns with greater clarity and identify what supports steadier day-to-day function."],
  ["Integrate", "Use practical tools alongside appropriate neurological care, medication, rehabilitation, and daily routines."],
];

const team = [
  {
    name: "Sarah Mulukutla, MD, MPH, FAAN",
    role: "Founder & Neurologist",
    image: "/images/sarah-mulukutla.png",
    bio: "Board-certified neurologist, clinician-scientist, and Yale School of Medicine faculty member focused on integrative neurology and mind-body approaches.",
  },
  {
    name: "Erin Hyland, MS",
    role: "Director of Operations",
    image: "/images/erin-hyland.png",
    bio: "An experienced program leader who builds collaborative systems across healthcare, sustainability, transportation, and complex public initiatives.",
  },
  {
    name: "Kristina Zawaly, PhD",
    role: "Director of Research",
    image: "/images/kristina-zawaly.png",
    bio: "A researcher whose work includes exercise, cognitive health, and the impact of meditation practice on quality of life in Parkinson’s disease.",
  },
];

const partnerLogos = [
  ["/images/yale-school-of-medicine.jpg", "Yale School of Medicine"],
  ["/images/abpn.png", "American Board of Psychiatry and Neurology"],
  ["/images/parkinsons-wellness-project.png", "Parkinson's Wellness Project"],
  ["/images/healing-works-foundation.png", "Healing Works Foundation"],
] as const;

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div data-animate="fade-up" className="max-w-3xl">
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-[#9ed4c7]" : "text-[#0f7466]"}`}>{eyebrow}</p>
      <h2 className={`font-serif text-4xl font-semibold leading-[1.03] tracking-[-0.04em] md:text-6xl ${light ? "text-white" : "text-[#173b38]"}`}>{title}</h2>
      {copy && <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-[#5f7873]"}`}>{copy}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <Header />
      <ScrollAnimations />

      <section className="relative min-h-[860px] overflow-hidden bg-[radial-gradient(circle_at_80%_10%,#d8eee7_0,transparent_38%),linear-gradient(180deg,#f5faf7_0%,#eef5f2_100%)] pt-[78px]">
        <div className="hero-grid absolute inset-0 opacity-35" />
        <div className="motion-orb motion-orb-a absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#b9dfd4]/35 blur-3xl" />
        <div className="motion-orb motion-orb-b absolute -right-20 bottom-0 h-[460px] w-[460px] rounded-full bg-[#d7e7de]/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1240px] gap-14 px-5 pb-20 pt-20 lg:grid-cols-[1.06fr_.94fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-[#bcd3cc] bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#42645f] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#0f7466]" />
              Physician-led integrative neurology
            </div>
            <h1 className="reveal reveal-delay-1 mt-7 max-w-4xl font-serif text-[clamp(3.8rem,8vw,7.2rem)] font-semibold leading-[.88] tracking-[-0.055em] text-[#173b38]">
              Care for the brain. Skills for the whole person.
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-[#54706b] md:text-xl md:leading-9">
              We combine neurological expertise with meditation, breathwork, gentle movement, and sound-based relaxation to help people understand and support their nervous system.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#123e3a] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,62,58,.2)] transition hover:-translate-y-0.5 hover:bg-[#0f7466]">
                Request a consultation <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href="#approach" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b9cec7] bg-white/75 px-7 py-4 text-sm font-semibold text-[#244b46] transition hover:-translate-y-0.5 hover:border-[#0f7466]">
                Explore our approach
              </a>
              <StripeCheckoutButton />
            </div>
            <div data-animate="fade-up" data-animate-delay="4" className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#55706b]">
              <span className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-[#0f7466]" /> Board-certified neurology</span>
              <span className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-[#0f7466]" /> Research-informed programs</span>
              <span className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-[#0f7466]" /> Monroe, New York</span>
            </div>
          </div>

          <div data-animate="zoom-in" data-tilt-card="" className="tilt-card hero-visual relative mx-auto w-full max-w-[570px] lg:justify-self-end">
            <div className="absolute -left-8 top-20 z-20 animate-[float_6s_ease-in-out_infinite] rounded-2xl border border-white/70 bg-white/88 px-4 py-3 shadow-[0_18px_50px_rgba(18,62,58,.16)] backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#77908a]">Clinical + practical</p>
              <p className="mt-1 font-serif text-xl font-semibold text-[#173b38]">Whole-person care</p>
            </div>
            <div className="absolute -right-4 bottom-24 z-20 animate-[float_7s_ease-in-out_infinite] rounded-2xl bg-[#123e3a] px-4 py-3 text-white shadow-[0_18px_50px_rgba(18,62,58,.22)]">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/60">Practice location</p>
              <p className="mt-1 flex items-center gap-2 font-semibold"><LocationIcon className="h-4 w-4" /> Monroe, NY</p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.75rem] border-[10px] border-white/75 bg-[#d6eae4] shadow-[0_35px_100px_rgba(18,62,58,.19)]">
              <Image src="/images/dr-mulukutla-speaking.jpg" alt="Dr. Sarah Mulukutla speaking about brain health" fill priority sizes="(max-width: 1024px) 92vw, 46vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2f2b]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#bfe5da]">Mindful Neurology</p>
                <p className="mt-2 max-w-sm font-serif text-3xl font-semibold leading-tight">Clinical expertise with room to breathe.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-y border-[#d6e4df] bg-white/65 backdrop-blur-md">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-8 px-5 py-7 md:grid-cols-4 lg:px-8">
            {[
              ["2012", "Meditation teaching since"],
              ["6–8 weeks", "Structured online programs"],
              ["NY + CT", "Consultation availability"],
              ["Research", "Objective clinical inquiry"],
            ].map(([value, label], index) => (
              <div key={label} data-animate="fade-up" data-animate-delay={index} className={`px-4 ${index > 0 ? "md:border-l md:border-[#d6e4df]" : ""}`}>
                <p className="font-serif text-3xl font-semibold text-[#173b38]">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[.13em] text-[#718984]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#fbfdfc] py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Our services" title="Neurological care, education, and practical support." copy="Each offering is designed to complement appropriate medical care while helping people develop repeatable tools for awareness, regulation, and well-being." />
            <a data-animate="fade-left" href="#contact" className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-bold text-[#0f7466] transition hover:gap-3 lg:self-auto">
              Find the right starting point <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} data-animate="zoom-in" data-animate-delay={Number(service.number) - 1} data-tilt-card="" className="interactive-card tilt-card group relative overflow-hidden rounded-[2rem] border border-[#dbe7e3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#a9c9c0] hover:shadow-[0_24px_70px_rgba(18,62,58,.09)] md:p-9">
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e7f3ef] text-[#0f7466] transition group-hover:bg-[#123e3a] group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-serif text-2xl text-[#b4c6c1]">{service.number}</span>
                  </div>
                  <p className="mt-10 text-xs font-bold uppercase tracking-[.17em] text-[#72908a]">{service.note}</p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.025em] text-[#173b38]">{service.title}</h3>
                  <p className="mt-4 max-w-xl leading-7 text-[#617a75]">{service.description}</p>
                  <div className="mt-8 h-px bg-[#e3ece9]" />
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#315c56] transition group-hover:gap-3 group-hover:text-[#0f7466]">Learn more <ArrowRightIcon className="h-4 w-4" /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="relative overflow-hidden bg-[#123e3a] py-24 md:py-32">
        <div className="noise absolute inset-0" />
        <div className="absolute right-[-140px] top-[-100px] h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="absolute right-[-70px] top-[-30px] h-[280px] w-[280px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionHeading light eyebrow="Our approach" title="From understanding the nervous system to using skills in everyday life." copy="Mindful Neurology brings together clinical education and guided experience. The goal is not to promise a cure, but to help people build informed, sustainable practices alongside their medical care." />

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {approach.map(([title, text], index) => (
              <article key={title} data-animate="fade-up" data-animate-delay={index} className="approach-card min-h-[310px] bg-[#123e3a] p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl font-semibold text-[#9ed4c7]">0{index + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-[#9ed4c7]" />
                </div>
                <h3 className="mt-16 font-serif text-3xl font-semibold text-white">{title}</h3>
                <p className="mt-4 leading-7 text-white/65">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <div data-animate="fade-right" data-tilt-card="" className="tilt-card relative min-h-[450px] overflow-hidden rounded-[2rem]">
              <Image src="/images/gentle-movement.jpg" alt="A guided gentle movement class in a bright studio" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2f2b]/85 via-[#0d2f2b]/5 to-transparent" />
              <div className="absolute bottom-0 max-w-xl p-7 text-white md:p-10">
                <p className="text-xs font-bold uppercase tracking-[.19em] text-[#bfe5da]">Guided experience</p>
                <h3 className="mt-3 font-serif text-4xl font-semibold">Gentle practices, adapted to individual capacity.</h3>
              </div>
            </div>
            <div data-animate="fade-left" data-tilt-card="" className="interactive-card tilt-card rounded-[2rem] bg-[#e7f3ef] p-7 md:p-10">
              <BrainIcon className="h-12 w-12 text-[#0f7466]" />
              <h3 className="mt-8 font-serif text-4xl font-semibold tracking-[-0.03em] text-[#173b38]">A complement to standard neurological care.</h3>
              <p className="mt-5 leading-8 text-[#55706b]">Programs are educational and experiential. They do not replace diagnosis, medication management, physical therapy, emergency care, or individualized treatment from your healthcare team.</p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-bold text-[#0f7466]">Ask whether a program fits your needs <ArrowRightIcon className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="science" className="bg-[#f3f7f5] py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
            <div className="relative">
              <div data-animate="zoom-in" data-tilt-card="" className="tilt-card relative aspect-square overflow-hidden rounded-[2.5rem] bg-black shadow-[0_30px_90px_rgba(18,62,58,.15)]">
                <Image src="/images/neural-networks.png" alt="Brain neural tracts shown through MRI tractography" fill sizes="(max-width: 1024px) 92vw, 44vw" className="object-cover" />
              </div>
              <div data-animate="fade-left" data-animate-delay="2" className="absolute -bottom-6 -right-3 max-w-[260px] rounded-2xl border border-white/60 bg-white/90 p-5 shadow-[0_18px_50px_rgba(18,62,58,.15)] backdrop-blur md:-right-8">
                <p className="text-xs font-bold uppercase tracking-[.17em] text-[#0f7466]">Neuroplasticity</p>
                <p className="mt-2 font-serif text-xl font-semibold leading-snug text-[#173b38]">The brain can modify its networks in response to learning and experience.</p>
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="The science" title="Education grounded in neurology and shaped by research." copy="Neuroplasticity describes the brain’s ability to adapt its neural networks. Meditation, attention training, movement, rest, and learning are active areas of scientific study." />
              <div className="mt-10 grid gap-4">
                {[
                  ["What is neuroplasticity?", "The brain continuously reorganizes connections as it responds to new information, repeated practice, and changing environments."],
                  ["How might meditation help?", "Meditation can train attention, self-awareness, and the capacity to notice habitual patterns before choosing a different response."],
                  ["Why include movement and relaxation?", "Gentle movement, breath, and structured rest can support body awareness and may help people explore stress-sensitive symptoms."],
                ].map(([title, text], index) => (
                  <div key={title} data-animate="fade-left" data-animate-delay={index} className="rounded-2xl border border-[#d9e6e1] bg-white p-5 md:p-6">
                    <div className="flex gap-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e3f1ec] text-sm font-bold text-[#0f7466]">{index + 1}</span>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-[#173b38]">{title}</h3>
                        <p className="mt-2 leading-7 text-[#617a75]">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 grid gap-5 md:grid-cols-3">
            {[
              ["/images/neurons.jpg", "Neural networks", "Explore how neurons communicate and how learning can shape patterns over time."],
              ["/images/restorative-practice.jpg", "Restorative practice", "Create space for rest, body awareness, and nervous-system downshifting."],
              ["/images/dr-mulukutla-speaking.jpg", "Clinical education", "Connect practical techniques with clear explanations of anatomy and function."],
            ].map(([image, title, text]) => (
              <article key={title} data-animate="zoom-in" data-tilt-card="" className="interactive-card tilt-card group overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(18,62,58,.07)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-3xl font-semibold text-[#173b38]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#617a75]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-[#fbfdfc] py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Our team" title="Clinical rigor, thoughtful research, and human connection." copy="Our team brings together neurology, research, operations, education, and a shared commitment to making mind-body approaches clear and accessible." />
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} data-animate="fade-up" data-animate-delay={index} data-tilt-card="" className="interactive-card tilt-card group rounded-[2rem] border border-[#dbe7e3] bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,62,58,.09)]">
                <div className="flex items-start justify-between">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full bg-[#dcebe6] ring-8 ring-[#eef5f2]">
                    <Image src={member.image} alt={member.name} fill sizes="112px" className="object-cover" />
                  </div>
                  <span className="font-serif text-2xl text-[#b4c6c1]">0{index + 1}</span>
                </div>
                <p className="mt-10 text-xs font-bold uppercase tracking-[.18em] text-[#0f7466]">{member.role}</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#173b38]">{member.name}</h3>
                <p className="mt-5 leading-7 text-[#617a75]">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf3f0] py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <p data-animate="fade-up" className="mb-12 text-xs font-bold uppercase tracking-[.22em] text-[#0f7466]">Patient and participant experiences</p>
          <Testimonials />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <p data-animate="fade-up" className="text-center text-xs font-bold uppercase tracking-[.22em] text-[#718984]">Partners and professional affiliations</p>
          <div className="mt-10 grid items-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerLogos.map(([src, alt]) => (
              <div key={src} data-animate="zoom-in" data-tilt-card="" className="interactive-card tilt-card flex h-28 items-center justify-center rounded-2xl border border-[#e2ebe8] bg-[#fbfdfc] p-5">
                <Image src={src} alt={alt} width={260} height={80} className="max-h-16 w-auto max-w-full object-contain" />
              </div>
            ))}
          </div>
          <p data-animate="fade-up" className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-[#849792]">Affiliations and partner logos are shown for informational purposes and do not necessarily indicate endorsement of every service described on this website.</p>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#f1f7f4] py-24 md:py-32">
        <div className="motion-orb motion-orb-c absolute -left-36 bottom-0 h-[420px] w-[420px] rounded-full bg-[#cfe7df]/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1240px] gap-14 px-5 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <SectionHeading eyebrow="Say hello" title="Tell us what kind of support you are looking for." copy="Use this form to inquire about integrative neurology consultations, meditation support, retreats, professional education, or upcoming events. We typically respond within 1–2 business days." />

            <div className="mt-10 grid gap-4">
              <a data-animate="fade-right" data-animate-delay="1" href="tel:+15168842442" className="flex items-center gap-4 rounded-2xl border border-[#d5e4df] bg-white/70 p-4 transition hover:border-[#0f7466]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e2f1ec] text-[#0f7466]"><PhoneIcon className="h-5 w-5" /></span>
                <span><span className="block text-xs font-bold uppercase tracking-[.16em] text-[#80958f]">Phone</span><span className="mt-1 block font-semibold text-[#173b38]">516-884-2442</span></span>
              </a>
              <div data-animate="fade-right" data-animate-delay="2" className="flex items-center gap-4 rounded-2xl border border-[#d5e4df] bg-white/70 p-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e2f1ec] text-[#0f7466]"><LocationIcon className="h-5 w-5" /></span>
                <span><span className="block text-xs font-bold uppercase tracking-[.16em] text-[#80958f]">Clinic</span><span className="mt-1 block font-semibold text-[#173b38]">Monroe, New York</span></span>
              </div>
              <div data-animate="fade-right" data-animate-delay="3" className="flex items-center gap-4 rounded-2xl border border-[#d5e4df] bg-white/70 p-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e2f1ec] text-[#0f7466]"><MailIcon className="h-5 w-5" /></span>
                <span><span className="block text-xs font-bold uppercase tracking-[.16em] text-[#80958f]">Response time</span><span className="mt-1 block font-semibold text-[#173b38]">Usually within 1–2 business days</span></span>
              </div>
            </div>

            <div data-animate="fade-up" data-animate-delay="4" className="mt-8 rounded-2xl bg-[#fff7e8] p-5 text-sm leading-6 text-[#795f2f]">
              <strong>Medical emergency?</strong> Do not use this form. Call 911 or go to the nearest emergency department.
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-[#0d2f2b] text-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 lg:px-8">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
            <div>
              <Logo />
              <p className="mt-6 max-w-md text-sm leading-7 text-white/60">Integrative neurological care and education designed to support awareness, regulation, resilience, and long-term well-being.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#9ed4c7]">Explore</p>
              <div className="mt-5 grid gap-3 text-sm text-white/70">
                <a href="#services" className="hover:text-white">Services</a>
                <a href="#approach" className="hover:text-white">Our approach</a>
                <a href="#science" className="hover:text-white">Science</a>
                <a href="#team" className="hover:text-white">Our team</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#9ed4c7]">Contact</p>
              <div className="mt-5 grid gap-3 text-sm text-white/70">
                <a href="tel:+15168842442" className="hover:text-white">516-884-2442</a>
                <span>Monroe, New York</span>
                <a href="#contact" className="hover:text-white">Send an inquiry</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-8 text-xs leading-5 text-white/45 md:flex-row md:items-start md:justify-between">
            <p>© {new Date().getFullYear()} Mindful Neurology. All rights reserved.</p>
            <p className="max-w-3xl md:text-right">Information on this website is educational and is not a substitute for professional medical advice, diagnosis, or treatment. Individual results and suitability of programs vary.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
