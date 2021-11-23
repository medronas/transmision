WA.room.onLeaveZone('rooftop1', () => {
    
	WA.room.showLayer('roof'); 
});

WA.room.onEnterZone('rooftop1', () => {
   
		WA.room.hideLayer('roof');
})
