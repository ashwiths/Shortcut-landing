/**
 * Application Configuration
 *
 * REPLACE THIS WITH YOUR REAL HOSTED INSTALLER URL:
 * e.g., "https://your-domain.com/downloads/ChromeAccountSwitcherSetup.exe"
 * or an Amazon S3 / GitHub Releases direct download URL.
 */
export const DOWNLOAD_URL = "https://example.com/downloads/ChromeAccountSwitcherSetup.exe";

/**
 * Product metadata
 */
export const APP_CONFIG = {
  name: "Chrome Account Switcher",
  version: "1.0.0",
  os: "Windows 10 & 11",
  fileSize: "Lightweight (~4 MB)",
  releaseDate: "2026",
  supportEmail: "support@chromeaccountswitcher.com",
};

/**
 * Centralized download trigger helper
 */
export function handleDownload(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  // Trigger download link directly
  const link = document.createElement("a");
  link.href = DOWNLOAD_URL;
  link.setAttribute("download", "ChromeAccountSwitcher.zip");
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
