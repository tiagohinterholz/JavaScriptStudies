const os = require('node:os')
const fs = require('node:fs')
const path = require('node:path')

const systemPlatformMap = {
    "win32": "Windows",
    "linux": "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
}

function getSystemInfo() {
    const system = systemPlatformMap[os.platform()]
    const arch = os.arch()
    const cpu = os.cpus()[0].model

    const upTimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
    const upTimeDaysInSeconds = upTimeDays * 24 * 60 * 60
    
    const upTimeHours = Math.floor((os.uptime() - upTimeDaysInSeconds) / 60 / 60)
    const upTimeHoursInSeconds = upTimeHours * 60 * 60

    const upTimeMinutes = Math.floor((os.uptime() - upTimeDaysInSeconds - upTimeHoursInSeconds) / 60)
    const upTimeMinutesInSeconds = upTimeMinutes * 60

    const upTimeSecs = Math.floor(os.uptime() - upTimeDaysInSeconds - upTimeHoursInSeconds - upTimeMinutesInSeconds)

    const upTime = `${upTimeDays}d:${upTimeHours}h:${upTimeMinutes}min:${upTimeSecs}s`

    const ramTotal = os.totalmem() /1024 / 1024 / 1024
    const ramUsed = (os.totalmem() - os.freemem()) /1024 / 1024 / 1024
    const ramPercent = Math.round((ramUsed/ramTotal) * 100)

    return {system, arch, cpu, upTime, ramUsed, ramTotal, ramPercent}
}

function printLog({system, arch, cpu, upTime, ramUsed, ramTotal, ramPercent}) {
    
    console.clear()
    console.log("DETALHES DO SISTEMA")
    console.log(`Sistema operacional: ${system}`)
    console.log(`Arquitetura: ${arch}`)
    console.log(`Modelo da CPU: ${cpu}`)
    console.log(`Tempo de atividade do sistema: ${upTime}`)
    console.log(`Uso de memoria RAM: ${ramUsed.toFixed(2)} / ${ramTotal.toFixed(2)} GB (${ramPercent}%)`)
}

function saveLog({system, arch, cpu, upTime, ramUsed, ramTotal, ramPercent}) {
    const log = `DETALHES DO SISTEMA | Sistema operacional: ${system} | Arquitetura: ${arch} | Modelo da CPU: ${cpu} | Tempo de atividade do sistema: ${upTime} | Uso de memoria RAM: ${ramUsed.toFixed(2)} / ${ramTotal.toFixed(2)} GB (${ramPercent}%)\n---\n`
    
    const logPath = path.join(logDir, 'log.txt')
    fs.appendFileSync(logPath, log)
     
}

const logDir = path.join('/home/tiago-f-hinterholz/Documentos', 'log')
    if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir)
    }

setInterval(() => {
    const systemInfo = getSystemInfo()
    printLog(systemInfo)
    saveLog(systemInfo)
}, 1000)