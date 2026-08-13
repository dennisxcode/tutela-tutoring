"use client";

import Image from "next/image";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function WeChatCta() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(content.footer.wechatId.en);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be denied (insecure context, in-app browsers).
      // The ID is rendered as selectable text below, so this stays recoverable.
    }
  }

  // Used inside the dark FinalCta, so all text is light. Order is deliberate:
  // on a phone the parent cannot scan a QR on the screen they're holding, so
  // the long-press instruction sits directly under the code rather than in the
  // small print at the bottom, and the copyable ID follows it.
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Image
        src="/wechat-qr.png"
        alt={t(content.footer.cta)}
        width={200}
        height={272}
        className="rounded-lg border border-ink/15 bg-white p-2"
      />
      <p className="font-semibold text-white">{t(content.footer.cta)}</p>
      <p className="max-w-xs text-sm leading-relaxed text-white/80">{t(content.footer.qrHelp)}</p>

      <button
        type="button"
        onClick={handleCopy}
        className="mt-1 flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
      >
        <span className="text-white/80">{t(content.footer.wechatIdLabel)}:</span>
        <span className="font-mono font-semibold tracking-wide">{content.footer.wechatId.en}</span>
        {copied ? (
          <Check className="h-4 w-4 text-white" aria-hidden />
        ) : (
          <Copy className="h-4 w-4 text-white/80" aria-hidden />
        )}
        <span className="sr-only">{t(copied ? content.footer.copied : content.footer.copyHint)}</span>
      </button>
      <p aria-live="polite" className="h-4 text-xs text-white/80">
        {copied ? t(content.footer.copied) : ""}
      </p>

      <p className="text-sm text-white/80">
        {t(content.footer.contactLabel)}: {content.footer.contactName}
      </p>
    </div>
  );
}
