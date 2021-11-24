WA.room.onLeaveZone('trigger', () => {
    
	WA.room.showLayer('roof'); 
});

WA.room.onEnterZone('trigger', () => {
   
		WA.room.hideLayer('roof');
})
