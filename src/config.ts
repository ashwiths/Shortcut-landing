/**
 * Application Configuration
 *
 * Standalone Windows Installer Setup Executable
 */
export const DOWNLOAD_FILENAME = "ChromeAccountSwitcherSetup.exe";
export const DOWNLOAD_URL = "/ChromeAccountSwitcherSetup.exe";

/**
 * Product metadata
 */
export const APP_CONFIG = {
  name: "Chrome Account Switcher",
  version: "1.0.0",
  os: "Windows 10 & 11",
  fileName: DOWNLOAD_FILENAME,
  fileSize: "Installer (~182 MB)",
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
  link.setAttribute("download", DOWNLOAD_FILENAME);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Smoothly scrolls to the Download section and centers the download card in view
 */
export function scrollToDownload(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }
  const el = document.getElementById("download");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    if (window.location.hash !== "#download") {
      history.pushState(null, "", "#download");
    }
  }
}

