import { Controller } from "@hotwired/stimulus";

/**
 * Mobile menu controller.
 * --------------------------------------------------------------------------
 * Wired up in base.html:
 *   <header data-controller="menu">
 *     <button data-action="menu#toggle">…</button>
 *     <ul data-menu-target="menu">…</ul>
 *
 * `toggle` simply flips Tailwind's `hidden` utility on the links panel.
 */
export default class extends Controller {
  static targets = ["menu"];

  toggle() {
    this.menuTarget.classList.toggle("hidden");
  }
}
