"use client";

import { useState, type FormEvent } from "react";

const topics = ["Research collaboration", "Responsible disclosure", "Speaking engagement", "Partnership", "General enquiry"];
type Errors = Partial<Record<"name" | "email" | "topic" | "message", string>>;

const field = "w-full border border-white/15 bg-[#08090B] px-4 py-3 text-sm outline-none transition placeholder:text-zinc-600 focus:border-[#E52432]";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) || "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) next.email = "Enter a valid email address.";
    if (!v("topic")) next.topic = "Choose an enquiry type.";
    if (v("message").length < 10) next.message = "Write at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(`VantaRoot enquiry: ${v("topic")}`);
    const body = encodeURIComponent(`Name: ${v("name")}\nEmail: ${v("email")}\nEnquiry: ${v("topic")}\n\n${v("message")}`);
    setOpened(true);
    window.location.href = `mailto:Manuel@vantaroot.com?subject=${subject}&body=${body}`;
  }

  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-[#ff6b75]">{errors[k]}</p>;
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 border border-white/10 bg-white/[0.02] p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold text-zinc-300">Your name</label>
          <input id="name" name="name" autoComplete="name" className={field} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold text-zinc-300">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} {...aria("email")} />
          {err("email")}
        </div>
      </div>
      <div>
        <label htmlFor="topic" className="mb-2 block text-xs font-semibold text-zinc-300">Enquiry type</label>
        <select id="topic" name="topic" defaultValue="" className={field} {...aria("topic")}>
          <option value="" disabled>Select a topic</option>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
        {err("topic")}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold text-zinc-300">Message</label>
        <textarea id="message" name="message" rows={6} className={`${field} resize-y`} {...aria("message")} />
        {err("message")}
      </div>
      <button type="submit" className="bg-[#E52432] px-7 py-4 text-sm font-bold transition-colors hover:bg-[#ff3544] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        PREPARE EMAIL
      </button>
      <p aria-live="polite" className="text-xs leading-5 text-[#969BA5]">
        {opened
          ? "Your email app should now open with the message filled in. Nothing has been sent until you send it there. If it does not open, email Manuel@vantaroot.com directly."
          : "This form does not send to a server. It opens your email app with your message ready to send."}
      </p>
    </form>
  );
}