WA.room.onLeaveZone('trigger', () => {
  
	WA.room.showLayer('roof'); 
});

WA.room.onEnterZone('trigger', () => {
   
		WA.room.hideLayer('roof');
});


WA.room.onLeaveZone('party', () => {
    
	WA.room.showLayer('partyroof'); 
});

WA.room.onEnterZone('party', () => {
   
		WA.room.hideLayer('partyroof');
})
