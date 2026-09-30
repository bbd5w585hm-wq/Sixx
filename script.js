* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;

  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Arial,
    sans-serif;

  background:
    linear-gradient(
      135deg,
      #fff1f5,
      #ffe1eb,
      #fff7fa
    );

  color: #4a2833;

  overflow-x: hidden;
}


/* CARD */

.card {
  width: min(560px, 100%);

  min-height: 600px;

  padding: 42px 34px;

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.92);

  box-shadow:
    0 20px 60px rgba(160, 65, 95, 0.18);

  text-align: center;

  position: relative;

  z-index: 2;
}


/* PAGES */

.page {
  display: none;

  animation: fadeIn 0.35s ease;
}

.page.active {
  display: block;
}


/* TEXT */

.emoji {
  font-size: 64px;
  margin-bottom: 14px;
}

.eyebrow {
  color: #c45b7a;

  font-weight: 700;

  letter-spacing: 0.05em;

  margin: 0 0 12px;
}

h1 {
  font-size: clamp(32px, 7vw, 48px);

  margin: 8px 0 22px;
}

h2 {
  font-size: clamp(24px, 5vw, 32px);

  margin: 18px 0;
}

.question,
.subtext {
  color: #765461;

  line-height: 1.6;
}

.question {
  font-size: 18px;
}


/* INPUT */

label {
  display: block;

  text-align: left;

  margin: 20px 0 8px;

  font-weight: 700;
}

input {
  width: 100%;

  padding: 15px 16px;

  border: 2px solid #f0c8d5;

  border-radius: 14px;

  font-size: 17px;

  outline: none;

  background: #fffafd;
}

input:focus {
  border-color: #d96b8d;
}


/* BUTTONS */

button {
  border: 0;

  cursor: pointer;

  font: inherit;

  font-weight: 700;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}


/* PAGE 1 */

.buttons {
  position: relative;

  min-height: 130px;

  margin-top: 28px;
}

.yes-btn,
.no-btn,
.next-btn,
.send-btn {
  padding: 15px 26px;

  border-radius: 999px;
}

.yes-btn {
  background: #e85d86;

  color: white;

  box-shadow:
    0 10px 25px rgba(232, 93, 134, 0.28);

  margin-right: 10px;
}

.yes-btn:hover,
.send-btn:hover,
.next-btn:hover {
  transform: translateY(-2px);
}


/* NO BUTTON */

.no-btn {
  background: #f5e8ed;

  color: #754b59;

  position: absolute;

  left: 58%;

  top: 0;

  transition:
    left 0.18s ease,
    top 0.18s ease,
    transform 0.18s ease;
}


/* NEXT / SEND */

.next-btn,
.send-btn {
  margin-top: 28px;

  background: #d95f83;

  color: white;

  box-shadow:
    0 10px 25px rgba(217, 95, 131, 0.25);
}


/* OPTIONS */

.option-grid {
  display: grid;

  gap: 12px;

  margin-top: 24px;
}

.location-grid,
.activity-grid {
  grid-template-columns: repeat(2, 1fr);
}

.option-grid button {
  padding: 16px 12px;

  border-radius: 16px;

  background: #fff1f5;

  color: #633845;

  border: 2px solid transparent;
}

.option-grid button:hover {
  transform: translateY(-2px);
}

.option-grid button.selected {
  background: #f8c2d2;

  border-color: #d95f83;

  box-shadow:
    0 7px 18px rgba(217, 95, 131, 0.15);
}


/* SUMMARY */

.summary {
  margin: 28px 0;

  padding: 22px;

  border-radius: 20px;

  background: #fff1f5;

  text-align: left;

  line-height: 1.7;
}

.summary p {
  margin: 8px 0;
}

.final-message {
  font-size: 20px;

  font-weight: 700;

  color: #c34e72;
}

.status {
  min-height: 24px;

  margin-top: 14px;

  color: #b33d60;

  font-size: 14px;
}


/* HEARTS */

.hearts::before,
.hearts::after {
  content: "♡  ♥  ♡  ♥  ♡";

  position: fixed;

  color: rgba(217, 95, 131, 0.12);

  font-size: 55px;

  letter-spacing: 30px;

  white-space: nowrap;

  z-index: 0;

  pointer-events: none;
}

.hearts::before {
  top: 8%;

  left: -10%;

  transform: rotate(-10deg);
}

.hearts::after {
  bottom: 8%;

  right: -15%;

  transform: rotate(8deg);
}


/* ANIMATION */

@keyframes fadeIn {

  from {
    opacity: 0;

    transform: translateY(8px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }

}


/* MOBILE */

@media (max-width: 520px) {

  body {
    padding: 14px;
  }

  .card {
    min-height: 0;

    padding: 32px 20px;

    border-radius: 24px;
  }

  .location-grid,
  .activity-grid {
    grid-template-columns: 1fr 1fr;
  }

  .no-btn {
    left: 60%;
  }

