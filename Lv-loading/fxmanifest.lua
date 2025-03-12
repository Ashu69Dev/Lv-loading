server_script 'hunk_sv.lua'
client_script 'hunk.lua'
fx_version 'cerulean'
game 'gta5'
author 'Lee'

loadscreen_manual_shutdown "yes"
loadscreen 'client/index.html'
loadscreen_cursor "yes"

files {
    'client/index.html',
    'client/css/style.css',
    'client/js/script.js',
    'client/img/*.png',
    'client/img/*.webp',
    'client/audio/*.mp3'
}

server_script 'server/server.lua'
client_script 'client/lua/client.lua'

dependency {
    'spawnmanager'
}