WA.room.onLeaveZone('trigger', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot'),
	WA.room.showLayer('roof1'); 
});

WA.room.onEnterZone('trigger', () => {
   WA.chat.sendChatMessage("Welcome!", 'Mr Robot'),
		WA.room.hideLayer('roof1');
})
