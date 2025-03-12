-- server/server.lua
RegisterNetEvent('openUrl')
AddEventHandler('openUrl', function(url)
    -- Log the URL being opened
    print('[Loading Screen] Opening URL: ' .. url)

    -- Open the URL for the player
    TriggerClientEvent('openUrl', source, url)
end)