-- client/lua/client.lua
RegisterNetEvent('openUrl')
AddEventHandler('openUrl', function(url)
    -- Open the URL using FiveM's native function
    TriggerEvent('chat:addMessage', {
        color = {255, 0, 0},
        args = {'[Loading Screen] Opening URL: ' .. url}
    })
    TriggerEvent('openUrl', url)
end)