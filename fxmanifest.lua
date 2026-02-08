fx_version 'cerulean'
lua54 'yes'

name 'pixt-loadscreen'
description 'Pixel Tuner Loadscreen Script.'
author 'Pixel Tuner'
version '1.0.0'
-- github ''
games {"gta5"}

server_script {"server.lua"}

files {
    'ui/build/index.html', 'ui/build/images/background-1.jpg',
    'ui/build/images/music.jpeg', 'ui/build/images/santiago-p-g-3.jpg',
    'ui/build/assets/*.*'
}

loadscreen 'ui/build/index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'
