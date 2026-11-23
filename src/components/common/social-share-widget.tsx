"use client";

import { useState } from "react";
import { Share2, MessageCircle, Send, Globe, Link2, Check, X } from "lucide-react";

export function SocialShareWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareTitle = "ZapGear India - Premium Mobile Accessories, Cases & Fast Chargers";
  const shareText = "Check out ZapGear India for drop-tested cases, 9H tempered glass, and 65W GaN fast chargers! Use code INDIAFIRST for 10% off: ";
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://zapgear.in";

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-[#25D366] text-white hover:bg-[#20bd5a]",
      action: () => {
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + shareUrl)}`,
          "_blank"
        );
      },
    },
    {
      name: "Telegram",
      icon: Send,
      color: "bg-[#229ED9] text-white hover:bg-[#1e8ec3]",
      action: () => {
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
          "_blank"
        );
      },
    },
    {
      name: "X (Twitter)",
      icon: Globe,
      color: "bg-black dark:bg-white dark:text-black text-white hover:opacity-90",
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}&via=ZapGearIndia`,
          "_blank"
        );
      },
    },
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-20 md:bottom-6 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Share store"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
        </button>

        {/* Share Popup Card */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                  Share ZapGear India
                </h4>
                <p className="text-[10px] text-slate-500">Spread the word with friends</p>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                10% Off
              </span>
            </div>

            {/* Social Share Buttons */}
            <div className="grid grid-cols-3 gap-2 my-3">
              {shareOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.name}
                    onClick={opt.action}
                    className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-[11px] font-bold transition shadow-xs ${opt.color}`}
                  >
                    <Icon className="w-4 h-4 mb-1" />
                    <span>{opt.name.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Copy Link Box */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-600 dark:text-slate-300 truncate"
              />
              <button
                onClick={handleCopyLink}
                aria-label="Copy link"
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shrink-0 flex items-center gap-1 transition"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
