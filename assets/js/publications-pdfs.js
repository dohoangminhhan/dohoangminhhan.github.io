/* Enable PDF icons only after the corresponding PDF is published on GitHub Pages. */
(() => {
  const pdfByIndex = {
    J02: "./assets/papers/swipt-af-noma-imperfect-sic.pdf",
    J03: "./assets/papers/secrecy-eh-backscatter-long-short-packets.pdf",
    C01: "./assets/papers/joint-snr-eh-lora-diversity.pdf",
    M01: "./assets/papers/backscatter-copyright-protected-iot-manuscript.pdf"
  };

  async function enablePdf(card) {
    const index = card.querySelector(".pub-index")?.textContent?.trim();
    const url = pdfByIndex[index];
    const inactive = card.querySelector('.pub-actions span.pub-action.muted[role="link"]');
    if (!url || !inactive) return;

    try {
      const response = await fetch(url, { method: "HEAD", cache: "no-store" });
      const contentType = (response.headers.get("content-type") || "").toLowerCase();
      if (!response.ok || !contentType.includes("pdf")) return;

      const title = card.querySelector(".pub-title")?.textContent?.trim() || index;
      const link = document.createElement("a");
      link.className = "pub-action";
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";
      link.title = "Open full-text PDF";
      link.setAttribute("aria-label", "Open PDF: " + title);
      link.innerHTML = inactive.innerHTML;
      inactive.replaceWith(link);
    } catch {
      // Leave the PDF button disabled if a public file cannot be confirmed.
    }
  }

  function init() {
    document.querySelectorAll(".pub-card").forEach(enablePdf);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
