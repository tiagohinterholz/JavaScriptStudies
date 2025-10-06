import { calculate } from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { clearBtn, handleButtonPres, handleTypping } from "./keyhandlers.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', handleButtonPres)
})

document.getElementById('clear').addEventListener('click', clearBtn)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('input').addEventListener('keydown', handleTypping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)