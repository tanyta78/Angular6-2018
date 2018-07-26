export class CounterService{
	activeChanges=0;
	inactiveChanges=0;

	constructor(){}

	countActiveChanges(){
		this.activeChanges++;
		console.log(`Actual active changes ${this.activeChanges}`);
	}

	countInactiveChanges(){
		this.inactiveChanges++;
		console.log(`Actual inactive changes ${this.inactiveChanges}`);
	}

}