/**
 * Off-screen decoy field. Kept out of the tab order and hidden from assistive
 * tech, but still present in the DOM so bots fill it in.
 */
export function HoneypotField() {
  return (
    <div className="honeypot" aria-hidden="true">
      <label htmlFor="company">Company (leave this field empty)</label>
      <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
