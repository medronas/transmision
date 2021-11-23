WA.room.onLeaveZone('trigger', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot'),
	WA.room.showLayer('roof'); 
})

WA.room.onEnterZone('trigger', () => {
   WA.chat.sendChatMessage("Welcome!", 'Mr Robot'),
		WA.room.hideLayer('roof');
})


WA.room.onLeaveZone('party', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot'),
	WA.room.showLayer('partyroof'); 
})

WA.room.onEnterZone('party', () => {
   WA.chat.sendChatMessage("Welcome!", 'Mr Robot'),
		WA.room.hideLayer('partyroof');
})
