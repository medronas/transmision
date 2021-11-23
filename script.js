WA.room.onLeaveZone('rooftop1', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot'),
	WA.room.showLayer('roof'); 
});

WA.room.onEnterZone('rooftop1', () => {
   WA.chat.sendChatMessage("Welcome!", 'Mr Robot'),
		WA.room.hideLayer('roof');
})
