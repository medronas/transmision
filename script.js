WA.room.onLeaveZone('trigger', () => {
    
	WA.room.showLayer('roof'); 
});

WA.room.onEnterZone('trigger', () => {
   
		WA.room.hideLayer('roof');
});

WA.room.onLeaveZone('partytrigger', () => {
    
	WA.room.showLayer('partyroof'); 
});

WA.room.onEnterZone('partytrigger', () => {
    
		WA.room.hideLayer('partyroof');
})