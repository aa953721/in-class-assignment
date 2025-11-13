# Genre Spin Quiz

A simple multi-page web quiz where you spin a colorful genre wheel, answer five trivia questions from the selected genre, then view your score and optionally play again.

## Features
- Animated spinning color wheel of genres (no external libraries)
- Randomly selects a genre and persists it using `localStorage`
- Pulls 5 random questions from a genre-specific question bank
- Immediate feedback (correct / incorrect highlighting)
- Results page shows score and offers replay
- Responsive layout and accessible announcements for genre selection

## Files
- `index.html` – Genre wheel and start interface
- `quiz.html` – Quiz flow (5 questions)
- `results.html` – Score display & replay
- `assets/questions.js` – Question bank
- `assets/wheel.js` – Wheel construction & spin logic
- `assets/quiz.js` – Quiz interaction logic
- `assets/results.js` – Results page script
- `assets/styles.css` – Styling

## How to Run
Simply open `index.html` in a modern browser.

On Windows (PowerShell):
```powershell
Start-Process .\index.html
```

Or drag the file into a browser window.

## Customization
- Add / remove genres: edit the `genres` array in `assets/wheel.js` and add corresponding questions in `assets/questions.js`.
- Change number of questions: adjust slice size in `assets/quiz.js` (`selected=questions.slice(0,5)` and related total references).
- Styling tweaks: modify `assets/styles.css`.

## Accessibility Notes
- Selected genre announced in a live region (`aria-live="polite"`).
- Focus states rely on browser defaults; extend in CSS as needed.

Enjoy spinning and learning!
